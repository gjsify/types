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
import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Jcat {
    /**
     * Jcat-1.0
     */

    /**
     * The kind of blob stored as a signature on the item.
     */

    /**
     * The kind of blob stored as a signature on the item.
     */
    export namespace BlobKind {
        export const $gtype: GObject.GType<BlobKind>;
    }

    enum BlobKind {
        /**
         * No known blob kind
         */
        UNKNOWN,
        /**
         * SHA-256 checksum
         */
        SHA256,
        /**
         * GPG detached signature
         */
        GPG,
        /**
         * PKCS-7 detached signature
         */
        PKCS7,
        /**
         * SHA-1 checksum
         */
        SHA1,
        /**
         * Binary transparency manifest
         */
        BT_MANIFEST,
        /**
         * Binary transparency checkpoint
         */
        BT_CHECKPOINT,
        /**
         * Binary transparency inclusion proof
         */
        BT_INCLUSION_PROOF,
        /**
         * Binary transparency verifier
         */
        BT_VERIFIER,
        /**
         * ED25519 signature
         */
        ED25519,
        /**
         * SHA-512 checksum
         */
        SHA512,
    }
    /**
     * The blob verification method.
     */

    /**
     * The blob verification method.
     */
    export namespace BlobMethod {
        export const $gtype: GObject.GType<BlobMethod>;
    }

    enum BlobMethod {
        /**
         * Unknown
         */
        UNKNOWN,
        /**
         * Checksum
         */
        CHECKSUM,
        /**
         * Signature
         */
        SIGNATURE,
    }
    /**
     * Flags used for importing.
     */

    /**
     * Flags used for importing.
     */
    export namespace ImportFlags {
        export const $gtype: GObject.GType<ImportFlags>;
    }

    enum ImportFlags {
        /**
         * No flags set
         */
        NONE,
    }
    /**
     * The compile-time major version
     */
    const MAJOR_VERSION: number;
    /**
     * The compile-time micro version
     */
    const MICRO_VERSION: number;
    /**
     * The compile-time minor version
     */
    const MINOR_VERSION: number;
    /**
     * Gets the JCat installed runtime version.
     * @returns a version number, e.g. "0.1.11"
     */
    function version_string(): string;
    /**
     * Flags used when creating the blob.
     */

    /**
     * Flags used when creating the blob.
     */
    export namespace BlobFlags {
        export const $gtype: GObject.GType<BlobFlags>;
    }

    enum BlobFlags {
        /**
         * Generic binary data
         */
        NONE,
        /**
         * ASCII text
         */
        IS_UTF8,
    }
    /**
     * Flags used for exporting.
     */

    /**
     * Flags used for exporting.
     */
    export namespace ExportFlags {
        export const $gtype: GObject.GType<ExportFlags>;
    }

    enum ExportFlags {
        /**
         * No flags set
         */
        NONE,
        /**
         * Do not export timestamps
         */
        NO_TIMESTAMP,
    }
    /**
     * The flags to when signing a binary
     */

    /**
     * The flags to when signing a binary
     */
    export namespace SignFlags {
        export const $gtype: GObject.GType<SignFlags>;
    }

    enum SignFlags {
        /**
         * No flags set
         */
        NONE,
        /**
         * Add a timestamp
         */
        ADD_TIMESTAMP,
        /**
         * Add a certificate
         */
        ADD_CERT,
    }
    /**
     * The flags to use when interacting with a keyring
     */

    /**
     * The flags to use when interacting with a keyring
     */
    export namespace VerifyFlags {
        export const $gtype: GObject.GType<VerifyFlags>;
    }

    enum VerifyFlags {
        /**
         * No flags set
         */
        NONE,
        /**
         * Disable checking of validity periods
         */
        DISABLE_TIME_CHECKS,
        /**
         * Require the item contains at least one checksum
         */
        REQUIRE_CHECKSUM,
        /**
         * Require the item contains at least one signature
         */
        REQUIRE_SIGNATURE,
    }
    namespace Blob {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Blob extends GObject.Object {
        static $gtype: GObject.GType<Blob>;

        // Constructors

        constructor(properties?: Partial<Blob.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](kind: BlobKind, data: GLib.Bytes | Uint8Array): Blob;

        static new_full(kind: BlobKind, data: GLib.Bytes | Uint8Array, flags: BlobFlags): Blob;

        static new_utf8(kind: BlobKind, data: string): Blob;

        // Signals

        connect<K extends keyof Blob.SignalSignatures>(signal: K, callback: Blob.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Blob.SignalSignatures>(signal: K, callback: Blob.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Blob.SignalSignatures>(
            signal: K,
            ...args: Blob.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Converts the string to an enumerated kind.
         * @param kind A string
         */
        static kind_from_string(kind: string): BlobKind;
        /**
         * Converts the enumerated kind to the normal file extension.
         * @param kind #JcatBlobKind
         */
        static kind_to_filename_ext(kind: BlobKind): string;
        /**
         * Converts the enumerated kind to a string.
         * @param kind #JcatBlobKind
         */
        static kind_to_string(kind: BlobKind): string;

        // Methods

        /**
         * Gets the optional AppStream ID for the blob.
         * @returns a string, or %NULL if not set
         */
        get_appstream_id(): string;
        /**
         * Gets the data stored in the blob, typically in binary (unprintable) form.
         * @returns a #GBytes, or %NULL if the filename was not found
         */
        get_data(): GLib.Bytes;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Gets the data stored in the blob, in human readable form.
         * @returns base64 encoded version of data
         */
        get_data_as_string(): string;
        /**
         * gets the blob kind
         * @returns #JcatBlobKind, e.g. %JCAT_BLOB_KIND_SHA256
         */
        get_kind(): BlobKind;
        /**
         * Gets the blob target.
         * @returns #JcatBlobKind, e.g. %JCAT_BLOB_KIND_SHA256
         */
        get_target(): BlobKind;
        /**
         * Gets the creation timestamp for the blob.
         * @returns UTC UNIX time, or 0 if unset
         */
        get_timestamp(): number;
        /**
         * Sets an optional AppStream ID on the blob.
         * @param appstream_id string
         */
        set_appstream_id(appstream_id?: string | null): void;
        /**
         * Sets the blob target.
         * @param target a #JcatBlobKind, e.g. %JCAT_BLOB_KIND_SHA256
         */
        set_target(target: BlobKind | null): void;
        /**
         * Sets the creation timestamp for the blob.
         * @param timestamp UTC timestamp
         */
        set_timestamp(timestamp: number): void;
        /**
         * Converts the #JcatBlob to a string.
         * @returns string
         */
        to_string(): string;
    }

    namespace BtCheckpoint {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class BtCheckpoint extends GObject.Object {
        static $gtype: GObject.GType<BtCheckpoint>;

        // Constructors

        constructor(properties?: Partial<BtCheckpoint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](blob: GLib.Bytes | Uint8Array): BtCheckpoint;

        // Signals

        connect<K extends keyof BtCheckpoint.SignalSignatures>(
            signal: K,
            callback: BtCheckpoint.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BtCheckpoint.SignalSignatures>(
            signal: K,
            callback: BtCheckpoint.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BtCheckpoint.SignalSignatures>(
            signal: K,
            ...args: BtCheckpoint.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the first 4 bytes of the SHA256 hash of the associated public key to act as a hint in
         * identifying the correct key to verify with.
         * @returns string, or %NULL
         */
        get_hash(): string;
        /**
         * Gets a human-readable representation of the signing ID.
         * @returns string, or %NULL
         */
        get_identity(): string;
        /**
         * Gets the log_size.
         * @returns integer
         */
        get_log_size(): number;
        /**
         * Gets the unique identifier for the log identity which issued the checkpoint.
         * @returns string, or %NULL
         */
        get_origin(): string;
        /**
         * Gets the ED25519 public key blob.
         * @returns blob, or %NULL
         */
        get_payload(): GLib.Bytes;
        /**
         * Gets the ED25519 public key blob.
         * @returns blob, or %NULL
         */
        get_pubkey(): GLib.Bytes;
        /**
         * Gets the ED25519 public key blob.
         * @returns blob, or %NULL
         */
        get_signature(): GLib.Bytes;
        /**
         * Converts the #JcatBtCheckpoint to a string.
         * @returns string
         */
        to_string(): string;
    }

    namespace BtVerifier {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class BtVerifier extends GObject.Object {
        static $gtype: GObject.GType<BtVerifier>;

        // Constructors

        constructor(properties?: Partial<BtVerifier.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](blob: GLib.Bytes | Uint8Array): BtVerifier;

        // Signals

        connect<K extends keyof BtVerifier.SignalSignatures>(
            signal: K,
            callback: BtVerifier.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BtVerifier.SignalSignatures>(
            signal: K,
            callback: BtVerifier.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BtVerifier.SignalSignatures>(
            signal: K,
            ...args: BtVerifier.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the algorithm ID.
         * @returns ID, typically 1
         */
        get_alg(): number;
        /**
         * Gets the hash.
         * @returns string, or %NULL
         */
        get_hash(): string;
        /**
         * Gets the ED25519 public key blob.
         * @returns blob, or %NULL
         */
        get_key(): GLib.Bytes;
        /**
         * Gets the name.
         * @returns string, or %NULL
         */
        get_name(): string;
        /**
         * Converts the #JcatBtVerifier to a string.
         * @returns string
         */
        to_string(): string;
    }

    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        // Constructors

        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Context;

        // Signals

        connect<K extends keyof Context.SignalSignatures>(signal: K, callback: Context.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: Context.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Context.SignalSignatures>(
            signal: K,
            ...args: Context.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a single public key.
         * @param filename A filename
         */
        add_public_key(filename: string): void;
        /**
         * Adds a public key directory.
         * @param path A directory of files
         */
        add_public_keys(path: string): void;
        /**
         * Adds a blob kind to the allowlist. By default, JCat will use all signature and checksum schemes
         * compiled in at build time. Once this function has been called only specific blob kinds will be
         * used in functions like jcat_context_verify_blob().
         * @param kind #JcatBlobKind, e.g. %JCAT_BLOB_KIND_GPG
         */
        blob_kind_allow(kind: BlobKind | null): void;
        /**
         * Removes a blob kind from the allowlist. By default, JCat will use all signature and checksum
         * schemes compiled in at build time. Once this function has been called this `kind` will not be
         * used in functions like jcat_context_verify_blob().
         * @param kind #JcatBlobKind, e.g. %JCAT_BLOB_KIND_GPG
         */
        blob_kind_disallow(kind: BlobKind | null): void;
        /**
         * Gets the engine for a specific engine kind, setting up the context
         * automatically if required.
         * @param kind #JcatBlobKind, e.g. %JCAT_BLOB_KIND_GPG
         * @returns #JcatEngine, or %NULL for unavailable
         */
        get_engine(kind: BlobKind | null): Engine;
        /**
         * Gets the local state directory the engines are using.
         * @returns path
         */
        get_keyring_path(): string | null;
        /**
         * Sets the local state directory for the engines to use.
         * @param path A directory
         */
        set_keyring_path(path: string): void;
        /**
         * Verifies a #JcatBlob using the public keys added to the context.
         * @param data #GBytes
         * @param blob #JcatBlob
         * @param flags #JcatVerifyFlags, e.g. %JCAT_VERIFY_FLAG_DISABLE_TIME_CHECKS
         * @returns #JcatResult, or %NULL for failed
         */
        verify_blob(data: GLib.Bytes | Uint8Array, blob: Blob, flags: VerifyFlags | null): Result;
        /**
         * Verifies a #JcatItem using the public keys added to the context. All
         * `verify=CHECKSUM` engines (e.g. SHA256) must verify correctly,
         * but only one non-checksum signature has to verify.
         * @param data #GBytes
         * @param item #JcatItem
         * @param flags #JcatVerifyFlags, e.g. %JCAT_VERIFY_FLAG_REQUIRE_SIGNATURE
         * @returns array of #JcatResult, or %NULL for failed
         */
        verify_item(data: GLib.Bytes | Uint8Array, item: Item, flags: VerifyFlags | null): Result[];
        /**
         * Verifies a #JcatItem using the target to an item. At least one `verify=CHECKSUM` (e.g. SHA256)
         * must exist and all checksum types that do exist must verify correctly.
         * @param item_target #JcatItem containing checksums of the data
         * @param item #JcatItem
         * @param flags #JcatVerifyFlags, e.g. %JCAT_VERIFY_FLAG_REQUIRE_SIGNATURE
         * @returns results, or %NULL for failed
         */
        verify_target(item_target: Item, item: Item, flags: VerifyFlags | null): Result[];
    }

    namespace Engine {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context': GObject.Object.Notify;
            'notify::kind': GObject.Object.Notify;
            'notify::method': GObject.Object.Notify;
            'notify::verify-kind': GObject.Object.Notify;
            'notify::verify-kind': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            kind: number;
            method: number;
            verify_kind: number;
            verifyKind: number;
        }
    }

    class Engine extends GObject.Object {
        static $gtype: GObject.GType<Engine>;

        // Properties

        get context(): Context;
        get kind(): number;
        get method(): number;
        get verify_kind(): number;
        get verifyKind(): number;

        // Constructors

        constructor(properties?: Partial<Engine.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Engine.SignalSignatures>(signal: K, callback: Engine.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Engine.SignalSignatures>(signal: K, callback: Engine.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Engine.SignalSignatures>(
            signal: K,
            ...args: Engine.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_add_public_key(filename: string): boolean;
        /**
         * Adds a public key manually.
         * @param blob #GBytes
         */
        vfunc_add_public_key_raw(blob: GLib.Bytes | Uint8Array): boolean;
        /**
         * Signs a chunk of data.
         * @param blob #GBytes
         * @param cert #GBytes
         * @param privkey #GBytes
         * @param flags #JcatSignFlags, e.g. %JCAT_SIGN_FLAG_ADD_TIMESTAMP
         */
        vfunc_pubkey_sign(
            blob: GLib.Bytes | Uint8Array,
            cert: GLib.Bytes | Uint8Array,
            privkey: GLib.Bytes | Uint8Array,
            flags: SignFlags,
        ): Blob;
        /**
         * Verifies a chunk of data.
         * @param blob #GBytes
         * @param blob_signature #GBytes
         * @param flags #JcatVerifyFlags, e.g. %JCAT_VERIFY_FLAG_DISABLE_TIME_CHECKS
         */
        vfunc_pubkey_verify(
            blob: GLib.Bytes | Uint8Array,
            blob_signature: GLib.Bytes | Uint8Array,
            flags: VerifyFlags,
        ): Result;
        /**
         * Signs a chunk of data.
         * @param blob #GBytes
         * @param flags #JcatSignFlags, e.g. %JCAT_SIGN_FLAG_ADD_TIMESTAMP
         */
        vfunc_self_sign(blob: GLib.Bytes | Uint8Array, flags: SignFlags): Blob;
        /**
         * Verifies a chunk of data.
         * @param blob #GBytes
         * @param blob_signature #GBytes
         * @param flags #JcatVerifyFlags, e.g. %JCAT_VERIFY_FLAG_DISABLE_TIME_CHECKS
         */
        vfunc_self_verify(
            blob: GLib.Bytes | Uint8Array,
            blob_signature: GLib.Bytes | Uint8Array,
            flags: VerifyFlags,
        ): Result;
        vfunc_setup(): boolean;

        // Methods

        /**
         * Adds a public key manually.
         * @param blob #GBytes
         * @returns %
         */
        add_public_key_raw(blob: GLib.Bytes | Uint8Array): boolean;
        /**
         * Gets the blob kind.
         * @returns #JcatBlobKind, e.g. %JCAT_BLOB_KIND_SHA256
         */
        get_kind(): BlobKind;
        /**
         * Gets the verification method.
         * @returns #JcatBlobMethod, e.g. %JCAT_BLOB_METHOD_SIGNATURE
         */
        get_method(): BlobMethod;
        /**
         * Signs a chunk of data.
         * @param blob #GBytes
         * @param cert #GBytes
         * @param privkey #GBytes
         * @param flags #JcatSignFlags, e.g. %JCAT_SIGN_FLAG_ADD_TIMESTAMP
         * @returns #JcatBlob, or %NULL for failed
         */
        pubkey_sign(
            blob: GLib.Bytes | Uint8Array,
            cert: GLib.Bytes | Uint8Array,
            privkey: GLib.Bytes | Uint8Array,
            flags: SignFlags | null,
        ): Blob;
        /**
         * Verifies a chunk of data.
         * @param blob #GBytes
         * @param blob_signature #GBytes
         * @param flags #JcatVerifyFlags, e.g. %JCAT_VERIFY_FLAG_DISABLE_TIME_CHECKS
         * @returns #JcatResult, or %NULL for failed
         */
        pubkey_verify(
            blob: GLib.Bytes | Uint8Array,
            blob_signature: GLib.Bytes | Uint8Array,
            flags: VerifyFlags | null,
        ): Result;
        /**
         * Signs a chunk of data.
         * @param blob #GBytes
         * @param flags #JcatSignFlags, e.g. %JCAT_SIGN_FLAG_ADD_TIMESTAMP
         * @returns #JcatBlob, or %NULL for failed
         */
        self_sign(blob: GLib.Bytes | Uint8Array, flags: SignFlags | null): Blob;
        /**
         * Verifies a chunk of data.
         * @param blob #GBytes
         * @param blob_signature #GBytes
         * @param flags #JcatVerifyFlags, e.g. %JCAT_VERIFY_FLAG_DISABLE_TIME_CHECKS
         * @returns #JcatResult, or %NULL for failed
         */
        self_verify(
            blob: GLib.Bytes | Uint8Array,
            blob_signature: GLib.Bytes | Uint8Array,
            flags: VerifyFlags | null,
        ): Result;
    }

    namespace File {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class File extends GObject.Object {
        static $gtype: GObject.GType<File>;

        // Constructors

        constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): File;

        // Signals

        connect<K extends keyof File.SignalSignatures>(signal: K, callback: File.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof File.SignalSignatures>(signal: K, callback: File.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof File.SignalSignatures>(
            signal: K,
            ...args: File.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds an item to a file.
         * @param item #JcatItem
         */
        add_item(item: Item): void;
        /**
         * Exports a Jcat file to a compressed file.
         * @param gfile #gfile
         * @param flags a #JcatExportFlags, typically %JCAT_EXPORT_FLAG_NONE
         * @param cancellable #GCancellable, or %NULL
         * @returns %TRUE for success
         */
        export_file(gfile: Gio.File, flags: ExportFlags | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Exports a Jcat file to raw JSON.
         * @param flags a #JcatExportFlags, typically %JCAT_EXPORT_FLAG_NONE
         * @returns JSON output, or %NULL for error
         */
        export_json(flags: ExportFlags | null): string;
        /**
         * Exports a Jcat file to a compressed stream.
         * @param ostream #GOutputStream
         * @param flags a #JcatExportFlags, typically %JCAT_EXPORT_FLAG_NONE
         * @param cancellable #GCancellable, or %NULL
         * @returns %TRUE for success
         */
        export_stream(
            ostream: Gio.OutputStream,
            flags: ExportFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Finds the item with the specified ID, falling back to the ID alias if set.
         * @param id An ID, typically a filename basename
         * @returns a #JcatItem, or %NULL if the filename was not found
         */
        get_item_by_id(id: string): Item;
        /**
         * Finds the default item. If more than one #JcatItem exists this function will
         * return with an error.
         * @returns a #JcatItem, or %NULL if no default exists
         */
        get_item_default(): Item;
        /**
         * Returns all the items in the file.
         * @returns all the items in the file
         */
        get_items(): Item[];
        /**
         * Returns the major version number of the Jcat specification
         * @returns integer
         */
        get_version_major(): number;
        /**
         * Returns the minor version number of the Jcat specification
         * @returns integer
         */
        get_version_minor(): number;
        /**
         * Imports a compressed Jcat file from an input stream.
         * @param gfile #gfile
         * @param flags #JcatImportFlags, typically %JCAT_IMPORT_FLAG_NONE
         * @param cancellable #GCancellable, or %NULL
         * @returns %TRUE for success
         */
        import_file(gfile: Gio.File, flags: ImportFlags | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Imports a Jcat file from raw JSON.
         * @param json JSON data
         * @param flags #JcatImportFlags, typically %JCAT_IMPORT_FLAG_NONE
         * @returns %TRUE for success
         */
        import_json(json: string, flags: ImportFlags | null): boolean;
        /**
         * Imports a compressed Jcat file from a file.
         * @param istream #GInputStream
         * @param flags #JcatImportFlags, typically %JCAT_IMPORT_FLAG_NONE
         * @param cancellable #GCancellable, or %NULL
         * @returns %TRUE for success
         */
        import_stream(
            istream: Gio.InputStream,
            flags: ImportFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Converts the #JcatFile to a string.
         * @returns string
         */
        to_string(): string;
    }

    namespace Item {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Item extends GObject.Object {
        static $gtype: GObject.GType<Item>;

        // Constructors

        constructor(properties?: Partial<Item.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string): Item;

        // Signals

        connect<K extends keyof Item.SignalSignatures>(signal: K, callback: Item.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Item.SignalSignatures>(signal: K, callback: Item.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Item.SignalSignatures>(
            signal: K,
            ...args: Item.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds an item alias ID. Alias IDs are matched when using functions such as
         * jcat_file_get_item_by_id().
         * @param id An item ID alias, typically a file basename
         */
        add_alias_id(id: string): void;
        /**
         * Adds a new blob to the item.
         * @param blob #JcatBlob
         */
        add_blob(blob: Blob): void;
        /**
         * Gets the list of alias IDs.
         * @returns array
         */
        get_alias_ids(): string[];
        /**
         * Gets the item blobs by a specific kind.
         * @param kind #JcatBlobKind, e.g. %JCAT_BLOB_KIND_SHA256
         * @returns a blob, or %NULL
         */
        get_blob_by_kind(kind: BlobKind | null): Blob;
        /**
         * Gets all the blobs for this item.
         * @returns blobs
         */
        get_blobs(): Blob[];
        /**
         * Gets the item blobs by a specific kind.
         * @param kind #JcatBlobKind, e.g. %JCAT_BLOB_KIND_SHA256
         * @returns blobs
         */
        get_blobs_by_kind(kind: BlobKind | null): Blob[];
        /**
         * Returns the item ID.
         * @returns string
         */
        get_id(): string;
        /**
         * Finds out if any of the blobs are targeting an internal checksum.
         * If this returns with success then the caller might be able to use functions like
         * jcat_context_verify_target() supplying some target checksums.
         * @returns %TRUE on success
         */
        has_target(): boolean;
        /**
         * Removes an item alias ID.
         * @param id An item ID alias, typically a file basename
         */
        remove_alias_id(id: string): void;
        /**
         * Converts the #JcatItem to a string.
         * @returns string
         */
        to_string(): string;
    }

    namespace Result {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::authority': GObject.Object.Notify;
            'notify::engine': GObject.Object.Notify;
            'notify::timestamp': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            authority: string;
            engine: Engine;
            timestamp: number;
        }
    }

    class Result extends GObject.Object {
        static $gtype: GObject.GType<Result>;

        // Properties

        get authority(): string;
        set authority(val: string);
        get engine(): Engine;
        get timestamp(): number;
        set timestamp(val: number);

        // Constructors

        constructor(properties?: Partial<Result.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Result.SignalSignatures>(signal: K, callback: Result.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Result.SignalSignatures>(signal: K, callback: Result.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Result.SignalSignatures>(
            signal: K,
            ...args: Result.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the signing authority, if set.
         * @returns string, or %NULL
         */
        get_authority(): string;
        /**
         * Gets the blob kind.
         * @returns #JcatBlobKind, e.g. %JCAT_BLOB_KIND_SHA256
         */
        get_kind(): BlobKind;
        /**
         * Gets the verification kind.
         * @returns #JcatBlobMethod, e.g. %JCAT_BLOB_METHOD_SIGNATURE
         */
        get_method(): BlobMethod;
        /**
         * Gets the signing timestamp, if set.
         * @returns UNIX timestamp, or 0 if unset
         */
        get_timestamp(): number;
        /**
         * Converts the #JcatResult to a string.
         * @returns string
         */
        to_string(): string;
    }

    type BlobClass = typeof Blob;
    type BtCheckpointClass = typeof BtCheckpoint;
    type BtVerifierClass = typeof BtVerifier;
    type ContextClass = typeof Context;
    type EngineClass = typeof Engine;
    type FileClass = typeof File;
    type ItemClass = typeof Item;
    type ResultClass = typeof Result;
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

export default Jcat;

// END
