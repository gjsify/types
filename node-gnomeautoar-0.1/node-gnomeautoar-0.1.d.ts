
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gnomeautoar-0.1-import.d.ts';
    
/**
 * GnomeAutoar-0.1
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

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
const EMPTY_ARCHIVE_ERRNO: number
const NOT_AN_ARCHIVE_ERRNO: number
const PASSPHRASE_REQUIRED_ERRNO: number
/**
 * Checks whether a mime type is supported by autoar. This function does no
 * blocking IO.
 * @param mimeType a string representing the mime type
 * @returns %TRUE if the mime type is supported
 */
function checkMimeTypeSupported(mimeType: string | null): boolean
/**
 * Gets description of the filter from the internal static data.
 * @param filter an #AutoarFilter
 * @returns description about the filter
 */
function filterGetDescription(filter: Filter): string | null
/**
 * Gets description of the filter from libarchive. This function creates
 * and destroys an archive object in order to get the description string.
 * @param filter an #AutoarFilter
 * @returns description about the filter. Free the returned string with g_free().
 */
function filterGetDescriptionLibarchive(filter: Filter): string | null
/**
 * Gets the file name extension of the filter from the internal static data.
 * @param filter an #AutoarFilter
 * @returns a file name extension
 */
function filterGetExtension(filter: Filter): string | null
/**
 * Gets the filter code used by libarchive. You can use the return value
 * as the argument for archive_write_add_filter().
 * @param filter an #AutoarFilter
 * @returns an integer
 */
function filterGetFilterLibarchive(filter: Filter): number
/**
 * Gets the MIME type of the filter from the internal static data.
 * @param filter an #AutoarFilter
 * @returns an MIME type
 */
function filterGetMimeType(filter: Filter): string | null
/**
 * Checks whether an #AutoarFilter is valid.
 * @param filter an #AutoarFilter
 * @returns %TRUE if the value of @filter is valid
 */
function filterIsValid(filter: Filter): boolean
/**
 * Gets the maximal allowed values of #AutoarFilter
 * @returns maximal allowed values of #AutoarFilter
 */
function filterLast(): number
/**
 * Gets the description for an archive `format` compressed by
 * `filter` using #GContentType and autoar_format_filter_get_mime_type().
 * @param format an #AutoarFormat
 * @param filter an #AutoarFilter
 * @returns description about the archive. Free the returned string with g_free().
 */
function formatFilterGetDescription(format: Format, filter: Filter): string | null
/**
 * Gets the file name extension for an archive `format` compressed by
 * `filter`. The first character of the returned string is always '.'
 * @param format an #AutoarFormat
 * @param filter an #AutoarFilter
 * @returns a file name extension. Free the returned string with g_free().
 */
function formatFilterGetExtension(format: Format, filter: Filter): string | null
/**
 * Gets the MIME type for an archive `format` compressed by
 * `filter`. This function always succeed, but it is not guaranteed
 * that the returned MIME type exists and can be recognized by applications.
 * Some combination of format and filter seldom exists in application,
 * so this function can only generate the string based on some
 * non-standard rules.
 * @param format an #AutoarFormat
 * @param filter an #AutoarFilter
 * @returns an MIME type. Free the returned string with g_free().
 */
function formatFilterGetMimeType(format: Format, filter: Filter): string | null
/**
 * Gets description of the format from the internal static data.
 * @param format an #AutoarFormat
 * @returns description about the format
 */
function formatGetDescription(format: Format): string | null
/**
 * Gets description of the format from libarchive. This function creates
 * and destroys an archive object in order to get the description string.
 * @param format an #AutoarFormat
 * @returns description about the format. Free the returned string with g_free().
 */
function formatGetDescriptionLibarchive(format: Format): string | null
/**
 * Gets the file name extension of the format from the internal static data.
 * @param format an #AutoarFormat
 * @returns a file name extension
 */
function formatGetExtension(format: Format): string | null
/**
 * Gets the format code used by libarchive. You can use the return value
 * as the argument for archive_read_support_format_by_code() and
 * archive_write_set_format(). However, some format cannot be set using
 * these two functions because of problems inside libarchive. Use
 * autoar_format_get_libarchive_read() and
 * autoar_format_get_libarchive_write() to get the function pointer
 * is the more reliable way to set format on the archive object.
 * @param format an #AutoarFormat
 * @returns an integer
 */
function formatGetFormatLibarchive(format: Format): number
/**
 * Gets the MIME type of the format from the internal static data.
 * @param format an #AutoarFormat
 * @returns an MIME type
 */
