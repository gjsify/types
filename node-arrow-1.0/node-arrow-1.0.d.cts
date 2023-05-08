
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Arrow-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * They are corresponding to `arrow::Compression::type` values.
 */
export enum CompressionType {
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
export enum CountMode {
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
export enum Error {
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
export enum FileMode {
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
export enum FileType {
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
export enum FilterNullSelectionBehavior {
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
export enum IntervalType {
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
export enum JSONReadUnexpectedFieldBehavior {
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
export enum JoinType {
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
export enum MetadataVersion {
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
export enum RoundMode {
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
export enum S3LogLevel {
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
export enum SortOrder {
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
export enum TimeUnit {
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
export enum Type {
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
export enum UTF8NormalizeForm {
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
export const VERSION_MAJOR: number
/**
 * The micro version.
 */
export const VERSION_MICRO: number
/**
 * The minor version.
 */
export const VERSION_MINOR: number
/**
 * The version tag. Normally, it's an empty string. It's "SNAPSHOT"
 * for snapshot version.
 */
export const VERSION_TAG: string | null
export function errorQuark(): GLib.Quark
/**
 * Finalize the S3 APIs.
 * @returns %TRUE on success, %FALSE on error.
 */
export function s3Finalize(): boolean
/**
 * Normally, you don't need to call this function because the S3 APIs
 * are initialized with the default options automatically. If you want
 * to call this function, you must call this function before you use
 * any #GArrowS3FileSystem related APIs.
 * @param options Options to initialize the S3 APIs.
 * @returns %TRUE on success, %FALSE on error.
 */
export function s3Initialize(options: S3GlobalOptions | null): boolean
export function s3IsEnabled(): boolean
export module File {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface File {

    // Own properties of Arrow-1.0.Arrow.File

    __gtype__: number

    // Owm methods of Arrow-1.0.Arrow.File

    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number

    // Class property signals of Arrow-1.0.Arrow.File

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class File extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.File

    static name: string

    // Constructors of Arrow-1.0.Arrow.File

    constructor(config?: File.ConstructorProperties) 
    _init(config?: File.ConstructorProperties): void
}

export module Readable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Readable {

    // Own properties of Arrow-1.0.Arrow.Readable

    __gtype__: number

    // Owm methods of Arrow-1.0.Arrow.Readable

    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null

    // Class property signals of Arrow-1.0.Arrow.Readable

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Readable extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Readable

    static name: string

    // Constructors of Arrow-1.0.Arrow.Readable

    constructor(config?: Readable.ConstructorProperties) 
    _init(config?: Readable.ConstructorProperties): void
}

export module Writable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Writable {

    // Own properties of Arrow-1.0.Arrow.Writable

    __gtype__: number

    // Owm methods of Arrow-1.0.Arrow.Writable

    /**
     * It ensures writing all data on memory to storage.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    flush(): boolean
    write(data: Uint8Array): boolean

    // Class property signals of Arrow-1.0.Arrow.Writable

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Writable extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Writable

    static name: string

    // Constructors of Arrow-1.0.Arrow.Writable

    constructor(config?: Writable.ConstructorProperties) 
    _init(config?: Writable.ConstructorProperties): void
}

export module WritableFile {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WritableFile {

    // Own properties of Arrow-1.0.Arrow.WritableFile

    __gtype__: number

    // Owm methods of Arrow-1.0.Arrow.WritableFile

    writeAt(position: number, data: Uint8Array): boolean

    // Class property signals of Arrow-1.0.Arrow.WritableFile

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class WritableFile extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.WritableFile

    static name: string

    // Constructors of Arrow-1.0.Arrow.WritableFile

    constructor(config?: WritableFile.ConstructorProperties) 
    _init(config?: WritableFile.ConstructorProperties): void
}

export module AggregateNodeOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends ExecuteNodeOptions.ConstructorProperties {
    }

}

export interface AggregateNodeOptions {

    // Own properties of Arrow-1.0.Arrow.AggregateNodeOptions

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.AggregateNodeOptions

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.AggregateNodeOptions

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::options", callback: (...args: any[]) => void): number
    on(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class AggregateNodeOptions extends ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.AggregateNodeOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.AggregateNodeOptions

    constructor(config?: AggregateNodeOptions.ConstructorProperties) 
    constructor(aggregations: Aggregation[], keys: string[] | null) 
    static new(aggregations: Aggregation[], keys: string[] | null): AggregateNodeOptions
    _init(config?: AggregateNodeOptions.ConstructorProperties): void
}

export module Aggregation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

export interface Aggregation {

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
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Aggregation

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.Aggregation

    connect(sigName: "notify::function", callback: (...args: any[]) => void): number
    on(sigName: "notify::function", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::function", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::function", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::function", ...args: any[]): void
    connect(sigName: "notify::input", callback: (...args: any[]) => void): number
    on(sigName: "notify::input", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input", ...args: any[]): void
    connect(sigName: "notify::options", callback: (...args: any[]) => void): number
    on(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::output", callback: (...args: any[]) => void): number
    on(sigName: "notify::output", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Aggregation extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Aggregation

    static name: string

    // Constructors of Arrow-1.0.Arrow.Aggregation

    constructor(config?: Aggregation.ConstructorProperties) 
    constructor(function_: string | null, options: FunctionOptions | null, input: string | null, output: string | null) 
    static new(function_: string | null, options: FunctionOptions | null, input: string | null, output: string | null): Aggregation
    _init(config?: Aggregation.ConstructorProperties): void
}

export module Array {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Array

        array?: any | null
        buffer1?: Buffer | null
        buffer2?: Buffer | null
        nullBitmap?: Buffer | null
        parent?: Array | null
        valueDataType?: DataType | null
    }

}

export interface Array {

    // Own properties of Arrow-1.0.Arrow.Array

    readonly array: any
    readonly buffer1: Buffer
    readonly buffer2: Buffer
    readonly nullBitmap: Buffer
    readonly parent: Array
    readonly valueDataType: DataType
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Array

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Array

    cast(targetDataType: DataType, options: CastOptions | null): Array | null
    concatenate(otherArrays: Array[]): Array | null
    count(options: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalOptions(otherArray: Array, options: EqualOptions | null): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number, options: EqualOptions | null): boolean
    export(): [ /* returnType */ boolean, /* cAbiArray */ any | null, /* cAbiSchema */ any | null ]
    filter(filter: BooleanArray, options: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null

    // Class property signals of Arrow-1.0.Arrow.Array

    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Array extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.Array

    constructor(config?: Array.ConstructorProperties) 
    _init(config?: Array.ConstructorProperties): void
    static import(cAbiArray: any, dataType: DataType): Array | null
}

export module ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ArrayBuilder

        arrayBuilder?: any | null
    }

}

export interface ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.ArrayBuilder

    readonly arrayBuilder: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ArrayBuilder

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ArrayBuilder

    appendEmptyValue(): boolean
    /**
     * Append multiple empty values at once. It's more efficient than multiple
     * garrow_array_builder_append_empty_value() calls.
     * @param n The number of null values to be appended.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    /**
     * Append multiple nulls at once. It's more efficient than multiple
     * garrow_array_builder_append_null() calls.
     * @param n The number of null values to be appended.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean

    // Class property signals of Arrow-1.0.Arrow.ArrayBuilder

    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ArrayBuilder extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.ArrayBuilder

    constructor(config?: ArrayBuilder.ConstructorProperties) 
    _init(config?: ArrayBuilder.ConstructorProperties): void
}

export module ArrayDatum {

    // Constructor properties interface

    export interface ConstructorProperties extends Datum.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ArrayDatum

        value?: Array | null
    }

}

export interface ArrayDatum {

    // Own properties of Arrow-1.0.Arrow.ArrayDatum

    readonly value: Array
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ArrayDatum

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.ArrayDatum

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::datum", callback: (...args: any[]) => void): number
    on(sigName: "notify::datum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::datum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::datum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::datum", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ArrayDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.ArrayDatum

    static name: string

    // Constructors of Arrow-1.0.Arrow.ArrayDatum

    constructor(config?: ArrayDatum.ConstructorProperties) 
    constructor(value: Array) 
    static new(value: Array): ArrayDatum
    _init(config?: ArrayDatum.ConstructorProperties): void
}

export module ArraySortOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ArraySortOptions

        /**
         * How to order values.
         */
        order?: SortOrder | null
    }

}

export interface ArraySortOptions {

    // Own properties of Arrow-1.0.Arrow.ArraySortOptions

    /**
     * How to order values.
     */
    order: SortOrder
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ArraySortOptions

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.ArraySortOptions

    equal(otherOptions: ArraySortOptions): boolean

    // Overloads of equal

    equal(otherOptions: FunctionOptions | null): boolean

    // Class property signals of Arrow-1.0.Arrow.ArraySortOptions

    connect(sigName: "notify::order", callback: (...args: any[]) => void): number
    on(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::order", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ArraySortOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.ArraySortOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.ArraySortOptions

    constructor(config?: ArraySortOptions.ConstructorProperties) 
    constructor(order: SortOrder) 
    static new(order: SortOrder): ArraySortOptions
    _init(config?: ArraySortOptions.ConstructorProperties): void
}

export module BaseBinaryScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.BaseBinaryScalar

        /**
         * The value of the scalar.
         */
        value?: Buffer | null
    }

}

export interface BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.BaseBinaryScalar

    /**
     * The value of the scalar.
     */
    readonly value: Buffer
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.BaseBinaryScalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.BaseBinaryScalar

    getValue(): Buffer

    // Class property signals of Arrow-1.0.Arrow.BaseBinaryScalar

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BaseBinaryScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.BaseBinaryScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.BaseBinaryScalar

    constructor(config?: BaseBinaryScalar.ConstructorProperties) 
    _init(config?: BaseBinaryScalar.ConstructorProperties): void
}

export module BaseListScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.BaseListScalar

        /**
         * The value of the scalar.
         */
        value?: Array | null
    }

}

export interface BaseListScalar {

    // Own properties of Arrow-1.0.Arrow.BaseListScalar

    /**
     * The value of the scalar.
     */
    readonly value: Array
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.BaseListScalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.BaseListScalar

    getValue(): Array

    // Class property signals of Arrow-1.0.Arrow.BaseListScalar

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BaseListScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.BaseListScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.BaseListScalar

    constructor(config?: BaseListScalar.ConstructorProperties) 
    _init(config?: BaseListScalar.ConstructorProperties): void
}

export module BinaryArray {

    // Constructor properties interface

    export interface ConstructorProperties extends Array.ConstructorProperties {
    }

}

export interface BinaryArray {

    // Own properties of Arrow-1.0.Arrow.BinaryArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.BinaryArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.BinaryArray

    getBuffer(): Buffer
    getDataBuffer(): Buffer
    getOffsetsBuffer(): Buffer
    getValue(i: number): any

    // Class property signals of Arrow-1.0.Arrow.BinaryArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BinaryArray extends Array {

    // Own properties of Arrow-1.0.Arrow.BinaryArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.BinaryArray

    constructor(config?: BinaryArray.ConstructorProperties) 
    constructor(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): BinaryArray
    _init(config?: BinaryArray.ConstructorProperties): void
}

export module BinaryArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface BinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.BinaryArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.BinaryArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.BinaryArrayBuilder

    append(value: Uint8Array): boolean
    appendValue(value: Uint8Array): boolean
    appendValueBytes(value: any): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: any[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.BinaryArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BinaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.BinaryArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.BinaryArrayBuilder

    constructor(config?: BinaryArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): BinaryArrayBuilder
    _init(config?: BinaryArrayBuilder.ConstructorProperties): void
}

export module BinaryDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

export interface BinaryDataType {

    // Own properties of Arrow-1.0.Arrow.BinaryDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.BinaryDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.BinaryDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BinaryDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.BinaryDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.BinaryDataType

    constructor(config?: BinaryDataType.ConstructorProperties) 
    constructor() 
    static new(): BinaryDataType
    _init(config?: BinaryDataType.ConstructorProperties): void
}

export module BinaryDictionaryArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface BinaryDictionaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    appendArray(array: BinaryArray): boolean
    /**
     * Append dictionary indices directly without modifying the internal memo.
     * @param values The array of indices.
     * @param isValids The array of   %TRUE or %FALSE that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendIndices(values: number[], isValids: boolean[] | null): boolean
    appendValue(value: Uint8Array): boolean
    appendValueBytes(value: any): boolean
    finishDelta(): [ /* returnType */ boolean, /* outIndices */ Array, /* outDelta */ Array ]
    getDictionaryLength(): number
    insertMemoValues(values: BinaryArray): boolean
    /**
     * Reset and also clear accumulated dictionary values in memo table.
     */
    resetFull(): void

    // Class property signals of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BinaryDictionaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    constructor(config?: BinaryDictionaryArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): BinaryDictionaryArrayBuilder
    _init(config?: BinaryDictionaryArrayBuilder.ConstructorProperties): void
}

export module BinaryScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseBinaryScalar.ConstructorProperties {
    }

}

export interface BinaryScalar {

    // Own properties of Arrow-1.0.Arrow.BinaryScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.BinaryScalar

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.BinaryScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BinaryScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.BinaryScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.BinaryScalar

    constructor(config?: BinaryScalar.ConstructorProperties) 
    constructor(value: Buffer) 
    static new(value: Buffer): BinaryScalar
    _init(config?: BinaryScalar.ConstructorProperties): void
}

export module BooleanArray {

    // Constructor properties interface

    export interface ConstructorProperties extends PrimitiveArray.ConstructorProperties {
    }

}

export interface BooleanArray {

    // Own properties of Arrow-1.0.Arrow.BooleanArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.BooleanArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.BooleanArray

    and(right: BooleanArray): BooleanArray
    getValue(i: number): boolean
    getValues(): boolean[]
    invert(): BooleanArray
    or(right: BooleanArray): BooleanArray
    xor(right: BooleanArray): BooleanArray

    // Class property signals of Arrow-1.0.Arrow.BooleanArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BooleanArray extends PrimitiveArray {

    // Own properties of Arrow-1.0.Arrow.BooleanArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.BooleanArray

    constructor(config?: BooleanArray.ConstructorProperties) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): BooleanArray
    _init(config?: BooleanArray.ConstructorProperties): void
}

export module BooleanArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface BooleanArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.BooleanArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.BooleanArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.BooleanArrayBuilder

    append(value: boolean): boolean
    appendValue(value: boolean): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of boolean.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: boolean[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.BooleanArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BooleanArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.BooleanArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.BooleanArrayBuilder

    constructor(config?: BooleanArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): BooleanArrayBuilder
    _init(config?: BooleanArrayBuilder.ConstructorProperties): void
}

export module BooleanDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends FixedWidthDataType.ConstructorProperties {
    }

}

export interface BooleanDataType {

    // Own properties of Arrow-1.0.Arrow.BooleanDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.BooleanDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.BooleanDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BooleanDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.BooleanDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.BooleanDataType

    constructor(config?: BooleanDataType.ConstructorProperties) 
    constructor() 
    static new(): BooleanDataType
    _init(config?: BooleanDataType.ConstructorProperties): void
}

export module BooleanScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface BooleanScalar {

    // Own properties of Arrow-1.0.Arrow.BooleanScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.BooleanScalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.BooleanScalar

    getValue(): boolean

    // Class property signals of Arrow-1.0.Arrow.BooleanScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BooleanScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.BooleanScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.BooleanScalar

    constructor(config?: BooleanScalar.ConstructorProperties) 
    constructor(value: boolean) 
    static new(value: boolean): BooleanScalar
    _init(config?: BooleanScalar.ConstructorProperties): void
}

export module Buffer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Buffer

        buffer?: any | null
        data?: any | null
        parent?: Buffer | null
    }

}

export interface Buffer {

    // Own properties of Arrow-1.0.Arrow.Buffer

    readonly buffer: any
    readonly data: any
    readonly parent: Buffer
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Buffer

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Buffer

    copy(start: number, size: number): Buffer | null
    equal(otherBuffer: Buffer): boolean
    equalNBytes(otherBuffer: Buffer, nBytes: number): boolean
    getCapacity(): number
    getData(): any

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string | null): any | null
    getMutableData(): any | null
    getParent(): Buffer | null
    getSize(): number
    isMutable(): boolean
    slice(offset: number, size: number): Buffer

    // Class property signals of Arrow-1.0.Arrow.Buffer

    connect(sigName: "notify::buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Buffer extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Buffer

    static name: string

    // Constructors of Arrow-1.0.Arrow.Buffer

    constructor(config?: Buffer.ConstructorProperties) 
    constructor(data: Uint8Array) 
    static new(data: Uint8Array): Buffer
    static newBytes(data: any): Buffer
    _init(config?: Buffer.ConstructorProperties): void
}

export module BufferInputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, SeekableInputStream.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.BufferInputStream

        buffer?: Buffer | null
    }

}

export interface BufferInputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.BufferInputStream

    readonly buffer: Buffer
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.BufferInputStream

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.BufferInputStream

    getBuffer(): Buffer

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
    read(nBytes: number): Buffer | null
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
    readBytes(nBytes: number): any | null
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
    readBytes(count: number, cancellable: Gio.Cancellable | null): any

    // Class property signals of Arrow-1.0.Arrow.BufferInputStream

    connect(sigName: "notify::buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BufferInputStream extends SeekableInputStream {

    // Own properties of Arrow-1.0.Arrow.BufferInputStream

    static name: string

    // Constructors of Arrow-1.0.Arrow.BufferInputStream

    constructor(config?: BufferInputStream.ConstructorProperties) 
    constructor(buffer: Buffer) 
    static new(buffer: Buffer): BufferInputStream
    _init(config?: BufferInputStream.ConstructorProperties): void
}

export module BufferOutputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends File.ConstructorProperties, Writable.ConstructorProperties, OutputStream.ConstructorProperties {
    }

}

export interface BufferOutputStream extends File, Writable {

    // Own properties of Arrow-1.0.Arrow.BufferOutputStream

    __gtype__: number

    // Class property signals of Arrow-1.0.Arrow.BufferOutputStream

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::output-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * It wraps `arrow::io::BufferOutputStream`.
 * @class 
 */
export class BufferOutputStream extends OutputStream {

    // Own properties of Arrow-1.0.Arrow.BufferOutputStream

    static name: string

    // Constructors of Arrow-1.0.Arrow.BufferOutputStream

    constructor(config?: BufferOutputStream.ConstructorProperties) 
    constructor(buffer: ResizableBuffer) 
    static new(buffer: ResizableBuffer): BufferOutputStream
    _init(config?: BufferOutputStream.ConstructorProperties): void
}

export module CSVReadOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.CSVReadOptions

        /**
         * Whether values are allowed to contain CR (0x0d) and LF (0x0a) characters.
         */
        allowNewlinesInValues?: boolean | null
        /**
         * Whether string / binary columns can have null values.
         * If %TRUE, then strings in "null_values" are considered null for string columns.
         * If %FALSE, then all strings are valid string values.
         */
        allowNullStrings?: boolean | null
        /**
         * Block size we request from the IO layer; also determines the size
         * of chunks when #GArrowCSVReadOptions:use-threads is %TRUE.
         */
        blockSize?: number | null
        /**
         * Whether to check UTF8 validity of string columns.
         */
        checkUtf8?: boolean | null
        /**
         * Field delimiter character.
         */
        delimiter?: number | null
        /**
         * Escaping character. This is used only when
         * #GArrowCSVReadOptions:is-escaped is %TRUE.
         */
        escapeCharacter?: number | null
        generateColumnNames?: boolean | null
        /**
         * Whether empty lines are ignored. If %FALSE, an empty line
         * represents a simple empty value (assuming a one-column CSV file).
         */
        ignoreEmptyLines?: boolean | null
        /**
         * Whether a quote inside a value is double quoted.
         */
        isDoubleQuoted?: boolean | null
        /**
         * Whether escaping is used.
         */
        isEscaped?: boolean | null
        /**
         * Whether quoting is used.
         */
        isQuoted?: boolean | null
        /**
         * The number of header rows to skip (not including
         * the row of column names, if any)
         */
        nSkipRows?: number | null
        /**
         * Quoting character. This is used only when
         * #GArrowCSVReadOptions:is-quoted is %TRUE.
         */
        quoteCharacter?: number | null
        /**
         * Whether to use the global CPU thread pool.
         */
        useThreads?: boolean | null
    }

}

export interface CSVReadOptions {

    // Own properties of Arrow-1.0.Arrow.CSVReadOptions

    /**
     * Whether values are allowed to contain CR (0x0d) and LF (0x0a) characters.
     */
    allowNewlinesInValues: boolean
    /**
     * Whether string / binary columns can have null values.
     * If %TRUE, then strings in "null_values" are considered null for string columns.
     * If %FALSE, then all strings are valid string values.
     */
    allowNullStrings: boolean
    /**
     * Block size we request from the IO layer; also determines the size
     * of chunks when #GArrowCSVReadOptions:use-threads is %TRUE.
     */
    blockSize: number
    /**
     * Whether to check UTF8 validity of string columns.
     */
    checkUtf8: boolean
    /**
     * Field delimiter character.
     */
    delimiter: number
    /**
     * Escaping character. This is used only when
     * #GArrowCSVReadOptions:is-escaped is %TRUE.
     */
    escapeCharacter: number
    generateColumnNames: boolean
    /**
     * Whether empty lines are ignored. If %FALSE, an empty line
     * represents a simple empty value (assuming a one-column CSV file).
     */
    ignoreEmptyLines: boolean
    /**
     * Whether a quote inside a value is double quoted.
     */
    isDoubleQuoted: boolean
    /**
     * Whether escaping is used.
     */
    isEscaped: boolean
    /**
     * Whether quoting is used.
     */
    isQuoted: boolean
    /**
     * The number of header rows to skip (not including
     * the row of column names, if any)
     */
    nSkipRows: number
    /**
     * Quoting character. This is used only when
     * #GArrowCSVReadOptions:is-quoted is %TRUE.
     */
    quoteCharacter: number
    /**
     * Whether to use the global CPU thread pool.
     */
    useThreads: boolean
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.CSVReadOptions

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.CSVReadOptions

    addColumnName(columnName: string | null): void
    /**
     * Add value type of a column.
     * @param name The name of the target column.
     * @param dataType The #GArrowDataType for the column.
     */
    addColumnType(name: string | null, dataType: DataType): void
    addFalseValue(falseValue: string | null): void
    addNullValue(nullValue: string | null): void
    /**
     * Add value types for columns in the schema.
     * @param schema The #GArrowSchema that specifies columns and their types.
     */
    addSchema(schema: Schema): void
    addTrueValue(trueValue: string | null): void
    getColumnNames(): string[] | null
    getColumnTypes(): GLib.HashTable
    getFalseValues(): string[] | null
    getNullValues(): string[] | null
    getTrueValues(): string[] | null
    setColumnNames(columnNames: string[]): void
    setFalseValues(falseValues: string[]): void
    setNullValues(nullValues: string[]): void
    setTrueValues(trueValues: string[]): void

    // Class property signals of Arrow-1.0.Arrow.CSVReadOptions

