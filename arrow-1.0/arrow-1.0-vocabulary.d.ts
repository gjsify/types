/**
 * The GIR-derived widget VOCABULARY for Arrow-1.0.
 *
 * GENERATED — do not edit. Provenance: Arrow-1.0 — library 16.1.0 — prop(s) no TypeScript value satisfies: Arrow.Array.array Arrow.ArrayBuilder.array-builder Arrow.Buffer.buffer Arrow.CSVReader.csv-table-reader Arrow.ChunkedArray.chunked-array Arrow.Codec.codec Arrow.DataType.data-type Arrow.Datum.datum Arrow.Decimal128.decimal128 Arrow.Decimal256.decimal256 Arrow.ExecuteNode.node Arrow.ExecuteNodeOptions.options Arrow.ExecutePlan.plan Arrow.ExtensionDataTypeRegistry.registry Arrow.FeatherFileReader.feather-reader Arrow.Field.field Arrow.FileSystem.file-system Arrow.Function.function Arrow.FunctionDoc.doc Arrow.InputStream.input-stream Arrow.JSONReader.json-table-reader Arrow.MemoryPool.memory-pool Arrow.ORCFileReader.orc-file-reader Arrow.OutputStream.output-stream Arrow.RecordBatch.record-batch Arrow.RecordBatchBuilder.record-batch-builder Arrow.RecordBatchFileReader.record-batch-file-reader Arrow.RecordBatchIterator.iterator Arrow.RecordBatchReader.record-batch-reader Arrow.RecordBatchReader.sources Arrow.RecordBatchWriter.record-batch-writer Arrow.Scalar.scalar Arrow.Schema.schema Arrow.Table.table Arrow.Tensor.tensor Arrow.TimestampParser.parser
 *
 * 255 instantiable GTypes (of which 0 concrete widgets), 279 declarations, 18 enum nick unions, 0 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type Arrow from './arrow-1.0.js';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type { GInputStreamConstructOnly, GInputStreamProps } from '@girs/gio-2.0/vocabulary';
import type { GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GArrowCompressionTypeNick = 'uncompressed' | 'snappy' | 'gzip' | 'brotli' | 'zstd' | 'lz4' | 'lzo' | 'bz2';
export type GArrowCountModeNick = 'only-valid' | 'only-null' | 'all';
export type GArrowFileModeNick = 'read' | 'write' | 'readwrite';
export type GArrowFileTypeNick = 'not-found' | 'unknown' | 'file' | 'dir';
export type GArrowFilterNullSelectionBehaviorNick = 'drop' | 'emit-null';
export type GArrowIntervalTypeNick = 'month' | 'day-time' | 'month-day-nano';
export type GArrowJSONReadUnexpectedFieldBehaviorNick = 'ignore' | 'error' | 'infer-type';
export type GArrowJoinTypeNick = 'left-semi' | 'right-semi' | 'left-anti' | 'right-anti' | 'inner' | 'left-outer' | 'right-outer' | 'full-outer';
export type GArrowMetadataVersionNick = 'v1' | 'v2' | 'v3';
export type GArrowNullPlacementNick = 'at-start' | 'at-end';
export type GArrowQuantileInterpolationNick = 'linear' | 'lower' | 'higher' | 'nearest' | 'midpoint';
export type GArrowRankTiebreakerNick = 'min' | 'max' | 'first' | 'dense';
export type GArrowRoundModeNick = 'down' | 'up' | 'towards-zero' | 'towards-infinity' | 'half-down' | 'half-up' | 'half-towards-zero' | 'half-towards-infinity' | 'half-to-even' | 'half-to-odd';
export type GArrowS3LogLevelNick = 'off' | 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace';
export type GArrowSortOrderNick = 'ascending' | 'descending';
export type GArrowTimeUnitNick = 'second' | 'milli' | 'micro' | 'nano';
export type GArrowTypeNick = 'na' | 'boolean' | 'uint8' | 'int8' | 'uint16' | 'int16' | 'uint32' | 'int32' | 'uint64' | 'int64' | 'half-float' | 'float' | 'double' | 'string' | 'binary' | 'fixed-size-binary' | 'date32' | 'date64' | 'timestamp' | 'time32' | 'time64' | 'month-interval' | 'day-time-interval' | 'decimal128' | 'decimal256' | 'list' | 'struct' | 'sparse-union' | 'dense-union' | 'dictionary' | 'map' | 'extension' | 'fixed-size-list' | 'duration' | 'large-string' | 'large-binary' | 'large-list' | 'month-day-nano-interval' | 'run-end-encoded';
export type GArrowUTF8NormalizeFormNick = 'nfc' | 'nfkc' | 'nfd' | 'nfkd';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface GArrowAggregateNodeOptionsProps extends GArrowExecuteNodeOptionsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowAggregateNodeOptionsConstructOnly = GArrowExecuteNodeOptionsConstructOnly;

export interface GArrowAggregationProps extends GObjectProps {
    /**
     * The function name to aggregate.
     * @since 6.0.0
     * @default NULL
     */
    function?: string;
    /**
     * The input field name of aggregate function.
     * @since 6.0.0
     * @default NULL
     */
    input?: string;
    /**
     * The options of aggregate function.
     * @since 6.0.0
     */
    options?: Arrow.FunctionOptions;
    /**
     * The output field name of aggregate function.
     * @since 6.0.0
     * @default NULL
     */
    output?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowAggregationConstructOnly = GObjectConstructOnly | 'function' | 'input' | 'options' | 'output';

