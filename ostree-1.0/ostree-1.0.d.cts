
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * OSTree-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
export function checksum_b64_from_bytes(csum: Uint8Array): string | null
export function checksum_b64_to_bytes(checksum: string | null): Uint8Array
export function checksum_bytes_peek(bytes: GLib.Variant): Uint8Array
/**
 * Like ostree_checksum_bytes_peek(), but also throws `error`.
 * @param bytes #GVariant of type ay
 * @returns Binary checksum data
 */
export function checksum_bytes_peek_validate(bytes: GLib.Variant): Uint8Array
/**
 * Compute the OSTree checksum for a given file.
 * @param f File path
 * @param objtype Object type
 * @param cancellable Cancellable
 */
export function checksum_file(f: Gio.File, objtype: ObjectType, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_csum */ Uint8Array ]
/**
 * Asynchronously compute the OSTree checksum for a given file;
 * complete with ostree_checksum_file_async_finish().
 * @param f File path
 * @param objtype Object type
 * @param io_priority Priority for operation, see %G_IO_PRIORITY_DEFAULT
 * @param cancellable Cancellable
 * @param callback Invoked when operation is complete
 */
export function checksum_file_async<Z = unknown>(f: Gio.File, objtype: ObjectType, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Z> | null): void
/**
 * Finish computing the OSTree checksum for a given file; see
 * ostree_checksum_file_async().
 * @param f File path
 * @param result Async result
 */
export function checksum_file_async_finish(f: Gio.File, result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_csum */ Uint8Array ]
/**
 * Compute the OSTree checksum for a given input.
 * @param file_info File information
 * @param xattrs Optional extended attributes
 * @param in_ File content, should be %NULL for symbolic links
 * @param objtype Object type
 * @param cancellable Cancellable
 */
export function checksum_file_from_input(file_info: Gio.FileInfo, xattrs: GLib.Variant | null, in_: Gio.InputStream | null, objtype: ObjectType, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_csum */ Uint8Array ]
export function checksum_from_bytes(csum: Uint8Array): string | null
export function checksum_from_bytes_v(csum_v: GLib.Variant): string | null
/**
 * Convert `checksum` from a string to binary in-place, without
 * allocating memory.  Use this function in hot code paths.
 * @param checksum a SHA256 string
 * @param buf Output buffer with at least 32 bytes of space
 */
export function checksum_inplace_to_bytes(checksum: string | null, buf: number): void
export function checksum_to_bytes(checksum: string | null): Uint8Array
export function checksum_to_bytes_v(checksum: string | null): GLib.Variant
export function cmd__private__(): CmdPrivateVTable
/**
 * Compare two binary checksums, using memcmp().
 * @param a A binary checksum
 * @param b A binary checksum
 */
export function cmp_checksum_bytes(a: number, b: number): number
export function commit_get_parent(commit_variant: GLib.Variant): string | null
export function commit_get_timestamp(commit_variant: GLib.Variant): number
/**
 * A thin wrapper for ostree_content_stream_parse(); this function
 * converts an object content stream back into components.
 * @param compressed Whether or not the stream is zlib-compressed
 * @param content_path Path to file containing content
 * @param trusted If %TRUE, assume the content has been validated
 * @param cancellable Cancellable
 */
export function content_file_parse(compressed: boolean, content_path: Gio.File, trusted: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_file_info */ Gio.FileInfo, /* out_xattrs */ GLib.Variant ]
/**
 * A thin wrapper for ostree_content_stream_parse(); this function
 * converts an object content stream back into components.
 * @param compressed Whether or not the stream is zlib-compressed
 * @param parent_dfd Directory file descriptor
 * @param path Subpath
 * @param trusted If %TRUE, assume the content has been validated
 * @param cancellable Cancellable
 */
export function content_file_parse_at(compressed: boolean, parent_dfd: number, path: string | null, trusted: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_file_info */ Gio.FileInfo, /* out_xattrs */ GLib.Variant ]
/**
 * The reverse of ostree_raw_file_to_content_stream(); this function
 * converts an object content stream back into components.
 * @param compressed Whether or not the stream is zlib-compressed
 * @param input Object content stream
 * @param input_length Length of stream
 * @param trusted If %TRUE, assume the content has been validated
 * @param cancellable Cancellable
 */
export function content_stream_parse(compressed: boolean, input: Gio.InputStream, input_length: number, trusted: boolean, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_file_info */ Gio.FileInfo, /* out_xattrs */ GLib.Variant ]
export function create_directory_metadata(dir_info: Gio.FileInfo, xattrs: GLib.Variant | null): GLib.Variant
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
export function diff_dirs(flags: DiffFlags, a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[], cancellable: Gio.Cancellable | null): boolean
/**
 * Print the contents of a diff to stdout.
 * @param a First directory path
 * @param b First directory path
 * @param modified Modified files
 * @param removed Removed files
 * @param added Added files
 */
export function diff_print(a: Gio.File, b: Gio.File, modified: DiffItem[], removed: Gio.File[], added: Gio.File[]): void
/**
 * Use this function with #GHashTable and ostree_object_name_serialize().
 * @param a A #GVariant containing a serialized object
 */
export function hash_object_name(a: any | null): number
export function metadata_variant_type(objtype: ObjectType): GLib.VariantType
/**
 * Reverse ostree_object_to_string().
 * @param str An ASCII checksum
 */
export function object_from_string(str: string | null): [ /* out_checksum */ string | null, /* out_objtype */ ObjectType ]
/**
 * Reverse ostree_object_name_serialize().  Note that `out_checksum` is
 * only valid for the lifetime of `variant,` and must not be freed.
 * @param variant A #GVariant of type (su)
 */
export function object_name_deserialize(variant: GLib.Variant): [ /* out_checksum */ string | null, /* out_objtype */ ObjectType ]
export function object_name_serialize(checksum: string | null, objtype: ObjectType): GLib.Variant
export function object_to_string(checksum: string | null, objtype: ObjectType): string | null
/**
 * The reverse of ostree_object_type_to_string().
 * @param str A stringified version of #OstreeObjectType
 */
export function object_type_from_string(str: string | null): ObjectType
/**
 * Serialize `objtype` to a string; this is used for file extensions.
 * @param objtype an #OstreeObjectType
 */
export function object_type_to_string(objtype: ObjectType): string | null
/**
 * Split a refspec like "gnome-ostree:gnome-ostree/buildmaster" into
 * two parts; `out_remote` will be set to "gnome-ostree", and `out_ref`
 * will be "gnome-ostree/buildmaster".
 * 
 * If `refspec` refers to a local ref, `out_remote` will be %NULL.
 * @param refspec A "refspec" string
 */
export function parse_refspec(refspec: string | null): [ /* returnType */ boolean, /* out_remote */ string | null, /* out_ref */ string | null ]
/**
 * Convert from a "bare" file representation into an
 * OSTREE_OBJECT_TYPE_FILE stream suitable for ostree pull.
 * @param input File raw content stream
 * @param file_info A file info
 * @param xattrs Optional extended attributes
 * @param cancellable Cancellable
 */
export function raw_file_to_archive_z2_stream(input: Gio.InputStream, file_info: Gio.FileInfo, xattrs: GLib.Variant | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream ]
/**
 * Convert from a "bare" file representation into an
 * OSTREE_OBJECT_TYPE_FILE stream.  This is a fundamental operation
 * for writing data to an #OstreeRepo.
 * @param input File raw content stream
 * @param file_info A file info
 * @param xattrs Optional extended attributes
 * @param cancellable Cancellable
 */
export function raw_file_to_content_stream(input: Gio.InputStream, file_info: Gio.FileInfo, xattrs: GLib.Variant | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_length */ number ]
export function repo_commit_traverse_iter_cleanup(p: any | null): void
/**
 * Use this function to see if input strings are checksums.
 * @param sha256 SHA256 hex string
 * @returns %TRUE if @sha256 is a valid checksum string, %FALSE otherwise
 */
export function validate_checksum_string(sha256: string | null): boolean
export function validate_rev(rev: string | null): boolean
export function validate_structureof_checksum_string(checksum: string | null): boolean
/**
 * Use this to validate the basic structure of `commit,` independent of
 * any other objects it references.
 * @param commit A commit object, %OSTREE_OBJECT_TYPE_COMMIT
 * @returns %TRUE if @commit is structurally valid
 */
export function validate_structureof_commit(commit: GLib.Variant): boolean
export function validate_structureof_csum_v(checksum: GLib.Variant): boolean
/**
 * Use this to validate the basic structure of `dirmeta`.
 * @param dirmeta A dirmeta object, %OSTREE_OBJECT_TYPE_DIR_META
 * @returns %TRUE if @dirmeta is structurally valid
 */
