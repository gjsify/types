// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeAutoar-0.1
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GnomeAutoar {

enum ConflictAction {
    UNHANDLED,
    SKIP,
    OVERWRITE,
    CHANGE_DESTINATION,
}
/**
 * This is a non-negative number which represents filters supported by
 * libarchive. A libarchive filter is a filter which can convert a
 * regular file into a compressed file.
 */
enum Filter {
    /**
     * %ARCHIVE_FILTER_NONE: No filter
     */
    NONE,
    /**
     * %ARCHIVE_FILTER_COMPRESS: UNIX-compressed
     */
    COMPRESS,
    /**
     * %ARCHIVE_FILTER_GZIP: Gzip
     */
    GZIP,
    /**
     * %ARCHIVE_FILTER_BZIP2: Bzip2
     */
    BZIP2,
    /**
     * %ARCHIVE_FILTER_XZ: XZ
     */
    XZ,
    /**
     * %ARCHIVE_FILTER_LZMA: LZMA
     */
    LZMA,
    /**
     * %ARCHIVE_FILTER_LZIP: Lzip
     */
    LZIP,
    /**
     * %ARCHIVE_FILTER_LZOP: LZO
     */
    LZOP,
    /**
     * %ARCHIVE_FILTER_GRZIP: GRZip
     */
    GRZIP,
    /**
     * %ARCHIVE_FILTER_LRZIP: Long Range ZIP (lrzip)
     */
    LRZIP,
}
/**
 * This is a non-negative number which represents formats supported by
 * libarchive. A libarchive format is a file format which can store many
 * files as a archive file.
 */
enum Format {
    /**
     * %ARCHIVE_FORMAT_ZIP: Zip archive
     */
    ZIP,
    /**
     * %ARCHIVE_FORMAT_TAR_PAX_RESTRICTED: Tar archive, use
     *   ustar format is possible. If there are extended headers which cannot be
     *   represented in the ustar format, libarchive will use pax interchage format
     *   instead.
     */
    TAR,
    /**
     * %ARCHIVE_FORMAT_CPIO_POSIX: CPIO archive, POSIX
     *   standard cpio interchage format.
     */
    CPIO,
    /**
     * %ARCHIVE_FORMAT_7ZIP: 7-zip archive
     */
    TODO_7ZIP,
    /**
     * %ARCHIVE_FORMAT_AR_BSD: BSD variant of Unix archive
     *   format. This format does not support storing directories.
     */
    AR_BSD,
    /**
     * %ARCHIVE_FORMAT_AR_GNU: GNU/SVR4 variant of Unix
     *   archive format. This format does not support storing directories.
     */
    AR_SVR4,
    /**
     * %ARCHIVE_FORMAT_CPIO_SVR4_NOCRC: CPIO archive,
     *   SVR4 non-CRC variant
     */
    CPIO_NEWC,
    /**
     * %ARCHIVE_FORMAT_TAR_GNUTAR: Tar archive, support
     *   most popular GNU extensions.
     */
    GNUTAR,
    /**
     * %ARCHIVE_FORMAT_ISO9660: Raw CD image
     */
    ISO9660,
    /**
     * %ARCHIVE_FORMAT_TAR_PAX_INTERCHANGE: Tar archive, use
     *   pax interchage format
     */
    PAX,
    /**
     * %ARCHIVE_FORMAT_TAR_USTAR: Tar archive, use old
     *   ustar format
     */
    USTAR,
    /**
     * %ARCHIVE_FORMAT_XAR: Xar archive
     */
    XAR,
}
/**
 * Checks whether a mime type is supported by autoar. This function does no
 * blocking IO.
 * @param mime_type a string representing the mime type
 */
function check_mime_type_supported(mime_type: string): boolean
/**
 * Gets description of the filter from the internal static data.
 * @param filter an #AutoarFilter
 */
function filter_get_description(filter: Filter): string
/**
 * Gets description of the filter from libarchive. This function creates
 * and destroys an archive object in order to get the description string.
 * @param filter an #AutoarFilter
 */
function filter_get_description_libarchive(filter: Filter): string
/**
 * Gets the file name extension of the filter from the internal static data.
 * @param filter an #AutoarFilter
 */
function filter_get_extension(filter: Filter): string
/**
 * Gets the filter code used by libarchive. You can use the return value
 * as the argument for archive_write_add_filter().
 * @param filter an #AutoarFilter
 */
function filter_get_filter_libarchive(filter: Filter): number
/**
 * Gets the MIME type of the filter from the internal static data.
 * @param filter an #AutoarFilter
 */
function filter_get_mime_type(filter: Filter): string
/**
 * Checks whether an #AutoarFilter is valid.
 * @param filter an #AutoarFilter
 */
function filter_is_valid(filter: Filter): boolean
/**
 * Gets the maximal allowed values of #AutoarFilter
 */
function filter_last(): number
/**
 * Gets the description for an archive `format` compressed by
 * `filter` using #GContentType and autoar_format_filter_get_mime_type().
 * @param format an #AutoarFormat
 * @param filter an #AutoarFilter
 */
function format_filter_get_description(format: Format, filter: Filter): string
/**
 * Gets the file name extension for an archive `format` compressed by
 * `filter`. The first character of the returned string is always '.'
 * @param format an #AutoarFormat
 * @param filter an #AutoarFilter
 */
function format_filter_get_extension(format: Format, filter: Filter): string
/**
 * Gets the MIME type for an archive `format` compressed by
 * `filter`. This function always succeed, but it is not guaranteed
 * that the returned MIME type exists and can be recognized by applications.
 * Some combination of format and filter seldom exists in application,
 * so this function can only generate the string based on some
 * non-standard rules.
 * @param format an #AutoarFormat
 * @param filter an #AutoarFilter
 */
function format_filter_get_mime_type(format: Format, filter: Filter): string
/**
 * Gets description of the format from the internal static data.
 * @param format an #AutoarFormat
 */
function format_get_description(format: Format): string
/**
 * Gets description of the format from libarchive. This function creates
 * and destroys an archive object in order to get the description string.
 * @param format an #AutoarFormat
 */
function format_get_description_libarchive(format: Format): string
/**
 * Gets the file name extension of the format from the internal static data.
 * @param format an #AutoarFormat
 */
function format_get_extension(format: Format): string
/**
 * Gets the format code used by libarchive. You can use the return value
 * as the argument for archive_read_support_format_by_code() and
 * archive_write_set_format(). However, some format cannot be set using
 * these two functions because of problems inside libarchive. Use
 * autoar_format_get_libarchive_read() and
 * autoar_format_get_libarchive_write() to get the function pointer
 * is the more reliable way to set format on the archive object.
 * @param format an #AutoarFormat
 */
function format_get_format_libarchive(format: Format): number
/**
 * Gets the MIME type of the format from the internal static data.
 * @param format an #AutoarFormat
 */
function format_get_mime_type(format: Format): string
/**
 * Checks whether an #AutoarFormat is valid.
 * @param format an #AutoarFormat
 */
function format_is_valid(format: Format): boolean
/**
 * Gets the maximal allowed values of #AutoarFormat
 */
function format_last(): number
/**
 * Gets the libarchive Error Quark.
 */
function libarchive_quark(): GLib.Quark
/**
 * This function will query the file's mime type and then call
 * autoar_check_mime_type_supported(), so it does blocking IO.
 * @param file a #GFile to check if its mime type is supported
 */
function query_mime_type_supported(file: Gio.File): boolean
interface FilterFunc {
    (a: object | null): number
}
interface FormatFunc {
    (a: object | null): number
}
interface Compressor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GnomeAutoar-0.1.GnomeAutoar.Compressor

    create_top_level_directory?: boolean | null
    notify_interval?: number | null
    output_file?: Gio.File | null
    output_is_dest?: boolean | null
    source_files?: object | null
}

