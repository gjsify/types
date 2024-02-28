/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './arrowdataset-1.0-ambient.d.ts';
import './arrowdataset-1.0-import.d.ts';
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
    }

    class CSVFileFormat extends FileFormat {
        // Constructors of ArrowDataset-1.0.CSVFileFormat

        static ['new'](): CSVFileFormat;
    }

    module Dataset {
        // Constructor properties interface
    }

    abstract class Dataset extends GObject.Object {
        // Own properties of ArrowDataset-1.0.Dataset

        dataset: any;

        // Owm methods of ArrowDataset-1.0.Dataset

        begin_scan(): ScannerBuilder | null;
        get_type_name(): string;
        to_table(): Arrow.Table | null;
    }

    module DatasetFactory {
        // Constructor properties interface
    }

    abstract class DatasetFactory extends GObject.Object {
        // Own properties of ArrowDataset-1.0.DatasetFactory

        dataset_factory: any;
        datasetFactory: any;

        // Owm methods of ArrowDataset-1.0.DatasetFactory

        finish(): Dataset | null;
    }

    module DirectoryPartitioning {
        // Constructor properties interface
    }

    class DirectoryPartitioning extends KeyValuePartitioning {
        // Constructors of ArrowDataset-1.0.DirectoryPartitioning

        static ['new'](
            schema: Arrow.Schema,
            dictionaries?: Arrow.Array[] | null,
            options?: PartitioningOptions | null,
        ): DirectoryPartitioning;
    }

    module FileFormat {
        // Constructor properties interface
    }

    class FileFormat extends GObject.Object {
        // Own properties of ArrowDataset-1.0.FileFormat

        format: any;

        // Owm methods of ArrowDataset-1.0.FileFormat

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
    }

    class FileSystemDataset extends Dataset {
        // Own properties of ArrowDataset-1.0.FileSystemDataset

        /**
         * File system of the dataset.
         */
        file_system: Arrow.FileSystem;
        /**
         * File system of the dataset.
         */
        fileSystem: Arrow.FileSystem;
        /**
         * Format of the dataset.
         */
        format: FileFormat;
        /**
         * Partitioning of the dataset.
         */
        partitioning: Partitioning;

        // Owm methods of ArrowDataset-1.0.FileSystemDataset

        static write_scanner(scanner: Scanner, options: FileSystemDatasetWriteOptions): boolean;
    }

    module FileSystemDatasetFactory {
        // Constructor properties interface
    }

    class FileSystemDatasetFactory extends DatasetFactory {
        // Own properties of ArrowDataset-1.0.FileSystemDatasetFactory

        /**
         * File system passed to #GADatasetFileSystemDataset.
         */
        readonly file_system: Arrow.FileSystem;
        /**
         * File system passed to #GADatasetFileSystemDataset.
         */
        readonly fileSystem: Arrow.FileSystem;
        /**
         * Format passed to #GADatasetFileSystemDataset.
         */
        format: FileFormat;
        /**
         * Partition base directory used by #GADatasetFileSystemDataset.
         */
        partition_base_dir: string;
        /**
         * Partition base directory used by #GADatasetFileSystemDataset.
         */
        partitionBaseDir: string;
        /**
         * Partitioning used by #GADatasetFileSystemDataset.
         */
        partitioning: Partitioning;

        // Constructors of ArrowDataset-1.0.FileSystemDatasetFactory

        static ['new'](file_format: FileFormat): FileSystemDatasetFactory;

        // Owm methods of ArrowDataset-1.0.FileSystemDatasetFactory

        add_path(path: string): boolean;
        finish(): FileSystemDataset | null;
        set_file_system(file_system: Arrow.FileSystem): boolean;
        set_file_system_uri(uri: string): boolean;
    }

    module FileSystemDatasetWriteOptions {
        // Constructor properties interface
    }

    class FileSystemDatasetWriteOptions extends GObject.Object {
        // Own properties of ArrowDataset-1.0.FileSystemDatasetWriteOptions

        base_dir: string;
        baseDir: string;
        /**
         * Template string used to generate fragment base names. {i} will be
         * replaced by an auto incremented integer.
         */
        base_name_template: string;
        /**
         * Template string used to generate fragment base names. {i} will be
         * replaced by an auto incremented integer.
         */
        baseNameTemplate: string;
        file_system: Arrow.FileSystem;
        fileSystem: Arrow.FileSystem;
        file_write_options: FileWriteOptions;
        fileWriteOptions: FileWriteOptions;
        /**
         * Maximum number of partitions any batch may be written into.
         */
        max_partitions: number;
        /**
         * Maximum number of partitions any batch may be written into.
         */
        maxPartitions: number;
        /**
         * #GADatasetPartitioning used to generate fragment paths.
         */
        partitioning: Partitioning;

        // Constructors of ArrowDataset-1.0.FileSystemDatasetWriteOptions

        static ['new'](): FileSystemDatasetWriteOptions;
    }

    module FileWriteOptions {
        // Constructor properties interface
    }

    class FileWriteOptions extends GObject.Object {
        // Own properties of ArrowDataset-1.0.FileWriteOptions

        options: any;
    }

    module FileWriter {
        // Constructor properties interface
    }

    class FileWriter extends GObject.Object {
        // Own properties of ArrowDataset-1.0.FileWriter

        writer: any;

        // Owm methods of ArrowDataset-1.0.FileWriter

        finish(): boolean;
        write_record_batch(record_batch: Arrow.RecordBatch): boolean;
        write_record_batch_reader(reader: Arrow.RecordBatchReader): boolean;
    }

    module Fragment {
        // Constructor properties interface
    }

    abstract class Fragment extends GObject.Object {
        // Own properties of ArrowDataset-1.0.Fragment

        fragment: any;
    }

    module IPCFileFormat {
        // Constructor properties interface
    }

    class IPCFileFormat extends FileFormat {
        // Constructors of ArrowDataset-1.0.IPCFileFormat

        static ['new'](): IPCFileFormat;
    }

    module InMemoryFragment {
        // Constructor properties interface
    }

    class InMemoryFragment extends Fragment {
        // Constructors of ArrowDataset-1.0.InMemoryFragment

        static ['new'](schema: Arrow.Schema, record_batches: Arrow.RecordBatch[]): InMemoryFragment;
    }

    module KeyValuePartitioning {
        // Constructor properties interface
    }

    class KeyValuePartitioning extends Partitioning {}

    module ParquetFileFormat {
        // Constructor properties interface
    }

    class ParquetFileFormat extends FileFormat {
        // Constructors of ArrowDataset-1.0.ParquetFileFormat

        static ['new'](): ParquetFileFormat;
    }

    module Partitioning {
        // Constructor properties interface
    }

    class Partitioning extends GObject.Object {
        // Own properties of ArrowDataset-1.0.Partitioning

        partitioning: any;

        // Constructors of ArrowDataset-1.0.Partitioning

        static ['new'](): Partitioning;

        // Owm methods of ArrowDataset-1.0.Partitioning

        get_type_name(): string;
    }

    module PartitioningOptions {
        // Constructor properties interface
    }

    class PartitioningOptions extends GObject.Object {
        // Own properties of ArrowDataset-1.0.PartitioningOptions

        /**
         * When inferring a schema for partition fields, yield dictionary
         * encoded types instead of plain. This can be more efficient when
         * materializing virtual columns, and Expressions parsed by the
         * finished Partitioning will include dictionaries of all unique
         * inspected values for each field.
         */
        infer_dictionary: boolean;
        /**
         * When inferring a schema for partition fields, yield dictionary
         * encoded types instead of plain. This can be more efficient when
         * materializing virtual columns, and Expressions parsed by the
         * finished Partitioning will include dictionaries of all unique
         * inspected values for each field.
         */
        inferDictionary: boolean;
        /**
         * Optionally, an expected schema can be provided, in which case
         * inference will only check discovered fields against the schema
         * and update internal state (such as dictionaries).
         */
        schema: Arrow.Schema;
        /**
         * After splitting a path into components, decode the path
         * components before parsing according to this scheme.
         */
        segment_encoding: SegmentEncoding;
        /**
         * After splitting a path into components, decode the path
         * components before parsing according to this scheme.
         */
        segmentEncoding: SegmentEncoding;

        // Constructors of ArrowDataset-1.0.PartitioningOptions

        static ['new'](): PartitioningOptions;
    }

    module Scanner {
        // Constructor properties interface
    }

    class Scanner extends GObject.Object {
        // Own properties of ArrowDataset-1.0.Scanner

        scanner: any;

        // Owm methods of ArrowDataset-1.0.Scanner

        to_table(): Arrow.Table | null;
    }

    module ScannerBuilder {
        // Constructor properties interface
    }

    class ScannerBuilder extends GObject.Object {
        // Own properties of ArrowDataset-1.0.ScannerBuilder

        scanner_builder: any;
        scannerBuilder: any;

        // Constructors of ArrowDataset-1.0.ScannerBuilder

        static ['new'](dataset: Dataset): ScannerBuilder;

        static new_record_batch_reader(reader: Arrow.RecordBatchReader): ScannerBuilder;

        // Owm methods of ArrowDataset-1.0.ScannerBuilder

        finish(): Scanner | null;
        set_filter(expression: Arrow.Expression): boolean;
    }

    class CSVFileFormatClass {}

    class DatasetClass {}

    class DatasetFactoryClass {}

    class DirectoryPartitioningClass {}

    class FileFormatClass {}

    class FileSystemDatasetClass {}

    class FileSystemDatasetFactoryClass {}

    class FileSystemDatasetWriteOptionsClass {}

    class FileWriteOptionsClass {}

    class FileWriterClass {}

    class FragmentClass {}

    class IPCFileFormatClass {}

    class InMemoryFragmentClass {}

    class KeyValuePartitioningClass {}

    class ParquetFileFormatClass {}

    class PartitioningClass {}

    class PartitioningOptionsClass {}

    class ScannerBuilderClass {}

    class ScannerClass {}

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