function formatGetMimeType(format: Format): string | null
/**
 * Checks whether an #AutoarFormat is valid.
 * @param format an #AutoarFormat
 * @returns %TRUE if the value of @format is valid
 */
function formatIsValid(format: Format): boolean
/**
 * Gets the maximal allowed values of #AutoarFormat
 * @returns maximal allowed values of #AutoarFormat
 */
function formatLast(): number
/**
 * Gets the libarchive Error Quark.
 * @returns a #GQuark.
 */
function libarchiveQuark(): GLib.Quark
/**
 * This function will query the file's mime type and then call
 * autoar_check_mime_type_supported(), so it does blocking IO.
 * @param file a #GFile to check if its mime type is supported
 * @returns %TRUE if the mime type of the #GFile is supported
 */
function queryMimeTypeSupported(file: Gio.File): boolean
interface FilterFunc {
    (a: any | null): number
}
interface FormatFunc {
    (a: any | null): number
}
module Compressor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancelled`
     */
    interface CancelledSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `completed`
     */
    interface CompletedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `decide-dest`
     */
    interface DecideDestSignalCallback {
        (destination: Gio.File): void
    }

    /**
     * Signal callback interface for `error`
     */
    interface ErrorSignalCallback {
        (error: GLib.Error): void
    }

    /**
     * Signal callback interface for `progress`
     */
    interface ProgressSignalCallback {
        (completedSize: number, completedFiles: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeAutoar-0.1.GnomeAutoar.Compressor

        createTopLevelDirectory?: boolean | null
        notifyInterval?: number | null
        outputFile?: Gio.File | null
        outputIsDest?: boolean | null
        sourceFiles?: any | null
    }

}

interface Compressor {

    // Own properties of GnomeAutoar-0.1.GnomeAutoar.Compressor

    readonly completedFiles: number
    readonly completedSize: number
    createTopLevelDirectory: boolean
    readonly files: number
    notifyInterval: number
    readonly outputFile: Gio.File
    outputIsDest: boolean
    readonly size: number
    readonly sourceFiles: any
    __gtype__: number

    // Owm methods of GnomeAutoar-0.1.GnomeAutoar.Compressor

    /**
     * Gets the number of files has been read
     * @returns number of files has been read
     */
    getCompletedFiles(): number
    /**
     * Gets the size in bytes has been read from the source files and directories.
     * @returns file size in bytes has been read
     */
    getCompletedSize(): number
    /**
     * Gets whether a top level directory will be created in the new archive.
     * @returns whether a top level directory will be created
     */
    getCreateTopLevelDirectory(): boolean
    /**
     * Gets the number of files will be read when the operation is completed. This
     * value is currently unset, so calling this function is useless.
     * @returns total number of files
     */
    getFiles(): number
    /**
     * Gets the compression filter
     * @returns the compression filter
     */
    getFilter(): Filter
    /**
     * Gets the compression format
     * @returns the compression format
     */
    getFormat(): Format
    /**
     * See autoar_compressor_set_notify_interval().
     * @returns the minimal interval in microseconds between the emission of the #AutoarCompressor::progress signal.
     */
    getNotifyInterval(): number
    /**
     * If #AutoarCompressor:output_is_dest is %FALSE, gets the directory which
     * contains the new archive. Otherwise, gets the the new archive. See
     * autoar_compressor_set_output_is_dest().
     * @returns a #GFile
     */
    getOutputFile(): Gio.File
    /**
     * See autoar_compressor_set_output_is_dest().
     * @returns %TRUE if #AutoarCompressor:output is the location of the new archive.
     */
    getOutputIsDest(): boolean
    /**
     * Gets the size in bytes will be read when the operation is completed. This
     * value is currently unset, so calling this function is useless.
     * @returns total file size in bytes
     */
    getSize(): number
    /**
     * Gets the list of source files.
     * @returns a #GList with the source files
     */
    getSourceFiles(): Gio.File[]
    /**
     * Sets the minimal interval between emission of #AutoarCompressor::progress
     * signal. This prevent too frequent signal emission, which may cause
     * performance impact. If you do not want this feature, you can set the
     * interval to 0, so you will receive every progress update.
     * @param notifyInterval the minimal interval in microseconds
     */
    setNotifyInterval(notifyInterval: number): void
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
     * @param outputIsDest %TRUE if the location of the new archive has been already decided
     */
    setOutputIsDest(outputIsDest: boolean): void
    /**
     * Sets the archive passphrase. It works only with %ARCHIVE_FORMAT_ZIP.
     * @param passphrase the archive passphrase
     */
    setPassphrase(passphrase: string | null): void
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
    startAsync(cancellable: Gio.Cancellable | null): void

    // Own signals of GnomeAutoar-0.1.GnomeAutoar.Compressor

    connect(sigName: "cancelled", callback: Compressor.CancelledSignalCallback): number
    on(sigName: "cancelled", callback: Compressor.CancelledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: Compressor.CancelledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: Compressor.CancelledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cancelled", ...args: any[]): void
    connect(sigName: "completed", callback: Compressor.CompletedSignalCallback): number
    on(sigName: "completed", callback: Compressor.CompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: Compressor.CompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: Compressor.CompletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "completed", ...args: any[]): void
    connect(sigName: "decide-dest", callback: Compressor.DecideDestSignalCallback): number
    on(sigName: "decide-dest", callback: Compressor.DecideDestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "decide-dest", callback: Compressor.DecideDestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "decide-dest", callback: Compressor.DecideDestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "decide-dest", ...args: any[]): void
    connect(sigName: "error", callback: Compressor.ErrorSignalCallback): number
    on(sigName: "error", callback: Compressor.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: Compressor.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: Compressor.ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", ...args: any[]): void
    connect(sigName: "progress", callback: Compressor.ProgressSignalCallback): number
    on(sigName: "progress", callback: Compressor.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: Compressor.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: Compressor.ProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "progress", completedFiles: number, ...args: any[]): void

    // Class property signals of GnomeAutoar-0.1.GnomeAutoar.Compressor

    connect(sigName: "notify::completed-files", callback: (...args: any[]) => void): number
    on(sigName: "notify::completed-files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::completed-files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::completed-files", ...args: any[]): void
    connect(sigName: "notify::completed-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::completed-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::completed-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::completed-size", ...args: any[]): void
    connect(sigName: "notify::create-top-level-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::create-top-level-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::create-top-level-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::create-top-level-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::create-top-level-directory", ...args: any[]): void
    connect(sigName: "notify::files", callback: (...args: any[]) => void): number
    on(sigName: "notify::files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::notify-interval", callback: (...args: any[]) => void): number
    on(sigName: "notify::notify-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::notify-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::notify-interval", ...args: any[]): void
    connect(sigName: "notify::output-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::output-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output-file", ...args: any[]): void
    connect(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): number
    on(sigName: "notify::output-is-dest", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output-is-dest", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output-is-dest", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::source-files", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-files", ...args: any[]): void
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

class Compressor extends GObject.Object {

    // Own properties of GnomeAutoar-0.1.GnomeAutoar.Compressor

    static name: string

    // Constructors of GnomeAutoar-0.1.GnomeAutoar.Compressor

    constructor(config?: Compressor.ConstructorProperties) 
    /**
     * Create a new #AutoarCompressor object.
     * @constructor 
     * @param sourceFiles a #GList of source #GFiles to be archived
     * @param outputFile output directory of the new archive, or the file name of the new archive if you set #AutoarCompressor:output-is-dest on the returned object
     * @param format the compression format
     * @param filter the compression filter
     * @param createTopLevelDirectory 
     * @returns a new #AutoarCompressor object
     */
    constructor(sourceFiles: Gio.File[], outputFile: Gio.File, format: Format, filter: Filter, createTopLevelDirectory: boolean) 
    /**
     * Create a new #AutoarCompressor object.
     * @constructor 
     * @param sourceFiles a #GList of source #GFiles to be archived
     * @param outputFile output directory of the new archive, or the file name of the new archive if you set #AutoarCompressor:output-is-dest on the returned object
     * @param format the compression format
     * @param filter the compression filter
     * @param createTopLevelDirectory 
     * @returns a new #AutoarCompressor object
     */
    static new(sourceFiles: Gio.File[], outputFile: Gio.File, format: Format, filter: Filter, createTopLevelDirectory: boolean): Compressor
    _init(config?: Compressor.ConstructorProperties): void
    /**
     * Gets the #AutoarCompressor Error Quark.
     * @returns a #GQuark.
     */
    static quark(): GLib.Quark
}

module Extractor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancelled`
     */
    interface CancelledSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `completed`
     */
    interface CompletedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `conflict`
     */
    interface ConflictSignalCallback {
        (file: Gio.File, newFile: any | null): number
    }

    /**
     * Signal callback interface for `decide-destination`
     */
    interface DecideDestinationSignalCallback {
        (destination: Gio.File, files: any | null): GObject.Object
    }

    /**
     * Signal callback interface for `error`
     */
    interface ErrorSignalCallback {
        (error: GLib.Error): void
    }

    /**
     * Signal callback interface for `progress`
     */
    interface ProgressSignalCallback {
        (completedSize: number, completedFiles: number): void
    }

    /**
     * Signal callback interface for `request-passphrase`
     */
    interface RequestPassphraseSignalCallback {
        (): string | null
    }

    /**
     * Signal callback interface for `scanned`
     */
    interface ScannedSignalCallback {
        (files: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeAutoar-0.1.GnomeAutoar.Extractor

        deleteAfterExtraction?: boolean | null
        notifyInterval?: number | null
        outputFile?: Gio.File | null
        outputIsDest?: boolean | null
        sourceFile?: Gio.File | null
    }

}

