// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Arrow-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
const VERSION_TAG: string
function errorQuark(): GLib.Quark
/**
 * Finalize the S3 APIs.
 */
function s3Finalize(): boolean
/**
 * Normally, you don't need to call this function because the S3 APIs
 * are initialized with the default options automatically. If you want
 * to call this function, you must call this function before you use
 * any #GArrowS3FileSystem related APIs.
 * @param options Options to initialize the S3 APIs.
 */
function s3Initialize(options: S3GlobalOptions | null): boolean
function s3IsEnabled(): boolean
interface File_ConstructProps extends GObject.Object_ConstructProps {
}

interface File {

    // Owm methods of Arrow-1.0.Arrow.File

    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number

    // Class property signals of Arrow-1.0.Arrow.File

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class File extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.File

    static name: string
    static $gtype: GObject.GType<File>

    // Constructors of Arrow-1.0.Arrow.File

    constructor(config?: File_ConstructProps) 
    _init(config?: File_ConstructProps): void
}

interface Readable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Readable {

    // Owm methods of Arrow-1.0.Arrow.Readable

    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null

    // Class property signals of Arrow-1.0.Arrow.Readable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Readable extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Readable

    static name: string
    static $gtype: GObject.GType<Readable>

    // Constructors of Arrow-1.0.Arrow.Readable

    constructor(config?: Readable_ConstructProps) 
    _init(config?: Readable_ConstructProps): void
}

interface Writable_ConstructProps extends GObject.Object_ConstructProps {
}

interface Writable {

    // Owm methods of Arrow-1.0.Arrow.Writable

    /**
     * It ensures writing all data on memory to storage.
     */
    flush(): boolean
    write(data: Uint8Array): boolean

    // Class property signals of Arrow-1.0.Arrow.Writable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Writable extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Writable

    static name: string
    static $gtype: GObject.GType<Writable>

    // Constructors of Arrow-1.0.Arrow.Writable

    constructor(config?: Writable_ConstructProps) 
    _init(config?: Writable_ConstructProps): void
}

interface WritableFile_ConstructProps extends GObject.Object_ConstructProps {
}

interface WritableFile {

    // Owm methods of Arrow-1.0.Arrow.WritableFile

    writeAt(position: number, data: Uint8Array): boolean

    // Class property signals of Arrow-1.0.Arrow.WritableFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WritableFile extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.WritableFile

    static name: string
    static $gtype: GObject.GType<WritableFile>

    // Constructors of Arrow-1.0.Arrow.WritableFile

    constructor(config?: WritableFile_ConstructProps) 
    _init(config?: WritableFile_ConstructProps): void
}

interface AggregateNodeOptions_ConstructProps extends ExecuteNodeOptions_ConstructProps {
}

interface AggregateNodeOptions {

    // Own fields of Arrow-1.0.Arrow.AggregateNodeOptions

    parentInstance: ExecuteNodeOptions

    // Class property signals of Arrow-1.0.Arrow.AggregateNodeOptions

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

class AggregateNodeOptions extends ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.AggregateNodeOptions

    static name: string
    static $gtype: GObject.GType<AggregateNodeOptions>

    // Constructors of Arrow-1.0.Arrow.AggregateNodeOptions

    constructor(config?: AggregateNodeOptions_ConstructProps) 
    constructor(aggregations: Aggregation[], keys: string[] | null) 
    static new(aggregations: Aggregation[], keys: string[] | null): AggregateNodeOptions
    _init(config?: AggregateNodeOptions_ConstructProps): void
}

interface Aggregation_ConstructProps extends GObject.Object_ConstructProps {

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

interface Aggregation {

    // Own properties of Arrow-1.0.Arrow.Aggregation

    /**
     * The function name to aggregate.
     */
    readonly "function": string
    /**
     * The input field name of aggregate function.
     */
    readonly input: string
    /**
     * The options of aggregate function.
     */
    readonly options: FunctionOptions
    /**
     * The output field name of aggregate function.
     */
    readonly output: string

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Aggregation extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Aggregation

    static name: string
    static $gtype: GObject.GType<Aggregation>

    // Constructors of Arrow-1.0.Arrow.Aggregation

    constructor(config?: Aggregation_ConstructProps) 
    constructor(function_: string, options: FunctionOptions | null, input: string, output: string) 
    static new(function_: string, options: FunctionOptions | null, input: string, output: string): Aggregation
    _init(config?: Aggregation_ConstructProps): void
}

interface Array_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Array

    array?: object | null
    buffer1?: Buffer | null
    buffer2?: Buffer | null
    nullBitmap?: Buffer | null
    parent?: Array | null
    valueDataType?: DataType | null
}

interface Array {

    // Own properties of Arrow-1.0.Arrow.Array

    readonly array: object
    readonly buffer1: Buffer
    readonly buffer2: Buffer
    readonly nullBitmap: Buffer
    readonly parent: Array
    readonly valueDataType: DataType

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
    export(): [ /* returnType */ boolean, /* cAbiArray */ object | null, /* cAbiSchema */ object | null ]
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Array extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Array

    static name: string
    static $gtype: GObject.GType<Array>

    // Constructors of Arrow-1.0.Arrow.Array

    constructor(config?: Array_ConstructProps) 
    _init(config?: Array_ConstructProps): void
    static import(cAbiArray: object, dataType: DataType): Array | null
}

interface ArrayBuilder_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.ArrayBuilder

    arrayBuilder?: object | null
}

interface ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.ArrayBuilder

    readonly arrayBuilder: object

    // Own fields of Arrow-1.0.Arrow.ArrayBuilder

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ArrayBuilder

    appendEmptyValue(): boolean
    /**
     * Append multiple empty values at once. It's more efficient than multiple
     * garrow_array_builder_append_empty_value() calls.
     * @param n The number of null values to be appended.
     */
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    /**
     * Append multiple nulls at once. It's more efficient than multiple
     * garrow_array_builder_append_null() calls.
     * @param n The number of null values to be appended.
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ArrayBuilder extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ArrayBuilder

    static name: string
    static $gtype: GObject.GType<ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.ArrayBuilder

    constructor(config?: ArrayBuilder_ConstructProps) 
    _init(config?: ArrayBuilder_ConstructProps): void
}

interface ArrayDatum_ConstructProps extends Datum_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.ArrayDatum

    value?: Array | null
}

interface ArrayDatum {

    // Own properties of Arrow-1.0.Arrow.ArrayDatum

    readonly value: Array

    // Own fields of Arrow-1.0.Arrow.ArrayDatum

    parentInstance: Datum

    // Class property signals of Arrow-1.0.Arrow.ArrayDatum

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
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

class ArrayDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.ArrayDatum

    static name: string
    static $gtype: GObject.GType<ArrayDatum>

    // Constructors of Arrow-1.0.Arrow.ArrayDatum

    constructor(config?: ArrayDatum_ConstructProps) 
    constructor(value: Array) 
    static new(value: Array): ArrayDatum
    _init(config?: ArrayDatum_ConstructProps): void
}

interface ArraySortOptions_ConstructProps extends FunctionOptions_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.ArraySortOptions

    /**
     * How to order values.
     */
    order?: SortOrder | null
}

interface ArraySortOptions {

    // Own properties of Arrow-1.0.Arrow.ArraySortOptions

    /**
     * How to order values.
     */
    order: SortOrder

    // Own fields of Arrow-1.0.Arrow.ArraySortOptions

    parentInstance: FunctionOptions

    // Owm methods of Arrow-1.0.Arrow.ArraySortOptions

    equal(otherOptions: ArraySortOptions): boolean

    // Overloads of equal

    equal(otherOptions: FunctionOptions | null): boolean
    equal(...args: any[]): any
    equal(args_or_otherOptions: any[] | FunctionOptions | null): boolean | any

    // Class property signals of Arrow-1.0.Arrow.ArraySortOptions

    connect(sigName: "notify::order", callback: (...args: any[]) => void): number
    on(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::order", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ArraySortOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.ArraySortOptions

    static name: string
    static $gtype: GObject.GType<ArraySortOptions>

    // Constructors of Arrow-1.0.Arrow.ArraySortOptions

    constructor(config?: ArraySortOptions_ConstructProps) 
    constructor(order: SortOrder) 
    static new(order: SortOrder): ArraySortOptions
    _init(config?: ArraySortOptions_ConstructProps): void
}

interface BaseBinaryScalar_ConstructProps extends Scalar_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.BaseBinaryScalar

    /**
     * The value of the scalar.
     */
    value?: Buffer | null
}

interface BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.BaseBinaryScalar

    /**
     * The value of the scalar.
     */
    readonly value: Buffer

    // Own fields of Arrow-1.0.Arrow.BaseBinaryScalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.BaseBinaryScalar

    getValue(): Buffer

    // Class property signals of Arrow-1.0.Arrow.BaseBinaryScalar

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

class BaseBinaryScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.BaseBinaryScalar

    static name: string
    static $gtype: GObject.GType<BaseBinaryScalar>

    // Constructors of Arrow-1.0.Arrow.BaseBinaryScalar

    constructor(config?: BaseBinaryScalar_ConstructProps) 
    _init(config?: BaseBinaryScalar_ConstructProps): void
}

interface BaseListScalar_ConstructProps extends Scalar_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.BaseListScalar

    /**
     * The value of the scalar.
     */
    value?: Array | null
}

interface BaseListScalar {

    // Own properties of Arrow-1.0.Arrow.BaseListScalar

    /**
     * The value of the scalar.
     */
    readonly value: Array

    // Own fields of Arrow-1.0.Arrow.BaseListScalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.BaseListScalar

    getValue(): Array

    // Class property signals of Arrow-1.0.Arrow.BaseListScalar

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

class BaseListScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.BaseListScalar

    static name: string
    static $gtype: GObject.GType<BaseListScalar>

    // Constructors of Arrow-1.0.Arrow.BaseListScalar

    constructor(config?: BaseListScalar_ConstructProps) 
    _init(config?: BaseListScalar_ConstructProps): void
}

interface BinaryArray_ConstructProps extends Array_ConstructProps {
}

interface BinaryArray {

    // Own fields of Arrow-1.0.Arrow.BinaryArray

    parentInstance: Array

    // Owm methods of Arrow-1.0.Arrow.BinaryArray

    getBuffer(): Buffer
    getDataBuffer(): Buffer
    getOffsetsBuffer(): Buffer
    getValue(i: number): any

    // Class property signals of Arrow-1.0.Arrow.BinaryArray

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

class BinaryArray extends Array {

    // Own properties of Arrow-1.0.Arrow.BinaryArray

    static name: string
    static $gtype: GObject.GType<BinaryArray>

    // Constructors of Arrow-1.0.Arrow.BinaryArray

    constructor(config?: BinaryArray_ConstructProps) 
    constructor(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): BinaryArray
    _init(config?: BinaryArray_ConstructProps): void
}

interface BinaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface BinaryArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.BinaryArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.BinaryArrayBuilder

    append(value: Uint8Array): boolean
    appendValue(value: Uint8Array): boolean
    appendValueBytes(value: any): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: any[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.BinaryArrayBuilder

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

class BinaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.BinaryArrayBuilder

    static name: string
    static $gtype: GObject.GType<BinaryArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.BinaryArrayBuilder

    constructor(config?: BinaryArrayBuilder_ConstructProps) 
    constructor() 
    static new(): BinaryArrayBuilder
    _init(config?: BinaryArrayBuilder_ConstructProps): void
}

interface BinaryDataType_ConstructProps extends DataType_ConstructProps {
}

interface BinaryDataType {

    // Own fields of Arrow-1.0.Arrow.BinaryDataType

    parentInstance: DataType

    // Class property signals of Arrow-1.0.Arrow.BinaryDataType

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

class BinaryDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.BinaryDataType

    static name: string
    static $gtype: GObject.GType<BinaryDataType>

    // Constructors of Arrow-1.0.Arrow.BinaryDataType

    constructor(config?: BinaryDataType_ConstructProps) 
    constructor() 
    static new(): BinaryDataType
    _init(config?: BinaryDataType_ConstructProps): void
}

interface BinaryDictionaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface BinaryDictionaryArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    appendArray(array: BinaryArray): boolean
    /**
     * Append dictionary indices directly without modifying the internal memo.
     * @param values The array of indices.
     * @param isValids The array of   %TRUE or %FALSE that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
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

class BinaryDictionaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    static name: string
    static $gtype: GObject.GType<BinaryDictionaryArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder

    constructor(config?: BinaryDictionaryArrayBuilder_ConstructProps) 
    constructor() 
    static new(): BinaryDictionaryArrayBuilder
    _init(config?: BinaryDictionaryArrayBuilder_ConstructProps): void
}

interface BinaryScalar_ConstructProps extends BaseBinaryScalar_ConstructProps {
}

interface BinaryScalar {

    // Own fields of Arrow-1.0.Arrow.BinaryScalar

    parentInstance: BaseBinaryScalar

    // Class property signals of Arrow-1.0.Arrow.BinaryScalar

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

class BinaryScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.BinaryScalar

    static name: string
    static $gtype: GObject.GType<BinaryScalar>

    // Constructors of Arrow-1.0.Arrow.BinaryScalar

    constructor(config?: BinaryScalar_ConstructProps) 
    constructor(value: Buffer) 
    static new(value: Buffer): BinaryScalar
    _init(config?: BinaryScalar_ConstructProps): void
}

interface BooleanArray_ConstructProps extends PrimitiveArray_ConstructProps {
}

interface BooleanArray {

    // Own fields of Arrow-1.0.Arrow.BooleanArray

    parentInstance: PrimitiveArray

    // Owm methods of Arrow-1.0.Arrow.BooleanArray

    and(right: BooleanArray): BooleanArray
    getValue(i: number): boolean
    getValues(): boolean[]
    invert(): BooleanArray
    or(right: BooleanArray): BooleanArray
    xor(right: BooleanArray): BooleanArray

    // Class property signals of Arrow-1.0.Arrow.BooleanArray

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

class BooleanArray extends PrimitiveArray {

    // Own properties of Arrow-1.0.Arrow.BooleanArray

    static name: string
    static $gtype: GObject.GType<BooleanArray>

    // Constructors of Arrow-1.0.Arrow.BooleanArray

    constructor(config?: BooleanArray_ConstructProps) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): BooleanArray
    _init(config?: BooleanArray_ConstructProps): void
}

interface BooleanArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface BooleanArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.BooleanArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.BooleanArrayBuilder

    append(value: boolean): boolean
    appendValue(value: boolean): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of boolean.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: boolean[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.BooleanArrayBuilder

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

class BooleanArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.BooleanArrayBuilder

    static name: string
    static $gtype: GObject.GType<BooleanArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.BooleanArrayBuilder

    constructor(config?: BooleanArrayBuilder_ConstructProps) 
    constructor() 
    static new(): BooleanArrayBuilder
    _init(config?: BooleanArrayBuilder_ConstructProps): void
}

interface BooleanDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}

interface BooleanDataType {

    // Own fields of Arrow-1.0.Arrow.BooleanDataType

    parentInstance: FixedWidthDataType

    // Class property signals of Arrow-1.0.Arrow.BooleanDataType

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

class BooleanDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.BooleanDataType

    static name: string
    static $gtype: GObject.GType<BooleanDataType>

    // Constructors of Arrow-1.0.Arrow.BooleanDataType

    constructor(config?: BooleanDataType_ConstructProps) 
    constructor() 
    static new(): BooleanDataType
    _init(config?: BooleanDataType_ConstructProps): void
}

interface BooleanScalar_ConstructProps extends Scalar_ConstructProps {
}

interface BooleanScalar {

    // Own fields of Arrow-1.0.Arrow.BooleanScalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.BooleanScalar

    getValue(): boolean

    // Class property signals of Arrow-1.0.Arrow.BooleanScalar

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

class BooleanScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.BooleanScalar

    static name: string
    static $gtype: GObject.GType<BooleanScalar>

    // Constructors of Arrow-1.0.Arrow.BooleanScalar

    constructor(config?: BooleanScalar_ConstructProps) 
    constructor(value: boolean) 
    static new(value: boolean): BooleanScalar
    _init(config?: BooleanScalar_ConstructProps): void
}

interface Buffer_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Buffer

    buffer?: object | null
    data?: any | null
    parent?: Buffer | null
}

interface Buffer {

    // Own properties of Arrow-1.0.Arrow.Buffer

    readonly buffer: object
    readonly data: any
    readonly parent: Buffer

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
     */
    getData(key?: string): object | null
    getData(...args: any[]): any
    getData(args_or_key?: any[] | string): any | object | null
    getMutableData(): any | null
    getParent(): Buffer | null
    getSize(): number
    isMutable(): boolean
    slice(offset: number, size?: number): Buffer

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Buffer extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Buffer

    static name: string
    static $gtype: GObject.GType<Buffer>

    // Constructors of Arrow-1.0.Arrow.Buffer

    constructor(config?: Buffer_ConstructProps) 
    constructor(data: Uint8Array) 
    static new(data: Uint8Array): Buffer
    static newBytes(data: any): Buffer
    _init(config?: Buffer_ConstructProps): void
}

interface BufferInputStream_ConstructProps extends File_ConstructProps, Readable_ConstructProps, SeekableInputStream_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.BufferInputStream

    buffer?: Buffer | null
}

interface BufferInputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.BufferInputStream

    readonly buffer: Buffer

    // Own fields of Arrow-1.0.Arrow.BufferInputStream

    parentInstance: SeekableInputStream

    // Owm methods of Arrow-1.0.Arrow.BufferInputStream

    getBuffer(): Buffer

    // Conflicting methods

    close(...args: any[]): any
    read(...args: any[]): any
    readBytes(...args: any[]): any

    // Class property signals of Arrow-1.0.Arrow.BufferInputStream

    connect(sigName: "notify::buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer", ...args: any[]): void
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

class BufferInputStream extends SeekableInputStream {

    // Own properties of Arrow-1.0.Arrow.BufferInputStream

    static name: string
    static $gtype: GObject.GType<BufferInputStream>

    // Constructors of Arrow-1.0.Arrow.BufferInputStream

    constructor(config?: BufferInputStream_ConstructProps) 
    constructor(buffer: Buffer) 
    static new(buffer: Buffer): BufferInputStream
    _init(config?: BufferInputStream_ConstructProps): void
}

interface BufferOutputStream_ConstructProps extends File_ConstructProps, Writable_ConstructProps, OutputStream_ConstructProps {
}

interface BufferOutputStream extends File, Writable {

    // Class property signals of Arrow-1.0.Arrow.BufferOutputStream

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
class BufferOutputStream extends OutputStream {

    // Own properties of Arrow-1.0.Arrow.BufferOutputStream

    static name: string
    static $gtype: GObject.GType<BufferOutputStream>

    // Constructors of Arrow-1.0.Arrow.BufferOutputStream

    constructor(config?: BufferOutputStream_ConstructProps) 
    constructor(buffer: ResizableBuffer) 
    static new(buffer: ResizableBuffer): BufferOutputStream
    _init(config?: BufferOutputStream_ConstructProps): void
}

interface CSVReadOptions_ConstructProps extends GObject.Object_ConstructProps {

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

interface CSVReadOptions {

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

    // Own fields of Arrow-1.0.Arrow.CSVReadOptions

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.CSVReadOptions

    addColumnName(columnName: string): void
    /**
     * Add value type of a column.
     * @param name The name of the target column.
     * @param dataType The #GArrowDataType for the column.
     */
    addColumnType(name: string, dataType: DataType): void
    addFalseValue(falseValue: string): void
    addNullValue(nullValue: string): void
    /**
     * Add value types for columns in the schema.
     * @param schema The #GArrowSchema that specifies columns and their types.
     */
    addSchema(schema: Schema): void
    addTrueValue(trueValue: string): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CSVReadOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.CSVReadOptions

    static name: string
    static $gtype: GObject.GType<CSVReadOptions>

    // Constructors of Arrow-1.0.Arrow.CSVReadOptions

    constructor(config?: CSVReadOptions_ConstructProps) 
    constructor() 
    static new(): CSVReadOptions
    _init(config?: CSVReadOptions_ConstructProps): void
}

interface CSVReader_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.CSVReader

    csvTableReader?: object | null
    input?: InputStream | null
}

interface CSVReader {

    // Own properties of Arrow-1.0.Arrow.CSVReader

    readonly csvTableReader: object
    readonly input: InputStream

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CSVReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.CSVReader

    static name: string
    static $gtype: GObject.GType<CSVReader>

    // Constructors of Arrow-1.0.Arrow.CSVReader

    constructor(config?: CSVReader_ConstructProps) 
    constructor(input: InputStream, options: CSVReadOptions | null) 
    static new(input: InputStream, options: CSVReadOptions | null): CSVReader
    _init(config?: CSVReader_ConstructProps): void
}

interface CallExpression_ConstructProps extends Expression_ConstructProps {
}

interface CallExpression {

    // Own fields of Arrow-1.0.Arrow.CallExpression

    parentInstance: Expression

    // Class property signals of Arrow-1.0.Arrow.CallExpression

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CallExpression extends Expression {

    // Own properties of Arrow-1.0.Arrow.CallExpression

    static name: string
    static $gtype: GObject.GType<CallExpression>

    // Constructors of Arrow-1.0.Arrow.CallExpression

    constructor(config?: CallExpression_ConstructProps) 
    constructor(function_: string, arguments_: Expression[], options: FunctionOptions | null) 
    static new(function_: string, arguments_: Expression[], options: FunctionOptions | null): CallExpression
    _init(config?: CallExpression_ConstructProps): void
}

interface CastOptions_ConstructProps extends FunctionOptions_ConstructProps {

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

interface CastOptions {

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

    // Own fields of Arrow-1.0.Arrow.CastOptions

    parentInstance: FunctionOptions

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CastOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.CastOptions

    static name: string
    static $gtype: GObject.GType<CastOptions>

    // Constructors of Arrow-1.0.Arrow.CastOptions

    constructor(config?: CastOptions_ConstructProps) 
    constructor() 
    static new(): CastOptions
    _init(config?: CastOptions_ConstructProps): void
}

interface ChunkedArray_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.ChunkedArray

    chunkedArray?: object | null
}

interface ChunkedArray {

    // Own properties of Arrow-1.0.Arrow.ChunkedArray

    readonly chunkedArray: object

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ChunkedArray extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ChunkedArray

    static name: string
    static $gtype: GObject.GType<ChunkedArray>

    // Constructors of Arrow-1.0.Arrow.ChunkedArray

    constructor(config?: ChunkedArray_ConstructProps) 
    constructor(chunks: Array[]) 
    static new(chunks: Array[]): ChunkedArray
    _init(config?: ChunkedArray_ConstructProps): void
}

interface ChunkedArrayDatum_ConstructProps extends Datum_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.ChunkedArrayDatum

    value?: ChunkedArray | null
}

interface ChunkedArrayDatum {

    // Own properties of Arrow-1.0.Arrow.ChunkedArrayDatum

    readonly value: ChunkedArray

    // Own fields of Arrow-1.0.Arrow.ChunkedArrayDatum

    parentInstance: Datum

    // Class property signals of Arrow-1.0.Arrow.ChunkedArrayDatum

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
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

class ChunkedArrayDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.ChunkedArrayDatum

    static name: string
    static $gtype: GObject.GType<ChunkedArrayDatum>

    // Constructors of Arrow-1.0.Arrow.ChunkedArrayDatum

    constructor(config?: ChunkedArrayDatum_ConstructProps) 
    constructor(value: ChunkedArray) 
    static new(value: ChunkedArray): ChunkedArrayDatum
    _init(config?: ChunkedArrayDatum_ConstructProps): void
}

interface Codec_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Codec

    codec?: object | null
}

interface Codec {

    // Own properties of Arrow-1.0.Arrow.Codec

    readonly codec: object

    // Own fields of Arrow-1.0.Arrow.Codec

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Codec

    getCompressionLevel(): number
    getCompressionType(): CompressionType
    getName(): string

    // Class property signals of Arrow-1.0.Arrow.Codec

    connect(sigName: "notify::codec", callback: (...args: any[]) => void): number
    on(sigName: "notify::codec", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::codec", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::codec", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Codec extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Codec

    static name: string
    static $gtype: GObject.GType<Codec>

    // Constructors of Arrow-1.0.Arrow.Codec

    constructor(config?: Codec_ConstructProps) 
    constructor(type: CompressionType) 
    static new(type: CompressionType): Codec
    _init(config?: Codec_ConstructProps): void
}

interface CompressedInputStream_ConstructProps extends File_ConstructProps, Readable_ConstructProps, InputStream_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.CompressedInputStream

    codec?: Codec | null
    raw?: InputStream | null
}

interface CompressedInputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.CompressedInputStream

    readonly codec: Codec
    readonly raw: InputStream

    // Own fields of Arrow-1.0.Arrow.CompressedInputStream

    parentInstance: InputStream

    // Conflicting methods

    close(...args: any[]): any
    read(...args: any[]): any
    readBytes(...args: any[]): any

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

class CompressedInputStream extends InputStream {

    // Own properties of Arrow-1.0.Arrow.CompressedInputStream

    static name: string
    static $gtype: GObject.GType<CompressedInputStream>

    // Constructors of Arrow-1.0.Arrow.CompressedInputStream

    constructor(config?: CompressedInputStream_ConstructProps) 
    constructor(codec: Codec, raw: InputStream) 
    static new(codec: Codec, raw: InputStream): CompressedInputStream
    _init(config?: CompressedInputStream_ConstructProps): void
}

interface CompressedOutputStream_ConstructProps extends File_ConstructProps, Writable_ConstructProps, OutputStream_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.CompressedOutputStream

    codec?: Codec | null
    raw?: OutputStream | null
}

interface CompressedOutputStream extends File, Writable {

    // Own properties of Arrow-1.0.Arrow.CompressedOutputStream

    readonly codec: Codec
    readonly raw: OutputStream

    // Own fields of Arrow-1.0.Arrow.CompressedOutputStream

    parentInstance: OutputStream

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

class CompressedOutputStream extends OutputStream {

    // Own properties of Arrow-1.0.Arrow.CompressedOutputStream

    static name: string
    static $gtype: GObject.GType<CompressedOutputStream>

    // Constructors of Arrow-1.0.Arrow.CompressedOutputStream

    constructor(config?: CompressedOutputStream_ConstructProps) 
    constructor(codec: Codec, raw: OutputStream) 
    static new(codec: Codec, raw: OutputStream): CompressedOutputStream
    _init(config?: CompressedOutputStream_ConstructProps): void
}

interface CountOptions_ConstructProps extends FunctionOptions_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.CountOptions

    mode?: CountMode | null
}

interface CountOptions {

    // Own properties of Arrow-1.0.Arrow.CountOptions

    mode: CountMode

    // Own fields of Arrow-1.0.Arrow.CountOptions

    parentInstance: FunctionOptions

    // Class property signals of Arrow-1.0.Arrow.CountOptions

    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CountOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.CountOptions

    static name: string
    static $gtype: GObject.GType<CountOptions>

    // Constructors of Arrow-1.0.Arrow.CountOptions

    constructor(config?: CountOptions_ConstructProps) 
    constructor() 
    static new(): CountOptions
    _init(config?: CountOptions_ConstructProps): void
}

interface DataType_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.DataType

    dataType?: object | null
}

interface DataType {

    // Own properties of Arrow-1.0.Arrow.DataType

    readonly dataType: object

    // Own fields of Arrow-1.0.Arrow.DataType

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.DataType

    equal(otherDataType: DataType): boolean
    export(): object | null
    getId(): Type
    getName(): string
    toString(): string

    // Class property signals of Arrow-1.0.Arrow.DataType

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

class DataType extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.DataType

    static name: string
    static $gtype: GObject.GType<DataType>

    // Constructors of Arrow-1.0.Arrow.DataType

    constructor(config?: DataType_ConstructProps) 
    _init(config?: DataType_ConstructProps): void
    static import(cAbiSchema: object): DataType | null
}

interface Date32Array_ConstructProps extends NumericArray_ConstructProps {
}

interface Date32Array {

    // Own fields of Arrow-1.0.Arrow.Date32Array

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.Date32Array

    getValue(i: number): number
    getValues(): number[]

    // Class property signals of Arrow-1.0.Arrow.Date32Array

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

class Date32Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Date32Array

    static name: string
    static $gtype: GObject.GType<Date32Array>

    // Constructors of Arrow-1.0.Arrow.Date32Array

    constructor(config?: Date32Array_ConstructProps) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Date32Array
    _init(config?: Date32Array_ConstructProps): void
}

interface Date32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface Date32ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Date32ArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.Date32ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of days since UNIX epoch in signed 32bit integer.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Date32ArrayBuilder

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

class Date32ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Date32ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Date32ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Date32ArrayBuilder

    constructor(config?: Date32ArrayBuilder_ConstructProps) 
    constructor() 
    static new(): Date32ArrayBuilder
    _init(config?: Date32ArrayBuilder_ConstructProps): void
}

interface Date32DataType_ConstructProps extends TemporalDataType_ConstructProps {
}

interface Date32DataType {

    // Own fields of Arrow-1.0.Arrow.Date32DataType

    parentInstance: TemporalDataType

    // Class property signals of Arrow-1.0.Arrow.Date32DataType

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

class Date32DataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.Date32DataType

    static name: string
    static $gtype: GObject.GType<Date32DataType>

    // Constructors of Arrow-1.0.Arrow.Date32DataType

    constructor(config?: Date32DataType_ConstructProps) 
    constructor() 
    static new(): Date32DataType
    _init(config?: Date32DataType_ConstructProps): void
}

interface Date32Scalar_ConstructProps extends Scalar_ConstructProps {
}

interface Date32Scalar {

    // Own fields of Arrow-1.0.Arrow.Date32Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.Date32Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Date32Scalar

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

class Date32Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Date32Scalar

    static name: string
    static $gtype: GObject.GType<Date32Scalar>

    // Constructors of Arrow-1.0.Arrow.Date32Scalar

    constructor(config?: Date32Scalar_ConstructProps) 
    constructor(value: number) 
    static new(value: number): Date32Scalar
    _init(config?: Date32Scalar_ConstructProps): void
}

