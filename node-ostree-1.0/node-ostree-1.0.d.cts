
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * OSTree-1.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export enum DeploymentUnlockedState {
    NONE,
    DEVELOPMENT,
    HOTFIX,
}
/**
 * Signature attributes available from an #OstreeGpgVerifyResult.
 * The attribute's #GVariantType is shown in brackets.
 */
export enum GpgSignatureAttr {
    /**
     * [#G_VARIANT_TYPE_BOOLEAN] Is the signature valid?
     */
    VALID,
    /**
     * [#G_VARIANT_TYPE_BOOLEAN] Has the signature expired?
     */
    SIG_EXPIRED,
    /**
     * [#G_VARIANT_TYPE_BOOLEAN] Has the signing key expired?
     */
    KEY_EXPIRED,
    /**
     * [#G_VARIANT_TYPE_BOOLEAN] Has the signing key been revoked?
     */
    KEY_REVOKED,
    /**
     * [#G_VARIANT_TYPE_BOOLEAN] Is the signing key missing?
     */
    KEY_MISSING,
    /**
     * [#G_VARIANT_TYPE_STRING] Fingerprint of the signing key
     */
    FINGERPRINT,
    /**
     * [#G_VARIANT_TYPE_INT64] Signature creation Unix timestamp
     */
    TIMESTAMP,
    /**
     * [#G_VARIANT_TYPE_INT64] Signature expiration Unix timestamp (0 if no
     *   expiration)
     */
    EXP_TIMESTAMP,
    /**
     * [#G_VARIANT_TYPE_STRING] Name of the public key algorithm used to create
     *   the signature
     */
    PUBKEY_ALGO_NAME,
    /**
     * [#G_VARIANT_TYPE_STRING] Name of the hash algorithm used to create the
     *   signature
     */
    HASH_ALGO_NAME,
    /**
     * [#G_VARIANT_TYPE_STRING] The name of the signing key's primary user
     */
    USER_NAME,
    /**
     * [#G_VARIANT_TYPE_STRING] The email address of the signing key's primary
     *   user
     */
    USER_EMAIL,
}
/**
 * Formatting flags for ostree_gpg_verify_result_describe().  Currently
 * there's only one possible output format, but this enumeration allows
 * for future variations.
 */
export enum GpgSignatureFormatFlags {
    /**
     * Use the default output format
     */
    GPG_SIGNATURE_FORMAT_DEFAULT,
}
/**
 * Enumeration for core object types; %OSTREE_OBJECT_TYPE_FILE is for
 * content, the other types are metadata.
 */
export enum ObjectType {
    /**
     * Content; regular file, symbolic link
     */
    FILE,
    /**
     * List of children (trees or files), and metadata
     */
    DIR_TREE,
    /**
     * Directory metadata
     */
    DIR_META,
    /**
     * Toplevel object, refers to tree and dirmeta for root
     */
    COMMIT,
    /**
     * Toplevel object, refers to a deleted commit
     */
    TOMBSTONE_COMMIT,
    /**
     * Detached metadata for a commit
     */
    COMMIT_META,
}
export enum RepoCheckoutMode {
    /**
     * No special options
     */
    NONE,
    /**
     * Ignore uid/gid of files
     */
    USER,
}
export enum RepoCheckoutOverwriteMode {
    /**
     * No special options
     */
    NONE,
    /**
     * When layering checkouts, overwrite earlier files, but keep earlier directories
     */
    UNION_FILES,
}
export enum RepoCommitFilterResult {
    /**
     * Do commit this object
     */
    ALLOW,
    /**
     * Ignore this object
     */
    SKIP,
}
export enum RepoCommitIterResult {
    ERROR,
    END,
    FILE,
    DIR,
}
export enum RepoListRefsExtFlags {
    /**
     * No flags.
     */
    REPO_LIST_REFS_EXT_NONE,
}
/**
 * See the documentation of #OstreeRepo for more information about the
 * possible modes.
 */
export enum RepoMode {
    /**
     * Files are stored as themselves; checkouts are hardlinks; can only be written as root
     */
    BARE,
    /**
     * Files are compressed, should be owned by non-root.  Can be served via HTTP
     */
    ARCHIVE_Z2,
    /**
     * Files are stored as themselves, except ownership; can be written by user. Hardlinks work only in user checkouts.
     */
    BARE_USER,
}
export enum RepoPruneFlags {
    /**
     * No special options for pruning
     */
    NONE,
    /**
     * Don't actually delete objects
     */
    NO_PRUNE,
    /**
     * Do not traverse individual commit objects, only follow refs
     */
    REFS_ONLY,
}
/**
 * The remote change operation.
 */
export enum RepoRemoteChange {
    ADD,
    ADD_IF_NOT_EXISTS,
    DELETE,
    DELETE_IF_EXISTS,
}
export enum RepoResolveRevExtFlags {
    /**
     * No flags.
     */
    REPO_RESOLVE_REV_EXT_NONE,
}
/**
 * Parameters controlling optimization of static deltas.
 */
export enum StaticDeltaGenerateOpt {
    /**
     * Optimize for speed of delta creation over space
     */
    LOWLATENCY,
    /**
     * Optimize for delta size (may be very slow)
     */
    MAJOR,
}
export enum DiffFlags {
    NONE,
    IGNORE_XATTRS,
}
export enum RepoCommitModifierFlags {
    /**
     * No special flags
     */
    NONE,
    /**
     * Do not process extended attributes
     */
    SKIP_XATTRS,
    /**
     * Generate size information.
     */
    GENERATE_SIZES,
}
export enum RepoCommitState {
    REPO_COMMIT_STATE_PARTIAL,
}
export enum RepoCommitTraverseFlags {
    REPO_COMMIT_TRAVERSE_FLAG_NONE,
}
export enum RepoListObjectsFlags {
    /**
     * List only loose (plain file) objects
     */
    LOOSE,
    /**
     * List only packed (compacted into blobs) objects
     */
    PACKED,
    /**
     * List all objects
     */
    ALL,
    /**
     * Only list objects in this repo, not parents
     */
    NO_PARENTS,
}
export enum RepoPullFlags {
    /**
     * No special options for pull
     */
    NONE,
    /**
     * Write out refs suitable for mirrors
     */
    MIRROR,
    /**
     * Fetch only the commit metadata
     */
    COMMIT_ONLY,
    /**
     * Don't trust local remote
     */
    UNTRUSTED,
}
export enum SePolicyRestoreconFlags {
    NONE,
    ALLOW_NOLABEL,
    KEEP_EXISTING,
}
export enum SysrootSimpleWriteDeploymentFlags {
    NONE,
    RETAIN,
    NOT_DEFAULT,
    NO_CLEAN,
}
/**
 * Flags controlling operation of an #OstreeSysrootUpgrader.
 * @bitfield 
 */
export enum SysrootUpgraderFlags {
    /**
     * Do not error if the origin has an unconfigured-state key
     */
    IGNORE_UNCONFIGURED,
}
export enum SysrootUpgraderPullFlags {
    NONE,
    ALLOW_OLDER,
}
export const COMMIT_GVARIANT_STRING: string | null
export const DIRMETA_GVARIANT_STRING: string | null
export const FILEMETA_GVARIANT_STRING: string | null
/**
 * Maximum permitted size in bytes of metadata objects.  This is an
 * arbitrary number, but really, no one should be putting humongous
 * data in metadata.
 */
export const MAX_METADATA_SIZE: number
/**
 * Objects committed above this size will be allowed, but a warning
 * will be emitted.
 */
export const MAX_METADATA_WARN_SIZE: number
/**
 * Maximum depth of metadata.
 */
export const MAX_RECURSION: number
/**
 * Length of a sha256 digest when expressed as raw bytes
 */
export const SHA256_DIGEST_LEN: number
/**
 * Length of a sha256 digest when expressed as a hexadecimal string
 */
export const SHA256_STRING_LEN: number
export const SUMMARY_GVARIANT_STRING: string | null
export const SUMMARY_SIG_GVARIANT_STRING: string | null
/**
 * The mtime used for stored files.  This was originally 0, changed to 1 for
 * a few releases, then was reverted due to regressions it introduced from
 * users who had been using zero before.
 */
export const TIMESTAMP: number
export const TREE_GVARIANT_STRING: string | null
export const WITH_AUTOCLEANUPS: number
export function checksumB64FromBytes(csum: Uint8Array): string | null
export function checksumB64ToBytes(checksum: string | null): Uint8Array
export function checksumBytesPeek(bytes: GLib.Variant): Uint8Array
/**
 * Like ostree_checksum_bytes_peek(), but also throws `error`.
 * @param bytes #GVariant of type ay
 * @returns Binary checksum data
 */
export function checksumBytesPeekValidate(bytes: GLib.Variant): Uint8Array
/**
 * Compute the OSTree checksum for a given file.
 * @param f File path
 * @param objtype Object type
 * @param cancellable Cancellable
 */
export function checksumFile(f: Gio.File, objtype: ObjectType, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCsum */ Uint8Array ]
/**
 * Asynchronously compute the OSTree checksum for a given file;
 * complete with ostree_checksum_file_async_finish().
 * @param f File path
 * @param objtype Object type
 * @param ioPriority Priority for operation, see %G_IO_PRIORITY_DEFAULT
 * @param cancellable Cancellable
 * @param callback Invoked when operation is complete
 */