/**
 * Signal callback interface for `cancelled`
 */
interface Compressor_CancelledSignalCallback {
    ($obj: Compressor): void
}

/**
 * Signal callback interface for `completed`
 */
interface Compressor_CompletedSignalCallback {
    ($obj: Compressor): void
}

/**
 * Signal callback interface for `decide-dest`
 */
interface Compressor_DecideDestSignalCallback {
    ($obj: Compressor, destination: Gio.File): void
}

/**
 * Signal callback interface for `error`
 */
interface Compressor_ErrorSignalCallback {
    ($obj: Compressor, error: GLib.Error): void
}

/**
 * Signal callback interface for `progress`
 */
interface Compressor_ProgressSignalCallback {
    ($obj: Compressor, completed_size: number, completed_files: number): void
}

interface Compressor {

    // Own properties of GnomeAutoar-0.1.GnomeAutoar.Compressor

    readonly completed_files: number
    readonly completed_size: number
    create_top_level_directory: boolean
    readonly files: number
    notify_interval: number
    readonly output_file: Gio.File
    output_is_dest: boolean
    readonly size: number
    readonly source_files: object

    // Owm methods of GnomeAutoar-0.1.GnomeAutoar.Compressor

    /**
     * Gets the number of files has been read
     */
    get_completed_files(): number
    /**
     * Gets the size in bytes has been read from the source files and directories.
     */
    get_completed_size(): number
    /**
     * Gets whether a top level directory will be created in the new archive.
     */
    get_create_top_level_directory(): boolean
    /**
     * Gets the number of files will be read when the operation is completed. This
     * value is currently unset, so calling this function is useless.
     */
    get_files(): number
    /**
     * Gets the compression filter
     */
    get_filter(): Filter
    /**
     * Gets the compression format
     */
    get_format(): Format
    /**
     * See autoar_compressor_set_notify_interval().
     */
    get_notify_interval(): number
    /**
     * If #AutoarCompressor:output_is_dest is %FALSE, gets the directory which
     * contains the new archive. Otherwise, gets the the new archive. See
     * autoar_compressor_set_output_is_dest().
     */
    get_output_file(): Gio.File
    /**
     * See autoar_compressor_set_output_is_dest().
     */
    get_output_is_dest(): boolean
    /**
     * Gets the size in bytes will be read when the operation is completed. This
     * value is currently unset, so calling this function is useless.
     */
    get_size(): number
    /**
     * Gets the list of source files.
     */
    get_source_files(): Gio.File[]
    /**
     * Sets the minimal interval between emission of #AutoarCompressor::progress
     * signal. This prevent too frequent signal emission, which may cause
     * performance impact. If you do not want this feature, you can set the
     * interval to 0, so you will receive every progress update.
     * @param notify_interval the minimal interval in microseconds
     */
    set_notify_interval(notify_interval: number): void
    /**
     * By default #AutoarCompressor:output-is-dest is set to %FALSE, which means
     * the new archive will be created as a regular file under
     * #AutoarCompressor:output directory. The name of the new archive will be
     * automatically generated and you will be notified via
     * #AutoarCompressor::decide-dest when the name is decided. If you have already
     * decided the location of the new archive, and you do not want
     * #AutoarCompressor to decide it for you, you can set
     * #AutoarCompressor:output-is-dest to %TRUE. #AutoarCompressor will use
     * #AutoarCompressor:output as the location of the new archive, and it will
     * neither check whether the file exists nor create the necessary
     * directories for you. This function should only be called before calling
     * autoar_compressor_start() or autoar_compressor_start_async().
     * @param output_is_dest %TRUE if the location of the new archive has been already decided
     */
    set_output_is_dest(output_is_dest: boolean): void
    /**
     * Sets the archive passphrase. It works only with %ARCHIVE_FORMAT_ZIP.
     * @param passphrase the archive passphrase
     */
    set_passphrase(passphrase: string): void
    /**
     * Runs the archive creating work. All callbacks will be called in the same
     * thread as the caller of this functions.
     * @param cancellable optional #GCancellable object, or %NULL to ignore
     */
    start(cancellable: Gio.Cancellable | null): void
    /**
     * Asynchronously runs the archive creating work. You should connect to
     * #AutoarCompressor::cancelled, #AutoarCompressor::error, and
     * #AutoarCompressor::completed signal to get notification when the work is
     * terminated. All callbacks will be called in the main thread, so you can
     * safely manipulate GTK+ widgets in the callbacks.
     * @param cancellable optional #GCancellable object, or %NULL to ignore
     */
    start_async(cancellable: Gio.Cancellable | null): void