interface Date64Array_ConstructProps extends NumericArray_ConstructProps {
}

interface Date64Array {

    // Own fields of Arrow-1.0.Arrow.Date64Array

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.Date64Array

    getValue(i: number): number
    getValues(): number[]

    // Class property signals of Arrow-1.0.Arrow.Date64Array

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

class Date64Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Date64Array

    static name: string
    static $gtype: GObject.GType<Date64Array>

    // Constructors of Arrow-1.0.Arrow.Date64Array

    constructor(config?: Date64Array_ConstructProps) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Date64Array
    _init(config?: Date64Array_ConstructProps): void
}

interface Date64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface Date64ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Date64ArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.Date64ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of milliseconds since UNIX epoch in signed 64bit integer.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Date64ArrayBuilder

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

class Date64ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Date64ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Date64ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Date64ArrayBuilder

    constructor(config?: Date64ArrayBuilder_ConstructProps) 
    constructor() 
    static new(): Date64ArrayBuilder
    _init(config?: Date64ArrayBuilder_ConstructProps): void
}

interface Date64DataType_ConstructProps extends TemporalDataType_ConstructProps {
}

interface Date64DataType {

    // Own fields of Arrow-1.0.Arrow.Date64DataType

    parentInstance: TemporalDataType

    // Class property signals of Arrow-1.0.Arrow.Date64DataType

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

class Date64DataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.Date64DataType

    static name: string
    static $gtype: GObject.GType<Date64DataType>

    // Constructors of Arrow-1.0.Arrow.Date64DataType

    constructor(config?: Date64DataType_ConstructProps) 
    constructor() 
    static new(): Date64DataType
    _init(config?: Date64DataType_ConstructProps): void
}

interface Date64Scalar_ConstructProps extends Scalar_ConstructProps {
}

interface Date64Scalar {

    // Own fields of Arrow-1.0.Arrow.Date64Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.Date64Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Date64Scalar

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

class Date64Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Date64Scalar

    static name: string
    static $gtype: GObject.GType<Date64Scalar>

    // Constructors of Arrow-1.0.Arrow.Date64Scalar

    constructor(config?: Date64Scalar_ConstructProps) 
    constructor(value: number) 
    static new(value: number): Date64Scalar
    _init(config?: Date64Scalar_ConstructProps): void
}

interface Datum_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Datum

    datum?: object | null
}

interface Datum {

    // Own properties of Arrow-1.0.Arrow.Datum

    readonly datum: object

    // Own fields of Arrow-1.0.Arrow.Datum

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Datum

    equal(otherDatum: Datum): boolean
    isArray(): boolean
    isArrayLike(): boolean
    isScalar(): boolean
    isValue(): boolean
    toString(): string

    // Class property signals of Arrow-1.0.Arrow.Datum

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

class Datum extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Datum

    static name: string
    static $gtype: GObject.GType<Datum>

    // Constructors of Arrow-1.0.Arrow.Datum

    constructor(config?: Datum_ConstructProps) 
    _init(config?: Datum_ConstructProps): void
}

interface DayTimeIntervalDataType_ConstructProps extends IntervalDataType_ConstructProps {
}

interface DayTimeIntervalDataType {

    // Own fields of Arrow-1.0.Arrow.DayTimeIntervalDataType

    parentInstance: IntervalDataType

    // Class property signals of Arrow-1.0.Arrow.DayTimeIntervalDataType

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

class DayTimeIntervalDataType extends IntervalDataType {

    // Own properties of Arrow-1.0.Arrow.DayTimeIntervalDataType

    static name: string
    static $gtype: GObject.GType<DayTimeIntervalDataType>

    // Constructors of Arrow-1.0.Arrow.DayTimeIntervalDataType

    constructor(config?: DayTimeIntervalDataType_ConstructProps) 
    constructor() 
    static new(): DayTimeIntervalDataType
    _init(config?: DayTimeIntervalDataType_ConstructProps): void
}

interface Decimal128_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Decimal128

    decimal128?: object | null
}

interface Decimal128 {

    // Own properties of Arrow-1.0.Arrow.Decimal128

    readonly decimal128: object

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
    toString(): string
    toStringScale(scale: number): string

    // Class property signals of Arrow-1.0.Arrow.Decimal128

    connect(sigName: "notify::decimal128", callback: (...args: any[]) => void): number
    on(sigName: "notify::decimal128", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decimal128", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decimal128", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decimal128", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Decimal128 extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Decimal128

    static name: string
    static $gtype: GObject.GType<Decimal128>

    // Constructors of Arrow-1.0.Arrow.Decimal128

    constructor(config?: Decimal128_ConstructProps) 
    static newInteger(data: number): Decimal128
    static newString(data: string): Decimal128
    _init(config?: Decimal128_ConstructProps): void
}

interface Decimal128Array_ConstructProps extends FixedSizeBinaryArray_ConstructProps {
}

interface Decimal128Array {

    // Own fields of Arrow-1.0.Arrow.Decimal128Array

    parentInstance: FixedSizeBinaryArray

    // Owm methods of Arrow-1.0.Arrow.Decimal128Array

    formatValue(i: number): string
    getValue(i: number): Decimal128

    // Overloads of getValue

    getValue(i: number): any
    getValue(...args: any[]): any
    getValue(args_or_i: any[] | number): Decimal128 | any

    // Class property signals of Arrow-1.0.Arrow.Decimal128Array

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

class Decimal128Array extends FixedSizeBinaryArray {

    // Own properties of Arrow-1.0.Arrow.Decimal128Array

    static name: string
    static $gtype: GObject.GType<Decimal128Array>

    // Constructors of Arrow-1.0.Arrow.Decimal128Array

    constructor(config?: Decimal128Array_ConstructProps) 
    _init(config?: Decimal128Array_ConstructProps): void
}

interface Decimal128ArrayBuilder_ConstructProps extends FixedSizeBinaryArrayBuilder_ConstructProps {
}

interface Decimal128ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    parentInstance: FixedSizeBinaryArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    append(value: Decimal128): boolean
    appendValue(value: Decimal128 | null): boolean

    // Overloads of appendValue

    appendValue(value: Uint8Array | null): boolean
    appendValue(...args: any[]): any
    appendValue(args_or_value: any[] | Uint8Array | null): boolean | any
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GArrowDecimal128.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: Decimal128[], isValids?: boolean[] | null): boolean

    // Overloads of appendValues

    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: any[], isValids?: boolean[] | null): boolean
    appendValues(...args: any[]): any
    appendValues(args_or_values: any[], isValids?: boolean[] | null): boolean | any

    // Class property signals of Arrow-1.0.Arrow.Decimal128ArrayBuilder

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

class Decimal128ArrayBuilder extends FixedSizeBinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Decimal128ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Decimal128ArrayBuilder

    constructor(config?: Decimal128ArrayBuilder_ConstructProps) 
    constructor(dataType: Decimal128DataType) 
    static new(dataType: Decimal128DataType): Decimal128ArrayBuilder

    // Overloads of new

    static new(dataType: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder
    _init(config?: Decimal128ArrayBuilder_ConstructProps): void
}

interface Decimal128DataType_ConstructProps extends DecimalDataType_ConstructProps {
}

interface Decimal128DataType {

    // Own fields of Arrow-1.0.Arrow.Decimal128DataType

    parentInstance: DecimalDataType

    // Class property signals of Arrow-1.0.Arrow.Decimal128DataType

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

class Decimal128DataType extends DecimalDataType {

    // Own properties of Arrow-1.0.Arrow.Decimal128DataType

    static name: string
    static $gtype: GObject.GType<Decimal128DataType>

    // Constructors of Arrow-1.0.Arrow.Decimal128DataType

    constructor(config?: Decimal128DataType_ConstructProps) 
    constructor(precision: number, scale: number) 
    static new(precision: number, scale: number): Decimal128DataType

    // Overloads of new

    static new(precision: number, scale: number): DecimalDataType
    static new(byteWidth: number): FixedSizeBinaryDataType
    _init(config?: Decimal128DataType_ConstructProps): void
    static maxPrecision(): number
}

interface Decimal128Scalar_ConstructProps extends Scalar_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Decimal128Scalar

    /**
     * The value of the scalar.
     */
    value?: Decimal128 | null
}

interface Decimal128Scalar {

    // Own properties of Arrow-1.0.Arrow.Decimal128Scalar

    /**
     * The value of the scalar.
     */
    readonly value: Decimal128

    // Own fields of Arrow-1.0.Arrow.Decimal128Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.Decimal128Scalar

    getValue(): Decimal128

    // Class property signals of Arrow-1.0.Arrow.Decimal128Scalar

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

class Decimal128Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Decimal128Scalar

    static name: string
    static $gtype: GObject.GType<Decimal128Scalar>

    // Constructors of Arrow-1.0.Arrow.Decimal128Scalar

    constructor(config?: Decimal128Scalar_ConstructProps) 
    constructor(dataType: Decimal128DataType, value: Decimal128) 
    static new(dataType: Decimal128DataType, value: Decimal128): Decimal128Scalar
    _init(config?: Decimal128Scalar_ConstructProps): void
}

interface Decimal256_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Decimal256

    decimal256?: object | null
}

interface Decimal256 {

    // Own properties of Arrow-1.0.Arrow.Decimal256

    readonly decimal256: object

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
    toString(): string
    toStringScale(scale: number): string

    // Class property signals of Arrow-1.0.Arrow.Decimal256

    connect(sigName: "notify::decimal256", callback: (...args: any[]) => void): number
    on(sigName: "notify::decimal256", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decimal256", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decimal256", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decimal256", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Decimal256 extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Decimal256

    static name: string
    static $gtype: GObject.GType<Decimal256>

    // Constructors of Arrow-1.0.Arrow.Decimal256

    constructor(config?: Decimal256_ConstructProps) 
    static newInteger(data: number): Decimal256
    static newString(data: string): Decimal256
    _init(config?: Decimal256_ConstructProps): void
}

interface Decimal256Array_ConstructProps extends FixedSizeBinaryArray_ConstructProps {
}

interface Decimal256Array {

    // Own fields of Arrow-1.0.Arrow.Decimal256Array

    parentInstance: FixedSizeBinaryArray

    // Owm methods of Arrow-1.0.Arrow.Decimal256Array

    formatValue(i: number): string
    getValue(i: number): Decimal256

    // Overloads of getValue

    getValue(i: number): any
    getValue(...args: any[]): any
    getValue(args_or_i: any[] | number): Decimal256 | any

    // Class property signals of Arrow-1.0.Arrow.Decimal256Array

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

class Decimal256Array extends FixedSizeBinaryArray {

    // Own properties of Arrow-1.0.Arrow.Decimal256Array

    static name: string
    static $gtype: GObject.GType<Decimal256Array>

    // Constructors of Arrow-1.0.Arrow.Decimal256Array

    constructor(config?: Decimal256Array_ConstructProps) 
    _init(config?: Decimal256Array_ConstructProps): void
}

interface Decimal256ArrayBuilder_ConstructProps extends FixedSizeBinaryArrayBuilder_ConstructProps {
}

interface Decimal256ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    parentInstance: FixedSizeBinaryArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    appendValue(value: Decimal256 | null): boolean

    // Overloads of appendValue

    appendValue(value: Uint8Array | null): boolean
    appendValue(...args: any[]): any
    appendValue(args_or_value: any[] | Uint8Array | null): boolean | any
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GArrowDecimal256.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: Decimal256[], isValids?: boolean[] | null): boolean

    // Overloads of appendValues

    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: any[], isValids?: boolean[] | null): boolean
    appendValues(...args: any[]): any
    appendValues(args_or_values: any[], isValids?: boolean[] | null): boolean | any

    // Class property signals of Arrow-1.0.Arrow.Decimal256ArrayBuilder

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

class Decimal256ArrayBuilder extends FixedSizeBinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Decimal256ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Decimal256ArrayBuilder

    constructor(config?: Decimal256ArrayBuilder_ConstructProps) 
    constructor(dataType: Decimal256DataType) 
    static new(dataType: Decimal256DataType): Decimal256ArrayBuilder

    // Overloads of new

    static new(dataType: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder
    _init(config?: Decimal256ArrayBuilder_ConstructProps): void
}

interface Decimal256DataType_ConstructProps extends DecimalDataType_ConstructProps {
}

interface Decimal256DataType {

    // Own fields of Arrow-1.0.Arrow.Decimal256DataType

    parentInstance: DecimalDataType

    // Class property signals of Arrow-1.0.Arrow.Decimal256DataType

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

class Decimal256DataType extends DecimalDataType {

    // Own properties of Arrow-1.0.Arrow.Decimal256DataType

    static name: string
    static $gtype: GObject.GType<Decimal256DataType>

    // Constructors of Arrow-1.0.Arrow.Decimal256DataType

    constructor(config?: Decimal256DataType_ConstructProps) 
    constructor(precision: number, scale: number) 
    static new(precision: number, scale: number): Decimal256DataType

    // Overloads of new

    static new(precision: number, scale: number): DecimalDataType
    static new(byteWidth: number): FixedSizeBinaryDataType
    _init(config?: Decimal256DataType_ConstructProps): void
    static maxPrecision(): number
}

interface Decimal256Scalar_ConstructProps extends Scalar_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Decimal256Scalar

    /**
     * The value of the scalar.
     */
    value?: Decimal256 | null
}

interface Decimal256Scalar {

    // Own properties of Arrow-1.0.Arrow.Decimal256Scalar

    /**
     * The value of the scalar.
     */
    readonly value: Decimal256

    // Own fields of Arrow-1.0.Arrow.Decimal256Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.Decimal256Scalar

    getValue(): Decimal256

    // Class property signals of Arrow-1.0.Arrow.Decimal256Scalar

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

class Decimal256Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Decimal256Scalar

    static name: string
    static $gtype: GObject.GType<Decimal256Scalar>

    // Constructors of Arrow-1.0.Arrow.Decimal256Scalar

    constructor(config?: Decimal256Scalar_ConstructProps) 
    constructor(dataType: Decimal256DataType, value: Decimal256) 
    static new(dataType: Decimal256DataType, value: Decimal256): Decimal256Scalar
    _init(config?: Decimal256Scalar_ConstructProps): void
}

interface DecimalDataType_ConstructProps extends FixedSizeBinaryDataType_ConstructProps {
}

interface DecimalDataType {

    // Own fields of Arrow-1.0.Arrow.DecimalDataType

    parentInstance: FixedSizeBinaryDataType

    // Owm methods of Arrow-1.0.Arrow.DecimalDataType

    getPrecision(): number
    getScale(): number

    // Class property signals of Arrow-1.0.Arrow.DecimalDataType

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

class DecimalDataType extends FixedSizeBinaryDataType {

    // Own properties of Arrow-1.0.Arrow.DecimalDataType

    static name: string
    static $gtype: GObject.GType<DecimalDataType>

    // Constructors of Arrow-1.0.Arrow.DecimalDataType

    constructor(config?: DecimalDataType_ConstructProps) 
    constructor(precision: number, scale: number) 
    static new(precision: number, scale: number): DecimalDataType

    // Overloads of new

    static new(byteWidth: number): FixedSizeBinaryDataType
    _init(config?: DecimalDataType_ConstructProps): void
}

interface DenseUnionArray_ConstructProps extends UnionArray_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.DenseUnionArray

    valueOffsets?: Int32Array | null
}

interface DenseUnionArray {

    // Own properties of Arrow-1.0.Arrow.DenseUnionArray

    readonly valueOffsets: Int32Array

    // Own fields of Arrow-1.0.Arrow.DenseUnionArray

    parentInstance: UnionArray

    // Class property signals of Arrow-1.0.Arrow.DenseUnionArray

    connect(sigName: "notify::value-offsets", callback: (...args: any[]) => void): number
    on(sigName: "notify::value-offsets", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value-offsets", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value-offsets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value-offsets", ...args: any[]): void
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

class DenseUnionArray extends UnionArray {

    // Own properties of Arrow-1.0.Arrow.DenseUnionArray

    static name: string
    static $gtype: GObject.GType<DenseUnionArray>

    // Constructors of Arrow-1.0.Arrow.DenseUnionArray

    constructor(config?: DenseUnionArray_ConstructProps) 
    constructor(typeIds: Int8Array, valueOffsets: Int32Array, fields: Array[]) 
    static new(typeIds: Int8Array, valueOffsets: Int32Array, fields: Array[]): DenseUnionArray
    static newDataType(dataType: DenseUnionDataType, typeIds: Int8Array, valueOffsets: Int32Array, fields: Array[]): DenseUnionArray
    _init(config?: DenseUnionArray_ConstructProps): void
}

interface DenseUnionDataType_ConstructProps extends UnionDataType_ConstructProps {
}

interface DenseUnionDataType {

    // Own fields of Arrow-1.0.Arrow.DenseUnionDataType

    parentInstance: UnionDataType

    // Class property signals of Arrow-1.0.Arrow.DenseUnionDataType

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

class DenseUnionDataType extends UnionDataType {

    // Own properties of Arrow-1.0.Arrow.DenseUnionDataType

    static name: string
    static $gtype: GObject.GType<DenseUnionDataType>

    // Constructors of Arrow-1.0.Arrow.DenseUnionDataType

    constructor(config?: DenseUnionDataType_ConstructProps) 
    constructor(fields: Field[], typeCodes: Uint8Array) 
    static new(fields: Field[], typeCodes: Uint8Array): DenseUnionDataType
    _init(config?: DenseUnionDataType_ConstructProps): void
}

interface DenseUnionScalar_ConstructProps extends UnionScalar_ConstructProps {
}

interface DenseUnionScalar {

    // Own fields of Arrow-1.0.Arrow.DenseUnionScalar

    parentInstance: UnionScalar

    // Class property signals of Arrow-1.0.Arrow.DenseUnionScalar

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

class DenseUnionScalar extends UnionScalar {

    // Own properties of Arrow-1.0.Arrow.DenseUnionScalar

    static name: string
    static $gtype: GObject.GType<DenseUnionScalar>

    // Constructors of Arrow-1.0.Arrow.DenseUnionScalar

    constructor(config?: DenseUnionScalar_ConstructProps) 
    constructor(dataType: DenseUnionDataType, typeCode: number, value: Scalar) 
    static new(dataType: DenseUnionDataType, typeCode: number, value: Scalar): DenseUnionScalar
    _init(config?: DenseUnionScalar_ConstructProps): void
}

interface DictionaryArray_ConstructProps extends Array_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.DictionaryArray

    dictionary?: Array | null
    indices?: Array | null
}

interface DictionaryArray {

    // Own properties of Arrow-1.0.Arrow.DictionaryArray

    readonly dictionary: Array
    readonly indices: Array

    // Own fields of Arrow-1.0.Arrow.DictionaryArray

    parentInstance: Array

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

class DictionaryArray extends Array {

    // Own properties of Arrow-1.0.Arrow.DictionaryArray

    static name: string
    static $gtype: GObject.GType<DictionaryArray>

    // Constructors of Arrow-1.0.Arrow.DictionaryArray

    constructor(config?: DictionaryArray_ConstructProps) 
    constructor(dataType: DataType, indices: Array, dictionary: Array) 
    static new(dataType: DataType, indices: Array, dictionary: Array): DictionaryArray
    _init(config?: DictionaryArray_ConstructProps): void
}

interface DictionaryDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}

interface DictionaryDataType {

    // Own fields of Arrow-1.0.Arrow.DictionaryDataType

    parentInstance: FixedWidthDataType

    // Owm methods of Arrow-1.0.Arrow.DictionaryDataType

    getIndexDataType(): DataType
    getValueDataType(): DataType
    isOrdered(): boolean

    // Class property signals of Arrow-1.0.Arrow.DictionaryDataType

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

class DictionaryDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.DictionaryDataType

    static name: string
    static $gtype: GObject.GType<DictionaryDataType>

    // Constructors of Arrow-1.0.Arrow.DictionaryDataType

    constructor(config?: DictionaryDataType_ConstructProps) 
    constructor(indexDataType: DataType, valueDataType: DataType, ordered: boolean) 
    static new(indexDataType: DataType, valueDataType: DataType, ordered: boolean): DictionaryDataType
    _init(config?: DictionaryDataType_ConstructProps): void
}

interface DoubleArray_ConstructProps extends NumericArray_ConstructProps {
}

interface DoubleArray {

    // Own fields of Arrow-1.0.Arrow.DoubleArray

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.DoubleArray

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.DoubleArray

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

class DoubleArray extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.DoubleArray

    static name: string
    static $gtype: GObject.GType<DoubleArray>

    // Constructors of Arrow-1.0.Arrow.DoubleArray

    constructor(config?: DoubleArray_ConstructProps) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): DoubleArray
    _init(config?: DoubleArray_ConstructProps): void
}

interface DoubleArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface DoubleArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.DoubleArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.DoubleArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of double.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.DoubleArrayBuilder

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

class DoubleArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.DoubleArrayBuilder

    static name: string
    static $gtype: GObject.GType<DoubleArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.DoubleArrayBuilder

    constructor(config?: DoubleArrayBuilder_ConstructProps) 
    constructor() 
    static new(): DoubleArrayBuilder
    _init(config?: DoubleArrayBuilder_ConstructProps): void
}

interface DoubleDataType_ConstructProps extends FloatingPointDataType_ConstructProps {
}

interface DoubleDataType {

    // Own fields of Arrow-1.0.Arrow.DoubleDataType

    parentInstance: FloatingPointDataType

    // Class property signals of Arrow-1.0.Arrow.DoubleDataType

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

class DoubleDataType extends FloatingPointDataType {

    // Own properties of Arrow-1.0.Arrow.DoubleDataType

    static name: string
    static $gtype: GObject.GType<DoubleDataType>

    // Constructors of Arrow-1.0.Arrow.DoubleDataType

    constructor(config?: DoubleDataType_ConstructProps) 
    constructor() 
    static new(): DoubleDataType
    _init(config?: DoubleDataType_ConstructProps): void
}

interface DoubleScalar_ConstructProps extends Scalar_ConstructProps {
}

interface DoubleScalar {

    // Own fields of Arrow-1.0.Arrow.DoubleScalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.DoubleScalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.DoubleScalar

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

class DoubleScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.DoubleScalar

    static name: string
    static $gtype: GObject.GType<DoubleScalar>

    // Constructors of Arrow-1.0.Arrow.DoubleScalar

    constructor(config?: DoubleScalar_ConstructProps) 
    constructor(value: number) 
    static new(value: number): DoubleScalar
    _init(config?: DoubleScalar_ConstructProps): void
}

interface EqualOptions_ConstructProps extends GObject.Object_ConstructProps {

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

interface EqualOptions {

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class EqualOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.EqualOptions

    static name: string
    static $gtype: GObject.GType<EqualOptions>

    // Constructors of Arrow-1.0.Arrow.EqualOptions

    constructor(config?: EqualOptions_ConstructProps) 
    constructor() 
    static new(): EqualOptions
    _init(config?: EqualOptions_ConstructProps): void
}

interface ExecuteContext_ConstructProps extends GObject.Object_ConstructProps {
}

interface ExecuteContext {

    // Own fields of Arrow-1.0.Arrow.ExecuteContext

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.ExecuteContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ExecuteContext extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExecuteContext

    static name: string
    static $gtype: GObject.GType<ExecuteContext>

    // Constructors of Arrow-1.0.Arrow.ExecuteContext

    constructor(config?: ExecuteContext_ConstructProps) 
    constructor() 
    static new(): ExecuteContext
    _init(config?: ExecuteContext_ConstructProps): void
}

interface ExecuteNode_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.ExecuteNode

    node?: object | null
}

interface ExecuteNode {

    // Own properties of Arrow-1.0.Arrow.ExecuteNode

    readonly node: object

    // Own fields of Arrow-1.0.Arrow.ExecuteNode

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ExecuteNode

    getKindName(): string
    getOutputSchema(): Schema

    // Class property signals of Arrow-1.0.Arrow.ExecuteNode

    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ExecuteNode extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExecuteNode

    static name: string
    static $gtype: GObject.GType<ExecuteNode>

    // Constructors of Arrow-1.0.Arrow.ExecuteNode

    constructor(config?: ExecuteNode_ConstructProps) 
    _init(config?: ExecuteNode_ConstructProps): void
}

interface ExecuteNodeOptions_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.ExecuteNodeOptions

    options?: object | null
}

interface ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.ExecuteNodeOptions

    readonly options: object

    // Own fields of Arrow-1.0.Arrow.ExecuteNodeOptions

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.ExecuteNodeOptions

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

class ExecuteNodeOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExecuteNodeOptions

    static name: string
    static $gtype: GObject.GType<ExecuteNodeOptions>

    // Constructors of Arrow-1.0.Arrow.ExecuteNodeOptions

    constructor(config?: ExecuteNodeOptions_ConstructProps) 
    _init(config?: ExecuteNodeOptions_ConstructProps): void
}

interface ExecutePlan_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.ExecutePlan

    plan?: object | null
}

interface ExecutePlan {

    // Own properties of Arrow-1.0.Arrow.ExecutePlan

    readonly plan: object

    // Own fields of Arrow-1.0.Arrow.ExecutePlan

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ExecutePlan

    /**
     * This is a shortcut of garrow_execute_plan_build_node() for aggregate
     * node.
     * @param input A #GArrowExecuteNode.
     * @param options A #GArrowAggregateNodeOptions.
     */
    buildAggregateNode(input: ExecuteNode, options: AggregateNodeOptions): ExecuteNode
    /**
     * This is a shortcut of garrow_execute_plan_build_node() for hash
     * join node.
     * @param left A left #GArrowExecuteNode.
     * @param right A right #GArrowExecuteNode.
     * @param options A #GArrowHashJoinNodeOptions.
     */
    buildHashJoinNode(left: ExecuteNode, right: ExecuteNode, options: HashJoinNodeOptions): ExecuteNode
    buildNode(factoryName: string, inputs: ExecuteNode[], options: ExecuteNodeOptions): ExecuteNode
    /**
     * This is a shortcut of garrow_execute_plan_build_node() for sink
     * node.
     * @param input A #GArrowExecuteNode.
     * @param options A #GArrowSinkNodeOptions.
     */
    buildSinkNode(input: ExecuteNode, options: SinkNodeOptions): ExecuteNode
    /**
     * This is a shortcut of garrow_execute_plan_build_node() for source
     * node.
     * @param options A #GArrowSourceNodeOptions.
     */
    buildSourceNode(options: SourceNodeOptions): ExecuteNode
    /**
     * Starts this plan.
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ExecutePlan extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExecutePlan

    static name: string
    static $gtype: GObject.GType<ExecutePlan>

    // Constructors of Arrow-1.0.Arrow.ExecutePlan

    constructor(config?: ExecutePlan_ConstructProps) 
    constructor() 
    static new(): ExecutePlan
    _init(config?: ExecutePlan_ConstructProps): void
}

interface Expression_ConstructProps extends GObject.Object_ConstructProps {
}

interface Expression {

    // Own fields of Arrow-1.0.Arrow.Expression

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Expression

    equal(otherExpression: Expression): boolean
    toString(): string

    // Class property signals of Arrow-1.0.Arrow.Expression

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Expression extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Expression

    static name: string
    static $gtype: GObject.GType<Expression>

    // Constructors of Arrow-1.0.Arrow.Expression

    constructor(config?: Expression_ConstructProps) 
    _init(config?: Expression_ConstructProps): void
}

interface ExtensionArray_ConstructProps extends Array_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.ExtensionArray

    storage?: Array | null
}

interface ExtensionArray {

    // Own properties of Arrow-1.0.Arrow.ExtensionArray

    readonly storage: Array

    // Own fields of Arrow-1.0.Arrow.ExtensionArray

    parentInstance: Array

    // Owm methods of Arrow-1.0.Arrow.ExtensionArray

    getStorage(): Array

    // Class property signals of Arrow-1.0.Arrow.ExtensionArray

    connect(sigName: "notify::storage", callback: (...args: any[]) => void): number
    on(sigName: "notify::storage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::storage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::storage", ...args: any[]): void
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

class ExtensionArray extends Array {

    // Own properties of Arrow-1.0.Arrow.ExtensionArray

    static name: string
    static $gtype: GObject.GType<ExtensionArray>

    // Constructors of Arrow-1.0.Arrow.ExtensionArray

    constructor(config?: ExtensionArray_ConstructProps) 
    _init(config?: ExtensionArray_ConstructProps): void
}

interface ExtensionDataType_ConstructProps extends DataType_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.ExtensionDataType

    storageDataType?: DataType | null
}

interface ExtensionDataType {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataType

    readonly storageDataType: DataType

    // Own fields of Arrow-1.0.Arrow.ExtensionDataType

    parentInstance: DataType

    // Owm methods of Arrow-1.0.Arrow.ExtensionDataType

    getExtensionName(): string
    wrapArray(storage: Array): ExtensionArray
    wrapChunkedArray(storage: ChunkedArray): ChunkedArray

    // Class property signals of Arrow-1.0.Arrow.ExtensionDataType

    connect(sigName: "notify::storage-data-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::storage-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::storage-data-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::storage-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::storage-data-type", ...args: any[]): void
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

class ExtensionDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataType

    static name: string
    static $gtype: GObject.GType<ExtensionDataType>

    // Constructors of Arrow-1.0.Arrow.ExtensionDataType

    constructor(config?: ExtensionDataType_ConstructProps) 
    _init(config?: ExtensionDataType_ConstructProps): void
}

interface ExtensionDataTypeRegistry_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    registry?: object | null
}

interface ExtensionDataTypeRegistry {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    readonly registry: object

    // Own fields of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    lookup(name: string): ExtensionDataType
    /**
     * Register the given `data_type` to the `registry`.
     * @param dataType A #GArrowExtensionDataType to be registered.
     */
    register(dataType: ExtensionDataType): boolean
    /**
     * Unregister an extension data type that has the given `name` from the
     * `registry`.
     * @param name An extension data type name to be unregistered.
     */
    unregister(name: string): boolean

    // Class property signals of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ExtensionDataTypeRegistry extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    static name: string
    static $gtype: GObject.GType<ExtensionDataTypeRegistry>

    // Constructors of Arrow-1.0.Arrow.ExtensionDataTypeRegistry

