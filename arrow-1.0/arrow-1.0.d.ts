
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
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
enum Error {
    /**
     * Out of memory error.
     */
    OUT_OF_MEMORY,
    /**
     * Key error.
     */
    KEY,
    /**
     * Type error.
     */
    TYPE,
    /**
     * Invalid value error.
     */
    INVALID,
    /**
     * IO error.
     */
    IO,
    /**
     * Capacity error.
     */
    CAPACITY,
    /**
     * Index error.
     */
    INDEX,
    /**
     * Unknown error.
     */
    UNKNOWN,
    /**
     * The feature is not implemented.
     */
    NOT_IMPLEMENTED,
    /**
     * Serialization error.
     */
    SERIALIZATION,
    /**
     * Error generating code for expression evaluation
     *   in Gandiva.
     */
    CODE_GENERATION,
    /**
     * Validation errors in expression given for code generation.
     */
    EXPRESSION_VALIDATION,
    /**
     * Execution error while evaluating the expression against a record batch.
     */
    EXECUTION,
    /**
     * Item already exists error.
     */
    ALREADY_EXISTS,
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
const VERSION_MAJOR: number
/**
 * The micro version.
 */
const VERSION_MICRO: number
/**
 * The minor version.
 */
const VERSION_MINOR: number
/**
 * The version tag. Normally, it's an empty string. It's "SNAPSHOT"
 * for snapshot version.
 */
const VERSION_TAG: string | null
function error_quark(): GLib.Quark
/**
 * Finalize the S3 APIs.
 * @returns %TRUE on success, %FALSE on error.
 */
function s3_finalize(): boolean
/**
 * Normally, you don't need to call this function because the S3 APIs
 * are initialized with the default options automatically. If you want
 * to call this function, you must call this function before you use
 * any #GArrowS3FileSystem related APIs.
 * @param options Options to initialize the S3 APIs.
 * @returns %TRUE on success, %FALSE on error.
 */
function s3_initialize(options: S3GlobalOptions | null): boolean
function s3_is_enabled(): boolean
module File {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface File {

    // Owm methods of Arrow-1.0.Arrow.File

    close(): boolean
    get_mode(): FileMode
    is_closed(): boolean
    tell(): number

    // Class property signals of Arrow-1.0.Arrow.File

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class File extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.File

    static name: string
    static $gtype: GObject.GType<File>

    // Constructors of Arrow-1.0.Arrow.File

    constructor(config?: File.ConstructorProperties) 
    _init(config?: File.ConstructorProperties): void
}

module Readable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Readable {

    // Owm methods of Arrow-1.0.Arrow.Readable

    read(n_bytes: number): Buffer | null
    read_bytes(n_bytes: number): GLib.Bytes | null

    // Class property signals of Arrow-1.0.Arrow.Readable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Readable extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Readable

    static name: string
    static $gtype: GObject.GType<Readable>

    // Constructors of Arrow-1.0.Arrow.Readable

    constructor(config?: Readable.ConstructorProperties) 
    _init(config?: Readable.ConstructorProperties): void
}

module Writable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Writable {

    // Owm methods of Arrow-1.0.Arrow.Writable

    /**
     * It ensures writing all data on memory to storage.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    flush(): boolean
    write(data: Uint8Array): boolean

    // Class property signals of Arrow-1.0.Arrow.Writable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Writable extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Writable

    static name: string
    static $gtype: GObject.GType<Writable>

    // Constructors of Arrow-1.0.Arrow.Writable

    constructor(config?: Writable.ConstructorProperties) 
    _init(config?: Writable.ConstructorProperties): void
}

module WritableFile {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface WritableFile {

    // Owm methods of Arrow-1.0.Arrow.WritableFile

    write_at(position: number, data: Uint8Array): boolean

    // Class property signals of Arrow-1.0.Arrow.WritableFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WritableFile extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.WritableFile

    static name: string
    static $gtype: GObject.GType<WritableFile>

    // Constructors of Arrow-1.0.Arrow.WritableFile

    constructor(config?: WritableFile.ConstructorProperties) 
    _init(config?: WritableFile.ConstructorProperties): void
}

module AggregateNodeOptions {

    // Constructor properties interface

    interface ConstructorProperties extends ExecuteNodeOptions.ConstructorProperties {
    }

}

interface AggregateNodeOptions {

    // Own fields of Arrow-1.0.Arrow.AggregateNodeOptions

    parent_instance: ExecuteNodeOptions & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.AggregateNodeOptions

    connect(sigName: "notify::options", callback: (($obj: AggregateNodeOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: AggregateNodeOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AggregateNodeOptions extends ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.AggregateNodeOptions

    static name: string
    static $gtype: GObject.GType<AggregateNodeOptions>

    // Constructors of Arrow-1.0.Arrow.AggregateNodeOptions

    constructor(config?: AggregateNodeOptions.ConstructorProperties) 
    constructor(aggregations: Aggregation[], keys: string[] | null) 
    static new(aggregations: Aggregation[], keys: string[] | null): AggregateNodeOptions
    _init(config?: AggregateNodeOptions.ConstructorProperties): void
}

module Aggregation {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Aggregation

        /**
         * The function name to aggregate.
         */
        "function"?: string | null
        /**
         * The input field name of aggregate function.
         */
        input?: string | null
        /**
         * The options of aggregate function.
         */
        options?: FunctionOptions | null
        /**
         * The output field name of aggregate function.
         */
        output?: string | null
    }

}

interface Aggregation {

    // Own properties of Arrow-1.0.Arrow.Aggregation

    /**
     * The function name to aggregate.
     */
    readonly "function": string | null
    /**
     * The input field name of aggregate function.
     */
    readonly input: string | null
    /**
     * The options of aggregate function.
     */
    readonly options: FunctionOptions
    /**
     * The output field name of aggregate function.
     */
    readonly output: string | null

    // Own fields of Arrow-1.0.Arrow.Aggregation

    parent_instance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.Aggregation

