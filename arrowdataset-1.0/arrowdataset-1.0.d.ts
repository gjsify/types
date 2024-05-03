/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './arrowdataset-1.0-ambient.d.ts';

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

        interface ConstructorProps extends FileFormat.ConstructorProps {}
    }

    class CSVFileFormat extends FileFormat {
        static $gtype: GObject.GType<CSVFileFormat>;

        // Constructors of ArrowDataset.CSVFileFormat

        constructor(properties?: Partial<CSVFileFormat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CSVFileFormat;
    }

    module Dataset {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dataset: any;
        }
    }

    abstract class Dataset extends GObject.Object {
        static $gtype: GObject.GType<Dataset>;

        // Own properties of ArrowDataset.Dataset

        set dataset(val: any);

        // Constructors of ArrowDataset.Dataset

        constructor(properties?: Partial<Dataset.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of ArrowDataset.Dataset

        begin_scan(): ScannerBuilder | null;
        get_type_name(): string;
        to_table(): Arrow.Table | null;
    }

    module DatasetFactory {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dataset_factory: any;
            datasetFactory: any;
        }
    }

    abstract class DatasetFactory extends GObject.Object {
        static $gtype: GObject.GType<DatasetFactory>;

        // Own properties of ArrowDataset.DatasetFactory

        set dataset_factory(val: any);
        set datasetFactory(val: any);

        // Constructors of ArrowDataset.DatasetFactory

        constructor(properties?: Partial<DatasetFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of ArrowDataset.DatasetFactory

        finish(): Dataset | null;
    }

    module DirectoryPartitioning {
        // Constructor properties interface

        interface ConstructorProps extends KeyValuePartitioning.ConstructorProps {}
    }

    class DirectoryPartitioning extends KeyValuePartitioning {
        static $gtype: GObject.GType<DirectoryPartitioning>;

        // Constructors of ArrowDataset.DirectoryPartitioning

        constructor(properties?: Partial<DirectoryPartitioning.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            schema: Arrow.Schema,
            dictionaries?: Arrow.Array[] | null,
            options?: PartitioningOptions | null,
        ): DirectoryPartitioning;
        // Conflicted with ArrowDataset.Partitioning.new

        static ['new'](...args: never[]): any;
    }

    module FileFormat {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            format: any;
        }
    }

    class FileFormat extends GObject.Object {
        static $gtype: GObject.GType<FileFormat>;

        // Own properties of ArrowDataset.FileFormat

        set format(val: any);

        // Constructors of ArrowDataset.FileFormat

        constructor(properties?: Partial<FileFormat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of ArrowDataset.FileFormat

        equal(other_format: FileFormat): boolean;
        get_default_write_options(): FileWriteOptions;
        get_type_name(): string;
        open_writer(
            destination: Arrow.OutputStream,
            file_system: Arrow.FileSystem,
            path: string,
            schema: Arrow.Schema,
            options: FileWriteOptions,
        ): FileWriter;
    }

    module FileSystemDataset {
        // Constructor properties interface

        interface ConstructorProps extends Dataset.ConstructorProps {
            file_system: Arrow.FileSystem;
            fileSystem: Arrow.FileSystem;
            format: FileFormat;
            partitioning: Partitioning;
        }
    }

    class FileSystemDataset extends Dataset {
        static $gtype: GObject.GType<FileSystemDataset>;

        // Own properties of ArrowDataset.FileSystemDataset

        /**
         * File system of the dataset.
         */
        get file_system(): Arrow.FileSystem;
        /**
         * File system of the dataset.
         */
        get fileSystem(): Arrow.FileSystem;
        /**
         * Format of the dataset.
         */
        get format(): FileFormat;
        /**
         * Partitioning of the dataset.
         */
        get partitioning(): Partitioning;

        // Constructors of ArrowDataset.FileSystemDataset

        constructor(properties?: Partial<FileSystemDataset.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of ArrowDataset.FileSystemDataset

        static write_scanner(scanner: Scanner, options: FileSystemDatasetWriteOptions): boolean;
    }

    module FileSystemDatasetFactory {
        // Constructor properties interface

        interface ConstructorProps extends DatasetFactory.ConstructorProps {
            file_system: Arrow.FileSystem;
            fileSystem: Arrow.FileSystem;
            format: FileFormat;
            partition_base_dir: string;
            partitionBaseDir: string;
            partitioning: Partitioning;
        }
    }

    class FileSystemDatasetFactory extends DatasetFactory {
        static $gtype: GObject.GType<FileSystemDatasetFactory>;

        // Own properties of ArrowDataset.FileSystemDatasetFactory

        /**
         * File system passed to #GADatasetFileSystemDataset.
         */
        get file_system(): Arrow.FileSystem;
        /**
         * File system passed to #GADatasetFileSystemDataset.
         */
        get fileSystem(): Arrow.FileSystem;
        /**
         * Format passed to #GADatasetFileSystemDataset.
         */
        get format(): FileFormat;
        /**
         * Partition base directory used by #GADatasetFileSystemDataset.
         */
        get partition_base_dir(): string;
        set partition_base_dir(val: string);
        /**
         * Partition base directory used by #GADatasetFileSystemDataset.
         */
        get partitionBaseDir(): string;
        set partitionBaseDir(val: string);
        /**
         * Partitioning used by #GADatasetFileSystemDataset.
         */
        get partitioning(): Partitioning;
        set partitioning(val: Partitioning);

        // Constructors of ArrowDataset.FileSystemDatasetFactory

        constructor(properties?: Partial<FileSystemDatasetFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file_format: FileFormat): FileSystemDatasetFactory;

        // Own methods of ArrowDataset.FileSystemDatasetFactory

        add_path(path: string): boolean;
        finish(): FileSystemDataset | null;
        set_file_system(file_system: Arrow.FileSystem): boolean;
        set_file_system_uri(uri: string): boolean;
    }

    module FileSystemDatasetWriteOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            base_dir: string;
            baseDir: string;
            base_name_template: string;
            baseNameTemplate: string;
            file_system: Arrow.FileSystem;
            fileSystem: Arrow.FileSystem;
            file_write_options: FileWriteOptions;
            fileWriteOptions: FileWriteOptions;
            max_partitions: number;
            maxPartitions: number;
            partitioning: Partitioning;
        }
    }

    class FileSystemDatasetWriteOptions extends GObject.Object {
        static $gtype: GObject.GType<FileSystemDatasetWriteOptions>;

        // Own properties of ArrowDataset.FileSystemDatasetWriteOptions

        get base_dir(): string;
        set base_dir(val: string);
        get baseDir(): string;
        set baseDir(val: string);
        /**
         * Template string used to generate fragment base names. {i} will be
         * replaced by an auto incremented integer.
         */
        get base_name_template(): string;
        set base_name_template(val: string);
        /**
         * Template string used to generate fragment base names. {i} will be
         * replaced by an auto incremented integer.
         */
        get baseNameTemplate(): string;
        set baseNameTemplate(val: string);
        get file_system(): Arrow.FileSystem;
        set file_system(val: Arrow.FileSystem);
        get fileSystem(): Arrow.FileSystem;
        set fileSystem(val: Arrow.FileSystem);
        get file_write_options(): FileWriteOptions;
        set file_write_options(val: FileWriteOptions);
        get fileWriteOptions(): FileWriteOptions;
        set fileWriteOptions(val: FileWriteOptions);
        /**
         * Maximum number of partitions any batch may be written into.
         */
        get max_partitions(): number;
        set max_partitions(val: number);
        /**
         * Maximum number of partitions any batch may be written into.
         */
        get maxPartitions(): number;
        set maxPartitions(val: number);
        /**
         * #GADatasetPartitioning used to generate fragment paths.
         */
        get partitioning(): Partitioning;
        set partitioning(val: Partitioning);

        // Constructors of ArrowDataset.FileSystemDatasetWriteOptions

        constructor(properties?: Partial<FileSystemDatasetWriteOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FileSystemDatasetWriteOptions;
    }

    module FileWriteOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            options: any;
        }
    }

    class FileWriteOptions extends GObject.Object {
        static $gtype: GObject.GType<FileWriteOptions>;

        // Own properties of ArrowDataset.FileWriteOptions

        set options(val: any);

        // Constructors of ArrowDataset.FileWriteOptions

        constructor(properties?: Partial<FileWriteOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module FileWriter {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            writer: any;
        }
    }

    class FileWriter extends GObject.Object {
        static $gtype: GObject.GType<FileWriter>;

        // Own properties of ArrowDataset.FileWriter

        set writer(val: any);

        // Constructors of ArrowDataset.FileWriter

        constructor(properties?: Partial<FileWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of ArrowDataset.FileWriter

        finish(): boolean;
        write_record_batch(record_batch: Arrow.RecordBatch): boolean;
        write_record_batch_reader(reader: Arrow.RecordBatchReader): boolean;
    }

    module Fragment {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            fragment: any;
        }
    }

    abstract class Fragment extends GObject.Object {
        static $gtype: GObject.GType<Fragment>;

        // Own properties of ArrowDataset.Fragment

        set fragment(val: any);

        // Constructors of ArrowDataset.Fragment

        constructor(properties?: Partial<Fragment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module IPCFileFormat {
        // Constructor properties interface

        interface ConstructorProps extends FileFormat.ConstructorProps {}
    }

    class IPCFileFormat extends FileFormat {
        static $gtype: GObject.GType<IPCFileFormat>;

        // Constructors of ArrowDataset.IPCFileFormat

        constructor(properties?: Partial<IPCFileFormat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IPCFileFormat;
    }

    module InMemoryFragment {
        // Constructor properties interface

        interface ConstructorProps extends Fragment.ConstructorProps {}
    }

    class InMemoryFragment extends Fragment {
        static $gtype: GObject.GType<InMemoryFragment>;

        // Constructors of ArrowDataset.InMemoryFragment

        constructor(properties?: Partial<InMemoryFragment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](schema: Arrow.Schema, record_batches: Arrow.RecordBatch[]): InMemoryFragment;
    }

    module KeyValuePartitioning {
        // Constructor properties interface

        interface ConstructorProps extends Partitioning.ConstructorProps {}
    }

    class KeyValuePartitioning extends Partitioning {
        static $gtype: GObject.GType<KeyValuePartitioning>;

        // Constructors of ArrowDataset.KeyValuePartitioning

        constructor(properties?: Partial<KeyValuePartitioning.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module ParquetFileFormat {
        // Constructor properties interface

        interface ConstructorProps extends FileFormat.ConstructorProps {}
    }

    class ParquetFileFormat extends FileFormat {
        static $gtype: GObject.GType<ParquetFileFormat>;

        // Constructors of ArrowDataset.ParquetFileFormat

        constructor(properties?: Partial<ParquetFileFormat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ParquetFileFormat;
    }

    module Partitioning {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            partitioning: any;
        }
    }

    class Partitioning extends GObject.Object {
        static $gtype: GObject.GType<Partitioning>;

        // Own properties of ArrowDataset.Partitioning

        set partitioning(val: any);

        // Constructors of ArrowDataset.Partitioning

        constructor(properties?: Partial<Partitioning.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Partitioning;

        // Own methods of ArrowDataset.Partitioning

        get_type_name(): string;
    }

    module PartitioningOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            infer_dictionary: boolean;
            inferDictionary: boolean;
            schema: Arrow.Schema;
            segment_encoding: SegmentEncoding;
            segmentEncoding: SegmentEncoding;
        }
    }

    class PartitioningOptions extends GObject.Object {
        static $gtype: GObject.GType<PartitioningOptions>;

        // Own properties of ArrowDataset.PartitioningOptions

        /**
         * When inferring a schema for partition fields, yield dictionary
         * encoded types instead of plain. This can be more efficient when
         * materializing virtual columns, and Expressions parsed by the
         * finished Partitioning will include dictionaries of all unique
         * inspected values for each field.
         */
        get infer_dictionary(): boolean;
        set infer_dictionary(val: boolean);
        /**
         * When inferring a schema for partition fields, yield dictionary
         * encoded types instead of plain. This can be more efficient when
         * materializing virtual columns, and Expressions parsed by the
         * finished Partitioning will include dictionaries of all unique
         * inspected values for each field.
         */
        get inferDictionary(): boolean;
        set inferDictionary(val: boolean);
        /**
         * Optionally, an expected schema can be provided, in which case
         * inference will only check discovered fields against the schema
         * and update internal state (such as dictionaries).
         */
        get schema(): Arrow.Schema;
        set schema(val: Arrow.Schema);
        /**
         * After splitting a path into components, decode the path
         * components before parsing according to this scheme.
         */
        get segment_encoding(): SegmentEncoding;
        set segment_encoding(val: SegmentEncoding);
        /**
         * After splitting a path into components, decode the path
         * components before parsing according to this scheme.
         */
        get segmentEncoding(): SegmentEncoding;
        set segmentEncoding(val: SegmentEncoding);

        // Constructors of ArrowDataset.PartitioningOptions

        constructor(properties?: Partial<PartitioningOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PartitioningOptions;
    }

    module Scanner {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scanner: any;
        }
    }

    class Scanner extends GObject.Object {
        static $gtype: GObject.GType<Scanner>;

        // Own properties of ArrowDataset.Scanner

        set scanner(val: any);

        // Constructors of ArrowDataset.Scanner

        constructor(properties?: Partial<Scanner.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of ArrowDataset.Scanner

        to_table(): Arrow.Table | null;
    }

    module ScannerBuilder {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scanner_builder: any;
            scannerBuilder: any;
        }
    }

    class ScannerBuilder extends GObject.Object {
        static $gtype: GObject.GType<ScannerBuilder>;

        // Own properties of ArrowDataset.ScannerBuilder

        set scanner_builder(val: any);
        set scannerBuilder(val: any);

        // Constructors of ArrowDataset.ScannerBuilder

        constructor(properties?: Partial<ScannerBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](dataset: Dataset): ScannerBuilder;

        static new_record_batch_reader(reader: Arrow.RecordBatchReader): ScannerBuilder;

        // Own methods of ArrowDataset.ScannerBuilder

        finish(): Scanner | null;
        set_filter(expression: Arrow.Expression): boolean;
    }

    type CSVFileFormatClass = typeof CSVFileFormat;
    type DatasetClass = typeof Dataset;
    type DatasetFactoryClass = typeof DatasetFactory;
    type DirectoryPartitioningClass = typeof DirectoryPartitioning;
    type FileFormatClass = typeof FileFormat;
    type FileSystemDatasetClass = typeof FileSystemDataset;
    type FileSystemDatasetFactoryClass = typeof FileSystemDatasetFactory;
    type FileSystemDatasetWriteOptionsClass = typeof FileSystemDatasetWriteOptions;
    type FileWriteOptionsClass = typeof FileWriteOptions;
    type FileWriterClass = typeof FileWriter;
    type FragmentClass = typeof Fragment;
    type IPCFileFormatClass = typeof IPCFileFormat;
    type InMemoryFragmentClass = typeof InMemoryFragment;
    type KeyValuePartitioningClass = typeof KeyValuePartitioning;
    type ParquetFileFormatClass = typeof ParquetFileFormat;
    type PartitioningClass = typeof Partitioning;
    type PartitioningOptionsClass = typeof PartitioningOptions;
    type ScannerBuilderClass = typeof ScannerBuilder;
    type ScannerClass = typeof Scanner;
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

export default ArrowDataset;
// END