    constructor(config?: ExtensionDataTypeRegistry_ConstructProps) 
    _init(config?: ExtensionDataTypeRegistry_ConstructProps): void
    static default(): ExtensionDataTypeRegistry
}

interface ExtensionScalar_ConstructProps extends Scalar_ConstructProps {
}

interface ExtensionScalar {

    // Own fields of Arrow-1.0.Arrow.ExtensionScalar

    parentInstance: Scalar

    // Class property signals of Arrow-1.0.Arrow.ExtensionScalar

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

class ExtensionScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.ExtensionScalar

    static name: string
    static $gtype: GObject.GType<ExtensionScalar>

    // Constructors of Arrow-1.0.Arrow.ExtensionScalar

    constructor(config?: ExtensionScalar_ConstructProps) 
    _init(config?: ExtensionScalar_ConstructProps): void
}

interface FeatherFileReader_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.FeatherFileReader

    featherReader?: object | null
}

interface FeatherFileReader {

    // Own properties of Arrow-1.0.Arrow.FeatherFileReader

    readonly featherReader: object

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FeatherFileReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FeatherFileReader

    static name: string
    static $gtype: GObject.GType<FeatherFileReader>

    // Constructors of Arrow-1.0.Arrow.FeatherFileReader

    constructor(config?: FeatherFileReader_ConstructProps) 
    constructor(file: SeekableInputStream) 
    static new(file: SeekableInputStream): FeatherFileReader
    _init(config?: FeatherFileReader_ConstructProps): void
}

interface FeatherWriteProperties_ConstructProps extends GObject.Object_ConstructProps {

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

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.FeatherWriteProperties

    connect(sigName: "notify::compression", callback: (...args: any[]) => void): number
    on(sigName: "notify::compression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::compression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::compression", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FeatherWriteProperties extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FeatherWriteProperties

    static name: string
    static $gtype: GObject.GType<FeatherWriteProperties>

    // Constructors of Arrow-1.0.Arrow.FeatherWriteProperties

    constructor(config?: FeatherWriteProperties_ConstructProps) 
    constructor() 
    static new(): FeatherWriteProperties
    _init(config?: FeatherWriteProperties_ConstructProps): void
}

interface Field_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Field

    dataType?: DataType | null
    field?: object | null
}

interface Field {

    // Own properties of Arrow-1.0.Arrow.Field

    readonly dataType: DataType
    readonly field: object

    // Own fields of Arrow-1.0.Arrow.Field

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Field

    equal(otherField: Field): boolean
    export(): object | null
    getDataType(): DataType
    getMetadata(): GLib.HashTable | null
    getName(): string
    hasMetadata(): boolean
    isNullable(): boolean
    removeMetadata(): Field
    toString(): string
    toStringMetadata(showMetadata: boolean): string
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Field extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Field

    static name: string
    static $gtype: GObject.GType<Field>

    // Constructors of Arrow-1.0.Arrow.Field

    constructor(config?: Field_ConstructProps) 
    constructor(name: string, dataType: DataType) 
    static new(name: string, dataType: DataType): Field
    static newFull(name: string, dataType: DataType, nullable: boolean): Field
    _init(config?: Field_ConstructProps): void
    static import(cAbiSchema: object): Field | null
}

interface FieldExpression_ConstructProps extends Expression_ConstructProps {
}

interface FieldExpression {

    // Own fields of Arrow-1.0.Arrow.FieldExpression

    parentInstance: Expression

    // Class property signals of Arrow-1.0.Arrow.FieldExpression

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FieldExpression extends Expression {

    // Own properties of Arrow-1.0.Arrow.FieldExpression

    static name: string
    static $gtype: GObject.GType<FieldExpression>

    // Constructors of Arrow-1.0.Arrow.FieldExpression

    constructor(config?: FieldExpression_ConstructProps) 
    constructor(reference: string) 
    static new(reference: string): FieldExpression
    _init(config?: FieldExpression_ConstructProps): void
}

interface FileInfo_ConstructProps extends GObject.Object_ConstructProps {

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

interface FileInfo {

    // Own properties of Arrow-1.0.Arrow.FileInfo

    /**
     * The file base name (component after the last directory separator).
     */
    readonly baseName: string
    /**
     * The directory base name (component before the file base name).
     */
    readonly dirName: string
    /**
     * The file extension (excluding the dot).
     */
    readonly extension: string
    /**
     * The time of last modification, if available.
     */
    mtime: number
    /**
     * The full file path in the file system.
     */
    path: string
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

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FileInfo

    equal(otherFileInfo: FileInfo): boolean
    isDir(): boolean
    isFile(): boolean
    toString(): string

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FileInfo extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FileInfo

    static name: string
    static $gtype: GObject.GType<FileInfo>

    // Constructors of Arrow-1.0.Arrow.FileInfo

    constructor(config?: FileInfo_ConstructProps) 
    constructor() 
    static new(): FileInfo
    _init(config?: FileInfo_ConstructProps): void
}

interface FileInputStream_ConstructProps extends File_ConstructProps, Readable_ConstructProps, SeekableInputStream_ConstructProps {
}

interface FileInputStream extends File, Readable {

    // Own fields of Arrow-1.0.Arrow.FileInputStream

    parentInstance: SeekableInputStream

    // Owm methods of Arrow-1.0.Arrow.FileInputStream

    getFileDescriptor(): number

    // Conflicting methods

    close(...args: any[]): any
    read(...args: any[]): any
    readBytes(...args: any[]): any

    // Class property signals of Arrow-1.0.Arrow.FileInputStream

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

class FileInputStream extends SeekableInputStream {

    // Own properties of Arrow-1.0.Arrow.FileInputStream

    static name: string
    static $gtype: GObject.GType<FileInputStream>

    // Constructors of Arrow-1.0.Arrow.FileInputStream

    constructor(config?: FileInputStream_ConstructProps) 
    constructor(path: string) 
    static new(path: string): FileInputStream
    static newFileDescriptor(fileDescriptor: number): FileInputStream
    _init(config?: FileInputStream_ConstructProps): void
}

interface FileOutputStream_ConstructProps extends File_ConstructProps, Writable_ConstructProps, OutputStream_ConstructProps {
}

interface FileOutputStream extends File, Writable {

    // Class property signals of Arrow-1.0.Arrow.FileOutputStream

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
class FileOutputStream extends OutputStream {

    // Own properties of Arrow-1.0.Arrow.FileOutputStream

    static name: string
    static $gtype: GObject.GType<FileOutputStream>

    // Constructors of Arrow-1.0.Arrow.FileOutputStream

    constructor(config?: FileOutputStream_ConstructProps) 
    constructor(path: string, append: boolean) 
    static new(path: string, append: boolean): FileOutputStream
    _init(config?: FileOutputStream_ConstructProps): void
}

interface FileSelector_ConstructProps extends GObject.Object_ConstructProps {

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

interface FileSelector {

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
    baseDir: string
    /**
     * The maximum number of subdirectories to recurse into.
     */
    maxRecursion: number
    /**
     * Whether to recurse into subdirectories.
     */
    recursive: boolean

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FileSelector extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FileSelector

    static name: string
    static $gtype: GObject.GType<FileSelector>

    // Constructors of Arrow-1.0.Arrow.FileSelector

    constructor(config?: FileSelector_ConstructProps) 
    _init(config?: FileSelector_ConstructProps): void
}

interface FileSystem_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.FileSystem

    fileSystem?: object | null
}

interface FileSystem {

    // Own properties of Arrow-1.0.Arrow.FileSystem

    readonly fileSystem: object

    // Own fields of Arrow-1.0.Arrow.FileSystem

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FileSystem

    /**
     * Copy a file.
     * If the destination exists and is a directory, an error is returned.
     * Otherwise, it is replaced.
     * @param src The path of the source file.
     * @param dest The path of the destination.
     */
    copyFile(src: string, dest: string): boolean
    /**
     * Create a directory and subdirectories.
     * This function succeeds if the directory already exists.
     * @param path The paths of the directory.
     * @param recursive Whether creating directory recursively or not.
     */
    createDir(path: string, recursive: boolean): boolean
    /**
     * Delete a directory and its contents, recursively.
     * @param path The paths of the directory.
     */
    deleteDir(path: string): boolean
    /**
     * Delete a directory's contents, recursively. Like
     * garrow_file_system_delete_dir(), but doesn't delete the directory
     * itself. Passing an empty path (`""`) will wipe the entire file
     * system tree.
     * @param path The paths of the directory.
     */
    deleteDirContents(path: string): boolean
    /**
     * Delete a file.
     * @param path The paths of the file to be delete.
     */
    deleteFile(path: string): boolean
    /**
     * Delete many files.
     * @param paths    The paths of the files to be delete.
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
     */
    getFileInfo(path: string): FileInfo | null
    /**
     * Get information same as garrow_file_system_get_file_info()
     * for the given many targets at once.
     * @param paths The paths of the targets.
     */
    getFileInfosPaths(paths: string[]): FileInfo[]
    /**
     * Get information same as garrow_file_system_get_file_info()
     * according to a selector.
     * 
     * The selector's base directory will not be part of the results,
     * even if it exists.
     * @param fileSelector A #GArrowFileSelector.
     */
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    /**
     * Move / rename a file or a directory.
     * If the destination exists:
     * - if it is a non-empty directory, an error is returned
     * - otherwise, if it has the same type as the source, it is replaced
     * - otherwise, behavior is unspecified (implementation-dependent).
     * @param src The path of the source file.
     * @param dest The path of the destination.
     */
    move(src: string, dest: string): boolean
    /**
     * Open an output stream for appending.
     * If the target doesn't exist, a new empty file is created.
     * @param path The path of the output stream.
     */
    openAppendStream(path: string): OutputStream | null
    /**
     * Open an input file for random access reading.
     * @param path The path of the input file.
     */
    openInputFile(path: string): SeekableInputStream | null
    /**
     * Open an input stream for sequential reading.
     * @param path The path of the input stream.
     */
    openInputStream(path: string): InputStream | null
    /**
     * Open an output stream for sequential writing.
     * If the target already exists, the existing data is truncated.
     * @param path The path of the output stream.
     */
    openOutputStream(path: string): OutputStream | null

    // Class property signals of Arrow-1.0.Arrow.FileSystem

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

class FileSystem extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FileSystem

    static name: string
    static $gtype: GObject.GType<FileSystem>

    // Constructors of Arrow-1.0.Arrow.FileSystem

    constructor(config?: FileSystem_ConstructProps) 
    _init(config?: FileSystem_ConstructProps): void
    /**
     * This is a factory function to create a specific #GArrowFileSystem
     * object.
     * @param uri An URI to specify file system with options. If you only have an   absolute path, g_filename_to_uri() will help you.
     */
    static create(uri: string): FileSystem | null
}

interface FilterOptions_ConstructProps extends FunctionOptions_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.FilterOptions

    /**
     * How to handle filtered values.
     */
    nullSelectionBehavior?: FilterNullSelectionBehavior | null
}

interface FilterOptions {

    // Own properties of Arrow-1.0.Arrow.FilterOptions

    /**
     * How to handle filtered values.
     */
    nullSelectionBehavior: FilterNullSelectionBehavior

    // Own fields of Arrow-1.0.Arrow.FilterOptions

    parentInstance: FunctionOptions

    // Class property signals of Arrow-1.0.Arrow.FilterOptions

    connect(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void): number
    on(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::null-selection-behavior", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FilterOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.FilterOptions

    static name: string
    static $gtype: GObject.GType<FilterOptions>

    // Constructors of Arrow-1.0.Arrow.FilterOptions

    constructor(config?: FilterOptions_ConstructProps) 
    constructor() 
    static new(): FilterOptions
    _init(config?: FilterOptions_ConstructProps): void
}

interface FixedSizeBinaryArray_ConstructProps extends PrimitiveArray_ConstructProps {
}

interface FixedSizeBinaryArray {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryArray

    parentInstance: PrimitiveArray

    // Owm methods of Arrow-1.0.Arrow.FixedSizeBinaryArray

    getByteWidth(): number
    getValue(i: number): any
    getValuesBytes(): any

    // Class property signals of Arrow-1.0.Arrow.FixedSizeBinaryArray

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

class FixedSizeBinaryArray extends PrimitiveArray {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArray

    static name: string
    static $gtype: GObject.GType<FixedSizeBinaryArray>

    // Constructors of Arrow-1.0.Arrow.FixedSizeBinaryArray

    constructor(config?: FixedSizeBinaryArray_ConstructProps) 
    constructor(dataType: FixedSizeBinaryDataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: FixedSizeBinaryDataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): FixedSizeBinaryArray
    _init(config?: FixedSizeBinaryArray_ConstructProps): void
}

interface FixedSizeBinaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface FixedSizeBinaryArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    appendValue(value: Uint8Array | null): boolean
    appendValueBytes(value: any): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: any[], isValids?: boolean[] | null): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * 
     * This is more efficient than
     * garrow_fixed_size_binary_array_builder_append_values().
     * @param values A #GBytes that contains multiple values.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValuesPacked(values: any, isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

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

class FixedSizeBinaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    static name: string
    static $gtype: GObject.GType<FixedSizeBinaryArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder

    constructor(config?: FixedSizeBinaryArrayBuilder_ConstructProps) 
    constructor(dataType: FixedSizeBinaryDataType) 
    static new(dataType: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder
    _init(config?: FixedSizeBinaryArrayBuilder_ConstructProps): void
}

interface FixedSizeBinaryDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}

interface FixedSizeBinaryDataType {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    parentInstance: DataType

    // Owm methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    getByteWidth(): number

    // Class property signals of Arrow-1.0.Arrow.FixedSizeBinaryDataType

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

class FixedSizeBinaryDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    static name: string
    static $gtype: GObject.GType<FixedSizeBinaryDataType>

    // Constructors of Arrow-1.0.Arrow.FixedSizeBinaryDataType

    constructor(config?: FixedSizeBinaryDataType_ConstructProps) 
    constructor(byteWidth: number) 
    static new(byteWidth: number): FixedSizeBinaryDataType
    _init(config?: FixedSizeBinaryDataType_ConstructProps): void
}

interface FixedSizeBinaryScalar_ConstructProps extends BaseBinaryScalar_ConstructProps {
}

interface FixedSizeBinaryScalar {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryScalar

    parentInstance: BaseBinaryScalar

    // Class property signals of Arrow-1.0.Arrow.FixedSizeBinaryScalar

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

class FixedSizeBinaryScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryScalar

    static name: string
    static $gtype: GObject.GType<FixedSizeBinaryScalar>

    // Constructors of Arrow-1.0.Arrow.FixedSizeBinaryScalar

    constructor(config?: FixedSizeBinaryScalar_ConstructProps) 
    constructor(dataType: FixedSizeBinaryDataType, value: Buffer) 
    static new(dataType: FixedSizeBinaryDataType, value: Buffer): FixedSizeBinaryScalar
    _init(config?: FixedSizeBinaryScalar_ConstructProps): void
}

interface FixedWidthDataType_ConstructProps extends DataType_ConstructProps {
}

interface FixedWidthDataType {

    // Own fields of Arrow-1.0.Arrow.FixedWidthDataType

    parentInstance: DataType

    // Owm methods of Arrow-1.0.Arrow.FixedWidthDataType

    getBitWidth(): number

    // Class property signals of Arrow-1.0.Arrow.FixedWidthDataType

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

class FixedWidthDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.FixedWidthDataType

    static name: string
    static $gtype: GObject.GType<FixedWidthDataType>

    // Constructors of Arrow-1.0.Arrow.FixedWidthDataType

    constructor(config?: FixedWidthDataType_ConstructProps) 
    _init(config?: FixedWidthDataType_ConstructProps): void
}

interface FloatArray_ConstructProps extends NumericArray_ConstructProps {
}

interface FloatArray {

    // Own fields of Arrow-1.0.Arrow.FloatArray

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.FloatArray

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.FloatArray

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

class FloatArray extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.FloatArray

    static name: string
    static $gtype: GObject.GType<FloatArray>

    // Constructors of Arrow-1.0.Arrow.FloatArray

    constructor(config?: FloatArray_ConstructProps) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): FloatArray
    _init(config?: FloatArray_ConstructProps): void
}

interface FloatArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface FloatArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.FloatArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.FloatArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of float.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.FloatArrayBuilder

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

class FloatArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.FloatArrayBuilder

    static name: string
    static $gtype: GObject.GType<FloatArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.FloatArrayBuilder

    constructor(config?: FloatArrayBuilder_ConstructProps) 
    constructor() 
    static new(): FloatArrayBuilder
    _init(config?: FloatArrayBuilder_ConstructProps): void
}

interface FloatDataType_ConstructProps extends FloatingPointDataType_ConstructProps {
}

interface FloatDataType {

    // Own fields of Arrow-1.0.Arrow.FloatDataType

    parentInstance: FloatingPointDataType

    // Class property signals of Arrow-1.0.Arrow.FloatDataType

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

class FloatDataType extends FloatingPointDataType {

    // Own properties of Arrow-1.0.Arrow.FloatDataType

    static name: string
    static $gtype: GObject.GType<FloatDataType>

    // Constructors of Arrow-1.0.Arrow.FloatDataType

    constructor(config?: FloatDataType_ConstructProps) 
    constructor() 
    static new(): FloatDataType
    _init(config?: FloatDataType_ConstructProps): void
}

interface FloatScalar_ConstructProps extends Scalar_ConstructProps {
}

interface FloatScalar {

    // Own fields of Arrow-1.0.Arrow.FloatScalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.FloatScalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.FloatScalar

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

class FloatScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.FloatScalar

    static name: string
    static $gtype: GObject.GType<FloatScalar>

    // Constructors of Arrow-1.0.Arrow.FloatScalar

    constructor(config?: FloatScalar_ConstructProps) 
    constructor(value: number) 
    static new(value: number): FloatScalar
    _init(config?: FloatScalar_ConstructProps): void
}

interface FloatingPointDataType_ConstructProps extends NumericDataType_ConstructProps {
}

interface FloatingPointDataType {

    // Own fields of Arrow-1.0.Arrow.FloatingPointDataType

    parentInstance: NumericDataType

    // Class property signals of Arrow-1.0.Arrow.FloatingPointDataType

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

class FloatingPointDataType extends NumericDataType {

    // Own properties of Arrow-1.0.Arrow.FloatingPointDataType

    static name: string
    static $gtype: GObject.GType<FloatingPointDataType>

    // Constructors of Arrow-1.0.Arrow.FloatingPointDataType

    constructor(config?: FloatingPointDataType_ConstructProps) 
    _init(config?: FloatingPointDataType_ConstructProps): void
}

interface Function_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Function

    "function"?: object | null
}

interface Function {

    // Own properties of Arrow-1.0.Arrow.Function

    readonly "function": object

    // Own fields of Arrow-1.0.Arrow.Function

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Function

    equal(otherFunction: Function): boolean
    execute(args: Datum[], options: FunctionOptions | null, context: ExecuteContext | null): Datum | null
    getDefaultOptions(): FunctionOptions | null
    getDoc(): FunctionDoc
    getName(): string
    getOptionsType(): GObject.GType
    toString(): string

    // Class property signals of Arrow-1.0.Arrow.Function

    connect(sigName: "notify::function", callback: (...args: any[]) => void): number
    on(sigName: "notify::function", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::function", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::function", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::function", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Function extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Function

    static name: string
    static $gtype: GObject.GType<Function>

    // Constructors of Arrow-1.0.Arrow.Function

    constructor(config?: Function_ConstructProps) 
    _init(config?: Function_ConstructProps): void
    static all(): Function[]
    static find(name: string): Function
}

interface FunctionDoc_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.FunctionDoc

    doc?: object | null
}

interface FunctionDoc {

    // Own properties of Arrow-1.0.Arrow.FunctionDoc

    readonly doc: object

    // Own fields of Arrow-1.0.Arrow.FunctionDoc

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FunctionDoc

    getArgNames(): string[]
    getDescription(): string
    getOptionsClassName(): string
    getSummary(): string

    // Class property signals of Arrow-1.0.Arrow.FunctionDoc

    connect(sigName: "notify::doc", callback: (...args: any[]) => void): number
    on(sigName: "notify::doc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::doc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::doc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::doc", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionDoc extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FunctionDoc

    static name: string
    static $gtype: GObject.GType<FunctionDoc>

    // Constructors of Arrow-1.0.Arrow.FunctionDoc

    constructor(config?: FunctionDoc_ConstructProps) 
    _init(config?: FunctionDoc_ConstructProps): void
}

interface FunctionOptions_ConstructProps extends GObject.Object_ConstructProps {
}

interface FunctionOptions {

    // Own fields of Arrow-1.0.Arrow.FunctionOptions

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.FunctionOptions

    equal(otherOptions: FunctionOptions | null): boolean
    toString(): string

    // Class property signals of Arrow-1.0.Arrow.FunctionOptions

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FunctionOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.FunctionOptions

    static name: string
    static $gtype: GObject.GType<FunctionOptions>

    // Constructors of Arrow-1.0.Arrow.FunctionOptions

    constructor(config?: FunctionOptions_ConstructProps) 
    _init(config?: FunctionOptions_ConstructProps): void
}

interface GIOInputStream_ConstructProps extends File_ConstructProps, Readable_ConstructProps, SeekableInputStream_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.GIOInputStream

    raw?: Gio.InputStream | null
}

interface GIOInputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.GIOInputStream

    readonly raw: Gio.InputStream

    // Conflicting properties

    parentInstance: any

    // Owm methods of Arrow-1.0.Arrow.GIOInputStream

    getRaw(): Gio.InputStream

    // Conflicting methods

    close(...args: any[]): any
    read(...args: any[]): any
    readBytes(...args: any[]): any

    // Class property signals of Arrow-1.0.Arrow.GIOInputStream

    connect(sigName: "notify::raw", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw", ...args: any[]): void
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
class GIOInputStream extends SeekableInputStream {

    // Own properties of Arrow-1.0.Arrow.GIOInputStream

    static name: string
    static $gtype: GObject.GType<GIOInputStream>

    // Constructors of Arrow-1.0.Arrow.GIOInputStream

    constructor(config?: GIOInputStream_ConstructProps) 
    constructor(gioInputStream: Gio.InputStream) 
    static new(gioInputStream: Gio.InputStream): GIOInputStream
    _init(config?: GIOInputStream_ConstructProps): void
}

interface GIOOutputStream_ConstructProps extends File_ConstructProps, Writable_ConstructProps, OutputStream_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.GIOOutputStream

    raw?: Gio.OutputStream | null
}

interface GIOOutputStream extends File, Writable {

    // Own properties of Arrow-1.0.Arrow.GIOOutputStream

    readonly raw: Gio.OutputStream

    // Owm methods of Arrow-1.0.Arrow.GIOOutputStream

    getRaw(): Gio.OutputStream

    // Class property signals of Arrow-1.0.Arrow.GIOOutputStream

    connect(sigName: "notify::raw", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw", ...args: any[]): void
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
class GIOOutputStream extends OutputStream {

    // Own properties of Arrow-1.0.Arrow.GIOOutputStream

    static name: string
    static $gtype: GObject.GType<GIOOutputStream>

    // Constructors of Arrow-1.0.Arrow.GIOOutputStream

    constructor(config?: GIOOutputStream_ConstructProps) 
    constructor(gioOutputStream: Gio.OutputStream) 
    static new(gioOutputStream: Gio.OutputStream): GIOOutputStream
    _init(config?: GIOOutputStream_ConstructProps): void
}

interface HDFSFileSystem_ConstructProps extends FileSystem_ConstructProps {
}

interface HDFSFileSystem {

    // Own fields of Arrow-1.0.Arrow.HDFSFileSystem

    parentInstance: FileSystem

    // Class property signals of Arrow-1.0.Arrow.HDFSFileSystem

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

class HDFSFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.HDFSFileSystem

    static name: string
    static $gtype: GObject.GType<HDFSFileSystem>

    // Constructors of Arrow-1.0.Arrow.HDFSFileSystem

    constructor(config?: HDFSFileSystem_ConstructProps) 
    _init(config?: HDFSFileSystem_ConstructProps): void
}

interface HashJoinNodeOptions_ConstructProps extends ExecuteNodeOptions_ConstructProps {
}

interface HashJoinNodeOptions {

    // Own fields of Arrow-1.0.Arrow.HashJoinNodeOptions

    parentInstance: ExecuteNodeOptions

    // Owm methods of Arrow-1.0.Arrow.HashJoinNodeOptions

    setLeftOutputs(outputs: string[]): boolean
    setRightOutputs(outputs: string[]): boolean

    // Class property signals of Arrow-1.0.Arrow.HashJoinNodeOptions

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

class HashJoinNodeOptions extends ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.HashJoinNodeOptions

    static name: string
    static $gtype: GObject.GType<HashJoinNodeOptions>

    // Constructors of Arrow-1.0.Arrow.HashJoinNodeOptions

    constructor(config?: HashJoinNodeOptions_ConstructProps) 
    constructor(type: JoinType, leftKeys: string[], rightKeys: string[]) 
    static new(type: JoinType, leftKeys: string[], rightKeys: string[]): HashJoinNodeOptions
    _init(config?: HashJoinNodeOptions_ConstructProps): void
}

interface InputStream_ConstructProps extends File_ConstructProps, Readable_ConstructProps, Gio.InputStream_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.InputStream

    inputStream?: object | null
}

interface InputStream extends File, Readable {

    // Own properties of Arrow-1.0.Arrow.InputStream

    readonly inputStream: object

    // Own fields of Arrow-1.0.Arrow.InputStream

    parentInstance: Gio.InputStream

    // Owm methods of Arrow-1.0.Arrow.InputStream

    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null

    // Conflicting methods

    close(...args: any[]): any
    read(...args: any[]): any
    readBytes(...args: any[]): any

    // Class property signals of Arrow-1.0.Arrow.InputStream

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

class InputStream extends Gio.InputStream {

    // Own properties of Arrow-1.0.Arrow.InputStream

    static name: string
    static $gtype: GObject.GType<InputStream>

    // Constructors of Arrow-1.0.Arrow.InputStream

    constructor(config?: InputStream_ConstructProps) 
    _init(config?: InputStream_ConstructProps): void
}

interface Int16Array_ConstructProps extends NumericArray_ConstructProps {
}

interface Int16Array {

    // Own fields of Arrow-1.0.Arrow.Int16Array

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.Int16Array

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.Int16Array

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

class Int16Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Int16Array

    static name: string
    static $gtype: GObject.GType<Int16Array>

    // Constructors of Arrow-1.0.Arrow.Int16Array

    constructor(config?: Int16Array_ConstructProps) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int16Array
    _init(config?: Int16Array_ConstructProps): void
}

interface Int16ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface Int16ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Int16ArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.Int16ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int16.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Int16ArrayBuilder

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

class Int16ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int16ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Int16ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Int16ArrayBuilder

    constructor(config?: Int16ArrayBuilder_ConstructProps) 
    constructor() 
    static new(): Int16ArrayBuilder
    _init(config?: Int16ArrayBuilder_ConstructProps): void
}

interface Int16DataType_ConstructProps extends IntegerDataType_ConstructProps {
}

interface Int16DataType {

    // Own fields of Arrow-1.0.Arrow.Int16DataType

    parentInstance: IntegerDataType

    // Class property signals of Arrow-1.0.Arrow.Int16DataType

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

class Int16DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.Int16DataType

    static name: string
    static $gtype: GObject.GType<Int16DataType>

    // Constructors of Arrow-1.0.Arrow.Int16DataType

    constructor(config?: Int16DataType_ConstructProps) 
    constructor() 
    static new(): Int16DataType
    _init(config?: Int16DataType_ConstructProps): void
}

interface Int16Scalar_ConstructProps extends Scalar_ConstructProps {
}

interface Int16Scalar {

    // Own fields of Arrow-1.0.Arrow.Int16Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.Int16Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Int16Scalar

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

class Int16Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Int16Scalar

    static name: string
    static $gtype: GObject.GType<Int16Scalar>

    // Constructors of Arrow-1.0.Arrow.Int16Scalar

    constructor(config?: Int16Scalar_ConstructProps) 
    constructor(value: number) 
    static new(value: number): Int16Scalar
    _init(config?: Int16Scalar_ConstructProps): void
}

interface Int32Array_ConstructProps extends NumericArray_ConstructProps {
}

interface Int32Array {

    // Own fields of Arrow-1.0.Arrow.Int32Array

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.Int32Array

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.Int32Array

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

class Int32Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Int32Array

    static name: string
    static $gtype: GObject.GType<Int32Array>

    // Constructors of Arrow-1.0.Arrow.Int32Array

    constructor(config?: Int32Array_ConstructProps) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int32Array
    _init(config?: Int32Array_ConstructProps): void
}

interface Int32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface Int32ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Int32ArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.Int32ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int32.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Int32ArrayBuilder

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

class Int32ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int32ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Int32ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Int32ArrayBuilder

    constructor(config?: Int32ArrayBuilder_ConstructProps) 
    constructor() 
    static new(): Int32ArrayBuilder
    _init(config?: Int32ArrayBuilder_ConstructProps): void
}

interface Int32DataType_ConstructProps extends IntegerDataType_ConstructProps {
}

interface Int32DataType {

    // Own fields of Arrow-1.0.Arrow.Int32DataType

    parentInstance: IntegerDataType

    // Class property signals of Arrow-1.0.Arrow.Int32DataType

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

class Int32DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.Int32DataType

    static name: string
    static $gtype: GObject.GType<Int32DataType>

    // Constructors of Arrow-1.0.Arrow.Int32DataType

    constructor(config?: Int32DataType_ConstructProps) 
    constructor() 
    static new(): Int32DataType
    _init(config?: Int32DataType_ConstructProps): void
}

interface Int32Scalar_ConstructProps extends Scalar_ConstructProps {
}

interface Int32Scalar {

    // Own fields of Arrow-1.0.Arrow.Int32Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.Int32Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Int32Scalar

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

class Int32Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Int32Scalar

    static name: string
    static $gtype: GObject.GType<Int32Scalar>

    // Constructors of Arrow-1.0.Arrow.Int32Scalar

