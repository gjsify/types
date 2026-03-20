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
     * @gir-type Enum
     */
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
     * @gir-type Enum
     */
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
     * @gir-type Enum
     */
    enum ImportFlags {
        /**
         * No flags set
         */
        NONE,
    }

    /**
     * The compile-time major version
     * @since 0.1.0
     */
    const MAJOR_VERSION: number;
    /**
     * The compile-time micro version
     * @since 0.1.0
     */
    const MICRO_VERSION: number;
    /**
     * The compile-time minor version
     * @since 0.1.0
     */
    const MINOR_VERSION: number;
    /**
     * Gets the JCat installed runtime version.
     * @returns a version number, e.g. "0.1.11"
     * @since 0.1.11
     */
    function version_string(): string;
    /**
     * Flags used when creating the blob.
     * @gir-type Flags
     */
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
     * @gir-type Flags
     */
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
     * @gir-type Flags
     */
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
     * @gir-type Flags
     */
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

    /**
     * @gir-type Class
     */
    class Blob extends GObject.Object {
        static $gtype: GObject.GType<Blob>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Blob.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Blob.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](kind: BlobKind, data: GLib.Bytes | Uint8Array): Blob;

        static new_full(kind: BlobKind, data: GLib.Bytes | Uint8Array, flags: BlobFlags): Blob;

        static new_utf8(kind: BlobKind, data: string): Blob;

        // Signals

        /** @signal */
        connect<K extends keyof Blob.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Blob.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Blob.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Blob.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Blob.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Blob.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
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
         * @param kind {@link Jcat.BlobKind}
         */
        static kind_to_filename_ext(kind: BlobKind): string;
        /**
         * Converts the enumerated kind to a string.
         * @param kind {@link Jcat.BlobKind}
         */
        static kind_to_string(kind: BlobKind): string;

        // Methods

        /**
         * Gets the optional AppStream ID for the blob.
         * @returns a string, or `null` if not set
         */
        get_appstream_id(): string;
        /**
         * Gets the data stored in the blob, typically in binary (unprintable) form.
         * @returns a {@link GLib.Bytes}, or `null` if the filename was not found
         */
        get_data(): GLib.Bytes;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Gets the data stored in the blob, in human readable form.
         * @returns base64 encoded version of data
         */
        get_data_as_string(): string;
        /**
         * gets the blob kind
         * @returns {@link Jcat.BlobKind}, e.g. {@link Jcat.BlobKind.SHA256}
         */
        get_kind(): BlobKind;
        /**
         * Gets the blob target.
         * @returns {@link Jcat.BlobKind}, e.g. {@link Jcat.BlobKind.SHA256}
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
         * @param target a {@link Jcat.BlobKind}, e.g. {@link Jcat.BlobKind.SHA256}
         */
        set_target(target: BlobKind | null): void;
        /**
         * Sets the creation timestamp for the blob.
         * @param timestamp UTC timestamp
         */
        set_timestamp(timestamp: number): void;
        /**
         * Converts the {@link Jcat.Blob} to a string.
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

    /**
     * @gir-type Class
     */
    class BtCheckpoint extends GObject.Object {
        static $gtype: GObject.GType<BtCheckpoint>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BtCheckpoint.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BtCheckpoint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](blob: GLib.Bytes | Uint8Array): BtCheckpoint;

        // Signals

        /** @signal */
        connect<K extends keyof BtCheckpoint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BtCheckpoint.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BtCheckpoint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BtCheckpoint.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BtCheckpoint.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BtCheckpoint.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the first 4 bytes of the SHA256 hash of the associated public key to act as a hint in
         * identifying the correct key to verify with.
         * @returns string, or `null`
         */
        get_hash(): string;
        /**
         * Gets a human-readable representation of the signing ID.
         * @returns string, or `null`
         */
        get_identity(): string;
        /**
         * Gets the log_size.
         * @returns integer
         */
        get_log_size(): number;
        /**
         * Gets the unique identifier for the log identity which issued the checkpoint.
         * @returns string, or `null`
         */
        get_origin(): string;
        /**
         * Gets the ED25519 public key blob.
         * @returns blob, or `null`
         */
        get_payload(): GLib.Bytes;
        /**
         * Gets the ED25519 public key blob.
         * @returns blob, or `null`
         */
        get_pubkey(): GLib.Bytes;
        /**
         * Gets the ED25519 public key blob.
         * @returns blob, or `null`
         */
        get_signature(): GLib.Bytes;
        /**
         * Converts the {@link Jcat.BtCheckpoint} to a string.
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

    /**
     * @gir-type Class
     */
    class BtVerifier extends GObject.Object {
        static $gtype: GObject.GType<BtVerifier>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BtVerifier.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BtVerifier.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](blob: GLib.Bytes | Uint8Array): BtVerifier;

        // Signals

        /** @signal */
        connect<K extends keyof BtVerifier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BtVerifier.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BtVerifier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BtVerifier.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BtVerifier.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BtVerifier.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
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
         * @returns string, or `null`
         */
        get_hash(): string;
        /**
         * Gets the ED25519 public key blob.
         * @returns blob, or `null`
         */
        get_key(): GLib.Bytes;
        /**
         * Gets the name.
         * @returns string, or `null`
         */
        get_name(): string;
        /**
         * Converts the {@link Jcat.BtVerifier} to a string.
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

    /**
     * @gir-type Class
     */
    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Context.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Context;

        // Signals

        /** @signal */
        connect<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Context.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
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
         * used in functions like `jcat_context_verify_blob()`.
         * @param kind {@link Jcat.BlobKind}, e.g. {@link Jcat.BlobKind.GPG}
         */
        blob_kind_allow(kind: BlobKind | null): void;
        /**
         * Removes a blob kind from the allowlist. By default, JCat will use all signature and checksum
         * schemes compiled in at build time. Once this function has been called this `kind` will not be
         * used in functions like `jcat_context_verify_blob()`.
         * @param kind {@link Jcat.BlobKind}, e.g. {@link Jcat.BlobKind.GPG}
         */
        blob_kind_disallow(kind: BlobKind | null): void;
        /**
         * Gets the engine for a specific engine kind, setting up the context
         * automatically if required.
         * @param kind {@link Jcat.BlobKind}, e.g. {@link Jcat.BlobKind.GPG}
         * @returns {@link Jcat.Engine}, or `null` for unavailable
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
         * Verifies a {@link Jcat.Blob} using the public keys added to the context.
         * @param data {@link GLib.Bytes}
         * @param blob {@link Jcat.Blob}
         * @param flags {@link Jcat.VerifyFlags}, e.g. {@link Jcat.VerifyFlags.DISABLE_TIME_CHECKS}
         * @returns {@link Jcat.Result}, or `null` for failed
         */
        verify_blob(data: GLib.Bytes | Uint8Array, blob: Blob, flags: VerifyFlags | null): Result;
        /**
         * Verifies a {@link Jcat.Item} using the public keys added to the context. All
         * `verify=CHECKSUM` engines (e.g. SHA256) must verify correctly,
         * but only one non-checksum signature has to verify.
         * @param data {@link GLib.Bytes}
         * @param item {@link Jcat.Item}
         * @param flags {@link Jcat.VerifyFlags}, e.g. {@link Jcat.VerifyFlags.REQUIRE_SIGNATURE}
         * @returns array of {@link Jcat.Result}, or `null` for failed
         */
        verify_item(data: GLib.Bytes | Uint8Array, item: Item, flags: VerifyFlags | null): Result[];
        /**
         * Verifies a {@link Jcat.Item} using the target to an item. At least one `verify=CHECKSUM` (e.g. SHA256)
         * must exist and all checksum types that do exist must verify correctly.
         * @param item_target {@link Jcat.Item} containing checksums of the data
         * @param item {@link Jcat.Item}
         * @param flags {@link Jcat.VerifyFlags}, e.g. {@link Jcat.VerifyFlags.REQUIRE_SIGNATURE}
         * @returns results, or `null` for failed
         */
        verify_target(item_target: Item, item: Item, flags: VerifyFlags | null): Result[];
    }

    namespace Engine {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::method': (pspec: GObject.ParamSpec) => void;
            'notify::verify-kind': (pspec: GObject.ParamSpec) => void;
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

    /**
     * @gir-type Class
     */
    class Engine extends GObject.Object {
        static $gtype: GObject.GType<Engine>;

        // Properties

        /**
         * @construct-only
         */
        get context(): Context;
        /**
         * @construct-only
         */
        get kind(): number;
        /**
         * @construct-only
         */
        get method(): number;
        /**
         * @read-only
         */
        get verify_kind(): number;
        /**
         * @read-only
         */
        get verifyKind(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Engine.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Engine.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Engine.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Engine.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Engine.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Engine.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Engine.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Engine.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param filename
         * @virtual
         */
        vfunc_add_public_key(filename: string): boolean;
        /**
         * Adds a public key manually.
         * @param blob {@link GLib.Bytes}
         * @virtual
         */
        vfunc_add_public_key_raw(blob: GLib.Bytes | Uint8Array): boolean;
        /**
         * Signs a chunk of data.
         * @param blob {@link GLib.Bytes}
         * @param cert {@link GLib.Bytes}
         * @param privkey {@link GLib.Bytes}
         * @param flags {@link Jcat.SignFlags}, e.g. {@link Jcat.SignFlags.ADD_TIMESTAMP}
         * @virtual
         */
        vfunc_pubkey_sign(
            blob: GLib.Bytes | Uint8Array,
            cert: GLib.Bytes | Uint8Array,
            privkey: GLib.Bytes | Uint8Array,
            flags: SignFlags,
        ): Blob;
        /**
         * Verifies a chunk of data.
         * @param blob {@link GLib.Bytes}
         * @param blob_signature {@link GLib.Bytes}
         * @param flags {@link Jcat.VerifyFlags}, e.g. {@link Jcat.VerifyFlags.DISABLE_TIME_CHECKS}
         * @virtual
         */
        vfunc_pubkey_verify(
            blob: GLib.Bytes | Uint8Array,
            blob_signature: GLib.Bytes | Uint8Array,
            flags: VerifyFlags,
        ): Result;
        /**
         * Signs a chunk of data.
         * @param blob {@link GLib.Bytes}
         * @param flags {@link Jcat.SignFlags}, e.g. {@link Jcat.SignFlags.ADD_TIMESTAMP}
         * @virtual
         */
        vfunc_self_sign(blob: GLib.Bytes | Uint8Array, flags: SignFlags): Blob;
        /**
         * Verifies a chunk of data.
         * @param blob {@link GLib.Bytes}
         * @param blob_signature {@link GLib.Bytes}
         * @param flags {@link Jcat.VerifyFlags}, e.g. {@link Jcat.VerifyFlags.DISABLE_TIME_CHECKS}
         * @virtual
         */
        vfunc_self_verify(
            blob: GLib.Bytes | Uint8Array,
            blob_signature: GLib.Bytes | Uint8Array,
            flags: VerifyFlags,
        ): Result;
        /**
         * @virtual
         */
        vfunc_setup(): boolean;

        // Methods

        /**
         * Adds a public key manually.
         * @param blob {@link GLib.Bytes}
         * @returns %
         */
        add_public_key_raw(blob: GLib.Bytes | Uint8Array): boolean;
        /**
         * Gets the blob kind.
         * @returns {@link Jcat.BlobKind}, e.g. {@link Jcat.BlobKind.SHA256}
         */
        get_kind(): BlobKind;
        /**
         * Gets the verification method.
         * @returns {@link Jcat.BlobMethod}, e.g. {@link Jcat.BlobMethod.SIGNATURE}
         */
        get_method(): BlobMethod;
        /**
         * Signs a chunk of data.
         * @param blob {@link GLib.Bytes}
         * @param cert {@link GLib.Bytes}
         * @param privkey {@link GLib.Bytes}
         * @param flags {@link Jcat.SignFlags}, e.g. {@link Jcat.SignFlags.ADD_TIMESTAMP}
         * @returns {@link Jcat.Blob}, or `null` for failed
         */
        pubkey_sign(
            blob: GLib.Bytes | Uint8Array,
            cert: GLib.Bytes | Uint8Array,
            privkey: GLib.Bytes | Uint8Array,
            flags: SignFlags | null,
        ): Blob;
        /**
         * Verifies a chunk of data.
         * @param blob {@link GLib.Bytes}
         * @param blob_signature {@link GLib.Bytes}
         * @param flags {@link Jcat.VerifyFlags}, e.g. {@link Jcat.VerifyFlags.DISABLE_TIME_CHECKS}
         * @returns {@link Jcat.Result}, or `null` for failed
         */
        pubkey_verify(
            blob: GLib.Bytes | Uint8Array,
            blob_signature: GLib.Bytes | Uint8Array,
            flags: VerifyFlags | null,
        ): Result;
        /**
         * Signs a chunk of data.
         * @param blob {@link GLib.Bytes}
         * @param flags {@link Jcat.SignFlags}, e.g. {@link Jcat.SignFlags.ADD_TIMESTAMP}
         * @returns {@link Jcat.Blob}, or `null` for failed
         */
        self_sign(blob: GLib.Bytes | Uint8Array, flags: SignFlags | null): Blob;
        /**
         * Verifies a chunk of data.
         * @param blob {@link GLib.Bytes}
         * @param blob_signature {@link GLib.Bytes}
         * @param flags {@link Jcat.VerifyFlags}, e.g. {@link Jcat.VerifyFlags.DISABLE_TIME_CHECKS}
         * @returns {@link Jcat.Result}, or `null` for failed
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

    /**
     * @gir-type Class
     */
    class File extends GObject.Object {
        static $gtype: GObject.GType<File>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: File.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): File;

        // Signals

        /** @signal */
        connect<K extends keyof File.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, File.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof File.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, File.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof File.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<File.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds an item to a file.
         * @param item {@link Jcat.Item}
         */
        add_item(item: Item): void;
        /**
         * Exports a Jcat file to a compressed file.
         * @param gfile #gfile
         * @param flags a {@link Jcat.ExportFlags}, typically {@link Jcat.ExportFlags.NONE}
         * @param cancellable {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        export_file(gfile: Gio.File, flags: ExportFlags | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Exports a Jcat file to raw JSON.
         * @param flags a {@link Jcat.ExportFlags}, typically {@link Jcat.ExportFlags.NONE}
         * @returns JSON output, or `null` for error
         */
        export_json(flags: ExportFlags | null): string;
        /**
         * Exports a Jcat file to a compressed stream.
         * @param ostream {@link Gio.OutputStream}
         * @param flags a {@link Jcat.ExportFlags}, typically {@link Jcat.ExportFlags.NONE}
         * @param cancellable {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        export_stream(
            ostream: Gio.OutputStream,
            flags: ExportFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Finds the item with the specified ID, falling back to the ID alias if set.
         * @param id An ID, typically a filename basename
         * @returns a {@link Jcat.Item}, or `null` if the filename was not found
         */
        get_item_by_id(id: string): Item;
        /**
         * Finds the default item. If more than one {@link Jcat.Item} exists this function will
         * return with an error.
         * @returns a {@link Jcat.Item}, or `null` if no default exists
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
         * @param flags {@link Jcat.ImportFlags}, typically {@link Jcat.ImportFlags.NONE}
         * @param cancellable {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        import_file(gfile: Gio.File, flags: ImportFlags | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Imports a Jcat file from raw JSON.
         * @param json JSON data
         * @param flags {@link Jcat.ImportFlags}, typically {@link Jcat.ImportFlags.NONE}
         * @returns `true` for success
         */
        import_json(json: string, flags: ImportFlags | null): boolean;
        /**
         * Imports a compressed Jcat file from a file.
         * @param istream {@link Gio.InputStream}
         * @param flags {@link Jcat.ImportFlags}, typically {@link Jcat.ImportFlags.NONE}
         * @param cancellable {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        import_stream(
            istream: Gio.InputStream,
            flags: ImportFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Converts the {@link Jcat.File} to a string.
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

    /**
     * @gir-type Class
     */
    class Item extends GObject.Object {
        static $gtype: GObject.GType<Item>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Item.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Item.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string): Item;

        // Signals

        /** @signal */
        connect<K extends keyof Item.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Item.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Item.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Item.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Item.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Item.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds an item alias ID. Alias IDs are matched when using functions such as
         * `jcat_file_get_item_by_id()`.
         * @param id An item ID alias, typically a file basename
         */
        add_alias_id(id: string): void;
        /**
         * Adds a new blob to the item.
         * @param blob {@link Jcat.Blob}
         */
        add_blob(blob: Blob): void;
        /**
         * Gets the list of alias IDs.
         * @returns array
         */
        get_alias_ids(): string[];
        /**
         * Gets the item blobs by a specific kind.
         * @param kind {@link Jcat.BlobKind}, e.g. {@link Jcat.BlobKind.SHA256}
         * @returns a blob, or `null`
         */
        get_blob_by_kind(kind: BlobKind | null): Blob;
        /**
         * Gets all the blobs for this item.
         * @returns blobs
         */
        get_blobs(): Blob[];
        /**
         * Gets the item blobs by a specific kind.
         * @param kind {@link Jcat.BlobKind}, e.g. {@link Jcat.BlobKind.SHA256}
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
         * `jcat_context_verify_target()` supplying some target checksums.
         * @returns `true` on success
         */
        has_target(): boolean;
        /**
         * Removes an item alias ID.
         * @param id An item ID alias, typically a file basename
         */
        remove_alias_id(id: string): void;
        /**
         * Converts the {@link Jcat.Item} to a string.
         * @returns string
         */
        to_string(): string;
    }

    namespace Result {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::authority': (pspec: GObject.ParamSpec) => void;
            'notify::engine': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            authority: string;
            engine: Engine;
            timestamp: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Result extends GObject.Object {
        static $gtype: GObject.GType<Result>;

        // Properties

        get authority(): string;
        set authority(val: string);
        /**
         * @construct-only
         */
        get engine(): Engine;
        get timestamp(): number;
        set timestamp(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Result.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Result.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Result.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Result.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Result.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Result.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Result.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Result.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the signing authority, if set.
         * @returns string, or `null`
         */
        get_authority(): string;
        /**
         * Gets the blob kind.
         * @returns {@link Jcat.BlobKind}, e.g. {@link Jcat.BlobKind.SHA256}
         */
        get_kind(): BlobKind;
        /**
         * Gets the verification kind.
         * @returns {@link Jcat.BlobMethod}, e.g. {@link Jcat.BlobMethod.SIGNATURE}
         */
        get_method(): BlobMethod;
        /**
         * Gets the signing timestamp, if set.
         * @returns UNIX timestamp, or 0 if unset
         */
        get_timestamp(): number;
        /**
         * Converts the {@link Jcat.Result} to a string.
         * @returns string
         */
        to_string(): string;
    }

    /**
     * @gir-type Alias
     */
    type BlobClass = typeof Blob;
    /**
     * @gir-type Alias
     */
    type BtCheckpointClass = typeof BtCheckpoint;
    /**
     * @gir-type Alias
     */
    type BtVerifierClass = typeof BtVerifier;
    /**
     * @gir-type Alias
     */
    type ContextClass = typeof Context;
    /**
     * @gir-type Alias
     */
    type EngineClass = typeof Engine;
    /**
     * @gir-type Alias
     */
    type FileClass = typeof File;
    /**
     * @gir-type Alias
     */
    type ItemClass = typeof Item;
    /**
     * @gir-type Alias
     */
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