export interface GArrowArrayProps extends GObjectProps {
    array?: never;
    buffer1?: Arrow.Buffer;
    buffer2?: Arrow.Buffer;
    'null-bitmap'?: Arrow.Buffer | null;
    parent?: Arrow.Array;
    'value-data-type'?: Arrow.DataType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowArrayConstructOnly = GObjectConstructOnly | 'array' | 'buffer1' | 'buffer2' | 'null-bitmap' | 'parent' | 'value-data-type';

export interface GArrowArrayBuilderProps extends GObjectProps {
    'array-builder'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowArrayBuilderConstructOnly = GObjectConstructOnly | 'array-builder';

export interface GArrowArrayDatumProps extends GArrowDatumProps {
    value?: Arrow.Array;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowArrayDatumConstructOnly = GArrowDatumConstructOnly | 'value';

export interface GArrowArraySortOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * How to order values.
     * @since 3.0.0
     * @default GARROW_SORT_ORDER_ASCENDING
     */
    order?: GArrowSortOrderNick | Arrow.SortOrder;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowArraySortOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowBaseBinaryScalarProps extends GArrowScalarProps {
    /**
     * The value of the scalar.
     * @since 5.0.0
     */
    value?: Arrow.Buffer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBaseBinaryScalarConstructOnly = GArrowScalarConstructOnly | 'value';

export interface GArrowBaseListScalarProps extends GArrowScalarProps {
    /**
     * The value of the scalar.
     * @since 5.0.0
     */
    value?: Arrow.Array;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBaseListScalarConstructOnly = GArrowScalarConstructOnly | 'value';

export interface GArrowBinaryArrayProps extends GArrowArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBinaryArrayConstructOnly = GArrowArrayConstructOnly;

export interface GArrowBinaryArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBinaryArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowBinaryDataTypeProps extends GArrowDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBinaryDataTypeConstructOnly = GArrowDataTypeConstructOnly;

export interface GArrowBinaryDictionaryArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBinaryDictionaryArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowBinaryScalarProps extends GArrowBaseBinaryScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBinaryScalarConstructOnly = GArrowBaseBinaryScalarConstructOnly;

export interface GArrowBooleanArrayProps extends GArrowPrimitiveArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBooleanArrayConstructOnly = GArrowPrimitiveArrayConstructOnly;

export interface GArrowBooleanArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBooleanArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowBooleanDataTypeProps extends GArrowFixedWidthDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBooleanDataTypeConstructOnly = GArrowFixedWidthDataTypeConstructOnly;

export interface GArrowBooleanScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBooleanScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowBufferProps extends GObjectProps {
    buffer?: never;
    data?: GLib.Bytes;
    parent?: Arrow.Buffer | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBufferConstructOnly = GObjectConstructOnly | 'buffer' | 'data' | 'parent';

export interface GArrowBufferInputStreamProps extends GArrowSeekableInputStreamProps, GArrowFileProps, GArrowReadableProps {
    buffer?: Arrow.Buffer;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBufferInputStreamConstructOnly = GArrowSeekableInputStreamConstructOnly | GArrowFileConstructOnly | GArrowReadableConstructOnly | 'buffer';

export interface GArrowBufferOutputStreamProps extends GArrowOutputStreamProps, GArrowFileProps, GArrowWritableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowBufferOutputStreamConstructOnly = GArrowOutputStreamConstructOnly | GArrowFileConstructOnly | GArrowWritableConstructOnly;

export interface GArrowCSVReadOptionsProps extends GObjectProps {
    /**
     * Whether values are allowed to contain CR (0x0d) and LF (0x0a) characters.
     * @since 0.12.0
     * @default FALSE
     */
    'allow-newlines-in-values'?: boolean;
    /**
     * Whether string / binary columns can have null values.
     * @since 0.14.0
     * @default FALSE
     */
    'allow-null-strings'?: boolean;
    /**
     * Block size we request from the IO layer; also determines the size of chunks when #GArrowCSVReadOptions:use-threads is %TRUE.
     * @since 0.12.0
     * @default 1048576
     */
    'block-size'?: number;
    /**
     * Whether to check UTF8 validity of string columns.
     * @since 0.12.0
     * @default TRUE
     */
    'check-utf8'?: boolean;
    /**
     * Field delimiter character.
     * @since 0.12.0
     * @default 44
     */
    delimiter?: number;
    /**
     * Escaping character.
     * @since 0.12.0
     * @default 92
     */
    'escape-character'?: number;
    /** @default FALSE */
    'generate-column-names'?: boolean;
    /**
     * Whether empty lines are ignored.
     * @since 0.12.0
     * @default TRUE
     */
    'ignore-empty-lines'?: boolean;
    /**
     * Whether a quote inside a value is double quoted.
     * @since 0.12.0
     * @default TRUE
     */
    'is-double-quoted'?: boolean;
    /**
     * Whether escaping is used.
     * @since 0.12.0
     * @default FALSE
     */
    'is-escaped'?: boolean;
    /**
     * Whether quoting is used.
     * @since 0.12.0
     * @default TRUE
     */
    'is-quoted'?: boolean;
    /**
     * The number of header rows to skip (not including the row of column names, if any)
     * @since 0.15.0
     * @default 0
     */
    'n-skip-rows'?: number;
    /**
     * Quoting character.
     * @since 0.12.0
     * @default 34
     */
    'quote-character'?: number;
    /**
     * Whether to use the global CPU thread pool.
     * @since 0.12.0
     * @default TRUE
     */
    'use-threads'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowCSVReadOptionsConstructOnly = GObjectConstructOnly;

export interface GArrowCSVReaderProps extends GObjectProps {
    'csv-table-reader'?: never;
    input?: Arrow.InputStream;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowCSVReaderConstructOnly = GObjectConstructOnly | 'csv-table-reader' | 'input';

export interface GArrowCallExpressionProps extends GArrowExpressionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowCallExpressionConstructOnly = GArrowExpressionConstructOnly;

export interface GArrowCastOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * Whether truncating decimal value is allowed or not.
     * @since 1.0.0
     * @default FALSE
     */
    'allow-decimal-truncate'?: boolean;
    /**
     * Whether truncating float value is allowed or not.
     * @since 0.12.0
     * @default FALSE
     */
    'allow-float-truncate'?: boolean;
    /**
     * Whether integer overflow is allowed or not.
     * @since 0.7.0
     * @default FALSE
     */
    'allow-int-overflow'?: boolean;
    /**
     * Whether invalid UTF-8 string value is allowed or not.
     * @since 0.13.0
     * @default FALSE
     */
    'allow-invalid-utf8'?: boolean;
    /**
     * Whether time overflow is allowed or not.
     * @since 1.0.0
     * @default FALSE
     */
    'allow-time-overflow'?: boolean;
    /**
     * Whether truncating time value is allowed or not.
     * @since 0.8.0
     * @default FALSE
     */
    'allow-time-truncate'?: boolean;
    /**
     * The #GArrowDataType being casted to.
     * @since 1.0.0
     */
    'to-data-type'?: Arrow.DataType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowCastOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowChunkedArrayProps extends GObjectProps {
    'chunked-array'?: never;
    'data-type'?: Arrow.DataType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowChunkedArrayConstructOnly = GObjectConstructOnly | 'chunked-array' | 'data-type';

export interface GArrowChunkedArrayDatumProps extends GArrowDatumProps {
    value?: Arrow.ChunkedArray;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowChunkedArrayDatumConstructOnly = GArrowDatumConstructOnly | 'value';

export interface GArrowCodecProps extends GObjectProps {
    codec?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowCodecConstructOnly = GObjectConstructOnly | 'codec';

export interface GArrowCompressedInputStreamProps extends GArrowInputStreamProps, GArrowFileProps, GArrowReadableProps {
    codec?: Arrow.Codec;
    raw?: Arrow.InputStream;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowCompressedInputStreamConstructOnly = GArrowInputStreamConstructOnly | GArrowFileConstructOnly | GArrowReadableConstructOnly | 'codec' | 'raw';

export interface GArrowCompressedOutputStreamProps extends GArrowOutputStreamProps, GArrowFileProps, GArrowWritableProps {
    codec?: Arrow.Codec;
    raw?: Arrow.OutputStream;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowCompressedOutputStreamConstructOnly = GArrowOutputStreamConstructOnly | GArrowFileConstructOnly | GArrowWritableConstructOnly | 'codec' | 'raw';

export interface GArrowCountOptionsProps extends GArrowFunctionOptionsProps {
    /** @default GARROW_COUNT_MODE_ONLY_VALID */
    mode?: GArrowCountModeNick | Arrow.CountMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowCountOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowDataTypeProps extends GObjectProps {
    'data-type'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDataTypeConstructOnly = GObjectConstructOnly | 'data-type';

export interface GArrowDate32ArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDate32ArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowDate32ArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDate32ArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowDate32DataTypeProps extends GArrowTemporalDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDate32DataTypeConstructOnly = GArrowTemporalDataTypeConstructOnly;

export interface GArrowDate32ScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDate32ScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowDate64ArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDate64ArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowDate64ArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDate64ArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowDate64DataTypeProps extends GArrowTemporalDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDate64DataTypeConstructOnly = GArrowTemporalDataTypeConstructOnly;

export interface GArrowDate64ScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDate64ScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowDatumProps extends GObjectProps {
    datum?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDatumConstructOnly = GObjectConstructOnly | 'datum';

export interface GArrowDayMillisecondProps extends GObjectProps {
    /**
     * The day part value.
     * @since 8.0.0
     * @default 0
     */
    day?: number;
    /**
     * The millisecond part value.
     * @since 8.0.0
     * @default 0
     */
    millisecond?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDayMillisecondConstructOnly = GObjectConstructOnly;

export interface GArrowDayTimeIntervalArrayProps extends GArrowPrimitiveArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDayTimeIntervalArrayConstructOnly = GArrowPrimitiveArrayConstructOnly;

export interface GArrowDayTimeIntervalArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDayTimeIntervalArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowDayTimeIntervalDataTypeProps extends GArrowIntervalDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDayTimeIntervalDataTypeConstructOnly = GArrowIntervalDataTypeConstructOnly;

export interface GArrowDayTimeIntervalScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDayTimeIntervalScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowDecimal128Props extends GObjectProps {
    decimal128?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDecimal128ConstructOnly = GObjectConstructOnly | 'decimal128';

export interface GArrowDecimal128ArrayProps extends GArrowFixedSizeBinaryArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDecimal128ArrayConstructOnly = GArrowFixedSizeBinaryArrayConstructOnly;

export interface GArrowDecimal128ArrayBuilderProps extends GArrowFixedSizeBinaryArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDecimal128ArrayBuilderConstructOnly = GArrowFixedSizeBinaryArrayBuilderConstructOnly;

export interface GArrowDecimal128DataTypeProps extends GArrowDecimalDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDecimal128DataTypeConstructOnly = GArrowDecimalDataTypeConstructOnly;

export interface GArrowDecimal128ScalarProps extends GArrowScalarProps {
    /**
     * The value of the scalar.
     * @since 5.0.0
     */
    value?: Arrow.Decimal128;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDecimal128ScalarConstructOnly = GArrowScalarConstructOnly | 'value';

export interface GArrowDecimal256Props extends GObjectProps {
    decimal256?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDecimal256ConstructOnly = GObjectConstructOnly | 'decimal256';

export interface GArrowDecimal256ArrayProps extends GArrowFixedSizeBinaryArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDecimal256ArrayConstructOnly = GArrowFixedSizeBinaryArrayConstructOnly;

export interface GArrowDecimal256ArrayBuilderProps extends GArrowFixedSizeBinaryArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDecimal256ArrayBuilderConstructOnly = GArrowFixedSizeBinaryArrayBuilderConstructOnly;

export interface GArrowDecimal256DataTypeProps extends GArrowDecimalDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDecimal256DataTypeConstructOnly = GArrowDecimalDataTypeConstructOnly;

export interface GArrowDecimal256ScalarProps extends GArrowScalarProps {
    /**
     * The value of the scalar.
     * @since 5.0.0
     */
    value?: Arrow.Decimal256;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDecimal256ScalarConstructOnly = GArrowScalarConstructOnly | 'value';

export interface GArrowDecimalDataTypeProps extends GArrowFixedSizeBinaryDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDecimalDataTypeConstructOnly = GArrowFixedSizeBinaryDataTypeConstructOnly;

export interface GArrowDenseUnionArrayProps extends GArrowUnionArrayProps {
    'value-offsets'?: Arrow.Int32Array;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDenseUnionArrayConstructOnly = GArrowUnionArrayConstructOnly | 'value-offsets';

export interface GArrowDenseUnionArrayBuilderProps extends GArrowUnionArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDenseUnionArrayBuilderConstructOnly = GArrowUnionArrayBuilderConstructOnly;

export interface GArrowDenseUnionDataTypeProps extends GArrowUnionDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDenseUnionDataTypeConstructOnly = GArrowUnionDataTypeConstructOnly;

export interface GArrowDenseUnionScalarProps extends GArrowUnionScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDenseUnionScalarConstructOnly = GArrowUnionScalarConstructOnly;

export interface GArrowDictionaryArrayProps extends GArrowArrayProps {
    dictionary?: Arrow.Array;
    indices?: Arrow.Array;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDictionaryArrayConstructOnly = GArrowArrayConstructOnly | 'dictionary' | 'indices';

export interface GArrowDictionaryDataTypeProps extends GArrowFixedWidthDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDictionaryDataTypeConstructOnly = GArrowFixedWidthDataTypeConstructOnly;

export interface GArrowDoubleArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDoubleArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowDoubleArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDoubleArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowDoubleDataTypeProps extends GArrowFloatingPointDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDoubleDataTypeConstructOnly = GArrowFloatingPointDataTypeConstructOnly;

export interface GArrowDoubleScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowDoubleScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowEqualOptionsProps extends GObjectProps {
    /**
     * The absolute tolerance for approximate comparison of floating-point values.
     * @since 5.0.0
     * @default 0.000010
     */
    'absolute-tolerance'?: number;
    /**
     * Whether or not approximate comparison is used.
     * @since 5.0.0
     * @default FALSE
     */
    approx?: boolean;
    /**
     * Whether or not NaNs are considered equal.
     * @since 5.0.0
     * @default FALSE
     */
    'nans-equal'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowEqualOptionsConstructOnly = GObjectConstructOnly;

export interface GArrowExecuteContextProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowExecuteContextConstructOnly = GObjectConstructOnly;

export interface GArrowExecuteNodeProps extends GObjectProps {
    node?: never;
    options?: Arrow.ExecuteNodeOptions;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowExecuteNodeConstructOnly = GObjectConstructOnly | 'node' | 'options';

export interface GArrowExecuteNodeOptionsProps extends GObjectProps {
    options?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowExecuteNodeOptionsConstructOnly = GObjectConstructOnly | 'options';

export interface GArrowExecutePlanProps extends GObjectProps {
    plan?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowExecutePlanConstructOnly = GObjectConstructOnly | 'plan';

export interface GArrowExpressionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowExpressionConstructOnly = GObjectConstructOnly;

export interface GArrowExtensionArrayProps extends GArrowArrayProps {
    storage?: Arrow.Array;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowExtensionArrayConstructOnly = GArrowArrayConstructOnly | 'storage';

export interface GArrowExtensionDataTypeProps extends GArrowDataTypeProps {
    'storage-data-type'?: Arrow.DataType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowExtensionDataTypeConstructOnly = GArrowDataTypeConstructOnly | 'storage-data-type';

export interface GArrowExtensionDataTypeRegistryProps extends GObjectProps {
    registry?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowExtensionDataTypeRegistryConstructOnly = GObjectConstructOnly | 'registry';

export interface GArrowExtensionScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowExtensionScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowFeatherFileReaderProps extends GObjectProps {
    'feather-reader'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFeatherFileReaderConstructOnly = GObjectConstructOnly | 'feather-reader';

export interface GArrowFeatherWritePropertiesProps extends GObjectProps {
    /**
     * Compression type to use.
     * @since 0.17.0
     * @default GARROW_COMPRESSION_TYPE_LZO
     */
    compression?: GArrowCompressionTypeNick | Arrow.CompressionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFeatherWritePropertiesConstructOnly = GObjectConstructOnly;

export interface GArrowFieldProps extends GObjectProps {
    'data-type'?: Arrow.DataType;
    field?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFieldConstructOnly = GObjectConstructOnly | 'data-type' | 'field';

export interface GArrowFieldExpressionProps extends GArrowExpressionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFieldExpressionConstructOnly = GArrowExpressionConstructOnly;

export interface GArrowFileProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFileConstructOnly = GObjectConstructOnly;

export interface GArrowFileInfoProps extends GObjectProps {
    /**
     * The time of last modification, if available.
     * @since 0.17.0
     * @default -1
     */
    mtime?: bigint | number;
    /**
     * The full file path in the file system.
     * @since 0.17.0
     */
    path?: string;
    /**
     * The size in bytes, if available Only regular files are guaranteed to have a size.
     * @since 0.17.0
     * @default -1
     */
    size?: bigint | number;
    /**
     * The type of the entry.
     * @since 0.17.0
     * @default GARROW_FILE_TYPE_UNKNOWN
     */
    type?: GArrowFileTypeNick | Arrow.FileType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFileInfoConstructOnly = GObjectConstructOnly;

export interface GArrowFileInputStreamProps extends GArrowSeekableInputStreamProps, GArrowFileProps, GArrowReadableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFileInputStreamConstructOnly = GArrowSeekableInputStreamConstructOnly | GArrowFileConstructOnly | GArrowReadableConstructOnly;

export interface GArrowFileOutputStreamProps extends GArrowOutputStreamProps, GArrowFileProps, GArrowWritableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFileOutputStreamConstructOnly = GArrowOutputStreamConstructOnly | GArrowFileConstructOnly | GArrowWritableConstructOnly;

export interface GArrowFileSelectorProps extends GObjectProps {
    /**
     * The behavior if `base_dir` isn't found in the file system.
     * @since 0.17.0
     * @default FALSE
     */
    'allow-not-found'?: boolean;
    /**
     * The directory in which to select files.
     * @since 0.17.0
     */
    'base-dir'?: string;
    /**
     * The maximum number of subdirectories to recurse into.
     * @since 0.17.0
     * @default 2147483647
     */
    'max-recursion'?: number;
    /**
     * Whether to recurse into subdirectories.
     * @since 0.17.0
     * @default FALSE
     */
    recursive?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFileSelectorConstructOnly = GObjectConstructOnly;

export interface GArrowFileSystemProps extends GObjectProps {
    'file-system'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFileSystemConstructOnly = GObjectConstructOnly | 'file-system';

export interface GArrowFilterNodeOptionsProps extends GArrowExecuteNodeOptionsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFilterNodeOptionsConstructOnly = GArrowExecuteNodeOptionsConstructOnly;

export interface GArrowFilterOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * How to handle filtered values.
     * @since 0.17.0
     * @default GARROW_FILTER_NULL_SELECTION_DROP
     */
    'null-selection-behavior'?: GArrowFilterNullSelectionBehaviorNick | Arrow.FilterNullSelectionBehavior;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFilterOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowFixedSizeBinaryArrayProps extends GArrowPrimitiveArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFixedSizeBinaryArrayConstructOnly = GArrowPrimitiveArrayConstructOnly;

export interface GArrowFixedSizeBinaryArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFixedSizeBinaryArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowFixedSizeBinaryDataTypeProps extends GArrowFixedWidthDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFixedSizeBinaryDataTypeConstructOnly = GArrowFixedWidthDataTypeConstructOnly;

export interface GArrowFixedSizeBinaryScalarProps extends GArrowBaseBinaryScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFixedSizeBinaryScalarConstructOnly = GArrowBaseBinaryScalarConstructOnly;

export interface GArrowFixedWidthDataTypeProps extends GArrowDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFixedWidthDataTypeConstructOnly = GArrowDataTypeConstructOnly;

export interface GArrowFloatArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFloatArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowFloatArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFloatArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowFloatDataTypeProps extends GArrowFloatingPointDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFloatDataTypeConstructOnly = GArrowFloatingPointDataTypeConstructOnly;

export interface GArrowFloatScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFloatScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowFloatingPointDataTypeProps extends GArrowNumericDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFloatingPointDataTypeConstructOnly = GArrowNumericDataTypeConstructOnly;

export interface GArrowFunctionProps extends GObjectProps {
    function?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFunctionConstructOnly = GObjectConstructOnly | 'function';

export interface GArrowFunctionDocProps extends GObjectProps {
    doc?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFunctionDocConstructOnly = GObjectConstructOnly | 'doc';

export interface GArrowFunctionOptionsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowFunctionOptionsConstructOnly = GObjectConstructOnly;

export interface GArrowGCSFileSystemProps extends GArrowFileSystemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowGCSFileSystemConstructOnly = GArrowFileSystemConstructOnly;

export interface GArrowGIOInputStreamProps extends GArrowSeekableInputStreamProps, GArrowFileProps, GArrowReadableProps {
    raw?: Gio.InputStream;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowGIOInputStreamConstructOnly = GArrowSeekableInputStreamConstructOnly | GArrowFileConstructOnly | GArrowReadableConstructOnly | 'raw';

export interface GArrowGIOOutputStreamProps extends GArrowOutputStreamProps, GArrowFileProps, GArrowWritableProps {
    raw?: Gio.OutputStream;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowGIOOutputStreamConstructOnly = GArrowOutputStreamConstructOnly | GArrowFileConstructOnly | GArrowWritableConstructOnly | 'raw';

export interface GArrowHDFSFileSystemProps extends GArrowFileSystemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowHDFSFileSystemConstructOnly = GArrowFileSystemConstructOnly;

export interface GArrowHalfFloatArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowHalfFloatArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowHalfFloatArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowHalfFloatArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowHalfFloatDataTypeProps extends GArrowFloatingPointDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowHalfFloatDataTypeConstructOnly = GArrowFloatingPointDataTypeConstructOnly;

export interface GArrowHalfFloatScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowHalfFloatScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowHashJoinNodeOptionsProps extends GArrowExecuteNodeOptionsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowHashJoinNodeOptionsConstructOnly = GArrowExecuteNodeOptionsConstructOnly;

export interface GArrowISO8601TimestampParserProps extends GArrowTimestampParserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowISO8601TimestampParserConstructOnly = GArrowTimestampParserConstructOnly;

export interface GArrowIndexOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * The value to be compared.
     * @since 12.0.0
     */
    value?: Arrow.Scalar;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowIndexOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowInputStreamProps extends GInputStreamProps, GArrowFileProps, GArrowReadableProps {
    'input-stream'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInputStreamConstructOnly = GInputStreamConstructOnly | GArrowFileConstructOnly | GArrowReadableConstructOnly | 'input-stream';

export interface GArrowInt16ArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt16ArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowInt16ArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt16ArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowInt16DataTypeProps extends GArrowIntegerDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt16DataTypeConstructOnly = GArrowIntegerDataTypeConstructOnly;

export interface GArrowInt16ScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt16ScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowInt32ArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt32ArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowInt32ArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt32ArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowInt32DataTypeProps extends GArrowIntegerDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt32DataTypeConstructOnly = GArrowIntegerDataTypeConstructOnly;

export interface GArrowInt32ScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt32ScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowInt64ArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt64ArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowInt64ArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt64ArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowInt64DataTypeProps extends GArrowIntegerDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt64DataTypeConstructOnly = GArrowIntegerDataTypeConstructOnly;

export interface GArrowInt64ScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt64ScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowInt8ArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt8ArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowInt8ArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt8ArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowInt8DataTypeProps extends GArrowIntegerDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt8DataTypeConstructOnly = GArrowIntegerDataTypeConstructOnly;

export interface GArrowInt8ScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowInt8ScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowIntArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowIntArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowIntegerDataTypeProps extends GArrowNumericDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowIntegerDataTypeConstructOnly = GArrowNumericDataTypeConstructOnly;

export interface GArrowIntervalDataTypeProps extends GArrowTemporalDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowIntervalDataTypeConstructOnly = GArrowTemporalDataTypeConstructOnly;

export interface GArrowJSONReadOptionsProps extends GObjectProps {
    /**
     * Whether objects may be printed across multiple lines (for example pretty printed).
     * @since 0.14.0
     * @default FALSE
     */
    'allow-newlines-in-values'?: boolean;
    /**
     * Block size we request from the IO layer; also determines the size of chunks when #GArrowJSONReadOptions:use-threads is %TRUE.
     * @since 0.14.0
     * @default 1048576
     */
    'block-size'?: number;
    /**
     * Schema for passing custom conversion rules.
     * @since 0.14.0
     */
    schema?: Arrow.Schema;
    /**
     * How to parse handle fields outside the explicit schema.
     * @since 0.14.0
     * @default GARROW_JSON_READ_INFER_TYPE
     */
    'unexpected-field-behavior'?: GArrowJSONReadUnexpectedFieldBehaviorNick | Arrow.JSONReadUnexpectedFieldBehavior;
    /**
     * Whether to use the global CPU thread pool.
     * @since 0.14.0
     * @default TRUE
     */
    'use-threads'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowJSONReadOptionsConstructOnly = GObjectConstructOnly;

export interface GArrowJSONReaderProps extends GObjectProps {
    input?: Arrow.InputStream;
    'json-table-reader'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowJSONReaderConstructOnly = GObjectConstructOnly | 'input' | 'json-table-reader';

export interface GArrowLargeBinaryArrayProps extends GArrowArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLargeBinaryArrayConstructOnly = GArrowArrayConstructOnly;

export interface GArrowLargeBinaryArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLargeBinaryArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowLargeBinaryDataTypeProps extends GArrowDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLargeBinaryDataTypeConstructOnly = GArrowDataTypeConstructOnly;

export interface GArrowLargeBinaryScalarProps extends GArrowBaseBinaryScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLargeBinaryScalarConstructOnly = GArrowBaseBinaryScalarConstructOnly;

export interface GArrowLargeListArrayProps extends GArrowArrayProps {
    'raw-values'?: Arrow.Array;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLargeListArrayConstructOnly = GArrowArrayConstructOnly | 'raw-values';

export interface GArrowLargeListArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLargeListArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowLargeListDataTypeProps extends GArrowDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLargeListDataTypeConstructOnly = GArrowDataTypeConstructOnly;

export interface GArrowLargeListScalarProps extends GArrowBaseListScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLargeListScalarConstructOnly = GArrowBaseListScalarConstructOnly;

export interface GArrowLargeStringArrayProps extends GArrowLargeBinaryArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLargeStringArrayConstructOnly = GArrowLargeBinaryArrayConstructOnly;

export interface GArrowLargeStringArrayBuilderProps extends GArrowLargeBinaryArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLargeStringArrayBuilderConstructOnly = GArrowLargeBinaryArrayBuilderConstructOnly;

export interface GArrowLargeStringDataTypeProps extends GArrowDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLargeStringDataTypeConstructOnly = GArrowDataTypeConstructOnly;

export interface GArrowLargeStringScalarProps extends GArrowBaseBinaryScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLargeStringScalarConstructOnly = GArrowBaseBinaryScalarConstructOnly;

export interface GArrowListArrayProps extends GArrowArrayProps {
    'raw-values'?: Arrow.Array;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowListArrayConstructOnly = GArrowArrayConstructOnly | 'raw-values';

export interface GArrowListArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowListArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowListDataTypeProps extends GArrowDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowListDataTypeConstructOnly = GArrowDataTypeConstructOnly;

export interface GArrowListScalarProps extends GArrowBaseListScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowListScalarConstructOnly = GArrowBaseListScalarConstructOnly;

export interface GArrowLiteralExpressionProps extends GArrowExpressionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLiteralExpressionConstructOnly = GArrowExpressionConstructOnly;

export interface GArrowLocalFileSystemProps extends GArrowFileSystemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLocalFileSystemConstructOnly = GArrowFileSystemConstructOnly;

export interface GArrowLocalFileSystemOptionsProps extends GObjectProps {
    /**
     * Whether open_input_stream and open_input_file return a mmap'ed file, or a regular one.
     * @since 0.17.0
     * @default FALSE
     */
    'use-mmap'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowLocalFileSystemOptionsConstructOnly = GObjectConstructOnly;

export interface GArrowMapArrayProps extends GArrowListArrayProps {
    items?: Arrow.Array;
    keys?: Arrow.Array;
    offsets?: Arrow.Array;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMapArrayConstructOnly = GArrowListArrayConstructOnly | 'items' | 'keys' | 'offsets';

export interface GArrowMapArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMapArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowMapDataTypeProps extends GArrowListDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMapDataTypeConstructOnly = GArrowListDataTypeConstructOnly;

export interface GArrowMapScalarProps extends GArrowBaseListScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMapScalarConstructOnly = GArrowBaseListScalarConstructOnly;

export interface GArrowMatchSubstringOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * Whether to perform a case-insensitive match.
     * @since 12.0.0
     * @default FALSE
     */
    'ignore-case'?: boolean;
    /**
     * The exact substring (or regex, depending on kernel) to look for inside input values.
     * @since 12.0.0
     * @default NULL
     */
    pattern?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMatchSubstringOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowMemoryMappedInputStreamProps extends GArrowSeekableInputStreamProps, GArrowFileProps, GArrowReadableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMemoryMappedInputStreamConstructOnly = GArrowSeekableInputStreamConstructOnly | GArrowFileConstructOnly | GArrowReadableConstructOnly;

export interface GArrowMemoryPoolProps extends GObjectProps {
    'memory-pool'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMemoryPoolConstructOnly = GObjectConstructOnly | 'memory-pool';

export interface GArrowMockFileSystemProps extends GArrowFileSystemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMockFileSystemConstructOnly = GArrowFileSystemConstructOnly;

export interface GArrowMonthDayNanoProps extends GObjectProps {
    /**
     * The day part value.
     * @since 8.0.0
     * @default 0
     */
    day?: number;
    /**
     * The month part value.
     * @since 8.0.0
     * @default 0
     */
    month?: number;
    /**
     * The nanosecond part value.
     * @since 8.0.0
     * @default 0
     */
    nanosecond?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMonthDayNanoConstructOnly = GObjectConstructOnly;

export interface GArrowMonthDayNanoIntervalArrayProps extends GArrowPrimitiveArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMonthDayNanoIntervalArrayConstructOnly = GArrowPrimitiveArrayConstructOnly;

export interface GArrowMonthDayNanoIntervalArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMonthDayNanoIntervalArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowMonthDayNanoIntervalDataTypeProps extends GArrowIntervalDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMonthDayNanoIntervalDataTypeConstructOnly = GArrowIntervalDataTypeConstructOnly;

export interface GArrowMonthDayNanoIntervalScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMonthDayNanoIntervalScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowMonthIntervalArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMonthIntervalArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowMonthIntervalArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMonthIntervalArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowMonthIntervalDataTypeProps extends GArrowIntervalDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMonthIntervalDataTypeConstructOnly = GArrowIntervalDataTypeConstructOnly;

export interface GArrowMonthIntervalScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMonthIntervalScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowMutableBufferProps extends GArrowBufferProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowMutableBufferConstructOnly = GArrowBufferConstructOnly;

export interface GArrowNullArrayProps extends GArrowArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowNullArrayConstructOnly = GArrowArrayConstructOnly;

export interface GArrowNullArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowNullArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowNullDataTypeProps extends GArrowDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowNullDataTypeConstructOnly = GArrowDataTypeConstructOnly;

export interface GArrowNullScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowNullScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowNumericArrayProps extends GArrowPrimitiveArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowNumericArrayConstructOnly = GArrowPrimitiveArrayConstructOnly;

export interface GArrowNumericDataTypeProps extends GArrowFixedWidthDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowNumericDataTypeConstructOnly = GArrowFixedWidthDataTypeConstructOnly;

export interface GArrowORCFileReaderProps extends GObjectProps {
    input?: Arrow.SeekableInputStream;
    'orc-file-reader'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowORCFileReaderConstructOnly = GObjectConstructOnly | 'input' | 'orc-file-reader';

export interface GArrowOutputStreamProps extends GObjectProps, GArrowFileProps, GArrowWritableProps {
    'output-stream'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowOutputStreamConstructOnly = GObjectConstructOnly | GArrowFileConstructOnly | GArrowWritableConstructOnly | 'output-stream';

export interface GArrowPrimitiveArrayProps extends GArrowArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowPrimitiveArrayConstructOnly = GArrowArrayConstructOnly;

export interface GArrowProjectNodeOptionsProps extends GArrowExecuteNodeOptionsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowProjectNodeOptionsConstructOnly = GArrowExecuteNodeOptionsConstructOnly;

export interface GArrowQuantileOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * Interpolation method to use when quantile lies between two data points.
     * @since 9.0.0
     * @default GARROW_QUANTILE_INTERPOLATION_LINEAR
     */
    interpolation?: GArrowQuantileInterpolationNick | Arrow.QuantileInterpolation;
    /**
     * If less than this many non-null values are observed, emit null.
     * @since 9.0.0
     * @default 0
     */
    'min-count'?: number;
    /**
     * If true (the default), null values are ignored.
     * @since 9.0.0
     * @default TRUE
     */
    'skip-nulls'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowQuantileOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowRankOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * Whether nulls and NaNs are placed at the start or at the end.
     * @since 12.0.0
     * @default GARROW_NULL_PLACEMENT_AT_END
     */
    'null-placement'?: GArrowNullPlacementNick | Arrow.NullPlacement;
    /**
     * Tiebreaker for dealing with equal values in ranks.
     * @since 12.0.0
     * @default GARROW_RANK_TIEBREAKER_FIRST
     */
    tiebreaker?: GArrowRankTiebreakerNick | Arrow.RankTiebreaker;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRankOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowReadOptionsProps extends GObjectProps {
    /**
     * The maximum permitted schema nesting depth.
     * @since 1.0.0
     * @default 64
     */
    'max-recursion-depth'?: number;
    /**
     * Whether to use the global CPU thread pool.
     * @since 1.0.0
     * @default TRUE
     */
    'use-threads'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowReadOptionsConstructOnly = GObjectConstructOnly;

export interface GArrowReadableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowReadableConstructOnly = GObjectConstructOnly;

export interface GArrowRecordBatchProps extends GObjectProps {
    'record-batch'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRecordBatchConstructOnly = GObjectConstructOnly | 'record-batch';

export interface GArrowRecordBatchBuilderProps extends GObjectProps {
    'record-batch-builder'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRecordBatchBuilderConstructOnly = GObjectConstructOnly | 'record-batch-builder';

export interface GArrowRecordBatchDatumProps extends GArrowDatumProps {
    value?: Arrow.RecordBatch;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRecordBatchDatumConstructOnly = GArrowDatumConstructOnly | 'value';

export interface GArrowRecordBatchFileReaderProps extends GObjectProps {
    'record-batch-file-reader'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRecordBatchFileReaderConstructOnly = GObjectConstructOnly | 'record-batch-file-reader';

export interface GArrowRecordBatchFileWriterProps extends GArrowRecordBatchStreamWriterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRecordBatchFileWriterConstructOnly = GArrowRecordBatchStreamWriterConstructOnly;

export interface GArrowRecordBatchIteratorProps extends GObjectProps {
    iterator?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRecordBatchIteratorConstructOnly = GObjectConstructOnly | 'iterator';

export interface GArrowRecordBatchReaderProps extends GObjectProps {
    'record-batch-reader'?: never;
    sources?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRecordBatchReaderConstructOnly = GObjectConstructOnly | 'record-batch-reader' | 'sources';

export interface GArrowRecordBatchStreamReaderProps extends GArrowRecordBatchReaderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRecordBatchStreamReaderConstructOnly = GArrowRecordBatchReaderConstructOnly;

export interface GArrowRecordBatchStreamWriterProps extends GArrowRecordBatchWriterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRecordBatchStreamWriterConstructOnly = GArrowRecordBatchWriterConstructOnly;

export interface GArrowRecordBatchWriterProps extends GObjectProps {
    'record-batch-writer'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRecordBatchWriterConstructOnly = GObjectConstructOnly | 'record-batch-writer';

export interface GArrowResizableBufferProps extends GArrowMutableBufferProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowResizableBufferConstructOnly = GArrowMutableBufferConstructOnly;

export interface GArrowRoundOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * The rounding and tie-breaking mode.
     * @since 7.0.0
     * @default GARROW_ROUND_HALF_TO_EVEN
     */
    mode?: GArrowRoundModeNick | Arrow.RoundMode;
    /**
     * The rounding precision (number of digits to round to).
     * @since 7.0.0
     * @default 0
     */
    'n-digits'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRoundOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowRoundToMultipleOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * The rounding and tie-breaking mode.
     * @since 7.0.0
     * @default GARROW_ROUND_HALF_TO_EVEN
     */
    mode?: GArrowRoundModeNick | Arrow.RoundMode;
    /**
     * The rounding scale (multiple to round to).
     * @since 7.0.0
     */
    multiple?: Arrow.Scalar;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRoundToMultipleOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowRunEndEncodeOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * The data type for run-end.
     * @since 13.0.0
     */
    'run-end-data-type'?: Arrow.DataType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRunEndEncodeOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowRunEndEncodedArrayProps extends GArrowArrayProps {
    'run-ends'?: Arrow.Array;
    values?: Arrow.Array;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRunEndEncodedArrayConstructOnly = GArrowArrayConstructOnly | 'run-ends' | 'values';

export interface GArrowRunEndEncodedDataTypeProps extends GArrowFixedWidthDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowRunEndEncodedDataTypeConstructOnly = GArrowFixedWidthDataTypeConstructOnly;

export interface GArrowS3FileSystemProps extends GArrowFileSystemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowS3FileSystemConstructOnly = GArrowFileSystemConstructOnly;

export interface GArrowS3GlobalOptionsProps extends GObjectProps {
    /**
     * The log level of S3 APIs.
     * @since 7.0.0
     * @default GARROW_S3_LOG_LEVEL_FATAL
     */
    'log-level'?: GArrowS3LogLevelNick | Arrow.S3LogLevel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowS3GlobalOptionsConstructOnly = GObjectConstructOnly;

export interface GArrowScalarProps extends GObjectProps {
    /**
     * The data type of the scalar.
     * @since 5.0.0
     */
    'data-type'?: Arrow.DataType;
    scalar?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowScalarConstructOnly = GObjectConstructOnly | 'data-type' | 'scalar';

export interface GArrowScalarAggregateOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * The minimum required number of values.
     * @since 5.0.0
     * @default 1
     */
    'min-count'?: number;
    /**
     * Whether NULLs are skipped or not.
     * @since 5.0.0
     * @default TRUE
     */
    'skip-nulls'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowScalarAggregateOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowScalarDatumProps extends GArrowDatumProps {
    value?: Arrow.Scalar;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowScalarDatumConstructOnly = GArrowDatumConstructOnly | 'value';

export interface GArrowSchemaProps extends GObjectProps {
    schema?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSchemaConstructOnly = GObjectConstructOnly | 'schema';

export interface GArrowSeekableInputStreamProps extends GArrowInputStreamProps, GArrowFileProps, GArrowReadableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSeekableInputStreamConstructOnly = GArrowInputStreamConstructOnly | GArrowFileConstructOnly | GArrowReadableConstructOnly;

export interface GArrowSetLookupOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * Whether NULLs are skipped or not.
     * @since 6.0.0
     * @default FALSE
     */
    'skip-nulls'?: boolean;
    /**
     * The set of values to look up input values into.
     * @since 6.0.0
     */
    'value-set'?: Arrow.Datum;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSetLookupOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowSinkNodeOptionsProps extends GArrowExecuteNodeOptionsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSinkNodeOptionsConstructOnly = GArrowExecuteNodeOptionsConstructOnly;

export interface GArrowSlowFileSystemProps extends GArrowFileSystemProps {
    'base-file-system'?: Arrow.FileSystem;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSlowFileSystemConstructOnly = GArrowFileSystemConstructOnly | 'base-file-system';

export interface GArrowSortKeyProps extends GObjectProps {
    /**
     * How to order values.
     * @since 3.0.0
     * @default GARROW_SORT_ORDER_ASCENDING
     */
    order?: GArrowSortOrderNick | Arrow.SortOrder;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSortKeyConstructOnly = GObjectConstructOnly | 'order';

export interface GArrowSortOptionsProps extends GArrowFunctionOptionsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSortOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowSourceNodeOptionsProps extends GArrowExecuteNodeOptionsProps {
    reader?: Arrow.RecordBatchReader;
    'record-batch'?: Arrow.RecordBatch;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSourceNodeOptionsConstructOnly = GArrowExecuteNodeOptionsConstructOnly | 'reader' | 'record-batch';

export interface GArrowSparseUnionArrayProps extends GArrowUnionArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSparseUnionArrayConstructOnly = GArrowUnionArrayConstructOnly;

export interface GArrowSparseUnionArrayBuilderProps extends GArrowUnionArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSparseUnionArrayBuilderConstructOnly = GArrowUnionArrayBuilderConstructOnly;

export interface GArrowSparseUnionDataTypeProps extends GArrowUnionDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSparseUnionDataTypeConstructOnly = GArrowUnionDataTypeConstructOnly;

export interface GArrowSparseUnionScalarProps extends GArrowUnionScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSparseUnionScalarConstructOnly = GArrowUnionScalarConstructOnly;

export interface GArrowSplitPatternOptionsProps extends GArrowFunctionOptionsProps {
    /** @default -1 */
    'max-splits'?: bigint | number;
    /**
     * The exact substring to split on.
     * @since 16.0.0
     */
    pattern?: string;
    /**
     * Start splitting from the end of the string (only relevant when max_splits != -1)
     * @since 16.0.0
     * @default FALSE
     */
    reverse?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSplitPatternOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowStrftimeOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * The desired format string.
     * @since 16.0.0
     * @default %Y-%m-%dT%H:%M:%S
     */
    format?: string;
    /**
     * The desired output locale string.
     * @since 16.0.0
     * @default C
     */
    locale?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowStrftimeOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowStringArrayProps extends GArrowBinaryArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowStringArrayConstructOnly = GArrowBinaryArrayConstructOnly;

export interface GArrowStringArrayBuilderProps extends GArrowBinaryArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowStringArrayBuilderConstructOnly = GArrowBinaryArrayBuilderConstructOnly;

export interface GArrowStringDataTypeProps extends GArrowDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowStringDataTypeConstructOnly = GArrowDataTypeConstructOnly;

export interface GArrowStringDictionaryArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowStringDictionaryArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowStringScalarProps extends GArrowBaseBinaryScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowStringScalarConstructOnly = GArrowBaseBinaryScalarConstructOnly;

export interface GArrowStrptimeOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * Return null on parsing errors if true or raise if false.
     * @since 16.0.0
     * @default FALSE
     */
    'error-is-null'?: boolean;
    /**
     * The desired format string.
     * @since 16.0.0
     */
    format?: string;
    /**
     * The desired time resolution.
     * @since 16.0.0
     * @default GARROW_TIME_UNIT_MICRO
     */
    unit?: GArrowTimeUnitNick | Arrow.TimeUnit;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowStrptimeOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowStrptimeTimestampParserProps extends GArrowTimestampParserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowStrptimeTimestampParserConstructOnly = GArrowTimestampParserConstructOnly;

export interface GArrowStructArrayProps extends GArrowArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowStructArrayConstructOnly = GArrowArrayConstructOnly;

export interface GArrowStructArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowStructArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowStructDataTypeProps extends GArrowDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowStructDataTypeConstructOnly = GArrowDataTypeConstructOnly;

export interface GArrowStructFieldOptionsProps extends GArrowFunctionOptionsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowStructFieldOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowStructScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowStructScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowSubTreeFileSystemProps extends GArrowFileSystemProps {
    'base-file-system'?: Arrow.FileSystem;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowSubTreeFileSystemConstructOnly = GArrowFileSystemConstructOnly | 'base-file-system';

export interface GArrowTableProps extends GObjectProps {
    table?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTableConstructOnly = GObjectConstructOnly | 'table';

export interface GArrowTableBatchReaderProps extends GArrowRecordBatchReaderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTableBatchReaderConstructOnly = GArrowRecordBatchReaderConstructOnly;

export interface GArrowTableConcatenateOptionsProps extends GObjectProps {
    /**
     * If true, a #GArrowField of #GArrowNullDataType can be unified with a #GArrowField of another type.
     * @since 6.0.0
     * @default TRUE
     */
    'promote-nullability'?: boolean;
    /**
     * If true, the schemas of the tables will be first unified with fields of the same name being merged, according to #GArrowTableConcatenateOptions:promote-nullability, then each table will be promoted t…
     * @since 6.0.0
     * @default FALSE
     */
    'unify-schemas'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTableConcatenateOptionsConstructOnly = GObjectConstructOnly;

export interface GArrowTableDatumProps extends GArrowDatumProps {
    value?: Arrow.Table;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTableDatumConstructOnly = GArrowDatumConstructOnly | 'value';

export interface GArrowTakeOptionsProps extends GArrowFunctionOptionsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTakeOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowTemporalDataTypeProps extends GArrowFixedWidthDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTemporalDataTypeConstructOnly = GArrowFixedWidthDataTypeConstructOnly;

export interface GArrowTensorProps extends GObjectProps {
    buffer?: Arrow.Buffer;
    tensor?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTensorConstructOnly = GObjectConstructOnly | 'buffer' | 'tensor';

export interface GArrowTime32ArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTime32ArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowTime32ArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTime32ArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowTime32DataTypeProps extends GArrowTimeDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTime32DataTypeConstructOnly = GArrowTimeDataTypeConstructOnly;

export interface GArrowTime32ScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTime32ScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowTime64ArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTime64ArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowTime64ArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTime64ArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowTime64DataTypeProps extends GArrowTimeDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTime64DataTypeConstructOnly = GArrowTimeDataTypeConstructOnly;

export interface GArrowTime64ScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTime64ScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowTimeDataTypeProps extends GArrowTemporalDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTimeDataTypeConstructOnly = GArrowTemporalDataTypeConstructOnly;

export interface GArrowTimestampArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTimestampArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowTimestampArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTimestampArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowTimestampDataTypeProps extends GArrowTemporalDataTypeProps {
    /**
     * The time zone of this data type.
     * @since 16.0.0
     */
    'time-zone'?: GLib.TimeZone;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTimestampDataTypeConstructOnly = GArrowTemporalDataTypeConstructOnly | 'time-zone';

export interface GArrowTimestampParserProps extends GObjectProps {
    parser?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTimestampParserConstructOnly = GObjectConstructOnly | 'parser';

export interface GArrowTimestampScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowTimestampScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowUInt16ArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt16ArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowUInt16ArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt16ArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowUInt16DataTypeProps extends GArrowIntegerDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt16DataTypeConstructOnly = GArrowIntegerDataTypeConstructOnly;

export interface GArrowUInt16ScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt16ScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowUInt32ArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt32ArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowUInt32ArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt32ArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowUInt32DataTypeProps extends GArrowIntegerDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt32DataTypeConstructOnly = GArrowIntegerDataTypeConstructOnly;

export interface GArrowUInt32ScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt32ScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowUInt64ArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt64ArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowUInt64ArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt64ArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowUInt64DataTypeProps extends GArrowIntegerDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt64DataTypeConstructOnly = GArrowIntegerDataTypeConstructOnly;

export interface GArrowUInt64ScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt64ScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowUInt8ArrayProps extends GArrowNumericArrayProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt8ArrayConstructOnly = GArrowNumericArrayConstructOnly;

export interface GArrowUInt8ArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt8ArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowUInt8DataTypeProps extends GArrowIntegerDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt8DataTypeConstructOnly = GArrowIntegerDataTypeConstructOnly;

export interface GArrowUInt8ScalarProps extends GArrowScalarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUInt8ScalarConstructOnly = GArrowScalarConstructOnly;

export interface GArrowUIntArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUIntArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowUTF8NormalizeOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * The Unicode normalization form to apply.
     * @since 8.0.0
     * @default GARROW_UTF8_NORMALIZE_FORM_NFC
     */
    form?: GArrowUTF8NormalizeFormNick | Arrow.UTF8NormalizeForm;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUTF8NormalizeOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowUnionArrayProps extends GArrowArrayProps {
    'type-ids'?: Arrow.Int8Array;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUnionArrayConstructOnly = GArrowArrayConstructOnly | 'type-ids';

export interface GArrowUnionArrayBuilderProps extends GArrowArrayBuilderProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUnionArrayBuilderConstructOnly = GArrowArrayBuilderConstructOnly;

export interface GArrowUnionDataTypeProps extends GArrowDataTypeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUnionDataTypeConstructOnly = GArrowDataTypeConstructOnly;

export interface GArrowUnionScalarProps extends GArrowScalarProps {
    /**
     * The value of the scalar.
     * @since 5.0.0
     */
    value?: Arrow.Scalar;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowUnionScalarConstructOnly = GArrowScalarConstructOnly | 'value';

export interface GArrowVarianceOptionsProps extends GArrowFunctionOptionsProps {
    /**
     * The Delta Degrees of Freedom (ddof) to be used.
     * @since 6.0.0
     * @default 0
     */
    ddof?: number;
    /**
     * If less than this many non-null values are observed, emit null.
     * @since 6.0.0
     * @default 0
     */
    'min-count'?: number;
    /**
     * Whether NULLs are skipped or not.
     * @since 6.0.0
     * @default TRUE
     */
    'skip-nulls'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowVarianceOptionsConstructOnly = GArrowFunctionOptionsConstructOnly;

export interface GArrowWritableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowWritableConstructOnly = GObjectConstructOnly;

export interface GArrowWriteOptionsProps extends GObjectProps {
    /**
     * Write padding after memory buffers to this multiple of bytes.
     * @since 1.0.0
     * @default 8
     */
    alignment?: number;
    /**
     * Whether to allow field lengths that don't fit in a signed 32-bit int.
     * @since 1.0.0
     * @default FALSE
     */
    'allow-64bit'?: boolean;
    /**
     * Codec to use for compressing and decompressing record batch body buffers.
     * @since 2.0.0
     */
    codec?: Arrow.Codec;
    /**
     * The maximum permitted schema nesting depth.
     * @since 1.0.0
     * @default 64
     */
    'max-recursion-depth'?: number;
    /**
     * Whether to use the global CPU thread pool.
     * @since 1.0.0
     * @default TRUE
     */
    'use-threads'?: boolean;
    /**
     * Whether to write the pre-0.15.0 encapsulated IPC message format consisting of a 4-byte prefix instead of 8 byte.
     * @since 1.0.0
     * @default FALSE
     */
    'write-legacy-ipc-format'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GArrowWriteOptionsConstructOnly = GObjectConstructOnly;

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {

}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's own type.
 *
 * `PROP_ENUMS` one case wider, and separate on purpose: that table promises the GType it names
 * has NUMBERS, and this one promises only that the GType is the property's. A host inferring a
 * type from a property — the middle of an uncast lookup chain, an uncast closure's return type —
 * reads this one; a host resolving a nick to a number reads that one.
 *
 * Absent means no GType can be stated, not that the property is scalar: `gchararray` is carried
 * like any other, so absence is readable as "unknown".
 */
export const PROP_TYPES: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