    constructor(config?: Int32Scalar_ConstructProps) 
    constructor(value: number) 
    static new(value: number): Int32Scalar
    _init(config?: Int32Scalar_ConstructProps): void
}

interface Int64Array_ConstructProps extends NumericArray_ConstructProps {
}

interface Int64Array {

    // Own fields of Arrow-1.0.Arrow.Int64Array

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.Int64Array

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.Int64Array

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

class Int64Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Int64Array

    static name: string
    static $gtype: GObject.GType<Int64Array>

    // Constructors of Arrow-1.0.Arrow.Int64Array

    constructor(config?: Int64Array_ConstructProps) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int64Array
    _init(config?: Int64Array_ConstructProps): void
}

interface Int64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface Int64ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Int64ArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.Int64ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int64.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Int64ArrayBuilder

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

class Int64ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int64ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Int64ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Int64ArrayBuilder

    constructor(config?: Int64ArrayBuilder_ConstructProps) 
    constructor() 
    static new(): Int64ArrayBuilder
    _init(config?: Int64ArrayBuilder_ConstructProps): void
}

interface Int64DataType_ConstructProps extends IntegerDataType_ConstructProps {
}

interface Int64DataType {

    // Own fields of Arrow-1.0.Arrow.Int64DataType

    parentInstance: IntegerDataType

    // Class property signals of Arrow-1.0.Arrow.Int64DataType

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

class Int64DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.Int64DataType

    static name: string
    static $gtype: GObject.GType<Int64DataType>

    // Constructors of Arrow-1.0.Arrow.Int64DataType

    constructor(config?: Int64DataType_ConstructProps) 
    constructor() 
    static new(): Int64DataType
    _init(config?: Int64DataType_ConstructProps): void
}

interface Int64Scalar_ConstructProps extends Scalar_ConstructProps {
}

interface Int64Scalar {

    // Own fields of Arrow-1.0.Arrow.Int64Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.Int64Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Int64Scalar

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

class Int64Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Int64Scalar

    static name: string
    static $gtype: GObject.GType<Int64Scalar>

    // Constructors of Arrow-1.0.Arrow.Int64Scalar

    constructor(config?: Int64Scalar_ConstructProps) 
    constructor(value: number) 
    static new(value: number): Int64Scalar
    _init(config?: Int64Scalar_ConstructProps): void
}

interface Int8Array_ConstructProps extends NumericArray_ConstructProps {
}

interface Int8Array {

    // Own fields of Arrow-1.0.Arrow.Int8Array

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.Int8Array

    getValue(i: number): number
    getValues(): Uint8Array
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.Int8Array

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

class Int8Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Int8Array

    static name: string
    static $gtype: GObject.GType<Int8Array>

    // Constructors of Arrow-1.0.Arrow.Int8Array

    constructor(config?: Int8Array_ConstructProps) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int8Array
    _init(config?: Int8Array_ConstructProps): void
}

interface Int8ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface Int8ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Int8ArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.Int8ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int8.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: Uint8Array, isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Int8ArrayBuilder

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

class Int8ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Int8ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Int8ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Int8ArrayBuilder

    constructor(config?: Int8ArrayBuilder_ConstructProps) 
    constructor() 
    static new(): Int8ArrayBuilder
    _init(config?: Int8ArrayBuilder_ConstructProps): void
}

interface Int8DataType_ConstructProps extends IntegerDataType_ConstructProps {
}

interface Int8DataType {

    // Own fields of Arrow-1.0.Arrow.Int8DataType

    parentInstance: IntegerDataType

    // Class property signals of Arrow-1.0.Arrow.Int8DataType

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

class Int8DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.Int8DataType

    static name: string
    static $gtype: GObject.GType<Int8DataType>

    // Constructors of Arrow-1.0.Arrow.Int8DataType

    constructor(config?: Int8DataType_ConstructProps) 
    constructor() 
    static new(): Int8DataType
    _init(config?: Int8DataType_ConstructProps): void
}

interface Int8Scalar_ConstructProps extends Scalar_ConstructProps {
}

interface Int8Scalar {

    // Own fields of Arrow-1.0.Arrow.Int8Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.Int8Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Int8Scalar

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

class Int8Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Int8Scalar

    static name: string
    static $gtype: GObject.GType<Int8Scalar>

    // Constructors of Arrow-1.0.Arrow.Int8Scalar

    constructor(config?: Int8Scalar_ConstructProps) 
    constructor(value: number) 
    static new(value: number): Int8Scalar
    _init(config?: Int8Scalar_ConstructProps): void
}

interface IntArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface IntArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.IntArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.IntArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of int.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.IntArrayBuilder

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

class IntArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.IntArrayBuilder

    static name: string
    static $gtype: GObject.GType<IntArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.IntArrayBuilder

    constructor(config?: IntArrayBuilder_ConstructProps) 
    constructor() 
    static new(): IntArrayBuilder
    _init(config?: IntArrayBuilder_ConstructProps): void
}

interface IntegerDataType_ConstructProps extends NumericDataType_ConstructProps {
}

interface IntegerDataType {

    // Own fields of Arrow-1.0.Arrow.IntegerDataType

    parentInstance: NumericDataType

    // Owm methods of Arrow-1.0.Arrow.IntegerDataType

    isSigned(): boolean

    // Class property signals of Arrow-1.0.Arrow.IntegerDataType

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

class IntegerDataType extends NumericDataType {

    // Own properties of Arrow-1.0.Arrow.IntegerDataType

    static name: string
    static $gtype: GObject.GType<IntegerDataType>

    // Constructors of Arrow-1.0.Arrow.IntegerDataType

    constructor(config?: IntegerDataType_ConstructProps) 
    _init(config?: IntegerDataType_ConstructProps): void
}

interface IntervalDataType_ConstructProps extends TemporalDataType_ConstructProps {
}

interface IntervalDataType {

    // Own fields of Arrow-1.0.Arrow.IntervalDataType

    parentInstance: TimeDataType

    // Owm methods of Arrow-1.0.Arrow.IntervalDataType

    getIntervalType(): IntervalType

    // Class property signals of Arrow-1.0.Arrow.IntervalDataType

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

class IntervalDataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.IntervalDataType

    static name: string
    static $gtype: GObject.GType<IntervalDataType>

    // Constructors of Arrow-1.0.Arrow.IntervalDataType

    constructor(config?: IntervalDataType_ConstructProps) 
    _init(config?: IntervalDataType_ConstructProps): void
}

interface JSONReadOptions_ConstructProps extends GObject.Object_ConstructProps {

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

interface JSONReadOptions {

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class JSONReadOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.JSONReadOptions

    static name: string
    static $gtype: GObject.GType<JSONReadOptions>

    // Constructors of Arrow-1.0.Arrow.JSONReadOptions

    constructor(config?: JSONReadOptions_ConstructProps) 
    constructor() 
    static new(): JSONReadOptions
    _init(config?: JSONReadOptions_ConstructProps): void
}

interface JSONReader_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.JSONReader

    input?: InputStream | null
    jsonTableReader?: object | null
}

interface JSONReader {

    // Own properties of Arrow-1.0.Arrow.JSONReader

    readonly input: InputStream
    readonly jsonTableReader: object

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class JSONReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.JSONReader

    static name: string
    static $gtype: GObject.GType<JSONReader>

    // Constructors of Arrow-1.0.Arrow.JSONReader

    constructor(config?: JSONReader_ConstructProps) 
    constructor(input: InputStream, options: JSONReadOptions | null) 
    static new(input: InputStream, options: JSONReadOptions | null): JSONReader
    _init(config?: JSONReader_ConstructProps): void
}

interface LargeBinaryArray_ConstructProps extends Array_ConstructProps {
}

interface LargeBinaryArray {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryArray

    parentInstance: Array

    // Owm methods of Arrow-1.0.Arrow.LargeBinaryArray

    getBuffer(): Buffer
    getDataBuffer(): Buffer
    getOffsetsBuffer(): Buffer
    getValue(i: number): any

    // Class property signals of Arrow-1.0.Arrow.LargeBinaryArray

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

class LargeBinaryArray extends Array {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArray

    static name: string
    static $gtype: GObject.GType<LargeBinaryArray>

    // Constructors of Arrow-1.0.Arrow.LargeBinaryArray

    constructor(config?: LargeBinaryArray_ConstructProps) 
    constructor(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): LargeBinaryArray
    _init(config?: LargeBinaryArray_ConstructProps): void
}

interface LargeBinaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface LargeBinaryArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    appendValue(value: Uint8Array): boolean
    appendValueBytes(value: any): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of #GBytes.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: any[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

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

class LargeBinaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    static name: string
    static $gtype: GObject.GType<LargeBinaryArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.LargeBinaryArrayBuilder

    constructor(config?: LargeBinaryArrayBuilder_ConstructProps) 
    constructor() 
    static new(): LargeBinaryArrayBuilder
    _init(config?: LargeBinaryArrayBuilder_ConstructProps): void
}

interface LargeBinaryDataType_ConstructProps extends DataType_ConstructProps {
}

interface LargeBinaryDataType {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryDataType

    parentInstance: DataType

    // Class property signals of Arrow-1.0.Arrow.LargeBinaryDataType

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

class LargeBinaryDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryDataType

    static name: string
    static $gtype: GObject.GType<LargeBinaryDataType>

    // Constructors of Arrow-1.0.Arrow.LargeBinaryDataType

    constructor(config?: LargeBinaryDataType_ConstructProps) 
    constructor() 
    static new(): LargeBinaryDataType
    _init(config?: LargeBinaryDataType_ConstructProps): void
}

interface LargeBinaryScalar_ConstructProps extends BaseBinaryScalar_ConstructProps {
}

interface LargeBinaryScalar {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryScalar

    parentInstance: BaseBinaryScalar

    // Class property signals of Arrow-1.0.Arrow.LargeBinaryScalar

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

class LargeBinaryScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryScalar

    static name: string
    static $gtype: GObject.GType<LargeBinaryScalar>

    // Constructors of Arrow-1.0.Arrow.LargeBinaryScalar

    constructor(config?: LargeBinaryScalar_ConstructProps) 
    constructor(value: Buffer) 
    static new(value: Buffer): LargeBinaryScalar
    _init(config?: LargeBinaryScalar_ConstructProps): void
}

interface LargeListArray_ConstructProps extends Array_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.LargeListArray

    rawValues?: Array | null
}

interface LargeListArray {

    // Own properties of Arrow-1.0.Arrow.LargeListArray

    readonly rawValues: Array

    // Own fields of Arrow-1.0.Arrow.LargeListArray

    parentInstance: Array

    // Owm methods of Arrow-1.0.Arrow.LargeListArray

    getValue(i: number): Array
    getValueLength(i: number): number
    getValueOffset(i: number): number
    getValueOffsets(): number[]
    getValueType(): DataType

    // Overloads of getValueType

    getValueType(): Type
    getValueType(...args: any[]): any
    getValueType(...args: any[]): DataType | Type | any
    getValues(): Array

    // Class property signals of Arrow-1.0.Arrow.LargeListArray

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

class LargeListArray extends Array {

    // Own properties of Arrow-1.0.Arrow.LargeListArray

    static name: string
    static $gtype: GObject.GType<LargeListArray>

    // Constructors of Arrow-1.0.Arrow.LargeListArray

    constructor(config?: LargeListArray_ConstructProps) 
    constructor(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number): LargeListArray
    _init(config?: LargeListArray_ConstructProps): void
}

interface LargeListArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface LargeListArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.LargeListArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.LargeListArrayBuilder

    appendValue(): boolean
    getValueBuilder(): ArrayBuilder

    // Class property signals of Arrow-1.0.Arrow.LargeListArrayBuilder

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

class LargeListArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.LargeListArrayBuilder

    static name: string
    static $gtype: GObject.GType<LargeListArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.LargeListArrayBuilder

    constructor(config?: LargeListArrayBuilder_ConstructProps) 
    constructor(dataType: LargeListDataType) 
    static new(dataType: LargeListDataType): LargeListArrayBuilder
    _init(config?: LargeListArrayBuilder_ConstructProps): void
}

interface LargeListDataType_ConstructProps extends DataType_ConstructProps {
}

interface LargeListDataType {

    // Own fields of Arrow-1.0.Arrow.LargeListDataType

    parentInstance: DataType

    // Owm methods of Arrow-1.0.Arrow.LargeListDataType

    getField(): Field

    // Class property signals of Arrow-1.0.Arrow.LargeListDataType

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

class LargeListDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.LargeListDataType

    static name: string
    static $gtype: GObject.GType<LargeListDataType>

    // Constructors of Arrow-1.0.Arrow.LargeListDataType

    constructor(config?: LargeListDataType_ConstructProps) 
    constructor(field: Field) 
    static new(field: Field): LargeListDataType
    _init(config?: LargeListDataType_ConstructProps): void
}

interface LargeListScalar_ConstructProps extends BaseListScalar_ConstructProps {
}

interface LargeListScalar {

    // Own fields of Arrow-1.0.Arrow.LargeListScalar

    parentInstance: BaseListScalar

    // Class property signals of Arrow-1.0.Arrow.LargeListScalar

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

class LargeListScalar extends BaseListScalar {

    // Own properties of Arrow-1.0.Arrow.LargeListScalar

    static name: string
    static $gtype: GObject.GType<LargeListScalar>

    // Constructors of Arrow-1.0.Arrow.LargeListScalar

    constructor(config?: LargeListScalar_ConstructProps) 
    constructor(value: LargeListArray) 
    static new(value: LargeListArray): LargeListScalar
    _init(config?: LargeListScalar_ConstructProps): void
}

interface LargeStringArray_ConstructProps extends LargeBinaryArray_ConstructProps {
}

interface LargeStringArray {

    // Own fields of Arrow-1.0.Arrow.LargeStringArray

    parentInstance: LargeBinaryArray

    // Owm methods of Arrow-1.0.Arrow.LargeStringArray

    getString(i: number): string

    // Class property signals of Arrow-1.0.Arrow.LargeStringArray

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

class LargeStringArray extends LargeBinaryArray {

    // Own properties of Arrow-1.0.Arrow.LargeStringArray

    static name: string
    static $gtype: GObject.GType<LargeStringArray>

    // Constructors of Arrow-1.0.Arrow.LargeStringArray

    constructor(config?: LargeStringArray_ConstructProps) 
    constructor(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): LargeStringArray

    // Overloads of new

    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): LargeBinaryArray
    _init(config?: LargeStringArray_ConstructProps): void
}

interface LargeStringArrayBuilder_ConstructProps extends LargeBinaryArrayBuilder_ConstructProps {
}

interface LargeStringArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.LargeStringArrayBuilder

    parentInstance: LargeBinaryArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.LargeStringArrayBuilder

    appendString(value: string): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of strings.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendStrings(values: string[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.LargeStringArrayBuilder

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

class LargeStringArrayBuilder extends LargeBinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.LargeStringArrayBuilder

    static name: string
    static $gtype: GObject.GType<LargeStringArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.LargeStringArrayBuilder

    constructor(config?: LargeStringArrayBuilder_ConstructProps) 
    constructor() 
    static new(): LargeStringArrayBuilder

    // Overloads of new

    static new(): LargeBinaryArrayBuilder
    _init(config?: LargeStringArrayBuilder_ConstructProps): void
}

interface LargeStringDataType_ConstructProps extends DataType_ConstructProps {
}

interface LargeStringDataType {

    // Own fields of Arrow-1.0.Arrow.LargeStringDataType

    parentInstance: LargeBinaryDataType

    // Class property signals of Arrow-1.0.Arrow.LargeStringDataType

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

class LargeStringDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.LargeStringDataType

    static name: string
    static $gtype: GObject.GType<LargeStringDataType>

    // Constructors of Arrow-1.0.Arrow.LargeStringDataType

    constructor(config?: LargeStringDataType_ConstructProps) 
    constructor() 
    static new(): LargeStringDataType
    _init(config?: LargeStringDataType_ConstructProps): void
}

interface LargeStringScalar_ConstructProps extends BaseBinaryScalar_ConstructProps {
}

interface LargeStringScalar {

    // Own fields of Arrow-1.0.Arrow.LargeStringScalar

    parentInstance: BaseBinaryScalar

    // Class property signals of Arrow-1.0.Arrow.LargeStringScalar

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

class LargeStringScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.LargeStringScalar

    static name: string
    static $gtype: GObject.GType<LargeStringScalar>

    // Constructors of Arrow-1.0.Arrow.LargeStringScalar

    constructor(config?: LargeStringScalar_ConstructProps) 
    constructor(value: Buffer) 
    static new(value: Buffer): LargeStringScalar
    _init(config?: LargeStringScalar_ConstructProps): void
}

interface ListArray_ConstructProps extends Array_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.ListArray

    rawValues?: Array | null
}

interface ListArray {

    // Own properties of Arrow-1.0.Arrow.ListArray

    readonly rawValues: Array

    // Own fields of Arrow-1.0.Arrow.ListArray

    parentInstance: Array

    // Owm methods of Arrow-1.0.Arrow.ListArray

    getValue(i: number): Array
    getValueLength(i: number): number
    getValueOffset(i: number): number
    getValueOffsets(): number[]
    getValueType(): DataType

    // Overloads of getValueType

    getValueType(): Type
    getValueType(...args: any[]): any
    getValueType(...args: any[]): DataType | Type | any
    getValues(): Array

    // Class property signals of Arrow-1.0.Arrow.ListArray

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

class ListArray extends Array {

    // Own properties of Arrow-1.0.Arrow.ListArray

    static name: string
    static $gtype: GObject.GType<ListArray>

    // Constructors of Arrow-1.0.Arrow.ListArray

    constructor(config?: ListArray_ConstructProps) 
    constructor(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number): ListArray
    _init(config?: ListArray_ConstructProps): void
}

interface ListArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface ListArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.ListArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.ListArrayBuilder

    append(): boolean
    appendValue(): boolean
    getValueBuilder(): ArrayBuilder

    // Class property signals of Arrow-1.0.Arrow.ListArrayBuilder

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

class ListArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.ListArrayBuilder

    static name: string
    static $gtype: GObject.GType<ListArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.ListArrayBuilder

    constructor(config?: ListArrayBuilder_ConstructProps) 
    constructor(dataType: ListDataType) 
    static new(dataType: ListDataType): ListArrayBuilder
    _init(config?: ListArrayBuilder_ConstructProps): void
}

interface ListDataType_ConstructProps extends DataType_ConstructProps {
}

interface ListDataType {

    // Own fields of Arrow-1.0.Arrow.ListDataType

    parentInstance: DataType

    // Owm methods of Arrow-1.0.Arrow.ListDataType

    getField(): Field
    getValueField(): Field

    // Class property signals of Arrow-1.0.Arrow.ListDataType

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

class ListDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.ListDataType

    static name: string
    static $gtype: GObject.GType<ListDataType>

    // Constructors of Arrow-1.0.Arrow.ListDataType

    constructor(config?: ListDataType_ConstructProps) 
    constructor(field: Field) 
    static new(field: Field): ListDataType
    _init(config?: ListDataType_ConstructProps): void
}

interface ListScalar_ConstructProps extends BaseListScalar_ConstructProps {
}

interface ListScalar {

    // Own fields of Arrow-1.0.Arrow.ListScalar

    parentInstance: BaseListScalar

    // Class property signals of Arrow-1.0.Arrow.ListScalar

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

class ListScalar extends BaseListScalar {

    // Own properties of Arrow-1.0.Arrow.ListScalar

    static name: string
    static $gtype: GObject.GType<ListScalar>

    // Constructors of Arrow-1.0.Arrow.ListScalar

    constructor(config?: ListScalar_ConstructProps) 
    constructor(value: ListArray) 
    static new(value: ListArray): ListScalar
    _init(config?: ListScalar_ConstructProps): void
}

interface LiteralExpression_ConstructProps extends Expression_ConstructProps {
}

interface LiteralExpression {

    // Own fields of Arrow-1.0.Arrow.LiteralExpression

    parentInstance: Expression

    // Class property signals of Arrow-1.0.Arrow.LiteralExpression

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class LiteralExpression extends Expression {

    // Own properties of Arrow-1.0.Arrow.LiteralExpression

    static name: string
    static $gtype: GObject.GType<LiteralExpression>

    // Constructors of Arrow-1.0.Arrow.LiteralExpression

    constructor(config?: LiteralExpression_ConstructProps) 
    constructor(datum: Datum) 
    static new(datum: Datum): LiteralExpression
    _init(config?: LiteralExpression_ConstructProps): void
}

interface LocalFileSystem_ConstructProps extends FileSystem_ConstructProps {
}

interface LocalFileSystem {

    // Own fields of Arrow-1.0.Arrow.LocalFileSystem

    parentInstance: FileSystem

    // Class property signals of Arrow-1.0.Arrow.LocalFileSystem

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

class LocalFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystem

    static name: string
    static $gtype: GObject.GType<LocalFileSystem>

    // Constructors of Arrow-1.0.Arrow.LocalFileSystem

    constructor(config?: LocalFileSystem_ConstructProps) 
    constructor(options: LocalFileSystemOptions | null) 
    static new(options: LocalFileSystemOptions | null): LocalFileSystem
    _init(config?: LocalFileSystem_ConstructProps): void
}

interface LocalFileSystemOptions_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.LocalFileSystemOptions

    /**
     * Whether open_input_stream and open_input_file return a mmap'ed file,
     * or a regular one.
     */
    useMmap?: boolean | null
}

interface LocalFileSystemOptions {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystemOptions

    /**
     * Whether open_input_stream and open_input_file return a mmap'ed file,
     * or a regular one.
     */
    useMmap: boolean

    // Own fields of Arrow-1.0.Arrow.LocalFileSystemOptions

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.LocalFileSystemOptions

    connect(sigName: "notify::use-mmap", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-mmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-mmap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-mmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-mmap", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class LocalFileSystemOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystemOptions

    static name: string
    static $gtype: GObject.GType<LocalFileSystemOptions>

    // Constructors of Arrow-1.0.Arrow.LocalFileSystemOptions

    constructor(config?: LocalFileSystemOptions_ConstructProps) 
    constructor() 
    static new(): LocalFileSystemOptions
    _init(config?: LocalFileSystemOptions_ConstructProps): void
}

interface MapArray_ConstructProps extends ListArray_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.MapArray

    items?: Array | null
    keys?: Array | null
    offsets?: Array | null
}

interface MapArray {

    // Own properties of Arrow-1.0.Arrow.MapArray

    readonly items: Array
    readonly keys: Array
    readonly offsets: Array

    // Own fields of Arrow-1.0.Arrow.MapArray

    parentInstance: ListArray

    // Owm methods of Arrow-1.0.Arrow.MapArray

    getItems(): Array
    getKeys(): Array

    // Conflicting methods

    getValueType(...args: any[]): any

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

class MapArray extends ListArray {

    // Own properties of Arrow-1.0.Arrow.MapArray

    static name: string
    static $gtype: GObject.GType<MapArray>

    // Constructors of Arrow-1.0.Arrow.MapArray

    constructor(config?: MapArray_ConstructProps) 
    constructor(offsets: Array, keys: Array, items: Array) 
    static new(offsets: Array, keys: Array, items: Array): MapArray

    // Overloads of new

    static new(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number): ListArray
    _init(config?: MapArray_ConstructProps): void
}

interface MapArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface MapArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.MapArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.MapArrayBuilder

    appendValue(): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param offsets The array of signed int.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(offsets: number[], isValids: boolean[] | null): boolean
    getItemBuilder(): ArrayBuilder
    getKeyBuilder(): ArrayBuilder
    getValueBuilder(): ArrayBuilder

    // Class property signals of Arrow-1.0.Arrow.MapArrayBuilder

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

class MapArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.MapArrayBuilder

    static name: string
    static $gtype: GObject.GType<MapArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.MapArrayBuilder

    constructor(config?: MapArrayBuilder_ConstructProps) 
    constructor(dataType: MapDataType) 
    static new(dataType: MapDataType): MapArrayBuilder
    _init(config?: MapArrayBuilder_ConstructProps): void
}

interface MapDataType_ConstructProps extends ListDataType_ConstructProps {
}

interface MapDataType {

    // Own fields of Arrow-1.0.Arrow.MapDataType

    parentInstance: ListDataType

    // Owm methods of Arrow-1.0.Arrow.MapDataType

    getItemType(): DataType
    getKeyType(): DataType

    // Class property signals of Arrow-1.0.Arrow.MapDataType

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

class MapDataType extends ListDataType {

    // Own properties of Arrow-1.0.Arrow.MapDataType

    static name: string
    static $gtype: GObject.GType<MapDataType>

    // Constructors of Arrow-1.0.Arrow.MapDataType

    constructor(config?: MapDataType_ConstructProps) 
    constructor(keyType: DataType, itemType: DataType) 
    static new(keyType: DataType, itemType: DataType): MapDataType

    // Overloads of new

    static new(field: Field): ListDataType
    _init(config?: MapDataType_ConstructProps): void
}

interface MapScalar_ConstructProps extends BaseListScalar_ConstructProps {
}

interface MapScalar {

    // Own fields of Arrow-1.0.Arrow.MapScalar

    parentInstance: BaseListScalar

    // Class property signals of Arrow-1.0.Arrow.MapScalar

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

class MapScalar extends BaseListScalar {

    // Own properties of Arrow-1.0.Arrow.MapScalar

    static name: string
    static $gtype: GObject.GType<MapScalar>

    // Constructors of Arrow-1.0.Arrow.MapScalar

    constructor(config?: MapScalar_ConstructProps) 
    constructor(value: StructArray) 
    static new(value: StructArray): MapScalar
    _init(config?: MapScalar_ConstructProps): void
}

interface MemoryMappedInputStream_ConstructProps extends File_ConstructProps, Readable_ConstructProps, SeekableInputStream_ConstructProps {
}

interface MemoryMappedInputStream extends File, Readable {

    // Own fields of Arrow-1.0.Arrow.MemoryMappedInputStream

    parentInstance: SeekableInputStream

    // Conflicting methods

    close(...args: any[]): any
    read(...args: any[]): any
    readBytes(...args: any[]): any

    // Class property signals of Arrow-1.0.Arrow.MemoryMappedInputStream

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

class MemoryMappedInputStream extends SeekableInputStream {

    // Own properties of Arrow-1.0.Arrow.MemoryMappedInputStream

    static name: string
    static $gtype: GObject.GType<MemoryMappedInputStream>

    // Constructors of Arrow-1.0.Arrow.MemoryMappedInputStream

    constructor(config?: MemoryMappedInputStream_ConstructProps) 
    constructor(path: string) 
    static new(path: string): MemoryMappedInputStream
    _init(config?: MemoryMappedInputStream_ConstructProps): void
}

interface MockFileSystem_ConstructProps extends FileSystem_ConstructProps {
}

interface MockFileSystem {

    // Own fields of Arrow-1.0.Arrow.MockFileSystem

    parentInstance: FileSystem

    // Class property signals of Arrow-1.0.Arrow.MockFileSystem

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

class MockFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.MockFileSystem

    static name: string
    static $gtype: GObject.GType<MockFileSystem>

    // Constructors of Arrow-1.0.Arrow.MockFileSystem

    constructor(config?: MockFileSystem_ConstructProps) 
    _init(config?: MockFileSystem_ConstructProps): void
}

interface MonthDayNanoIntervalDataType_ConstructProps extends IntervalDataType_ConstructProps {
}

interface MonthDayNanoIntervalDataType {

    // Own fields of Arrow-1.0.Arrow.MonthDayNanoIntervalDataType

    parentInstance: IntervalDataType

    // Class property signals of Arrow-1.0.Arrow.MonthDayNanoIntervalDataType

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

class MonthDayNanoIntervalDataType extends IntervalDataType {

    // Own properties of Arrow-1.0.Arrow.MonthDayNanoIntervalDataType

    static name: string
    static $gtype: GObject.GType<MonthDayNanoIntervalDataType>

    // Constructors of Arrow-1.0.Arrow.MonthDayNanoIntervalDataType

    constructor(config?: MonthDayNanoIntervalDataType_ConstructProps) 
    constructor() 
    static new(): MonthDayNanoIntervalDataType
    _init(config?: MonthDayNanoIntervalDataType_ConstructProps): void
}

interface MonthIntervalDataType_ConstructProps extends IntervalDataType_ConstructProps {
}

interface MonthIntervalDataType {

    // Own fields of Arrow-1.0.Arrow.MonthIntervalDataType

    parentInstance: IntervalDataType

    // Class property signals of Arrow-1.0.Arrow.MonthIntervalDataType

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

class MonthIntervalDataType extends IntervalDataType {

    // Own properties of Arrow-1.0.Arrow.MonthIntervalDataType

    static name: string
    static $gtype: GObject.GType<MonthIntervalDataType>

    // Constructors of Arrow-1.0.Arrow.MonthIntervalDataType

    constructor(config?: MonthIntervalDataType_ConstructProps) 
    constructor() 
    static new(): MonthIntervalDataType
    _init(config?: MonthIntervalDataType_ConstructProps): void
}

interface MutableBuffer_ConstructProps extends Buffer_ConstructProps {
}

interface MutableBuffer {

    // Own fields of Arrow-1.0.Arrow.MutableBuffer

    parentInstance: Buffer

    // Owm methods of Arrow-1.0.Arrow.MutableBuffer

    setData(offset: number, data?: Uint8Array): boolean

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
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    setData(...args: any[]): any
    setData(args_or_key: any[] | string, data?: object | null): boolean | void | any
    slice(offset: number, size?: number): MutableBuffer

    // Overloads of slice

    slice(offset: number, size?: number): Buffer
    slice(...args: any[]): any
    slice(args_or_offset: any[] | number, size?: number): MutableBuffer | Buffer | any

    // Conflicting methods

    getData(...args: any[]): any

    // Class property signals of Arrow-1.0.Arrow.MutableBuffer

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

class MutableBuffer extends Buffer {

    // Own properties of Arrow-1.0.Arrow.MutableBuffer

    static name: string
    static $gtype: GObject.GType<MutableBuffer>

    // Constructors of Arrow-1.0.Arrow.MutableBuffer

    constructor(config?: MutableBuffer_ConstructProps) 
    constructor(data: Uint8Array) 
    static new(data: Uint8Array): MutableBuffer

