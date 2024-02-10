/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './passim-1.0-ambient.d.ts';
import './passim-1.0-import.d.ts';
/**
 * Passim-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Passim {
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
     */
    const ITEM_FLAG_DISABLED: number;
    /**
     * Only register the item when the machine has been rebooted.
     */
    const ITEM_FLAG_NEXT_REBOOT: number;
    /**
     * No item flags are set.
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
     */
    function version_string(): string;
    module Client {
        // Constructor properties interface
    }

    /**
     * A shared client.
     */
    class Client extends GObject.Object {
        // Constructors of Passim-1.0.Client

        static ['new'](): Client;

        // Owm methods of Passim-1.0.Client

        /**
         * Get items currently published by the daemon.
         * @returns items, or %NULL for error
         */
        get_items(): Item[];
        /**
         * Gets the daemon status.
         * @returns the #PassimStatus
         */
        get_status(): Status;
        /**
         * Gets the daemon version.
         * @returns the version string, or %NULL if unset
         */
        get_version(): string;
        /**
         * Loads the client from a file on disk.
         * @returns %TRUE for success
         */
        load(): boolean;
        /**
         * Connects to the remote server.
         * @param item a #PassimItem
         * @returns %TRUE for success
         */
        publish(item: Item): boolean;
        /**
         * Unpublish a file from the index.
         * @param hash an item hash value
         * @returns %TRUE for success
         */
        unpublish(hash: string): boolean;
    }

    module Item {
        // Constructor properties interface
    }

    /**
     * A shared item.
     */
    class Item extends GObject.Object {
        // Constructors of Passim-1.0.Item

        static ['new'](): Item;

        // Owm methods of Passim-1.0.Item

        /**
         * Converts a string to an enumerated item flag.
         * @param item_flag a string, e.g. `next-reboot`
         */
        static flag_from_string(item_flag?: string | null): ItemFlags;
        /**
         * Converts an enumerated item flag to a string.
         * @param item_flag item flags, e.g. %PASSIM_ITEM_FLAG_NEXT_REBOOT
         */
        static flag_to_string(item_flag: ItemFlags): string;
        /**
         * Creates a new item using serialized data.
         * @param value the serialized data
         */
        static from_variant(value: GLib.Variant): Item;

        // Owm methods of Passim-1.0.Item

        /**
         * Adds a specific item flag to the item.
         * @param flag the #PassimItemFlags
         */
        add_flag(flag: ItemFlags): void;
        /**
         * Gets the current file age.
         * @returns time in seconds, or 0 for invalid.
         */
        get_age(): number;
        /**
         * Gets the basename of the file that was published.
         * @returns the test basename, or %NULL if unset
         */
        get_basename(): string;
        /**
         * Gets the local bytes in the cache.
         * @returns a #GBytes, or %NULL if unset
         */
        get_bytes(): GLib.Bytes;
        /**
         * Gets the cmdline of the binary that published the item.
         * @returns the binary name, or %NULL if unset
         */
        get_cmdline(): string;
        /**
         * Gets the creation time of the file.
         * @returns the creation time, or %NULL if unset
         */
        get_ctime(): GLib.DateTime;
        /**
         * Gets the local file in the cache.
         * @returns a #GFile, or %NULL if unset
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
         * @returns the typically in SHA-256 lowercase form, or %NULL if unset
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
         * @returns a #GInputStream, or %NULL if unset
         */
        get_stream(): Gio.InputStream;
        /**
         * Finds if the item has a specific item flag.
         * @param flag a item flag
         * @returns %TRUE if the flag is set
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
         * @param bytes a #GBytes
         */
        set_bytes(bytes?: GLib.Bytes | null): void;
        /**
         * Sets the cmdline of the binary that published the item.
         *
         * NOTE: this is desgined as a hint, and should not be used for security. The command line is
         * obtained via /proc/&lt;pid&gt;/cmdline and it may be possible to falsify the data by a malicious
         * binary running as root under certain conditions.
         * @param cmdline the binary name
         */
        set_cmdline(cmdline?: string | null): void;
        /**
         * Sets the creation time of the file.
         * @param ctime a #GDateTime
         */
        set_ctime(ctime?: GLib.DateTime | null): void;
        /**
         * Sets the local file in the cache.
         * @param file a #GFile
         */
        set_file(file?: Gio.File | null): void;
        /**
         * Sets the item flags.
         * @param flags item flags, e.g. %PASSIM_ITEM_FLAG_NEXT_REBOOT
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
         * NOTE: This *MUST* be a #GUnixInputStream, or subclass thereof.
         * @param stream a #GInputStream
         */
        set_stream(stream?: Gio.InputStream | null): void;
        /**
         * Builds a text representation of the object.
         * @returns text, or %NULL for invalid
         */
        to_string(): string;
        /**
         * Serialize the item data.
         * @returns the serialized data, or %NULL for error
         */
        to_variant(): GLib.Variant;
    }

    class ClientClass {}

    class ItemClass {}

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
