
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * ArrowDataset-1.0
 */

import type Arrow from '@girs/arrow-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace ArrowDataset {

/**
 * They are corresponding to `arrow::dataset::SegmentEncoding` values.
 */
enum SegmentEncoding {
    /**
     * No encoding.
     */
    NONE,
    /**
     * Segment values are URL-encoded.
     */
    URI,
}
module CSVFileFormat {

    // Constructor properties interface

    interface ConstructorProperties extends FileFormat.ConstructorProperties {
    }

}

interface CSVFileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.CSVFileFormat

    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.CSVFileFormat

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.CSVFileFormat

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::format", callback: (...args: any[]) => void): number
    on(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CSVFileFormat extends FileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.CSVFileFormat

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.CSVFileFormat

    constructor(config?: CSVFileFormat.ConstructorProperties) 
    constructor() 
    static new(): CSVFileFormat
    _init(config?: CSVFileFormat.ConstructorProperties): void
}

module Dataset {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.Dataset

        dataset?: any | null
    }

}

interface Dataset {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Dataset

    readonly dataset: any
    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.Dataset

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.Dataset

    beginScan(): ScannerBuilder | null
    getTypeName(): string | null
    toTable(): Arrow.Table | null

    // Class property signals of ArrowDataset-1.0.ArrowDataset.Dataset

    connect(sigName: "notify::dataset", callback: (...args: any[]) => void): number
    on(sigName: "notify::dataset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dataset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dataset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dataset", ...args: any[]): void
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

class Dataset extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Dataset

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.Dataset

    constructor(config?: Dataset.ConstructorProperties) 
    _init(config?: Dataset.ConstructorProperties): void
}

module DatasetFactory {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.DatasetFactory

        datasetFactory?: any | null
    }

}

interface DatasetFactory {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    readonly datasetFactory: any
    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    finish(): Dataset | null

    // Class property signals of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    connect(sigName: "notify::dataset-factory", callback: (...args: any[]) => void): number
    on(sigName: "notify::dataset-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dataset-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dataset-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dataset-factory", ...args: any[]): void
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

class DatasetFactory extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    constructor(config?: DatasetFactory.ConstructorProperties) 
    _init(config?: DatasetFactory.ConstructorProperties): void
}

module DirectoryPartitioning {

    // Constructor properties interface

    interface ConstructorProperties extends KeyValuePartitioning.ConstructorProperties {
    }

}

interface DirectoryPartitioning {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioning

    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioning

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioning

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::partitioning", callback: (...args: any[]) => void): number
    on(sigName: "notify::partitioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::partitioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::partitioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DirectoryPartitioning extends KeyValuePartitioning {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioning

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioning

    constructor(config?: DirectoryPartitioning.ConstructorProperties) 
    constructor(schema: Arrow.Schema, dictionaries: Arrow.Array[] | null, options: PartitioningOptions | null) 
    static new(schema: Arrow.Schema, dictionaries: Arrow.Array[] | null, options: PartitioningOptions | null): DirectoryPartitioning

    // Overloads of new

    static new(): Partitioning
    _init(config?: DirectoryPartitioning.ConstructorProperties): void
}

module FileFormat {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.FileFormat

        format?: any | null
    }

}

interface FileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileFormat

    readonly format: any
    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileFormat

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.FileFormat

    equal(otherFormat: FileFormat): boolean
    getDefaultWriteOptions(): FileWriteOptions
    getTypeName(): string | null
    openWriter(destination: Arrow.OutputStream, fileSystem: Arrow.FileSystem, path: string | null, schema: Arrow.Schema, options: FileWriteOptions): FileWriter

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileFormat

    connect(sigName: "notify::format", callback: (...args: any[]) => void): number
    on(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::format", ...args: any[]): void
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

class FileFormat extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileFormat

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileFormat

    constructor(config?: FileFormat.ConstructorProperties) 
    _init(config?: FileFormat.ConstructorProperties): void
}

module FileSystemDataset {

    // Constructor properties interface

    interface ConstructorProperties extends Dataset.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

        /**
         * File system of the dataset.
         */
        fileSystem?: Arrow.FileSystem | null
        /**
         * Format of the dataset.
         */
        format?: FileFormat | null
        /**
         * Partitioning of the dataset.
         */
        partitioning?: Partitioning | null
    }

}