    // Overloads of new

    static new(data: Uint8Array): Buffer
    static newBytes(data: any): MutableBuffer

    // Overloads of newBytes

    static newBytes(data: any): Buffer
    _init(config?: MutableBuffer_ConstructProps): void
}

interface NullArray_ConstructProps extends Array_ConstructProps {
}

interface NullArray {

    // Own fields of Arrow-1.0.Arrow.NullArray

    parentInstance: Array

    // Class property signals of Arrow-1.0.Arrow.NullArray

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

class NullArray extends Array {

    // Own properties of Arrow-1.0.Arrow.NullArray

    static name: string
    static $gtype: GObject.GType<NullArray>

    // Constructors of Arrow-1.0.Arrow.NullArray

    constructor(config?: NullArray_ConstructProps) 
    constructor(length: number) 
    static new(length: number): NullArray
    _init(config?: NullArray_ConstructProps): void
}

interface NullArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface NullArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.NullArrayBuilder

    parentInstance: ArrayBuilder

    // Class property signals of Arrow-1.0.Arrow.NullArrayBuilder

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

class NullArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.NullArrayBuilder

    static name: string
    static $gtype: GObject.GType<NullArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.NullArrayBuilder

    constructor(config?: NullArrayBuilder_ConstructProps) 
    constructor() 
    static new(): NullArrayBuilder
    _init(config?: NullArrayBuilder_ConstructProps): void
}

interface NullDataType_ConstructProps extends DataType_ConstructProps {
}

interface NullDataType {

    // Own fields of Arrow-1.0.Arrow.NullDataType

    parentInstance: DataType

    // Class property signals of Arrow-1.0.Arrow.NullDataType

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

class NullDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.NullDataType

    static name: string
    static $gtype: GObject.GType<NullDataType>

    // Constructors of Arrow-1.0.Arrow.NullDataType

    constructor(config?: NullDataType_ConstructProps) 
    constructor() 
    static new(): NullDataType
    _init(config?: NullDataType_ConstructProps): void
}

interface NullScalar_ConstructProps extends Scalar_ConstructProps {
}

interface NullScalar {

    // Own fields of Arrow-1.0.Arrow.NullScalar

    parentInstance: Scalar

    // Class property signals of Arrow-1.0.Arrow.NullScalar

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

class NullScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.NullScalar

    static name: string
    static $gtype: GObject.GType<NullScalar>

    // Constructors of Arrow-1.0.Arrow.NullScalar

    constructor(config?: NullScalar_ConstructProps) 
    constructor() 
    static new(): NullScalar
    _init(config?: NullScalar_ConstructProps): void
}

interface NumericArray_ConstructProps extends PrimitiveArray_ConstructProps {
}

interface NumericArray {

    // Own fields of Arrow-1.0.Arrow.NumericArray

    parentInstance: PrimitiveArray

    // Owm methods of Arrow-1.0.Arrow.NumericArray

    mean(): number

    // Class property signals of Arrow-1.0.Arrow.NumericArray

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

class NumericArray extends PrimitiveArray {

    // Own properties of Arrow-1.0.Arrow.NumericArray

    static name: string
    static $gtype: GObject.GType<NumericArray>

    // Constructors of Arrow-1.0.Arrow.NumericArray

    constructor(config?: NumericArray_ConstructProps) 
    _init(config?: NumericArray_ConstructProps): void
}

interface NumericDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}

interface NumericDataType {

    // Own fields of Arrow-1.0.Arrow.NumericDataType

    parentInstance: FixedWidthDataType

    // Class property signals of Arrow-1.0.Arrow.NumericDataType

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

class NumericDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.NumericDataType

    static name: string
    static $gtype: GObject.GType<NumericDataType>

    // Constructors of Arrow-1.0.Arrow.NumericDataType

    constructor(config?: NumericDataType_ConstructProps) 
    _init(config?: NumericDataType_ConstructProps): void
}

interface OutputStream_ConstructProps extends File_ConstructProps, Writable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.OutputStream

    outputStream?: object | null
}

interface OutputStream extends File, Writable {

    // Own properties of Arrow-1.0.Arrow.OutputStream

    readonly outputStream: object

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class OutputStream extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.OutputStream

    static name: string
    static $gtype: GObject.GType<OutputStream>

    // Constructors of Arrow-1.0.Arrow.OutputStream

    constructor(config?: OutputStream_ConstructProps) 
    _init(config?: OutputStream_ConstructProps): void
}

interface PrimitiveArray_ConstructProps extends Array_ConstructProps {
}

interface PrimitiveArray {

    // Own fields of Arrow-1.0.Arrow.PrimitiveArray

    parentInstance: Array

    // Owm methods of Arrow-1.0.Arrow.PrimitiveArray

    getBuffer(): Buffer
    getDataBuffer(): Buffer

    // Class property signals of Arrow-1.0.Arrow.PrimitiveArray

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

class PrimitiveArray extends Array {

    // Own properties of Arrow-1.0.Arrow.PrimitiveArray

    static name: string
    static $gtype: GObject.GType<PrimitiveArray>

    // Constructors of Arrow-1.0.Arrow.PrimitiveArray

    constructor(config?: PrimitiveArray_ConstructProps) 
    _init(config?: PrimitiveArray_ConstructProps): void
}

interface ReadOptions_ConstructProps extends GObject.Object_ConstructProps {

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

interface ReadOptions {

    // Own properties of Arrow-1.0.Arrow.ReadOptions

    /**
     * The maximum permitted schema nesting depth.
     */
    maxRecursionDepth: number
    /**
     * Whether to use the global CPU thread pool.
     */
    useThreads: boolean

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ReadOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.ReadOptions

    static name: string
    static $gtype: GObject.GType<ReadOptions>

    // Constructors of Arrow-1.0.Arrow.ReadOptions

    constructor(config?: ReadOptions_ConstructProps) 
    constructor() 
    static new(): ReadOptions
    _init(config?: ReadOptions_ConstructProps): void
}

interface RecordBatch_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.RecordBatch

    recordBatch?: object | null
}

interface RecordBatch {

    // Own properties of Arrow-1.0.Arrow.RecordBatch

    readonly recordBatch: object

    // Own fields of Arrow-1.0.Arrow.RecordBatch

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.RecordBatch

    addColumn(i: number, field: Field, column: Array): RecordBatch | null
    equal(otherRecordBatch: RecordBatch): boolean
    equalMetadata(otherRecordBatch: RecordBatch, checkMetadata: boolean): boolean
    export(): [ /* returnType */ boolean, /* cAbiArray */ object | null, /* cAbiSchema */ object | null ]
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RecordBatch extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatch

    static name: string
    static $gtype: GObject.GType<RecordBatch>

    // Constructors of Arrow-1.0.Arrow.RecordBatch

    constructor(config?: RecordBatch_ConstructProps) 
    constructor(schema: Schema, nRows: number, columns: Array[]) 
    static new(schema: Schema, nRows: number, columns: Array[]): RecordBatch
    _init(config?: RecordBatch_ConstructProps): void
    static import(cAbiArray: object, schema: Schema): RecordBatch | null
}

interface RecordBatchBuilder_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.RecordBatchBuilder

    recordBatchBuilder?: object | null
}

interface RecordBatchBuilder {

    // Own properties of Arrow-1.0.Arrow.RecordBatchBuilder

    readonly recordBatchBuilder: object

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RecordBatchBuilder extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchBuilder

    static name: string
    static $gtype: GObject.GType<RecordBatchBuilder>

    // Constructors of Arrow-1.0.Arrow.RecordBatchBuilder

    constructor(config?: RecordBatchBuilder_ConstructProps) 
    constructor(schema: Schema) 
    static new(schema: Schema): RecordBatchBuilder
    _init(config?: RecordBatchBuilder_ConstructProps): void
}

interface RecordBatchDatum_ConstructProps extends Datum_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.RecordBatchDatum

    value?: RecordBatch | null
}

interface RecordBatchDatum {

    // Own properties of Arrow-1.0.Arrow.RecordBatchDatum

    readonly value: RecordBatch

    // Own fields of Arrow-1.0.Arrow.RecordBatchDatum

    parentInstance: Datum

    // Class property signals of Arrow-1.0.Arrow.RecordBatchDatum

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
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

class RecordBatchDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.RecordBatchDatum

    static name: string
    static $gtype: GObject.GType<RecordBatchDatum>

    // Constructors of Arrow-1.0.Arrow.RecordBatchDatum

    constructor(config?: RecordBatchDatum_ConstructProps) 
    constructor(value: RecordBatch) 
    static new(value: RecordBatch): RecordBatchDatum
    _init(config?: RecordBatchDatum_ConstructProps): void
}

interface RecordBatchFileReader_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.RecordBatchFileReader

    recordBatchFileReader?: object | null
}

interface RecordBatchFileReader {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileReader

    readonly recordBatchFileReader: object

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
class RecordBatchFileReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileReader

    static name: string
    static $gtype: GObject.GType<RecordBatchFileReader>

    // Constructors of Arrow-1.0.Arrow.RecordBatchFileReader

    constructor(config?: RecordBatchFileReader_ConstructProps) 
    constructor(file: SeekableInputStream) 
    static new(file: SeekableInputStream): RecordBatchFileReader
    _init(config?: RecordBatchFileReader_ConstructProps): void
}

interface RecordBatchFileWriter_ConstructProps extends RecordBatchStreamWriter_ConstructProps {
}

interface RecordBatchFileWriter {

    // Class property signals of Arrow-1.0.Arrow.RecordBatchFileWriter

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
class RecordBatchFileWriter extends RecordBatchStreamWriter {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileWriter

    static name: string
    static $gtype: GObject.GType<RecordBatchFileWriter>

    // Constructors of Arrow-1.0.Arrow.RecordBatchFileWriter

    constructor(config?: RecordBatchFileWriter_ConstructProps) 
    constructor(sink: OutputStream, schema: Schema) 
    static new(sink: OutputStream, schema: Schema): RecordBatchFileWriter

    // Overloads of new

    static new(sink: OutputStream, schema: Schema): RecordBatchStreamWriter
    _init(config?: RecordBatchFileWriter_ConstructProps): void
}

interface RecordBatchIterator_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.RecordBatchIterator

    iterator?: object | null
}

interface RecordBatchIterator {

    // Own properties of Arrow-1.0.Arrow.RecordBatchIterator

    readonly iterator: object

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RecordBatchIterator extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchIterator

    static name: string
    static $gtype: GObject.GType<RecordBatchIterator>

    // Constructors of Arrow-1.0.Arrow.RecordBatchIterator

    constructor(config?: RecordBatchIterator_ConstructProps) 
    constructor(recordBatches: RecordBatch[]) 
    static new(recordBatches: RecordBatch[]): RecordBatchIterator
    _init(config?: RecordBatchIterator_ConstructProps): void
}

interface RecordBatchReader_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.RecordBatchReader

    recordBatchReader?: object | null
}

interface RecordBatchReader {

    // Own properties of Arrow-1.0.Arrow.RecordBatchReader

    readonly recordBatchReader: object

    // Own fields of Arrow-1.0.Arrow.RecordBatchReader

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.RecordBatchReader

    export(): object | null
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RecordBatchReader extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchReader

    static name: string
    static $gtype: GObject.GType<RecordBatchReader>

    // Constructors of Arrow-1.0.Arrow.RecordBatchReader

    constructor(config?: RecordBatchReader_ConstructProps) 
    constructor(recordBatches: RecordBatch[], schema: Schema | null) 
    static new(recordBatches: RecordBatch[], schema: Schema | null): RecordBatchReader
    _init(config?: RecordBatchReader_ConstructProps): void
    static import(cAbiArrayStream: object): RecordBatchReader | null
}

interface RecordBatchStreamReader_ConstructProps extends RecordBatchReader_ConstructProps {
}

interface RecordBatchStreamReader {

    // Class property signals of Arrow-1.0.Arrow.RecordBatchStreamReader

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
class RecordBatchStreamReader extends RecordBatchReader {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamReader

    static name: string
    static $gtype: GObject.GType<RecordBatchStreamReader>

    // Constructors of Arrow-1.0.Arrow.RecordBatchStreamReader

    constructor(config?: RecordBatchStreamReader_ConstructProps) 
    constructor(stream: InputStream) 
    static new(stream: InputStream): RecordBatchStreamReader

    // Overloads of new

    static new(recordBatches: RecordBatch[], schema: Schema | null): RecordBatchReader
    _init(config?: RecordBatchStreamReader_ConstructProps): void
}

interface RecordBatchStreamWriter_ConstructProps extends RecordBatchWriter_ConstructProps {
}

interface RecordBatchStreamWriter {

    // Class property signals of Arrow-1.0.Arrow.RecordBatchStreamWriter

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
class RecordBatchStreamWriter extends RecordBatchWriter {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamWriter

    static name: string
    static $gtype: GObject.GType<RecordBatchStreamWriter>

    // Constructors of Arrow-1.0.Arrow.RecordBatchStreamWriter

    constructor(config?: RecordBatchStreamWriter_ConstructProps) 
    constructor(sink: OutputStream, schema: Schema) 
    static new(sink: OutputStream, schema: Schema): RecordBatchStreamWriter
    _init(config?: RecordBatchStreamWriter_ConstructProps): void
}

interface RecordBatchWriter_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.RecordBatchWriter

    recordBatchWriter?: object | null
}

interface RecordBatchWriter {

    // Own properties of Arrow-1.0.Arrow.RecordBatchWriter

    readonly recordBatchWriter: object

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
class RecordBatchWriter extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.RecordBatchWriter

    static name: string
    static $gtype: GObject.GType<RecordBatchWriter>

    // Constructors of Arrow-1.0.Arrow.RecordBatchWriter

    constructor(config?: RecordBatchWriter_ConstructProps) 
    _init(config?: RecordBatchWriter_ConstructProps): void
}

interface ResizableBuffer_ConstructProps extends MutableBuffer_ConstructProps {
}

interface ResizableBuffer {

    // Own fields of Arrow-1.0.Arrow.ResizableBuffer

    parentInstance: MutableBuffer

    // Owm methods of Arrow-1.0.Arrow.ResizableBuffer

    reserve(newCapacity: number): boolean
    resize(newSize: number): boolean

    // Conflicting methods

    setData(...args: any[]): any
    slice(...args: any[]): any
    getData(...args: any[]): any

    // Class property signals of Arrow-1.0.Arrow.ResizableBuffer

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

class ResizableBuffer extends MutableBuffer {

    // Own properties of Arrow-1.0.Arrow.ResizableBuffer

    static name: string
    static $gtype: GObject.GType<ResizableBuffer>

    // Constructors of Arrow-1.0.Arrow.ResizableBuffer

    constructor(config?: ResizableBuffer_ConstructProps) 
    constructor(initialSize: number) 
    static new(initialSize: number): ResizableBuffer

    // Overloads of new

    static new(data: Uint8Array): MutableBuffer
    static new(data: Uint8Array): Buffer
    _init(config?: ResizableBuffer_ConstructProps): void

    // Conflicting static methods

    static newBytes(...args: any[]): any
}

interface RoundOptions_ConstructProps extends FunctionOptions_ConstructProps {

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

interface RoundOptions {

    // Own properties of Arrow-1.0.Arrow.RoundOptions

    /**
     * The rounding and tie-breaking mode.
     */
    mode: RoundMode
    /**
     * The rounding precision (number of digits to round to).
     */
    nDigits: number

    // Own fields of Arrow-1.0.Arrow.RoundOptions

    parentInstance: FunctionOptions

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RoundOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.RoundOptions

    static name: string
    static $gtype: GObject.GType<RoundOptions>

    // Constructors of Arrow-1.0.Arrow.RoundOptions

    constructor(config?: RoundOptions_ConstructProps) 
    constructor() 
    static new(): RoundOptions
    _init(config?: RoundOptions_ConstructProps): void
}

interface RoundToMultipleOptions_ConstructProps extends FunctionOptions_ConstructProps {

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

    parentInstance: FunctionOptions

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RoundToMultipleOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.RoundToMultipleOptions

    static name: string
    static $gtype: GObject.GType<RoundToMultipleOptions>

    // Constructors of Arrow-1.0.Arrow.RoundToMultipleOptions

    constructor(config?: RoundToMultipleOptions_ConstructProps) 
    constructor() 
    static new(): RoundToMultipleOptions
    _init(config?: RoundToMultipleOptions_ConstructProps): void
}

interface S3FileSystem_ConstructProps extends FileSystem_ConstructProps {
}

interface S3FileSystem {

    // Own fields of Arrow-1.0.Arrow.S3FileSystem

    parentInstance: FileSystem

    // Class property signals of Arrow-1.0.Arrow.S3FileSystem

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

class S3FileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.S3FileSystem

    static name: string
    static $gtype: GObject.GType<S3FileSystem>

    // Constructors of Arrow-1.0.Arrow.S3FileSystem

    constructor(config?: S3FileSystem_ConstructProps) 
    _init(config?: S3FileSystem_ConstructProps): void
}

interface S3GlobalOptions_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.S3GlobalOptions

    /**
     * The log level of S3 APIs.
     */
    logLevel?: S3LogLevel | null
}

interface S3GlobalOptions {

    // Own properties of Arrow-1.0.Arrow.S3GlobalOptions

    /**
     * The log level of S3 APIs.
     */
    logLevel: S3LogLevel

    // Own fields of Arrow-1.0.Arrow.S3GlobalOptions

    parentInstance: GObject.Object

    // Class property signals of Arrow-1.0.Arrow.S3GlobalOptions

    connect(sigName: "notify::log-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::log-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::log-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::log-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::log-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class S3GlobalOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.S3GlobalOptions

    static name: string
    static $gtype: GObject.GType<S3GlobalOptions>

    // Constructors of Arrow-1.0.Arrow.S3GlobalOptions

    constructor(config?: S3GlobalOptions_ConstructProps) 
    constructor() 
    static new(): S3GlobalOptions
    _init(config?: S3GlobalOptions_ConstructProps): void
}

interface Scalar_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Scalar

    /**
     * The data type of the scalar.
     */
    dataType?: DataType | null
    scalar?: object | null
}

interface Scalar {

    // Own properties of Arrow-1.0.Arrow.Scalar

    /**
     * The data type of the scalar.
     */
    readonly dataType: DataType
    readonly scalar: object

    // Own fields of Arrow-1.0.Arrow.Scalar

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Scalar

    cast(dataType: DataType, options: CastOptions | null): Scalar | null
    equal(otherScalar: Scalar): boolean
    equalOptions(otherScalar: Scalar, options: EqualOptions | null): boolean
    getDataType(): DataType
    isValid(): boolean
    toString(): string

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Scalar extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Scalar

    static name: string
    static $gtype: GObject.GType<Scalar>

    // Constructors of Arrow-1.0.Arrow.Scalar

    constructor(config?: Scalar_ConstructProps) 
    _init(config?: Scalar_ConstructProps): void
    static parse(dataType: DataType, data: Uint8Array): Scalar | null
}

interface ScalarAggregateOptions_ConstructProps extends FunctionOptions_ConstructProps {

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

interface ScalarAggregateOptions {

    // Own properties of Arrow-1.0.Arrow.ScalarAggregateOptions

    /**
     * The minimum required number of values.
     */
    minCount: number
    /**
     * Whether NULLs are skipped or not.
     */
    skipNulls: boolean

    // Own fields of Arrow-1.0.Arrow.ScalarAggregateOptions

    parentInstance: FunctionOptions

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ScalarAggregateOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.ScalarAggregateOptions

    static name: string
    static $gtype: GObject.GType<ScalarAggregateOptions>

    // Constructors of Arrow-1.0.Arrow.ScalarAggregateOptions

    constructor(config?: ScalarAggregateOptions_ConstructProps) 
    constructor() 
    static new(): ScalarAggregateOptions
    _init(config?: ScalarAggregateOptions_ConstructProps): void
}

interface ScalarDatum_ConstructProps extends Datum_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.ScalarDatum

    value?: Scalar | null
}

interface ScalarDatum {

    // Own properties of Arrow-1.0.Arrow.ScalarDatum

    readonly value: Scalar

    // Own fields of Arrow-1.0.Arrow.ScalarDatum

    parentInstance: Datum

    // Class property signals of Arrow-1.0.Arrow.ScalarDatum

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
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

class ScalarDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.ScalarDatum

    static name: string
    static $gtype: GObject.GType<ScalarDatum>

    // Constructors of Arrow-1.0.Arrow.ScalarDatum

    constructor(config?: ScalarDatum_ConstructProps) 
    constructor(value: Scalar) 
    static new(value: Scalar): ScalarDatum
    _init(config?: ScalarDatum_ConstructProps): void
}

interface Schema_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Schema

    schema?: object | null
}

interface Schema {

    // Own properties of Arrow-1.0.Arrow.Schema

    readonly schema: object

    // Own fields of Arrow-1.0.Arrow.Schema

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Schema

    addField(i: number, field: Field): Schema | null
    equal(otherSchema: Schema): boolean
    export(): object | null
    getField(i: number): Field
    getFieldByName(name: string): Field
    getFieldIndex(name: string): number
    getFields(): Field[]
    getMetadata(): GLib.HashTable | null
    hasMetadata(): boolean
    nFields(): number
    removeField(i: number): Schema | null
    replaceField(i: number, field: Field): Schema | null
    toString(): string
    toStringMetadata(showMetadata: boolean): string
    withMetadata(metadata: GLib.HashTable): Schema

    // Class property signals of Arrow-1.0.Arrow.Schema

    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Schema extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Schema

    static name: string
    static $gtype: GObject.GType<Schema>

    // Constructors of Arrow-1.0.Arrow.Schema

    constructor(config?: Schema_ConstructProps) 
    constructor(fields: Field[]) 
    static new(fields: Field[]): Schema
    _init(config?: Schema_ConstructProps): void
    static import(cAbiSchema: object): Schema | null
}

interface SeekableInputStream_ConstructProps extends File_ConstructProps, Readable_ConstructProps, InputStream_ConstructProps {
}

interface SeekableInputStream extends File, Readable {

    // Own fields of Arrow-1.0.Arrow.SeekableInputStream

    parentInstance: InputStream

    // Owm methods of Arrow-1.0.Arrow.SeekableInputStream

    getSize(): number
    getSupportZeroCopy(): boolean
    peek(nBytes: number): any
    readAt(position: number, nBytes: number): Buffer | null
    readAtBytes(position: number, nBytes: number): any | null

    // Conflicting methods

    close(...args: any[]): any
    read(...args: any[]): any
    readBytes(...args: any[]): any

    // Class property signals of Arrow-1.0.Arrow.SeekableInputStream

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

class SeekableInputStream extends InputStream {

    // Own properties of Arrow-1.0.Arrow.SeekableInputStream

    static name: string
    static $gtype: GObject.GType<SeekableInputStream>

    // Constructors of Arrow-1.0.Arrow.SeekableInputStream

    constructor(config?: SeekableInputStream_ConstructProps) 
    _init(config?: SeekableInputStream_ConstructProps): void
}

interface SetLookupOptions_ConstructProps extends FunctionOptions_ConstructProps {

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

interface SetLookupOptions {

    // Own properties of Arrow-1.0.Arrow.SetLookupOptions

    /**
     * Whether NULLs are skipped or not.
     */
    skipNulls: boolean
    /**
     * The set of values to look up input values into.
     */
    valueSet: Datum

    // Own fields of Arrow-1.0.Arrow.SetLookupOptions

    parentInstance: FunctionOptions

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SetLookupOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.SetLookupOptions

    static name: string
    static $gtype: GObject.GType<SetLookupOptions>

    // Constructors of Arrow-1.0.Arrow.SetLookupOptions

    constructor(config?: SetLookupOptions_ConstructProps) 
    constructor(valueSet: Datum | null) 
    static new(valueSet: Datum | null): SetLookupOptions
    _init(config?: SetLookupOptions_ConstructProps): void
}

interface SinkNodeOptions_ConstructProps extends ExecuteNodeOptions_ConstructProps {
}

interface SinkNodeOptions {

    // Own fields of Arrow-1.0.Arrow.SinkNodeOptions

    parentInstance: ExecuteNodeOptions

    // Owm methods of Arrow-1.0.Arrow.SinkNodeOptions

    getReader(schema: Schema): RecordBatchReader

    // Class property signals of Arrow-1.0.Arrow.SinkNodeOptions

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

class SinkNodeOptions extends ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.SinkNodeOptions

    static name: string
    static $gtype: GObject.GType<SinkNodeOptions>

    // Constructors of Arrow-1.0.Arrow.SinkNodeOptions

    constructor(config?: SinkNodeOptions_ConstructProps) 
    constructor() 
    static new(): SinkNodeOptions
    _init(config?: SinkNodeOptions_ConstructProps): void
}

interface SlowFileSystem_ConstructProps extends FileSystem_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.SlowFileSystem

    baseFileSystem?: FileSystem | null
}

interface SlowFileSystem {

    // Own properties of Arrow-1.0.Arrow.SlowFileSystem

    readonly baseFileSystem: FileSystem

    // Own fields of Arrow-1.0.Arrow.SlowFileSystem

    parentInstance: FileSystem

    // Class property signals of Arrow-1.0.Arrow.SlowFileSystem

    connect(sigName: "notify::base-file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-file-system", ...args: any[]): void
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

class SlowFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.SlowFileSystem

    static name: string
    static $gtype: GObject.GType<SlowFileSystem>

    // Constructors of Arrow-1.0.Arrow.SlowFileSystem

    constructor(config?: SlowFileSystem_ConstructProps) 
    /**
     * The latency is normally distributed with a standard deviation of
     * `average_latency` * 0.1.
     * 
     * The random seed is given by the default random device.
     * @constructor 
     * @param baseFileSystem A #GArrowFileSystem as the base file system.
     * @param averageLatency The average value of the latency.
     */
    static newAverageLatency(baseFileSystem: FileSystem, averageLatency: number): SlowFileSystem
    /**
     * The latency is normally distributed with a standard deviation of
     * `average_latency` * 0.1.
     * @constructor 
     * @param baseFileSystem A #GArrowFileSystem as the base file system.
     * @param averageLatency The average value of the latency.
     * @param seed A random seed.
     */
    static newAverageLatencyAndSeed(baseFileSystem: FileSystem, averageLatency: number, seed: number): SlowFileSystem
    _init(config?: SlowFileSystem_ConstructProps): void
}

interface SortKey_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.SortKey

    /**
     * How to order values.
     */
    order?: SortOrder | null
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
    readonly target: string

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SortKey extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.SortKey

    static name: string
    static $gtype: GObject.GType<SortKey>

    // Constructors of Arrow-1.0.Arrow.SortKey

    constructor(config?: SortKey_ConstructProps) 
    constructor(target: string, order: SortOrder) 
    static new(target: string, order: SortOrder): SortKey
    _init(config?: SortKey_ConstructProps): void
}

interface SortOptions_ConstructProps extends FunctionOptions_ConstructProps {
}

interface SortOptions {

    // Own fields of Arrow-1.0.Arrow.SortOptions

    parentInstance: FunctionOptions

    // Owm methods of Arrow-1.0.Arrow.SortOptions

    /**
     * Add a sort key to be used.
     * @param sortKey The sort key to be added.
     */
    addSortKey(sortKey: SortKey): void
    equal(otherOptions: SortOptions): boolean

    // Overloads of equal

    equal(otherOptions: FunctionOptions | null): boolean
    equal(...args: any[]): any
    equal(args_or_otherOptions: any[] | FunctionOptions | null): boolean | any
    getSortKeys(): SortKey[]
    /**
     * Set sort keys to be used.
     * @param sortKeys The sort keys to be used.
     */
    setSortKeys(sortKeys: SortKey[]): void

    // Class property signals of Arrow-1.0.Arrow.SortOptions

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SortOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.SortOptions

    static name: string
    static $gtype: GObject.GType<SortOptions>

    // Constructors of Arrow-1.0.Arrow.SortOptions

    constructor(config?: SortOptions_ConstructProps) 
    constructor(sortKeys: SortKey[] | null) 
    static new(sortKeys: SortKey[] | null): SortOptions
    _init(config?: SortOptions_ConstructProps): void
}

interface SourceNodeOptions_ConstructProps extends ExecuteNodeOptions_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.SourceNodeOptions

    reader?: RecordBatchReader | null
    recordBatch?: RecordBatch | null
}

interface SourceNodeOptions {

    // Own properties of Arrow-1.0.Arrow.SourceNodeOptions

    readonly reader: RecordBatchReader
    readonly recordBatch: RecordBatch

    // Own fields of Arrow-1.0.Arrow.SourceNodeOptions

    parentInstance: ExecuteNodeOptions

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

class SourceNodeOptions extends ExecuteNodeOptions {

    // Own properties of Arrow-1.0.Arrow.SourceNodeOptions

    static name: string
    static $gtype: GObject.GType<SourceNodeOptions>

    // Constructors of Arrow-1.0.Arrow.SourceNodeOptions

    constructor(config?: SourceNodeOptions_ConstructProps) 
    static newRecordBatch(recordBatch: RecordBatch): SourceNodeOptions
    static newRecordBatchReader(reader: RecordBatchReader): SourceNodeOptions
    static newTable(table: Table): SourceNodeOptions
    _init(config?: SourceNodeOptions_ConstructProps): void
}

interface SparseUnionArray_ConstructProps extends UnionArray_ConstructProps {
}

interface SparseUnionArray {

    // Own fields of Arrow-1.0.Arrow.SparseUnionArray

    parentInstance: UnionArray

    // Class property signals of Arrow-1.0.Arrow.SparseUnionArray

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

class SparseUnionArray extends UnionArray {

    // Own properties of Arrow-1.0.Arrow.SparseUnionArray

    static name: string
    static $gtype: GObject.GType<SparseUnionArray>

    // Constructors of Arrow-1.0.Arrow.SparseUnionArray

    constructor(config?: SparseUnionArray_ConstructProps) 
    constructor(typeIds: Int8Array, fields: Array[]) 
    static new(typeIds: Int8Array, fields: Array[]): SparseUnionArray
    static newDataType(dataType: SparseUnionDataType, typeIds: Int8Array, fields: Array[]): SparseUnionArray
    _init(config?: SparseUnionArray_ConstructProps): void
}

interface SparseUnionDataType_ConstructProps extends UnionDataType_ConstructProps {
}

interface SparseUnionDataType {

