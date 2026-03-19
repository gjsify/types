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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Passim {
    /**
     * Passim-1.0
     */

    /**
     * @gir-type Enum
     */
    enum Status {
        UNKNOWN,
        STARTING,
        LOADING,
        RUNNING,
        DISABLED_METERED,
    }

    const DBUS_INTERFACE: string;
    const DBUS_PATH: string;
    const DBUS_SERVICE: string;
    /**
     * The item is not active for some reason.
     * @since 0.1.0
     */
    const ITEM_FLAG_DISABLED: number;
    /**
     * Only register the item when the machine has been rebooted.
     * @since 0.1.0
     */
    const ITEM_FLAG_NEXT_REBOOT: number;
    /**
     * No item flags are set.
     * @since 0.1.0
     */
    const ITEM_FLAG_NONE: number;
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
     * Gets the libpassim installed runtime version.
     *
     * This may be different to the *build-time* version if the daemon and library
     * objects somehow get out of sync.
     * @returns version string
     * @since 0.1.0
     */
    function version_string(): string;
    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A shared client.
     * @gir-type Class
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Client;

        // Signals

        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the carbon saving from using this project.
         * @returns kgs of CO₂e
         */
        get_carbon_saving(): number;
        /**
         * Gets the total number of bytes saved from using this project.
         * @returns bytes
         */
        get_download_saving(): number;
        /**
         * Get items currently published by the daemon.
         * @returns items, or `null` for error
         */
        get_items(): Item[];
        /**
         * Gets the daemon name.
         * @returns the name string, or `null` if unset
         */
        get_name(): string;
        /**
         * Gets the daemon status.
         * @returns the {@link Passim.Status}
         */
        get_status(): Status;
        /**
         * Gets the daemon URI.
         * @returns the URI string, or `null` if unset
         */
        get_uri(): string;
        /**
         * Gets the daemon version.
         * @returns the version string, or `null` if unset
         */
        get_version(): string;
        /**
         * Loads the client from a file on disk.
         * @returns `true` for success
         */
        load(): boolean;
        /**
         * Connects to the remote server.
         * @param item a {@link Passim.Item}
         * @returns `true` for success
         */
        publish(item: Item): boolean;
        /**
         * Unpublish a file from the index.
         * @param hash an item hash value
         * @returns `true` for success
         */
        unpublish(hash: string): boolean;
    }

    namespace Item {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A shared item.
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

        static ['new'](): Item;

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

        // Static methods

        /**
         * Converts a string to an enumerated item flag.
         * @param item_flag a string, e.g. `next-reboot`
         */
        static flag_from_string(item_flag?: string | null): ItemFlags;
        /**
         * Converts an enumerated item flag to a string.
         * @param item_flag item flags, e.g. `PASSIM_ITEM_FLAG_NEXT_REBOOT`
         */
        static flag_to_string(item_flag: ItemFlags): string;
        /**
         * Creates a new item using serialized data.
         * @param value the serialized data
         */
        static from_variant(value: GLib.Variant): Item;

        // Methods

        /**
         * Adds a specific item flag to the item.
         * @param flag the {@link Passim.ItemFlags}
         */
        add_flag(flag: ItemFlags): void;
        /**
         * Gets the current file age.
         * @returns time in seconds, or 0 for invalid.
         */
        get_age(): number;
        /**
         * Gets the basename of the file that was published.
         * @returns the test basename, or `null` if unset
         */
        get_basename(): string;
        /**
         * Gets the local bytes in the cache.
         * @returns a {@link GLib.Bytes}, or `null` if unset
         */
        get_bytes(): GLib.Bytes;
        /**
         * Gets the cmdline of the binary that published the item.
         * @returns the binary name, or `null` if unset
         */
        get_cmdline(): string;
        /**
         * Gets the creation time of the file.
         * @returns the creation time, or `null` if unset
         */
        get_ctime(): GLib.DateTime;
        /**
         * Gets the local file in the cache.
         * @returns a {@link Gio.File}, or `null` if unset
         */
        get_file(): Gio.File;
        /**
         * Gets the item flags.
         * @returns item flags, or 0 if unset
         */
        get_flags(): number;
        /**
         * Gets the item flags.
         * @returns string
         */
        get_flags_as_string(): string;
        /**
         * Gets the file hash.
         * @returns the typically in SHA-256 lowercase form, or `null` if unset
         */
        get_hash(): string;
        /**
         * Gets the maximum permitted file age.
         * @returns time in seconds
         */
        get_max_age(): number;
        /**
         * Gets the current number of times the item has been shared to other machines.
         * @returns the count, or 0 if unset
         */
        get_share_count(): number;
        /**
         * Gets the maximum number of times that the file can be shared.
         * @returns share limit, or 0 if unset
         */
        get_share_limit(): number;
        /**
         * Gets the size of the file in bytes.
         * @returns share limit, or 0 if unset
         */
        get_size(): number;
        /**
         * Gets the input stream for the item.
         * @returns a {@link Gio.InputStream}, or `null` if unset
         */
        get_stream(): Gio.InputStream;
        /**
         * Finds if the item has a specific item flag.
         * @param flag a item flag
         * @returns `true` if the flag is set
         */
        has_flag(flag: ItemFlags): boolean;
        /**
         * Loads the item from a file on disk.
         * @param filename a filename with full path
         */
        load_filename(filename: string): boolean;
        /**
         * Removes a specific item flag from the item.
         * @param flag a item flag
         */
        remove_flag(flag: ItemFlags): void;
        /**
         * Sets the basename of the file that was published.
         * @param basename the basename name
         */
        set_basename(basename?: string | null): void;
        /**
         * Sets the local bytes in the cache.
         * @param bytes a {@link GLib.Bytes}
         */
        set_bytes(bytes?: GLib.Bytes | null): void;
        /**
         * Sets the cmdline of the binary that published the item.
         *
         * NOTE: this is desgined as a hint, and should not be used for security. The command line is
         * obtained via /proc/<pid>/cmdline and it may be possible to falsify the data by a malicious
         * binary running as root under certain conditions.
         * @param cmdline the binary name
         */
        set_cmdline(cmdline?: string | null): void;
        /**
         * Sets the creation time of the file.
         * @param ctime a {@link GLib.DateTime}
         */
        set_ctime(ctime?: GLib.DateTime | null): void;
        /**
         * Sets the local file in the cache.
         * @param file a {@link Gio.File}
         */
        set_file(file?: Gio.File | null): void;
        /**
         * Sets the item flags.
         * @param flags item flags, e.g. `PASSIM_ITEM_FLAG_NEXT_REBOOT`
         */
        set_flags(flags: number): void;
        /**
         * Sets the file hash.
         * @param hash the hash, typically in SHA-256 lowercase form
         */
        set_hash(hash?: string | null): void;
        /**
         * Sets the maximum permitted file age.
         * @param max_age time in seconds
         */
        set_max_age(max_age: number): void;
        /**
         * Sets the current number of times the item has been shared to other machines.
         * @param share_count the count, or 0 to unset
         */
        set_share_count(share_count: number): void;
        /**
         * Sets the maximum number of times that the file can be shared.
         * @param share_limit the share limit, or 0
         */
        set_share_limit(share_limit: number): void;
        /**
         * Sets the size of the file in bytes.
         * @param size the share limit, or 0
         */
        set_size(size: number): void;
        /**
         * Sets the input stream stream for the item.
         *
         * NOTE: This *MUST* be a `GUnixInputStream`, or subclass thereof.
         * @param stream a {@link Gio.InputStream}
         */
        set_stream(stream?: Gio.InputStream | null): void;
        /**
         * Builds a text representation of the object.
         * @returns text, or `null` for invalid
         */
        to_string(): string;
        /**
         * Serialize the item data.
         * @returns the serialized data, or `null` for error
         */
        to_variant(): GLib.Variant;
    }

    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;
    /**
     * @gir-type Alias
     */
    type ItemClass = typeof Item;
    /**
     * Flags used to represent item attributes
     * @gir-type Alias
     */
    type ItemFlags = number;
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

export default Passim;

// END
