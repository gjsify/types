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

export namespace ArrowDataset {
    /**
     * ArrowDataset-1.0
     */

    /**
     * They are corresponding to `arrow::dataset::SegmentEncoding` values.
     */

    /**
     * They are corresponding to `arrow::dataset::SegmentEncoding` values.
     */
    export namespace SegmentEncoding {
        export const $gtype: GObject.GType<SegmentEncoding>;
    }

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
    namespace CSVFileFormat {
        // Constructor properties interface

        interface ConstructorProps extends FileFormat.ConstructorProps {}
    }

    class CSVFileFormat extends FileFormat {
        static $gtype: GObject.GType<CSVFileFormat>;

        // Constructors

        constructor(properties?: Partial<CSVFileFormat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CSVFileFormat;
    }

    namespace Dataset {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dataset: any;
        }
    }

    abstract class Dataset extends GObject.Object {
        static $gtype: GObject.GType<Dataset>;

        // Properties

        set dataset(val: any);

        // Constructors

        constructor(properties?: Partial<Dataset.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        begin_scan(): ScannerBuilder | null;
        get_type_name(): string;
        to_table(): Arrow.Table | null;
    }

    namespace DatasetFactory {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dataset_factory: any;
            datasetFactory: any;
        }
    }

    abstract class DatasetFactory extends GObject.Object {
        static $gtype: GObject.GType<DatasetFactory>;

        // Properties

        set dataset_factory(val: any);
        set datasetFactory(val: any);

        // Constructors

        constructor(properties?: Partial<DatasetFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        finish(options?: FinishOptions | null): Dataset | null;
    }

    namespace DirectoryPartitioning {
        // Constructor properties interface

        interface ConstructorProps extends KeyValuePartitioning.ConstructorProps {}
    }

    class DirectoryPartitioning extends KeyValuePartitioning {
        static $gtype: GObject.GType<DirectoryPartitioning>;

        // Constructors

        constructor(properties?: Partial<DirectoryPartitioning.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            schema: Arrow.Schema,
            dictionaries?: Arrow.Array[] | null,
            options?: KeyValuePartitioningOptions | null,
        ): DirectoryPartitioning;
    }

    namespace FileFormat {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            format: any;
        }
    }

    class FileFormat extends GObject.Object {
        static $gtype: GObject.GType<FileFormat>;

        // Properties

        set format(val: any);

        // Constructors

        constructor(properties?: Partial<FileFormat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

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

    namespace FileSystemDataset {
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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<FileSystemDataset.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        static write_scanner(scanner: Scanner, options: FileSystemDatasetWriteOptions): boolean;
    }

    namespace FileSystemDatasetFactory {
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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<FileSystemDatasetFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file_format: FileFormat): FileSystemDatasetFactory;

        // Methods

        add_path(path: string): boolean;
        finish(options?: FinishOptions | null): FileSystemDataset | null;
        set_file_system(file_system: Arrow.FileSystem): boolean;
        set_file_system_uri(uri: string): boolean;
    }

    namespace FileSystemDatasetWriteOptions {
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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<FileSystemDatasetWriteOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FileSystemDatasetWriteOptions;
    }