    // Own fields of Arrow-1.0.Arrow.SparseUnionDataType

    parentInstance: UnionDataType

    // Class property signals of Arrow-1.0.Arrow.SparseUnionDataType

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

class SparseUnionDataType extends UnionDataType {

    // Own properties of Arrow-1.0.Arrow.SparseUnionDataType

    static name: string
    static $gtype: GObject.GType<SparseUnionDataType>

    // Constructors of Arrow-1.0.Arrow.SparseUnionDataType

    constructor(config?: SparseUnionDataType_ConstructProps) 
    constructor(fields: Field[], typeCodes: Uint8Array) 
    static new(fields: Field[], typeCodes: Uint8Array): SparseUnionDataType
    _init(config?: SparseUnionDataType_ConstructProps): void
}

interface SparseUnionScalar_ConstructProps extends UnionScalar_ConstructProps {
}

interface SparseUnionScalar {

    // Own fields of Arrow-1.0.Arrow.SparseUnionScalar

    parentInstance: UnionScalar

    // Class property signals of Arrow-1.0.Arrow.SparseUnionScalar

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

class SparseUnionScalar extends UnionScalar {

    // Own properties of Arrow-1.0.Arrow.SparseUnionScalar

    static name: string
    static $gtype: GObject.GType<SparseUnionScalar>

    // Constructors of Arrow-1.0.Arrow.SparseUnionScalar

    constructor(config?: SparseUnionScalar_ConstructProps) 
    constructor(dataType: SparseUnionDataType, typeCode: number, value: Scalar) 
    static new(dataType: SparseUnionDataType, typeCode: number, value: Scalar): SparseUnionScalar
    _init(config?: SparseUnionScalar_ConstructProps): void
}

interface StringArray_ConstructProps extends BinaryArray_ConstructProps {
}

interface StringArray {

    // Own fields of Arrow-1.0.Arrow.StringArray

    parentInstance: BinaryArray

    // Owm methods of Arrow-1.0.Arrow.StringArray

    getString(i: number): string

    // Class property signals of Arrow-1.0.Arrow.StringArray

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

class StringArray extends BinaryArray {

    // Own properties of Arrow-1.0.Arrow.StringArray

    static name: string
    static $gtype: GObject.GType<StringArray>

    // Constructors of Arrow-1.0.Arrow.StringArray

    constructor(config?: StringArray_ConstructProps) 
    constructor(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): StringArray

    // Overloads of new

    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): BinaryArray
    _init(config?: StringArray_ConstructProps): void
}

interface StringArrayBuilder_ConstructProps extends BinaryArrayBuilder_ConstructProps {
}

interface StringArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.StringArrayBuilder

    parentInstance: BinaryArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.StringArrayBuilder

    append(value: string): boolean

    // Overloads of append

    append(value: Uint8Array): boolean
    append(...args: any[]): any
    append(args_or_value: any[] | Uint8Array): boolean | any
    appendString(value: string): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of strings.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendStrings(values: string[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.StringArrayBuilder

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

class StringArrayBuilder extends BinaryArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.StringArrayBuilder

    static name: string
    static $gtype: GObject.GType<StringArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.StringArrayBuilder

    constructor(config?: StringArrayBuilder_ConstructProps) 
    constructor() 
    static new(): StringArrayBuilder

    // Overloads of new

    static new(): BinaryArrayBuilder
    _init(config?: StringArrayBuilder_ConstructProps): void
}

interface StringDataType_ConstructProps extends DataType_ConstructProps {
}

interface StringDataType {

    // Own fields of Arrow-1.0.Arrow.StringDataType

    parentInstance: BinaryDataType

    // Class property signals of Arrow-1.0.Arrow.StringDataType

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

class StringDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.StringDataType

    static name: string
    static $gtype: GObject.GType<StringDataType>

    // Constructors of Arrow-1.0.Arrow.StringDataType

    constructor(config?: StringDataType_ConstructProps) 
    constructor() 
    static new(): StringDataType
    _init(config?: StringDataType_ConstructProps): void
}

interface StringDictionaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface StringDictionaryArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    appendArray(array: StringArray): boolean
    /**
     * Append dictionary indices directly without modifying the internal memo.
     * @param values The array of indices.
     * @param isValids The array of   %TRUE or %FALSE that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendIndices(values: number[], isValids: boolean[] | null): boolean
    appendString(value: string): boolean
    finishDelta(): [ /* returnType */ boolean, /* outIndices */ Array, /* outDelta */ Array ]
    getDictionaryLength(): number
    insertMemoValues(values: StringArray): boolean
    /**
     * Reset and also clear accumulated dictionary values in memo table.
     */
    resetFull(): void

    // Class property signals of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

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

class StringDictionaryArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    static name: string
    static $gtype: GObject.GType<StringDictionaryArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.StringDictionaryArrayBuilder

    constructor(config?: StringDictionaryArrayBuilder_ConstructProps) 
    constructor() 
    static new(): StringDictionaryArrayBuilder
    _init(config?: StringDictionaryArrayBuilder_ConstructProps): void
}

interface StringScalar_ConstructProps extends BaseBinaryScalar_ConstructProps {
}

interface StringScalar {

    // Own fields of Arrow-1.0.Arrow.StringScalar

    parentInstance: BaseBinaryScalar

    // Class property signals of Arrow-1.0.Arrow.StringScalar

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

class StringScalar extends BaseBinaryScalar {

    // Own properties of Arrow-1.0.Arrow.StringScalar

    static name: string
    static $gtype: GObject.GType<StringScalar>

    // Constructors of Arrow-1.0.Arrow.StringScalar

    constructor(config?: StringScalar_ConstructProps) 
    constructor(value: Buffer) 
    static new(value: Buffer): StringScalar
    _init(config?: StringScalar_ConstructProps): void
}

interface StructArray_ConstructProps extends Array_ConstructProps {
}

interface StructArray {

    // Own fields of Arrow-1.0.Arrow.StructArray

    parentInstance: Array

    // Owm methods of Arrow-1.0.Arrow.StructArray

    flatten(): Array[]
    getField(i: number): Array
    getFields(): Array[]

    // Class property signals of Arrow-1.0.Arrow.StructArray

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

class StructArray extends Array {

    // Own properties of Arrow-1.0.Arrow.StructArray

    static name: string
    static $gtype: GObject.GType<StructArray>

    // Constructors of Arrow-1.0.Arrow.StructArray

    constructor(config?: StructArray_ConstructProps) 
    constructor(dataType: DataType, length: number, fields: Array[], nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: DataType, length: number, fields: Array[], nullBitmap: Buffer | null, nNulls: number): StructArray
    _init(config?: StructArray_ConstructProps): void
}

interface StructArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface StructArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.StructArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.StructArrayBuilder

    append(): boolean
    appendValue(): boolean
    getFieldBuilder(i: number): ArrayBuilder
    getFieldBuilders(): Array[]

    // Class property signals of Arrow-1.0.Arrow.StructArrayBuilder

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

class StructArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.StructArrayBuilder

    static name: string
    static $gtype: GObject.GType<StructArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.StructArrayBuilder

    constructor(config?: StructArrayBuilder_ConstructProps) 
    constructor(dataType: StructDataType) 
    static new(dataType: StructDataType): StructArrayBuilder
    _init(config?: StructArrayBuilder_ConstructProps): void
}

interface StructDataType_ConstructProps extends DataType_ConstructProps {
}

interface StructDataType {

    // Own fields of Arrow-1.0.Arrow.StructDataType

    parentInstance: DataType

    // Owm methods of Arrow-1.0.Arrow.StructDataType

    getField(i: number): Field | null
    getFieldByName(name: string): Field | null
    getFieldIndex(name: string): number
    getFields(): Field[]
    getNFields(): number

    // Class property signals of Arrow-1.0.Arrow.StructDataType

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

class StructDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.StructDataType

    static name: string
    static $gtype: GObject.GType<StructDataType>

    // Constructors of Arrow-1.0.Arrow.StructDataType

    constructor(config?: StructDataType_ConstructProps) 
    constructor(fields: Field[]) 
    static new(fields: Field[]): StructDataType
    _init(config?: StructDataType_ConstructProps): void
}

interface StructScalar_ConstructProps extends Scalar_ConstructProps {
}

interface StructScalar {

    // Own fields of Arrow-1.0.Arrow.StructScalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.StructScalar

    getValue(): Scalar[]

    // Class property signals of Arrow-1.0.Arrow.StructScalar

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

class StructScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.StructScalar

    static name: string
    static $gtype: GObject.GType<StructScalar>

    // Constructors of Arrow-1.0.Arrow.StructScalar

    constructor(config?: StructScalar_ConstructProps) 
    constructor(dataType: StructDataType, value: Scalar[]) 
    static new(dataType: StructDataType, value: Scalar[]): StructScalar
    _init(config?: StructScalar_ConstructProps): void
}

interface SubTreeFileSystem_ConstructProps extends FileSystem_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.SubTreeFileSystem

    baseFileSystem?: FileSystem | null
}

interface SubTreeFileSystem {

    // Own properties of Arrow-1.0.Arrow.SubTreeFileSystem

    readonly baseFileSystem: FileSystem

    // Own fields of Arrow-1.0.Arrow.SubTreeFileSystem

    parentInstance: FileSystem

    // Class property signals of Arrow-1.0.Arrow.SubTreeFileSystem

    connect(sigName: "notify::base-file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-file-system", ...args: any[]): void
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

class SubTreeFileSystem extends FileSystem {

    // Own properties of Arrow-1.0.Arrow.SubTreeFileSystem

    static name: string
    static $gtype: GObject.GType<SubTreeFileSystem>

    // Constructors of Arrow-1.0.Arrow.SubTreeFileSystem

    constructor(config?: SubTreeFileSystem_ConstructProps) 
    constructor(basePath: string, baseFileSystem: FileSystem) 
    static new(basePath: string, baseFileSystem: FileSystem): SubTreeFileSystem
    _init(config?: SubTreeFileSystem_ConstructProps): void
}

interface Table_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Table

    table?: object | null
}

interface Table {

    // Own properties of Arrow-1.0.Arrow.Table

    readonly table: object

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
     */
    writeAsFeather(sink: OutputStream, properties: FeatherWriteProperties | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Table

    connect(sigName: "notify::table", callback: (...args: any[]) => void): number
    on(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Table extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Table

    static name: string
    static $gtype: GObject.GType<Table>

    // Constructors of Arrow-1.0.Arrow.Table

    constructor(config?: Table_ConstructProps) 
    static newArrays(schema: Schema, arrays: Array[]): Table
    static newChunkedArrays(schema: Schema, chunkedArrays: ChunkedArray[]): Table
    static newRecordBatches(schema: Schema, recordBatches: RecordBatch[]): Table
    _init(config?: Table_ConstructProps): void
}

interface TableBatchReader_ConstructProps extends RecordBatchReader_ConstructProps {
}

interface TableBatchReader {

    // Own fields of Arrow-1.0.Arrow.TableBatchReader

    parentInstance: RecordBatchReader

    // Class property signals of Arrow-1.0.Arrow.TableBatchReader

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

class TableBatchReader extends RecordBatchReader {

    // Own properties of Arrow-1.0.Arrow.TableBatchReader

    static name: string
    static $gtype: GObject.GType<TableBatchReader>

    // Constructors of Arrow-1.0.Arrow.TableBatchReader

    constructor(config?: TableBatchReader_ConstructProps) 
    constructor(table: Table) 
    static new(table: Table): TableBatchReader

    // Overloads of new

    static new(recordBatches: RecordBatch[], schema: Schema | null): RecordBatchReader
    _init(config?: TableBatchReader_ConstructProps): void
}

interface TableConcatenateOptions_ConstructProps extends GObject.Object_ConstructProps {

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

interface TableConcatenateOptions {

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TableConcatenateOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.TableConcatenateOptions

    static name: string
    static $gtype: GObject.GType<TableConcatenateOptions>

    // Constructors of Arrow-1.0.Arrow.TableConcatenateOptions

    constructor(config?: TableConcatenateOptions_ConstructProps) 
    constructor() 
    static new(): TableConcatenateOptions
    _init(config?: TableConcatenateOptions_ConstructProps): void
}

interface TableDatum_ConstructProps extends Datum_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.TableDatum

    value?: Table | null
}

interface TableDatum {

    // Own properties of Arrow-1.0.Arrow.TableDatum

    readonly value: Table

    // Own fields of Arrow-1.0.Arrow.TableDatum

    parentInstance: Datum

    // Class property signals of Arrow-1.0.Arrow.TableDatum

    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
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

class TableDatum extends Datum {

    // Own properties of Arrow-1.0.Arrow.TableDatum

    static name: string
    static $gtype: GObject.GType<TableDatum>

    // Constructors of Arrow-1.0.Arrow.TableDatum

    constructor(config?: TableDatum_ConstructProps) 
    constructor(value: Table) 
    static new(value: Table): TableDatum
    _init(config?: TableDatum_ConstructProps): void
}

interface TakeOptions_ConstructProps extends FunctionOptions_ConstructProps {
}

interface TakeOptions {

    // Own fields of Arrow-1.0.Arrow.TakeOptions

    parentInstance: FunctionOptions

    // Class property signals of Arrow-1.0.Arrow.TakeOptions

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TakeOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.TakeOptions

    static name: string
    static $gtype: GObject.GType<TakeOptions>

    // Constructors of Arrow-1.0.Arrow.TakeOptions

    constructor(config?: TakeOptions_ConstructProps) 
    constructor() 
    static new(): TakeOptions
    _init(config?: TakeOptions_ConstructProps): void
}

interface TemporalDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}

interface TemporalDataType {

    // Own fields of Arrow-1.0.Arrow.TemporalDataType

    parentInstance: FixedWidthDataType

    // Class property signals of Arrow-1.0.Arrow.TemporalDataType

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

class TemporalDataType extends FixedWidthDataType {

    // Own properties of Arrow-1.0.Arrow.TemporalDataType

    static name: string
    static $gtype: GObject.GType<TemporalDataType>

    // Constructors of Arrow-1.0.Arrow.TemporalDataType

    constructor(config?: TemporalDataType_ConstructProps) 
    _init(config?: TemporalDataType_ConstructProps): void
}

interface Tensor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.Tensor

    buffer?: Buffer | null
    tensor?: object | null
}

interface Tensor {

    // Own properties of Arrow-1.0.Arrow.Tensor

    readonly buffer: Buffer
    readonly tensor: object

    // Own fields of Arrow-1.0.Arrow.Tensor

    parentInstance: GObject.Object

    // Owm methods of Arrow-1.0.Arrow.Tensor

    equal(otherTensor: Tensor): boolean
    getBuffer(): Buffer
    getDimensionName(i: number): string
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Tensor extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.Tensor

    static name: string
    static $gtype: GObject.GType<Tensor>

    // Constructors of Arrow-1.0.Arrow.Tensor

    constructor(config?: Tensor_ConstructProps) 
    constructor(dataType: DataType, data: Buffer, shape: number[], strides: number[] | null, dimensionNames: string[] | null) 
    static new(dataType: DataType, data: Buffer, shape: number[], strides: number[] | null, dimensionNames: string[] | null): Tensor
    _init(config?: Tensor_ConstructProps): void
}

interface Time32Array_ConstructProps extends NumericArray_ConstructProps {
}

interface Time32Array {

    // Own fields of Arrow-1.0.Arrow.Time32Array

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.Time32Array

    getValue(i: number): number
    getValues(): number[]

    // Class property signals of Arrow-1.0.Arrow.Time32Array

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

class Time32Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Time32Array

    static name: string
    static $gtype: GObject.GType<Time32Array>

    // Constructors of Arrow-1.0.Arrow.Time32Array

    constructor(config?: Time32Array_ConstructProps) 
    constructor(dataType: Time32DataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: Time32DataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Time32Array
    _init(config?: Time32Array_ConstructProps): void
}

interface Time32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface Time32ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Time32ArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.Time32ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of days since UNIX epoch in signed 32bit integer.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Time32ArrayBuilder

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

class Time32ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Time32ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Time32ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Time32ArrayBuilder

    constructor(config?: Time32ArrayBuilder_ConstructProps) 
    constructor(dataType: Time32DataType) 
    static new(dataType: Time32DataType): Time32ArrayBuilder
    _init(config?: Time32ArrayBuilder_ConstructProps): void
}

interface Time32DataType_ConstructProps extends TimeDataType_ConstructProps {
}

interface Time32DataType {

    // Own fields of Arrow-1.0.Arrow.Time32DataType

    parentInstance: TimeDataType

    // Class property signals of Arrow-1.0.Arrow.Time32DataType

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

class Time32DataType extends TimeDataType {

    // Own properties of Arrow-1.0.Arrow.Time32DataType

    static name: string
    static $gtype: GObject.GType<Time32DataType>

    // Constructors of Arrow-1.0.Arrow.Time32DataType

    constructor(config?: Time32DataType_ConstructProps) 
    constructor(unit: TimeUnit) 
    static new(unit: TimeUnit): Time32DataType
    _init(config?: Time32DataType_ConstructProps): void
}

interface Time32Scalar_ConstructProps extends Scalar_ConstructProps {
}

interface Time32Scalar {

    // Own fields of Arrow-1.0.Arrow.Time32Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.Time32Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Time32Scalar

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

class Time32Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Time32Scalar

    static name: string
    static $gtype: GObject.GType<Time32Scalar>

    // Constructors of Arrow-1.0.Arrow.Time32Scalar

    constructor(config?: Time32Scalar_ConstructProps) 
    constructor(dataType: Time32DataType, value: number) 
    static new(dataType: Time32DataType, value: number): Time32Scalar
    _init(config?: Time32Scalar_ConstructProps): void
}

interface Time64Array_ConstructProps extends NumericArray_ConstructProps {
}

interface Time64Array {

    // Own fields of Arrow-1.0.Arrow.Time64Array

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.Time64Array

    getValue(i: number): number
    getValues(): number[]

    // Class property signals of Arrow-1.0.Arrow.Time64Array

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

class Time64Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.Time64Array

    static name: string
    static $gtype: GObject.GType<Time64Array>

    // Constructors of Arrow-1.0.Arrow.Time64Array

    constructor(config?: Time64Array_ConstructProps) 
    constructor(dataType: Time64DataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: Time64DataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Time64Array
    _init(config?: Time64Array_ConstructProps): void
}

interface Time64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface Time64ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.Time64ArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.Time64ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of milliseconds since UNIX epoch in signed 64bit integer.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.Time64ArrayBuilder

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

class Time64ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.Time64ArrayBuilder

    static name: string
    static $gtype: GObject.GType<Time64ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.Time64ArrayBuilder

    constructor(config?: Time64ArrayBuilder_ConstructProps) 
    constructor(dataType: Time64DataType) 
    static new(dataType: Time64DataType): Time64ArrayBuilder
    _init(config?: Time64ArrayBuilder_ConstructProps): void
}

interface Time64DataType_ConstructProps extends TimeDataType_ConstructProps {
}

interface Time64DataType {

    // Own fields of Arrow-1.0.Arrow.Time64DataType

    parentInstance: TimeDataType

    // Class property signals of Arrow-1.0.Arrow.Time64DataType

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

class Time64DataType extends TimeDataType {

    // Own properties of Arrow-1.0.Arrow.Time64DataType

    static name: string
    static $gtype: GObject.GType<Time64DataType>

    // Constructors of Arrow-1.0.Arrow.Time64DataType

    constructor(config?: Time64DataType_ConstructProps) 
    constructor(unit: TimeUnit) 
    static new(unit: TimeUnit): Time64DataType
    _init(config?: Time64DataType_ConstructProps): void
}

interface Time64Scalar_ConstructProps extends Scalar_ConstructProps {
}

interface Time64Scalar {

    // Own fields of Arrow-1.0.Arrow.Time64Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.Time64Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.Time64Scalar

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

class Time64Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.Time64Scalar

    static name: string
    static $gtype: GObject.GType<Time64Scalar>

    // Constructors of Arrow-1.0.Arrow.Time64Scalar

    constructor(config?: Time64Scalar_ConstructProps) 
    constructor(dataType: Time64DataType, value: number) 
    static new(dataType: Time64DataType, value: number): Time64Scalar
    _init(config?: Time64Scalar_ConstructProps): void
}

interface TimeDataType_ConstructProps extends TemporalDataType_ConstructProps {
}

interface TimeDataType {

    // Own fields of Arrow-1.0.Arrow.TimeDataType

    parentInstance: TemporalDataType

    // Owm methods of Arrow-1.0.Arrow.TimeDataType

    getUnit(): TimeUnit

    // Class property signals of Arrow-1.0.Arrow.TimeDataType

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

class TimeDataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.TimeDataType

    static name: string
    static $gtype: GObject.GType<TimeDataType>

    // Constructors of Arrow-1.0.Arrow.TimeDataType

    constructor(config?: TimeDataType_ConstructProps) 
    _init(config?: TimeDataType_ConstructProps): void
}

interface TimestampArray_ConstructProps extends NumericArray_ConstructProps {
}

interface TimestampArray {

    // Own fields of Arrow-1.0.Arrow.TimestampArray

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.TimestampArray

    getValue(i: number): number
    getValues(): number[]

    // Class property signals of Arrow-1.0.Arrow.TimestampArray

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

class TimestampArray extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.TimestampArray

    static name: string
    static $gtype: GObject.GType<TimestampArray>

    // Constructors of Arrow-1.0.Arrow.TimestampArray

    constructor(config?: TimestampArray_ConstructProps) 
    constructor(dataType: TimestampDataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(dataType: TimestampDataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): TimestampArray
    _init(config?: TimestampArray_ConstructProps): void
}

interface TimestampArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface TimestampArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.TimestampArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.TimestampArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of   the number of milliseconds since UNIX epoch in signed 64bit integer.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.TimestampArrayBuilder

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

class TimestampArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.TimestampArrayBuilder

    static name: string
    static $gtype: GObject.GType<TimestampArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.TimestampArrayBuilder

    constructor(config?: TimestampArrayBuilder_ConstructProps) 
    constructor(dataType: TimestampDataType) 
    static new(dataType: TimestampDataType): TimestampArrayBuilder
    _init(config?: TimestampArrayBuilder_ConstructProps): void
}

interface TimestampDataType_ConstructProps extends TemporalDataType_ConstructProps {
}

interface TimestampDataType {

    // Own fields of Arrow-1.0.Arrow.TimestampDataType

    parentInstance: TemporalDataType

    // Owm methods of Arrow-1.0.Arrow.TimestampDataType

    getUnit(): TimeUnit

    // Class property signals of Arrow-1.0.Arrow.TimestampDataType

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

class TimestampDataType extends TemporalDataType {

    // Own properties of Arrow-1.0.Arrow.TimestampDataType

    static name: string
    static $gtype: GObject.GType<TimestampDataType>

    // Constructors of Arrow-1.0.Arrow.TimestampDataType

    constructor(config?: TimestampDataType_ConstructProps) 
    constructor(unit: TimeUnit) 
    static new(unit: TimeUnit): TimestampDataType
    _init(config?: TimestampDataType_ConstructProps): void
}

interface TimestampScalar_ConstructProps extends Scalar_ConstructProps {
}

interface TimestampScalar {

    // Own fields of Arrow-1.0.Arrow.TimestampScalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.TimestampScalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.TimestampScalar

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

class TimestampScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.TimestampScalar

    static name: string
    static $gtype: GObject.GType<TimestampScalar>

    // Constructors of Arrow-1.0.Arrow.TimestampScalar

    constructor(config?: TimestampScalar_ConstructProps) 
    constructor(dataType: TimestampDataType, value: number) 
    static new(dataType: TimestampDataType, value: number): TimestampScalar
    _init(config?: TimestampScalar_ConstructProps): void
}

interface UInt16Array_ConstructProps extends NumericArray_ConstructProps {
}

interface UInt16Array {

    // Own fields of Arrow-1.0.Arrow.UInt16Array

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.UInt16Array

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.UInt16Array

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

class UInt16Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.UInt16Array

    static name: string
    static $gtype: GObject.GType<UInt16Array>

    // Constructors of Arrow-1.0.Arrow.UInt16Array

    constructor(config?: UInt16Array_ConstructProps) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt16Array
    _init(config?: UInt16Array_ConstructProps): void
}

interface UInt16ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface UInt16ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.UInt16ArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.UInt16ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of uint16.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UInt16ArrayBuilder

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

class UInt16ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt16ArrayBuilder

    static name: string
    static $gtype: GObject.GType<UInt16ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.UInt16ArrayBuilder

    constructor(config?: UInt16ArrayBuilder_ConstructProps) 
    constructor() 
    static new(): UInt16ArrayBuilder
    _init(config?: UInt16ArrayBuilder_ConstructProps): void
}

interface UInt16DataType_ConstructProps extends IntegerDataType_ConstructProps {
}

interface UInt16DataType {

    // Own fields of Arrow-1.0.Arrow.UInt16DataType

    parentInstance: IntegerDataType

    // Class property signals of Arrow-1.0.Arrow.UInt16DataType

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

class UInt16DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.UInt16DataType

    static name: string
    static $gtype: GObject.GType<UInt16DataType>

    // Constructors of Arrow-1.0.Arrow.UInt16DataType

    constructor(config?: UInt16DataType_ConstructProps) 
    constructor() 
    static new(): UInt16DataType
    _init(config?: UInt16DataType_ConstructProps): void
}

interface UInt16Scalar_ConstructProps extends Scalar_ConstructProps {
}

interface UInt16Scalar {

    // Own fields of Arrow-1.0.Arrow.UInt16Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.UInt16Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.UInt16Scalar

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

class UInt16Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt16Scalar

    static name: string
    static $gtype: GObject.GType<UInt16Scalar>

    // Constructors of Arrow-1.0.Arrow.UInt16Scalar

    constructor(config?: UInt16Scalar_ConstructProps) 
    constructor(value: number) 
    static new(value: number): UInt16Scalar
    _init(config?: UInt16Scalar_ConstructProps): void
}

interface UInt32Array_ConstructProps extends NumericArray_ConstructProps {
}

interface UInt32Array {

    // Own fields of Arrow-1.0.Arrow.UInt32Array

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.UInt32Array

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.UInt32Array

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

class UInt32Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.UInt32Array

    static name: string
    static $gtype: GObject.GType<UInt32Array>

    // Constructors of Arrow-1.0.Arrow.UInt32Array

    constructor(config?: UInt32Array_ConstructProps) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt32Array
    _init(config?: UInt32Array_ConstructProps): void
}

interface UInt32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface UInt32ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.UInt32ArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.UInt32ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of uint32.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UInt32ArrayBuilder

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

class UInt32ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt32ArrayBuilder

    static name: string
    static $gtype: GObject.GType<UInt32ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.UInt32ArrayBuilder

    constructor(config?: UInt32ArrayBuilder_ConstructProps) 
    constructor() 
    static new(): UInt32ArrayBuilder
    _init(config?: UInt32ArrayBuilder_ConstructProps): void
}

interface UInt32DataType_ConstructProps extends IntegerDataType_ConstructProps {
}

interface UInt32DataType {

    // Own fields of Arrow-1.0.Arrow.UInt32DataType

    parentInstance: IntegerDataType

    // Class property signals of Arrow-1.0.Arrow.UInt32DataType

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

class UInt32DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.UInt32DataType

    static name: string
    static $gtype: GObject.GType<UInt32DataType>

    // Constructors of Arrow-1.0.Arrow.UInt32DataType

    constructor(config?: UInt32DataType_ConstructProps) 
    constructor() 
    static new(): UInt32DataType
    _init(config?: UInt32DataType_ConstructProps): void
}

interface UInt32Scalar_ConstructProps extends Scalar_ConstructProps {
}

interface UInt32Scalar {

    // Own fields of Arrow-1.0.Arrow.UInt32Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.UInt32Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.UInt32Scalar

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

class UInt32Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt32Scalar

    static name: string
    static $gtype: GObject.GType<UInt32Scalar>

    // Constructors of Arrow-1.0.Arrow.UInt32Scalar

    constructor(config?: UInt32Scalar_ConstructProps) 
    constructor(value: number) 
    static new(value: number): UInt32Scalar
    _init(config?: UInt32Scalar_ConstructProps): void
}

interface UInt64Array_ConstructProps extends NumericArray_ConstructProps {
}

interface UInt64Array {

    // Own fields of Arrow-1.0.Arrow.UInt64Array

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.UInt64Array

    getValue(i: number): number
    getValues(): number[]
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.UInt64Array

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

class UInt64Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.UInt64Array

    static name: string
    static $gtype: GObject.GType<UInt64Array>

    // Constructors of Arrow-1.0.Arrow.UInt64Array

    constructor(config?: UInt64Array_ConstructProps) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt64Array
    _init(config?: UInt64Array_ConstructProps): void
}

interface UInt64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface UInt64ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.UInt64ArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.UInt64ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of uint64.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UInt64ArrayBuilder

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

class UInt64ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt64ArrayBuilder

    static name: string
    static $gtype: GObject.GType<UInt64ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.UInt64ArrayBuilder

    constructor(config?: UInt64ArrayBuilder_ConstructProps) 
    constructor() 
    static new(): UInt64ArrayBuilder
    _init(config?: UInt64ArrayBuilder_ConstructProps): void
}

interface UInt64DataType_ConstructProps extends IntegerDataType_ConstructProps {
}

interface UInt64DataType {

    // Own fields of Arrow-1.0.Arrow.UInt64DataType

    parentInstance: IntegerDataType

    // Class property signals of Arrow-1.0.Arrow.UInt64DataType

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

class UInt64DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.UInt64DataType

    static name: string
    static $gtype: GObject.GType<UInt64DataType>

    // Constructors of Arrow-1.0.Arrow.UInt64DataType

    constructor(config?: UInt64DataType_ConstructProps) 
    constructor() 
    static new(): UInt64DataType
    _init(config?: UInt64DataType_ConstructProps): void
}

interface UInt64Scalar_ConstructProps extends Scalar_ConstructProps {
}

interface UInt64Scalar {

    // Own fields of Arrow-1.0.Arrow.UInt64Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.UInt64Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.UInt64Scalar

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

class UInt64Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt64Scalar

    static name: string
    static $gtype: GObject.GType<UInt64Scalar>

    // Constructors of Arrow-1.0.Arrow.UInt64Scalar

    constructor(config?: UInt64Scalar_ConstructProps) 
    constructor(value: number) 
    static new(value: number): UInt64Scalar
    _init(config?: UInt64Scalar_ConstructProps): void
}

interface UInt8Array_ConstructProps extends NumericArray_ConstructProps {
}

interface UInt8Array {

    // Own fields of Arrow-1.0.Arrow.UInt8Array

    parentInstance: NumericArray

    // Owm methods of Arrow-1.0.Arrow.UInt8Array

    getValue(i: number): number
    getValues(): Uint8Array
    sum(): number

    // Class property signals of Arrow-1.0.Arrow.UInt8Array

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

class UInt8Array extends NumericArray {

    // Own properties of Arrow-1.0.Arrow.UInt8Array

    static name: string
    static $gtype: GObject.GType<UInt8Array>

    // Constructors of Arrow-1.0.Arrow.UInt8Array

    constructor(config?: UInt8Array_ConstructProps) 
    constructor(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number) 
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt8Array
    _init(config?: UInt8Array_ConstructProps): void
}

interface UInt8ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface UInt8ArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.UInt8ArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.UInt8ArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of uint8.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: Uint8Array, isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UInt8ArrayBuilder

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

class UInt8ArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UInt8ArrayBuilder

    static name: string
    static $gtype: GObject.GType<UInt8ArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.UInt8ArrayBuilder

    constructor(config?: UInt8ArrayBuilder_ConstructProps) 
    constructor() 
    static new(): UInt8ArrayBuilder
    _init(config?: UInt8ArrayBuilder_ConstructProps): void
}

interface UInt8DataType_ConstructProps extends IntegerDataType_ConstructProps {
}

interface UInt8DataType {

    // Own fields of Arrow-1.0.Arrow.UInt8DataType

    parentInstance: IntegerDataType

    // Class property signals of Arrow-1.0.Arrow.UInt8DataType

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

class UInt8DataType extends IntegerDataType {

    // Own properties of Arrow-1.0.Arrow.UInt8DataType

    static name: string
    static $gtype: GObject.GType<UInt8DataType>

    // Constructors of Arrow-1.0.Arrow.UInt8DataType

    constructor(config?: UInt8DataType_ConstructProps) 
    constructor() 
    static new(): UInt8DataType
    _init(config?: UInt8DataType_ConstructProps): void
}

interface UInt8Scalar_ConstructProps extends Scalar_ConstructProps {
}

interface UInt8Scalar {

    // Own fields of Arrow-1.0.Arrow.UInt8Scalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.UInt8Scalar

    getValue(): number

    // Class property signals of Arrow-1.0.Arrow.UInt8Scalar

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

class UInt8Scalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UInt8Scalar

    static name: string
    static $gtype: GObject.GType<UInt8Scalar>

    // Constructors of Arrow-1.0.Arrow.UInt8Scalar

    constructor(config?: UInt8Scalar_ConstructProps) 
    constructor(value: number) 
    static new(value: number): UInt8Scalar
    _init(config?: UInt8Scalar_ConstructProps): void
}

interface UIntArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}

interface UIntArrayBuilder {

    // Own fields of Arrow-1.0.Arrow.UIntArrayBuilder

    parentInstance: ArrayBuilder

    // Owm methods of Arrow-1.0.Arrow.UIntArrayBuilder

    append(value: number): boolean
    appendValue(value: number): boolean
    /**
     * Append multiple values at once. It's more efficient than multiple
     * `append` and `append_null` calls.
     * @param values The array of unsigned int.
     * @param isValids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
     */
    appendValues(values: number[], isValids: boolean[] | null): boolean

    // Class property signals of Arrow-1.0.Arrow.UIntArrayBuilder

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

class UIntArrayBuilder extends ArrayBuilder {

    // Own properties of Arrow-1.0.Arrow.UIntArrayBuilder

    static name: string
    static $gtype: GObject.GType<UIntArrayBuilder>

    // Constructors of Arrow-1.0.Arrow.UIntArrayBuilder

    constructor(config?: UIntArrayBuilder_ConstructProps) 
    constructor() 
    static new(): UIntArrayBuilder
    _init(config?: UIntArrayBuilder_ConstructProps): void
}

interface UTF8NormalizeOptions_ConstructProps extends FunctionOptions_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.UTF8NormalizeOptions

    /**
     * The Unicode normalization form to apply.
     */
    form?: UTF8NormalizeForm | null
}

interface UTF8NormalizeOptions {

    // Own properties of Arrow-1.0.Arrow.UTF8NormalizeOptions

    /**
     * The Unicode normalization form to apply.
     */
    form: UTF8NormalizeForm

    // Own fields of Arrow-1.0.Arrow.UTF8NormalizeOptions

    parentInstance: FunctionOptions

    // Class property signals of Arrow-1.0.Arrow.UTF8NormalizeOptions

    connect(sigName: "notify::form", callback: (...args: any[]) => void): number
    on(sigName: "notify::form", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::form", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::form", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::form", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UTF8NormalizeOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.UTF8NormalizeOptions

    static name: string
    static $gtype: GObject.GType<UTF8NormalizeOptions>

    // Constructors of Arrow-1.0.Arrow.UTF8NormalizeOptions

    constructor(config?: UTF8NormalizeOptions_ConstructProps) 
    constructor() 
    static new(): UTF8NormalizeOptions
    _init(config?: UTF8NormalizeOptions_ConstructProps): void
}

interface UnionArray_ConstructProps extends Array_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.UnionArray

    typeIds?: Int8Array | null
}

interface UnionArray {

    // Own properties of Arrow-1.0.Arrow.UnionArray

    readonly typeIds: Int8Array

    // Own fields of Arrow-1.0.Arrow.UnionArray

    parentInstance: Array

    // Owm methods of Arrow-1.0.Arrow.UnionArray

    getField(i: number): Array | null

    // Class property signals of Arrow-1.0.Arrow.UnionArray

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

class UnionArray extends Array {

    // Own properties of Arrow-1.0.Arrow.UnionArray

    static name: string
    static $gtype: GObject.GType<UnionArray>

    // Constructors of Arrow-1.0.Arrow.UnionArray

    constructor(config?: UnionArray_ConstructProps) 
    _init(config?: UnionArray_ConstructProps): void
}

interface UnionDataType_ConstructProps extends DataType_ConstructProps {
}

interface UnionDataType {

    // Own fields of Arrow-1.0.Arrow.UnionDataType

    parentInstance: DataType

    // Owm methods of Arrow-1.0.Arrow.UnionDataType

    getField(i: number): Field | null
    getFields(): Field[]
    getNFields(): number
    getTypeCodes(): Uint8Array

    // Class property signals of Arrow-1.0.Arrow.UnionDataType

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

class UnionDataType extends DataType {

    // Own properties of Arrow-1.0.Arrow.UnionDataType

    static name: string
    static $gtype: GObject.GType<UnionDataType>

    // Constructors of Arrow-1.0.Arrow.UnionDataType

    constructor(config?: UnionDataType_ConstructProps) 
    _init(config?: UnionDataType_ConstructProps): void
}

interface UnionScalar_ConstructProps extends Scalar_ConstructProps {

    // Own constructor properties of Arrow-1.0.Arrow.UnionScalar

    /**
     * The value of the scalar.
     */
    value?: Scalar | null
}

interface UnionScalar {

    // Own properties of Arrow-1.0.Arrow.UnionScalar

    /**
     * The value of the scalar.
     */
    readonly value: Scalar

    // Own fields of Arrow-1.0.Arrow.UnionScalar

    parentInstance: Scalar

    // Owm methods of Arrow-1.0.Arrow.UnionScalar

    getTypeCode(): number
    getValue(): Scalar

    // Class property signals of Arrow-1.0.Arrow.UnionScalar

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

class UnionScalar extends Scalar {

    // Own properties of Arrow-1.0.Arrow.UnionScalar

    static name: string
    static $gtype: GObject.GType<UnionScalar>

    // Constructors of Arrow-1.0.Arrow.UnionScalar

    constructor(config?: UnionScalar_ConstructProps) 
    _init(config?: UnionScalar_ConstructProps): void
}

interface VarianceOptions_ConstructProps extends FunctionOptions_ConstructProps {

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

interface VarianceOptions {

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

    // Own fields of Arrow-1.0.Arrow.VarianceOptions

    parentInstance: FunctionOptions

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class VarianceOptions extends FunctionOptions {

    // Own properties of Arrow-1.0.Arrow.VarianceOptions

    static name: string
    static $gtype: GObject.GType<VarianceOptions>

    // Constructors of Arrow-1.0.Arrow.VarianceOptions

    constructor(config?: VarianceOptions_ConstructProps) 
    constructor() 
    static new(): VarianceOptions
    _init(config?: VarianceOptions_ConstructProps): void
}

interface WriteOptions_ConstructProps extends GObject.Object_ConstructProps {

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WriteOptions extends GObject.Object {

    // Own properties of Arrow-1.0.Arrow.WriteOptions

    static name: string
    static $gtype: GObject.GType<WriteOptions>

    // Constructors of Arrow-1.0.Arrow.WriteOptions

    constructor(config?: WriteOptions_ConstructProps) 
    constructor() 
    static new(): WriteOptions
    _init(config?: WriteOptions_ConstructProps): void
}

interface AggregateNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.AggregateNodeOptionsClass

    parentClass: ExecuteNodeOptionsClass
}

abstract class AggregateNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.AggregateNodeOptionsClass

    static name: string
}

interface AggregationClass {

    // Own fields of Arrow-1.0.Arrow.AggregationClass

    parentClass: GObject.ObjectClass
}

abstract class AggregationClass {

    // Own properties of Arrow-1.0.Arrow.AggregationClass

    static name: string
}

interface ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.ArrayBuilderClass

    parentClass: GObject.ObjectClass
}

abstract class ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.ArrayBuilderClass

    static name: string
}

interface ArrayClass {

    // Own fields of Arrow-1.0.Arrow.ArrayClass

    parentClass: GObject.ObjectClass
}

abstract class ArrayClass {

    // Own properties of Arrow-1.0.Arrow.ArrayClass

    static name: string
}

interface ArrayDatumClass {

    // Own fields of Arrow-1.0.Arrow.ArrayDatumClass

    parentClass: DatumClass
}

abstract class ArrayDatumClass {

    // Own properties of Arrow-1.0.Arrow.ArrayDatumClass

    static name: string
}

interface ArraySortOptionsClass {

    // Own fields of Arrow-1.0.Arrow.ArraySortOptionsClass

    parentClass: FunctionOptionsClass
}

abstract class ArraySortOptionsClass {

    // Own properties of Arrow-1.0.Arrow.ArraySortOptionsClass

    static name: string
}

interface BaseBinaryScalarClass {

    // Own fields of Arrow-1.0.Arrow.BaseBinaryScalarClass

    parentClass: ScalarClass
}

abstract class BaseBinaryScalarClass {

    // Own properties of Arrow-1.0.Arrow.BaseBinaryScalarClass

    static name: string
}

interface BaseListScalarClass {

    // Own fields of Arrow-1.0.Arrow.BaseListScalarClass

    parentClass: ScalarClass
}

abstract class BaseListScalarClass {

    // Own properties of Arrow-1.0.Arrow.BaseListScalarClass

    static name: string
}

interface BinaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.BinaryArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class BinaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.BinaryArrayBuilderClass

    static name: string
}

interface BinaryArrayClass {

    // Own fields of Arrow-1.0.Arrow.BinaryArrayClass

    parentClass: ArrayClass
}

abstract class BinaryArrayClass {

    // Own properties of Arrow-1.0.Arrow.BinaryArrayClass

    static name: string
}

interface BinaryDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.BinaryDataTypeClass

    parentClass: DataTypeClass
}

abstract class BinaryDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.BinaryDataTypeClass

    static name: string
}

interface BinaryDictionaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class BinaryDictionaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilderClass

    static name: string
}

interface BinaryScalarClass {