interface FileSystemDataset {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    /**
     * File system of the dataset.
     */
    readonly fileSystem: Arrow.FileSystem
    /**
     * Format of the dataset.
     */
    readonly format: FileFormat
    /**
     * Partitioning of the dataset.
     */
    readonly partitioning: Partitioning
    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    connect(sigName: "notify::file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: "notify::format", callback: (...args: any[]) => void): number
    on(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::partitioning", callback: (...args: any[]) => void): number
    on(sigName: "notify::partitioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::partitioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::partitioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::dataset", callback: (...args: any[]) => void): number
    on(sigName: "notify::dataset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dataset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dataset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dataset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FileSystemDataset extends Dataset {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    constructor(config?: FileSystemDataset.ConstructorProperties) 
    _init(config?: FileSystemDataset.ConstructorProperties): void
    static writeScanner(scanner: Scanner, options: FileSystemDatasetWriteOptions): boolean
}

module FileSystemDatasetFactory {

    // Constructor properties interface

    interface ConstructorProperties extends DatasetFactory.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

        /**
         * Format passed to #GADatasetFileSystemDataset.
         */
        format?: FileFormat | null
        /**
         * Partition base directory used by #GADatasetFileSystemDataset.
         */
        partitionBaseDir?: string | null
        /**
         * Partitioning used by #GADatasetFileSystemDataset.
         */
        partitioning?: Partitioning | null
    }

}

interface FileSystemDatasetFactory {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    /**
     * File system passed to #GADatasetFileSystemDataset.
     */
    readonly fileSystem: Arrow.FileSystem
    /**
     * Format passed to #GADatasetFileSystemDataset.
     */
    readonly format: FileFormat
    /**
     * Partition base directory used by #GADatasetFileSystemDataset.
     */
    partitionBaseDir: string | null
    /**
     * Partitioning used by #GADatasetFileSystemDataset.
     */
    partitioning: Partitioning
    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    parentInstance: any

    // Owm methods of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    addPath(path: string | null): boolean
    finish(): FileSystemDataset | null

    // Overloads of finish

    finish(): Dataset | null
    setFileSystem(fileSystem: Arrow.FileSystem): boolean
    setFileSystemUri(uri: string | null): boolean

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    connect(sigName: "notify::file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: "notify::format", callback: (...args: any[]) => void): number
    on(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::partition-base-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::partition-base-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::partition-base-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::partition-base-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::partition-base-dir", ...args: any[]): void
    connect(sigName: "notify::partitioning", callback: (...args: any[]) => void): number
    on(sigName: "notify::partitioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::partitioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::partitioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::dataset-factory", callback: (...args: any[]) => void): number
    on(sigName: "notify::dataset-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dataset-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dataset-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dataset-factory", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FileSystemDatasetFactory extends DatasetFactory {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    constructor(config?: FileSystemDatasetFactory.ConstructorProperties) 
    constructor(fileFormat: FileFormat) 
    static new(fileFormat: FileFormat): FileSystemDatasetFactory
    _init(config?: FileSystemDatasetFactory.ConstructorProperties): void
}

module FileSystemDatasetWriteOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

        baseDir?: string | null
        /**
         * Template string used to generate fragment base names. {i} will be
         * replaced by an auto incremented integer.
         */
        baseNameTemplate?: string | null
        fileSystem?: Arrow.FileSystem | null
        fileWriteOptions?: FileWriteOptions | null
        /**
         * Maximum number of partitions any batch may be written into.
         */
        maxPartitions?: number | null
        /**
         * #GADatasetPartitioning used to generate fragment paths.
         */
        partitioning?: Partitioning | null
    }

}

interface FileSystemDatasetWriteOptions {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    baseDir: string | null
    /**
     * Template string used to generate fragment base names. {i} will be
     * replaced by an auto incremented integer.
     */
    baseNameTemplate: string | null
    fileSystem: Arrow.FileSystem
    fileWriteOptions: FileWriteOptions
    /**
     * Maximum number of partitions any batch may be written into.
     */
    maxPartitions: number
    /**
     * #GADatasetPartitioning used to generate fragment paths.
     */
    partitioning: Partitioning
    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    parentInstance: GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    connect(sigName: "notify::base-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-dir", ...args: any[]): void
    connect(sigName: "notify::base-name-template", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-name-template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-name-template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-name-template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-name-template", ...args: any[]): void
    connect(sigName: "notify::file-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: "notify::file-write-options", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-write-options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-write-options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-write-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-write-options", ...args: any[]): void
    connect(sigName: "notify::max-partitions", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-partitions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-partitions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-partitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-partitions", ...args: any[]): void
    connect(sigName: "notify::partitioning", callback: (...args: any[]) => void): number
    on(sigName: "notify::partitioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::partitioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::partitioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::partitioning", ...args: any[]): void
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

class FileSystemDatasetWriteOptions extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    constructor(config?: FileSystemDatasetWriteOptions.ConstructorProperties) 
    constructor() 
    static new(): FileSystemDatasetWriteOptions
    _init(config?: FileSystemDatasetWriteOptions.ConstructorProperties): void
}

module FileWriteOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

        options?: any | null
    }

}

interface FileWriteOptions {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

    readonly options: any
    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

    parentInstance: GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

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

class FileWriteOptions extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

    constructor(config?: FileWriteOptions.ConstructorProperties) 
    _init(config?: FileWriteOptions.ConstructorProperties): void
}

module FileWriter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.FileWriter

        writer?: any | null
    }

}

interface FileWriter {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriter

    readonly writer: any
    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileWriter

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.FileWriter

    finish(): boolean
    writeRecordBatch(recordBatch: Arrow.RecordBatch): boolean
    writeRecordBatchReader(reader: Arrow.RecordBatchReader): boolean

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileWriter

    connect(sigName: "notify::writer", callback: (...args: any[]) => void): number
    on(sigName: "notify::writer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::writer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::writer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::writer", ...args: any[]): void
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

class FileWriter extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriter

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileWriter

    constructor(config?: FileWriter.ConstructorProperties) 
    _init(config?: FileWriter.ConstructorProperties): void
}

module Fragment {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.Fragment

        fragment?: any | null
    }

}

interface Fragment {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Fragment