    connect(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-newlines-in-values", ...args: any[]): void
    connect(sigName: "notify::allow-null-strings", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-null-strings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-null-strings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-null-strings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-null-strings", ...args: any[]): void
    connect(sigName: "notify::block-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::block-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::block-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::block-size", ...args: any[]): void
    connect(sigName: "notify::check-utf8", callback: (...args: any[]) => void): number
    on(sigName: "notify::check-utf8", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::check-utf8", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::check-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::check-utf8", ...args: any[]): void
    connect(sigName: "notify::delimiter", callback: (...args: any[]) => void): number
    on(sigName: "notify::delimiter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::delimiter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::delimiter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::delimiter", ...args: any[]): void
    connect(sigName: "notify::escape-character", callback: (...args: any[]) => void): number
    on(sigName: "notify::escape-character", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::escape-character", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::escape-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::escape-character", ...args: any[]): void
    connect(sigName: "notify::generate-column-names", callback: (...args: any[]) => void): number
    on(sigName: "notify::generate-column-names", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::generate-column-names", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::generate-column-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::generate-column-names", ...args: any[]): void
    connect(sigName: "notify::ignore-empty-lines", callback: (...args: any[]) => void): number
    on(sigName: "notify::ignore-empty-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ignore-empty-lines", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ignore-empty-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ignore-empty-lines", ...args: any[]): void
    connect(sigName: "notify::is-double-quoted", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-double-quoted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-double-quoted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-double-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-double-quoted", ...args: any[]): void
    connect(sigName: "notify::is-escaped", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-escaped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-escaped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-escaped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-escaped", ...args: any[]): void
    connect(sigName: "notify::is-quoted", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-quoted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-quoted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-quoted", ...args: any[]): void
    connect(sigName: "notify::n-skip-rows", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-skip-rows", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-skip-rows", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-skip-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-skip-rows", ...args: any[]): void
    connect(sigName: "notify::quote-character", callback: (...args: any[]) => void): number
    on(sigName: "notify::quote-character", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::quote-character", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::quote-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::quote-character", ...args: any[]): void
    connect(sigName: "notify::use-threads", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-threads", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class CSVReadOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.CSVReadOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.CSVReadOptions

    constructor(config?: CSVReadOptions.ConstructorProperties) 
    constructor() 
    static new(): CSVReadOptions
    _init(config?: CSVReadOptions.ConstructorProperties): void
}

export module CSVReader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.CSVReader

        csvTableReader?: any | null
        input?: InputStream | null
    }

}

export interface CSVReader {

    // Own properties of Arrow-1.0.Arrow.CSVReader

    readonly csvTableReader: any
    readonly input: InputStream
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.CSVReader

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.CSVReader

    read(): Table | null

    // Class property signals of Arrow-1.0.Arrow.CSVReader

    connect(sigName: "notify::csv-table-reader", callback: (...args: any[]) => void): number
    on(sigName: "notify::csv-table-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::csv-table-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::csv-table-reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::csv-table-reader", ...args: any[]): void
    connect(sigName: "notify::input", callback: (...args: any[]) => void): number
    on(sigName: "notify::input", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class CSVReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.CSVReader

    static name: string

    // Constructors of Arrow-1.0.Arrow.CSVReader

    constructor(config?: CSVReader.ConstructorProperties) 
    constructor(input: InputStream, options: CSVReadOptions | null) 
    static new(input: InputStream, options: CSVReadOptions | null): CSVReader
    _init(config?: CSVReader.ConstructorProperties): void
}

export module CallExpression {

    // Constructor properties interface

    export interface ConstructorProperties extends Expression.ConstructorProperties {
    }

}

export interface CallExpression {

    // Own properties of Arrow-1.0.Arrow.CallExpression

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.CallExpression

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.CallExpression

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class CallExpression extends Expression {

    // Own properties of Arrow-1.0.Arrow.CallExpression

    static name: string

    // Constructors of Arrow-1.0.Arrow.CallExpression

    constructor(config?: CallExpression.ConstructorProperties) 
    constructor(function_: string | null, arguments_: Expression[], options: FunctionOptions | null) 
    static new(function_: string | null, arguments_: Expression[], options: FunctionOptions | null): CallExpression
    _init(config?: CallExpression.ConstructorProperties): void
}

export module CastOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.CastOptions

        /**
         * Whether truncating decimal value is allowed or not.
         */
        allowDecimalTruncate?: boolean | null
        /**
         * Whether truncating float value is allowed or not.
         */
        allowFloatTruncate?: boolean | null
        /**
         * Whether integer overflow is allowed or not.
         */
        allowIntOverflow?: boolean | null
        /**
         * Whether invalid UTF-8 string value is allowed or not.
         */
        allowInvalidUtf8?: boolean | null
        /**
         * Whether time overflow is allowed or not.
         */
        allowTimeOverflow?: boolean | null
        /**
         * Whether truncating time value is allowed or not.
         */
        allowTimeTruncate?: boolean | null
        /**
         * The #GArrowDataType being casted to.
         */
        toDataType?: DataType | null
    }

}

export interface CastOptions {

    // Own properties of Arrow-1.0.Arrow.CastOptions

    /**
     * Whether truncating decimal value is allowed or not.
     */
    allowDecimalTruncate: boolean
    /**
     * Whether truncating float value is allowed or not.
     */
    allowFloatTruncate: boolean
    /**
     * Whether integer overflow is allowed or not.
     */
    allowIntOverflow: boolean
    /**
     * Whether invalid UTF-8 string value is allowed or not.
     */
    allowInvalidUtf8: boolean
    /**
     * Whether time overflow is allowed or not.
     */
    allowTimeOverflow: boolean
    /**
     * Whether truncating time value is allowed or not.
     */
    allowTimeTruncate: boolean
    /**
     * The #GArrowDataType being casted to.
     */
    toDataType: DataType
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.CastOptions

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.CastOptions

    connect(sigName: "notify::allow-decimal-truncate", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-decimal-truncate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-decimal-truncate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-decimal-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-decimal-truncate", ...args: any[]): void
    connect(sigName: "notify::allow-float-truncate", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-float-truncate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-float-truncate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-float-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-float-truncate", ...args: any[]): void
    connect(sigName: "notify::allow-int-overflow", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-int-overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-int-overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-int-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-int-overflow", ...args: any[]): void
    connect(sigName: "notify::allow-invalid-utf8", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-invalid-utf8", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-invalid-utf8", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-invalid-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-invalid-utf8", ...args: any[]): void
    connect(sigName: "notify::allow-time-overflow", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-time-overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-time-overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-time-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-time-overflow", ...args: any[]): void
    connect(sigName: "notify::allow-time-truncate", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-time-truncate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-time-truncate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-time-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-time-truncate", ...args: any[]): void
    connect(sigName: "notify::to-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::to-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::to-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::to-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::to-data-type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class CastOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.CastOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.CastOptions

    constructor(config?: CastOptions.ConstructorProperties) 
    constructor() 
    static new(): CastOptions
    _init(config?: CastOptions.ConstructorProperties): void
}

export module ChunkedArray {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ChunkedArray

        chunkedArray?: any | null
    }

}

export interface ChunkedArray {

    // Own properties of Arrow-1.0.Arrow.ChunkedArray

    readonly chunkedArray: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ChunkedArray

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ChunkedArray

    combine(): Array | null
    equal(otherChunkedArray: ChunkedArray): boolean
    filter(filter: BooleanArray, options: FilterOptions | null): ChunkedArray | null
    filterChunkedArray(filter: ChunkedArray, options: FilterOptions | null): ChunkedArray | null
    getChunk(i: number): Array
    getChunks(): Array[]
    getLength(): number
    getNChunks(): number
    getNNulls(): number
    getNRows(): number
    getValueDataType(): DataType
    getValueType(): Type
    slice(offset: number, length: number): ChunkedArray
    sortIndices(order: SortOrder): UInt64Array | null
    take(indices: Array, options: TakeOptions | null): ChunkedArray | null
    takeChunkedArray(indices: ChunkedArray, options: TakeOptions | null): ChunkedArray | null
    toString(): string | null

    // Class property signals of Arrow-1.0.Arrow.ChunkedArray

    connect(sigName: "notify::chunked-array", callback: (...args: any[]) => void): number
    on(sigName: "notify::chunked-array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chunked-array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chunked-array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chunked-array", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ChunkedArray extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ChunkedArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.ChunkedArray

    constructor(config?: ChunkedArray.ConstructorProperties) 
    constructor(chunks: Array[]) 
    static new(chunks: Array[]): ChunkedArray
    _init(config?: ChunkedArray.ConstructorProperties): void
}

export module ChunkedArrayDatum {

    // Constructor properties interface

    export interface ConstructorProperties extends Datum.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ChunkedArrayDatum

        value?: ChunkedArray | null
    }

}

export interface ChunkedArrayDatum {

    // Own properties of Arrow-1.0.Arrow.ChunkedArrayDatum

    readonly value: ChunkedArray
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ChunkedArrayDatum

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.ChunkedArrayDatum

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::datum", callback: (...args: any[]) => void): number
    on(sigName: "notify::datum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::datum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::datum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::datum", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ChunkedArrayDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.ChunkedArrayDatum

    static name: string

    // Constructors of Arrow-1.0.Arrow.ChunkedArrayDatum

    constructor(config?: ChunkedArrayDatum.ConstructorProperties) 
    constructor(value: ChunkedArray) 
    static new(value: ChunkedArray): ChunkedArrayDatum
    _init(config?: ChunkedArrayDatum.ConstructorProperties): void
}

export module Codec {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Codec

        codec?: any | null
    }

}

export interface Codec {

    // Own properties of Arrow-1.0.Arrow.Codec

    readonly codec: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Codec

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Codec

    getCompressionLevel(): number
    getCompressionType(): CompressionType
    getName(): string | null

    // Class property signals of Arrow-1.0.Arrow.Codec

    connect(sigName: "notify::codec", callback: (...args: any[]) => void): number
    on(sigName: "notify::codec", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::codec", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::codec", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Codec extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Codec

    static name: string

    // Constructors of Arrow-1.0.Arrow.Codec

    constructor(config?: Codec.ConstructorProperties) 
    constructor(type: CompressionType) 
    static new(type: CompressionType): Codec
    _init(config?: Codec.ConstructorProperties): void
}

export module CompressedInputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, InputStream.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.CompressedInputStream

        codec?: Codec | null
        raw?: InputStream | null
    }

}

export interface CompressedInputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.CompressedInputStream

    readonly codec: Codec
    readonly raw: InputStream
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.CompressedInputStream

    parentInstance: any

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
    read(nBytes: number): Buffer | null
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
    readBytes(nBytes: number): any | null
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
    readBytes(count: number, cancellable: Gio.Cancellable | null): any

    // Class property signals of Arrow-1.0.Arrow.CompressedInputStream

    connect(sigName: "notify::codec", callback: (...args: any[]) => void): number
    on(sigName: "notify::codec", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::codec", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::codec", ...args: any[]): void
    connect(sigName: "notify::raw", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class CompressedInputStream extends InputStream {

    // Own properties of Arrow-1.0.Arrow.CompressedInputStream

    static name: string

    // Constructors of Arrow-1.0.Arrow.CompressedInputStream

    constructor(config?: CompressedInputStream.ConstructorProperties) 
    constructor(codec: Codec, raw: InputStream) 
    static new(codec: Codec, raw: InputStream): CompressedInputStream
    _init(config?: CompressedInputStream.ConstructorProperties): void
}

export module CompressedOutputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends File.ConstructorProperties, Writable.ConstructorProperties, OutputStream.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.CompressedOutputStream

        codec?: Codec | null
        raw?: OutputStream | null
    }

}

export interface CompressedOutputStream extends File, Writable {

    // Own properties of Arrow-1.0.Arrow.CompressedOutputStream

    readonly codec: Codec
    readonly raw: OutputStream
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.CompressedOutputStream

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.CompressedOutputStream

    connect(sigName: "notify::codec", callback: (...args: any[]) => void): number
    on(sigName: "notify::codec", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::codec", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::codec", ...args: any[]): void
    connect(sigName: "notify::raw", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::output-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class CompressedOutputStream extends OutputStream {

    // Own properties of Arrow-1.0.Arrow.CompressedOutputStream

    static name: string

    // Constructors of Arrow-1.0.Arrow.CompressedOutputStream

    constructor(config?: CompressedOutputStream.ConstructorProperties) 
    constructor(codec: Codec, raw: OutputStream) 
    static new(codec: Codec, raw: OutputStream): CompressedOutputStream
    _init(config?: CompressedOutputStream.ConstructorProperties): void
}

export module CountOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.CountOptions

        mode?: CountMode | null
    }

}

export interface CountOptions {

    // Own properties of Arrow-1.0.Arrow.CountOptions

    mode: CountMode
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.CountOptions

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.CountOptions

    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class CountOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.CountOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.CountOptions

    constructor(config?: CountOptions.ConstructorProperties) 
    constructor() 
    static new(): CountOptions
    _init(config?: CountOptions.ConstructorProperties): void
}

export module DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.DataType

        dataType?: any | null
    }

}

export interface DataType {

    // Own properties of Arrow-1.0.Arrow.DataType

    readonly dataType: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.DataType

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.DataType

    equal(otherDataType: DataType): boolean
    export(): any | null
    getId(): Type
    getName(): string | null
    toString(): string | null

    // Class property signals of Arrow-1.0.Arrow.DataType

    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DataType extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.DataType

    constructor(config?: DataType.ConstructorProperties) 
    _init(config?: DataType.ConstructorProperties): void
    static import(cAbiSchema: any): DataType | null
}

export module Date32Array {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface Date32Array {

    // Own properties of Arrow-1.0.Arrow.Date32Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Date32Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Date32Array

    getValue(i: number): number
    getValues(): number[]

    // Class property signals of Arrow-1.0.Arrow.Date32Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Date32Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Date32Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.Date32Array

    constructor(config?: Date32Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Date32Array
    _init(config?: Date32Array.ConstructorProperties): void
}

export module Date32ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface Date32ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Date32ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Date32ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Date32ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of days since UNIX epoch in signed 32bit integer.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Date32ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Date32ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Date32ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.Date32ArrayBuilder

    constructor(config?: Date32ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): Date32ArrayBuilder
    _init(config?: Date32ArrayBuilder.ConstructorProperties): void
}

export module Date32DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends TemporalDataType.ConstructorProperties {
    }

}

export interface Date32DataType {

    // Own properties of Arrow-1.0.Arrow.Date32DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Date32DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.Date32DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Date32DataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.Date32DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.Date32DataType

    constructor(config?: Date32DataType.ConstructorProperties) 
    constructor() 
    static new(): Date32DataType
    _init(config?: Date32DataType.ConstructorProperties): void
}

export module Date32Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface Date32Scalar {

    // Own properties of Arrow-1.0.Arrow.Date32Scalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Date32Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Date32Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Date32Scalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Date32Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Date32Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.Date32Scalar

    constructor(config?: Date32Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Date32Scalar
    _init(config?: Date32Scalar.ConstructorProperties): void
}

export module Date64Array {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface Date64Array {

    // Own properties of Arrow-1.0.Arrow.Date64Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Date64Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Date64Array

    getValue(i: number): number
    getValues(): number[]

    // Class property signals of Arrow-1.0.Arrow.Date64Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Date64Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Date64Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.Date64Array

    constructor(config?: Date64Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Date64Array
    _init(config?: Date64Array.ConstructorProperties): void
}

export module Date64ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface Date64ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Date64ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Date64ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Date64ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of milliseconds since UNIX epoch in signed 64bit integer.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Date64ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Date64ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Date64ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.Date64ArrayBuilder

    constructor(config?: Date64ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): Date64ArrayBuilder
    _init(config?: Date64ArrayBuilder.ConstructorProperties): void
}

export module Date64DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends TemporalDataType.ConstructorProperties {
    }

}

export interface Date64DataType {

    // Own properties of Arrow-1.0.Arrow.Date64DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Date64DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.Date64DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Date64DataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.Date64DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.Date64DataType

    constructor(config?: Date64DataType.ConstructorProperties) 
    constructor() 
    static new(): Date64DataType
    _init(config?: Date64DataType.ConstructorProperties): void
}

export module Date64Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface Date64Scalar {

    // Own properties of Arrow-1.0.Arrow.Date64Scalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Date64Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Date64Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Date64Scalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Date64Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Date64Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.Date64Scalar

    constructor(config?: Date64Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Date64Scalar
    _init(config?: Date64Scalar.ConstructorProperties): void
}

export module Datum {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Datum

        datum?: any | null
    }

}

export interface Datum {

    // Own properties of Arrow-1.0.Arrow.Datum

    readonly datum: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Datum

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Datum

    equal(otherDatum: Datum): boolean
    isArray(): boolean
    isArrayLike(): boolean
    isScalar(): boolean
    isValue(): boolean
    toString(): string | null

    // Class property signals of Arrow-1.0.Arrow.Datum

    connect(sigName: "notify::datum", callback: (...args: any[]) => void): number
    on(sigName: "notify::datum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::datum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::datum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::datum", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Datum extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Datum

    static name: string

    // Constructors of Arrow-1.0.Arrow.Datum

    constructor(config?: Datum.ConstructorProperties) 
    _init(config?: Datum.ConstructorProperties): void
}

export module DayTimeIntervalDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends IntervalDataType.ConstructorProperties {
    }

}

export interface DayTimeIntervalDataType {

    // Own properties of Arrow-1.0.Arrow.DayTimeIntervalDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.DayTimeIntervalDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.DayTimeIntervalDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DayTimeIntervalDataType extends IntervalDataType {

    // Own properties of Arrow-1.0.Arrow.DayTimeIntervalDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.DayTimeIntervalDataType

    constructor(config?: DayTimeIntervalDataType.ConstructorProperties) 
    constructor() 
    static new(): DayTimeIntervalDataType
    _init(config?: DayTimeIntervalDataType.ConstructorProperties): void
}

export module Decimal128 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Decimal128

        decimal128?: any | null
    }

}

export interface Decimal128 {

    // Own properties of Arrow-1.0.Arrow.Decimal128

    readonly decimal128: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Decimal128

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Decimal128

    /**
     * Computes the absolute value of the `decimal` destructively.
     */
    abs(): void
    copy(): Decimal128
    divide(right: Decimal128): [ /* returnType */ Decimal128 | null, /* remainder */ Decimal128 | null ]
    equal(otherDecimal: Decimal128): boolean
    greaterThan(otherDecimal: Decimal128): boolean
    greaterThanOrEqual(otherDecimal: Decimal128): boolean
    lessThan(otherDecimal: Decimal128): boolean
    lessThanOrEqual(otherDecimal: Decimal128): boolean
    minus(right: Decimal128): Decimal128
    multiply(right: Decimal128): Decimal128
    /**
     * Negate the current value of the `decimal` destructively.
     */
    negate(): void
    notEqual(otherDecimal: Decimal128): boolean
    plus(right: Decimal128): Decimal128
    rescale(originalScale: number, newScale: number): Decimal128 | null
    toBytes(): any
    toInteger(): number
    toString(): string | null
    toStringScale(scale: number): string | null

    // Class property signals of Arrow-1.0.Arrow.Decimal128

    connect(sigName: "notify::decimal128", callback: (...args: any[]) => void): number
    on(sigName: "notify::decimal128", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decimal128", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decimal128", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decimal128", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Decimal128 extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Decimal128

    static name: string

    // Constructors of Arrow-1.0.Arrow.Decimal128

    constructor(config?: Decimal128.ConstructorProperties) 
    static newInteger(data: number): Decimal128
    static newString(data: string | null): Decimal128
    _init(config?: Decimal128.ConstructorProperties): void
}

export module Decimal128Array {

    // Constructor properties interface

    export interface ConstructorProperties extends FixedSizeBinaryArray.ConstructorProperties {
    }

}

export interface Decimal128Array {

    // Own properties of Arrow-1.0.Arrow.Decimal128Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Decimal128Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Decimal128Array

    formatValue(i: number): string | null
    getValue(i: number): Decimal128

    // Overloads of getValue

    getValue(i: number): any

    // Class property signals of Arrow-1.0.Arrow.Decimal128Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Decimal128Array extends FixedSizeBinaryArray {

    // Own properties of Arrow-1.0.Arrow.Decimal128Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.Decimal128Array

    constructor(config?: Decimal128Array.ConstructorProperties) 
    _init(config?: Decimal128Array.ConstructorProperties): void
}

export module Decimal128ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends FixedSizeBinaryArrayBuilder.ConstructorProperties {
    }

}

export interface Decimal128ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    append(value: Decimal128): boolean
    appendValue(value: Decimal128 | null): boolean

    // Overloads of appendValue

    appendValue(value: Uint8Array | null): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GArrowDecimal128.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: Decimal128[], isValids: boolean[] | null): boolean

    // Overloads of appendValues

    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: any[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Decimal128ArrayBuilder extends FixedSizeBinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    constructor(config?: Decimal128ArrayBuilder.ConstructorProperties) 
    constructor(dataType: Decimal128DataType) 
    static new(dataType: Decimal128DataType): Decimal128ArrayBuilder

    // Overloads of new

    static new(dataType: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder
    _init(config?: Decimal128ArrayBuilder.ConstructorProperties): void
}

export module Decimal128DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends DecimalDataType.ConstructorProperties {
    }

}

export interface Decimal128DataType {

    // Own properties of Arrow-1.0.Arrow.Decimal128DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Decimal128DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.Decimal128DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Decimal128DataType extends DecimalDataType {

    // Own properties of Arrow-1.0.Arrow.Decimal128DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.Decimal128DataType

    constructor(config?: Decimal128DataType.ConstructorProperties) 
    constructor(precision: number, scale: number) 
    static new(precision: number, scale: number): Decimal128DataType

    // Overloads of new

    static new(precision: number, scale: number): DecimalDataType
    static new(byteWidth: number): FixedSizeBinaryDataType
    _init(config?: Decimal128DataType.ConstructorProperties): void
    static maxPrecision(): number
}

export module Decimal128Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Decimal128Scalar

        /**
         * The value of the scalar.
         */
        value?: Decimal128 | null
    }

}

export interface Decimal128Scalar {

    // Own properties of Arrow-1.0.Arrow.Decimal128Scalar

    /**
     * The value of the scalar.
     */
    readonly value: Decimal128
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Decimal128Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Decimal128Scalar

    getValue(): Decimal128

    // Class property signals of Arrow-1.0.Arrow.Decimal128Scalar

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Decimal128Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Decimal128Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.Decimal128Scalar

    constructor(config?: Decimal128Scalar.ConstructorProperties) 
    constructor(dataType: Decimal128DataType, value: Decimal128) 
    static new(dataType: Decimal128DataType, value: Decimal128): Decimal128Scalar
    _init(config?: Decimal128Scalar.ConstructorProperties): void
}

export module Decimal256 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Decimal256

        decimal256?: any | null
    }

}

export interface Decimal256 {

    // Own properties of Arrow-1.0.Arrow.Decimal256

    readonly decimal256: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Decimal256

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Decimal256

    /**
     * Computes the absolute value of the `decimal` destructively.
     */
    abs(): void
    copy(): Decimal256
    divide(right: Decimal256): [ /* returnType */ Decimal256 | null, /* remainder */ Decimal256 | null ]
    equal(otherDecimal: Decimal256): boolean
    greaterThan(otherDecimal: Decimal256): boolean
    greaterThanOrEqual(otherDecimal: Decimal256): boolean
    lessThan(otherDecimal: Decimal256): boolean
    lessThanOrEqual(otherDecimal: Decimal256): boolean
    multiply(right: Decimal256): Decimal256
    /**
     * Negate the current value of the `decimal` destructively.
     */
    negate(): void
    notEqual(otherDecimal: Decimal256): boolean
    plus(right: Decimal256): Decimal256
    rescale(originalScale: number, newScale: number): Decimal256 | null
    toBytes(): any
    toString(): string | null
    toStringScale(scale: number): string | null

    // Class property signals of Arrow-1.0.Arrow.Decimal256

    connect(sigName: "notify::decimal256", callback: (...args: any[]) => void): number
    on(sigName: "notify::decimal256", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decimal256", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decimal256", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decimal256", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Decimal256 extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Decimal256

    static name: string

    // Constructors of Arrow-1.0.Arrow.Decimal256

    constructor(config?: Decimal256.ConstructorProperties) 
    static newInteger(data: number): Decimal256
    static newString(data: string | null): Decimal256
    _init(config?: Decimal256.ConstructorProperties): void
}

export module Decimal256Array {

    // Constructor properties interface

    export interface ConstructorProperties extends FixedSizeBinaryArray.ConstructorProperties {
    }

}

export interface Decimal256Array {

    // Own properties of Arrow-1.0.Arrow.Decimal256Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Decimal256Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Decimal256Array

    formatValue(i: number): string | null
    getValue(i: number): Decimal256

    // Overloads of getValue

    getValue(i: number): any

    // Class property signals of Arrow-1.0.Arrow.Decimal256Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Decimal256Array extends FixedSizeBinaryArray {

    // Own properties of Arrow-1.0.Arrow.Decimal256Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.Decimal256Array

    constructor(config?: Decimal256Array.ConstructorProperties) 
    _init(config?: Decimal256Array.ConstructorProperties): void
}

export module Decimal256ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends FixedSizeBinaryArrayBuilder.ConstructorProperties {
    }

}

export interface Decimal256ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    appendValue(value: Decimal256 | null): boolean

    // Overloads of appendValue

    appendValue(value: Uint8Array | null): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GArrowDecimal256.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: Decimal256[], isValids: boolean[] | null): boolean

    // Overloads of appendValues

    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: any[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Decimal256ArrayBuilder extends FixedSizeBinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    constructor(config?: Decimal256ArrayBuilder.ConstructorProperties) 
    constructor(dataType: Decimal256DataType) 
    static new(dataType: Decimal256DataType): Decimal256ArrayBuilder

    // Overloads of new

    static new(dataType: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder
    _init(config?: Decimal256ArrayBuilder.ConstructorProperties): void
}

export module Decimal256DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends DecimalDataType.ConstructorProperties {
    }

}

export interface Decimal256DataType {

    // Own properties of Arrow-1.0.Arrow.Decimal256DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Decimal256DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.Decimal256DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Decimal256DataType extends DecimalDataType {

    // Own properties of Arrow-1.0.Arrow.Decimal256DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.Decimal256DataType

    constructor(config?: Decimal256DataType.ConstructorProperties) 
    constructor(precision: number, scale: number) 
    static new(precision: number, scale: number): Decimal256DataType

    // Overloads of new

    static new(precision: number, scale: number): DecimalDataType
    static new(byteWidth: number): FixedSizeBinaryDataType
    _init(config?: Decimal256DataType.ConstructorProperties): void
    static maxPrecision(): number
}

export module Decimal256Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Decimal256Scalar

        /**
         * The value of the scalar.
         */
        value?: Decimal256 | null
    }

}

export interface Decimal256Scalar {

    // Own properties of Arrow-1.0.Arrow.Decimal256Scalar

    /**
     * The value of the scalar.
     */
    readonly value: Decimal256
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Decimal256Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Decimal256Scalar

    getValue(): Decimal256

    // Class property signals of Arrow-1.0.Arrow.Decimal256Scalar

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Decimal256Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Decimal256Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.Decimal256Scalar

    constructor(config?: Decimal256Scalar.ConstructorProperties) 
    constructor(dataType: Decimal256DataType, value: Decimal256) 
    static new(dataType: Decimal256DataType, value: Decimal256): Decimal256Scalar
    _init(config?: Decimal256Scalar.ConstructorProperties): void
}

export module DecimalDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends FixedSizeBinaryDataType.ConstructorProperties {
    }

}

export interface DecimalDataType {

    // Own properties of Arrow-1.0.Arrow.DecimalDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.DecimalDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.DecimalDataType

    getPrecision(): number
    getScale(): number

    // Class property signals of Arrow-1.0.Arrow.DecimalDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DecimalDataType extends FixedSizeBinaryDataType {

    // Own properties of Arrow-1.0.Arrow.DecimalDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.DecimalDataType

    constructor(config?: DecimalDataType.ConstructorProperties) 
    constructor(precision: number, scale: number) 
    static new(precision: number, scale: number): DecimalDataType

    // Overloads of new

    static new(byteWidth: number): FixedSizeBinaryDataType
    _init(config?: DecimalDataType.ConstructorProperties): void
}

export module DenseUnionArray {

    // Constructor properties interface

    export interface ConstructorProperties extends UnionArray.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.DenseUnionArray

        valueOffsets?: Int32Array | null
    }

}

export interface DenseUnionArray {

    // Own properties of Arrow-1.0.Arrow.DenseUnionArray

    readonly valueOffsets: Int32Array
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.DenseUnionArray

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.DenseUnionArray

    connect(sigName: "notify::value-offsets", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-offsets", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-offsets", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-offsets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-offsets", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::type-ids", callback: (...args: any[]) => void): number
    on(sigName: "notify::type-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type-ids", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DenseUnionArray extends UnionArray {

    // Own properties of Arrow-1.0.Arrow.DenseUnionArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.DenseUnionArray

    constructor(config?: DenseUnionArray.ConstructorProperties) 
    constructor(typeIds: Int8Array, valueOffsets: Int32Array, fields: Array[]) 
    static new(typeIds: Int8Array, valueOffsets: Int32Array, fields: Array[]): DenseUnionArray
    static newDataType(dataType: DenseUnionDataType, typeIds: Int8Array, valueOffsets: Int32Array, fields: Array[]): DenseUnionArray
    _init(config?: DenseUnionArray.ConstructorProperties): void
}

export module DenseUnionDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends UnionDataType.ConstructorProperties {
    }

}

export interface DenseUnionDataType {

    // Own properties of Arrow-1.0.Arrow.DenseUnionDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.DenseUnionDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.DenseUnionDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DenseUnionDataType extends UnionDataType {

    // Own properties of Arrow-1.0.Arrow.DenseUnionDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.DenseUnionDataType

    constructor(config?: DenseUnionDataType.ConstructorProperties) 
    constructor(fields: Field[], typeCodes: Uint8Array) 
    static new(fields: Field[], typeCodes: Uint8Array): DenseUnionDataType
    _init(config?: DenseUnionDataType.ConstructorProperties): void
}

export module DenseUnionScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends UnionScalar.ConstructorProperties {
    }

}

export interface DenseUnionScalar {

    // Own properties of Arrow-1.0.Arrow.DenseUnionScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.DenseUnionScalar

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.DenseUnionScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DenseUnionScalar extends UnionScalar {

    // Own properties of Arrow-1.0.Arrow.DenseUnionScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.DenseUnionScalar

    constructor(config?: DenseUnionScalar.ConstructorProperties) 
    constructor(dataType: DenseUnionDataType, typeCode: number, value: Scalar) 
    static new(dataType: DenseUnionDataType, typeCode: number, value: Scalar): DenseUnionScalar
    _init(config?: DenseUnionScalar.ConstructorProperties): void
}

export module DictionaryArray {

    // Constructor properties interface

    export interface ConstructorProperties extends Array.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.DictionaryArray

        dictionary?: Array | null
        indices?: Array | null
    }

}

export interface DictionaryArray {

    // Own properties of Arrow-1.0.Arrow.DictionaryArray

    readonly dictionary: Array
    readonly indices: Array
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.DictionaryArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.DictionaryArray

    getDictionary(): Array
    getDictionaryDataType(): DictionaryDataType
    getIndices(): Array

    // Class property signals of Arrow-1.0.Arrow.DictionaryArray

    connect(sigName: "notify::dictionary", callback: (...args: any[]) => void): number
    on(sigName: "notify::dictionary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dictionary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dictionary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dictionary", ...args: any[]): void
    connect(sigName: "notify::indices", callback: (...args: any[]) => void): number
    on(sigName: "notify::indices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::indices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::indices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::indices", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DictionaryArray extends Array {

    // Own properties of Arrow-1.0.Arrow.DictionaryArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.DictionaryArray

    constructor(config?: DictionaryArray.ConstructorProperties) 
    constructor(dataType: DataType, indices: Array, dictionary: Array) 
    static new(dataType: DataType, indices: Array, dictionary: Array): DictionaryArray
    _init(config?: DictionaryArray.ConstructorProperties): void
}

export module DictionaryDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends FixedWidthDataType.ConstructorProperties {
    }

}

export interface DictionaryDataType {

    // Own properties of Arrow-1.0.Arrow.DictionaryDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.DictionaryDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.DictionaryDataType

    getIndexDataType(): DataType
    getValueDataType(): DataType
    isOrdered(): boolean

    // Class property signals of Arrow-1.0.Arrow.DictionaryDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DictionaryDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.DictionaryDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.DictionaryDataType

    constructor(config?: DictionaryDataType.ConstructorProperties) 
    constructor(indexDataType: DataType, valueDataType: DataType, ordered: boolean) 
    static new(indexDataType: DataType, valueDataType: DataType, ordered: boolean): DictionaryDataType
    _init(config?: DictionaryDataType.ConstructorProperties): void
}

export module DoubleArray {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface DoubleArray {

    // Own properties of Arrow-1.0.Arrow.DoubleArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.DoubleArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.DoubleArray

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.DoubleArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DoubleArray extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.DoubleArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.DoubleArray

    constructor(config?: DoubleArray.ConstructorProperties) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): DoubleArray
    _init(config?: DoubleArray.ConstructorProperties): void
}

export module DoubleArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface DoubleArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.DoubleArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.DoubleArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.DoubleArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of double.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.DoubleArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DoubleArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.DoubleArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.DoubleArrayBuilder

    constructor(config?: DoubleArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): DoubleArrayBuilder
    _init(config?: DoubleArrayBuilder.ConstructorProperties): void
}

export module DoubleDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends FloatingPointDataType.ConstructorProperties {
    }

}

export interface DoubleDataType {

    // Own properties of Arrow-1.0.Arrow.DoubleDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.DoubleDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.DoubleDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DoubleDataType extends FloatingPointDataType {

    // Own properties of Arrow-1.0.Arrow.DoubleDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.DoubleDataType

    constructor(config?: DoubleDataType.ConstructorProperties) 
    constructor() 
    static new(): DoubleDataType
    _init(config?: DoubleDataType.ConstructorProperties): void
}

export module DoubleScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface DoubleScalar {

    // Own properties of Arrow-1.0.Arrow.DoubleScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.DoubleScalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.DoubleScalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.DoubleScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DoubleScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.DoubleScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.DoubleScalar

    constructor(config?: DoubleScalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): DoubleScalar
    _init(config?: DoubleScalar.ConstructorProperties): void
}

export module EqualOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.EqualOptions

        /**
         * The absolute tolerance for approximate comparison of
         * floating-point values.
         */
        absoluteTolerance?: number | null
        /**
         * Whether or not approximate comparison is used.
         */
        approx?: boolean | null
        /**
         * Whether or not NaNs are considered equal.
         */
        nansEqual?: boolean | null
    }

}

export interface EqualOptions {

    // Own properties of Arrow-1.0.Arrow.EqualOptions

    /**
     * The absolute tolerance for approximate comparison of
     * floating-point values.
     */
    absoluteTolerance: number
    /**
     * Whether or not approximate comparison is used.
     */
    approx: boolean
    /**
     * Whether or not NaNs are considered equal.
     */
    nansEqual: boolean
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.EqualOptions

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.EqualOptions

    isApprox(): boolean

    // Class property signals of Arrow-1.0.Arrow.EqualOptions

    connect(sigName: "notify::absolute-tolerance", callback: (...args: any[]) => void): number
    on(sigName: "notify::absolute-tolerance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::absolute-tolerance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::absolute-tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::absolute-tolerance", ...args: any[]): void
    connect(sigName: "notify::approx", callback: (...args: any[]) => void): number
    on(sigName: "notify::approx", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::approx", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::approx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::approx", ...args: any[]): void
    connect(sigName: "notify::nans-equal", callback: (...args: any[]) => void): number
    on(sigName: "notify::nans-equal", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nans-equal", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nans-equal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nans-equal", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class EqualOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.EqualOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.EqualOptions

    constructor(config?: EqualOptions.ConstructorProperties) 
    constructor() 
    static new(): EqualOptions
    _init(config?: EqualOptions.ConstructorProperties): void
}

export module ExecuteContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ExecuteContext {