    // Own fields of Arrow-1.0.Arrow.BinaryScalarClass

    parentClass: BaseBinaryScalarClass
}

abstract class BinaryScalarClass {

    // Own properties of Arrow-1.0.Arrow.BinaryScalarClass

    static name: string
}

interface BooleanArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.BooleanArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class BooleanArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.BooleanArrayBuilderClass

    static name: string
}

interface BooleanArrayClass {

    // Own fields of Arrow-1.0.Arrow.BooleanArrayClass

    parentClass: PrimitiveArrayClass
}

abstract class BooleanArrayClass {

    // Own properties of Arrow-1.0.Arrow.BooleanArrayClass

    static name: string
}

interface BooleanDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.BooleanDataTypeClass

    parentClass: FixedWidthDataTypeClass
}

abstract class BooleanDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.BooleanDataTypeClass

    static name: string
}

interface BooleanScalarClass {

    // Own fields of Arrow-1.0.Arrow.BooleanScalarClass

    parentClass: ScalarClass
}

abstract class BooleanScalarClass {

    // Own properties of Arrow-1.0.Arrow.BooleanScalarClass

    static name: string
}

interface BufferClass {

    // Own fields of Arrow-1.0.Arrow.BufferClass

    parentClass: GObject.ObjectClass
}

abstract class BufferClass {

    // Own properties of Arrow-1.0.Arrow.BufferClass

    static name: string
}

interface BufferInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.BufferInputStreamClass

    parentClass: SeekableInputStreamClass
}

abstract class BufferInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.BufferInputStreamClass

    static name: string
}

interface BufferOutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.BufferOutputStreamClass

    parentClass: OutputStreamClass
}

abstract class BufferOutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.BufferOutputStreamClass

    static name: string
}

interface CSVReadOptionsClass {

    // Own fields of Arrow-1.0.Arrow.CSVReadOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class CSVReadOptionsClass {

    // Own properties of Arrow-1.0.Arrow.CSVReadOptionsClass

    static name: string
}

interface CSVReaderClass {

    // Own fields of Arrow-1.0.Arrow.CSVReaderClass

    parentClass: GObject.ObjectClass
}

abstract class CSVReaderClass {

    // Own properties of Arrow-1.0.Arrow.CSVReaderClass

    static name: string
}

interface CallExpressionClass {

    // Own fields of Arrow-1.0.Arrow.CallExpressionClass

    parentClass: ExpressionClass
}

abstract class CallExpressionClass {

    // Own properties of Arrow-1.0.Arrow.CallExpressionClass

    static name: string
}

interface CastOptionsClass {

    // Own fields of Arrow-1.0.Arrow.CastOptionsClass

    parentClass: FunctionOptionsClass
}

abstract class CastOptionsClass {

    // Own properties of Arrow-1.0.Arrow.CastOptionsClass

    static name: string
}

interface ChunkedArrayClass {

    // Own fields of Arrow-1.0.Arrow.ChunkedArrayClass

    parentClass: GObject.ObjectClass
}

abstract class ChunkedArrayClass {

    // Own properties of Arrow-1.0.Arrow.ChunkedArrayClass

    static name: string
}

interface ChunkedArrayDatumClass {

    // Own fields of Arrow-1.0.Arrow.ChunkedArrayDatumClass

    parentClass: DatumClass
}

abstract class ChunkedArrayDatumClass {

    // Own properties of Arrow-1.0.Arrow.ChunkedArrayDatumClass

    static name: string
}

interface CodecClass {

    // Own fields of Arrow-1.0.Arrow.CodecClass

    parentClass: GObject.ObjectClass
}

abstract class CodecClass {

    // Own properties of Arrow-1.0.Arrow.CodecClass

    static name: string
}

interface CompressedInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.CompressedInputStreamClass

    parentClass: InputStreamClass
}

abstract class CompressedInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.CompressedInputStreamClass

    static name: string
}

interface CompressedOutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.CompressedOutputStreamClass

    parentClass: OutputStreamClass
}

abstract class CompressedOutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.CompressedOutputStreamClass

    static name: string
}

interface CountOptionsClass {

    // Own fields of Arrow-1.0.Arrow.CountOptionsClass

    parentClass: FunctionOptionsClass
}

abstract class CountOptionsClass {

    // Own properties of Arrow-1.0.Arrow.CountOptionsClass

    static name: string
}

interface DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DataTypeClass

    parentClass: GObject.ObjectClass
}

abstract class DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DataTypeClass

    static name: string
}

interface Date32ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Date32ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class Date32ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Date32ArrayBuilderClass

    static name: string
}

interface Date32ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Date32ArrayClass

    parentClass: NumericArrayClass
}

abstract class Date32ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Date32ArrayClass

    static name: string
}

interface Date32DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Date32DataTypeClass

    parentClass: TemporalDataTypeClass
}

abstract class Date32DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Date32DataTypeClass

    static name: string
}

interface Date32ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Date32ScalarClass

    parentClass: ScalarClass
}

abstract class Date32ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Date32ScalarClass

    static name: string
}

interface Date64ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Date64ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class Date64ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Date64ArrayBuilderClass

    static name: string
}

interface Date64ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Date64ArrayClass

    parentClass: NumericArrayClass
}

abstract class Date64ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Date64ArrayClass

    static name: string
}

interface Date64DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Date64DataTypeClass

    parentClass: TemporalDataTypeClass
}

abstract class Date64DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Date64DataTypeClass

    static name: string
}

interface Date64ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Date64ScalarClass

    parentClass: ScalarClass
}

abstract class Date64ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Date64ScalarClass

    static name: string
}

interface DatumClass {

    // Own fields of Arrow-1.0.Arrow.DatumClass

    parentClass: GObject.ObjectClass
}

abstract class DatumClass {

    // Own properties of Arrow-1.0.Arrow.DatumClass

    static name: string
}

interface DayTimeIntervalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DayTimeIntervalDataTypeClass

    parentClass: IntervalDataTypeClass
}

abstract class DayTimeIntervalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DayTimeIntervalDataTypeClass

    static name: string
}

interface Decimal128ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Decimal128ArrayBuilderClass

    parentClass: FixedSizeBinaryArrayBuilderClass
}

abstract class Decimal128ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Decimal128ArrayBuilderClass

    static name: string
}

interface Decimal128ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Decimal128ArrayClass

    parentClass: FixedSizeBinaryArrayClass
}

abstract class Decimal128ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Decimal128ArrayClass

    static name: string
}

interface Decimal128Class {

    // Own fields of Arrow-1.0.Arrow.Decimal128Class

    parentClass: GObject.ObjectClass
}

abstract class Decimal128Class {

    // Own properties of Arrow-1.0.Arrow.Decimal128Class

    static name: string
}

interface Decimal128DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Decimal128DataTypeClass

    parentClass: DecimalDataTypeClass
}

abstract class Decimal128DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Decimal128DataTypeClass

    static name: string
}

interface Decimal128ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Decimal128ScalarClass

    parentClass: ScalarClass
}

abstract class Decimal128ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Decimal128ScalarClass

    static name: string
}

interface Decimal256ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Decimal256ArrayBuilderClass

    parentClass: FixedSizeBinaryArrayBuilderClass
}

abstract class Decimal256ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Decimal256ArrayBuilderClass

    static name: string
}

interface Decimal256ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Decimal256ArrayClass

    parentClass: FixedSizeBinaryArrayClass
}

abstract class Decimal256ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Decimal256ArrayClass

    static name: string
}

interface Decimal256Class {

    // Own fields of Arrow-1.0.Arrow.Decimal256Class

    parentClass: GObject.ObjectClass
}

abstract class Decimal256Class {

    // Own properties of Arrow-1.0.Arrow.Decimal256Class

    static name: string
}

interface Decimal256DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Decimal256DataTypeClass

    parentClass: DecimalDataTypeClass
}

abstract class Decimal256DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Decimal256DataTypeClass

    static name: string
}

interface Decimal256ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Decimal256ScalarClass

    parentClass: ScalarClass
}

abstract class Decimal256ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Decimal256ScalarClass

    static name: string
}

interface DecimalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DecimalDataTypeClass

    parentClass: FixedSizeBinaryDataTypeClass
}

abstract class DecimalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DecimalDataTypeClass

    static name: string
}

interface DenseUnionArrayClass {

    // Own fields of Arrow-1.0.Arrow.DenseUnionArrayClass

    parentClass: UnionArrayClass
}

abstract class DenseUnionArrayClass {

    // Own properties of Arrow-1.0.Arrow.DenseUnionArrayClass

    static name: string
}

interface DenseUnionDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DenseUnionDataTypeClass

    parentClass: UnionDataTypeClass
}

abstract class DenseUnionDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DenseUnionDataTypeClass

    static name: string
}

interface DenseUnionScalarClass {

    // Own fields of Arrow-1.0.Arrow.DenseUnionScalarClass

    parentClass: UnionScalarClass
}

abstract class DenseUnionScalarClass {

    // Own properties of Arrow-1.0.Arrow.DenseUnionScalarClass

    static name: string
}

interface DictionaryArrayClass {

    // Own fields of Arrow-1.0.Arrow.DictionaryArrayClass

    parentClass: ArrayClass
}

abstract class DictionaryArrayClass {

    // Own properties of Arrow-1.0.Arrow.DictionaryArrayClass

    static name: string
}

interface DictionaryDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DictionaryDataTypeClass

    parentClass: FixedWidthDataTypeClass
}

abstract class DictionaryDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DictionaryDataTypeClass

    static name: string
}

interface DoubleArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.DoubleArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class DoubleArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.DoubleArrayBuilderClass

    static name: string
}

interface DoubleArrayClass {

    // Own fields of Arrow-1.0.Arrow.DoubleArrayClass

    parentClass: NumericArrayClass
}

abstract class DoubleArrayClass {

    // Own properties of Arrow-1.0.Arrow.DoubleArrayClass

    static name: string
}

interface DoubleDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.DoubleDataTypeClass

    parentClass: FloatingPointDataTypeClass
}

abstract class DoubleDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.DoubleDataTypeClass

    static name: string
}

interface DoubleScalarClass {

    // Own fields of Arrow-1.0.Arrow.DoubleScalarClass

    parentClass: ScalarClass
}

abstract class DoubleScalarClass {

    // Own properties of Arrow-1.0.Arrow.DoubleScalarClass

    static name: string
}

interface EqualOptionsClass {

    // Own fields of Arrow-1.0.Arrow.EqualOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class EqualOptionsClass {

    // Own properties of Arrow-1.0.Arrow.EqualOptionsClass

    static name: string
}

interface ExecuteContextClass {

    // Own fields of Arrow-1.0.Arrow.ExecuteContextClass

    parentClass: GObject.ObjectClass
}

abstract class ExecuteContextClass {

    // Own properties of Arrow-1.0.Arrow.ExecuteContextClass

    static name: string
}

interface ExecuteNodeClass {

    // Own fields of Arrow-1.0.Arrow.ExecuteNodeClass

    parentClass: GObject.ObjectClass
}

abstract class ExecuteNodeClass {

    // Own properties of Arrow-1.0.Arrow.ExecuteNodeClass

    static name: string
}

interface ExecuteNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.ExecuteNodeOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class ExecuteNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.ExecuteNodeOptionsClass

    static name: string
}

interface ExecutePlanClass {

    // Own fields of Arrow-1.0.Arrow.ExecutePlanClass

    parentClass: GObject.ObjectClass
}

abstract class ExecutePlanClass {

    // Own properties of Arrow-1.0.Arrow.ExecutePlanClass

    static name: string
}

interface ExpressionClass {

    // Own fields of Arrow-1.0.Arrow.ExpressionClass

    parentClass: GObject.ObjectClass
}

abstract class ExpressionClass {

    // Own properties of Arrow-1.0.Arrow.ExpressionClass

    static name: string
}

interface ExtensionArrayClass {

    // Own fields of Arrow-1.0.Arrow.ExtensionArrayClass

    parentClass: ArrayClass
}

abstract class ExtensionArrayClass {

    // Own properties of Arrow-1.0.Arrow.ExtensionArrayClass

    static name: string
}

interface ExtensionDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.ExtensionDataTypeClass

    parentClass: DataTypeClass
    getExtensionName: (dataType: ExtensionDataType) => string
    equal: (dataType: ExtensionDataType, otherDataType: ExtensionDataType) => boolean
    serialize: (dataType: ExtensionDataType) => any
    getArrayGtype: (dataType: ExtensionDataType) => GObject.GType
}

abstract class ExtensionDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataTypeClass

    static name: string
}

interface ExtensionDataTypeRegistryClass {

    // Own fields of Arrow-1.0.Arrow.ExtensionDataTypeRegistryClass

    parentClass: GObject.ObjectClass
}

abstract class ExtensionDataTypeRegistryClass {

    // Own properties of Arrow-1.0.Arrow.ExtensionDataTypeRegistryClass

    static name: string
}

interface ExtensionScalarClass {

    // Own fields of Arrow-1.0.Arrow.ExtensionScalarClass

    parentClass: ScalarClass
}

abstract class ExtensionScalarClass {

    // Own properties of Arrow-1.0.Arrow.ExtensionScalarClass

    static name: string
}

interface FeatherFileReaderClass {

    // Own fields of Arrow-1.0.Arrow.FeatherFileReaderClass

    parentClass: GObject.ObjectClass
}

abstract class FeatherFileReaderClass {

    // Own properties of Arrow-1.0.Arrow.FeatherFileReaderClass

    static name: string
}

interface FeatherWritePropertiesClass {

    // Own fields of Arrow-1.0.Arrow.FeatherWritePropertiesClass

    parentClass: GObject.ObjectClass
}

abstract class FeatherWritePropertiesClass {

    // Own properties of Arrow-1.0.Arrow.FeatherWritePropertiesClass

    static name: string
}

interface FieldClass {

    // Own fields of Arrow-1.0.Arrow.FieldClass

    parentClass: GObject.ObjectClass
}

abstract class FieldClass {

    // Own properties of Arrow-1.0.Arrow.FieldClass

    static name: string
}

interface FieldExpressionClass {

    // Own fields of Arrow-1.0.Arrow.FieldExpressionClass

    parentClass: ExpressionClass
}

abstract class FieldExpressionClass {

    // Own properties of Arrow-1.0.Arrow.FieldExpressionClass

    static name: string
}

interface FileInfoClass {

    // Own fields of Arrow-1.0.Arrow.FileInfoClass

    parentClass: GObject.ObjectClass
}

abstract class FileInfoClass {

    // Own properties of Arrow-1.0.Arrow.FileInfoClass

    static name: string
}

interface FileInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.FileInputStreamClass

    parentClass: SeekableInputStreamClass
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

    parentClass: OutputStreamClass
}

abstract class FileOutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.FileOutputStreamClass

    static name: string
}

interface FileSelectorClass {

    // Own fields of Arrow-1.0.Arrow.FileSelectorClass

    parentClass: GObject.ObjectClass
}

abstract class FileSelectorClass {

    // Own properties of Arrow-1.0.Arrow.FileSelectorClass

    static name: string
}

interface FileSystemClass {

    // Own fields of Arrow-1.0.Arrow.FileSystemClass

    parentClass: GObject.ObjectClass
}

abstract class FileSystemClass {

    // Own properties of Arrow-1.0.Arrow.FileSystemClass

    static name: string
}

interface FilterOptionsClass {

    // Own fields of Arrow-1.0.Arrow.FilterOptionsClass

    parentClass: FunctionOptionsClass
}

abstract class FilterOptionsClass {

    // Own properties of Arrow-1.0.Arrow.FilterOptionsClass

    static name: string
}

interface FixedSizeBinaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class FixedSizeBinaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilderClass

    static name: string
}

interface FixedSizeBinaryArrayClass {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayClass

    parentClass: PrimitiveArrayClass
}

abstract class FixedSizeBinaryArrayClass {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryArrayClass

    static name: string
}

interface FixedSizeBinaryDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryDataTypeClass

    parentClass: FixedWidthDataTypeClass
}

abstract class FixedSizeBinaryDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryDataTypeClass

    static name: string
}

interface FixedSizeBinaryScalarClass {

    // Own fields of Arrow-1.0.Arrow.FixedSizeBinaryScalarClass

    parentClass: BaseBinaryScalarClass
}

abstract class FixedSizeBinaryScalarClass {

    // Own properties of Arrow-1.0.Arrow.FixedSizeBinaryScalarClass

    static name: string
}

interface FixedWidthDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.FixedWidthDataTypeClass

    parentClass: DataTypeClass
}

abstract class FixedWidthDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.FixedWidthDataTypeClass

    static name: string
}

interface FloatArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.FloatArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class FloatArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.FloatArrayBuilderClass

    static name: string
}

interface FloatArrayClass {

    // Own fields of Arrow-1.0.Arrow.FloatArrayClass

    parentClass: NumericArrayClass
}

abstract class FloatArrayClass {

    // Own properties of Arrow-1.0.Arrow.FloatArrayClass

    static name: string
}

interface FloatDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.FloatDataTypeClass

    parentClass: FloatingPointDataTypeClass
}

abstract class FloatDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.FloatDataTypeClass

    static name: string
}

interface FloatScalarClass {

    // Own fields of Arrow-1.0.Arrow.FloatScalarClass

    parentClass: ScalarClass
}

abstract class FloatScalarClass {

    // Own properties of Arrow-1.0.Arrow.FloatScalarClass

    static name: string
}

interface FloatingPointDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.FloatingPointDataTypeClass

    parentClass: NumericDataTypeClass
}

abstract class FloatingPointDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.FloatingPointDataTypeClass

    static name: string
}

interface FunctionClass {

    // Own fields of Arrow-1.0.Arrow.FunctionClass

    parentClass: GObject.ObjectClass
}

abstract class FunctionClass {

    // Own properties of Arrow-1.0.Arrow.FunctionClass

    static name: string
}

interface FunctionDocClass {

    // Own fields of Arrow-1.0.Arrow.FunctionDocClass

    parentClass: GObject.ObjectClass
}

abstract class FunctionDocClass {

    // Own properties of Arrow-1.0.Arrow.FunctionDocClass

    static name: string
}

interface FunctionOptionsClass {