    readonly fragment: any
    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.Fragment

    parentInstance: GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.Fragment

    connect(sigName: "notify::fragment", callback: (...args: any[]) => void): number
    on(sigName: "notify::fragment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fragment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fragment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fragment", ...args: any[]): void
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

class Fragment extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Fragment

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.Fragment

    constructor(config?: Fragment.ConstructorProperties) 
    _init(config?: Fragment.ConstructorProperties): void
}

module IPCFileFormat {

    // Constructor properties interface

    interface ConstructorProperties extends FileFormat.ConstructorProperties {
    }

}

interface IPCFileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.IPCFileFormat

    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.IPCFileFormat

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.IPCFileFormat

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::format", callback: (...args: any[]) => void): number
    on(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class IPCFileFormat extends FileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.IPCFileFormat

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.IPCFileFormat

    constructor(config?: IPCFileFormat.ConstructorProperties) 
    constructor() 
    static new(): IPCFileFormat
    _init(config?: IPCFileFormat.ConstructorProperties): void
}

module InMemoryFragment {

    // Constructor properties interface

    interface ConstructorProperties extends Fragment.ConstructorProperties {
    }

}

interface InMemoryFragment {

    // Own properties of ArrowDataset-1.0.ArrowDataset.InMemoryFragment

    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.InMemoryFragment

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.InMemoryFragment

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::fragment", callback: (...args: any[]) => void): number
    on(sigName: "notify::fragment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fragment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fragment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fragment", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class InMemoryFragment extends Fragment {

    // Own properties of ArrowDataset-1.0.ArrowDataset.InMemoryFragment

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.InMemoryFragment

    constructor(config?: InMemoryFragment.ConstructorProperties) 
    constructor(schema: Arrow.Schema, recordBatches: Arrow.RecordBatch[]) 
    static new(schema: Arrow.Schema, recordBatches: Arrow.RecordBatch[]): InMemoryFragment
    _init(config?: InMemoryFragment.ConstructorProperties): void
}

module KeyValuePartitioning {

    // Constructor properties interface

    interface ConstructorProperties extends Partitioning.ConstructorProperties {
    }

}

interface KeyValuePartitioning {

    // Own properties of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioning

    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioning

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioning

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::partitioning", callback: (...args: any[]) => void): number
    on(sigName: "notify::partitioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::partitioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::partitioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class KeyValuePartitioning extends Partitioning {

    // Own properties of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioning

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioning

    constructor(config?: KeyValuePartitioning.ConstructorProperties) 
    _init(config?: KeyValuePartitioning.ConstructorProperties): void
}

module ParquetFileFormat {

    // Constructor properties interface

    interface ConstructorProperties extends FileFormat.ConstructorProperties {
    }

}

interface ParquetFileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ParquetFileFormat

    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.ParquetFileFormat

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.ParquetFileFormat

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::format", callback: (...args: any[]) => void): number
    on(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ParquetFileFormat extends FileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ParquetFileFormat

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.ParquetFileFormat

    constructor(config?: ParquetFileFormat.ConstructorProperties) 
    constructor() 
    static new(): ParquetFileFormat
    _init(config?: ParquetFileFormat.ConstructorProperties): void
}

module Partitioning {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.Partitioning

        partitioning?: any | null
    }

}

interface Partitioning {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Partitioning

    readonly partitioning: any
    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.Partitioning

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.Partitioning

    getTypeName(): string | null

    // Class property signals of ArrowDataset-1.0.ArrowDataset.Partitioning

    connect(sigName: "notify::partitioning", callback: (...args: any[]) => void): number
    on(sigName: "notify::partitioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::partitioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::partitioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::partitioning", ...args: any[]): void
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

class Partitioning extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Partitioning

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.Partitioning

    constructor(config?: Partitioning.ConstructorProperties) 
    constructor() 
    static new(): Partitioning
    _init(config?: Partitioning.ConstructorProperties): void
}

module PartitioningOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

        /**
         * When inferring a schema for partition fields, yield dictionary
         * encoded types instead of plain. This can be more efficient when
         * materializing virtual columns, and Expressions parsed by the
         * finished Partitioning will include dictionaries of all unique
         * inspected values for each field.
         */
        inferDictionary?: boolean | null
        /**
         * Optionally, an expected schema can be provided, in which case
         * inference will only check discovered fields against the schema
         * and update internal state (such as dictionaries).
         */
        schema?: Arrow.Schema | null
        /**
         * After splitting a path into components, decode the path
         * components before parsing according to this scheme.
         */
        segmentEncoding?: SegmentEncoding | null
    }

}

interface PartitioningOptions {