    namespace FileWriteOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            options: any;
        }
    }

    class FileWriteOptions extends GObject.Object {
        static $gtype: GObject.GType<FileWriteOptions>;

        // Properties

        set options(val: any);

        // Constructors

        constructor(properties?: Partial<FileWriteOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    namespace FileWriter {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            writer: any;
        }
    }

    class FileWriter extends GObject.Object {
        static $gtype: GObject.GType<FileWriter>;

        // Properties

        set writer(val: any);

        // Constructors

        constructor(properties?: Partial<FileWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        finish(): boolean;
        write_record_batch(record_batch: Arrow.RecordBatch): boolean;
        write_record_batch_reader(reader: Arrow.RecordBatchReader): boolean;
    }

    namespace FinishOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            finish_options: any;
            finishOptions: any;
            inspect_n_fragments: number;
            inspectNFragments: number;
            schema: Arrow.Schema;
            validate_fragments: boolean;
            validateFragments: boolean;
        }
    }

    class FinishOptions extends GObject.Object {
        static $gtype: GObject.GType<FinishOptions>;

        // Properties

        set finish_options(val: any);
        set finishOptions(val: any);
        /**
         * The number of fragments to be used to inspect schema.
         */
        get inspect_n_fragments(): number;
        set inspect_n_fragments(val: number);
        /**
         * The number of fragments to be used to inspect schema.
         */
        get inspectNFragments(): number;
        set inspectNFragments(val: number);
        /**
         * The schema to finalize the dataset's schema.
         */
        get schema(): Arrow.Schema;
        set schema(val: Arrow.Schema);
        /**
         * Whether validate fragments against the given schema or not.
         */
        get validate_fragments(): boolean;
        set validate_fragments(val: boolean);
        /**
         * Whether validate fragments against the given schema or not.
         */
        get validateFragments(): boolean;
        set validateFragments(val: boolean);

        // Constructors

        constructor(properties?: Partial<FinishOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FinishOptions;
    }

    namespace Fragment {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            fragment: any;
        }
    }

    abstract class Fragment extends GObject.Object {
        static $gtype: GObject.GType<Fragment>;

        // Properties

        set fragment(val: any);

        // Constructors

        constructor(properties?: Partial<Fragment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    namespace HivePartitioning {
        // Constructor properties interface

        interface ConstructorProps extends KeyValuePartitioning.ConstructorProps {}
    }

    class HivePartitioning extends KeyValuePartitioning {
        static $gtype: GObject.GType<HivePartitioning>;

        // Constructors

        constructor(properties?: Partial<HivePartitioning.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            schema: Arrow.Schema,
            dictionaries?: Arrow.Array[] | null,
            options?: HivePartitioningOptions | null,
        ): HivePartitioning;

        // Methods

        get_null_fallback(): string;
    }

    namespace HivePartitioningOptions {
        // Constructor properties interface

        interface ConstructorProps extends KeyValuePartitioningOptions.ConstructorProps {
            null_fallback: string;
            nullFallback: string;
        }
    }

    class HivePartitioningOptions extends KeyValuePartitioningOptions {
        static $gtype: GObject.GType<HivePartitioningOptions>;

        // Properties

        /**
         * The fallback string for null. This is used only by
         * #GADatasetHivePartitioning.
         */
        get null_fallback(): string;
        set null_fallback(val: string);
        /**
         * The fallback string for null. This is used only by
         * #GADatasetHivePartitioning.
         */
        get nullFallback(): string;
        set nullFallback(val: string);

        // Constructors

        constructor(properties?: Partial<HivePartitioningOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): HivePartitioningOptions;
    }

    namespace IPCFileFormat {
        // Constructor properties interface

        interface ConstructorProps extends FileFormat.ConstructorProps {}
    }

    class IPCFileFormat extends FileFormat {
        static $gtype: GObject.GType<IPCFileFormat>;

        // Constructors

        constructor(properties?: Partial<IPCFileFormat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IPCFileFormat;
    }

    namespace InMemoryFragment {
        // Constructor properties interface

        interface ConstructorProps extends Fragment.ConstructorProps {}
    }

    class InMemoryFragment extends Fragment {
        static $gtype: GObject.GType<InMemoryFragment>;

        // Constructors

        constructor(properties?: Partial<InMemoryFragment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](schema: Arrow.Schema, record_batches: Arrow.RecordBatch[]): InMemoryFragment;
    }

    namespace KeyValuePartitioning {
        // Constructor properties interface

        interface ConstructorProps extends Partitioning.ConstructorProps {}
    }

    abstract class KeyValuePartitioning extends Partitioning {
        static $gtype: GObject.GType<KeyValuePartitioning>;

        // Constructors

        constructor(properties?: Partial<KeyValuePartitioning.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    namespace KeyValuePartitioningOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            segment_encoding: SegmentEncoding;
            segmentEncoding: SegmentEncoding;
        }
    }

    class KeyValuePartitioningOptions extends GObject.Object {
        static $gtype: GObject.GType<KeyValuePartitioningOptions>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<KeyValuePartitioningOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): KeyValuePartitioningOptions;
    }

    namespace ParquetFileFormat {
        // Constructor properties interface

        interface ConstructorProps extends FileFormat.ConstructorProps {}
    }

    class ParquetFileFormat extends FileFormat {
        static $gtype: GObject.GType<ParquetFileFormat>;

        // Constructors

        constructor(properties?: Partial<ParquetFileFormat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ParquetFileFormat;
    }

    namespace Partitioning {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            partitioning: any;
        }
    }

    abstract class Partitioning extends GObject.Object {
        static $gtype: GObject.GType<Partitioning>;

        // Properties

        set partitioning(val: any);

        // Constructors

        constructor(properties?: Partial<Partitioning.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        static create_default(): Partitioning;

        // Methods

        get_type_name(): string;
    }

    namespace PartitioningFactoryOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            infer_dictionary: boolean;
            inferDictionary: boolean;
            schema: Arrow.Schema;
            segment_encoding: SegmentEncoding;
            segmentEncoding: SegmentEncoding;
        }
    }

    class PartitioningFactoryOptions extends GObject.Object {
        static $gtype: GObject.GType<PartitioningFactoryOptions>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<PartitioningFactoryOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PartitioningFactoryOptions;
    }

    namespace Scanner {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scanner: any;
        }
    }

    class Scanner extends GObject.Object {
        static $gtype: GObject.GType<Scanner>;

        // Properties

        set scanner(val: any);

        // Constructors

        constructor(properties?: Partial<Scanner.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        to_table(): Arrow.Table | null;
    }

    namespace ScannerBuilder {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scanner_builder: any;
            scannerBuilder: any;
        }
    }

    class ScannerBuilder extends GObject.Object {
        static $gtype: GObject.GType<ScannerBuilder>;

        // Properties

        set scanner_builder(val: any);
        set scannerBuilder(val: any);

        // Constructors

        constructor(properties?: Partial<ScannerBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](dataset: Dataset): ScannerBuilder;

        static new_record_batch_reader(reader: Arrow.RecordBatchReader): ScannerBuilder;

        // Methods

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
    type FinishOptionsClass = typeof FinishOptions;
    type FragmentClass = typeof Fragment;
    type HivePartitioningClass = typeof HivePartitioning;
    type HivePartitioningOptionsClass = typeof HivePartitioningOptions;
    type IPCFileFormatClass = typeof IPCFileFormat;
    type InMemoryFragmentClass = typeof InMemoryFragment;
    type KeyValuePartitioningClass = typeof KeyValuePartitioning;
    type KeyValuePartitioningOptionsClass = typeof KeyValuePartitioningOptions;
    type ParquetFileFormatClass = typeof ParquetFileFormat;
    type PartitioningClass = typeof Partitioning;
    type PartitioningFactoryOptionsClass = typeof PartitioningFactoryOptions;
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