    // Own fields of Arrow-1.0.Arrow.FunctionOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class FunctionOptionsClass {

    // Own properties of Arrow-1.0.Arrow.FunctionOptionsClass

    static name: string
}

interface GIOInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.GIOInputStreamClass

    parentClass: SeekableInputStreamClass
}

abstract class GIOInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.GIOInputStreamClass

    static name: string
}

interface GIOOutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.GIOOutputStreamClass

    parentClass: OutputStreamClass
}

abstract class GIOOutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.GIOOutputStreamClass

    static name: string
}

interface HDFSFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.HDFSFileSystemClass

    parentClass: FileSystemClass
}

abstract class HDFSFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.HDFSFileSystemClass

    static name: string
}

interface HashJoinNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.HashJoinNodeOptionsClass

    parentClass: ExecuteNodeOptionsClass
}

abstract class HashJoinNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.HashJoinNodeOptionsClass

    static name: string
}

interface InputStreamClass {

    // Own fields of Arrow-1.0.Arrow.InputStreamClass

    parentClass: Gio.InputStreamClass
}

abstract class InputStreamClass {

    // Own properties of Arrow-1.0.Arrow.InputStreamClass

    static name: string
}

interface Int16ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Int16ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class Int16ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Int16ArrayBuilderClass

    static name: string
}

interface Int16ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Int16ArrayClass

    parentClass: NumericArrayClass
}

abstract class Int16ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Int16ArrayClass

    static name: string
}

interface Int16DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Int16DataTypeClass

    parentClass: IntegerDataTypeClass
}

abstract class Int16DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Int16DataTypeClass

    static name: string
}

interface Int16ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Int16ScalarClass

    parentClass: ScalarClass
}

abstract class Int16ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Int16ScalarClass

    static name: string
}

interface Int32ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Int32ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class Int32ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Int32ArrayBuilderClass

    static name: string
}

interface Int32ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Int32ArrayClass

    parentClass: NumericArrayClass
}

abstract class Int32ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Int32ArrayClass

    static name: string
}

interface Int32DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Int32DataTypeClass

    parentClass: IntegerDataTypeClass
}

abstract class Int32DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Int32DataTypeClass

    static name: string
}

interface Int32ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Int32ScalarClass

    parentClass: ScalarClass
}

abstract class Int32ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Int32ScalarClass

    static name: string
}

interface Int64ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Int64ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class Int64ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Int64ArrayBuilderClass

    static name: string
}

interface Int64ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Int64ArrayClass

    parentClass: NumericArrayClass
}

abstract class Int64ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Int64ArrayClass

    static name: string
}

interface Int64DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Int64DataTypeClass

    parentClass: IntegerDataTypeClass
}

abstract class Int64DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Int64DataTypeClass

    static name: string
}

interface Int64ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Int64ScalarClass

    parentClass: ScalarClass
}

abstract class Int64ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Int64ScalarClass

    static name: string
}

interface Int8ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Int8ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class Int8ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Int8ArrayBuilderClass

    static name: string
}

interface Int8ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Int8ArrayClass

    parentClass: NumericArrayClass
}

abstract class Int8ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Int8ArrayClass

    static name: string
}

interface Int8DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Int8DataTypeClass

    parentClass: IntegerDataTypeClass
}

abstract class Int8DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Int8DataTypeClass

    static name: string
}

interface Int8ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Int8ScalarClass

    parentClass: ScalarClass
}

abstract class Int8ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Int8ScalarClass

    static name: string
}

interface IntArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.IntArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class IntArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.IntArrayBuilderClass

    static name: string
}

interface IntegerDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.IntegerDataTypeClass

    parentClass: NumericDataTypeClass
}

abstract class IntegerDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.IntegerDataTypeClass

    static name: string
}

interface IntervalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.IntervalDataTypeClass

    parentClass: TimeDataTypeClass
}

abstract class IntervalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.IntervalDataTypeClass

    static name: string
}

interface JSONReadOptionsClass {

    // Own fields of Arrow-1.0.Arrow.JSONReadOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class JSONReadOptionsClass {

    // Own properties of Arrow-1.0.Arrow.JSONReadOptionsClass

    static name: string
}

interface JSONReaderClass {

    // Own fields of Arrow-1.0.Arrow.JSONReaderClass

    parentClass: GObject.ObjectClass
}

abstract class JSONReaderClass {

    // Own properties of Arrow-1.0.Arrow.JSONReaderClass

    static name: string
}

interface LargeBinaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class LargeBinaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArrayBuilderClass

    static name: string
}

interface LargeBinaryArrayClass {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryArrayClass

    parentClass: ArrayClass
}

abstract class LargeBinaryArrayClass {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryArrayClass

    static name: string
}

interface LargeBinaryDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryDataTypeClass

    parentClass: DataTypeClass
}

abstract class LargeBinaryDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryDataTypeClass

    static name: string
}

interface LargeBinaryScalarClass {

    // Own fields of Arrow-1.0.Arrow.LargeBinaryScalarClass

    parentClass: BaseBinaryScalarClass
}

abstract class LargeBinaryScalarClass {

    // Own properties of Arrow-1.0.Arrow.LargeBinaryScalarClass

    static name: string
}

interface LargeListArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.LargeListArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class LargeListArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.LargeListArrayBuilderClass

    static name: string
}

interface LargeListArrayClass {

    // Own fields of Arrow-1.0.Arrow.LargeListArrayClass

    parentClass: ArrayClass
}

abstract class LargeListArrayClass {

    // Own properties of Arrow-1.0.Arrow.LargeListArrayClass

    static name: string
}

interface LargeListDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.LargeListDataTypeClass

    parentClass: DataTypeClass
}

abstract class LargeListDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.LargeListDataTypeClass

    static name: string
}

interface LargeListScalarClass {

    // Own fields of Arrow-1.0.Arrow.LargeListScalarClass

    parentClass: BaseListScalarClass
}

abstract class LargeListScalarClass {

    // Own properties of Arrow-1.0.Arrow.LargeListScalarClass

    static name: string
}

interface LargeStringArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.LargeStringArrayBuilderClass

    parentClass: LargeBinaryArrayBuilderClass
}

abstract class LargeStringArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.LargeStringArrayBuilderClass

    static name: string
}

interface LargeStringArrayClass {

    // Own fields of Arrow-1.0.Arrow.LargeStringArrayClass

    parentClass: LargeBinaryArrayClass
}

abstract class LargeStringArrayClass {

    // Own properties of Arrow-1.0.Arrow.LargeStringArrayClass

    static name: string
}

interface LargeStringDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.LargeStringDataTypeClass

    parentClass: LargeBinaryDataTypeClass
}

abstract class LargeStringDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.LargeStringDataTypeClass

    static name: string
}

interface LargeStringScalarClass {

    // Own fields of Arrow-1.0.Arrow.LargeStringScalarClass

    parentClass: BaseBinaryScalarClass
}

abstract class LargeStringScalarClass {

    // Own properties of Arrow-1.0.Arrow.LargeStringScalarClass

    static name: string
}

interface ListArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.ListArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class ListArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.ListArrayBuilderClass

    static name: string
}

interface ListArrayClass {

    // Own fields of Arrow-1.0.Arrow.ListArrayClass

    parentClass: ArrayClass
}

abstract class ListArrayClass {

    // Own properties of Arrow-1.0.Arrow.ListArrayClass

    static name: string
}

interface ListDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.ListDataTypeClass

    parentClass: DataTypeClass
}

abstract class ListDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.ListDataTypeClass

    static name: string
}

interface ListScalarClass {

    // Own fields of Arrow-1.0.Arrow.ListScalarClass

    parentClass: BaseListScalarClass
}

abstract class ListScalarClass {

    // Own properties of Arrow-1.0.Arrow.ListScalarClass

    static name: string
}

interface LiteralExpressionClass {

    // Own fields of Arrow-1.0.Arrow.LiteralExpressionClass

    parentClass: ExpressionClass
}

abstract class LiteralExpressionClass {

    // Own properties of Arrow-1.0.Arrow.LiteralExpressionClass

    static name: string
}

interface LocalFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.LocalFileSystemClass

    parentClass: FileSystemClass
}

abstract class LocalFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystemClass

    static name: string
}

interface LocalFileSystemOptionsClass {

    // Own fields of Arrow-1.0.Arrow.LocalFileSystemOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class LocalFileSystemOptionsClass {

    // Own properties of Arrow-1.0.Arrow.LocalFileSystemOptionsClass

    static name: string
}

interface MapArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.MapArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class MapArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.MapArrayBuilderClass

    static name: string
}

interface MapArrayClass {

    // Own fields of Arrow-1.0.Arrow.MapArrayClass

    parentClass: ListArrayClass
}

abstract class MapArrayClass {

    // Own properties of Arrow-1.0.Arrow.MapArrayClass

    static name: string
}

interface MapDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.MapDataTypeClass

    parentClass: ListDataTypeClass
}

abstract class MapDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.MapDataTypeClass

    static name: string
}

interface MapScalarClass {

    // Own fields of Arrow-1.0.Arrow.MapScalarClass

    parentClass: BaseListScalarClass
}

abstract class MapScalarClass {

    // Own properties of Arrow-1.0.Arrow.MapScalarClass

    static name: string
}

interface MemoryMappedInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.MemoryMappedInputStreamClass

    parentClass: SeekableInputStreamClass
}

abstract class MemoryMappedInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.MemoryMappedInputStreamClass

    static name: string
}

interface MockFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.MockFileSystemClass

    parentClass: FileSystemClass
}

abstract class MockFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.MockFileSystemClass

    static name: string
}

interface MonthDayNanoIntervalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.MonthDayNanoIntervalDataTypeClass

    parentClass: IntervalDataTypeClass
}

abstract class MonthDayNanoIntervalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.MonthDayNanoIntervalDataTypeClass

    static name: string
}

interface MonthIntervalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.MonthIntervalDataTypeClass

    parentClass: IntervalDataTypeClass
}

abstract class MonthIntervalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.MonthIntervalDataTypeClass

    static name: string
}

interface MutableBufferClass {

    // Own fields of Arrow-1.0.Arrow.MutableBufferClass

    parentClass: BufferClass
}

abstract class MutableBufferClass {

    // Own properties of Arrow-1.0.Arrow.MutableBufferClass

    static name: string
}

interface NullArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.NullArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class NullArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.NullArrayBuilderClass

    static name: string
}

interface NullArrayClass {

    // Own fields of Arrow-1.0.Arrow.NullArrayClass

    parentClass: ArrayClass
}

abstract class NullArrayClass {

    // Own properties of Arrow-1.0.Arrow.NullArrayClass

    static name: string
}

interface NullDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.NullDataTypeClass

    parentClass: DataTypeClass
}

abstract class NullDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.NullDataTypeClass

    static name: string
}

interface NullScalarClass {

    // Own fields of Arrow-1.0.Arrow.NullScalarClass

    parentClass: ScalarClass
}

abstract class NullScalarClass {

    // Own properties of Arrow-1.0.Arrow.NullScalarClass

    static name: string
}

interface NumericArrayClass {

    // Own fields of Arrow-1.0.Arrow.NumericArrayClass

    parentClass: PrimitiveArrayClass
}

abstract class NumericArrayClass {

    // Own properties of Arrow-1.0.Arrow.NumericArrayClass

    static name: string
}

interface NumericDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.NumericDataTypeClass

    parentClass: FixedWidthDataTypeClass
}

abstract class NumericDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.NumericDataTypeClass

    static name: string
}

interface OutputStreamClass {

    // Own fields of Arrow-1.0.Arrow.OutputStreamClass

    parentClass: GObject.ObjectClass
}

abstract class OutputStreamClass {

    // Own properties of Arrow-1.0.Arrow.OutputStreamClass

    static name: string
}

interface PrimitiveArrayClass {

    // Own fields of Arrow-1.0.Arrow.PrimitiveArrayClass

    parentClass: ArrayClass
}

abstract class PrimitiveArrayClass {

    // Own properties of Arrow-1.0.Arrow.PrimitiveArrayClass

    static name: string
}

interface ReadOptionsClass {

    // Own fields of Arrow-1.0.Arrow.ReadOptionsClass

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
}

abstract class RecordBatchBuilderClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchBuilderClass

    static name: string
}

interface RecordBatchClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchClass

    parentClass: GObject.ObjectClass
}

abstract class RecordBatchClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchClass

    static name: string
}

interface RecordBatchDatumClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchDatumClass

    parentClass: DatumClass
}

abstract class RecordBatchDatumClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchDatumClass

    static name: string
}

interface RecordBatchFileReaderClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchFileReaderClass

    parentClass: GObject.ObjectClass
}

abstract class RecordBatchFileReaderClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileReaderClass

    static name: string
}

interface RecordBatchFileWriterClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchFileWriterClass

    parentClass: RecordBatchStreamWriterClass
}

abstract class RecordBatchFileWriterClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchFileWriterClass

    static name: string
}

interface RecordBatchIteratorClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchIteratorClass

    parentClass: GObject.ObjectClass
}

abstract class RecordBatchIteratorClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchIteratorClass

    static name: string
}

interface RecordBatchReaderClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchReaderClass

    parentClass: GObject.ObjectClass
}

abstract class RecordBatchReaderClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchReaderClass

    static name: string
}

interface RecordBatchStreamReaderClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchStreamReaderClass

    parentClass: RecordBatchReaderClass
}

abstract class RecordBatchStreamReaderClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamReaderClass

    static name: string
}

interface RecordBatchStreamWriterClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchStreamWriterClass

    parentClass: RecordBatchWriterClass
}

abstract class RecordBatchStreamWriterClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchStreamWriterClass

    static name: string
}

interface RecordBatchWriterClass {

    // Own fields of Arrow-1.0.Arrow.RecordBatchWriterClass

    parentClass: GObject.ObjectClass
}

abstract class RecordBatchWriterClass {

    // Own properties of Arrow-1.0.Arrow.RecordBatchWriterClass

    static name: string
}

interface ResizableBufferClass {

    // Own fields of Arrow-1.0.Arrow.ResizableBufferClass

    parentClass: MutableBufferClass
}

abstract class ResizableBufferClass {

    // Own properties of Arrow-1.0.Arrow.ResizableBufferClass

    static name: string
}

interface RoundOptionsClass {

    // Own fields of Arrow-1.0.Arrow.RoundOptionsClass

    parentClass: FunctionOptionsClass
}

abstract class RoundOptionsClass {

    // Own properties of Arrow-1.0.Arrow.RoundOptionsClass

    static name: string
}

interface RoundToMultipleOptionsClass {

    // Own fields of Arrow-1.0.Arrow.RoundToMultipleOptionsClass

    parentClass: FunctionOptionsClass
}

abstract class RoundToMultipleOptionsClass {

    // Own properties of Arrow-1.0.Arrow.RoundToMultipleOptionsClass

    static name: string
}

interface S3FileSystemClass {

    // Own fields of Arrow-1.0.Arrow.S3FileSystemClass

    parentClass: FileSystemClass
}

abstract class S3FileSystemClass {

    // Own properties of Arrow-1.0.Arrow.S3FileSystemClass

    static name: string
}

interface S3GlobalOptionsClass {

    // Own fields of Arrow-1.0.Arrow.S3GlobalOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class S3GlobalOptionsClass {

    // Own properties of Arrow-1.0.Arrow.S3GlobalOptionsClass

    static name: string
}

interface ScalarAggregateOptionsClass {

    // Own fields of Arrow-1.0.Arrow.ScalarAggregateOptionsClass

    parentClass: FunctionOptionsClass
}

abstract class ScalarAggregateOptionsClass {

    // Own properties of Arrow-1.0.Arrow.ScalarAggregateOptionsClass

    static name: string
}

interface ScalarClass {

    // Own fields of Arrow-1.0.Arrow.ScalarClass

    parentClass: GObject.ObjectClass
}

abstract class ScalarClass {

    // Own properties of Arrow-1.0.Arrow.ScalarClass

    static name: string
}

interface ScalarDatumClass {

    // Own fields of Arrow-1.0.Arrow.ScalarDatumClass

    parentClass: DatumClass
}

abstract class ScalarDatumClass {

    // Own properties of Arrow-1.0.Arrow.ScalarDatumClass

    static name: string
}

interface SchemaClass {

    // Own fields of Arrow-1.0.Arrow.SchemaClass

    parentClass: GObject.ObjectClass
}

abstract class SchemaClass {

    // Own properties of Arrow-1.0.Arrow.SchemaClass

    static name: string
}

interface SeekableInputStreamClass {

    // Own fields of Arrow-1.0.Arrow.SeekableInputStreamClass

    parentClass: InputStreamClass
}

abstract class SeekableInputStreamClass {

    // Own properties of Arrow-1.0.Arrow.SeekableInputStreamClass

    static name: string
}

interface SetLookupOptionsClass {

    // Own fields of Arrow-1.0.Arrow.SetLookupOptionsClass

    parentClass: FunctionOptionsClass
}

abstract class SetLookupOptionsClass {

    // Own properties of Arrow-1.0.Arrow.SetLookupOptionsClass

    static name: string
}

interface SinkNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.SinkNodeOptionsClass

    parentClass: ExecuteNodeOptionsClass
}

abstract class SinkNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.SinkNodeOptionsClass

    static name: string
}

interface SlowFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.SlowFileSystemClass

    parentClass: FileSystemClass
}

abstract class SlowFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.SlowFileSystemClass

    static name: string
}

interface SortKeyClass {

    // Own fields of Arrow-1.0.Arrow.SortKeyClass

    parentClass: GObject.ObjectClass
}

abstract class SortKeyClass {

    // Own properties of Arrow-1.0.Arrow.SortKeyClass

    static name: string
}

interface SortOptionsClass {

    // Own fields of Arrow-1.0.Arrow.SortOptionsClass

    parentClass: FunctionOptionsClass
}

abstract class SortOptionsClass {

    // Own properties of Arrow-1.0.Arrow.SortOptionsClass

    static name: string
}

interface SourceNodeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.SourceNodeOptionsClass

    parentClass: ExecuteNodeOptionsClass
}

abstract class SourceNodeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.SourceNodeOptionsClass

    static name: string
}

interface SparseUnionArrayClass {

    // Own fields of Arrow-1.0.Arrow.SparseUnionArrayClass

    parentClass: UnionArrayClass
}

abstract class SparseUnionArrayClass {

    // Own properties of Arrow-1.0.Arrow.SparseUnionArrayClass

    static name: string
}

interface SparseUnionDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.SparseUnionDataTypeClass

    parentClass: UnionDataTypeClass
}

abstract class SparseUnionDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.SparseUnionDataTypeClass

    static name: string
}

interface SparseUnionScalarClass {

    // Own fields of Arrow-1.0.Arrow.SparseUnionScalarClass

    parentClass: UnionScalarClass
}

abstract class SparseUnionScalarClass {

    // Own properties of Arrow-1.0.Arrow.SparseUnionScalarClass

    static name: string
}

interface StringArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.StringArrayBuilderClass

    parentClass: BinaryArrayBuilderClass
}

abstract class StringArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.StringArrayBuilderClass

    static name: string
}

interface StringArrayClass {

    // Own fields of Arrow-1.0.Arrow.StringArrayClass

    parentClass: BinaryArrayClass
}

abstract class StringArrayClass {

    // Own properties of Arrow-1.0.Arrow.StringArrayClass

    static name: string
}

interface StringDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.StringDataTypeClass

    parentClass: BinaryDataTypeClass
}

abstract class StringDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.StringDataTypeClass

    static name: string
}

interface StringDictionaryArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.StringDictionaryArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class StringDictionaryArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.StringDictionaryArrayBuilderClass

    static name: string
}

interface StringScalarClass {

    // Own fields of Arrow-1.0.Arrow.StringScalarClass

    parentClass: BaseBinaryScalarClass
}

abstract class StringScalarClass {

    // Own properties of Arrow-1.0.Arrow.StringScalarClass

    static name: string
}

interface StructArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.StructArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class StructArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.StructArrayBuilderClass

    static name: string
}

interface StructArrayClass {

    // Own fields of Arrow-1.0.Arrow.StructArrayClass

    parentClass: ArrayClass
}

abstract class StructArrayClass {

    // Own properties of Arrow-1.0.Arrow.StructArrayClass

    static name: string
}

interface StructDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.StructDataTypeClass

    parentClass: DataTypeClass
}

abstract class StructDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.StructDataTypeClass

    static name: string
}

interface StructScalarClass {

    // Own fields of Arrow-1.0.Arrow.StructScalarClass

    parentClass: ScalarClass
}

abstract class StructScalarClass {

    // Own properties of Arrow-1.0.Arrow.StructScalarClass

    static name: string
}

interface SubTreeFileSystemClass {

    // Own fields of Arrow-1.0.Arrow.SubTreeFileSystemClass

    parentClass: FileSystemClass
}

abstract class SubTreeFileSystemClass {

    // Own properties of Arrow-1.0.Arrow.SubTreeFileSystemClass

    static name: string
}

interface TableBatchReaderClass {

    // Own fields of Arrow-1.0.Arrow.TableBatchReaderClass

    parentClass: RecordBatchReaderClass
}

abstract class TableBatchReaderClass {

    // Own properties of Arrow-1.0.Arrow.TableBatchReaderClass

    static name: string
}

interface TableClass {

    // Own fields of Arrow-1.0.Arrow.TableClass

    parentClass: GObject.ObjectClass
}

abstract class TableClass {

    // Own properties of Arrow-1.0.Arrow.TableClass

    static name: string
}

interface TableConcatenateOptionsClass {

    // Own fields of Arrow-1.0.Arrow.TableConcatenateOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class TableConcatenateOptionsClass {

    // Own properties of Arrow-1.0.Arrow.TableConcatenateOptionsClass

    static name: string
}

interface TableDatumClass {

    // Own fields of Arrow-1.0.Arrow.TableDatumClass

    parentClass: DatumClass
}

abstract class TableDatumClass {

    // Own properties of Arrow-1.0.Arrow.TableDatumClass

    static name: string
}

interface TakeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.TakeOptionsClass

    parentClass: FunctionOptionsClass
}

abstract class TakeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.TakeOptionsClass

    static name: string
}

interface TemporalDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.TemporalDataTypeClass

    parentClass: FixedWidthDataTypeClass
}

abstract class TemporalDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.TemporalDataTypeClass

    static name: string
}

interface TensorClass {

    // Own fields of Arrow-1.0.Arrow.TensorClass

    parentClass: GObject.ObjectClass
}

abstract class TensorClass {

    // Own properties of Arrow-1.0.Arrow.TensorClass

    static name: string
}

interface Time32ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Time32ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class Time32ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Time32ArrayBuilderClass

    static name: string
}

interface Time32ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Time32ArrayClass

    parentClass: NumericArrayClass
}

abstract class Time32ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Time32ArrayClass

    static name: string
}

interface Time32DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Time32DataTypeClass

    parentClass: TimeDataTypeClass
}

abstract class Time32DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Time32DataTypeClass

    static name: string
}

interface Time32ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Time32ScalarClass

    parentClass: ScalarClass
}

abstract class Time32ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Time32ScalarClass

    static name: string
}

interface Time64ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.Time64ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class Time64ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.Time64ArrayBuilderClass

    static name: string
}

interface Time64ArrayClass {

    // Own fields of Arrow-1.0.Arrow.Time64ArrayClass

    parentClass: NumericArrayClass
}

abstract class Time64ArrayClass {

    // Own properties of Arrow-1.0.Arrow.Time64ArrayClass

    static name: string
}

interface Time64DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.Time64DataTypeClass

    parentClass: TimeDataTypeClass
}

abstract class Time64DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.Time64DataTypeClass

    static name: string
}

interface Time64ScalarClass {

    // Own fields of Arrow-1.0.Arrow.Time64ScalarClass

    parentClass: ScalarClass
}

abstract class Time64ScalarClass {

    // Own properties of Arrow-1.0.Arrow.Time64ScalarClass

    static name: string
}

interface TimeDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.TimeDataTypeClass

    parentClass: TemporalDataTypeClass
}

abstract class TimeDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.TimeDataTypeClass

    static name: string
}

interface TimestampArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.TimestampArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class TimestampArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.TimestampArrayBuilderClass

    static name: string
}

interface TimestampArrayClass {

    // Own fields of Arrow-1.0.Arrow.TimestampArrayClass

    parentClass: NumericArrayClass
}

abstract class TimestampArrayClass {

    // Own properties of Arrow-1.0.Arrow.TimestampArrayClass

    static name: string
}

interface TimestampDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.TimestampDataTypeClass

    parentClass: TemporalDataTypeClass
}

abstract class TimestampDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.TimestampDataTypeClass

    static name: string
}

interface TimestampScalarClass {

    // Own fields of Arrow-1.0.Arrow.TimestampScalarClass

    parentClass: ScalarClass
}

abstract class TimestampScalarClass {

    // Own properties of Arrow-1.0.Arrow.TimestampScalarClass

    static name: string
}

interface UInt16ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UInt16ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class UInt16ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UInt16ArrayBuilderClass

    static name: string
}

interface UInt16ArrayClass {

    // Own fields of Arrow-1.0.Arrow.UInt16ArrayClass

    parentClass: NumericArrayClass
}

abstract class UInt16ArrayClass {

    // Own properties of Arrow-1.0.Arrow.UInt16ArrayClass

    static name: string
}

interface UInt16DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UInt16DataTypeClass

    parentClass: IntegerDataTypeClass
}

abstract class UInt16DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UInt16DataTypeClass

    static name: string
}

interface UInt16ScalarClass {

    // Own fields of Arrow-1.0.Arrow.UInt16ScalarClass

    parentClass: ScalarClass
}

abstract class UInt16ScalarClass {

    // Own properties of Arrow-1.0.Arrow.UInt16ScalarClass

    static name: string
}

interface UInt32ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UInt32ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class UInt32ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UInt32ArrayBuilderClass

    static name: string
}

interface UInt32ArrayClass {

    // Own fields of Arrow-1.0.Arrow.UInt32ArrayClass

    parentClass: NumericArrayClass
}

abstract class UInt32ArrayClass {

    // Own properties of Arrow-1.0.Arrow.UInt32ArrayClass

    static name: string
}

interface UInt32DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UInt32DataTypeClass

    parentClass: IntegerDataTypeClass
}

abstract class UInt32DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UInt32DataTypeClass

    static name: string
}

interface UInt32ScalarClass {

    // Own fields of Arrow-1.0.Arrow.UInt32ScalarClass

    parentClass: ScalarClass
}

abstract class UInt32ScalarClass {

    // Own properties of Arrow-1.0.Arrow.UInt32ScalarClass

    static name: string
}

interface UInt64ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UInt64ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class UInt64ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UInt64ArrayBuilderClass

    static name: string
}

interface UInt64ArrayClass {

    // Own fields of Arrow-1.0.Arrow.UInt64ArrayClass

    parentClass: NumericArrayClass
}

abstract class UInt64ArrayClass {

    // Own properties of Arrow-1.0.Arrow.UInt64ArrayClass

    static name: string
}

interface UInt64DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UInt64DataTypeClass

    parentClass: IntegerDataTypeClass
}

abstract class UInt64DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UInt64DataTypeClass

    static name: string
}

interface UInt64ScalarClass {

    // Own fields of Arrow-1.0.Arrow.UInt64ScalarClass

    parentClass: ScalarClass
}

abstract class UInt64ScalarClass {

    // Own properties of Arrow-1.0.Arrow.UInt64ScalarClass

    static name: string
}

interface UInt8ArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UInt8ArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class UInt8ArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UInt8ArrayBuilderClass

    static name: string
}

interface UInt8ArrayClass {

    // Own fields of Arrow-1.0.Arrow.UInt8ArrayClass

    parentClass: NumericArrayClass
}

abstract class UInt8ArrayClass {

    // Own properties of Arrow-1.0.Arrow.UInt8ArrayClass

    static name: string
}

interface UInt8DataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UInt8DataTypeClass

    parentClass: IntegerDataTypeClass
}

abstract class UInt8DataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UInt8DataTypeClass

    static name: string
}

interface UInt8ScalarClass {

    // Own fields of Arrow-1.0.Arrow.UInt8ScalarClass

    parentClass: ScalarClass
}

abstract class UInt8ScalarClass {

    // Own properties of Arrow-1.0.Arrow.UInt8ScalarClass

    static name: string
}

interface UIntArrayBuilderClass {

    // Own fields of Arrow-1.0.Arrow.UIntArrayBuilderClass

    parentClass: ArrayBuilderClass
}

abstract class UIntArrayBuilderClass {

    // Own properties of Arrow-1.0.Arrow.UIntArrayBuilderClass

    static name: string
}

interface UTF8NormalizeOptionsClass {

    // Own fields of Arrow-1.0.Arrow.UTF8NormalizeOptionsClass

    parentClass: FunctionOptionsClass
}

abstract class UTF8NormalizeOptionsClass {

    // Own properties of Arrow-1.0.Arrow.UTF8NormalizeOptionsClass

    static name: string
}

interface UnionArrayClass {

    // Own fields of Arrow-1.0.Arrow.UnionArrayClass

    parentClass: ArrayClass
}

abstract class UnionArrayClass {

    // Own properties of Arrow-1.0.Arrow.UnionArrayClass

    static name: string
}

interface UnionDataTypeClass {

    // Own fields of Arrow-1.0.Arrow.UnionDataTypeClass

    parentClass: DataTypeClass
}

abstract class UnionDataTypeClass {

    // Own properties of Arrow-1.0.Arrow.UnionDataTypeClass

    static name: string
}

interface UnionScalarClass {

    // Own fields of Arrow-1.0.Arrow.UnionScalarClass

    parentClass: ScalarClass
}

abstract class UnionScalarClass {

    // Own properties of Arrow-1.0.Arrow.UnionScalarClass

    static name: string
}

interface VarianceOptionsClass {

    // Own fields of Arrow-1.0.Arrow.VarianceOptionsClass

    parentClass: FunctionOptionsClass
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

    parentClass: GObject.ObjectClass
}

abstract class WriteOptionsClass {

    // Own properties of Arrow-1.0.Arrow.WriteOptionsClass

    static name: string
}

    type TimePoint = number
}
export default Arrow;