    // Own properties of Arrow-1.0.Arrow.ExecuteContext

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ExecuteContext

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.ExecuteContext

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ExecuteContext extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExecuteContext

    static name: string

    // Constructors of Arrow-1.0.Arrow.ExecuteContext

    constructor(config?: ExecuteContext.ConstructorProperties) 
    constructor() 
    static new(): ExecuteContext
    _init(config?: ExecuteContext.ConstructorProperties): void
}

export module ExecuteNode {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ExecuteNode

        node?: any | null
    }

}

export interface ExecuteNode {

    // Own properties of Arrow-1.0.Arrow.ExecuteNode

    readonly node: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ExecuteNode

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ExecuteNode

    getKindName(): string | null
    getOutputSchema(): Schema

    // Class property signals of Arrow-1.0.Arrow.ExecuteNode

    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ExecuteNode extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExecuteNode

    static name: string

    // Constructors of Arrow-1.0.Arrow.ExecuteNode

    constructor(config?: ExecuteNode.ConstructorProperties) 
    _init(config?: ExecuteNode.ConstructorProperties): void
}

export module ExecuteNodeOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ExecuteNodeOptions

        options?: any | null
    }

}

export interface ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.ExecuteNodeOptions

    readonly options: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ExecuteNodeOptions

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.ExecuteNodeOptions

    connect(sigName: "notify::options", callback: (...args: any[]) => void): number
    on(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ExecuteNodeOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExecuteNodeOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.ExecuteNodeOptions

    constructor(config?: ExecuteNodeOptions.ConstructorProperties) 
    _init(config?: ExecuteNodeOptions.ConstructorProperties): void
}

export module ExecutePlan {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ExecutePlan

        plan?: any | null
    }

}

export interface ExecutePlan {

    // Own properties of Arrow-1.0.Arrow.ExecutePlan

    readonly plan: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ExecutePlan

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ExecutePlan

    /**
     * This is a shortcut of garrow_execute_plan_build_node() for aggregate
     * node.
     * @param input A #GArrowExecuteNode.
     * @param options A #GArrowAggregateNodeOptions.
     * @returns A newly built and added #GArrowExecuteNode   for aggregation on success, %NULL on error.
     */
    buildAggregateNode(input: ExecuteNode, options: AggregateNodeOptions): ExecuteNode
    /**
     * This is a shortcut of garrow_execute_plan_build_node() for hash
     * join node.
     * @param left A left #GArrowExecuteNode.
     * @param right A right #GArrowExecuteNode.
     * @param options A #GArrowHashJoinNodeOptions.
     * @returns A newly built and added #GArrowExecuteNode   for hash join on success, %NULL on error.
     */
    buildHashJoinNode(left: ExecuteNode, right: ExecuteNode, options: HashJoinNodeOptions): ExecuteNode
    buildNode(factoryName: string | null, inputs: ExecuteNode[], options: ExecuteNodeOptions): ExecuteNode
    /**
     * This is a shortcut of garrow_execute_plan_build_node() for sink
     * node.
     * @param input A #GArrowExecuteNode.
     * @param options A #GArrowSinkNodeOptions.
     * @returns A newly built and added #GArrowExecuteNode   for sink on success, %NULL on error.
     */
    buildSinkNode(input: ExecuteNode, options: SinkNodeOptions): ExecuteNode
    /**
     * This is a shortcut of garrow_execute_plan_build_node() for source
     * node.
     * @param options A #GArrowSourceNodeOptions.
     * @returns A newly built and added #GArrowExecuteNode   for source on success, %NULL on error.
     */
    buildSourceNode(options: SourceNodeOptions): ExecuteNode
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

    connect(sigName: "notify::plan", callback: (...args: any[]) => void): number
    on(sigName: "notify::plan", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::plan", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::plan", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::plan", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ExecutePlan extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExecutePlan

    static name: string

    // Constructors of Arrow-1.0.Arrow.ExecutePlan

    constructor(config?: ExecutePlan.ConstructorProperties) 
    constructor() 
    static new(): ExecutePlan
    _init(config?: ExecutePlan.ConstructorProperties): void
}

export module Expression {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Expression {

    // Own properties of Arrow-1.0.Arrow.Expression

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Expression

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Expression

    equal(otherExpression: Expression): boolean
    toString(): string | null

    // Class property signals of Arrow-1.0.Arrow.Expression

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Expression extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Expression

    static name: string

    // Constructors of Arrow-1.0.Arrow.Expression

    constructor(config?: Expression.ConstructorProperties) 
    _init(config?: Expression.ConstructorProperties): void
}

export module ExtensionArray {

    // Constructor properties interface

    export interface ConstructorProperties extends Array.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ExtensionArray

        storage?: Array | null
    }

}

export interface ExtensionArray {

    // Own properties of Arrow-1.0.Arrow.ExtensionArray

    readonly storage: Array
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ExtensionArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.ExtensionArray

    getStorage(): Array

    // Class property signals of Arrow-1.0.Arrow.ExtensionArray

    connect(sigName: "notify::storage", callback: (...args: any[]) => void): number
    on(sigName: "notify::storage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::storage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::storage", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ExtensionArray extends Array {

    // Own properties of Arrow-1.0.Arrow.ExtensionArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.ExtensionArray

    constructor(config?: ExtensionArray.ConstructorProperties) 
    _init(config?: ExtensionArray.ConstructorProperties): void
}

export module ExtensionDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends DataType.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ExtensionDataType

        storageDataType?: DataType | null
    }

}

export interface ExtensionDataType {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataType

    readonly storageDataType: DataType
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ExtensionDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.ExtensionDataType

    // Has conflict: getExtensionName(): string | null
    wrapArray(storage: Array): ExtensionArray
    wrapChunkedArray(storage: ChunkedArray): ChunkedArray

    // Own virtual methods of Arrow-1.0.Arrow.ExtensionDataType

    equal(otherDataType: ExtensionDataType): boolean

    // Overloads of equal

    equal(otherDataType: DataType): boolean
    getArrayGtype(): GObject.GType
    getExtensionName(): string | null
    serialize(): any

    // Class property signals of Arrow-1.0.Arrow.ExtensionDataType

    connect(sigName: "notify::storage-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::storage-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::storage-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::storage-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::storage-data-type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ExtensionDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.ExtensionDataType

    constructor(config?: ExtensionDataType.ConstructorProperties) 
    _init(config?: ExtensionDataType.ConstructorProperties): void
}

export module ExtensionDataTypeRegistry {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

        registry?: any | null
    }

}

export interface ExtensionDataTypeRegistry {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    readonly registry: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    lookup(name: string | null): ExtensionDataType
    /**
     * Register the given `data_type` to the `registry`.
     * @param dataType A #GArrowExtensionDataType to be registered.
     * @returns %TRUE on success, %FALSE on error.
     */
    register(dataType: ExtensionDataType): boolean
    /**
     * Unregister an extension data type that has the given `name` from the
     * `registry`.
     * @param name An extension data type name to be unregistered.
     * @returns %TRUE on success, %FALSE on error.
     */
    unregister(name: string | null): boolean

    // Class property signals of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ExtensionDataTypeRegistry extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    static name: string

    // Constructors of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    constructor(config?: ExtensionDataTypeRegistry.ConstructorProperties) 
    _init(config?: ExtensionDataTypeRegistry.ConstructorProperties): void
    static default(): ExtensionDataTypeRegistry
}

export module ExtensionScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface ExtensionScalar {

    // Own properties of Arrow-1.0.Arrow.ExtensionScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ExtensionScalar

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.ExtensionScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ExtensionScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.ExtensionScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.ExtensionScalar

    constructor(config?: ExtensionScalar.ConstructorProperties) 
    _init(config?: ExtensionScalar.ConstructorProperties): void
}

export module FeatherFileReader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.FeatherFileReader

        featherReader?: any | null
    }

}

export interface FeatherFileReader {

    // Own properties of Arrow-1.0.Arrow.FeatherFileReader

    readonly featherReader: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FeatherFileReader

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FeatherFileReader

    getVersion(): number
    read(): Table
    readIndices(indices: number[]): Table
    readNames(names: string[]): Table

    // Class property signals of Arrow-1.0.Arrow.FeatherFileReader

    connect(sigName: "notify::feather-reader", callback: (...args: any[]) => void): number
    on(sigName: "notify::feather-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::feather-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::feather-reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::feather-reader", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FeatherFileReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FeatherFileReader

    static name: string

    // Constructors of Arrow-1.0.Arrow.FeatherFileReader

    constructor(config?: FeatherFileReader.ConstructorProperties) 
    constructor(file: SeekableInputStream) 
    static new(file: SeekableInputStream): FeatherFileReader
    _init(config?: FeatherFileReader.ConstructorProperties): void
}

export module FeatherWriteProperties {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

export interface FeatherWriteProperties {

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
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FeatherWriteProperties

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.FeatherWriteProperties

    connect(sigName: "notify::compression", callback: (...args: any[]) => void): number
    on(sigName: "notify::compression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::compression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::compression", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FeatherWriteProperties extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FeatherWriteProperties

    static name: string

    // Constructors of Arrow-1.0.Arrow.FeatherWriteProperties

    constructor(config?: FeatherWriteProperties.ConstructorProperties) 
    constructor() 
    static new(): FeatherWriteProperties
    _init(config?: FeatherWriteProperties.ConstructorProperties): void
}

export module Field {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Field

        dataType?: DataType | null
        field?: any | null
    }

}

export interface Field {

    // Own properties of Arrow-1.0.Arrow.Field

    readonly dataType: DataType
    readonly field: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Field

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Field

    equal(otherField: Field): boolean
    export(): any | null
    getDataType(): DataType
    getMetadata(): GLib.HashTable | null
    getName(): string | null
    hasMetadata(): boolean
    isNullable(): boolean
    removeMetadata(): Field
    toString(): string | null
    toStringMetadata(showMetadata: boolean): string | null
    withMergedMetadata(metadata: GLib.HashTable): Field
    withMetadata(metadata: GLib.HashTable): Field

    // Class property signals of Arrow-1.0.Arrow.Field

    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::field", callback: (...args: any[]) => void): number
    on(sigName: "notify::field", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::field", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::field", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::field", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Field extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Field

    static name: string

    // Constructors of Arrow-1.0.Arrow.Field

    constructor(config?: Field.ConstructorProperties) 
    constructor(name: string | null, dataType: DataType) 
    static new(name: string | null, dataType: DataType): Field
    static newFull(name: string | null, dataType: DataType, nullable: boolean): Field
    _init(config?: Field.ConstructorProperties): void
    static import(cAbiSchema: any): Field | null
}

export module FieldExpression {

    // Constructor properties interface

    export interface ConstructorProperties extends Expression.ConstructorProperties {
    }

}

export interface FieldExpression {

    // Own properties of Arrow-1.0.Arrow.FieldExpression

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FieldExpression

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.FieldExpression

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FieldExpression extends Expression {

    // Own properties of Arrow-1.0.Arrow.FieldExpression

    static name: string

    // Constructors of Arrow-1.0.Arrow.FieldExpression

    constructor(config?: FieldExpression.ConstructorProperties) 
    constructor(reference: string | null) 
    static new(reference: string | null): FieldExpression
    _init(config?: FieldExpression.ConstructorProperties): void
}

export module FileInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

export interface FileInfo {

    // Own properties of Arrow-1.0.Arrow.FileInfo

    /**
     * The file base name (component after the last directory separator).
     */
    readonly baseName: string | null
    /**
     * The directory base name (component before the file base name).
     */
    readonly dirName: string | null
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
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FileInfo

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FileInfo

    equal(otherFileInfo: FileInfo): boolean
    isDir(): boolean
    isFile(): boolean
    toString(): string | null

    // Class property signals of Arrow-1.0.Arrow.FileInfo

    connect(sigName: "notify::base-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-name", ...args: any[]): void
    connect(sigName: "notify::dir-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::dir-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dir-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dir-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dir-name", ...args: any[]): void
    connect(sigName: "notify::extension", callback: (...args: any[]) => void): number
    on(sigName: "notify::extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extension", ...args: any[]): void
    connect(sigName: "notify::mtime", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtime", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FileInfo extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FileInfo

    static name: string

    // Constructors of Arrow-1.0.Arrow.FileInfo

    constructor(config?: FileInfo.ConstructorProperties) 
    constructor() 
    static new(): FileInfo
    _init(config?: FileInfo.ConstructorProperties): void
}

export module FileInputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, SeekableInputStream.ConstructorProperties {
    }

}

export interface FileInputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.FileInputStream

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FileInputStream

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.FileInputStream

    getFileDescriptor(): number

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
    read(nBytes: number): Buffer | null
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
    readBytes(nBytes: number): any | null
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
    readBytes(count: number, cancellable: Gio.Cancellable | null): any

    // Class property signals of Arrow-1.0.Arrow.FileInputStream

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FileInputStream extends SeekableInputStream {

    // Own properties of Arrow-1.0.Arrow.FileInputStream

    static name: string

    // Constructors of Arrow-1.0.Arrow.FileInputStream

    constructor(config?: FileInputStream.ConstructorProperties) 
    constructor(path: string | null) 
    static new(path: string | null): FileInputStream
    static newFileDescriptor(fileDescriptor: number): FileInputStream
    _init(config?: FileInputStream.ConstructorProperties): void
}

export module FileOutputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends File.ConstructorProperties, Writable.ConstructorProperties, OutputStream.ConstructorProperties {
    }

}

export interface FileOutputStream extends File, Writable {

    // Own properties of Arrow-1.0.Arrow.FileOutputStream

    __gtype__: number

    // Class property signals of Arrow-1.0.Arrow.FileOutputStream

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::output-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * It wraps `arrow::io::FileOutputStream`.
 * @class 
 */
export class FileOutputStream extends OutputStream {

    // Own properties of Arrow-1.0.Arrow.FileOutputStream

    static name: string

    // Constructors of Arrow-1.0.Arrow.FileOutputStream

    constructor(config?: FileOutputStream.ConstructorProperties) 
    constructor(path: string | null, append: boolean) 
    static new(path: string | null, append: boolean): FileOutputStream
    _init(config?: FileOutputStream.ConstructorProperties): void
}

export module FileSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.FileSelector

        /**
         * The behavior if `base_dir` isn't found in the file system.
         * If false, an error is returned.  If true, an empty selection is returned.
         */
        allowNotFound?: boolean | null
        /**
         * The directory in which to select files.
         * If the path exists but doesn't point to a directory, this should
         * be an error.
         */
        baseDir?: string | null
        /**
         * The maximum number of subdirectories to recurse into.
         */
        maxRecursion?: number | null
        /**
         * Whether to recurse into subdirectories.
         */
        recursive?: boolean | null
    }

}

export interface FileSelector {

    // Own properties of Arrow-1.0.Arrow.FileSelector

    /**
     * The behavior if `base_dir` isn't found in the file system.
     * If false, an error is returned.  If true, an empty selection is returned.
     */
    allowNotFound: boolean
    /**
     * The directory in which to select files.
     * If the path exists but doesn't point to a directory, this should
     * be an error.
     */
    baseDir: string | null
    /**
     * The maximum number of subdirectories to recurse into.
     */
    maxRecursion: number
    /**
     * Whether to recurse into subdirectories.
     */
    recursive: boolean
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FileSelector

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.FileSelector

    connect(sigName: "notify::allow-not-found", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-not-found", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-not-found", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-not-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-not-found", ...args: any[]): void
    connect(sigName: "notify::base-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-dir", ...args: any[]): void
    connect(sigName: "notify::max-recursion", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-recursion", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-recursion", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-recursion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-recursion", ...args: any[]): void
    connect(sigName: "notify::recursive", callback: (...args: any[]) => void): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::recursive", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FileSelector extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FileSelector

    static name: string

    // Constructors of Arrow-1.0.Arrow.FileSelector

    constructor(config?: FileSelector.ConstructorProperties) 
    _init(config?: FileSelector.ConstructorProperties): void
}

export module FileSystem {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.FileSystem

        fileSystem?: any | null
    }

}

export interface FileSystem {

    // Own properties of Arrow-1.0.Arrow.FileSystem

    readonly fileSystem: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FileSystem

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FileSystem

    /**
     * Copy a file.
     * If the destination exists and is a directory, an error is returned.
     * Otherwise, it is replaced.
     * @param src The path of the source file.
     * @param dest The path of the destination.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    copyFile(src: string | null, dest: string | null): boolean
    /**
     * Create a directory and subdirectories.
     * This function succeeds if the directory already exists.
     * @param path The paths of the directory.
     * @param recursive Whether creating directory recursively or not.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    createDir(path: string | null, recursive: boolean): boolean
    /**
     * Delete a directory and its contents, recursively.
     * @param path The paths of the directory.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    deleteDir(path: string | null): boolean
    /**
     * Delete a directory's contents, recursively. Like
     * garrow_file_system_delete_dir(), but doesn't delete the directory
     * itself. Passing an empty path (`""`) will wipe the entire file
     * system tree.
     * @param path The paths of the directory.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    deleteDirContents(path: string | null): boolean
    /**
     * Delete a file.
     * @param path The paths of the file to be delete.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    deleteFile(path: string | null): boolean
    /**
     * Delete many files.
     * @param paths    The paths of the files to be delete.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    deleteFiles(paths: string[]): boolean
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
    getFileInfo(path: string | null): FileInfo | null
    /**
     * Get information same as garrow_file_system_get_file_info()
     * for the given many targets at once.
     * @param paths The paths of the targets.
     * @returns    A list of #GArrowFileInfo.
     */
    getFileInfosPaths(paths: string[]): FileInfo[]
    /**
     * Get information same as garrow_file_system_get_file_info()
     * according to a selector.
     * 
     * The selector's base directory will not be part of the results,
     * even if it exists.
     * @param fileSelector A #GArrowFileSelector.
     * @returns    A list of #GArrowFileInfo.
     */
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string | null
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
    openAppendStream(path: string | null): OutputStream | null
    /**
     * Open an input file for random access reading.
     * @param path The path of the input file.
     * @returns A newly created   #GArrowSeekableInputStream.
     */
    openInputFile(path: string | null): SeekableInputStream | null
    /**
     * Open an input stream for sequential reading.
     * @param path The path of the input stream.
     * @returns A newly created   #GArrowInputStream.
     */
    openInputStream(path: string | null): InputStream | null
    /**
     * Open an output stream for sequential writing.
     * If the target already exists, the existing data is truncated.
     * @param path The path of the output stream.
     * @returns A newly created   #GArrowOutputStream.
     */
    openOutputStream(path: string | null): OutputStream | null

    // Class property signals of Arrow-1.0.Arrow.FileSystem

    connect(sigName: "notify::file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FileSystem extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FileSystem

    static name: string

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

export module FilterOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.FilterOptions

        /**
         * How to handle filtered values.
         */
        nullSelectionBehavior?: FilterNullSelectionBehavior | null
    }

}

export interface FilterOptions {

    // Own properties of Arrow-1.0.Arrow.FilterOptions

    /**
     * How to handle filtered values.
     */
    nullSelectionBehavior: FilterNullSelectionBehavior
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FilterOptions

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.FilterOptions

    connect(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-selection-behavior", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FilterOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.FilterOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.FilterOptions

    constructor(config?: FilterOptions.ConstructorProperties) 
    constructor() 
    static new(): FilterOptions
    _init(config?: FilterOptions.ConstructorProperties): void
}

export module FixedSizeBinaryArray {

    // Constructor properties interface

    export interface ConstructorProperties extends PrimitiveArray.ConstructorProperties {
    }

}

export interface FixedSizeBinaryArray {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.FixedSizeBinaryArray

    getByteWidth(): number
    getValue(i: number): any
    getValuesBytes(): any

    // Class property signals of Arrow-1.0.Arrow.FixedSizeBinaryArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FixedSizeBinaryArray extends PrimitiveArray {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.FixedSizeBinaryArray

    constructor(config?: FixedSizeBinaryArray.ConstructorProperties) 
    constructor(dataType: FixedSizeBinaryDataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: FixedSizeBinaryDataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): FixedSizeBinaryArray
    _init(config?: FixedSizeBinaryArray.ConstructorProperties): void
}

export module FixedSizeBinaryArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface FixedSizeBinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    appendValue(value: Uint8Array | null): boolean
    appendValueBytes(value: any): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: any[], isValids: boolean[] | null): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * 
     * This is more efficient than
     * garrow_fixed_size_binary_array_builder_append_values().
     * @param values A #GBytes that contains multiple values.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValuesPacked(values: any, isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FixedSizeBinaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    constructor(config?: FixedSizeBinaryArrayBuilder.ConstructorProperties) 
    constructor(dataType: FixedSizeBinaryDataType) 
    static new(dataType: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder
    _init(config?: FixedSizeBinaryArrayBuilder.ConstructorProperties): void
}

export module FixedSizeBinaryDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends FixedWidthDataType.ConstructorProperties {
    }

}

export interface FixedSizeBinaryDataType {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    getByteWidth(): number

    // Class property signals of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FixedSizeBinaryDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    constructor(config?: FixedSizeBinaryDataType.ConstructorProperties) 
    constructor(byteWidth: number) 
    static new(byteWidth: number): FixedSizeBinaryDataType
    _init(config?: FixedSizeBinaryDataType.ConstructorProperties): void
}

export module FixedSizeBinaryScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseBinaryScalar.ConstructorProperties {
    }

}

export interface FixedSizeBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryScalar

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.FixedSizeBinaryScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FixedSizeBinaryScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.FixedSizeBinaryScalar

    constructor(config?: FixedSizeBinaryScalar.ConstructorProperties) 
    constructor(dataType: FixedSizeBinaryDataType, value: Buffer) 
    static new(dataType: FixedSizeBinaryDataType, value: Buffer): FixedSizeBinaryScalar
    _init(config?: FixedSizeBinaryScalar.ConstructorProperties): void
}

export module FixedWidthDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

export interface FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.FixedWidthDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FixedWidthDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.FixedWidthDataType

    getBitWidth(): number

    // Class property signals of Arrow-1.0.Arrow.FixedWidthDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FixedWidthDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.FixedWidthDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.FixedWidthDataType

    constructor(config?: FixedWidthDataType.ConstructorProperties) 
    _init(config?: FixedWidthDataType.ConstructorProperties): void
}

export module FloatArray {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface FloatArray {

    // Own properties of Arrow-1.0.Arrow.FloatArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FloatArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.FloatArray

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.FloatArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FloatArray extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.FloatArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.FloatArray

    constructor(config?: FloatArray.ConstructorProperties) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): FloatArray
    _init(config?: FloatArray.ConstructorProperties): void
}

export module FloatArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface FloatArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.FloatArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FloatArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.FloatArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of float.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.FloatArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FloatArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.FloatArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.FloatArrayBuilder

    constructor(config?: FloatArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): FloatArrayBuilder
    _init(config?: FloatArrayBuilder.ConstructorProperties): void
}

export module FloatDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends FloatingPointDataType.ConstructorProperties {
    }

}

export interface FloatDataType {

    // Own properties of Arrow-1.0.Arrow.FloatDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FloatDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.FloatDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FloatDataType extends FloatingPointDataType {

    // Own properties of Arrow-1.0.Arrow.FloatDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.FloatDataType

    constructor(config?: FloatDataType.ConstructorProperties) 
    constructor() 
    static new(): FloatDataType
    _init(config?: FloatDataType.ConstructorProperties): void
}

export module FloatScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface FloatScalar {

    // Own properties of Arrow-1.0.Arrow.FloatScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FloatScalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.FloatScalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.FloatScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FloatScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.FloatScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.FloatScalar

    constructor(config?: FloatScalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): FloatScalar
    _init(config?: FloatScalar.ConstructorProperties): void
}

export module FloatingPointDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericDataType.ConstructorProperties {
    }

}

export interface FloatingPointDataType {

    // Own properties of Arrow-1.0.Arrow.FloatingPointDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FloatingPointDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.FloatingPointDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FloatingPointDataType extends NumericDataType {

    // Own properties of Arrow-1.0.Arrow.FloatingPointDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.FloatingPointDataType

    constructor(config?: FloatingPointDataType.ConstructorProperties) 
    _init(config?: FloatingPointDataType.ConstructorProperties): void
}

export module Function {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Function

        "function"?: any | null
    }

}

export interface Function {

    // Own properties of Arrow-1.0.Arrow.Function

    readonly "function": any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Function

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Function

    equal(otherFunction: Function): boolean
    execute(args: Datum[], options: FunctionOptions | null, context: ExecuteContext | null): Datum | null
    getDefaultOptions(): FunctionOptions | null
    getDoc(): FunctionDoc
    getName(): string | null
    getOptionsType(): GObject.GType
    toString(): string | null

    // Class property signals of Arrow-1.0.Arrow.Function

    connect(sigName: "notify::function", callback: (...args: any[]) => void): number
    on(sigName: "notify::function", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::function", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::function", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::function", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Function extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Function

    static name: string

    // Constructors of Arrow-1.0.Arrow.Function

    constructor(config?: Function.ConstructorProperties) 
    _init(config?: Function.ConstructorProperties): void
    static all(): Function[]
    static find(name: string | null): Function
}

export module FunctionDoc {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.FunctionDoc

        doc?: any | null
    }

}

export interface FunctionDoc {

    // Own properties of Arrow-1.0.Arrow.FunctionDoc

    readonly doc: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FunctionDoc

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FunctionDoc

    getArgNames(): string[]
    getDescription(): string | null
    getOptionsClassName(): string | null
    getSummary(): string | null

    // Class property signals of Arrow-1.0.Arrow.FunctionDoc

    connect(sigName: "notify::doc", callback: (...args: any[]) => void): number
    on(sigName: "notify::doc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::doc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::doc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::doc", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FunctionDoc extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FunctionDoc

    static name: string

    // Constructors of Arrow-1.0.Arrow.FunctionDoc

    constructor(config?: FunctionDoc.ConstructorProperties) 
    _init(config?: FunctionDoc.ConstructorProperties): void
}

export module FunctionOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.FunctionOptions

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.FunctionOptions

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FunctionOptions

    equal(otherOptions: FunctionOptions | null): boolean
    toString(): string | null

    // Class property signals of Arrow-1.0.Arrow.FunctionOptions

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class FunctionOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FunctionOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.FunctionOptions

    constructor(config?: FunctionOptions.ConstructorProperties) 
    _init(config?: FunctionOptions.ConstructorProperties): void
}

export module GIOInputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, SeekableInputStream.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.GIOInputStream

        raw?: Gio.InputStream | null
    }

}

export interface GIOInputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.GIOInputStream

    readonly raw: Gio.InputStream
    __gtype__: number

    // Conflicting properties

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.GIOInputStream

    getRaw(): Gio.InputStream

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
    read(nBytes: number): Buffer | null
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
    readBytes(nBytes: number): any | null
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
    readBytes(count: number, cancellable: Gio.Cancellable | null): any

    // Class property signals of Arrow-1.0.Arrow.GIOInputStream

    connect(sigName: "notify::raw", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * It's an input stream for `GInputStream`.
 * @class 
 */
export class GIOInputStream extends SeekableInputStream {

    // Own properties of Arrow-1.0.Arrow.GIOInputStream

    static name: string

    // Constructors of Arrow-1.0.Arrow.GIOInputStream

    constructor(config?: GIOInputStream.ConstructorProperties) 
    constructor(gioInputStream: Gio.InputStream) 
    static new(gioInputStream: Gio.InputStream): GIOInputStream
    _init(config?: GIOInputStream.ConstructorProperties): void
}

export module GIOOutputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends File.ConstructorProperties, Writable.ConstructorProperties, OutputStream.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.GIOOutputStream

        raw?: Gio.OutputStream | null
    }

}

export interface GIOOutputStream extends File, Writable {

    // Own properties of Arrow-1.0.Arrow.GIOOutputStream

    readonly raw: Gio.OutputStream
    __gtype__: number

    // Owm methods of Arrow-1.0.Arrow.GIOOutputStream

    getRaw(): Gio.OutputStream

    // Class property signals of Arrow-1.0.Arrow.GIOOutputStream

    connect(sigName: "notify::raw", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::output-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * It's an output stream for `GOutputStream`.
 * @class 
 */
export class GIOOutputStream extends OutputStream {

    // Own properties of Arrow-1.0.Arrow.GIOOutputStream

    static name: string

    // Constructors of Arrow-1.0.Arrow.GIOOutputStream

    constructor(config?: GIOOutputStream.ConstructorProperties) 
    constructor(gioOutputStream: Gio.OutputStream) 
    static new(gioOutputStream: Gio.OutputStream): GIOOutputStream
    _init(config?: GIOOutputStream.ConstructorProperties): void
}

export module HDFSFileSystem {

    // Constructor properties interface

    export interface ConstructorProperties extends FileSystem.ConstructorProperties {
    }

}

export interface HDFSFileSystem {

    // Own properties of Arrow-1.0.Arrow.HDFSFileSystem

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.HDFSFileSystem

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.HDFSFileSystem

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class HDFSFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.HDFSFileSystem

    static name: string

    // Constructors of Arrow-1.0.Arrow.HDFSFileSystem

    constructor(config?: HDFSFileSystem.ConstructorProperties) 
    _init(config?: HDFSFileSystem.ConstructorProperties): void
}

export module HashJoinNodeOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends ExecuteNodeOptions.ConstructorProperties {
    }

}

export interface HashJoinNodeOptions {

    // Own properties of Arrow-1.0.Arrow.HashJoinNodeOptions

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.HashJoinNodeOptions

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.HashJoinNodeOptions