interface Extractor {

    // Own properties of GnomeAutoar-0.1.GnomeAutoar.Extractor

    readonly completedFiles: number
    readonly completedSize: number
    deleteAfterExtraction: boolean
    notifyInterval: number
    readonly outputFile: Gio.File
    outputIsDest: boolean
    readonly sourceFile: Gio.File
    readonly totalFiles: number
    readonly totalSize: number
    __gtype__: number

    // Owm methods of GnomeAutoar-0.1.GnomeAutoar.Extractor

    /**
     * Gets the number of files has been written to disk.
     * @returns number of files has been written to disk
     */
    getCompletedFiles(): number
    /**
     * Gets the size in bytes has been written to disk.
     * @returns size in bytes has been written
     */
    getCompletedSize(): number
    /**
     * Whether the source archive will be deleted after a successful extraction.
     * @returns %TRUE if the source archive will be deleted after a succesful extraction
     */
    getDeleteAfterExtraction(): boolean
    /**
     * See autoar_extractor_set_notify_interval().
     * @returns the minimal interval in microseconds between the emission of the #AutoarExtractor::progress signal.
     */
    getNotifyInterval(): number
    /**
     * Gets the #GFile object which represents the output directory of extracted
     * file or directory, or the extracted file or directory itself if you set
     * #AutoarExtractor:output-is-dest on the returned object.
     * @returns a #GFile
     */
    getOutputFile(): Gio.File
    /**
     * See autoar_extractor_set_output_is_dest().
     * @returns %TRUE if #AutoarExtractor:output-file is the destination for extracted files
     */
    getOutputIsDest(): boolean
    /**
     * Gets the #GFile object which represents the source archive that will be
     * extracted for this object.
     * @returns a #GFile
     */
    getSourceFile(): Gio.File
    /**
     * Gets the total number of files will be written when the operation is
     * completed.
     * @returns total number of extracted files
     */
    getTotalFiles(): number
    /**
     * Gets the size in bytes will be written when the operation is completed.
     * @returns total size of extracted files in bytes
     */
    getTotalSize(): number
    /**
     * By default #AutoarExtractor:delete-after-extraction is set to %FALSE so the
     * source archive will not be automatically deleted if extraction succeeds.
     * @param deleteAfterExtraction %TRUE if the source archive should be deleted after a successful extraction
     */
    setDeleteAfterExtraction(deleteAfterExtraction: boolean): void
    /**
     * Sets the minimal interval between emission of #AutoarExtractor::progress
     * signal. This prevent too frequent signal emission, which may cause
     * performance impact. If you do not want this feature, you can set the interval
     * to 0, so you will receive every progress update.
     * @param notifyInterval the minimal interval in microseconds
     */
    setNotifyInterval(notifyInterval: number): void
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
     * @param outputIsDest %TRUE if #AutoarExtractor:output-file is the destination for extracted files
     */
    setOutputIsDest(outputIsDest: boolean): void
    /**
     * Sets a passphrase to use if the file to decompress is passphrase-protected.
     * @param passphrase 
     */
    setPassphrase(passphrase: string | null): void
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
    startAsync(cancellable: Gio.Cancellable | null): void