export function validate_structureof_dirmeta(dirmeta: GLib.Variant): boolean
/**
 * Use this to validate the basic structure of `dirtree,` independent of
 * any other objects it references.
 * @param dirtree A dirtree object, %OSTREE_OBJECT_TYPE_DIR_TREE
 * @returns %TRUE if @dirtree is structurally valid
 */
export function validate_structureof_dirtree(dirtree: GLib.Variant): boolean
export function validate_structureof_file_mode(mode: number): boolean
export function validate_structureof_objtype(objtype: number): boolean
export interface RepoCommitFilter {
    (repo: Repo, path: string | null, file_info: Gio.FileInfo): RepoCommitFilterResult
}
export interface RepoCommitModifierXattrCallback {
    (repo: Repo, path: string | null, file_info: Gio.FileInfo): GLib.Variant
}
export module AsyncProgress {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: AsyncProgress): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AsyncProgress {

    // Owm methods of OSTree-1.0.OSTree.AsyncProgress

    /**
     * Process any pending signals, ensuring the main context is cleared
     * of sources used by this object.  Also ensures that no further
     * events will be queued.
     */
    finish(): void
    get_status(): string | null
    get_uint(key: string | null): number
    get_uint64(key: string | null): number
    set_status(status: string | null): void
    set_uint(key: string | null, value: number): void
    set_uint64(key: string | null, value: number): void

    // Own virtual methods of OSTree-1.0.OSTree.AsyncProgress

    vfunc_changed(): void

    // Own signals of OSTree-1.0.OSTree.AsyncProgress

