
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
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

    // Own fields of ArrowDataset-1.0.ArrowDataset.CSVFileFormat

    parent_instance: FileFormat & GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.CSVFileFormat

    connect(sigName: "notify::format", callback: (($obj: CSVFileFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: CSVFileFormat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CSVFileFormat extends FileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.CSVFileFormat

    static name: string
    static $gtype: GObject.GType<CSVFileFormat>

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

    // Own fields of ArrowDataset-1.0.ArrowDataset.Dataset

    parent_instance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.Dataset

    begin_scan(): ScannerBuilder | null
    get_type_name(): string | null
    to_table(): Arrow.Table | null

    // Class property signals of ArrowDataset-1.0.ArrowDataset.Dataset

    connect(sigName: "notify::dataset", callback: (($obj: Dataset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dataset", callback: (($obj: Dataset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dataset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Dataset extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Dataset

    static name: string
    static $gtype: GObject.GType<Dataset>

    // Constructors of ArrowDataset-1.0.ArrowDataset.Dataset

    constructor(config?: Dataset.ConstructorProperties) 
    _init(config?: Dataset.ConstructorProperties): void
}

module DatasetFactory {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.DatasetFactory

        dataset_factory?: any | null
    }

}

interface DatasetFactory {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    readonly dataset_factory: any

    // Own fields of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    parent_instance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    finish(): Dataset | null

    // Class property signals of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    connect(sigName: "notify::dataset-factory", callback: (($obj: DatasetFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dataset-factory", callback: (($obj: DatasetFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dataset-factory", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DatasetFactory extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    static name: string
    static $gtype: GObject.GType<DatasetFactory>

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

    // Own fields of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioning

    parent_instance: KeyValuePartitioning & Partitioning & GObject.Object & GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioning

    connect(sigName: "notify::partitioning", callback: (($obj: DirectoryPartitioning, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partitioning", callback: (($obj: DirectoryPartitioning, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DirectoryPartitioning extends KeyValuePartitioning {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioning

    static name: string
    static $gtype: GObject.GType<DirectoryPartitioning>

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

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileFormat

    parent_instance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.FileFormat

    equal(other_format: FileFormat): boolean
    get_default_write_options(): FileWriteOptions
    get_type_name(): string | null
    open_writer(destination: Arrow.OutputStream, file_system: Arrow.FileSystem, path: string | null, schema: Arrow.Schema, options: FileWriteOptions): FileWriter

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileFormat

    connect(sigName: "notify::format", callback: (($obj: FileFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: FileFormat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileFormat extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileFormat

    static name: string
    static $gtype: GObject.GType<FileFormat>

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
        file_system?: Arrow.FileSystem | null
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
    readonly file_system: Arrow.FileSystem
    /**
     * Format of the dataset.
     */
    readonly format: FileFormat
    /**
     * Partitioning of the dataset.
     */
    readonly partitioning: Partitioning

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    parent_instance: Dataset & GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    connect(sigName: "notify::file-system", callback: (($obj: FileSystemDataset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-system", callback: (($obj: FileSystemDataset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: "notify::format", callback: (($obj: FileSystemDataset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: FileSystemDataset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::partitioning", callback: (($obj: FileSystemDataset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partitioning", callback: (($obj: FileSystemDataset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: "notify::dataset", callback: (($obj: FileSystemDataset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dataset", callback: (($obj: FileSystemDataset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dataset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileSystemDataset extends Dataset {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    static name: string
    static $gtype: GObject.GType<FileSystemDataset>

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    constructor(config?: FileSystemDataset.ConstructorProperties) 
    _init(config?: FileSystemDataset.ConstructorProperties): void
    static write_scanner(scanner: Scanner, options: FileSystemDatasetWriteOptions): boolean
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
        partition_base_dir?: string | null
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
    readonly file_system: Arrow.FileSystem
    /**
     * Format passed to #GADatasetFileSystemDataset.
     */
    readonly format: FileFormat
    /**
     * Partition base directory used by #GADatasetFileSystemDataset.
     */
    partition_base_dir: string | null
    /**
     * Partitioning used by #GADatasetFileSystemDataset.
     */
    partitioning: Partitioning

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    parent_instance: DatasetFactory & GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    add_path(path: string | null): boolean
    finish(): FileSystemDataset | null

    // Overloads of finish

    finish(): Dataset | null
    set_file_system(file_system: Arrow.FileSystem): boolean
    set_file_system_uri(uri: string | null): boolean

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    connect(sigName: "notify::file-system", callback: (($obj: FileSystemDatasetFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-system", callback: (($obj: FileSystemDatasetFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: "notify::format", callback: (($obj: FileSystemDatasetFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: FileSystemDatasetFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::partition-base-dir", callback: (($obj: FileSystemDatasetFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition-base-dir", callback: (($obj: FileSystemDatasetFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::partition-base-dir", ...args: any[]): void
    connect(sigName: "notify::partitioning", callback: (($obj: FileSystemDatasetFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partitioning", callback: (($obj: FileSystemDatasetFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: "notify::dataset-factory", callback: (($obj: FileSystemDatasetFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dataset-factory", callback: (($obj: FileSystemDatasetFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dataset-factory", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileSystemDatasetFactory extends DatasetFactory {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    static name: string
    static $gtype: GObject.GType<FileSystemDatasetFactory>

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    constructor(config?: FileSystemDatasetFactory.ConstructorProperties) 
    constructor(file_format: FileFormat) 
    static new(file_format: FileFormat): FileSystemDatasetFactory
    _init(config?: FileSystemDatasetFactory.ConstructorProperties): void
}

module FileSystemDatasetWriteOptions {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

        base_dir?: string | null
        /**
         * Template string used to generate fragment base names. {i} will be
         * replaced by an auto incremented integer.
         */
        base_name_template?: string | null
        file_system?: Arrow.FileSystem | null
        file_write_options?: FileWriteOptions | null
        /**
         * Maximum number of partitions any batch may be written into.
         */
        max_partitions?: number | null
        /**
         * #GADatasetPartitioning used to generate fragment paths.
         */
        partitioning?: Partitioning | null
    }

}

interface FileSystemDatasetWriteOptions {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    base_dir: string | null
    /**
     * Template string used to generate fragment base names. {i} will be
     * replaced by an auto incremented integer.
     */
    base_name_template: string | null
    file_system: Arrow.FileSystem
    file_write_options: FileWriteOptions
    /**
     * Maximum number of partitions any batch may be written into.
     */
    max_partitions: number
    /**
     * #GADatasetPartitioning used to generate fragment paths.
     */
    partitioning: Partitioning

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    parent_instance: GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    connect(sigName: "notify::base-dir", callback: (($obj: FileSystemDatasetWriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-dir", callback: (($obj: FileSystemDatasetWriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-dir", ...args: any[]): void
    connect(sigName: "notify::base-name-template", callback: (($obj: FileSystemDatasetWriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-name-template", callback: (($obj: FileSystemDatasetWriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-name-template", ...args: any[]): void
    connect(sigName: "notify::file-system", callback: (($obj: FileSystemDatasetWriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-system", callback: (($obj: FileSystemDatasetWriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: "notify::file-write-options", callback: (($obj: FileSystemDatasetWriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-write-options", callback: (($obj: FileSystemDatasetWriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-write-options", ...args: any[]): void
    connect(sigName: "notify::max-partitions", callback: (($obj: FileSystemDatasetWriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-partitions", callback: (($obj: FileSystemDatasetWriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-partitions", ...args: any[]): void
    connect(sigName: "notify::partitioning", callback: (($obj: FileSystemDatasetWriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partitioning", callback: (($obj: FileSystemDatasetWriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileSystemDatasetWriteOptions extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    static name: string
    static $gtype: GObject.GType<FileSystemDatasetWriteOptions>

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

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

    parent_instance: GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

    connect(sigName: "notify::options", callback: (($obj: FileWriteOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: FileWriteOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileWriteOptions extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

    static name: string
    static $gtype: GObject.GType<FileWriteOptions>

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

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileWriter

    parent_instance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.FileWriter

    finish(): boolean
    write_record_batch(record_batch: Arrow.RecordBatch): boolean
    write_record_batch_reader(reader: Arrow.RecordBatchReader): boolean

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileWriter

    connect(sigName: "notify::writer", callback: (($obj: FileWriter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writer", callback: (($obj: FileWriter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileWriter extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriter

    static name: string
    static $gtype: GObject.GType<FileWriter>

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

    // Own fields of ArrowDataset-1.0.ArrowDataset.Fragment

    parent_instance: GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.Fragment

    connect(sigName: "notify::fragment", callback: (($obj: Fragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fragment", callback: (($obj: Fragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fragment", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Fragment extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Fragment

    static name: string
    static $gtype: GObject.GType<Fragment>

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

    // Own fields of ArrowDataset-1.0.ArrowDataset.IPCFileFormat

    parent_instance: FileFormat & GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.IPCFileFormat

    connect(sigName: "notify::format", callback: (($obj: IPCFileFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: IPCFileFormat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IPCFileFormat extends FileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.IPCFileFormat

    static name: string
    static $gtype: GObject.GType<IPCFileFormat>

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

    // Own fields of ArrowDataset-1.0.ArrowDataset.InMemoryFragment

    parent_instance: Fragment & GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.InMemoryFragment

    connect(sigName: "notify::fragment", callback: (($obj: InMemoryFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fragment", callback: (($obj: InMemoryFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fragment", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class InMemoryFragment extends Fragment {

    // Own properties of ArrowDataset-1.0.ArrowDataset.InMemoryFragment

    static name: string
    static $gtype: GObject.GType<InMemoryFragment>

    // Constructors of ArrowDataset-1.0.ArrowDataset.InMemoryFragment

    constructor(config?: InMemoryFragment.ConstructorProperties) 
    constructor(schema: Arrow.Schema, record_batches: Arrow.RecordBatch[]) 
    static new(schema: Arrow.Schema, record_batches: Arrow.RecordBatch[]): InMemoryFragment
    _init(config?: InMemoryFragment.ConstructorProperties): void
}

module KeyValuePartitioning {

    // Constructor properties interface

    interface ConstructorProperties extends Partitioning.ConstructorProperties {
    }

}

interface KeyValuePartitioning {

    // Own fields of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioning

    parent_instance: Partitioning & GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioning

    connect(sigName: "notify::partitioning", callback: (($obj: KeyValuePartitioning, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partitioning", callback: (($obj: KeyValuePartitioning, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class KeyValuePartitioning extends Partitioning {

    // Own properties of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioning

    static name: string
    static $gtype: GObject.GType<KeyValuePartitioning>

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

    // Own fields of ArrowDataset-1.0.ArrowDataset.ParquetFileFormat

    parent_instance: FileFormat & GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.ParquetFileFormat

    connect(sigName: "notify::format", callback: (($obj: ParquetFileFormat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: ParquetFileFormat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ParquetFileFormat extends FileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ParquetFileFormat

    static name: string
    static $gtype: GObject.GType<ParquetFileFormat>

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

    // Own fields of ArrowDataset-1.0.ArrowDataset.Partitioning

    parent_instance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.Partitioning

    get_type_name(): string | null

    // Class property signals of ArrowDataset-1.0.ArrowDataset.Partitioning

    connect(sigName: "notify::partitioning", callback: (($obj: Partitioning, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partitioning", callback: (($obj: Partitioning, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Partitioning extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Partitioning

    static name: string
    static $gtype: GObject.GType<Partitioning>

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
        infer_dictionary?: boolean | null
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
        segment_encoding?: SegmentEncoding | null
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
    infer_dictionary: boolean
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
    segment_encoding: SegmentEncoding

    // Own fields of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

    parent_instance: GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

    connect(sigName: "notify::infer-dictionary", callback: (($obj: PartitioningOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::infer-dictionary", callback: (($obj: PartitioningOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::infer-dictionary", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: PartitioningOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: PartitioningOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: "notify::segment-encoding", callback: (($obj: PartitioningOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::segment-encoding", callback: (($obj: PartitioningOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::segment-encoding", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PartitioningOptions extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

    static name: string
    static $gtype: GObject.GType<PartitioningOptions>

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

    // Own fields of ArrowDataset-1.0.ArrowDataset.Scanner

    parent_instance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.Scanner

    to_table(): Arrow.Table | null

    // Class property signals of ArrowDataset-1.0.ArrowDataset.Scanner

    connect(sigName: "notify::scanner", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scanner", callback: (($obj: Scanner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scanner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Scanner extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Scanner

    static name: string
    static $gtype: GObject.GType<Scanner>

    // Constructors of ArrowDataset-1.0.ArrowDataset.Scanner

    constructor(config?: Scanner.ConstructorProperties) 
    _init(config?: Scanner.ConstructorProperties): void
}

module ScannerBuilder {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

        scanner_builder?: any | null
    }

}

interface ScannerBuilder {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    readonly scanner_builder: any

    // Own fields of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    parent_instance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    finish(): Scanner | null
    set_filter(expression: Arrow.Expression): boolean

    // Class property signals of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    connect(sigName: "notify::scanner-builder", callback: (($obj: ScannerBuilder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scanner-builder", callback: (($obj: ScannerBuilder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scanner-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ScannerBuilder extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    static name: string
    static $gtype: GObject.GType<ScannerBuilder>

    // Constructors of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    constructor(config?: ScannerBuilder.ConstructorProperties) 
    constructor(dataset: Dataset) 
    static new(dataset: Dataset): ScannerBuilder
    static new_record_batch_reader(reader: Arrow.RecordBatchReader): ScannerBuilder
    _init(config?: ScannerBuilder.ConstructorProperties): void
}

interface CSVFileFormatClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.CSVFileFormatClass

    parent_class: FileFormatClass
}

abstract class CSVFileFormatClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.CSVFileFormatClass

    static name: string
}

interface DatasetClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.DatasetClass

    parent_class: GObject.ObjectClass
}

abstract class DatasetClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DatasetClass

    static name: string
}

interface DatasetFactoryClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.DatasetFactoryClass

    parent_class: GObject.ObjectClass
}

abstract class DatasetFactoryClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DatasetFactoryClass

    static name: string
}

interface DirectoryPartitioningClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioningClass

    parent_class: KeyValuePartitioningClass
}

abstract class DirectoryPartitioningClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioningClass

    static name: string
}

interface FileFormatClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileFormatClass

    parent_class: GObject.ObjectClass
}

abstract class FileFormatClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileFormatClass

    static name: string
}

interface FileSystemDatasetClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetClass

    parent_class: DatasetClass
}

abstract class FileSystemDatasetClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetClass

    static name: string
}

interface FileSystemDatasetFactoryClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactoryClass

    parent_class: DatasetFactoryClass
}

abstract class FileSystemDatasetFactoryClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactoryClass

    static name: string
}

interface FileSystemDatasetWriteOptionsClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class FileSystemDatasetWriteOptionsClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptionsClass

    static name: string
}

interface FileWriteOptionsClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileWriteOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class FileWriteOptionsClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriteOptionsClass

    static name: string
}

interface FileWriterClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileWriterClass

    parent_class: GObject.ObjectClass
}

abstract class FileWriterClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriterClass

    static name: string
}

interface FragmentClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FragmentClass

    parent_class: GObject.ObjectClass
}

abstract class FragmentClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FragmentClass

    static name: string
}

interface IPCFileFormatClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.IPCFileFormatClass

    parent_class: FileFormatClass
}

abstract class IPCFileFormatClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.IPCFileFormatClass

    static name: string
}

interface InMemoryFragmentClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.InMemoryFragmentClass

    parent_class: FragmentClass
}

abstract class InMemoryFragmentClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.InMemoryFragmentClass

    static name: string
}

interface KeyValuePartitioningClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioningClass

    parent_class: PartitioningClass
}

abstract class KeyValuePartitioningClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioningClass

    static name: string
}

interface ParquetFileFormatClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.ParquetFileFormatClass

    parent_class: FileFormatClass
}

abstract class ParquetFileFormatClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ParquetFileFormatClass

    static name: string
}

interface PartitioningClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.PartitioningClass

    parent_class: GObject.ObjectClass
}

abstract class PartitioningClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.PartitioningClass

    static name: string
}

interface PartitioningOptionsClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.PartitioningOptionsClass

    parent_class: GObject.ObjectClass
}

abstract class PartitioningOptionsClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.PartitioningOptionsClass

    static name: string
}

interface ScannerBuilderClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.ScannerBuilderClass

    parent_class: GObject.ObjectClass
}

abstract class ScannerBuilderClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ScannerBuilderClass

    static name: string
}

interface ScannerClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.ScannerClass

    parent_class: GObject.ObjectClass
}

abstract class ScannerClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ScannerClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default ArrowDataset;
// END