    // Own signals of GnomeAutoar-0.1.GnomeAutoar.Compressor

    connect(sigName: "cancelled", callback: Compressor_CancelledSignalCallback): number
    connect_after(sigName: "cancelled", callback: Compressor_CancelledSignalCallback): number
    emit(sigName: "cancelled", ...args: any[]): void
    connect(sigName: "completed", callback: Compressor_CompletedSignalCallback): number
    connect_after(sigName: "completed", callback: Compressor_CompletedSignalCallback): number
    emit(sigName: "completed", ...args: any[]): void
    connect(sigName: "decide-dest", callback: Compressor_DecideDestSignalCallback): number
    connect_after(sigName: "decide-dest", callback: Compressor_DecideDestSignalCallback): number
    emit(sigName: "decide-dest", destination: Gio.File, ...args: any[]): void
    connect(sigName: "error", callback: Compressor_ErrorSignalCallback): number
    connect_after(sigName: "error", callback: Compressor_ErrorSignalCallback): number
    emit(sigName: "error", error: GLib.Error, ...args: any[]): void
    connect(sigName: "progress", callback: Compressor_ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: Compressor_ProgressSignalCallback): number
    emit(sigName: "progress", completed_size: number, completed_files: number, ...args: any[]): void

    // Class property signals of GnomeAutoar-0.1.GnomeAutoar.Compressor