    // Own properties of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

    /**
     * When inferring a schema for partition fields, yield dictionary
     * encoded types instead of plain. This can be more efficient when
     * materializing virtual columns, and Expressions parsed by the
     * finished Partitioning will include dictionaries of all unique
     * inspected values for each field.
     */
    inferDictionary: boolean
    /**
     * Optionally, an expected schema can be provided, in which case
     * inference will only check discovered fields against the schema
     * and update internal state (such as dictionaries).
     */
    schema: Arrow.Schema
    /**
     * After splitting a path into components, decode the path
     * components before parsing according to this scheme.
     */
    segmentEncoding: SegmentEncoding
    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

    parentInstance: GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

    connect(sigName: "notify::infer-dictionary", callback: (...args: any[]) => void): number
    on(sigName: "notify::infer-dictionary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::infer-dictionary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::infer-dictionary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::infer-dictionary", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: "notify::segment-encoding", callback: (...args: any[]) => void): number
    on(sigName: "notify::segment-encoding", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::segment-encoding", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::segment-encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::segment-encoding", ...args: any[]): void
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

class PartitioningOptions extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

    constructor(config?: PartitioningOptions.ConstructorProperties) 
    constructor() 
    static new(): PartitioningOptions
    _init(config?: PartitioningOptions.ConstructorProperties): void
}

module Scanner {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.Scanner

        scanner?: any | null
    }

}

interface Scanner {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Scanner

    readonly scanner: any
    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.Scanner

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.Scanner

    toTable(): Arrow.Table | null

    // Class property signals of ArrowDataset-1.0.ArrowDataset.Scanner

    connect(sigName: "notify::scanner", callback: (...args: any[]) => void): number
    on(sigName: "notify::scanner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scanner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scanner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scanner", ...args: any[]): void
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

class Scanner extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Scanner

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.Scanner