    // Own signals of GnomeAutoar-0.1.GnomeAutoar.Extractor

    connect(sigName: "cancelled", callback: Extractor.CancelledSignalCallback): number
    on(sigName: "cancelled", callback: Extractor.CancelledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: Extractor.CancelledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: Extractor.CancelledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cancelled", ...args: any[]): void
    connect(sigName: "completed", callback: Extractor.CompletedSignalCallback): number
    on(sigName: "completed", callback: Extractor.CompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: Extractor.CompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: Extractor.CompletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "completed", ...args: any[]): void
    connect(sigName: "conflict", callback: Extractor.ConflictSignalCallback): number
    on(sigName: "conflict", callback: Extractor.ConflictSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conflict", callback: Extractor.ConflictSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conflict", callback: Extractor.ConflictSignalCallback): NodeJS.EventEmitter
    emit(sigName: "conflict", newFile: any | null, ...args: any[]): void
    connect(sigName: "decide-destination", callback: Extractor.DecideDestinationSignalCallback): number
    on(sigName: "decide-destination", callback: Extractor.DecideDestinationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "decide-destination", callback: Extractor.DecideDestinationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "decide-destination", callback: Extractor.DecideDestinationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "decide-destination", files: any | null, ...args: any[]): void
    connect(sigName: "error", callback: Extractor.ErrorSignalCallback): number
    on(sigName: "error", callback: Extractor.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: Extractor.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: Extractor.ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", ...args: any[]): void
    connect(sigName: "progress", callback: Extractor.ProgressSignalCallback): number
    on(sigName: "progress", callback: Extractor.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: Extractor.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: Extractor.ProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "progress", completedFiles: number, ...args: any[]): void
    connect(sigName: "request-passphrase", callback: Extractor.RequestPassphraseSignalCallback): number
    on(sigName: "request-passphrase", callback: Extractor.RequestPassphraseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-passphrase", callback: Extractor.RequestPassphraseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-passphrase", callback: Extractor.RequestPassphraseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "request-passphrase", ...args: any[]): void
    connect(sigName: "scanned", callback: Extractor.ScannedSignalCallback): number
    on(sigName: "scanned", callback: Extractor.ScannedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scanned", callback: Extractor.ScannedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scanned", callback: Extractor.ScannedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "scanned", ...args: any[]): void

    // Class property signals of GnomeAutoar-0.1.GnomeAutoar.Extractor

    connect(sigName: "notify::completed-files", callback: (...args: any[]) => void): number
    on(sigName: "notify::completed-files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::completed-files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::completed-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::completed-files", ...args: any[]): void
    connect(sigName: "notify::completed-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::completed-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::completed-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::completed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::completed-size", ...args: any[]): void
    connect(sigName: "notify::delete-after-extraction", callback: (...args: any[]) => void): number
    on(sigName: "notify::delete-after-extraction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::delete-after-extraction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::delete-after-extraction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::delete-after-extraction", ...args: any[]): void
    connect(sigName: "notify::notify-interval", callback: (...args: any[]) => void): number
    on(sigName: "notify::notify-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::notify-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::notify-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::notify-interval", ...args: any[]): void
    connect(sigName: "notify::output-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::output-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output-file", ...args: any[]): void
    connect(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): number
    on(sigName: "notify::output-is-dest", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output-is-dest", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output-is-dest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output-is-dest", ...args: any[]): void
    connect(sigName: "notify::source-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-file", ...args: any[]): void
    connect(sigName: "notify::total-files", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-files", ...args: any[]): void
    connect(sigName: "notify::total-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-size", ...args: any[]): void
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

class Extractor extends GObject.Object {

    // Own properties of GnomeAutoar-0.1.GnomeAutoar.Extractor

    static name: string

    // Constructors of GnomeAutoar-0.1.GnomeAutoar.Extractor

    constructor(config?: Extractor.ConstructorProperties) 
    /**
     * Create a new #AutoarExtractor object.
     * @constructor 
     * @param sourceFile a #GFile for the source archive
     * @param outputFile a #GFile for the directory where the files will be extracted
     * @returns a new #AutoarExtractor object
     */
    constructor(sourceFile: Gio.File, outputFile: Gio.File) 
    /**
     * Create a new #AutoarExtractor object.
     * @constructor 
     * @param sourceFile a #GFile for the source archive
     * @param outputFile a #GFile for the directory where the files will be extracted
     * @returns a new #AutoarExtractor object
     */
    static new(sourceFile: Gio.File, outputFile: Gio.File): Extractor
    _init(config?: Extractor.ConstructorProperties): void
    /**
     * Gets the #AutoarExtractor Error Quark.
     * @returns a #GQuark.
     */
    static quark(): GLib.Quark
}

interface CompressorClass {

    // Own fields of GnomeAutoar-0.1.GnomeAutoar.CompressorClass

    parentClass: GObject.ObjectClass
}

abstract class CompressorClass {

    // Own properties of GnomeAutoar-0.1.GnomeAutoar.CompressorClass

    static name: string
}

interface ExtractorClass {

    // Own fields of GnomeAutoar-0.1.GnomeAutoar.ExtractorClass

    parentClass: GObject.ObjectClass
}

abstract class ExtractorClass {

    // Own properties of GnomeAutoar-0.1.GnomeAutoar.ExtractorClass

    static name: string
}

}

export default GnomeAutoar;
// END