    setLeftOutputs(outputs: string[]): boolean
    setRightOutputs(outputs: string[]): boolean

    // Class property signals of Arrow-1.0.Arrow.HashJoinNodeOptions

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::options", callback: (...args: any[]) => void): number
    on(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class HashJoinNodeOptions extends ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.HashJoinNodeOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.HashJoinNodeOptions

    constructor(config?: HashJoinNodeOptions.ConstructorProperties) 
    constructor(type: JoinType, leftKeys: string[], rightKeys: string[]) 
    static new(type: JoinType, leftKeys: string[], rightKeys: string[]): HashJoinNodeOptions
    _init(config?: HashJoinNodeOptions.ConstructorProperties): void
}

export module InputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, Gio.InputStream.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.InputStream

        inputStream?: any | null
    }

}

export interface InputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.InputStream

    readonly inputStream: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.InputStream

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.InputStream

    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null

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
    read(nBytes: number): Buffer | null
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
    readBytes(nBytes: number): any | null
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
    readBytes(count: number, cancellable: Gio.Cancellable | null): any

    // Class property signals of Arrow-1.0.Arrow.InputStream

    connect(sigName: "notify::input-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class InputStream extends Gio.InputStream {

    // Own properties of Arrow-1.0.Arrow.InputStream

    static name: string

    // Constructors of Arrow-1.0.Arrow.InputStream

    constructor(config?: InputStream.ConstructorProperties) 
    _init(config?: InputStream.ConstructorProperties): void
}

export module Int16Array {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface Int16Array {

    // Own properties of Arrow-1.0.Arrow.Int16Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int16Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Int16Array

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.Int16Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int16Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Int16Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int16Array

    constructor(config?: Int16Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int16Array
    _init(config?: Int16Array.ConstructorProperties): void
}

export module Int16ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface Int16ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int16ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int16ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Int16ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int16.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Int16ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int16ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int16ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int16ArrayBuilder

    constructor(config?: Int16ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): Int16ArrayBuilder
    _init(config?: Int16ArrayBuilder.ConstructorProperties): void
}

export module Int16DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

export interface Int16DataType {

    // Own properties of Arrow-1.0.Arrow.Int16DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int16DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.Int16DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int16DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.Int16DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int16DataType

    constructor(config?: Int16DataType.ConstructorProperties) 
    constructor() 
    static new(): Int16DataType
    _init(config?: Int16DataType.ConstructorProperties): void
}

export module Int16Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface Int16Scalar {

    // Own properties of Arrow-1.0.Arrow.Int16Scalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int16Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Int16Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Int16Scalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int16Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Int16Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int16Scalar

    constructor(config?: Int16Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Int16Scalar
    _init(config?: Int16Scalar.ConstructorProperties): void
}

export module Int32Array {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface Int32Array {

    // Own properties of Arrow-1.0.Arrow.Int32Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int32Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Int32Array

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.Int32Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int32Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Int32Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int32Array

    constructor(config?: Int32Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int32Array
    _init(config?: Int32Array.ConstructorProperties): void
}

export module Int32ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface Int32ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int32ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int32ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Int32ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int32.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Int32ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int32ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int32ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int32ArrayBuilder

    constructor(config?: Int32ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): Int32ArrayBuilder
    _init(config?: Int32ArrayBuilder.ConstructorProperties): void
}

export module Int32DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

export interface Int32DataType {

    // Own properties of Arrow-1.0.Arrow.Int32DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int32DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.Int32DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int32DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.Int32DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int32DataType

    constructor(config?: Int32DataType.ConstructorProperties) 
    constructor() 
    static new(): Int32DataType
    _init(config?: Int32DataType.ConstructorProperties): void
}

export module Int32Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface Int32Scalar {

    // Own properties of Arrow-1.0.Arrow.Int32Scalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int32Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Int32Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Int32Scalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int32Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Int32Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int32Scalar

    constructor(config?: Int32Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Int32Scalar
    _init(config?: Int32Scalar.ConstructorProperties): void
}

export module Int64Array {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface Int64Array {

    // Own properties of Arrow-1.0.Arrow.Int64Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int64Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Int64Array

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.Int64Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int64Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Int64Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int64Array

    constructor(config?: Int64Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int64Array
    _init(config?: Int64Array.ConstructorProperties): void
}

export module Int64ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface Int64ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int64ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int64ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Int64ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int64.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Int64ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int64ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int64ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int64ArrayBuilder

    constructor(config?: Int64ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): Int64ArrayBuilder
    _init(config?: Int64ArrayBuilder.ConstructorProperties): void
}

export module Int64DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

export interface Int64DataType {

    // Own properties of Arrow-1.0.Arrow.Int64DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int64DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.Int64DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int64DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.Int64DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int64DataType

    constructor(config?: Int64DataType.ConstructorProperties) 
    constructor() 
    static new(): Int64DataType
    _init(config?: Int64DataType.ConstructorProperties): void
}

export module Int64Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface Int64Scalar {

    // Own properties of Arrow-1.0.Arrow.Int64Scalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int64Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Int64Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Int64Scalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int64Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Int64Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int64Scalar

    constructor(config?: Int64Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Int64Scalar
    _init(config?: Int64Scalar.ConstructorProperties): void
}

export module Int8Array {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface Int8Array {

    // Own properties of Arrow-1.0.Arrow.Int8Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int8Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Int8Array

    getValue(i: number): number
    getValues(): Uint8Array
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.Int8Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int8Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Int8Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int8Array

    constructor(config?: Int8Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int8Array
    _init(config?: Int8Array.ConstructorProperties): void
}

export module Int8ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface Int8ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int8ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int8ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Int8ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int8.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: Uint8Array, isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Int8ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int8ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int8ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int8ArrayBuilder

    constructor(config?: Int8ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): Int8ArrayBuilder
    _init(config?: Int8ArrayBuilder.ConstructorProperties): void
}

export module Int8DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

export interface Int8DataType {

    // Own properties of Arrow-1.0.Arrow.Int8DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int8DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.Int8DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int8DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.Int8DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int8DataType

    constructor(config?: Int8DataType.ConstructorProperties) 
    constructor() 
    static new(): Int8DataType
    _init(config?: Int8DataType.ConstructorProperties): void
}

export module Int8Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface Int8Scalar {

    // Own properties of Arrow-1.0.Arrow.Int8Scalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Int8Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Int8Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Int8Scalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Int8Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Int8Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.Int8Scalar

    constructor(config?: Int8Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): Int8Scalar
    _init(config?: Int8Scalar.ConstructorProperties): void
}

export module IntArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface IntArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.IntArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.IntArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.IntArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.IntArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class IntArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.IntArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.IntArrayBuilder

    constructor(config?: IntArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): IntArrayBuilder
    _init(config?: IntArrayBuilder.ConstructorProperties): void
}

export module IntegerDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericDataType.ConstructorProperties {
    }

}

export interface IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.IntegerDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.IntegerDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.IntegerDataType

    isSigned(): boolean

    // Class property signals of Arrow-1.0.Arrow.IntegerDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class IntegerDataType extends NumericDataType {

    // Own properties of Arrow-1.0.Arrow.IntegerDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.IntegerDataType

    constructor(config?: IntegerDataType.ConstructorProperties) 
    _init(config?: IntegerDataType.ConstructorProperties): void
}

export module IntervalDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends TemporalDataType.ConstructorProperties {
    }

}

export interface IntervalDataType {

    // Own properties of Arrow-1.0.Arrow.IntervalDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.IntervalDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.IntervalDataType

    getIntervalType(): IntervalType

    // Class property signals of Arrow-1.0.Arrow.IntervalDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class IntervalDataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.IntervalDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.IntervalDataType

    constructor(config?: IntervalDataType.ConstructorProperties) 
    _init(config?: IntervalDataType.ConstructorProperties): void
}

export module JSONReadOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.JSONReadOptions

        /**
         * Whether objects may be printed across multiple lines (for example pretty printed).
         * if %FALSE, input must end with an empty line.
         */
        allowNewlinesInValues?: boolean | null
        /**
         * Block size we request from the IO layer; also determines the size
         * of chunks when #GArrowJSONReadOptions:use-threads is %TRUE.
         */
        blockSize?: number | null
        /**
         * Schema for passing custom conversion rules.
         */
        schema?: Schema | null
        /**
         * How to parse handle fields outside the explicit schema.
         */
        unexpectedFieldBehavior?: JSONReadUnexpectedFieldBehavior | null
        /**
         * Whether to use the global CPU thread pool.
         */
        useThreads?: boolean | null
    }

}

export interface JSONReadOptions {

    // Own properties of Arrow-1.0.Arrow.JSONReadOptions

    /**
     * Whether objects may be printed across multiple lines (for example pretty printed).
     * if %FALSE, input must end with an empty line.
     */
    allowNewlinesInValues: boolean
    /**
     * Block size we request from the IO layer; also determines the size
     * of chunks when #GArrowJSONReadOptions:use-threads is %TRUE.
     */
    blockSize: number
    /**
     * Schema for passing custom conversion rules.
     */
    schema: Schema
    /**
     * How to parse handle fields outside the explicit schema.
     */
    unexpectedFieldBehavior: JSONReadUnexpectedFieldBehavior
    /**
     * Whether to use the global CPU thread pool.
     */
    useThreads: boolean
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.JSONReadOptions

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.JSONReadOptions

    connect(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-newlines-in-values", ...args: any[]): void
    connect(sigName: "notify::block-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::block-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::block-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::block-size", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: "notify::unexpected-field-behavior", callback: (...args: any[]) => void): number
    on(sigName: "notify::unexpected-field-behavior", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unexpected-field-behavior", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unexpected-field-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unexpected-field-behavior", ...args: any[]): void
    connect(sigName: "notify::use-threads", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-threads", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class JSONReadOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.JSONReadOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.JSONReadOptions

    constructor(config?: JSONReadOptions.ConstructorProperties) 
    constructor() 
    static new(): JSONReadOptions
    _init(config?: JSONReadOptions.ConstructorProperties): void
}

export module JSONReader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.JSONReader

        input?: InputStream | null
        jsonTableReader?: any | null
    }

}

export interface JSONReader {

    // Own properties of Arrow-1.0.Arrow.JSONReader

    readonly input: InputStream
    readonly jsonTableReader: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.JSONReader

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.JSONReader

    read(): Table | null

    // Class property signals of Arrow-1.0.Arrow.JSONReader

    connect(sigName: "notify::input", callback: (...args: any[]) => void): number
    on(sigName: "notify::input", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input", ...args: any[]): void
    connect(sigName: "notify::json-table-reader", callback: (...args: any[]) => void): number
    on(sigName: "notify::json-table-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::json-table-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::json-table-reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::json-table-reader", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class JSONReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.JSONReader

    static name: string

    // Constructors of Arrow-1.0.Arrow.JSONReader

    constructor(config?: JSONReader.ConstructorProperties) 
    constructor(input: InputStream, options: JSONReadOptions | null) 
    static new(input: InputStream, options: JSONReadOptions | null): JSONReader
    _init(config?: JSONReader.ConstructorProperties): void
}

export module LargeBinaryArray {

    // Constructor properties interface

    export interface ConstructorProperties extends Array.ConstructorProperties {
    }

}

export interface LargeBinaryArray {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LargeBinaryArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.LargeBinaryArray

    getBuffer(): Buffer
    getDataBuffer(): Buffer
    getOffsetsBuffer(): Buffer
    getValue(i: number): any

    // Class property signals of Arrow-1.0.Arrow.LargeBinaryArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LargeBinaryArray extends Array {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.LargeBinaryArray

    constructor(config?: LargeBinaryArray.ConstructorProperties) 
    constructor(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): LargeBinaryArray
    _init(config?: LargeBinaryArray.ConstructorProperties): void
}

export module LargeBinaryArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface LargeBinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    appendValue(value: Uint8Array): boolean
    appendValueBytes(value: any): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: any[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LargeBinaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    constructor(config?: LargeBinaryArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): LargeBinaryArrayBuilder
    _init(config?: LargeBinaryArrayBuilder.ConstructorProperties): void
}

export module LargeBinaryDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

export interface LargeBinaryDataType {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LargeBinaryDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.LargeBinaryDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LargeBinaryDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.LargeBinaryDataType

    constructor(config?: LargeBinaryDataType.ConstructorProperties) 
    constructor() 
    static new(): LargeBinaryDataType
    _init(config?: LargeBinaryDataType.ConstructorProperties): void
}

export module LargeBinaryScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseBinaryScalar.ConstructorProperties {
    }

}

export interface LargeBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LargeBinaryScalar

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.LargeBinaryScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LargeBinaryScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.LargeBinaryScalar

    constructor(config?: LargeBinaryScalar.ConstructorProperties) 
    constructor(value: Buffer) 
    static new(value: Buffer): LargeBinaryScalar
    _init(config?: LargeBinaryScalar.ConstructorProperties): void
}

export module LargeListArray {

    // Constructor properties interface

    export interface ConstructorProperties extends Array.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.LargeListArray

        rawValues?: Array | null
    }

}

export interface LargeListArray {

    // Own properties of Arrow-1.0.Arrow.LargeListArray

    readonly rawValues: Array
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LargeListArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.LargeListArray

    getValue(i: number): Array
    getValueLength(i: number): number
    getValueOffset(i: number): number
    getValueOffsets(): number[]
    getValueType(): DataType

    // Overloads of getValueType

    getValueType(): Type
    getValues(): Array

    // Class property signals of Arrow-1.0.Arrow.LargeListArray

    connect(sigName: "notify::raw-values", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw-values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw-values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw-values", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LargeListArray extends Array {

    // Own properties of Arrow-1.0.Arrow.LargeListArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.LargeListArray

    constructor(config?: LargeListArray.ConstructorProperties) 
    constructor(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number): LargeListArray
    _init(config?: LargeListArray.ConstructorProperties): void
}

export module LargeListArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface LargeListArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.LargeListArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LargeListArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.LargeListArrayBuilder

    appendValue(): boolean
    getValueBuilder(): ArrayBuilder

    // Class property signals of Arrow-1.0.Arrow.LargeListArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LargeListArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.LargeListArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.LargeListArrayBuilder

    constructor(config?: LargeListArrayBuilder.ConstructorProperties) 
    constructor(dataType: LargeListDataType) 
    static new(dataType: LargeListDataType): LargeListArrayBuilder
    _init(config?: LargeListArrayBuilder.ConstructorProperties): void
}

export module LargeListDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

export interface LargeListDataType {

    // Own properties of Arrow-1.0.Arrow.LargeListDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LargeListDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.LargeListDataType

    getField(): Field

    // Class property signals of Arrow-1.0.Arrow.LargeListDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LargeListDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.LargeListDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.LargeListDataType

    constructor(config?: LargeListDataType.ConstructorProperties) 
    constructor(field: Field) 
    static new(field: Field): LargeListDataType
    _init(config?: LargeListDataType.ConstructorProperties): void
}

export module LargeListScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseListScalar.ConstructorProperties {
    }

}

export interface LargeListScalar {

    // Own properties of Arrow-1.0.Arrow.LargeListScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LargeListScalar

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.LargeListScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LargeListScalar extends BaseListScalar {

    // Own properties of Arrow-1.0.Arrow.LargeListScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.LargeListScalar

    constructor(config?: LargeListScalar.ConstructorProperties) 
    constructor(value: LargeListArray) 
    static new(value: LargeListArray): LargeListScalar
    _init(config?: LargeListScalar.ConstructorProperties): void
}

export module LargeStringArray {

    // Constructor properties interface

    export interface ConstructorProperties extends LargeBinaryArray.ConstructorProperties {
    }

}

export interface LargeStringArray {

    // Own properties of Arrow-1.0.Arrow.LargeStringArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LargeStringArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.LargeStringArray

    getString(i: number): string | null

    // Class property signals of Arrow-1.0.Arrow.LargeStringArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LargeStringArray extends LargeBinaryArray {

    // Own properties of Arrow-1.0.Arrow.LargeStringArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.LargeStringArray

    constructor(config?: LargeStringArray.ConstructorProperties) 
    constructor(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): LargeStringArray

    // Overloads of new

    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): LargeBinaryArray
    _init(config?: LargeStringArray.ConstructorProperties): void
}

export module LargeStringArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends LargeBinaryArrayBuilder.ConstructorProperties {
    }

}

export interface LargeStringArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.LargeStringArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LargeStringArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.LargeStringArrayBuilder

    appendString(value: string | null): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of strings.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendStrings(values: string[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.LargeStringArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LargeStringArrayBuilder extends LargeBinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.LargeStringArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.LargeStringArrayBuilder

    constructor(config?: LargeStringArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): LargeStringArrayBuilder

    // Overloads of new

    static new(): LargeBinaryArrayBuilder
    _init(config?: LargeStringArrayBuilder.ConstructorProperties): void
}

export module LargeStringDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

export interface LargeStringDataType {

    // Own properties of Arrow-1.0.Arrow.LargeStringDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LargeStringDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.LargeStringDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LargeStringDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.LargeStringDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.LargeStringDataType

    constructor(config?: LargeStringDataType.ConstructorProperties) 
    constructor() 
    static new(): LargeStringDataType
    _init(config?: LargeStringDataType.ConstructorProperties): void
}

export module LargeStringScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseBinaryScalar.ConstructorProperties {
    }

}

export interface LargeStringScalar {

    // Own properties of Arrow-1.0.Arrow.LargeStringScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LargeStringScalar

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.LargeStringScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LargeStringScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.LargeStringScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.LargeStringScalar

    constructor(config?: LargeStringScalar.ConstructorProperties) 
    constructor(value: Buffer) 
    static new(value: Buffer): LargeStringScalar
    _init(config?: LargeStringScalar.ConstructorProperties): void
}

export module ListArray {

    // Constructor properties interface

    export interface ConstructorProperties extends Array.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ListArray

        rawValues?: Array | null
    }

}

export interface ListArray {

    // Own properties of Arrow-1.0.Arrow.ListArray

    readonly rawValues: Array
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ListArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.ListArray

    getValue(i: number): Array
    getValueLength(i: number): number
    getValueOffset(i: number): number
    getValueOffsets(): number[]
    getValueType(): DataType

    // Overloads of getValueType

    getValueType(): Type
    getValues(): Array

    // Class property signals of Arrow-1.0.Arrow.ListArray

    connect(sigName: "notify::raw-values", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw-values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw-values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw-values", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ListArray extends Array {

    // Own properties of Arrow-1.0.Arrow.ListArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.ListArray

    constructor(config?: ListArray.ConstructorProperties) 
    constructor(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number): ListArray
    _init(config?: ListArray.ConstructorProperties): void
}

export module ListArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface ListArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.ListArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ListArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.ListArrayBuilder

    append(): boolean
    appendValue(): boolean
    getValueBuilder(): ArrayBuilder

    // Class property signals of Arrow-1.0.Arrow.ListArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ListArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.ListArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.ListArrayBuilder

    constructor(config?: ListArrayBuilder.ConstructorProperties) 
    constructor(dataType: ListDataType) 
    static new(dataType: ListDataType): ListArrayBuilder
    _init(config?: ListArrayBuilder.ConstructorProperties): void
}

export module ListDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

export interface ListDataType {

    // Own properties of Arrow-1.0.Arrow.ListDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ListDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.ListDataType

    getField(): Field
    getValueField(): Field

    // Class property signals of Arrow-1.0.Arrow.ListDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ListDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.ListDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.ListDataType

    constructor(config?: ListDataType.ConstructorProperties) 
    constructor(field: Field) 
    static new(field: Field): ListDataType
    _init(config?: ListDataType.ConstructorProperties): void
}

export module ListScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseListScalar.ConstructorProperties {
    }

}

export interface ListScalar {

    // Own properties of Arrow-1.0.Arrow.ListScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ListScalar

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.ListScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ListScalar extends BaseListScalar {

    // Own properties of Arrow-1.0.Arrow.ListScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.ListScalar

    constructor(config?: ListScalar.ConstructorProperties) 
    constructor(value: ListArray) 
    static new(value: ListArray): ListScalar
    _init(config?: ListScalar.ConstructorProperties): void
}

export module LiteralExpression {

    // Constructor properties interface

    export interface ConstructorProperties extends Expression.ConstructorProperties {
    }

}

export interface LiteralExpression {

    // Own properties of Arrow-1.0.Arrow.LiteralExpression

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LiteralExpression

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.LiteralExpression

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LiteralExpression extends Expression {

    // Own properties of Arrow-1.0.Arrow.LiteralExpression

    static name: string

    // Constructors of Arrow-1.0.Arrow.LiteralExpression

    constructor(config?: LiteralExpression.ConstructorProperties) 
    constructor(datum: Datum) 
    static new(datum: Datum): LiteralExpression
    _init(config?: LiteralExpression.ConstructorProperties): void
}

export module LocalFileSystem {

    // Constructor properties interface

    export interface ConstructorProperties extends FileSystem.ConstructorProperties {
    }

}

export interface LocalFileSystem {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystem

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LocalFileSystem

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.LocalFileSystem

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LocalFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystem

    static name: string

    // Constructors of Arrow-1.0.Arrow.LocalFileSystem

    constructor(config?: LocalFileSystem.ConstructorProperties) 
    constructor(options: LocalFileSystemOptions | null) 
    static new(options: LocalFileSystemOptions | null): LocalFileSystem
    _init(config?: LocalFileSystem.ConstructorProperties): void
}

export module LocalFileSystemOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.LocalFileSystemOptions

        /**
         * Whether open_input_stream and open_input_file return a mmap'ed file,
         * or a regular one.
         */
        useMmap?: boolean | null
    }

}

export interface LocalFileSystemOptions {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystemOptions

    /**
     * Whether open_input_stream and open_input_file return a mmap'ed file,
     * or a regular one.
     */
    useMmap: boolean
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.LocalFileSystemOptions

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.LocalFileSystemOptions

    connect(sigName: "notify::use-mmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-mmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-mmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-mmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-mmap", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class LocalFileSystemOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystemOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.LocalFileSystemOptions

    constructor(config?: LocalFileSystemOptions.ConstructorProperties) 
    constructor() 
    static new(): LocalFileSystemOptions
    _init(config?: LocalFileSystemOptions.ConstructorProperties): void
}

export module MapArray {

    // Constructor properties interface

    export interface ConstructorProperties extends ListArray.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.MapArray

        items?: Array | null
        keys?: Array | null
        offsets?: Array | null
    }

}

export interface MapArray {

    // Own properties of Arrow-1.0.Arrow.MapArray

    readonly items: Array
    readonly keys: Array
    readonly offsets: Array
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.MapArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.MapArray

    getItems(): Array
    getKeys(): Array

    // Conflicting methods

    getValueType(): DataType

    // Overloads of getValueType

    getValueType(): Type
    getValueType(): Type

    // Class property signals of Arrow-1.0.Arrow.MapArray

    connect(sigName: "notify::items", callback: (...args: any[]) => void): number
    on(sigName: "notify::items", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::items", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::items", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::items", ...args: any[]): void
    connect(sigName: "notify::keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::offsets", callback: (...args: any[]) => void): number
    on(sigName: "notify::offsets", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offsets", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offsets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offsets", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::raw-values", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw-values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw-values", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw-values", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MapArray extends ListArray {

    // Own properties of Arrow-1.0.Arrow.MapArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.MapArray

    constructor(config?: MapArray.ConstructorProperties) 
    constructor(offsets: Array, keys: Array, items: Array) 
    static new(offsets: Array, keys: Array, items: Array): MapArray

    // Overloads of new

    static new(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number): ListArray
    _init(config?: MapArray.ConstructorProperties): void
}

export module MapArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface MapArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.MapArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.MapArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.MapArrayBuilder

    appendValue(): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param offsets The array of signed int.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(offsets: number[], isValids: boolean[] | null): boolean
    getItemBuilder(): ArrayBuilder
    getKeyBuilder(): ArrayBuilder
    getValueBuilder(): ArrayBuilder

    // Class property signals of Arrow-1.0.Arrow.MapArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MapArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.MapArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.MapArrayBuilder

    constructor(config?: MapArrayBuilder.ConstructorProperties) 
    constructor(dataType: MapDataType) 
    static new(dataType: MapDataType): MapArrayBuilder
    _init(config?: MapArrayBuilder.ConstructorProperties): void
}

export module MapDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends ListDataType.ConstructorProperties {
    }

}

export interface MapDataType {

    // Own properties of Arrow-1.0.Arrow.MapDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.MapDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.MapDataType

    getItemType(): DataType
    getKeyType(): DataType

    // Class property signals of Arrow-1.0.Arrow.MapDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MapDataType extends ListDataType {

    // Own properties of Arrow-1.0.Arrow.MapDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.MapDataType

    constructor(config?: MapDataType.ConstructorProperties) 
    constructor(keyType: DataType, itemType: DataType) 
    static new(keyType: DataType, itemType: DataType): MapDataType

    // Overloads of new

    static new(field: Field): ListDataType
    _init(config?: MapDataType.ConstructorProperties): void
}

export module MapScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseListScalar.ConstructorProperties {
    }

}

export interface MapScalar {

    // Own properties of Arrow-1.0.Arrow.MapScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.MapScalar

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.MapScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MapScalar extends BaseListScalar {

    // Own properties of Arrow-1.0.Arrow.MapScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.MapScalar

    constructor(config?: MapScalar.ConstructorProperties) 
    constructor(value: StructArray) 
    static new(value: StructArray): MapScalar
    _init(config?: MapScalar.ConstructorProperties): void
}

export module MemoryMappedInputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, SeekableInputStream.ConstructorProperties {
    }

}

export interface MemoryMappedInputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.MemoryMappedInputStream

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.MemoryMappedInputStream

    parentInstance: any

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
    read(nBytes: number): Buffer | null
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
    readBytes(nBytes: number): any | null
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
    readBytes(count: number, cancellable: Gio.Cancellable | null): any

    // Class property signals of Arrow-1.0.Arrow.MemoryMappedInputStream

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MemoryMappedInputStream extends SeekableInputStream {

    // Own properties of Arrow-1.0.Arrow.MemoryMappedInputStream

    static name: string

    // Constructors of Arrow-1.0.Arrow.MemoryMappedInputStream

    constructor(config?: MemoryMappedInputStream.ConstructorProperties) 
    constructor(path: string | null) 
    static new(path: string | null): MemoryMappedInputStream
    _init(config?: MemoryMappedInputStream.ConstructorProperties): void
}

export module MockFileSystem {

    // Constructor properties interface

    export interface ConstructorProperties extends FileSystem.ConstructorProperties {
    }

}

export interface MockFileSystem {

    // Own properties of Arrow-1.0.Arrow.MockFileSystem

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.MockFileSystem

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.MockFileSystem

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MockFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.MockFileSystem

    static name: string

    // Constructors of Arrow-1.0.Arrow.MockFileSystem

    constructor(config?: MockFileSystem.ConstructorProperties) 
    _init(config?: MockFileSystem.ConstructorProperties): void
}

export module MonthDayNanoIntervalDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends IntervalDataType.ConstructorProperties {
    }

}

export interface MonthDayNanoIntervalDataType {

    // Own properties of Arrow-1.0.Arrow.MonthDayNanoIntervalDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.MonthDayNanoIntervalDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.MonthDayNanoIntervalDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MonthDayNanoIntervalDataType extends IntervalDataType {

    // Own properties of Arrow-1.0.Arrow.MonthDayNanoIntervalDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.MonthDayNanoIntervalDataType

    constructor(config?: MonthDayNanoIntervalDataType.ConstructorProperties) 
    constructor() 
    static new(): MonthDayNanoIntervalDataType
    _init(config?: MonthDayNanoIntervalDataType.ConstructorProperties): void
}

export module MonthIntervalDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends IntervalDataType.ConstructorProperties {
    }

}

export interface MonthIntervalDataType {

    // Own properties of Arrow-1.0.Arrow.MonthIntervalDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.MonthIntervalDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.MonthIntervalDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MonthIntervalDataType extends IntervalDataType {

    // Own properties of Arrow-1.0.Arrow.MonthIntervalDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.MonthIntervalDataType

    constructor(config?: MonthIntervalDataType.ConstructorProperties) 
    constructor() 
    static new(): MonthIntervalDataType
    _init(config?: MonthIntervalDataType.ConstructorProperties): void
}

export module MutableBuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends Buffer.ConstructorProperties {
    }

}

export interface MutableBuffer {

    // Own properties of Arrow-1.0.Arrow.MutableBuffer

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.MutableBuffer

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.MutableBuffer

    setData(offset: number, data: Uint8Array): boolean

    // Overloads of setData

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
    setData(key: string | null, data: any | null): void
    slice(offset: number, size: number): MutableBuffer

    // Overloads of slice

    slice(offset: number, size: number): Buffer

    // Conflicting methods

    getData(): any

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string | null): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string | null): any | null

    // Class property signals of Arrow-1.0.Arrow.MutableBuffer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class MutableBuffer extends Buffer {

    // Own properties of Arrow-1.0.Arrow.MutableBuffer

    static name: string

    // Constructors of Arrow-1.0.Arrow.MutableBuffer

    constructor(config?: MutableBuffer.ConstructorProperties) 
    constructor(data: Uint8Array) 
    static new(data: Uint8Array): MutableBuffer

    // Overloads of new

    static new(data: Uint8Array): Buffer
    static newBytes(data: any): MutableBuffer

    // Overloads of newBytes

    static newBytes(data: any): Buffer
    _init(config?: MutableBuffer.ConstructorProperties): void
}

export module NullArray {

    // Constructor properties interface

    export interface ConstructorProperties extends Array.ConstructorProperties {
    }

}

export interface NullArray {

