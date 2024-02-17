
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './parquet-1.0-ambient.d.ts';
import './parquet-1.0-import.d.ts';
/**
 * Parquet-1.0
 */

import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
export const VERSION_TAG: string
export module ArrowFileReader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Parquet-1.0.Parquet.ArrowFileReader

        arrowFileReader?: any | null
    }

}

export interface ArrowFileReader {

    // Own properties of Parquet-1.0.Parquet.ArrowFileReader

    readonly arrowFileReader: any

    // Own fields of Parquet-1.0.Parquet.ArrowFileReader

    parent_instance: GObject.Object

    // Owm methods of Parquet-1.0.Parquet.ArrowFileReader

    get_n_row_groups(): number
    get_schema(): Arrow.Schema | null
    read_column_data(i: number): Arrow.ChunkedArray | null
    read_row_group(row_group_index: number, column_indices: number[] | null): Arrow.Table | null
    read_table(): Arrow.Table | null
    set_use_threads(use_threads: boolean): void

    // Class property signals of Parquet-1.0.Parquet.ArrowFileReader

    connect(sigName: "notify::arrow-file-reader", callback: (($obj: ArrowFileReader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-file-reader", callback: (($obj: ArrowFileReader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::arrow-file-reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ArrowFileReader extends GObject.Object {

    // Own properties of Parquet-1.0.Parquet.ArrowFileReader

    static name: string
    static $gtype: GObject.GType<ArrowFileReader>

    // Constructors of Parquet-1.0.Parquet.ArrowFileReader

    constructor(config?: ArrowFileReader.ConstructorProperties) 
    static new_arrow(source: Arrow.SeekableInputStream): ArrowFileReader
    static new_path(path: string): ArrowFileReader
    _init(config?: ArrowFileReader.ConstructorProperties): void
}

export module ArrowFileWriter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Parquet-1.0.Parquet.ArrowFileWriter

        arrowFileWriter?: any | null
    }

}

export interface ArrowFileWriter {

    // Own properties of Parquet-1.0.Parquet.ArrowFileWriter

    readonly arrowFileWriter: any

    // Own fields of Parquet-1.0.Parquet.ArrowFileWriter

    parent_instance: GObject.Object

    // Owm methods of Parquet-1.0.Parquet.ArrowFileWriter

    close(): boolean
    write_table(table: Arrow.Table, chunk_size: number): boolean

    // Class property signals of Parquet-1.0.Parquet.ArrowFileWriter

    connect(sigName: "notify::arrow-file-writer", callback: (($obj: ArrowFileWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-file-writer", callback: (($obj: ArrowFileWriter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::arrow-file-writer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ArrowFileWriter extends GObject.Object {

    // Own properties of Parquet-1.0.Parquet.ArrowFileWriter

    static name: string
    static $gtype: GObject.GType<ArrowFileWriter>

    // Constructors of Parquet-1.0.Parquet.ArrowFileWriter

    constructor(config?: ArrowFileWriter.ConstructorProperties) 
    static new_arrow(schema: Arrow.Schema, sink: Arrow.OutputStream, writer_properties: WriterProperties | null): ArrowFileWriter
    static new_path(schema: Arrow.Schema, path: string, writer_properties: WriterProperties | null): ArrowFileWriter
    _init(config?: ArrowFileWriter.ConstructorProperties): void
}

export module WriterProperties {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WriterProperties {

    // Own fields of Parquet-1.0.Parquet.WriterProperties

    parent_instance: GObject.Object

    // Owm methods of Parquet-1.0.Parquet.WriterProperties

    disable_dictionary(path: string | null): void
    enable_dictionary(path: string | null): void
    get_batch_size(): number
    get_compression_path(path: string): Arrow.CompressionType
    get_data_page_size(): number
    get_dictionary_page_size_limit(): number
    get_max_row_group_length(): number
    is_dictionary_enabled(path: string): boolean
    set_batch_size(batch_size: number): void
    set_compression(compression_type: Arrow.CompressionType, path: string | null): void
    set_data_page_size(data_page_size: number): void
    set_dictionary_page_size_limit(limit: number): void
    set_max_row_group_length(length: number): void

    // Class property signals of Parquet-1.0.Parquet.WriterProperties

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WriterProperties extends GObject.Object {

    // Own properties of Parquet-1.0.Parquet.WriterProperties

    static name: string
    static $gtype: GObject.GType<WriterProperties>

    // Constructors of Parquet-1.0.Parquet.WriterProperties

    constructor(config?: WriterProperties.ConstructorProperties) 
    constructor() 
    static new(): WriterProperties
    _init(config?: WriterProperties.ConstructorProperties): void
}

export interface ArrowFileReaderClass {

    // Own fields of Parquet-1.0.Parquet.ArrowFileReaderClass

    parent_class: GObject.ObjectClass
}

export abstract class ArrowFileReaderClass {

    // Own properties of Parquet-1.0.Parquet.ArrowFileReaderClass

    static name: string
}

export interface ArrowFileWriterClass {

    // Own fields of Parquet-1.0.Parquet.ArrowFileWriterClass

    parent_class: GObject.ObjectClass
}

export abstract class ArrowFileWriterClass {

    // Own properties of Parquet-1.0.Parquet.ArrowFileWriterClass

    static name: string
}

export interface WriterPropertiesClass {

    // Own fields of Parquet-1.0.Parquet.WriterPropertiesClass

    parent_class: GObject.ObjectClass
}

export abstract class WriterPropertiesClass {

    // Own properties of Parquet-1.0.Parquet.WriterPropertiesClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END