    connect(sigName: "notify::completed-files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completed-files", ...args: any[]): void
    connect(sigName: "notify::completed-size", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-size", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completed-size", ...args: any[]): void
    connect(sigName: "notify::create-top-level-directory", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-top-level-directory", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::create-top-level-directory", ...args: any[]): void
    connect(sigName: "notify::files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::notify-interval", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notify-interval", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::notify-interval", ...args: any[]): void
    connect(sigName: "notify::output-file", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-file", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-file", ...args: any[]): void
    connect(sigName: "notify::output-is-dest", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-is-dest", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-is-dest", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::source-files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-files", callback: (($obj: Compressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source-files", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Compressor extends GObject.Object {

    // Own properties of GnomeAutoar-0.1.GnomeAutoar.Compressor

    static name: string
    static $gtype: GObject.GType<Compressor>

    // Constructors of GnomeAutoar-0.1.GnomeAutoar.Compressor

    constructor(config?: Compressor_ConstructProps) 
    /**
     * Create a new #AutoarCompressor object.
     * @constructor 
     * @param source_files a #GList of source #GFiles to be archived
     * @param output_file output directory of the new archive, or the file name of the new archive if you set #AutoarCompressor:output-is-dest on the returned object
     * @param format the compression format
     * @param filter the compression filter
     * @param create_top_level_directory 
     */
    constructor(source_files: Gio.File[], output_file: Gio.File, format: Format, filter: Filter, create_top_level_directory: boolean) 
    /**
     * Create a new #AutoarCompressor object.
     * @constructor 
     * @param source_files a #GList of source #GFiles to be archived
     * @param output_file output directory of the new archive, or the file name of the new archive if you set #AutoarCompressor:output-is-dest on the returned object
     * @param format the compression format
     * @param filter the compression filter
     * @param create_top_level_directory 
     */
    static new(source_files: Gio.File[], output_file: Gio.File, format: Format, filter: Filter, create_top_level_directory: boolean): Compressor
    _init(config?: Compressor_ConstructProps): void
    /**
     * Gets the #AutoarCompressor Error Quark.
     */
    static quark(): GLib.Quark
}

interface Extractor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GnomeAutoar-0.1.GnomeAutoar.Extractor

    delete_after_extraction?: boolean | null
    notify_interval?: number | null
    output_file?: Gio.File | null
    output_is_dest?: boolean | null
    source_file?: Gio.File | null
}

/**
 * Signal callback interface for `cancelled`
 */
interface Extractor_CancelledSignalCallback {
    ($obj: Extractor): void
}

/**
 * Signal callback interface for `completed`
 */
interface Extractor_CompletedSignalCallback {
    ($obj: Extractor): void
}

/**
 * Signal callback interface for `conflict`
 */
interface Extractor_ConflictSignalCallback {
    ($obj: Extractor, file: Gio.File, new_file: object | null): number
}

/**
 * Signal callback interface for `decide-destination`
 */
interface Extractor_DecideDestinationSignalCallback {
    ($obj: Extractor, destination: Gio.File, files: object | null): GObject.Object
}

/**
 * Signal callback interface for `error`
 */
interface Extractor_ErrorSignalCallback {
    ($obj: Extractor, error: GLib.Error): void
}

/**
 * Signal callback interface for `progress`
 */
interface Extractor_ProgressSignalCallback {
    ($obj: Extractor, completed_size: number, completed_files: number): void
}

/**
 * Signal callback interface for `request-passphrase`
 */
interface Extractor_RequestPassphraseSignalCallback {
    ($obj: Extractor): string
}

/**
 * Signal callback interface for `scanned`
 */
interface Extractor_ScannedSignalCallback {
    ($obj: Extractor, files: number): void
}

interface Extractor {