    // Own properties of Arrow-1.0.Arrow.NullArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.NullArray

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.NullArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class NullArray extends Array {

    // Own properties of Arrow-1.0.Arrow.NullArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.NullArray

    constructor(config?: NullArray.ConstructorProperties) 
    constructor(length: number) 
    static new(length: number): NullArray
    _init(config?: NullArray.ConstructorProperties): void
}

export module NullArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface NullArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.NullArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.NullArrayBuilder

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.NullArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class NullArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.NullArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.NullArrayBuilder

    constructor(config?: NullArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): NullArrayBuilder
    _init(config?: NullArrayBuilder.ConstructorProperties): void
}

export module NullDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

export interface NullDataType {

    // Own properties of Arrow-1.0.Arrow.NullDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.NullDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.NullDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class NullDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.NullDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.NullDataType

    constructor(config?: NullDataType.ConstructorProperties) 
    constructor() 
    static new(): NullDataType
    _init(config?: NullDataType.ConstructorProperties): void
}

export module NullScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface NullScalar {

    // Own properties of Arrow-1.0.Arrow.NullScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.NullScalar

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.NullScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class NullScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.NullScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.NullScalar

    constructor(config?: NullScalar.ConstructorProperties) 
    constructor() 
    static new(): NullScalar
    _init(config?: NullScalar.ConstructorProperties): void
}

export module NumericArray {

    // Constructor properties interface

    export interface ConstructorProperties extends PrimitiveArray.ConstructorProperties {
    }

}

export interface NumericArray {

    // Own properties of Arrow-1.0.Arrow.NumericArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.NumericArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.NumericArray

    mean(): number

    // Class property signals of Arrow-1.0.Arrow.NumericArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class NumericArray extends PrimitiveArray {

    // Own properties of Arrow-1.0.Arrow.NumericArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.NumericArray

    constructor(config?: NumericArray.ConstructorProperties) 
    _init(config?: NumericArray.ConstructorProperties): void
}

export module NumericDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends FixedWidthDataType.ConstructorProperties {
    }

}

export interface NumericDataType {

    // Own properties of Arrow-1.0.Arrow.NumericDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.NumericDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.NumericDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class NumericDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.NumericDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.NumericDataType

    constructor(config?: NumericDataType.ConstructorProperties) 
    _init(config?: NumericDataType.ConstructorProperties): void
}

export module OutputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends File.ConstructorProperties, Writable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.OutputStream

        outputStream?: any | null
    }

}

export interface OutputStream extends File, Writable {

    // Own properties of Arrow-1.0.Arrow.OutputStream

    readonly outputStream: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.OutputStream

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.OutputStream

    align(alignment: number): boolean
    writeRecordBatch(recordBatch: RecordBatch, options: WriteOptions | null): number
    writeTensor(tensor: Tensor): number

    // Class property signals of Arrow-1.0.Arrow.OutputStream

    connect(sigName: "notify::output-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class OutputStream extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.OutputStream

    static name: string

    // Constructors of Arrow-1.0.Arrow.OutputStream

    constructor(config?: OutputStream.ConstructorProperties) 
    _init(config?: OutputStream.ConstructorProperties): void
}

export module PrimitiveArray {

    // Constructor properties interface

    export interface ConstructorProperties extends Array.ConstructorProperties {
    }

}

export interface PrimitiveArray {

    // Own properties of Arrow-1.0.Arrow.PrimitiveArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.PrimitiveArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.PrimitiveArray

    getBuffer(): Buffer
    getDataBuffer(): Buffer

    // Class property signals of Arrow-1.0.Arrow.PrimitiveArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class PrimitiveArray extends Array {

    // Own properties of Arrow-1.0.Arrow.PrimitiveArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.PrimitiveArray

    constructor(config?: PrimitiveArray.ConstructorProperties) 
    _init(config?: PrimitiveArray.ConstructorProperties): void
}

export module ReadOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ReadOptions

        /**
         * The maximum permitted schema nesting depth.
         */
        maxRecursionDepth?: number | null
        /**
         * Whether to use the global CPU thread pool.
         */
        useThreads?: boolean | null
    }

}

export interface ReadOptions {

    // Own properties of Arrow-1.0.Arrow.ReadOptions

    /**
     * The maximum permitted schema nesting depth.
     */
    maxRecursionDepth: number
    /**
     * Whether to use the global CPU thread pool.
     */
    useThreads: boolean
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ReadOptions

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ReadOptions

    getIncludedFields(): number[]
    setIncludedFields(fields: number[]): void

    // Class property signals of Arrow-1.0.Arrow.ReadOptions

    connect(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-recursion-depth", ...args: any[]): void
    connect(sigName: "notify::use-threads", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-threads", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ReadOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ReadOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.ReadOptions

    constructor(config?: ReadOptions.ConstructorProperties) 
    constructor() 
    static new(): ReadOptions
    _init(config?: ReadOptions.ConstructorProperties): void
}

export module RecordBatch {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatch

        recordBatch?: any | null
    }

}

export interface RecordBatch {

    // Own properties of Arrow-1.0.Arrow.RecordBatch

    readonly recordBatch: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.RecordBatch

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.RecordBatch

    addColumn(i: number, field: Field, column: Array): RecordBatch | null
    equal(otherRecordBatch: RecordBatch): boolean
    equalMetadata(otherRecordBatch: RecordBatch, checkMetadata: boolean): boolean
    export(): [ /* returnType */ boolean, /* cAbiArray */ any | null, /* cAbiSchema */ any | null ]
    filter(filter: BooleanArray, options: FilterOptions | null): RecordBatch | null
    getColumnData(i: number): Array | null
    getColumnName(i: number): string | null
    getNColumns(): number
    getNRows(): number
    getSchema(): Schema
    removeColumn(i: number): RecordBatch | null
    serialize(options: WriteOptions | null): Buffer | null
    slice(offset: number, length: number): RecordBatch
    sortIndices(options: SortOptions): UInt64Array | null
    take(indices: Array, options: TakeOptions | null): RecordBatch | null
    toString(): string | null

    // Class property signals of Arrow-1.0.Arrow.RecordBatch

    connect(sigName: "notify::record-batch", callback: (...args: any[]) => void): number
    on(sigName: "notify::record-batch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::record-batch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::record-batch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::record-batch", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class RecordBatch extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatch

    static name: string

    // Constructors of Arrow-1.0.Arrow.RecordBatch

    constructor(config?: RecordBatch.ConstructorProperties) 
    constructor(schema: Schema, nRows: number, columns: Array[]) 
    static new(schema: Schema, nRows: number, columns: Array[]): RecordBatch
    _init(config?: RecordBatch.ConstructorProperties): void
    static import(cAbiArray: any, schema: Schema): RecordBatch | null
}

export module RecordBatchBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatchBuilder

        recordBatchBuilder?: any | null
    }

}

export interface RecordBatchBuilder {

    // Own properties of Arrow-1.0.Arrow.RecordBatchBuilder

    readonly recordBatchBuilder: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.RecordBatchBuilder

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.RecordBatchBuilder

    flush(): RecordBatch
    getColumnBuilder(i: number): ArrayBuilder | null
    getField(i: number): ArrayBuilder | null
    getInitialCapacity(): number
    getNColumns(): number
    getNFields(): number
    getSchema(): Schema
    setInitialCapacity(capacity: number): void

    // Class property signals of Arrow-1.0.Arrow.RecordBatchBuilder

    connect(sigName: "notify::record-batch-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::record-batch-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::record-batch-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::record-batch-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::record-batch-builder", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class RecordBatchBuilder extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.RecordBatchBuilder

    constructor(config?: RecordBatchBuilder.ConstructorProperties) 
    constructor(schema: Schema) 
    static new(schema: Schema): RecordBatchBuilder
    _init(config?: RecordBatchBuilder.ConstructorProperties): void
}

export module RecordBatchDatum {

    // Constructor properties interface

    export interface ConstructorProperties extends Datum.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatchDatum

        value?: RecordBatch | null
    }

}

export interface RecordBatchDatum {

    // Own properties of Arrow-1.0.Arrow.RecordBatchDatum

    readonly value: RecordBatch
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.RecordBatchDatum

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.RecordBatchDatum

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::datum", callback: (...args: any[]) => void): number
    on(sigName: "notify::datum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::datum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::datum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::datum", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class RecordBatchDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.RecordBatchDatum

    static name: string

    // Constructors of Arrow-1.0.Arrow.RecordBatchDatum

    constructor(config?: RecordBatchDatum.ConstructorProperties) 
    constructor(value: RecordBatch) 
    static new(value: RecordBatch): RecordBatchDatum
    _init(config?: RecordBatchDatum.ConstructorProperties): void
}

export module RecordBatchFileReader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatchFileReader

        recordBatchFileReader?: any | null
    }

}

export interface RecordBatchFileReader {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileReader

    readonly recordBatchFileReader: any
    __gtype__: number

    // Owm methods of Arrow-1.0.Arrow.RecordBatchFileReader

    getNRecordBatches(): number
    getRecordBatch(i: number): RecordBatch | null
    getSchema(): Schema
    getVersion(): MetadataVersion
    readRecordBatch(i: number): RecordBatch | null

    // Class property signals of Arrow-1.0.Arrow.RecordBatchFileReader

    connect(sigName: "notify::record-batch-file-reader", callback: (...args: any[]) => void): number
    on(sigName: "notify::record-batch-file-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::record-batch-file-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::record-batch-file-reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::record-batch-file-reader", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * It wraps `arrow::ipc::RecordBatchFileReader`.
 * @class 
 */
export class RecordBatchFileReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileReader

    static name: string

    // Constructors of Arrow-1.0.Arrow.RecordBatchFileReader

    constructor(config?: RecordBatchFileReader.ConstructorProperties) 
    constructor(file: SeekableInputStream) 
    static new(file: SeekableInputStream): RecordBatchFileReader
    _init(config?: RecordBatchFileReader.ConstructorProperties): void
}

export module RecordBatchFileWriter {

    // Constructor properties interface

    export interface ConstructorProperties extends RecordBatchStreamWriter.ConstructorProperties {
    }

}

export interface RecordBatchFileWriter {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileWriter

    __gtype__: number

    // Class property signals of Arrow-1.0.Arrow.RecordBatchFileWriter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::record-batch-writer", callback: (...args: any[]) => void): number
    on(sigName: "notify::record-batch-writer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::record-batch-writer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::record-batch-writer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::record-batch-writer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * It wraps `arrow::ipc::RecordBatchFileWriter`.
 * @class 
 */
export class RecordBatchFileWriter extends RecordBatchStreamWriter {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileWriter

    static name: string

    // Constructors of Arrow-1.0.Arrow.RecordBatchFileWriter

    constructor(config?: RecordBatchFileWriter.ConstructorProperties) 
    constructor(sink: OutputStream, schema: Schema) 
    static new(sink: OutputStream, schema: Schema): RecordBatchFileWriter

    // Overloads of new

    static new(sink: OutputStream, schema: Schema): RecordBatchStreamWriter
    _init(config?: RecordBatchFileWriter.ConstructorProperties): void
}

export module RecordBatchIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatchIterator

        iterator?: any | null
    }

}

export interface RecordBatchIterator {

    // Own properties of Arrow-1.0.Arrow.RecordBatchIterator

    readonly iterator: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.RecordBatchIterator

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.RecordBatchIterator

    equal(otherIterator: RecordBatchIterator): boolean
    next(): RecordBatch | null
    toList(): RecordBatch[]

    // Class property signals of Arrow-1.0.Arrow.RecordBatchIterator

    connect(sigName: "notify::iterator", callback: (...args: any[]) => void): number
    on(sigName: "notify::iterator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::iterator", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::iterator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::iterator", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class RecordBatchIterator extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchIterator

    static name: string

    // Constructors of Arrow-1.0.Arrow.RecordBatchIterator

    constructor(config?: RecordBatchIterator.ConstructorProperties) 
    constructor(recordBatches: RecordBatch[]) 
    static new(recordBatches: RecordBatch[]): RecordBatchIterator
    _init(config?: RecordBatchIterator.ConstructorProperties): void
}

export module RecordBatchReader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatchReader

        recordBatchReader?: any | null
    }

}

export interface RecordBatchReader {

    // Own properties of Arrow-1.0.Arrow.RecordBatchReader

    readonly recordBatchReader: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.RecordBatchReader

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.RecordBatchReader

    export(): any | null
    getNextRecordBatch(): RecordBatch | null
    getSchema(): Schema
    readAll(): Table | null
    readNext(): RecordBatch | null
    readNextRecordBatch(): RecordBatch | null

    // Class property signals of Arrow-1.0.Arrow.RecordBatchReader

    connect(sigName: "notify::record-batch-reader", callback: (...args: any[]) => void): number
    on(sigName: "notify::record-batch-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::record-batch-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::record-batch-reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::record-batch-reader", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class RecordBatchReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchReader

    static name: string

    // Constructors of Arrow-1.0.Arrow.RecordBatchReader

    constructor(config?: RecordBatchReader.ConstructorProperties) 
    constructor(recordBatches: RecordBatch[], schema: Schema | null) 
    static new(recordBatches: RecordBatch[], schema: Schema | null): RecordBatchReader
    _init(config?: RecordBatchReader.ConstructorProperties): void
    static import(cAbiArrayStream: any): RecordBatchReader | null
}

export module RecordBatchStreamReader {

    // Constructor properties interface

    export interface ConstructorProperties extends RecordBatchReader.ConstructorProperties {
    }

}

export interface RecordBatchStreamReader {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamReader

    __gtype__: number

    // Class property signals of Arrow-1.0.Arrow.RecordBatchStreamReader

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::record-batch-reader", callback: (...args: any[]) => void): number
    on(sigName: "notify::record-batch-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::record-batch-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::record-batch-reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::record-batch-reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * It wraps `arrow::ipc::RecordBatchStreamReader`.
 * @class 
 */
export class RecordBatchStreamReader extends RecordBatchReader {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamReader

    static name: string

    // Constructors of Arrow-1.0.Arrow.RecordBatchStreamReader

    constructor(config?: RecordBatchStreamReader.ConstructorProperties) 
    constructor(stream: InputStream) 
    static new(stream: InputStream): RecordBatchStreamReader

    // Overloads of new

    static new(recordBatches: RecordBatch[], schema: Schema | null): RecordBatchReader
    _init(config?: RecordBatchStreamReader.ConstructorProperties): void
}

export module RecordBatchStreamWriter {

    // Constructor properties interface

    export interface ConstructorProperties extends RecordBatchWriter.ConstructorProperties {
    }

}

export interface RecordBatchStreamWriter {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamWriter

    __gtype__: number

    // Class property signals of Arrow-1.0.Arrow.RecordBatchStreamWriter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::record-batch-writer", callback: (...args: any[]) => void): number
    on(sigName: "notify::record-batch-writer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::record-batch-writer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::record-batch-writer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::record-batch-writer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * It wraps `arrow::ipc::RecordBatchStreamWriter`.
 * @class 
 */
export class RecordBatchStreamWriter extends RecordBatchWriter {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamWriter

    static name: string

    // Constructors of Arrow-1.0.Arrow.RecordBatchStreamWriter

    constructor(config?: RecordBatchStreamWriter.ConstructorProperties) 
    constructor(sink: OutputStream, schema: Schema) 
    static new(sink: OutputStream, schema: Schema): RecordBatchStreamWriter
    _init(config?: RecordBatchStreamWriter.ConstructorProperties): void
}

export module RecordBatchWriter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RecordBatchWriter

        recordBatchWriter?: any | null
    }

}

export interface RecordBatchWriter {

    // Own properties of Arrow-1.0.Arrow.RecordBatchWriter

    readonly recordBatchWriter: any
    __gtype__: number

    // Owm methods of Arrow-1.0.Arrow.RecordBatchWriter

    close(): boolean
    writeRecordBatch(recordBatch: RecordBatch): boolean
    writeTable(table: Table): boolean

    // Class property signals of Arrow-1.0.Arrow.RecordBatchWriter

    connect(sigName: "notify::record-batch-writer", callback: (...args: any[]) => void): number
    on(sigName: "notify::record-batch-writer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::record-batch-writer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::record-batch-writer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::record-batch-writer", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * It wraps `arrow::ipc::RecordBatchWriter`.
 * @class 
 */
export class RecordBatchWriter extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchWriter

    static name: string

    // Constructors of Arrow-1.0.Arrow.RecordBatchWriter

    constructor(config?: RecordBatchWriter.ConstructorProperties) 
    _init(config?: RecordBatchWriter.ConstructorProperties): void
}

export module ResizableBuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends MutableBuffer.ConstructorProperties {
    }

}

export interface ResizableBuffer {

    // Own properties of Arrow-1.0.Arrow.ResizableBuffer

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ResizableBuffer

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.ResizableBuffer

    reserve(newCapacity: number): boolean
    resize(newSize: number): boolean

    // Conflicting methods

    setData(offset: number, data: Uint8Array): boolean

    // Overloads of setData

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
    setData(key: string | null, data: any | null): void
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
    setData(key: string | null, data: any | null): void
    slice(offset: number, size: number): MutableBuffer

    // Overloads of slice

    slice(offset: number, size: number): Buffer
    slice(offset: number, size: number): Buffer
    getData(): any

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string | null): any | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string | null): any | null

    // Class property signals of Arrow-1.0.Arrow.ResizableBuffer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ResizableBuffer extends MutableBuffer {

    // Own properties of Arrow-1.0.Arrow.ResizableBuffer

    static name: string

    // Constructors of Arrow-1.0.Arrow.ResizableBuffer

    constructor(config?: ResizableBuffer.ConstructorProperties) 
    constructor(initialSize: number) 
    static new(initialSize: number): ResizableBuffer

    // Overloads of new

    static new(data: Uint8Array): MutableBuffer
    static new(data: Uint8Array): Buffer
    _init(config?: ResizableBuffer.ConstructorProperties): void

    // Conflicting static methods

    static newBytes(...args: any[]): any
}

export module RoundOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.RoundOptions

        /**
         * The rounding and tie-breaking mode.
         */
        mode?: RoundMode | null
        /**
         * The rounding precision (number of digits to round to).
         */
        nDigits?: number | null
    }

}

export interface RoundOptions {

    // Own properties of Arrow-1.0.Arrow.RoundOptions

    /**
     * The rounding and tie-breaking mode.
     */
    mode: RoundMode
    /**
     * The rounding precision (number of digits to round to).
     */
    nDigits: number
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.RoundOptions

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.RoundOptions

    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::n-digits", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-digits", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-digits", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-digits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-digits", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class RoundOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.RoundOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.RoundOptions

    constructor(config?: RoundOptions.ConstructorProperties) 
    constructor() 
    static new(): RoundOptions
    _init(config?: RoundOptions.ConstructorProperties): void
}

export module RoundToMultipleOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

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

export interface RoundToMultipleOptions {

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
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.RoundToMultipleOptions

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.RoundToMultipleOptions

    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::multiple", callback: (...args: any[]) => void): number
    on(sigName: "notify::multiple", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::multiple", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::multiple", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class RoundToMultipleOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.RoundToMultipleOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.RoundToMultipleOptions

    constructor(config?: RoundToMultipleOptions.ConstructorProperties) 
    constructor() 
    static new(): RoundToMultipleOptions
    _init(config?: RoundToMultipleOptions.ConstructorProperties): void
}

export module S3FileSystem {

    // Constructor properties interface

    export interface ConstructorProperties extends FileSystem.ConstructorProperties {
    }

}

export interface S3FileSystem {

    // Own properties of Arrow-1.0.Arrow.S3FileSystem

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.S3FileSystem

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.S3FileSystem

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class S3FileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.S3FileSystem

    static name: string

    // Constructors of Arrow-1.0.Arrow.S3FileSystem

    constructor(config?: S3FileSystem.ConstructorProperties) 
    _init(config?: S3FileSystem.ConstructorProperties): void
}

export module S3GlobalOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.S3GlobalOptions

        /**
         * The log level of S3 APIs.
         */
        logLevel?: S3LogLevel | null
    }

}

export interface S3GlobalOptions {

    // Own properties of Arrow-1.0.Arrow.S3GlobalOptions

    /**
     * The log level of S3 APIs.
     */
    logLevel: S3LogLevel
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.S3GlobalOptions

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.S3GlobalOptions

    connect(sigName: "notify::log-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::log-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::log-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::log-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::log-level", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class S3GlobalOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.S3GlobalOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.S3GlobalOptions

    constructor(config?: S3GlobalOptions.ConstructorProperties) 
    constructor() 
    static new(): S3GlobalOptions
    _init(config?: S3GlobalOptions.ConstructorProperties): void
}

export module Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Scalar

        /**
         * The data type of the scalar.
         */
        dataType?: DataType | null
        scalar?: any | null
    }

}

export interface Scalar {

    // Own properties of Arrow-1.0.Arrow.Scalar

    /**
     * The data type of the scalar.
     */
    readonly dataType: DataType
    readonly scalar: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Scalar

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Scalar

    cast(dataType: DataType, options: CastOptions | null): Scalar | null
    equal(otherScalar: Scalar): boolean
    equalOptions(otherScalar: Scalar, options: EqualOptions | null): boolean
    getDataType(): DataType
    isValid(): boolean
    toString(): string | null

    // Class property signals of Arrow-1.0.Arrow.Scalar

    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Scalar extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.Scalar

    constructor(config?: Scalar.ConstructorProperties) 
    _init(config?: Scalar.ConstructorProperties): void
    static parse(dataType: DataType, data: Uint8Array): Scalar | null
}

export module ScalarAggregateOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ScalarAggregateOptions

        /**
         * The minimum required number of values.
         */
        minCount?: number | null
        /**
         * Whether NULLs are skipped or not.
         */
        skipNulls?: boolean | null
    }

}

export interface ScalarAggregateOptions {

    // Own properties of Arrow-1.0.Arrow.ScalarAggregateOptions

    /**
     * The minimum required number of values.
     */
    minCount: number
    /**
     * Whether NULLs are skipped or not.
     */
    skipNulls: boolean
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ScalarAggregateOptions

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.ScalarAggregateOptions

    connect(sigName: "notify::min-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-count", ...args: any[]): void
    connect(sigName: "notify::skip-nulls", callback: (...args: any[]) => void): number
    on(sigName: "notify::skip-nulls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::skip-nulls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::skip-nulls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::skip-nulls", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ScalarAggregateOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.ScalarAggregateOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.ScalarAggregateOptions

    constructor(config?: ScalarAggregateOptions.ConstructorProperties) 
    constructor() 
    static new(): ScalarAggregateOptions
    _init(config?: ScalarAggregateOptions.ConstructorProperties): void
}

export module ScalarDatum {

    // Constructor properties interface

    export interface ConstructorProperties extends Datum.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.ScalarDatum

        value?: Scalar | null
    }

}

export interface ScalarDatum {

    // Own properties of Arrow-1.0.Arrow.ScalarDatum

    readonly value: Scalar
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.ScalarDatum

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.ScalarDatum

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::datum", callback: (...args: any[]) => void): number
    on(sigName: "notify::datum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::datum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::datum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::datum", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ScalarDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.ScalarDatum

    static name: string

    // Constructors of Arrow-1.0.Arrow.ScalarDatum

    constructor(config?: ScalarDatum.ConstructorProperties) 
    constructor(value: Scalar) 
    static new(value: Scalar): ScalarDatum
    _init(config?: ScalarDatum.ConstructorProperties): void
}

export module Schema {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Schema

        schema?: any | null
    }

}

export interface Schema {

    // Own properties of Arrow-1.0.Arrow.Schema

    readonly schema: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Schema

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Schema

    addField(i: number, field: Field): Schema | null
    equal(otherSchema: Schema): boolean
    export(): any | null
    getField(i: number): Field
    getFieldByName(name: string | null): Field
    getFieldIndex(name: string | null): number
    getFields(): Field[]
    getMetadata(): GLib.HashTable | null
    hasMetadata(): boolean
    nFields(): number
    removeField(i: number): Schema | null
    replaceField(i: number, field: Field): Schema | null
    toString(): string | null
    toStringMetadata(showMetadata: boolean): string | null
    withMetadata(metadata: GLib.HashTable): Schema

    // Class property signals of Arrow-1.0.Arrow.Schema

    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Schema extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Schema

    static name: string

    // Constructors of Arrow-1.0.Arrow.Schema

    constructor(config?: Schema.ConstructorProperties) 
    constructor(fields: Field[]) 
    static new(fields: Field[]): Schema
    _init(config?: Schema.ConstructorProperties): void
    static import(cAbiSchema: any): Schema | null
}

export module SeekableInputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends File.ConstructorProperties, Readable.ConstructorProperties, InputStream.ConstructorProperties {
    }

}

export interface SeekableInputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.SeekableInputStream

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.SeekableInputStream

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.SeekableInputStream

    getSize(): number
    getSupportZeroCopy(): boolean
    peek(nBytes: number): any
    readAt(position: number, nBytes: number): Buffer | null
    readAtBytes(position: number, nBytes: number): any | null

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
    read(nBytes: number): Buffer | null
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
    readBytes(nBytes: number): any | null
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
    readBytes(count: number, cancellable: Gio.Cancellable | null): any

    // Class property signals of Arrow-1.0.Arrow.SeekableInputStream

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SeekableInputStream extends InputStream {

    // Own properties of Arrow-1.0.Arrow.SeekableInputStream

    static name: string

    // Constructors of Arrow-1.0.Arrow.SeekableInputStream

    constructor(config?: SeekableInputStream.ConstructorProperties) 
    _init(config?: SeekableInputStream.ConstructorProperties): void
}

export module SetLookupOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.SetLookupOptions

        /**
         * Whether NULLs are skipped or not.
         */
        skipNulls?: boolean | null
        /**
         * The set of values to look up input values into.
         */
        valueSet?: Datum | null
    }

}

export interface SetLookupOptions {

    // Own properties of Arrow-1.0.Arrow.SetLookupOptions

    /**
     * Whether NULLs are skipped or not.
     */
    skipNulls: boolean
    /**
     * The set of values to look up input values into.
     */
    valueSet: Datum
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.SetLookupOptions

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.SetLookupOptions

    connect(sigName: "notify::skip-nulls", callback: (...args: any[]) => void): number
    on(sigName: "notify::skip-nulls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::skip-nulls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::skip-nulls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::skip-nulls", ...args: any[]): void
    connect(sigName: "notify::value-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-set", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SetLookupOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.SetLookupOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.SetLookupOptions

    constructor(config?: SetLookupOptions.ConstructorProperties) 
    constructor(valueSet: Datum | null) 
    static new(valueSet: Datum | null): SetLookupOptions
    _init(config?: SetLookupOptions.ConstructorProperties): void
}

export module SinkNodeOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends ExecuteNodeOptions.ConstructorProperties {
    }

}

export interface SinkNodeOptions {

    // Own properties of Arrow-1.0.Arrow.SinkNodeOptions

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.SinkNodeOptions

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.SinkNodeOptions

    getReader(schema: Schema): RecordBatchReader

    // Class property signals of Arrow-1.0.Arrow.SinkNodeOptions

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::options", callback: (...args: any[]) => void): number
    on(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SinkNodeOptions extends ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.SinkNodeOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.SinkNodeOptions

    constructor(config?: SinkNodeOptions.ConstructorProperties) 
    constructor() 
    static new(): SinkNodeOptions
    _init(config?: SinkNodeOptions.ConstructorProperties): void
}

export module SlowFileSystem {

    // Constructor properties interface

    export interface ConstructorProperties extends FileSystem.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.SlowFileSystem

        baseFileSystem?: FileSystem | null
    }

}

export interface SlowFileSystem {

    // Own properties of Arrow-1.0.Arrow.SlowFileSystem

    readonly baseFileSystem: FileSystem
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.SlowFileSystem

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.SlowFileSystem

    connect(sigName: "notify::base-file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-file-system", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SlowFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.SlowFileSystem

    static name: string

    // Constructors of Arrow-1.0.Arrow.SlowFileSystem

    constructor(config?: SlowFileSystem.ConstructorProperties) 
    /**
     * The latency is normally distributed with a standard deviation of
     * `average_latency` * 0.1.
     * 
     * The random seed is given by the default random device.
     * @constructor 
     * @param baseFileSystem A #GArrowFileSystem as the base file system.
     * @param averageLatency The average value of the latency.
     * @returns A newly created #GArrowSlowFileSystem.
     */
    static newAverageLatency(baseFileSystem: FileSystem, averageLatency: number): SlowFileSystem
    /**
     * The latency is normally distributed with a standard deviation of
     * `average_latency` * 0.1.
     * @constructor 
     * @param baseFileSystem A #GArrowFileSystem as the base file system.
     * @param averageLatency The average value of the latency.
     * @param seed A random seed.
     * @returns A newly created #GArrowSlowFileSystem.
     */
    static newAverageLatencyAndSeed(baseFileSystem: FileSystem, averageLatency: number, seed: number): SlowFileSystem
    _init(config?: SlowFileSystem.ConstructorProperties): void
}

export module SortKey {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.SortKey

        /**
         * How to order values.
         */
        order?: SortOrder | null
    }

}

export interface SortKey {

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
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.SortKey

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.SortKey

    equal(otherSortKey: SortKey): boolean

    // Class property signals of Arrow-1.0.Arrow.SortKey

    connect(sigName: "notify::order", callback: (...args: any[]) => void): number
    on(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::order", ...args: any[]): void
    connect(sigName: "notify::target", callback: (...args: any[]) => void): number
    on(sigName: "notify::target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SortKey extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.SortKey

    static name: string

    // Constructors of Arrow-1.0.Arrow.SortKey

    constructor(config?: SortKey.ConstructorProperties) 
    constructor(target: string | null, order: SortOrder) 
    static new(target: string | null, order: SortOrder): SortKey
    _init(config?: SortKey.ConstructorProperties): void
}

export module SortOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends FunctionOptions.ConstructorProperties {
    }

}

export interface SortOptions {

