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
import type Arrow from '@girs/arrow-23.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Parquet {
    /**
     * Parquet-23.0
     */

    /**
     * The major version.
     * @since 17.0.0
     */
    const VERSION_MAJOR: number;
    /**
     * The micro version.
     * @since 17.0.0
     */
    const VERSION_MICRO: number;
    /**
     * The minor version.
     * @since 17.0.0
     */
    const VERSION_MINOR: number;
    /**
     * The version tag. Normally, it's an empty string. It's "SNAPSHOT"
     * for snapshot version.
     * @since 17.0.0
     */
    const VERSION_TAG: string;
    namespace ArrowFileReader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::arrow-file-reader': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            arrow_file_reader: any;
            arrowFileReader: any;
        }
    }

    /**
     * @gir-type Class
     */
    class ArrowFileReader extends GObject.Object {
        static $gtype: GObject.GType<ArrowFileReader>;

        // Properties

        /**
         * @construct-only
         */
        set arrow_file_reader(val: any);
        /**
         * @construct-only
         */
        set arrowFileReader(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ArrowFileReader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ArrowFileReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_arrow(source: Arrow.SeekableInputStream): ArrowFileReader;

        static new_path(path: string): ArrowFileReader;

        // Signals

        /** @signal */
        connect<K extends keyof ArrowFileReader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ArrowFileReader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ArrowFileReader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ArrowFileReader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ArrowFileReader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ArrowFileReader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Close the reader.
         */
        close(): void;
        /**
         * @returns The metadata.
         */
        get_metadata(): FileMetadata;
        /**
         * @returns The number of row groups.
         */
        get_n_row_groups(): number;
        /**
         * @returns The number of rows.
         */
        get_n_rows(): number;
        /**
         * @returns A got {@link Arrow.Schema}.
         */
        get_schema(): Arrow.Schema | null;
        /**
         * @param i The index of the column to be read.   If an index is negative, the index is counted backward from the   end of the columns. `-1` means the last column.
         * @returns A read {@link Arrow.ChunkedArray}.
         */
        read_column_data(i: number): Arrow.ChunkedArray | null;
        /**
         * @param row_group_index A row group index to be read.
         * @param column_indices Column indices to be read. `null` means that all columns are read.   If an index is negative, the index is counted backward from the   end of the columns. `-1` means the last column.
         * @returns A read {@link Arrow.Table}.
         */
        read_row_group(row_group_index: number, column_indices?: number[] | null): Arrow.Table | null;
        /**
         * @returns A read {@link Arrow.Table}.
         */
        read_table(): Arrow.Table | null;
        /**
         * @param use_threads
         */
        set_use_threads(use_threads: boolean): void;
    }

    namespace ArrowFileWriter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::arrow-file-writer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            arrow_file_writer: any;
            arrowFileWriter: any;
        }
    }

    /**
     * @gir-type Class
     */
    class ArrowFileWriter extends GObject.Object {
        static $gtype: GObject.GType<ArrowFileWriter>;

        // Properties

        /**
         * @construct-only
         */
        set arrow_file_writer(val: any);
        /**
         * @construct-only
         */
        set arrowFileWriter(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ArrowFileWriter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ArrowFileWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_arrow(
            schema: Arrow.Schema,
            sink: Arrow.OutputStream,
            writer_properties?: WriterProperties | null,
        ): ArrowFileWriter;

        static new_path(
            schema: Arrow.Schema,
            path: string,
            writer_properties?: WriterProperties | null,
        ): ArrowFileWriter;

        // Signals

        /** @signal */
        connect<K extends keyof ArrowFileWriter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ArrowFileWriter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ArrowFileWriter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ArrowFileWriter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ArrowFileWriter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ArrowFileWriter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns `true` on success, `false` if there was an error.
         */
        close(): boolean;
        /**
         * @returns The schema to be written to.
         */
        get_schema(): Arrow.Schema;
        /**
         * Start a new buffered row group.
         * @returns `true` on success, `false` if there was an error.
         */
        new_buffered_row_group(): boolean;
        /**
         * Start a new row group.
         * @returns `true` on success, `false` if there was an error.
         */
        new_row_group(): boolean;
        /**
         * Start a chunked array as a column chunk.
         * @param chunked_array A {@link Arrow.ChunkedArray} to be written.
         * @returns `true` on success, `false` if there was an error.
         */
        write_chunked_array(chunked_array: Arrow.ChunkedArray): boolean;
        /**
         * Write a record batch into the buffered row group.
         *
         * Multiple record batches can be written into the same row group
         * through this function.
         *
         * `gparquet_writer_properties_get_max_row_group_length()` is respected
         * and a new row group will be created if the current row group
         * exceeds the limit.
         *
         * Record batches get flushed to the output stream once
         * `gparquet_file_writer_new_buffered_row_group()` or
         * `gparquet_file_writer_close()` is called.
         * @param record_batch A record batch to be written.
         * @returns `true` on success, `false` if there was an error.
         */
        write_record_batch(record_batch: Arrow.RecordBatch): boolean;
        /**
         * @param table A table to be written.
         * @param chunk_size The max number of rows in a row group.
         * @returns `true` on success, `false` if there was an error.
         */
        write_table(table: Arrow.Table, chunk_size: number): boolean;
    }

    namespace BooleanStatistics {
        // Signal signatures
        interface SignalSignatures extends Statistics.SignalSignatures {
            'notify::statistics': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class BooleanStatistics extends Statistics {
        static $gtype: GObject.GType<BooleanStatistics>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BooleanStatistics.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BooleanStatistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BooleanStatistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BooleanStatistics.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BooleanStatistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BooleanStatistics.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BooleanStatistics.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BooleanStatistics.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The maximum value.
         */
        get_max(): boolean;
        /**
         * @returns The minimum value.
         */
        get_min(): boolean;
    }

    namespace ByteArrayStatistics {
        // Signal signatures
        interface SignalSignatures extends Statistics.SignalSignatures {
            'notify::statistics': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ByteArrayStatistics extends Statistics {
        static $gtype: GObject.GType<ByteArrayStatistics>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ByteArrayStatistics.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ByteArrayStatistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ByteArrayStatistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ByteArrayStatistics.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ByteArrayStatistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ByteArrayStatistics.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ByteArrayStatistics.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ByteArrayStatistics.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The maximum value.
         */
        get_max(): GLib.Bytes;
        /**
         * @returns The minimum value.
         */
        get_min(): GLib.Bytes;
    }

    namespace ColumnChunkMetadata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::metadata': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            metadata: any;
            owner: RowGroupMetadata;
        }
    }

    /**
     * @gir-type Class
     */
    class ColumnChunkMetadata extends GObject.Object {
        static $gtype: GObject.GType<ColumnChunkMetadata>;

        // Properties

        /**
         * @construct-only
         */
        set metadata(val: any);
        /**
         * @construct-only
         */
        set owner(val: RowGroupMetadata);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColumnChunkMetadata.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ColumnChunkMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ColumnChunkMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColumnChunkMetadata.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ColumnChunkMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColumnChunkMetadata.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ColumnChunkMetadata.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ColumnChunkMetadata.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns `true` if all of the column chunk can be decompressed,   `false` otherwise.
         */
        can_decompress(): boolean;
        /**
         * @param other_metadata A {@link Parquet.ColumnChunkMetadata}.
         * @returns `true` if both of them have the same data, `false`   otherwise.
         */
        equal(other_metadata: ColumnChunkMetadata): boolean;
        /**
         * @returns Byte offset from beginning of file to first page (data or   dictionary) in this column chunk.
         */
        get_file_offset(): number;
        /**
         * @returns The statistics of this column chunk if   it's set, `null` otherwise.
         */
        get_statistics(): Statistics | null;
        /**
         * @returns Total byte size of all the compressed (and potentially   encrypted) data in this column chunk.
         */
        get_total_compressed_size(): number;
        /**
         * @returns Total byte size of all the uncompressed data in this   column chunk.
         */
        get_total_size(): number;
    }

    namespace DoubleStatistics {
        // Signal signatures
        interface SignalSignatures extends Statistics.SignalSignatures {
            'notify::statistics': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DoubleStatistics extends Statistics {
        static $gtype: GObject.GType<DoubleStatistics>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DoubleStatistics.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DoubleStatistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DoubleStatistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DoubleStatistics.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DoubleStatistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DoubleStatistics.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DoubleStatistics.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DoubleStatistics.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The maximum value.
         */
        get_max(): number;
        /**
         * @returns The minimum value.
         */
        get_min(): number;
    }

    namespace FileMetadata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::metadata': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            metadata: any;
        }
    }

    /**
     * @gir-type Class
     */
    class FileMetadata extends GObject.Object {
        static $gtype: GObject.GType<FileMetadata>;

        // Properties

        /**
         * @construct-only
         */
        set metadata(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileMetadata.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FileMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileMetadata.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileMetadata.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileMetadata.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileMetadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns `true` if all of the row groups can be decompressed, `false`   otherwise.   This will return false if any of the RowGroup's page is   compressed with a compression format which is not compiled in the   current Parquet library.
         */
        can_decompress(): boolean;
        /**
         * @param other_metadata A {@link Parquet.FileMetadata}.
         * @returns `true` if both of them have the same data, `false`   otherwise.
         */
        equal(other_metadata: FileMetadata): boolean;
        /**
         * @returns The application's user-agent string of the writer.
         */
        get_created_by(): string;
        /**
         * @returns The number of top-level columns in the schema.   Parquet thrift definition requires that nested schema elements are   flattened. This method returns the number of columns in the un-flattened   version.
         */
        get_n_columns(): number;
        /**
         * @returns The number of row groups in the file.
         */
        get_n_row_groups(): number;
        /**
         * @returns The total number of rows.
         */
        get_n_rows(): number;
        /**
         * @returns The number of flattened schema elements.   Parquet thrift definition requires that nested schema elements are   flattened. This method returns the total number of elements in the   flattened list.
         */
        get_n_schema_elements(): number;
        /**
         * @param index An index of the row group to retrieve.
         * @returns A {@link Parquet.RowGroupMetadata}   at `index` on success, `null` on error.
         */
        get_row_group(index: number): RowGroupMetadata | null;
        /**
         * @returns The size of the original thrift encoded metadata footer.
         */
        get_size(): number;
    }

    namespace FixedLengthByteArrayStatistics {
        // Signal signatures
        interface SignalSignatures extends Statistics.SignalSignatures {
            'notify::statistics': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FixedLengthByteArrayStatistics extends Statistics {
        static $gtype: GObject.GType<FixedLengthByteArrayStatistics>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FixedLengthByteArrayStatistics.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FixedLengthByteArrayStatistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FixedLengthByteArrayStatistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FixedLengthByteArrayStatistics.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FixedLengthByteArrayStatistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FixedLengthByteArrayStatistics.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FixedLengthByteArrayStatistics.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FixedLengthByteArrayStatistics.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The maximum value.
         */
        get_max(): GLib.Bytes;
        /**
         * @returns The minimum value.
         */
        get_min(): GLib.Bytes;
    }

    namespace FloatStatistics {
        // Signal signatures
        interface SignalSignatures extends Statistics.SignalSignatures {
            'notify::statistics': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FloatStatistics extends Statistics {
        static $gtype: GObject.GType<FloatStatistics>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FloatStatistics.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FloatStatistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FloatStatistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FloatStatistics.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FloatStatistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FloatStatistics.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FloatStatistics.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FloatStatistics.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The maximum value.
         */
        get_max(): number;
        /**
         * @returns The minimum value.
         */
        get_min(): number;
    }

    namespace Int32Statistics {
        // Signal signatures
        interface SignalSignatures extends Statistics.SignalSignatures {
            'notify::statistics': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Int32Statistics extends Statistics {
        static $gtype: GObject.GType<Int32Statistics>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Int32Statistics.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Int32Statistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Int32Statistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Int32Statistics.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Int32Statistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Int32Statistics.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Int32Statistics.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Int32Statistics.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The maximum value.
         */
        get_max(): number;
        /**
         * @returns The minimum value.
         */
        get_min(): number;
    }

    namespace Int64Statistics {
        // Signal signatures
        interface SignalSignatures extends Statistics.SignalSignatures {
            'notify::statistics': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Int64Statistics extends Statistics {
        static $gtype: GObject.GType<Int64Statistics>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Int64Statistics.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Int64Statistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Int64Statistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Int64Statistics.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Int64Statistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Int64Statistics.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Int64Statistics.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Int64Statistics.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The maximum value.
         */
        get_max(): number;
        /**
         * @returns The minimum value.
         */
        get_min(): number;
    }

    namespace RowGroupMetadata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::metadata': (pspec: GObject.ParamSpec) => void;
            'notify::owner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            metadata: any;
            owner: FileMetadata;
        }
    }

    /**
     * @gir-type Class
     */
    class RowGroupMetadata extends GObject.Object {
        static $gtype: GObject.GType<RowGroupMetadata>;

        // Properties

        /**
         * @construct-only
         */
        set metadata(val: any);
        /**
         * @construct-only
         */
        set owner(val: FileMetadata);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RowGroupMetadata.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RowGroupMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof RowGroupMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RowGroupMetadata.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RowGroupMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RowGroupMetadata.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RowGroupMetadata.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RowGroupMetadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns `true` if all of the row group's column chunks can be   decompressed, `false` otherwise.
         */
        can_decompress(): boolean;
        /**
         * @param other_metadata A {@link Parquet.RowGroupMetadata}.
         * @returns `true` if both of them have the same data, `false`   otherwise.
         */
        equal(other_metadata: RowGroupMetadata): boolean;
        /**
         * @param index An index of the column chunk to retrieve.
         * @returns A {@link Parquet.ColumnChunkMetadata}   at `index` on success, `null` on error.
         */
        get_column_chunk(index: number): ColumnChunkMetadata | null;
        /**
         * @returns Byte offset from beginning of file to first page (data or   dictionary) in this row group.   The `file_offset` field that this method exposes is   optional. This method will return 0 if that field is not set to a   meaningful value.
         */
        get_file_offset(): number;
        /**
         * @returns The number of columns in this row group. The order must   match the parent's column ordering.
         */
        get_n_columns(): number;
        /**
         * @returns The number of rows in this row group.
         */
        get_n_rows(): number;
        /**
         * @returns Total byte size of all the compressed (and potentially   encrypted) column data in this row group.
         */
        get_total_compressed_size(): number;
        /**
         * @returns Total byte size of all the uncompressed column data in   this row group.
         */
        get_total_size(): number;
    }

    namespace Statistics {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::statistics': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            statistics: any;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Statistics extends GObject.Object {
        static $gtype: GObject.GType<Statistics>;

        // Properties

        /**
         * @construct-only
         */
        set statistics(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Statistics.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Statistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Statistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Statistics.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Statistics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Statistics.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Statistics.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Statistics.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param other_statistics A {@link Parquet.Statistics}.
         * @returns `true` if both of them have the same data, `false`   otherwise.
         */
        equal(other_statistics: Statistics): boolean;
        /**
         * @returns The number of distinct values.
         */
        get_n_distinct_values(): number;
        /**
         * @returns The number of null values.
         */
        get_n_nulls(): number;
        /**
         * @returns The number of values.
         */
        get_n_values(): number;
        /**
         * @returns `true` if the min and max statistics are set, `false` otherwise.
         */
        has_min_max(): boolean;
        /**
         * @returns `true` if the number of distinct values is set, `false` otherwise.
         */
        has_n_distinct_values(): boolean;
        /**
         * @returns `true` if the number of null values is set, `false` otherwise.
         */
        has_n_nulls(): boolean;
    }

    namespace WriterProperties {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class WriterProperties extends GObject.Object {
        static $gtype: GObject.GType<WriterProperties>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WriterProperties.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WriterProperties.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WriterProperties;

        // Signals

        /** @signal */
        connect<K extends keyof WriterProperties.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WriterProperties.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WriterProperties.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WriterProperties.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WriterProperties.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WriterProperties.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param path The column path as dot string.
         */
        disable_dictionary(path?: string | null): void;
        /**
         * @param path The column path as dot string.
         */
        enable_dictionary(path?: string | null): void;
        /**
         * @returns The batch size.
         */
        get_batch_size(): number;
        /**
         * @param path The path as dot string.
         * @returns The compression type of {@link Parquet.WriterProperties}.
         */
        get_compression_path(path: string): Arrow.CompressionType;
        /**
         * @returns The data page size.
         */
        get_data_page_size(): number;
        /**
         * @returns The dictionary page size limit.
         */
        get_dictionary_page_size_limit(): number;
        /**
         * @returns The max row group length.
         */
        get_max_row_group_length(): number;
        /**
         * @param path The path as dot string.
         * @returns `true` on dictionary enabled, `false` on dictionary disabled.
         */
        is_dictionary_enabled(path: string): boolean;
        /**
         * @param batch_size The batch size.
         */
        set_batch_size(batch_size: number): void;
        /**
         * @param compression_type A {@link Arrow.CompressionType}.
         * @param path The column path as dot string.
         */
        set_compression(compression_type: Arrow.CompressionType | null, path?: string | null): void;
        /**
         * @param data_page_size The data page size.
         */
        set_data_page_size(data_page_size: number): void;
        /**
         * @param limit The dictionary page size limit.
         */
        set_dictionary_page_size_limit(limit: number): void;
        /**
         * @param length The max row group length.
         */
        set_max_row_group_length(length: number): void;
    }

    /**
     * @gir-type Alias
     */
    type ArrowFileReaderClass = typeof ArrowFileReader;
    /**
     * @gir-type Alias
     */
    type ArrowFileWriterClass = typeof ArrowFileWriter;
    /**
     * @gir-type Alias
     */
    type BooleanStatisticsClass = typeof BooleanStatistics;
    /**
     * @gir-type Alias
     */
    type ByteArrayStatisticsClass = typeof ByteArrayStatistics;
    /**
     * @gir-type Alias
     */
    type ColumnChunkMetadataClass = typeof ColumnChunkMetadata;
    /**
     * @gir-type Alias
     */
    type DoubleStatisticsClass = typeof DoubleStatistics;
    /**
     * @gir-type Alias
     */
    type FileMetadataClass = typeof FileMetadata;
    /**
     * @gir-type Alias
     */
    type FixedLengthByteArrayStatisticsClass = typeof FixedLengthByteArrayStatistics;
    /**
     * @gir-type Alias
     */
    type FloatStatisticsClass = typeof FloatStatistics;
    /**
     * @gir-type Alias
     */
    type Int32StatisticsClass = typeof Int32Statistics;
    /**
     * @gir-type Alias
     */
    type Int64StatisticsClass = typeof Int64Statistics;
    /**
     * @gir-type Alias
     */
    type RowGroupMetadataClass = typeof RowGroupMetadata;
    /**
     * @gir-type Alias
     */
    type StatisticsClass = typeof Statistics;
    /**
     * @gir-type Alias
     */
    type WriterPropertiesClass = typeof WriterProperties;
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

export default Parquet;

// END
