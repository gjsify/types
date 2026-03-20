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
import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Parquet {
    /**
     * Parquet-1.0
     */

    /**
     * The major version.
     * @since 0.16.0
     */
    const VERSION_MAJOR: number;
    /**
     * The micro version.
     * @since 0.16.0
     */
    const VERSION_MICRO: number;
    /**
     * The minor version.
     * @since 0.16.0
     */
    const VERSION_MINOR: number;
    /**
     * The version tag. Normally, it's an empty string. It's "SNAPSHOT"
     * for snapshot version.
     * @since 0.16.0
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
         * @returns The number of row groups.
         */
        get_n_row_groups(): number;
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
         * @param table A table to be written.
         * @param chunk_size The max number of rows in a row group.
         * @returns `true` on success, `false` if there was an error.
         */
        write_table(table: Arrow.Table, chunk_size: number): boolean;
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