    // Own properties of Arrow-1.0.Arrow.SortOptions

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.SortOptions

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.SortOptions

    /**
     * Add a sort key to be used.
     * @param sortKey The sort key to be added.
     */
    addSortKey(sortKey: SortKey): void
    equal(otherOptions: SortOptions): boolean

    // Overloads of equal

    equal(otherOptions: FunctionOptions | null): boolean
    getSortKeys(): SortKey[]
    /**
     * Set sort keys to be used.
     * @param sortKeys The sort keys to be used.
     */
    setSortKeys(sortKeys: SortKey[]): void

    // Class property signals of Arrow-1.0.Arrow.SortOptions

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SortOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.SortOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.SortOptions

    constructor(config?: SortOptions.ConstructorProperties) 
    constructor(sortKeys: SortKey[] | null) 
    static new(sortKeys: SortKey[] | null): SortOptions
    _init(config?: SortOptions.ConstructorProperties): void
}

export module SourceNodeOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends ExecuteNodeOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.SourceNodeOptions

        reader?: RecordBatchReader | null
        recordBatch?: RecordBatch | null
    }

}

export interface SourceNodeOptions {

    // Own properties of Arrow-1.0.Arrow.SourceNodeOptions

    readonly reader: RecordBatchReader
    readonly recordBatch: RecordBatch
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.SourceNodeOptions

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.SourceNodeOptions

    connect(sigName: "notify::reader", callback: (...args: any[]) => void): number
    on(sigName: "notify::reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: "notify::record-batch", callback: (...args: any[]) => void): number
    on(sigName: "notify::record-batch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::record-batch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::record-batch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::record-batch", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::options", callback: (...args: any[]) => void): number
    on(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SourceNodeOptions extends ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.SourceNodeOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.SourceNodeOptions

    constructor(config?: SourceNodeOptions.ConstructorProperties) 
    static newRecordBatch(recordBatch: RecordBatch): SourceNodeOptions
    static newRecordBatchReader(reader: RecordBatchReader): SourceNodeOptions
    static newTable(table: Table): SourceNodeOptions
    _init(config?: SourceNodeOptions.ConstructorProperties): void
}

export module SparseUnionArray {

    // Constructor properties interface

    export interface ConstructorProperties extends UnionArray.ConstructorProperties {
    }

}

export interface SparseUnionArray {

    // Own properties of Arrow-1.0.Arrow.SparseUnionArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.SparseUnionArray

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.SparseUnionArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::type-ids", callback: (...args: any[]) => void): number
    on(sigName: "notify::type-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type-ids", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SparseUnionArray extends UnionArray {

    // Own properties of Arrow-1.0.Arrow.SparseUnionArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.SparseUnionArray

    constructor(config?: SparseUnionArray.ConstructorProperties) 
    constructor(typeIds: Int8Array, fields: Array[]) 
    static new(typeIds: Int8Array, fields: Array[]): SparseUnionArray
    static newDataType(dataType: SparseUnionDataType, typeIds: Int8Array, fields: Array[]): SparseUnionArray
    _init(config?: SparseUnionArray.ConstructorProperties): void
}

export module SparseUnionDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends UnionDataType.ConstructorProperties {
    }

}

export interface SparseUnionDataType {

    // Own properties of Arrow-1.0.Arrow.SparseUnionDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.SparseUnionDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.SparseUnionDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SparseUnionDataType extends UnionDataType {

    // Own properties of Arrow-1.0.Arrow.SparseUnionDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.SparseUnionDataType

    constructor(config?: SparseUnionDataType.ConstructorProperties) 
    constructor(fields: Field[], typeCodes: Uint8Array) 
    static new(fields: Field[], typeCodes: Uint8Array): SparseUnionDataType
    _init(config?: SparseUnionDataType.ConstructorProperties): void
}

export module SparseUnionScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends UnionScalar.ConstructorProperties {
    }

}

export interface SparseUnionScalar {

    // Own properties of Arrow-1.0.Arrow.SparseUnionScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.SparseUnionScalar

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.SparseUnionScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SparseUnionScalar extends UnionScalar {

    // Own properties of Arrow-1.0.Arrow.SparseUnionScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.SparseUnionScalar

    constructor(config?: SparseUnionScalar.ConstructorProperties) 
    constructor(dataType: SparseUnionDataType, typeCode: number, value: Scalar) 
    static new(dataType: SparseUnionDataType, typeCode: number, value: Scalar): SparseUnionScalar
    _init(config?: SparseUnionScalar.ConstructorProperties): void
}

export module StringArray {

    // Constructor properties interface

    export interface ConstructorProperties extends BinaryArray.ConstructorProperties {
    }

}

export interface StringArray {

    // Own properties of Arrow-1.0.Arrow.StringArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.StringArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.StringArray

    getString(i: number): string | null

    // Class property signals of Arrow-1.0.Arrow.StringArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StringArray extends BinaryArray {

    // Own properties of Arrow-1.0.Arrow.StringArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.StringArray

    constructor(config?: StringArray.ConstructorProperties) 
    constructor(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): StringArray

    // Overloads of new

    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): BinaryArray
    _init(config?: StringArray.ConstructorProperties): void
}

export module StringArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends BinaryArrayBuilder.ConstructorProperties {
    }

}

export interface StringArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.StringArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.StringArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.StringArrayBuilder

    append(value: string | null): boolean

    // Overloads of append

    append(value: Uint8Array): boolean
    appendString(value: string | null): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of strings.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendStrings(values: string[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.StringArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StringArrayBuilder extends BinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.StringArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.StringArrayBuilder

    constructor(config?: StringArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): StringArrayBuilder

    // Overloads of new

    static new(): BinaryArrayBuilder
    _init(config?: StringArrayBuilder.ConstructorProperties): void
}

export module StringDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

export interface StringDataType {

    // Own properties of Arrow-1.0.Arrow.StringDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.StringDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.StringDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StringDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.StringDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.StringDataType

    constructor(config?: StringDataType.ConstructorProperties) 
    constructor() 
    static new(): StringDataType
    _init(config?: StringDataType.ConstructorProperties): void
}

export module StringDictionaryArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface StringDictionaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    appendArray(array: StringArray): boolean
    /**
     * Append dictionary indices directly without modifying the internal memo.
     * @param values The array of indices.
     * @param isValids The array of   %TRUE or %FALSE that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendIndices(values: number[], isValids: boolean[] | null): boolean
    appendString(value: string | null): boolean
    finishDelta(): [ /* returnType */ boolean, /* outIndices */ Array, /* outDelta */ Array ]
    getDictionaryLength(): number
    insertMemoValues(values: StringArray): boolean
    /**
     * Reset and also clear accumulated dictionary values in memo table.
     */
    resetFull(): void

    // Class property signals of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StringDictionaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    constructor(config?: StringDictionaryArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): StringDictionaryArrayBuilder
    _init(config?: StringDictionaryArrayBuilder.ConstructorProperties): void
}

export module StringScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseBinaryScalar.ConstructorProperties {
    }

}

export interface StringScalar {

    // Own properties of Arrow-1.0.Arrow.StringScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.StringScalar

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.StringScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StringScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.StringScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.StringScalar

    constructor(config?: StringScalar.ConstructorProperties) 
    constructor(value: Buffer) 
    static new(value: Buffer): StringScalar
    _init(config?: StringScalar.ConstructorProperties): void
}

export module StructArray {

    // Constructor properties interface

    export interface ConstructorProperties extends Array.ConstructorProperties {
    }

}

export interface StructArray {

    // Own properties of Arrow-1.0.Arrow.StructArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.StructArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.StructArray

    flatten(): Array[]
    getField(i: number): Array
    getFields(): Array[]

    // Class property signals of Arrow-1.0.Arrow.StructArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StructArray extends Array {

    // Own properties of Arrow-1.0.Arrow.StructArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.StructArray

    constructor(config?: StructArray.ConstructorProperties) 
    constructor(dataType: DataType, length: number, fields: Array[], nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: DataType, length: number, fields: Array[], nullBitmap: Buffer | null, nNulls: number): StructArray
    _init(config?: StructArray.ConstructorProperties): void
}

export module StructArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface StructArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.StructArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.StructArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.StructArrayBuilder

    append(): boolean
    appendValue(): boolean
    getFieldBuilder(i: number): ArrayBuilder
    getFieldBuilders(): Array[]

    // Class property signals of Arrow-1.0.Arrow.StructArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StructArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.StructArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.StructArrayBuilder

    constructor(config?: StructArrayBuilder.ConstructorProperties) 
    constructor(dataType: StructDataType) 
    static new(dataType: StructDataType): StructArrayBuilder
    _init(config?: StructArrayBuilder.ConstructorProperties): void
}

export module StructDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

export interface StructDataType {

    // Own properties of Arrow-1.0.Arrow.StructDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.StructDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.StructDataType

    getField(i: number): Field | null
    getFieldByName(name: string | null): Field | null
    getFieldIndex(name: string | null): number
    getFields(): Field[]
    getNFields(): number

    // Class property signals of Arrow-1.0.Arrow.StructDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StructDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.StructDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.StructDataType

    constructor(config?: StructDataType.ConstructorProperties) 
    constructor(fields: Field[]) 
    static new(fields: Field[]): StructDataType
    _init(config?: StructDataType.ConstructorProperties): void
}

export module StructScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface StructScalar {

    // Own properties of Arrow-1.0.Arrow.StructScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.StructScalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.StructScalar

    getValue(): Scalar[]

    // Class property signals of Arrow-1.0.Arrow.StructScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class StructScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.StructScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.StructScalar

    constructor(config?: StructScalar.ConstructorProperties) 
    constructor(dataType: StructDataType, value: Scalar[]) 
    static new(dataType: StructDataType, value: Scalar[]): StructScalar
    _init(config?: StructScalar.ConstructorProperties): void
}

export module SubTreeFileSystem {

    // Constructor properties interface

    export interface ConstructorProperties extends FileSystem.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.SubTreeFileSystem

        baseFileSystem?: FileSystem | null
    }

}

export interface SubTreeFileSystem {

    // Own properties of Arrow-1.0.Arrow.SubTreeFileSystem

    readonly baseFileSystem: FileSystem
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.SubTreeFileSystem

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.SubTreeFileSystem

    connect(sigName: "notify::base-file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-file-system", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class SubTreeFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.SubTreeFileSystem

    static name: string

    // Constructors of Arrow-1.0.Arrow.SubTreeFileSystem

    constructor(config?: SubTreeFileSystem.ConstructorProperties) 
    constructor(basePath: string | null, baseFileSystem: FileSystem) 
    static new(basePath: string | null, baseFileSystem: FileSystem): SubTreeFileSystem
    _init(config?: SubTreeFileSystem.ConstructorProperties): void
}

export module Table {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Table

        table?: any | null
    }

}

export interface Table {

    // Own properties of Arrow-1.0.Arrow.Table

    readonly table: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Table

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Table

    addColumn(i: number, field: Field, chunkedArray: ChunkedArray): Table | null
    combineChunks(): Table | null
    concatenate(otherTables: Table[], options: TableConcatenateOptions | null): Table | null
    equal(otherTable: Table): boolean
    equalMetadata(otherTable: Table, checkMetadata: boolean): boolean
    filter(filter: BooleanArray, options: FilterOptions | null): Table | null
    filterChunkedArray(filter: ChunkedArray, options: FilterOptions | null): Table | null
    getColumnData(i: number): ChunkedArray | null
    getNColumns(): number
    getNRows(): number
    getSchema(): Schema
    removeColumn(i: number): Table | null
    replaceColumn(i: number, field: Field, chunkedArray: ChunkedArray): Table | null
    slice(offset: number, length: number): Table
    sortIndices(options: SortOptions): UInt64Array | null
    take(indices: Array, options: TakeOptions | null): Table | null
    takeChunkedArray(indices: ChunkedArray, options: TakeOptions | null): Table | null
    toString(): string | null
    /**
     * Writes the `table` as Feather format data to the `sink`.
     * @param sink The output.
     * @param properties The properties for this write.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    writeAsFeather(sink: OutputStream, properties: FeatherWriteProperties | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Table

    connect(sigName: "notify::table", callback: (...args: any[]) => void): number
    on(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Table extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Table

    static name: string

    // Constructors of Arrow-1.0.Arrow.Table

    constructor(config?: Table.ConstructorProperties) 
    static newArrays(schema: Schema, arrays: Array[]): Table
    static newChunkedArrays(schema: Schema, chunkedArrays: ChunkedArray[]): Table
    static newRecordBatches(schema: Schema, recordBatches: RecordBatch[]): Table
    _init(config?: Table.ConstructorProperties): void
}

export module TableBatchReader {

    // Constructor properties interface

    export interface ConstructorProperties extends RecordBatchReader.ConstructorProperties {
    }

}

export interface TableBatchReader {

    // Own properties of Arrow-1.0.Arrow.TableBatchReader

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.TableBatchReader

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.TableBatchReader

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::record-batch-reader", callback: (...args: any[]) => void): number
    on(sigName: "notify::record-batch-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::record-batch-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::record-batch-reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::record-batch-reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TableBatchReader extends RecordBatchReader {

    // Own properties of Arrow-1.0.Arrow.TableBatchReader

    static name: string

    // Constructors of Arrow-1.0.Arrow.TableBatchReader

    constructor(config?: TableBatchReader.ConstructorProperties) 
    constructor(table: Table) 
    static new(table: Table): TableBatchReader

    // Overloads of new

    static new(recordBatches: RecordBatch[], schema: Schema | null): RecordBatchReader
    _init(config?: TableBatchReader.ConstructorProperties): void
}

export module TableConcatenateOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.TableConcatenateOptions

        /**
         * If true, a #GArrowField of #GArrowNullDataType can be unified
         * with a #GArrowField of another type. The unified field will be of
         * the other type and become nullable. Nullability will be promoted
         * to the looser option (nullable if one is not nullable).
         */
        promoteNullability?: boolean | null
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
        unifySchemas?: boolean | null
    }

}

export interface TableConcatenateOptions {

    // Own properties of Arrow-1.0.Arrow.TableConcatenateOptions

    /**
     * If true, a #GArrowField of #GArrowNullDataType can be unified
     * with a #GArrowField of another type. The unified field will be of
     * the other type and become nullable. Nullability will be promoted
     * to the looser option (nullable if one is not nullable).
     */
    promoteNullability: boolean
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
    unifySchemas: boolean
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.TableConcatenateOptions

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.TableConcatenateOptions

    connect(sigName: "notify::promote-nullability", callback: (...args: any[]) => void): number
    on(sigName: "notify::promote-nullability", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::promote-nullability", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::promote-nullability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::promote-nullability", ...args: any[]): void
    connect(sigName: "notify::unify-schemas", callback: (...args: any[]) => void): number
    on(sigName: "notify::unify-schemas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unify-schemas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unify-schemas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unify-schemas", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TableConcatenateOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.TableConcatenateOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.TableConcatenateOptions

    constructor(config?: TableConcatenateOptions.ConstructorProperties) 
    constructor() 
    static new(): TableConcatenateOptions
    _init(config?: TableConcatenateOptions.ConstructorProperties): void
}

export module TableDatum {

    // Constructor properties interface

    export interface ConstructorProperties extends Datum.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.TableDatum

        value?: Table | null
    }

}

export interface TableDatum {

    // Own properties of Arrow-1.0.Arrow.TableDatum

    readonly value: Table
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.TableDatum

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.TableDatum

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::datum", callback: (...args: any[]) => void): number
    on(sigName: "notify::datum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::datum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::datum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::datum", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TableDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.TableDatum

    static name: string

    // Constructors of Arrow-1.0.Arrow.TableDatum

    constructor(config?: TableDatum.ConstructorProperties) 
    constructor(value: Table) 
    static new(value: Table): TableDatum
    _init(config?: TableDatum.ConstructorProperties): void
}

export module TakeOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends FunctionOptions.ConstructorProperties {
    }

}

export interface TakeOptions {

    // Own properties of Arrow-1.0.Arrow.TakeOptions

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.TakeOptions

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.TakeOptions

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TakeOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.TakeOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.TakeOptions

    constructor(config?: TakeOptions.ConstructorProperties) 
    constructor() 
    static new(): TakeOptions
    _init(config?: TakeOptions.ConstructorProperties): void
}

export module TemporalDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends FixedWidthDataType.ConstructorProperties {
    }

}

export interface TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.TemporalDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.TemporalDataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.TemporalDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TemporalDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.TemporalDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.TemporalDataType

    constructor(config?: TemporalDataType.ConstructorProperties) 
    _init(config?: TemporalDataType.ConstructorProperties): void
}

export module Tensor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.Tensor

        buffer?: Buffer | null
        tensor?: any | null
    }

}

export interface Tensor {

    // Own properties of Arrow-1.0.Arrow.Tensor

    readonly buffer: Buffer
    readonly tensor: any
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Tensor

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Tensor

    equal(otherTensor: Tensor): boolean
    getBuffer(): Buffer
    getDimensionName(i: number): string | null
    getNDimensions(): number
    getShape(): number[]
    getSize(): number
    getStrides(): number[]
    getValueDataType(): DataType
    getValueType(): Type
    isColumnMajor(): boolean
    isContiguous(): boolean
    isMutable(): boolean
    isRowMajor(): boolean

    // Class property signals of Arrow-1.0.Arrow.Tensor

    connect(sigName: "notify::buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::tensor", callback: (...args: any[]) => void): number
    on(sigName: "notify::tensor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tensor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tensor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tensor", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Tensor extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Tensor

    static name: string

    // Constructors of Arrow-1.0.Arrow.Tensor

    constructor(config?: Tensor.ConstructorProperties) 
    constructor(dataType: DataType, data: Buffer, shape: number[], strides: number[] | null, dimensionNames: string[] | null) 
    static new(dataType: DataType, data: Buffer, shape: number[], strides: number[] | null, dimensionNames: string[] | null): Tensor
    _init(config?: Tensor.ConstructorProperties): void
}

export module Time32Array {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface Time32Array {

    // Own properties of Arrow-1.0.Arrow.Time32Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Time32Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Time32Array

    getValue(i: number): number
    getValues(): number[]

    // Class property signals of Arrow-1.0.Arrow.Time32Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Time32Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Time32Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.Time32Array

    constructor(config?: Time32Array.ConstructorProperties) 
    constructor(dataType: Time32DataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: Time32DataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Time32Array
    _init(config?: Time32Array.ConstructorProperties): void
}

export module Time32ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface Time32ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Time32ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Time32ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Time32ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of days since UNIX epoch in signed 32bit integer.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Time32ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Time32ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Time32ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.Time32ArrayBuilder

    constructor(config?: Time32ArrayBuilder.ConstructorProperties) 
    constructor(dataType: Time32DataType) 
    static new(dataType: Time32DataType): Time32ArrayBuilder
    _init(config?: Time32ArrayBuilder.ConstructorProperties): void
}

export module Time32DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends TimeDataType.ConstructorProperties {
    }

}

export interface Time32DataType {

    // Own properties of Arrow-1.0.Arrow.Time32DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Time32DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.Time32DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Time32DataType extends TimeDataType {

    // Own properties of Arrow-1.0.Arrow.Time32DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.Time32DataType

    constructor(config?: Time32DataType.ConstructorProperties) 
    constructor(unit: TimeUnit) 
    static new(unit: TimeUnit): Time32DataType
    _init(config?: Time32DataType.ConstructorProperties): void
}

export module Time32Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface Time32Scalar {

    // Own properties of Arrow-1.0.Arrow.Time32Scalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Time32Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Time32Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Time32Scalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Time32Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Time32Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.Time32Scalar

    constructor(config?: Time32Scalar.ConstructorProperties) 
    constructor(dataType: Time32DataType, value: number) 
    static new(dataType: Time32DataType, value: number): Time32Scalar
    _init(config?: Time32Scalar.ConstructorProperties): void
}

export module Time64Array {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface Time64Array {

    // Own properties of Arrow-1.0.Arrow.Time64Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Time64Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Time64Array

    getValue(i: number): number
    getValues(): number[]

    // Class property signals of Arrow-1.0.Arrow.Time64Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Time64Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Time64Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.Time64Array

    constructor(config?: Time64Array.ConstructorProperties) 
    constructor(dataType: Time64DataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: Time64DataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Time64Array
    _init(config?: Time64Array.ConstructorProperties): void
}

export module Time64ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface Time64ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Time64ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Time64ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Time64ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of milliseconds since UNIX epoch in signed 64bit integer.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Time64ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Time64ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Time64ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.Time64ArrayBuilder

    constructor(config?: Time64ArrayBuilder.ConstructorProperties) 
    constructor(dataType: Time64DataType) 
    static new(dataType: Time64DataType): Time64ArrayBuilder
    _init(config?: Time64ArrayBuilder.ConstructorProperties): void
}

export module Time64DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends TimeDataType.ConstructorProperties {
    }

}

export interface Time64DataType {

    // Own properties of Arrow-1.0.Arrow.Time64DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Time64DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.Time64DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Time64DataType extends TimeDataType {

    // Own properties of Arrow-1.0.Arrow.Time64DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.Time64DataType

    constructor(config?: Time64DataType.ConstructorProperties) 
    constructor(unit: TimeUnit) 
    static new(unit: TimeUnit): Time64DataType
    _init(config?: Time64DataType.ConstructorProperties): void
}

export module Time64Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface Time64Scalar {

    // Own properties of Arrow-1.0.Arrow.Time64Scalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.Time64Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.Time64Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Time64Scalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Time64Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Time64Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.Time64Scalar

    constructor(config?: Time64Scalar.ConstructorProperties) 
    constructor(dataType: Time64DataType, value: number) 
    static new(dataType: Time64DataType, value: number): Time64Scalar
    _init(config?: Time64Scalar.ConstructorProperties): void
}

export module TimeDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends TemporalDataType.ConstructorProperties {
    }

}

export interface TimeDataType {

    // Own properties of Arrow-1.0.Arrow.TimeDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.TimeDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.TimeDataType

    getUnit(): TimeUnit

    // Class property signals of Arrow-1.0.Arrow.TimeDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TimeDataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.TimeDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.TimeDataType

    constructor(config?: TimeDataType.ConstructorProperties) 
    _init(config?: TimeDataType.ConstructorProperties): void
}

export module TimestampArray {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface TimestampArray {

    // Own properties of Arrow-1.0.Arrow.TimestampArray

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.TimestampArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.TimestampArray

    getValue(i: number): number
    getValues(): number[]

    // Class property signals of Arrow-1.0.Arrow.TimestampArray

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TimestampArray extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.TimestampArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.TimestampArray

    constructor(config?: TimestampArray.ConstructorProperties) 
    constructor(dataType: TimestampDataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: TimestampDataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): TimestampArray
    _init(config?: TimestampArray.ConstructorProperties): void
}

export module TimestampArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface TimestampArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.TimestampArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.TimestampArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.TimestampArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of milliseconds since UNIX epoch in signed 64bit integer.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.TimestampArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TimestampArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.TimestampArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.TimestampArrayBuilder

    constructor(config?: TimestampArrayBuilder.ConstructorProperties) 
    constructor(dataType: TimestampDataType) 
    static new(dataType: TimestampDataType): TimestampArrayBuilder
    _init(config?: TimestampArrayBuilder.ConstructorProperties): void
}

export module TimestampDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends TemporalDataType.ConstructorProperties {
    }

}

export interface TimestampDataType {

    // Own properties of Arrow-1.0.Arrow.TimestampDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.TimestampDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.TimestampDataType

    getUnit(): TimeUnit

    // Class property signals of Arrow-1.0.Arrow.TimestampDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TimestampDataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.TimestampDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.TimestampDataType

    constructor(config?: TimestampDataType.ConstructorProperties) 
    constructor(unit: TimeUnit) 
    static new(unit: TimeUnit): TimestampDataType
    _init(config?: TimestampDataType.ConstructorProperties): void
}

export module TimestampScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface TimestampScalar {

    // Own properties of Arrow-1.0.Arrow.TimestampScalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.TimestampScalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.TimestampScalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.TimestampScalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class TimestampScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.TimestampScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.TimestampScalar

    constructor(config?: TimestampScalar.ConstructorProperties) 
    constructor(dataType: TimestampDataType, value: number) 
    static new(dataType: TimestampDataType, value: number): TimestampScalar
    _init(config?: TimestampScalar.ConstructorProperties): void
}

export module UInt16Array {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface UInt16Array {

    // Own properties of Arrow-1.0.Arrow.UInt16Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt16Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UInt16Array

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.UInt16Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt16Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.UInt16Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt16Array

    constructor(config?: UInt16Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt16Array
    _init(config?: UInt16Array.ConstructorProperties): void
}

export module UInt16ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface UInt16ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt16ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt16ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UInt16ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of uint16.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UInt16ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt16ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt16ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt16ArrayBuilder

    constructor(config?: UInt16ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): UInt16ArrayBuilder
    _init(config?: UInt16ArrayBuilder.ConstructorProperties): void
}

export module UInt16DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

export interface UInt16DataType {

    // Own properties of Arrow-1.0.Arrow.UInt16DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt16DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.UInt16DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt16DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.UInt16DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt16DataType

    constructor(config?: UInt16DataType.ConstructorProperties) 
    constructor() 
    static new(): UInt16DataType
    _init(config?: UInt16DataType.ConstructorProperties): void
}

export module UInt16Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface UInt16Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt16Scalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt16Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UInt16Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.UInt16Scalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt16Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt16Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt16Scalar

    constructor(config?: UInt16Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): UInt16Scalar
    _init(config?: UInt16Scalar.ConstructorProperties): void
}

export module UInt32Array {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface UInt32Array {

    // Own properties of Arrow-1.0.Arrow.UInt32Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt32Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UInt32Array

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.UInt32Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt32Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.UInt32Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt32Array

    constructor(config?: UInt32Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt32Array
    _init(config?: UInt32Array.ConstructorProperties): void
}

export module UInt32ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface UInt32ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt32ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt32ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UInt32ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of uint32.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UInt32ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt32ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt32ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt32ArrayBuilder

    constructor(config?: UInt32ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): UInt32ArrayBuilder
    _init(config?: UInt32ArrayBuilder.ConstructorProperties): void
}

export module UInt32DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

export interface UInt32DataType {

    // Own properties of Arrow-1.0.Arrow.UInt32DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt32DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.UInt32DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt32DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.UInt32DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt32DataType

    constructor(config?: UInt32DataType.ConstructorProperties) 
    constructor() 
    static new(): UInt32DataType
    _init(config?: UInt32DataType.ConstructorProperties): void
}

export module UInt32Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface UInt32Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt32Scalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt32Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UInt32Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.UInt32Scalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt32Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt32Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt32Scalar

    constructor(config?: UInt32Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): UInt32Scalar
    _init(config?: UInt32Scalar.ConstructorProperties): void
}

export module UInt64Array {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface UInt64Array {

    // Own properties of Arrow-1.0.Arrow.UInt64Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt64Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UInt64Array

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.UInt64Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt64Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.UInt64Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt64Array

    constructor(config?: UInt64Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt64Array
    _init(config?: UInt64Array.ConstructorProperties): void
}

export module UInt64ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface UInt64ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt64ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt64ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UInt64ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of uint64.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UInt64ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt64ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt64ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt64ArrayBuilder

    constructor(config?: UInt64ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): UInt64ArrayBuilder
    _init(config?: UInt64ArrayBuilder.ConstructorProperties): void
}

export module UInt64DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

export interface UInt64DataType {

    // Own properties of Arrow-1.0.Arrow.UInt64DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt64DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.UInt64DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt64DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.UInt64DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt64DataType

    constructor(config?: UInt64DataType.ConstructorProperties) 
    constructor() 
    static new(): UInt64DataType
    _init(config?: UInt64DataType.ConstructorProperties): void
}

export module UInt64Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface UInt64Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt64Scalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt64Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UInt64Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.UInt64Scalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt64Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt64Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt64Scalar

    constructor(config?: UInt64Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): UInt64Scalar
    _init(config?: UInt64Scalar.ConstructorProperties): void
}

export module UInt8Array {

    // Constructor properties interface

    export interface ConstructorProperties extends NumericArray.ConstructorProperties {
    }

}

export interface UInt8Array {

    // Own properties of Arrow-1.0.Arrow.UInt8Array

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt8Array

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UInt8Array

    getValue(i: number): number
    getValues(): Uint8Array
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.UInt8Array

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt8Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.UInt8Array

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt8Array

    constructor(config?: UInt8Array.ConstructorProperties) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt8Array
    _init(config?: UInt8Array.ConstructorProperties): void
}

export module UInt8ArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface UInt8ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt8ArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt8ArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UInt8ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of uint8.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: Uint8Array, isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UInt8ArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt8ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt8ArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt8ArrayBuilder

    constructor(config?: UInt8ArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): UInt8ArrayBuilder
    _init(config?: UInt8ArrayBuilder.ConstructorProperties): void
}

export module UInt8DataType {

    // Constructor properties interface

    export interface ConstructorProperties extends IntegerDataType.ConstructorProperties {
    }

}

export interface UInt8DataType {

    // Own properties of Arrow-1.0.Arrow.UInt8DataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt8DataType

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.UInt8DataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt8DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.UInt8DataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt8DataType

    constructor(config?: UInt8DataType.ConstructorProperties) 
    constructor() 
    static new(): UInt8DataType
    _init(config?: UInt8DataType.ConstructorProperties): void
}

export module UInt8Scalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {
    }

}