    connect(sigName: "notify::function", callback: (($obj: Aggregation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::function", callback: (($obj: Aggregation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::function", ...args: any[]): void
    connect(sigName: "notify::input", callback: (($obj: Aggregation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input", callback: (($obj: Aggregation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input", ...args: any[]): void
    connect(sigName: "notify::options", callback: (($obj: Aggregation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: Aggregation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::output", callback: (($obj: Aggregation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output", callback: (($obj: Aggregation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Aggregation extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Aggregation

    static name: string
    static $gtype: GObject.GType<Aggregation>

    // Constructors of Arrow-1.0.Arrow.Aggregation

    constructor(config?: Aggregation.ConstructorProperties) 
    constructor(function_: string | null, options: FunctionOptions | null, input: string | null, output: string | null) 
    static new(function_: string | null, options: FunctionOptions | null, input: string | null, output: string | null): Aggregation
    _init(config?: Aggregation.ConstructorProperties): void
}

module Array {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Array

        array?: any | null
        buffer1?: Buffer | null
        buffer2?: Buffer | null
        null_bitmap?: Buffer | null
        parent?: Array | null
        value_data_type?: DataType | null
    }

}

interface Array {

    // Own properties of Arrow-1.0.Arrow.Array

    readonly array: any
    readonly buffer1: Buffer
    readonly buffer2: Buffer
    readonly null_bitmap: Buffer
    readonly parent: Array
    readonly value_data_type: DataType

    // Own fields of Arrow-1.0.Arrow.Array

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Array

    cast(target_data_type: DataType, options: CastOptions | null): Array | null
    concatenate(other_arrays: Array[]): Array | null
    count(options: CountOptions | null): number
    count_values(): StructArray | null
    dictionary_encode(): DictionaryArray | null
    diff_unified(other_array: Array): string | null
    equal(other_array: Array): boolean
    equal_approx(other_array: Array): boolean
    equal_options(other_array: Array, options: EqualOptions | null): boolean
    equal_range(start_index: number, other_array: Array, other_start_index: number, end_index: number, options: EqualOptions | null): boolean
    export(): [ /* returnType */ boolean, /* c_abi_array */ any | null, /* c_abi_schema */ any | null ]
    filter(filter: BooleanArray, options: FilterOptions | null): Array | null
    get_length(): number
    get_n_nulls(): number
    get_null_bitmap(): Buffer | null
    get_offset(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    is_in(right: Array): BooleanArray | null
    is_in_chunked_array(right: ChunkedArray): BooleanArray | null
    is_null(i: number): boolean
    is_valid(i: number): boolean
    slice(offset: number, length: number): Array
    sort_indices(order: SortOrder): UInt64Array | null
    sort_to_indices(): UInt64Array | null
    take(indices: Array, options: TakeOptions | null): Array | null
    take_chunked_array(indices: ChunkedArray, options: TakeOptions | null): ChunkedArray | null
    to_string(): string | null
    unique(): Array | null
    view(return_type: DataType): Array | null

    // Class property signals of Arrow-1.0.Arrow.Array

    connect(sigName: "notify::array", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Array extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Array

    static name: string
    static $gtype: GObject.GType<Array>

    // Constructors of Arrow-1.0.Arrow.Array

    constructor(config?: Array.ConstructorProperties) 
    _init(config?: Array.ConstructorProperties): void
    static import(c_abi_array: any, data_type: DataType): Array | null
}

module ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ArrayBuilder

        array_builder?: any | null
    }

}

interface ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.ArrayBuilder

    readonly array_builder: any

    // Own fields of Arrow-1.0.Arrow.ArrayBuilder

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ArrayBuilder

    append_empty_value(): boolean
    /**
     * Append multiple empty values at once. It's more efficient than multiple
     * garrow_array_builder_append_empty_value() calls.
     * @param n The number of null values to be appended.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_empty_values(n: number): boolean
    append_null(): boolean
    /**
     * Append multiple nulls at once. It's more efficient than multiple
     * garrow_array_builder_append_null() calls.
     * @param n The number of null values to be appended.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_nulls(n: number): boolean
    finish(): Array
    get_capacity(): number
    get_length(): number
    get_n_nulls(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    reserve(additional_capacity: number): boolean
    reset(): void
    resize(capacity: number): boolean

    // Class property signals of Arrow-1.0.Arrow.ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ArrayBuilder extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ArrayBuilder

    static name: string
    static $gtype: GObject.GType<ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.ArrayBuilder

    constructor(config?: ArrayBuilder.ConstructorProperties) 
    _init(config?: ArrayBuilder.ConstructorProperties): void
}

module ArrayDatum {

    // Constructor properties interface

    interface ConstructorProperties extends Datum.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ArrayDatum

        value?: Array | null
    }

}

interface ArrayDatum {

    // Own properties of Arrow-1.0.Arrow.ArrayDatum

    readonly value: Array

    // Own fields of Arrow-1.0.Arrow.ArrayDatum

    parent_instance: Datum & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.ArrayDatum

    connect(sigName: "notify::value", callback: (($obj: ArrayDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ArrayDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::datum", callback: (($obj: ArrayDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datum", callback: (($obj: ArrayDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::datum", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ArrayDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.ArrayDatum

    static name: string
    static $gtype: GObject.GType<ArrayDatum>

    // Constructors of Arrow-1.0.Arrow.ArrayDatum

    constructor(config?: ArrayDatum.ConstructorProperties) 
    constructor(value: Array) 
    static new(value: Array): ArrayDatum
    _init(config?: ArrayDatum.ConstructorProperties): void
}

module ArraySortOptions {

    // Constructor properties interface

    interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ArraySortOptions

        /**
         * How to order values.
         */
        order?: SortOrder | null
    }

}

interface ArraySortOptions {

    // Own properties of Arrow-1.0.Arrow.ArraySortOptions

    /**
     * How to order values.
     */
    order: SortOrder

    // Own fields of Arrow-1.0.Arrow.ArraySortOptions

    parent_instance: FunctionOptions & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ArraySortOptions

    equal(other_options: ArraySortOptions): boolean

    // Overloads of equal

    equal(other_options: FunctionOptions | null): boolean

    // Class property signals of Arrow-1.0.Arrow.ArraySortOptions

    connect(sigName: "notify::order", callback: (($obj: ArraySortOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: (($obj: ArraySortOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::order", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ArraySortOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.ArraySortOptions

    static name: string
    static $gtype: GObject.GType<ArraySortOptions>

    // Constructors of Arrow-1.0.Arrow.ArraySortOptions

    constructor(config?: ArraySortOptions.ConstructorProperties) 
    constructor(order: SortOrder) 
    static new(order: SortOrder): ArraySortOptions
    _init(config?: ArraySortOptions.ConstructorProperties): void
}

module BaseBinaryScalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.BaseBinaryScalar

        /**
         * The value of the scalar.
         */
        value?: Buffer | null
    }

}

interface BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.BaseBinaryScalar

    /**
     * The value of the scalar.
     */
    readonly value: Buffer

    // Own fields of Arrow-1.0.Arrow.BaseBinaryScalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.BaseBinaryScalar

    get_value(): Buffer

    // Class property signals of Arrow-1.0.Arrow.BaseBinaryScalar

    connect(sigName: "notify::value", callback: (($obj: BaseBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: BaseBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: BaseBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: BaseBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: BaseBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: BaseBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BaseBinaryScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.BaseBinaryScalar

    static name: string
    static $gtype: GObject.GType<BaseBinaryScalar>

    // Constructors of Arrow-1.0.Arrow.BaseBinaryScalar

    constructor(config?: BaseBinaryScalar.ConstructorProperties) 
    _init(config?: BaseBinaryScalar.ConstructorProperties): void
}

module BaseListScalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.BaseListScalar

        /**
         * The value of the scalar.
         */
        value?: Array | null
    }

}

interface BaseListScalar {

    // Own properties of Arrow-1.0.Arrow.BaseListScalar

    /**
     * The value of the scalar.
     */
    readonly value: Array

    // Own fields of Arrow-1.0.Arrow.BaseListScalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.BaseListScalar

    get_value(): Array

    // Class property signals of Arrow-1.0.Arrow.BaseListScalar

    connect(sigName: "notify::value", callback: (($obj: BaseListScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: BaseListScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: BaseListScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: BaseListScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: BaseListScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: BaseListScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BaseListScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.BaseListScalar

    static name: string
    static $gtype: GObject.GType<BaseListScalar>

    // Constructors of Arrow-1.0.Arrow.BaseListScalar

    constructor(config?: BaseListScalar.ConstructorProperties) 
    _init(config?: BaseListScalar.ConstructorProperties): void
}

module BinaryArray {

    // Constructor properties interface

    interface ConstructorProperties extends Array.ConstructorProperties {
    }

}

interface BinaryArray {

    // Own fields of Arrow-1.0.Arrow.BinaryArray

    parent_instance: Array & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.BinaryArray

    get_buffer(): Buffer
    get_data_buffer(): Buffer
    get_offsets_buffer(): Buffer
    get_value(i: number): GLib.Bytes

    // Class property signals of Arrow-1.0.Arrow.BinaryArray

    connect(sigName: "notify::array", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: BinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BinaryArray extends Array {

    // Own properties of Arrow-1.0.Arrow.BinaryArray

    static name: string
    static $gtype: GObject.GType<BinaryArray>

    // Constructors of Arrow-1.0.Arrow.BinaryArray

    constructor(config?: BinaryArray.ConstructorProperties) 
    constructor(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number): BinaryArray
    _init(config?: BinaryArray.ConstructorProperties): void
}

module BinaryArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface BinaryArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.BinaryArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.BinaryArrayBuilder

    append(value: Uint8Array): boolean
    append_value(value: Uint8Array): boolean
    append_value_bytes(value: GLib.Bytes): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: GLib.Bytes[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.BinaryArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: BinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: BinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BinaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.BinaryArrayBuilder

    static name: string
    static $gtype: GObject.GType<BinaryArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.BinaryArrayBuilder

    constructor(config?: BinaryArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): BinaryArrayBuilder
    _init(config?: BinaryArrayBuilder.ConstructorProperties): void
}

module BinaryDataType {

    // Constructor properties interface

    interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

interface BinaryDataType {

    // Own fields of Arrow-1.0.Arrow.BinaryDataType

    parent_instance: DataType & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.BinaryDataType

    connect(sigName: "notify::data-type", callback: (($obj: BinaryDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: BinaryDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BinaryDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.BinaryDataType

    static name: string
    static $gtype: GObject.GType<BinaryDataType>

    // Constructors of Arrow-1.0.Arrow.BinaryDataType

    constructor(config?: BinaryDataType.ConstructorProperties) 
    constructor() 
    static new(): BinaryDataType
    _init(config?: BinaryDataType.ConstructorProperties): void
}

module BinaryDictionaryArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface BinaryDictionaryArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    append_array(array: BinaryArray): boolean
    /**
     * Append dictionary indices directly without modifying the internal memo.
     * @param values The array of indices.
     * @param is_valids The array of   %TRUE or %FALSE that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_indices(values: number[], is_valids: boolean[] | null): boolean
    append_value(value: Uint8Array): boolean
    append_value_bytes(value: GLib.Bytes): boolean
    finish_delta(): [ /* returnType */ boolean, /* out_indices */ Array, /* out_delta */ Array ]
    get_dictionary_length(): number
    insert_memo_values(values: BinaryArray): boolean
    /**
     * Reset and also clear accumulated dictionary values in memo table.
     */
    reset_full(): void

    // Class property signals of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: BinaryDictionaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: BinaryDictionaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BinaryDictionaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    static name: string
    static $gtype: GObject.GType<BinaryDictionaryArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    constructor(config?: BinaryDictionaryArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): BinaryDictionaryArrayBuilder
    _init(config?: BinaryDictionaryArrayBuilder.ConstructorProperties): void
}

module BinaryScalar {

    // Constructor properties interface

    interface ConstructorProperties extends BaseBinaryScalar.ConstructorProperties {
    }

}

interface BinaryScalar {

    // Own fields of Arrow-1.0.Arrow.BinaryScalar

    parent_instance: BaseBinaryScalar & Scalar & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.BinaryScalar

    connect(sigName: "notify::value", callback: (($obj: BinaryScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: BinaryScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: BinaryScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: BinaryScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: BinaryScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: BinaryScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BinaryScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.BinaryScalar

    static name: string
    static $gtype: GObject.GType<BinaryScalar>

    // Constructors of Arrow-1.0.Arrow.BinaryScalar

    constructor(config?: BinaryScalar.ConstructorProperties) 
    constructor(value: Buffer) 
    static new(value: Buffer): BinaryScalar
    _init(config?: BinaryScalar.ConstructorProperties): void
}

module BooleanArray {

    // Constructor properties interface

    interface ConstructorProperties extends PrimitiveArray.ConstructorProperties {
    }

}

interface BooleanArray {

    // Own fields of Arrow-1.0.Arrow.BooleanArray

    parent_instance: PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.BooleanArray

    and(right: BooleanArray): BooleanArray
    get_value(i: number): boolean
    get_values(): boolean[]
    invert(): BooleanArray
    or(right: BooleanArray): BooleanArray
    xor(right: BooleanArray): BooleanArray

    // Class property signals of Arrow-1.0.Arrow.BooleanArray

    connect(sigName: "notify::array", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: BooleanArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BooleanArray extends PrimitiveArray {

    // Own properties of Arrow-1.0.Arrow.BooleanArray

    static name: string
    static $gtype: GObject.GType<BooleanArray>

    // Constructors of Arrow-1.0.Arrow.BooleanArray

    constructor(config?: BooleanArray.ConstructorProperties) 
    constructor(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): BooleanArray
    _init(config?: BooleanArray.ConstructorProperties): void
}

module BooleanArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface BooleanArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.BooleanArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.BooleanArrayBuilder

    append(value: boolean): boolean
    append_value(value: boolean): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of boolean.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: boolean[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.BooleanArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: BooleanArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: BooleanArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BooleanArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.BooleanArrayBuilder

    static name: string
    static $gtype: GObject.GType<BooleanArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.BooleanArrayBuilder

    constructor(config?: BooleanArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): BooleanArrayBuilder
    _init(config?: BooleanArrayBuilder.ConstructorProperties): void
}

module BooleanDataType {

    // Constructor properties interface

    interface ConstructorProperties extends FixedWidthDataType.ConstructorProperties {
    }

}

interface BooleanDataType {

    // Own fields of Arrow-1.0.Arrow.BooleanDataType

    parent_instance: FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.BooleanDataType

    connect(sigName: "notify::data-type", callback: (($obj: BooleanDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: BooleanDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BooleanDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.BooleanDataType

    static name: string
    static $gtype: GObject.GType<BooleanDataType>

    // Constructors of Arrow-1.0.Arrow.BooleanDataType

    constructor(config?: BooleanDataType.ConstructorProperties) 
    constructor() 
    static new(): BooleanDataType
    _init(config?: BooleanDataType.ConstructorProperties): void
}

module BooleanScalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface BooleanScalar {

    // Own fields of Arrow-1.0.Arrow.BooleanScalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.BooleanScalar

    get_value(): boolean

    // Class property signals of Arrow-1.0.Arrow.BooleanScalar

    connect(sigName: "notify::data-type", callback: (($obj: BooleanScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: BooleanScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: BooleanScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: BooleanScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BooleanScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.BooleanScalar

    static name: string
    static $gtype: GObject.GType<BooleanScalar>

    // Constructors of Arrow-1.0.Arrow.BooleanScalar

    constructor(config?: BooleanScalar.ConstructorProperties) 
    constructor(value: boolean) 
    static new(value: boolean): BooleanScalar
    _init(config?: BooleanScalar.ConstructorProperties): void
}

module Buffer {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Buffer

        buffer?: any | null
        data?: GLib.Bytes | null
        parent?: Buffer | null
    }

}

interface Buffer {

    // Own properties of Arrow-1.0.Arrow.Buffer

    readonly buffer: any
    readonly data: GLib.Bytes
    readonly parent: Buffer

    // Own fields of Arrow-1.0.Arrow.Buffer

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Buffer

    copy(start: number, size: number): Buffer | null
    equal(other_buffer: Buffer): boolean
    equal_n_bytes(other_buffer: Buffer, n_bytes: number): boolean
    get_capacity(): number
    get_data(): GLib.Bytes

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string | null): any | null
    get_mutable_data(): GLib.Bytes | null
    get_parent(): Buffer | null
    get_size(): number
    is_mutable(): boolean
    slice(offset: number, size: number): Buffer

    // Class property signals of Arrow-1.0.Arrow.Buffer

    connect(sigName: "notify::buffer", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Buffer extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Buffer

    static name: string
    static $gtype: GObject.GType<Buffer>

    // Constructors of Arrow-1.0.Arrow.Buffer

    constructor(config?: Buffer.ConstructorProperties) 
    constructor(data: Uint8Array) 
    static new(data: Uint8Array): Buffer
    static new_bytes(data: GLib.Bytes): Buffer
    _init(config?: Buffer.ConstructorProperties): void
}

module BufferInputStream {

    // Constructor properties interface

    interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, SeekableInputStream.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.BufferInputStream

        buffer?: Buffer | null
    }

}

interface BufferInputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.BufferInputStream

    readonly buffer: Buffer

    // Own fields of Arrow-1.0.Arrow.BufferInputStream

    parent_instance: SeekableInputStream & InputStream & Gio.InputStream & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.BufferInputStream

    get_buffer(): Buffer

    // Conflicting methods

    close(): boolean
    /**
     * Closes the stream, releasing resources related to it.
     * 
     * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
     * Closing a stream multiple times will not return an error.
     * 
     * Streams will be automatically closed when the last reference
     * is dropped, but you might want to call this function to make sure
     * resources are released as early as possible.
     * 
     * Some streams might keep the backing store of the stream (e.g. a file descriptor)
     * open after the stream is closed. See the documentation for the individual
     * stream for details.
     * 
     * On failure the first error that happened will be reported, but the close
     * operation will finish as much as possible. A stream that failed to
     * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
     * is important to check and report the error to the user.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * Cancelling a close will still leave the stream closed, but some streams
     * can use a faster close that doesn't block to e.g. check errors.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE on success, %FALSE on failure
     */
    close(cancellable: Gio.Cancellable | null): boolean
    read(n_bytes: number): Buffer | null
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * If count is zero returns zero and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * The returned `buffer` is not a nul-terminated string, it can contain nul bytes
     * at any position, and this function doesn't nul-terminate the `buffer`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns Number of bytes read, or -1 on error, or 0 on end of file.
     */
    read(cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    read_bytes(n_bytes: number): GLib.Bytes | null
    /**
     * Like g_input_stream_read(), this tries to read `count` bytes from
     * the stream in a blocking fashion. However, rather than reading into
     * a user-supplied buffer, this will create a new #GBytes containing
     * the data that was read. This may be easier to use from language
     * bindings.
     * 
     * If count is zero, returns a zero-length #GBytes and does nothing. A
     * value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, a new #GBytes is returned. It is not an error if the
     * size of this object is not the same as the requested size, as it
     * can happen e.g. near the end of a file. A zero-length #GBytes is
     * returned on end of file (or if `count` is zero), but never
     * otherwise.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error %NULL is returned and `error` is set accordingly.
     * @param count maximum number of bytes that will be read from the stream. Common values include 4096 and 8192.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns a new #GBytes, or %NULL on error
     */
    read_bytes(count: number, cancellable: Gio.Cancellable | null): GLib.Bytes

    // Class property signals of Arrow-1.0.Arrow.BufferInputStream

    connect(sigName: "notify::buffer", callback: (($obj: BufferInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: BufferInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (($obj: BufferInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: BufferInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BufferInputStream extends SeekableInputStream {

    // Own properties of Arrow-1.0.Arrow.BufferInputStream

    static name: string
    static $gtype: GObject.GType<BufferInputStream>

    // Constructors of Arrow-1.0.Arrow.BufferInputStream

    constructor(config?: BufferInputStream.ConstructorProperties) 
    constructor(buffer: Buffer) 
    static new(buffer: Buffer): BufferInputStream
    _init(config?: BufferInputStream.ConstructorProperties): void
}

module BufferOutputStream {

    // Constructor properties interface

    interface ConstructorProperties extends File.ConstructorProperties, Writable.ConstructorProperties, OutputStream.ConstructorProperties {
    }

}

interface BufferOutputStream extends File, Writable {

    // Class property signals of Arrow-1.0.Arrow.BufferOutputStream

    connect(sigName: "notify::output-stream", callback: (($obj: BufferOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: BufferOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * It wraps `arrow::io::BufferOutputStream`.
 * @class 
 */
class BufferOutputStream extends OutputStream {

    // Own properties of Arrow-1.0.Arrow.BufferOutputStream

    static name: string
    static $gtype: GObject.GType<BufferOutputStream>

    // Constructors of Arrow-1.0.Arrow.BufferOutputStream

    constructor(config?: BufferOutputStream.ConstructorProperties) 
    constructor(buffer: ResizableBuffer) 
    static new(buffer: ResizableBuffer): BufferOutputStream
    _init(config?: BufferOutputStream.ConstructorProperties): void
}

module CSVReadOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.CSVReadOptions

        /**
         * Whether values are allowed to contain CR (0x0d) and LF (0x0a) characters.
         */
        allow_newlines_in_values?: boolean | null
        /**
         * Whether string / binary columns can have null values.
         * If %TRUE, then strings in "null_values" are considered null for string columns.
         * If %FALSE, then all strings are valid string values.
         */
        allow_null_strings?: boolean | null
        /**
         * Block size we request from the IO layer; also determines the size
         * of chunks when #GArrowCSVReadOptions:use-threads is %TRUE.
         */
        block_size?: number | null
        /**
         * Whether to check UTF8 validity of string columns.
         */
        check_utf8?: boolean | null
        /**
         * Field delimiter character.
         */
        delimiter?: number | null
        /**
         * Escaping character. This is used only when
         * #GArrowCSVReadOptions:is-escaped is %TRUE.
         */
        escape_character?: number | null
        generate_column_names?: boolean | null
        /**
         * Whether empty lines are ignored. If %FALSE, an empty line
         * represents a simple empty value (assuming a one-column CSV file).
         */
        ignore_empty_lines?: boolean | null
        /**
         * Whether a quote inside a value is double quoted.
         */
        is_double_quoted?: boolean | null
        /**
         * Whether escaping is used.
         */
        is_escaped?: boolean | null
        /**
         * Whether quoting is used.
         */
        is_quoted?: boolean | null
        /**
         * The number of header rows to skip (not including
         * the row of column names, if any)
         */
        n_skip_rows?: number | null
        /**
         * Quoting character. This is used only when
         * #GArrowCSVReadOptions:is-quoted is %TRUE.
         */
        quote_character?: number | null
        /**
         * Whether to use the global CPU thread pool.
         */
        use_threads?: boolean | null
    }

}

interface CSVReadOptions {

    // Own properties of Arrow-1.0.Arrow.CSVReadOptions

    /**
     * Whether values are allowed to contain CR (0x0d) and LF (0x0a) characters.
     */
    allow_newlines_in_values: boolean
    /**
     * Whether string / binary columns can have null values.
     * If %TRUE, then strings in "null_values" are considered null for string columns.
     * If %FALSE, then all strings are valid string values.
     */
    allow_null_strings: boolean
    /**
     * Block size we request from the IO layer; also determines the size
     * of chunks when #GArrowCSVReadOptions:use-threads is %TRUE.
     */
    block_size: number
    /**
     * Whether to check UTF8 validity of string columns.
     */
    check_utf8: boolean
    /**
     * Field delimiter character.
     */
    delimiter: number
    /**
     * Escaping character. This is used only when
     * #GArrowCSVReadOptions:is-escaped is %TRUE.
     */
    escape_character: number
    generate_column_names: boolean
    /**
     * Whether empty lines are ignored. If %FALSE, an empty line
     * represents a simple empty value (assuming a one-column CSV file).
     */
    ignore_empty_lines: boolean
    /**
     * Whether a quote inside a value is double quoted.
     */
    is_double_quoted: boolean
    /**
     * Whether escaping is used.
     */
    is_escaped: boolean
    /**
     * Whether quoting is used.
     */
    is_quoted: boolean
    /**
     * The number of header rows to skip (not including
     * the row of column names, if any)
     */
    n_skip_rows: number
    /**
     * Quoting character. This is used only when
     * #GArrowCSVReadOptions:is-quoted is %TRUE.
     */
    quote_character: number
    /**
     * Whether to use the global CPU thread pool.
     */
    use_threads: boolean

    // Own fields of Arrow-1.0.Arrow.CSVReadOptions

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.CSVReadOptions

    add_column_name(column_name: string | null): void
    /**
     * Add value type of a column.
     * @param name The name of the target column.
     * @param data_type The #GArrowDataType for the column.
     */
    add_column_type(name: string | null, data_type: DataType): void
    add_false_value(false_value: string | null): void
    add_null_value(null_value: string | null): void
    /**
     * Add value types for columns in the schema.
     * @param schema The #GArrowSchema that specifies columns and their types.
     */
    add_schema(schema: Schema): void
    add_true_value(true_value: string | null): void
    get_column_names(): string[] | null
    get_column_types(): GLib.HashTable
    get_false_values(): string[] | null
    get_null_values(): string[] | null
    get_true_values(): string[] | null
    set_column_names(column_names: string[]): void
    set_false_values(false_values: string[]): void
    set_null_values(null_values: string[]): void
    set_true_values(true_values: string[]): void

    // Class property signals of Arrow-1.0.Arrow.CSVReadOptions

    connect(sigName: "notify::allow-newlines-in-values", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-newlines-in-values", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-newlines-in-values", ...args: any[]): void
    connect(sigName: "notify::allow-null-strings", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-null-strings", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-null-strings", ...args: any[]): void
    connect(sigName: "notify::block-size", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block-size", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block-size", ...args: any[]): void
    connect(sigName: "notify::check-utf8", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::check-utf8", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::check-utf8", ...args: any[]): void
    connect(sigName: "notify::delimiter", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delimiter", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::delimiter", ...args: any[]): void
    connect(sigName: "notify::escape-character", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::escape-character", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::escape-character", ...args: any[]): void
    connect(sigName: "notify::generate-column-names", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generate-column-names", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::generate-column-names", ...args: any[]): void
    connect(sigName: "notify::ignore-empty-lines", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-empty-lines", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ignore-empty-lines", ...args: any[]): void
    connect(sigName: "notify::is-double-quoted", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-double-quoted", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-double-quoted", ...args: any[]): void
    connect(sigName: "notify::is-escaped", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-escaped", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-escaped", ...args: any[]): void
    connect(sigName: "notify::is-quoted", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quoted", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-quoted", ...args: any[]): void
    connect(sigName: "notify::n-skip-rows", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-skip-rows", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-skip-rows", ...args: any[]): void
    connect(sigName: "notify::quote-character", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quote-character", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quote-character", ...args: any[]): void
    connect(sigName: "notify::use-threads", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: (($obj: CSVReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-threads", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CSVReadOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.CSVReadOptions

    static name: string
    static $gtype: GObject.GType<CSVReadOptions>

    // Constructors of Arrow-1.0.Arrow.CSVReadOptions

    constructor(config?: CSVReadOptions.ConstructorProperties) 
    constructor() 
    static new(): CSVReadOptions
    _init(config?: CSVReadOptions.ConstructorProperties): void
}

module CSVReader {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.CSVReader

        csv_table_reader?: any | null
        input?: InputStream | null
    }

}

interface CSVReader {

    // Own properties of Arrow-1.0.Arrow.CSVReader

    readonly csv_table_reader: any
    readonly input: InputStream

    // Own fields of Arrow-1.0.Arrow.CSVReader

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.CSVReader

    read(): Table | null

    // Class property signals of Arrow-1.0.Arrow.CSVReader

    connect(sigName: "notify::csv-table-reader", callback: (($obj: CSVReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::csv-table-reader", callback: (($obj: CSVReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::csv-table-reader", ...args: any[]): void
    connect(sigName: "notify::input", callback: (($obj: CSVReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input", callback: (($obj: CSVReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CSVReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.CSVReader

    static name: string
    static $gtype: GObject.GType<CSVReader>

    // Constructors of Arrow-1.0.Arrow.CSVReader

    constructor(config?: CSVReader.ConstructorProperties) 
    constructor(input: InputStream, options: CSVReadOptions | null) 
    static new(input: InputStream, options: CSVReadOptions | null): CSVReader
    _init(config?: CSVReader.ConstructorProperties): void
}

module CallExpression {

    // Constructor properties interface

    interface ConstructorProperties extends Expression.ConstructorProperties {
    }

}

interface CallExpression {

    // Own fields of Arrow-1.0.Arrow.CallExpression

    parent_instance: Expression & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.CallExpression

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CallExpression extends Expression {

    // Own properties of Arrow-1.0.Arrow.CallExpression

    static name: string
    static $gtype: GObject.GType<CallExpression>

    // Constructors of Arrow-1.0.Arrow.CallExpression

    constructor(config?: CallExpression.ConstructorProperties) 
    constructor(function_: string | null, arguments_: Expression[], options: FunctionOptions | null) 
    static new(function_: string | null, arguments_: Expression[], options: FunctionOptions | null): CallExpression
    _init(config?: CallExpression.ConstructorProperties): void
}

module CastOptions {

    // Constructor properties interface

    interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.CastOptions

        /**
         * Whether truncating decimal value is allowed or not.
         */
        allow_decimal_truncate?: boolean | null
        /**
         * Whether truncating float value is allowed or not.
         */
        allow_float_truncate?: boolean | null
        /**
         * Whether integer overflow is allowed or not.
         */
        allow_int_overflow?: boolean | null
        /**
         * Whether invalid UTF-8 string value is allowed or not.
         */
        allow_invalid_utf8?: boolean | null
        /**
         * Whether time overflow is allowed or not.
         */
        allow_time_overflow?: boolean | null
        /**
         * Whether truncating time value is allowed or not.
         */
        allow_time_truncate?: boolean | null
        /**
         * The #GArrowDataType being casted to.
         */
        to_data_type?: DataType | null
    }

}

interface CastOptions {

    // Own properties of Arrow-1.0.Arrow.CastOptions

    /**
     * Whether truncating decimal value is allowed or not.
     */
    allow_decimal_truncate: boolean
    /**
     * Whether truncating float value is allowed or not.
     */
    allow_float_truncate: boolean
    /**
     * Whether integer overflow is allowed or not.
     */
    allow_int_overflow: boolean
    /**
     * Whether invalid UTF-8 string value is allowed or not.
     */
    allow_invalid_utf8: boolean
    /**
     * Whether time overflow is allowed or not.
     */
    allow_time_overflow: boolean
    /**
     * Whether truncating time value is allowed or not.
     */
    allow_time_truncate: boolean
    /**
     * The #GArrowDataType being casted to.
     */
    to_data_type: DataType

    // Own fields of Arrow-1.0.Arrow.CastOptions

    parent_instance: FunctionOptions & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.CastOptions

    connect(sigName: "notify::allow-decimal-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-decimal-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-decimal-truncate", ...args: any[]): void
    connect(sigName: "notify::allow-float-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-float-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-float-truncate", ...args: any[]): void
    connect(sigName: "notify::allow-int-overflow", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-int-overflow", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-int-overflow", ...args: any[]): void
    connect(sigName: "notify::allow-invalid-utf8", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-invalid-utf8", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-invalid-utf8", ...args: any[]): void
    connect(sigName: "notify::allow-time-overflow", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-time-overflow", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-time-overflow", ...args: any[]): void
    connect(sigName: "notify::allow-time-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-time-truncate", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-time-truncate", ...args: any[]): void
    connect(sigName: "notify::to-data-type", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to-data-type", callback: (($obj: CastOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::to-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CastOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.CastOptions

    static name: string
    static $gtype: GObject.GType<CastOptions>

    // Constructors of Arrow-1.0.Arrow.CastOptions

    constructor(config?: CastOptions.ConstructorProperties) 
    constructor() 
    static new(): CastOptions
    _init(config?: CastOptions.ConstructorProperties): void
}

module ChunkedArray {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ChunkedArray

        chunked_array?: any | null
    }

}

interface ChunkedArray {

    // Own properties of Arrow-1.0.Arrow.ChunkedArray

    readonly chunked_array: any

    // Own fields of Arrow-1.0.Arrow.ChunkedArray

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ChunkedArray

    combine(): Array | null
    equal(other_chunked_array: ChunkedArray): boolean
    filter(filter: BooleanArray, options: FilterOptions | null): ChunkedArray | null
    filter_chunked_array(filter: ChunkedArray, options: FilterOptions | null): ChunkedArray | null
    get_chunk(i: number): Array
    get_chunks(): Array[]
    get_length(): number
    get_n_chunks(): number
    get_n_nulls(): number
    get_n_rows(): number
    get_value_data_type(): DataType
    get_value_type(): Type
    slice(offset: number, length: number): ChunkedArray
    sort_indices(order: SortOrder): UInt64Array | null
    take(indices: Array, options: TakeOptions | null): ChunkedArray | null
    take_chunked_array(indices: ChunkedArray, options: TakeOptions | null): ChunkedArray | null
    to_string(): string | null

    // Class property signals of Arrow-1.0.Arrow.ChunkedArray

    connect(sigName: "notify::chunked-array", callback: (($obj: ChunkedArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunked-array", callback: (($obj: ChunkedArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chunked-array", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ChunkedArray extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ChunkedArray

    static name: string
    static $gtype: GObject.GType<ChunkedArray>

    // Constructors of Arrow-1.0.Arrow.ChunkedArray

    constructor(config?: ChunkedArray.ConstructorProperties) 
    constructor(chunks: Array[]) 
    static new(chunks: Array[]): ChunkedArray
    _init(config?: ChunkedArray.ConstructorProperties): void
}

module ChunkedArrayDatum {

    // Constructor properties interface

    interface ConstructorProperties extends Datum.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ChunkedArrayDatum

        value?: ChunkedArray | null
    }

}

interface ChunkedArrayDatum {

    // Own properties of Arrow-1.0.Arrow.ChunkedArrayDatum

    readonly value: ChunkedArray

    // Own fields of Arrow-1.0.Arrow.ChunkedArrayDatum

    parent_instance: Datum & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.ChunkedArrayDatum

    connect(sigName: "notify::value", callback: (($obj: ChunkedArrayDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ChunkedArrayDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::datum", callback: (($obj: ChunkedArrayDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datum", callback: (($obj: ChunkedArrayDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::datum", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ChunkedArrayDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.ChunkedArrayDatum

    static name: string
    static $gtype: GObject.GType<ChunkedArrayDatum>

    // Constructors of Arrow-1.0.Arrow.ChunkedArrayDatum

    constructor(config?: ChunkedArrayDatum.ConstructorProperties) 
    constructor(value: ChunkedArray) 
    static new(value: ChunkedArray): ChunkedArrayDatum
    _init(config?: ChunkedArrayDatum.ConstructorProperties): void
}

module Codec {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Codec

        codec?: any | null
    }

}

interface Codec {

    // Own properties of Arrow-1.0.Arrow.Codec

    readonly codec: any

    // Own fields of Arrow-1.0.Arrow.Codec

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Codec

    get_compression_level(): number
    get_compression_type(): CompressionType
    get_name(): string | null

    // Class property signals of Arrow-1.0.Arrow.Codec

    connect(sigName: "notify::codec", callback: (($obj: Codec, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec", callback: (($obj: Codec, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::codec", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Codec extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Codec

    static name: string
    static $gtype: GObject.GType<Codec>

    // Constructors of Arrow-1.0.Arrow.Codec

    constructor(config?: Codec.ConstructorProperties) 
    constructor(type: CompressionType) 
    static new(type: CompressionType): Codec
    _init(config?: Codec.ConstructorProperties): void
}

module CompressedInputStream {

    // Constructor properties interface

    interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, InputStream.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.CompressedInputStream

        codec?: Codec | null
        raw?: InputStream | null
    }

}

interface CompressedInputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.CompressedInputStream

    readonly codec: Codec
    readonly raw: InputStream

    // Own fields of Arrow-1.0.Arrow.CompressedInputStream

    parent_instance: InputStream & Gio.InputStream & GObject.Object & GObject.Object

    // Conflicting methods

    close(): boolean
    /**
     * Closes the stream, releasing resources related to it.
     * 
     * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
     * Closing a stream multiple times will not return an error.
     * 
     * Streams will be automatically closed when the last reference
     * is dropped, but you might want to call this function to make sure
     * resources are released as early as possible.
     * 
     * Some streams might keep the backing store of the stream (e.g. a file descriptor)
     * open after the stream is closed. See the documentation for the individual
     * stream for details.
     * 
     * On failure the first error that happened will be reported, but the close
     * operation will finish as much as possible. A stream that failed to
     * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
     * is important to check and report the error to the user.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * Cancelling a close will still leave the stream closed, but some streams
     * can use a faster close that doesn't block to e.g. check errors.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE on success, %FALSE on failure
     */
    close(cancellable: Gio.Cancellable | null): boolean
    read(n_bytes: number): Buffer | null
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * If count is zero returns zero and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * The returned `buffer` is not a nul-terminated string, it can contain nul bytes
     * at any position, and this function doesn't nul-terminate the `buffer`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns Number of bytes read, or -1 on error, or 0 on end of file.
     */
    read(cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    read_bytes(n_bytes: number): GLib.Bytes | null
    /**
     * Like g_input_stream_read(), this tries to read `count` bytes from
     * the stream in a blocking fashion. However, rather than reading into
     * a user-supplied buffer, this will create a new #GBytes containing
     * the data that was read. This may be easier to use from language
     * bindings.
     * 
     * If count is zero, returns a zero-length #GBytes and does nothing. A
     * value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, a new #GBytes is returned. It is not an error if the
     * size of this object is not the same as the requested size, as it
     * can happen e.g. near the end of a file. A zero-length #GBytes is
     * returned on end of file (or if `count` is zero), but never
     * otherwise.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error %NULL is returned and `error` is set accordingly.
     * @param count maximum number of bytes that will be read from the stream. Common values include 4096 and 8192.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns a new #GBytes, or %NULL on error
     */
    read_bytes(count: number, cancellable: Gio.Cancellable | null): GLib.Bytes

    // Class property signals of Arrow-1.0.Arrow.CompressedInputStream

    connect(sigName: "notify::codec", callback: (($obj: CompressedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec", callback: (($obj: CompressedInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::codec", ...args: any[]): void
    connect(sigName: "notify::raw", callback: (($obj: CompressedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw", callback: (($obj: CompressedInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (($obj: CompressedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: CompressedInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CompressedInputStream extends InputStream {

    // Own properties of Arrow-1.0.Arrow.CompressedInputStream

    static name: string
    static $gtype: GObject.GType<CompressedInputStream>

    // Constructors of Arrow-1.0.Arrow.CompressedInputStream

    constructor(config?: CompressedInputStream.ConstructorProperties) 
    constructor(codec: Codec, raw: InputStream) 
    static new(codec: Codec, raw: InputStream): CompressedInputStream
    _init(config?: CompressedInputStream.ConstructorProperties): void
}

module CompressedOutputStream {

    // Constructor properties interface

    interface ConstructorProperties extends File.ConstructorProperties, Writable.ConstructorProperties, OutputStream.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.CompressedOutputStream

        codec?: Codec | null
        raw?: OutputStream | null
    }

}

interface CompressedOutputStream extends File, Writable {

    // Own properties of Arrow-1.0.Arrow.CompressedOutputStream

    readonly codec: Codec
    readonly raw: OutputStream

    // Own fields of Arrow-1.0.Arrow.CompressedOutputStream

    parent_instance: OutputStream & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.CompressedOutputStream

    connect(sigName: "notify::codec", callback: (($obj: CompressedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec", callback: (($obj: CompressedOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::codec", ...args: any[]): void
    connect(sigName: "notify::raw", callback: (($obj: CompressedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw", callback: (($obj: CompressedOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw", ...args: any[]): void
    connect(sigName: "notify::output-stream", callback: (($obj: CompressedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: CompressedOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CompressedOutputStream extends OutputStream {

    // Own properties of Arrow-1.0.Arrow.CompressedOutputStream

    static name: string
    static $gtype: GObject.GType<CompressedOutputStream>

    // Constructors of Arrow-1.0.Arrow.CompressedOutputStream

    constructor(config?: CompressedOutputStream.ConstructorProperties) 
    constructor(codec: Codec, raw: OutputStream) 
    static new(codec: Codec, raw: OutputStream): CompressedOutputStream
    _init(config?: CompressedOutputStream.ConstructorProperties): void
}

module CountOptions {

    // Constructor properties interface

    interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.CountOptions

        mode?: CountMode | null
    }

}

interface CountOptions {

    // Own properties of Arrow-1.0.Arrow.CountOptions

    mode: CountMode

    // Own fields of Arrow-1.0.Arrow.CountOptions

    parent_instance: FunctionOptions & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.CountOptions

    connect(sigName: "notify::mode", callback: (($obj: CountOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CountOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CountOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.CountOptions

    static name: string
    static $gtype: GObject.GType<CountOptions>

    // Constructors of Arrow-1.0.Arrow.CountOptions

    constructor(config?: CountOptions.ConstructorProperties) 
    constructor() 
    static new(): CountOptions
    _init(config?: CountOptions.ConstructorProperties): void
}

module DataType {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.DataType

        data_type?: any | null
    }

}

interface DataType {

    // Own properties of Arrow-1.0.Arrow.DataType

    readonly data_type: any

    // Own fields of Arrow-1.0.Arrow.DataType

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.DataType

    equal(other_data_type: DataType): boolean
    export(): any | null
    get_id(): Type
    get_name(): string | null
    to_string(): string | null

    // Class property signals of Arrow-1.0.Arrow.DataType

    connect(sigName: "notify::data-type", callback: (($obj: DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataType extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.DataType

    static name: string
    static $gtype: GObject.GType<DataType>

    // Constructors of Arrow-1.0.Arrow.DataType

    constructor(config?: DataType.ConstructorProperties) 
    _init(config?: DataType.ConstructorProperties): void
    static import(c_abi_schema: any): DataType | null
}

module Date32Array {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface Date32Array {

    // Own fields of Arrow-1.0.Arrow.Date32Array

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Date32Array

    get_value(i: number): number
    get_values(): number[]

    // Class property signals of Arrow-1.0.Arrow.Date32Array

    connect(sigName: "notify::array", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: Date32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Date32Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Date32Array

    static name: string
    static $gtype: GObject.GType<Date32Array>

    // Constructors of Arrow-1.0.Arrow.Date32Array

    constructor(config?: Date32Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Date32Array
    _init(config?: Date32Array.ConstructorProperties): void
}

module Date32ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface Date32ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Date32ArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Date32ArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of days since UNIX epoch in signed 32bit integer.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Date32ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: Date32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: Date32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Date32ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Date32ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Date32ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Date32ArrayBuilder

    constructor(config?: Date32ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): Date32ArrayBuilder
    _init(config?: Date32ArrayBuilder.ConstructorProperties): void
}

module Date32DataType {

    // Constructor properties interface

    interface ConstructorProperties extends TemporalDataType.ConstructorProperties {
    }

}

interface Date32DataType {

    // Own fields of Arrow-1.0.Arrow.Date32DataType

    parent_instance: TemporalDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.Date32DataType

    connect(sigName: "notify::data-type", callback: (($obj: Date32DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Date32DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Date32DataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.Date32DataType

    static name: string
    static $gtype: GObject.GType<Date32DataType>

    // Constructors of Arrow-1.0.Arrow.Date32DataType

    constructor(config?: Date32DataType.ConstructorProperties) 
    constructor() 
    static new(): Date32DataType
    _init(config?: Date32DataType.ConstructorProperties): void
}

module Date32Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface Date32Scalar {

    // Own fields of Arrow-1.0.Arrow.Date32Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Date32Scalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.Date32Scalar

    connect(sigName: "notify::data-type", callback: (($obj: Date32Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Date32Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: Date32Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: Date32Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Date32Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Date32Scalar

    static name: string
    static $gtype: GObject.GType<Date32Scalar>

    // Constructors of Arrow-1.0.Arrow.Date32Scalar

    constructor(config?: Date32Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Date32Scalar
    _init(config?: Date32Scalar.ConstructorProperties): void
}

module Date64Array {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface Date64Array {

    // Own fields of Arrow-1.0.Arrow.Date64Array

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Date64Array

    get_value(i: number): number
    get_values(): number[]

    // Class property signals of Arrow-1.0.Arrow.Date64Array

    connect(sigName: "notify::array", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: Date64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Date64Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Date64Array

    static name: string
    static $gtype: GObject.GType<Date64Array>

    // Constructors of Arrow-1.0.Arrow.Date64Array

    constructor(config?: Date64Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Date64Array
    _init(config?: Date64Array.ConstructorProperties): void
}

module Date64ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface Date64ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Date64ArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Date64ArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of milliseconds since UNIX epoch in signed 64bit integer.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Date64ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: Date64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: Date64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Date64ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Date64ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Date64ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Date64ArrayBuilder

    constructor(config?: Date64ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): Date64ArrayBuilder
    _init(config?: Date64ArrayBuilder.ConstructorProperties): void
}

module Date64DataType {

    // Constructor properties interface

    interface ConstructorProperties extends TemporalDataType.ConstructorProperties {
    }

}

interface Date64DataType {

    // Own fields of Arrow-1.0.Arrow.Date64DataType

    parent_instance: TemporalDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.Date64DataType

    connect(sigName: "notify::data-type", callback: (($obj: Date64DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Date64DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Date64DataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.Date64DataType

    static name: string
    static $gtype: GObject.GType<Date64DataType>

    // Constructors of Arrow-1.0.Arrow.Date64DataType

    constructor(config?: Date64DataType.ConstructorProperties) 
    constructor() 
    static new(): Date64DataType
    _init(config?: Date64DataType.ConstructorProperties): void
}

module Date64Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface Date64Scalar {

    // Own fields of Arrow-1.0.Arrow.Date64Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Date64Scalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.Date64Scalar

    connect(sigName: "notify::data-type", callback: (($obj: Date64Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Date64Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: Date64Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: Date64Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Date64Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Date64Scalar

    static name: string
    static $gtype: GObject.GType<Date64Scalar>

    // Constructors of Arrow-1.0.Arrow.Date64Scalar

    constructor(config?: Date64Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Date64Scalar
    _init(config?: Date64Scalar.ConstructorProperties): void
}

module Datum {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Datum

        datum?: any | null
    }

}

interface Datum {

    // Own properties of Arrow-1.0.Arrow.Datum

    readonly datum: any

    // Own fields of Arrow-1.0.Arrow.Datum

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Datum

    equal(other_datum: Datum): boolean
    is_array(): boolean
    is_array_like(): boolean
    is_scalar(): boolean
    is_value(): boolean
    to_string(): string | null

    // Class property signals of Arrow-1.0.Arrow.Datum

    connect(sigName: "notify::datum", callback: (($obj: Datum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datum", callback: (($obj: Datum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::datum", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Datum extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Datum

    static name: string
    static $gtype: GObject.GType<Datum>

    // Constructors of Arrow-1.0.Arrow.Datum

    constructor(config?: Datum.ConstructorProperties) 
    _init(config?: Datum.ConstructorProperties): void
}

module DayTimeIntervalDataType {

    // Constructor properties interface

    interface ConstructorProperties extends IntervalDataType.ConstructorProperties {
    }

}

interface DayTimeIntervalDataType {

    // Own fields of Arrow-1.0.Arrow.DayTimeIntervalDataType

    parent_instance: IntervalDataType & TimeDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.DayTimeIntervalDataType

    connect(sigName: "notify::data-type", callback: (($obj: DayTimeIntervalDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: DayTimeIntervalDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DayTimeIntervalDataType extends IntervalDataType {

    // Own properties of Arrow-1.0.Arrow.DayTimeIntervalDataType

    static name: string
    static $gtype: GObject.GType<DayTimeIntervalDataType>

    // Constructors of Arrow-1.0.Arrow.DayTimeIntervalDataType

    constructor(config?: DayTimeIntervalDataType.ConstructorProperties) 
    constructor() 
    static new(): DayTimeIntervalDataType
    _init(config?: DayTimeIntervalDataType.ConstructorProperties): void
}

module Decimal128 {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Decimal128

        decimal128?: any | null
    }

}

interface Decimal128 {

    // Own properties of Arrow-1.0.Arrow.Decimal128

    readonly decimal128: any

    // Own fields of Arrow-1.0.Arrow.Decimal128

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Decimal128

    /**
     * Computes the absolute value of the `decimal` destructively.
     */
    abs(): void
    copy(): Decimal128
    divide(right: Decimal128): [ /* returnType */ Decimal128 | null, /* remainder */ Decimal128 | null ]
    equal(other_decimal: Decimal128): boolean
    greater_than(other_decimal: Decimal128): boolean
    greater_than_or_equal(other_decimal: Decimal128): boolean
    less_than(other_decimal: Decimal128): boolean
    less_than_or_equal(other_decimal: Decimal128): boolean
    minus(right: Decimal128): Decimal128
    multiply(right: Decimal128): Decimal128
    /**
     * Negate the current value of the `decimal` destructively.
     */
    negate(): void
    not_equal(other_decimal: Decimal128): boolean
    plus(right: Decimal128): Decimal128
    rescale(original_scale: number, new_scale: number): Decimal128 | null
    to_bytes(): GLib.Bytes
    to_integer(): number
    to_string(): string | null
    to_string_scale(scale: number): string | null

    // Class property signals of Arrow-1.0.Arrow.Decimal128

    connect(sigName: "notify::decimal128", callback: (($obj: Decimal128, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decimal128", callback: (($obj: Decimal128, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decimal128", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Decimal128 extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Decimal128

    static name: string
    static $gtype: GObject.GType<Decimal128>

    // Constructors of Arrow-1.0.Arrow.Decimal128

    constructor(config?: Decimal128.ConstructorProperties) 
    static new_integer(data: number): Decimal128
    static new_string(data: string | null): Decimal128
    _init(config?: Decimal128.ConstructorProperties): void
}

module Decimal128Array {

    // Constructor properties interface

    interface ConstructorProperties extends FixedSizeBinaryArray.ConstructorProperties {
    }

}

interface Decimal128Array {

    // Own fields of Arrow-1.0.Arrow.Decimal128Array

    parent_instance: FixedSizeBinaryArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Decimal128Array

    format_value(i: number): string | null
    get_value(i: number): Decimal128

    // Overloads of get_value

    get_value(i: number): GLib.Bytes

    // Class property signals of Arrow-1.0.Arrow.Decimal128Array

    connect(sigName: "notify::array", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: Decimal128Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Decimal128Array extends FixedSizeBinaryArray {

    // Own properties of Arrow-1.0.Arrow.Decimal128Array

    static name: string
    static $gtype: GObject.GType<Decimal128Array>

    // Constructors of Arrow-1.0.Arrow.Decimal128Array

    constructor(config?: Decimal128Array.ConstructorProperties) 
    _init(config?: Decimal128Array.ConstructorProperties): void
}

module Decimal128ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends FixedSizeBinaryArrayBuilder.ConstructorProperties {
    }

}

interface Decimal128ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    parent_instance: FixedSizeBinaryArrayBuilder & ArrayBuilder & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    append(value: Decimal128): boolean
    append_value(value: Decimal128 | null): boolean

    // Overloads of append_value

    append_value(value: Uint8Array | null): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GArrowDecimal128.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: Decimal128[], is_valids: boolean[] | null): boolean

    // Overloads of append_values

    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: GLib.Bytes[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: Decimal128ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: Decimal128ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Decimal128ArrayBuilder extends FixedSizeBinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Decimal128ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    constructor(config?: Decimal128ArrayBuilder.ConstructorProperties) 
    constructor(data_type: Decimal128DataType) 
    static new(data_type: Decimal128DataType): Decimal128ArrayBuilder

    // Overloads of new

    static new(data_type: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder
    _init(config?: Decimal128ArrayBuilder.ConstructorProperties): void
}

module Decimal128DataType {

    // Constructor properties interface

    interface ConstructorProperties extends DecimalDataType.ConstructorProperties {
    }

}

interface Decimal128DataType {

    // Own fields of Arrow-1.0.Arrow.Decimal128DataType

    parent_instance: DecimalDataType & FixedSizeBinaryDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.Decimal128DataType

    connect(sigName: "notify::data-type", callback: (($obj: Decimal128DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Decimal128DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Decimal128DataType extends DecimalDataType {

    // Own properties of Arrow-1.0.Arrow.Decimal128DataType

    static name: string
    static $gtype: GObject.GType<Decimal128DataType>

    // Constructors of Arrow-1.0.Arrow.Decimal128DataType

    constructor(config?: Decimal128DataType.ConstructorProperties) 
    constructor(precision: number, scale: number) 
    static new(precision: number, scale: number): Decimal128DataType

    // Overloads of new

    static new(precision: number, scale: number): DecimalDataType
    static new(byte_width: number): FixedSizeBinaryDataType
    _init(config?: Decimal128DataType.ConstructorProperties): void
    static max_precision(): number
}

module Decimal128Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Decimal128Scalar

        /**
         * The value of the scalar.
         */
        value?: Decimal128 | null
    }

}

interface Decimal128Scalar {

    // Own properties of Arrow-1.0.Arrow.Decimal128Scalar

    /**
     * The value of the scalar.
     */
    readonly value: Decimal128

    // Own fields of Arrow-1.0.Arrow.Decimal128Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Decimal128Scalar

    get_value(): Decimal128

    // Class property signals of Arrow-1.0.Arrow.Decimal128Scalar

    connect(sigName: "notify::value", callback: (($obj: Decimal128Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Decimal128Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: Decimal128Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Decimal128Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: Decimal128Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: Decimal128Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Decimal128Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Decimal128Scalar

    static name: string
    static $gtype: GObject.GType<Decimal128Scalar>

    // Constructors of Arrow-1.0.Arrow.Decimal128Scalar

    constructor(config?: Decimal128Scalar.ConstructorProperties) 
    constructor(data_type: Decimal128DataType, value: Decimal128) 
    static new(data_type: Decimal128DataType, value: Decimal128): Decimal128Scalar
    _init(config?: Decimal128Scalar.ConstructorProperties): void
}

module Decimal256 {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Decimal256

        decimal256?: any | null
    }

}

interface Decimal256 {

    // Own properties of Arrow-1.0.Arrow.Decimal256

    readonly decimal256: any

    // Own fields of Arrow-1.0.Arrow.Decimal256

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Decimal256

    /**
     * Computes the absolute value of the `decimal` destructively.
     */
    abs(): void
    copy(): Decimal256
    divide(right: Decimal256): [ /* returnType */ Decimal256 | null, /* remainder */ Decimal256 | null ]
    equal(other_decimal: Decimal256): boolean
    greater_than(other_decimal: Decimal256): boolean
    greater_than_or_equal(other_decimal: Decimal256): boolean
    less_than(other_decimal: Decimal256): boolean
    less_than_or_equal(other_decimal: Decimal256): boolean
    multiply(right: Decimal256): Decimal256
    /**
     * Negate the current value of the `decimal` destructively.
     */
    negate(): void
    not_equal(other_decimal: Decimal256): boolean
    plus(right: Decimal256): Decimal256
    rescale(original_scale: number, new_scale: number): Decimal256 | null
    to_bytes(): GLib.Bytes
    to_string(): string | null
    to_string_scale(scale: number): string | null

    // Class property signals of Arrow-1.0.Arrow.Decimal256

    connect(sigName: "notify::decimal256", callback: (($obj: Decimal256, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decimal256", callback: (($obj: Decimal256, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decimal256", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Decimal256 extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Decimal256

    static name: string
    static $gtype: GObject.GType<Decimal256>

    // Constructors of Arrow-1.0.Arrow.Decimal256

    constructor(config?: Decimal256.ConstructorProperties) 
    static new_integer(data: number): Decimal256
    static new_string(data: string | null): Decimal256
    _init(config?: Decimal256.ConstructorProperties): void
}

module Decimal256Array {

    // Constructor properties interface

    interface ConstructorProperties extends FixedSizeBinaryArray.ConstructorProperties {
    }

}

interface Decimal256Array {

    // Own fields of Arrow-1.0.Arrow.Decimal256Array

    parent_instance: FixedSizeBinaryArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Decimal256Array

    format_value(i: number): string | null
    get_value(i: number): Decimal256

    // Overloads of get_value

    get_value(i: number): GLib.Bytes

    // Class property signals of Arrow-1.0.Arrow.Decimal256Array

    connect(sigName: "notify::array", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: Decimal256Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Decimal256Array extends FixedSizeBinaryArray {

    // Own properties of Arrow-1.0.Arrow.Decimal256Array

    static name: string
    static $gtype: GObject.GType<Decimal256Array>

    // Constructors of Arrow-1.0.Arrow.Decimal256Array

    constructor(config?: Decimal256Array.ConstructorProperties) 
    _init(config?: Decimal256Array.ConstructorProperties): void
}

module Decimal256ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends FixedSizeBinaryArrayBuilder.ConstructorProperties {
    }

}

interface Decimal256ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    parent_instance: FixedSizeBinaryArrayBuilder & ArrayBuilder & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    append_value(value: Decimal256 | null): boolean

    // Overloads of append_value

    append_value(value: Uint8Array | null): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GArrowDecimal256.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: Decimal256[], is_valids: boolean[] | null): boolean

    // Overloads of append_values

    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: GLib.Bytes[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: Decimal256ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: Decimal256ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Decimal256ArrayBuilder extends FixedSizeBinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Decimal256ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    constructor(config?: Decimal256ArrayBuilder.ConstructorProperties) 
    constructor(data_type: Decimal256DataType) 
    static new(data_type: Decimal256DataType): Decimal256ArrayBuilder

    // Overloads of new

    static new(data_type: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder
    _init(config?: Decimal256ArrayBuilder.ConstructorProperties): void
}

module Decimal256DataType {

    // Constructor properties interface

    interface ConstructorProperties extends DecimalDataType.ConstructorProperties {
    }

}

interface Decimal256DataType {

    // Own fields of Arrow-1.0.Arrow.Decimal256DataType

    parent_instance: DecimalDataType & FixedSizeBinaryDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.Decimal256DataType

    connect(sigName: "notify::data-type", callback: (($obj: Decimal256DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Decimal256DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Decimal256DataType extends DecimalDataType {

    // Own properties of Arrow-1.0.Arrow.Decimal256DataType

    static name: string
    static $gtype: GObject.GType<Decimal256DataType>

    // Constructors of Arrow-1.0.Arrow.Decimal256DataType

    constructor(config?: Decimal256DataType.ConstructorProperties) 
    constructor(precision: number, scale: number) 
    static new(precision: number, scale: number): Decimal256DataType

    // Overloads of new

    static new(precision: number, scale: number): DecimalDataType
    static new(byte_width: number): FixedSizeBinaryDataType
    _init(config?: Decimal256DataType.ConstructorProperties): void
    static max_precision(): number
}

module Decimal256Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Decimal256Scalar

        /**
         * The value of the scalar.
         */
        value?: Decimal256 | null
    }

}

interface Decimal256Scalar {

    // Own properties of Arrow-1.0.Arrow.Decimal256Scalar

    /**
     * The value of the scalar.
     */
    readonly value: Decimal256

    // Own fields of Arrow-1.0.Arrow.Decimal256Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Decimal256Scalar

    get_value(): Decimal256

    // Class property signals of Arrow-1.0.Arrow.Decimal256Scalar

    connect(sigName: "notify::value", callback: (($obj: Decimal256Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Decimal256Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: Decimal256Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Decimal256Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: Decimal256Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: Decimal256Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Decimal256Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Decimal256Scalar

    static name: string
    static $gtype: GObject.GType<Decimal256Scalar>

    // Constructors of Arrow-1.0.Arrow.Decimal256Scalar

    constructor(config?: Decimal256Scalar.ConstructorProperties) 
    constructor(data_type: Decimal256DataType, value: Decimal256) 
    static new(data_type: Decimal256DataType, value: Decimal256): Decimal256Scalar
    _init(config?: Decimal256Scalar.ConstructorProperties): void
}

module DecimalDataType {

    // Constructor properties interface

    interface ConstructorProperties extends FixedSizeBinaryDataType.ConstructorProperties {
    }

}

interface DecimalDataType {

    // Own fields of Arrow-1.0.Arrow.DecimalDataType

    parent_instance: FixedSizeBinaryDataType & DataType & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.DecimalDataType

    get_precision(): number
    get_scale(): number

    // Class property signals of Arrow-1.0.Arrow.DecimalDataType

    connect(sigName: "notify::data-type", callback: (($obj: DecimalDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: DecimalDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DecimalDataType extends FixedSizeBinaryDataType {

    // Own properties of Arrow-1.0.Arrow.DecimalDataType

    static name: string
    static $gtype: GObject.GType<DecimalDataType>

    // Constructors of Arrow-1.0.Arrow.DecimalDataType

    constructor(config?: DecimalDataType.ConstructorProperties) 
    constructor(precision: number, scale: number) 
    static new(precision: number, scale: number): DecimalDataType

    // Overloads of new

    static new(byte_width: number): FixedSizeBinaryDataType
    _init(config?: DecimalDataType.ConstructorProperties): void
}

module DenseUnionArray {

    // Constructor properties interface

    interface ConstructorProperties extends UnionArray.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.DenseUnionArray

        value_offsets?: Int32Array | null
    }

}

interface DenseUnionArray {

    // Own properties of Arrow-1.0.Arrow.DenseUnionArray

    readonly value_offsets: Int32Array

    // Own fields of Arrow-1.0.Arrow.DenseUnionArray

    parent_instance: UnionArray & Array & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.DenseUnionArray

    connect(sigName: "notify::value-offsets", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-offsets", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-offsets", ...args: any[]): void
    connect(sigName: "notify::type-ids", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-ids", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-ids", ...args: any[]): void
    connect(sigName: "notify::array", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: DenseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DenseUnionArray extends UnionArray {

    // Own properties of Arrow-1.0.Arrow.DenseUnionArray

    static name: string
    static $gtype: GObject.GType<DenseUnionArray>

    // Constructors of Arrow-1.0.Arrow.DenseUnionArray

    constructor(config?: DenseUnionArray.ConstructorProperties) 
    constructor(type_ids: Int8Array, value_offsets: Int32Array, fields: Array[]) 
    static new(type_ids: Int8Array, value_offsets: Int32Array, fields: Array[]): DenseUnionArray
    static new_data_type(data_type: DenseUnionDataType, type_ids: Int8Array, value_offsets: Int32Array, fields: Array[]): DenseUnionArray
    _init(config?: DenseUnionArray.ConstructorProperties): void
}

module DenseUnionDataType {

    // Constructor properties interface

    interface ConstructorProperties extends UnionDataType.ConstructorProperties {
    }

}

interface DenseUnionDataType {

    // Own fields of Arrow-1.0.Arrow.DenseUnionDataType

    parent_instance: UnionDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.DenseUnionDataType

    connect(sigName: "notify::data-type", callback: (($obj: DenseUnionDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: DenseUnionDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DenseUnionDataType extends UnionDataType {

    // Own properties of Arrow-1.0.Arrow.DenseUnionDataType

    static name: string
    static $gtype: GObject.GType<DenseUnionDataType>

    // Constructors of Arrow-1.0.Arrow.DenseUnionDataType

    constructor(config?: DenseUnionDataType.ConstructorProperties) 
    constructor(fields: Field[], type_codes: Uint8Array) 
    static new(fields: Field[], type_codes: Uint8Array): DenseUnionDataType
    _init(config?: DenseUnionDataType.ConstructorProperties): void
}

module DenseUnionScalar {

    // Constructor properties interface

    interface ConstructorProperties extends UnionScalar.ConstructorProperties {
    }

}

interface DenseUnionScalar {

    // Own fields of Arrow-1.0.Arrow.DenseUnionScalar

    parent_instance: UnionScalar & Scalar & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.DenseUnionScalar

    connect(sigName: "notify::value", callback: (($obj: DenseUnionScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DenseUnionScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: DenseUnionScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: DenseUnionScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: DenseUnionScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: DenseUnionScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DenseUnionScalar extends UnionScalar {

    // Own properties of Arrow-1.0.Arrow.DenseUnionScalar

    static name: string
    static $gtype: GObject.GType<DenseUnionScalar>

    // Constructors of Arrow-1.0.Arrow.DenseUnionScalar

    constructor(config?: DenseUnionScalar.ConstructorProperties) 
    constructor(data_type: DenseUnionDataType, type_code: number, value: Scalar) 
    static new(data_type: DenseUnionDataType, type_code: number, value: Scalar): DenseUnionScalar
    _init(config?: DenseUnionScalar.ConstructorProperties): void
}

module DictionaryArray {

    // Constructor properties interface

    interface ConstructorProperties extends Array.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.DictionaryArray

        dictionary?: Array | null
        indices?: Array | null
    }

}

interface DictionaryArray {

    // Own properties of Arrow-1.0.Arrow.DictionaryArray

    readonly dictionary: Array
    readonly indices: Array

    // Own fields of Arrow-1.0.Arrow.DictionaryArray

    parent_instance: Array & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.DictionaryArray

    get_dictionary(): Array
    get_dictionary_data_type(): DictionaryDataType
    get_indices(): Array

    // Class property signals of Arrow-1.0.Arrow.DictionaryArray

    connect(sigName: "notify::dictionary", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dictionary", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dictionary", ...args: any[]): void
    connect(sigName: "notify::indices", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indices", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indices", ...args: any[]): void
    connect(sigName: "notify::array", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: DictionaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DictionaryArray extends Array {

    // Own properties of Arrow-1.0.Arrow.DictionaryArray

    static name: string
    static $gtype: GObject.GType<DictionaryArray>

    // Constructors of Arrow-1.0.Arrow.DictionaryArray

    constructor(config?: DictionaryArray.ConstructorProperties) 
    constructor(data_type: DataType, indices: Array, dictionary: Array) 
    static new(data_type: DataType, indices: Array, dictionary: Array): DictionaryArray
    _init(config?: DictionaryArray.ConstructorProperties): void
}

module DictionaryDataType {

    // Constructor properties interface

    interface ConstructorProperties extends FixedWidthDataType.ConstructorProperties {
    }

}

interface DictionaryDataType {

    // Own fields of Arrow-1.0.Arrow.DictionaryDataType

    parent_instance: FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.DictionaryDataType

    get_index_data_type(): DataType
    get_value_data_type(): DataType
    is_ordered(): boolean

    // Class property signals of Arrow-1.0.Arrow.DictionaryDataType

    connect(sigName: "notify::data-type", callback: (($obj: DictionaryDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: DictionaryDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DictionaryDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.DictionaryDataType

    static name: string
    static $gtype: GObject.GType<DictionaryDataType>

    // Constructors of Arrow-1.0.Arrow.DictionaryDataType

    constructor(config?: DictionaryDataType.ConstructorProperties) 
    constructor(index_data_type: DataType, value_data_type: DataType, ordered: boolean) 
    static new(index_data_type: DataType, value_data_type: DataType, ordered: boolean): DictionaryDataType
    _init(config?: DictionaryDataType.ConstructorProperties): void
}

module DoubleArray {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface DoubleArray {

    // Own fields of Arrow-1.0.Arrow.DoubleArray

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.DoubleArray

    get_value(i: number): number
    get_values(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.DoubleArray

    connect(sigName: "notify::array", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: DoubleArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DoubleArray extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.DoubleArray

    static name: string
    static $gtype: GObject.GType<DoubleArray>

    // Constructors of Arrow-1.0.Arrow.DoubleArray

    constructor(config?: DoubleArray.ConstructorProperties) 
    constructor(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): DoubleArray
    _init(config?: DoubleArray.ConstructorProperties): void
}

module DoubleArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface DoubleArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.DoubleArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.DoubleArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of double.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.DoubleArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: DoubleArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: DoubleArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DoubleArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.DoubleArrayBuilder

    static name: string
    static $gtype: GObject.GType<DoubleArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.DoubleArrayBuilder

    constructor(config?: DoubleArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): DoubleArrayBuilder
    _init(config?: DoubleArrayBuilder.ConstructorProperties): void
}

module DoubleDataType {

    // Constructor properties interface

    interface ConstructorProperties extends FloatingPointDataType.ConstructorProperties {
    }

}

interface DoubleDataType {

    // Own fields of Arrow-1.0.Arrow.DoubleDataType

    parent_instance: FloatingPointDataType & NumericDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.DoubleDataType

    connect(sigName: "notify::data-type", callback: (($obj: DoubleDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: DoubleDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DoubleDataType extends FloatingPointDataType {

    // Own properties of Arrow-1.0.Arrow.DoubleDataType

    static name: string
    static $gtype: GObject.GType<DoubleDataType>

    // Constructors of Arrow-1.0.Arrow.DoubleDataType

    constructor(config?: DoubleDataType.ConstructorProperties) 
    constructor() 
    static new(): DoubleDataType
    _init(config?: DoubleDataType.ConstructorProperties): void
}

module DoubleScalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface DoubleScalar {

    // Own fields of Arrow-1.0.Arrow.DoubleScalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.DoubleScalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.DoubleScalar

    connect(sigName: "notify::data-type", callback: (($obj: DoubleScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: DoubleScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: DoubleScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: DoubleScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DoubleScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.DoubleScalar

    static name: string
    static $gtype: GObject.GType<DoubleScalar>

    // Constructors of Arrow-1.0.Arrow.DoubleScalar

    constructor(config?: DoubleScalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): DoubleScalar
    _init(config?: DoubleScalar.ConstructorProperties): void
}

module EqualOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.EqualOptions

        /**
         * The absolute tolerance for approximate comparison of
         * floating-point values.
         */
        absolute_tolerance?: number | null
        /**
         * Whether or not approximate comparison is used.
         */
        approx?: boolean | null
        /**
         * Whether or not NaNs are considered equal.
         */
        nans_equal?: boolean | null
    }

}

interface EqualOptions {

    // Own properties of Arrow-1.0.Arrow.EqualOptions

    /**
     * The absolute tolerance for approximate comparison of
     * floating-point values.
     */
    absolute_tolerance: number
    /**
     * Whether or not approximate comparison is used.
     */
    approx: boolean
    /**
     * Whether or not NaNs are considered equal.
     */
    nans_equal: boolean

    // Own fields of Arrow-1.0.Arrow.EqualOptions

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.EqualOptions

    is_approx(): boolean

    // Class property signals of Arrow-1.0.Arrow.EqualOptions

    connect(sigName: "notify::absolute-tolerance", callback: (($obj: EqualOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::absolute-tolerance", callback: (($obj: EqualOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::absolute-tolerance", ...args: any[]): void
    connect(sigName: "notify::approx", callback: (($obj: EqualOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::approx", callback: (($obj: EqualOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::approx", ...args: any[]): void
    connect(sigName: "notify::nans-equal", callback: (($obj: EqualOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nans-equal", callback: (($obj: EqualOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nans-equal", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EqualOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.EqualOptions

    static name: string
    static $gtype: GObject.GType<EqualOptions>

    // Constructors of Arrow-1.0.Arrow.EqualOptions

    constructor(config?: EqualOptions.ConstructorProperties) 
    constructor() 
    static new(): EqualOptions
    _init(config?: EqualOptions.ConstructorProperties): void
}

module ExecuteContext {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ExecuteContext {

    // Own fields of Arrow-1.0.Arrow.ExecuteContext

    parent_instance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.ExecuteContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExecuteContext extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExecuteContext

    static name: string
    static $gtype: GObject.GType<ExecuteContext>

    // Constructors of Arrow-1.0.Arrow.ExecuteContext

    constructor(config?: ExecuteContext.ConstructorProperties) 
    constructor() 
    static new(): ExecuteContext
    _init(config?: ExecuteContext.ConstructorProperties): void
}

module ExecuteNode {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ExecuteNode

        node?: any | null
    }

}

interface ExecuteNode {

    // Own properties of Arrow-1.0.Arrow.ExecuteNode

    readonly node: any

    // Own fields of Arrow-1.0.Arrow.ExecuteNode

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ExecuteNode

    get_kind_name(): string | null
    get_output_schema(): Schema

    // Class property signals of Arrow-1.0.Arrow.ExecuteNode

    connect(sigName: "notify::node", callback: (($obj: ExecuteNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: ExecuteNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExecuteNode extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExecuteNode

    static name: string
    static $gtype: GObject.GType<ExecuteNode>

    // Constructors of Arrow-1.0.Arrow.ExecuteNode

    constructor(config?: ExecuteNode.ConstructorProperties) 
    _init(config?: ExecuteNode.ConstructorProperties): void
}

module ExecuteNodeOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ExecuteNodeOptions

        options?: any | null
    }

}

interface ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.ExecuteNodeOptions

    readonly options: any

    // Own fields of Arrow-1.0.Arrow.ExecuteNodeOptions

    parent_instance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.ExecuteNodeOptions

    connect(sigName: "notify::options", callback: (($obj: ExecuteNodeOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: ExecuteNodeOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExecuteNodeOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExecuteNodeOptions

    static name: string
    static $gtype: GObject.GType<ExecuteNodeOptions>

    // Constructors of Arrow-1.0.Arrow.ExecuteNodeOptions

    constructor(config?: ExecuteNodeOptions.ConstructorProperties) 
    _init(config?: ExecuteNodeOptions.ConstructorProperties): void
}

module ExecutePlan {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ExecutePlan

        plan?: any | null
    }

}

interface ExecutePlan {

    // Own properties of Arrow-1.0.Arrow.ExecutePlan

    readonly plan: any

    // Own fields of Arrow-1.0.Arrow.ExecutePlan

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ExecutePlan

    /**
     * This is a shortcut of garrow_execute_plan_build_node() for aggregate
     * node.
     * @param input A #GArrowExecuteNode.
     * @param options A #GArrowAggregateNodeOptions.
     * @returns A newly built and added #GArrowExecuteNode   for aggregation on success, %NULL on error.
     */
    build_aggregate_node(input: ExecuteNode, options: AggregateNodeOptions): ExecuteNode
    /**
     * This is a shortcut of garrow_execute_plan_build_node() for hash
     * join node.
     * @param left A left #GArrowExecuteNode.
     * @param right A right #GArrowExecuteNode.
     * @param options A #GArrowHashJoinNodeOptions.
     * @returns A newly built and added #GArrowExecuteNode   for hash join on success, %NULL on error.
     */
    build_hash_join_node(left: ExecuteNode, right: ExecuteNode, options: HashJoinNodeOptions): ExecuteNode
    build_node(factory_name: string | null, inputs: ExecuteNode[], options: ExecuteNodeOptions): ExecuteNode
    /**
     * This is a shortcut of garrow_execute_plan_build_node() for sink
     * node.
     * @param input A #GArrowExecuteNode.
     * @param options A #GArrowSinkNodeOptions.
     * @returns A newly built and added #GArrowExecuteNode   for sink on success, %NULL on error.
     */
    build_sink_node(input: ExecuteNode, options: SinkNodeOptions): ExecuteNode
    /**
     * This is a shortcut of garrow_execute_plan_build_node() for source
     * node.
     * @param options A #GArrowSourceNodeOptions.
     * @returns A newly built and added #GArrowExecuteNode   for source on success, %NULL on error.
     */
    build_source_node(options: SourceNodeOptions): ExecuteNode
    /**
     * Starts this plan.
     * @returns %TRUE on success, %FALSE on error.
     */
    start(): boolean
    /**
     * Stops this plan.
     */
    stop(): void
    validate(): boolean
    /**
     * Waits for finishing this plan.
     */
    wait(): void

    // Class property signals of Arrow-1.0.Arrow.ExecutePlan

    connect(sigName: "notify::plan", callback: (($obj: ExecutePlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plan", callback: (($obj: ExecutePlan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plan", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExecutePlan extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExecutePlan

    static name: string
    static $gtype: GObject.GType<ExecutePlan>

    // Constructors of Arrow-1.0.Arrow.ExecutePlan

    constructor(config?: ExecutePlan.ConstructorProperties) 
    constructor() 
    static new(): ExecutePlan
    _init(config?: ExecutePlan.ConstructorProperties): void
}

module Expression {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Expression {

    // Own fields of Arrow-1.0.Arrow.Expression

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Expression

    equal(other_expression: Expression): boolean
    to_string(): string | null

    // Class property signals of Arrow-1.0.Arrow.Expression

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Expression extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Expression

    static name: string
    static $gtype: GObject.GType<Expression>

    // Constructors of Arrow-1.0.Arrow.Expression

    constructor(config?: Expression.ConstructorProperties) 
    _init(config?: Expression.ConstructorProperties): void
}

module ExtensionArray {

    // Constructor properties interface

    interface ConstructorProperties extends Array.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ExtensionArray

        storage?: Array | null
    }

}

interface ExtensionArray {

    // Own properties of Arrow-1.0.Arrow.ExtensionArray

    readonly storage: Array

    // Own fields of Arrow-1.0.Arrow.ExtensionArray

    parent_instance: Array & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ExtensionArray

    get_storage(): Array

    // Class property signals of Arrow-1.0.Arrow.ExtensionArray

    connect(sigName: "notify::storage", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::storage", ...args: any[]): void
    connect(sigName: "notify::array", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: ExtensionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExtensionArray extends Array {

    // Own properties of Arrow-1.0.Arrow.ExtensionArray

    static name: string
    static $gtype: GObject.GType<ExtensionArray>

    // Constructors of Arrow-1.0.Arrow.ExtensionArray

    constructor(config?: ExtensionArray.ConstructorProperties) 
    _init(config?: ExtensionArray.ConstructorProperties): void
}

module ExtensionDataType {

    // Constructor properties interface

    interface ConstructorProperties extends DataType.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ExtensionDataType

        storage_data_type?: DataType | null
    }

}

interface ExtensionDataType {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataType

    readonly storage_data_type: DataType

    // Own fields of Arrow-1.0.Arrow.ExtensionDataType

    parent_instance: DataType & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ExtensionDataType

    get_extension_name(): string | null
    wrap_array(storage: Array): ExtensionArray
    wrap_chunked_array(storage: ChunkedArray): ChunkedArray

    // Own virtual methods of Arrow-1.0.Arrow.ExtensionDataType

    vfunc_equal(other_data_type: ExtensionDataType): boolean
    vfunc_get_array_gtype(): GObject.GType
    vfunc_get_extension_name(): string | null
    vfunc_serialize(): GLib.Bytes

    // Class property signals of Arrow-1.0.Arrow.ExtensionDataType

    connect(sigName: "notify::storage-data-type", callback: (($obj: ExtensionDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage-data-type", callback: (($obj: ExtensionDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::storage-data-type", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: ExtensionDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: ExtensionDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExtensionDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataType

    static name: string
    static $gtype: GObject.GType<ExtensionDataType>

    // Constructors of Arrow-1.0.Arrow.ExtensionDataType

    constructor(config?: ExtensionDataType.ConstructorProperties) 
    _init(config?: ExtensionDataType.ConstructorProperties): void
}

module ExtensionDataTypeRegistry {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

        registry?: any | null
    }

}

interface ExtensionDataTypeRegistry {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    readonly registry: any

    // Own fields of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    lookup(name: string | null): ExtensionDataType
    /**
     * Register the given `data_type` to the `registry`.
     * @param data_type A #GArrowExtensionDataType to be registered.
     * @returns %TRUE on success, %FALSE on error.
     */
    register(data_type: ExtensionDataType): boolean
    /**
     * Unregister an extension data type that has the given `name` from the
     * `registry`.
     * @param name An extension data type name to be unregistered.
     * @returns %TRUE on success, %FALSE on error.
     */
    unregister(name: string | null): boolean

    // Class property signals of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    connect(sigName: "notify::registry", callback: (($obj: ExtensionDataTypeRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registry", callback: (($obj: ExtensionDataTypeRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExtensionDataTypeRegistry extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    static name: string
    static $gtype: GObject.GType<ExtensionDataTypeRegistry>

    // Constructors of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    constructor(config?: ExtensionDataTypeRegistry.ConstructorProperties) 
    _init(config?: ExtensionDataTypeRegistry.ConstructorProperties): void
    static default(): ExtensionDataTypeRegistry
}

module ExtensionScalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface ExtensionScalar {

    // Own fields of Arrow-1.0.Arrow.ExtensionScalar

    parent_instance: Scalar & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.ExtensionScalar

    connect(sigName: "notify::data-type", callback: (($obj: ExtensionScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: ExtensionScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: ExtensionScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: ExtensionScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ExtensionScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.ExtensionScalar

    static name: string
    static $gtype: GObject.GType<ExtensionScalar>

    // Constructors of Arrow-1.0.Arrow.ExtensionScalar

    constructor(config?: ExtensionScalar.ConstructorProperties) 
    _init(config?: ExtensionScalar.ConstructorProperties): void
}

module FeatherFileReader {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.FeatherFileReader

        feather_reader?: any | null
    }

}

interface FeatherFileReader {

    // Own properties of Arrow-1.0.Arrow.FeatherFileReader

    readonly feather_reader: any

    // Own fields of Arrow-1.0.Arrow.FeatherFileReader

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FeatherFileReader

    get_version(): number
    read(): Table
    read_indices(indices: number[]): Table
    read_names(names: string[]): Table

    // Class property signals of Arrow-1.0.Arrow.FeatherFileReader

    connect(sigName: "notify::feather-reader", callback: (($obj: FeatherFileReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::feather-reader", callback: (($obj: FeatherFileReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::feather-reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FeatherFileReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FeatherFileReader

    static name: string
    static $gtype: GObject.GType<FeatherFileReader>

    // Constructors of Arrow-1.0.Arrow.FeatherFileReader

    constructor(config?: FeatherFileReader.ConstructorProperties) 
    constructor(file: SeekableInputStream) 
    static new(file: SeekableInputStream): FeatherFileReader
    _init(config?: FeatherFileReader.ConstructorProperties): void
}

module FeatherWriteProperties {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.FeatherWriteProperties

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
        compression?: CompressionType | null
    }

}

interface FeatherWriteProperties {

    // Own properties of Arrow-1.0.Arrow.FeatherWriteProperties

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
    compression: CompressionType

    // Own fields of Arrow-1.0.Arrow.FeatherWriteProperties

    parent_instance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.FeatherWriteProperties

    connect(sigName: "notify::compression", callback: (($obj: FeatherWriteProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression", callback: (($obj: FeatherWriteProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compression", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FeatherWriteProperties extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FeatherWriteProperties

    static name: string
    static $gtype: GObject.GType<FeatherWriteProperties>

    // Constructors of Arrow-1.0.Arrow.FeatherWriteProperties

    constructor(config?: FeatherWriteProperties.ConstructorProperties) 
    constructor() 
    static new(): FeatherWriteProperties
    _init(config?: FeatherWriteProperties.ConstructorProperties): void
}

module Field {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Field

        data_type?: DataType | null
        field?: any | null
    }

}

interface Field {

    // Own properties of Arrow-1.0.Arrow.Field

    readonly data_type: DataType
    readonly field: any

    // Own fields of Arrow-1.0.Arrow.Field

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Field

    equal(other_field: Field): boolean
    export(): any | null
    get_data_type(): DataType
    get_metadata(): GLib.HashTable | null
    get_name(): string | null
    has_metadata(): boolean
    is_nullable(): boolean
    remove_metadata(): Field
    to_string(): string | null
    to_string_metadata(show_metadata: boolean): string | null
    with_merged_metadata(metadata: GLib.HashTable): Field
    with_metadata(metadata: GLib.HashTable): Field

    // Class property signals of Arrow-1.0.Arrow.Field

    connect(sigName: "notify::data-type", callback: (($obj: Field, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Field, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::field", callback: (($obj: Field, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::field", callback: (($obj: Field, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::field", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Field extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Field

    static name: string
    static $gtype: GObject.GType<Field>

    // Constructors of Arrow-1.0.Arrow.Field

    constructor(config?: Field.ConstructorProperties) 
    constructor(name: string | null, data_type: DataType) 
    static new(name: string | null, data_type: DataType): Field
    static new_full(name: string | null, data_type: DataType, nullable: boolean): Field
    _init(config?: Field.ConstructorProperties): void
    static import(c_abi_schema: any): Field | null
}

module FieldExpression {

    // Constructor properties interface

    interface ConstructorProperties extends Expression.ConstructorProperties {
    }

}

interface FieldExpression {

    // Own fields of Arrow-1.0.Arrow.FieldExpression

    parent_instance: Expression & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.FieldExpression

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FieldExpression extends Expression {

    // Own properties of Arrow-1.0.Arrow.FieldExpression

    static name: string
    static $gtype: GObject.GType<FieldExpression>

    // Constructors of Arrow-1.0.Arrow.FieldExpression

    constructor(config?: FieldExpression.ConstructorProperties) 
    constructor(reference: string | null) 
    static new(reference: string | null): FieldExpression
    _init(config?: FieldExpression.ConstructorProperties): void
}

module FileInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.FileInfo

        /**
         * The time of last modification, if available.
         */
        mtime?: number | null
        /**
         * The full file path in the file system.
         */
        path?: string | null
        /**
         * The size in bytes, if available
         * Only regular files are guaranteed to have a size.
         */
        size?: number | null
        /**
         * The type of the entry.
         */
        type?: FileType | null
    }

}

interface FileInfo {

    // Own properties of Arrow-1.0.Arrow.FileInfo

    /**
     * The file base name (component after the last directory separator).
     */
    readonly base_name: string | null
    /**
     * The directory base name (component before the file base name).
     */
    readonly dir_name: string | null
    /**
     * The file extension (excluding the dot).
     */
    readonly extension: string | null
    /**
     * The time of last modification, if available.
     */
    mtime: number
    /**
     * The full file path in the file system.
     */
    path: string | null
    /**
     * The size in bytes, if available
     * Only regular files are guaranteed to have a size.
     */
    size: number
    /**
     * The type of the entry.
     */
    type: FileType

    // Own fields of Arrow-1.0.Arrow.FileInfo

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FileInfo

    equal(other_file_info: FileInfo): boolean
    is_dir(): boolean
    is_file(): boolean
    to_string(): string | null

    // Class property signals of Arrow-1.0.Arrow.FileInfo

    connect(sigName: "notify::base-name", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-name", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-name", ...args: any[]): void
    connect(sigName: "notify::dir-name", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dir-name", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dir-name", ...args: any[]): void
    connect(sigName: "notify::extension", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extension", ...args: any[]): void
    connect(sigName: "notify::mtime", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtime", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mtime", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileInfo extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FileInfo

    static name: string
    static $gtype: GObject.GType<FileInfo>

    // Constructors of Arrow-1.0.Arrow.FileInfo

    constructor(config?: FileInfo.ConstructorProperties) 
    constructor() 
    static new(): FileInfo
    _init(config?: FileInfo.ConstructorProperties): void
}

module FileInputStream {

    // Constructor properties interface

    interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, SeekableInputStream.ConstructorProperties {
    }

}

interface FileInputStream extends File, Readable {

    // Own fields of Arrow-1.0.Arrow.FileInputStream

    parent_instance: SeekableInputStream & InputStream & Gio.InputStream & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FileInputStream

    get_file_descriptor(): number

    // Conflicting methods

    close(): boolean
    /**
     * Closes the stream, releasing resources related to it.
     * 
     * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
     * Closing a stream multiple times will not return an error.
     * 
     * Streams will be automatically closed when the last reference
     * is dropped, but you might want to call this function to make sure
     * resources are released as early as possible.
     * 
     * Some streams might keep the backing store of the stream (e.g. a file descriptor)
     * open after the stream is closed. See the documentation for the individual
     * stream for details.
     * 
     * On failure the first error that happened will be reported, but the close
     * operation will finish as much as possible. A stream that failed to
     * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
     * is important to check and report the error to the user.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * Cancelling a close will still leave the stream closed, but some streams
     * can use a faster close that doesn't block to e.g. check errors.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE on success, %FALSE on failure
     */
    close(cancellable: Gio.Cancellable | null): boolean
    read(n_bytes: number): Buffer | null
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * If count is zero returns zero and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * The returned `buffer` is not a nul-terminated string, it can contain nul bytes
     * at any position, and this function doesn't nul-terminate the `buffer`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns Number of bytes read, or -1 on error, or 0 on end of file.
     */
    read(cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    read_bytes(n_bytes: number): GLib.Bytes | null
    /**
     * Like g_input_stream_read(), this tries to read `count` bytes from
     * the stream in a blocking fashion. However, rather than reading into
     * a user-supplied buffer, this will create a new #GBytes containing
     * the data that was read. This may be easier to use from language
     * bindings.
     * 
     * If count is zero, returns a zero-length #GBytes and does nothing. A
     * value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, a new #GBytes is returned. It is not an error if the
     * size of this object is not the same as the requested size, as it
     * can happen e.g. near the end of a file. A zero-length #GBytes is
     * returned on end of file (or if `count` is zero), but never
     * otherwise.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error %NULL is returned and `error` is set accordingly.
     * @param count maximum number of bytes that will be read from the stream. Common values include 4096 and 8192.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns a new #GBytes, or %NULL on error
     */
    read_bytes(count: number, cancellable: Gio.Cancellable | null): GLib.Bytes

    // Class property signals of Arrow-1.0.Arrow.FileInputStream

    connect(sigName: "notify::input-stream", callback: (($obj: FileInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: FileInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileInputStream extends SeekableInputStream {

    // Own properties of Arrow-1.0.Arrow.FileInputStream

    static name: string
    static $gtype: GObject.GType<FileInputStream>

    // Constructors of Arrow-1.0.Arrow.FileInputStream

    constructor(config?: FileInputStream.ConstructorProperties) 
    constructor(path: string | null) 
    static new(path: string | null): FileInputStream
    static new_file_descriptor(file_descriptor: number): FileInputStream
    _init(config?: FileInputStream.ConstructorProperties): void
}

module FileOutputStream {

    // Constructor properties interface

    interface ConstructorProperties extends File.ConstructorProperties, Writable.ConstructorProperties, OutputStream.ConstructorProperties {
    }

}

interface FileOutputStream extends File, Writable {

    // Class property signals of Arrow-1.0.Arrow.FileOutputStream

    connect(sigName: "notify::output-stream", callback: (($obj: FileOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: FileOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * It wraps `arrow::io::FileOutputStream`.
 * @class 
 */
class FileOutputStream extends OutputStream {

    // Own properties of Arrow-1.0.Arrow.FileOutputStream

    static name: string
    static $gtype: GObject.GType<FileOutputStream>

    // Constructors of Arrow-1.0.Arrow.FileOutputStream

    constructor(config?: FileOutputStream.ConstructorProperties) 
    constructor(path: string | null, append: boolean) 
    static new(path: string | null, append: boolean): FileOutputStream
    _init(config?: FileOutputStream.ConstructorProperties): void
}

module FileSelector {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.FileSelector

        /**
         * The behavior if `base_dir` isn't found in the file system.
         * If false, an error is returned.  If true, an empty selection is returned.
         */
        allow_not_found?: boolean | null
        /**
         * The directory in which to select files.
         * If the path exists but doesn't point to a directory, this should
         * be an error.
         */
        base_dir?: string | null
        /**
         * The maximum number of subdirectories to recurse into.
         */
        max_recursion?: number | null
        /**
         * Whether to recurse into subdirectories.
         */
        recursive?: boolean | null
    }

}

interface FileSelector {

    // Own properties of Arrow-1.0.Arrow.FileSelector

    /**
     * The behavior if `base_dir` isn't found in the file system.
     * If false, an error is returned.  If true, an empty selection is returned.
     */
    allow_not_found: boolean
    /**
     * The directory in which to select files.
     * If the path exists but doesn't point to a directory, this should
     * be an error.
     */
    base_dir: string | null
    /**
     * The maximum number of subdirectories to recurse into.
     */
    max_recursion: number
    /**
     * Whether to recurse into subdirectories.
     */
    recursive: boolean

    // Own fields of Arrow-1.0.Arrow.FileSelector

    parent_instance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.FileSelector

    connect(sigName: "notify::allow-not-found", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-not-found", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-not-found", ...args: any[]): void
    connect(sigName: "notify::base-dir", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-dir", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-dir", ...args: any[]): void
    connect(sigName: "notify::max-recursion", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-recursion", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-recursion", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: (($obj: FileSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileSelector extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FileSelector

    static name: string
    static $gtype: GObject.GType<FileSelector>

    // Constructors of Arrow-1.0.Arrow.FileSelector

    constructor(config?: FileSelector.ConstructorProperties) 
    _init(config?: FileSelector.ConstructorProperties): void
}

module FileSystem {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.FileSystem

        file_system?: any | null
    }

}

interface FileSystem {

    // Own properties of Arrow-1.0.Arrow.FileSystem

    readonly file_system: any

    // Own fields of Arrow-1.0.Arrow.FileSystem

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FileSystem

    /**
     * Copy a file.
     * If the destination exists and is a directory, an error is returned.
     * Otherwise, it is replaced.
     * @param src The path of the source file.
     * @param dest The path of the destination.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    copy_file(src: string | null, dest: string | null): boolean
    /**
     * Create a directory and subdirectories.
     * This function succeeds if the directory already exists.
     * @param path The paths of the directory.
     * @param recursive Whether creating directory recursively or not.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    create_dir(path: string | null, recursive: boolean): boolean
    /**
     * Delete a directory and its contents, recursively.
     * @param path The paths of the directory.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    delete_dir(path: string | null): boolean
    /**
     * Delete a directory's contents, recursively. Like
     * garrow_file_system_delete_dir(), but doesn't delete the directory
     * itself. Passing an empty path (`""`) will wipe the entire file
     * system tree.
     * @param path The paths of the directory.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    delete_dir_contents(path: string | null): boolean
    /**
     * Delete a file.
     * @param path The paths of the file to be delete.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    delete_file(path: string | null): boolean
    /**
     * Delete many files.
     * @param paths    The paths of the files to be delete.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    delete_files(paths: string[]): boolean
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
    get_file_info(path: string | null): FileInfo | null
    /**
     * Get information same as garrow_file_system_get_file_info()
     * for the given many targets at once.
     * @param paths The paths of the targets.
     * @returns    A list of #GArrowFileInfo.
     */
    get_file_infos_paths(paths: string[]): FileInfo[]
    /**
     * Get information same as garrow_file_system_get_file_info()
     * according to a selector.
     * 
     * The selector's base directory will not be part of the results,
     * even if it exists.
     * @param file_selector A #GArrowFileSelector.
     * @returns    A list of #GArrowFileInfo.
     */
    get_file_infos_selector(file_selector: FileSelector): FileInfo[]
    get_type_name(): string | null
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
    move(src: string | null, dest: string | null): boolean
    /**
     * Open an output stream for appending.
     * If the target doesn't exist, a new empty file is created.
     * @param path The path of the output stream.
     * @returns A newly created #GArrowOutputStream   for appending.
     */
    open_append_stream(path: string | null): OutputStream | null
    /**
     * Open an input file for random access reading.
     * @param path The path of the input file.
     * @returns A newly created   #GArrowSeekableInputStream.
     */
    open_input_file(path: string | null): SeekableInputStream | null
    /**
     * Open an input stream for sequential reading.
     * @param path The path of the input stream.
     * @returns A newly created   #GArrowInputStream.
     */
    open_input_stream(path: string | null): InputStream | null
    /**
     * Open an output stream for sequential writing.
     * If the target already exists, the existing data is truncated.
     * @param path The path of the output stream.
     * @returns A newly created   #GArrowOutputStream.
     */
    open_output_stream(path: string | null): OutputStream | null

    // Class property signals of Arrow-1.0.Arrow.FileSystem

    connect(sigName: "notify::file-system", callback: (($obj: FileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-system", callback: (($obj: FileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileSystem extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FileSystem

    static name: string
    static $gtype: GObject.GType<FileSystem>

    // Constructors of Arrow-1.0.Arrow.FileSystem

    constructor(config?: FileSystem.ConstructorProperties) 
    _init(config?: FileSystem.ConstructorProperties): void
    /**
     * This is a factory function to create a specific #GArrowFileSystem
     * object.
     * @param uri An URI to specify file system with options. If you only have an   absolute path, g_filename_to_uri() will help you.
     * @returns The newly created file system   that is an object of a subclass of #GArrowFileSystem.
     */
    static create(uri: string | null): FileSystem | null
}

module FilterOptions {

    // Constructor properties interface

    interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.FilterOptions

        /**
         * How to handle filtered values.
         */
        null_selection_behavior?: FilterNullSelectionBehavior | null
    }

}

interface FilterOptions {

    // Own properties of Arrow-1.0.Arrow.FilterOptions

    /**
     * How to handle filtered values.
     */
    null_selection_behavior: FilterNullSelectionBehavior

    // Own fields of Arrow-1.0.Arrow.FilterOptions

    parent_instance: FunctionOptions & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.FilterOptions

    connect(sigName: "notify::null-selection-behavior", callback: (($obj: FilterOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-selection-behavior", callback: (($obj: FilterOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-selection-behavior", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FilterOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.FilterOptions

    static name: string
    static $gtype: GObject.GType<FilterOptions>

    // Constructors of Arrow-1.0.Arrow.FilterOptions

    constructor(config?: FilterOptions.ConstructorProperties) 
    constructor() 
    static new(): FilterOptions
    _init(config?: FilterOptions.ConstructorProperties): void
}

module FixedSizeBinaryArray {

    // Constructor properties interface

    interface ConstructorProperties extends PrimitiveArray.ConstructorProperties {
    }

}

interface FixedSizeBinaryArray {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryArray

    parent_instance: PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FixedSizeBinaryArray

    get_byte_width(): number
    get_value(i: number): GLib.Bytes
    get_values_bytes(): GLib.Bytes

    // Class property signals of Arrow-1.0.Arrow.FixedSizeBinaryArray

    connect(sigName: "notify::array", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: FixedSizeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FixedSizeBinaryArray extends PrimitiveArray {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArray

    static name: string
    static $gtype: GObject.GType<FixedSizeBinaryArray>

    // Constructors of Arrow-1.0.Arrow.FixedSizeBinaryArray

    constructor(config?: FixedSizeBinaryArray.ConstructorProperties) 
    constructor(data_type: FixedSizeBinaryDataType, length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(data_type: FixedSizeBinaryDataType, length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): FixedSizeBinaryArray
    _init(config?: FixedSizeBinaryArray.ConstructorProperties): void
}

module FixedSizeBinaryArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface FixedSizeBinaryArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    append_value(value: Uint8Array | null): boolean
    append_value_bytes(value: GLib.Bytes): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: GLib.Bytes[], is_valids: boolean[] | null): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * 
     * This is more efficient than
     * garrow_fixed_size_binary_array_builder_append_values().
     * @param values A #GBytes that contains multiple values.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values_packed(values: GLib.Bytes, is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: FixedSizeBinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: FixedSizeBinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FixedSizeBinaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    static name: string
    static $gtype: GObject.GType<FixedSizeBinaryArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    constructor(config?: FixedSizeBinaryArrayBuilder.ConstructorProperties) 
    constructor(data_type: FixedSizeBinaryDataType) 
    static new(data_type: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder
    _init(config?: FixedSizeBinaryArrayBuilder.ConstructorProperties): void
}

module FixedSizeBinaryDataType {

    // Constructor properties interface

    interface ConstructorProperties extends FixedWidthDataType.ConstructorProperties {
    }

}

interface FixedSizeBinaryDataType {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    parent_instance: DataType & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    get_byte_width(): number

    // Class property signals of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    connect(sigName: "notify::data-type", callback: (($obj: FixedSizeBinaryDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: FixedSizeBinaryDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FixedSizeBinaryDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    static name: string
    static $gtype: GObject.GType<FixedSizeBinaryDataType>

    // Constructors of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    constructor(config?: FixedSizeBinaryDataType.ConstructorProperties) 
    constructor(byte_width: number) 
    static new(byte_width: number): FixedSizeBinaryDataType
    _init(config?: FixedSizeBinaryDataType.ConstructorProperties): void
}

module FixedSizeBinaryScalar {

    // Constructor properties interface

    interface ConstructorProperties extends BaseBinaryScalar.ConstructorProperties {
    }

}

interface FixedSizeBinaryScalar {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryScalar

    parent_instance: BaseBinaryScalar & Scalar & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.FixedSizeBinaryScalar

    connect(sigName: "notify::value", callback: (($obj: FixedSizeBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: FixedSizeBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: FixedSizeBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: FixedSizeBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: FixedSizeBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: FixedSizeBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FixedSizeBinaryScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryScalar

    static name: string
    static $gtype: GObject.GType<FixedSizeBinaryScalar>

    // Constructors of Arrow-1.0.Arrow.FixedSizeBinaryScalar

    constructor(config?: FixedSizeBinaryScalar.ConstructorProperties) 
    constructor(data_type: FixedSizeBinaryDataType, value: Buffer) 
    static new(data_type: FixedSizeBinaryDataType, value: Buffer): FixedSizeBinaryScalar
    _init(config?: FixedSizeBinaryScalar.ConstructorProperties): void
}

module FixedWidthDataType {

    // Constructor properties interface

    interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

interface FixedWidthDataType {

    // Own fields of Arrow-1.0.Arrow.FixedWidthDataType

    parent_instance: DataType & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FixedWidthDataType

    get_bit_width(): number

    // Class property signals of Arrow-1.0.Arrow.FixedWidthDataType

    connect(sigName: "notify::data-type", callback: (($obj: FixedWidthDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: FixedWidthDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FixedWidthDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.FixedWidthDataType

    static name: string
    static $gtype: GObject.GType<FixedWidthDataType>

    // Constructors of Arrow-1.0.Arrow.FixedWidthDataType

    constructor(config?: FixedWidthDataType.ConstructorProperties) 
    _init(config?: FixedWidthDataType.ConstructorProperties): void
}

module FloatArray {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface FloatArray {

    // Own fields of Arrow-1.0.Arrow.FloatArray

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FloatArray

    get_value(i: number): number
    get_values(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.FloatArray

    connect(sigName: "notify::array", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: FloatArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FloatArray extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.FloatArray

    static name: string
    static $gtype: GObject.GType<FloatArray>

    // Constructors of Arrow-1.0.Arrow.FloatArray

    constructor(config?: FloatArray.ConstructorProperties) 
    constructor(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): FloatArray
    _init(config?: FloatArray.ConstructorProperties): void
}

module FloatArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface FloatArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.FloatArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FloatArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of float.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.FloatArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: FloatArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: FloatArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FloatArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.FloatArrayBuilder

    static name: string
    static $gtype: GObject.GType<FloatArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.FloatArrayBuilder

    constructor(config?: FloatArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): FloatArrayBuilder
    _init(config?: FloatArrayBuilder.ConstructorProperties): void
}

module FloatDataType {

    // Constructor properties interface

    interface ConstructorProperties extends FloatingPointDataType.ConstructorProperties {
    }

}

interface FloatDataType {

    // Own fields of Arrow-1.0.Arrow.FloatDataType

    parent_instance: FloatingPointDataType & NumericDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.FloatDataType

    connect(sigName: "notify::data-type", callback: (($obj: FloatDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: FloatDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FloatDataType extends FloatingPointDataType {

    // Own properties of Arrow-1.0.Arrow.FloatDataType

    static name: string
    static $gtype: GObject.GType<FloatDataType>

    // Constructors of Arrow-1.0.Arrow.FloatDataType

    constructor(config?: FloatDataType.ConstructorProperties) 
    constructor() 
    static new(): FloatDataType
    _init(config?: FloatDataType.ConstructorProperties): void
}

module FloatScalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface FloatScalar {

    // Own fields of Arrow-1.0.Arrow.FloatScalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FloatScalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.FloatScalar

    connect(sigName: "notify::data-type", callback: (($obj: FloatScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: FloatScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: FloatScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: FloatScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FloatScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.FloatScalar

    static name: string
    static $gtype: GObject.GType<FloatScalar>

    // Constructors of Arrow-1.0.Arrow.FloatScalar

    constructor(config?: FloatScalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): FloatScalar
    _init(config?: FloatScalar.ConstructorProperties): void
}

module FloatingPointDataType {

    // Constructor properties interface

    interface ConstructorProperties extends NumericDataType.ConstructorProperties {
    }

}

interface FloatingPointDataType {

    // Own fields of Arrow-1.0.Arrow.FloatingPointDataType

    parent_instance: NumericDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.FloatingPointDataType

    connect(sigName: "notify::data-type", callback: (($obj: FloatingPointDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: FloatingPointDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FloatingPointDataType extends NumericDataType {

    // Own properties of Arrow-1.0.Arrow.FloatingPointDataType

    static name: string
    static $gtype: GObject.GType<FloatingPointDataType>

    // Constructors of Arrow-1.0.Arrow.FloatingPointDataType

    constructor(config?: FloatingPointDataType.ConstructorProperties) 
    _init(config?: FloatingPointDataType.ConstructorProperties): void
}

module Function {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Function

        "function"?: any | null
    }

}

interface Function {

    // Own properties of Arrow-1.0.Arrow.Function

    readonly "function": any

    // Own fields of Arrow-1.0.Arrow.Function

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Function

    equal(other_function: Function): boolean
    execute(args: Datum[], options: FunctionOptions | null, context: ExecuteContext | null): Datum | null
    get_default_options(): FunctionOptions | null
    get_doc(): FunctionDoc
    get_name(): string | null
    get_options_type(): GObject.GType
    to_string(): string | null

    // Class property signals of Arrow-1.0.Arrow.Function

    connect(sigName: "notify::function", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::function", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::function", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Function extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Function

    static name: string
    static $gtype: GObject.GType<Function>

    // Constructors of Arrow-1.0.Arrow.Function

    constructor(config?: Function.ConstructorProperties) 
    _init(config?: Function.ConstructorProperties): void
    static all(): Function[]
    static find(name: string | null): Function
}

module FunctionDoc {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.FunctionDoc

        doc?: any | null
    }

}

interface FunctionDoc {

    // Own properties of Arrow-1.0.Arrow.FunctionDoc

    readonly doc: any

    // Own fields of Arrow-1.0.Arrow.FunctionDoc

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FunctionDoc

    get_arg_names(): string[]
    get_description(): string | null
    get_options_class_name(): string | null
    get_summary(): string | null

    // Class property signals of Arrow-1.0.Arrow.FunctionDoc

    connect(sigName: "notify::doc", callback: (($obj: FunctionDoc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doc", callback: (($obj: FunctionDoc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doc", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FunctionDoc extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FunctionDoc

    static name: string
    static $gtype: GObject.GType<FunctionDoc>

    // Constructors of Arrow-1.0.Arrow.FunctionDoc

    constructor(config?: FunctionDoc.ConstructorProperties) 
    _init(config?: FunctionDoc.ConstructorProperties): void
}

module FunctionOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FunctionOptions {

    // Own fields of Arrow-1.0.Arrow.FunctionOptions

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FunctionOptions

    equal(other_options: FunctionOptions | null): boolean
    to_string(): string | null

    // Class property signals of Arrow-1.0.Arrow.FunctionOptions

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FunctionOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FunctionOptions

    static name: string
    static $gtype: GObject.GType<FunctionOptions>

    // Constructors of Arrow-1.0.Arrow.FunctionOptions

    constructor(config?: FunctionOptions.ConstructorProperties) 
    _init(config?: FunctionOptions.ConstructorProperties): void
}

module GIOInputStream {

    // Constructor properties interface

    interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, SeekableInputStream.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.GIOInputStream

        raw?: Gio.InputStream | null
    }

}

interface GIOInputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.GIOInputStream

    readonly raw: Gio.InputStream

    // Conflicting properties

    parent_instance: InputStream & Gio.InputStream & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.GIOInputStream

    get_raw(): Gio.InputStream

    // Conflicting methods

    close(): boolean
    /**
     * Closes the stream, releasing resources related to it.
     * 
     * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
     * Closing a stream multiple times will not return an error.
     * 
     * Streams will be automatically closed when the last reference
     * is dropped, but you might want to call this function to make sure
     * resources are released as early as possible.
     * 
     * Some streams might keep the backing store of the stream (e.g. a file descriptor)
     * open after the stream is closed. See the documentation for the individual
     * stream for details.
     * 
     * On failure the first error that happened will be reported, but the close
     * operation will finish as much as possible. A stream that failed to
     * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
     * is important to check and report the error to the user.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * Cancelling a close will still leave the stream closed, but some streams
     * can use a faster close that doesn't block to e.g. check errors.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE on success, %FALSE on failure
     */
    close(cancellable: Gio.Cancellable | null): boolean
    read(n_bytes: number): Buffer | null
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * If count is zero returns zero and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * The returned `buffer` is not a nul-terminated string, it can contain nul bytes
     * at any position, and this function doesn't nul-terminate the `buffer`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns Number of bytes read, or -1 on error, or 0 on end of file.
     */
    read(cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    read_bytes(n_bytes: number): GLib.Bytes | null
    /**
     * Like g_input_stream_read(), this tries to read `count` bytes from
     * the stream in a blocking fashion. However, rather than reading into
     * a user-supplied buffer, this will create a new #GBytes containing
     * the data that was read. This may be easier to use from language
     * bindings.
     * 
     * If count is zero, returns a zero-length #GBytes and does nothing. A
     * value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, a new #GBytes is returned. It is not an error if the
     * size of this object is not the same as the requested size, as it
     * can happen e.g. near the end of a file. A zero-length #GBytes is
     * returned on end of file (or if `count` is zero), but never
     * otherwise.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error %NULL is returned and `error` is set accordingly.
     * @param count maximum number of bytes that will be read from the stream. Common values include 4096 and 8192.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns a new #GBytes, or %NULL on error
     */
    read_bytes(count: number, cancellable: Gio.Cancellable | null): GLib.Bytes

    // Class property signals of Arrow-1.0.Arrow.GIOInputStream

    connect(sigName: "notify::raw", callback: (($obj: GIOInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw", callback: (($obj: GIOInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (($obj: GIOInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: GIOInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * It's an input stream for `GInputStream`.
 * @class 
 */
class GIOInputStream extends SeekableInputStream {

    // Own properties of Arrow-1.0.Arrow.GIOInputStream

    static name: string
    static $gtype: GObject.GType<GIOInputStream>

    // Constructors of Arrow-1.0.Arrow.GIOInputStream

    constructor(config?: GIOInputStream.ConstructorProperties) 
    constructor(gio_input_stream: Gio.InputStream) 
    static new(gio_input_stream: Gio.InputStream): GIOInputStream
    _init(config?: GIOInputStream.ConstructorProperties): void
}

module GIOOutputStream {

    // Constructor properties interface

    interface ConstructorProperties extends File.ConstructorProperties, Writable.ConstructorProperties, OutputStream.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.GIOOutputStream

        raw?: Gio.OutputStream | null
    }

}

interface GIOOutputStream extends File, Writable {

    // Own properties of Arrow-1.0.Arrow.GIOOutputStream

    readonly raw: Gio.OutputStream

    // Owm methods of Arrow-1.0.Arrow.GIOOutputStream

    get_raw(): Gio.OutputStream

    // Class property signals of Arrow-1.0.Arrow.GIOOutputStream

    connect(sigName: "notify::raw", callback: (($obj: GIOOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw", callback: (($obj: GIOOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw", ...args: any[]): void
    connect(sigName: "notify::output-stream", callback: (($obj: GIOOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: GIOOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * It's an output stream for `GOutputStream`.
 * @class 
 */
class GIOOutputStream extends OutputStream {

    // Own properties of Arrow-1.0.Arrow.GIOOutputStream

    static name: string
    static $gtype: GObject.GType<GIOOutputStream>

    // Constructors of Arrow-1.0.Arrow.GIOOutputStream

    constructor(config?: GIOOutputStream.ConstructorProperties) 
    constructor(gio_output_stream: Gio.OutputStream) 
    static new(gio_output_stream: Gio.OutputStream): GIOOutputStream
    _init(config?: GIOOutputStream.ConstructorProperties): void
}

module HDFSFileSystem {

    // Constructor properties interface

    interface ConstructorProperties extends FileSystem.ConstructorProperties {
    }

}

interface HDFSFileSystem {

    // Own fields of Arrow-1.0.Arrow.HDFSFileSystem

    parent_instance: FileSystem & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.HDFSFileSystem

    connect(sigName: "notify::file-system", callback: (($obj: HDFSFileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-system", callback: (($obj: HDFSFileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HDFSFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.HDFSFileSystem

    static name: string
    static $gtype: GObject.GType<HDFSFileSystem>

    // Constructors of Arrow-1.0.Arrow.HDFSFileSystem

    constructor(config?: HDFSFileSystem.ConstructorProperties) 
    _init(config?: HDFSFileSystem.ConstructorProperties): void
}

module HashJoinNodeOptions {

    // Constructor properties interface

    interface ConstructorProperties extends ExecuteNodeOptions.ConstructorProperties {
    }

}

interface HashJoinNodeOptions {

    // Own fields of Arrow-1.0.Arrow.HashJoinNodeOptions

    parent_instance: ExecuteNodeOptions & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.HashJoinNodeOptions

    set_left_outputs(outputs: string[]): boolean
    set_right_outputs(outputs: string[]): boolean

    // Class property signals of Arrow-1.0.Arrow.HashJoinNodeOptions

    connect(sigName: "notify::options", callback: (($obj: HashJoinNodeOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: HashJoinNodeOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HashJoinNodeOptions extends ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.HashJoinNodeOptions

    static name: string
    static $gtype: GObject.GType<HashJoinNodeOptions>

    // Constructors of Arrow-1.0.Arrow.HashJoinNodeOptions

    constructor(config?: HashJoinNodeOptions.ConstructorProperties) 
    constructor(type: JoinType, left_keys: string[], right_keys: string[]) 
    static new(type: JoinType, left_keys: string[], right_keys: string[]): HashJoinNodeOptions
    _init(config?: HashJoinNodeOptions.ConstructorProperties): void
}

module InputStream {

    // Constructor properties interface

    interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, Gio.InputStream.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.InputStream

        input_stream?: any | null
    }

}

interface InputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.InputStream

    readonly input_stream: any

    // Own fields of Arrow-1.0.Arrow.InputStream

    parent_instance: Gio.InputStream & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.InputStream

    advance(n_bytes: number): boolean
    align(alignment: number): boolean
    read_record_batch(schema: Schema, options: ReadOptions | null): RecordBatch | null
    read_tensor(): Tensor | null

    // Conflicting methods

    close(): boolean
    /**
     * Closes the stream, releasing resources related to it.
     * 
     * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
     * Closing a stream multiple times will not return an error.
     * 
     * Streams will be automatically closed when the last reference
     * is dropped, but you might want to call this function to make sure
     * resources are released as early as possible.
     * 
     * Some streams might keep the backing store of the stream (e.g. a file descriptor)
     * open after the stream is closed. See the documentation for the individual
     * stream for details.
     * 
     * On failure the first error that happened will be reported, but the close
     * operation will finish as much as possible. A stream that failed to
     * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
     * is important to check and report the error to the user.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * Cancelling a close will still leave the stream closed, but some streams
     * can use a faster close that doesn't block to e.g. check errors.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE on success, %FALSE on failure
     */
    close(cancellable: Gio.Cancellable | null): boolean
    read(n_bytes: number): Buffer | null
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * If count is zero returns zero and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * The returned `buffer` is not a nul-terminated string, it can contain nul bytes
     * at any position, and this function doesn't nul-terminate the `buffer`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns Number of bytes read, or -1 on error, or 0 on end of file.
     */
    read(cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    read_bytes(n_bytes: number): GLib.Bytes | null
    /**
     * Like g_input_stream_read(), this tries to read `count` bytes from
     * the stream in a blocking fashion. However, rather than reading into
     * a user-supplied buffer, this will create a new #GBytes containing
     * the data that was read. This may be easier to use from language
     * bindings.
     * 
     * If count is zero, returns a zero-length #GBytes and does nothing. A
     * value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, a new #GBytes is returned. It is not an error if the
     * size of this object is not the same as the requested size, as it
     * can happen e.g. near the end of a file. A zero-length #GBytes is
     * returned on end of file (or if `count` is zero), but never
     * otherwise.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error %NULL is returned and `error` is set accordingly.
     * @param count maximum number of bytes that will be read from the stream. Common values include 4096 and 8192.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns a new #GBytes, or %NULL on error
     */
    read_bytes(count: number, cancellable: Gio.Cancellable | null): GLib.Bytes

    // Class property signals of Arrow-1.0.Arrow.InputStream

    connect(sigName: "notify::input-stream", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InputStream extends Gio.InputStream {

    // Own properties of Arrow-1.0.Arrow.InputStream

    static name: string
    static $gtype: GObject.GType<InputStream>

    // Constructors of Arrow-1.0.Arrow.InputStream

    constructor(config?: InputStream.ConstructorProperties) 
    _init(config?: InputStream.ConstructorProperties): void
}

module Int16Array {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface Int16Array {

    // Own fields of Arrow-1.0.Arrow.Int16Array

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Int16Array

    get_value(i: number): number
    get_values(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.Int16Array

    connect(sigName: "notify::array", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: Int16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int16Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Int16Array

    static name: string
    static $gtype: GObject.GType<Int16Array>

    // Constructors of Arrow-1.0.Arrow.Int16Array

    constructor(config?: Int16Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int16Array
    _init(config?: Int16Array.ConstructorProperties): void
}

module Int16ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface Int16ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Int16ArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Int16ArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int16.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Int16ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: Int16ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: Int16ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int16ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int16ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Int16ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Int16ArrayBuilder

    constructor(config?: Int16ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): Int16ArrayBuilder
    _init(config?: Int16ArrayBuilder.ConstructorProperties): void
}

module Int16DataType {

    // Constructor properties interface

    interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

interface Int16DataType {

    // Own fields of Arrow-1.0.Arrow.Int16DataType

    parent_instance: IntegerDataType & NumericDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.Int16DataType

    connect(sigName: "notify::data-type", callback: (($obj: Int16DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Int16DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int16DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.Int16DataType

    static name: string
    static $gtype: GObject.GType<Int16DataType>

    // Constructors of Arrow-1.0.Arrow.Int16DataType

    constructor(config?: Int16DataType.ConstructorProperties) 
    constructor() 
    static new(): Int16DataType
    _init(config?: Int16DataType.ConstructorProperties): void
}

module Int16Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface Int16Scalar {

    // Own fields of Arrow-1.0.Arrow.Int16Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Int16Scalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.Int16Scalar

    connect(sigName: "notify::data-type", callback: (($obj: Int16Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Int16Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: Int16Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: Int16Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int16Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Int16Scalar

    static name: string
    static $gtype: GObject.GType<Int16Scalar>

    // Constructors of Arrow-1.0.Arrow.Int16Scalar

    constructor(config?: Int16Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Int16Scalar
    _init(config?: Int16Scalar.ConstructorProperties): void
}

module Int32Array {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface Int32Array {

    // Own fields of Arrow-1.0.Arrow.Int32Array

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Int32Array

    get_value(i: number): number
    get_values(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.Int32Array

    connect(sigName: "notify::array", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: Int32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int32Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Int32Array

    static name: string
    static $gtype: GObject.GType<Int32Array>

    // Constructors of Arrow-1.0.Arrow.Int32Array

    constructor(config?: Int32Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int32Array
    _init(config?: Int32Array.ConstructorProperties): void
}

module Int32ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface Int32ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Int32ArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Int32ArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int32.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Int32ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: Int32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: Int32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int32ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int32ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Int32ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Int32ArrayBuilder

    constructor(config?: Int32ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): Int32ArrayBuilder
    _init(config?: Int32ArrayBuilder.ConstructorProperties): void
}

module Int32DataType {

    // Constructor properties interface

    interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

interface Int32DataType {

    // Own fields of Arrow-1.0.Arrow.Int32DataType

    parent_instance: IntegerDataType & NumericDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.Int32DataType

    connect(sigName: "notify::data-type", callback: (($obj: Int32DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Int32DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int32DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.Int32DataType

    static name: string
    static $gtype: GObject.GType<Int32DataType>

    // Constructors of Arrow-1.0.Arrow.Int32DataType

    constructor(config?: Int32DataType.ConstructorProperties) 
    constructor() 
    static new(): Int32DataType
    _init(config?: Int32DataType.ConstructorProperties): void
}

module Int32Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface Int32Scalar {

    // Own fields of Arrow-1.0.Arrow.Int32Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Int32Scalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.Int32Scalar

    connect(sigName: "notify::data-type", callback: (($obj: Int32Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Int32Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: Int32Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: Int32Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int32Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Int32Scalar

    static name: string
    static $gtype: GObject.GType<Int32Scalar>

    // Constructors of Arrow-1.0.Arrow.Int32Scalar

    constructor(config?: Int32Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Int32Scalar
    _init(config?: Int32Scalar.ConstructorProperties): void
}

module Int64Array {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface Int64Array {

    // Own fields of Arrow-1.0.Arrow.Int64Array

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Int64Array

    get_value(i: number): number
    get_values(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.Int64Array

    connect(sigName: "notify::array", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: Int64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int64Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Int64Array

    static name: string
    static $gtype: GObject.GType<Int64Array>

    // Constructors of Arrow-1.0.Arrow.Int64Array

    constructor(config?: Int64Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int64Array
    _init(config?: Int64Array.ConstructorProperties): void
}

module Int64ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface Int64ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Int64ArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Int64ArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int64.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Int64ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: Int64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: Int64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int64ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int64ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Int64ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Int64ArrayBuilder

    constructor(config?: Int64ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): Int64ArrayBuilder
    _init(config?: Int64ArrayBuilder.ConstructorProperties): void
}

module Int64DataType {

    // Constructor properties interface

    interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

interface Int64DataType {

    // Own fields of Arrow-1.0.Arrow.Int64DataType

    parent_instance: IntegerDataType & NumericDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.Int64DataType

    connect(sigName: "notify::data-type", callback: (($obj: Int64DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Int64DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int64DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.Int64DataType

    static name: string
    static $gtype: GObject.GType<Int64DataType>

    // Constructors of Arrow-1.0.Arrow.Int64DataType

    constructor(config?: Int64DataType.ConstructorProperties) 
    constructor() 
    static new(): Int64DataType
    _init(config?: Int64DataType.ConstructorProperties): void
}

module Int64Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface Int64Scalar {

    // Own fields of Arrow-1.0.Arrow.Int64Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Int64Scalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.Int64Scalar

    connect(sigName: "notify::data-type", callback: (($obj: Int64Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Int64Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: Int64Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: Int64Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int64Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Int64Scalar

    static name: string
    static $gtype: GObject.GType<Int64Scalar>

    // Constructors of Arrow-1.0.Arrow.Int64Scalar

    constructor(config?: Int64Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Int64Scalar
    _init(config?: Int64Scalar.ConstructorProperties): void
}

module Int8Array {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface Int8Array {

    // Own fields of Arrow-1.0.Arrow.Int8Array

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Int8Array

    get_value(i: number): number
    get_values(): Uint8Array
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.Int8Array

    connect(sigName: "notify::array", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: Int8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int8Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Int8Array

    static name: string
    static $gtype: GObject.GType<Int8Array>

    // Constructors of Arrow-1.0.Arrow.Int8Array

    constructor(config?: Int8Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int8Array
    _init(config?: Int8Array.ConstructorProperties): void
}

module Int8ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface Int8ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Int8ArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Int8ArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int8.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: Uint8Array, is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Int8ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: Int8ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: Int8ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int8ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int8ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Int8ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Int8ArrayBuilder

    constructor(config?: Int8ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): Int8ArrayBuilder
    _init(config?: Int8ArrayBuilder.ConstructorProperties): void
}

module Int8DataType {

    // Constructor properties interface

    interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

interface Int8DataType {

    // Own fields of Arrow-1.0.Arrow.Int8DataType

    parent_instance: IntegerDataType & NumericDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.Int8DataType

    connect(sigName: "notify::data-type", callback: (($obj: Int8DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Int8DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int8DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.Int8DataType

    static name: string
    static $gtype: GObject.GType<Int8DataType>

    // Constructors of Arrow-1.0.Arrow.Int8DataType

    constructor(config?: Int8DataType.ConstructorProperties) 
    constructor() 
    static new(): Int8DataType
    _init(config?: Int8DataType.ConstructorProperties): void
}

module Int8Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface Int8Scalar {

    // Own fields of Arrow-1.0.Arrow.Int8Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Int8Scalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.Int8Scalar

    connect(sigName: "notify::data-type", callback: (($obj: Int8Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Int8Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: Int8Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: Int8Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Int8Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Int8Scalar

    static name: string
    static $gtype: GObject.GType<Int8Scalar>

    // Constructors of Arrow-1.0.Arrow.Int8Scalar

    constructor(config?: Int8Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Int8Scalar
    _init(config?: Int8Scalar.ConstructorProperties): void
}

module IntArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface IntArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.IntArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.IntArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.IntArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: IntArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: IntArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IntArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.IntArrayBuilder

    static name: string
    static $gtype: GObject.GType<IntArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.IntArrayBuilder

    constructor(config?: IntArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): IntArrayBuilder
    _init(config?: IntArrayBuilder.ConstructorProperties): void
}

module IntegerDataType {

    // Constructor properties interface

    interface ConstructorProperties extends NumericDataType.ConstructorProperties {
    }

}

interface IntegerDataType {

    // Own fields of Arrow-1.0.Arrow.IntegerDataType

    parent_instance: NumericDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.IntegerDataType

    is_signed(): boolean

    // Class property signals of Arrow-1.0.Arrow.IntegerDataType

    connect(sigName: "notify::data-type", callback: (($obj: IntegerDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: IntegerDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IntegerDataType extends NumericDataType {

    // Own properties of Arrow-1.0.Arrow.IntegerDataType

    static name: string
    static $gtype: GObject.GType<IntegerDataType>

    // Constructors of Arrow-1.0.Arrow.IntegerDataType

    constructor(config?: IntegerDataType.ConstructorProperties) 
    _init(config?: IntegerDataType.ConstructorProperties): void
}

module IntervalDataType {

    // Constructor properties interface

    interface ConstructorProperties extends TemporalDataType.ConstructorProperties {
    }

}

interface IntervalDataType {

    // Own fields of Arrow-1.0.Arrow.IntervalDataType

    parent_instance: TimeDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.IntervalDataType

    get_interval_type(): IntervalType

    // Class property signals of Arrow-1.0.Arrow.IntervalDataType

    connect(sigName: "notify::data-type", callback: (($obj: IntervalDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: IntervalDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IntervalDataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.IntervalDataType

    static name: string
    static $gtype: GObject.GType<IntervalDataType>

    // Constructors of Arrow-1.0.Arrow.IntervalDataType

    constructor(config?: IntervalDataType.ConstructorProperties) 
    _init(config?: IntervalDataType.ConstructorProperties): void
}

module JSONReadOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.JSONReadOptions

        /**
         * Whether objects may be printed across multiple lines (for example pretty printed).
         * if %FALSE, input must end with an empty line.
         */
        allow_newlines_in_values?: boolean | null
        /**
         * Block size we request from the IO layer; also determines the size
         * of chunks when #GArrowJSONReadOptions:use-threads is %TRUE.
         */
        block_size?: number | null
        /**
         * Schema for passing custom conversion rules.
         */
        schema?: Schema | null
        /**
         * How to parse handle fields outside the explicit schema.
         */
        unexpected_field_behavior?: JSONReadUnexpectedFieldBehavior | null
        /**
         * Whether to use the global CPU thread pool.
         */
        use_threads?: boolean | null
    }

}

interface JSONReadOptions {

    // Own properties of Arrow-1.0.Arrow.JSONReadOptions

    /**
     * Whether objects may be printed across multiple lines (for example pretty printed).
     * if %FALSE, input must end with an empty line.
     */
    allow_newlines_in_values: boolean
    /**
     * Block size we request from the IO layer; also determines the size
     * of chunks when #GArrowJSONReadOptions:use-threads is %TRUE.
     */
    block_size: number
    /**
     * Schema for passing custom conversion rules.
     */
    schema: Schema
    /**
     * How to parse handle fields outside the explicit schema.
     */
    unexpected_field_behavior: JSONReadUnexpectedFieldBehavior
    /**
     * Whether to use the global CPU thread pool.
     */
    use_threads: boolean

    // Own fields of Arrow-1.0.Arrow.JSONReadOptions

    parent_instance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.JSONReadOptions

    connect(sigName: "notify::allow-newlines-in-values", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-newlines-in-values", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-newlines-in-values", ...args: any[]): void
    connect(sigName: "notify::block-size", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block-size", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block-size", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: "notify::unexpected-field-behavior", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unexpected-field-behavior", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unexpected-field-behavior", ...args: any[]): void
    connect(sigName: "notify::use-threads", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: (($obj: JSONReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-threads", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JSONReadOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.JSONReadOptions

    static name: string
    static $gtype: GObject.GType<JSONReadOptions>

    // Constructors of Arrow-1.0.Arrow.JSONReadOptions

    constructor(config?: JSONReadOptions.ConstructorProperties) 
    constructor() 
    static new(): JSONReadOptions
    _init(config?: JSONReadOptions.ConstructorProperties): void
}

module JSONReader {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.JSONReader

        input?: InputStream | null
        json_table_reader?: any | null
    }

}

interface JSONReader {

    // Own properties of Arrow-1.0.Arrow.JSONReader

    readonly input: InputStream
    readonly json_table_reader: any

    // Own fields of Arrow-1.0.Arrow.JSONReader

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.JSONReader

    read(): Table | null

    // Class property signals of Arrow-1.0.Arrow.JSONReader

    connect(sigName: "notify::input", callback: (($obj: JSONReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input", callback: (($obj: JSONReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input", ...args: any[]): void
    connect(sigName: "notify::json-table-reader", callback: (($obj: JSONReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::json-table-reader", callback: (($obj: JSONReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::json-table-reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JSONReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.JSONReader

    static name: string
    static $gtype: GObject.GType<JSONReader>

    // Constructors of Arrow-1.0.Arrow.JSONReader

    constructor(config?: JSONReader.ConstructorProperties) 
    constructor(input: InputStream, options: JSONReadOptions | null) 
    static new(input: InputStream, options: JSONReadOptions | null): JSONReader
    _init(config?: JSONReader.ConstructorProperties): void
}

module LargeBinaryArray {

    // Constructor properties interface

    interface ConstructorProperties extends Array.ConstructorProperties {
    }

}

interface LargeBinaryArray {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryArray

    parent_instance: Array & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.LargeBinaryArray

    get_buffer(): Buffer
    get_data_buffer(): Buffer
    get_offsets_buffer(): Buffer
    get_value(i: number): GLib.Bytes

    // Class property signals of Arrow-1.0.Arrow.LargeBinaryArray

    connect(sigName: "notify::array", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: LargeBinaryArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LargeBinaryArray extends Array {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArray

    static name: string
    static $gtype: GObject.GType<LargeBinaryArray>

    // Constructors of Arrow-1.0.Arrow.LargeBinaryArray

    constructor(config?: LargeBinaryArray.ConstructorProperties) 
    constructor(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number): LargeBinaryArray
    _init(config?: LargeBinaryArray.ConstructorProperties): void
}

module LargeBinaryArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface LargeBinaryArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    append_value(value: Uint8Array): boolean
    append_value_bytes(value: GLib.Bytes): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: GLib.Bytes[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: LargeBinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: LargeBinaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LargeBinaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    static name: string
    static $gtype: GObject.GType<LargeBinaryArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    constructor(config?: LargeBinaryArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): LargeBinaryArrayBuilder
    _init(config?: LargeBinaryArrayBuilder.ConstructorProperties): void
}

module LargeBinaryDataType {

    // Constructor properties interface

    interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

interface LargeBinaryDataType {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryDataType

    parent_instance: DataType & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.LargeBinaryDataType

    connect(sigName: "notify::data-type", callback: (($obj: LargeBinaryDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: LargeBinaryDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LargeBinaryDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryDataType

    static name: string
    static $gtype: GObject.GType<LargeBinaryDataType>

    // Constructors of Arrow-1.0.Arrow.LargeBinaryDataType

    constructor(config?: LargeBinaryDataType.ConstructorProperties) 
    constructor() 
    static new(): LargeBinaryDataType
    _init(config?: LargeBinaryDataType.ConstructorProperties): void
}

module LargeBinaryScalar {

    // Constructor properties interface

    interface ConstructorProperties extends BaseBinaryScalar.ConstructorProperties {
    }

}

interface LargeBinaryScalar {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryScalar

    parent_instance: BaseBinaryScalar & Scalar & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.LargeBinaryScalar

    connect(sigName: "notify::value", callback: (($obj: LargeBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: LargeBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: LargeBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: LargeBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: LargeBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: LargeBinaryScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LargeBinaryScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryScalar

    static name: string
    static $gtype: GObject.GType<LargeBinaryScalar>

    // Constructors of Arrow-1.0.Arrow.LargeBinaryScalar

    constructor(config?: LargeBinaryScalar.ConstructorProperties) 
    constructor(value: Buffer) 
    static new(value: Buffer): LargeBinaryScalar
    _init(config?: LargeBinaryScalar.ConstructorProperties): void
}

module LargeListArray {

    // Constructor properties interface

    interface ConstructorProperties extends Array.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.LargeListArray

        raw_values?: Array | null
    }

}

interface LargeListArray {

    // Own properties of Arrow-1.0.Arrow.LargeListArray

    readonly raw_values: Array

    // Own fields of Arrow-1.0.Arrow.LargeListArray

    parent_instance: Array & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.LargeListArray

    get_value(i: number): Array
    get_value_length(i: number): number
    get_value_offset(i: number): number
    get_value_offsets(): number[]
    get_value_type(): DataType

    // Overloads of get_value_type

    get_value_type(): Type
    get_values(): Array

    // Class property signals of Arrow-1.0.Arrow.LargeListArray

    connect(sigName: "notify::raw-values", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw-values", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw-values", ...args: any[]): void
    connect(sigName: "notify::array", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: LargeListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LargeListArray extends Array {

    // Own properties of Arrow-1.0.Arrow.LargeListArray

    static name: string
    static $gtype: GObject.GType<LargeListArray>

    // Constructors of Arrow-1.0.Arrow.LargeListArray

    constructor(config?: LargeListArray.ConstructorProperties) 
    constructor(data_type: DataType, length: number, value_offsets: Buffer, values: Array, null_bitmap: Buffer | null, n_nulls: number) 
    static new(data_type: DataType, length: number, value_offsets: Buffer, values: Array, null_bitmap: Buffer | null, n_nulls: number): LargeListArray
    _init(config?: LargeListArray.ConstructorProperties): void
}

module LargeListArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface LargeListArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.LargeListArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.LargeListArrayBuilder

    append_value(): boolean
    get_value_builder(): ArrayBuilder

    // Class property signals of Arrow-1.0.Arrow.LargeListArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: LargeListArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: LargeListArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LargeListArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.LargeListArrayBuilder

    static name: string
    static $gtype: GObject.GType<LargeListArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.LargeListArrayBuilder

    constructor(config?: LargeListArrayBuilder.ConstructorProperties) 
    constructor(data_type: LargeListDataType) 
    static new(data_type: LargeListDataType): LargeListArrayBuilder
    _init(config?: LargeListArrayBuilder.ConstructorProperties): void
}

module LargeListDataType {

    // Constructor properties interface

    interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

interface LargeListDataType {

    // Own fields of Arrow-1.0.Arrow.LargeListDataType

    parent_instance: DataType & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.LargeListDataType

    get_field(): Field

    // Class property signals of Arrow-1.0.Arrow.LargeListDataType

    connect(sigName: "notify::data-type", callback: (($obj: LargeListDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: LargeListDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LargeListDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.LargeListDataType

    static name: string
    static $gtype: GObject.GType<LargeListDataType>

    // Constructors of Arrow-1.0.Arrow.LargeListDataType

    constructor(config?: LargeListDataType.ConstructorProperties) 
    constructor(field: Field) 
    static new(field: Field): LargeListDataType
    _init(config?: LargeListDataType.ConstructorProperties): void
}

module LargeListScalar {

    // Constructor properties interface

    interface ConstructorProperties extends BaseListScalar.ConstructorProperties {
    }

}

interface LargeListScalar {

    // Own fields of Arrow-1.0.Arrow.LargeListScalar

    parent_instance: BaseListScalar & Scalar & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.LargeListScalar

    connect(sigName: "notify::value", callback: (($obj: LargeListScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: LargeListScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: LargeListScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: LargeListScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: LargeListScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: LargeListScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LargeListScalar extends BaseListScalar {

    // Own properties of Arrow-1.0.Arrow.LargeListScalar

    static name: string
    static $gtype: GObject.GType<LargeListScalar>

    // Constructors of Arrow-1.0.Arrow.LargeListScalar

    constructor(config?: LargeListScalar.ConstructorProperties) 
    constructor(value: LargeListArray) 
    static new(value: LargeListArray): LargeListScalar
    _init(config?: LargeListScalar.ConstructorProperties): void
}

module LargeStringArray {

    // Constructor properties interface

    interface ConstructorProperties extends LargeBinaryArray.ConstructorProperties {
    }

}

interface LargeStringArray {

    // Own fields of Arrow-1.0.Arrow.LargeStringArray

    parent_instance: LargeBinaryArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.LargeStringArray

    get_string(i: number): string | null

    // Class property signals of Arrow-1.0.Arrow.LargeStringArray

    connect(sigName: "notify::array", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: LargeStringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LargeStringArray extends LargeBinaryArray {

    // Own properties of Arrow-1.0.Arrow.LargeStringArray

    static name: string
    static $gtype: GObject.GType<LargeStringArray>

    // Constructors of Arrow-1.0.Arrow.LargeStringArray

    constructor(config?: LargeStringArray.ConstructorProperties) 
    constructor(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number): LargeStringArray

    // Overloads of new

    static new(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number): LargeBinaryArray
    _init(config?: LargeStringArray.ConstructorProperties): void
}

module LargeStringArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends LargeBinaryArrayBuilder.ConstructorProperties {
    }

}

interface LargeStringArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.LargeStringArrayBuilder

    parent_instance: LargeBinaryArrayBuilder & ArrayBuilder & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.LargeStringArrayBuilder

    append_string(value: string | null): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of strings.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_strings(values: string[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.LargeStringArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: LargeStringArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: LargeStringArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LargeStringArrayBuilder extends LargeBinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.LargeStringArrayBuilder

    static name: string
    static $gtype: GObject.GType<LargeStringArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.LargeStringArrayBuilder

    constructor(config?: LargeStringArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): LargeStringArrayBuilder

    // Overloads of new

    static new(): LargeBinaryArrayBuilder
    _init(config?: LargeStringArrayBuilder.ConstructorProperties): void
}

module LargeStringDataType {

    // Constructor properties interface

    interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

interface LargeStringDataType {

    // Own fields of Arrow-1.0.Arrow.LargeStringDataType

    parent_instance: LargeBinaryDataType & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.LargeStringDataType

    connect(sigName: "notify::data-type", callback: (($obj: LargeStringDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: LargeStringDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LargeStringDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.LargeStringDataType

    static name: string
    static $gtype: GObject.GType<LargeStringDataType>

    // Constructors of Arrow-1.0.Arrow.LargeStringDataType

    constructor(config?: LargeStringDataType.ConstructorProperties) 
    constructor() 
    static new(): LargeStringDataType
    _init(config?: LargeStringDataType.ConstructorProperties): void
}

module LargeStringScalar {

    // Constructor properties interface

    interface ConstructorProperties extends BaseBinaryScalar.ConstructorProperties {
    }

}

interface LargeStringScalar {

    // Own fields of Arrow-1.0.Arrow.LargeStringScalar

    parent_instance: BaseBinaryScalar & Scalar & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.LargeStringScalar

    connect(sigName: "notify::value", callback: (($obj: LargeStringScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: LargeStringScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: LargeStringScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: LargeStringScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: LargeStringScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: LargeStringScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LargeStringScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.LargeStringScalar

    static name: string
    static $gtype: GObject.GType<LargeStringScalar>

    // Constructors of Arrow-1.0.Arrow.LargeStringScalar

    constructor(config?: LargeStringScalar.ConstructorProperties) 
    constructor(value: Buffer) 
    static new(value: Buffer): LargeStringScalar
    _init(config?: LargeStringScalar.ConstructorProperties): void
}

module ListArray {

    // Constructor properties interface

    interface ConstructorProperties extends Array.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ListArray

        raw_values?: Array | null
    }

}

interface ListArray {

    // Own properties of Arrow-1.0.Arrow.ListArray

    readonly raw_values: Array

    // Own fields of Arrow-1.0.Arrow.ListArray

    parent_instance: Array & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ListArray

    get_value(i: number): Array
    get_value_length(i: number): number
    get_value_offset(i: number): number
    get_value_offsets(): number[]
    get_value_type(): DataType

    // Overloads of get_value_type

    get_value_type(): Type
    get_values(): Array

    // Class property signals of Arrow-1.0.Arrow.ListArray

    connect(sigName: "notify::raw-values", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw-values", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw-values", ...args: any[]): void
    connect(sigName: "notify::array", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: ListArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ListArray extends Array {

    // Own properties of Arrow-1.0.Arrow.ListArray

    static name: string
    static $gtype: GObject.GType<ListArray>

    // Constructors of Arrow-1.0.Arrow.ListArray

    constructor(config?: ListArray.ConstructorProperties) 
    constructor(data_type: DataType, length: number, value_offsets: Buffer, values: Array, null_bitmap: Buffer | null, n_nulls: number) 
    static new(data_type: DataType, length: number, value_offsets: Buffer, values: Array, null_bitmap: Buffer | null, n_nulls: number): ListArray
    _init(config?: ListArray.ConstructorProperties): void
}

module ListArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface ListArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.ListArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ListArrayBuilder

    append(): boolean
    append_value(): boolean
    get_value_builder(): ArrayBuilder

    // Class property signals of Arrow-1.0.Arrow.ListArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: ListArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: ListArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ListArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.ListArrayBuilder

    static name: string
    static $gtype: GObject.GType<ListArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.ListArrayBuilder

    constructor(config?: ListArrayBuilder.ConstructorProperties) 
    constructor(data_type: ListDataType) 
    static new(data_type: ListDataType): ListArrayBuilder
    _init(config?: ListArrayBuilder.ConstructorProperties): void
}

module ListDataType {

    // Constructor properties interface

    interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

interface ListDataType {

    // Own fields of Arrow-1.0.Arrow.ListDataType

    parent_instance: DataType & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ListDataType

    get_field(): Field
    get_value_field(): Field

    // Class property signals of Arrow-1.0.Arrow.ListDataType

    connect(sigName: "notify::data-type", callback: (($obj: ListDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: ListDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ListDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.ListDataType

    static name: string
    static $gtype: GObject.GType<ListDataType>

    // Constructors of Arrow-1.0.Arrow.ListDataType

    constructor(config?: ListDataType.ConstructorProperties) 
    constructor(field: Field) 
    static new(field: Field): ListDataType
    _init(config?: ListDataType.ConstructorProperties): void
}

module ListScalar {

    // Constructor properties interface

    interface ConstructorProperties extends BaseListScalar.ConstructorProperties {
    }

}

interface ListScalar {

    // Own fields of Arrow-1.0.Arrow.ListScalar

    parent_instance: BaseListScalar & Scalar & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.ListScalar

    connect(sigName: "notify::value", callback: (($obj: ListScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ListScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: ListScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: ListScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: ListScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: ListScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ListScalar extends BaseListScalar {

    // Own properties of Arrow-1.0.Arrow.ListScalar

    static name: string
    static $gtype: GObject.GType<ListScalar>

    // Constructors of Arrow-1.0.Arrow.ListScalar

    constructor(config?: ListScalar.ConstructorProperties) 
    constructor(value: ListArray) 
    static new(value: ListArray): ListScalar
    _init(config?: ListScalar.ConstructorProperties): void
}

module LiteralExpression {

    // Constructor properties interface

    interface ConstructorProperties extends Expression.ConstructorProperties {
    }

}

interface LiteralExpression {

    // Own fields of Arrow-1.0.Arrow.LiteralExpression

    parent_instance: Expression & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.LiteralExpression

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LiteralExpression extends Expression {

    // Own properties of Arrow-1.0.Arrow.LiteralExpression

    static name: string
    static $gtype: GObject.GType<LiteralExpression>

    // Constructors of Arrow-1.0.Arrow.LiteralExpression

    constructor(config?: LiteralExpression.ConstructorProperties) 
    constructor(datum: Datum) 
    static new(datum: Datum): LiteralExpression
    _init(config?: LiteralExpression.ConstructorProperties): void
}

module LocalFileSystem {

    // Constructor properties interface

    interface ConstructorProperties extends FileSystem.ConstructorProperties {
    }

}

interface LocalFileSystem {

    // Own fields of Arrow-1.0.Arrow.LocalFileSystem

    parent_instance: FileSystem & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.LocalFileSystem

    connect(sigName: "notify::file-system", callback: (($obj: LocalFileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-system", callback: (($obj: LocalFileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LocalFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystem

    static name: string
    static $gtype: GObject.GType<LocalFileSystem>

    // Constructors of Arrow-1.0.Arrow.LocalFileSystem

    constructor(config?: LocalFileSystem.ConstructorProperties) 
    constructor(options: LocalFileSystemOptions | null) 
    static new(options: LocalFileSystemOptions | null): LocalFileSystem
    _init(config?: LocalFileSystem.ConstructorProperties): void
}

module LocalFileSystemOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.LocalFileSystemOptions

        /**
         * Whether open_input_stream and open_input_file return a mmap'ed file,
         * or a regular one.
         */
        use_mmap?: boolean | null
    }

}

interface LocalFileSystemOptions {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystemOptions

    /**
     * Whether open_input_stream and open_input_file return a mmap'ed file,
     * or a regular one.
     */
    use_mmap: boolean

    // Own fields of Arrow-1.0.Arrow.LocalFileSystemOptions

    parent_instance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.LocalFileSystemOptions

    connect(sigName: "notify::use-mmap", callback: (($obj: LocalFileSystemOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-mmap", callback: (($obj: LocalFileSystemOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-mmap", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LocalFileSystemOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystemOptions

    static name: string
    static $gtype: GObject.GType<LocalFileSystemOptions>

    // Constructors of Arrow-1.0.Arrow.LocalFileSystemOptions

    constructor(config?: LocalFileSystemOptions.ConstructorProperties) 
    constructor() 
    static new(): LocalFileSystemOptions
    _init(config?: LocalFileSystemOptions.ConstructorProperties): void
}

module MapArray {

    // Constructor properties interface

    interface ConstructorProperties extends ListArray.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.MapArray

        items?: Array | null
        keys?: Array | null
        offsets?: Array | null
    }

}

interface MapArray {

    // Own properties of Arrow-1.0.Arrow.MapArray

    readonly items: Array
    readonly keys: Array
    readonly offsets: Array

    // Own fields of Arrow-1.0.Arrow.MapArray

    parent_instance: ListArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.MapArray

    get_items(): Array
    get_keys(): Array

    // Conflicting methods

    get_value_type(): DataType

    // Overloads of get_value_type

    get_value_type(): Type
    get_value_type(): Type

    // Class property signals of Arrow-1.0.Arrow.MapArray

    connect(sigName: "notify::items", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::items", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::offsets", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offsets", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offsets", ...args: any[]): void
    connect(sigName: "notify::raw-values", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw-values", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw-values", ...args: any[]): void
    connect(sigName: "notify::array", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: MapArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MapArray extends ListArray {

    // Own properties of Arrow-1.0.Arrow.MapArray

    static name: string
    static $gtype: GObject.GType<MapArray>

    // Constructors of Arrow-1.0.Arrow.MapArray

    constructor(config?: MapArray.ConstructorProperties) 
    constructor(offsets: Array, keys: Array, items: Array) 
    static new(offsets: Array, keys: Array, items: Array): MapArray

    // Overloads of new

    static new(data_type: DataType, length: number, value_offsets: Buffer, values: Array, null_bitmap: Buffer | null, n_nulls: number): ListArray
    _init(config?: MapArray.ConstructorProperties): void
}

module MapArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface MapArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.MapArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.MapArrayBuilder

    append_value(): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param offsets The array of signed int.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(offsets: number[], is_valids: boolean[] | null): boolean
    get_item_builder(): ArrayBuilder
    get_key_builder(): ArrayBuilder
    get_value_builder(): ArrayBuilder

    // Class property signals of Arrow-1.0.Arrow.MapArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: MapArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: MapArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MapArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.MapArrayBuilder

    static name: string
    static $gtype: GObject.GType<MapArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.MapArrayBuilder

    constructor(config?: MapArrayBuilder.ConstructorProperties) 
    constructor(data_type: MapDataType) 
    static new(data_type: MapDataType): MapArrayBuilder
    _init(config?: MapArrayBuilder.ConstructorProperties): void
}

module MapDataType {

    // Constructor properties interface

    interface ConstructorProperties extends ListDataType.ConstructorProperties {
    }

}

interface MapDataType {

    // Own fields of Arrow-1.0.Arrow.MapDataType

    parent_instance: ListDataType & DataType & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.MapDataType

    get_item_type(): DataType
    get_key_type(): DataType

    // Class property signals of Arrow-1.0.Arrow.MapDataType

    connect(sigName: "notify::data-type", callback: (($obj: MapDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: MapDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MapDataType extends ListDataType {

    // Own properties of Arrow-1.0.Arrow.MapDataType

    static name: string
    static $gtype: GObject.GType<MapDataType>

    // Constructors of Arrow-1.0.Arrow.MapDataType

    constructor(config?: MapDataType.ConstructorProperties) 
    constructor(key_type: DataType, item_type: DataType) 
    static new(key_type: DataType, item_type: DataType): MapDataType

    // Overloads of new

    static new(field: Field): ListDataType
    _init(config?: MapDataType.ConstructorProperties): void
}

module MapScalar {

    // Constructor properties interface

    interface ConstructorProperties extends BaseListScalar.ConstructorProperties {
    }

}

interface MapScalar {

    // Own fields of Arrow-1.0.Arrow.MapScalar

    parent_instance: BaseListScalar & Scalar & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.MapScalar

    connect(sigName: "notify::value", callback: (($obj: MapScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: MapScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: MapScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: MapScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: MapScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: MapScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MapScalar extends BaseListScalar {

    // Own properties of Arrow-1.0.Arrow.MapScalar

    static name: string
    static $gtype: GObject.GType<MapScalar>

    // Constructors of Arrow-1.0.Arrow.MapScalar

    constructor(config?: MapScalar.ConstructorProperties) 
    constructor(value: StructArray) 
    static new(value: StructArray): MapScalar
    _init(config?: MapScalar.ConstructorProperties): void
}

module MemoryMappedInputStream {

    // Constructor properties interface

    interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, SeekableInputStream.ConstructorProperties {
    }

}

interface MemoryMappedInputStream extends File, Readable {

    // Own fields of Arrow-1.0.Arrow.MemoryMappedInputStream

    parent_instance: SeekableInputStream & InputStream & Gio.InputStream & GObject.Object & GObject.Object

    // Conflicting methods

    close(): boolean
    /**
     * Closes the stream, releasing resources related to it.
     * 
     * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
     * Closing a stream multiple times will not return an error.
     * 
     * Streams will be automatically closed when the last reference
     * is dropped, but you might want to call this function to make sure
     * resources are released as early as possible.
     * 
     * Some streams might keep the backing store of the stream (e.g. a file descriptor)
     * open after the stream is closed. See the documentation for the individual
     * stream for details.
     * 
     * On failure the first error that happened will be reported, but the close
     * operation will finish as much as possible. A stream that failed to
     * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
     * is important to check and report the error to the user.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * Cancelling a close will still leave the stream closed, but some streams
     * can use a faster close that doesn't block to e.g. check errors.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE on success, %FALSE on failure
     */
    close(cancellable: Gio.Cancellable | null): boolean
    read(n_bytes: number): Buffer | null
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * If count is zero returns zero and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * The returned `buffer` is not a nul-terminated string, it can contain nul bytes
     * at any position, and this function doesn't nul-terminate the `buffer`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns Number of bytes read, or -1 on error, or 0 on end of file.
     */
    read(cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    read_bytes(n_bytes: number): GLib.Bytes | null
    /**
     * Like g_input_stream_read(), this tries to read `count` bytes from
     * the stream in a blocking fashion. However, rather than reading into
     * a user-supplied buffer, this will create a new #GBytes containing
     * the data that was read. This may be easier to use from language
     * bindings.
     * 
     * If count is zero, returns a zero-length #GBytes and does nothing. A
     * value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, a new #GBytes is returned. It is not an error if the
     * size of this object is not the same as the requested size, as it
     * can happen e.g. near the end of a file. A zero-length #GBytes is
     * returned on end of file (or if `count` is zero), but never
     * otherwise.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error %NULL is returned and `error` is set accordingly.
     * @param count maximum number of bytes that will be read from the stream. Common values include 4096 and 8192.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns a new #GBytes, or %NULL on error
     */
    read_bytes(count: number, cancellable: Gio.Cancellable | null): GLib.Bytes

    // Class property signals of Arrow-1.0.Arrow.MemoryMappedInputStream

    connect(sigName: "notify::input-stream", callback: (($obj: MemoryMappedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: MemoryMappedInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MemoryMappedInputStream extends SeekableInputStream {

    // Own properties of Arrow-1.0.Arrow.MemoryMappedInputStream

    static name: string
    static $gtype: GObject.GType<MemoryMappedInputStream>

    // Constructors of Arrow-1.0.Arrow.MemoryMappedInputStream

    constructor(config?: MemoryMappedInputStream.ConstructorProperties) 
    constructor(path: string | null) 
    static new(path: string | null): MemoryMappedInputStream
    _init(config?: MemoryMappedInputStream.ConstructorProperties): void
}

module MockFileSystem {

    // Constructor properties interface

    interface ConstructorProperties extends FileSystem.ConstructorProperties {
    }

}

interface MockFileSystem {

    // Own fields of Arrow-1.0.Arrow.MockFileSystem

    parent_instance: FileSystem & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.MockFileSystem

    connect(sigName: "notify::file-system", callback: (($obj: MockFileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-system", callback: (($obj: MockFileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MockFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.MockFileSystem

    static name: string
    static $gtype: GObject.GType<MockFileSystem>

    // Constructors of Arrow-1.0.Arrow.MockFileSystem

    constructor(config?: MockFileSystem.ConstructorProperties) 
    _init(config?: MockFileSystem.ConstructorProperties): void
}

module MonthDayNanoIntervalDataType {

    // Constructor properties interface

    interface ConstructorProperties extends IntervalDataType.ConstructorProperties {
    }

}

interface MonthDayNanoIntervalDataType {

    // Own fields of Arrow-1.0.Arrow.MonthDayNanoIntervalDataType

    parent_instance: IntervalDataType & TimeDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.MonthDayNanoIntervalDataType

    connect(sigName: "notify::data-type", callback: (($obj: MonthDayNanoIntervalDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: MonthDayNanoIntervalDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MonthDayNanoIntervalDataType extends IntervalDataType {

    // Own properties of Arrow-1.0.Arrow.MonthDayNanoIntervalDataType

    static name: string
    static $gtype: GObject.GType<MonthDayNanoIntervalDataType>

    // Constructors of Arrow-1.0.Arrow.MonthDayNanoIntervalDataType

    constructor(config?: MonthDayNanoIntervalDataType.ConstructorProperties) 
    constructor() 
    static new(): MonthDayNanoIntervalDataType
    _init(config?: MonthDayNanoIntervalDataType.ConstructorProperties): void
}

module MonthIntervalDataType {

    // Constructor properties interface

    interface ConstructorProperties extends IntervalDataType.ConstructorProperties {
    }

}

interface MonthIntervalDataType {

    // Own fields of Arrow-1.0.Arrow.MonthIntervalDataType

    parent_instance: IntervalDataType & TimeDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.MonthIntervalDataType

    connect(sigName: "notify::data-type", callback: (($obj: MonthIntervalDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: MonthIntervalDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MonthIntervalDataType extends IntervalDataType {

    // Own properties of Arrow-1.0.Arrow.MonthIntervalDataType

    static name: string
    static $gtype: GObject.GType<MonthIntervalDataType>

    // Constructors of Arrow-1.0.Arrow.MonthIntervalDataType

    constructor(config?: MonthIntervalDataType.ConstructorProperties) 
    constructor() 
    static new(): MonthIntervalDataType
    _init(config?: MonthIntervalDataType.ConstructorProperties): void
}

module MutableBuffer {

    // Constructor properties interface

    interface ConstructorProperties extends Buffer.ConstructorProperties {
    }

}

interface MutableBuffer {

    // Own fields of Arrow-1.0.Arrow.MutableBuffer

    parent_instance: Buffer & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.MutableBuffer

    set_data(offset: number, data: Uint8Array): boolean

    // Overloads of set_data

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
    set_data(key: string | null, data: any | null): void
    slice(offset: number, size: number): MutableBuffer

    // Overloads of slice

    slice(offset: number, size: number): Buffer

    // Conflicting methods

    get_data(): GLib.Bytes

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string | null): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string | null): any | null

    // Class property signals of Arrow-1.0.Arrow.MutableBuffer

    connect(sigName: "notify::buffer", callback: (($obj: MutableBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: MutableBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: MutableBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: MutableBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MutableBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MutableBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MutableBuffer extends Buffer {

    // Own properties of Arrow-1.0.Arrow.MutableBuffer

    static name: string
    static $gtype: GObject.GType<MutableBuffer>

    // Constructors of Arrow-1.0.Arrow.MutableBuffer

    constructor(config?: MutableBuffer.ConstructorProperties) 
    constructor(data: Uint8Array) 
    static new(data: Uint8Array): MutableBuffer

    // Overloads of new

    static new(data: Uint8Array): Buffer
    static new_bytes(data: GLib.Bytes): MutableBuffer

    // Overloads of new_bytes

    static new_bytes(data: GLib.Bytes): Buffer
    _init(config?: MutableBuffer.ConstructorProperties): void
}

module NullArray {

    // Constructor properties interface

    interface ConstructorProperties extends Array.ConstructorProperties {
    }

}

interface NullArray {

    // Own fields of Arrow-1.0.Arrow.NullArray

    parent_instance: Array & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.NullArray

    connect(sigName: "notify::array", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: NullArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NullArray extends Array {

    // Own properties of Arrow-1.0.Arrow.NullArray

    static name: string
    static $gtype: GObject.GType<NullArray>

    // Constructors of Arrow-1.0.Arrow.NullArray

    constructor(config?: NullArray.ConstructorProperties) 
    constructor(length: number) 
    static new(length: number): NullArray
    _init(config?: NullArray.ConstructorProperties): void
}

module NullArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface NullArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.NullArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.NullArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: NullArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: NullArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NullArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.NullArrayBuilder

    static name: string
    static $gtype: GObject.GType<NullArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.NullArrayBuilder

    constructor(config?: NullArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): NullArrayBuilder
    _init(config?: NullArrayBuilder.ConstructorProperties): void
}

module NullDataType {

    // Constructor properties interface

    interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

interface NullDataType {

    // Own fields of Arrow-1.0.Arrow.NullDataType

    parent_instance: DataType & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.NullDataType

    connect(sigName: "notify::data-type", callback: (($obj: NullDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: NullDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NullDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.NullDataType

    static name: string
    static $gtype: GObject.GType<NullDataType>

    // Constructors of Arrow-1.0.Arrow.NullDataType

    constructor(config?: NullDataType.ConstructorProperties) 
    constructor() 
    static new(): NullDataType
    _init(config?: NullDataType.ConstructorProperties): void
}

module NullScalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface NullScalar {

    // Own fields of Arrow-1.0.Arrow.NullScalar

    parent_instance: Scalar & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.NullScalar

    connect(sigName: "notify::data-type", callback: (($obj: NullScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: NullScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: NullScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: NullScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NullScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.NullScalar

    static name: string
    static $gtype: GObject.GType<NullScalar>

    // Constructors of Arrow-1.0.Arrow.NullScalar

    constructor(config?: NullScalar.ConstructorProperties) 
    constructor() 
    static new(): NullScalar
    _init(config?: NullScalar.ConstructorProperties): void
}

module NumericArray {

    // Constructor properties interface

    interface ConstructorProperties extends PrimitiveArray.ConstructorProperties {
    }

}

interface NumericArray {

    // Own fields of Arrow-1.0.Arrow.NumericArray

    parent_instance: PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.NumericArray

    mean(): number

    // Class property signals of Arrow-1.0.Arrow.NumericArray

    connect(sigName: "notify::array", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: NumericArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NumericArray extends PrimitiveArray {

    // Own properties of Arrow-1.0.Arrow.NumericArray

    static name: string
    static $gtype: GObject.GType<NumericArray>

    // Constructors of Arrow-1.0.Arrow.NumericArray

    constructor(config?: NumericArray.ConstructorProperties) 
    _init(config?: NumericArray.ConstructorProperties): void
}

module NumericDataType {

    // Constructor properties interface

    interface ConstructorProperties extends FixedWidthDataType.ConstructorProperties {
    }

}

interface NumericDataType {

    // Own fields of Arrow-1.0.Arrow.NumericDataType

    parent_instance: FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.NumericDataType

    connect(sigName: "notify::data-type", callback: (($obj: NumericDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: NumericDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NumericDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.NumericDataType

    static name: string
    static $gtype: GObject.GType<NumericDataType>

    // Constructors of Arrow-1.0.Arrow.NumericDataType

    constructor(config?: NumericDataType.ConstructorProperties) 
    _init(config?: NumericDataType.ConstructorProperties): void
}

module OutputStream {

    // Constructor properties interface

    interface ConstructorProperties extends File.ConstructorProperties, Writable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.OutputStream

        output_stream?: any | null
    }

}

interface OutputStream extends File, Writable {

    // Own properties of Arrow-1.0.Arrow.OutputStream

    readonly output_stream: any

    // Own fields of Arrow-1.0.Arrow.OutputStream

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.OutputStream

    align(alignment: number): boolean
    write_record_batch(record_batch: RecordBatch, options: WriteOptions | null): number
    write_tensor(tensor: Tensor): number

    // Class property signals of Arrow-1.0.Arrow.OutputStream

    connect(sigName: "notify::output-stream", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class OutputStream extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.OutputStream

    static name: string
    static $gtype: GObject.GType<OutputStream>

    // Constructors of Arrow-1.0.Arrow.OutputStream

    constructor(config?: OutputStream.ConstructorProperties) 
    _init(config?: OutputStream.ConstructorProperties): void
}

module PrimitiveArray {

    // Constructor properties interface

    interface ConstructorProperties extends Array.ConstructorProperties {
    }

}

interface PrimitiveArray {

    // Own fields of Arrow-1.0.Arrow.PrimitiveArray

    parent_instance: Array & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.PrimitiveArray

    get_buffer(): Buffer
    get_data_buffer(): Buffer

    // Class property signals of Arrow-1.0.Arrow.PrimitiveArray

    connect(sigName: "notify::array", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: PrimitiveArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PrimitiveArray extends Array {

    // Own properties of Arrow-1.0.Arrow.PrimitiveArray

    static name: string
    static $gtype: GObject.GType<PrimitiveArray>

    // Constructors of Arrow-1.0.Arrow.PrimitiveArray

    constructor(config?: PrimitiveArray.ConstructorProperties) 
    _init(config?: PrimitiveArray.ConstructorProperties): void
}

module ReadOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ReadOptions

        /**
         * The maximum permitted schema nesting depth.
         */
        max_recursion_depth?: number | null
        /**
         * Whether to use the global CPU thread pool.
         */
        use_threads?: boolean | null
    }

}

interface ReadOptions {

    // Own properties of Arrow-1.0.Arrow.ReadOptions

    /**
     * The maximum permitted schema nesting depth.
     */
    max_recursion_depth: number
    /**
     * Whether to use the global CPU thread pool.
     */
    use_threads: boolean

    // Own fields of Arrow-1.0.Arrow.ReadOptions

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ReadOptions

    get_included_fields(): number[]
    set_included_fields(fields: number[]): void

    // Class property signals of Arrow-1.0.Arrow.ReadOptions

    connect(sigName: "notify::max-recursion-depth", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-recursion-depth", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-recursion-depth", ...args: any[]): void
    connect(sigName: "notify::use-threads", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: (($obj: ReadOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-threads", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ReadOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ReadOptions

    static name: string
    static $gtype: GObject.GType<ReadOptions>

    // Constructors of Arrow-1.0.Arrow.ReadOptions

    constructor(config?: ReadOptions.ConstructorProperties) 
    constructor() 
    static new(): ReadOptions
    _init(config?: ReadOptions.ConstructorProperties): void
}

module RecordBatch {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatch

        record_batch?: any | null
    }

}

interface RecordBatch {

    // Own properties of Arrow-1.0.Arrow.RecordBatch

    readonly record_batch: any

    // Own fields of Arrow-1.0.Arrow.RecordBatch

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.RecordBatch

    add_column(i: number, field: Field, column: Array): RecordBatch | null
    equal(other_record_batch: RecordBatch): boolean
    equal_metadata(other_record_batch: RecordBatch, check_metadata: boolean): boolean
    export(): [ /* returnType */ boolean, /* c_abi_array */ any | null, /* c_abi_schema */ any | null ]
    filter(filter: BooleanArray, options: FilterOptions | null): RecordBatch | null
    get_column_data(i: number): Array | null
    get_column_name(i: number): string | null
    get_n_columns(): number
    get_n_rows(): number
    get_schema(): Schema
    remove_column(i: number): RecordBatch | null
    serialize(options: WriteOptions | null): Buffer | null
    slice(offset: number, length: number): RecordBatch
    sort_indices(options: SortOptions): UInt64Array | null
    take(indices: Array, options: TakeOptions | null): RecordBatch | null
    to_string(): string | null

    // Class property signals of Arrow-1.0.Arrow.RecordBatch

    connect(sigName: "notify::record-batch", callback: (($obj: RecordBatch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::record-batch", callback: (($obj: RecordBatch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::record-batch", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RecordBatch extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatch

    static name: string
    static $gtype: GObject.GType<RecordBatch>

    // Constructors of Arrow-1.0.Arrow.RecordBatch

    constructor(config?: RecordBatch.ConstructorProperties) 
    constructor(schema: Schema, n_rows: number, columns: Array[]) 
    static new(schema: Schema, n_rows: number, columns: Array[]): RecordBatch
    _init(config?: RecordBatch.ConstructorProperties): void
    static import(c_abi_array: any, schema: Schema): RecordBatch | null
}

module RecordBatchBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatchBuilder

        record_batch_builder?: any | null
    }

}

interface RecordBatchBuilder {

    // Own properties of Arrow-1.0.Arrow.RecordBatchBuilder

    readonly record_batch_builder: any

    // Own fields of Arrow-1.0.Arrow.RecordBatchBuilder

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.RecordBatchBuilder

    flush(): RecordBatch
    get_column_builder(i: number): ArrayBuilder | null
    get_field(i: number): ArrayBuilder | null
    get_initial_capacity(): number
    get_n_columns(): number
    get_n_fields(): number
    get_schema(): Schema
    set_initial_capacity(capacity: number): void

    // Class property signals of Arrow-1.0.Arrow.RecordBatchBuilder

    connect(sigName: "notify::record-batch-builder", callback: (($obj: RecordBatchBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::record-batch-builder", callback: (($obj: RecordBatchBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::record-batch-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RecordBatchBuilder extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchBuilder

    static name: string
    static $gtype: GObject.GType<RecordBatchBuilder>

    // Constructors of Arrow-1.0.Arrow.RecordBatchBuilder

    constructor(config?: RecordBatchBuilder.ConstructorProperties) 
    constructor(schema: Schema) 
    static new(schema: Schema): RecordBatchBuilder
    _init(config?: RecordBatchBuilder.ConstructorProperties): void
}

module RecordBatchDatum {

    // Constructor properties interface

    interface ConstructorProperties extends Datum.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatchDatum

        value?: RecordBatch | null
    }

}

interface RecordBatchDatum {

    // Own properties of Arrow-1.0.Arrow.RecordBatchDatum

    readonly value: RecordBatch

    // Own fields of Arrow-1.0.Arrow.RecordBatchDatum

    parent_instance: Datum & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.RecordBatchDatum

    connect(sigName: "notify::value", callback: (($obj: RecordBatchDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: RecordBatchDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::datum", callback: (($obj: RecordBatchDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datum", callback: (($obj: RecordBatchDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::datum", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RecordBatchDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.RecordBatchDatum

    static name: string
    static $gtype: GObject.GType<RecordBatchDatum>

    // Constructors of Arrow-1.0.Arrow.RecordBatchDatum

    constructor(config?: RecordBatchDatum.ConstructorProperties) 
    constructor(value: RecordBatch) 
    static new(value: RecordBatch): RecordBatchDatum
    _init(config?: RecordBatchDatum.ConstructorProperties): void
}

module RecordBatchFileReader {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatchFileReader

        record_batch_file_reader?: any | null
    }

}

interface RecordBatchFileReader {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileReader

    readonly record_batch_file_reader: any

    // Owm methods of Arrow-1.0.Arrow.RecordBatchFileReader

    get_n_record_batches(): number
    get_record_batch(i: number): RecordBatch | null
    get_schema(): Schema
    get_version(): MetadataVersion
    read_record_batch(i: number): RecordBatch | null

    // Class property signals of Arrow-1.0.Arrow.RecordBatchFileReader

    connect(sigName: "notify::record-batch-file-reader", callback: (($obj: RecordBatchFileReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::record-batch-file-reader", callback: (($obj: RecordBatchFileReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::record-batch-file-reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * It wraps `arrow::ipc::RecordBatchFileReader`.
 * @class 
 */
class RecordBatchFileReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileReader

    static name: string
    static $gtype: GObject.GType<RecordBatchFileReader>

    // Constructors of Arrow-1.0.Arrow.RecordBatchFileReader

    constructor(config?: RecordBatchFileReader.ConstructorProperties) 
    constructor(file: SeekableInputStream) 
    static new(file: SeekableInputStream): RecordBatchFileReader
    _init(config?: RecordBatchFileReader.ConstructorProperties): void
}

module RecordBatchFileWriter {

    // Constructor properties interface

    interface ConstructorProperties extends RecordBatchStreamWriter.ConstructorProperties {
    }

}

interface RecordBatchFileWriter {

    // Class property signals of Arrow-1.0.Arrow.RecordBatchFileWriter

    connect(sigName: "notify::record-batch-writer", callback: (($obj: RecordBatchFileWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::record-batch-writer", callback: (($obj: RecordBatchFileWriter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::record-batch-writer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * It wraps `arrow::ipc::RecordBatchFileWriter`.
 * @class 
 */
class RecordBatchFileWriter extends RecordBatchStreamWriter {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileWriter

    static name: string
    static $gtype: GObject.GType<RecordBatchFileWriter>

    // Constructors of Arrow-1.0.Arrow.RecordBatchFileWriter

    constructor(config?: RecordBatchFileWriter.ConstructorProperties) 
    constructor(sink: OutputStream, schema: Schema) 
    static new(sink: OutputStream, schema: Schema): RecordBatchFileWriter

    // Overloads of new

    static new(sink: OutputStream, schema: Schema): RecordBatchStreamWriter
    _init(config?: RecordBatchFileWriter.ConstructorProperties): void
}

module RecordBatchIterator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatchIterator

        iterator?: any | null
    }

}

interface RecordBatchIterator {

    // Own properties of Arrow-1.0.Arrow.RecordBatchIterator

    readonly iterator: any

    // Own fields of Arrow-1.0.Arrow.RecordBatchIterator

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.RecordBatchIterator

    equal(other_iterator: RecordBatchIterator): boolean
    next(): RecordBatch | null
    to_list(): RecordBatch[]

    // Class property signals of Arrow-1.0.Arrow.RecordBatchIterator

    connect(sigName: "notify::iterator", callback: (($obj: RecordBatchIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iterator", callback: (($obj: RecordBatchIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::iterator", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RecordBatchIterator extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchIterator

    static name: string
    static $gtype: GObject.GType<RecordBatchIterator>

    // Constructors of Arrow-1.0.Arrow.RecordBatchIterator

    constructor(config?: RecordBatchIterator.ConstructorProperties) 
    constructor(record_batches: RecordBatch[]) 
    static new(record_batches: RecordBatch[]): RecordBatchIterator
    _init(config?: RecordBatchIterator.ConstructorProperties): void
}

module RecordBatchReader {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatchReader

        record_batch_reader?: any | null
    }

}

interface RecordBatchReader {

    // Own properties of Arrow-1.0.Arrow.RecordBatchReader

    readonly record_batch_reader: any

    // Own fields of Arrow-1.0.Arrow.RecordBatchReader

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.RecordBatchReader

    export(): any | null
    get_next_record_batch(): RecordBatch | null
    get_schema(): Schema
    read_all(): Table | null
    read_next(): RecordBatch | null
    read_next_record_batch(): RecordBatch | null

    // Class property signals of Arrow-1.0.Arrow.RecordBatchReader

    connect(sigName: "notify::record-batch-reader", callback: (($obj: RecordBatchReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::record-batch-reader", callback: (($obj: RecordBatchReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::record-batch-reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RecordBatchReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchReader

    static name: string
    static $gtype: GObject.GType<RecordBatchReader>

    // Constructors of Arrow-1.0.Arrow.RecordBatchReader

    constructor(config?: RecordBatchReader.ConstructorProperties) 
    constructor(record_batches: RecordBatch[], schema: Schema | null) 
    static new(record_batches: RecordBatch[], schema: Schema | null): RecordBatchReader
    _init(config?: RecordBatchReader.ConstructorProperties): void
    static import(c_abi_array_stream: any): RecordBatchReader | null
}

module RecordBatchStreamReader {

    // Constructor properties interface

    interface ConstructorProperties extends RecordBatchReader.ConstructorProperties {
    }

}

interface RecordBatchStreamReader {

    // Class property signals of Arrow-1.0.Arrow.RecordBatchStreamReader

    connect(sigName: "notify::record-batch-reader", callback: (($obj: RecordBatchStreamReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::record-batch-reader", callback: (($obj: RecordBatchStreamReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::record-batch-reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * It wraps `arrow::ipc::RecordBatchStreamReader`.
 * @class 
 */
class RecordBatchStreamReader extends RecordBatchReader {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamReader

    static name: string
    static $gtype: GObject.GType<RecordBatchStreamReader>

    // Constructors of Arrow-1.0.Arrow.RecordBatchStreamReader

    constructor(config?: RecordBatchStreamReader.ConstructorProperties) 
    constructor(stream: InputStream) 
    static new(stream: InputStream): RecordBatchStreamReader

    // Overloads of new

    static new(record_batches: RecordBatch[], schema: Schema | null): RecordBatchReader
    _init(config?: RecordBatchStreamReader.ConstructorProperties): void
}

module RecordBatchStreamWriter {

    // Constructor properties interface

    interface ConstructorProperties extends RecordBatchWriter.ConstructorProperties {
    }

}

interface RecordBatchStreamWriter {

    // Class property signals of Arrow-1.0.Arrow.RecordBatchStreamWriter

    connect(sigName: "notify::record-batch-writer", callback: (($obj: RecordBatchStreamWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::record-batch-writer", callback: (($obj: RecordBatchStreamWriter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::record-batch-writer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * It wraps `arrow::ipc::RecordBatchStreamWriter`.
 * @class 
 */
class RecordBatchStreamWriter extends RecordBatchWriter {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamWriter

    static name: string
    static $gtype: GObject.GType<RecordBatchStreamWriter>

    // Constructors of Arrow-1.0.Arrow.RecordBatchStreamWriter

    constructor(config?: RecordBatchStreamWriter.ConstructorProperties) 
    constructor(sink: OutputStream, schema: Schema) 
    static new(sink: OutputStream, schema: Schema): RecordBatchStreamWriter
    _init(config?: RecordBatchStreamWriter.ConstructorProperties): void
}

module RecordBatchWriter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatchWriter

        record_batch_writer?: any | null
    }

}

interface RecordBatchWriter {

    // Own properties of Arrow-1.0.Arrow.RecordBatchWriter

    readonly record_batch_writer: any

    // Owm methods of Arrow-1.0.Arrow.RecordBatchWriter

    close(): boolean
    write_record_batch(record_batch: RecordBatch): boolean
    write_table(table: Table): boolean

    // Class property signals of Arrow-1.0.Arrow.RecordBatchWriter

    connect(sigName: "notify::record-batch-writer", callback: (($obj: RecordBatchWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::record-batch-writer", callback: (($obj: RecordBatchWriter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::record-batch-writer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * It wraps `arrow::ipc::RecordBatchWriter`.
 * @class 
 */
class RecordBatchWriter extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchWriter

    static name: string
    static $gtype: GObject.GType<RecordBatchWriter>

    // Constructors of Arrow-1.0.Arrow.RecordBatchWriter

    constructor(config?: RecordBatchWriter.ConstructorProperties) 
    _init(config?: RecordBatchWriter.ConstructorProperties): void
}

module ResizableBuffer {

    // Constructor properties interface

    interface ConstructorProperties extends MutableBuffer.ConstructorProperties {
    }

}

interface ResizableBuffer {

    // Own fields of Arrow-1.0.Arrow.ResizableBuffer

    parent_instance: MutableBuffer & Buffer & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ResizableBuffer

    reserve(new_capacity: number): boolean
    resize(new_size: number): boolean

    // Conflicting methods

    set_data(offset: number, data: Uint8Array): boolean

    // Overloads of set_data

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
    set_data(key: string | null, data: any | null): void
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
    set_data(key: string | null, data: any | null): void
    slice(offset: number, size: number): MutableBuffer

    // Overloads of slice

    slice(offset: number, size: number): Buffer
    slice(offset: number, size: number): Buffer
    get_data(): GLib.Bytes

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string | null): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string | null): any | null

    // Class property signals of Arrow-1.0.Arrow.ResizableBuffer

    connect(sigName: "notify::buffer", callback: (($obj: ResizableBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: ResizableBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::data", callback: (($obj: ResizableBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: ResizableBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ResizableBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ResizableBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ResizableBuffer extends MutableBuffer {

    // Own properties of Arrow-1.0.Arrow.ResizableBuffer

    static name: string
    static $gtype: GObject.GType<ResizableBuffer>

    // Constructors of Arrow-1.0.Arrow.ResizableBuffer

    constructor(config?: ResizableBuffer.ConstructorProperties) 
    constructor(initial_size: number) 
    static new(initial_size: number): ResizableBuffer

    // Overloads of new

    static new(data: Uint8Array): MutableBuffer
    static new(data: Uint8Array): Buffer
    _init(config?: ResizableBuffer.ConstructorProperties): void

    // Conflicting static methods

    static new_bytes(...args: any[]): any
}

module RoundOptions {

    // Constructor properties interface

    interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RoundOptions

        /**
         * The rounding and tie-breaking mode.
         */
        mode?: RoundMode | null
        /**
         * The rounding precision (number of digits to round to).
         */
        n_digits?: number | null
    }

}

interface RoundOptions {

    // Own properties of Arrow-1.0.Arrow.RoundOptions

    /**
     * The rounding and tie-breaking mode.
     */
    mode: RoundMode
    /**
     * The rounding precision (number of digits to round to).
     */
    n_digits: number

    // Own fields of Arrow-1.0.Arrow.RoundOptions

    parent_instance: FunctionOptions & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.RoundOptions

    connect(sigName: "notify::mode", callback: (($obj: RoundOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: RoundOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::n-digits", callback: (($obj: RoundOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-digits", callback: (($obj: RoundOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-digits", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RoundOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.RoundOptions

    static name: string
    static $gtype: GObject.GType<RoundOptions>

    // Constructors of Arrow-1.0.Arrow.RoundOptions

    constructor(config?: RoundOptions.ConstructorProperties) 
    constructor() 
    static new(): RoundOptions
    _init(config?: RoundOptions.ConstructorProperties): void
}

module RoundToMultipleOptions {

    // Constructor properties interface

    interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RoundToMultipleOptions

        /**
         * The rounding and tie-breaking mode.
         */
        mode?: RoundMode | null
        /**
         * The rounding scale (multiple to round to).
         * 
         * Should be a scalar of a type compatible with the argument to be rounded.
         * For example, rounding a decimal value means a decimal multiple is
         * required. Rounding a floating point or integer value means a floating
         * point scalar is required.
         */
        multiple?: Scalar | null
    }

}

interface RoundToMultipleOptions {

    // Own properties of Arrow-1.0.Arrow.RoundToMultipleOptions

    /**
     * The rounding and tie-breaking mode.
     */
    mode: RoundMode
    /**
     * The rounding scale (multiple to round to).
     * 
     * Should be a scalar of a type compatible with the argument to be rounded.
     * For example, rounding a decimal value means a decimal multiple is
     * required. Rounding a floating point or integer value means a floating
     * point scalar is required.
     */
    multiple: Scalar

    // Own fields of Arrow-1.0.Arrow.RoundToMultipleOptions

    parent_instance: FunctionOptions & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.RoundToMultipleOptions

    connect(sigName: "notify::mode", callback: (($obj: RoundToMultipleOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: RoundToMultipleOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::multiple", callback: (($obj: RoundToMultipleOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::multiple", callback: (($obj: RoundToMultipleOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::multiple", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RoundToMultipleOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.RoundToMultipleOptions

    static name: string
    static $gtype: GObject.GType<RoundToMultipleOptions>

    // Constructors of Arrow-1.0.Arrow.RoundToMultipleOptions

    constructor(config?: RoundToMultipleOptions.ConstructorProperties) 
    constructor() 
    static new(): RoundToMultipleOptions
    _init(config?: RoundToMultipleOptions.ConstructorProperties): void
}

module S3FileSystem {

    // Constructor properties interface

    interface ConstructorProperties extends FileSystem.ConstructorProperties {
    }

}

interface S3FileSystem {

    // Own fields of Arrow-1.0.Arrow.S3FileSystem

    parent_instance: FileSystem & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.S3FileSystem

    connect(sigName: "notify::file-system", callback: (($obj: S3FileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-system", callback: (($obj: S3FileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class S3FileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.S3FileSystem

    static name: string
    static $gtype: GObject.GType<S3FileSystem>

    // Constructors of Arrow-1.0.Arrow.S3FileSystem

    constructor(config?: S3FileSystem.ConstructorProperties) 
    _init(config?: S3FileSystem.ConstructorProperties): void
}

module S3GlobalOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.S3GlobalOptions

        /**
         * The log level of S3 APIs.
         */
        log_level?: S3LogLevel | null
    }

}

interface S3GlobalOptions {

    // Own properties of Arrow-1.0.Arrow.S3GlobalOptions

    /**
     * The log level of S3 APIs.
     */
    log_level: S3LogLevel

    // Own fields of Arrow-1.0.Arrow.S3GlobalOptions

    parent_instance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.S3GlobalOptions

    connect(sigName: "notify::log-level", callback: (($obj: S3GlobalOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::log-level", callback: (($obj: S3GlobalOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::log-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class S3GlobalOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.S3GlobalOptions

    static name: string
    static $gtype: GObject.GType<S3GlobalOptions>

    // Constructors of Arrow-1.0.Arrow.S3GlobalOptions

    constructor(config?: S3GlobalOptions.ConstructorProperties) 
    constructor() 
    static new(): S3GlobalOptions
    _init(config?: S3GlobalOptions.ConstructorProperties): void
}

module Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Scalar

        /**
         * The data type of the scalar.
         */
        data_type?: DataType | null
        scalar?: any | null
    }

}

interface Scalar {

    // Own properties of Arrow-1.0.Arrow.Scalar

    /**
     * The data type of the scalar.
     */
    readonly data_type: DataType
    readonly scalar: any

    // Own fields of Arrow-1.0.Arrow.Scalar

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Scalar

    cast(data_type: DataType, options: CastOptions | null): Scalar | null
    equal(other_scalar: Scalar): boolean
    equal_options(other_scalar: Scalar, options: EqualOptions | null): boolean
    get_data_type(): DataType
    is_valid(): boolean
    to_string(): string | null

    // Class property signals of Arrow-1.0.Arrow.Scalar

    connect(sigName: "notify::data-type", callback: (($obj: Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Scalar extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Scalar

    static name: string
    static $gtype: GObject.GType<Scalar>

    // Constructors of Arrow-1.0.Arrow.Scalar

    constructor(config?: Scalar.ConstructorProperties) 
    _init(config?: Scalar.ConstructorProperties): void
    static parse(data_type: DataType, data: Uint8Array): Scalar | null
}

module ScalarAggregateOptions {

    // Constructor properties interface

    interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ScalarAggregateOptions

        /**
         * The minimum required number of values.
         */
        min_count?: number | null
        /**
         * Whether NULLs are skipped or not.
         */
        skip_nulls?: boolean | null
    }

}

interface ScalarAggregateOptions {

    // Own properties of Arrow-1.0.Arrow.ScalarAggregateOptions

    /**
     * The minimum required number of values.
     */
    min_count: number
    /**
     * Whether NULLs are skipped or not.
     */
    skip_nulls: boolean

    // Own fields of Arrow-1.0.Arrow.ScalarAggregateOptions

    parent_instance: FunctionOptions & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.ScalarAggregateOptions

    connect(sigName: "notify::min-count", callback: (($obj: ScalarAggregateOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-count", callback: (($obj: ScalarAggregateOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-count", ...args: any[]): void
    connect(sigName: "notify::skip-nulls", callback: (($obj: ScalarAggregateOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-nulls", callback: (($obj: ScalarAggregateOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-nulls", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ScalarAggregateOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.ScalarAggregateOptions

    static name: string
    static $gtype: GObject.GType<ScalarAggregateOptions>

    // Constructors of Arrow-1.0.Arrow.ScalarAggregateOptions

    constructor(config?: ScalarAggregateOptions.ConstructorProperties) 
    constructor() 
    static new(): ScalarAggregateOptions
    _init(config?: ScalarAggregateOptions.ConstructorProperties): void
}

module ScalarDatum {

    // Constructor properties interface

    interface ConstructorProperties extends Datum.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ScalarDatum

        value?: Scalar | null
    }

}

interface ScalarDatum {

    // Own properties of Arrow-1.0.Arrow.ScalarDatum

    readonly value: Scalar

    // Own fields of Arrow-1.0.Arrow.ScalarDatum

    parent_instance: Datum & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.ScalarDatum

    connect(sigName: "notify::value", callback: (($obj: ScalarDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: ScalarDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::datum", callback: (($obj: ScalarDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datum", callback: (($obj: ScalarDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::datum", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ScalarDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.ScalarDatum

    static name: string
    static $gtype: GObject.GType<ScalarDatum>

    // Constructors of Arrow-1.0.Arrow.ScalarDatum

    constructor(config?: ScalarDatum.ConstructorProperties) 
    constructor(value: Scalar) 
    static new(value: Scalar): ScalarDatum
    _init(config?: ScalarDatum.ConstructorProperties): void
}

module Schema {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Schema

        schema?: any | null
    }

}

interface Schema {

    // Own properties of Arrow-1.0.Arrow.Schema

    readonly schema: any

    // Own fields of Arrow-1.0.Arrow.Schema

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Schema

    add_field(i: number, field: Field): Schema | null
    equal(other_schema: Schema): boolean
    export(): any | null
    get_field(i: number): Field
    get_field_by_name(name: string | null): Field
    get_field_index(name: string | null): number
    get_fields(): Field[]
    get_metadata(): GLib.HashTable | null
    has_metadata(): boolean
    n_fields(): number
    remove_field(i: number): Schema | null
    replace_field(i: number, field: Field): Schema | null
    to_string(): string | null
    to_string_metadata(show_metadata: boolean): string | null
    with_metadata(metadata: GLib.HashTable): Schema

    // Class property signals of Arrow-1.0.Arrow.Schema

    connect(sigName: "notify::schema", callback: (($obj: Schema, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: Schema, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Schema extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Schema

    static name: string
    static $gtype: GObject.GType<Schema>

    // Constructors of Arrow-1.0.Arrow.Schema

    constructor(config?: Schema.ConstructorProperties) 
    constructor(fields: Field[]) 
    static new(fields: Field[]): Schema
    _init(config?: Schema.ConstructorProperties): void
    static import(c_abi_schema: any): Schema | null
}

module SeekableInputStream {

    // Constructor properties interface

    interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, InputStream.ConstructorProperties {
    }

}

interface SeekableInputStream extends File, Readable {

    // Own fields of Arrow-1.0.Arrow.SeekableInputStream

    parent_instance: InputStream & Gio.InputStream & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.SeekableInputStream

    get_size(): number
    get_support_zero_copy(): boolean
    peek(n_bytes: number): GLib.Bytes
    read_at(position: number, n_bytes: number): Buffer | null
    read_at_bytes(position: number, n_bytes: number): GLib.Bytes | null

    // Conflicting methods

    close(): boolean
    /**
     * Closes the stream, releasing resources related to it.
     * 
     * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
     * Closing a stream multiple times will not return an error.
     * 
     * Streams will be automatically closed when the last reference
     * is dropped, but you might want to call this function to make sure
     * resources are released as early as possible.
     * 
     * Some streams might keep the backing store of the stream (e.g. a file descriptor)
     * open after the stream is closed. See the documentation for the individual
     * stream for details.
     * 
     * On failure the first error that happened will be reported, but the close
     * operation will finish as much as possible. A stream that failed to
     * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
     * is important to check and report the error to the user.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * Cancelling a close will still leave the stream closed, but some streams
     * can use a faster close that doesn't block to e.g. check errors.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE on success, %FALSE on failure
     */
    close(cancellable: Gio.Cancellable | null): boolean
    read(n_bytes: number): Buffer | null
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * If count is zero returns zero and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * The returned `buffer` is not a nul-terminated string, it can contain nul bytes
     * at any position, and this function doesn't nul-terminate the `buffer`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns Number of bytes read, or -1 on error, or 0 on end of file.
     */
    read(cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    read_bytes(n_bytes: number): GLib.Bytes | null
    /**
     * Like g_input_stream_read(), this tries to read `count` bytes from
     * the stream in a blocking fashion. However, rather than reading into
     * a user-supplied buffer, this will create a new #GBytes containing
     * the data that was read. This may be easier to use from language
     * bindings.
     * 
     * If count is zero, returns a zero-length #GBytes and does nothing. A
     * value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, a new #GBytes is returned. It is not an error if the
     * size of this object is not the same as the requested size, as it
     * can happen e.g. near the end of a file. A zero-length #GBytes is
     * returned on end of file (or if `count` is zero), but never
     * otherwise.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error %NULL is returned and `error` is set accordingly.
     * @param count maximum number of bytes that will be read from the stream. Common values include 4096 and 8192.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns a new #GBytes, or %NULL on error
     */
    read_bytes(count: number, cancellable: Gio.Cancellable | null): GLib.Bytes

    // Class property signals of Arrow-1.0.Arrow.SeekableInputStream

    connect(sigName: "notify::input-stream", callback: (($obj: SeekableInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: SeekableInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SeekableInputStream extends InputStream {

    // Own properties of Arrow-1.0.Arrow.SeekableInputStream

    static name: string
    static $gtype: GObject.GType<SeekableInputStream>

    // Constructors of Arrow-1.0.Arrow.SeekableInputStream

    constructor(config?: SeekableInputStream.ConstructorProperties) 
    _init(config?: SeekableInputStream.ConstructorProperties): void
}

module SetLookupOptions {

    // Constructor properties interface

    interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.SetLookupOptions

        /**
         * Whether NULLs are skipped or not.
         */
        skip_nulls?: boolean | null
        /**
         * The set of values to look up input values into.
         */
        value_set?: Datum | null
    }

}

interface SetLookupOptions {

    // Own properties of Arrow-1.0.Arrow.SetLookupOptions

    /**
     * Whether NULLs are skipped or not.
     */
    skip_nulls: boolean
    /**
     * The set of values to look up input values into.
     */
    value_set: Datum

    // Own fields of Arrow-1.0.Arrow.SetLookupOptions

    parent_instance: FunctionOptions & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.SetLookupOptions

    connect(sigName: "notify::skip-nulls", callback: (($obj: SetLookupOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-nulls", callback: (($obj: SetLookupOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-nulls", ...args: any[]): void
    connect(sigName: "notify::value-set", callback: (($obj: SetLookupOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-set", callback: (($obj: SetLookupOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-set", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SetLookupOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.SetLookupOptions

    static name: string
    static $gtype: GObject.GType<SetLookupOptions>

    // Constructors of Arrow-1.0.Arrow.SetLookupOptions

    constructor(config?: SetLookupOptions.ConstructorProperties) 
    constructor(value_set: Datum | null) 
    static new(value_set: Datum | null): SetLookupOptions
    _init(config?: SetLookupOptions.ConstructorProperties): void
}

module SinkNodeOptions {

    // Constructor properties interface

    interface ConstructorProperties extends ExecuteNodeOptions.ConstructorProperties {
    }

}

interface SinkNodeOptions {

    // Own fields of Arrow-1.0.Arrow.SinkNodeOptions

    parent_instance: ExecuteNodeOptions & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.SinkNodeOptions

    get_reader(schema: Schema): RecordBatchReader

    // Class property signals of Arrow-1.0.Arrow.SinkNodeOptions

    connect(sigName: "notify::options", callback: (($obj: SinkNodeOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: SinkNodeOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SinkNodeOptions extends ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.SinkNodeOptions

    static name: string
    static $gtype: GObject.GType<SinkNodeOptions>

    // Constructors of Arrow-1.0.Arrow.SinkNodeOptions

    constructor(config?: SinkNodeOptions.ConstructorProperties) 
    constructor() 
    static new(): SinkNodeOptions
    _init(config?: SinkNodeOptions.ConstructorProperties): void
}

module SlowFileSystem {

    // Constructor properties interface

    interface ConstructorProperties extends FileSystem.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.SlowFileSystem

        base_file_system?: FileSystem | null
    }

}

interface SlowFileSystem {

    // Own properties of Arrow-1.0.Arrow.SlowFileSystem

    readonly base_file_system: FileSystem

    // Own fields of Arrow-1.0.Arrow.SlowFileSystem

    parent_instance: FileSystem & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.SlowFileSystem

    connect(sigName: "notify::base-file-system", callback: (($obj: SlowFileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-file-system", callback: (($obj: SlowFileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-file-system", ...args: any[]): void
    connect(sigName: "notify::file-system", callback: (($obj: SlowFileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-system", callback: (($obj: SlowFileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SlowFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.SlowFileSystem

    static name: string
    static $gtype: GObject.GType<SlowFileSystem>

    // Constructors of Arrow-1.0.Arrow.SlowFileSystem

    constructor(config?: SlowFileSystem.ConstructorProperties) 
    /**
     * The latency is normally distributed with a standard deviation of
     * `average_latency` * 0.1.
     * 
     * The random seed is given by the default random device.
     * @constructor 
     * @param base_file_system A #GArrowFileSystem as the base file system.
     * @param average_latency The average value of the latency.
     * @returns A newly created #GArrowSlowFileSystem.
     */
    static new_average_latency(base_file_system: FileSystem, average_latency: number): SlowFileSystem
    /**
     * The latency is normally distributed with a standard deviation of
     * `average_latency` * 0.1.
     * @constructor 
     * @param base_file_system A #GArrowFileSystem as the base file system.
     * @param average_latency The average value of the latency.
     * @param seed A random seed.
     * @returns A newly created #GArrowSlowFileSystem.
     */
    static new_average_latency_and_seed(base_file_system: FileSystem, average_latency: number, seed: number): SlowFileSystem
    _init(config?: SlowFileSystem.ConstructorProperties): void
}

module SortKey {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.SortKey

        /**
         * How to order values.
         */
        order?: SortOrder | null
    }

}

interface SortKey {

    // Own properties of Arrow-1.0.Arrow.SortKey

    /**
     * How to order values.
     */
    readonly order: SortOrder
    /**
     * A name or dot path for the sort target.
     * 
     *     dot_path = '.' name
     *              | '[' digit+ ']'
     *              | dot_path+
     */
    readonly target: string | null

    // Own fields of Arrow-1.0.Arrow.SortKey

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.SortKey

    equal(other_sort_key: SortKey): boolean

    // Class property signals of Arrow-1.0.Arrow.SortKey

    connect(sigName: "notify::order", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::order", ...args: any[]): void
    connect(sigName: "notify::target", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: SortKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SortKey extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.SortKey

    static name: string
    static $gtype: GObject.GType<SortKey>

    // Constructors of Arrow-1.0.Arrow.SortKey

    constructor(config?: SortKey.ConstructorProperties) 
    constructor(target: string | null, order: SortOrder) 
    static new(target: string | null, order: SortOrder): SortKey
    _init(config?: SortKey.ConstructorProperties): void
}

module SortOptions {

    // Constructor properties interface

    interface ConstructorProperties extends FunctionOptions.ConstructorProperties {
    }

}

interface SortOptions {

    // Own fields of Arrow-1.0.Arrow.SortOptions

    parent_instance: FunctionOptions & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.SortOptions

    /**
     * Add a sort key to be used.
     * @param sort_key The sort key to be added.
     */
    add_sort_key(sort_key: SortKey): void
    equal(other_options: SortOptions): boolean

    // Overloads of equal

    equal(other_options: FunctionOptions | null): boolean
    get_sort_keys(): SortKey[]
    /**
     * Set sort keys to be used.
     * @param sort_keys The sort keys to be used.
     */
    set_sort_keys(sort_keys: SortKey[]): void

    // Class property signals of Arrow-1.0.Arrow.SortOptions

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SortOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.SortOptions

    static name: string
    static $gtype: GObject.GType<SortOptions>

    // Constructors of Arrow-1.0.Arrow.SortOptions

    constructor(config?: SortOptions.ConstructorProperties) 
    constructor(sort_keys: SortKey[] | null) 
    static new(sort_keys: SortKey[] | null): SortOptions
    _init(config?: SortOptions.ConstructorProperties): void
}

module SourceNodeOptions {

    // Constructor properties interface

    interface ConstructorProperties extends ExecuteNodeOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.SourceNodeOptions

        reader?: RecordBatchReader | null
        record_batch?: RecordBatch | null
    }

}

interface SourceNodeOptions {

    // Own properties of Arrow-1.0.Arrow.SourceNodeOptions

    readonly reader: RecordBatchReader
    readonly record_batch: RecordBatch

    // Own fields of Arrow-1.0.Arrow.SourceNodeOptions

    parent_instance: ExecuteNodeOptions & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.SourceNodeOptions

    connect(sigName: "notify::reader", callback: (($obj: SourceNodeOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reader", callback: (($obj: SourceNodeOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: "notify::record-batch", callback: (($obj: SourceNodeOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::record-batch", callback: (($obj: SourceNodeOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::record-batch", ...args: any[]): void
    connect(sigName: "notify::options", callback: (($obj: SourceNodeOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: SourceNodeOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SourceNodeOptions extends ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.SourceNodeOptions

    static name: string
    static $gtype: GObject.GType<SourceNodeOptions>

    // Constructors of Arrow-1.0.Arrow.SourceNodeOptions

    constructor(config?: SourceNodeOptions.ConstructorProperties) 
    static new_record_batch(record_batch: RecordBatch): SourceNodeOptions
    static new_record_batch_reader(reader: RecordBatchReader): SourceNodeOptions
    static new_table(table: Table): SourceNodeOptions
    _init(config?: SourceNodeOptions.ConstructorProperties): void
}

module SparseUnionArray {

    // Constructor properties interface

    interface ConstructorProperties extends UnionArray.ConstructorProperties {
    }

}

interface SparseUnionArray {

    // Own fields of Arrow-1.0.Arrow.SparseUnionArray

    parent_instance: UnionArray & Array & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.SparseUnionArray

    connect(sigName: "notify::type-ids", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-ids", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-ids", ...args: any[]): void
    connect(sigName: "notify::array", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: SparseUnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SparseUnionArray extends UnionArray {

    // Own properties of Arrow-1.0.Arrow.SparseUnionArray

    static name: string
    static $gtype: GObject.GType<SparseUnionArray>

    // Constructors of Arrow-1.0.Arrow.SparseUnionArray

    constructor(config?: SparseUnionArray.ConstructorProperties) 
    constructor(type_ids: Int8Array, fields: Array[]) 
    static new(type_ids: Int8Array, fields: Array[]): SparseUnionArray
    static new_data_type(data_type: SparseUnionDataType, type_ids: Int8Array, fields: Array[]): SparseUnionArray
    _init(config?: SparseUnionArray.ConstructorProperties): void
}

module SparseUnionDataType {

    // Constructor properties interface

    interface ConstructorProperties extends UnionDataType.ConstructorProperties {
    }

}

interface SparseUnionDataType {

    // Own fields of Arrow-1.0.Arrow.SparseUnionDataType

    parent_instance: UnionDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.SparseUnionDataType

    connect(sigName: "notify::data-type", callback: (($obj: SparseUnionDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: SparseUnionDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SparseUnionDataType extends UnionDataType {

    // Own properties of Arrow-1.0.Arrow.SparseUnionDataType

    static name: string
    static $gtype: GObject.GType<SparseUnionDataType>

    // Constructors of Arrow-1.0.Arrow.SparseUnionDataType

    constructor(config?: SparseUnionDataType.ConstructorProperties) 
    constructor(fields: Field[], type_codes: Uint8Array) 
    static new(fields: Field[], type_codes: Uint8Array): SparseUnionDataType
    _init(config?: SparseUnionDataType.ConstructorProperties): void
}

module SparseUnionScalar {

    // Constructor properties interface

    interface ConstructorProperties extends UnionScalar.ConstructorProperties {
    }

}

interface SparseUnionScalar {

    // Own fields of Arrow-1.0.Arrow.SparseUnionScalar

    parent_instance: UnionScalar & Scalar & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.SparseUnionScalar

    connect(sigName: "notify::value", callback: (($obj: SparseUnionScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: SparseUnionScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: SparseUnionScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: SparseUnionScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: SparseUnionScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: SparseUnionScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SparseUnionScalar extends UnionScalar {

    // Own properties of Arrow-1.0.Arrow.SparseUnionScalar

    static name: string
    static $gtype: GObject.GType<SparseUnionScalar>

    // Constructors of Arrow-1.0.Arrow.SparseUnionScalar

    constructor(config?: SparseUnionScalar.ConstructorProperties) 
    constructor(data_type: SparseUnionDataType, type_code: number, value: Scalar) 
    static new(data_type: SparseUnionDataType, type_code: number, value: Scalar): SparseUnionScalar
    _init(config?: SparseUnionScalar.ConstructorProperties): void
}

module StringArray {

    // Constructor properties interface

    interface ConstructorProperties extends BinaryArray.ConstructorProperties {
    }

}

interface StringArray {

    // Own fields of Arrow-1.0.Arrow.StringArray

    parent_instance: BinaryArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.StringArray

    get_string(i: number): string | null

    // Class property signals of Arrow-1.0.Arrow.StringArray

    connect(sigName: "notify::array", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: StringArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StringArray extends BinaryArray {

    // Own properties of Arrow-1.0.Arrow.StringArray

    static name: string
    static $gtype: GObject.GType<StringArray>

    // Constructors of Arrow-1.0.Arrow.StringArray

    constructor(config?: StringArray.ConstructorProperties) 
    constructor(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number): StringArray

    // Overloads of new

    static new(length: number, value_offsets: Buffer, value_data: Buffer, null_bitmap: Buffer | null, n_nulls: number): BinaryArray
    _init(config?: StringArray.ConstructorProperties): void
}

module StringArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends BinaryArrayBuilder.ConstructorProperties {
    }

}

interface StringArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.StringArrayBuilder

    parent_instance: BinaryArrayBuilder & ArrayBuilder & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.StringArrayBuilder

    append(value: string | null): boolean

    // Overloads of append

    append(value: Uint8Array): boolean
    append_string(value: string | null): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of strings.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_strings(values: string[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.StringArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: StringArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: StringArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StringArrayBuilder extends BinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.StringArrayBuilder

    static name: string
    static $gtype: GObject.GType<StringArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.StringArrayBuilder

    constructor(config?: StringArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): StringArrayBuilder

    // Overloads of new

    static new(): BinaryArrayBuilder
    _init(config?: StringArrayBuilder.ConstructorProperties): void
}

module StringDataType {

    // Constructor properties interface

    interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

interface StringDataType {

    // Own fields of Arrow-1.0.Arrow.StringDataType

    parent_instance: BinaryDataType & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.StringDataType

    connect(sigName: "notify::data-type", callback: (($obj: StringDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: StringDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StringDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.StringDataType

    static name: string
    static $gtype: GObject.GType<StringDataType>

    // Constructors of Arrow-1.0.Arrow.StringDataType

    constructor(config?: StringDataType.ConstructorProperties) 
    constructor() 
    static new(): StringDataType
    _init(config?: StringDataType.ConstructorProperties): void
}

module StringDictionaryArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface StringDictionaryArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    append_array(array: StringArray): boolean
    /**
     * Append dictionary indices directly without modifying the internal memo.
     * @param values The array of indices.
     * @param is_valids The array of   %TRUE or %FALSE that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_indices(values: number[], is_valids: boolean[] | null): boolean
    append_string(value: string | null): boolean
    finish_delta(): [ /* returnType */ boolean, /* out_indices */ Array, /* out_delta */ Array ]
    get_dictionary_length(): number
    insert_memo_values(values: StringArray): boolean
    /**
     * Reset and also clear accumulated dictionary values in memo table.
     */
    reset_full(): void

    // Class property signals of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: StringDictionaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: StringDictionaryArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StringDictionaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    static name: string
    static $gtype: GObject.GType<StringDictionaryArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    constructor(config?: StringDictionaryArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): StringDictionaryArrayBuilder
    _init(config?: StringDictionaryArrayBuilder.ConstructorProperties): void
}

module StringScalar {

    // Constructor properties interface

    interface ConstructorProperties extends BaseBinaryScalar.ConstructorProperties {
    }

}

interface StringScalar {

    // Own fields of Arrow-1.0.Arrow.StringScalar

    parent_instance: BaseBinaryScalar & Scalar & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.StringScalar

    connect(sigName: "notify::value", callback: (($obj: StringScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: StringScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: StringScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: StringScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: StringScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: StringScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StringScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.StringScalar

    static name: string
    static $gtype: GObject.GType<StringScalar>

    // Constructors of Arrow-1.0.Arrow.StringScalar

    constructor(config?: StringScalar.ConstructorProperties) 
    constructor(value: Buffer) 
    static new(value: Buffer): StringScalar
    _init(config?: StringScalar.ConstructorProperties): void
}

module StructArray {

    // Constructor properties interface

    interface ConstructorProperties extends Array.ConstructorProperties {
    }

}

interface StructArray {

    // Own fields of Arrow-1.0.Arrow.StructArray

    parent_instance: Array & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.StructArray

    flatten(): Array[]
    get_field(i: number): Array
    get_fields(): Array[]

    // Class property signals of Arrow-1.0.Arrow.StructArray

    connect(sigName: "notify::array", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: StructArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StructArray extends Array {

    // Own properties of Arrow-1.0.Arrow.StructArray

    static name: string
    static $gtype: GObject.GType<StructArray>

    // Constructors of Arrow-1.0.Arrow.StructArray

    constructor(config?: StructArray.ConstructorProperties) 
    constructor(data_type: DataType, length: number, fields: Array[], null_bitmap: Buffer | null, n_nulls: number) 
    static new(data_type: DataType, length: number, fields: Array[], null_bitmap: Buffer | null, n_nulls: number): StructArray
    _init(config?: StructArray.ConstructorProperties): void
}

module StructArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface StructArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.StructArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.StructArrayBuilder

    append(): boolean
    append_value(): boolean
    get_field_builder(i: number): ArrayBuilder
    get_field_builders(): Array[]

    // Class property signals of Arrow-1.0.Arrow.StructArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: StructArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: StructArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StructArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.StructArrayBuilder

    static name: string
    static $gtype: GObject.GType<StructArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.StructArrayBuilder

    constructor(config?: StructArrayBuilder.ConstructorProperties) 
    constructor(data_type: StructDataType) 
    static new(data_type: StructDataType): StructArrayBuilder
    _init(config?: StructArrayBuilder.ConstructorProperties): void
}

module StructDataType {

    // Constructor properties interface

    interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

interface StructDataType {

    // Own fields of Arrow-1.0.Arrow.StructDataType

    parent_instance: DataType & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.StructDataType

    get_field(i: number): Field | null
    get_field_by_name(name: string | null): Field | null
    get_field_index(name: string | null): number
    get_fields(): Field[]
    get_n_fields(): number

    // Class property signals of Arrow-1.0.Arrow.StructDataType

    connect(sigName: "notify::data-type", callback: (($obj: StructDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: StructDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StructDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.StructDataType

    static name: string
    static $gtype: GObject.GType<StructDataType>

    // Constructors of Arrow-1.0.Arrow.StructDataType

    constructor(config?: StructDataType.ConstructorProperties) 
    constructor(fields: Field[]) 
    static new(fields: Field[]): StructDataType
    _init(config?: StructDataType.ConstructorProperties): void
}

module StructScalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface StructScalar {

    // Own fields of Arrow-1.0.Arrow.StructScalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.StructScalar

    get_value(): Scalar[]

    // Class property signals of Arrow-1.0.Arrow.StructScalar

    connect(sigName: "notify::data-type", callback: (($obj: StructScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: StructScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: StructScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: StructScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StructScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.StructScalar

    static name: string
    static $gtype: GObject.GType<StructScalar>

    // Constructors of Arrow-1.0.Arrow.StructScalar

    constructor(config?: StructScalar.ConstructorProperties) 
    constructor(data_type: StructDataType, value: Scalar[]) 
    static new(data_type: StructDataType, value: Scalar[]): StructScalar
    _init(config?: StructScalar.ConstructorProperties): void
}

module SubTreeFileSystem {

    // Constructor properties interface

    interface ConstructorProperties extends FileSystem.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.SubTreeFileSystem

        base_file_system?: FileSystem | null
    }

}

interface SubTreeFileSystem {

    // Own properties of Arrow-1.0.Arrow.SubTreeFileSystem

    readonly base_file_system: FileSystem

    // Own fields of Arrow-1.0.Arrow.SubTreeFileSystem

    parent_instance: FileSystem & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.SubTreeFileSystem

    connect(sigName: "notify::base-file-system", callback: (($obj: SubTreeFileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-file-system", callback: (($obj: SubTreeFileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-file-system", ...args: any[]): void
    connect(sigName: "notify::file-system", callback: (($obj: SubTreeFileSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-system", callback: (($obj: SubTreeFileSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SubTreeFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.SubTreeFileSystem

    static name: string
    static $gtype: GObject.GType<SubTreeFileSystem>

    // Constructors of Arrow-1.0.Arrow.SubTreeFileSystem

    constructor(config?: SubTreeFileSystem.ConstructorProperties) 
    constructor(base_path: string | null, base_file_system: FileSystem) 
    static new(base_path: string | null, base_file_system: FileSystem): SubTreeFileSystem
    _init(config?: SubTreeFileSystem.ConstructorProperties): void
}

module Table {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Table

        table?: any | null
    }

}

interface Table {

    // Own properties of Arrow-1.0.Arrow.Table

    readonly table: any

    // Own fields of Arrow-1.0.Arrow.Table

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Table

    add_column(i: number, field: Field, chunked_array: ChunkedArray): Table | null
    combine_chunks(): Table | null
    concatenate(other_tables: Table[], options: TableConcatenateOptions | null): Table | null
    equal(other_table: Table): boolean
    equal_metadata(other_table: Table, check_metadata: boolean): boolean
    filter(filter: BooleanArray, options: FilterOptions | null): Table | null
    filter_chunked_array(filter: ChunkedArray, options: FilterOptions | null): Table | null
    get_column_data(i: number): ChunkedArray | null
    get_n_columns(): number
    get_n_rows(): number
    get_schema(): Schema
    remove_column(i: number): Table | null
    replace_column(i: number, field: Field, chunked_array: ChunkedArray): Table | null
    slice(offset: number, length: number): Table
    sort_indices(options: SortOptions): UInt64Array | null
    take(indices: Array, options: TakeOptions | null): Table | null
    take_chunked_array(indices: ChunkedArray, options: TakeOptions | null): Table | null
    to_string(): string | null
    /**
     * Writes the `table` as Feather format data to the `sink`.
     * @param sink The output.
     * @param properties The properties for this write.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    write_as_feather(sink: OutputStream, properties: FeatherWriteProperties | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Table

    connect(sigName: "notify::table", callback: (($obj: Table, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: Table, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Table extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Table

    static name: string
    static $gtype: GObject.GType<Table>

    // Constructors of Arrow-1.0.Arrow.Table

    constructor(config?: Table.ConstructorProperties) 
    static new_arrays(schema: Schema, arrays: Array[]): Table
    static new_chunked_arrays(schema: Schema, chunked_arrays: ChunkedArray[]): Table
    static new_record_batches(schema: Schema, record_batches: RecordBatch[]): Table
    _init(config?: Table.ConstructorProperties): void
}

module TableBatchReader {

    // Constructor properties interface

    interface ConstructorProperties extends RecordBatchReader.ConstructorProperties {
    }

}

interface TableBatchReader {

    // Own fields of Arrow-1.0.Arrow.TableBatchReader

    parent_instance: RecordBatchReader & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.TableBatchReader

    connect(sigName: "notify::record-batch-reader", callback: (($obj: TableBatchReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::record-batch-reader", callback: (($obj: TableBatchReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::record-batch-reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TableBatchReader extends RecordBatchReader {

    // Own properties of Arrow-1.0.Arrow.TableBatchReader

    static name: string
    static $gtype: GObject.GType<TableBatchReader>

    // Constructors of Arrow-1.0.Arrow.TableBatchReader

    constructor(config?: TableBatchReader.ConstructorProperties) 
    constructor(table: Table) 
    static new(table: Table): TableBatchReader

    // Overloads of new

    static new(record_batches: RecordBatch[], schema: Schema | null): RecordBatchReader
    _init(config?: TableBatchReader.ConstructorProperties): void
}

module TableConcatenateOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.TableConcatenateOptions

        /**
         * If true, a #GArrowField of #GArrowNullDataType can be unified
         * with a #GArrowField of another type. The unified field will be of
         * the other type and become nullable. Nullability will be promoted
         * to the looser option (nullable if one is not nullable).
         */
        promote_nullability?: boolean | null
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
        unify_schemas?: boolean | null
    }

}

interface TableConcatenateOptions {

    // Own properties of Arrow-1.0.Arrow.TableConcatenateOptions

    /**
     * If true, a #GArrowField of #GArrowNullDataType can be unified
     * with a #GArrowField of another type. The unified field will be of
     * the other type and become nullable. Nullability will be promoted
     * to the looser option (nullable if one is not nullable).
     */
    promote_nullability: boolean
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
    unify_schemas: boolean

    // Own fields of Arrow-1.0.Arrow.TableConcatenateOptions

    parent_instance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.TableConcatenateOptions

    connect(sigName: "notify::promote-nullability", callback: (($obj: TableConcatenateOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::promote-nullability", callback: (($obj: TableConcatenateOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::promote-nullability", ...args: any[]): void
    connect(sigName: "notify::unify-schemas", callback: (($obj: TableConcatenateOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unify-schemas", callback: (($obj: TableConcatenateOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unify-schemas", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TableConcatenateOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.TableConcatenateOptions

    static name: string
    static $gtype: GObject.GType<TableConcatenateOptions>

    // Constructors of Arrow-1.0.Arrow.TableConcatenateOptions

    constructor(config?: TableConcatenateOptions.ConstructorProperties) 
    constructor() 
    static new(): TableConcatenateOptions
    _init(config?: TableConcatenateOptions.ConstructorProperties): void
}

module TableDatum {

    // Constructor properties interface

    interface ConstructorProperties extends Datum.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.TableDatum

        value?: Table | null
    }

}

interface TableDatum {

    // Own properties of Arrow-1.0.Arrow.TableDatum

    readonly value: Table

    // Own fields of Arrow-1.0.Arrow.TableDatum

    parent_instance: Datum & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.TableDatum

    connect(sigName: "notify::value", callback: (($obj: TableDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TableDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::datum", callback: (($obj: TableDatum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datum", callback: (($obj: TableDatum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::datum", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TableDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.TableDatum

    static name: string
    static $gtype: GObject.GType<TableDatum>

    // Constructors of Arrow-1.0.Arrow.TableDatum

    constructor(config?: TableDatum.ConstructorProperties) 
    constructor(value: Table) 
    static new(value: Table): TableDatum
    _init(config?: TableDatum.ConstructorProperties): void
}

module TakeOptions {

    // Constructor properties interface

    interface ConstructorProperties extends FunctionOptions.ConstructorProperties {
    }

}

interface TakeOptions {

    // Own fields of Arrow-1.0.Arrow.TakeOptions

    parent_instance: FunctionOptions & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.TakeOptions

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TakeOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.TakeOptions

    static name: string
    static $gtype: GObject.GType<TakeOptions>

    // Constructors of Arrow-1.0.Arrow.TakeOptions

    constructor(config?: TakeOptions.ConstructorProperties) 
    constructor() 
    static new(): TakeOptions
    _init(config?: TakeOptions.ConstructorProperties): void
}

module TemporalDataType {

    // Constructor properties interface

    interface ConstructorProperties extends FixedWidthDataType.ConstructorProperties {
    }

}

interface TemporalDataType {

    // Own fields of Arrow-1.0.Arrow.TemporalDataType

    parent_instance: FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.TemporalDataType

    connect(sigName: "notify::data-type", callback: (($obj: TemporalDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: TemporalDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TemporalDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.TemporalDataType

    static name: string
    static $gtype: GObject.GType<TemporalDataType>

    // Constructors of Arrow-1.0.Arrow.TemporalDataType

    constructor(config?: TemporalDataType.ConstructorProperties) 
    _init(config?: TemporalDataType.ConstructorProperties): void
}

module Tensor {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Tensor

        buffer?: Buffer | null
        tensor?: any | null
    }

}

interface Tensor {

    // Own properties of Arrow-1.0.Arrow.Tensor

    readonly buffer: Buffer
    readonly tensor: any

    // Own fields of Arrow-1.0.Arrow.Tensor

    parent_instance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Tensor

    equal(other_tensor: Tensor): boolean
    get_buffer(): Buffer
    get_dimension_name(i: number): string | null
    get_n_dimensions(): number
    get_shape(): number[]
    get_size(): number
    get_strides(): number[]
    get_value_data_type(): DataType
    get_value_type(): Type
    is_column_major(): boolean
    is_contiguous(): boolean
    is_mutable(): boolean
    is_row_major(): boolean

    // Class property signals of Arrow-1.0.Arrow.Tensor

    connect(sigName: "notify::buffer", callback: (($obj: Tensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: Tensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::tensor", callback: (($obj: Tensor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tensor", callback: (($obj: Tensor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tensor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Tensor extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Tensor

    static name: string
    static $gtype: GObject.GType<Tensor>

    // Constructors of Arrow-1.0.Arrow.Tensor

    constructor(config?: Tensor.ConstructorProperties) 
    constructor(data_type: DataType, data: Buffer, shape: number[], strides: number[] | null, dimension_names: string[] | null) 
    static new(data_type: DataType, data: Buffer, shape: number[], strides: number[] | null, dimension_names: string[] | null): Tensor
    _init(config?: Tensor.ConstructorProperties): void
}

module Time32Array {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface Time32Array {

    // Own fields of Arrow-1.0.Arrow.Time32Array

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Time32Array

    get_value(i: number): number
    get_values(): number[]

    // Class property signals of Arrow-1.0.Arrow.Time32Array

    connect(sigName: "notify::array", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: Time32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Time32Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Time32Array

    static name: string
    static $gtype: GObject.GType<Time32Array>

    // Constructors of Arrow-1.0.Arrow.Time32Array

    constructor(config?: Time32Array.ConstructorProperties) 
    constructor(data_type: Time32DataType, length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(data_type: Time32DataType, length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Time32Array
    _init(config?: Time32Array.ConstructorProperties): void
}

module Time32ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface Time32ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Time32ArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Time32ArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of days since UNIX epoch in signed 32bit integer.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Time32ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: Time32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: Time32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Time32ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Time32ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Time32ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Time32ArrayBuilder

    constructor(config?: Time32ArrayBuilder.ConstructorProperties) 
    constructor(data_type: Time32DataType) 
    static new(data_type: Time32DataType): Time32ArrayBuilder
    _init(config?: Time32ArrayBuilder.ConstructorProperties): void
}

module Time32DataType {

    // Constructor properties interface

    interface ConstructorProperties extends TimeDataType.ConstructorProperties {
    }

}

interface Time32DataType {

    // Own fields of Arrow-1.0.Arrow.Time32DataType

    parent_instance: TimeDataType & TemporalDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.Time32DataType

    connect(sigName: "notify::data-type", callback: (($obj: Time32DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Time32DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Time32DataType extends TimeDataType {

    // Own properties of Arrow-1.0.Arrow.Time32DataType

    static name: string
    static $gtype: GObject.GType<Time32DataType>

    // Constructors of Arrow-1.0.Arrow.Time32DataType

    constructor(config?: Time32DataType.ConstructorProperties) 
    constructor(unit: TimeUnit) 
    static new(unit: TimeUnit): Time32DataType
    _init(config?: Time32DataType.ConstructorProperties): void
}

module Time32Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface Time32Scalar {

    // Own fields of Arrow-1.0.Arrow.Time32Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Time32Scalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.Time32Scalar

    connect(sigName: "notify::data-type", callback: (($obj: Time32Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Time32Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: Time32Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: Time32Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Time32Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Time32Scalar

    static name: string
    static $gtype: GObject.GType<Time32Scalar>

    // Constructors of Arrow-1.0.Arrow.Time32Scalar

    constructor(config?: Time32Scalar.ConstructorProperties) 
    constructor(data_type: Time32DataType, value: number) 
    static new(data_type: Time32DataType, value: number): Time32Scalar
    _init(config?: Time32Scalar.ConstructorProperties): void
}

module Time64Array {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface Time64Array {

    // Own fields of Arrow-1.0.Arrow.Time64Array

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Time64Array

    get_value(i: number): number
    get_values(): number[]

    // Class property signals of Arrow-1.0.Arrow.Time64Array

    connect(sigName: "notify::array", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: Time64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Time64Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Time64Array

    static name: string
    static $gtype: GObject.GType<Time64Array>

    // Constructors of Arrow-1.0.Arrow.Time64Array

    constructor(config?: Time64Array.ConstructorProperties) 
    constructor(data_type: Time64DataType, length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(data_type: Time64DataType, length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Time64Array
    _init(config?: Time64Array.ConstructorProperties): void
}

module Time64ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface Time64ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Time64ArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Time64ArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of milliseconds since UNIX epoch in signed 64bit integer.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Time64ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: Time64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: Time64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Time64ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Time64ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Time64ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Time64ArrayBuilder

    constructor(config?: Time64ArrayBuilder.ConstructorProperties) 
    constructor(data_type: Time64DataType) 
    static new(data_type: Time64DataType): Time64ArrayBuilder
    _init(config?: Time64ArrayBuilder.ConstructorProperties): void
}

module Time64DataType {

    // Constructor properties interface

    interface ConstructorProperties extends TimeDataType.ConstructorProperties {
    }

}

interface Time64DataType {

    // Own fields of Arrow-1.0.Arrow.Time64DataType

    parent_instance: TimeDataType & TemporalDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.Time64DataType

    connect(sigName: "notify::data-type", callback: (($obj: Time64DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Time64DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Time64DataType extends TimeDataType {

    // Own properties of Arrow-1.0.Arrow.Time64DataType

    static name: string
    static $gtype: GObject.GType<Time64DataType>

    // Constructors of Arrow-1.0.Arrow.Time64DataType

    constructor(config?: Time64DataType.ConstructorProperties) 
    constructor(unit: TimeUnit) 
    static new(unit: TimeUnit): Time64DataType
    _init(config?: Time64DataType.ConstructorProperties): void
}

module Time64Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface Time64Scalar {

    // Own fields of Arrow-1.0.Arrow.Time64Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Time64Scalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.Time64Scalar

    connect(sigName: "notify::data-type", callback: (($obj: Time64Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: Time64Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: Time64Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: Time64Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Time64Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Time64Scalar

    static name: string
    static $gtype: GObject.GType<Time64Scalar>

    // Constructors of Arrow-1.0.Arrow.Time64Scalar

    constructor(config?: Time64Scalar.ConstructorProperties) 
    constructor(data_type: Time64DataType, value: number) 
    static new(data_type: Time64DataType, value: number): Time64Scalar
    _init(config?: Time64Scalar.ConstructorProperties): void
}

module TimeDataType {

    // Constructor properties interface

    interface ConstructorProperties extends TemporalDataType.ConstructorProperties {
    }

}

interface TimeDataType {

    // Own fields of Arrow-1.0.Arrow.TimeDataType

    parent_instance: TemporalDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.TimeDataType

    get_unit(): TimeUnit

    // Class property signals of Arrow-1.0.Arrow.TimeDataType

    connect(sigName: "notify::data-type", callback: (($obj: TimeDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: TimeDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TimeDataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.TimeDataType

    static name: string
    static $gtype: GObject.GType<TimeDataType>

    // Constructors of Arrow-1.0.Arrow.TimeDataType

    constructor(config?: TimeDataType.ConstructorProperties) 
    _init(config?: TimeDataType.ConstructorProperties): void
}

module TimestampArray {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface TimestampArray {

    // Own fields of Arrow-1.0.Arrow.TimestampArray

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.TimestampArray

    get_value(i: number): number
    get_values(): number[]

    // Class property signals of Arrow-1.0.Arrow.TimestampArray

    connect(sigName: "notify::array", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: TimestampArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TimestampArray extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.TimestampArray

    static name: string
    static $gtype: GObject.GType<TimestampArray>

    // Constructors of Arrow-1.0.Arrow.TimestampArray

    constructor(config?: TimestampArray.ConstructorProperties) 
    constructor(data_type: TimestampDataType, length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(data_type: TimestampDataType, length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): TimestampArray
    _init(config?: TimestampArray.ConstructorProperties): void
}

module TimestampArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface TimestampArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.TimestampArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.TimestampArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of milliseconds since UNIX epoch in signed 64bit integer.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.TimestampArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: TimestampArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: TimestampArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TimestampArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.TimestampArrayBuilder

    static name: string
    static $gtype: GObject.GType<TimestampArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.TimestampArrayBuilder

    constructor(config?: TimestampArrayBuilder.ConstructorProperties) 
    constructor(data_type: TimestampDataType) 
    static new(data_type: TimestampDataType): TimestampArrayBuilder
    _init(config?: TimestampArrayBuilder.ConstructorProperties): void
}

module TimestampDataType {

    // Constructor properties interface

    interface ConstructorProperties extends TemporalDataType.ConstructorProperties {
    }

}

interface TimestampDataType {

    // Own fields of Arrow-1.0.Arrow.TimestampDataType

    parent_instance: TemporalDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.TimestampDataType

    get_unit(): TimeUnit

    // Class property signals of Arrow-1.0.Arrow.TimestampDataType

    connect(sigName: "notify::data-type", callback: (($obj: TimestampDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: TimestampDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TimestampDataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.TimestampDataType

    static name: string
    static $gtype: GObject.GType<TimestampDataType>

    // Constructors of Arrow-1.0.Arrow.TimestampDataType

    constructor(config?: TimestampDataType.ConstructorProperties) 
    constructor(unit: TimeUnit) 
    static new(unit: TimeUnit): TimestampDataType
    _init(config?: TimestampDataType.ConstructorProperties): void
}

module TimestampScalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface TimestampScalar {

    // Own fields of Arrow-1.0.Arrow.TimestampScalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.TimestampScalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.TimestampScalar

    connect(sigName: "notify::data-type", callback: (($obj: TimestampScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: TimestampScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: TimestampScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: TimestampScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TimestampScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.TimestampScalar

    static name: string
    static $gtype: GObject.GType<TimestampScalar>

    // Constructors of Arrow-1.0.Arrow.TimestampScalar

    constructor(config?: TimestampScalar.ConstructorProperties) 
    constructor(data_type: TimestampDataType, value: number) 
    static new(data_type: TimestampDataType, value: number): TimestampScalar
    _init(config?: TimestampScalar.ConstructorProperties): void
}

module UInt16Array {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface UInt16Array {

    // Own fields of Arrow-1.0.Arrow.UInt16Array

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UInt16Array

    get_value(i: number): number
    get_values(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.UInt16Array

    connect(sigName: "notify::array", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: UInt16Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt16Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.UInt16Array

    static name: string
    static $gtype: GObject.GType<UInt16Array>

    // Constructors of Arrow-1.0.Arrow.UInt16Array

    constructor(config?: UInt16Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt16Array
    _init(config?: UInt16Array.ConstructorProperties): void
}

module UInt16ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface UInt16ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.UInt16ArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UInt16ArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of uint16.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UInt16ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: UInt16ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: UInt16ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt16ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt16ArrayBuilder

    static name: string
    static $gtype: GObject.GType<UInt16ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.UInt16ArrayBuilder

    constructor(config?: UInt16ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): UInt16ArrayBuilder
    _init(config?: UInt16ArrayBuilder.ConstructorProperties): void
}

module UInt16DataType {

    // Constructor properties interface

    interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

interface UInt16DataType {

    // Own fields of Arrow-1.0.Arrow.UInt16DataType

    parent_instance: IntegerDataType & NumericDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.UInt16DataType

    connect(sigName: "notify::data-type", callback: (($obj: UInt16DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: UInt16DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt16DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.UInt16DataType

    static name: string
    static $gtype: GObject.GType<UInt16DataType>

    // Constructors of Arrow-1.0.Arrow.UInt16DataType

    constructor(config?: UInt16DataType.ConstructorProperties) 
    constructor() 
    static new(): UInt16DataType
    _init(config?: UInt16DataType.ConstructorProperties): void
}

module UInt16Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface UInt16Scalar {

    // Own fields of Arrow-1.0.Arrow.UInt16Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UInt16Scalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.UInt16Scalar

    connect(sigName: "notify::data-type", callback: (($obj: UInt16Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: UInt16Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: UInt16Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: UInt16Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt16Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt16Scalar

    static name: string
    static $gtype: GObject.GType<UInt16Scalar>

    // Constructors of Arrow-1.0.Arrow.UInt16Scalar

    constructor(config?: UInt16Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): UInt16Scalar
    _init(config?: UInt16Scalar.ConstructorProperties): void
}

module UInt32Array {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface UInt32Array {

    // Own fields of Arrow-1.0.Arrow.UInt32Array

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UInt32Array

    get_value(i: number): number
    get_values(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.UInt32Array

    connect(sigName: "notify::array", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: UInt32Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt32Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.UInt32Array

    static name: string
    static $gtype: GObject.GType<UInt32Array>

    // Constructors of Arrow-1.0.Arrow.UInt32Array

    constructor(config?: UInt32Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt32Array
    _init(config?: UInt32Array.ConstructorProperties): void
}

module UInt32ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface UInt32ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.UInt32ArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UInt32ArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of uint32.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UInt32ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: UInt32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: UInt32ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt32ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt32ArrayBuilder

    static name: string
    static $gtype: GObject.GType<UInt32ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.UInt32ArrayBuilder

    constructor(config?: UInt32ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): UInt32ArrayBuilder
    _init(config?: UInt32ArrayBuilder.ConstructorProperties): void
}

module UInt32DataType {

    // Constructor properties interface

    interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

interface UInt32DataType {

    // Own fields of Arrow-1.0.Arrow.UInt32DataType

    parent_instance: IntegerDataType & NumericDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.UInt32DataType

    connect(sigName: "notify::data-type", callback: (($obj: UInt32DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: UInt32DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt32DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.UInt32DataType

    static name: string
    static $gtype: GObject.GType<UInt32DataType>

    // Constructors of Arrow-1.0.Arrow.UInt32DataType

    constructor(config?: UInt32DataType.ConstructorProperties) 
    constructor() 
    static new(): UInt32DataType
    _init(config?: UInt32DataType.ConstructorProperties): void
}

module UInt32Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface UInt32Scalar {

    // Own fields of Arrow-1.0.Arrow.UInt32Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UInt32Scalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.UInt32Scalar

    connect(sigName: "notify::data-type", callback: (($obj: UInt32Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: UInt32Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: UInt32Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: UInt32Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt32Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt32Scalar

    static name: string
    static $gtype: GObject.GType<UInt32Scalar>

    // Constructors of Arrow-1.0.Arrow.UInt32Scalar

    constructor(config?: UInt32Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): UInt32Scalar
    _init(config?: UInt32Scalar.ConstructorProperties): void
}

module UInt64Array {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface UInt64Array {

    // Own fields of Arrow-1.0.Arrow.UInt64Array

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UInt64Array

    get_value(i: number): number
    get_values(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.UInt64Array

    connect(sigName: "notify::array", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: UInt64Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt64Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.UInt64Array

    static name: string
    static $gtype: GObject.GType<UInt64Array>

    // Constructors of Arrow-1.0.Arrow.UInt64Array

    constructor(config?: UInt64Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt64Array
    _init(config?: UInt64Array.ConstructorProperties): void
}

module UInt64ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface UInt64ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.UInt64ArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UInt64ArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of uint64.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UInt64ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: UInt64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: UInt64ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt64ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt64ArrayBuilder

    static name: string
    static $gtype: GObject.GType<UInt64ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.UInt64ArrayBuilder

    constructor(config?: UInt64ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): UInt64ArrayBuilder
    _init(config?: UInt64ArrayBuilder.ConstructorProperties): void
}

module UInt64DataType {

    // Constructor properties interface

    interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

interface UInt64DataType {

    // Own fields of Arrow-1.0.Arrow.UInt64DataType

    parent_instance: IntegerDataType & NumericDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.UInt64DataType

    connect(sigName: "notify::data-type", callback: (($obj: UInt64DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: UInt64DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt64DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.UInt64DataType

    static name: string
    static $gtype: GObject.GType<UInt64DataType>

    // Constructors of Arrow-1.0.Arrow.UInt64DataType

    constructor(config?: UInt64DataType.ConstructorProperties) 
    constructor() 
    static new(): UInt64DataType
    _init(config?: UInt64DataType.ConstructorProperties): void
}

module UInt64Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface UInt64Scalar {

    // Own fields of Arrow-1.0.Arrow.UInt64Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UInt64Scalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.UInt64Scalar

    connect(sigName: "notify::data-type", callback: (($obj: UInt64Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: UInt64Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: UInt64Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: UInt64Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt64Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt64Scalar

    static name: string
    static $gtype: GObject.GType<UInt64Scalar>

    // Constructors of Arrow-1.0.Arrow.UInt64Scalar

    constructor(config?: UInt64Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): UInt64Scalar
    _init(config?: UInt64Scalar.ConstructorProperties): void
}

module UInt8Array {

    // Constructor properties interface

    interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

interface UInt8Array {

    // Own fields of Arrow-1.0.Arrow.UInt8Array

    parent_instance: NumericArray & PrimitiveArray & Array & GObject.Object & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UInt8Array

    get_value(i: number): number
    get_values(): Uint8Array
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.UInt8Array

    connect(sigName: "notify::array", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: UInt8Array, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt8Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.UInt8Array

    static name: string
    static $gtype: GObject.GType<UInt8Array>

    // Constructors of Arrow-1.0.Arrow.UInt8Array

    constructor(config?: UInt8Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number) 
    static new(length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt8Array
    _init(config?: UInt8Array.ConstructorProperties): void
}

module UInt8ArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface UInt8ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.UInt8ArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UInt8ArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of uint8.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: Uint8Array, is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UInt8ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: UInt8ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: UInt8ArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt8ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt8ArrayBuilder

    static name: string
    static $gtype: GObject.GType<UInt8ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.UInt8ArrayBuilder

    constructor(config?: UInt8ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): UInt8ArrayBuilder
    _init(config?: UInt8ArrayBuilder.ConstructorProperties): void
}

module UInt8DataType {

    // Constructor properties interface

    interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

interface UInt8DataType {

    // Own fields of Arrow-1.0.Arrow.UInt8DataType

    parent_instance: IntegerDataType & NumericDataType & FixedWidthDataType & DataType & GObject.Object & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.UInt8DataType

    connect(sigName: "notify::data-type", callback: (($obj: UInt8DataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: UInt8DataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt8DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.UInt8DataType

    static name: string
    static $gtype: GObject.GType<UInt8DataType>

    // Constructors of Arrow-1.0.Arrow.UInt8DataType

    constructor(config?: UInt8DataType.ConstructorProperties) 
    constructor() 
    static new(): UInt8DataType
    _init(config?: UInt8DataType.ConstructorProperties): void
}

module UInt8Scalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

interface UInt8Scalar {

    // Own fields of Arrow-1.0.Arrow.UInt8Scalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UInt8Scalar

    get_value(): number

    // Class property signals of Arrow-1.0.Arrow.UInt8Scalar

    connect(sigName: "notify::data-type", callback: (($obj: UInt8Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: UInt8Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: UInt8Scalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: UInt8Scalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UInt8Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt8Scalar

    static name: string
    static $gtype: GObject.GType<UInt8Scalar>

    // Constructors of Arrow-1.0.Arrow.UInt8Scalar

    constructor(config?: UInt8Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): UInt8Scalar
    _init(config?: UInt8Scalar.ConstructorProperties): void
}

module UIntArrayBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

interface UIntArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.UIntArrayBuilder

    parent_instance: ArrayBuilder & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UIntArrayBuilder

    append(value: number): boolean
    append_value(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of unsigned int.
     * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    append_values(values: number[], is_valids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UIntArrayBuilder

    connect(sigName: "notify::array-builder", callback: (($obj: UIntArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array-builder", callback: (($obj: UIntArrayBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UIntArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UIntArrayBuilder

    static name: string
    static $gtype: GObject.GType<UIntArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.UIntArrayBuilder

    constructor(config?: UIntArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): UIntArrayBuilder
    _init(config?: UIntArrayBuilder.ConstructorProperties): void
}

module UTF8NormalizeOptions {

    // Constructor properties interface

    interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.UTF8NormalizeOptions

        /**
         * The Unicode normalization form to apply.
         */
        form?: UTF8NormalizeForm | null
    }

}

interface UTF8NormalizeOptions {

    // Own properties of Arrow-1.0.Arrow.UTF8NormalizeOptions

    /**
     * The Unicode normalization form to apply.
     */
    form: UTF8NormalizeForm

    // Own fields of Arrow-1.0.Arrow.UTF8NormalizeOptions

    parent_instance: FunctionOptions & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.UTF8NormalizeOptions

    connect(sigName: "notify::form", callback: (($obj: UTF8NormalizeOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::form", callback: (($obj: UTF8NormalizeOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::form", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UTF8NormalizeOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.UTF8NormalizeOptions

    static name: string
    static $gtype: GObject.GType<UTF8NormalizeOptions>

    // Constructors of Arrow-1.0.Arrow.UTF8NormalizeOptions

    constructor(config?: UTF8NormalizeOptions.ConstructorProperties) 
    constructor() 
    static new(): UTF8NormalizeOptions
    _init(config?: UTF8NormalizeOptions.ConstructorProperties): void
}

module UnionArray {

    // Constructor properties interface

    interface ConstructorProperties extends Array.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.UnionArray

        type_ids?: Int8Array | null
    }

}

interface UnionArray {

    // Own properties of Arrow-1.0.Arrow.UnionArray

    readonly type_ids: Int8Array

    // Own fields of Arrow-1.0.Arrow.UnionArray

    parent_instance: Array & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UnionArray

    get_field(i: number): Array | null

    // Class property signals of Arrow-1.0.Arrow.UnionArray

    connect(sigName: "notify::type-ids", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-ids", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-ids", ...args: any[]): void
    connect(sigName: "notify::array", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::array", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer1", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer2", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-bitmap", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-data-type", callback: (($obj: UnionArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UnionArray extends Array {

    // Own properties of Arrow-1.0.Arrow.UnionArray

    static name: string
    static $gtype: GObject.GType<UnionArray>

    // Constructors of Arrow-1.0.Arrow.UnionArray

    constructor(config?: UnionArray.ConstructorProperties) 
    _init(config?: UnionArray.ConstructorProperties): void
}

module UnionDataType {

    // Constructor properties interface

    interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

interface UnionDataType {

    // Own fields of Arrow-1.0.Arrow.UnionDataType

    parent_instance: DataType & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UnionDataType

    get_field(i: number): Field | null
    get_fields(): Field[]
    get_n_fields(): number
    get_type_codes(): Uint8Array

    // Class property signals of Arrow-1.0.Arrow.UnionDataType

    connect(sigName: "notify::data-type", callback: (($obj: UnionDataType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: UnionDataType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UnionDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.UnionDataType

    static name: string
    static $gtype: GObject.GType<UnionDataType>

    // Constructors of Arrow-1.0.Arrow.UnionDataType

    constructor(config?: UnionDataType.ConstructorProperties) 
    _init(config?: UnionDataType.ConstructorProperties): void
}

module UnionScalar {

    // Constructor properties interface

    interface ConstructorProperties extends Scalar.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.UnionScalar

        /**
         * The value of the scalar.
         */
        value?: Scalar | null
    }

}

interface UnionScalar {

    // Own properties of Arrow-1.0.Arrow.UnionScalar

    /**
     * The value of the scalar.
     */
    readonly value: Scalar

    // Own fields of Arrow-1.0.Arrow.UnionScalar

    parent_instance: Scalar & GObject.Object

    // Owm methods of Arrow-1.0.Arrow.UnionScalar

    get_type_code(): number
    get_value(): Scalar

    // Class property signals of Arrow-1.0.Arrow.UnionScalar

    connect(sigName: "notify::value", callback: (($obj: UnionScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: UnionScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (($obj: UnionScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-type", callback: (($obj: UnionScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (($obj: UnionScalar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scalar", callback: (($obj: UnionScalar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UnionScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UnionScalar

    static name: string
    static $gtype: GObject.GType<UnionScalar>

    // Constructors of Arrow-1.0.Arrow.UnionScalar

    constructor(config?: UnionScalar.ConstructorProperties) 
    _init(config?: UnionScalar.ConstructorProperties): void
}

module VarianceOptions {

    // Constructor properties interface

    interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.VarianceOptions

        /**
         * The Delta Degrees of Freedom (ddof) to be used.
         */
        ddof?: number | null
        /**
         * If less than this many non-null values are observed, emit null.
         */
        min_count?: number | null
        /**
         * Whether NULLs are skipped or not.
         */
        skip_nulls?: boolean | null
    }

}

interface VarianceOptions {

    // Own properties of Arrow-1.0.Arrow.VarianceOptions

    /**
     * The Delta Degrees of Freedom (ddof) to be used.
     */
    ddof: number
    /**
     * If less than this many non-null values are observed, emit null.
     */
    min_count: number
    /**
     * Whether NULLs are skipped or not.
     */
    skip_nulls: boolean

    // Own fields of Arrow-1.0.Arrow.VarianceOptions

    parent_instance: FunctionOptions & GObject.Object

    // Class property signals of Arrow-1.0.Arrow.VarianceOptions

    connect(sigName: "notify::ddof", callback: (($obj: VarianceOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ddof", callback: (($obj: VarianceOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ddof", ...args: any[]): void
    connect(sigName: "notify::min-count", callback: (($obj: VarianceOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-count", callback: (($obj: VarianceOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-count", ...args: any[]): void
    connect(sigName: "notify::skip-nulls", callback: (($obj: VarianceOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-nulls", callback: (($obj: VarianceOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-nulls", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VarianceOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.VarianceOptions

    static name: string
    static $gtype: GObject.GType<VarianceOptions>

    // Constructors of Arrow-1.0.Arrow.VarianceOptions

    constructor(config?: VarianceOptions.ConstructorProperties) 
    constructor() 
    static new(): VarianceOptions
    _init(config?: VarianceOptions.ConstructorProperties): void
}

module WriteOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.WriteOptions

        /**
         * Write padding after memory buffers to this multiple of
         * bytes. Generally 8 or 64.
         */
        alignment?: number | null
        /**
         * Whether to allow field lengths that don't fit in a signed 32-bit
         * int. Some implementations may not be able to parse such streams.
         */
        allow_64bit?: boolean | null
        /**
         * Codec to use for compressing and decompressing record batch body
         * buffers. This is not part of the Arrow IPC protocol and only for
         * internal use (e.g. Feather files).
         * 
         * May only be UNCOMPRESSED, LZ4_FRAME and ZSTD.
         */
        codec?: Codec | null
        /**
         * The maximum permitted schema nesting depth.
         */
        max_recursion_depth?: number | null
        /**
         * Whether to use the global CPU thread pool.
         */
        use_threads?: boolean | null
        /**
         * Whether to write the pre-0.15.0 encapsulated IPC message format
         * consisting of a 4-byte prefix instead of 8 byte.
         */
        write_legacy_ipc_format?: boolean | null
    }

}

interface WriteOptions {

    // Own properties of Arrow-1.0.Arrow.WriteOptions

    /**
     * Write padding after memory buffers to this multiple of
     * bytes. Generally 8 or 64.
     */
    alignment: number
    /**
     * Whether to allow field lengths that don't fit in a signed 32-bit
     * int. Some implementations may not be able to parse such streams.
     */
    allow_64bit: boolean
    /**
     * Codec to use for compressing and decompressing record batch body
     * buffers. This is not part of the Arrow IPC protocol and only for
     * internal use (e.g. Feather files).
     * 
     * May only be UNCOMPRESSED, LZ4_FRAME and ZSTD.
     */
    codec: Codec
    /**
     * The maximum permitted schema nesting depth.
     */
    max_recursion_depth: number
    /**
     * Whether to use the global CPU thread pool.
     */
    use_threads: boolean
    /**
     * Whether to write the pre-0.15.0 encapsulated IPC message format
     * consisting of a 4-byte prefix instead of 8 byte.
     */
    write_legacy_ipc_format: boolean

    // Own fields of Arrow-1.0.Arrow.WriteOptions

    parent_instance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.WriteOptions

    connect(sigName: "notify::alignment", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::allow-64bit", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-64bit", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-64bit", ...args: any[]): void
    connect(sigName: "notify::codec", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::codec", ...args: any[]): void
    connect(sigName: "notify::max-recursion-depth", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-recursion-depth", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-recursion-depth", ...args: any[]): void
    connect(sigName: "notify::use-threads", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-threads", ...args: any[]): void
    connect(sigName: "notify::write-legacy-ipc-format", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-legacy-ipc-format", callback: (($obj: WriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::write-legacy-ipc-format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WriteOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.WriteOptions

    static name: string
    static $gtype: GObject.GType<WriteOptions>

    // Constructors of Arrow-1.0.Arrow.WriteOptions

    constructor(config?: WriteOptions.ConstructorProperties) 
    constructor() 
    static new(): WriteOptions
    _init(config?: WriteOptions.ConstructorProperties): void
}

interface AggregateNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.AggregateNodeOptionsClass

    parent_class: ExecuteNodeOptionsClass
}

abstract class AggregateNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.AggregateNodeOptionsClass

    static name: string
}

interface AggregationClass {

    // Own fields of Arrow-1.0.Arrow.AggregationClass

    parent_class: GObject.ObjectClass
}

abstract class AggregationClass {

    // Own properties of Arrow-1.0.Arrow.AggregationClass

    static name: string
}

interface ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.ArrayBuilderClass

    parent_class: GObject.ObjectClass
}

abstract class ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.ArrayBuilderClass

    static name: string
}

interface ArrayClass {

    // Own fields of Arrow-1.0.Arrow.ArrayClass

    parent_class: GObject.ObjectClass
}

abstract class ArrayClass {

    // Own properties of Arrow-1.0.Arrow.ArrayClass

    static name: string
}

interface ArrayDatumClass {

    // Own fields of Arrow-1.0.Arrow.ArrayDatumClass

    parent_class: DatumClass
}

abstract class ArrayDatumClass {

    // Own properties of Arrow-1.0.Arrow.ArrayDatumClass

    static name: string
}

interface ArraySortOptionsClass {

    // Own fields of Arrow-1.0.Arrow.ArraySortOptionsClass

    parent_class: FunctionOptionsClass
}

abstract class ArraySortOptionsClass {

    // Own properties of Arrow-1.0.Arrow.ArraySortOptionsClass

    static name: string
}

interface BaseBinaryScalarClass {

    // Own fields of Arrow-1.0.Arrow.BaseBinaryScalarClass

    parent_class: ScalarClass
}

abstract class BaseBinaryScalarClass {

    // Own properties of Arrow-1.0.Arrow.BaseBinaryScalarClass

    static name: string
}

interface BaseListScalarClass {

    // Own fields of Arrow-1.0.Arrow.BaseListScalarClass

    parent_class: ScalarClass
}

abstract class BaseListScalarClass {

    // Own properties of Arrow-1.0.Arrow.BaseListScalarClass

    static name: string
}

interface BinaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.BinaryArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class BinaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.BinaryArrayBuilderClass

    static name: string
}

interface BinaryArrayClass {

    // Own fields of Arrow-1.0.Arrow.BinaryArrayClass

    parent_class: ArrayClass
}

abstract class BinaryArrayClass {

    // Own properties of Arrow-1.0.Arrow.BinaryArrayClass

    static name: string
}

interface BinaryDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.BinaryDataTypeClass

    parent_class: DataTypeClass
}

abstract class BinaryDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.BinaryDataTypeClass

    static name: string
}

interface BinaryDictionaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class BinaryDictionaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilderClass

    static name: string
}

interface BinaryScalarClass {

    // Own fields of Arrow-1.0.Arrow.BinaryScalarClass

    parent_class: BaseBinaryScalarClass
}

abstract class BinaryScalarClass {

    // Own properties of Arrow-1.0.Arrow.BinaryScalarClass

    static name: string
}

interface BooleanArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.BooleanArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class BooleanArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.BooleanArrayBuilderClass

    static name: string
}

interface BooleanArrayClass {

    // Own fields of Arrow-1.0.Arrow.BooleanArrayClass

    parent_class: PrimitiveArrayClass
}

abstract class BooleanArrayClass {

    // Own properties of Arrow-1.0.Arrow.BooleanArrayClass

    static name: string
}

interface BooleanDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.BooleanDataTypeClass

    parent_class: FixedWidthDataTypeClass
}

abstract class BooleanDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.BooleanDataTypeClass

    static name: string
}

interface BooleanScalarClass {

    // Own fields of Arrow-1.0.Arrow.BooleanScalarClass

    parent_class: ScalarClass
}

abstract class BooleanScalarClass {

    // Own properties of Arrow-1.0.Arrow.BooleanScalarClass

    static name: string
}

interface BufferClass {

    // Own fields of Arrow-1.0.Arrow.BufferClass

    parent_class: GObject.ObjectClass
}

abstract class BufferClass {

    // Own properties of Arrow-1.0.Arrow.BufferClass

    static name: string
}

interface BufferInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.BufferInputStreamClass

    parent_class: SeekableInputStreamClass
}

abstract class BufferInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.BufferInputStreamClass

    static name: string
}

interface BufferOutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.BufferOutputStreamClass

    parent_class: OutputStreamClass
}

abstract class BufferOutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.BufferOutputStreamClass

    static name: string
}

interface CSVReadOptionsClass {

    // Own fields of Arrow-1.0.Arrow.CSVReadOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class CSVReadOptionsClass {

    // Own properties of Arrow-1.0.Arrow.CSVReadOptionsClass

    static name: string
}

interface CSVReaderClass {

    // Own fields of Arrow-1.0.Arrow.CSVReaderClass

    parent_class: GObject.ObjectClass
}

abstract class CSVReaderClass {

    // Own properties of Arrow-1.0.Arrow.CSVReaderClass

    static name: string
}

interface CallExpressionClass {

    // Own fields of Arrow-1.0.Arrow.CallExpressionClass

    parent_class: ExpressionClass
}

abstract class CallExpressionClass {

    // Own properties of Arrow-1.0.Arrow.CallExpressionClass

    static name: string
}

interface CastOptionsClass {

    // Own fields of Arrow-1.0.Arrow.CastOptionsClass

    parent_class: FunctionOptionsClass
}

abstract class CastOptionsClass {

    // Own properties of Arrow-1.0.Arrow.CastOptionsClass

    static name: string
}

interface ChunkedArrayClass {

    // Own fields of Arrow-1.0.Arrow.ChunkedArrayClass

    parent_class: GObject.ObjectClass
}

abstract class ChunkedArrayClass {

    // Own properties of Arrow-1.0.Arrow.ChunkedArrayClass

    static name: string
}

interface ChunkedArrayDatumClass {

    // Own fields of Arrow-1.0.Arrow.ChunkedArrayDatumClass

    parent_class: DatumClass
}

abstract class ChunkedArrayDatumClass {

    // Own properties of Arrow-1.0.Arrow.ChunkedArrayDatumClass

    static name: string
}

interface CodecClass {

    // Own fields of Arrow-1.0.Arrow.CodecClass

    parent_class: GObject.ObjectClass
}

abstract class CodecClass {

    // Own properties of Arrow-1.0.Arrow.CodecClass

    static name: string
}

interface CompressedInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.CompressedInputStreamClass

    parent_class: InputStreamClass
}

abstract class CompressedInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.CompressedInputStreamClass

    static name: string
}

interface CompressedOutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.CompressedOutputStreamClass

    parent_class: OutputStreamClass
}

abstract class CompressedOutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.CompressedOutputStreamClass

    static name: string
}

interface CountOptionsClass {

    // Own fields of Arrow-1.0.Arrow.CountOptionsClass

    parent_class: FunctionOptionsClass
}

abstract class CountOptionsClass {

    // Own properties of Arrow-1.0.Arrow.CountOptionsClass

    static name: string
}

interface DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DataTypeClass

    parent_class: GObject.ObjectClass
}

abstract class DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DataTypeClass

    static name: string
}

interface Date32ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Date32ArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class Date32ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Date32ArrayBuilderClass

    static name: string
}

interface Date32ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Date32ArrayClass

    parent_class: NumericArrayClass
}

abstract class Date32ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Date32ArrayClass

    static name: string
}

interface Date32DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Date32DataTypeClass

    parent_class: TemporalDataTypeClass
}

abstract class Date32DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Date32DataTypeClass

    static name: string
}

interface Date32ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Date32ScalarClass

    parent_class: ScalarClass
}

abstract class Date32ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Date32ScalarClass

    static name: string
}

interface Date64ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Date64ArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class Date64ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Date64ArrayBuilderClass

    static name: string
}

interface Date64ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Date64ArrayClass

    parent_class: NumericArrayClass
}

abstract class Date64ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Date64ArrayClass

    static name: string
}

interface Date64DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Date64DataTypeClass

    parent_class: TemporalDataTypeClass
}

abstract class Date64DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Date64DataTypeClass

    static name: string
}

interface Date64ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Date64ScalarClass

    parent_class: ScalarClass
}

abstract class Date64ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Date64ScalarClass

    static name: string
}

interface DatumClass {

    // Own fields of Arrow-1.0.Arrow.DatumClass

    parent_class: GObject.ObjectClass
}

abstract class DatumClass {

    // Own properties of Arrow-1.0.Arrow.DatumClass

    static name: string
}

interface DayTimeIntervalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DayTimeIntervalDataTypeClass

    parent_class: IntervalDataTypeClass
}

abstract class DayTimeIntervalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DayTimeIntervalDataTypeClass

    static name: string
}

interface Decimal128ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Decimal128ArrayBuilderClass

    parent_class: FixedSizeBinaryArrayBuilderClass
}

abstract class Decimal128ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Decimal128ArrayBuilderClass

    static name: string
}

interface Decimal128ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Decimal128ArrayClass

    parent_class: FixedSizeBinaryArrayClass
}

abstract class Decimal128ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Decimal128ArrayClass

    static name: string
}

interface Decimal128Class {

    // Own fields of Arrow-1.0.Arrow.Decimal128Class

    parent_class: GObject.ObjectClass
}

abstract class Decimal128Class {

    // Own properties of Arrow-1.0.Arrow.Decimal128Class

    static name: string
}

interface Decimal128DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Decimal128DataTypeClass

    parent_class: DecimalDataTypeClass
}

abstract class Decimal128DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Decimal128DataTypeClass

    static name: string
}

interface Decimal128ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Decimal128ScalarClass

    parent_class: ScalarClass
}

abstract class Decimal128ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Decimal128ScalarClass

    static name: string
}

interface Decimal256ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Decimal256ArrayBuilderClass

    parent_class: FixedSizeBinaryArrayBuilderClass
}

abstract class Decimal256ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Decimal256ArrayBuilderClass

    static name: string
}

interface Decimal256ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Decimal256ArrayClass

    parent_class: FixedSizeBinaryArrayClass
}

abstract class Decimal256ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Decimal256ArrayClass

    static name: string
}

interface Decimal256Class {

    // Own fields of Arrow-1.0.Arrow.Decimal256Class

    parent_class: GObject.ObjectClass
}

abstract class Decimal256Class {

    // Own properties of Arrow-1.0.Arrow.Decimal256Class

    static name: string
}

interface Decimal256DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Decimal256DataTypeClass

    parent_class: DecimalDataTypeClass
}

abstract class Decimal256DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Decimal256DataTypeClass

    static name: string
}

interface Decimal256ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Decimal256ScalarClass

    parent_class: ScalarClass
}

abstract class Decimal256ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Decimal256ScalarClass

    static name: string
}

interface DecimalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DecimalDataTypeClass

    parent_class: FixedSizeBinaryDataTypeClass
}

abstract class DecimalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DecimalDataTypeClass

    static name: string
}

interface DenseUnionArrayClass {

    // Own fields of Arrow-1.0.Arrow.DenseUnionArrayClass

    parent_class: UnionArrayClass
}

abstract class DenseUnionArrayClass {

    // Own properties of Arrow-1.0.Arrow.DenseUnionArrayClass

    static name: string
}

interface DenseUnionDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DenseUnionDataTypeClass

    parent_class: UnionDataTypeClass
}

abstract class DenseUnionDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DenseUnionDataTypeClass

    static name: string
}

interface DenseUnionScalarClass {

    // Own fields of Arrow-1.0.Arrow.DenseUnionScalarClass

    parent_class: UnionScalarClass
}

abstract class DenseUnionScalarClass {

    // Own properties of Arrow-1.0.Arrow.DenseUnionScalarClass

    static name: string
}

interface DictionaryArrayClass {

    // Own fields of Arrow-1.0.Arrow.DictionaryArrayClass

    parent_class: ArrayClass
}

abstract class DictionaryArrayClass {

    // Own properties of Arrow-1.0.Arrow.DictionaryArrayClass

    static name: string
}

interface DictionaryDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DictionaryDataTypeClass

    parent_class: FixedWidthDataTypeClass
}

abstract class DictionaryDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DictionaryDataTypeClass

    static name: string
}

interface DoubleArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.DoubleArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class DoubleArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.DoubleArrayBuilderClass

    static name: string
}

interface DoubleArrayClass {

    // Own fields of Arrow-1.0.Arrow.DoubleArrayClass

    parent_class: NumericArrayClass
}

abstract class DoubleArrayClass {

    // Own properties of Arrow-1.0.Arrow.DoubleArrayClass

    static name: string
}

interface DoubleDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DoubleDataTypeClass

    parent_class: FloatingPointDataTypeClass
}

abstract class DoubleDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DoubleDataTypeClass

    static name: string
}

interface DoubleScalarClass {

    // Own fields of Arrow-1.0.Arrow.DoubleScalarClass

    parent_class: ScalarClass
}

abstract class DoubleScalarClass {

    // Own properties of Arrow-1.0.Arrow.DoubleScalarClass

    static name: string
}

interface EqualOptionsClass {

    // Own fields of Arrow-1.0.Arrow.EqualOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class EqualOptionsClass {

    // Own properties of Arrow-1.0.Arrow.EqualOptionsClass

    static name: string
}

interface ExecuteContextClass {

    // Own fields of Arrow-1.0.Arrow.ExecuteContextClass

    parent_class: GObject.ObjectClass
}

abstract class ExecuteContextClass {

    // Own properties of Arrow-1.0.Arrow.ExecuteContextClass

    static name: string
}

interface ExecuteNodeClass {

    // Own fields of Arrow-1.0.Arrow.ExecuteNodeClass

    parent_class: GObject.ObjectClass
}

abstract class ExecuteNodeClass {

    // Own properties of Arrow-1.0.Arrow.ExecuteNodeClass

    static name: string
}

interface ExecuteNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.ExecuteNodeOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class ExecuteNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.ExecuteNodeOptionsClass

    static name: string
}

interface ExecutePlanClass {

    // Own fields of Arrow-1.0.Arrow.ExecutePlanClass

    parent_class: GObject.ObjectClass
}

abstract class ExecutePlanClass {

    // Own properties of Arrow-1.0.Arrow.ExecutePlanClass

    static name: string
}

interface ExpressionClass {

    // Own fields of Arrow-1.0.Arrow.ExpressionClass

    parent_class: GObject.ObjectClass
}

abstract class ExpressionClass {

    // Own properties of Arrow-1.0.Arrow.ExpressionClass

    static name: string
}

interface ExtensionArrayClass {

    // Own fields of Arrow-1.0.Arrow.ExtensionArrayClass

    parent_class: ArrayClass
}

abstract class ExtensionArrayClass {

    // Own properties of Arrow-1.0.Arrow.ExtensionArrayClass

    static name: string
}

interface ExtensionDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.ExtensionDataTypeClass

    parent_class: DataTypeClass
    get_extension_name: (data_type: ExtensionDataType) => string | null
    equal: (data_type: ExtensionDataType, other_data_type: ExtensionDataType) => boolean
    serialize: (data_type: ExtensionDataType) => GLib.Bytes
    get_array_gtype: (data_type: ExtensionDataType) => GObject.GType
}

abstract class ExtensionDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataTypeClass

    static name: string
}

interface ExtensionDataTypeRegistryClass {

    // Own fields of Arrow-1.0.Arrow.ExtensionDataTypeRegistryClass

    parent_class: GObject.ObjectClass
}

abstract class ExtensionDataTypeRegistryClass {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataTypeRegistryClass

    static name: string
}

interface ExtensionScalarClass {

    // Own fields of Arrow-1.0.Arrow.ExtensionScalarClass

    parent_class: ScalarClass
}

abstract class ExtensionScalarClass {

    // Own properties of Arrow-1.0.Arrow.ExtensionScalarClass

    static name: string
}

interface FeatherFileReaderClass {

    // Own fields of Arrow-1.0.Arrow.FeatherFileReaderClass

    parent_class: GObject.ObjectClass
}

abstract class FeatherFileReaderClass {

    // Own properties of Arrow-1.0.Arrow.FeatherFileReaderClass

    static name: string
}

interface FeatherWritePropertiesClass {

    // Own fields of Arrow-1.0.Arrow.FeatherWritePropertiesClass

    parent_class: GObject.ObjectClass
}

abstract class FeatherWritePropertiesClass {

    // Own properties of Arrow-1.0.Arrow.FeatherWritePropertiesClass

    static name: string
}

interface FieldClass {

    // Own fields of Arrow-1.0.Arrow.FieldClass

    parent_class: GObject.ObjectClass
}

abstract class FieldClass {

    // Own properties of Arrow-1.0.Arrow.FieldClass

    static name: string
}

interface FieldExpressionClass {

    // Own fields of Arrow-1.0.Arrow.FieldExpressionClass

    parent_class: ExpressionClass
}

abstract class FieldExpressionClass {

    // Own properties of Arrow-1.0.Arrow.FieldExpressionClass

    static name: string
}

interface FileInfoClass {

    // Own fields of Arrow-1.0.Arrow.FileInfoClass

    parent_class: GObject.ObjectClass
}

abstract class FileInfoClass {

    // Own properties of Arrow-1.0.Arrow.FileInfoClass

    static name: string
}

interface FileInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.FileInputStreamClass

    parent_class: SeekableInputStreamClass
}

abstract class FileInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.FileInputStreamClass

    static name: string
}

interface FileInterface {
}

abstract class FileInterface {

    // Own properties of Arrow-1.0.Arrow.FileInterface

    static name: string
}

interface FileOutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.FileOutputStreamClass

    parent_class: OutputStreamClass
}

abstract class FileOutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.FileOutputStreamClass

    static name: string
}

interface FileSelectorClass {

    // Own fields of Arrow-1.0.Arrow.FileSelectorClass

    parent_class: GObject.ObjectClass
}

abstract class FileSelectorClass {

    // Own properties of Arrow-1.0.Arrow.FileSelectorClass

    static name: string
}

interface FileSystemClass {

    // Own fields of Arrow-1.0.Arrow.FileSystemClass

    parent_class: GObject.ObjectClass
}

abstract class FileSystemClass {

    // Own properties of Arrow-1.0.Arrow.FileSystemClass

    static name: string
}

interface FilterOptionsClass {

    // Own fields of Arrow-1.0.Arrow.FilterOptionsClass

    parent_class: FunctionOptionsClass
}

abstract class FilterOptionsClass {

    // Own properties of Arrow-1.0.Arrow.FilterOptionsClass

    static name: string
}

interface FixedSizeBinaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class FixedSizeBinaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilderClass

    static name: string
}

interface FixedSizeBinaryArrayClass {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayClass

    parent_class: PrimitiveArrayClass
}

abstract class FixedSizeBinaryArrayClass {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArrayClass

    static name: string
}

interface FixedSizeBinaryDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryDataTypeClass

    parent_class: FixedWidthDataTypeClass
}

abstract class FixedSizeBinaryDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryDataTypeClass

    static name: string
}

interface FixedSizeBinaryScalarClass {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryScalarClass

    parent_class: BaseBinaryScalarClass
}

abstract class FixedSizeBinaryScalarClass {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryScalarClass

    static name: string
}

interface FixedWidthDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.FixedWidthDataTypeClass

    parent_class: DataTypeClass
}

abstract class FixedWidthDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.FixedWidthDataTypeClass

    static name: string
}

interface FloatArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.FloatArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class FloatArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.FloatArrayBuilderClass

    static name: string
}

interface FloatArrayClass {

    // Own fields of Arrow-1.0.Arrow.FloatArrayClass

    parent_class: NumericArrayClass
}

abstract class FloatArrayClass {

    // Own properties of Arrow-1.0.Arrow.FloatArrayClass

    static name: string
}

interface FloatDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.FloatDataTypeClass

    parent_class: FloatingPointDataTypeClass
}

abstract class FloatDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.FloatDataTypeClass

    static name: string
}

interface FloatScalarClass {

    // Own fields of Arrow-1.0.Arrow.FloatScalarClass

    parent_class: ScalarClass
}

abstract class FloatScalarClass {

    // Own properties of Arrow-1.0.Arrow.FloatScalarClass

    static name: string
}

interface FloatingPointDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.FloatingPointDataTypeClass

    parent_class: NumericDataTypeClass
}

abstract class FloatingPointDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.FloatingPointDataTypeClass

    static name: string
}

interface FunctionClass {

    // Own fields of Arrow-1.0.Arrow.FunctionClass

    parent_class: GObject.ObjectClass
}

abstract class FunctionClass {

    // Own properties of Arrow-1.0.Arrow.FunctionClass

    static name: string
}

interface FunctionDocClass {

    // Own fields of Arrow-1.0.Arrow.FunctionDocClass

    parent_class: GObject.ObjectClass
}

abstract class FunctionDocClass {

    // Own properties of Arrow-1.0.Arrow.FunctionDocClass

    static name: string
}

interface FunctionOptionsClass {

    // Own fields of Arrow-1.0.Arrow.FunctionOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class FunctionOptionsClass {

    // Own properties of Arrow-1.0.Arrow.FunctionOptionsClass

    static name: string
}

interface GIOInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.GIOInputStreamClass

    parent_class: SeekableInputStreamClass
}

abstract class GIOInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.GIOInputStreamClass

    static name: string
}

interface GIOOutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.GIOOutputStreamClass

    parent_class: OutputStreamClass
}

abstract class GIOOutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.GIOOutputStreamClass

    static name: string
}

interface HDFSFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.HDFSFileSystemClass

    parent_class: FileSystemClass
}

abstract class HDFSFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.HDFSFileSystemClass

    static name: string
}

interface HashJoinNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.HashJoinNodeOptionsClass

    parent_class: ExecuteNodeOptionsClass
}

abstract class HashJoinNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.HashJoinNodeOptionsClass

    static name: string
}

interface InputStreamClass {

    // Own fields of Arrow-1.0.Arrow.InputStreamClass

    parent_class: Gio.InputStreamClass
}

abstract class InputStreamClass {

    // Own properties of Arrow-1.0.Arrow.InputStreamClass

    static name: string
}

interface Int16ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Int16ArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class Int16ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Int16ArrayBuilderClass

    static name: string
}

interface Int16ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Int16ArrayClass

    parent_class: NumericArrayClass
}

abstract class Int16ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Int16ArrayClass

    static name: string
}

interface Int16DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Int16DataTypeClass

    parent_class: IntegerDataTypeClass
}

abstract class Int16DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Int16DataTypeClass

    static name: string
}

interface Int16ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Int16ScalarClass

    parent_class: ScalarClass
}

abstract class Int16ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Int16ScalarClass

    static name: string
}

interface Int32ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Int32ArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class Int32ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Int32ArrayBuilderClass

    static name: string
}

interface Int32ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Int32ArrayClass

    parent_class: NumericArrayClass
}

abstract class Int32ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Int32ArrayClass

    static name: string
}

interface Int32DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Int32DataTypeClass

    parent_class: IntegerDataTypeClass
}

abstract class Int32DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Int32DataTypeClass

    static name: string
}

interface Int32ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Int32ScalarClass

    parent_class: ScalarClass
}

abstract class Int32ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Int32ScalarClass

    static name: string
}

interface Int64ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Int64ArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class Int64ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Int64ArrayBuilderClass

    static name: string
}

interface Int64ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Int64ArrayClass

    parent_class: NumericArrayClass
}

abstract class Int64ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Int64ArrayClass

    static name: string
}

interface Int64DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Int64DataTypeClass

    parent_class: IntegerDataTypeClass
}

abstract class Int64DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Int64DataTypeClass

    static name: string
}

interface Int64ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Int64ScalarClass

    parent_class: ScalarClass
}

abstract class Int64ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Int64ScalarClass

    static name: string
}

interface Int8ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Int8ArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class Int8ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Int8ArrayBuilderClass

    static name: string
}

interface Int8ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Int8ArrayClass

    parent_class: NumericArrayClass
}

abstract class Int8ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Int8ArrayClass

    static name: string
}

interface Int8DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Int8DataTypeClass

    parent_class: IntegerDataTypeClass
}

abstract class Int8DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Int8DataTypeClass

    static name: string
}

interface Int8ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Int8ScalarClass

    parent_class: ScalarClass
}

abstract class Int8ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Int8ScalarClass

    static name: string
}

interface IntArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.IntArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class IntArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.IntArrayBuilderClass

    static name: string
}

interface IntegerDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.IntegerDataTypeClass

    parent_class: NumericDataTypeClass
}

abstract class IntegerDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.IntegerDataTypeClass

    static name: string
}

interface IntervalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.IntervalDataTypeClass

    parent_class: TimeDataTypeClass
}

abstract class IntervalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.IntervalDataTypeClass

    static name: string
}

interface JSONReadOptionsClass {

    // Own fields of Arrow-1.0.Arrow.JSONReadOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class JSONReadOptionsClass {

    // Own properties of Arrow-1.0.Arrow.JSONReadOptionsClass

    static name: string
}

interface JSONReaderClass {

    // Own fields of Arrow-1.0.Arrow.JSONReaderClass

    parent_class: GObject.ObjectClass
}

abstract class JSONReaderClass {

    // Own properties of Arrow-1.0.Arrow.JSONReaderClass

    static name: string
}

interface LargeBinaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class LargeBinaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArrayBuilderClass

    static name: string
}

interface LargeBinaryArrayClass {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryArrayClass

    parent_class: ArrayClass
}

abstract class LargeBinaryArrayClass {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArrayClass

    static name: string
}

interface LargeBinaryDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryDataTypeClass

    parent_class: DataTypeClass
}

abstract class LargeBinaryDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryDataTypeClass

    static name: string
}

interface LargeBinaryScalarClass {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryScalarClass

    parent_class: BaseBinaryScalarClass
}

abstract class LargeBinaryScalarClass {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryScalarClass

    static name: string
}

interface LargeListArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.LargeListArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class LargeListArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.LargeListArrayBuilderClass

    static name: string
}

interface LargeListArrayClass {

    // Own fields of Arrow-1.0.Arrow.LargeListArrayClass

    parent_class: ArrayClass
}

abstract class LargeListArrayClass {

    // Own properties of Arrow-1.0.Arrow.LargeListArrayClass

    static name: string
}

interface LargeListDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.LargeListDataTypeClass

    parent_class: DataTypeClass
}

abstract class LargeListDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.LargeListDataTypeClass

    static name: string
}

interface LargeListScalarClass {

    // Own fields of Arrow-1.0.Arrow.LargeListScalarClass

    parent_class: BaseListScalarClass
}

abstract class LargeListScalarClass {

    // Own properties of Arrow-1.0.Arrow.LargeListScalarClass

    static name: string
}

interface LargeStringArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.LargeStringArrayBuilderClass

    parent_class: LargeBinaryArrayBuilderClass
}

abstract class LargeStringArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.LargeStringArrayBuilderClass

    static name: string
}

interface LargeStringArrayClass {

    // Own fields of Arrow-1.0.Arrow.LargeStringArrayClass

    parent_class: LargeBinaryArrayClass
}

abstract class LargeStringArrayClass {

    // Own properties of Arrow-1.0.Arrow.LargeStringArrayClass

    static name: string
}

interface LargeStringDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.LargeStringDataTypeClass

    parent_class: LargeBinaryDataTypeClass
}

abstract class LargeStringDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.LargeStringDataTypeClass

    static name: string
}

interface LargeStringScalarClass {

    // Own fields of Arrow-1.0.Arrow.LargeStringScalarClass

    parent_class: BaseBinaryScalarClass
}

abstract class LargeStringScalarClass {

    // Own properties of Arrow-1.0.Arrow.LargeStringScalarClass

    static name: string
}

interface ListArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.ListArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class ListArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.ListArrayBuilderClass

    static name: string
}

interface ListArrayClass {

    // Own fields of Arrow-1.0.Arrow.ListArrayClass

    parent_class: ArrayClass
}

abstract class ListArrayClass {

    // Own properties of Arrow-1.0.Arrow.ListArrayClass

    static name: string
}

interface ListDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.ListDataTypeClass

    parent_class: DataTypeClass
}

abstract class ListDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.ListDataTypeClass

    static name: string
}

interface ListScalarClass {

    // Own fields of Arrow-1.0.Arrow.ListScalarClass

    parent_class: BaseListScalarClass
}

abstract class ListScalarClass {

    // Own properties of Arrow-1.0.Arrow.ListScalarClass

    static name: string
}

interface LiteralExpressionClass {

    // Own fields of Arrow-1.0.Arrow.LiteralExpressionClass

    parent_class: ExpressionClass
}

abstract class LiteralExpressionClass {

    // Own properties of Arrow-1.0.Arrow.LiteralExpressionClass

    static name: string
}

interface LocalFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.LocalFileSystemClass

    parent_class: FileSystemClass
}

abstract class LocalFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystemClass

    static name: string
}

interface LocalFileSystemOptionsClass {

    // Own fields of Arrow-1.0.Arrow.LocalFileSystemOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class LocalFileSystemOptionsClass {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystemOptionsClass

    static name: string
}

interface MapArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.MapArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class MapArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.MapArrayBuilderClass

    static name: string
}

interface MapArrayClass {

    // Own fields of Arrow-1.0.Arrow.MapArrayClass

    parent_class: ListArrayClass
}

abstract class MapArrayClass {

    // Own properties of Arrow-1.0.Arrow.MapArrayClass

    static name: string
}

interface MapDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.MapDataTypeClass

    parent_class: ListDataTypeClass
}

abstract class MapDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.MapDataTypeClass

    static name: string
}

interface MapScalarClass {

    // Own fields of Arrow-1.0.Arrow.MapScalarClass

    parent_class: BaseListScalarClass
}

abstract class MapScalarClass {

    // Own properties of Arrow-1.0.Arrow.MapScalarClass

    static name: string
}

interface MemoryMappedInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.MemoryMappedInputStreamClass

    parent_class: SeekableInputStreamClass
}

abstract class MemoryMappedInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.MemoryMappedInputStreamClass

    static name: string
}

interface MockFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.MockFileSystemClass

    parent_class: FileSystemClass
}

abstract class MockFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.MockFileSystemClass

    static name: string
}

interface MonthDayNanoIntervalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.MonthDayNanoIntervalDataTypeClass

    parent_class: IntervalDataTypeClass
}

abstract class MonthDayNanoIntervalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.MonthDayNanoIntervalDataTypeClass

    static name: string
}

interface MonthIntervalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.MonthIntervalDataTypeClass

    parent_class: IntervalDataTypeClass
}

abstract class MonthIntervalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.MonthIntervalDataTypeClass

    static name: string
}

interface MutableBufferClass {

    // Own fields of Arrow-1.0.Arrow.MutableBufferClass

    parent_class: BufferClass
}

abstract class MutableBufferClass {

    // Own properties of Arrow-1.0.Arrow.MutableBufferClass

    static name: string
}

interface NullArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.NullArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class NullArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.NullArrayBuilderClass

    static name: string
}

interface NullArrayClass {

    // Own fields of Arrow-1.0.Arrow.NullArrayClass

    parent_class: ArrayClass
}

abstract class NullArrayClass {

    // Own properties of Arrow-1.0.Arrow.NullArrayClass

    static name: string
}

interface NullDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.NullDataTypeClass

    parent_class: DataTypeClass
}

abstract class NullDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.NullDataTypeClass

    static name: string
}

interface NullScalarClass {

    // Own fields of Arrow-1.0.Arrow.NullScalarClass

    parent_class: ScalarClass
}

abstract class NullScalarClass {

    // Own properties of Arrow-1.0.Arrow.NullScalarClass

    static name: string
}

interface NumericArrayClass {

    // Own fields of Arrow-1.0.Arrow.NumericArrayClass

    parent_class: PrimitiveArrayClass
}

abstract class NumericArrayClass {

    // Own properties of Arrow-1.0.Arrow.NumericArrayClass

    static name: string
}

interface NumericDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.NumericDataTypeClass

    parent_class: FixedWidthDataTypeClass
}

abstract class NumericDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.NumericDataTypeClass

    static name: string
}

interface OutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.OutputStreamClass

    parent_class: GObject.ObjectClass
}

abstract class OutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.OutputStreamClass

    static name: string
}

interface PrimitiveArrayClass {

    // Own fields of Arrow-1.0.Arrow.PrimitiveArrayClass

    parent_class: ArrayClass
}

abstract class PrimitiveArrayClass {

    // Own properties of Arrow-1.0.Arrow.PrimitiveArrayClass

    static name: string
}

interface ReadOptionsClass {

    // Own fields of Arrow-1.0.Arrow.ReadOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class ReadOptionsClass {

    // Own properties of Arrow-1.0.Arrow.ReadOptionsClass

    static name: string
}

interface ReadableInterface {
}

abstract class ReadableInterface {

    // Own properties of Arrow-1.0.Arrow.ReadableInterface

    static name: string
}

interface RecordBatchBuilderClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchBuilderClass

    parent_class: GObject.ObjectClass
}

abstract class RecordBatchBuilderClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchBuilderClass

    static name: string
}

interface RecordBatchClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchClass

    parent_class: GObject.ObjectClass
}

abstract class RecordBatchClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchClass

    static name: string
}

interface RecordBatchDatumClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchDatumClass

    parent_class: DatumClass
}

abstract class RecordBatchDatumClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchDatumClass

    static name: string
}

interface RecordBatchFileReaderClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchFileReaderClass

    parent_class: GObject.ObjectClass
}

abstract class RecordBatchFileReaderClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileReaderClass

    static name: string
}

interface RecordBatchFileWriterClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchFileWriterClass

    parent_class: RecordBatchStreamWriterClass
}

abstract class RecordBatchFileWriterClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileWriterClass

    static name: string
}

interface RecordBatchIteratorClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchIteratorClass

    parent_class: GObject.ObjectClass
}

abstract class RecordBatchIteratorClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchIteratorClass

    static name: string
}

interface RecordBatchReaderClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchReaderClass

    parent_class: GObject.ObjectClass
}

abstract class RecordBatchReaderClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchReaderClass

    static name: string
}

interface RecordBatchStreamReaderClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchStreamReaderClass

    parent_class: RecordBatchReaderClass
}

abstract class RecordBatchStreamReaderClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamReaderClass

    static name: string
}

interface RecordBatchStreamWriterClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchStreamWriterClass

    parent_class: RecordBatchWriterClass
}

abstract class RecordBatchStreamWriterClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamWriterClass

    static name: string
}

interface RecordBatchWriterClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchWriterClass

    parent_class: GObject.ObjectClass
}

abstract class RecordBatchWriterClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchWriterClass

    static name: string
}

interface ResizableBufferClass {

    // Own fields of Arrow-1.0.Arrow.ResizableBufferClass

    parent_class: MutableBufferClass
}

abstract class ResizableBufferClass {

    // Own properties of Arrow-1.0.Arrow.ResizableBufferClass

    static name: string
}

interface RoundOptionsClass {

    // Own fields of Arrow-1.0.Arrow.RoundOptionsClass

    parent_class: FunctionOptionsClass
}

abstract class RoundOptionsClass {

    // Own properties of Arrow-1.0.Arrow.RoundOptionsClass

    static name: string
}

interface RoundToMultipleOptionsClass {

    // Own fields of Arrow-1.0.Arrow.RoundToMultipleOptionsClass

    parent_class: FunctionOptionsClass
}

abstract class RoundToMultipleOptionsClass {

    // Own properties of Arrow-1.0.Arrow.RoundToMultipleOptionsClass

    static name: string
}

interface S3FileSystemClass {

    // Own fields of Arrow-1.0.Arrow.S3FileSystemClass

    parent_class: FileSystemClass
}

abstract class S3FileSystemClass {

    // Own properties of Arrow-1.0.Arrow.S3FileSystemClass

    static name: string
}

interface S3GlobalOptionsClass {

    // Own fields of Arrow-1.0.Arrow.S3GlobalOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class S3GlobalOptionsClass {

    // Own properties of Arrow-1.0.Arrow.S3GlobalOptionsClass

    static name: string
}

interface ScalarAggregateOptionsClass {

    // Own fields of Arrow-1.0.Arrow.ScalarAggregateOptionsClass

    parent_class: FunctionOptionsClass
}

abstract class ScalarAggregateOptionsClass {

    // Own properties of Arrow-1.0.Arrow.ScalarAggregateOptionsClass

    static name: string
}

interface ScalarClass {

    // Own fields of Arrow-1.0.Arrow.ScalarClass

    parent_class: GObject.ObjectClass
}

abstract class ScalarClass {

    // Own properties of Arrow-1.0.Arrow.ScalarClass

    static name: string
}

interface ScalarDatumClass {

    // Own fields of Arrow-1.0.Arrow.ScalarDatumClass

    parent_class: DatumClass
}

abstract class ScalarDatumClass {

    // Own properties of Arrow-1.0.Arrow.ScalarDatumClass

    static name: string
}

interface SchemaClass {

    // Own fields of Arrow-1.0.Arrow.SchemaClass

    parent_class: GObject.ObjectClass
}

abstract class SchemaClass {

    // Own properties of Arrow-1.0.Arrow.SchemaClass

    static name: string
}

interface SeekableInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.SeekableInputStreamClass

    parent_class: InputStreamClass
}

abstract class SeekableInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.SeekableInputStreamClass

    static name: string
}

interface SetLookupOptionsClass {

    // Own fields of Arrow-1.0.Arrow.SetLookupOptionsClass

    parent_class: FunctionOptionsClass
}

abstract class SetLookupOptionsClass {

    // Own properties of Arrow-1.0.Arrow.SetLookupOptionsClass

    static name: string
}

interface SinkNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.SinkNodeOptionsClass

    parent_class: ExecuteNodeOptionsClass
}

abstract class SinkNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.SinkNodeOptionsClass

    static name: string
}

interface SlowFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.SlowFileSystemClass

    parent_class: FileSystemClass
}

abstract class SlowFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.SlowFileSystemClass

    static name: string
}

interface SortKeyClass {

    // Own fields of Arrow-1.0.Arrow.SortKeyClass

    parent_class: GObject.ObjectClass
}

abstract class SortKeyClass {

    // Own properties of Arrow-1.0.Arrow.SortKeyClass

    static name: string
}

interface SortOptionsClass {

    // Own fields of Arrow-1.0.Arrow.SortOptionsClass

    parent_class: FunctionOptionsClass
}

abstract class SortOptionsClass {

    // Own properties of Arrow-1.0.Arrow.SortOptionsClass

    static name: string
}

interface SourceNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.SourceNodeOptionsClass

    parent_class: ExecuteNodeOptionsClass
}

abstract class SourceNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.SourceNodeOptionsClass

    static name: string
}

interface SparseUnionArrayClass {

    // Own fields of Arrow-1.0.Arrow.SparseUnionArrayClass

    parent_class: UnionArrayClass
}

abstract class SparseUnionArrayClass {

    // Own properties of Arrow-1.0.Arrow.SparseUnionArrayClass

    static name: string
}

interface SparseUnionDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.SparseUnionDataTypeClass

    parent_class: UnionDataTypeClass
}

abstract class SparseUnionDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.SparseUnionDataTypeClass

    static name: string
}

interface SparseUnionScalarClass {

    // Own fields of Arrow-1.0.Arrow.SparseUnionScalarClass

    parent_class: UnionScalarClass
}

abstract class SparseUnionScalarClass {

    // Own properties of Arrow-1.0.Arrow.SparseUnionScalarClass

    static name: string
}

interface StringArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.StringArrayBuilderClass

    parent_class: BinaryArrayBuilderClass
}

abstract class StringArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.StringArrayBuilderClass

    static name: string
}

interface StringArrayClass {

    // Own fields of Arrow-1.0.Arrow.StringArrayClass

    parent_class: BinaryArrayClass
}

abstract class StringArrayClass {

    // Own properties of Arrow-1.0.Arrow.StringArrayClass

    static name: string
}

interface StringDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.StringDataTypeClass

    parent_class: BinaryDataTypeClass
}

abstract class StringDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.StringDataTypeClass

    static name: string
}

interface StringDictionaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.StringDictionaryArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class StringDictionaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.StringDictionaryArrayBuilderClass

    static name: string
}

interface StringScalarClass {

    // Own fields of Arrow-1.0.Arrow.StringScalarClass

    parent_class: BaseBinaryScalarClass
}

abstract class StringScalarClass {

    // Own properties of Arrow-1.0.Arrow.StringScalarClass

    static name: string
}

interface StructArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.StructArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class StructArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.StructArrayBuilderClass

    static name: string
}

interface StructArrayClass {

    // Own fields of Arrow-1.0.Arrow.StructArrayClass

    parent_class: ArrayClass
}

abstract class StructArrayClass {

    // Own properties of Arrow-1.0.Arrow.StructArrayClass

    static name: string
}

interface StructDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.StructDataTypeClass

    parent_class: DataTypeClass
}

abstract class StructDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.StructDataTypeClass

    static name: string
}

interface StructScalarClass {

    // Own fields of Arrow-1.0.Arrow.StructScalarClass

    parent_class: ScalarClass
}

abstract class StructScalarClass {

    // Own properties of Arrow-1.0.Arrow.StructScalarClass

    static name: string
}

interface SubTreeFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.SubTreeFileSystemClass

    parent_class: FileSystemClass
}

abstract class SubTreeFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.SubTreeFileSystemClass

    static name: string
}

interface TableBatchReaderClass {

    // Own fields of Arrow-1.0.Arrow.TableBatchReaderClass

    parent_class: RecordBatchReaderClass
}

abstract class TableBatchReaderClass {

    // Own properties of Arrow-1.0.Arrow.TableBatchReaderClass

    static name: string
}

interface TableClass {

    // Own fields of Arrow-1.0.Arrow.TableClass

    parent_class: GObject.ObjectClass
}

abstract class TableClass {

    // Own properties of Arrow-1.0.Arrow.TableClass

    static name: string
}

interface TableConcatenateOptionsClass {

    // Own fields of Arrow-1.0.Arrow.TableConcatenateOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class TableConcatenateOptionsClass {

    // Own properties of Arrow-1.0.Arrow.TableConcatenateOptionsClass

    static name: string
}

interface TableDatumClass {

    // Own fields of Arrow-1.0.Arrow.TableDatumClass

    parent_class: DatumClass
}

abstract class TableDatumClass {

    // Own properties of Arrow-1.0.Arrow.TableDatumClass

    static name: string
}

interface TakeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.TakeOptionsClass

    parent_class: FunctionOptionsClass
}

abstract class TakeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.TakeOptionsClass

    static name: string
}

interface TemporalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.TemporalDataTypeClass

    parent_class: FixedWidthDataTypeClass
}

abstract class TemporalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.TemporalDataTypeClass

    static name: string
}

interface TensorClass {

    // Own fields of Arrow-1.0.Arrow.TensorClass

    parent_class: GObject.ObjectClass
}

abstract class TensorClass {

    // Own properties of Arrow-1.0.Arrow.TensorClass

    static name: string
}

interface Time32ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Time32ArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class Time32ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Time32ArrayBuilderClass

    static name: string
}

interface Time32ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Time32ArrayClass

    parent_class: NumericArrayClass
}

abstract class Time32ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Time32ArrayClass

    static name: string
}

interface Time32DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Time32DataTypeClass

    parent_class: TimeDataTypeClass
}

abstract class Time32DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Time32DataTypeClass

    static name: string
}

interface Time32ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Time32ScalarClass

    parent_class: ScalarClass
}

abstract class Time32ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Time32ScalarClass

    static name: string
}

interface Time64ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Time64ArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class Time64ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Time64ArrayBuilderClass

    static name: string
}

interface Time64ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Time64ArrayClass

    parent_class: NumericArrayClass
}

abstract class Time64ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Time64ArrayClass

    static name: string
}

interface Time64DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Time64DataTypeClass

    parent_class: TimeDataTypeClass
}

abstract class Time64DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Time64DataTypeClass

    static name: string
}

interface Time64ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Time64ScalarClass

    parent_class: ScalarClass
}

abstract class Time64ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Time64ScalarClass

    static name: string
}

interface TimeDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.TimeDataTypeClass

    parent_class: TemporalDataTypeClass
}

abstract class TimeDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.TimeDataTypeClass

    static name: string
}

interface TimestampArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.TimestampArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class TimestampArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.TimestampArrayBuilderClass

    static name: string
}

interface TimestampArrayClass {

    // Own fields of Arrow-1.0.Arrow.TimestampArrayClass

    parent_class: NumericArrayClass
}

abstract class TimestampArrayClass {

    // Own properties of Arrow-1.0.Arrow.TimestampArrayClass

    static name: string
}

interface TimestampDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.TimestampDataTypeClass

    parent_class: TemporalDataTypeClass
}

abstract class TimestampDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.TimestampDataTypeClass

    static name: string
}

interface TimestampScalarClass {

    // Own fields of Arrow-1.0.Arrow.TimestampScalarClass

    parent_class: ScalarClass
}

abstract class TimestampScalarClass {

    // Own properties of Arrow-1.0.Arrow.TimestampScalarClass

    static name: string
}

interface UInt16ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UInt16ArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class UInt16ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UInt16ArrayBuilderClass

    static name: string
}

interface UInt16ArrayClass {

    // Own fields of Arrow-1.0.Arrow.UInt16ArrayClass

    parent_class: NumericArrayClass
}

abstract class UInt16ArrayClass {

    // Own properties of Arrow-1.0.Arrow.UInt16ArrayClass

    static name: string
}

interface UInt16DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UInt16DataTypeClass

    parent_class: IntegerDataTypeClass
}

abstract class UInt16DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UInt16DataTypeClass

    static name: string
}

interface UInt16ScalarClass {

    // Own fields of Arrow-1.0.Arrow.UInt16ScalarClass

    parent_class: ScalarClass
}

abstract class UInt16ScalarClass {

    // Own properties of Arrow-1.0.Arrow.UInt16ScalarClass

    static name: string
}

interface UInt32ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UInt32ArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class UInt32ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UInt32ArrayBuilderClass

    static name: string
}

interface UInt32ArrayClass {

    // Own fields of Arrow-1.0.Arrow.UInt32ArrayClass

    parent_class: NumericArrayClass
}

abstract class UInt32ArrayClass {

    // Own properties of Arrow-1.0.Arrow.UInt32ArrayClass

    static name: string
}

interface UInt32DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UInt32DataTypeClass

    parent_class: IntegerDataTypeClass
}

abstract class UInt32DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UInt32DataTypeClass

    static name: string
}

interface UInt32ScalarClass {

    // Own fields of Arrow-1.0.Arrow.UInt32ScalarClass

    parent_class: ScalarClass
}

abstract class UInt32ScalarClass {

    // Own properties of Arrow-1.0.Arrow.UInt32ScalarClass

    static name: string
}

interface UInt64ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UInt64ArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class UInt64ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UInt64ArrayBuilderClass

    static name: string
}

interface UInt64ArrayClass {

    // Own fields of Arrow-1.0.Arrow.UInt64ArrayClass

    parent_class: NumericArrayClass
}

abstract class UInt64ArrayClass {

    // Own properties of Arrow-1.0.Arrow.UInt64ArrayClass

    static name: string
}

interface UInt64DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UInt64DataTypeClass

    parent_class: IntegerDataTypeClass
}

abstract class UInt64DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UInt64DataTypeClass

    static name: string
}

interface UInt64ScalarClass {

    // Own fields of Arrow-1.0.Arrow.UInt64ScalarClass

    parent_class: ScalarClass
}

abstract class UInt64ScalarClass {

    // Own properties of Arrow-1.0.Arrow.UInt64ScalarClass

    static name: string
}

interface UInt8ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UInt8ArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class UInt8ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UInt8ArrayBuilderClass

    static name: string
}

interface UInt8ArrayClass {

    // Own fields of Arrow-1.0.Arrow.UInt8ArrayClass

    parent_class: NumericArrayClass
}

abstract class UInt8ArrayClass {

    // Own properties of Arrow-1.0.Arrow.UInt8ArrayClass

    static name: string
}

interface UInt8DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UInt8DataTypeClass

    parent_class: IntegerDataTypeClass
}

abstract class UInt8DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UInt8DataTypeClass

    static name: string
}

interface UInt8ScalarClass {

    // Own fields of Arrow-1.0.Arrow.UInt8ScalarClass

    parent_class: ScalarClass
}

abstract class UInt8ScalarClass {

    // Own properties of Arrow-1.0.Arrow.UInt8ScalarClass

    static name: string
}

interface UIntArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UIntArrayBuilderClass

    parent_class: ArrayBuilderClass
}

abstract class UIntArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UIntArrayBuilderClass

    static name: string
}

interface UTF8NormalizeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.UTF8NormalizeOptionsClass

    parent_class: FunctionOptionsClass
}

abstract class UTF8NormalizeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.UTF8NormalizeOptionsClass

    static name: string
}

interface UnionArrayClass {

    // Own fields of Arrow-1.0.Arrow.UnionArrayClass

    parent_class: ArrayClass
}

abstract class UnionArrayClass {

    // Own properties of Arrow-1.0.Arrow.UnionArrayClass

    static name: string
}

interface UnionDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UnionDataTypeClass

    parent_class: DataTypeClass
}

abstract class UnionDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UnionDataTypeClass

    static name: string
}

interface UnionScalarClass {

    // Own fields of Arrow-1.0.Arrow.UnionScalarClass

    parent_class: ScalarClass
}

abstract class UnionScalarClass {

    // Own properties of Arrow-1.0.Arrow.UnionScalarClass

    static name: string
}

interface VarianceOptionsClass {

    // Own fields of Arrow-1.0.Arrow.VarianceOptionsClass

    parent_class: FunctionOptionsClass
}

abstract class VarianceOptionsClass {

    // Own properties of Arrow-1.0.Arrow.VarianceOptionsClass

    static name: string
}

interface WritableFileInterface {
}

abstract class WritableFileInterface {

    // Own properties of Arrow-1.0.Arrow.WritableFileInterface

    static name: string
}

interface WritableInterface {
}

abstract class WritableInterface {

    // Own properties of Arrow-1.0.Arrow.WritableInterface

    static name: string
}

interface WriteOptionsClass {

    // Own fields of Arrow-1.0.Arrow.WriteOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class WriteOptionsClass {

    // Own properties of Arrow-1.0.Arrow.WriteOptionsClass

    static name: string
}

    type TimePoint = number
/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Arrow;
// END