export function checksumFileAsync(f: Gio.File, objtype: ObjectType, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finish computing the OSTree checksum for a given file; see
 * ostree_checksum_file_async().
 * @param f File path
 * @param result Async result
 */
export function checksumFileAsyncFinish(f: Gio.File, result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCsum */ Uint8Array ]
/**
 * Compute the OSTree checksum for a given input.
 * @param fileInfo File information
 * @param xattrs Optional extended attributes
 * @param in_ File content, should be %NULL for symbolic links
 * @param objtype Object type
 * @param cancellable Cancellable
 */
export function checksumFileFromInput(fileInfo: Gio.FileInfo, xattrs: GLib.Variant | null, in_: Gio.InputStream | null, objtype: ObjectType, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCsum */ Uint8Array ]
export function checksumFromBytes(csum: Uint8Array): string | null
export function checksumFromBytesV(csumV: GLib.Variant): string | null
/**
 * Convert `checksum` from a string to binary in-place, without
 * allocating memory.  Use this function in hot code paths.
 * @param checksum a SHA256 string
 * @param buf Output buffer with at least 32 bytes of space
 */
export function checksumInplaceToBytes(checksum: string | null, buf: number): void
export function checksumToBytes(checksum: string | null): Uint8Array
export function checksumToBytesV(checksum: string | null): GLib.Variant
export function cmdprivate(): CmdPrivateVTable
/**
 * Compare two binary checksums, using memcmp().
 * @param a A binary checksum
 * @param b A binary checksum
 */
export function cmpChecksumBytes(a: number, b: number): number
export function commitGetParent(commitVariant: GLib.Variant): string | null
export function commitGetTimestamp(commitVariant: GLib.Variant): number
/**
 * A thin wrapper for ostree_content_stream_parse(); this function
 * converts an object content stream back into components.
 * @param compressed Whether or not the stream is zlib-compressed
 * @param contentPath Path to file containing content
 * @param trusted If %TRUE, assume the content has been validated
 * @param cancellable Cancellable
 */
export function contentFileParse(compressed: boolean, contentPath: Gio.File, trusted: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outFileInfo */ Gio.FileInfo, /* outXattrs */ GLib.Variant ]
/**
 * A thin wrapper for ostree_content_stream_parse(); this function
 * converts an object content stream back into components.
 * @param compressed Whether or not the stream is zlib-compressed
 * @param parentDfd Directory file descriptor
 * @param path Subpath
 * @param trusted If %TRUE, assume the content has been validated
 * @param cancellable Cancellable
 */
export function contentFileParseAt(compressed: boolean, parentDfd: number, path: string | null, trusted: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outFileInfo */ Gio.FileInfo, /* outXattrs */ GLib.Variant ]
/**
 * The reverse of ostree_raw_file_to_content_stream(); this function
 * converts an object content stream back into components.
 * @param compressed Whether or not the stream is zlib-compressed
 * @param input Object content stream
 * @param inputLength Length of stream
 * @param trusted If %TRUE, assume the content has been validated
 * @param cancellable Cancellable
 */
export function contentStreamParse(compressed: boolean, input: Gio.InputStream, inputLength: number, trusted: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outFileInfo */ Gio.FileInfo, /* outXattrs */ GLib.Variant ]
export function createDirectoryMetadata(dirInfo: Gio.FileInfo, xattrs: GLib.Variant | null): GLib.Variant
/**
 * Compute the difference between directory `a` and `b` as 3 separate
 * sets of #OstreeDiffItem in `modified,` `removed,` and `added`.
 * @param flags Flags
 * @param a First directory path, or %NULL
 * @param b First directory path
 * @param modified Modified files
 * @param removed Removed files
 * @param added Added files
 * @param cancellable Cancellable
 */
export function diffDirs(flags: DiffFlags, a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[], cancellable: Gio.Cancellable | null): boolean
/**
 * Print the contents of a diff to stdout.
 * @param a First directory path
 * @param b First directory path
 * @param modified Modified files
 * @param removed Removed files
 * @param added Added files
 */
export function diffPrint(a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[]): void
/**
 * Use this function with #GHashTable and ostree_object_name_serialize().
 * @param a A #GVariant containing a serialized object
 */
export function hashObjectName(a: any | null): number
export function metadataVariantType(objtype: ObjectType): GLib.VariantType
/**
 * Reverse ostree_object_to_string().
 * @param str An ASCII checksum
 */
export function objectFromString(str: string | null): [ /* outChecksum */ string | null, /* outObjtype */ ObjectType ]
/**
 * Reverse ostree_object_name_serialize().  Note that `out_checksum` is
 * only valid for the lifetime of `variant,` and must not be freed.
 * @param variant A #GVariant of type (su)
 */
export function objectNameDeserialize(variant: GLib.Variant): [ /* outChecksum */ string | null, /* outObjtype */ ObjectType ]
export function objectNameSerialize(checksum: string | null, objtype: ObjectType): GLib.Variant
export function objectToString(checksum: string | null, objtype: ObjectType): string | null
/**
 * The reverse of ostree_object_type_to_string().
 * @param str A stringified version of #OstreeObjectType
 */
export function objectTypeFromString(str: string | null): ObjectType
/**
 * Serialize `objtype` to a string; this is used for file extensions.
 * @param objtype an #OstreeObjectType
 */
export function objectTypeToString(objtype: ObjectType): string | null
/**
 * Split a refspec like "gnome-ostree:gnome-ostree/buildmaster" into
 * two parts; `out_remote` will be set to "gnome-ostree", and `out_ref`
 * will be "gnome-ostree/buildmaster".
 * 
 * If `refspec` refers to a local ref, `out_remote` will be %NULL.
 * @param refspec A "refspec" string
 */
export function parseRefspec(refspec: string | null): [ /* returnType */ boolean, /* outRemote */ string | null, /* outRef */ string | null ]
/**
 * Convert from a "bare" file representation into an
 * OSTREE_OBJECT_TYPE_FILE stream suitable for ostree pull.
 * @param input File raw content stream
 * @param fileInfo A file info
 * @param xattrs Optional extended attributes
 * @param cancellable Cancellable
 */
export function rawFileToArchiveZ2Stream(input: Gio.InputStream, fileInfo: Gio.FileInfo, xattrs: GLib.Variant | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream ]
/**
 * Convert from a "bare" file representation into an
 * OSTREE_OBJECT_TYPE_FILE stream.  This is a fundamental operation
 * for writing data to an #OstreeRepo.
 * @param input File raw content stream
 * @param fileInfo A file info
 * @param xattrs Optional extended attributes
 * @param cancellable Cancellable
 */
export function rawFileToContentStream(input: Gio.InputStream, fileInfo: Gio.FileInfo, xattrs: GLib.Variant | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outLength */ number ]
export function repoCommitTraverseIterCleanup(p: any | null): void
/**
 * Use this function to see if input strings are checksums.
 * @param sha256 SHA256 hex string
 * @returns %TRUE if @sha256 is a valid checksum string, %FALSE otherwise
 */
export function validateChecksumString(sha256: string | null): boolean
export function validateRev(rev: string | null): boolean
export function validateStructureofChecksumString(checksum: string | null): boolean
/**
 * Use this to validate the basic structure of `commit,` independent of
 * any other objects it references.
 * @param commit A commit object, %OSTREE_OBJECT_TYPE_COMMIT
 * @returns %TRUE if @commit is structurally valid
 */
export function validateStructureofCommit(commit: GLib.Variant): boolean
export function validateStructureofCsumV(checksum: GLib.Variant): boolean
/**
 * Use this to validate the basic structure of `dirmeta`.
 * @param dirmeta A dirmeta object, %OSTREE_OBJECT_TYPE_DIR_META
 * @returns %TRUE if @dirmeta is structurally valid
 */
export function validateStructureofDirmeta(dirmeta: GLib.Variant): boolean
/**
 * Use this to validate the basic structure of `dirtree,` independent of
 * any other objects it references.
 * @param dirtree A dirtree object, %OSTREE_OBJECT_TYPE_DIR_TREE
 * @returns %TRUE if @dirtree is structurally valid
 */
export function validateStructureofDirtree(dirtree: GLib.Variant): boolean
export function validateStructureofFileMode(mode: number): boolean
export function validateStructureofObjtype(objtype: number): boolean
export interface RepoCommitFilter {
    (repo: Repo, path: string | null, fileInfo: Gio.FileInfo): RepoCommitFilterResult
}
export interface RepoCommitModifierXattrCallback {
    (repo: Repo, path: string | null, fileInfo: Gio.FileInfo): GLib.Variant
}
export module AsyncProgress {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AsyncProgress {

    // Own properties of OSTree-1.0.OSTree.AsyncProgress

    __gtype__: number

    // Owm methods of OSTree-1.0.OSTree.AsyncProgress

    /**
     * Process any pending signals, ensuring the main context is cleared
     * of sources used by this object.  Also ensures that no further
     * events will be queued.
     */
    finish(): void
    getStatus(): string | null
    getUint(key: string | null): number
    getUint64(key: string | null): number
    setStatus(status: string | null): void
    setUint(key: string | null, value: number): void
    setUint64(key: string | null, value: number): void

    // Own virtual methods of OSTree-1.0.OSTree.AsyncProgress

    changed(): void

    // Own signals of OSTree-1.0.OSTree.AsyncProgress

    connect(sigName: "changed", callback: AsyncProgress.ChangedSignalCallback): number
    on(sigName: "changed", callback: AsyncProgress.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: AsyncProgress.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: AsyncProgress.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of OSTree-1.0.OSTree.AsyncProgress

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

export class AsyncProgress extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.AsyncProgress

    static name: string

    // Constructors of OSTree-1.0.OSTree.AsyncProgress

    constructor(config?: AsyncProgress.ConstructorProperties) 
    constructor() 
    static new(): AsyncProgress
    static newAndConnect(changed: any | null, userData: any | null): AsyncProgress
    _init(config?: AsyncProgress.ConstructorProperties): void
}

export module BootconfigParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BootconfigParser {

    // Own properties of OSTree-1.0.OSTree.BootconfigParser

    __gtype__: number

    // Owm methods of OSTree-1.0.OSTree.BootconfigParser

    clone(): BootconfigParser
    get(key: string | null): string | null
    parse(path: Gio.File, cancellable: Gio.Cancellable | null): boolean
    /**
     * Initialize a bootconfig from the given file.
     * @param dfd Directory fd
     * @param path File path
     * @param cancellable Cancellable
     */
    parseAt(dfd: number, path: string | null, cancellable: Gio.Cancellable | null): boolean
    set(key: string | null, value: string | null): void
    write(output: Gio.File, cancellable: Gio.Cancellable | null): boolean
    writeAt(dfd: number, path: string | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of OSTree-1.0.OSTree.BootconfigParser

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

export class BootconfigParser extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.BootconfigParser

    static name: string

    // Constructors of OSTree-1.0.OSTree.BootconfigParser

    constructor(config?: BootconfigParser.ConstructorProperties) 
    constructor() 
    static new(): BootconfigParser
    _init(config?: BootconfigParser.ConstructorProperties): void
}

export module ChecksumInputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.FilterInputStream.ConstructorProperties {

        // Own constructor properties of OSTree-1.0.OSTree.ChecksumInputStream

        checksum?: any | null
    }

}

export interface ChecksumInputStream {

    // Own properties of OSTree-1.0.OSTree.ChecksumInputStream

    readonly checksum: any
    __gtype__: number

    // Own fields of OSTree-1.0.OSTree.ChecksumInputStream

    parentInstance: any

    // Class property signals of OSTree-1.0.OSTree.ChecksumInputStream

    connect(sigName: "notify::checksum", callback: (...args: any[]) => void): number
    on(sigName: "notify::checksum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::checksum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::checksum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::checksum", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::close-base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ChecksumInputStream extends Gio.FilterInputStream {

    // Own properties of OSTree-1.0.OSTree.ChecksumInputStream

    static name: string

    // Constructors of OSTree-1.0.OSTree.ChecksumInputStream

    constructor(config?: ChecksumInputStream.ConstructorProperties) 
    constructor(stream: Gio.InputStream, checksum: GLib.Checksum) 
    static new(stream: Gio.InputStream, checksum: GLib.Checksum): ChecksumInputStream
    _init(config?: ChecksumInputStream.ConstructorProperties): void
}

export module Deployment {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Deployment {

    // Own properties of OSTree-1.0.OSTree.Deployment

    __gtype__: number

    // Owm methods of OSTree-1.0.OSTree.Deployment

    clone(): Deployment
    equal(bp: Deployment): boolean
    getBootconfig(): BootconfigParser
    getBootcsum(): string | null
    getBootserial(): number
    getCsum(): string | null
    getDeployserial(): number
    getIndex(): number
    getOrigin(): GLib.KeyFile
    /**
     * Note this function only returns a *relative* path - if you want to
     * access, it, you must either use fd-relative api such as openat(),
     * or concatenate it with the full ostree_sysroot_get_path().
     * @returns Path to deployment root directory, relative to sysroot
     */
    getOriginRelpath(): string | null
    getOsname(): string | null
    getUnlocked(): DeploymentUnlockedState
    setBootconfig(bootconfig: BootconfigParser): void
    setBootserial(index: number): void
    setIndex(index: number): void
    setOrigin(origin: GLib.KeyFile): void

    // Class property signals of OSTree-1.0.OSTree.Deployment

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

export class Deployment extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.Deployment

    static name: string

    // Constructors of OSTree-1.0.OSTree.Deployment

    constructor(config?: Deployment.ConstructorProperties) 
    constructor(index: number, osname: string | null, csum: string | null, deployserial: number, bootcsum: string | null, bootserial: number) 
    static new(index: number, osname: string | null, csum: string | null, deployserial: number, bootcsum: string | null, bootserial: number): Deployment
    _init(config?: Deployment.ConstructorProperties): void
    static hash(v: any | null): number
    static unlockedStateToString(state: DeploymentUnlockedState): string | null
}

export module GpgVerifyResult {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface GpgVerifyResult extends Gio.Initable {

    // Own properties of OSTree-1.0.OSTree.GpgVerifyResult

    __gtype__: number

    // Owm methods of OSTree-1.0.OSTree.GpgVerifyResult

    /**
     * Counts all the signatures in `result`.
     * @returns signature count
     */
    countAll(): number
    /**
     * Counts only the valid signatures in `result`.
     * @returns valid signature count
     */
    countValid(): number
    /**
     * Appends a brief, human-readable description of the GPG signature at
     * `signature_index` in `result` to the `output_buffer`.  The description
     * spans multiple lines.  A `line_prefix` string, if given, will precede
     * each line of the description.
     * 
     * The `flags` argument is reserved for future variations to the description
     * format.  Currently must be 0.
     * 
     * It is a programmer error to request an invalid `signature_index`.  Use
     * ostree_gpg_verify_result_count_all() to find the number of signatures in
     * `result`.
     * @param signatureIndex which signature to describe
     * @param outputBuffer a #GString to hold the description
     * @param linePrefix optional line prefix string
     * @param flags flags to adjust the description format
     */
    describe(signatureIndex: number, outputBuffer: GLib.String, linePrefix: string | null, flags: GpgSignatureFormatFlags): void
    /**
     * Builds a #GVariant tuple of requested attributes for the GPG signature at
     * `signature_index` in `result`.  See the #OstreeGpgSignatureAttr description
     * for the #GVariantType of each available attribute.
     * 
     * It is a programmer error to request an invalid #OstreeGpgSignatureAttr or
     * an invalid `signature_index`.  Use ostree_gpg_verify_result_count_all() to
     * find the number of signatures in `result`.
     * @param signatureIndex which signature to get attributes from
     * @param attrs Array of requested attributes
     * @returns a new, floating, #GVariant tuple
     */
    get(signatureIndex: number, attrs: GpgSignatureAttr[]): GLib.Variant
    /**
     * Builds a #GVariant tuple of all available attributes for the GPG signature
     * at `signature_index` in `result`.
     * 
     * The child values in the returned #GVariant tuple are ordered to match the
     * #OstreeGpgSignatureAttr enumeration, which means the enum values can be
     * used as index values in functions like g_variant_get_child().  See the
     * #OstreeGpgSignatureAttr description for the #GVariantType of each
     * available attribute.
     * 
     * <note>
     *   <para>
     *     The #OstreeGpgSignatureAttr enumeration may be extended in the future
     *     with new attributes, which would affect the #GVariant tuple returned by
     *     this function.  While the position and type of current child values in
     *     the #GVariant tuple will not change, to avoid backward-compatibility
     *     issues <emphasis>please do not depend on the tuple's overall size or
     *     type signature</emphasis>.
     *   </para>
     * </note>
     * 
     * It is a programmer error to request an invalid `signature_index`.  Use
     * ostree_gpg_verify_result_count_all() to find the number of signatures in
     * `result`.
     * @param signatureIndex which signature to get attributes from
     * @returns a new, floating, #GVariant tuple
     */
    getAll(signatureIndex: number): GLib.Variant
    /**
     * Searches `result` for a signature signed by `key_id`.  If a match is found,
     * the function returns %TRUE and sets `out_signature_index` so that further
     * signature details can be obtained through ostree_gpg_verify_result_get().
     * If no match is found, the function returns %FALSE and leaves
     * `out_signature_index` unchanged.
     * @param keyId a GPG key ID or fingerprint
     * @returns %TRUE on success, %FALSE on failure
     */
    lookup(keyId: string | null): [ /* returnType */ boolean, /* outSignatureIndex */ number ]
    /**
     * Checks if the result contains at least one signature from the
     * trusted keyring.  You can call this function immediately after
     * ostree_repo_verify_summary() or ostree_repo_verify_commit_ext() -
     * it will handle the %NULL `result` and filled `error` too.
     * @returns %TRUE if @result was not %NULL and had at least one signature from trusted keyring, otherwise %FALSE
     */
    requireValidSignature(): boolean

    // Class property signals of OSTree-1.0.OSTree.GpgVerifyResult

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

export class GpgVerifyResult extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.GpgVerifyResult

    static name: string

    // Constructors of OSTree-1.0.OSTree.GpgVerifyResult

    constructor(config?: GpgVerifyResult.ConstructorProperties) 
    _init(config?: GpgVerifyResult.ConstructorProperties): void
    /**
     * Similar to ostree_gpg_verify_result_describe() but takes a #GVariant of
     * all attributes for a GPG signature instead of an #OstreeGpgVerifyResult
     * and signature index.
     * 
     * The `variant` <emphasis>MUST</emphasis> have been created by
     * ostree_gpg_verify_result_get_all().
     * @param variant a #GVariant from ostree_gpg_verify_result_get_all()
     * @param outputBuffer a #GString to hold the description
     * @param linePrefix optional line prefix string
     * @param flags flags to adjust the description format
     */
    static describeVariant(variant: GLib.Variant, outputBuffer: GLib.String, linePrefix: string | null, flags: GpgSignatureFormatFlags): void
}

export module MutableTree {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MutableTree {

    // Own properties of OSTree-1.0.OSTree.MutableTree

    __gtype__: number

    // Owm methods of OSTree-1.0.OSTree.MutableTree

    ensureDir(name: string | null, outSubdir: MutableTree): boolean
    /**
     * Create all parent trees necessary for the given `split_path` to
     * exist.
     * @param splitPath File path components
     * @param metadataChecksum SHA256 checksum for metadata
     */
    ensureParentDirs(splitPath: string[], metadataChecksum: string | null): [ /* returnType */ boolean, /* outParent */ MutableTree ]
    getContentsChecksum(): string | null
    getFiles(): GLib.HashTable
    getMetadataChecksum(): string | null
    getSubdirs(): GLib.HashTable
    lookup(name: string | null, outFileChecksum: string | null, outSubdir: MutableTree): boolean
    replaceFile(name: string | null, checksum: string | null): boolean
    setContentsChecksum(checksum: string | null): void
    setMetadataChecksum(checksum: string | null): void
    /**
     * Traverse `start` number of elements starting from `split_path;` the
     * child will be returned in `out_subdir`.
     * @param splitPath Split pathname
     * @param start Descend from this number of elements in `split_path`
     */
    walk(splitPath: string[], start: number): [ /* returnType */ boolean, /* outSubdir */ MutableTree ]

    // Class property signals of OSTree-1.0.OSTree.MutableTree

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

/**
 * Private instance structure.
 * @class 
 */
export class MutableTree extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.MutableTree

    static name: string

    // Constructors of OSTree-1.0.OSTree.MutableTree

    constructor(config?: MutableTree.ConstructorProperties) 
    constructor() 
    static new(): MutableTree
    _init(config?: MutableTree.ConstructorProperties): void
}

export module Repo {

    // Signal callback interfaces

    /**
     * Signal callback interface for `gpg-verify-result`
     */
    export interface GpgVerifyResultSignalCallback {
        (checksum: string | null, result: GpgVerifyResult): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of OSTree-1.0.OSTree.Repo

        path?: Gio.File | null
        remotesConfigDir?: string | null
        sysrootPath?: Gio.File | null
    }

}

export interface Repo {

    // Own properties of OSTree-1.0.OSTree.Repo

    readonly path: Gio.File
    readonly remotesConfigDir: string | null
    readonly sysrootPath: Gio.File
    __gtype__: number

    // Owm methods of OSTree-1.0.OSTree.Repo

    abortTransaction(cancellable: Gio.Cancellable | null): boolean
    /**
     * Add a GPG signature to a static delta.
     * @param keyId NULL-terminated array of GPG keys.
     * @param homedir GPG home directory, or %NULL
     * @param cancellable A #GCancellable
     */
    addGpgSignatureSummary(keyId: string[], homedir: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Append a GPG signature to a commit.
     * @param commitChecksum SHA256 of given commit to sign
     * @param signatureBytes Signature data
     * @param cancellable A #GCancellable
     */
    appendGpgSignature(commitChecksum: string | null, signatureBytes: any, cancellable: Gio.Cancellable | null): boolean
    /**
     * Similar to ostree_repo_checkout_tree(), but uses directory-relative
     * paths for the destination, uses a new `OstreeRepoCheckoutAtOptions`,
     * and takes a commit checksum and optional subpath pair, rather than
     * requiring use of `GFile` APIs for the caller.
     * 
     * It also replaces ostree_repo_checkout_at() which was not safe to
     * use with GObject introspection.
     * 
     * Note in addition that unlike ostree_repo_checkout_tree(), the
     * default is not to use the repository-internal uncompressed objects
     * cache.
     * @param options Options
     * @param destinationDfd Directory FD for destination
     * @param destinationPath Directory for destination
     * @param commit Checksum for commit
     * @param cancellable Cancellable
     */
    checkoutAt(options: RepoCheckoutAtOptions | null, destinationDfd: number, destinationPath: string | null, commit: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Call this after finishing a succession of checkout operations; it
     * will delete any currently-unused uncompressed objects from the
     * cache.
     * @param cancellable Cancellable
     */
    checkoutGc(cancellable: Gio.Cancellable | null): boolean
    /**
     * Check out `source` into `destination,` which must live on the
     * physical filesystem.  `source` may be any subdirectory of a given
     * commit.  The `mode` and `overwrite_mode` allow control over how the
     * files are checked out.
     * @param mode Options controlling all files
     * @param overwriteMode Whether or not to overwrite files
     * @param destination Place tree here
     * @param source Source tree
     * @param sourceInfo Source info
     * @param cancellable Cancellable
     */
    checkoutTree(mode: RepoCheckoutMode, overwriteMode: RepoCheckoutOverwriteMode, destination: Gio.File, source: RepoFile, sourceInfo: Gio.FileInfo, cancellable: Gio.Cancellable | null): boolean
    /**
     * Complete the transaction. Any refs set with
     * ostree_repo_transaction_set_ref() or
     * ostree_repo_transaction_set_refspec() will be written out.
     * @param cancellable Cancellable
     */
    commitTransaction(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outStats */ RepoTransactionStats ]
    copyConfig(): GLib.KeyFile
    /**
     * Create the underlying structure on disk for the repository, and call
     * ostree_repo_open() on the result, preparing it for use.
     * 
     * Since version 2016.8, this function will succeed on an existing
     * repository, and finish creating any necessary files in a partially
     * created repository.  However, this function cannot change the mode
     * of an existing repository, and will silently ignore an attempt to
     * do so.
     * @param mode The mode to store the repository in
     * @param cancellable Cancellable
     */
    create(mode: RepoMode, cancellable: Gio.Cancellable | null): boolean
    /**
     * Remove the object of type `objtype` with checksum `sha2`56
     * from the repository.  An error of type %G_IO_ERROR_NOT_FOUND
     * is thrown if the object does not exist.
     * @param objtype Object type
     * @param sha256 Checksum
     * @param cancellable Cancellable
     */
    deleteObject(objtype: ObjectType, sha256: string | null, cancellable: Gio.Cancellable | null): boolean
    getConfig(): GLib.KeyFile
    /**
     * In some cases it's useful for applications to access the repository
     * directly; for example, writing content into `repo/tmp` ensures it's
     * on the same filesystem.  Another case is detecting the mtime on the
     * repository (to see whether a ref was written).
     * @returns File descriptor for repository root - owned by @self
     */
    getDfd(): number
    /**
     * For more information see ostree_repo_set_disable_fsync().
     * @returns Whether or not fsync() is enabled for this repo.
     */
    getDisableFsync(): boolean
    getMode(): RepoMode
    /**
     * Before this function can be used, ostree_repo_init() must have been
     * called.
     * @returns Parent repository, or %NULL if none
     */
    getParent(): Repo
    getPath(): Gio.File
    /**
     * OSTree remotes are represented by keyfile groups, formatted like:
     * `[remote "remotename"]`. This function returns a value named `option_name`
     * underneath that group, and returns it as a boolean.
     * If the option is not set, `out_value` will be set to `default_value`.
     * @param remoteName Name
     * @param optionName Option
     * @param defaultValue Value returned if `option_name` is not present
     * @returns %TRUE on success, otherwise %FALSE with @error set
     */
    getRemoteBooleanOption(remoteName: string | null, optionName: string | null, defaultValue: boolean): [ /* returnType */ boolean, /* outValue */ boolean ]
    /**
     * OSTree remotes are represented by keyfile groups, formatted like:
     * `[remote "remotename"]`. This function returns a value named `option_name`
     * underneath that group, and returns it as an zero terminated array of strings.
     * If the option is not set, `out_value` will be set to %NULL.
     * @param remoteName Name
     * @param optionName Option
     * @returns %TRUE on success, otherwise %FALSE with @error set
     */
    getRemoteListOption(remoteName: string | null, optionName: string | null): [ /* returnType */ boolean, /* outValue */ string[] ]
    /**
     * OSTree remotes are represented by keyfile groups, formatted like:
     * `[remote "remotename"]`. This function returns a value named `option_name`
     * underneath that group, or `default_value` if the remote exists but not the
     * option name.
     * @param remoteName Name
     * @param optionName Option
     * @param defaultValue Value returned if `option_name` is not present
     * @returns %TRUE on success, otherwise %FALSE with @error set
     */
    getRemoteOption(remoteName: string | null, optionName: string | null, defaultValue: string | null): [ /* returnType */ boolean, /* outValue */ string | null ]
    /**
     * Verify `signatures` for `data` using GPG keys in the keyring for
     * `remote_name,` and return an #OstreeGpgVerifyResult.
     * 
     * The `remote_name` parameter can be %NULL. In that case it will do
     * the verifications using GPG keys in the keyrings of all remotes.
     * @param remoteName Name of remote
     * @param data Data as a #GBytes
     * @param signatures Signatures as a #GBytes
     * @param keyringdir Path to directory GPG keyrings; overrides built-in default if given
     * @param extraKeyring Path to additional keyring file (not a directory)
     * @param cancellable Cancellable
     * @returns an #OstreeGpgVerifyResult, or %NULL on error
     */
    gpgVerifyData(remoteName: string | null, data: any, signatures: any, keyringdir: Gio.File | null, extraKeyring: Gio.File | null, cancellable: Gio.Cancellable | null): GpgVerifyResult
    /**
     * Set `out_have_object` to %TRUE if `self` contains the given object;
     * %FALSE otherwise.
     * @param objtype Object type
     * @param checksum ASCII SHA256 checksum
     * @param cancellable Cancellable
     * @returns %FALSE if an unexpected error occurred, %TRUE otherwise
     */
    hasObject(objtype: ObjectType, checksum: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHaveObject */ boolean ]
    /**
     * Copy object named by `objtype` and `checksum` into `self` from the
     * source repository `source`.  If both repositories are of the same
     * type and on the same filesystem, this will simply be a fast Unix
     * hard link operation.
     * 
     * Otherwise, a copy will be performed.
     * @param source Source repo
     * @param objtype Object type
     * @param checksum checksum
     * @param cancellable Cancellable
     */
    importObjectFrom(source: Repo, objtype: ObjectType, checksum: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Copy object named by `objtype` and `checksum` into `self` from the
     * source repository `source`.  If both repositories are of the same
     * type and on the same filesystem, this will simply be a fast Unix
     * hard link operation.
     * 
     * Otherwise, a copy will be performed.
     * @param source Source repo
     * @param objtype Object type
     * @param checksum checksum
     * @param trusted If %TRUE, assume the source repo is valid and trusted
     * @param cancellable Cancellable
     */
    importObjectFromWithTrust(source: Repo, objtype: ObjectType, checksum: string | null, trusted: boolean, cancellable: Gio.Cancellable | null): boolean
    isSystem(): boolean
    /**
     * Returns whether the repository is writable by the current user.
     * If the repository is not writable, the `error` indicates why.
     * @returns %TRUE if this repository is writable
     */
    isWritable(): boolean
    /**
     * This function synchronously enumerates all commit objects starting
     * with `start,` returning data in `out_commits`.
     * @param start List commits starting with this checksum
     * @param outCommits Array of GVariants
     * @param cancellable Cancellable
     * @returns %TRUE on success, %FALSE on error, and @error will be set
     */
    listCommitObjectsStartingWith(start: string | null, outCommits: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean
    /**
     * This function synchronously enumerates all objects in the
     * repository, returning data in `out_objects`.  `out_objects`
     * maps from keys returned by ostree_object_name_serialize()
     * to #GVariant values of type %OSTREE_REPO_LIST_OBJECTS_VARIANT_TYPE.
     * @param flags Flags controlling enumeration
     * @param cancellable Cancellable
     * @returns %TRUE on success, %FALSE on error, and @error will be set
     */
    listObjects(flags: RepoListObjectsFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjects */ GLib.HashTable ]
    /**
     * If `refspec_prefix` is %NULL, list all local and remote refspecs,
     * with their current values in `out_all_refs`.  Otherwise, only list
     * refspecs which have `refspec_prefix` as a prefix.
     * @param refspecPrefix Only list refs which match this prefix
     * @param cancellable Cancellable
     */
    listRefs(refspecPrefix: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAllRefs */ GLib.HashTable ]
    /**
     * If `refspec_prefix` is %NULL, list all local and remote refspecs,
     * with their current values in `out_all_refs`.  Otherwise, only list
     * refspecs which have `refspec_prefix` as a prefix.  Differently from
     * ostree_repo_list_refs(), the prefix will not be removed from the ref
     * name.
     * @param refspecPrefix Only list refs which match this prefix
     * @param flags Options controlling listing behavior
     * @param cancellable Cancellable
     */
    listRefsExt(refspecPrefix: string | null, flags: RepoListRefsExtFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAllRefs */ GLib.HashTable ]
    /**
     * This function synchronously enumerates all static deltas in the
     * repository, returning its result in `out_deltas`.
     * @param cancellable Cancellable
     */
    listStaticDeltaNames(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDeltas */ string[] ]
    /**
     * A version of ostree_repo_load_variant() specialized to commits,
     * capable of returning extended state information.  Currently
     * the only extended state is %OSTREE_REPO_COMMIT_STATE_PARTIAL, which
     * means that only a sub-path of the commit is available.
     * @param checksum Commit checksum
     */
    loadCommit(checksum: string | null): [ /* returnType */ boolean, /* outCommit */ GLib.Variant, /* outState */ RepoCommitState ]
    /**
     * Load content object, decomposing it into three parts: the actual
     * content (for regular files), the metadata, and extended attributes.
     * @param checksum ASCII SHA256 checksum
     * @param cancellable Cancellable
     */
    loadFile(checksum: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outFileInfo */ Gio.FileInfo, /* outXattrs */ GLib.Variant ]
    /**
     * Load object as a stream; useful when copying objects between
     * repositories.
     * @param objtype Object type
     * @param checksum ASCII SHA256 checksum
     * @param cancellable Cancellable
     */
    loadObjectStream(objtype: ObjectType, checksum: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outInput */ Gio.InputStream, /* outSize */ number ]
    /**
     * Load the metadata object `sha2`56 of type `objtype,` storing the
     * result in `out_variant`.
     * @param objtype Expected object type
     * @param sha256 Checksum string
     */
    loadVariant(objtype: ObjectType, sha256: string | null): [ /* returnType */ boolean, /* outVariant */ GLib.Variant ]
    /**
     * Attempt to load the metadata object `sha2`56 of type `objtype` if it
     * exists, storing the result in `out_variant`.  If it doesn't exist,
     * %NULL is returned.
     * @param objtype Object type
     * @param sha256 ASCII checksum
     */
    loadVariantIfExists(objtype: ObjectType, sha256: string | null): [ /* returnType */ boolean, /* outVariant */ GLib.Variant ]
    open(cancellable: Gio.Cancellable | null): boolean
    /**
     * Starts or resumes a transaction. In order to write to a repo, you
     * need to start a transaction. You can complete the transaction with
     * ostree_repo_commit_transaction(), or abort the transaction with
     * ostree_repo_abort_transaction().
     * 
     * Currently, transactions are not atomic, and aborting a transaction
     * will not erase any data you  write during the transaction.
     * @param cancellable Cancellable
     */
    prepareTransaction(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outTransactionResume */ boolean ]
    /**
     * Delete content from the repository.  By default, this function will
     * only delete "orphaned" objects not referred to by any commit.  This
     * can happen during a local commit operation, when we have written
     * content objects but not saved the commit referencing them.
     * 
     * However, if %OSTREE_REPO_PRUNE_FLAGS_REFS_ONLY is provided, instead
     * of traversing all commits, only refs will be used.  Particularly
     * when combined with `depth,` this is a convenient way to delete
     * history from the repository.
     * 
     * Use the %OSTREE_REPO_PRUNE_FLAGS_NO_PRUNE to just determine
     * statistics on objects that would be deleted, without actually
     * deleting them.
     * @param flags Options controlling prune process
     * @param depth Stop traversal after this many iterations (-1 for unlimited)
     * @param cancellable Cancellable
     */
    prune(flags: RepoPruneFlags, depth: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjectsTotal */ number, /* outObjectsPruned */ number, /* outPrunedObjectSizeTotal */ number ]
    /**
     * Prune static deltas, if COMMIT is specified then delete static delta files only
     * targeting that commit; otherwise any static delta of non existing commits are
     * deleted.
     * @param commit ASCII SHA256 checksum for commit, or %NULL for each non existing commit
     * @param cancellable Cancellable
     */
    pruneStaticDeltas(commit: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Connect to the remote repository, fetching the specified set of
     * refs `refs_to_fetch`.  For each ref that is changed, download the
     * commit, all metadata, and all content objects, storing them safely
     * on disk in `self`.
     * 
     * If `flags` contains %OSTREE_REPO_PULL_FLAGS_MIRROR, and
     * the `refs_to_fetch` is %NULL, and the remote repository contains a
     * summary file, then all refs will be fetched.
     * 
     * If `flags` contains %OSTREE_REPO_PULL_FLAGS_COMMIT_ONLY, then only the
     * metadata for the commits in `refs_to_fetch` is pulled.
     * 
     * Warning: This API will iterate the thread default main context,
     * which is a bug, but kept for compatibility reasons.  If you want to
     * avoid this, use g_main_context_push_thread_default() to push a new
     * one around this call.
     * @param remoteName Name of remote
     * @param refsToFetch Optional list of refs; if %NULL, fetch all configured refs
     * @param flags Options controlling fetch behavior
     * @param progress Progress
     * @param cancellable Cancellable
     */
    pull(remoteName: string | null, refsToFetch: string[] | null, flags: RepoPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * This is similar to ostree_repo_pull(), but only fetches a single
     * subpath.
     * @param remoteName Name of remote
     * @param dirToPull Subdirectory path
     * @param refsToFetch Optional list of refs; if %NULL, fetch all configured refs
     * @param flags Options controlling fetch behavior
     * @param progress Progress
     * @param cancellable Cancellable
     */
    pullOneDir(remoteName: string | null, dirToPull: string | null, refsToFetch: string[] | null, flags: RepoPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Like ostree_repo_pull(), but supports an extensible set of flags.
     * The following are currently defined:
     * 
     *   * refs (as): Array of string refs
     *   * flags (i): An instance of #OstreeRepoPullFlags
     *   * subdir (s): Pull just this subdirectory
     *   * override-remote-name (s): If local, add this remote to refspec
     *   * gpg-verify (b): GPG verify commits
     *   * gpg-verify-summary (b): GPG verify summary
     *   * depth (i): How far in the history to traverse; default is 0, -1 means infinite
     *   * disable-static-deltas (b): Do not use static deltas
     *   * require-static-deltas (b): Require static deltas
     *   * override-commit-ids (as): Array of specific commit IDs to fetch for refs
     *   * dry-run (b): Only print information on what will be downloaded (requires static deltas)
     *   * override-url (s): Fetch objects from this URL if remote specifies no metalink in options
     * @param remoteNameOrBaseurl Name of remote or file:// url
     * @param options A GVariant a{sv} with an extensible set of flags.
     * @param progress Progress
     * @param cancellable Cancellable
     */
    pullWithOptions(remoteNameOrBaseurl: string | null, options: GLib.Variant, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Return the size in bytes of object with checksum `sha2`56, after any
     * compression has been applied.
     * @param objtype Object type
     * @param sha256 Checksum
     * @param cancellable Cancellable
     */
    queryObjectStorageSize(objtype: ObjectType, sha256: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSize */ number ]
    /**
     * Load the content for `rev` into `out_root`.
     * @param ref Ref or ASCII checksum
     * @param cancellable Cancellable
     */
    readCommit(ref: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRoot */ Gio.File, /* outCommit */ string | null ]
    /**
     * OSTree commits can have arbitrary metadata associated; this
     * function retrieves them.  If none exists, `out_metadata` will be set
     * to %NULL.
     * @param checksum ASCII SHA256 commit checksum
     * @param cancellable Cancellable
     */
    readCommitDetachedMetadata(checksum: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outMetadata */ GLib.Variant ]
    /**
     * An OSTree repository can contain a high level "summary" file that
     * describes the available branches and other metadata.
     * 
     * It is regenerated automatically after a commit if
     * `core/commit-update-summary` is set.
     * @param additionalMetadata A GVariant of type a{sv}, or %NULL
     * @param cancellable Cancellable
     */
    regenerateSummary(additionalMetadata: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Create a new remote named `name` pointing to `url`.  If `options` is
     * provided, then it will be mapped to #GKeyFile entries, where the
     * GVariant dictionary key is an option string, and the value is
     * mapped as follows:
     *   * s: g_key_file_set_string()
     *   * b: g_key_file_set_boolean()
     *   * as: g_key_file_set_string_list()
     * @param name Name of remote
     * @param url URL for remote (if URL begins with metalink=, it will be used as such)
     * @param options GVariant of type a{sv}
     * @param cancellable Cancellable
     */
    remoteAdd(name: string | null, url: string | null, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * A combined function handling the equivalent of
     * ostree_repo_remote_add(), ostree_repo_remote_delete(), with more
     * options.
     * @param sysroot System root
     * @param changeop Operation to perform
     * @param name Name of remote
     * @param url URL for remote (if URL begins with metalink=, it will be used as such)
     * @param options GVariant of type a{sv}
     * @param cancellable Cancellable
     */
    remoteChange(sysroot: Gio.File | null, changeop: RepoRemoteChange, name: string | null, url: string | null, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Delete the remote named `name`.  It is an error if the provided
     * remote does not exist.
     * @param name Name of remote
     * @param cancellable Cancellable
     */
    remoteDelete(name: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Tries to fetch the summary file and any GPG signatures on the summary file
     * over HTTP, and returns the binary data in `out_summary` and `out_signatures`
     * respectively.
     * 
     * If no summary file exists on the remote server, `out_summary` is set to
     * `NULL`.  Likewise if the summary file is not signed, `out_signatures` is
     * set to `NULL`.  In either case the function still returns %TRUE.
     * 
     * Parse the summary data into a #GVariant using g_variant_new_from_bytes()
     * with #OSTREE_SUMMARY_GVARIANT_FORMAT as the format string.
     * @param name name of a remote
     * @param outSummary return location for raw summary data, or %NULL
     * @param outSignatures return location for raw summary signature                                data, or %NULL
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE on failure
     */
    remoteFetchSummary(name: string | null, outSummary: any | null, outSignatures: any | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Like ostree_repo_remote_fetch_summary(), but supports an extensible set of flags.
     * The following are currently defined:
     * 
     * - override-url (s): Fetch summary from this URL if remote specifies no metalink in options
     * @param name name of a remote
     * @param options A GVariant a{sv} with an extensible set of flags
     * @param outSummary return location for raw summary data, or %NULL
     * @param outSignatures return location for raw summary signature                              data, or %NULL
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE on failure
     */
    remoteFetchSummaryWithOptions(name: string | null, options: GLib.Variant | null, outSummary: any | null, outSignatures: any | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Return whether GPG verification is enabled for the remote named `name`
     * through `out_gpg_verify`.  It is an error if the provided remote does
     * not exist.
     * @param name Name of remote
     * @returns %TRUE on success, %FALSE on failure
     */
    remoteGetGpgVerify(name: string | null): [ /* returnType */ boolean, /* outGpgVerify */ boolean ]
    /**
     * Return whether GPG verification of the summary is enabled for the remote
     * named `name` through `out_gpg_verify_summary`.  It is an error if the provided
     * remote does not exist.
     * @param name Name of remote
     * @returns %TRUE on success, %FALSE on failure
     */
    remoteGetGpgVerifySummary(name: string | null): [ /* returnType */ boolean, /* outGpgVerifySummary */ boolean ]
    /**
     * Return the URL of the remote named `name` through `out_url`.  It is an
     * error if the provided remote does not exist.
     * @param name Name of remote
     * @returns %TRUE on success, %FALSE on failure
     */
    remoteGetUrl(name: string | null): [ /* returnType */ boolean, /* outUrl */ string | null ]
    /**
     * Imports one or more GPG keys from the open `source_stream,` or from the
     * user's personal keyring if `source_stream` is %NULL.  The `key_ids` array
     * can optionally restrict which keys are imported.  If `key_ids` is %NULL,
     * then all keys are imported.
     * 
     * The imported keys will be used to conduct GPG verification when pulling
     * from the remote named `name`.
     * @param name name of a remote
     * @param sourceStream a #GInputStream, or %NULL
     * @param keyIds a %NULL-terminated array of GPG key IDs, or %NULL
     * @param outImported return location for the number of imported                              keys, or %NULL
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE on failure
     */
    remoteGpgImport(name: string | null, sourceStream: Gio.InputStream | null, keyIds: string[] | null, outImported: number | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * List available remote names in an #OstreeRepo.  Remote names are sorted
     * alphabetically.  If no remotes are available the function returns %NULL.
     * @returns a %NULL-terminated          array of remote names
     */
    remoteList(): string[]
    remoteListRefs(remoteName: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAllRefs */ GLib.HashTable ]
    /**
     * Look up the given refspec, returning the checksum it references in
     * the parameter `out_rev`. Will fall back on remote directory if cannot
     * find the given refspec in local.
     * @param refspec A refspec
     * @param allowNoent Do not throw an error if refspec does not exist
     */
    resolveRev(refspec: string | null, allowNoent: boolean): [ /* returnType */ boolean, /* outRev */ string | null ]
    /**
     * Look up the given refspec, returning the checksum it references in
     * the parameter `out_rev`. Differently from ostree_repo_resolve_rev(),
     * this will not fall back to searching through remote repos if a
     * local ref is specified but not found.
     * @param refspec A refspec
     * @param allowNoent Do not throw an error if refspec does not exist
     * @param flags Options controlling behavior
     */
    resolveRevExt(refspec: string | null, allowNoent: boolean, flags: RepoResolveRevExtFlags): [ /* returnType */ boolean, /* outRev */ string | null ]
    /**
     * When ostree builds a mutable tree from directory like in
     * ostree_repo_write_directory_to_mtree(), it has to scan all files that you
     * pass in and compute their checksums. If your commit contains hardlinks from
     * ostree's existing repo, ostree can build a mapping of device numbers and
     * inodes to their checksum.
     * 
     * There is an upfront cost to creating this mapping, as this will scan the
     * entire objects directory. If your commit is composed of mostly hardlinks to
     * existing ostree objects, then this will speed up considerably, so call it
     * before you call ostree_write_directory_to_mtree() or similar.
     * @param cancellable Cancellable
     */
    scanHardlinks(cancellable: Gio.Cancellable | null): boolean
    /**
     * Set a custom location for the cache directory used for e.g.
     * per-remote summary caches. Setting this manually is useful when
     * doing operations on a system repo as a user because you don't have
     * write permissions in the repo, where the cache is normally stored.
     * @param dfd directory fd
     * @param path subpath in `dfd`
     * @param cancellable a #GCancellable
     */
    setCacheDir(dfd: number, path: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Disable requests to fsync() to stable storage during commits.  This
     * option should only be used by build system tools which are creating
     * disposable virtual machines, or have higher level mechanisms for
     * ensuring data consistency.
     * @param disableFsync If %TRUE, do not fsync
     */
    setDisableFsync(disableFsync: boolean): void
    /**
     * This is like ostree_repo_transaction_set_ref(), except it may be
     * invoked outside of a transaction.  This is presently safe for the
     * case where we're creating or overwriting an existing ref.
     * @param remote A remote for the ref
     * @param ref The ref to write
     * @param checksum The checksum to point it to, or %NULL to unset
     * @param cancellable GCancellable
     */
    setRefImmediate(remote: string | null, ref: string | null, checksum: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Add a GPG signature to a commit.
     * @param commitChecksum SHA256 of given commit to sign
     * @param keyId Use this GPG key id
     * @param homedir GPG home directory, or %NULL
     * @param cancellable A #GCancellable
     */
    signCommit(commitChecksum: string | null, keyId: string | null, homedir: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * This function is deprecated, sign the summary file instead.
     * Add a GPG signature to a static delta.
     * @param fromCommit 
     * @param toCommit 
     * @param keyId 
     * @param homedir 
     * @param cancellable 
     */
    signDelta(fromCommit: string | null, toCommit: string | null, keyId: string | null, homedir: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Given a directory representing an already-downloaded static delta
     * on disk, apply it, generating a new commit.  The directory must be
     * named with the form "FROM-TO", where both are checksums, and it
     * must contain a file named "superblock", along with at least one part.
     * @param dirOrFile Path to a directory containing static delta data, or directly to the superblock
     * @param skipValidation If %TRUE, assume data integrity
     * @param cancellable Cancellable
     */
    staticDeltaExecuteOffline(dirOrFile: Gio.File, skipValidation: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Generate a lookaside "static delta" from `from` (%NULL means
     * from-empty) which can generate the objects in `to`.  This delta is
     * an optimization over fetching individual objects, and can be
     * conveniently stored and applied offline.
     * 
     * The `params` argument should be an a{sv}.  The following attributes
     * are known:
     *   - min-fallback-size: u: Minimum uncompressed size in megabytes to use fallback, 0 to disable fallbacks
     *   - max-chunk-size: u: Maximum size in megabytes of a delta part
     *   - max-bsdiff-size: u: Maximum size in megabytes to consider bsdiff compression
     *   for input files
     *   - compression: y: Compression type: 0=none, x=lzma, g=gzip
     *   - bsdiff-enabled: b: Enable bsdiff compression.  Default TRUE.
     *   - inline-parts: b: Put part data in header, to get a single file delta.  Default FALSE.
     *   - verbose: b: Print diagnostic messages.  Default FALSE.
     *   - endianness: b: Deltas use host byte order by default; this option allows choosing (G_BIG_ENDIAN or G_LITTLE_ENDIAN)
     *   - filename: ay: Save delta superblock to this filename, and parts in the same directory.  Default saves to repository.
     * @param opt High level optimization choice
     * @param from ASCII SHA256 checksum of origin, or %NULL
     * @param to ASCII SHA256 checksum of target
     * @param metadata Optional metadata
     * @param params Parameters, see below
     * @param cancellable Cancellable
     */
    staticDeltaGenerate(opt: StaticDeltaGenerateOpt, from: string | null, to: string | null, metadata: GLib.Variant | null, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * If `checksum` is not %NULL, then record it as the target of ref named
     * `ref;` if `remote` is provided, the ref will appear to originate from that
     * remote.
     * 
     * Otherwise, if `checksum` is %NULL, then record that the ref should
     * be deleted.
     * 
     * The change will not be written out immediately, but when the transaction
     * is completed with ostree_repo_commit_transaction(). If the transaction
     * is instead aborted with ostree_repo_abort_transaction(), no changes will
     * be made to the repository.
     * @param remote A remote for the ref
     * @param ref The ref to write
     * @param checksum The checksum to point it to
     */
    transactionSetRef(remote: string | null, ref: string | null, checksum: string | null): void
    /**
     * Like ostree_repo_transaction_set_ref(), but takes concatenated
     * `refspec` format as input instead of separate remote and name
     * arguments.
     * @param refspec The refspec to write
     * @param checksum The checksum to point it to
     */
    transactionSetRefspec(refspec: string | null, checksum: string | null): void
    /**
     * Create a new set `out_reachable` containing all objects reachable
     * from `commit_checksum,` traversing `maxdepth` parent commits.
     * @param commitChecksum ASCII SHA256 checksum
     * @param maxdepth Traverse this many parent commits, -1 for unlimited
     * @param cancellable Cancellable
     */
    traverseCommit(commitChecksum: string | null, maxdepth: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outReachable */ GLib.HashTable ]
    /**
     * Check for a valid GPG signature on commit named by the ASCII
     * checksum `commit_checksum`.
     * @param commitChecksum ASCII SHA256 checksum
     * @param keyringdir Path to directory GPG keyrings; overrides built-in default if given
     * @param extraKeyring Path to additional keyring file (not a directory)
     * @param cancellable Cancellable
     * @returns %TRUE if there was a GPG signature from a trusted keyring, otherwise %FALSE
     */
    verifyCommit(commitChecksum: string | null, keyringdir: Gio.File | null, extraKeyring: Gio.File | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Read GPG signature(s) on the commit named by the ASCII checksum
     * `commit_checksum` and return detailed results.
     * @param commitChecksum ASCII SHA256 checksum
     * @param keyringdir Path to directory GPG keyrings; overrides built-in default if given
     * @param extraKeyring Path to additional keyring file (not a directory)
     * @param cancellable Cancellable
     * @returns an #OstreeGpgVerifyResult, or %NULL on error
     */
    verifyCommitExt(commitChecksum: string | null, keyringdir: Gio.File | null, extraKeyring: Gio.File | null, cancellable: Gio.Cancellable | null): GpgVerifyResult
    /**
     * Verify `signatures` for `summary` data using GPG keys in the keyring for
     * `remote_name,` and return an #OstreeGpgVerifyResult.
     * @param remoteName Name of remote
     * @param summary Summary data as a #GBytes
     * @param signatures Summary signatures as a #GBytes
     * @param cancellable Cancellable
     * @returns an #OstreeGpgVerifyResult, or %NULL on error
     */
    verifySummary(remoteName: string | null, summary: any, signatures: any, cancellable: Gio.Cancellable | null): GpgVerifyResult
    /**
     * Import an archive file `archive` into the repository, and write its
     * file structure to `mtree`.
     * @param archive A path to an archive file
     * @param mtree The #OstreeMutableTree to write to
     * @param modifier Optional commit modifier
     * @param autocreateParents Autocreate parent directories
     * @param cancellable Cancellable
     */
    writeArchiveToMtree(archive: Gio.File, mtree: MutableTree, modifier: RepoCommitModifier | null, autocreateParents: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Write a commit metadata object, referencing `root_contents_checksum`
     * and `root_metadata_checksum`.
     * @param parent ASCII SHA256 checksum for parent, or %NULL for none
     * @param subject Subject
     * @param body Body
     * @param metadata GVariant of type a{sv}, or %NULL for none
     * @param root The tree to point the commit to
     * @param cancellable Cancellable
     */
    writeCommit(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCommit */ string | null ]
    /**
     * Replace any existing metadata associated with commit referred to by
     * `checksum` with `metadata`.  If `metadata` is %NULL, then existing
     * data will be deleted.
     * @param checksum ASCII SHA256 commit checksum
     * @param metadata Metadata to associate with commit in with format "a{sv}", or %NULL to delete
     * @param cancellable Cancellable
     */
    writeCommitDetachedMetadata(checksum: string | null, metadata: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Write a commit metadata object, referencing `root_contents_checksum`
     * and `root_metadata_checksum`.
     * @param parent ASCII SHA256 checksum for parent, or %NULL for none
     * @param subject Subject
     * @param body Body
     * @param metadata GVariant of type a{sv}, or %NULL for none
     * @param root The tree to point the commit to
     * @param time The time to use to stamp the commit
     * @param cancellable Cancellable
     */
    writeCommitWithTime(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, time: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCommit */ string | null ]
    /**
     * Save `new_config` in place of this repository's config file.  Note
     * that `new_config` should not be modified after - this function
     * simply adds a reference.
     * @param newConfig Overwrite the config file with this data.  Do not change later!
     */
    writeConfig(newConfig: GLib.KeyFile): boolean
    /**
     * Store the content object streamed as `object_input,`
     * with total length `length`.  The actual checksum will
     * be returned as `out_csum`.
     * @param expectedChecksum If provided, validate content against this checksum
     * @param objectInput Content object stream
     * @param length Length of `object_input`
     * @param cancellable Cancellable
     */
    writeContent(expectedChecksum: string | null, objectInput: Gio.InputStream, length: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCsum */ Uint8Array ]
    /**
     * Asynchronously store the content object `object`.  If provided, the
     * checksum `expected_checksum` will be verified.
     * @param expectedChecksum If provided, validate content against this checksum
     * @param object Input
     * @param length Length of `object`
     * @param cancellable Cancellable
     * @param callback Invoked when content is writed
     */
    writeContentAsync(expectedChecksum: string | null, object: Gio.InputStream, length: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an invocation of ostree_repo_write_content_async().
     * @param result a #GAsyncResult
     */
    writeContentFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCsum */ number ]
    /**
     * Store the content object streamed as `object_input,` with total
     * length `length`.  The given `checksum` will be treated as trusted.
     * 
     * This function should be used when importing file objects from local
     * disk, for example.
     * @param checksum Store content using this ASCII SHA256 checksum
     * @param objectInput Content stream
     * @param length Length of `object_input`
     * @param cancellable Cancellable
     */
    writeContentTrusted(checksum: string | null, objectInput: Gio.InputStream, length: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Store as objects all contents of the directory referred to by `dfd`
     * and `path` all children into the repository `self,` overlaying the
     * resulting filesystem hierarchy into `mtree`.
     * @param dfd Directory file descriptor
     * @param path Path
     * @param mtree Overlay directory contents into this tree
     * @param modifier Optional modifier
     * @param cancellable Cancellable
     */
    writeDfdToMtree(dfd: number, path: string | null, mtree: MutableTree, modifier: RepoCommitModifier | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Store objects for `dir` and all children into the repository `self,`
     * overlaying the resulting filesystem hierarchy into `mtree`.
     * @param dir Path to a directory
     * @param mtree Overlay directory contents into this tree
     * @param modifier Optional modifier
     * @param cancellable Cancellable
     */
    writeDirectoryToMtree(dir: Gio.File, mtree: MutableTree, modifier: RepoCommitModifier | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Store the metadata object `variant`.  Return the checksum
     * as `out_csum`.
     * 
     * If `expected_checksum` is not %NULL, verify it against the
     * computed checksum.
     * @param objtype Object type
     * @param expectedChecksum If provided, validate content against this checksum
     * @param object Metadata
     * @param cancellable Cancellable
     */
    writeMetadata(objtype: ObjectType, expectedChecksum: string | null, object: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCsum */ Uint8Array ]
    /**
     * Asynchronously store the metadata object `variant`.  If provided,
     * the checksum `expected_checksum` will be verified.
     * @param objtype Object type
     * @param expectedChecksum If provided, validate content against this checksum
     * @param object Metadata
     * @param cancellable Cancellable
     * @param callback Invoked when metadata is writed
     */
    writeMetadataAsync(objtype: ObjectType, expectedChecksum: string | null, object: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    writeMetadataFinish(result: Gio.AsyncResult, outCsum: number): boolean
    /**
     * Store the metadata object `variant;` the provided `checksum` is
     * trusted.
     * @param objtype Object type
     * @param checksum Store object with this ASCII SHA256 checksum
     * @param objectInput Metadata object stream
     * @param length Length, may be 0 for unknown
     * @param cancellable Cancellable
     */
    writeMetadataStreamTrusted(objtype: ObjectType, checksum: string | null, objectInput: Gio.InputStream, length: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Store the metadata object `variant;` the provided `checksum` is
     * trusted.
     * @param objtype Object type
     * @param checksum Store object with this ASCII SHA256 checksum
     * @param variant Metadata object
     * @param cancellable Cancellable
     */
    writeMetadataTrusted(objtype: ObjectType, checksum: string | null, variant: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Write all metadata objects for `mtree` to repo; the resulting
     * `out_file` points to the %OSTREE_OBJECT_TYPE_DIR_TREE object that
     * the `mtree` represented.
     * @param mtree Mutable tree
     * @param cancellable Cancellable
     */
    writeMtree(mtree: MutableTree, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFile */ Gio.File ]

    // Own signals of OSTree-1.0.OSTree.Repo

    connect(sigName: "gpg-verify-result", callback: Repo.GpgVerifyResultSignalCallback): number
    on(sigName: "gpg-verify-result", callback: Repo.GpgVerifyResultSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "gpg-verify-result", callback: Repo.GpgVerifyResultSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "gpg-verify-result", callback: Repo.GpgVerifyResultSignalCallback): NodeJS.EventEmitter
    emit(sigName: "gpg-verify-result", result: GpgVerifyResult, ...args: any[]): void

    // Class property signals of OSTree-1.0.OSTree.Repo

    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::remotes-config-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::remotes-config-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remotes-config-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remotes-config-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remotes-config-dir", ...args: any[]): void
    connect(sigName: "notify::sysroot-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::sysroot-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sysroot-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sysroot-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sysroot-path", ...args: any[]): void
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

export class Repo extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.Repo

    static name: string

    // Constructors of OSTree-1.0.OSTree.Repo

    constructor(config?: Repo.ConstructorProperties) 
    constructor(path: Gio.File) 
    static new(path: Gio.File): Repo
    /**
     * If the current working directory appears to be an OSTree
     * repository, create a new #OstreeRepo object for accessing it.
     * Otherwise use the path in the OSTREE_REPO environment variable
     * (if defined) or else the default system repository located at
     * /ostree/repo.
     * @constructor 
     * @returns An accessor object for an OSTree repository located at /ostree/repo
     */
    static newDefault(): Repo
    /**
     * Creates a new #OstreeRepo instance, taking the system root path explicitly
     * instead of assuming "/".
     * @constructor 
     * @param repoPath Path to a repository
     * @param sysrootPath Path to the system root
     * @returns An accessor object for the OSTree repository located at @repo_path.
     */
    static newForSysrootPath(repoPath: Gio.File, sysrootPath: Gio.File): Repo
    _init(config?: Repo.ConstructorProperties): void
    static modeFromString(mode: string | null, outMode: RepoMode): boolean
    /**
     * Convenient "changed" callback for use with
     * ostree_async_progress_new_and_connect() when pulling from a remote
     * repository.
     * 
     * Depending on the state of the #OstreeAsyncProgress, either displays a
     * custom status message, or else outstanding fetch progress in bytes/sec,
     * or else outstanding content or metadata writes to the repository in
     * number of objects.
     * 
     * Compatibility note: this function previously assumed that `user_data`
     * was a pointer to a #GSConsole instance.  This is no longer the case,
     * and `user_data` is ignored.
     * @param progress Async progress
     * @param userData User data
     */
    static pullDefaultConsoleProgressChanged(progress: AsyncProgress, userData: any | null): void
    /**
     * This hash table is a set of #GVariant which can be accessed via
     * ostree_object_name_deserialize().
     * @returns A new hash table
     */
    static traverseNewReachable(): GLib.HashTable
}

export module RepoFile {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.File.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface RepoFile extends Gio.File {

    // Own properties of OSTree-1.0.OSTree.RepoFile

    __gtype__: number

    // Owm methods of OSTree-1.0.OSTree.RepoFile

    ensureResolved(): boolean
    getChecksum(): string | null
    getRepo(): Repo
    getRoot(): RepoFile
    getXattrs(outXattrs: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    treeFindChild(name: string | null, isDir: boolean, outContainer: GLib.Variant): number
    treeGetContents(): GLib.Variant
    treeGetContentsChecksum(): string | null
    treeGetMetadata(): GLib.Variant
    treeGetMetadataChecksum(): string | null
    treeQueryChild(n: number, attributes: string | null, flags: Gio.FileQueryInfoFlags, outInfo: Gio.FileInfo, cancellable: Gio.Cancellable | null): boolean
    treeSetMetadata(checksum: string | null, metadata: GLib.Variant): void

    // Class property signals of OSTree-1.0.OSTree.RepoFile

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

export class RepoFile extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.RepoFile

    static name: string

    // Constructors of OSTree-1.0.OSTree.RepoFile

    constructor(config?: RepoFile.ConstructorProperties) 
    _init(config?: RepoFile.ConstructorProperties): void
}

export module SePolicy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of OSTree-1.0.OSTree.SePolicy

        path?: Gio.File | null
    }

}

export interface SePolicy extends Gio.Initable {

    // Own properties of OSTree-1.0.OSTree.SePolicy

    readonly path: Gio.File
    __gtype__: number

    // Owm methods of OSTree-1.0.OSTree.SePolicy

    getCsum(): string | null
    /**
     * Store in `out_label` the security context for the given `relpath` and
     * mode `unix_mode`.  If the policy does not specify a label, %NULL
     * will be returned.
     * @param relpath Path
     * @param unixMode Unix mode
     * @param cancellable Cancellable
     */
    getLabel(relpath: string | null, unixMode: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outLabel */ string | null ]
    getName(): string | null
    getPath(): Gio.File
    /**
     * Reset the security context of `target` based on the SELinux policy.
     * @param path Path string to use for policy lookup
     * @param info File attributes
     * @param target Physical path to target file
     * @param flags Flags controlling behavior
     * @param cancellable Cancellable
     */
    restorecon(path: string | null, info: Gio.FileInfo | null, target: Gio.File, flags: SePolicyRestoreconFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewLabel */ string | null ]
    setfscreatecon(path: string | null, mode: number): boolean

    // Class property signals of OSTree-1.0.OSTree.SePolicy

    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
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

export class SePolicy extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.SePolicy

    static name: string

    // Constructors of OSTree-1.0.OSTree.SePolicy

    constructor(config?: SePolicy.ConstructorProperties) 
    constructor(path: Gio.File, cancellable: Gio.Cancellable | null) 
    static new(path: Gio.File, cancellable: Gio.Cancellable | null): SePolicy
    _init(config?: SePolicy.ConstructorProperties): void
    /**
     * Cleanup function for ostree_sepolicy_setfscreatecon().
     * @param unused 
     */
    static fscreateconCleanup(unused: any | null): void
}

export module Sysroot {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of OSTree-1.0.OSTree.Sysroot

        path?: Gio.File | null
    }

}

export interface Sysroot {

    // Own properties of OSTree-1.0.OSTree.Sysroot

    readonly path: Gio.File
    __gtype__: number

    // Owm methods of OSTree-1.0.OSTree.Sysroot

    /**
     * Delete any state that resulted from a partially completed
     * transaction, such as incomplete deployments.
     * @param cancellable Cancellable
     */
    cleanup(cancellable: Gio.Cancellable | null): boolean
    /**
     * Check out deployment tree with revision `revision,` performing a 3
     * way merge with `provided_merge_deployment` for configuration.
     * @param osname osname to use for merge deployment
     * @param revision Checksum to add
     * @param origin Origin to use for upgrades
     * @param providedMergeDeployment Use this deployment for merge path
     * @param overrideKernelArgv Use these as kernel arguments; if %NULL, inherit options from provided_merge_deployment
     * @param cancellable Cancellable
     */
    deployTree(osname: string | null, revision: string | null, origin: GLib.KeyFile | null, providedMergeDeployment: Deployment | null, overrideKernelArgv: string[] | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outNewDeployment */ Deployment ]
    /**
     * Entirely replace the kernel arguments of `deployment` with the
     * values in `new_kargs`.
     * @param deployment A deployment
     * @param newKargs Replace deployment's kernel arguments
     * @param cancellable Cancellable
     */
    deploymentSetKargs(deployment: Deployment, newKargs: string[], cancellable: Gio.Cancellable | null): boolean
    /**
     * By default, deployment directories are not mutable.  This function
     * will allow making them temporarily mutable, for example to allow
     * layering additional non-OSTree content.
     * @param deployment A deployment
     * @param isMutable Whether or not deployment's files can be changed
     * @param cancellable 
     */
    deploymentSetMutable(deployment: Deployment, isMutable: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Configure the target deployment `deployment` such that it
     * is writable.  There are multiple modes, essentially differing
     * in whether or not any changes persist across reboot.
     * 
     * The `OSTREE_DEPLOYMENT_UNLOCKED_HOTFIX` state is persistent
     * across reboots.
     * @param deployment Deployment
     * @param unlockedState Transition to this unlocked state
     * @param cancellable Cancellable
     */
    deploymentUnlock(deployment: Deployment, unlockedState: DeploymentUnlockedState, cancellable: Gio.Cancellable | null): boolean
    /**
     * Ensure that `self` is set up as a valid rootfs, by creating
     * /ostree/repo, among other things.
     * @param cancellable Cancellable
     */
    ensureInitialized(cancellable: Gio.Cancellable | null): boolean
    getBootedDeployment(): Deployment
    getBootversion(): number
    getDeploymentDirectory(deployment: Deployment): Gio.File
    /**
     * Note this function only returns a *relative* path - if you want
     * to access, it, you must either use fd-relative api such as openat(),
     * or concatenate it with the full ostree_sysroot_get_path().
     * @param deployment A deployment
     * @returns Path to deployment root directory, relative to sysroot
     */
    getDeploymentDirpath(deployment: Deployment): string | null
    getDeployments(): Deployment[]
    /**
     * Access a file descriptor that refers to the root directory of this
     * sysroot.  ostree_sysroot_load() must have been invoked prior to
     * calling this function.
     * @returns A file descriptor valid for the lifetime of @self
     */
    getFd(): number
    /**
     * Find the deployment to use as a configuration merge source; this is
     * the first one in the current deployment list which matches osname.
     * @param osname Operating system group
     * @returns Configuration merge deployment
     */
    getMergeDeployment(osname: string | null): Deployment
    getPath(): Gio.File
    /**
     * Retrieve the OSTree repository in sysroot `self`.
     * @param cancellable Cancellable
     */
    getRepo(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRepo */ Repo ]
    getSubbootversion(): number
    /**
     * Initialize the directory structure for an "osname", which is a
     * group of operating system deployments, with a shared `/var`.  One
     * is required for generating a deployment.
     * @param osname Name group of operating system checkouts
     * @param cancellable Cancellable
     */
    initOsname(osname: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Load deployment list, bootversion, and subbootversion from the
     * rootfs `self`.
     * @param cancellable Cancellable
     */
    load(cancellable: Gio.Cancellable | null): boolean
    loadIfChanged(outChanged: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Acquire an exclusive multi-process write lock for `self`.  This call
     * blocks until the lock has been acquired.  The lock is not
     * reentrant.
     * 
     * Release the lock with ostree_sysroot_unlock().  The lock will also
     * be released if `self` is deallocated.
     */
    lock(): boolean
    /**
     * An asynchronous version of ostree_sysroot_lock().
     * @param cancellable Cancellable
     * @param callback Callback
     */
    lockAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Call when ostree_sysroot_lock_async() is ready.
     * @param result Result
     */
    lockFinish(result: Gio.AsyncResult): boolean
    originNewFromRefspec(refspec: string | null): GLib.KeyFile
    /**
     * Like ostree_sysroot_cleanup() in that it cleans up incomplete deployments
     * and old boot versions, but does NOT prune the repository.
     * @param cancellable Cancellable
     */
    prepareCleanup(cancellable: Gio.Cancellable | null): boolean
    /**
     * Prepend `new_deployment` to the list of deployments, commit, and
     * cleanup.  By default, all other deployments for the given `osname`
     * except the merge deployment and the booted deployment will be
     * garbage collected.
     * 
     * If %OSTREE_SYSROOT_SIMPLE_WRITE_DEPLOYMENT_FLAGS_RETAIN is
     * specified, then all current deployments will be kept.
     * 
     * If %OSTREE_SYSROOT_SIMPLE_WRITE_DEPLOYMENT_FLAGS_NOT_DEFAULT is
     * specified, then instead of prepending, the new deployment will be
     * added right after the booted or merge deployment, instead of first.
     * @param osname OS name
     * @param newDeployment Prepend this deployment to the list
     * @param mergeDeployment Use this deployment for configuration merge
     * @param flags Flags controlling behavior
     * @param cancellable Cancellable
     */
    simpleWriteDeployment(osname: string | null, newDeployment: Deployment, mergeDeployment: Deployment | null, flags: SysrootSimpleWriteDeploymentFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Try to acquire an exclusive multi-process write lock for `self`.  If
     * another process holds the lock, this function will return
     * immediately, setting `out_acquired` to %FALSE, and returning %TRUE
     * (and no error).
     * 
     * Release the lock with ostree_sysroot_unlock().  The lock will also
     * be released if `self` is deallocated.
     */
    tryLock(): [ /* returnType */ boolean, /* outAcquired */ boolean ]
    /**
     * Release any resources such as file descriptors referring to the
     * root directory of this sysroot.  Normally, those resources are
     * cleared by finalization, but in garbage collected languages that
     * may not be predictable.
     * 
     * This undoes the effect of `ostree_sysroot_load()`.
     */
    unload(): void
    /**
     * Clear the lock previously acquired with ostree_sysroot_lock().  It
     * is safe to call this function if the lock has not been previously
     * acquired.
     */
    unlock(): void
    /**
     * Assuming `new_deployments` have already been deployed in place on
     * disk, atomically update bootloader configuration.
     * @param newDeployments List of new deployments
     * @param cancellable Cancellable
     */
    writeDeployments(newDeployments: Deployment[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Immediately replace the origin file of the referenced `deployment`
     * with the contents of `new_origin`.  If `new_origin` is %NULL,
     * this function will write the current origin of `deployment`.
     * @param deployment Deployment
     * @param newOrigin Origin content
     * @param cancellable Cancellable
     */
    writeOriginFile(deployment: Deployment, newOrigin: GLib.KeyFile | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of OSTree-1.0.OSTree.Sysroot

    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
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

export class Sysroot extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.Sysroot

    static name: string

    // Constructors of OSTree-1.0.OSTree.Sysroot

    constructor(config?: Sysroot.ConstructorProperties) 
    constructor(path: Gio.File | null) 
    static new(path: Gio.File | null): Sysroot
    static newDefault(): Sysroot
    _init(config?: Sysroot.ConstructorProperties): void
    static getDeploymentOriginPath(deploymentPath: Gio.File): Gio.File
}

export module SysrootUpgrader {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of OSTree-1.0.OSTree.SysrootUpgrader

        flags?: SysrootUpgraderFlags | null
        osname?: string | null
        sysroot?: Sysroot | null
    }

}

export interface SysrootUpgrader extends Gio.Initable {

    // Own properties of OSTree-1.0.OSTree.SysrootUpgrader

    readonly flags: SysrootUpgraderFlags
    readonly osname: string | null
    readonly sysroot: Sysroot
    __gtype__: number

    // Owm methods of OSTree-1.0.OSTree.SysrootUpgrader

    /**
     * Write the new deployment to disk, perform a configuration merge
     * with /etc, and update the bootloader configuration.
     * @param cancellable Cancellable
     */
    deploy(cancellable: Gio.Cancellable | null): boolean
    dupOrigin(): GLib.KeyFile
    getOrigin(): GLib.KeyFile
    getOriginDescription(): string | null
    /**
     * Perform a pull from the origin.  First check if the ref has
     * changed, if so download the linked objects, and store the updated
     * ref locally.  Then `out_changed` will be %TRUE.
     * 
     * If the origin remote is unchanged, `out_changed` will be set to
     * %FALSE.
     * @param flags Flags controlling pull behavior
     * @param upgraderFlags Flags controlling upgrader behavior
     * @param progress Progress
     * @param cancellable Cancellable
     */
    pull(flags: RepoPullFlags, upgraderFlags: SysrootUpgraderPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outChanged */ boolean ]
    /**
     * Like ostree_sysroot_upgrader_pull(), but allows retrieving just a
     * subpath of the tree.  This can be used to download metadata files
     * from inside the tree such as package databases.
     * @param dirToPull 
     * @param flags 
     * @param upgraderFlags 
     * @param progress 
     * @param outChanged 
     * @param cancellable 
     */
    pullOneDir(dirToPull: string | null, flags: RepoPullFlags, upgraderFlags: SysrootUpgraderPullFlags, progress: AsyncProgress, outChanged: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Replace the origin with `origin`.
     * @param origin The new origin
     * @param cancellable Cancellable
     */
    setOrigin(origin: GLib.KeyFile | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of OSTree-1.0.OSTree.SysrootUpgrader

    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::osname", callback: (...args: any[]) => void): number
    on(sigName: "notify::osname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::osname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::osname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::osname", ...args: any[]): void
    connect(sigName: "notify::sysroot", callback: (...args: any[]) => void): number
    on(sigName: "notify::sysroot", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sysroot", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sysroot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sysroot", ...args: any[]): void
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

export class SysrootUpgrader extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.SysrootUpgrader

    static name: string

    // Constructors of OSTree-1.0.OSTree.SysrootUpgrader

    constructor(config?: SysrootUpgrader.ConstructorProperties) 
    constructor(sysroot: Sysroot, cancellable: Gio.Cancellable | null) 
    static new(sysroot: Sysroot, cancellable: Gio.Cancellable | null): SysrootUpgrader
    static newForOs(sysroot: Sysroot, osname: string | null, cancellable: Gio.Cancellable | null): SysrootUpgrader
    static newForOsWithFlags(sysroot: Sysroot, osname: string | null, flags: SysrootUpgraderFlags, cancellable: Gio.Cancellable | null): SysrootUpgrader
    _init(config?: SysrootUpgrader.ConstructorProperties): void
    /**
     * Check that the timestamp on `to_rev` is equal to or newer than
     * `from_rev`.  This protects systems against man-in-the-middle
     * attackers which provide a client with an older commit.
     * @param repo Repo
     * @param fromRev From revision
     * @param toRev To revision
     */
    static checkTimestamps(repo: Repo, fromRev: string | null, toRev: string | null): boolean
}

export interface AsyncProgressClass {

    // Own fields of OSTree-1.0.OSTree.AsyncProgressClass

    parentClass: GObject.ObjectClass
    changed: (self: AsyncProgress) => void
}

export abstract class AsyncProgressClass {

    // Own properties of OSTree-1.0.OSTree.AsyncProgressClass

    static name: string
}

export interface Bootloader {
}

export class Bootloader {

    // Own properties of OSTree-1.0.OSTree.Bootloader

    static name: string
}

export interface BootloaderGrub2 {
}

export class BootloaderGrub2 {

    // Own properties of OSTree-1.0.OSTree.BootloaderGrub2

    static name: string
}

export interface BootloaderInterface {

    // Own fields of OSTree-1.0.OSTree.BootloaderInterface

    gIface: GObject.TypeInterface
    query: (bootloader: Bootloader, outIsActive: boolean, cancellable: Gio.Cancellable) => boolean
    getName: (self: Bootloader) => string | null
    writeConfig: (self: Bootloader, bootversion: number, cancellable: Gio.Cancellable) => boolean
    isAtomic: (self: Bootloader) => boolean
}

export class BootloaderInterface {

    // Own properties of OSTree-1.0.OSTree.BootloaderInterface

    static name: string
}

export interface BootloaderSyslinux {
}

export class BootloaderSyslinux {

    // Own properties of OSTree-1.0.OSTree.BootloaderSyslinux

    static name: string
}

export interface BootloaderUboot {
}

export class BootloaderUboot {

    // Own properties of OSTree-1.0.OSTree.BootloaderUboot

    static name: string
}

export interface ChecksumInputStreamClass {

    // Own fields of OSTree-1.0.OSTree.ChecksumInputStreamClass

    parentClass: Gio.FilterInputStreamClass
}

export abstract class ChecksumInputStreamClass {

    // Own properties of OSTree-1.0.OSTree.ChecksumInputStreamClass

    static name: string
}

export interface ChecksumInputStreamPrivate {
}

export class ChecksumInputStreamPrivate {

    // Own properties of OSTree-1.0.OSTree.ChecksumInputStreamPrivate

    static name: string
}

export interface CmdPrivateVTable {

    // Own fields of OSTree-1.0.OSTree.CmdPrivateVTable

    ostreeGenerateGrub2Config: (sysroot: Sysroot, bootversion: number, targetFd: number, cancellable: Gio.Cancellable) => boolean
    ostreeStaticDeltaDump: (repo: Repo, deltaId: string | null, cancellable: Gio.Cancellable) => boolean
    ostreeStaticDeltaQueryExists: (repo: Repo, deltaId: string | null, outExists: boolean, cancellable: Gio.Cancellable) => boolean
    ostreeStaticDeltaDelete: (repo: Repo, deltaId: string | null, cancellable: Gio.Cancellable) => boolean
}

export class CmdPrivateVTable {

    // Own properties of OSTree-1.0.OSTree.CmdPrivateVTable

    static name: string
}

export interface DiffItem {

    // Own fields of OSTree-1.0.OSTree.DiffItem

    refcount: number
    src: Gio.File
    target: Gio.File
    srcInfo: Gio.FileInfo
    targetInfo: Gio.FileInfo
    srcChecksum: string | null
    targetChecksum: string | null

    // Owm methods of OSTree-1.0.OSTree.DiffItem

    ref(): DiffItem
    unref(): void
}

export class DiffItem {

    // Own properties of OSTree-1.0.OSTree.DiffItem

    static name: string
}

export interface GpgVerifier {
}

export class GpgVerifier {

    // Own properties of OSTree-1.0.OSTree.GpgVerifier

    static name: string
}

export interface LibarchiveInputStream {

    // Own fields of OSTree-1.0.OSTree.LibarchiveInputStream

    parentInstance: Gio.InputStream
}

export class LibarchiveInputStream {

    // Own properties of OSTree-1.0.OSTree.LibarchiveInputStream

    static name: string
}

export interface LibarchiveInputStreamClass {

    // Own fields of OSTree-1.0.OSTree.LibarchiveInputStreamClass

    parentClass: Gio.InputStreamClass
}

export class LibarchiveInputStreamClass {

    // Own properties of OSTree-1.0.OSTree.LibarchiveInputStreamClass

    static name: string
}

export interface LibarchiveInputStreamPrivate {
}

export class LibarchiveInputStreamPrivate {

    // Own properties of OSTree-1.0.OSTree.LibarchiveInputStreamPrivate

    static name: string
}

export interface LzmaCompressor {
}

/**
 * Zlib decompression
 * @record 
 */
export class LzmaCompressor {

    // Own properties of OSTree-1.0.OSTree.LzmaCompressor

    static name: string
}

export interface LzmaCompressorClass {

    // Own fields of OSTree-1.0.OSTree.LzmaCompressorClass

    parentClass: GObject.ObjectClass
}

export class LzmaCompressorClass {

    // Own properties of OSTree-1.0.OSTree.LzmaCompressorClass

    static name: string
}

export interface LzmaDecompressor {
}

export class LzmaDecompressor {

    // Own properties of OSTree-1.0.OSTree.LzmaDecompressor

    static name: string
}

export interface LzmaDecompressorClass {

    // Own fields of OSTree-1.0.OSTree.LzmaDecompressorClass

    parentClass: GObject.ObjectClass
}

export class LzmaDecompressorClass {

    // Own properties of OSTree-1.0.OSTree.LzmaDecompressorClass

    static name: string
}

export interface MutableTreeClass {

    // Own fields of OSTree-1.0.OSTree.MutableTreeClass

    parentClass: GObject.ObjectClass
}

export abstract class MutableTreeClass {

    // Own properties of OSTree-1.0.OSTree.MutableTreeClass

    static name: string
}

export interface MutableTreeIter {

    // Own fields of OSTree-1.0.OSTree.MutableTreeIter

    inFiles: boolean
    iter: GLib.HashTableIter
}

export class MutableTreeIter {

    // Own properties of OSTree-1.0.OSTree.MutableTreeIter

    static name: string
}

export interface RepoCheckoutAtOptions {

    // Own fields of OSTree-1.0.OSTree.RepoCheckoutAtOptions

    mode: RepoCheckoutMode
    overwriteMode: RepoCheckoutOverwriteMode
    enableUncompressedCache: boolean
    enableFsync: boolean
    processWhiteouts: boolean
    noCopyFallback: boolean
    unusedBools: boolean[]
    subpath: string | null
    devinoToCsumCache: RepoDevInoCache
    unusedInts: number[]
    unusedPtrs: any[]
}

/**
 * An extensible options structure controlling checkout.  Ensure that
 * you have entirely zeroed the structure, then set just the desired
 * options.  This is used by ostree_repo_checkout_at() which
 * supercedes previous separate enumeration usage in
 * ostree_repo_checkout_tree() and ostree_repo_checkout_tree_at().
 * @record 
 */
export class RepoCheckoutAtOptions {

    // Own properties of OSTree-1.0.OSTree.RepoCheckoutAtOptions

    static name: string
}

export interface RepoCheckoutOptions {

    // Own fields of OSTree-1.0.OSTree.RepoCheckoutOptions

    mode: RepoCheckoutMode
    overwriteMode: RepoCheckoutOverwriteMode
    enableUncompressedCache: number
    disableFsync: number
    processWhiteouts: number
    noCopyFallback: number
    reserved: number
    subpath: string | null
    devinoToCsumCache: RepoDevInoCache
    unusedUints: number[]
    unusedPtrs: any[]
}

/**
 * An extensible options structure controlling checkout.  Ensure that
 * you have entirely zeroed the structure, then set just the desired
 * options.  This is used by ostree_repo_checkout_tree_at() which
 * supercedes previous separate enumeration usage in
 * ostree_repo_checkout_tree().
 * @record 
 */
export class RepoCheckoutOptions {

    // Own properties of OSTree-1.0.OSTree.RepoCheckoutOptions

    static name: string
}

export interface RepoCommitModifier {

    // Owm methods of OSTree-1.0.OSTree.RepoCommitModifier

    ref(): RepoCommitModifier
    /**
     * See the documentation for
     * `ostree_repo_devino_cache_new()`.  This function can
     * then be used for later calls to
     * `ostree_repo_write_directory_to_mtree()` to optimize commits.
     * 
     * Note if your process has multiple writers, you should use separate
     * `OSTreeRepo` instances if you want to also use this API.
     * 
     * This function will add a reference to `cache` without copying - you
     * should avoid further mutation of the cache.
     * @param cache A hash table caching device,inode to checksums
     */
    setDevinoCache(cache: RepoDevInoCache): void
    /**
     * If `policy` is non-%NULL, use it to look up labels to use for
     * "security.selinux" extended attributes.
     * 
     * Note that any policy specified this way operates in addition to any
     * extended attributes provided via
     * ostree_repo_commit_modifier_set_xattr_callback().  However if both
     * specify a value for "security.selinux", then the one from the
     * policy wins.
     * @param sepolicy Policy to use for labeling
     */
    setSepolicy(sepolicy: SePolicy | null): void
    /**
     * If set, this function should return extended attributes to use for
     * the given path.  This is useful for things like ACLs and SELinux,
     * where a build system can label the files as it's committing to the
     * repository.
     * @param callback Function to be invoked, should return extended attributes for path
     */
    setXattrCallback(callback: RepoCommitModifierXattrCallback): void
    unref(): void
}

/**
 * A structure allowing control over commits.
 * @record 
 */
export class RepoCommitModifier {

    // Own properties of OSTree-1.0.OSTree.RepoCommitModifier

    static name: string

    // Constructors of OSTree-1.0.OSTree.RepoCommitModifier

    constructor(flags: RepoCommitModifierFlags, commitFilter: RepoCommitFilter | null) 
    static new(flags: RepoCommitModifierFlags, commitFilter: RepoCommitFilter | null): RepoCommitModifier
}

export interface RepoCommitTraverseIter {

    // Own fields of OSTree-1.0.OSTree.RepoCommitTraverseIter

    initialized: boolean
    dummy: any[]
    dummyChecksumData: number[]

    // Owm methods of OSTree-1.0.OSTree.RepoCommitTraverseIter

    clear(): void
    /**
     * Return information on the current directory.  This function may
     * only be called if %OSTREE_REPO_COMMIT_ITER_RESULT_DIR was returned
     * from ostree_repo_commit_traverse_iter_next().
     */
    getDir(): [ /* outName */ string | null, /* outContentChecksum */ string | null, /* outMetaChecksum */ string | null ]
    /**
     * Return information on the current file.  This function may only be
     * called if %OSTREE_REPO_COMMIT_ITER_RESULT_FILE was returned from
     * ostree_repo_commit_traverse_iter_next().
     */
    getFile(): [ /* outName */ string | null, /* outChecksum */ string | null ]
    /**
     * Initialize (in place) an iterator over the root of a commit object.
     * @param repo A repo
     * @param commit Variant of type %OSTREE_OBJECT_TYPE_COMMIT
     * @param flags Flags
     */
    initCommit(repo: Repo, commit: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
    /**
     * Initialize (in place) an iterator over a directory tree.
     * @param repo A repo
     * @param dirtree Variant of type %OSTREE_OBJECT_TYPE_DIR_TREE
     * @param flags Flags
     */
    initDirtree(repo: Repo, dirtree: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
    /**
     * Step the interator to the next item.  Files will be returned first,
     * then subdirectories.  Call this in a loop; upon encountering
     * %OSTREE_REPO_COMMIT_ITER_RESULT_END, there will be no more files or
     * directories.  If %OSTREE_REPO_COMMIT_ITER_RESULT_DIR is returned,
     * then call ostree_repo_commit_traverse_iter_get_dir() to retrieve
     * data for that directory.  Similarly, if
     * %OSTREE_REPO_COMMIT_ITER_RESULT_FILE is returned, call
     * ostree_repo_commit_traverse_iter_get_file().
     * 
     * If %OSTREE_REPO_COMMIT_ITER_RESULT_ERROR is returned, it is a
     * program error to call any further API on `iter` except for
     * ostree_repo_commit_traverse_iter_clear().
     * @param cancellable Cancellable
     */
    next(cancellable: Gio.Cancellable | null): RepoCommitIterResult
}

export class RepoCommitTraverseIter {

    // Own properties of OSTree-1.0.OSTree.RepoCommitTraverseIter

    static name: string

    // Constructors of OSTree-1.0.OSTree.RepoCommitTraverseIter

    static cleanup(p: any | null): void
}

export interface RepoDevInoCache {

    // Owm methods of OSTree-1.0.OSTree.RepoDevInoCache

    ref(): RepoDevInoCache
    unref(): void
}

export class RepoDevInoCache {

    // Own properties of OSTree-1.0.OSTree.RepoDevInoCache

    static name: string

    // Constructors of OSTree-1.0.OSTree.RepoDevInoCache

    /**
     * OSTree has support for pairing ostree_repo_checkout_tree_at() using
     * hardlinks in combination with a later
     * ostree_repo_write_directory_to_mtree() using a (normally modified)
     * directory.  In order for OSTree to optimally detect just the new
     * files, use this function and fill in the `devino_to_csum_cache`
     * member of `OstreeRepoCheckoutAtOptions`, then call
     * ostree_repo_commit_set_devino_cache().
     * @constructor 
     * @returns Newly allocated cache
     */
    constructor() 
    /**
     * OSTree has support for pairing ostree_repo_checkout_tree_at() using
     * hardlinks in combination with a later
     * ostree_repo_write_directory_to_mtree() using a (normally modified)
     * directory.  In order for OSTree to optimally detect just the new
     * files, use this function and fill in the `devino_to_csum_cache`
     * member of `OstreeRepoCheckoutAtOptions`, then call
     * ostree_repo_commit_set_devino_cache().
     * @constructor 
     * @returns Newly allocated cache
     */
    static new(): RepoDevInoCache
}

export interface RepoExportArchiveOptions {

    // Own fields of OSTree-1.0.OSTree.RepoExportArchiveOptions

    disableXattrs: number
    reserved: number
    timestampSecs: number
    unusedUint: number[]
    pathPrefix: string | null
    unusedPtrs: any[]
}

/**
 * An extensible options structure controlling archive creation.  Ensure that
 * you have entirely zeroed the structure, then set just the desired
 * options.  This is used by ostree_repo_export_tree_to_archive().
 * @record 
 */
export class RepoExportArchiveOptions {

    // Own properties of OSTree-1.0.OSTree.RepoExportArchiveOptions

    static name: string
}

export interface RepoFileClass {

    // Own fields of OSTree-1.0.OSTree.RepoFileClass

    parentClass: GObject.ObjectClass
}

export abstract class RepoFileClass {

    // Own properties of OSTree-1.0.OSTree.RepoFileClass

    static name: string
}

export interface RepoFileEnumerator {
}

export class RepoFileEnumerator {

    // Own properties of OSTree-1.0.OSTree.RepoFileEnumerator

    static name: string
}

export interface RepoFileEnumeratorClass {

    // Own fields of OSTree-1.0.OSTree.RepoFileEnumeratorClass

    parentClass: Gio.FileEnumeratorClass
}

export class RepoFileEnumeratorClass {

    // Own properties of OSTree-1.0.OSTree.RepoFileEnumeratorClass

    static name: string
}

export interface RepoImportArchiveOptions {

    // Own fields of OSTree-1.0.OSTree.RepoImportArchiveOptions

    ignoreUnsupportedContent: number
    autocreateParents: number
    useOstreeConvention: number
    callbackWithEntryPathname: number
    reserved: number
    unusedUint: number[]
    unusedPtrs: any[]
}

/**
 * An extensible options structure controlling archive import.  Ensure that
 * you have entirely zeroed the structure, then set just the desired
 * options.  This is used by ostree_repo_import_archive_to_mtree().
 * @record 
 */
export class RepoImportArchiveOptions {

    // Own properties of OSTree-1.0.OSTree.RepoImportArchiveOptions

    static name: string
}

export interface RepoTransactionStats {

    // Own fields of OSTree-1.0.OSTree.RepoTransactionStats

    /**
     * The total number of metadata objects
     * in the repository after this transaction has completed.
     * @field 
     */
    metadataObjectsTotal: number
    /**
     * The number of metadata objects that
     * were written to the repository in this transaction.
     * @field 
     */
    metadataObjectsWritten: number
    /**
     * The total number of content objects
     * in the repository after this transaction has completed.
     * @field 
     */
    contentObjectsTotal: number
    /**
     * The number of content objects that
     * were written to the repository in this transaction.
     * @field 
     */
    contentObjectsWritten: number
    /**
     * The amount of data added to the repository,
     * in bytes, counting only content objects.
     * @field 
     */
    contentBytesWritten: number
    /**
     * reserved
     * @field 
     */
    padding1: number
    /**
     * reserved
     * @field 
     */
    padding2: number
    /**
     * reserved
     * @field 
     */
    padding3: number
    /**
     * reserved
     * @field 
     */
    padding4: number
}

/**
 * A list of statistics for each transaction that may be
 * interesting for reporting purposes.
 * @record 
 */
export class RepoTransactionStats {

    // Own properties of OSTree-1.0.OSTree.RepoTransactionStats

    static name: string
}

export interface RollsumMatches {

    // Own fields of OSTree-1.0.OSTree.RollsumMatches

    fromRollsums: GLib.HashTable
    toRollsums: GLib.HashTable
    crcmatches: number
    bufmatches: number
    total: number
    matchSize: number
    matches: any[]
}

export class RollsumMatches {

    // Own properties of OSTree-1.0.OSTree.RollsumMatches

    static name: string
}

export interface TlsCertInteraction {
}

export class TlsCertInteraction {

    // Own properties of OSTree-1.0.OSTree.TlsCertInteraction

    static name: string
}

export interface TlsCertInteractionClass {
}

export class TlsCertInteractionClass {

    // Own properties of OSTree-1.0.OSTree.TlsCertInteractionClass

    static name: string
}
