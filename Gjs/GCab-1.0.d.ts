// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GCab-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GCab {

/**
 * Compression used by the #GCabFolder.
 */
enum Compression {
    /**
     * No compression.
     */
    NONE,
    /**
     * MSZIP compression.
     */
    MSZIP,
    /**
     * QUANTUM compression (unsupported).
     */
    QUANTUM,
    /**
     * LZX compression (only decompression supported).
     */
    LZX,
    /**
     * compression value mask.
     */
    MASK,
}
/**
 * The various errors triggered by the GCab functions.
 */
enum Error {
    /**
     * The given file is not of Cabinet format.
     */
    FORMAT,
    /**
     * General function failure.
     */
    FAILED,
    /**
     * Action or format is not supported
     */
    NOT_SUPPORTED,
    /**
     * Data stream was invalid
     */
    INVALID_DATA,
}
/**
 * Attributes associated with the #GCabFile.
 */
enum FileAttribute {
    /**
     * file is read-only
     */
    RDONLY,
    /**
     * file is hidden
     */
    HIDDEN,
    /**
     * file is a system file
     */
    SYSTEM,
    /**
     * file modified since last backup
     */
    ARCH,
    /**
     * run after extraction
     */
    EXEC,
    /**
     * name contains UTF
     */
    NAME_IS_UTF,
}
function error_quark(): GLib.Quark
/**
 * The type used for callback called when processing Cabinet archive
 * files.
 * @callback 
 * @param file the file being processed
 */
interface FileCallback {
    (file: File): boolean
}
interface Cabinet_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GCab-1.0.GCab.Cabinet

    reserved?: Uint8Array | null
    signature?: Uint8Array | null
}

interface Cabinet {

    // Own properties of GCab-1.0.GCab.Cabinet

    reserved: Uint8Array
    signature: Uint8Array

    // Owm methods of GCab-1.0.GCab.Cabinet

    /**
     * Add `folder` to `cabinet`.
     * @param folder a #GCabFolder
     */
    add_folder(folder: Folder): boolean
    /**
     * Extract files to given path.
     * 
     * If `path` is NULL then the files are decompressed to memory blobs stored on
     * each #GCabFile.
     * @param path the path to extract files
     * @param file_callback an optional #GCabFile callback,     return %FALSE to filter out or skip files.
     * @param progress_callback a progress callback
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    extract(path: Gio.File | null, file_callback: FileCallback | null, progress_callback: Gio.FileProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Extract files to given path.
     * @param path the path to extract files
     * @param file_callback an optional #GCabFile callback,     return %FALSE to filter out or skip files.
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    extract_simple(path: Gio.File, file_callback: FileCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Get the Cabinet folders within the `cabinet`.
     * Note that Cabinet folders are not like filesystem path, they are
     * group of files sharing some layout parameters.
     */
    get_folders(): Folder[]
    /**
     * Lookup the cabinet authenticode signature if any.
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    get_signature(cancellable: Gio.Cancellable | null): Uint8Array
    /**
     * Get the size of the compressed cabinet file.
     */
    get_size(): number
    /**
     * Load a cabinet archive.
     * @param stream a #GInputStream
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    load(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean
    /**
     * Save `cabinet` to the output stream `out`. `out` must be a #GSeekable.
     * @param stream a #GOutputStream also #GSeekable
     * @param file_callback report current file being saved
     * @param progress_callback report saving progress
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    write(stream: Gio.OutputStream, file_callback: FileCallback | null, progress_callback: Gio.FileProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Save `cabinet` to the output stream `out`. `out` must be a #GSeekable.
     * @param stream a #GOutputStream also #GSeekable
     * @param file_callback report current file being saved
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    write_simple(stream: Gio.OutputStream, file_callback: FileCallback | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of GCab-1.0.GCab.Cabinet

    connect(sigName: "notify::reserved", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reserved", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reserved", ...args: any[]): void
    connect(sigName: "notify::signature", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signature", callback: (($obj: Cabinet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::signature", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An opaque object holding a Cabinet file reference.
 * @class 
 */
class Cabinet extends GObject.Object {

    // Own properties of GCab-1.0.GCab.Cabinet

    static name: string
    static $gtype: GObject.GType<Cabinet>

    // Constructors of GCab-1.0.GCab.Cabinet

    constructor(config?: Cabinet_ConstructProps) 
    /**
     * Create a new #GCabCabinet object to read or create a Cabinet
     * archive.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GCabCabinet object to read or create a Cabinet
     * archive.
     * @constructor 
     */
    static new(): Cabinet
    _init(config?: Cabinet_ConstructProps): void
}

interface File_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GCab-1.0.GCab.File

    bytes?: GLib.Bytes | null
    file?: Gio.File | null
    name?: string | null
}

interface File {

    // Own properties of GCab-1.0.GCab.File

    bytes: GLib.Bytes
    file: Gio.File
    name: string

    // Owm methods of GCab-1.0.GCab.File