    // Own properties of GnomeAutoar-0.1.GnomeAutoar.Extractor

    readonly completed_files: number
    readonly completed_size: number
    delete_after_extraction: boolean
    notify_interval: number
    readonly output_file: Gio.File
    output_is_dest: boolean
    readonly source_file: Gio.File
    readonly total_files: number
    readonly total_size: number

    // Owm methods of GnomeAutoar-0.1.GnomeAutoar.Extractor

    /**
     * Gets the number of files has been written to disk.
     */
    get_completed_files(): number
    /**
     * Gets the size in bytes has been written to disk.
     */
    get_completed_size(): number
    /**
     * Whether the source archive will be deleted after a successful extraction.
     */
    get_delete_after_extraction(): boolean
    /**
     * See autoar_extractor_set_notify_interval().
     */
    get_notify_interval(): number
    /**
     * Gets the #GFile object which represents the output directory of extracted
     * file or directory, or the extracted file or directory itself if you set
     * #AutoarExtractor:output-is-dest on the returned object.
     */
    get_output_file(): Gio.File
    /**
     * See autoar_extractor_set_output_is_dest().
     */
    get_output_is_dest(): boolean
    /**
     * Gets the #GFile object which represents the source archive that will be
     * extracted for this object.
     */
    get_source_file(): Gio.File
    /**
     * Gets the total number of files will be written when the operation is
     * completed.
     */
    get_total_files(): number
    /**
     * Gets the size in bytes will be written when the operation is completed.
     */
    get_total_size(): number
    /**
     * By default #AutoarExtractor:delete-after-extraction is set to %FALSE so the
     * source archive will not be automatically deleted if extraction succeeds.
     * @param delete_after_extraction %TRUE if the source archive should be deleted after a successful extraction
     */
    set_delete_after_extraction(delete_after_extraction: boolean): void
    /**
     * Sets the minimal interval between emission of #AutoarExtractor::progress
     * signal. This prevent too frequent signal emission, which may cause
     * performance impact. If you do not want this feature, you can set the interval
     * to 0, so you will receive every progress update.
     * @param notify_interval the minimal interval in microseconds
     */
    set_notify_interval(notify_interval: number): void
    /**
     * By default #AutoarExtractor:output-is-dest is set to %FALSE, which means
     * only one file or directory will be created in #AutoarExtractor:output-file.
     * The destination is internally determined by analyzing the contents of the
     * archive. If this is not wanted, #AutoarExtractor:output-is-dest can be set to
     * %TRUE, which will make #AutoarExtractor:output-file the destination for
     * extracted files. In any case, the destination will be notified via
     * #AutoarExtractor::decide-destination, when it is possible to set a new
     * destination.
     * 
     * #AutoarExtractor will attempt to create the destination regardless to whether
     * its path was internally decided or not.
     * 
     * This function should only be called before calling autoar_extractor_start() or
     * autoar_extractor_start_async().
     * @param output_is_dest %TRUE if #AutoarExtractor:output-file is the destination for extracted files
     */
    set_output_is_dest(output_is_dest: boolean): void
    /**
     * Runs the archive extracting work. All callbacks will be called in the same
     * thread as the caller of this functions.
     * @param cancellable optional #GCancellable object, or %NULL to ignore
     */
    start(cancellable: Gio.Cancellable | null): void
    /**
     * Asynchronously runs the archive extracting work. You should connect to
     * #AutoarExtractor::cancelled, #AutoarExtractor::error, and
     * #AutoarExtractor::completed signal to get notification when the work is
     * terminated. All callbacks will be called in the main thread, so you can
     * safely manipulate GTK+ widgets in the callbacks.
     * @param cancellable optional #GCancellable object, or %NULL to ignore
     */
    start_async(cancellable: Gio.Cancellable | null): void

    // Own signals of GnomeAutoar-0.1.GnomeAutoar.Extractor