export interface UInt8Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt8Scalar

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UInt8Scalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UInt8Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.UInt8Scalar

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UInt8Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt8Scalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.UInt8Scalar

    constructor(config?: UInt8Scalar.ConstructorProperties) 
    constructor(value: number) 
    static new(value: number): UInt8Scalar
    _init(config?: UInt8Scalar.ConstructorProperties): void
}

export module UIntArrayBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayBuilder.ConstructorProperties {
    }

}

export interface UIntArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UIntArrayBuilder

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UIntArrayBuilder

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UIntArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of unsigned int.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     * @returns %TRUE on success, %FALSE if there was an error.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UIntArrayBuilder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UIntArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UIntArrayBuilder

    static name: string

    // Constructors of Arrow-1.0.Arrow.UIntArrayBuilder

    constructor(config?: UIntArrayBuilder.ConstructorProperties) 
    constructor() 
    static new(): UIntArrayBuilder
    _init(config?: UIntArrayBuilder.ConstructorProperties): void
}

export module UTF8NormalizeOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.UTF8NormalizeOptions

        /**
         * The Unicode normalization form to apply.
         */
        form?: UTF8NormalizeForm | null
    }

}

export interface UTF8NormalizeOptions {

    // Own properties of Arrow-1.0.Arrow.UTF8NormalizeOptions

    /**
     * The Unicode normalization form to apply.
     */
    form: UTF8NormalizeForm
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UTF8NormalizeOptions

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.UTF8NormalizeOptions

    connect(sigName: "notify::form", callback: (...args: any[]) => void): number
    on(sigName: "notify::form", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::form", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::form", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::form", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UTF8NormalizeOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.UTF8NormalizeOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.UTF8NormalizeOptions

    constructor(config?: UTF8NormalizeOptions.ConstructorProperties) 
    constructor() 
    static new(): UTF8NormalizeOptions
    _init(config?: UTF8NormalizeOptions.ConstructorProperties): void
}

export module UnionArray {

    // Constructor properties interface

    export interface ConstructorProperties extends Array.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.UnionArray

        typeIds?: Int8Array | null
    }

}

export interface UnionArray {

    // Own properties of Arrow-1.0.Arrow.UnionArray

    readonly typeIds: Int8Array
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UnionArray

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UnionArray

    getField(i: number): Array | null

    // Class property signals of Arrow-1.0.Arrow.UnionArray

    connect(sigName: "notify::type-ids", callback: (...args: any[]) => void): number
    on(sigName: "notify::type-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type-ids", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::array", callback: (...args: any[]) => void): number
    on(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::array", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::array", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::array", ...args: any[]): void
    connect(sigName: "notify::buffer1", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer1", ...args: any[]): void
    connect(sigName: "notify::buffer2", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer2", ...args: any[]): void
    connect(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-bitmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-bitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-bitmap", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::value-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UnionArray extends Array {

    // Own properties of Arrow-1.0.Arrow.UnionArray

    static name: string

    // Constructors of Arrow-1.0.Arrow.UnionArray

    constructor(config?: UnionArray.ConstructorProperties) 
    _init(config?: UnionArray.ConstructorProperties): void
}

export module UnionDataType {

    // Constructor properties interface

    export interface ConstructorProperties extends DataType.ConstructorProperties {
    }

}

export interface UnionDataType {

    // Own properties of Arrow-1.0.Arrow.UnionDataType

    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UnionDataType

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UnionDataType

    getField(i: number): Field | null
    getFields(): Field[]
    getNFields(): number
    getTypeCodes(): Uint8Array

    // Class property signals of Arrow-1.0.Arrow.UnionDataType

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UnionDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.UnionDataType

    static name: string

    // Constructors of Arrow-1.0.Arrow.UnionDataType

    constructor(config?: UnionDataType.ConstructorProperties) 
    _init(config?: UnionDataType.ConstructorProperties): void
}

export module UnionScalar {

    // Constructor properties interface

    export interface ConstructorProperties extends Scalar.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.UnionScalar

        /**
         * The value of the scalar.
         */
        value?: Scalar | null
    }

}

export interface UnionScalar {

    // Own properties of Arrow-1.0.Arrow.UnionScalar

    /**
     * The value of the scalar.
     */
    readonly value: Scalar
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.UnionScalar

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.UnionScalar

    getTypeCode(): number
    getValue(): Scalar

    // Class property signals of Arrow-1.0.Arrow.UnionScalar

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: "notify::scalar", callback: (...args: any[]) => void): number
    on(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scalar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scalar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scalar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class UnionScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UnionScalar

    static name: string

    // Constructors of Arrow-1.0.Arrow.UnionScalar

    constructor(config?: UnionScalar.ConstructorProperties) 
    _init(config?: UnionScalar.ConstructorProperties): void
}

export module VarianceOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends FunctionOptions.ConstructorProperties {

        // Own constructor properties of Arrow-1.0.Arrow.VarianceOptions

        /**
         * The Delta Degrees of Freedom (ddof) to be used.
         */
        ddof?: number | null
        /**
         * If less than this many non-null values are observed, emit null.
         */
        minCount?: number | null
        /**
         * Whether NULLs are skipped or not.
         */
        skipNulls?: boolean | null
    }

}

export interface VarianceOptions {

    // Own properties of Arrow-1.0.Arrow.VarianceOptions

    /**
     * The Delta Degrees of Freedom (ddof) to be used.
     */
    ddof: number
    /**
     * If less than this many non-null values are observed, emit null.
     */
    minCount: number
    /**
     * Whether NULLs are skipped or not.
     */
    skipNulls: boolean
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.VarianceOptions

    parentInstance: any

    // Class property signals of Arrow-1.0.Arrow.VarianceOptions

    connect(sigName: "notify::ddof", callback: (...args: any[]) => void): number
    on(sigName: "notify::ddof", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ddof", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ddof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ddof", ...args: any[]): void
    connect(sigName: "notify::min-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-count", ...args: any[]): void
    connect(sigName: "notify::skip-nulls", callback: (...args: any[]) => void): number
    on(sigName: "notify::skip-nulls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::skip-nulls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::skip-nulls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::skip-nulls", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VarianceOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.VarianceOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.VarianceOptions

    constructor(config?: VarianceOptions.ConstructorProperties) 
    constructor() 
    static new(): VarianceOptions
    _init(config?: VarianceOptions.ConstructorProperties): void
}

export module WriteOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
        allow64bit?: boolean | null
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
        maxRecursionDepth?: number | null
        /**
         * Whether to use the global CPU thread pool.
         */
        useThreads?: boolean | null
        /**
         * Whether to write the pre-0.15.0 encapsulated IPC message format
         * consisting of a 4-byte prefix instead of 8 byte.
         */
        writeLegacyIpcFormat?: boolean | null
    }

}

export interface WriteOptions {

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
    allow64bit: boolean
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
    maxRecursionDepth: number
    /**
     * Whether to use the global CPU thread pool.
     */
    useThreads: boolean
    /**
     * Whether to write the pre-0.15.0 encapsulated IPC message format
     * consisting of a 4-byte prefix instead of 8 byte.
     */
    writeLegacyIpcFormat: boolean
    __gtype__: number

    // Own fields of Arrow-1.0.Arrow.WriteOptions

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.WriteOptions

    connect(sigName: "notify::alignment", callback: (...args: any[]) => void): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::allow-64bit", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-64bit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-64bit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-64bit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-64bit", ...args: any[]): void
    connect(sigName: "notify::codec", callback: (...args: any[]) => void): number
    on(sigName: "notify::codec", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::codec", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::codec", ...args: any[]): void
    connect(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-recursion-depth", ...args: any[]): void
    connect(sigName: "notify::use-threads", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-threads", ...args: any[]): void
    connect(sigName: "notify::write-legacy-ipc-format", callback: (...args: any[]) => void): number
    on(sigName: "notify::write-legacy-ipc-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::write-legacy-ipc-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::write-legacy-ipc-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::write-legacy-ipc-format", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class WriteOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.WriteOptions

    static name: string

    // Constructors of Arrow-1.0.Arrow.WriteOptions

    constructor(config?: WriteOptions.ConstructorProperties) 
    constructor() 
    static new(): WriteOptions
    _init(config?: WriteOptions.ConstructorProperties): void
}

export interface AggregateNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.AggregateNodeOptionsClass

    parentClass: ExecuteNodeOptionsClass
}

export abstract class AggregateNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.AggregateNodeOptionsClass

    static name: string
}

export interface AggregationClass {

    // Own fields of Arrow-1.0.Arrow.AggregationClass

    parentClass: GObject.ObjectClass
}

export abstract class AggregationClass {

    // Own properties of Arrow-1.0.Arrow.AggregationClass

    static name: string
}

export interface ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.ArrayBuilderClass

    parentClass: GObject.ObjectClass
}

export abstract class ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.ArrayBuilderClass

    static name: string
}

export interface ArrayClass {

    // Own fields of Arrow-1.0.Arrow.ArrayClass

    parentClass: GObject.ObjectClass
}

export abstract class ArrayClass {

    // Own properties of Arrow-1.0.Arrow.ArrayClass

    static name: string
}

export interface ArrayDatumClass {

    // Own fields of Arrow-1.0.Arrow.ArrayDatumClass

    parentClass: DatumClass
}

export abstract class ArrayDatumClass {

    // Own properties of Arrow-1.0.Arrow.ArrayDatumClass

    static name: string
}

export interface ArraySortOptionsClass {

    // Own fields of Arrow-1.0.Arrow.ArraySortOptionsClass

    parentClass: FunctionOptionsClass
}

export abstract class ArraySortOptionsClass {

    // Own properties of Arrow-1.0.Arrow.ArraySortOptionsClass

    static name: string
}

export interface BaseBinaryScalarClass {

    // Own fields of Arrow-1.0.Arrow.BaseBinaryScalarClass

    parentClass: ScalarClass
}

export abstract class BaseBinaryScalarClass {

    // Own properties of Arrow-1.0.Arrow.BaseBinaryScalarClass

    static name: string
}

export interface BaseListScalarClass {

    // Own fields of Arrow-1.0.Arrow.BaseListScalarClass

    parentClass: ScalarClass
}

export abstract class BaseListScalarClass {

    // Own properties of Arrow-1.0.Arrow.BaseListScalarClass

    static name: string
}

export interface BinaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.BinaryArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class BinaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.BinaryArrayBuilderClass

    static name: string
}

export interface BinaryArrayClass {

    // Own fields of Arrow-1.0.Arrow.BinaryArrayClass

    parentClass: ArrayClass
}

export abstract class BinaryArrayClass {

    // Own properties of Arrow-1.0.Arrow.BinaryArrayClass

    static name: string
}

export interface BinaryDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.BinaryDataTypeClass

    parentClass: DataTypeClass
}

export abstract class BinaryDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.BinaryDataTypeClass

    static name: string
}

export interface BinaryDictionaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class BinaryDictionaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilderClass

    static name: string
}

export interface BinaryScalarClass {

    // Own fields of Arrow-1.0.Arrow.BinaryScalarClass

    parentClass: BaseBinaryScalarClass
}

export abstract class BinaryScalarClass {

    // Own properties of Arrow-1.0.Arrow.BinaryScalarClass

    static name: string
}

export interface BooleanArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.BooleanArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class BooleanArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.BooleanArrayBuilderClass

    static name: string
}

export interface BooleanArrayClass {

    // Own fields of Arrow-1.0.Arrow.BooleanArrayClass

    parentClass: PrimitiveArrayClass
}

export abstract class BooleanArrayClass {

    // Own properties of Arrow-1.0.Arrow.BooleanArrayClass

    static name: string
}

export interface BooleanDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.BooleanDataTypeClass

    parentClass: FixedWidthDataTypeClass
}

export abstract class BooleanDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.BooleanDataTypeClass

    static name: string
}

export interface BooleanScalarClass {

    // Own fields of Arrow-1.0.Arrow.BooleanScalarClass

    parentClass: ScalarClass
}

export abstract class BooleanScalarClass {

    // Own properties of Arrow-1.0.Arrow.BooleanScalarClass

    static name: string
}

export interface BufferClass {

    // Own fields of Arrow-1.0.Arrow.BufferClass

    parentClass: GObject.ObjectClass
}

export abstract class BufferClass {

    // Own properties of Arrow-1.0.Arrow.BufferClass

    static name: string
}

export interface BufferInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.BufferInputStreamClass

    parentClass: SeekableInputStreamClass
}

export abstract class BufferInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.BufferInputStreamClass

    static name: string
}

export interface BufferOutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.BufferOutputStreamClass

    parentClass: OutputStreamClass
}

export abstract class BufferOutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.BufferOutputStreamClass

    static name: string
}

export interface CSVReadOptionsClass {

    // Own fields of Arrow-1.0.Arrow.CSVReadOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class CSVReadOptionsClass {

    // Own properties of Arrow-1.0.Arrow.CSVReadOptionsClass

    static name: string
}

export interface CSVReaderClass {

    // Own fields of Arrow-1.0.Arrow.CSVReaderClass

    parentClass: GObject.ObjectClass
}

export abstract class CSVReaderClass {

    // Own properties of Arrow-1.0.Arrow.CSVReaderClass

    static name: string
}

export interface CallExpressionClass {

    // Own fields of Arrow-1.0.Arrow.CallExpressionClass

    parentClass: ExpressionClass
}

export abstract class CallExpressionClass {

    // Own properties of Arrow-1.0.Arrow.CallExpressionClass

    static name: string
}

export interface CastOptionsClass {

    // Own fields of Arrow-1.0.Arrow.CastOptionsClass

    parentClass: FunctionOptionsClass
}

export abstract class CastOptionsClass {

    // Own properties of Arrow-1.0.Arrow.CastOptionsClass

    static name: string
}

export interface ChunkedArrayClass {

    // Own fields of Arrow-1.0.Arrow.ChunkedArrayClass

    parentClass: GObject.ObjectClass
}

export abstract class ChunkedArrayClass {

    // Own properties of Arrow-1.0.Arrow.ChunkedArrayClass

    static name: string
}

export interface ChunkedArrayDatumClass {

    // Own fields of Arrow-1.0.Arrow.ChunkedArrayDatumClass

    parentClass: DatumClass
}

export abstract class ChunkedArrayDatumClass {

    // Own properties of Arrow-1.0.Arrow.ChunkedArrayDatumClass

    static name: string
}

export interface CodecClass {

    // Own fields of Arrow-1.0.Arrow.CodecClass

    parentClass: GObject.ObjectClass
}

export abstract class CodecClass {

    // Own properties of Arrow-1.0.Arrow.CodecClass

    static name: string
}

export interface CompressedInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.CompressedInputStreamClass

    parentClass: InputStreamClass
}

export abstract class CompressedInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.CompressedInputStreamClass

    static name: string
}

export interface CompressedOutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.CompressedOutputStreamClass

    parentClass: OutputStreamClass
}

export abstract class CompressedOutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.CompressedOutputStreamClass

    static name: string
}

export interface CountOptionsClass {

    // Own fields of Arrow-1.0.Arrow.CountOptionsClass

    parentClass: FunctionOptionsClass
}

export abstract class CountOptionsClass {

    // Own properties of Arrow-1.0.Arrow.CountOptionsClass

    static name: string
}

export interface DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DataTypeClass

    parentClass: GObject.ObjectClass
}

export abstract class DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DataTypeClass

    static name: string
}

export interface Date32ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Date32ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class Date32ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Date32ArrayBuilderClass

    static name: string
}

export interface Date32ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Date32ArrayClass

    parentClass: NumericArrayClass
}

export abstract class Date32ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Date32ArrayClass

    static name: string
}

export interface Date32DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Date32DataTypeClass

    parentClass: TemporalDataTypeClass
}

export abstract class Date32DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Date32DataTypeClass

    static name: string
}

export interface Date32ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Date32ScalarClass

    parentClass: ScalarClass
}

export abstract class Date32ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Date32ScalarClass

    static name: string
}

export interface Date64ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Date64ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class Date64ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Date64ArrayBuilderClass

    static name: string
}

export interface Date64ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Date64ArrayClass

    parentClass: NumericArrayClass
}

export abstract class Date64ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Date64ArrayClass

    static name: string
}

export interface Date64DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Date64DataTypeClass

    parentClass: TemporalDataTypeClass
}

export abstract class Date64DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Date64DataTypeClass

    static name: string
}

export interface Date64ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Date64ScalarClass

    parentClass: ScalarClass
}

export abstract class Date64ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Date64ScalarClass

    static name: string
}

export interface DatumClass {

    // Own fields of Arrow-1.0.Arrow.DatumClass

    parentClass: GObject.ObjectClass
}

export abstract class DatumClass {

    // Own properties of Arrow-1.0.Arrow.DatumClass

    static name: string
}

export interface DayTimeIntervalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DayTimeIntervalDataTypeClass

    parentClass: IntervalDataTypeClass
}

export abstract class DayTimeIntervalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DayTimeIntervalDataTypeClass

    static name: string
}

export interface Decimal128ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Decimal128ArrayBuilderClass

    parentClass: FixedSizeBinaryArrayBuilderClass
}

export abstract class Decimal128ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Decimal128ArrayBuilderClass

    static name: string
}

export interface Decimal128ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Decimal128ArrayClass

    parentClass: FixedSizeBinaryArrayClass
}

export abstract class Decimal128ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Decimal128ArrayClass

    static name: string
}

export interface Decimal128Class {

    // Own fields of Arrow-1.0.Arrow.Decimal128Class

    parentClass: GObject.ObjectClass
}

export abstract class Decimal128Class {

    // Own properties of Arrow-1.0.Arrow.Decimal128Class

    static name: string
}

export interface Decimal128DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Decimal128DataTypeClass

    parentClass: DecimalDataTypeClass
}

export abstract class Decimal128DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Decimal128DataTypeClass

    static name: string
}

export interface Decimal128ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Decimal128ScalarClass

    parentClass: ScalarClass
}

export abstract class Decimal128ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Decimal128ScalarClass

    static name: string
}

export interface Decimal256ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Decimal256ArrayBuilderClass

    parentClass: FixedSizeBinaryArrayBuilderClass
}

export abstract class Decimal256ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Decimal256ArrayBuilderClass

    static name: string
}

export interface Decimal256ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Decimal256ArrayClass

    parentClass: FixedSizeBinaryArrayClass
}

export abstract class Decimal256ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Decimal256ArrayClass

    static name: string
}

export interface Decimal256Class {

    // Own fields of Arrow-1.0.Arrow.Decimal256Class

    parentClass: GObject.ObjectClass
}

export abstract class Decimal256Class {

    // Own properties of Arrow-1.0.Arrow.Decimal256Class

    static name: string
}

export interface Decimal256DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Decimal256DataTypeClass

    parentClass: DecimalDataTypeClass
}

export abstract class Decimal256DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Decimal256DataTypeClass

    static name: string
}

export interface Decimal256ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Decimal256ScalarClass

    parentClass: ScalarClass
}

export abstract class Decimal256ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Decimal256ScalarClass

    static name: string
}

export interface DecimalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DecimalDataTypeClass

    parentClass: FixedSizeBinaryDataTypeClass
}

export abstract class DecimalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DecimalDataTypeClass

    static name: string
}

export interface DenseUnionArrayClass {

    // Own fields of Arrow-1.0.Arrow.DenseUnionArrayClass

    parentClass: UnionArrayClass
}

export abstract class DenseUnionArrayClass {

    // Own properties of Arrow-1.0.Arrow.DenseUnionArrayClass

    static name: string
}

export interface DenseUnionDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DenseUnionDataTypeClass

    parentClass: UnionDataTypeClass
}

export abstract class DenseUnionDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DenseUnionDataTypeClass

    static name: string
}

export interface DenseUnionScalarClass {

    // Own fields of Arrow-1.0.Arrow.DenseUnionScalarClass

    parentClass: UnionScalarClass
}

export abstract class DenseUnionScalarClass {

    // Own properties of Arrow-1.0.Arrow.DenseUnionScalarClass

    static name: string
}

export interface DictionaryArrayClass {

    // Own fields of Arrow-1.0.Arrow.DictionaryArrayClass

    parentClass: ArrayClass
}

export abstract class DictionaryArrayClass {

    // Own properties of Arrow-1.0.Arrow.DictionaryArrayClass

    static name: string
}

export interface DictionaryDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DictionaryDataTypeClass

    parentClass: FixedWidthDataTypeClass
}

export abstract class DictionaryDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DictionaryDataTypeClass

    static name: string
}

export interface DoubleArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.DoubleArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class DoubleArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.DoubleArrayBuilderClass

    static name: string
}

export interface DoubleArrayClass {

    // Own fields of Arrow-1.0.Arrow.DoubleArrayClass

    parentClass: NumericArrayClass
}

export abstract class DoubleArrayClass {

    // Own properties of Arrow-1.0.Arrow.DoubleArrayClass

    static name: string
}

export interface DoubleDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DoubleDataTypeClass

    parentClass: FloatingPointDataTypeClass
}

export abstract class DoubleDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DoubleDataTypeClass

    static name: string
}

export interface DoubleScalarClass {

    // Own fields of Arrow-1.0.Arrow.DoubleScalarClass

    parentClass: ScalarClass
}

export abstract class DoubleScalarClass {

    // Own properties of Arrow-1.0.Arrow.DoubleScalarClass

    static name: string
}

export interface EqualOptionsClass {

    // Own fields of Arrow-1.0.Arrow.EqualOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class EqualOptionsClass {

    // Own properties of Arrow-1.0.Arrow.EqualOptionsClass

    static name: string
}

export interface ExecuteContextClass {

    // Own fields of Arrow-1.0.Arrow.ExecuteContextClass

    parentClass: GObject.ObjectClass
}

export abstract class ExecuteContextClass {

    // Own properties of Arrow-1.0.Arrow.ExecuteContextClass

    static name: string
}

export interface ExecuteNodeClass {

    // Own fields of Arrow-1.0.Arrow.ExecuteNodeClass

    parentClass: GObject.ObjectClass
}

export abstract class ExecuteNodeClass {

    // Own properties of Arrow-1.0.Arrow.ExecuteNodeClass

    static name: string
}

export interface ExecuteNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.ExecuteNodeOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class ExecuteNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.ExecuteNodeOptionsClass

    static name: string
}

export interface ExecutePlanClass {

    // Own fields of Arrow-1.0.Arrow.ExecutePlanClass

    parentClass: GObject.ObjectClass
}

export abstract class ExecutePlanClass {

    // Own properties of Arrow-1.0.Arrow.ExecutePlanClass

    static name: string
}

export interface ExpressionClass {

    // Own fields of Arrow-1.0.Arrow.ExpressionClass

    parentClass: GObject.ObjectClass
}

export abstract class ExpressionClass {

    // Own properties of Arrow-1.0.Arrow.ExpressionClass

    static name: string
}

export interface ExtensionArrayClass {

    // Own fields of Arrow-1.0.Arrow.ExtensionArrayClass

    parentClass: ArrayClass
}

export abstract class ExtensionArrayClass {

    // Own properties of Arrow-1.0.Arrow.ExtensionArrayClass

    static name: string
}

export interface ExtensionDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.ExtensionDataTypeClass

    parentClass: DataTypeClass
    getExtensionName: (dataType: ExtensionDataType) => string | null
    equal: (dataType: ExtensionDataType, otherDataType: ExtensionDataType) => boolean
    serialize: (dataType: ExtensionDataType) => any
    getArrayGtype: (dataType: ExtensionDataType) => GObject.GType
}

export abstract class ExtensionDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataTypeClass

    static name: string
}

export interface ExtensionDataTypeRegistryClass {

    // Own fields of Arrow-1.0.Arrow.ExtensionDataTypeRegistryClass

    parentClass: GObject.ObjectClass
}

export abstract class ExtensionDataTypeRegistryClass {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataTypeRegistryClass

    static name: string
}

export interface ExtensionScalarClass {

    // Own fields of Arrow-1.0.Arrow.ExtensionScalarClass

    parentClass: ScalarClass
}

export abstract class ExtensionScalarClass {

    // Own properties of Arrow-1.0.Arrow.ExtensionScalarClass

    static name: string
}

export interface FeatherFileReaderClass {

    // Own fields of Arrow-1.0.Arrow.FeatherFileReaderClass

    parentClass: GObject.ObjectClass
}

export abstract class FeatherFileReaderClass {

    // Own properties of Arrow-1.0.Arrow.FeatherFileReaderClass

    static name: string
}

export interface FeatherWritePropertiesClass {

    // Own fields of Arrow-1.0.Arrow.FeatherWritePropertiesClass

    parentClass: GObject.ObjectClass
}

export abstract class FeatherWritePropertiesClass {

    // Own properties of Arrow-1.0.Arrow.FeatherWritePropertiesClass

    static name: string
}

export interface FieldClass {

    // Own fields of Arrow-1.0.Arrow.FieldClass

    parentClass: GObject.ObjectClass
}

export abstract class FieldClass {

    // Own properties of Arrow-1.0.Arrow.FieldClass

    static name: string
}

export interface FieldExpressionClass {

    // Own fields of Arrow-1.0.Arrow.FieldExpressionClass

    parentClass: ExpressionClass
}

export abstract class FieldExpressionClass {

    // Own properties of Arrow-1.0.Arrow.FieldExpressionClass

    static name: string
}

export interface FileInfoClass {

    // Own fields of Arrow-1.0.Arrow.FileInfoClass

    parentClass: GObject.ObjectClass
}

export abstract class FileInfoClass {

    // Own properties of Arrow-1.0.Arrow.FileInfoClass

    static name: string
}

export interface FileInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.FileInputStreamClass

    parentClass: SeekableInputStreamClass
}

export abstract class FileInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.FileInputStreamClass

    static name: string
}

export interface FileInterface {
}

export abstract class FileInterface {

    // Own properties of Arrow-1.0.Arrow.FileInterface

    static name: string
}

export interface FileOutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.FileOutputStreamClass

    parentClass: OutputStreamClass
}

export abstract class FileOutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.FileOutputStreamClass

    static name: string
}

export interface FileSelectorClass {

    // Own fields of Arrow-1.0.Arrow.FileSelectorClass

    parentClass: GObject.ObjectClass
}

export abstract class FileSelectorClass {

    // Own properties of Arrow-1.0.Arrow.FileSelectorClass

    static name: string
}

export interface FileSystemClass {

    // Own fields of Arrow-1.0.Arrow.FileSystemClass

    parentClass: GObject.ObjectClass
}

export abstract class FileSystemClass {

    // Own properties of Arrow-1.0.Arrow.FileSystemClass

    static name: string
}

export interface FilterOptionsClass {

    // Own fields of Arrow-1.0.Arrow.FilterOptionsClass

    parentClass: FunctionOptionsClass
}

export abstract class FilterOptionsClass {

    // Own properties of Arrow-1.0.Arrow.FilterOptionsClass

    static name: string
}

export interface FixedSizeBinaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class FixedSizeBinaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilderClass

    static name: string
}

export interface FixedSizeBinaryArrayClass {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayClass

    parentClass: PrimitiveArrayClass
}

export abstract class FixedSizeBinaryArrayClass {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArrayClass

    static name: string
}

export interface FixedSizeBinaryDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryDataTypeClass

    parentClass: FixedWidthDataTypeClass
}

export abstract class FixedSizeBinaryDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryDataTypeClass

    static name: string
}

export interface FixedSizeBinaryScalarClass {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryScalarClass

    parentClass: BaseBinaryScalarClass
}

export abstract class FixedSizeBinaryScalarClass {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryScalarClass

    static name: string
}

export interface FixedWidthDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.FixedWidthDataTypeClass

    parentClass: DataTypeClass
}

export abstract class FixedWidthDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.FixedWidthDataTypeClass

    static name: string
}

export interface FloatArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.FloatArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class FloatArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.FloatArrayBuilderClass

    static name: string
}

export interface FloatArrayClass {

    // Own fields of Arrow-1.0.Arrow.FloatArrayClass

    parentClass: NumericArrayClass
}

export abstract class FloatArrayClass {

    // Own properties of Arrow-1.0.Arrow.FloatArrayClass

    static name: string
}

export interface FloatDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.FloatDataTypeClass

    parentClass: FloatingPointDataTypeClass
}

export abstract class FloatDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.FloatDataTypeClass

    static name: string
}

export interface FloatScalarClass {

    // Own fields of Arrow-1.0.Arrow.FloatScalarClass

    parentClass: ScalarClass
}

export abstract class FloatScalarClass {

    // Own properties of Arrow-1.0.Arrow.FloatScalarClass

    static name: string
}

export interface FloatingPointDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.FloatingPointDataTypeClass

    parentClass: NumericDataTypeClass
}

export abstract class FloatingPointDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.FloatingPointDataTypeClass

    static name: string
}

export interface FunctionClass {

    // Own fields of Arrow-1.0.Arrow.FunctionClass

    parentClass: GObject.ObjectClass
}

export abstract class FunctionClass {

    // Own properties of Arrow-1.0.Arrow.FunctionClass

    static name: string
}

export interface FunctionDocClass {

    // Own fields of Arrow-1.0.Arrow.FunctionDocClass

    parentClass: GObject.ObjectClass
}

export abstract class FunctionDocClass {

    // Own properties of Arrow-1.0.Arrow.FunctionDocClass

    static name: string
}

export interface FunctionOptionsClass {

    // Own fields of Arrow-1.0.Arrow.FunctionOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class FunctionOptionsClass {

    // Own properties of Arrow-1.0.Arrow.FunctionOptionsClass

    static name: string
}

export interface GIOInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.GIOInputStreamClass

    parentClass: SeekableInputStreamClass
}

export abstract class GIOInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.GIOInputStreamClass

    static name: string
}

export interface GIOOutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.GIOOutputStreamClass

    parentClass: OutputStreamClass
}

