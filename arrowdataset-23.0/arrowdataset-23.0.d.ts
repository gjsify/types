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
import type Arrow from '@girs/arrow-23.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace ArrowDataset {
    /**
     * ArrowDataset-23.0
     */

    /**
     * @gir-type Enum
     */
    export namespace SegmentEncoding {
        export const $gtype: GObject.GType<SegmentEncoding>;
    }

    /**
     * They are corresponding to `arrow::dataset::SegmentEncoding` values.
     * @gir-type Enum
     * @since 6.0.0
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

    /**
     * The major version.
     * @since 17.0.0
     */
    const VERSION_MAJOR: number;
    /**
     * The micro version.
     * @since 17.0.0
     */
    const VERSION_MICRO: number;
    /**
     * The minor version.
     * @since 17.0.0
     */
    const VERSION_MINOR: number;
    /**
     * The version tag. Normally, it's an empty string. It's "SNAPSHOT"
     * for snapshot version.
     * @since 17.0.0
     */
    const VERSION_TAG: string;
    namespace CSVFileFormat {
        // Signal signatures
        interface SignalSignatures extends FileFormat.SignalSignatures {
            'notify::format': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends FileFormat.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof CSVFileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CSVFileFormat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CSVFileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CSVFileFormat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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

    /**
     * @gir-type Class
     */
    abstract class Dataset extends GObject.Object {
        static $gtype: GObject.GType<Dataset>;

        // Properties

        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof Dataset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dataset.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Dataset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dataset.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Dataset.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Dataset.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns A newly created {@link ArrowDataset.ScannerBuilder} on success, `null` on error.
         */
        begin_scan(): ScannerBuilder | null;
        /**
         * @returns The type name of `dataset`.   It should be freed with `g_free()` when no longer needed.
         */
        get_type_name(): string;
        /**
         * @returns A {@link Arrow.RecordBatchReader} on success, `null` on error.
         */
        to_record_batch_reader(): Arrow.RecordBatchReader | null;
        /**
         * @returns A loaded {@link Arrow.Table} on success, `null` on error.
         */
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

    /**
     * @gir-type Class
     */
    abstract class DatasetFactory extends GObject.Object {
        static $gtype: GObject.GType<DatasetFactory>;

        // Properties

        /**
         * @construct-only
         */
        set dataset_factory(val: any);
        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof DatasetFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DatasetFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DatasetFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DatasetFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DatasetFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DatasetFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param options A {@link ArrowDataset.FinishOptions}.
         * @returns A newly created {@link ArrowDataset.Dataset} on success, `null` on error.
         */
        finish(options?: FinishOptions | null): Dataset | null;
    }

    namespace DirectoryPartitioning {
        // Signal signatures
        interface SignalSignatures extends KeyValuePartitioning.SignalSignatures {
            'notify::partitioning': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends KeyValuePartitioning.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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
            options?: KeyValuePartitioningOptions | null,
        ): DirectoryPartitioning;

        // Signals

        /** @signal */
        connect<K extends keyof DirectoryPartitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DirectoryPartitioning.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DirectoryPartitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DirectoryPartitioning.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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

    /**
     * @gir-type Class
     */
    class FileFormat extends GObject.Object {
        static $gtype: GObject.GType<FileFormat>;

        // Properties

        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof FileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileFormat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileFormat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileFormat.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileFormat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param other_format A {@link ArrowDataset.FileFormat} to be compared.
         * @returns `true` if they are the same content file format, `false` otherwise.
         */
        equal(other_format: FileFormat): boolean;
        /**
         * @returns The default {@link ArrowDataset.FileWriteOptions} of `format`.
         */
        get_default_write_options(): FileWriteOptions;
        /**
         * @returns The type name of `format`.   It should be freed with `g_free()` when no longer needed.
         */
        get_type_name(): string;
        /**
         * @param destination A {@link Arrow.OutputStream}.
         * @param file_system The {@link Arrow.FileSystem} of `destination`.
         * @param path The path of `destination`.
         * @param schema A {@link Arrow.Schema} that is used by written record batches.
         * @param options A {@link ArrowDataset.FileWriteOptions}.
         * @returns The newly created {@link ArrowDataset.FileWriter} of `format`   on success, `null` on error.
         */
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

    /**
     * @gir-type Class
     */
    class FileSystemDataset extends Dataset {
        static $gtype: GObject.GType<FileSystemDataset>;

        // Properties

        /**
         * File system of the dataset.
         * @since 5.0.0
         * @construct-only
         */
        get file_system(): Arrow.FileSystem;
        /**
         * File system of the dataset.
         * @since 5.0.0
         * @construct-only
         */
        get fileSystem(): Arrow.FileSystem;
        /**
         * Format of the dataset.
         * @since 5.0.0
         * @construct-only
         */
        get format(): FileFormat;
        /**
         * Partitioning of the dataset.
         * @since 6.0.0
         * @construct-only
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

        /** @signal */
        connect<K extends keyof FileSystemDataset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSystemDataset.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileSystemDataset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSystemDataset.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileSystemDataset.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileSystemDataset.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param scanner A {@link ArrowDataset.Scanner} that produces data to be written.
         * @param options A {@link ArrowDataset.FileSystemDatasetWriteOptions}.
         */
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

    /**
     * @gir-type Class
     */
    class FileSystemDatasetFactory extends DatasetFactory {
        static $gtype: GObject.GType<FileSystemDatasetFactory>;

        // Properties

        /**
         * File system passed to {@link ArrowDataset.FileSystemDataset}.
         * @since 5.0.0
         * @read-only
         */
        get file_system(): Arrow.FileSystem;
        /**
         * File system passed to {@link ArrowDataset.FileSystemDataset}.
         * @since 5.0.0
         * @read-only
         */
        get fileSystem(): Arrow.FileSystem;
        /**
         * Format passed to {@link ArrowDataset.FileSystemDataset}.
         * @since 5.0.0
         * @construct-only
         */
        get format(): FileFormat;
        /**
         * Partition base directory used by {@link ArrowDataset.FileSystemDataset}.
         * @since 6.0.0
         */
        get partition_base_dir(): string;
        set partition_base_dir(val: string);
        /**
         * Partition base directory used by {@link ArrowDataset.FileSystemDataset}.
         * @since 6.0.0
         */
        get partitionBaseDir(): string;
        set partitionBaseDir(val: string);
        /**
         * Partitioning used by {@link ArrowDataset.FileSystemDataset}.
         * @since 6.0.0
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

        /** @signal */
        connect<K extends keyof FileSystemDatasetFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSystemDatasetFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileSystemDatasetFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSystemDatasetFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileSystemDatasetFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileSystemDatasetFactory.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param path A path to be added.
         * @returns `true` on success, `false` otherwise.
         */
        add_path(path: string): boolean;
        /**
         * @param options A {@link ArrowDataset.FinishOptions}.
         * @returns A newly created {@link ArrowDataset.FileSystemDataset} on success, `null` on error.
         */
        finish(options?: FinishOptions | null): FileSystemDataset | null;
        /**
         * @param file_system A {@link Arrow.FileSystem}.
         * @returns `true` on success, `false` otherwise.
         */
        set_file_system(file_system: Arrow.FileSystem): boolean;
        /**
         * @param uri An URI for file system.
         * @returns `true` on success, `false` otherwise.
         */
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

    /**
     * @gir-type Class
     */
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
         * @since 6.0.0
         */
        get base_name_template(): string;
        set base_name_template(val: string);
        /**
         * Template string used to generate fragment base names. {i} will be
         * replaced by an auto incremented integer.
         * @since 6.0.0
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
         * @since 6.0.0
         */
        get max_partitions(): number;
        set max_partitions(val: number);
        /**
         * Maximum number of partitions any batch may be written into.
         * @since 6.0.0
         */
        get maxPartitions(): number;
        set maxPartitions(val: number);
        /**
         * {@link ArrowDataset.Partitioning} used to generate fragment paths.
         * @since 6.0.0
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

        /** @signal */
        connect<K extends keyof FileSystemDatasetWriteOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSystemDatasetWriteOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileSystemDatasetWriteOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSystemDatasetWriteOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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

    /**
     * @gir-type Class
     */
    class FileWriteOptions extends GObject.Object {
        static $gtype: GObject.GType<FileWriteOptions>;

        // Properties

        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof FileWriteOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileWriteOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileWriteOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileWriteOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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

    /**
     * @gir-type Class
     */
    class FileWriter extends GObject.Object {
        static $gtype: GObject.GType<FileWriter>;

        // Properties

        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof FileWriter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileWriter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileWriter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileWriter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileWriter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileWriter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns `true` on success, `false` on error.
         */
        finish(): boolean;
        /**
         * @param record_batch A {@link Arrow.RecordBatch} to be written.
         * @returns `true` on success, `false` on error.
         */
        write_record_batch(record_batch: Arrow.RecordBatch): boolean;
        /**
         * @param reader A {@link Arrow.RecordBatchReader} to be written.
         * @returns `true` on success, `false` on error.
         */
        write_record_batch_reader(reader: Arrow.RecordBatchReader): boolean;
    }

    namespace FinishOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::finish-options': (pspec: GObject.ParamSpec) => void;
            'notify::inspect-n-fragments': (pspec: GObject.ParamSpec) => void;
            'notify::inspect-nfragments': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
            'notify::validate-fragments': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class FinishOptions extends GObject.Object {
        static $gtype: GObject.GType<FinishOptions>;

        // Properties

        /**
         * @construct-only
         */
        set finish_options(val: any);
        /**
         * @construct-only
         */
        set finishOptions(val: any);
        /**
         * The number of fragments to be used to inspect schema.
         * @since 11.0.0
         */
        get inspect_n_fragments(): number;
        set inspect_n_fragments(val: number);
        /**
         * The number of fragments to be used to inspect schema.
         * @since 11.0.0
         */
        get inspectNFragments(): number;
        set inspectNFragments(val: number);
        /**
         * The schema to finalize the dataset's schema.
         * @since 11.0.0
         */
        get schema(): Arrow.Schema;
        set schema(val: Arrow.Schema);
        /**
         * Whether validate fragments against the given schema or not.
         * @since 11.0.0
         */
        get validate_fragments(): boolean;
        set validate_fragments(val: boolean);
        /**
         * Whether validate fragments against the given schema or not.
         * @since 11.0.0
         */
        get validateFragments(): boolean;
        set validateFragments(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FinishOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FinishOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FinishOptions;

        // Signals

        /** @signal */
        connect<K extends keyof FinishOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FinishOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FinishOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FinishOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FinishOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FinishOptions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
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

    /**
     * @gir-type Class
     */
    abstract class Fragment extends GObject.Object {
        static $gtype: GObject.GType<Fragment>;

        // Properties

        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof Fragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Fragment.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Fragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Fragment.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Fragment.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Fragment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace HivePartitioning {
        // Signal signatures
        interface SignalSignatures extends KeyValuePartitioning.SignalSignatures {
            'notify::partitioning': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends KeyValuePartitioning.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class HivePartitioning extends KeyValuePartitioning {
        static $gtype: GObject.GType<HivePartitioning>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HivePartitioning.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HivePartitioning.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            schema: Arrow.Schema,
            dictionaries?: Arrow.Array[] | null,
            options?: HivePartitioningOptions | null,
        ): HivePartitioning;

        // Signals

        /** @signal */
        connect<K extends keyof HivePartitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HivePartitioning.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HivePartitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HivePartitioning.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HivePartitioning.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HivePartitioning.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The fallback string for null.   It should be freed with `g_free()` when no longer needed.
         */
        get_null_fallback(): string;
    }

    namespace HivePartitioningOptions {
        // Signal signatures
        interface SignalSignatures extends KeyValuePartitioningOptions.SignalSignatures {
            'notify::null-fallback': (pspec: GObject.ParamSpec) => void;
            'notify::segment-encoding': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends KeyValuePartitioningOptions.ConstructorProps {
            null_fallback: string;
            nullFallback: string;
        }
    }

    /**
     * @gir-type Class
     */
    class HivePartitioningOptions extends KeyValuePartitioningOptions {
        static $gtype: GObject.GType<HivePartitioningOptions>;

        // Properties

        /**
         * The fallback string for null. This is used only by
         * {@link ArrowDataset.HivePartitioning}.
         * @since 11.0.0
         */
        get null_fallback(): string;
        set null_fallback(val: string);
        /**
         * The fallback string for null. This is used only by
         * {@link ArrowDataset.HivePartitioning}.
         * @since 11.0.0
         */
        get nullFallback(): string;
        set nullFallback(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HivePartitioningOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HivePartitioningOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): HivePartitioningOptions;

        // Signals

        /** @signal */
        connect<K extends keyof HivePartitioningOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HivePartitioningOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HivePartitioningOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HivePartitioningOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HivePartitioningOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HivePartitioningOptions.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
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

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof IPCFileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IPCFileFormat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof IPCFileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IPCFileFormat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof InMemoryFragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InMemoryFragment.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InMemoryFragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InMemoryFragment.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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

    /**
     * @gir-type Class
     */
    abstract class KeyValuePartitioning extends Partitioning {
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

        /** @signal */
        connect<K extends keyof KeyValuePartitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyValuePartitioning.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof KeyValuePartitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyValuePartitioning.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof KeyValuePartitioning.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<KeyValuePartitioning.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace KeyValuePartitioningOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::segment-encoding': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            segment_encoding: SegmentEncoding;
            segmentEncoding: SegmentEncoding;
        }
    }

    /**
     * @gir-type Class
     */
    class KeyValuePartitioningOptions extends GObject.Object {
        static $gtype: GObject.GType<KeyValuePartitioningOptions>;

        // Properties

        /**
         * After splitting a path into components, decode the path
         * components before parsing according to this scheme.
         * @since 11.0.0
         */
        get segment_encoding(): SegmentEncoding;
        set segment_encoding(val: SegmentEncoding);
        /**
         * After splitting a path into components, decode the path
         * components before parsing according to this scheme.
         * @since 11.0.0
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
        $signals: KeyValuePartitioningOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<KeyValuePartitioningOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): KeyValuePartitioningOptions;

        // Signals

        /** @signal */
        connect<K extends keyof KeyValuePartitioningOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyValuePartitioningOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof KeyValuePartitioningOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyValuePartitioningOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof KeyValuePartitioningOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<KeyValuePartitioningOptions.SignalSignatures[K]> extends [any, ...infer Q]
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

    /**
     * @gir-type Class
     */
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

        /** @signal */
        connect<K extends keyof ParquetFileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ParquetFileFormat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ParquetFileFormat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ParquetFileFormat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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

    /**
     * @gir-type Class
     */
    abstract class Partitioning extends GObject.Object {
        static $gtype: GObject.GType<Partitioning>;

        // Properties

        /**
         * @construct-only
         */
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

        // Signals

        /** @signal */
        connect<K extends keyof Partitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Partitioning.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Partitioning.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Partitioning.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Partitioning.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Partitioning.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static create_default(): Partitioning;

        // Methods

        /**
         * @returns The type name of `partitioning`.   It should be freed with `g_free()` when no longer needed.
         */
        get_type_name(): string;
    }

    namespace PartitioningFactoryOptions {
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

    /**
     * @gir-type Class
     */
    class PartitioningFactoryOptions extends GObject.Object {
        static $gtype: GObject.GType<PartitioningFactoryOptions>;

        // Properties

        /**
         * When inferring a schema for partition fields, yield dictionary
         * encoded types instead of plain. This can be more efficient when
         * materializing virtual columns, and Expressions parsed by the
         * finished Partitioning will include dictionaries of all unique
         * inspected values for each field.
         * @since 11.0.0
         */
        get infer_dictionary(): boolean;
        set infer_dictionary(val: boolean);
        /**
         * When inferring a schema for partition fields, yield dictionary
         * encoded types instead of plain. This can be more efficient when
         * materializing virtual columns, and Expressions parsed by the
         * finished Partitioning will include dictionaries of all unique
         * inspected values for each field.
         * @since 11.0.0
         */
        get inferDictionary(): boolean;
        set inferDictionary(val: boolean);
        /**
         * Optionally, an expected schema can be provided, in which case
         * inference will only check discovered fields against the schema
         * and update internal state (such as dictionaries).
         * @since 11.0.0
         */
        get schema(): Arrow.Schema;
        set schema(val: Arrow.Schema);
        /**
         * After splitting a path into components, decode the path
         * components before parsing according to this scheme.
         * @since 11.0.0
         */
        get segment_encoding(): SegmentEncoding;
        set segment_encoding(val: SegmentEncoding);
        /**
         * After splitting a path into components, decode the path
         * components before parsing according to this scheme.
         * @since 11.0.0
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
        $signals: PartitioningFactoryOptions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PartitioningFactoryOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PartitioningFactoryOptions;

        // Signals

        /** @signal */
        connect<K extends keyof PartitioningFactoryOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PartitioningFactoryOptions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PartitioningFactoryOptions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PartitioningFactoryOptions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PartitioningFactoryOptions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PartitioningFactoryOptions.SignalSignatures[K]> extends [any, ...infer Q]
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

    /**
     * @gir-type Class
     */
    class Scanner extends GObject.Object {
        static $gtype: GObject.GType<Scanner>;

        // Properties

        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof Scanner.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Scanner.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Scanner.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Scanner.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Scanner.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Scanner.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns A {@link Arrow.RecordBatchReader} on success, `null` on error.
         */
        to_record_batch_reader(): Arrow.RecordBatchReader | null;
        /**
         * @returns A newly created {@link Arrow.Table} on success, `null` on error.
         */
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

    /**
     * @gir-type Class
     */
    class ScannerBuilder extends GObject.Object {
        static $gtype: GObject.GType<ScannerBuilder>;

        // Properties

        /**
         * @construct-only
         */
        set scanner_builder(val: any);
        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof ScannerBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScannerBuilder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ScannerBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScannerBuilder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ScannerBuilder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScannerBuilder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns A newly created {@link ArrowDataset.Scanner} on success, `null` on error.
         */
        finish(): Scanner | null;
        /**
         * @param expression A {@link Arrow.Expression} to filter rows with.
         * @returns `true` on success, `false` on error.
         */
        set_filter(expression: Arrow.Expression): boolean;
    }

    /**
     * @gir-type Alias
     */
    type CSVFileFormatClass = typeof CSVFileFormat;
    /**
     * @gir-type Alias
     */
    type DatasetClass = typeof Dataset;
    /**
     * @gir-type Alias
     */
    type DatasetFactoryClass = typeof DatasetFactory;
    /**
     * @gir-type Alias
     */
    type DirectoryPartitioningClass = typeof DirectoryPartitioning;
    /**
     * @gir-type Alias
     */
    type FileFormatClass = typeof FileFormat;
    /**
     * @gir-type Alias
     */
    type FileSystemDatasetClass = typeof FileSystemDataset;
    /**
     * @gir-type Alias
     */
    type FileSystemDatasetFactoryClass = typeof FileSystemDatasetFactory;
    /**
     * @gir-type Alias
     */
    type FileSystemDatasetWriteOptionsClass = typeof FileSystemDatasetWriteOptions;
    /**
     * @gir-type Alias
     */
    type FileWriteOptionsClass = typeof FileWriteOptions;
    /**
     * @gir-type Alias
     */
    type FileWriterClass = typeof FileWriter;
    /**
     * @gir-type Alias
     */
    type FinishOptionsClass = typeof FinishOptions;
    /**
     * @gir-type Alias
     */
    type FragmentClass = typeof Fragment;
    /**
     * @gir-type Alias
     */
    type HivePartitioningClass = typeof HivePartitioning;
    /**
     * @gir-type Alias
     */
    type HivePartitioningOptionsClass = typeof HivePartitioningOptions;
    /**
     * @gir-type Alias
     */
    type IPCFileFormatClass = typeof IPCFileFormat;
    /**
     * @gir-type Alias
     */
    type InMemoryFragmentClass = typeof InMemoryFragment;
    /**
     * @gir-type Alias
     */
    type KeyValuePartitioningClass = typeof KeyValuePartitioning;
    /**
     * @gir-type Alias
     */
    type KeyValuePartitioningOptionsClass = typeof KeyValuePartitioningOptions;
    /**
     * @gir-type Alias
     */
    type ParquetFileFormatClass = typeof ParquetFileFormat;
    /**
     * @gir-type Alias
     */
    type PartitioningClass = typeof Partitioning;
    /**
     * @gir-type Alias
     */
    type PartitioningFactoryOptionsClass = typeof PartitioningFactoryOptions;
    /**
     * @gir-type Alias
     */
    type ScannerBuilderClass = typeof ScannerBuilder;
    /**
     * @gir-type Alias
     */
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