    connect(sigName: "cancelled", callback: Extractor_CancelledSignalCallback): number
    connect_after(sigName: "cancelled", callback: Extractor_CancelledSignalCallback): number
    emit(sigName: "cancelled", ...args: any[]): void
    connect(sigName: "completed", callback: Extractor_CompletedSignalCallback): number
    connect_after(sigName: "completed", callback: Extractor_CompletedSignalCallback): number
    emit(sigName: "completed", ...args: any[]): void
    connect(sigName: "conflict", callback: Extractor_ConflictSignalCallback): number
    connect_after(sigName: "conflict", callback: Extractor_ConflictSignalCallback): number
    emit(sigName: "conflict", file: Gio.File, new_file: object | null, ...args: any[]): void
    connect(sigName: "decide-destination", callback: Extractor_DecideDestinationSignalCallback): number
    connect_after(sigName: "decide-destination", callback: Extractor_DecideDestinationSignalCallback): number
    emit(sigName: "decide-destination", destination: Gio.File, files: object | null, ...args: any[]): void
    connect(sigName: "error", callback: Extractor_ErrorSignalCallback): number
    connect_after(sigName: "error", callback: Extractor_ErrorSignalCallback): number
    emit(sigName: "error", error: GLib.Error, ...args: any[]): void
    connect(sigName: "progress", callback: Extractor_ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: Extractor_ProgressSignalCallback): number
    emit(sigName: "progress", completed_size: number, completed_files: number, ...args: any[]): void
    connect(sigName: "request-passphrase", callback: Extractor_RequestPassphraseSignalCallback): number
    connect_after(sigName: "request-passphrase", callback: Extractor_RequestPassphraseSignalCallback): number
    emit(sigName: "request-passphrase", ...args: any[]): void
    connect(sigName: "scanned", callback: Extractor_ScannedSignalCallback): number
    connect_after(sigName: "scanned", callback: Extractor_ScannedSignalCallback): number
    emit(sigName: "scanned", files: number, ...args: any[]): void

    // Class property signals of GnomeAutoar-0.1.GnomeAutoar.Extractor

    connect(sigName: "notify::completed-files", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-files", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completed-files", ...args: any[]): void
    connect(sigName: "notify::completed-size", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-size", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completed-size", ...args: any[]): void
    connect(sigName: "notify::delete-after-extraction", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delete-after-extraction", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::delete-after-extraction", ...args: any[]): void
    connect(sigName: "notify::notify-interval", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notify-interval", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::notify-interval", ...args: any[]): void
    connect(sigName: "notify::output-file", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-file", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-file", ...args: any[]): void
    connect(sigName: "notify::output-is-dest", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-is-dest", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-is-dest", ...args: any[]): void
    connect(sigName: "notify::source-file", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-file", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source-file", ...args: any[]): void
    connect(sigName: "notify::total-files", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-files", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-files", ...args: any[]): void
    connect(sigName: "notify::total-size", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-size", callback: (($obj: Extractor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Extractor extends GObject.Object {

    // Own properties of GnomeAutoar-0.1.GnomeAutoar.Extractor

    static name: string
    static $gtype: GObject.GType<Extractor>

    // Constructors of GnomeAutoar-0.1.GnomeAutoar.Extractor

    constructor(config?: Extractor_ConstructProps) 
    /**
     * Create a new #AutoarExtractor object.
     * @constructor 
     * @param source_file a #GFile for the source archive
     * @param output_file a #GFile for the directory where the files will be extracted
     */
    constructor(source_file: Gio.File, output_file: Gio.File) 
    /**
     * Create a new #AutoarExtractor object.
     * @constructor 
     * @param source_file a #GFile for the source archive
     * @param output_file a #GFile for the directory where the files will be extracted
     */
    static new(source_file: Gio.File, output_file: Gio.File): Extractor
    _init(config?: Extractor_ConstructProps): void
    /**
     * Gets the #AutoarExtractor Error Quark.
     */
    static quark(): GLib.Quark
}

interface CompressorClass {

    // Own fields of GnomeAutoar-0.1.GnomeAutoar.CompressorClass

    parent_class: GObject.ObjectClass
}

abstract class CompressorClass {

    // Own properties of GnomeAutoar-0.1.GnomeAutoar.CompressorClass

    static name: string
}

interface ExtractorClass {

    // Own fields of GnomeAutoar-0.1.GnomeAutoar.ExtractorClass

    parent_class: GObject.ObjectClass
}

abstract class ExtractorClass {

    // Own properties of GnomeAutoar-0.1.GnomeAutoar.ExtractorClass

    static name: string
}

}
export default GnomeAutoar;