    connect(sigName: "changed", callback: AsyncProgress.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: AsyncProgress.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of OSTree-1.0.OSTree.AsyncProgress

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AsyncProgress extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.AsyncProgress

    static name: string
    static $gtype: GObject.GType<AsyncProgress>

    // Constructors of OSTree-1.0.OSTree.AsyncProgress

    constructor(config?: AsyncProgress.ConstructorProperties) 
    constructor() 
    static new(): AsyncProgress
    static new_and_connect(changed: any | null, user_data: any | null): AsyncProgress
    _init(config?: AsyncProgress.ConstructorProperties): void
}

export module BootconfigParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BootconfigParser {

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
    parse_at(dfd: number, path: string | null, cancellable: Gio.Cancellable | null): boolean
    set(key: string | null, value: string | null): void
    write(output: Gio.File, cancellable: Gio.Cancellable | null): boolean
    write_at(dfd: number, path: string | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of OSTree-1.0.OSTree.BootconfigParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BootconfigParser extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.BootconfigParser

    static name: string
    static $gtype: GObject.GType<BootconfigParser>

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

    // Own fields of OSTree-1.0.OSTree.ChecksumInputStream

    parent_instance: Gio.FilterInputStream & Gio.InputStream & GObject.Object & GObject.Object

    // Class property signals of OSTree-1.0.OSTree.ChecksumInputStream

    connect(sigName: "notify::checksum", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checksum", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::checksum", ...args: any[]): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: ChecksumInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::close-base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ChecksumInputStream extends Gio.FilterInputStream {

    // Own properties of OSTree-1.0.OSTree.ChecksumInputStream

    static name: string
    static $gtype: GObject.GType<ChecksumInputStream>

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

    // Owm methods of OSTree-1.0.OSTree.Deployment

    clone(): Deployment
    equal(bp: Deployment): boolean
    get_bootconfig(): BootconfigParser
    get_bootcsum(): string | null
    get_bootserial(): number
    get_csum(): string | null
    get_deployserial(): number
    get_index(): number
    get_origin(): GLib.KeyFile
    /**
     * Note this function only returns a *relative* path - if you want to
     * access, it, you must either use fd-relative api such as openat(),
     * or concatenate it with the full ostree_sysroot_get_path().
     * @returns Path to deployment root directory, relative to sysroot
     */
    get_origin_relpath(): string | null
    get_osname(): string | null
    get_unlocked(): DeploymentUnlockedState
    set_bootconfig(bootconfig: BootconfigParser): void
    set_bootserial(index: number): void
    set_index(index: number): void
    set_origin(origin: GLib.KeyFile): void

    // Class property signals of OSTree-1.0.OSTree.Deployment

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Deployment extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.Deployment

    static name: string
    static $gtype: GObject.GType<Deployment>

    // Constructors of OSTree-1.0.OSTree.Deployment

    constructor(config?: Deployment.ConstructorProperties) 
    constructor(index: number, osname: string | null, csum: string | null, deployserial: number, bootcsum: string | null, bootserial: number) 
    static new(index: number, osname: string | null, csum: string | null, deployserial: number, bootcsum: string | null, bootserial: number): Deployment
    _init(config?: Deployment.ConstructorProperties): void
    static hash(v: any | null): number
    static unlocked_state_to_string(state: DeploymentUnlockedState): string | null
}

export module GpgVerifyResult {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface GpgVerifyResult extends Gio.Initable {

    // Owm methods of OSTree-1.0.OSTree.GpgVerifyResult

    /**
     * Counts all the signatures in `result`.
     * @returns signature count
     */
    count_all(): number
    /**
     * Counts only the valid signatures in `result`.
     * @returns valid signature count
     */
    count_valid(): number
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
     * @param signature_index which signature to describe
     * @param output_buffer a #GString to hold the description
     * @param line_prefix optional line prefix string
     * @param flags flags to adjust the description format
     */
    describe(signature_index: number, output_buffer: GLib.String, line_prefix: string | null, flags: GpgSignatureFormatFlags): void
    /**
     * Builds a #GVariant tuple of requested attributes for the GPG signature at
     * `signature_index` in `result`.  See the #OstreeGpgSignatureAttr description
     * for the #GVariantType of each available attribute.
     * 
     * It is a programmer error to request an invalid #OstreeGpgSignatureAttr or
     * an invalid `signature_index`.  Use ostree_gpg_verify_result_count_all() to
     * find the number of signatures in `result`.
     * @param signature_index which signature to get attributes from
     * @param attrs Array of requested attributes
     * @returns a new, floating, #GVariant tuple
     */
    get(signature_index: number, attrs: GpgSignatureAttr[]): GLib.Variant
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
     * @param signature_index which signature to get attributes from
     * @returns a new, floating, #GVariant tuple
     */
    get_all(signature_index: number): GLib.Variant
    /**
     * Searches `result` for a signature signed by `key_id`.  If a match is found,
     * the function returns %TRUE and sets `out_signature_index` so that further
     * signature details can be obtained through ostree_gpg_verify_result_get().
     * If no match is found, the function returns %FALSE and leaves
     * `out_signature_index` unchanged.
     * @param key_id a GPG key ID or fingerprint
     * @returns %TRUE on success, %FALSE on failure
     */
    lookup(key_id: string | null): [ /* returnType */ boolean, /* out_signature_index */ number ]
    /**
     * Checks if the result contains at least one signature from the
     * trusted keyring.  You can call this function immediately after
     * ostree_repo_verify_summary() or ostree_repo_verify_commit_ext() -
     * it will handle the %NULL `result` and filled `error` too.
     * @returns %TRUE if @result was not %NULL and had at least one signature from trusted keyring, otherwise %FALSE
     */
    require_valid_signature(): boolean

    // Class property signals of OSTree-1.0.OSTree.GpgVerifyResult

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class GpgVerifyResult extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.GpgVerifyResult

    static name: string
    static $gtype: GObject.GType<GpgVerifyResult>

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
     * @param output_buffer a #GString to hold the description
     * @param line_prefix optional line prefix string
     * @param flags flags to adjust the description format
     */
    static describe_variant(variant: GLib.Variant, output_buffer: GLib.String, line_prefix: string | null, flags: GpgSignatureFormatFlags): void
}

export module MutableTree {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MutableTree {

    // Owm methods of OSTree-1.0.OSTree.MutableTree

    ensure_dir(name: string | null, out_subdir: MutableTree): boolean
    /**
     * Create all parent trees necessary for the given `split_path` to
     * exist.
     * @param split_path File path components
     * @param metadata_checksum SHA256 checksum for metadata
     */
    ensure_parent_dirs(split_path: string[], metadata_checksum: string | null): [ /* returnType */ boolean, /* out_parent */ MutableTree ]
    get_contents_checksum(): string | null
    get_files(): GLib.HashTable
    get_metadata_checksum(): string | null
    get_subdirs(): GLib.HashTable
    lookup(name: string | null, out_file_checksum: string | null, out_subdir: MutableTree): boolean
    replace_file(name: string | null, checksum: string | null): boolean
    set_contents_checksum(checksum: string | null): void
    set_metadata_checksum(checksum: string | null): void
    /**
     * Traverse `start` number of elements starting from `split_path;` the
     * child will be returned in `out_subdir`.
     * @param split_path Split pathname
     * @param start Descend from this number of elements in `split_path`
     */
    walk(split_path: string[], start: number): [ /* returnType */ boolean, /* out_subdir */ MutableTree ]

    // Class property signals of OSTree-1.0.OSTree.MutableTree

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Private instance structure.
 * @class 
 */
export class MutableTree extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.MutableTree

    static name: string
    static $gtype: GObject.GType<MutableTree>

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
        ($obj: Repo, checksum: string | null, result: GpgVerifyResult): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of OSTree-1.0.OSTree.Repo

        path?: Gio.File | null
        remotes_config_dir?: string | null
        sysroot_path?: Gio.File | null
    }

}

export interface Repo {

    // Own properties of OSTree-1.0.OSTree.Repo

    readonly path: Gio.File
    readonly remotes_config_dir: string | null
    readonly sysroot_path: Gio.File

    // Owm methods of OSTree-1.0.OSTree.Repo

    abort_transaction(cancellable: Gio.Cancellable | null): boolean
    /**
     * Add a GPG signature to a static delta.
     * @param key_id NULL-terminated array of GPG keys.
     * @param homedir GPG home directory, or %NULL
     * @param cancellable A #GCancellable
     */
    add_gpg_signature_summary(key_id: string[], homedir: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Append a GPG signature to a commit.
     * @param commit_checksum SHA256 of given commit to sign
     * @param signature_bytes Signature data
     * @param cancellable A #GCancellable
     */
    append_gpg_signature(commit_checksum: string | null, signature_bytes: GLib.Bytes, cancellable: Gio.Cancellable | null): boolean
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
     * @param destination_dfd Directory FD for destination
     * @param destination_path Directory for destination
     * @param commit Checksum for commit
     * @param cancellable Cancellable
     */
    checkout_at(options: RepoCheckoutAtOptions | null, destination_dfd: number, destination_path: string | null, commit: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Call this after finishing a succession of checkout operations; it
     * will delete any currently-unused uncompressed objects from the
     * cache.
     * @param cancellable Cancellable
     */
    checkout_gc(cancellable: Gio.Cancellable | null): boolean
    /**
     * Check out `source` into `destination,` which must live on the
     * physical filesystem.  `source` may be any subdirectory of a given
     * commit.  The `mode` and `overwrite_mode` allow control over how the
     * files are checked out.
     * @param mode Options controlling all files
     * @param overwrite_mode Whether or not to overwrite files
     * @param destination Place tree here
     * @param source Source tree
     * @param source_info Source info
     * @param cancellable Cancellable
     */
    checkout_tree(mode: RepoCheckoutMode, overwrite_mode: RepoCheckoutOverwriteMode, destination: Gio.File, source: RepoFile, source_info: Gio.FileInfo, cancellable: Gio.Cancellable | null): boolean
    /**
     * Complete the transaction. Any refs set with
     * ostree_repo_transaction_set_ref() or
     * ostree_repo_transaction_set_refspec() will be written out.
     * @param cancellable Cancellable
     */
    commit_transaction(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_stats */ RepoTransactionStats ]
    copy_config(): GLib.KeyFile
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
    delete_object(objtype: ObjectType, sha256: string | null, cancellable: Gio.Cancellable | null): boolean
    get_config(): GLib.KeyFile
    /**
     * In some cases it's useful for applications to access the repository
     * directly; for example, writing content into `repo/tmp` ensures it's
     * on the same filesystem.  Another case is detecting the mtime on the
     * repository (to see whether a ref was written).
     * @returns File descriptor for repository root - owned by @self
     */
    get_dfd(): number
    /**
     * For more information see ostree_repo_set_disable_fsync().
     * @returns Whether or not fsync() is enabled for this repo.
     */
    get_disable_fsync(): boolean
    get_mode(): RepoMode
    /**
     * Before this function can be used, ostree_repo_init() must have been
     * called.
     * @returns Parent repository, or %NULL if none
     */
    get_parent(): Repo
    get_path(): Gio.File
    /**
     * OSTree remotes are represented by keyfile groups, formatted like:
     * `[remote "remotename"]`. This function returns a value named `option_name`
     * underneath that group, and returns it as a boolean.
     * If the option is not set, `out_value` will be set to `default_value`.
     * @param remote_name Name
     * @param option_name Option
     * @param default_value Value returned if `option_name` is not present
     * @returns %TRUE on success, otherwise %FALSE with @error set
     */
    get_remote_boolean_option(remote_name: string | null, option_name: string | null, default_value: boolean): [ /* returnType */ boolean, /* out_value */ boolean ]
    /**
     * OSTree remotes are represented by keyfile groups, formatted like:
     * `[remote "remotename"]`. This function returns a value named `option_name`
     * underneath that group, and returns it as an zero terminated array of strings.
     * If the option is not set, `out_value` will be set to %NULL.
     * @param remote_name Name
     * @param option_name Option
     * @returns %TRUE on success, otherwise %FALSE with @error set
     */
    get_remote_list_option(remote_name: string | null, option_name: string | null): [ /* returnType */ boolean, /* out_value */ string[] ]
    /**
     * OSTree remotes are represented by keyfile groups, formatted like:
     * `[remote "remotename"]`. This function returns a value named `option_name`
     * underneath that group, or `default_value` if the remote exists but not the
     * option name.
     * @param remote_name Name
     * @param option_name Option
     * @param default_value Value returned if `option_name` is not present
     * @returns %TRUE on success, otherwise %FALSE with @error set
     */
    get_remote_option(remote_name: string | null, option_name: string | null, default_value: string | null): [ /* returnType */ boolean, /* out_value */ string | null ]
    /**
     * Verify `signatures` for `data` using GPG keys in the keyring for
     * `remote_name,` and return an #OstreeGpgVerifyResult.
     * 
     * The `remote_name` parameter can be %NULL. In that case it will do
     * the verifications using GPG keys in the keyrings of all remotes.
     * @param remote_name Name of remote
     * @param data Data as a #GBytes
     * @param signatures Signatures as a #GBytes
     * @param keyringdir Path to directory GPG keyrings; overrides built-in default if given
     * @param extra_keyring Path to additional keyring file (not a directory)
     * @param cancellable Cancellable
     * @returns an #OstreeGpgVerifyResult, or %NULL on error
     */
    gpg_verify_data(remote_name: string | null, data: GLib.Bytes, signatures: GLib.Bytes, keyringdir: Gio.File | null, extra_keyring: Gio.File | null, cancellable: Gio.Cancellable | null): GpgVerifyResult
    /**
     * Set `out_have_object` to %TRUE if `self` contains the given object;
     * %FALSE otherwise.
     * @param objtype Object type
     * @param checksum ASCII SHA256 checksum
     * @param cancellable Cancellable
     * @returns %FALSE if an unexpected error occurred, %TRUE otherwise
     */
    has_object(objtype: ObjectType, checksum: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_have_object */ boolean ]
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
    import_object_from(source: Repo, objtype: ObjectType, checksum: string | null, cancellable: Gio.Cancellable | null): boolean
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
    import_object_from_with_trust(source: Repo, objtype: ObjectType, checksum: string | null, trusted: boolean, cancellable: Gio.Cancellable | null): boolean
    is_system(): boolean
    /**
     * Returns whether the repository is writable by the current user.
     * If the repository is not writable, the `error` indicates why.
     * @returns %TRUE if this repository is writable
     */
    is_writable(): boolean
    /**
     * This function synchronously enumerates all commit objects starting
     * with `start,` returning data in `out_commits`.
     * @param start List commits starting with this checksum
     * @param out_commits Array of GVariants
     * @param cancellable Cancellable
     * @returns %TRUE on success, %FALSE on error, and @error will be set
     */
    list_commit_objects_starting_with(start: string | null, out_commits: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean
    /**
     * This function synchronously enumerates all objects in the
     * repository, returning data in `out_objects`.  `out_objects`
     * maps from keys returned by ostree_object_name_serialize()
     * to #GVariant values of type %OSTREE_REPO_LIST_OBJECTS_VARIANT_TYPE.
     * @param flags Flags controlling enumeration
     * @param cancellable Cancellable
     * @returns %TRUE on success, %FALSE on error, and @error will be set
     */
    list_objects(flags: RepoListObjectsFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_objects */ GLib.HashTable ]
    /**
     * If `refspec_prefix` is %NULL, list all local and remote refspecs,
     * with their current values in `out_all_refs`.  Otherwise, only list
     * refspecs which have `refspec_prefix` as a prefix.
     * @param refspec_prefix Only list refs which match this prefix
     * @param cancellable Cancellable
     */
    list_refs(refspec_prefix: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_all_refs */ GLib.HashTable ]
    /**
     * If `refspec_prefix` is %NULL, list all local and remote refspecs,
     * with their current values in `out_all_refs`.  Otherwise, only list
     * refspecs which have `refspec_prefix` as a prefix.  Differently from
     * ostree_repo_list_refs(), the prefix will not be removed from the ref
     * name.
     * @param refspec_prefix Only list refs which match this prefix
     * @param flags Options controlling listing behavior
     * @param cancellable Cancellable
     */
    list_refs_ext(refspec_prefix: string | null, flags: RepoListRefsExtFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_all_refs */ GLib.HashTable ]
    /**
     * This function synchronously enumerates all static deltas in the
     * repository, returning its result in `out_deltas`.
     * @param cancellable Cancellable
     */
    list_static_delta_names(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_deltas */ string[] ]
    /**
     * A version of ostree_repo_load_variant() specialized to commits,
     * capable of returning extended state information.  Currently
     * the only extended state is %OSTREE_REPO_COMMIT_STATE_PARTIAL, which
     * means that only a sub-path of the commit is available.
     * @param checksum Commit checksum
     */
    load_commit(checksum: string | null): [ /* returnType */ boolean, /* out_commit */ GLib.Variant, /* out_state */ RepoCommitState ]
    /**
     * Load content object, decomposing it into three parts: the actual
     * content (for regular files), the metadata, and extended attributes.
     * @param checksum ASCII SHA256 checksum
     * @param cancellable Cancellable
     */
    load_file(checksum: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_file_info */ Gio.FileInfo, /* out_xattrs */ GLib.Variant ]
    /**
     * Load object as a stream; useful when copying objects between
     * repositories.
     * @param objtype Object type
     * @param checksum ASCII SHA256 checksum
     * @param cancellable Cancellable
     */
    load_object_stream(objtype: ObjectType, checksum: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_input */ Gio.InputStream, /* out_size */ number ]
    /**
     * Load the metadata object `sha2`56 of type `objtype,` storing the
     * result in `out_variant`.
     * @param objtype Expected object type
     * @param sha256 Checksum string
     */
    load_variant(objtype: ObjectType, sha256: string | null): [ /* returnType */ boolean, /* out_variant */ GLib.Variant ]
    /**
     * Attempt to load the metadata object `sha2`56 of type `objtype` if it
     * exists, storing the result in `out_variant`.  If it doesn't exist,
     * %NULL is returned.
     * @param objtype Object type
     * @param sha256 ASCII checksum
     */
    load_variant_if_exists(objtype: ObjectType, sha256: string | null): [ /* returnType */ boolean, /* out_variant */ GLib.Variant ]
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
    prepare_transaction(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_transaction_resume */ boolean ]
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
    prune(flags: RepoPruneFlags, depth: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_objects_total */ number, /* out_objects_pruned */ number, /* out_pruned_object_size_total */ number ]
    /**
     * Prune static deltas, if COMMIT is specified then delete static delta files only
     * targeting that commit; otherwise any static delta of non existing commits are
     * deleted.
     * @param commit ASCII SHA256 checksum for commit, or %NULL for each non existing commit
     * @param cancellable Cancellable
     */
    prune_static_deltas(commit: string | null, cancellable: Gio.Cancellable | null): boolean
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
     * @param remote_name Name of remote
     * @param refs_to_fetch Optional list of refs; if %NULL, fetch all configured refs
     * @param flags Options controlling fetch behavior
     * @param progress Progress
     * @param cancellable Cancellable
     */
    pull(remote_name: string | null, refs_to_fetch: string[] | null, flags: RepoPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * This is similar to ostree_repo_pull(), but only fetches a single
     * subpath.
     * @param remote_name Name of remote
     * @param dir_to_pull Subdirectory path
     * @param refs_to_fetch Optional list of refs; if %NULL, fetch all configured refs
     * @param flags Options controlling fetch behavior
     * @param progress Progress
     * @param cancellable Cancellable
     */
    pull_one_dir(remote_name: string | null, dir_to_pull: string | null, refs_to_fetch: string[] | null, flags: RepoPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): boolean
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
     * @param remote_name_or_baseurl Name of remote or file:// url
     * @param options A GVariant a{sv} with an extensible set of flags.
     * @param progress Progress
     * @param cancellable Cancellable
     */
    pull_with_options(remote_name_or_baseurl: string | null, options: GLib.Variant, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Return the size in bytes of object with checksum `sha2`56, after any
     * compression has been applied.
     * @param objtype Object type
     * @param sha256 Checksum
     * @param cancellable Cancellable
     */
    query_object_storage_size(objtype: ObjectType, sha256: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_size */ number ]
    /**
     * Load the content for `rev` into `out_root`.
     * @param ref Ref or ASCII checksum
     * @param cancellable Cancellable
     */
    read_commit(ref: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_root */ Gio.File, /* out_commit */ string | null ]
    /**
     * OSTree commits can have arbitrary metadata associated; this
     * function retrieves them.  If none exists, `out_metadata` will be set
     * to %NULL.
     * @param checksum ASCII SHA256 commit checksum
     * @param cancellable Cancellable
     */
    read_commit_detached_metadata(checksum: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_metadata */ GLib.Variant ]
    /**
     * An OSTree repository can contain a high level "summary" file that
     * describes the available branches and other metadata.
     * 
     * It is regenerated automatically after a commit if
     * `core/commit-update-summary` is set.
     * @param additional_metadata A GVariant of type a{sv}, or %NULL
     * @param cancellable Cancellable
     */
    regenerate_summary(additional_metadata: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
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
    remote_add(name: string | null, url: string | null, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
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
    remote_change(sysroot: Gio.File | null, changeop: RepoRemoteChange, name: string | null, url: string | null, options: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Delete the remote named `name`.  It is an error if the provided
     * remote does not exist.
     * @param name Name of remote
     * @param cancellable Cancellable
     */
    remote_delete(name: string | null, cancellable: Gio.Cancellable | null): boolean
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
     * @param out_summary return location for raw summary data, or %NULL
     * @param out_signatures return location for raw summary signature                                data, or %NULL
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE on failure
     */
    remote_fetch_summary(name: string | null, out_summary: GLib.Bytes | null, out_signatures: GLib.Bytes | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Like ostree_repo_remote_fetch_summary(), but supports an extensible set of flags.
     * The following are currently defined:
     * 
     * - override-url (s): Fetch summary from this URL if remote specifies no metalink in options
     * @param name name of a remote
     * @param options A GVariant a{sv} with an extensible set of flags
     * @param out_summary return location for raw summary data, or %NULL
     * @param out_signatures return location for raw summary signature                              data, or %NULL
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE on failure
     */
    remote_fetch_summary_with_options(name: string | null, options: GLib.Variant | null, out_summary: GLib.Bytes | null, out_signatures: GLib.Bytes | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Return whether GPG verification is enabled for the remote named `name`
     * through `out_gpg_verify`.  It is an error if the provided remote does
     * not exist.
     * @param name Name of remote
     * @returns %TRUE on success, %FALSE on failure
     */
    remote_get_gpg_verify(name: string | null): [ /* returnType */ boolean, /* out_gpg_verify */ boolean ]
    /**
     * Return whether GPG verification of the summary is enabled for the remote
     * named `name` through `out_gpg_verify_summary`.  It is an error if the provided
     * remote does not exist.
     * @param name Name of remote
     * @returns %TRUE on success, %FALSE on failure
     */
    remote_get_gpg_verify_summary(name: string | null): [ /* returnType */ boolean, /* out_gpg_verify_summary */ boolean ]
    /**
     * Return the URL of the remote named `name` through `out_url`.  It is an
     * error if the provided remote does not exist.
     * @param name Name of remote
     * @returns %TRUE on success, %FALSE on failure
     */
    remote_get_url(name: string | null): [ /* returnType */ boolean, /* out_url */ string | null ]
    /**
     * Imports one or more GPG keys from the open `source_stream,` or from the
     * user's personal keyring if `source_stream` is %NULL.  The `key_ids` array
     * can optionally restrict which keys are imported.  If `key_ids` is %NULL,
     * then all keys are imported.
     * 
     * The imported keys will be used to conduct GPG verification when pulling
     * from the remote named `name`.
     * @param name name of a remote
     * @param source_stream a #GInputStream, or %NULL
     * @param key_ids a %NULL-terminated array of GPG key IDs, or %NULL
     * @param out_imported return location for the number of imported                              keys, or %NULL
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE on failure
     */
    remote_gpg_import(name: string | null, source_stream: Gio.InputStream | null, key_ids: string[] | null, out_imported: number | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * List available remote names in an #OstreeRepo.  Remote names are sorted
     * alphabetically.  If no remotes are available the function returns %NULL.
     * @returns a %NULL-terminated          array of remote names
     */
    remote_list(): string[]
    remote_list_refs(remote_name: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_all_refs */ GLib.HashTable ]
    /**
     * Look up the given refspec, returning the checksum it references in
     * the parameter `out_rev`. Will fall back on remote directory if cannot
     * find the given refspec in local.
     * @param refspec A refspec
     * @param allow_noent Do not throw an error if refspec does not exist
     */
    resolve_rev(refspec: string | null, allow_noent: boolean): [ /* returnType */ boolean, /* out_rev */ string | null ]
    /**
     * Look up the given refspec, returning the checksum it references in
     * the parameter `out_rev`. Differently from ostree_repo_resolve_rev(),
     * this will not fall back to searching through remote repos if a
     * local ref is specified but not found.
     * @param refspec A refspec
     * @param allow_noent Do not throw an error if refspec does not exist
     * @param flags Options controlling behavior
     */
    resolve_rev_ext(refspec: string | null, allow_noent: boolean, flags: RepoResolveRevExtFlags): [ /* returnType */ boolean, /* out_rev */ string | null ]
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
    scan_hardlinks(cancellable: Gio.Cancellable | null): boolean
    /**
     * Set a custom location for the cache directory used for e.g.
     * per-remote summary caches. Setting this manually is useful when
     * doing operations on a system repo as a user because you don't have
     * write permissions in the repo, where the cache is normally stored.
     * @param dfd directory fd
     * @param path subpath in `dfd`
     * @param cancellable a #GCancellable
     */
    set_cache_dir(dfd: number, path: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Disable requests to fsync() to stable storage during commits.  This
     * option should only be used by build system tools which are creating
     * disposable virtual machines, or have higher level mechanisms for
     * ensuring data consistency.
     * @param disable_fsync If %TRUE, do not fsync
     */
    set_disable_fsync(disable_fsync: boolean): void
    /**
     * This is like ostree_repo_transaction_set_ref(), except it may be
     * invoked outside of a transaction.  This is presently safe for the
     * case where we're creating or overwriting an existing ref.
     * @param remote A remote for the ref
     * @param ref The ref to write
     * @param checksum The checksum to point it to, or %NULL to unset
     * @param cancellable GCancellable
     */
    set_ref_immediate(remote: string | null, ref: string | null, checksum: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Add a GPG signature to a commit.
     * @param commit_checksum SHA256 of given commit to sign
     * @param key_id Use this GPG key id
     * @param homedir GPG home directory, or %NULL
     * @param cancellable A #GCancellable
     */
    sign_commit(commit_checksum: string | null, key_id: string | null, homedir: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * This function is deprecated, sign the summary file instead.
     * Add a GPG signature to a static delta.
     * @param from_commit 
     * @param to_commit 
     * @param key_id 
     * @param homedir 
     * @param cancellable 
     */
    sign_delta(from_commit: string | null, to_commit: string | null, key_id: string | null, homedir: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Given a directory representing an already-downloaded static delta
     * on disk, apply it, generating a new commit.  The directory must be
     * named with the form "FROM-TO", where both are checksums, and it
     * must contain a file named "superblock", along with at least one part.
     * @param dir_or_file Path to a directory containing static delta data, or directly to the superblock
     * @param skip_validation If %TRUE, assume data integrity
     * @param cancellable Cancellable
     */
    static_delta_execute_offline(dir_or_file: Gio.File, skip_validation: boolean, cancellable: Gio.Cancellable | null): boolean
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
    static_delta_generate(opt: StaticDeltaGenerateOpt, from: string | null, to: string | null, metadata: GLib.Variant | null, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
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
    transaction_set_ref(remote: string | null, ref: string | null, checksum: string | null): void
    /**
     * Like ostree_repo_transaction_set_ref(), but takes concatenated
     * `refspec` format as input instead of separate remote and name
     * arguments.
     * @param refspec The refspec to write
     * @param checksum The checksum to point it to
     */
    transaction_set_refspec(refspec: string | null, checksum: string | null): void
    /**
     * Create a new set `out_reachable` containing all objects reachable
     * from `commit_checksum,` traversing `maxdepth` parent commits.
     * @param commit_checksum ASCII SHA256 checksum
     * @param maxdepth Traverse this many parent commits, -1 for unlimited
     * @param cancellable Cancellable
     */
    traverse_commit(commit_checksum: string | null, maxdepth: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_reachable */ GLib.HashTable ]
    /**
     * Check for a valid GPG signature on commit named by the ASCII
     * checksum `commit_checksum`.
     * @param commit_checksum ASCII SHA256 checksum
     * @param keyringdir Path to directory GPG keyrings; overrides built-in default if given
     * @param extra_keyring Path to additional keyring file (not a directory)
     * @param cancellable Cancellable
     * @returns %TRUE if there was a GPG signature from a trusted keyring, otherwise %FALSE
     */
    verify_commit(commit_checksum: string | null, keyringdir: Gio.File | null, extra_keyring: Gio.File | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Read GPG signature(s) on the commit named by the ASCII checksum
     * `commit_checksum` and return detailed results.
     * @param commit_checksum ASCII SHA256 checksum
     * @param keyringdir Path to directory GPG keyrings; overrides built-in default if given
     * @param extra_keyring Path to additional keyring file (not a directory)
     * @param cancellable Cancellable
     * @returns an #OstreeGpgVerifyResult, or %NULL on error
     */
    verify_commit_ext(commit_checksum: string | null, keyringdir: Gio.File | null, extra_keyring: Gio.File | null, cancellable: Gio.Cancellable | null): GpgVerifyResult
    /**
     * Verify `signatures` for `summary` data using GPG keys in the keyring for
     * `remote_name,` and return an #OstreeGpgVerifyResult.
     * @param remote_name Name of remote
     * @param summary Summary data as a #GBytes
     * @param signatures Summary signatures as a #GBytes
     * @param cancellable Cancellable
     * @returns an #OstreeGpgVerifyResult, or %NULL on error
     */
    verify_summary(remote_name: string | null, summary: GLib.Bytes, signatures: GLib.Bytes, cancellable: Gio.Cancellable | null): GpgVerifyResult
    /**
     * Import an archive file `archive` into the repository, and write its
     * file structure to `mtree`.
     * @param archive A path to an archive file
     * @param mtree The #OstreeMutableTree to write to
     * @param modifier Optional commit modifier
     * @param autocreate_parents Autocreate parent directories
     * @param cancellable Cancellable
     */
    write_archive_to_mtree(archive: Gio.File, mtree: MutableTree, modifier: RepoCommitModifier | null, autocreate_parents: boolean, cancellable: Gio.Cancellable | null): boolean
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
    write_commit(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_commit */ string | null ]
    /**
     * Replace any existing metadata associated with commit referred to by
     * `checksum` with `metadata`.  If `metadata` is %NULL, then existing
     * data will be deleted.
     * @param checksum ASCII SHA256 commit checksum
     * @param metadata Metadata to associate with commit in with format "a{sv}", or %NULL to delete
     * @param cancellable Cancellable
     */
    write_commit_detached_metadata(checksum: string | null, metadata: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
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
    write_commit_with_time(parent: string | null, subject: string | null, body: string | null, metadata: GLib.Variant | null, root: RepoFile, time: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_commit */ string | null ]
    /**
     * Save `new_config` in place of this repository's config file.  Note
     * that `new_config` should not be modified after - this function
     * simply adds a reference.
     * @param new_config Overwrite the config file with this data.  Do not change later!
     */
    write_config(new_config: GLib.KeyFile): boolean
    /**
     * Store the content object streamed as `object_input,`
     * with total length `length`.  The actual checksum will
     * be returned as `out_csum`.
     * @param expected_checksum If provided, validate content against this checksum
     * @param object_input Content object stream
     * @param length Length of `object_input`
     * @param cancellable Cancellable
     */
    write_content(expected_checksum: string | null, object_input: Gio.InputStream, length: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_csum */ Uint8Array ]
    /**
     * Asynchronously store the content object `object`.  If provided, the
     * checksum `expected_checksum` will be verified.
     * @param expected_checksum If provided, validate content against this checksum
     * @param object Input
     * @param length Length of `object`
     * @param cancellable Cancellable
     * @param callback Invoked when content is writed
     */
    write_content_async(expected_checksum: string | null, object: Gio.InputStream, length: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of write_content_async

    /**
     * Promisified version of {@link write_content_async}
     * 
     * Asynchronously store the content object `object`.  If provided, the
     * checksum `expected_checksum` will be verified.
     * @param expected_checksum If provided, validate content against this checksum
     * @param object Input
     * @param length Length of `object`
     * @param cancellable Cancellable
     * @returns A Promise of the result of {@link write_content_async}
     */
    write_content_async(expected_checksum: string | null, object: Gio.InputStream, length: number, cancellable: Gio.Cancellable | null): globalThis.Promise</* out_csum */ number>
    /**
     * Completes an invocation of ostree_repo_write_content_async().
     * @param result a #GAsyncResult
     */
    write_content_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_csum */ number ]
    /**
     * Store the content object streamed as `object_input,` with total
     * length `length`.  The given `checksum` will be treated as trusted.
     * 
     * This function should be used when importing file objects from local
     * disk, for example.
     * @param checksum Store content using this ASCII SHA256 checksum
     * @param object_input Content stream
     * @param length Length of `object_input`
     * @param cancellable Cancellable
     */
    write_content_trusted(checksum: string | null, object_input: Gio.InputStream, length: number, cancellable: Gio.Cancellable | null): boolean
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
    write_dfd_to_mtree(dfd: number, path: string | null, mtree: MutableTree, modifier: RepoCommitModifier | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Store objects for `dir` and all children into the repository `self,`
     * overlaying the resulting filesystem hierarchy into `mtree`.
     * @param dir Path to a directory
     * @param mtree Overlay directory contents into this tree
     * @param modifier Optional modifier
     * @param cancellable Cancellable
     */
    write_directory_to_mtree(dir: Gio.File, mtree: MutableTree, modifier: RepoCommitModifier | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Store the metadata object `variant`.  Return the checksum
     * as `out_csum`.
     * 
     * If `expected_checksum` is not %NULL, verify it against the
     * computed checksum.
     * @param objtype Object type
     * @param expected_checksum If provided, validate content against this checksum
     * @param object Metadata
     * @param cancellable Cancellable
     */
    write_metadata(objtype: ObjectType, expected_checksum: string | null, object: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_csum */ Uint8Array ]
    /**
     * Asynchronously store the metadata object `variant`.  If provided,
     * the checksum `expected_checksum` will be verified.
     * @param objtype Object type
     * @param expected_checksum If provided, validate content against this checksum
     * @param object Metadata
     * @param cancellable Cancellable
     * @param callback Invoked when metadata is writed
     */
    write_metadata_async(objtype: ObjectType, expected_checksum: string | null, object: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of write_metadata_async

    /**
     * Promisified version of {@link write_metadata_async}
     * 
     * Asynchronously store the metadata object `variant`.  If provided,
     * the checksum `expected_checksum` will be verified.
     * @param objtype Object type
     * @param expected_checksum If provided, validate content against this checksum
     * @param object Metadata
     * @param cancellable Cancellable
     * @returns A Promise of the result of {@link write_metadata_async}
     */
    write_metadata_async(objtype: ObjectType, expected_checksum: string | null, object: GLib.Variant, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    write_metadata_finish(result: Gio.AsyncResult, out_csum: number): boolean
    /**
     * Store the metadata object `variant;` the provided `checksum` is
     * trusted.
     * @param objtype Object type
     * @param checksum Store object with this ASCII SHA256 checksum
     * @param object_input Metadata object stream
     * @param length Length, may be 0 for unknown
     * @param cancellable Cancellable
     */
    write_metadata_stream_trusted(objtype: ObjectType, checksum: string | null, object_input: Gio.InputStream, length: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Store the metadata object `variant;` the provided `checksum` is
     * trusted.
     * @param objtype Object type
     * @param checksum Store object with this ASCII SHA256 checksum
     * @param variant Metadata object
     * @param cancellable Cancellable
     */
    write_metadata_trusted(objtype: ObjectType, checksum: string | null, variant: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Write all metadata objects for `mtree` to repo; the resulting
     * `out_file` points to the %OSTREE_OBJECT_TYPE_DIR_TREE object that
     * the `mtree` represented.
     * @param mtree Mutable tree
     * @param cancellable Cancellable
     */
    write_mtree(mtree: MutableTree, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_file */ Gio.File ]

    // Own signals of OSTree-1.0.OSTree.Repo

    connect(sigName: "gpg-verify-result", callback: Repo.GpgVerifyResultSignalCallback): number
    connect_after(sigName: "gpg-verify-result", callback: Repo.GpgVerifyResultSignalCallback): number
    emit(sigName: "gpg-verify-result", checksum: string | null, result: GpgVerifyResult, ...args: any[]): void

    // Class property signals of OSTree-1.0.OSTree.Repo

    connect(sigName: "notify::path", callback: (($obj: Repo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Repo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::remotes-config-dir", callback: (($obj: Repo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remotes-config-dir", callback: (($obj: Repo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remotes-config-dir", ...args: any[]): void
    connect(sigName: "notify::sysroot-path", callback: (($obj: Repo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysroot-path", callback: (($obj: Repo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sysroot-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Repo extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.Repo

    static name: string
    static $gtype: GObject.GType<Repo>

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
    static new_default(): Repo
    /**
     * Creates a new #OstreeRepo instance, taking the system root path explicitly
     * instead of assuming "/".
     * @constructor 
     * @param repo_path Path to a repository
     * @param sysroot_path Path to the system root
     * @returns An accessor object for the OSTree repository located at @repo_path.
     */
    static new_for_sysroot_path(repo_path: Gio.File, sysroot_path: Gio.File): Repo
    _init(config?: Repo.ConstructorProperties): void
    static mode_from_string(mode: string | null, out_mode: RepoMode): boolean
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
     * @param user_data User data
     */
    static pull_default_console_progress_changed(progress: AsyncProgress, user_data: any | null): void
    /**
     * This hash table is a set of #GVariant which can be accessed via
     * ostree_object_name_deserialize().
     * @returns A new hash table
     */
    static traverse_new_reachable(): GLib.HashTable
}

export module RepoFile {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.File.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface RepoFile extends Gio.File {

    // Owm methods of OSTree-1.0.OSTree.RepoFile

    ensure_resolved(): boolean
    get_checksum(): string | null
    get_repo(): Repo
    get_root(): RepoFile
    get_xattrs(out_xattrs: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    tree_find_child(name: string | null, is_dir: boolean, out_container: GLib.Variant): number
    tree_get_contents(): GLib.Variant
    tree_get_contents_checksum(): string | null
    tree_get_metadata(): GLib.Variant
    tree_get_metadata_checksum(): string | null
    tree_query_child(n: number, attributes: string | null, flags: Gio.FileQueryInfoFlags, out_info: Gio.FileInfo, cancellable: Gio.Cancellable | null): boolean
    tree_set_metadata(checksum: string | null, metadata: GLib.Variant): void

    // Class property signals of OSTree-1.0.OSTree.RepoFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RepoFile extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.RepoFile

    static name: string
    static $gtype: GObject.GType<RepoFile>

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

    // Owm methods of OSTree-1.0.OSTree.SePolicy

    get_csum(): string | null
    /**
     * Store in `out_label` the security context for the given `relpath` and
     * mode `unix_mode`.  If the policy does not specify a label, %NULL
     * will be returned.
     * @param relpath Path
     * @param unix_mode Unix mode
     * @param cancellable Cancellable
     */
    get_label(relpath: string | null, unix_mode: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_label */ string | null ]
    get_name(): string | null
    get_path(): Gio.File
    /**
     * Reset the security context of `target` based on the SELinux policy.
     * @param path Path string to use for policy lookup
     * @param info File attributes
     * @param target Physical path to target file
     * @param flags Flags controlling behavior
     * @param cancellable Cancellable
     */
    restorecon(path: string | null, info: Gio.FileInfo | null, target: Gio.File, flags: SePolicyRestoreconFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_label */ string | null ]
    setfscreatecon(path: string | null, mode: number): boolean

    // Class property signals of OSTree-1.0.OSTree.SePolicy

    connect(sigName: "notify::path", callback: (($obj: SePolicy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: SePolicy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SePolicy extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.SePolicy

    static name: string
    static $gtype: GObject.GType<SePolicy>

    // Constructors of OSTree-1.0.OSTree.SePolicy

    constructor(config?: SePolicy.ConstructorProperties) 
    constructor(path: Gio.File, cancellable: Gio.Cancellable | null) 
    static new(path: Gio.File, cancellable: Gio.Cancellable | null): SePolicy
    _init(config?: SePolicy.ConstructorProperties): void
    /**
     * Cleanup function for ostree_sepolicy_setfscreatecon().
     * @param unused 
     */
    static fscreatecon_cleanup(unused: any | null): void
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
     * @param provided_merge_deployment Use this deployment for merge path
     * @param override_kernel_argv Use these as kernel arguments; if %NULL, inherit options from provided_merge_deployment
     * @param cancellable Cancellable
     */
    deploy_tree(osname: string | null, revision: string | null, origin: GLib.KeyFile | null, provided_merge_deployment: Deployment | null, override_kernel_argv: string[] | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_new_deployment */ Deployment ]
    /**
     * Entirely replace the kernel arguments of `deployment` with the
     * values in `new_kargs`.
     * @param deployment A deployment
     * @param new_kargs Replace deployment's kernel arguments
     * @param cancellable Cancellable
     */
    deployment_set_kargs(deployment: Deployment, new_kargs: string[], cancellable: Gio.Cancellable | null): boolean
    /**
     * By default, deployment directories are not mutable.  This function
     * will allow making them temporarily mutable, for example to allow
     * layering additional non-OSTree content.
     * @param deployment A deployment
     * @param is_mutable Whether or not deployment's files can be changed
     * @param cancellable 
     */
    deployment_set_mutable(deployment: Deployment, is_mutable: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Configure the target deployment `deployment` such that it
     * is writable.  There are multiple modes, essentially differing
     * in whether or not any changes persist across reboot.
     * 
     * The `OSTREE_DEPLOYMENT_UNLOCKED_HOTFIX` state is persistent
     * across reboots.
     * @param deployment Deployment
     * @param unlocked_state Transition to this unlocked state
     * @param cancellable Cancellable
     */
    deployment_unlock(deployment: Deployment, unlocked_state: DeploymentUnlockedState, cancellable: Gio.Cancellable | null): boolean
    /**
     * Ensure that `self` is set up as a valid rootfs, by creating
     * /ostree/repo, among other things.
     * @param cancellable Cancellable
     */
    ensure_initialized(cancellable: Gio.Cancellable | null): boolean
    get_booted_deployment(): Deployment
    get_bootversion(): number
    get_deployment_directory(deployment: Deployment): Gio.File
    /**
     * Note this function only returns a *relative* path - if you want
     * to access, it, you must either use fd-relative api such as openat(),
     * or concatenate it with the full ostree_sysroot_get_path().
     * @param deployment A deployment
     * @returns Path to deployment root directory, relative to sysroot
     */
    get_deployment_dirpath(deployment: Deployment): string | null
    get_deployments(): Deployment[]
    /**
     * Access a file descriptor that refers to the root directory of this
     * sysroot.  ostree_sysroot_load() must have been invoked prior to
     * calling this function.
     * @returns A file descriptor valid for the lifetime of @self
     */
    get_fd(): number
    /**
     * Find the deployment to use as a configuration merge source; this is
     * the first one in the current deployment list which matches osname.
     * @param osname Operating system group
     * @returns Configuration merge deployment
     */
    get_merge_deployment(osname: string | null): Deployment
    get_path(): Gio.File
    /**
     * Retrieve the OSTree repository in sysroot `self`.
     * @param cancellable Cancellable
     */
    get_repo(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_repo */ Repo ]
    get_subbootversion(): number
    /**
     * Initialize the directory structure for an "osname", which is a
     * group of operating system deployments, with a shared `/var`.  One
     * is required for generating a deployment.
     * @param osname Name group of operating system checkouts
     * @param cancellable Cancellable
     */
    init_osname(osname: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Load deployment list, bootversion, and subbootversion from the
     * rootfs `self`.
     * @param cancellable Cancellable
     */
    load(cancellable: Gio.Cancellable | null): boolean
    load_if_changed(out_changed: boolean, cancellable: Gio.Cancellable | null): boolean
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
    lock_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of lock_async

    /**
     * Promisified version of {@link lock_async}
     * 
     * An asynchronous version of ostree_sysroot_lock().
     * @param cancellable Cancellable
     * @returns A Promise of the result of {@link lock_async}
     */
    lock_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Call when ostree_sysroot_lock_async() is ready.
     * @param result Result
     */
    lock_finish(result: Gio.AsyncResult): boolean
    origin_new_from_refspec(refspec: string | null): GLib.KeyFile
    /**
     * Like ostree_sysroot_cleanup() in that it cleans up incomplete deployments
     * and old boot versions, but does NOT prune the repository.
     * @param cancellable Cancellable
     */
    prepare_cleanup(cancellable: Gio.Cancellable | null): boolean
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
     * @param new_deployment Prepend this deployment to the list
     * @param merge_deployment Use this deployment for configuration merge
     * @param flags Flags controlling behavior
     * @param cancellable Cancellable
     */
    simple_write_deployment(osname: string | null, new_deployment: Deployment, merge_deployment: Deployment | null, flags: SysrootSimpleWriteDeploymentFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Try to acquire an exclusive multi-process write lock for `self`.  If
     * another process holds the lock, this function will return
     * immediately, setting `out_acquired` to %FALSE, and returning %TRUE
     * (and no error).
     * 
     * Release the lock with ostree_sysroot_unlock().  The lock will also
     * be released if `self` is deallocated.
     */
    try_lock(): [ /* returnType */ boolean, /* out_acquired */ boolean ]
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
     * @param new_deployments List of new deployments
     * @param cancellable Cancellable
     */
    write_deployments(new_deployments: Deployment[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Immediately replace the origin file of the referenced `deployment`
     * with the contents of `new_origin`.  If `new_origin` is %NULL,
     * this function will write the current origin of `deployment`.
     * @param deployment Deployment
     * @param new_origin Origin content
     * @param cancellable Cancellable
     */
    write_origin_file(deployment: Deployment, new_origin: GLib.KeyFile | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of OSTree-1.0.OSTree.Sysroot

    connect(sigName: "notify::path", callback: (($obj: Sysroot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Sysroot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Sysroot extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.Sysroot

    static name: string
    static $gtype: GObject.GType<Sysroot>

    // Constructors of OSTree-1.0.OSTree.Sysroot

    constructor(config?: Sysroot.ConstructorProperties) 
    constructor(path: Gio.File | null) 
    static new(path: Gio.File | null): Sysroot
    static new_default(): Sysroot
    _init(config?: Sysroot.ConstructorProperties): void
    static get_deployment_origin_path(deployment_path: Gio.File): Gio.File
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

    // Owm methods of OSTree-1.0.OSTree.SysrootUpgrader

    /**
     * Write the new deployment to disk, perform a configuration merge
     * with /etc, and update the bootloader configuration.
     * @param cancellable Cancellable
     */
    deploy(cancellable: Gio.Cancellable | null): boolean
    dup_origin(): GLib.KeyFile
    get_origin(): GLib.KeyFile
    get_origin_description(): string | null
    /**
     * Perform a pull from the origin.  First check if the ref has
     * changed, if so download the linked objects, and store the updated
     * ref locally.  Then `out_changed` will be %TRUE.
     * 
     * If the origin remote is unchanged, `out_changed` will be set to
     * %FALSE.
     * @param flags Flags controlling pull behavior
     * @param upgrader_flags Flags controlling upgrader behavior
     * @param progress Progress
     * @param cancellable Cancellable
     */
    pull(flags: RepoPullFlags, upgrader_flags: SysrootUpgraderPullFlags, progress: AsyncProgress | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_changed */ boolean ]
    /**
     * Like ostree_sysroot_upgrader_pull(), but allows retrieving just a
     * subpath of the tree.  This can be used to download metadata files
     * from inside the tree such as package databases.
     * @param dir_to_pull 
     * @param flags 
     * @param upgrader_flags 
     * @param progress 
     * @param out_changed 
     * @param cancellable 
     */
    pull_one_dir(dir_to_pull: string | null, flags: RepoPullFlags, upgrader_flags: SysrootUpgraderPullFlags, progress: AsyncProgress, out_changed: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Replace the origin with `origin`.
     * @param origin The new origin
     * @param cancellable Cancellable
     */
    set_origin(origin: GLib.KeyFile | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of OSTree-1.0.OSTree.SysrootUpgrader

    connect(sigName: "notify::flags", callback: (($obj: SysrootUpgrader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: SysrootUpgrader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::osname", callback: (($obj: SysrootUpgrader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::osname", callback: (($obj: SysrootUpgrader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::osname", ...args: any[]): void
    connect(sigName: "notify::sysroot", callback: (($obj: SysrootUpgrader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sysroot", callback: (($obj: SysrootUpgrader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sysroot", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SysrootUpgrader extends GObject.Object {

    // Own properties of OSTree-1.0.OSTree.SysrootUpgrader

    static name: string
    static $gtype: GObject.GType<SysrootUpgrader>

    // Constructors of OSTree-1.0.OSTree.SysrootUpgrader

    constructor(config?: SysrootUpgrader.ConstructorProperties) 
    constructor(sysroot: Sysroot, cancellable: Gio.Cancellable | null) 
    static new(sysroot: Sysroot, cancellable: Gio.Cancellable | null): SysrootUpgrader
    static new_for_os(sysroot: Sysroot, osname: string | null, cancellable: Gio.Cancellable | null): SysrootUpgrader
    static new_for_os_with_flags(sysroot: Sysroot, osname: string | null, flags: SysrootUpgraderFlags, cancellable: Gio.Cancellable | null): SysrootUpgrader
    _init(config?: SysrootUpgrader.ConstructorProperties): void
    /**
     * Check that the timestamp on `to_rev` is equal to or newer than
     * `from_rev`.  This protects systems against man-in-the-middle
     * attackers which provide a client with an older commit.
     * @param repo Repo
     * @param from_rev From revision
     * @param to_rev To revision
     */
    static check_timestamps(repo: Repo, from_rev: string | null, to_rev: string | null): boolean
}

export interface AsyncProgressClass {

    // Own fields of OSTree-1.0.OSTree.AsyncProgressClass

    parent_class: GObject.ObjectClass
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

    g_iface: GObject.TypeInterface
    query: (bootloader: Bootloader, out_is_active: boolean, cancellable: Gio.Cancellable) => boolean
    get_name: (self: Bootloader) => string | null
    write_config: (self: Bootloader, bootversion: number, cancellable: Gio.Cancellable) => boolean
    is_atomic: (self: Bootloader) => boolean
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

    parent_class: Gio.FilterInputStreamClass
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

    ostree_generate_grub2_config: (sysroot: Sysroot, bootversion: number, target_fd: number, cancellable: Gio.Cancellable) => boolean
    ostree_static_delta_dump: (repo: Repo, delta_id: string | null, cancellable: Gio.Cancellable) => boolean
    ostree_static_delta_query_exists: (repo: Repo, delta_id: string | null, out_exists: boolean, cancellable: Gio.Cancellable) => boolean
    ostree_static_delta_delete: (repo: Repo, delta_id: string | null, cancellable: Gio.Cancellable) => boolean
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
    src_info: Gio.FileInfo
    target_info: Gio.FileInfo
    src_checksum: string | null
    target_checksum: string | null

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

    parent_instance: Gio.InputStream
}

export class LibarchiveInputStream {

    // Own properties of OSTree-1.0.OSTree.LibarchiveInputStream

    static name: string
}

export interface LibarchiveInputStreamClass {

    // Own fields of OSTree-1.0.OSTree.LibarchiveInputStreamClass

    parent_class: Gio.InputStreamClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
}

export class LzmaDecompressorClass {

    // Own properties of OSTree-1.0.OSTree.LzmaDecompressorClass

    static name: string
}

export interface MutableTreeClass {

    // Own fields of OSTree-1.0.OSTree.MutableTreeClass

    parent_class: GObject.ObjectClass
}

export abstract class MutableTreeClass {

    // Own properties of OSTree-1.0.OSTree.MutableTreeClass

    static name: string
}

export interface MutableTreeIter {

    // Own fields of OSTree-1.0.OSTree.MutableTreeIter

    in_files: boolean
    iter: GLib.HashTableIter
}

export class MutableTreeIter {

    // Own properties of OSTree-1.0.OSTree.MutableTreeIter

    static name: string
}

export interface RepoCheckoutAtOptions {

    // Own fields of OSTree-1.0.OSTree.RepoCheckoutAtOptions

    mode: RepoCheckoutMode
    overwrite_mode: RepoCheckoutOverwriteMode
    enable_uncompressed_cache: boolean
    enable_fsync: boolean
    process_whiteouts: boolean
    no_copy_fallback: boolean
    unused_bools: boolean[]
    subpath: string | null
    devino_to_csum_cache: RepoDevInoCache
    unused_ints: number[]
    unused_ptrs: any[]
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
    overwrite_mode: RepoCheckoutOverwriteMode
    enable_uncompressed_cache: number
    disable_fsync: number
    process_whiteouts: number
    no_copy_fallback: number
    reserved: number
    subpath: string | null
    devino_to_csum_cache: RepoDevInoCache
    unused_uints: number[]
    unused_ptrs: any[]
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
    set_devino_cache(cache: RepoDevInoCache): void
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
    set_sepolicy(sepolicy: SePolicy | null): void
    /**
     * If set, this function should return extended attributes to use for
     * the given path.  This is useful for things like ACLs and SELinux,
     * where a build system can label the files as it's committing to the
     * repository.
     * @param callback Function to be invoked, should return extended attributes for path
     */
    set_xattr_callback(callback: RepoCommitModifierXattrCallback): void
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

    constructor(flags: RepoCommitModifierFlags, commit_filter: RepoCommitFilter | null) 
    static new(flags: RepoCommitModifierFlags, commit_filter: RepoCommitFilter | null): RepoCommitModifier
}

export interface RepoCommitTraverseIter {

    // Own fields of OSTree-1.0.OSTree.RepoCommitTraverseIter

    initialized: boolean
    dummy: any[]
    dummy_checksum_data: number[]

    // Owm methods of OSTree-1.0.OSTree.RepoCommitTraverseIter

    clear(): void
    /**
     * Return information on the current directory.  This function may
     * only be called if %OSTREE_REPO_COMMIT_ITER_RESULT_DIR was returned
     * from ostree_repo_commit_traverse_iter_next().
     */
    get_dir(): [ /* out_name */ string | null, /* out_content_checksum */ string | null, /* out_meta_checksum */ string | null ]
    /**
     * Return information on the current file.  This function may only be
     * called if %OSTREE_REPO_COMMIT_ITER_RESULT_FILE was returned from
     * ostree_repo_commit_traverse_iter_next().
     */
    get_file(): [ /* out_name */ string | null, /* out_checksum */ string | null ]
    /**
     * Initialize (in place) an iterator over the root of a commit object.
     * @param repo A repo
     * @param commit Variant of type %OSTREE_OBJECT_TYPE_COMMIT
     * @param flags Flags
     */
    init_commit(repo: Repo, commit: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
    /**
     * Initialize (in place) an iterator over a directory tree.
     * @param repo A repo
     * @param dirtree Variant of type %OSTREE_OBJECT_TYPE_DIR_TREE
     * @param flags Flags
     */
    init_dirtree(repo: Repo, dirtree: GLib.Variant, flags: RepoCommitTraverseFlags): boolean
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

    disable_xattrs: number
    reserved: number
    timestamp_secs: number
    unused_uint: number[]
    path_prefix: string | null
    unused_ptrs: any[]
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

    parent_class: GObject.ObjectClass
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

    parent_class: Gio.FileEnumeratorClass
}

export class RepoFileEnumeratorClass {

    // Own properties of OSTree-1.0.OSTree.RepoFileEnumeratorClass

    static name: string
}

export interface RepoImportArchiveOptions {

    // Own fields of OSTree-1.0.OSTree.RepoImportArchiveOptions

    ignore_unsupported_content: number
    autocreate_parents: number
    use_ostree_convention: number
    callback_with_entry_pathname: number
    reserved: number
    unused_uint: number[]
    unused_ptrs: any[]
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
    metadata_objects_total: number
    /**
     * The number of metadata objects that
     * were written to the repository in this transaction.
     * @field 
     */
    metadata_objects_written: number
    /**
     * The total number of content objects
     * in the repository after this transaction has completed.
     * @field 
     */
    content_objects_total: number
    /**
     * The number of content objects that
     * were written to the repository in this transaction.
     * @field 
     */
    content_objects_written: number
    /**
     * The amount of data added to the repository,
     * in bytes, counting only content objects.
     * @field 
     */
    content_bytes_written: number
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

    from_rollsums: GLib.HashTable
    to_rollsums: GLib.HashTable
    crcmatches: number
    bufmatches: number
    total: number
    match_size: number
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

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END