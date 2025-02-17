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

export namespace Parquet {
    /**
     * Parquet-1.0
     */

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
    namespace ArrowFileReader {
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

        get_n_row_groups(): number;
        get_schema(): Arrow.Schema | null;
        read_column_data(i: number): Arrow.ChunkedArray | null;
        read_row_group(row_group_index: number, column_indices?: number[] | null): Arrow.Table | null;
        read_table(): Arrow.Table | null;
        set_use_threads(use_threads: boolean): void;
    }

    namespace ArrowFileWriter {
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

    namespace WriterProperties {
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
        set_compression(compression_type: Arrow.CompressionType | null, path?: string | null): void;
        set_data_page_size(data_page_size: number): void;
        set_dictionary_page_size_limit(limit: number): void;
        set_max_row_group_length(length: number): void;
    }

    type ArrowFileReaderClass = typeof ArrowFileReader;
    type ArrowFileWriterClass = typeof ArrowFileWriter;
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
