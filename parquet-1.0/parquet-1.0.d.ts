/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Parquet {
    /**
     * Parquet-1.0
     */

    module ArrowFileReader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            arrow_file_reader: any;
            arrowFileReader: any;
        }
    }

    class ArrowFileReader extends GObject.Object {
        static $gtype: GObject.GType<ArrowFileReader>;

        // Properties

        set arrow_file_reader(val: any);
        set arrowFileReader(val: any);

        // Constructors

        constructor(properties?: Partial<ArrowFileReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_arrow(source: Arrow.SeekableInputStream): ArrowFileReader;

        static new_path(path: string): ArrowFileReader;

        // Methods

        get_metadata(): FileMetadata;
        get_n_row_groups(): number;
        get_n_rows(): number;
        get_schema(): Arrow.Schema | null;
        read_column_data(i: number): Arrow.ChunkedArray | null;
        read_row_group(row_group_index: number, column_indices?: number[] | null): Arrow.Table | null;
        read_table(): Arrow.Table | null;
        set_use_threads(use_threads: boolean): void;
    }

    module ArrowFileWriter {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            arrow_file_writer: any;
            arrowFileWriter: any;
        }
    }

    class ArrowFileWriter extends GObject.Object {
        static $gtype: GObject.GType<ArrowFileWriter>;

        // Properties

        set arrow_file_writer(val: any);
        set arrowFileWriter(val: any);

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

        // Methods

        close(): boolean;
        write_table(table: Arrow.Table, chunk_size: number): boolean;
    }

    module BooleanStatistics {
        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    class BooleanStatistics extends Statistics {
        static $gtype: GObject.GType<BooleanStatistics>;

        // Constructors

        constructor(properties?: Partial<BooleanStatistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_max(): boolean;
        get_min(): boolean;
    }

    module ByteArrayStatistics {
        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    class ByteArrayStatistics extends Statistics {
        static $gtype: GObject.GType<ByteArrayStatistics>;

        // Constructors

        constructor(properties?: Partial<ByteArrayStatistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_max(): GLib.Bytes;
        get_min(): GLib.Bytes;
    }

    module ColumnChunkMetadata {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            metadata: any;
            owner: RowGroupMetadata;
        }
    }

    class ColumnChunkMetadata extends GObject.Object {
        static $gtype: GObject.GType<ColumnChunkMetadata>;

        // Properties

        set metadata(val: any);
        set owner(val: RowGroupMetadata);

        // Constructors

        constructor(properties?: Partial<ColumnChunkMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        can_decompress(): boolean;
        equal(other_metadata: ColumnChunkMetadata): boolean;
        get_file_offset(): number;
        get_statistics(): Statistics | null;
        get_total_compressed_size(): number;
        get_total_size(): number;
    }

    module DoubleStatistics {
        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    class DoubleStatistics extends Statistics {
        static $gtype: GObject.GType<DoubleStatistics>;

        // Constructors

        constructor(properties?: Partial<DoubleStatistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_max(): number;
        get_min(): number;
    }

    module FileMetadata {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            metadata: any;
        }
    }

    class FileMetadata extends GObject.Object {
        static $gtype: GObject.GType<FileMetadata>;

        // Properties

        set metadata(val: any);

        // Constructors

        constructor(properties?: Partial<FileMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        can_decompress(): boolean;
        equal(other_metadata: FileMetadata): boolean;
        get_created_by(): string;
        get_n_columns(): number;
        get_n_row_groups(): number;
        get_n_rows(): number;
        get_n_schema_elements(): number;
        get_row_group(index: number): RowGroupMetadata | null;
        get_size(): number;
    }

    module FixedLengthByteArrayStatistics {
        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    class FixedLengthByteArrayStatistics extends Statistics {
        static $gtype: GObject.GType<FixedLengthByteArrayStatistics>;

        // Constructors

        constructor(properties?: Partial<FixedLengthByteArrayStatistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_max(): GLib.Bytes;
        get_min(): GLib.Bytes;
    }

    module FloatStatistics {
        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    class FloatStatistics extends Statistics {
        static $gtype: GObject.GType<FloatStatistics>;

        // Constructors

        constructor(properties?: Partial<FloatStatistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_max(): number;
        get_min(): number;
    }

    module Int32Statistics {
        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    class Int32Statistics extends Statistics {
        static $gtype: GObject.GType<Int32Statistics>;

        // Constructors

        constructor(properties?: Partial<Int32Statistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_max(): number;
        get_min(): number;
    }

    module Int64Statistics {
        // Constructor properties interface

        interface ConstructorProps extends Statistics.ConstructorProps {}
    }

    class Int64Statistics extends Statistics {
        static $gtype: GObject.GType<Int64Statistics>;

        // Constructors

        constructor(properties?: Partial<Int64Statistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_max(): number;
        get_min(): number;
    }

    module RowGroupMetadata {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            metadata: any;
            owner: FileMetadata;
        }
    }

    class RowGroupMetadata extends GObject.Object {
        static $gtype: GObject.GType<RowGroupMetadata>;

        // Properties

        set metadata(val: any);
        set owner(val: FileMetadata);

        // Constructors

        constructor(properties?: Partial<RowGroupMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        can_decompress(): boolean;
        equal(other_metadata: RowGroupMetadata): boolean;
        get_column_chunk(index: number): ColumnChunkMetadata | null;
        get_file_offset(): number;
        get_n_columns(): number;
        get_n_rows(): number;
        get_total_compressed_size(): number;
        get_total_size(): number;
    }

    module Statistics {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            statistics: any;
        }
    }

    abstract class Statistics extends GObject.Object {
        static $gtype: GObject.GType<Statistics>;

        // Properties

        set statistics(val: any);

        // Constructors

        constructor(properties?: Partial<Statistics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        equal(other_statistics: Statistics): boolean;
        get_n_distinct_values(): number;
        get_n_nulls(): number;
        get_n_values(): number;
        has_min_max(): boolean;
        has_n_distinct_values(): boolean;
        has_n_nulls(): boolean;
    }

    module WriterProperties {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class WriterProperties extends GObject.Object {
        static $gtype: GObject.GType<WriterProperties>;

        // Constructors

        constructor(properties?: Partial<WriterProperties.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WriterProperties;

        // Methods

        disable_dictionary(path?: string | null): void;
        enable_dictionary(path?: string | null): void;
        get_batch_size(): number;
        get_compression_path(path: string): Arrow.CompressionType;
        get_data_page_size(): number;
        get_dictionary_page_size_limit(): number;
        get_max_row_group_length(): number;
        is_dictionary_enabled(path: string): boolean;
        set_batch_size(batch_size: number): void;
        set_compression(compression_type: Arrow.CompressionType, path?: string | null): void;
        set_data_page_size(data_page_size: number): void;
        set_dictionary_page_size_limit(limit: number): void;
        set_max_row_group_length(length: number): void;
    }

    type ArrowFileReaderClass = typeof ArrowFileReader;
    type ArrowFileWriterClass = typeof ArrowFileWriter;
    type BooleanStatisticsClass = typeof BooleanStatistics;
    type ByteArrayStatisticsClass = typeof ByteArrayStatistics;
    type ColumnChunkMetadataClass = typeof ColumnChunkMetadata;
    type DoubleStatisticsClass = typeof DoubleStatistics;
    type FileMetadataClass = typeof FileMetadata;
    type FixedLengthByteArrayStatisticsClass = typeof FixedLengthByteArrayStatistics;
    type FloatStatisticsClass = typeof FloatStatistics;
    type Int32StatisticsClass = typeof Int32Statistics;
    type Int64StatisticsClass = typeof Int64Statistics;
    type RowGroupMetadataClass = typeof RowGroupMetadata;
    type StatisticsClass = typeof Statistics;
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
