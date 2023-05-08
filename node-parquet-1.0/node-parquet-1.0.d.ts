
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Parquet-1.0
 */

import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
const VERSION_TAG: string | null
module ArrowFileReader {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Parquet-1.0.Parquet.ArrowFileReader

        arrowFileReader?: any | null
    }

}

interface ArrowFileReader {

    // Own properties of Parquet-1.0.Parquet.ArrowFileReader

    readonly arrowFileReader: any
    __gtype__: number

    // Own fields of Parquet-1.0.Parquet.ArrowFileReader

    parentInstance: GObject.Object

    // Owm methods of Parquet-1.0.Parquet.ArrowFileReader

    getNRowGroups(): number
    getSchema(): Arrow.Schema | null
    readColumnData(i: number): Arrow.ChunkedArray | null
    readRowGroup(rowGroupIndex: number, columnIndices: number[] | null): Arrow.Table | null
    readTable(): Arrow.Table | null
    setUseThreads(useThreads: boolean): void

    // Class property signals of Parquet-1.0.Parquet.ArrowFileReader

    connect(sigName: "notify::arrow-file-reader", callback: (...args: any[]) => void): number
    on(sigName: "notify::arrow-file-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::arrow-file-reader", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::arrow-file-reader", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::arrow-file-reader", ...args: any[]): void
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

class ArrowFileReader extends GObject.Object {

    // Own properties of Parquet-1.0.Parquet.ArrowFileReader

    static name: string

    // Constructors of Parquet-1.0.Parquet.ArrowFileReader

    constructor(config?: ArrowFileReader.ConstructorProperties) 
    static newArrow(source: Arrow.SeekableInputStream): ArrowFileReader
    static newPath(path: string | null): ArrowFileReader
    _init(config?: ArrowFileReader.ConstructorProperties): void
}

module ArrowFileWriter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Parquet-1.0.Parquet.ArrowFileWriter

        arrowFileWriter?: any | null
    }

}

interface ArrowFileWriter {

    // Own properties of Parquet-1.0.Parquet.ArrowFileWriter

    readonly arrowFileWriter: any
    __gtype__: number

    // Own fields of Parquet-1.0.Parquet.ArrowFileWriter

    parentInstance: GObject.Object

    // Owm methods of Parquet-1.0.Parquet.ArrowFileWriter

    close(): boolean
    writeTable(table: Arrow.Table, chunkSize: number): boolean

    // Class property signals of Parquet-1.0.Parquet.ArrowFileWriter

    connect(sigName: "notify::arrow-file-writer", callback: (...args: any[]) => void): number
    on(sigName: "notify::arrow-file-writer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::arrow-file-writer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::arrow-file-writer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::arrow-file-writer", ...args: any[]): void
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

class ArrowFileWriter extends GObject.Object {

    // Own properties of Parquet-1.0.Parquet.ArrowFileWriter

    static name: string

    // Constructors of Parquet-1.0.Parquet.ArrowFileWriter

    constructor(config?: ArrowFileWriter.ConstructorProperties) 
    static newArrow(schema: Arrow.Schema, sink: Arrow.OutputStream, writerProperties: WriterProperties | null): ArrowFileWriter
    static newPath(schema: Arrow.Schema, path: string | null, writerProperties: WriterProperties | null): ArrowFileWriter
    _init(config?: ArrowFileWriter.ConstructorProperties): void
}

module WriterProperties {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface WriterProperties {

    // Own properties of Parquet-1.0.Parquet.WriterProperties

    __gtype__: number

    // Own fields of Parquet-1.0.Parquet.WriterProperties

    parentInstance: GObject.Object

    // Owm methods of Parquet-1.0.Parquet.WriterProperties

    disableDictionary(path: string | null): void
    enableDictionary(path: string | null): void
    getBatchSize(): number
    getCompressionPath(path: string | null): Arrow.CompressionType
    getDataPageSize(): number
    getDictionaryPageSizeLimit(): number
    getMaxRowGroupLength(): number
    isDictionaryEnabled(path: string | null): boolean
    setBatchSize(batchSize: number): void
    setCompression(compressionType: Arrow.CompressionType, path: string | null): void
    setDataPageSize(dataPageSize: number): void
    setDictionaryPageSizeLimit(limit: number): void
    setMaxRowGroupLength(length: number): void

    // Class property signals of Parquet-1.0.Parquet.WriterProperties

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

class WriterProperties extends GObject.Object {

    // Own properties of Parquet-1.0.Parquet.WriterProperties

    static name: string

    // Constructors of Parquet-1.0.Parquet.WriterProperties

    constructor(config?: WriterProperties.ConstructorProperties) 
    constructor() 
    static new(): WriterProperties
    _init(config?: WriterProperties.ConstructorProperties): void
}

interface ArrowFileReaderClass {

    // Own fields of Parquet-1.0.Parquet.ArrowFileReaderClass

    parentClass: GObject.ObjectClass
}

abstract class ArrowFileReaderClass {

    // Own properties of Parquet-1.0.Parquet.ArrowFileReaderClass

    static name: string
}

interface ArrowFileWriterClass {

    // Own fields of Parquet-1.0.Parquet.ArrowFileWriterClass

    parentClass: GObject.ObjectClass
}

abstract class ArrowFileWriterClass {

    // Own properties of Parquet-1.0.Parquet.ArrowFileWriterClass

    static name: string
}

interface WriterPropertiesClass {

    // Own fields of Parquet-1.0.Parquet.WriterPropertiesClass

    parentClass: GObject.ObjectClass
}

abstract class WriterPropertiesClass {

    // Own properties of Parquet-1.0.Parquet.WriterPropertiesClass

    static name: string
}

}

export default Parquet;