    constructor(config?: Scanner.ConstructorProperties) 
    _init(config?: Scanner.ConstructorProperties): void
}

module ScannerBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

        scannerBuilder?: any | null
    }

}

interface ScannerBuilder {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    readonly scannerBuilder: any
    __gtype__: number

    // Own fields of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    finish(): Scanner | null
    setFilter(expression: Arrow.Expression): boolean

    // Class property signals of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    connect(sigName: "notify::scanner-builder", callback: (...args: any[]) => void): number
    on(sigName: "notify::scanner-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scanner-builder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scanner-builder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scanner-builder", ...args: any[]): void
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

class ScannerBuilder extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    constructor(config?: ScannerBuilder.ConstructorProperties) 
    constructor(dataset: Dataset) 
    static new(dataset: Dataset): ScannerBuilder
    static newRecordBatchReader(reader: Arrow.RecordBatchReader): ScannerBuilder
    _init(config?: ScannerBuilder.ConstructorProperties): void
}

interface CSVFileFormatClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.CSVFileFormatClass

    parentClass: FileFormatClass
}

abstract class CSVFileFormatClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.CSVFileFormatClass

    static name: string
}

interface DatasetClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.DatasetClass

    parentClass: GObject.ObjectClass
}

abstract class DatasetClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DatasetClass

    static name: string
}

interface DatasetFactoryClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.DatasetFactoryClass

    parentClass: GObject.ObjectClass
}

abstract class DatasetFactoryClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DatasetFactoryClass

    static name: string
}

interface DirectoryPartitioningClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioningClass

    parentClass: KeyValuePartitioningClass
}

abstract class DirectoryPartitioningClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioningClass

    static name: string
}

interface FileFormatClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileFormatClass

    parentClass: GObject.ObjectClass
}

abstract class FileFormatClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileFormatClass

    static name: string
}

interface FileSystemDatasetClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetClass

    parentClass: DatasetClass
}

abstract class FileSystemDatasetClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetClass

    static name: string
}

interface FileSystemDatasetFactoryClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactoryClass

    parentClass: DatasetFactoryClass
}

abstract class FileSystemDatasetFactoryClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactoryClass

    static name: string
}

interface FileSystemDatasetWriteOptionsClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class FileSystemDatasetWriteOptionsClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptionsClass

    static name: string
}

interface FileWriteOptionsClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileWriteOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class FileWriteOptionsClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriteOptionsClass

    static name: string
}

interface FileWriterClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileWriterClass

    parentClass: GObject.ObjectClass
}

abstract class FileWriterClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriterClass

    static name: string
}

interface FragmentClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FragmentClass

    parentClass: GObject.ObjectClass
}

abstract class FragmentClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FragmentClass

    static name: string
}

interface IPCFileFormatClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.IPCFileFormatClass

    parentClass: FileFormatClass
}

abstract class IPCFileFormatClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.IPCFileFormatClass

    static name: string
}

interface InMemoryFragmentClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.InMemoryFragmentClass

    parentClass: FragmentClass
}

abstract class InMemoryFragmentClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.InMemoryFragmentClass

    static name: string
}

interface KeyValuePartitioningClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioningClass

    parentClass: PartitioningClass
}

abstract class KeyValuePartitioningClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioningClass

    static name: string
}

interface ParquetFileFormatClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.ParquetFileFormatClass

    parentClass: FileFormatClass
}

abstract class ParquetFileFormatClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ParquetFileFormatClass

    static name: string
}

interface PartitioningClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.PartitioningClass

    parentClass: GObject.ObjectClass
}

abstract class PartitioningClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.PartitioningClass

    static name: string
}

interface PartitioningOptionsClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.PartitioningOptionsClass

    parentClass: GObject.ObjectClass
}

abstract class PartitioningOptionsClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.PartitioningOptionsClass

    static name: string
}

interface ScannerBuilderClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.ScannerBuilderClass

    parentClass: GObject.ObjectClass
}

abstract class ScannerBuilderClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ScannerBuilderClass

    static name: string
}

interface ScannerClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.ScannerClass

    parentClass: GObject.ObjectClass
}

abstract class ScannerClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ScannerClass

    static name: string
}

}

export default ArrowDataset;