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
        // Signal signatures
        interface SignalSignatures extends FileFormat.SignalSignatures {
            'notify::format': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends FileFormat.ConstructorProps {}
    }

    class CSVFileFormat extends FileFormat {
        static $gtype: GObject.GType<CSVFileFormat>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CSVFileFormat.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CSVFileFormat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CSVFileFormat;

        // Signals

        connect<K extends keyof CSVFileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CSVFileFormat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CSVFileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CSVFileFormat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CSVFileFormat.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CSVFileFormat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Dataset {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::dataset': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dataset: any;
        }
    }

    abstract class Dataset extends GObject.Object {
        static $gtype: GObject.GType<Dataset>;

        // Properties

        set dataset(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dataset.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Dataset.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Dataset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dataset.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Dataset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dataset.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Dataset.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Dataset.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        begin_scan(): ScannerBuilder | null;
        get_type_name(): string;
        to_table(): Arrow.Table | null;
    }

    namespace DatasetFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::dataset-factory': (pspec: GObject.ParamSpec) => void;
        }

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DatasetFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DatasetFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DatasetFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DatasetFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DatasetFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DatasetFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DatasetFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DatasetFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        finish(): Dataset | null;
    }

    namespace DirectoryPartitioning {
        // Signal signatures
        interface SignalSignatures extends KeyValuePartitioning.SignalSignatures {
            'notify::partitioning': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends KeyValuePartitioning.ConstructorProps {}
    }

    class DirectoryPartitioning extends KeyValuePartitioning {
        static $gtype: GObject.GType<DirectoryPartitioning>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DirectoryPartitioning.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DirectoryPartitioning.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            schema: Arrow.Schema,
            dictionaries?: Arrow.Array[] | null,
            options?: PartitioningOptions | null,
        ): DirectoryPartitioning;
        // Conflicted with ArrowDataset.Partitioning.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof DirectoryPartitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DirectoryPartitioning.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DirectoryPartitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DirectoryPartitioning.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DirectoryPartitioning.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DirectoryPartitioning.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FileFormat {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::format': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            format: any;
        }
    }

    class FileFormat extends GObject.Object {
        static $gtype: GObject.GType<FileFormat>;

        // Properties

        set format(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileFormat.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileFormat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileFormat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileFormat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileFormat.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileFormat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
        // Signal signatures
        interface SignalSignatures extends Dataset.SignalSignatures {
            'notify::file-system': (pspec: GObject.ParamSpec) => void;
            'notify::format': (pspec: GObject.ParamSpec) => void;
            'notify::partitioning': (pspec: GObject.ParamSpec) => void;
            'notify::dataset': (pspec: GObject.ParamSpec) => void;
        }

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileSystemDataset.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileSystemDataset.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FileSystemDataset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSystemDataset.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileSystemDataset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSystemDataset.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileSystemDataset.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileSystemDataset.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static write_scanner(scanner: Scanner, options: FileSystemDatasetWriteOptions): boolean;
    }

    namespace FileSystemDatasetFactory {
        // Signal signatures
        interface SignalSignatures extends DatasetFactory.SignalSignatures {
            'notify::file-system': (pspec: GObject.ParamSpec) => void;
            'notify::format': (pspec: GObject.ParamSpec) => void;
            'notify::partition-base-dir': (pspec: GObject.ParamSpec) => void;
            'notify::partitioning': (pspec: GObject.ParamSpec) => void;
            'notify::dataset-factory': (pspec: GObject.ParamSpec) => void;
        }

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileSystemDatasetFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileSystemDatasetFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file_format: FileFormat): FileSystemDatasetFactory;

        // Signals

        connect<K extends keyof FileSystemDatasetFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSystemDatasetFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileSystemDatasetFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSystemDatasetFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileSystemDatasetFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileSystemDatasetFactory.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_path(path: string): boolean;
        finish(): FileSystemDataset | null;
        set_file_system(file_system: Arrow.FileSystem): boolean;
        set_file_system_uri(uri: string): boolean;
    }

    namespace FileSystemDatasetWriteOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::base-dir': (pspec: GObject.ParamSpec) => void;
            'notify::base-name-template': (pspec: GObject.ParamSpec) => void;
            'notify::file-system': (pspec: GObject.ParamSpec) => void;
            'notify::file-write-options': (pspec: GObject.ParamSpec) => void;
            'notify::max-partitions': (pspec: GObject.ParamSpec) => void;
            'notify::partitioning': (pspec: GObject.ParamSpec) => void;
        }

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileSystemDatasetWriteOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileSystemDatasetWriteOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FileSystemDatasetWriteOptions;

        // Signals

        connect<K extends keyof FileSystemDatasetWriteOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSystemDatasetWriteOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileSystemDatasetWriteOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSystemDatasetWriteOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileSystemDatasetWriteOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileSystemDatasetWriteOptions.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FileWriteOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::options': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            options: any;
        }
    }

    class FileWriteOptions extends GObject.Object {
        static $gtype: GObject.GType<FileWriteOptions>;

        // Properties

        set options(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileWriteOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileWriteOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FileWriteOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileWriteOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileWriteOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileWriteOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileWriteOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileWriteOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FileWriter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::writer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            writer: any;
        }
    }

    class FileWriter extends GObject.Object {
        static $gtype: GObject.GType<FileWriter>;

        // Properties

        set writer(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileWriter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FileWriter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileWriter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileWriter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileWriter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileWriter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileWriter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        finish(): boolean;
        write_record_batch(record_batch: Arrow.RecordBatch): boolean;
        write_record_batch_reader(reader: Arrow.RecordBatchReader): boolean;
    }

    namespace Fragment {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::fragment': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            fragment: any;
        }
    }

    abstract class Fragment extends GObject.Object {
        static $gtype: GObject.GType<Fragment>;

        // Properties

        set fragment(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Fragment.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Fragment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Fragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Fragment.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Fragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Fragment.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Fragment.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Fragment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace IPCFileFormat {
        // Signal signatures
        interface SignalSignatures extends FileFormat.SignalSignatures {
            'notify::format': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends FileFormat.ConstructorProps {}
    }

    class IPCFileFormat extends FileFormat {
        static $gtype: GObject.GType<IPCFileFormat>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IPCFileFormat.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<IPCFileFormat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IPCFileFormat;

        // Signals

        connect<K extends keyof IPCFileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IPCFileFormat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof IPCFileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IPCFileFormat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof IPCFileFormat.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IPCFileFormat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace InMemoryFragment {
        // Signal signatures
        interface SignalSignatures extends Fragment.SignalSignatures {
            'notify::fragment': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Fragment.ConstructorProps {}
    }

    class InMemoryFragment extends Fragment {
        static $gtype: GObject.GType<InMemoryFragment>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InMemoryFragment.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InMemoryFragment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](schema: Arrow.Schema, record_batches: Arrow.RecordBatch[]): InMemoryFragment;

        // Signals

        connect<K extends keyof InMemoryFragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InMemoryFragment.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InMemoryFragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InMemoryFragment.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InMemoryFragment.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InMemoryFragment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace KeyValuePartitioning {
        // Signal signatures
        interface SignalSignatures extends Partitioning.SignalSignatures {
            'notify::partitioning': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Partitioning.ConstructorProps {}
    }

    class KeyValuePartitioning extends Partitioning {
        static $gtype: GObject.GType<KeyValuePartitioning>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: KeyValuePartitioning.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<KeyValuePartitioning.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof KeyValuePartitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyValuePartitioning.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof KeyValuePartitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyValuePartitioning.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof KeyValuePartitioning.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<KeyValuePartitioning.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ParquetFileFormat {
        // Signal signatures
        interface SignalSignatures extends FileFormat.SignalSignatures {
            'notify::format': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends FileFormat.ConstructorProps {}
    }

    class ParquetFileFormat extends FileFormat {
        static $gtype: GObject.GType<ParquetFileFormat>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ParquetFileFormat.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ParquetFileFormat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ParquetFileFormat;

        // Signals

        connect<K extends keyof ParquetFileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ParquetFileFormat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ParquetFileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ParquetFileFormat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ParquetFileFormat.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ParquetFileFormat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Partitioning {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::partitioning': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            partitioning: any;
        }
    }

    class Partitioning extends GObject.Object {
        static $gtype: GObject.GType<Partitioning>;

        // Properties

        set partitioning(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Partitioning.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Partitioning.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Partitioning;

        // Signals

        connect<K extends keyof Partitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Partitioning.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Partitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Partitioning.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Partitioning.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Partitioning.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_type_name(): string;
    }

    namespace PartitioningOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::infer-dictionary': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
            'notify::segment-encoding': (pspec: GObject.ParamSpec) => void;
        }

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PartitioningOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PartitioningOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PartitioningOptions;

        // Signals

        connect<K extends keyof PartitioningOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PartitioningOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PartitioningOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PartitioningOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PartitioningOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PartitioningOptions.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Scanner {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::scanner': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            scanner: any;
        }
    }

    class Scanner extends GObject.Object {
        static $gtype: GObject.GType<Scanner>;

        // Properties

        set scanner(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Scanner.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Scanner.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Scanner.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Scanner.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Scanner.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Scanner.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Scanner.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Scanner.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        to_table(): Arrow.Table | null;
    }

    namespace ScannerBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::scanner-builder': (pspec: GObject.ParamSpec) => void;
        }

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScannerBuilder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ScannerBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](dataset: Dataset): ScannerBuilder;

        static new_record_batch_reader(reader: Arrow.RecordBatchReader): ScannerBuilder;

        // Signals

        connect<K extends keyof ScannerBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScannerBuilder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ScannerBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScannerBuilder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ScannerBuilder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScannerBuilder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