export abstract class GIOOutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.GIOOutputStreamClass

    static name: string
}

export interface HDFSFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.HDFSFileSystemClass

    parentClass: FileSystemClass
}

export abstract class HDFSFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.HDFSFileSystemClass

    static name: string
}

export interface HashJoinNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.HashJoinNodeOptionsClass

    parentClass: ExecuteNodeOptionsClass
}

export abstract class HashJoinNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.HashJoinNodeOptionsClass

    static name: string
}

export interface InputStreamClass {

    // Own fields of Arrow-1.0.Arrow.InputStreamClass

    parentClass: Gio.InputStreamClass
}

export abstract class InputStreamClass {

    // Own properties of Arrow-1.0.Arrow.InputStreamClass

    static name: string
}

export interface Int16ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Int16ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class Int16ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Int16ArrayBuilderClass

    static name: string
}

export interface Int16ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Int16ArrayClass

    parentClass: NumericArrayClass
}

export abstract class Int16ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Int16ArrayClass

    static name: string
}

export interface Int16DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Int16DataTypeClass

    parentClass: IntegerDataTypeClass
}

export abstract class Int16DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Int16DataTypeClass

    static name: string
}

export interface Int16ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Int16ScalarClass

    parentClass: ScalarClass
}

export abstract class Int16ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Int16ScalarClass

    static name: string
}

export interface Int32ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Int32ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class Int32ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Int32ArrayBuilderClass

    static name: string
}

export interface Int32ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Int32ArrayClass

    parentClass: NumericArrayClass
}

export abstract class Int32ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Int32ArrayClass

    static name: string
}

export interface Int32DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Int32DataTypeClass

    parentClass: IntegerDataTypeClass
}

export abstract class Int32DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Int32DataTypeClass

    static name: string
}

export interface Int32ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Int32ScalarClass

    parentClass: ScalarClass
}

export abstract class Int32ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Int32ScalarClass

    static name: string
}

export interface Int64ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Int64ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class Int64ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Int64ArrayBuilderClass

    static name: string
}

export interface Int64ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Int64ArrayClass

    parentClass: NumericArrayClass
}

export abstract class Int64ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Int64ArrayClass

    static name: string
}

export interface Int64DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Int64DataTypeClass

    parentClass: IntegerDataTypeClass
}

export abstract class Int64DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Int64DataTypeClass

    static name: string
}

export interface Int64ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Int64ScalarClass

    parentClass: ScalarClass
}

export abstract class Int64ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Int64ScalarClass

    static name: string
}

export interface Int8ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Int8ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class Int8ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Int8ArrayBuilderClass

    static name: string
}

export interface Int8ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Int8ArrayClass

    parentClass: NumericArrayClass
}

export abstract class Int8ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Int8ArrayClass

    static name: string
}

export interface Int8DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Int8DataTypeClass

    parentClass: IntegerDataTypeClass
}

export abstract class Int8DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Int8DataTypeClass

    static name: string
}

export interface Int8ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Int8ScalarClass

    parentClass: ScalarClass
}

export abstract class Int8ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Int8ScalarClass

    static name: string
}

export interface IntArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.IntArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class IntArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.IntArrayBuilderClass

    static name: string
}

export interface IntegerDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.IntegerDataTypeClass

    parentClass: NumericDataTypeClass
}

export abstract class IntegerDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.IntegerDataTypeClass

    static name: string
}

export interface IntervalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.IntervalDataTypeClass

    parentClass: TimeDataTypeClass
}

export abstract class IntervalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.IntervalDataTypeClass

    static name: string
}

export interface JSONReadOptionsClass {

    // Own fields of Arrow-1.0.Arrow.JSONReadOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class JSONReadOptionsClass {

    // Own properties of Arrow-1.0.Arrow.JSONReadOptionsClass

    static name: string
}

export interface JSONReaderClass {

    // Own fields of Arrow-1.0.Arrow.JSONReaderClass

    parentClass: GObject.ObjectClass
}

export abstract class JSONReaderClass {

    // Own properties of Arrow-1.0.Arrow.JSONReaderClass

    static name: string
}

export interface LargeBinaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class LargeBinaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArrayBuilderClass

    static name: string
}

export interface LargeBinaryArrayClass {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryArrayClass

    parentClass: ArrayClass
}

export abstract class LargeBinaryArrayClass {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArrayClass

    static name: string
}

export interface LargeBinaryDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryDataTypeClass

    parentClass: DataTypeClass
}

export abstract class LargeBinaryDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryDataTypeClass

    static name: string
}

export interface LargeBinaryScalarClass {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryScalarClass

    parentClass: BaseBinaryScalarClass
}

export abstract class LargeBinaryScalarClass {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryScalarClass

    static name: string
}

export interface LargeListArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.LargeListArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class LargeListArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.LargeListArrayBuilderClass

    static name: string
}

export interface LargeListArrayClass {

    // Own fields of Arrow-1.0.Arrow.LargeListArrayClass

    parentClass: ArrayClass
}

export abstract class LargeListArrayClass {

    // Own properties of Arrow-1.0.Arrow.LargeListArrayClass

    static name: string
}

export interface LargeListDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.LargeListDataTypeClass

    parentClass: DataTypeClass
}

export abstract class LargeListDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.LargeListDataTypeClass

    static name: string
}

export interface LargeListScalarClass {

    // Own fields of Arrow-1.0.Arrow.LargeListScalarClass

    parentClass: BaseListScalarClass
}

export abstract class LargeListScalarClass {

    // Own properties of Arrow-1.0.Arrow.LargeListScalarClass

    static name: string
}

export interface LargeStringArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.LargeStringArrayBuilderClass

    parentClass: LargeBinaryArrayBuilderClass
}

export abstract class LargeStringArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.LargeStringArrayBuilderClass

    static name: string
}

export interface LargeStringArrayClass {

    // Own fields of Arrow-1.0.Arrow.LargeStringArrayClass

    parentClass: LargeBinaryArrayClass
}

export abstract class LargeStringArrayClass {

    // Own properties of Arrow-1.0.Arrow.LargeStringArrayClass

    static name: string
}

export interface LargeStringDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.LargeStringDataTypeClass

    parentClass: LargeBinaryDataTypeClass
}

export abstract class LargeStringDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.LargeStringDataTypeClass

    static name: string
}

export interface LargeStringScalarClass {

    // Own fields of Arrow-1.0.Arrow.LargeStringScalarClass

    parentClass: BaseBinaryScalarClass
}

export abstract class LargeStringScalarClass {

    // Own properties of Arrow-1.0.Arrow.LargeStringScalarClass

    static name: string
}

export interface ListArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.ListArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class ListArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.ListArrayBuilderClass

    static name: string
}

export interface ListArrayClass {

    // Own fields of Arrow-1.0.Arrow.ListArrayClass

    parentClass: ArrayClass
}

export abstract class ListArrayClass {

    // Own properties of Arrow-1.0.Arrow.ListArrayClass

    static name: string
}

export interface ListDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.ListDataTypeClass

    parentClass: DataTypeClass
}

export abstract class ListDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.ListDataTypeClass

    static name: string
}

export interface ListScalarClass {

    // Own fields of Arrow-1.0.Arrow.ListScalarClass

    parentClass: BaseListScalarClass
}

export abstract class ListScalarClass {

    // Own properties of Arrow-1.0.Arrow.ListScalarClass

    static name: string
}

export interface LiteralExpressionClass {

    // Own fields of Arrow-1.0.Arrow.LiteralExpressionClass

    parentClass: ExpressionClass
}

export abstract class LiteralExpressionClass {

    // Own properties of Arrow-1.0.Arrow.LiteralExpressionClass

    static name: string
}

export interface LocalFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.LocalFileSystemClass

    parentClass: FileSystemClass
}

export abstract class LocalFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystemClass

    static name: string
}

export interface LocalFileSystemOptionsClass {

    // Own fields of Arrow-1.0.Arrow.LocalFileSystemOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class LocalFileSystemOptionsClass {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystemOptionsClass

    static name: string
}

export interface MapArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.MapArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class MapArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.MapArrayBuilderClass

    static name: string
}

export interface MapArrayClass {

    // Own fields of Arrow-1.0.Arrow.MapArrayClass

    parentClass: ListArrayClass
}

export abstract class MapArrayClass {

    // Own properties of Arrow-1.0.Arrow.MapArrayClass

    static name: string
}

export interface MapDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.MapDataTypeClass

    parentClass: ListDataTypeClass
}

export abstract class MapDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.MapDataTypeClass

    static name: string
}

export interface MapScalarClass {

    // Own fields of Arrow-1.0.Arrow.MapScalarClass

    parentClass: BaseListScalarClass
}

export abstract class MapScalarClass {

    // Own properties of Arrow-1.0.Arrow.MapScalarClass

    static name: string
}

export interface MemoryMappedInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.MemoryMappedInputStreamClass

    parentClass: SeekableInputStreamClass
}

export abstract class MemoryMappedInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.MemoryMappedInputStreamClass

    static name: string
}

export interface MockFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.MockFileSystemClass

    parentClass: FileSystemClass
}

export abstract class MockFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.MockFileSystemClass

    static name: string
}

export interface MonthDayNanoIntervalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.MonthDayNanoIntervalDataTypeClass

    parentClass: IntervalDataTypeClass
}

export abstract class MonthDayNanoIntervalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.MonthDayNanoIntervalDataTypeClass

    static name: string
}

export interface MonthIntervalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.MonthIntervalDataTypeClass

    parentClass: IntervalDataTypeClass
}

export abstract class MonthIntervalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.MonthIntervalDataTypeClass

    static name: string
}

export interface MutableBufferClass {

    // Own fields of Arrow-1.0.Arrow.MutableBufferClass

    parentClass: BufferClass
}

export abstract class MutableBufferClass {

    // Own properties of Arrow-1.0.Arrow.MutableBufferClass

    static name: string
}

export interface NullArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.NullArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class NullArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.NullArrayBuilderClass

    static name: string
}

export interface NullArrayClass {

    // Own fields of Arrow-1.0.Arrow.NullArrayClass

    parentClass: ArrayClass
}

export abstract class NullArrayClass {

    // Own properties of Arrow-1.0.Arrow.NullArrayClass

    static name: string
}

export interface NullDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.NullDataTypeClass

    parentClass: DataTypeClass
}

export abstract class NullDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.NullDataTypeClass

    static name: string
}

export interface NullScalarClass {

    // Own fields of Arrow-1.0.Arrow.NullScalarClass

    parentClass: ScalarClass
}

export abstract class NullScalarClass {

    // Own properties of Arrow-1.0.Arrow.NullScalarClass

    static name: string
}

export interface NumericArrayClass {

    // Own fields of Arrow-1.0.Arrow.NumericArrayClass

    parentClass: PrimitiveArrayClass
}

export abstract class NumericArrayClass {

    // Own properties of Arrow-1.0.Arrow.NumericArrayClass

    static name: string
}

export interface NumericDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.NumericDataTypeClass

    parentClass: FixedWidthDataTypeClass
}

export abstract class NumericDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.NumericDataTypeClass

    static name: string
}

export interface OutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.OutputStreamClass

    parentClass: GObject.ObjectClass
}

export abstract class OutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.OutputStreamClass

    static name: string
}

export interface PrimitiveArrayClass {

    // Own fields of Arrow-1.0.Arrow.PrimitiveArrayClass

    parentClass: ArrayClass
}

export abstract class PrimitiveArrayClass {

    // Own properties of Arrow-1.0.Arrow.PrimitiveArrayClass

    static name: string
}

export interface ReadOptionsClass {

    // Own fields of Arrow-1.0.Arrow.ReadOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class ReadOptionsClass {

    // Own properties of Arrow-1.0.Arrow.ReadOptionsClass

    static name: string
}

export interface ReadableInterface {
}

export abstract class ReadableInterface {

    // Own properties of Arrow-1.0.Arrow.ReadableInterface

    static name: string
}

export interface RecordBatchBuilderClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchBuilderClass

    parentClass: GObject.ObjectClass
}

export abstract class RecordBatchBuilderClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchBuilderClass

    static name: string
}

export interface RecordBatchClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchClass

    parentClass: GObject.ObjectClass
}

export abstract class RecordBatchClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchClass

    static name: string
}

export interface RecordBatchDatumClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchDatumClass

    parentClass: DatumClass
}

export abstract class RecordBatchDatumClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchDatumClass

    static name: string
}

export interface RecordBatchFileReaderClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchFileReaderClass

    parentClass: GObject.ObjectClass
}

export abstract class RecordBatchFileReaderClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileReaderClass

    static name: string
}

export interface RecordBatchFileWriterClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchFileWriterClass

    parentClass: RecordBatchStreamWriterClass
}

export abstract class RecordBatchFileWriterClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileWriterClass

    static name: string
}

export interface RecordBatchIteratorClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchIteratorClass

    parentClass: GObject.ObjectClass
}

export abstract class RecordBatchIteratorClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchIteratorClass

    static name: string
}

export interface RecordBatchReaderClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchReaderClass

    parentClass: GObject.ObjectClass
}

export abstract class RecordBatchReaderClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchReaderClass

    static name: string
}

export interface RecordBatchStreamReaderClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchStreamReaderClass

    parentClass: RecordBatchReaderClass
}

export abstract class RecordBatchStreamReaderClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamReaderClass

    static name: string
}

export interface RecordBatchStreamWriterClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchStreamWriterClass

    parentClass: RecordBatchWriterClass
}

export abstract class RecordBatchStreamWriterClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamWriterClass

    static name: string
}

export interface RecordBatchWriterClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchWriterClass

    parentClass: GObject.ObjectClass
}

export abstract class RecordBatchWriterClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchWriterClass

    static name: string
}

export interface ResizableBufferClass {

    // Own fields of Arrow-1.0.Arrow.ResizableBufferClass

    parentClass: MutableBufferClass
}

export abstract class ResizableBufferClass {

    // Own properties of Arrow-1.0.Arrow.ResizableBufferClass

    static name: string
}

export interface RoundOptionsClass {

    // Own fields of Arrow-1.0.Arrow.RoundOptionsClass

    parentClass: FunctionOptionsClass
}

export abstract class RoundOptionsClass {

    // Own properties of Arrow-1.0.Arrow.RoundOptionsClass

    static name: string
}

export interface RoundToMultipleOptionsClass {

    // Own fields of Arrow-1.0.Arrow.RoundToMultipleOptionsClass

    parentClass: FunctionOptionsClass
}

export abstract class RoundToMultipleOptionsClass {

    // Own properties of Arrow-1.0.Arrow.RoundToMultipleOptionsClass

    static name: string
}

export interface S3FileSystemClass {

    // Own fields of Arrow-1.0.Arrow.S3FileSystemClass

    parentClass: FileSystemClass
}

export abstract class S3FileSystemClass {

    // Own properties of Arrow-1.0.Arrow.S3FileSystemClass

    static name: string
}

export interface S3GlobalOptionsClass {

    // Own fields of Arrow-1.0.Arrow.S3GlobalOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class S3GlobalOptionsClass {

    // Own properties of Arrow-1.0.Arrow.S3GlobalOptionsClass

    static name: string
}

export interface ScalarAggregateOptionsClass {

    // Own fields of Arrow-1.0.Arrow.ScalarAggregateOptionsClass

    parentClass: FunctionOptionsClass
}

export abstract class ScalarAggregateOptionsClass {

    // Own properties of Arrow-1.0.Arrow.ScalarAggregateOptionsClass

    static name: string
}

export interface ScalarClass {

    // Own fields of Arrow-1.0.Arrow.ScalarClass

    parentClass: GObject.ObjectClass
}

export abstract class ScalarClass {

    // Own properties of Arrow-1.0.Arrow.ScalarClass

    static name: string
}

export interface ScalarDatumClass {

    // Own fields of Arrow-1.0.Arrow.ScalarDatumClass

    parentClass: DatumClass
}

export abstract class ScalarDatumClass {

    // Own properties of Arrow-1.0.Arrow.ScalarDatumClass

    static name: string
}

export interface SchemaClass {

    // Own fields of Arrow-1.0.Arrow.SchemaClass

    parentClass: GObject.ObjectClass
}

export abstract class SchemaClass {

    // Own properties of Arrow-1.0.Arrow.SchemaClass

    static name: string
}

export interface SeekableInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.SeekableInputStreamClass

    parentClass: InputStreamClass
}

export abstract class SeekableInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.SeekableInputStreamClass

    static name: string
}

export interface SetLookupOptionsClass {

    // Own fields of Arrow-1.0.Arrow.SetLookupOptionsClass

    parentClass: FunctionOptionsClass
}

export abstract class SetLookupOptionsClass {

    // Own properties of Arrow-1.0.Arrow.SetLookupOptionsClass

    static name: string
}

export interface SinkNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.SinkNodeOptionsClass

    parentClass: ExecuteNodeOptionsClass
}

export abstract class SinkNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.SinkNodeOptionsClass

    static name: string
}

export interface SlowFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.SlowFileSystemClass

    parentClass: FileSystemClass
}

export abstract class SlowFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.SlowFileSystemClass

    static name: string
}

export interface SortKeyClass {

    // Own fields of Arrow-1.0.Arrow.SortKeyClass

    parentClass: GObject.ObjectClass
}

export abstract class SortKeyClass {

    // Own properties of Arrow-1.0.Arrow.SortKeyClass

    static name: string
}

export interface SortOptionsClass {

    // Own fields of Arrow-1.0.Arrow.SortOptionsClass

    parentClass: FunctionOptionsClass
}

export abstract class SortOptionsClass {

    // Own properties of Arrow-1.0.Arrow.SortOptionsClass

    static name: string
}

export interface SourceNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.SourceNodeOptionsClass

    parentClass: ExecuteNodeOptionsClass
}

export abstract class SourceNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.SourceNodeOptionsClass

    static name: string
}

export interface SparseUnionArrayClass {

    // Own fields of Arrow-1.0.Arrow.SparseUnionArrayClass

    parentClass: UnionArrayClass
}

export abstract class SparseUnionArrayClass {

    // Own properties of Arrow-1.0.Arrow.SparseUnionArrayClass

    static name: string
}

export interface SparseUnionDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.SparseUnionDataTypeClass

    parentClass: UnionDataTypeClass
}

export abstract class SparseUnionDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.SparseUnionDataTypeClass

    static name: string
}

export interface SparseUnionScalarClass {

    // Own fields of Arrow-1.0.Arrow.SparseUnionScalarClass

    parentClass: UnionScalarClass
}

export abstract class SparseUnionScalarClass {

    // Own properties of Arrow-1.0.Arrow.SparseUnionScalarClass

    static name: string
}

export interface StringArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.StringArrayBuilderClass

    parentClass: BinaryArrayBuilderClass
}

export abstract class StringArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.StringArrayBuilderClass

    static name: string
}

export interface StringArrayClass {

    // Own fields of Arrow-1.0.Arrow.StringArrayClass

    parentClass: BinaryArrayClass
}

export abstract class StringArrayClass {

    // Own properties of Arrow-1.0.Arrow.StringArrayClass

    static name: string
}

export interface StringDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.StringDataTypeClass

    parentClass: BinaryDataTypeClass
}

export abstract class StringDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.StringDataTypeClass

    static name: string
}

export interface StringDictionaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.StringDictionaryArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class StringDictionaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.StringDictionaryArrayBuilderClass

    static name: string
}

export interface StringScalarClass {

    // Own fields of Arrow-1.0.Arrow.StringScalarClass

    parentClass: BaseBinaryScalarClass
}

export abstract class StringScalarClass {

    // Own properties of Arrow-1.0.Arrow.StringScalarClass

    static name: string
}

export interface StructArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.StructArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class StructArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.StructArrayBuilderClass

    static name: string
}

export interface StructArrayClass {

    // Own fields of Arrow-1.0.Arrow.StructArrayClass

    parentClass: ArrayClass
}

export abstract class StructArrayClass {

    // Own properties of Arrow-1.0.Arrow.StructArrayClass

    static name: string
}

export interface StructDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.StructDataTypeClass

    parentClass: DataTypeClass
}

export abstract class StructDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.StructDataTypeClass

    static name: string
}

export interface StructScalarClass {

    // Own fields of Arrow-1.0.Arrow.StructScalarClass

    parentClass: ScalarClass
}

export abstract class StructScalarClass {

    // Own properties of Arrow-1.0.Arrow.StructScalarClass

    static name: string
}

export interface SubTreeFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.SubTreeFileSystemClass

    parentClass: FileSystemClass
}

export abstract class SubTreeFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.SubTreeFileSystemClass

    static name: string
}

export interface TableBatchReaderClass {

    // Own fields of Arrow-1.0.Arrow.TableBatchReaderClass

    parentClass: RecordBatchReaderClass
}

export abstract class TableBatchReaderClass {

    // Own properties of Arrow-1.0.Arrow.TableBatchReaderClass

    static name: string
}

export interface TableClass {

    // Own fields of Arrow-1.0.Arrow.TableClass

    parentClass: GObject.ObjectClass
}

export abstract class TableClass {

    // Own properties of Arrow-1.0.Arrow.TableClass

    static name: string
}

export interface TableConcatenateOptionsClass {

    // Own fields of Arrow-1.0.Arrow.TableConcatenateOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class TableConcatenateOptionsClass {

    // Own properties of Arrow-1.0.Arrow.TableConcatenateOptionsClass

    static name: string
}

export interface TableDatumClass {

    // Own fields of Arrow-1.0.Arrow.TableDatumClass

    parentClass: DatumClass
}

export abstract class TableDatumClass {

    // Own properties of Arrow-1.0.Arrow.TableDatumClass

    static name: string
}

export interface TakeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.TakeOptionsClass

    parentClass: FunctionOptionsClass
}

export abstract class TakeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.TakeOptionsClass

    static name: string
}

export interface TemporalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.TemporalDataTypeClass

    parentClass: FixedWidthDataTypeClass
}

export abstract class TemporalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.TemporalDataTypeClass

    static name: string
}

export interface TensorClass {

    // Own fields of Arrow-1.0.Arrow.TensorClass

    parentClass: GObject.ObjectClass
}

export abstract class TensorClass {

    // Own properties of Arrow-1.0.Arrow.TensorClass

    static name: string
}

export interface Time32ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Time32ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class Time32ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Time32ArrayBuilderClass

    static name: string
}

export interface Time32ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Time32ArrayClass

    parentClass: NumericArrayClass
}

export abstract class Time32ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Time32ArrayClass

    static name: string
}

export interface Time32DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Time32DataTypeClass

    parentClass: TimeDataTypeClass
}

export abstract class Time32DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Time32DataTypeClass

    static name: string
}

export interface Time32ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Time32ScalarClass

    parentClass: ScalarClass
}

export abstract class Time32ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Time32ScalarClass

    static name: string
}

export interface Time64ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Time64ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class Time64ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Time64ArrayBuilderClass

    static name: string
}

export interface Time64ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Time64ArrayClass

    parentClass: NumericArrayClass
}

export abstract class Time64ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Time64ArrayClass

    static name: string
}

export interface Time64DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Time64DataTypeClass

    parentClass: TimeDataTypeClass
}

export abstract class Time64DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Time64DataTypeClass

    static name: string
}

export interface Time64ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Time64ScalarClass

    parentClass: ScalarClass
}

export abstract class Time64ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Time64ScalarClass

    static name: string
}

export interface TimeDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.TimeDataTypeClass

    parentClass: TemporalDataTypeClass
}

export abstract class TimeDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.TimeDataTypeClass

    static name: string
}

export interface TimestampArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.TimestampArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class TimestampArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.TimestampArrayBuilderClass

    static name: string
}

export interface TimestampArrayClass {

    // Own fields of Arrow-1.0.Arrow.TimestampArrayClass

    parentClass: NumericArrayClass
}

export abstract class TimestampArrayClass {

    // Own properties of Arrow-1.0.Arrow.TimestampArrayClass

    static name: string
}

export interface TimestampDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.TimestampDataTypeClass

    parentClass: TemporalDataTypeClass
}

export abstract class TimestampDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.TimestampDataTypeClass

    static name: string
}

export interface TimestampScalarClass {

    // Own fields of Arrow-1.0.Arrow.TimestampScalarClass

    parentClass: ScalarClass
}

export abstract class TimestampScalarClass {

    // Own properties of Arrow-1.0.Arrow.TimestampScalarClass

    static name: string
}

export interface UInt16ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UInt16ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class UInt16ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UInt16ArrayBuilderClass

    static name: string
}

export interface UInt16ArrayClass {

    // Own fields of Arrow-1.0.Arrow.UInt16ArrayClass

    parentClass: NumericArrayClass
}

export abstract class UInt16ArrayClass {

    // Own properties of Arrow-1.0.Arrow.UInt16ArrayClass

    static name: string
}

export interface UInt16DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UInt16DataTypeClass

    parentClass: IntegerDataTypeClass
}

export abstract class UInt16DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UInt16DataTypeClass

    static name: string
}

export interface UInt16ScalarClass {

    // Own fields of Arrow-1.0.Arrow.UInt16ScalarClass

    parentClass: ScalarClass
}

export abstract class UInt16ScalarClass {

    // Own properties of Arrow-1.0.Arrow.UInt16ScalarClass

    static name: string
}

export interface UInt32ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UInt32ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class UInt32ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UInt32ArrayBuilderClass

    static name: string
}

export interface UInt32ArrayClass {

    // Own fields of Arrow-1.0.Arrow.UInt32ArrayClass

    parentClass: NumericArrayClass
}

export abstract class UInt32ArrayClass {

    // Own properties of Arrow-1.0.Arrow.UInt32ArrayClass

    static name: string
}

export interface UInt32DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UInt32DataTypeClass

    parentClass: IntegerDataTypeClass
}

export abstract class UInt32DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UInt32DataTypeClass

    static name: string
}

export interface UInt32ScalarClass {

    // Own fields of Arrow-1.0.Arrow.UInt32ScalarClass

    parentClass: ScalarClass
}

export abstract class UInt32ScalarClass {

    // Own properties of Arrow-1.0.Arrow.UInt32ScalarClass

    static name: string
}

export interface UInt64ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UInt64ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class UInt64ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UInt64ArrayBuilderClass

    static name: string
}

export interface UInt64ArrayClass {

    // Own fields of Arrow-1.0.Arrow.UInt64ArrayClass

    parentClass: NumericArrayClass
}

export abstract class UInt64ArrayClass {

    // Own properties of Arrow-1.0.Arrow.UInt64ArrayClass

    static name: string
}

export interface UInt64DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UInt64DataTypeClass

    parentClass: IntegerDataTypeClass
}

export abstract class UInt64DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UInt64DataTypeClass

    static name: string
}

export interface UInt64ScalarClass {

    // Own fields of Arrow-1.0.Arrow.UInt64ScalarClass

    parentClass: ScalarClass
}

export abstract class UInt64ScalarClass {

    // Own properties of Arrow-1.0.Arrow.UInt64ScalarClass

    static name: string
}

export interface UInt8ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UInt8ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class UInt8ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UInt8ArrayBuilderClass

    static name: string
}

export interface UInt8ArrayClass {

    // Own fields of Arrow-1.0.Arrow.UInt8ArrayClass

    parentClass: NumericArrayClass
}

export abstract class UInt8ArrayClass {

    // Own properties of Arrow-1.0.Arrow.UInt8ArrayClass

    static name: string
}

export interface UInt8DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UInt8DataTypeClass

    parentClass: IntegerDataTypeClass
}

export abstract class UInt8DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UInt8DataTypeClass

    static name: string
}

export interface UInt8ScalarClass {

    // Own fields of Arrow-1.0.Arrow.UInt8ScalarClass

    parentClass: ScalarClass
}

export abstract class UInt8ScalarClass {

    // Own properties of Arrow-1.0.Arrow.UInt8ScalarClass

    static name: string
}

export interface UIntArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UIntArrayBuilderClass

    parentClass: ArrayBuilderClass
}

export abstract class UIntArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UIntArrayBuilderClass

    static name: string
}

export interface UTF8NormalizeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.UTF8NormalizeOptionsClass

    parentClass: FunctionOptionsClass
}

export abstract class UTF8NormalizeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.UTF8NormalizeOptionsClass

    static name: string
}

export interface UnionArrayClass {

    // Own fields of Arrow-1.0.Arrow.UnionArrayClass

    parentClass: ArrayClass
}

export abstract class UnionArrayClass {

    // Own properties of Arrow-1.0.Arrow.UnionArrayClass

    static name: string
}

export interface UnionDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UnionDataTypeClass

    parentClass: DataTypeClass
}

export abstract class UnionDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UnionDataTypeClass

    static name: string
}

export interface UnionScalarClass {

    // Own fields of Arrow-1.0.Arrow.UnionScalarClass

    parentClass: ScalarClass
}

export abstract class UnionScalarClass {

    // Own properties of Arrow-1.0.Arrow.UnionScalarClass

    static name: string
}

export interface VarianceOptionsClass {

    // Own fields of Arrow-1.0.Arrow.VarianceOptionsClass

    parentClass: FunctionOptionsClass
}

export abstract class VarianceOptionsClass {

    // Own properties of Arrow-1.0.Arrow.VarianceOptionsClass

    static name: string
}

export interface WritableFileInterface {
}

export abstract class WritableFileInterface {

    // Own properties of Arrow-1.0.Arrow.WritableFileInterface

    static name: string
}

export interface WritableInterface {
}

export abstract class WritableInterface {

    // Own properties of Arrow-1.0.Arrow.WritableInterface

    static name: string
}

export interface WriteOptionsClass {

    // Own fields of Arrow-1.0.Arrow.WriteOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class WriteOptionsClass {

    // Own properties of Arrow-1.0.Arrow.WriteOptionsClass

    static name: string
}

    export type TimePoint = number