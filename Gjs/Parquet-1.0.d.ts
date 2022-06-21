// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Parquet-1.0
 */

import type * as Gjs from './Gjs';
import type Arrow from './Arrow-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Parquet {

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
interface ArrowFileReader_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Parquet-1.0.Parquet.ArrowFileReader

    arrow_file_reader?: object | null
}

interface ArrowFileReader {

    // Own properties of Parquet-1.0.Parquet.ArrowFileReader

    readonly arrow_file_reader: object

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

class ArrowFileReader extends GObject.Object {

    // Own properties of Parquet-1.0.Parquet.ArrowFileReader

    static name: string
    static $gtype: GObject.GType<ArrowFileReader>

    // Constructors of Parquet-1.0.Parquet.ArrowFileReader

    constructor(config?: ArrowFileReader_ConstructProps) 
    static new_arrow(source: Arrow.SeekableInputStream): ArrowFileReader
    static new_path(path: string): ArrowFileReader
    _init(config?: ArrowFileReader_ConstructProps): void
}

interface ArrowFileWriter_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Parquet-1.0.Parquet.ArrowFileWriter

    arrow_file_writer?: object | null
}

interface ArrowFileWriter {

    // Own properties of Parquet-1.0.Parquet.ArrowFileWriter

    readonly arrow_file_writer: object

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

class ArrowFileWriter extends GObject.Object {

    // Own properties of Parquet-1.0.Parquet.ArrowFileWriter

    static name: string
    static $gtype: GObject.GType<ArrowFileWriter>

    // Constructors of Parquet-1.0.Parquet.ArrowFileWriter

    constructor(config?: ArrowFileWriter_ConstructProps) 
    static new_arrow(schema: Arrow.Schema, sink: Arrow.OutputStream, writer_properties: WriterProperties | null): ArrowFileWriter
    static new_path(schema: Arrow.Schema, path: string, writer_properties: WriterProperties | null): ArrowFileWriter
    _init(config?: ArrowFileWriter_ConstructProps): void
}

interface WriterProperties_ConstructProps extends GObject.Object_ConstructProps {
}

interface WriterProperties {

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

class WriterProperties extends GObject.Object {

    // Own properties of Parquet-1.0.Parquet.WriterProperties

    static name: string
    static $gtype: GObject.GType<WriterProperties>

    // Constructors of Parquet-1.0.Parquet.WriterProperties

    constructor(config?: WriterProperties_ConstructProps) 
    constructor() 
    static new(): WriterProperties
    _init(config?: WriterProperties_ConstructProps): void
}

interface ArrowFileReaderClass {

    // Own fields of Parquet-1.0.Parquet.ArrowFileReaderClass

    parent_class: GObject.ObjectClass
}

abstract class ArrowFileReaderClass {

    // Own properties of Parquet-1.0.Parquet.ArrowFileReaderClass

    static name: string
}

interface ArrowFileWriterClass {

    // Own fields of Parquet-1.0.Parquet.ArrowFileWriterClass

    parent_class: GObject.ObjectClass
}

abstract class ArrowFileWriterClass {

    // Own properties of Parquet-1.0.Parquet.ArrowFileWriterClass

    static name: string
}

interface WriterPropertiesClass {

    // Own fields of Parquet-1.0.Parquet.WriterPropertiesClass

    parent_class: GObject.ObjectClass
}

abstract class WriterPropertiesClass {

    // Own properties of Parquet-1.0.Parquet.WriterPropertiesClass

    static name: string
}

}
export default Parquet;