    /**
     * Get the file attributes.
     */
    get_attributes(): number
    /**
     * Get the #GFile associated with `file`. This will only be non-%NULL if the
     * #GCabFile has been created using gcab_file_new_with_bytes().
     */
    get_bytes(): GLib.Bytes
    /**
     * Get the file date, in `result`.
     * @param result a #GTimeVal to return date
     */
    get_date(result: GLib.TimeVal): boolean
    /**
     * Gets the file date and returns it as a #GDateTime..
     */
    get_date_time(): GLib.DateTime
    /**
     * Get the file name to use for extraction, or %NULL.
     */
    get_extract_name(): string | null
    /**
     * If the cabinet is being created, get the #GFile associated with
     * `file`. This must be an exisiting file that can be read, in order to
     * be added to the archive during cabinet creation.
     * 
     * If `file` is from an existing cabinet, the fuction will return
     * %NULL.
     */
    get_file(): Gio.File
    /**
     * Get the file name within the cabinet.
     */
    get_name(): string
    /**
     * Get the file size.
     */
    get_size(): number
    /**
     * Set the file attributes.
     * @param attr the attributes, e.g. %GCAB_FILE_ATTRIBUTE_RDONLY
     */
    set_attributes(attr: number): void
    /**
     * Replace the #GBytes associated with `self`.
     * This is most usefule when the #GCabFile has been created using
     * gcab_file_new_with_bytes() and the data needs to be modified.
     * @param bytes a #GBytes
     */
    set_bytes(bytes: GLib.Bytes): void
    /**
     * Sets the file modification date, instead of the value provided by the GFile.
     * @param tv a #GTimeVal
     */
    set_date(tv: GLib.TimeVal): void
    /**
     * Sets the file modification date (instead of the date provided by the GFile)
     * @param dt a #GDateTime
     */
    set_date_time(dt: GLib.DateTime): void
    /**
     * Sets the file name to use for extraction, instead of the name
     * provided by the Cabinet.
     * @param name a file name or %NULL
     */
    set_extract_name(name: string | null): void

    // Class property signals of GCab-1.0.GCab.File

    connect(sigName: "notify::bytes", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bytes", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An opaque object, referencing a file in a Cabinet.
 * @class 
 */
class File extends GObject.Object {

    // Own properties of GCab-1.0.GCab.File

    static name: string
    static $gtype: GObject.GType<File>

    // Constructors of GCab-1.0.GCab.File

    constructor(config?: File_ConstructProps) 
    /**
     * Create a #GCabFile from a given #GBytes.
     * 
     * If this file is to be added to an archive you should also probably use
     * gcab_file_set_date() and gcab_file_set_attributes() to set sensible values.
     * @constructor 
     * @param name name of the file within the cabinet
     * @param bytes a #GBytes to be added to the cabinet
     */
    static new_with_bytes(name: string, bytes: GLib.Bytes): File
    /**
     * Create a #GCabFile from a given #GFile, to be added to a
     * #GCabCabinet for archive creation.
     * @constructor 
     * @param name name of the file within the cabinet
     * @param file a #GFile to be added to the cabinet
     */
    static new_with_file(name: string, file: Gio.File): File
    _init(config?: File_ConstructProps): void
}

interface Folder_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GCab-1.0.GCab.Folder

    comptype?: number | null
    reserved?: Uint8Array | null
}

interface Folder {

    // Own properties of GCab-1.0.GCab.Folder

    readonly compression: Compression
    readonly comptype: number
    reserved: Uint8Array

    // Owm methods of GCab-1.0.GCab.Folder

    /**
     * Add `file` to the #GCabFolder.
     * @param cabfile file to be added
     * @param recurse whether to recurse through subdirectories
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    add_file(cabfile: File, recurse: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the compression used in this folder.
     */
    get_comptype(): number
    /**
     * Gets a specific #GCabFile files contained in the `cabfolder`.
     * @param name a file name
     */
    get_file_by_name(name: string): File
    /**
     * Get the list of #GCabFile files contained in the `cabfolder`.
     */
    get_files(): File[]
    /**
     * Get the number of files in this `folder`.
     */
    get_nfiles(): number

    // Class property signals of GCab-1.0.GCab.Folder

    connect(sigName: "notify::compression", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compression", ...args: any[]): void
    connect(sigName: "notify::comptype", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comptype", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::comptype", ...args: any[]): void
    connect(sigName: "notify::reserved", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reserved", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reserved", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An opaque object, referencing a folder in a Cabinet.
 * @class 
 */
class Folder extends GObject.Object {

    // Own properties of GCab-1.0.GCab.Folder

    static name: string
    static $gtype: GObject.GType<Folder>

    // Constructors of GCab-1.0.GCab.Folder

    constructor(config?: Folder_ConstructProps) 
    /**
     * Creates a new empty Cabinet folder. Use gcab_folder_add_file() to
     * add files to an archive.
     * 
     * A Cabinet folder is not a file path, it is a container for files.
     * @constructor 
     * @param comptype compression to used in this folder
     */
    constructor(comptype: number) 
    /**
     * Creates a new empty Cabinet folder. Use gcab_folder_add_file() to
     * add files to an archive.
     * 
     * A Cabinet folder is not a file path, it is a container for files.
     * @constructor 
     * @param comptype compression to used in this folder
     */
    static new(comptype: number): Folder
    _init(config?: Folder_ConstructProps): void
}

interface CabinetClass {

    // Own fields of GCab-1.0.GCab.CabinetClass

    parent_class: GObject.ObjectClass
}

abstract class CabinetClass {

    // Own properties of GCab-1.0.GCab.CabinetClass

    static name: string
}

interface FileClass {

    // Own fields of GCab-1.0.GCab.FileClass

    parent_class: GObject.ObjectClass
}

abstract class FileClass {

    // Own properties of GCab-1.0.GCab.FileClass

    static name: string
}

interface FolderClass {

    // Own fields of GCab-1.0.GCab.FolderClass

    parent_class: GObject.ObjectClass
}

abstract class FolderClass {

    // Own properties of GCab-1.0.GCab.FolderClass

    static name: string
}

}
export default GCab;