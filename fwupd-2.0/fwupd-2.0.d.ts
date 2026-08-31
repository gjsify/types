
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

export namespace Fwupd {

    /**
     * Fwupd-2.0
     */


    /**
     * The type of BIOS setting.
     * @gir-type Enum
     */
    enum BiosSettingKind {
        /**
         * BIOS setting type is unknown.
         */
        UNKNOWN,
        /**
         * BIOS setting that has enumerated possible values.
         */
        ENUMERATION,
        /**
         * BIOS setting that is an integer.
         */
        INTEGER,
        /**
         * BIOS setting that accepts a string.
         */
        STRING,
    }


    /**
     * The error code.
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Internal error.
         */
        static INTERNAL: number;

        /**
         * Installed newer firmware version.
         */
        static VERSION_NEWER: number;

        /**
         * Installed same firmware version.
         */
        static VERSION_SAME: number;

        /**
         * Already set to be installed offline.
         */
        static ALREADY_PENDING: number;

        /**
         * Failed to get authentication.
         */
        static AUTH_FAILED: number;

        /**
         * Failed to read from device.
         */
        static READ: number;

        /**
         * Failed to write to the device.
         */
        static WRITE: number;

        /**
         * Invalid file format.
         */
        static INVALID_FILE: number;

        /**
         * No matching device exists.
         */
        static NOT_FOUND: number;

        /**
         * Nothing to do.
         */
        static NOTHING_TO_DO: number;

        /**
         * Action was not possible.
         */
        static NOT_SUPPORTED: number;

        /**
         * Signature was invalid.
         */
        static SIGNATURE_INVALID: number;

        /**
         * AC power was required.
         */
        static AC_POWER_REQUIRED: number;

        /**
         * Permission was denied.
         */
        static PERMISSION_DENIED: number;

        /**
         * User has configured their system in a broken way.
         */
        static BROKEN_SYSTEM: number;

        /**
         * The system battery level is too low.
         */
        static BATTERY_LEVEL_TOO_LOW: number;

        /**
         * User needs to do an action to complete the update.
         */
        static NEEDS_USER_ACTION: number;

        /**
         * Failed to get auth as credentials have expired.
         */
        static AUTH_EXPIRED: number;

        /**
         * Invalid data.
         */
        static INVALID_DATA: number;

        /**
         * The request timed out.
         */
        static TIMED_OUT: number;

        /**
         * The device is busy.
         */
        static BUSY: number;

        /**
         * The network is not reachable.
         */
        static NOT_REACHABLE: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * @gir-type Enum
     */
    enum JcatBlobKind {
        UNKNOWN,
        SHA256,
        GPG,
        PKCS7,
        SHA1,
        BT_MANIFEST,
        BT_CHECKPOINT,
        BT_INCLUSION_PROOF,
        BT_VERIFIER,
        ED25519,
        SHA512,
        BT_LOGINDEX,
    }


    /**
     * @gir-type Enum
     */
    enum JcatBlobMethod {
        UNKNOWN,
        CHECKSUM,
        SIGNATURE,
    }


    /**
     * JSON node kind.
     * @gir-type Enum
     */
    enum JsonNodeKind {
        NULL,
        RAW,
        STRING,
        ARRAY,
        OBJECT,
    }


    /**
     * The release urgency.
     * @gir-type Enum
     */
    enum ReleaseUrgency {
        /**
         * Unknown.
         */
        UNKNOWN,
        /**
         * Low.
         */
        LOW,
        /**
         * Medium.
         */
        MEDIUM,
        /**
         * High.
         */
        HIGH,
        /**
         * Critical, e.g. a security fix.
         */
        CRITICAL,
    }


    /**
     * The kind of remote.
     * @gir-type Enum
     */
    enum RemoteKind {
        /**
         * Unknown kind.
         */
        UNKNOWN,
        /**
         * Requires files to be downloaded.
         */
        DOWNLOAD,
        /**
         * Reads files from the local machine.
         */
        LOCAL,
        /**
         * Reads directory from the local machine.
         */
        DIRECTORY,
    }


    /**
     * The kind of request we are asking of the user.
     * @gir-type Enum
     */
    enum RequestKind {
        /**
         * Unknown kind.
         */
        UNKNOWN,
        /**
         * After the update.
         */
        POST,
        /**
         * Immediately.
         */
        IMMEDIATE,
    }


    /**
     * The HSI level.
     * @gir-type Enum
     */
    enum SecurityAttrLevel {
        /**
         * Very few detected firmware protections.
         */
        NONE,
        /**
         * The most basic of security protections.
         */
        CRITICAL,
        /**
         * Firmware security issues considered important.
         */
        IMPORTANT,
        /**
         * Firmware security issues that pose a theoretical concern.
         */
        THEORETICAL,
        /**
         * Out-of-band protection of the system firmware.
         */
        SYSTEM_PROTECTION,
        /**
         * Out-of-band attestation of the system firmware.
         */
        SYSTEM_ATTESTATION,
    }


    /**
     * The HSI result.
     * @gir-type Enum
     */
    enum SecurityAttrResult {
        /**
         * Not known.
         */
        UNKNOWN,
        /**
         * Enabled.
         */
        ENABLED,
        /**
         * Not enabled.
         */
        NOT_ENABLED,
        /**
         * Valid.
         */
        VALID,
        /**
         * Not valid.
         */
        NOT_VALID,
        /**
         * Locked.
         */
        LOCKED,
        /**
         * Not locked.
         */
        NOT_LOCKED,
        /**
         * Encrypted.
         */
        ENCRYPTED,
        /**
         * Not encrypted.
         */
        NOT_ENCRYPTED,
        /**
         * Tainted.
         */
        TAINTED,
        /**
         * Not tainted.
         */
        NOT_TAINTED,
        /**
         * Found.
         */
        FOUND,
        /**
         * Not found.
         */
        NOT_FOUND,
        /**
         * Supported.
         */
        SUPPORTED,
        /**
         * Not supported.
         */
        NOT_SUPPORTED,
    }


    /**
     * The flags to show daemon status.
     * @gir-type Enum
     */
    enum Status {
        /**
         * Unknown state.
         */
        UNKNOWN,
        /**
         * Idle.
         */
        IDLE,
        /**
         * Loading a resource.
         */
        LOADING,
        /**
         * Decompressing firmware.
         */
        DECOMPRESSING,
        /**
         * Restarting the device.
         */
        DEVICE_RESTART,
        /**
         * Writing to a device.
         */
        DEVICE_WRITE,
        /**
         * Verifying (reading) a device.
         */
        DEVICE_VERIFY,
        /**
         * Scheduling an update for installation on reboot.
         */
        SCHEDULING,
        /**
         * A file is downloading.
         */
        DOWNLOADING,
        /**
         * Reading from a device.
         */
        DEVICE_READ,
        /**
         * Erasing a device.
         */
        DEVICE_ERASE,
        /**
         * Waiting for authentication.
         */
        WAITING_FOR_AUTH,
        /**
         * The device is busy.
         */
        DEVICE_BUSY,
        /**
         * The daemon is shutting down.
         */
        SHUTDOWN,
        /**
         * Waiting for an interactive user action.
         */
        WAITING_FOR_USER,
    }


    /**
     * The update state.
     * @gir-type Enum
     */
    enum UpdateState {
        /**
         * Unknown.
         */
        UNKNOWN,
        /**
         * Update is pending.
         */
        PENDING,
        /**
         * Update was successful.
         */
        SUCCESS,
        /**
         * Update failed.
         */
        FAILED,
        /**
         * Waiting for a reboot to apply.
         */
        NEEDS_REBOOT,
        /**
         * Update failed due to transient issue, e.g. AC power required.
         */
        FAILED_TRANSIENT,
    }


    /**
     * The flags used when parsing version numbers.
     * If no verification is required then `PLAIN` should be used to signify an unparsable text string.
     * @gir-type Enum
     */
    enum VersionFormat {
        /**
         * Unknown version format.
         */
        UNKNOWN,
        /**
         * An unidentified format text string.
         */
        PLAIN,
        /**
         * A single integer version number.
         */
        NUMBER,
        /**
         * Two AABB.CCDD version numbers.
         */
        PAIR,
        /**
         * Microsoft-style AA.BB.CCDD version numbers.
         */
        TRIPLET,
        /**
         * UEFI-style AA.BB.CC.DD version numbers.
         */
        QUAD,
        /**
         * Binary coded decimal notation.
         */
        BCD,
        /**
         * Intel ME-style bitshifted notation.
         */
        INTEL_ME,
        /**
         * Intel ME-style A.B.CC.DDDD notation, with offset 11.
         */
        INTEL_ME2,
        /**
         * Legacy Microsoft Surface 10b.12b.10b.
         */
        SURFACE_LEGACY,
        /**
         * Microsoft Surface 8b.16b.8b.
         */
        SURFACE,
        /**
         * Dell BIOS BB.CC.DD style.
         */
        DELL_BIOS,
        /**
         * Hexadecimal 0xAABCCDD style.
         */
        HEX,
        /**
         * Dell BIOS AA.BB.CC style.
         */
        DELL_BIOS_MSB,
        /**
         * Intel ME-style bitshifted notation, with offset 19.
         */
        INTEL_CSME19,
        /**
         * Compal BIOS-style version number, as two hex bytes.
         */
        COMPAL_BIOS,
    }


    /**
     * This value signifies the battery level is either unset, or the value cannot
     * be discovered.
     */
    const BATTERY_LEVEL_INVALID: number;

    const BIOS_SETTING_DEBUG_CMD: string;

    const BIOS_SETTING_KIND_LAST: number;

    const BIOS_SETTING_PENDING_REBOOT: string;

    const BIOS_SETTING_RESET_BIOS: string;

    const BIOS_SETTING_SELF_TEST: string;

    /**
     * The dbus interface
     */
    const DBUS_INTERFACE: string;

    /**
     * The dbus path
     */
    const DBUS_PATH: string;

    /**
     * The dbus service
     */
    const DBUS_SERVICE: string;

    /**
     * Wildcard used for matching all device ids in fwupd
     */
    const DEVICE_ID_ANY: string;

    const ERROR_LAST: number;

    const JCAT_BLOB_KIND_LAST: number;

    const JCAT_BLOB_METHOD_LAST: number;

    const JSON_NODE_KIND_LAST: number;

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
     * The percentage value when the daemon does not know the current progress value. This usually
     * results in a "bouncing" progressbar.
     * @since 2.1.3
     */
    const PERCENTAGE_UNKNOWN: number;

    const RELEASE_URGENCY_LAST: number;

    const REMOTE_KIND_LAST: number;

    /**
     * Show the user a message not to unplug the machine from the AC power, e.g.
     * "Do not turn off your computer or remove the AC adaptor until you are sure the update has
     * completed."
     * 
     * Since 1.8.6
     */
    const REQUEST_ID_DO_NOT_POWER_OFF: string;

    /**
     * The user needs to insert the cable to complete the update, e.g.
     * "The update will continue when the device USB cable has been re-inserted."
     * 
     * Since 1.8.9
     */
    const REQUEST_ID_INSERT_USB_CABLE: string;

    /**
     * The user needs to press unlock on the device to continue, e.g.
     * "Press unlock on the device to continue the update process."
     * 
     * Since 1.6.2
     */
    const REQUEST_ID_PRESS_UNLOCK: string;

    /**
     * The user needs to remove and reinsert the device to complete the update, e.g.
     * "The update will continue when the device USB cable has been unplugged and then re-inserted."
     * 
     * Since 1.6.2
     */
    const REQUEST_ID_REMOVE_REPLUG: string;

    /**
     * The user needs to remove the device to complete the update, e.g.
     * "The update will continue when the device USB cable has been unplugged."
     * 
     * Since 1.8.6
     */
    const REQUEST_ID_REMOVE_USB_CABLE: string;

    /**
     * Show the user a message to replug the device and then install the firmware, e.g.
     * "Unplug and replug the device, to continue the update process."
     * 
     * Since 1.8.11
     */
    const REQUEST_ID_REPLUG_INSTALL: string;

    /**
     * Show the user a message to replug the power connector, e.g.
     * "The update will continue when the device power cable has been unplugged and then re-inserted."
     * 
     * Since 1.9.9
     */
    const REQUEST_ID_REPLUG_POWER: string;

    /**
     * Show the user a message that they need to restart the daemon, e.g.
     * "Please restart the fwupd service."
     * 
     * Since 2.0.1
     */
    const REQUEST_ID_RESTART_DAEMON: string;

    const REQUEST_KIND_LAST: number;

    const SECURITY_ATTR_LEVEL_LAST: number;

    const SECURITY_ATTR_RESULT_LAST: number;

    const STATUS_LAST: number;

    const UPDATE_STATE_LAST: number;

    const VERSION_FORMAT_LAST: number;

    /**
     * Formats a checksum for display.
     * @param checksum a checksum
     * @returns text, or `null` for invalid
     * @since 0.9.3
     */
    function checksum_format_for_display(checksum: string | null): string;

    /**
     * Gets the best possible checksum kind.
     * @param checksums checksums
     * @returns a checksum from the array, or `null` if nothing was suitable
     * @since 0.9.4
     */
    function checksum_get_best(checksums: string[]): string;

    /**
     * Gets a specific checksum kind.
     * @param checksums checksums
     * @param kind a checksum type, e.g. {@link GLib.ChecksumType.SHA512}
     * @returns a checksum from the array, or `null` if not found
     * @since 0.9.4
     */
    function checksum_get_by_kind(checksums: string[], kind: GLib.ChecksumType): string;

    /**
     * Guesses the checksum kind based on the length of the hash.
     * @param checksum a checksum
     * @returns a checksum type, e.g. {@link GLib.ChecksumType.SHA1}
     * @since 0.9.3
     */
    function checksum_guess_kind(checksum: string | null): GLib.ChecksumType;

    /**
     * Formats a checksum type for display.
     * @param checksum_type a {@link GLib.ChecksumType}, e.g. {@link GLib.ChecksumType.SHA1}
     * @returns text, or `null` for invalid
     * @since 1.9.6
     */
    function checksum_type_to_string_display(checksum_type: GLib.ChecksumType): string;

    /**
     * Converts an array of objects, each deserialized from a {@link GLib.Variant} value.
     * @param value a JSON node
     * @param gtype a {@link GObject.GType} that implements {@link Fwupd.Codec}
     * @returns `true` on success
     * @since 2.0.0
     */
    function codec_array_from_variant(value: GLib.Variant, gtype: GObject.GType): GObject.Object[];

    /**
     * Converts an array of objects into a {@link GLib.Variant} value.
     * @param array (not nullable): array of objects that much implement {@link Fwupd.Codec}
     * @param member_name member name of the array
     * @param json_obj a {@link Fwupd.JsonObject}
     * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
     * @since 2.0.0
     */
    function codec_array_to_json(array: GObject.Object[], member_name: string, json_obj: JsonObject, flags: CodecFlags): void;

    /**
     * Converts an array of objects into a {@link GLib.Variant} value.
     * @param array (not nullable): array of objects that much implement {@link Fwupd.Codec}
     * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
     * @returns a {@link GLib.Variant}
     * @since 2.0.0
     */
    function codec_array_to_variant(array: GObject.Object[], flags: CodecFlags): GLib.Variant;

    /**
     * Appends a key and value to a JSON object.
     * 
     * Deprecated for `fwupd_json_object_add_string()`.
     * @param json_obj a {@link Fwupd.JsonObject}
     * @param key a string
     * @param value a string to append
     * @since 2.0.0
     * @deprecated since 2.1.1
     */
    function codec_json_append(json_obj: JsonObject, key: string, value: string): void;

    /**
     * Appends a key and boolean value to a JSON object.
     * 
     * Deprecated for `fwupd_json_object_add_boolean()`.
     * @param json_obj a {@link Fwupd.JsonObject}
     * @param key a string
     * @param value boolean
     * @since 2.0.0
     * @deprecated since 2.1.1
     */
    function codec_json_append_bool(json_obj: JsonObject, key: string, value: boolean): void;

    /**
     * Appends a key and unsigned integer to a JSON object.
     * 
     * Deprecated for `fwupd_json_object_add_integer()`.
     * @param json_obj a {@link Fwupd.JsonObject}
     * @param key a string
     * @param value guint64
     * @since 2.0.0
     * @deprecated since 2.1.1
     */
    function codec_json_append_int(json_obj: JsonObject, key: string, value: bigint | number): void;

    /**
     * Appends a key and string hash map to a JSON object.
     * 
     * Deprecated for `fwupd_json_object_add_object_map()`.
     * @param json_obj a {@link Fwupd.JsonObject}
     * @param key a string
     * @param value a hash table
     * @since 2.0.10
     * @deprecated since 2.1.1
     */
    function codec_json_append_map(json_obj: JsonObject, key: string, value: { [key: string]: string }): void;

    /**
     * Appends a key and string array to a JSON object.
     * 
     * Deprecated for `fwupd_json_object_add_array_strv()`.
     * @param json_obj a {@link Fwupd.JsonObject}
     * @param key a string
     * @param value a {@link GObject.Strv}
     * @since 2.0.0
     * @deprecated since 2.1.1
     */
    function codec_json_append_strv(json_obj: JsonObject, key: string, value: string): void;

    /**
     * Appends a key and value to a string.
     * @param str a {@link GLib.String}
     * @param idt the indent
     * @param key a string to append
     * @param value a string to append
     * @since 2.0.0
     */
    function codec_string_append(str: GLib.String, idt: number, key: string, value: string): void;

    /**
     * Appends a key and boolean value to a string.
     * @param str a {@link GLib.String}
     * @param idt the indent
     * @param key a string to append
     * @param value Boolean
     * @since 2.0.0
     */
    function codec_string_append_bool(str: GLib.String, idt: number, key: string, value: boolean): void;

    /**
     * Appends a key and hex integer to a string.
     * @param str a {@link GLib.String}
     * @param idt the indent
     * @param key a string to append
     * @param value guint64
     * @since 2.0.0
     */
    function codec_string_append_hex(str: GLib.String, idt: number, key: string, value: bigint | number): void;

    /**
     * Appends a key and unsigned integer to a string.
     * @param str a {@link GLib.String}
     * @param idt the indent
     * @param key a string to append
     * @param value guint64
     * @since 2.0.0
     */
    function codec_string_append_int(str: GLib.String, idt: number, key: string, value: bigint | number): void;

    /**
     * Appends a key and size in bytes to a string.
     * @param str a {@link GLib.String}
     * @param idt the indent
     * @param key a string to append
     * @param value guint64
     * @since 2.0.0
     */
    function codec_string_append_size(str: GLib.String, idt: number, key: string, value: bigint | number): void;

    /**
     * Appends a key and time value to a string.
     * @param str a {@link GLib.String}
     * @param idt the indent
     * @param key a string to append
     * @param value guint64 UNIX time
     * @since 2.0.0
     */
    function codec_string_append_time(str: GLib.String, idt: number, key: string, value: bigint | number): void;

    /**
     * Convert the error to a {@link Fwupd.Error}, if required.
     * @since 2.0.0
     */
    function error_convert(): void;

    /**
     * Converts a string to an enumerated error.
     * @param error a string, e.g. `org.freedesktop.fwupd.VersionNewer`
     * @returns enumerated value
     * @since 0.7.0
     */
    function error_from_string(error: string | null): Error;

    /**
     * An error quark.
     * @returns an error quark
     * @since 0.1.1
     */
    function error_quark(): GLib.Quark;

    /**
     * Converts an enumerated error to a string.
     * @param error an enumerated error, e.g. {@link Fwupd.Error.VERSION_NEWER}
     * @returns identifier string
     * @since 0.7.0
     */
    function error_to_string(error: Error): string;

    /**
     * Converts a string to an enumerated value.
     * @param val a string, e.g. `can-report`
     * @returns enumerated value
     * @since 1.4.5
     */
    function feature_flag_from_string(val: string | null): FeatureFlags;

    /**
     * Converts an enumerated value to a string.
     * @param val value, e.g. {@link Fwupd.FeatureFlags.CAN_REPORT}
     * @returns identifier string
     * @since 1.4.5
     */
    function feature_flag_to_string(val: FeatureFlags): string;

    /**
     * Converts a string GUID into its binary encoding. All string GUIDs are
     * formatted as big endian but on-disk can be encoded in different ways.
     * @param guidstr a GUID, e.g. `00112233-4455-6677-8899-aabbccddeeff`
     * @param guid a {@link Fwupd._guid_t}, or NULL to just check the GUID
     * @param flags GUID flags, e.g. {@link Fwupd.GuidFlags.MIXED_ENDIAN}
     * @returns `true` for success
     * @since 1.2.5
     */
    function guid_from_string(guidstr: string, guid: number | null, flags: GuidFlags): boolean;

    /**
     * Returns a GUID for some data. This uses a hash and so even small
     * differences in the `data` will produce radically different return values.
     * 
     * The implementation is taken from RFC4122, Section 4.1.3; specifically
     * using a type-5 SHA-1 hash.
     * @param data data to hash
     * @param datasz length of `data`
     * @param flags GUID flags, e.g. {@link Fwupd.GuidFlags.NAMESPACE_MICROSOFT}
     * @returns a new GUID, or `null` for internal error
     * @since 1.2.5
     */
    function guid_hash_data(data: number, datasz: bigint | number, flags: GuidFlags): string;

    /**
     * Returns a GUID for a given string. This uses a hash and so even small
     * differences in the `str` will produce radically different return values.
     * 
     * The default implementation is taken from RFC4122, Section 4.1.3; specifically
     * using a type-5 SHA-1 hash with a DNS namespace.
     * The same result can be obtained with this simple python program:
     * 
     *    #!/usr/bin/python
     *    import uuid
     *    print uuid.uuid5(uuid.NAMESPACE_DNS, 'python.org')
     * @param str a source string to use as a key
     * @returns a new GUID, or `null` if the string was invalid
     * @since 1.2.5
     */
    function guid_hash_string(str: string | null): string;

    /**
     * Checks the string is a valid GUID.
     * @param guid string to check, e.g. `00112233-4455-6677-8899-aabbccddeeff`
     * @returns `true` if `guid` was a valid GUID, `false` otherwise
     * @since 1.2.5
     */
    function guid_is_valid(guid: string): boolean;

    /**
     * Returns a text GUID of mixed or BE endian for a packed buffer.
     * @param guid a {@link Fwupd._guid_t} to read
     * @param flags GUID flags, e.g. {@link Fwupd.GuidFlags.MIXED_ENDIAN}
     * @returns a new GUID string
     * @since 1.2.5
     */
    function guid_to_string(guid: number, flags: GuidFlags): string;

    /**
     * Converts a string to an enumerated value.
     * @param val a string, e.g. `allow-reinstall`
     * @returns enumerated value
     * @since 2.0.4
     */
    function install_flags_from_string(val: string | null): InstallFlags;

    /**
     * Converts an enumerated value to a string.
     * @param val value, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
     * @returns identifier string
     * @since 2.0.0
     */
    function install_flags_to_string(val: InstallFlags): string;

    /**
     * Converts an enumerated value to a string.
     * @param val value, e.g. {@link Fwupd.JsonNodeKind.RAW}
     * @returns identifier string
     * @since 2.1.1
     */
    function json_node_kind_to_string(val: JsonNodeKind): string;

    /**
     * Calculates if a percentage change is significant, and worth notifying the client about.
     * @param value_old a percentage value
     * @param value_new another percentage value
     * @returns `true` for success
     * @since 2.1.3
     */
    function percentage_delta_notify(value_old: number, value_new: number): boolean;

    /**
     * Calculates is a percentage value is valid, i.e. `>= 0.0` and `<= 100.0`.
     * @param value maybe a percentage value
     * @returns `true` for success
     * @since 2.1.3
     */
    function percentage_is_valid(value: number): boolean;

    /**
     * Converts a string to an enumerated value.
     * @param val a string, e.g. `idle`
     * @returns enumerated value
     * @since 0.1.1
     */
    function status_from_string(val: string | null): Status;

    /**
     * Converts an enumerated value to a string.
     * @param val value, e.g. {@link Fwupd.Status.IDLE}
     * @returns identifier string
     * @since 0.1.1
     */
    function status_to_string(val: Status): string;

    /**
     * Returns an untranslated string corresponding to the given error code, e.g. “no such process”.
     * @param errnum 
     * @returns string describing the error code
     * @since 2.0.11
     */
    function strerror(errnum: number): string;

    /**
     * Converts a string to an enumerated value.
     * @param val a string, e.g. `pending`
     * @returns enumerated value
     * @since 0.7.0
     */
    function update_state_from_string(val: string | null): UpdateState;

    /**
     * Converts an enumerated value to a string.
     * @param val value, e.g. {@link Fwupd.UpdateState.PENDING}
     * @returns identifier string
     * @since 0.7.0
     */
    function update_state_to_string(val: UpdateState): string;

    /**
     * Gets a boolean value from a variant.
     * @param value a {@link GLib.Variant}
     * @returns boolean, or `false` if not valid
     * @since 2.1.4
     */
    function variant_get_boolean(value: GLib.Variant): boolean;

    /**
     * Gets a double from a variant.
     * @param value a {@link GLib.Variant}
     * @returns double, or -1.0 if not valid
     * @since 2.1.4
     */
    function variant_get_double(value: GLib.Variant): number;

    /**
     * Gets an signed integer from a variant.
     * @param value a {@link GLib.Variant}
     * @returns integer, or 0 if not valid
     * @since 2.1.4
     */
    function variant_get_int32(value: GLib.Variant): number;

    /**
     * Gets a string value from a variant.
     * @param value a {@link GLib.Variant}
     * @returns string, or `null` if not valid
     * @since 2.1.4
     */
    function variant_get_string(value: GLib.Variant): string;

    /**
     * Gets an array of strings from a variant.
     * @param value a {@link GLib.Variant}
     * @returns An array of constant strings
     * @since 2.1.4
     */
    function variant_get_strv(value: GLib.Variant): string[];

    /**
     * Gets an unsigned integer from a variant, handling both 'u' and 'i' types.
     * @param value a {@link GLib.Variant}
     * @returns integer, or 0 if not valid
     * @since 2.1.4
     */
    function variant_get_uint32(value: GLib.Variant): number;

    /**
     * Gets an unsigned integer from a variant, handling both 't' and 'x' types.
     * @param value a {@link GLib.Variant}
     * @returns integer, or 0 if not valid
     * @since 2.1.4
     */
    function variant_get_uint64(value: GLib.Variant): number;

    /**
     * Converts a string to an enumerated value.
     * @param val a string, e.g. `plain`
     * @returns enumerated value
     * @since 1.2.9
     */
    function version_format_from_string(val: string | null): VersionFormat;

    /**
     * Converts an enumerated value to a string.
     * @param val value, e.g. {@link Fwupd.VersionFormat.PLAIN}
     * @returns identifier string
     * @since 1.2.9
     */
    function version_format_to_string(val: VersionFormat): string;

    /**
     * Gets the libfwupd installed runtime version.
     * 
     * This may be different to the *build-time* version if the daemon and library
     * objects somehow get out of sync.
     * @returns version string
     * @since 1.6.1
     */
    function version_string(): string;

    /**
     * The options to use for downloading.
     * @gir-type Flags
     */
    enum ClientDownloadFlags {
        /**
         * No flags set.
         */
        NONE,
        /**
         * Only use peer-to-peer when downloading URIs.
         */
        ONLY_P2P,
    }


    /**
     * The options to use for uploading.
     * @gir-type Flags
     */
    enum ClientUploadFlags {
        /**
         * No flags set.
         */
        NONE,
        /**
         * Always use multipart/form-data.
         */
        ALWAYS_MULTIPART,
    }


    /**
     * The flags to use when converting data from one form to another.
     * @gir-type Flags
     */
    enum CodecFlags {
        /**
         * No flags set.
         */
        NONE,
        /**
         * Include values that may be regarded as trusted or sensitive.
         */
        TRUSTED,
        /**
         * Compress values to the smallest possible size.
         */
        COMPRESSED,
        /**
         * Do not include timestamps.
         */
        NO_TIMESTAMP,
    }


    /**
     * Flags used to represent device attributes
     * @gir-type Flags
     */
    enum DeviceFlags {
        /**
         * No flags set
         */
        NONE,
        /**
         * Device is internal to the platform and cannot be removed easily.
         */
        INTERNAL,
        /**
         * Device has the ability to be updated in this or any other mode.
         */
        UPDATABLE,
        /**
         * Device requires an external power source to be connected or the battery
         * level at a minimum threshold to update.
         */
        REQUIRE_AC,
        /**
         * The device can not be updated without manual user interaction.
         */
        LOCKED,
        /**
         * The device is found in metadata loaded into the daemon.
         */
        SUPPORTED,
        /**
         * The device requires entering a bootloader mode to be updated.
         */
        NEEDS_BOOTLOADER,
        /**
         * The device requires a system reboot to apply firmware or to reload hardware.
         */
        NEEDS_REBOOT,
        /**
         * The success or failure of a previous update has been reported to a metadata server.
         */
        REPORTED,
        /**
         * The user has been notified about a change in the device state.
         */
        NOTIFIED,
        /**
         * The device is currently in a read-only bootloader mode and not running application code.
         */
        IS_BOOTLOADER,
        /**
         * The device is in the middle of an update and the hardware is waiting to be probed or
         * replugged.
         */
        WAIT_FOR_REPLUG,
        /**
         * The device requires the system to be shutdown to finish application of new firmware.
         */
        NEEDS_SHUTDOWN,
        /**
         * The device requires the update to be retried, possibly with a different plugin.
         */
        ANOTHER_WRITE_REQUIRED,
        /**
         * The device update needs to be separately activated.
         * This process may occur automatically on shutdown in some operating systems or when the
         * device is unplugged with some devices.
         */
        NEEDS_ACTIVATION,
        /**
         * The device is used for historical data only.
         */
        HISTORICAL,
        /**
         * The device will disappear after the update is complete and success or failure can't be
         * verified.
         */
        WILL_DISAPPEAR,
        /**
         * The device checksums can be compared against metadata.
         */
        CAN_VERIFY,
        /**
         * The device application firmware image can be dumped from device for verification.
         */
        CAN_VERIFY_IMAGE,
        /**
         * The device firmware update architecture uses a redundancy mechanism such as A/B
         * partitions for updates.
         */
        DUAL_IMAGE,
        /**
         * In flashing mode, the device will only accept intended payloads and will revert back to
         * a valid firmware image if an invalid or incomplete payload was sent.
         */
        SELF_RECOVERY,
        /**
         * The device remains usable while the update flashes or schedules the update.
         * The update will implicitly be applied next time the device is power cycled or possibly
         * activated.
         */
        USABLE_DURING_UPDATE,
        /**
         * All firmware updates for this device require a firmware version check.
         */
        VERSION_CHECK_REQUIRED,
        /**
         * Install each intermediate releases for the device rather than jumping directly to the
         * newest.
         */
        INSTALL_ALL_RELEASES,
        /**
         * The device is updatable but is currently inhibited from updates in the client.
         * Reasons include but are not limited to low power or requiring reboot from a previous
         * update.
         */
        UPDATABLE_HIDDEN,
        /**
         * The device supports switching to a different stream of firmware.
         */
        HAS_MULTIPLE_BRANCHES,
        /**
         * The device firmware should be saved before installing firmware.
         */
        BACKUP_BEFORE_INSTALL,
        /**
         * All devices with matching GUIDs will be updated at the same time.
         * For some devices it is not possible to have different versions of firmware
         * for hardware of the same type. Updating one device will force update of
         * others with exactly the same instance IDs.
         */
        WILDCARD_INSTALL,
        /**
         * The device firmware can only be updated to a newer version and never downgraded or
         * reinstalled.
         */
        ONLY_VERSION_UPGRADE,
        /**
         * The device is currently unreachable, perhaps because it is in a lower power state or is
         * out of wireless range.
         */
        UNREACHABLE,
        /**
         * The device is warning that a volume with full-disk-encryption was found on this machine,
         * typically a Windows NTFS partition with BitLocker.
         * Updating the firmware on this device may invalidate secrets used to decrypt the volume,
         * and the recovery key may be required.
         * Supported clients will display this information as a warning to the user.
         */
        AFFECTS_FDE,
        /**
         * The device is no longer supported by the original hardware vendor as it is considered
         * end-of-life. It is unlikely to receive firmware updates, even for security issues.
         */
        END_OF_LIFE,
        /**
         * The firmware payload is verified on-device using strong cryptography such
         * as RSA, AES or ECC.
         * It is usually not possible to modify or flash custom firmware not provided by the vendor.
         */
        SIGNED_PAYLOAD,
        /**
         * The firmware payload is unsigned and it is possible to modify and flash custom firmware.
         */
        UNSIGNED_PAYLOAD,
        /**
         * The device is emulated and should not be recorded by the backend.
         */
        EMULATED,
        /**
         * The device should be recorded by the backend, allowing emulation.
         */
        EMULATION_TAG,
        /**
         * The device should stay on one firmware version unless the new version is explicitly
         * specified.
         * This can either be done using `fwupdmgr install`, using GNOME Firmware, or using a BKC
         * config.
         */
        ONLY_EXPLICIT_UPDATES,
        /**
         * The device can be recorded by the backend, allowing emulation.
         */
        CAN_EMULATION_TAG,
        /**
         * The device doesn't require verification of the newly installed version.
         */
        INSTALL_SKIP_VERSION_CHECK,
        /**
         * This flag is not defined, this typically will happen from mismatched fwupd library and
         * clients.
         */
        UNKNOWN,
    }


    /**
     * Problems are reasons why the device is not updatable.
     * All problems have to be fixable by the user, rather than the plugin author.
     * @gir-type Flags
     */
    enum DeviceProblem {
        /**
         * No device problems detected.
         */
        NONE,
        /**
         * The system power is too low to perform the update.
         */
        SYSTEM_POWER_TOO_LOW,
        /**
         * The device is unreachable, or out of wireless range.
         */
        UNREACHABLE,
        /**
         * The device battery power is too low.
         */
        POWER_TOO_LOW,
        /**
         * The device is waiting for the update to be applied.
         */
        UPDATE_PENDING,
        /**
         * The device requires AC power to be connected.
         */
        REQUIRE_AC_POWER,
        /**
         * The device cannot be used while the laptop lid is closed.
         */
        LID_IS_CLOSED,
        /**
         * The device is emulated from a different host.
         */
        IS_EMULATED,
        /**
         * The device cannot be updated due to missing vendor's license.
         */
        MISSING_LICENSE,
        /**
         * The device cannot be updated due to a system-wide inhibit.
         */
        SYSTEM_INHIBIT,
        /**
         * The device cannot be updated as it is already being updated.
         */
        UPDATE_IN_PROGRESS,
        /**
         * The device is in use and cannot be interrupted, for instance taking a phone call.
         */
        IN_USE,
        /**
         * The device cannot be used while there are no displays plugged in.
         */
        DISPLAY_REQUIRED,
        /**
         * We have two ways of communicating with one physical device, so we hide the worse one.
         */
        LOWER_PRIORITY,
        /**
         * The device is signed with an insecure key
         */
        INSECURE_PLATFORM,
        /**
         * The firmware is locked in the system setup.
         */
        FIRMWARE_LOCKED,
        /**
         * This problem is not defined, this typically will happen from mismatched
         * fwupd library and clients.
         */
        UNKNOWN,
    }


    /**
     * The flags to the feature capabilities of the front-end client.
     * @gir-type Flags
     */
    enum FeatureFlags {
        /**
         * No trust.
         */
        NONE,
        /**
         * Can upload a report of the update back to the server.
         */
        CAN_REPORT,
        /**
         * Can perform detach action, typically showing text.
         */
        DETACH_ACTION,
        /**
         * Can perform update action, typically showing text.
         */
        UPDATE_ACTION,
        /**
         * Can switch the firmware branch.
         */
        SWITCH_BRANCH,
        /**
         * Can show interactive requests.
         */
        REQUESTS,
        /**
         * Can warn about full disk encryption.
         */
        FDE_WARNING,
        /**
         * Can show information about community supported.
         */
        COMMUNITY_TEXT,
        /**
         * Can show problems when getting the update list.
         */
        SHOW_PROBLEMS,
        /**
         * Can authenticate with PolicyKit for requests.
         */
        ALLOW_AUTHENTICATION,
        /**
         * Can handle showing non-generic request message text.
         */
        REQUESTS_NON_GENERIC,
        /**
         * Unknown flag.
         */
        UNKNOWN,
    }


    /**
     * The flags to show how the data should be converted.
     * @gir-type Flags
     */
    enum GuidFlags {
        /**
         * No endian swapping.
         */
        NONE,
        /**
         * Use the Microsoft-compatible namespace.
         */
        NAMESPACE_MICROSOFT,
        /**
         * Use EFI mixed endian representation, as used in EFI.
         */
        MIXED_ENDIAN,
    }


    /**
     * Flags to set when performing the firmware update or install.
     * @gir-type Flags
     */
    enum InstallFlags {
        /**
         * No flags set.
         */
        NONE,
        /**
         * Allow reinstalling the same version.
         */
        ALLOW_REINSTALL,
        /**
         * Allow downgrading firmware.
         */
        ALLOW_OLDER,
        /**
         * Force the update even if not a good idea.
         */
        FORCE,
        /**
         * Do not write to the history database.
         */
        NO_HISTORY,
        /**
         * Allow firmware branch switching.
         */
        ALLOW_BRANCH_SWITCH,
        /**
         * This is now unused; see `FuFirmwareParseFlags`.
         */
        IGNORE_CHECKSUM,
        /**
         * This is now unused; see `FuFirmwareParseFlags`.
         */
        IGNORE_VID_PID,
        /**
         * This is now only for internal use.
         */
        NO_SEARCH,
        /**
         * Ignore version requirement checks.
         */
        IGNORE_REQUIREMENTS,
        /**
         * Only install to emulated devices.
         */
        ONLY_EMULATED,
        /**
         * Unknown flag
         */
        UNKNOWN,
    }


    /**
     * @gir-type Flags
     */
    enum JcatBlobFlags {
        NONE,
        IS_UTF8,
    }


    /**
     * JSON export flags.
     * @gir-type Flags
     */
    enum JsonExportFlags {
        NONE,
        INDENT,
        TRAILING_NEWLINE,
    }


    /**
     * JSON load flags.
     * @gir-type Flags
     */
    enum JsonLoadFlags {
        NONE,
        TRUSTED,
        STATIC_KEYS,
    }


    /**
     * Flags used to represent plugin attributes
     * @gir-type Flags
     */
    enum PluginFlags {
        /**
         * No plugin flags are set.
         */
        NONE,
        /**
         * The plugin has been disabled, either by daemon configuration or a problem.
         */
        DISABLED,
        /**
         * The plugin has a problem and would like to show a user warning to a supported client.
         */
        USER_WARNING,
        /**
         * When the plugin loads it should clear the UPDATABLE flag from any devices.
         * This typically happens when the device requires a system restart.
         */
        CLEAR_UPDATABLE,
        /**
         * The plugin won't load because no supported hardware was found.
         * This typically happens with plugins designed for a specific platform design
         * = such as the dell plugin only works on Dell systems,.
         */
        NO_HARDWARE,
        /**
         * The plugin discovered that UEFI UpdateCapsule are unsupported.
         * Supported clients will display this information to a user.
         */
        CAPSULES_UNSUPPORTED,
        /**
         * The plugin discovered that hardware unlock is required.
         * Supported clients will display this information to a user.
         */
        UNLOCK_REQUIRED,
        /**
         * The plugin discovered the efivar filesystem is not found and is required for this plugin.
         * Supported clients will display this information to a user.
         */
        EFIVAR_NOT_MOUNTED,
        /**
         * The plugins discovered that the EFI system partition was not found.
         * Supported clients will display this information to a user.
         */
        ESP_NOT_FOUND,
        /**
         * The plugin discovered the system is running in legacy CSM mode.
         * Supported clients will display this information to a user.
         */
        LEGACY_BIOS,
        /**
         * Failed to open plugin = missing dependency,.
         * Supported clients will display this information to a user.
         */
        FAILED_OPEN,
        /**
         * A specific HWID is required to use this plugin.
         */
        REQUIRE_HWID,
        /**
         * The feature is not supported as the kernel is too old.
         */
        KERNEL_TOO_OLD,
        /**
         * The plugin requires the user to provide authentication details.
         * Supported clients will display this information to a user.
         */
        AUTH_REQUIRED,
        /**
         * The plugin requires the config file to be saved with permissions that only allow the
         * root user to read.
         */
        SECURE_CONFIG,
        /**
         * The plugin is loaded from an external module.
         */
        MODULAR,
        /**
         * The plugin will be checked that it preserves system state such as `KEK`, `PK`,
         * `BOOT####` etc.
         */
        MEASURE_SYSTEM_INTEGRITY,
        /**
         * The plugins discovered that the EFI system partition may not be valid.
         * Supported clients will display this information to a user.
         */
        ESP_NOT_VALID,
        /**
         * The plugin is ready for use and all devices have been coldplugged.
         */
        READY,
        /**
         * The plugin is used for virtual devices that exercise daemon flows.
         */
        TEST_ONLY,
        /**
         * Some devices supported by the plugin may cause a device to momentarily
         * stop working while probing.
         */
        MUTABLE_ENUMERATION,
        /**
         * The plugin flag is unknown.
         * This is usually caused by a mismatched libfwupdplugin and daemon.
         */
        UNKNOWN,
    }


    /**
     * Flags used to represent release attributes
     * @gir-type Flags
     */
    enum ReleaseFlags {
        /**
         * No flags are set.
         */
        NONE,
        /**
         * The payload binary is trusted.
         */
        TRUSTED_PAYLOAD,
        /**
         * The payload metadata is trusted.
         */
        TRUSTED_METADATA,
        /**
         * The release is newer than the device version.
         */
        IS_UPGRADE,
        /**
         * The release is older than the device version.
         */
        IS_DOWNGRADE,
        /**
         * The installation of the release is blocked as below device version-lowest.
         */
        BLOCKED_VERSION,
        /**
         * The installation of the release is blocked as release not approved by an administrator.
         */
        BLOCKED_APPROVAL,
        /**
         * The release is an alternate branch of firmware.
         */
        IS_ALTERNATE_BRANCH,
        /**
         * The release is supported by the community and not the hardware vendor.
         */
        IS_COMMUNITY,
        /**
         * The payload has been tested by a report we trust.
         */
        TRUSTED_REPORT,
        /**
         * The release flag is unknown, typically caused by using mismatched client and daemon.
         */
        UNKNOWN,
    }


    /**
     * The flags available for the remote.
     * @gir-type Flags
     */
    enum RemoteFlags {
        /**
         * No flags set.
         */
        NONE,
        /**
         * Is enabled.
         */
        ENABLED,
        /**
         * Requires approval for each firmware.
         */
        APPROVAL_REQUIRED,
        /**
         * Send firmware reports automatically.
         */
        AUTOMATIC_REPORTS,
        /**
         * Send security reports automatically.
         */
        AUTOMATIC_SECURITY_REPORTS,
        /**
         * Use peer-to-peer locations for metadata.
         */
        ALLOW_P2P_METADATA,
        /**
         * Use peer-to-peer locations for firmware.
         */
        ALLOW_P2P_FIRMWARE,
        /**
         * Do not slow deployment using phased updates.
         */
        NO_PHASED_UPDATES,
        /**
         * A username and/or password is required
         */
        REQUIRES_AUTH,
    }


    /**
     * Flags used to represent report attributes
     * @gir-type Flags
     */
    enum ReportFlags {
        /**
         * No report flags are set.
         */
        NONE,
        /**
         * Report was generated by the OEM.
         */
        FROM_OEM,
        /**
         * New firmware was newer than the old firmware.
         */
        IS_UPGRADE,
        /**
         * The report flag is unknown.
         * This is usually caused by a mismatched libfwupdplugin and daemon.
         */
        UNKNOWN,
    }


    /**
     * Flags used to represent request attributes
     * @gir-type Flags
     */
    enum RequestFlags {
        /**
         * No flags are set.
         */
        NONE,
        /**
         * Use a generic (translated) request message.
         */
        ALLOW_GENERIC_MESSAGE,
        /**
         * Use a generic (translated) request image.
         */
        ALLOW_GENERIC_IMAGE,
        /**
         * Device requires a non-generic interaction with custom non-translatable text.
         */
        NON_GENERIC_MESSAGE,
        /**
         * Device requires to show the user a custom image for the action to make sense.
         */
        NON_GENERIC_IMAGE,
        /**
         * The request flag is unknown, typically caused by using mismatched client and daemon.
         */
        UNKNOWN,
    }


    /**
     * The flags available for HSI attributes.
     * @gir-type Flags
     */
    enum SecurityAttrFlags {
        /**
         * No flags set.
         */
        NONE,
        /**
         * Success.
         */
        SUCCESS,
        /**
         * Obsoleted by another attribute.
         */
        OBSOLETED,
        /**
         * Missing data.
         */
        MISSING_DATA,
        /**
         * Suffix `U`.
         */
        RUNTIME_UPDATES,
        /**
         * Suffix `A`.
         */
        RUNTIME_ATTESTATION,
        /**
         * Suffix `!`.
         */
        RUNTIME_ISSUE,
        /**
         * Contact the firmware vendor for an update.
         */
        ACTION_CONTACT_OEM,
        /**
         * Failure may be fixed by changing FW config.
         */
        ACTION_CONFIG_FW,
        /**
         * Failure may be fixed by changing OS config.
         */
        ACTION_CONFIG_OS,
        /**
         * The failure can be automatically fixed.
         */
        CAN_FIX,
        /**
         * The fix can be automatically reverted.
         */
        CAN_UNDO,
    }


    /**
     * FwupdSelfSignFlags:
     * Flags to set when performing the firmware update or install.
     * @gir-type Flags
     */
    enum SelfSignFlags {
        /**
         * No flags set.
         */
        NONE,
        /**
         * Add the timestamp to the detached signature.
         */
        ADD_TIMESTAMP,
        /**
         * Add the certificate to the detached signature.
         */
        ADD_CERT,
        /**
         * Unknown flag
         */
        UNKNOWN,
    }


    namespace BiosSetting {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Codec.ConstructorProps {}
    }

    /**
     * A BIOS setting that represents a setting in the firmware.
     * @gir-type Class
     */
    class BiosSetting extends GObject.Object implements Codec {
        static $gtype: GObject.GType<BiosSetting>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BiosSetting.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BiosSetting.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string | null, path: string | null): BiosSetting;

        // Signals
        /** @signal */
        connect<K extends keyof BiosSetting.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BiosSetting.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BiosSetting.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BiosSetting.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BiosSetting.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BiosSetting.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_read_value(): string;

        /**
         * Writes a new value into the setting if it is different from the current value.
         * 
         * If `fwupd_bios_setting_add_possible_value_full()` was used then the display value is automatically
         * mapped to the raw value before being written.
         * 
         * NOTE: A subclass should handle the `->write_value()` vfunc and actually write the value to the
         * firmware.
         * @param value The string to write
         * @since 1.9.4
         * @virtual
         */
        vfunc_write_value(value: string): boolean;

        // Methods
        /**
         * Adds a possible value to the attribute.  This indicates one of the values the
         * kernel driver will accept from userspace.
         * @param possible_value the possible
         * @since 1.8.4
         */
        add_possible_value(possible_value: string): void;

        /**
         * Adds a possible value to the attribute that is automatically mapped to a raw value.
         * 
         * The raw value will be used in the `class->write_value` vfunc.
         * @param possible_value the possible value that we show the user, e.g. `Disabled`
         * @param possible_value_raw the possible value that we send the hardware, e.g. `0`
         * @since 2.1.6
         */
        add_possible_value_full(possible_value: string, possible_value_raw: string): void;

        /**
         * Gets the vendor-neutral fwupd AppStream identifier for this setting,
         * e.g. `org.fwupd.bios.secure-boot`.
         * 
         * This is a registered identifier documented by fwupd that allows software to
         * treat the same conceptual setting consistently even though vendors name and
         * value it differently.
         * @returns AppStream ID if set otherwise NULL
         * @since 2.1.7
         */
        get_appstream_id(): string;

        /**
         * Gets the string representation of the current_value stored in an attribute
         * from the kernel.  This value is cached; so changing it outside of fwupd may
         * may put it out of sync.
         * @returns the current value of the attribute.
         * @since 1.8.4
         */
        get_current_value(): string;

        /**
         * Gets the attribute description which is provided by some drivers to explain
         * what they change.
         * @returns the attribute description, or `null` if unset.
         * @since 1.8.4
         */
        get_description(): string;

        /**
         * Gets the filename within `path` where values are read/written.
         * @returns the value filename or NULL if not set
         * @since 2.1.1
         */
        get_filename(): string;

        /**
         * Gets the icon name for this setting, e.g. `application-certificate`.
         * @returns icon name if set otherwise NULL
         * @since 2.1.7
         */
        get_icon(): string;

        /**
         * Gets the unique attribute identifier for this attribute/driver
         * @returns attribute ID if set otherwise NULL
         * @since 1.8.4
         */
        get_id(): string;

        /**
         * Gets the BIOS setting type used by the kernel interface.
         * @returns the bios setting type, or {@link Fwupd.BiosSettingKind.UNKNOWN} if unset.
         * @since 1.8.4
         */
        get_kind(): BiosSettingKind;

        /**
         * Gets the lower bound for integer attributes or
         * minimum length for string attributes.
         * @returns guint64
         * @since 1.8.4
         */
        get_lower_bound(): number;

        /**
         * Gets the attribute name.
         * @returns the attribute name, or `null` if unset.
         * @since 1.8.4
         */
        get_name(): string;

        /**
         * Gets the path for the driver providing the attribute.
         * @returns the driver, or `null` if unfound.
         * @since 1.8.4
         */
        get_path(): string | null;

        /**
         * Find all possible values for an enumeration attribute.
         * @returns all possible values.
         * @since 1.8.4
         */
        get_possible_values(): string[];

        /**
         * Determines if a BIOS setting is read only
         * @returns gboolean
         * @since 1.8.4
         */
        get_read_only(): boolean;

        /**
         * Gets the scalar increment used for integer attributes.
         * @returns guint64
         * @since 1.8.4
         */
        get_scalar_increment(): number;

        /**
         * Gets the upper bound for integer attributes or
         * maximum length for string attributes.
         * @returns guint64
         * @since 1.8.4
         */
        get_upper_bound(): number;

        /**
         * Finds out if a specific possible value was added to the attribute.
         * @param val the possible value string
         * @returns `true` if the self matches.
         * @since 1.8.4
         */
        has_possible_value(val: string): boolean;

        /**
         * Attempts to map a user provided string into strings that a {@link Fwupd.BiosSetting} can
         * support.  The following heuristics are used:
         * - Ignore case sensitivity
         * - Map obviously "positive" phrases into a value that turns on the {@link Fwupd.BiosSetting}
         * - Map obviously "negative" phrases into a value that turns off the {@link Fwupd.BiosSetting}
         * @param key the string to try to map
         * @returns the possible value that maps or NULL if none if found
         * @since 1.8.4
         */
        map_possible_value(key: string): string;

        /**
         * Sets the vendor-neutral fwupd AppStream identifier for this setting.
         * @param appstream_id the fwupd AppStream identifier
         * @since 2.1.7
         */
        set_appstream_id(appstream_id: string | null): void;

        /**
         * Sets the string stored in an attribute.
         * @param value The string to set an attribute to
         * @since 1.8.4
         */
        set_current_value(value: string | null): void;

        /**
         * Sets the attribute description.
         * @param description the attribute description
         * @since 1.8.4
         */
        set_description(description: string | null): void;

        /**
         * Sets the filename within `path` where values are read/written.
         * If not set, defaults to "current_value".
         * @param filename the filename within `path` for value operations
         * @since 2.1.1
         */
        set_filename(filename: string): void;

        /**
         * Sets the icon name for this setting.
         * @param icon the icon name
         * @since 2.1.7
         */
        set_icon(icon: string | null): void;

        /**
         * Sets the unique attribute identifier for this attribute
         * @param id 
         * @since 1.8.4
         */
        set_id(id: string): void;

        /**
         * Sets the BIOS setting type used by the kernel interface.
         * @param type a bios setting type, e.g. {@link Fwupd.BiosSettingKind.ENUMERATION}
         * @since 1.8.4
         */
        set_kind(type: BiosSettingKind): void;

        /**
         * Sets the lower bound used for BIOS integer attributes or max
         * length for string attributes.
         * @param val a guint64 value to set bound to
         * @since 1.8.4
         */
        set_lower_bound(val: bigint | number): void;

        /**
         * Sets the attribute name provided by a kernel driver.
         * @param name the attribute name
         * @since 1.8.4
         */
        set_name(name: string | null): void;

        /**
         * Sets path to the attribute.
         * @param path the path the driver providing the attribute uses
         * @since 1.8.4
         */
        set_path(path: string | null): void;

        /**
         * Configures whether an attribute is read only
         * maximum length for string attributes.
         * @param val 
         * @since 1.8.4
         */
        set_read_only(val: boolean): void;

        /**
         * Sets the scalar increment used for BIOS integer attributes.
         * @param val a guint64 value to set increment to
         * @since 1.8.4
         */
        set_scalar_increment(val: bigint | number): void;

        /**
         * Sets the upper bound used for BIOS integer attributes or max
         * length for string attributes.
         * @param val a guint64 value to set bound to
         * @since 1.8.4
         */
        set_upper_bound(val: bigint | number): void;

        /**
         * Reads the current value, converting to the display value as required.
         * 
         * NOTE: A subclass should handle the `->read_value()` vfunc and actually read the raw value from
         * the firmware.
         * 
         * If `fwupd_bios_setting_add_possible_value_full()` was used then the raw value is automatically
         * mapped to the display value before being set as the current version.
         * @returns `true` for success
         * @since 2.1.6
         */
        setup(): boolean;

        /**
         * Writes a new value into the setting if it is different from the current value.
         * 
         * If `fwupd_bios_setting_add_possible_value_full()` was used then the display value is automatically
         * mapped to the raw value before being written.
         * 
         * NOTE: A subclass should handle the `->write_value()` vfunc and actually write the value to the
         * firmware.
         * @param value The string to write
         * @returns `true` for success
         * @since 1.9.4
         */
        write_value(value: string): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         */
        add_string(idt: number, str: GLib.String): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON string.
         * @param json JSON text
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json_string(json: string): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @returns `true` on success
         * @since 2.0.0
         */
        from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON builder object.
         * @param json_obj a JSON builder
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         */
        to_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON string.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a string
         * @since 2.0.0
         */
        to_json_string(flags: CodecFlags): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @returns a string
         * @since 2.0.0
         */
        to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a {@link GLib.Variant}
         * @since 2.0.0
         */
        to_variant(flags: CodecFlags): GLib.Variant;

        /**
         * @param json_obj 
         * @param flags 
         * @virtual
         */
        vfunc_add_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         * @virtual
         */
        vfunc_add_string(idt: number, str: GLib.String): void;

        /**
         * @param builder 
         * @param flags 
         * @virtual
         */
        vfunc_add_variant(builder: GLib.VariantBuilder, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_variant(flags: CodecFlags): GLib.Variant;
    }


    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::changed signal is emitted when the daemon internal has
             * changed, for instance when a device has been added or removed.
             * @signal
             * @since 0.7.0
             * @run-last
             */
            changed: () => void;
            /**
             * The ::device-added signal is emitted when a device has been
             * added.
             * @signal
             * @since 0.7.1
             * @run-last
             */
            "device-added": (arg0: Device) => void;
            /**
             * The ::device-changed signal is emitted when a device has been
             * changed in some way, e.g. the version number is updated.
             * @signal
             * @since 0.7.1
             * @run-last
             */
            "device-changed": (arg0: Device) => void;
            /**
             * The ::device-removed signal is emitted when a device has been
             * removed.
             * @signal
             * @since 0.7.1
             * @run-last
             */
            "device-removed": (arg0: Device) => void;
            /**
             * The ::device-request signal is emitted when a device has been
             * emitted some kind of event, e.g. a manual action is required.
             * @signal
             * @since 1.6.2
             * @run-last
             */
            "device-request": (arg0: Request) => void;
            /**
             * @signal
             * @run-last
             */
            "status-changed": (arg0: number) => void;
            "notify::battery-level": (pspec: GObject.ParamSpec) => void;
            "notify::battery-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::daemon-version": (pspec: GObject.ParamSpec) => void;
            "notify::host-bkc": (pspec: GObject.ParamSpec) => void;
            "notify::host-machine-id": (pspec: GObject.ParamSpec) => void;
            "notify::host-product": (pspec: GObject.ParamSpec) => void;
            "notify::host-security-id": (pspec: GObject.ParamSpec) => void;
            "notify::host-vendor": (pspec: GObject.ParamSpec) => void;
            "notify::interactive": (pspec: GObject.ParamSpec) => void;
            "notify::only-trusted": (pspec: GObject.ParamSpec) => void;
            "notify::percentage": (pspec: GObject.ParamSpec) => void;
            "notify::percentage-full": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::tainted": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            battery_level: number;
            batteryLevel: number;
            battery_threshold: number;
            batteryThreshold: number;
            daemon_version: string;
            daemonVersion: string;
            host_bkc: string;
            hostBkc: string;
            host_machine_id: string;
            hostMachineId: string;
            host_product: string;
            hostProduct: string;
            host_security_id: string;
            hostSecurityId: string;
            host_vendor: string;
            hostVendor: string;
            interactive: boolean;
            only_trusted: boolean;
            onlyTrusted: boolean;
            percentage: number;
            percentage_full: number;
            percentageFull: number;
            status: number;
            tainted: boolean;
        }
    }

    /**
     * Allow client code to call the daemon methods.
     * 
     * See also: {@link FwupdDevice}
     * @gir-type Class
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties
        /**
         * The system battery level in percent.
         * @since 1.8.1
         * @default 101
         */
        get battery_level(): number;
        set battery_level(val: number);

        /**
         * The system battery level in percent.
         * @since 1.8.1
         * @default 101
         */
        get batteryLevel(): number;
        set batteryLevel(val: number);

        /**
         * The system battery threshold in percent.
         * @since 1.8.1
         * @default 101
         */
        get battery_threshold(): number;
        set battery_threshold(val: number);

        /**
         * The system battery threshold in percent.
         * @since 1.8.1
         * @default 101
         */
        get batteryThreshold(): number;
        set batteryThreshold(val: number);

        /**
         * The daemon version number.
         * @since 0.9.6
         * @read-only
         * @default null
         */
        get daemon_version(): string;

        /**
         * The daemon version number.
         * @since 0.9.6
         * @read-only
         * @default null
         */
        get daemonVersion(): string;

        /**
         * The host best known configuration.
         * @since 1.7.3
         * @default null
         */
        get host_bkc(): string;
        set host_bkc(val: string);

        /**
         * The host best known configuration.
         * @since 1.7.3
         * @default null
         */
        get hostBkc(): string;
        set hostBkc(val: string);

        /**
         * The host machine-id string
         * @since 1.3.2
         * @default null
         */
        get host_machine_id(): string;
        set host_machine_id(val: string);

        /**
         * The host machine-id string
         * @since 1.3.2
         * @default null
         */
        get hostMachineId(): string;
        set hostMachineId(val: string);

        /**
         * The host product string
         * @since 1.3.1
         * @default null
         */
        get host_product(): string;
        set host_product(val: string);

        /**
         * The host product string
         * @since 1.3.1
         * @default null
         */
        get hostProduct(): string;
        set hostProduct(val: string);

        /**
         * The host machine-id string
         * @since 1.5.0
         * @default null
         */
        get host_security_id(): string;
        set host_security_id(val: string);

        /**
         * The host machine-id string
         * @since 1.5.0
         * @default null
         */
        get hostSecurityId(): string;
        set hostSecurityId(val: string);

        /**
         * The host vendor string
         * @since 1.8.2
         * @default null
         */
        get host_vendor(): string;
        set host_vendor(val: string);

        /**
         * The host vendor string
         * @since 1.8.2
         * @default null
         */
        get hostVendor(): string;
        set hostVendor(val: string);

        /**
         * If the daemon is running in an interactive terminal
         * @since 1.3.4
         * @read-only
         * @default false
         */
        get interactive(): boolean;

        /**
         * If the daemon is verifying signatures from a trusted authority.
         * @since 1.8.0
         * @read-only
         * @default true
         */
        get only_trusted(): boolean;

        /**
         * If the daemon is verifying signatures from a trusted authority.
         * @since 1.8.0
         * @read-only
         * @default true
         */
        get onlyTrusted(): boolean;

        /**
         * The last-reported percentage of the daemon.
         * @since 0.7.3
         * @default 0
         */
        get percentage(): number;
        set percentage(val: number);

        /**
         * The last-reported percentage of the daemon.
         * @since 2.1.3
         * @default -1
         */
        get percentage_full(): number;
        set percentage_full(val: number);

        /**
         * The last-reported percentage of the daemon.
         * @since 2.1.3
         * @default -1
         */
        get percentageFull(): number;
        set percentageFull(val: number);

        /**
         * The last-reported status of the daemon.
         * @since 0.7.0
         * @default 0
         */
        get status(): number;
        set status(val: number);

        /**
         * If the daemon is tainted by 3rd party code.
         * @since 1.2.4
         * @read-only
         * @default false
         */
        get tainted(): boolean;

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

        static ["new"](): Client;

        // Signals
        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_changed(): void;

        /**
         * @param result 
         * @virtual
         */
        vfunc_device_added(result: Device): void;

        /**
         * @param result 
         * @virtual
         */
        vfunc_device_changed(result: Device): void;

        /**
         * @param result 
         * @virtual
         */
        vfunc_device_removed(result: Device): void;

        /**
         * @param request 
         * @virtual
         */
        vfunc_device_request(request: Request): void;

        /**
         * @param status 
         * @virtual
         */
        vfunc_status_changed(status: Status): void;

        // Methods
        /**
         * Activates up a device, which normally means the device switches to a new
         * firmware version. This should only be called when data loss cannot occur.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param device_id a device
         * @returns `true` for success
         * @since 1.2.6
         */
        activate(cancellable: Gio.Cancellable | null, device_id: string): boolean;

        /**
         * Activates up a device, which normally means the device switches to a new
         * firmware version. This should only be called when data loss cannot occur.
         * @param device_id a device
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        activate_async(device_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Activates up a device, which normally means the device switches to a new
         * firmware version. This should only be called when data loss cannot occur.
         * @param device_id a device
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        activate_async(device_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Activates up a device, which normally means the device switches to a new
         * firmware version. This should only be called when data loss cannot occur.
         * @param device_id a device
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        activate_async(device_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.activate_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        activate_finish(res: Gio.AsyncResult): boolean;

        /**
         * Sets optional hints from the client that may affect the list of devices.
         * @param key the key, e.g. `locale`
         * @param value the value `key` should be set
         * @since 1.7.1
         */
        add_hint(key: string, value: string | null): void;

        /**
         * Adds a HwID entry.
         * @param key the key
         * @param value the value
         * @since 2.1.7
         */
        add_hwid(key: string, value: string | null): void;

        /**
         * Builds a JSON report for the list of devices.
         * 
         * This function should be called *before* asking the interactive user if they want to upload a
         * report -- as this function filters devices and may return an error if there is nothing to do.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param devices devices
         * @param metadata attributes
         * @returns a string, or `null` if the ID is not present
         * @since 1.9.20
         */
        build_report_devices(devices: Device[], metadata: { [key: string]: string }): string;

        /**
         * Builds a JSON report for the list of devices.
         * 
         * This function should be called *before* asking the interactive user if they want to upload a
         * report -- as this function filters devices and may return an error if there is nothing to do.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param devices devices
         * @param remote optional {@link Fwupd.Remote}
         * @param metadata attributes
         * @returns a string, or `null` on error
         * @since 2.0.0
         */
        build_report_history(devices: Device[], remote: Remote | null, metadata: { [key: string]: string }): string;

        /**
         * Builds a JSON security report.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param attrs attributes
         * @param metadata attributes
         * @returns a string, or `null` on error
         * @since 2.0.0
         */
        build_report_security(attrs: SecurityAttr[], metadata: { [key: string]: string }): string;

        /**
         * Cleans a system remote, deleting metadata as required.
         * 
         * NOTE: User authentication may be required to complete this action.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 2.0.17
         */
        clean_remote(remote_id: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Cleans a system remote, deleting metadata as required.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 2.0.17
         */
        clean_remote_async(remote_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Cleans a system remote, deleting metadata as required.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.17
         */
        clean_remote_async(remote_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Cleans a system remote, deleting metadata as required.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.17
         */
        clean_remote_async(remote_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.clean_remote_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 2.0.17
         */
        clean_remote_finish(res: Gio.AsyncResult): boolean;

        /**
         * Clears the results for a specific device.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 0.7.0
         */
        clear_results(device_id: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Clears the results for a specific device.
         * @param device_id a device
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        clear_results_async(device_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Clears the results for a specific device.
         * @param device_id a device
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        clear_results_async(device_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Clears the results for a specific device.
         * @param device_id a device
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        clear_results_async(device_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.clear_results_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        clear_results_finish(res: Gio.AsyncResult): boolean;

        /**
         * Sets up the client ready for use. This is probably the first method you call
         * when wanting to use libfwupd in an asynchronous manner.
         * 
         * Other methods such as {@link FwupdClient.get_devices_async} should only be called
         * after {@link FwupdClient.connect_finish} has been called without an error.
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        connect_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Sets up the client ready for use. This is probably the first method you call
         * when wanting to use libfwupd in an asynchronous manner.
         * 
         * Other methods such as {@link FwupdClient.get_devices_async} should only be called
         * after {@link FwupdClient.connect_finish} has been called without an error.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        connect_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Sets up the client ready for use. This is probably the first method you call
         * when wanting to use libfwupd in an asynchronous manner.
         * 
         * Other methods such as {@link FwupdClient.get_devices_async} should only be called
         * after {@link FwupdClient.connect_finish} has been called without an error.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        connect_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link Client.connect_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        connect_finish(res: Gio.AsyncResult): boolean;

        /**
         * Downloads data from a remote server. The {@link Client.set_user_agent} function
         * should be called before this method is used.
         * @param url the remote URL
         * @param flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns downloaded data, or `null` for error
         * @since 1.4.5
         */
        download_bytes(url: string, flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null): GLib.Bytes;

        /**
         * Downloads data from a remote server. The {@link Client.set_user_agent} function
         * should be called before this method is used.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param url the remote URL
         * @param flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        download_bytes_async(url: string, flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Bytes>;

        /**
         * Downloads data from a remote server. The {@link Client.set_user_agent} function
         * should be called before this method is used.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param url the remote URL
         * @param flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        download_bytes_async(url: string, flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Downloads data from a remote server. The {@link Client.set_user_agent} function
         * should be called before this method is used.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param url the remote URL
         * @param flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        download_bytes_async(url: string, flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Bytes> | void;

        /**
         * Gets the result of {@link FwupdClient.download_bytes_async}.
         * @param res the asynchronous result
         * @returns downloaded data, or `null` for error
         * @since 1.5.0
         */
        download_bytes_finish(res: Gio.AsyncResult): GLib.Bytes;

        /**
         * Downloads data from a remote server. The {@link Client.set_user_agent} function
         * should be called before this method is used.
         * @param url the remote URL
         * @param file a file
         * @param flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` if the file was written
         * @since 1.5.2
         */
        download_file(url: string, file: Gio.File, flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Sets the number of retries should be attempted on transient download errors.
         * @param retries number of tries, defaulting to 0
         * @since 1.9.19
         */
        download_set_retries(retries: number): void;

        /**
         * Loads an emulated device into the daemon backend that has the phases set by the JSON data,
         * for instance, having one USB device emulated for the bootloader and another emulated for the
         * runtime interface.
         * @param filename archive data of JSON files
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 2.0.0
         */
        emulation_load(filename: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Loads an emulated device into the daemon backend that has the phases set by the JSON data,
         * for instance, having one USB device emulated for the bootloader and another emulated for the
         * runtime interface.
         * @param filename archive data of JSON files
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 2.0.0
         */
        emulation_load_async(filename: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Loads an emulated device into the daemon backend that has the phases set by the JSON data,
         * for instance, having one USB device emulated for the bootloader and another emulated for the
         * runtime interface.
         * @param filename archive data of JSON files
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.0
         */
        emulation_load_async(filename: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Loads an emulated device into the daemon backend that has the phases set by the JSON data,
         * for instance, having one USB device emulated for the bootloader and another emulated for the
         * runtime interface.
         * @param filename archive data of JSON files
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.0
         */
        emulation_load_async(filename: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.emulation_load_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 2.0.0
         */
        emulation_load_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the captured data from all filtered devices for all recorded phases. The data is returned
         * in a ZIP archive of JSON output.
         * 
         * NOTE: Device events are not automatically recorded for all devices. You must call something
         * like `ModifyDevice(device_id, 'flags','emulation-tag')` to start the recording the backend.
         * 
         * Once the device has been re-inserted then the emulation data will be available using
         * this API call.
         * @param filename archive data of JSON files
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 2.0.0
         */
        emulation_save(filename: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Gets the captured data from all filtered devices for all recorded phases. The data is returned
         * in a ZIP archive of JSON output.
         * 
         * NOTE: Device events are not automatically recorded for all devices. You must call something
         * like `ModifyDevice(device_id, 'flags','emulation-tag')` to start the recording the backend.
         * 
         * Once the device has been re-inserted then the emulation data will be available using
         * this API call.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param filename archive data of JSON files
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 2.0.0
         */
        emulation_save_async(filename: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Gets the captured data from all filtered devices for all recorded phases. The data is returned
         * in a ZIP archive of JSON output.
         * 
         * NOTE: Device events are not automatically recorded for all devices. You must call something
         * like `ModifyDevice(device_id, 'flags','emulation-tag')` to start the recording the backend.
         * 
         * Once the device has been re-inserted then the emulation data will be available using
         * this API call.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param filename archive data of JSON files
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.0
         */
        emulation_save_async(filename: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets the captured data from all filtered devices for all recorded phases. The data is returned
         * in a ZIP archive of JSON output.
         * 
         * NOTE: Device events are not automatically recorded for all devices. You must call something
         * like `ModifyDevice(device_id, 'flags','emulation-tag')` to start the recording the backend.
         * 
         * Once the device has been re-inserted then the emulation data will be available using
         * this API call.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param filename archive data of JSON files
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.0
         */
        emulation_save_async(filename: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.emulation_save_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 2.0.0
         */
        emulation_save_finish(res: Gio.AsyncResult): boolean;

        /**
         * Sets up the client networking support ready for use. Most other download and
         * upload methods call this automatically, and do you only need to call this if
         * the session is being used outside the {@link FwupdClient}.
         * @returns `true` for success
         * @since 1.4.5
         */
        ensure_networking(): boolean;

        /**
         * Fix one specific security attribute.
         * @param appstream_id the HSI AppStream ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 1.9.6
         */
        fix_host_security_attr(appstream_id: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Fix one specific security attribute.
         * @param appstream_id HSI AppStream ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.9.6
         */
        fix_host_security_attr_async(appstream_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Fix one specific security attribute.
         * @param appstream_id HSI AppStream ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.9.6
         */
        fix_host_security_attr_async(appstream_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Fix one specific security attribute.
         * @param appstream_id HSI AppStream ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.9.6
         */
        fix_host_security_attr_async(appstream_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.fix_host_security_attr_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.9.6
         */
        fix_host_security_attr_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the list of approved firmware.
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns checksums, or `null` for error
         * @since 1.2.6
         */
        get_approved_firmware(cancellable: Gio.Cancellable | null): string[];

        /**
         * Gets the list of approved firmware.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_approved_firmware_async(cancellable: Gio.Cancellable | null): globalThis.Promise<string[]>;

        /**
         * Gets the list of approved firmware.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_approved_firmware_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets the list of approved firmware.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_approved_firmware_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[]> | void;

        /**
         * Gets the result of {@link FwupdClient.get_approved_firmware_async}.
         * @param res the asynchronous result
         * @returns checksums, or `null` for error
         * @since 1.5.0
         */
        get_approved_firmware_finish(res: Gio.AsyncResult): string[];

        /**
         * Returns the system battery level.
         * @returns value in percent
         * @since 1.8.1
         */
        get_battery_level(): number;

        /**
         * Returns the system battery threshold under which a firmware update cannot be
         * performed.
         * @returns value in percent
         * @since 1.8.1
         */
        get_battery_threshold(): number;

        /**
         * Gets all the BIOS settings from the daemon.
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns attributes
         * @since 1.8.4
         */
        get_bios_settings(cancellable: Gio.Cancellable | null): BiosSetting[];

        /**
         * Gets all the host security attributes from the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.8.4
         */
        get_bios_settings_async(cancellable: Gio.Cancellable | null): globalThis.Promise<BiosSetting[]>;

        /**
         * Gets all the host security attributes from the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.8.4
         */
        get_bios_settings_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets all the host security attributes from the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.8.4
         */
        get_bios_settings_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<BiosSetting[]> | void;

        /**
         * Gets the result of {@link FwupdClient.get_bios_settings_async}.
         * @param res the asynchronous result
         * @returns attributes
         * @since 1.8.4
         */
        get_bios_settings_finish(res: Gio.AsyncResult): BiosSetting[];

        /**
         * Gets the list of blocked firmware.
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns checksums, or `null` for error
         * @since 1.4.6
         */
        get_blocked_firmware(cancellable: Gio.Cancellable | null): string[];

        /**
         * Gets the list of blocked firmware.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_blocked_firmware_async(cancellable: Gio.Cancellable | null): globalThis.Promise<string[]>;

        /**
         * Gets the list of blocked firmware.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_blocked_firmware_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets the list of blocked firmware.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_blocked_firmware_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[]> | void;

        /**
         * Gets the result of {@link FwupdClient.get_blocked_firmware_async}.
         * @param res the asynchronous result
         * @returns checksums, or `null` for error
         * @since 1.5.0
         */
        get_blocked_firmware_finish(res: Gio.AsyncResult): string[];

        /**
         * Gets if the daemon is running in an interactive terminal.
         * @returns `true` if the daemon is running in an interactive terminal
         * @since 1.3.4
         */
        get_daemon_interactive(): boolean;

        /**
         * Gets the daemon version number.
         * @returns a string, or `null` for unknown.
         * @since 0.9.6
         */
        get_daemon_version(): string;

        /**
         * Gets details about a specific firmware file.
         * @param filename the firmware filename, e.g. `firmware.cab`
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns an array of results
         * @since 1.0.0
         */
        get_details(filename: string, cancellable: Gio.Cancellable | null): Device[];

        /**
         * Gets details about a specific firmware file.
         * @param filename firmware archive
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 2.0.1
         */
        get_details_async(filename: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Device[]>;

        /**
         * Gets details about a specific firmware file.
         * @param filename firmware archive
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.1
         */
        get_details_async(filename: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets details about a specific firmware file.
         * @param filename firmware archive
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.1
         */
        get_details_async(filename: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Device[]> | void;

        /**
         * Gets details about a specific firmware file.
         * @param bytes the firmware archive
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns an array of results
         * @since 1.5.0
         */
        get_details_bytes(bytes: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null): Device[];

        /**
         * Gets details about a specific firmware file.
         * @param bytes firmware archive
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_details_bytes_async(bytes: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null): globalThis.Promise<Device[]>;

        /**
         * Gets details about a specific firmware file.
         * @param bytes firmware archive
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_details_bytes_async(bytes: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets details about a specific firmware file.
         * @param bytes firmware archive
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_details_bytes_async(bytes: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Device[]> | void;

        /**
         * Gets the result of {@link FwupdClient.get_details_bytes_async}.
         * @param res the asynchronous result
         * @returns an array of results
         * @since 1.5.0
         */
        get_details_bytes_finish(res: Gio.AsyncResult): Device[];

        /**
         * Gets the result of {@link FwupdClient.get_details_async}.
         * @param res the asynchronous result
         * @returns an array of results
         * @since 2.0.1
         */
        get_details_finish(res: Gio.AsyncResult): Device[];

        /**
         * Gets a device by its device ID.
         * @param device_id the device ID, e.g. `usb:00:01:03:03`
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns a device or `null`
         * @since 0.9.3
         */
        get_device_by_id(device_id: string, cancellable: Gio.Cancellable | null): Device;

        /**
         * Gets a device by it's device ID.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_device_by_id_async(device_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Device>;

        /**
         * Gets a device by it's device ID.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_device_by_id_async(device_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets a device by it's device ID.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_device_by_id_async(device_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Device> | void;

        /**
         * Gets the result of {@link FwupdClient.get_device_by_id_async}.
         * @param res the asynchronous result
         * @returns a device, or `null` for failure
         * @since 1.5.0
         */
        get_device_by_id_finish(res: Gio.AsyncResult): Device;

        /**
         * Gets all the devices registered with the daemon.
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns results
         * @since 0.9.2
         */
        get_devices(cancellable: Gio.Cancellable | null): Device[];

        /**
         * Gets all the devices registered with the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_devices_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Device[]>;

        /**
         * Gets all the devices registered with the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_devices_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets all the devices registered with the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_devices_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Device[]> | void;

        /**
         * Gets any devices that provide a specific GUID. An error is returned if no
         * devices contains this GUID.
         * @param guid the GUID, e.g. `e22c4520-43dc-5bb3-8245-5787fead9b63`
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns devices or `null`
         * @since 1.4.1
         */
        get_devices_by_guid(guid: string, cancellable: Gio.Cancellable | null): Device[];

        /**
         * Gets any devices that provide a specific GUID. An error is returned if no
         * devices contains this GUID.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param guid the GUID, e.g. `e22c4520-43dc-5bb3-8245-5787fead9b63`
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_devices_by_guid_async(guid: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Release[]>;

        /**
         * Gets any devices that provide a specific GUID. An error is returned if no
         * devices contains this GUID.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param guid the GUID, e.g. `e22c4520-43dc-5bb3-8245-5787fead9b63`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_devices_by_guid_async(guid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets any devices that provide a specific GUID. An error is returned if no
         * devices contains this GUID.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param guid the GUID, e.g. `e22c4520-43dc-5bb3-8245-5787fead9b63`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_devices_by_guid_async(guid: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Release[]> | void;

        /**
         * Gets the result of {@link FwupdClient.get_devices_by_guid_async}.
         * @param res the asynchronous result
         * @returns results
         * @since 1.5.0
         */
        get_devices_by_guid_finish(res: Gio.AsyncResult): Release[];

        /**
         * Gets the result of {@link FwupdClient.get_devices_async}.
         * @param res the asynchronous result
         * @returns results
         * @since 1.5.0
         */
        get_devices_finish(res: Gio.AsyncResult): Device[];

        /**
         * Gets all the downgrades for a specific device.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns results
         * @since 0.9.8
         */
        get_downgrades(device_id: string, cancellable: Gio.Cancellable | null): Release[];

        /**
         * Gets all the downgrades for a specific device.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_downgrades_async(device_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Release[]>;

        /**
         * Gets all the downgrades for a specific device.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_downgrades_async(device_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets all the downgrades for a specific device.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_downgrades_async(device_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Release[]> | void;

        /**
         * Gets the result of {@link FwupdClient.get_downgrades_async}.
         * @param res the asynchronous result
         * @returns results
         * @since 1.5.0
         */
        get_downgrades_finish(res: Gio.AsyncResult): Release[];

        /**
         * Gets all the history.
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns results
         * @since 1.0.4
         */
        get_history(cancellable: Gio.Cancellable | null): Device[];

        /**
         * Gets all the history.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_history_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Device[]>;

        /**
         * Gets all the history.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_history_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets all the history.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_history_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Device[]> | void;

        /**
         * Gets the result of {@link FwupdClient.get_history_async}.
         * @param res the asynchronous result
         * @returns results
         * @since 1.5.0
         */
        get_history_finish(res: Gio.AsyncResult): Device[];

        /**
         * Gets the host best known configuration, e.g. `vendor-factory-2021q1,mycompany-2023`.
         * @returns a string, or `null` for unknown.
         * @since 1.7.3
         */
        get_host_bkc(): string;

        /**
         * Gets the string that represents the host machine ID
         * @returns a string, or `null` for unknown.
         * @since 1.3.2
         */
        get_host_machine_id(): string;

        /**
         * Gets the string that represents the host running fwupd
         * @returns a string, or `null` for unknown.
         * @since 1.3.1
         */
        get_host_product(): string;

        /**
         * Gets all the host security attributes from the daemon.
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns attributes
         * @since 1.5.0
         */
        get_host_security_attrs(cancellable: Gio.Cancellable | null): SecurityAttr[];

        /**
         * Gets all the host security attributes from the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_host_security_attrs_async(cancellable: Gio.Cancellable | null): globalThis.Promise<SecurityAttr[]>;

        /**
         * Gets all the host security attributes from the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_host_security_attrs_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets all the host security attributes from the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_host_security_attrs_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<SecurityAttr[]> | void;

        /**
         * Gets the result of {@link FwupdClient.get_host_security_attrs_async}.
         * @param res the asynchronous result
         * @returns attributes
         * @since 1.5.0
         */
        get_host_security_attrs_finish(res: Gio.AsyncResult): SecurityAttr[];

        /**
         * Gets all the host security events from the daemon.
         * @param limit maximum number of events, or 0 for no limit
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns attributes
         * @since 1.7.1
         */
        get_host_security_events(limit: number, cancellable: Gio.Cancellable | null): SecurityAttr[];

        /**
         * Gets all the host security events from the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param limit maximum number of events, or 0 for no limit
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.7.1
         */
        get_host_security_events_async(limit: number, cancellable: Gio.Cancellable | null): globalThis.Promise<SecurityAttr[]>;

        /**
         * Gets all the host security events from the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param limit maximum number of events, or 0 for no limit
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.7.1
         */
        get_host_security_events_async(limit: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets all the host security events from the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param limit maximum number of events, or 0 for no limit
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.7.1
         */
        get_host_security_events_async(limit: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<SecurityAttr[]> | void;

        /**
         * Gets the result of {@link FwupdClient.get_host_security_events_async}.
         * @param res the asynchronous result
         * @returns attributes
         * @since 1.7.1
         */
        get_host_security_events_finish(res: Gio.AsyncResult): SecurityAttr[];

        /**
         * Gets the string that represents the host machine ID
         * @returns a string, or `null` for unknown.
         * @since 1.5.0
         */
        get_host_security_id(): string;

        /**
         * Gets the string that represents the vendor of the host running fwupd
         * @returns a string, or `null` for unknown.
         * @since 1.8.2
         */
        get_host_vendor(): string;

        /**
         * Gets the daemon hardware IDs, sometimes called CHIDs.
         * @since 2.0.17
         */
        get_hwids(): [string[] | null, string[] | null];

        /**
         * Gets the internal {@link GLib.MainContext} to use for synchronous methods.
         * By default the value is set a new {@link GLib.MainContext}.
         * @returns the main context
         * @since 1.5.3
         */
        get_main_context(): GLib.MainContext;

        /**
         * Gets if the daemon is verifying signatures from a trusted authority.
         * @returns `true` if the daemon is checking signatures
         * @since 1.8.0
         */
        get_only_trusted(): boolean;

        /**
         * Gets the last returned percentage value.
         * @returns a percentage, or 0 for unknown.
         * @since 0.7.3
         */
        get_percentage(): number;

        /**
         * Gets the last returned percentage value.
         * @returns a percentage, or `FWUPD_PERCENTAGE_UNKNOWN` for unknown.
         * @since 2.1.3
         */
        get_percentage_full(): number;

        /**
         * Gets all the plugins being used the daemon.
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns results
         * @since 1.5.0
         */
        get_plugins(cancellable: Gio.Cancellable | null): Plugin[];

        /**
         * Gets all the plugins being used by the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_plugins_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Device[]>;

        /**
         * Gets all the plugins being used by the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_plugins_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets all the plugins being used by the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_plugins_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Device[]> | void;

        /**
         * Gets the result of {@link FwupdClient.get_plugins_async}.
         * @param res the asynchronous result
         * @returns results
         * @since 1.5.0
         */
        get_plugins_finish(res: Gio.AsyncResult): Device[];

        /**
         * Gets all the releases for a specific device
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns results
         * @since 0.9.3
         */
        get_releases(device_id: string, cancellable: Gio.Cancellable | null): Release[];

        /**
         * Gets all the releases for a specific device
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_releases_async(device_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Release[]>;

        /**
         * Gets all the releases for a specific device
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_releases_async(device_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets all the releases for a specific device
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_releases_async(device_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Release[]> | void;

        /**
         * Gets the result of {@link FwupdClient.get_releases_async}.
         * @param res the asynchronous result
         * @returns results
         * @since 1.5.0
         */
        get_releases_finish(res: Gio.AsyncResult): Release[];

        /**
         * Gets a specific remote that has been configured for the system.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns a {@link Fwupd.Remote}, or `null` if not found
         * @since 0.9.3
         */
        get_remote_by_id(remote_id: string, cancellable: Gio.Cancellable | null): Remote;

        /**
         * Gets a specific remote that has been configured for the system.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_remote_by_id_async(remote_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Remote>;

        /**
         * Gets a specific remote that has been configured for the system.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_remote_by_id_async(remote_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets a specific remote that has been configured for the system.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_remote_by_id_async(remote_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Remote> | void;

        /**
         * Gets the result of {@link FwupdClient.get_remote_by_id_async}.
         * @param res the asynchronous result
         * @returns a {@link Fwupd.Remote}, or `null` if not found
         * @since 1.5.0
         */
        get_remote_by_id_finish(res: Gio.AsyncResult): Remote;

        /**
         * Gets the list of remotes that have been configured for the system.
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns list of remotes, or `null`
         * @since 0.9.3
         */
        get_remotes(cancellable: Gio.Cancellable | null): Remote[];

        /**
         * Gets the list of remotes that have been configured for the system.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_remotes_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Remote[]>;

        /**
         * Gets the list of remotes that have been configured for the system.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_remotes_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets the list of remotes that have been configured for the system.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_remotes_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Remote[]> | void;

        /**
         * Gets the result of {@link FwupdClient.get_remotes_async}.
         * @param res the asynchronous result
         * @returns results
         * @since 1.5.0
         */
        get_remotes_finish(res: Gio.AsyncResult): Remote[];

        /**
         * Gets all the report metadata from the daemon.
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns attributes
         * @since 1.5.0
         */
        get_report_metadata(cancellable: Gio.Cancellable | null): never;

        /**
         * Gets all the report metadata from the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_report_metadata_async(cancellable: Gio.Cancellable | null): globalThis.Promise<never>;

        /**
         * Gets all the report metadata from the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_report_metadata_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets all the report metadata from the daemon.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_report_metadata_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<never> | void;

        /**
         * Gets the result of {@link FwupdClient.get_report_metadata_async}.
         * @param res the asynchronous result
         * @returns attributes
         * @since 1.5.0
         */
        get_report_metadata_finish(res: Gio.AsyncResult): never;

        /**
         * Gets the results of a previous firmware update for a specific device.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns a device, or `null` for failure
         * @since 0.7.0
         */
        get_results(device_id: string, cancellable: Gio.Cancellable | null): Device;

        /**
         * Gets the results of a previous firmware update for a specific device.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_results_async(device_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Device>;

        /**
         * Gets the results of a previous firmware update for a specific device.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_results_async(device_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets the results of a previous firmware update for a specific device.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_results_async(device_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Device> | void;

        /**
         * Gets the result of {@link FwupdClient.get_results_async}.
         * @param res the asynchronous result
         * @returns a device, or `null` for failure
         * @since 1.5.0
         */
        get_results_finish(res: Gio.AsyncResult): Device;

        /**
         * Gets the last returned status value.
         * @returns a {@link Fwupd.Status}, or {@link Fwupd.Status.UNKNOWN} for unknown.
         * @since 0.7.3
         */
        get_status(): Status;

        /**
         * Gets if the daemon has been tainted by 3rd party code.
         * @returns `true` if the daemon is unsupported
         * @since 1.2.4
         */
        get_tainted(): boolean;

        /**
         * Gets all the upgrades for a specific device.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns results
         * @since 0.9.8
         */
        get_upgrades(device_id: string, cancellable: Gio.Cancellable | null): Release[];

        /**
         * Gets all the upgrades for a specific device.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        get_upgrades_async(device_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Release[]>;

        /**
         * Gets all the upgrades for a specific device.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_upgrades_async(device_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets all the upgrades for a specific device.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        get_upgrades_async(device_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Release[]> | void;

        /**
         * Gets the result of {@link FwupdClient.get_upgrades_async}.
         * @param res the asynchronous result
         * @returns results
         * @since 1.5.0
         */
        get_upgrades_finish(res: Gio.AsyncResult): Release[];

        /**
         * Gets the string that represents the user agent that is used for
         * uploading and downloading. The user agent will contain the runtime
         * version of fwupd somewhere in the provided string.
         * @returns a string, or `null` for unknown.
         * @since 1.5.2
         */
        get_user_agent(): string;

        /**
         * Marks all devices as unavailable for update. Update is only available if there is no other
         * inhibit imposed by other applications or by the system (e.g. low power state).
         * 
         * The same application can inhibit the system multiple times.
         * @param reason the inhibit reason, e.g. `user active`
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns a string to use for {@link FwupdClient.uninhibit_async}, or `null` for failure
         * @since 1.8.11
         */
        inhibit(reason: string, cancellable: Gio.Cancellable | null): string;

        /**
         * Marks all devices as unavailable for update. Update is only available if there is no other
         * inhibit imposed by other applications or by the system (e.g. low power state).
         * 
         * The same application can inhibit the system multiple times.
         * @param reason the inhibit reason, e.g. `user active`
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.8.11
         */
        inhibit_async(reason: string, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;

        /**
         * Marks all devices as unavailable for update. Update is only available if there is no other
         * inhibit imposed by other applications or by the system (e.g. low power state).
         * 
         * The same application can inhibit the system multiple times.
         * @param reason the inhibit reason, e.g. `user active`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.8.11
         */
        inhibit_async(reason: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Marks all devices as unavailable for update. Update is only available if there is no other
         * inhibit imposed by other applications or by the system (e.g. low power state).
         * 
         * The same application can inhibit the system multiple times.
         * @param reason the inhibit reason, e.g. `user active`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.8.11
         */
        inhibit_async(reason: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Gets the result of {@link FwupdClient.inhibit_async}.
         * @param res the asynchronous result
         * @returns a string to use for {@link FwupdClient.uninhibit_async}, or `null` for failure
         * @since 1.8.11
         */
        inhibit_finish(res: Gio.AsyncResult): string;

        /**
         * Install a file onto a specific device.
         * @param device_id the device ID
         * @param filename the filename to install
         * @param install_flags install flags, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 0.7.0
         */
        install(device_id: string, filename: string, install_flags: InstallFlags, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Install firmware onto a specific device.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param device_id the device ID
         * @param filename the filename to install
         * @param install_flags install flags, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        install_async(device_id: string, filename: string, install_flags: InstallFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Install firmware onto a specific device.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param device_id the device ID
         * @param filename the filename to install
         * @param install_flags install flags, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        install_async(device_id: string, filename: string, install_flags: InstallFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Install firmware onto a specific device.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param device_id the device ID
         * @param filename the filename to install
         * @param install_flags install flags, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        install_async(device_id: string, filename: string, install_flags: InstallFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Install firmware onto a specific device.
         * @param device_id the device ID
         * @param bytes cabinet archive
         * @param install_flags install flags, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 1.4.5
         */
        install_bytes(device_id: string, bytes: GLib.Bytes | Uint8Array, install_flags: InstallFlags, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Install firmware onto a specific device.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param device_id the device ID
         * @param bytes cabinet archive
         * @param install_flags install flags, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        install_bytes_async(device_id: string, bytes: GLib.Bytes | Uint8Array, install_flags: InstallFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Install firmware onto a specific device.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param device_id the device ID
         * @param bytes cabinet archive
         * @param install_flags install flags, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        install_bytes_async(device_id: string, bytes: GLib.Bytes | Uint8Array, install_flags: InstallFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Install firmware onto a specific device.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param device_id the device ID
         * @param bytes cabinet archive
         * @param install_flags install flags, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        install_bytes_async(device_id: string, bytes: GLib.Bytes | Uint8Array, install_flags: InstallFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.install_bytes_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        install_bytes_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the result of {@link FwupdClient.install_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        install_finish(res: Gio.AsyncResult): boolean;

        /**
         * Installs a new release on a device, downloading the firmware if required.
         * @param device a device
         * @param release a release
         * @param install_flags install flags, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param download_flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 2.0.0
         */
        install_release(device: Device, release: Release, install_flags: InstallFlags, download_flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Installs a new release on a device, downloading the firmware if required.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param device a device
         * @param release a release
         * @param install_flags install flags, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param download_flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.ONLY_P2P}
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 2.0.0
         */
        install_release_async(device: Device, release: Release, install_flags: InstallFlags, download_flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Installs a new release on a device, downloading the firmware if required.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param device a device
         * @param release a release
         * @param install_flags install flags, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param download_flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.ONLY_P2P}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.0
         */
        install_release_async(device: Device, release: Release, install_flags: InstallFlags, download_flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Installs a new release on a device, downloading the firmware if required.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param device a device
         * @param release a release
         * @param install_flags install flags, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param download_flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.ONLY_P2P}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.0
         */
        install_release_async(device: Device, release: Release, install_flags: InstallFlags, download_flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.install_release_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        install_release_finish(res: Gio.AsyncResult): boolean;

        /**
         * Modifies a BIOS setting using kernel API.
         * The daemon will only respond to this request with proper permissions.
         * @param settings BIOS settings
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 1.8.4
         */
        modify_bios_setting(settings: never, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Modifies a BIOS setting using kernel API.
         * The daemon will only respond to this request with proper permissions.
         * @param settings BIOS settings
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.8.4
         */
        modify_bios_setting_async(settings: never, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Modifies a BIOS setting using kernel API.
         * The daemon will only respond to this request with proper permissions.
         * @param settings BIOS settings
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.8.4
         */
        modify_bios_setting_async(settings: never, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Modifies a BIOS setting using kernel API.
         * The daemon will only respond to this request with proper permissions.
         * @param settings BIOS settings
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.8.4
         */
        modify_bios_setting_async(settings: never, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.modify_bios_setting_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.8.4
         */
        modify_bios_setting_finish(res: Gio.AsyncResult): boolean;

        /**
         * Modifies a daemon config option.
         * The daemon will only respond to this request with proper permissions.
         * @param section config section, e.g. `redfish`
         * @param key config key, e.g. `DisabledPlugins`
         * @param value config value, e.g. `*`
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 2.0.0
         */
        modify_config(section: string, key: string, value: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Modifies a daemon config option.
         * The daemon will only respond to this request with proper permissions.
         * @param section config section, e.g. `redfish`
         * @param key config key, e.g. `DisabledPlugins`
         * @param value config value, e.g. `*`
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 2.0.0
         */
        modify_config_async(section: string, key: string, value: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Modifies a daemon config option.
         * The daemon will only respond to this request with proper permissions.
         * @param section config section, e.g. `redfish`
         * @param key config key, e.g. `DisabledPlugins`
         * @param value config value, e.g. `*`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.0
         */
        modify_config_async(section: string, key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Modifies a daemon config option.
         * The daemon will only respond to this request with proper permissions.
         * @param section config section, e.g. `redfish`
         * @param key config key, e.g. `DisabledPlugins`
         * @param value config value, e.g. `*`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.0
         */
        modify_config_async(section: string, key: string, value: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.modify_config_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 2.0.0
         */
        modify_config_finish(res: Gio.AsyncResult): boolean;

        /**
         * Modifies a device in a specific way. Not all properties on the {@link Fwupd.Device}
         * are settable by the client, and some may have other restrictions on `value`.
         * 
         * NOTE: User authentication may be required to complete this action.
         * @param device_id the device ID
         * @param key the key, e.g. `Flags`
         * @param value the key, e.g. `reported`
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 1.0.4
         */
        modify_device(device_id: string, key: string, value: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Modifies a device in a specific way. Not all properties on the {@link Fwupd.Device}
         * are settable by the client, and some may have other restrictions on `value`.
         * @param device_id the device ID
         * @param key the key, e.g. `Flags`
         * @param value the value, e.g. `reported`
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        modify_device_async(device_id: string, key: string, value: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Modifies a device in a specific way. Not all properties on the {@link Fwupd.Device}
         * are settable by the client, and some may have other restrictions on `value`.
         * @param device_id the device ID
         * @param key the key, e.g. `Flags`
         * @param value the value, e.g. `reported`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        modify_device_async(device_id: string, key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Modifies a device in a specific way. Not all properties on the {@link Fwupd.Device}
         * are settable by the client, and some may have other restrictions on `value`.
         * @param device_id the device ID
         * @param key the key, e.g. `Flags`
         * @param value the value, e.g. `reported`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        modify_device_async(device_id: string, key: string, value: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.modify_device_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        modify_device_finish(res: Gio.AsyncResult): boolean;

        /**
         * Modifies a system remote in a specific way.
         * 
         * NOTE: User authentication may be required to complete this action.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param key the key, e.g. `Enabled`
         * @param value the key, e.g. `true`
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 0.9.8
         */
        modify_remote(remote_id: string, key: string, value: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Modifies a system remote in a specific way.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param key the key, e.g. `Enabled`
         * @param value the key, e.g. `true`
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        modify_remote_async(remote_id: string, key: string, value: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Modifies a system remote in a specific way.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param key the key, e.g. `Enabled`
         * @param value the key, e.g. `true`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        modify_remote_async(remote_id: string, key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Modifies a system remote in a specific way.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param key the key, e.g. `Enabled`
         * @param value the key, e.g. `true`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        modify_remote_async(remote_id: string, key: string, value: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.modify_remote_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        modify_remote_finish(res: Gio.AsyncResult): boolean;

        /**
         * Asks the daemon to quit. This can only be called by the root user.
         * 
         * NOTE: This will only actually quit if an install is not already in progress.
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.8.11
         */
        quit_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asks the daemon to quit. This can only be called by the root user.
         * 
         * NOTE: This will only actually quit if an install is not already in progress.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.8.11
         */
        quit_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asks the daemon to quit. This can only be called by the root user.
         * 
         * NOTE: This will only actually quit if an install is not already in progress.
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.8.11
         */
        quit_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.quit_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.8.11
         */
        quit_finish(res: Gio.AsyncResult): boolean;

        /**
         * Refreshes a remote by downloading new metadata.
         * @param remote a {@link Fwupd.Remote}
         * @param download_flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.ONLY_P2P}
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 2.0.0
         */
        refresh_remote(remote: Remote, download_flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Refreshes a remote by downloading new metadata.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param remote a {@link Fwupd.Remote}
         * @param download_flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.ONLY_P2P}
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 2.0.0
         */
        refresh_remote_async(remote: Remote, download_flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Refreshes a remote by downloading new metadata.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param remote a {@link Fwupd.Remote}
         * @param download_flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.ONLY_P2P}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.0
         */
        refresh_remote_async(remote: Remote, download_flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Refreshes a remote by downloading new metadata.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param remote a {@link Fwupd.Remote}
         * @param download_flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.ONLY_P2P}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.0
         */
        refresh_remote_async(remote: Remote, download_flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.refresh_remote_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        refresh_remote_finish(res: Gio.AsyncResult): boolean;

        /**
         * Resets a daemon config section.
         * The daemon will only respond to this request with proper permissions.
         * @param section config section, e.g. `redfish`
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 1.9.15
         */
        reset_config(section: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Resets a daemon config section.
         * The daemon will only respond to this request with proper permissions.
         * @param section config section, e.g. `redfish`
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.9.15
         */
        reset_config_async(section: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Resets a daemon config section.
         * The daemon will only respond to this request with proper permissions.
         * @param section config section, e.g. `redfish`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.9.15
         */
        reset_config_async(section: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Resets a daemon config section.
         * The daemon will only respond to this request with proper permissions.
         * @param section config section, e.g. `redfish`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.9.15
         */
        reset_config_async(section: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.reset_config_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.9.15
         */
        reset_config_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets all the releases that match a specific token.
         * @param token a search term
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns results
         * @since 2.0.16
         */
        search(token: string, cancellable: Gio.Cancellable | null): Release[];

        /**
         * Gets all the releases that match a specific token.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param token a search term
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 2.0.16
         */
        search_async(token: string, cancellable: Gio.Cancellable | null): globalThis.Promise<Release[]>;

        /**
         * Gets all the releases that match a specific token.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param token a search term
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.16
         */
        search_async(token: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Gets all the releases that match a specific token.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param token a search term
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 2.0.16
         */
        search_async(token: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Release[]> | void;

        /**
         * Gets the result of {@link FwupdClient.search_async}.
         * @param res the asynchronous result
         * @returns results
         * @since 2.0.16
         */
        search_finish(res: Gio.AsyncResult): Release[];

        /**
         * Signs the data using the client self-signed certificate.
         * @param value a string to sign, typically a JSON blob
         * @param flags signing flags, e.g. {@link Fwupd.SelfSignFlags.ADD_TIMESTAMP}
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns a signature, or `null` for failure
         * @since 1.2.6
         */
        self_sign(value: string, flags: SelfSignFlags, cancellable: Gio.Cancellable | null): string;

        /**
         * Signs the data using the client self-signed certificate.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param value a string to sign, typically a JSON blob
         * @param flags signing flags, e.g. {@link Fwupd.SelfSignFlags.ADD_TIMESTAMP}
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        self_sign_async(value: string, flags: SelfSignFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;

        /**
         * Signs the data using the client self-signed certificate.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param value a string to sign, typically a JSON blob
         * @param flags signing flags, e.g. {@link Fwupd.SelfSignFlags.ADD_TIMESTAMP}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        self_sign_async(value: string, flags: SelfSignFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Signs the data using the client self-signed certificate.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * @param value a string to sign, typically a JSON blob
         * @param flags signing flags, e.g. {@link Fwupd.SelfSignFlags.ADD_TIMESTAMP}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        self_sign_async(value: string, flags: SelfSignFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Gets the result of {@link FwupdClient.self_sign_async}.
         * @param res the asynchronous result
         * @returns a signature, or `null` for failure
         * @since 1.5.0
         */
        self_sign_finish(res: Gio.AsyncResult): string;

        /**
         * Sets the list of approved firmware.
         * @param checksums Array of checksums
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 1.2.6
         */
        set_approved_firmware(checksums: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Sets the list of approved firmware.
         * @param checksums firmware checksums
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        set_approved_firmware_async(checksums: string[], cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Sets the list of approved firmware.
         * @param checksums firmware checksums
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        set_approved_firmware_async(checksums: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Sets the list of approved firmware.
         * @param checksums firmware checksums
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        set_approved_firmware_async(checksums: string[], cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.set_approved_firmware_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        set_approved_firmware_finish(res: Gio.AsyncResult): boolean;

        /**
         * Sets the list of approved firmware.
         * @param checksums Array of checksums
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 1.4.6
         */
        set_blocked_firmware(checksums: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Sets the list of blocked firmware.
         * @param checksums firmware checksums
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        set_blocked_firmware_async(checksums: string[], cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Sets the list of blocked firmware.
         * @param checksums firmware checksums
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        set_blocked_firmware_async(checksums: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Sets the list of blocked firmware.
         * @param checksums firmware checksums
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        set_blocked_firmware_async(checksums: string[], cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.set_blocked_firmware_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        set_blocked_firmware_finish(res: Gio.AsyncResult): boolean;

        /**
         * Sets the daemon version number.
         * @param daemon_version A semantic version, e.g. "1.2.3"
         * @since 1.8.11
         */
        set_daemon_version(daemon_version: string): void;

        /**
         * Sets the features the client supports. This allows firmware to depend on
         * specific front-end features, for instance showing the user an image on
         * how to detach the hardware.
         * 
         * Clients can call this none or multiple times.
         * @param feature_flags feature flags, e.g. `FWUPD_FEATURE_FLAG_UPDATE_TEXT`
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 1.4.5
         */
        set_feature_flags(feature_flags: FeatureFlags, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Sets the features the client supports. This allows firmware to depend on
         * specific front-end features, for instance showing the user an image on
         * how to detach the hardware.
         * @param feature_flags feature flags, e.g. `FWUPD_FEATURE_FLAG_UPDATE_TEXT`
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        set_feature_flags_async(feature_flags: FeatureFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Sets the features the client supports. This allows firmware to depend on
         * specific front-end features, for instance showing the user an image on
         * how to detach the hardware.
         * @param feature_flags feature flags, e.g. `FWUPD_FEATURE_FLAG_UPDATE_TEXT`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        set_feature_flags_async(feature_flags: FeatureFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Sets the features the client supports. This allows firmware to depend on
         * specific front-end features, for instance showing the user an image on
         * how to detach the hardware.
         * @param feature_flags feature flags, e.g. `FWUPD_FEATURE_FLAG_UPDATE_TEXT`
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        set_feature_flags_async(feature_flags: FeatureFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.set_feature_flags_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        set_feature_flags_finish(res: Gio.AsyncResult): boolean;

        /**
         * Sets the string that represents the host machine ID.
         * @param host_security_id A semantic version, e.g. "1.2.3"
         * @since 2.1.7
         */
        set_host_security_id(host_security_id: string): void;

        /**
         * Sets the internal main context to use for returning progress signals.
         * @param main_ctx the global default main context to use
         * @since 1.5.3
         */
        set_main_context(main_ctx: GLib.MainContext | null): void;

        /**
         * Sets an override for synchronous client functionality.
         * @param impl a {@link Fwupd.ClientSyncImpl}
         * @param userdata userdata to use with the {@link Fwupd.ClientSyncImpl}
         * @since 2.1.7
         */
        set_sync_impl(impl: ClientSyncImpl, userdata: null): void;

        /**
         * Manually sets the user agent that is used for downloading. The user agent
         * should contain the runtime version of fwupd somewhere in the provided string.
         * @param user_agent the user agent ID, e.g. `gnome-software/3.34.1`
         * @since 1.4.5
         */
        set_user_agent(user_agent: string): void;

        /**
         * Builds a user-agent to use for the download.
         * 
         * Supplying harmless details to the server means it knows more about each
         * client. This allows the web service to respond in a different way, for
         * instance sending a different metadata file for old versions of fwupd, or
         * returning an error for Solaris machines.
         * 
         * Before freaking out about theoretical privacy implications, much more data
         * than this is sent to each and every website you visit.
         * @param package_name client program name, e.g. `gnome-software`
         * @param package_version client program version, e.g. `3.28.1`
         * @since 1.4.5
         */
        set_user_agent_for_package(package_name: string, package_version: string): void;

        /**
         * Revert the fix to one specific security attribute.
         * @param appstream_id the HSI AppStream ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 1.9.6
         */
        undo_host_security_attr(appstream_id: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Reverts the fix to one specific security attribute.
         * @param appstream_id HSI AppStream ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.9.6
         */
        undo_host_security_attr_async(appstream_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Reverts the fix to one specific security attribute.
         * @param appstream_id HSI AppStream ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.9.6
         */
        undo_host_security_attr_async(appstream_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Reverts the fix to one specific security attribute.
         * @param appstream_id HSI AppStream ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.9.6
         */
        undo_host_security_attr_async(appstream_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.undo_host_security_attr_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.9.6
         */
        undo_host_security_attr_finish(res: Gio.AsyncResult): boolean;

        /**
         * Removes the inhibit token added by the application.
         * @param inhibit_id the inhibit ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 1.8.11
         */
        uninhibit(inhibit_id: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Removes the inhibit token added by the application.
         * @param inhibit_id the inhibit ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.8.11
         */
        uninhibit_async(inhibit_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Removes the inhibit token added by the application.
         * @param inhibit_id the inhibit ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.8.11
         */
        uninhibit_async(inhibit_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Removes the inhibit token added by the application.
         * @param inhibit_id the inhibit ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.8.11
         */
        uninhibit_async(inhibit_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.uninhibit_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.8.11
         */
        uninhibit_finish(res: Gio.AsyncResult): boolean;

        /**
         * Unlocks a specific device so firmware can be read or wrote.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 0.7.0
         */
        unlock(device_id: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Unlocks a specific device so firmware can be read or wrote.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        unlock_async(device_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Unlocks a specific device so firmware can be read or wrote.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        unlock_async(device_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Unlocks a specific device so firmware can be read or wrote.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        unlock_async(device_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.unlock_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        unlock_finish(res: Gio.AsyncResult): boolean;

        /**
         * Updates the metadata. This allows a session process to download the metadata
         * and metadata signing file to be passed into the daemon to be checked and
         * parsed.
         * 
         * The `remote_id` allows the firmware to be tagged so that the remote can be
         * matched when the firmware is downloaded.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param metadata_fn the XML metadata filename
         * @param signature_fn the Jcat signature file
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 1.0.0
         */
        update_metadata(remote_id: string, metadata_fn: string, signature_fn: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Updates the metadata. This allows a session process to download the metadata
         * and metadata signing file to be passed into the daemon to be checked and
         * parsed.
         * 
         * The `remote_id` allows the firmware to be tagged so that the remote can be
         * matched when the firmware is downloaded.
         * @param remote_id remote ID, e.g. `lvfs-testing`
         * @param metadata XML metadata data
         * @param signature signature data
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for success
         * @since 1.4.5
         */
        update_metadata_bytes(remote_id: string, metadata: GLib.Bytes | Uint8Array, signature: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Updates the metadata. This allows a session process to download the metadata
         * and metadata signing file to be passed into the daemon to be checked and
         * parsed.
         * 
         * The `remote_id` allows the firmware to be tagged so that the remote can be
         * matched when the firmware is downloaded.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param remote_id remote ID, e.g. `lvfs-testing`
         * @param metadata XML metadata data
         * @param signature signature data
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        update_metadata_bytes_async(remote_id: string, metadata: GLib.Bytes | Uint8Array, signature: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Updates the metadata. This allows a session process to download the metadata
         * and metadata signing file to be passed into the daemon to be checked and
         * parsed.
         * 
         * The `remote_id` allows the firmware to be tagged so that the remote can be
         * matched when the firmware is downloaded.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param remote_id remote ID, e.g. `lvfs-testing`
         * @param metadata XML metadata data
         * @param signature signature data
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        update_metadata_bytes_async(remote_id: string, metadata: GLib.Bytes | Uint8Array, signature: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Updates the metadata. This allows a session process to download the metadata
         * and metadata signing file to be passed into the daemon to be checked and
         * parsed.
         * 
         * The `remote_id` allows the firmware to be tagged so that the remote can be
         * matched when the firmware is downloaded.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param remote_id remote ID, e.g. `lvfs-testing`
         * @param metadata XML metadata data
         * @param signature signature data
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        update_metadata_bytes_async(remote_id: string, metadata: GLib.Bytes | Uint8Array, signature: GLib.Bytes | Uint8Array, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.update_metadata_bytes_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        update_metadata_bytes_finish(res: Gio.AsyncResult): boolean;

        /**
         * Uploads data to a remote server. The {@link Client.set_user_agent} function
         * should be called before this method is used.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns response data, or `null` for error
         * @since 1.4.5
         */
        upload_bytes(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable: Gio.Cancellable | null): GLib.Bytes;

        /**
         * Uploads data to a remote server. The {@link Client.set_user_agent} function
         * should be called before this method is used.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        upload_bytes_async(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Bytes>;

        /**
         * Uploads data to a remote server. The {@link Client.set_user_agent} function
         * should be called before this method is used.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        upload_bytes_async(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Uploads data to a remote server. The {@link Client.set_user_agent} function
         * should be called before this method is used.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        upload_bytes_async(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Bytes> | void;

        /**
         * Gets the result of {@link FwupdClient.upload_bytes_async}.
         * @param res the asynchronous result
         * @returns response data, or `null` for error
         * @since 1.5.0
         */
        upload_bytes_finish(res: Gio.AsyncResult): GLib.Bytes;

        /**
         * Uploads a report to a remote server. The {@link Client.set_user_agent} function
         * should be called before this method is used.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns a URI (perhaps an empty string), or `null` for error
         * @since 1.9.20
         */
        upload_report(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable: Gio.Cancellable | null): string;

        /**
         * Uploads a report to a remote server. The {@link Client.set_user_agent} function
         * should be called before this method is used.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.9.20
         */
        upload_report_async(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;

        /**
         * Uploads a report to a remote server. The {@link Client.set_user_agent} function
         * should be called before this method is used.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.9.20
         */
        upload_report_async(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Uploads a report to a remote server. The {@link Client.set_user_agent} function
         * should be called before this method is used.
         * 
         * You must have called {@link Client.connect_async} on `self` before using
         * this method.
         * 
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * {@link Client.set_main_context}.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags download flags, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.9.20
         */
        upload_report_async(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Gets the result of {@link FwupdClient.upload_report_async}.
         * @param res the asynchronous result
         * @returns a URI (perhaps an empty string), or `null` for error
         * @since 1.9.20
         */
        upload_report_finish(res: Gio.AsyncResult): string;

        /**
         * Verify a specific device.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for verification success
         * @since 0.7.0
         */
        verify(device_id: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Verify a specific device.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        verify_async(device_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Verify a specific device.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        verify_async(device_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Verify a specific device.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        verify_async(device_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.verify_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        verify_finish(res: Gio.AsyncResult): boolean;

        /**
         * Update the verification record for a specific device.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @returns `true` for verification success
         * @since 0.8.0
         */
        verify_update(device_id: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Update the verification record for a specific device.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @since 1.5.0
         */
        verify_update_async(device_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Update the verification record for a specific device.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        verify_update_async(device_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Update the verification record for a specific device.
         * @param device_id the device ID
         * @param cancellable optional {@link Gio.Cancellable}
         * @param callback the function to run on completion
         * @since 1.5.0
         */
        verify_update_async(device_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Gets the result of {@link FwupdClient.verify_update_async}.
         * @param res the asynchronous result
         * @returns `true` for success
         * @since 1.5.0
         */
        verify_update_finish(res: Gio.AsyncResult): boolean;
    }


    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::battery-level": (pspec: GObject.ParamSpec) => void;
            "notify::battery-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::percentage": (pspec: GObject.ParamSpec) => void;
            "notify::problems": (pspec: GObject.ParamSpec) => void;
            "notify::request-flags": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::update-error": (pspec: GObject.ParamSpec) => void;
            "notify::update-state": (pspec: GObject.ParamSpec) => void;
            "notify::vendor": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::version-format": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Codec.ConstructorProps {
            battery_level: number;
            batteryLevel: number;
            battery_threshold: number;
            batteryThreshold: number;
            flags: bigint | number;
            id: string;
            parent: Device;
            percentage: number;
            problems: bigint | number;
            request_flags: bigint | number;
            requestFlags: bigint | number;
            status: number;
            update_error: string;
            updateError: string;
            update_state: number;
            updateState: number;
            vendor: string;
            version: string;
            version_format: number;
            versionFormat: number;
        }
    }

    /**
     * A physical device on the host with optionally updatable firmware.
     * 
     * See also: {@link FwupdRelease}
     * @gir-type Class
     */
    class Device extends GObject.Object implements Codec {
        static $gtype: GObject.GType<Device>;

        // Properties
        /**
         * The device battery level in percent.
         * @since 1.5.8
         * @default 101
         */
        get battery_level(): number;
        set battery_level(val: number);

        /**
         * The device battery level in percent.
         * @since 1.5.8
         * @default 101
         */
        get batteryLevel(): number;
        set batteryLevel(val: number);

        /**
         * The device battery threshold in percent.
         * @since 1.5.8
         * @default 101
         */
        get battery_threshold(): number;
        set battery_threshold(val: number);

        /**
         * The device battery threshold in percent.
         * @since 1.5.8
         * @default 101
         */
        get batteryThreshold(): number;
        set batteryThreshold(val: number);

        /**
         * The device flags.
         * @since 0.9.3
         * @default 0
         */
        get flags(): number;
        set flags(val: bigint | number);

        /**
         * The device ID.
         * @since 2.0.0
         * @default null
         */
        get id(): string;
        set id(val: string);

        /**
         * The device parent.
         * @since 1.0.8
         */
        get parent(): Device;
        set parent(val: Device);

        /**
         * The current device percentage.
         * @since 1.8.11
         * @default 0
         */
        get percentage(): number;
        set percentage(val: number);

        /**
         * The problems with the device that the user could fix, e.g. "lid open".
         * @since 1.8.1
         * @default 0
         */
        get problems(): number;
        set problems(val: bigint | number);

        /**
         * The device request flags.
         * @since 1.9.10
         * @default 0
         */
        get request_flags(): number;
        set request_flags(val: bigint | number);

        /**
         * The device request flags.
         * @since 1.9.10
         * @default 0
         */
        get requestFlags(): number;
        set requestFlags(val: bigint | number);

        /**
         * The current device status.
         * @since 1.4.0
         * @default 0
         */
        get status(): number;
        set status(val: number);

        /**
         * The device update error.
         * @since 0.9.8
         * @default null
         */
        get update_error(): string;
        set update_error(val: string);

        /**
         * The device update error.
         * @since 0.9.8
         * @default null
         */
        get updateError(): string;
        set updateError(val: string);

        /**
         * The device update state.
         * @since 0.9.8
         * @default 0
         */
        get update_state(): number;
        set update_state(val: number);

        /**
         * The device update state.
         * @since 0.9.8
         * @default 0
         */
        get updateState(): number;
        set updateState(val: number);

        /**
         * The device vendor.
         * @since 2.0.17
         * @default null
         */
        get vendor(): string;
        set vendor(val: string);

        /**
         * The device version.
         * @since 1.8.15
         * @default null
         */
        get version(): string;
        set version(val: string);

        /**
         * The version format of the device.
         * @since 1.2.9
         * @default 0
         */
        get version_format(): number;
        set version_format(val: number);

        /**
         * The version format of the device.
         * @since 1.2.9
         * @default 0
         */
        get versionFormat(): number;
        set versionFormat(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Device.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Device;

        // Signals
        /** @signal */
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Sets the parent object on all devices in the array using the parent ID.
         * @param devices devices
         * @since 1.3.7
         */
        static array_ensure_parents(devices: Device[]): void;

        /**
         * Creates an array of new devices that match using `fwupd_device_match_flags()`.
         * @param devices devices
         * @param include {@link Fwupd.DeviceFlags}, or {@link Fwupd.DeviceFlags.NONE}
         * @param exclude {@link Fwupd.DeviceFlags}, or {@link Fwupd.DeviceFlags.NONE}
         * @since 1.9.3
         */
        static array_filter_flags(devices: Device[], include: DeviceFlags, exclude: DeviceFlags): Device[];

        /**
         * Converts a string to an enumerated value.
         * @param val a string, e.g. `internal`
         * @since 0.7.0
         */
        static flag_from_string(val: string | null): DeviceFlags;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.DeviceFlags.INTERNAL}
         * @since 0.7.0
         */
        static flag_to_string(val: DeviceFlags): string;

        /**
         * Checks the string is a valid non-partial device ID. It is important to note
         * that the wildcard ID of `*` is not considered a valid ID in this function and
         * the client must check for this manually if this should be allowed.
         * @param device_id string to check, e.g. `d3fae86d95e5d56626129d00e332c4b8dac95442`
         * @since 1.4.1
         */
        static id_is_valid(device_id: string): boolean;

        /**
         * Converts a string to an enumerated value.
         * @param val a string, e.g. `system-power-too-low`
         * @since 1.8.1
         */
        static problem_from_string(val: string | null): DeviceProblem;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.DeviceProblem.SYSTEM_POWER_TOO_LOW}
         * @since 1.8.1
         */
        static problem_to_string(val: DeviceProblem): string;

        // Methods
        /**
         * Adds a device checksum.
         * @param checksum the device checksum
         * @since 0.9.3
         */
        add_checksum(checksum: string): void;

        /**
         * Adds a child device. An child device is logically linked to the primary
         * device in some way.
         * 
         * NOTE: You should never call this function from user code, it is for daemon
         * use only. Only use `fwupd_device_set_parent()` to set up a logical tree.
         * @param child Another {@link Fwupd.Device}
         * @since 1.5.1
         */
        add_child(child: Device): void;

        /**
         * Adds a specific device flag to the device.
         * @param flag the {@link Fwupd.DeviceFlags}
         * @since 0.9.3
         */
        add_flag(flag: DeviceFlags): void;

        /**
         * Adds the GUID if it does not already exist.
         * @param guid the GUID, e.g. `2082b5e0-7a64-478a-b1b2-e3404fab6dad`
         * @since 0.9.3
         */
        add_guid(guid: string): void;

        /**
         * Adds the icon name if it does not already exist.
         * @param icon the icon name, e.g. `input-mouse` or `/usr/share/icons/foo.png`
         * @since 0.9.8
         */
        add_icon(icon: string): void;

        /**
         * Adds the instance ID if it does not already exist.
         * @param instance_id the instance ID, e.g. `PCI\VEN_10EC&DEV_525A`
         * @since 1.2.5
         */
        add_instance_id(instance_id: string): void;

        /**
         * Adds an current issue to this device.
         * @param issue the update issue, e.g. `CVE-2019-12345`
         * @since 1.7.6
         */
        add_issue(issue: string): void;

        /**
         * Adds a specific device problem kind to the device.
         * @param problem the {@link Fwupd.DeviceProblem}, e.g. #FWUPD_DEVICE_PROBLEM_SYSTEM_POWER_TOO_LOW
         * @since 1.8.1
         */
        add_problem(problem: DeviceProblem): void;

        /**
         * Adds a device protocol name.
         * @param protocol the protocol name, e.g. `com.hughski.colorhug`
         * @since 1.5.8
         */
        add_protocol(protocol: string): void;

        /**
         * Adds a release for this device.
         * @param release a release
         * @since 0.9.8
         */
        add_release(release: Release): void;

        /**
         * Adds a specific device request flag to the device.
         * @param request_flag the {@link Fwupd.RequestFlags}
         * @since 1.9.10
         */
        add_request_flag(request_flag: RequestFlags): void;

        /**
         * Adds a device vendor ID.
         * @param vendor_id the ID, e.g. 'USB:0x1234'
         * @since 1.5.5
         */
        add_vendor_id(vendor_id: string): void;

        /**
         * Comparison function for comparing two device objects.
         * @param self2 a different device
         * @returns negative, 0 or positive
         * @since 1.1.1
         */
        compare(self2: Device): number;

        /**
         * Returns the battery level.
         * @returns value in percent
         * @since 1.8.1
         */
        get_battery_level(): number;

        /**
         * Returns the battery threshold under which a firmware update cannot be
         * performed.
         * 
         * If `fwupd_device_set_battery_threshold()` has not been used, a default value is
         * used instead.
         * @returns value in percent
         * @since 1.8.1
         */
        get_battery_threshold(): number;

        /**
         * Gets the current device branch.
         * @returns the device branch, or `null` if unset
         * @since 1.5.0
         */
        get_branch(): string;

        /**
         * Gets the device checksums.
         * @returns the checksums, which may be empty
         * @since 0.9.3
         */
        get_checksums(): string[];

        /**
         * Gets the device children. These can only be assigned using `fwupd_device_set_parent()`.
         * @returns the children, which may be empty
         * @since 1.3.7
         */
        get_children(): Device[];

        /**
         * Gets the composite ID, falling back to the device ID if unset.
         * 
         * The composite ID will be the same value for all parent, child and sibling
         * devices.
         * @returns the composite ID
         * @since 1.6.0
         */
        get_composite_id(): string | null;

        /**
         * Gets when the device was created.
         * @returns the UNIX time, or 0 if unset
         * @since 0.9.3
         */
        get_created(): number;

        /**
         * Gets the device URL.
         * @returns a URL, or `null` if unset
         * @since 2.1.2
         */
        get_details_url(): string;

        /**
         * Gets device flags.
         * @returns device flags, or 0 if unset
         * @since 0.9.3
         */
        get_flags(): number;

        /**
         * Gets the number of flash cycles left on the device
         * @returns the flash cycles left, or `null` if unset
         * @since 0.9.3
         */
        get_flashes_left(): number;

        /**
         * Gets the default GUID.
         * @returns the GUID, or `null` if unset
         * @since 0.9.3
         */
        get_guid_default(): string;

        /**
         * Gets the GUIDs.
         * @returns the GUIDs
         * @since 0.9.3
         */
        get_guids(): string[];

        /**
         * Gets the icon names to use for the device.
         * 
         * NOTE: Icons specified without a full path are stock icons and should
         * be loaded from the users icon theme.
         * @returns an array of icon names
         * @since 0.9.8
         */
        get_icons(): string[];

        /**
         * Gets the ID.
         * @returns the ID, or `null` if unset
         * @since 0.9.3
         */
        get_id(): string;

        /**
         * Gets the device ID suffixed with the display name if set.
         * @returns a string value, or `null` if invalid.
         * @since 2.1.7
         */
        get_id_display(): string;

        /**
         * Gets the time estimate for firmware installation (in seconds)
         * @returns the estimated time to flash this device (or 0 if unset)
         * @since 1.1.3
         */
        get_install_duration(): number;

        /**
         * Gets the instance IDs.
         * @returns the instance IDs
         * @since 1.2.5
         */
        get_instance_ids(): string[];

        /**
         * Gets the list of issues currently affecting this device.
         * @returns the issues, which may be empty
         * @since 1.7.6
         */
        get_issues(): string[];

        /**
         * Gets when the device was modified.
         * @returns the UNIX time, or 0 if unset
         * @since 0.9.3
         */
        get_modified(): number;

        /**
         * Gets the device name.
         * @returns the device name, or `null` if unset
         * @since 0.9.3
         */
        get_name(): string;

        /**
         * Gets the parent.
         * @returns the parent device, or `null` if unset
         * @since 1.0.8
         */
        get_parent(): Device;

        /**
         * Gets the parent ID.
         * @returns the parent ID, or `null` if unset
         * @since 1.0.8
         */
        get_parent_id(): string;

        /**
         * Returns the percentage completion of the device.
         * @returns the percentage value
         * @since 1.8.11
         */
        get_percentage(): number;

        /**
         * Gets the plugin that created the device.
         * @returns the plugin name, or `null` if unset
         * @since 1.0.0
         */
        get_plugin(): string;

        /**
         * Gets device problems.
         * @returns device problems, or 0 if unset
         * @since 1.8.1
         */
        get_problems(): number;

        /**
         * Gets the device protocol names.
         * @returns the device protocol names
         * @since 1.5.8
         */
        get_protocols(): string[];

        /**
         * Gets the default release for this device.
         * @returns the {@link Fwupd.Release}, or `null` if not set
         * @since 0.9.8
         */
        get_release_default(): Release;

        /**
         * Gets all the releases for this device.
         * @returns array of releases
         * @since 0.9.8
         */
        get_releases(): Release[];

        /**
         * Gets device request flags.
         * @returns device request flags, or 0 if unset
         * @since 1.9.10
         */
        get_request_flags(): number;

        /**
         * Gets the device root.
         * @returns the root device, or `null` if unset
         * @since 1.7.4
         */
        get_root(): Device;

        /**
         * Gets the serial number for the device.
         * @returns a string value, or `null` if never set.
         * @since 1.1.2
         */
        get_serial(): string;

        /**
         * Returns what the device is currently doing.
         * @returns the status value, e.g. {@link Fwupd.Status.DEVICE_WRITE}
         * @since 1.4.0
         */
        get_status(): Status;

        /**
         * Gets the device summary.
         * @returns the device summary, or `null` if unset
         * @since 0.9.3
         */
        get_summary(): string;

        /**
         * Gets the update error string.
         * @returns the update error string, or `null` if unset
         * @since 0.9.8
         */
        get_update_error(): string;

        /**
         * Gets the update state.
         * @returns the update state, or {@link Fwupd.UpdateState.UNKNOWN} if unset
         * @since 0.9.8
         */
        get_update_state(): UpdateState;

        /**
         * Gets the device vendor.
         * @returns the device vendor, or `null` if unset
         * @since 0.9.3
         */
        get_vendor(): string;

        /**
         * Gets the device vendor ID.
         * @returns the device vendor ID
         * @since 1.5.5
         */
        get_vendor_ids(): string[];

        /**
         * Gets the device version.
         * @returns the device version, or `null` if unset
         * @since 0.9.3
         */
        get_version(): string;

        /**
         * Gets the version of the bootloader.
         * @returns the device version_bootloader, or `null` if unset
         * @since 0.9.3
         */
        get_version_bootloader(): string;

        /**
         * Gets the bootloader version of firmware the device will accept in raw format.
         * @returns integer version number, or %0 if unset
         * @since 1.4.0
         */
        get_version_bootloader_raw(): number;

        /**
         * Gets the date when the firmware was built.
         * @returns the UNIX time, or 0 if unset
         * @since 1.6.2
         */
        get_version_build_date(): number;

        /**
         * Gets the version format.
         * @returns the version format, or {@link Fwupd.VersionFormat.UNKNOWN} if unset
         * @since 1.2.9
         */
        get_version_format(): VersionFormat;

        /**
         * Gets the highest version of firmware the device will accept.
         * @returns the device version_highest, or `null` if unset
         * @since 2.1.2
         */
        get_version_highest(): string;

        /**
         * Gets the highest version of firmware the device will accept in raw format.
         * @returns integer version number, or %0 if unset
         * @since 2.1.2
         */
        get_version_highest_raw(): number;

        /**
         * Gets the lowest version of firmware the device will accept.
         * @returns the device version_lowest, or `null` if unset
         * @since 0.9.3
         */
        get_version_lowest(): string;

        /**
         * Gets the lowest version of firmware the device will accept in raw format.
         * @returns integer version number, or %0 if unset
         * @since 1.4.0
         */
        get_version_lowest_raw(): number;

        /**
         * Gets the raw version number from the hardware before converted to a string.
         * @returns the hardware version, or 0 if unset
         * @since 1.3.6
         */
        get_version_raw(): number;

        /**
         * Finds out if the device has this specific checksum.
         * @param checksum the device checksum
         * @returns `true` if the checksum name is found
         * @since 1.8.7
         */
        has_checksum(checksum: string): boolean;

        /**
         * Finds if the device has a specific device flag.
         * @param flag the {@link Fwupd.DeviceFlags}
         * @returns `true` if the flag is set
         * @since 0.9.3
         */
        has_flag(flag: DeviceFlags): boolean;

        /**
         * Finds out if the device has this specific GUID.
         * @param guid the GUID, e.g. `2082b5e0-7a64-478a-b1b2-e3404fab6dad`
         * @returns `true` if the GUID is found
         * @since 0.9.3
         */
        has_guid(guid: string): boolean;

        /**
         * Finds out if the device has this specific icon.
         * @param icon the icon name, e.g. `input-mouse` or `/usr/share/icons/foo.png`
         * @returns `true` if the icon name is found
         * @since 1.6.2
         */
        has_icon(icon: string): boolean;

        /**
         * Finds out if the device has this specific instance ID.
         * @param instance_id the instance ID, e.g. `PCI\VEN_10EC&DEV_525A`
         * @returns `true` if the instance ID is found
         * @since 1.2.5
         */
        has_instance_id(instance_id: string): boolean;

        /**
         * Finds if the device has a specific device problem kind.
         * @param problem the {@link Fwupd.DeviceProblem}
         * @returns `true` if the problem is set
         * @since 1.8.1
         */
        has_problem(problem: DeviceProblem): boolean;

        /**
         * Finds out if the device has this specific protocol name.
         * @param protocol the protocol name, e.g. `com.hughski.colorhug`
         * @returns `true` if the protocol name is found
         * @since 1.5.8
         */
        has_protocol(protocol: string): boolean;

        /**
         * Finds if the device has a specific device request flag.
         * @param request_flag the {@link Fwupd.RequestFlags}
         * @returns `true` if the request_flag is set
         * @since 1.9.10
         */
        has_request_flag(request_flag: RequestFlags): boolean;

        /**
         * Finds out if the device has this specific vendor ID.
         * @param vendor_id the vendor ID, e.g. 'USB:0x1234'
         * @returns `true` if the vendor ID is found
         * @since 1.5.5
         */
        has_vendor_id(vendor_id: string): boolean;

        /**
         * Copy all properties from the donor object if they have not already been set.
         * @param donor Another {@link Fwupd.Device}
         * @since 1.1.0
         */
        incorporate(donor: Device): void;

        /**
         * Check if the device flags match.
         * @param include {@link Fwupd.DeviceFlags}, or {@link Fwupd.DeviceFlags.NONE}
         * @param exclude {@link Fwupd.DeviceFlags}, or {@link Fwupd.DeviceFlags.NONE}
         * @returns `true` if the device flags match
         * @since 1.9.3
         */
        match_flags(include: DeviceFlags, exclude: DeviceFlags): boolean;

        /**
         * Removes a child device.
         * 
         * NOTE: You should never call this function from user code, it is for daemon
         * use only.
         * @param child Another {@link Fwupd.Device}
         * @since 1.6.2
         */
        remove_child(child: Device): void;

        /**
         * Removes all child devices.
         * 
         * NOTE: You should never call this function from user code, it is for daemon
         * use only.
         * @since 2.0.0
         */
        remove_children(): void;

        /**
         * Removes a specific device flag from the device.
         * @param flag the {@link Fwupd.DeviceFlags}
         * @since 0.9.3
         */
        remove_flag(flag: DeviceFlags): void;

        /**
         * Removes a specific device problem kind from the device.
         * @param problem the {@link Fwupd.DeviceProblem}, e.g. #FWUPD_DEVICE_PROBLEM_SYSTEM_POWER_TOO_LOW
         * @since 1.8.1
         */
        remove_problem(problem: DeviceProblem): void;

        /**
         * Removes a specific device request flag from the device.
         * @param request_flag the {@link Fwupd.RequestFlags}
         * @since 1.9.10
         */
        remove_request_flag(request_flag: RequestFlags): void;

        /**
         * Sets the battery level, or `FWUPD_BATTERY_LEVEL_INVALID`.
         * 
         * Setting this allows fwupd to show a warning if the device change is too low
         * to perform the update.
         * @param battery_level the percentage value
         * @since 1.8.1
         */
        set_battery_level(battery_level: number): void;

        /**
         * Sets the battery level, or `FWUPD_BATTERY_LEVEL_INVALID` for the default.
         * 
         * Setting this allows fwupd to show a warning if the device change is too low
         * to perform the update.
         * @param battery_threshold the percentage value
         * @since 1.8.1
         */
        set_battery_threshold(battery_threshold: number): void;

        /**
         * Sets the current device branch.
         * @param branch the device one line branch
         * @since 1.5.0
         */
        set_branch(branch: string | null): void;

        /**
         * Sets the composite ID, which is usually a SHA1 hash of a grandparent or
         * parent device.
         * @param composite_id a device ID
         * @since 1.6.0
         */
        set_composite_id(composite_id: string | null): void;

        /**
         * Sets when the device was created.
         * @param created the UNIX time
         * @since 0.9.3
         */
        set_created(created: bigint | number): void;

        /**
         * Sets the device URL.
         * @param details_url a URL, or `null`
         * @since 2.1.2
         */
        set_details_url(details_url: string | null): void;

        /**
         * Sets device flags.
         * @param flags device flags, e.g. {@link Fwupd.DeviceFlags.REQUIRE_AC}
         * @since 0.9.3
         */
        set_flags(flags: bigint | number): void;

        /**
         * Sets the number of flash cycles left on the device
         * @param flashes_left the description
         * @since 0.9.3
         */
        set_flashes_left(flashes_left: number): void;

        /**
         * Sets the ID.
         * @param id the device ID, usually a SHA1 hash
         * @since 0.9.3
         */
        set_id(id: string | null): void;

        /**
         * Sets the time estimate for firmware installation (in seconds)
         * @param duration the amount of time
         * @since 1.1.3
         */
        set_install_duration(duration: number): void;

        /**
         * Sets when the device was modified.
         * @param modified the UNIX time
         * @since 0.9.3
         */
        set_modified(modified: bigint | number): void;

        /**
         * Sets the device name.
         * @param name the device name, e.g. `ColorHug2`
         * @since 0.9.3
         */
        set_name(name: string | null): void;

        /**
         * Sets the parent. Only used internally.
         * @param parent another {@link Fwupd.Device}
         * @since 1.0.8
         */
        set_parent(parent: Device | null): void;

        /**
         * Sets the parent ID.
         * @param parent_id the device ID, usually a SHA1 hash
         * @since 1.0.8
         */
        set_parent_id(parent_id: string | null): void;

        /**
         * Sets the percentage completion of the device.
         * @param percentage the percentage value
         * @since 1.8.11
         */
        set_percentage(percentage: number): void;

        /**
         * Sets the plugin that created the device.
         * @param plugin the plugin name, e.g. `hughski_colorhug`
         * @since 1.0.0
         */
        set_plugin(plugin: string | null): void;

        /**
         * Sets device problems.
         * @param problems device problems, e.g. {@link Fwupd.DeviceProblem.SYSTEM_POWER_TOO_LOW}
         * @since 1.8.1
         */
        set_problems(problems: bigint | number): void;

        /**
         * Sets device request flags.
         * @param request_flags device request flags, e.g. `FWUPD_DEVICE_REQUEST_FLAG_REQUIRE_AC`
         * @since 1.9.10
         */
        set_request_flags(request_flags: bigint | number): void;

        /**
         * Sets the serial number for the device.
         * @param serial the device serial number
         * @since 1.1.2
         */
        set_serial(serial: string | null): void;

        /**
         * Sets what the device is currently doing.
         * @param status the status value, e.g. {@link Fwupd.Status.DEVICE_WRITE}
         * @since 1.4.0
         */
        set_status(status: Status): void;

        /**
         * Sets the device summary.
         * @param summary the device one line summary
         * @since 0.9.3
         */
        set_summary(summary: string | null): void;

        /**
         * Sets the update error string.
         * @param update_error the update error string
         * @since 0.9.8
         */
        set_update_error(update_error: string | null): void;

        /**
         * Sets the update state.
         * @param update_state the state, e.g. {@link Fwupd.UpdateState.PENDING}
         * @since 0.9.8
         */
        set_update_state(update_state: UpdateState): void;

        /**
         * Sets the device vendor.
         * @param vendor the vendor
         * @since 0.9.3
         */
        set_vendor(vendor: string | null): void;

        /**
         * Sets the device version.
         * @param version the device version, e.g. `1.2.3`
         * @since 0.9.3
         */
        set_version(version: string | null): void;

        /**
         * Sets the bootloader version.
         * @param version_bootloader the version
         * @since 0.9.3
         */
        set_version_bootloader(version_bootloader: string | null): void;

        /**
         * Sets the raw bootloader version number from the hardware before converted to a string.
         * @param version_bootloader_raw the raw hardware version
         * @since 1.4.0
         */
        set_version_bootloader_raw(version_bootloader_raw: bigint | number): void;

        /**
         * Sets the date when the firmware was built.
         * @param version_build_date the UNIX time
         * @since 1.6.2
         */
        set_version_build_date(version_build_date: bigint | number): void;

        /**
         * Sets the version format.
         * @param version_format the version format, e.g. {@link Fwupd.VersionFormat.NUMBER}
         * @since 1.2.9
         */
        set_version_format(version_format: VersionFormat): void;

        /**
         * Sets the highest version of firmware the device will accept.
         * @param version_highest the version
         * @since 2.1.2
         */
        set_version_highest(version_highest: string | null): void;

        /**
         * Sets the raw highest version number from the hardware before being converted to a string.
         * @param version_highest_raw the raw highest version
         * @since 2.1.2
         */
        set_version_highest_raw(version_highest_raw: bigint | number): void;

        /**
         * Sets the lowest version of firmware the device will accept.
         * @param version_lowest the version
         * @since 0.9.3
         */
        set_version_lowest(version_lowest: string | null): void;

        /**
         * Sets the raw lowest version number from the hardware before converted to a string.
         * @param version_lowest_raw the raw hardware version
         * @since 1.4.0
         */
        set_version_lowest_raw(version_lowest_raw: bigint | number): void;

        /**
         * Sets the raw version number from the hardware before converted to a string.
         * @param version_raw the raw hardware version
         * @since 1.3.6
         */
        set_version_raw(version_raw: bigint | number): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         */
        add_string(idt: number, str: GLib.String): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON string.
         * @param json JSON text
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json_string(json: string): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @returns `true` on success
         * @since 2.0.0
         */
        from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON builder object.
         * @param json_obj a JSON builder
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         */
        to_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON string.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a string
         * @since 2.0.0
         */
        to_json_string(flags: CodecFlags): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @returns a string
         * @since 2.0.0
         */
        to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a {@link GLib.Variant}
         * @since 2.0.0
         */
        to_variant(flags: CodecFlags): GLib.Variant;

        /**
         * @param json_obj 
         * @param flags 
         * @virtual
         */
        vfunc_add_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         * @virtual
         */
        vfunc_add_string(idt: number, str: GLib.String): void;

        /**
         * @param builder 
         * @param flags 
         * @virtual
         */
        vfunc_add_variant(builder: GLib.VariantBuilder, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_variant(flags: CodecFlags): GLib.Variant;
    }


    namespace JcatBlob {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Codec.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class JcatBlob extends GObject.Object implements Codec {
        static $gtype: GObject.GType<JcatBlob>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JcatBlob.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<JcatBlob.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](kind: JcatBlobKind, data: GLib.Bytes | Uint8Array, flags: JcatBlobFlags): JcatBlob;

        static new_utf8(kind: JcatBlobKind, data: string): JcatBlob;

        // Signals
        /** @signal */
        connect<K extends keyof JcatBlob.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JcatBlob.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JcatBlob.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JcatBlob.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JcatBlob.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JcatBlob.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.JcatBlobFlags.IS_UTF8}
         * @since 2.1.3
         */
        static flags_to_string(val: JcatBlobFlags): string;

        /**
         * Converts a string to an enumerated value.
         * @param val a string, e.g. `sha256`
         * @since 2.1.3
         */
        static kind_from_string(val: string | null): JcatBlobKind;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.JcatBlobKind.SHA256}
         * @since 2.1.3
         */
        static kind_to_string(val: JcatBlobKind): string;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.JcatBlobMethod.CHECKSUM}
         * @since 2.1.3
         */
        static method_to_string(val: JcatBlobMethod): string;

        // Methods
        /**
         * Gets the data stored in the blob, typically in binary (unprintable) form.
         * @returns a {@link GLib.Bytes}, or `null` if the filename was not found
         * @since 2.1.3
         */
        get_data(): GLib.Bytes;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;

        /**
         * Gets the data stored in the blob, in human readable form.
         * @returns either UTF-8 text, or base64 encoded version of binary data
         * @since 2.1.3
         */
        get_data_as_string(): string;

        /**
         * gets the blob kind
         * @returns {@link Fwupd.JcatBlobKind}, e.g. {@link Fwupd.JcatBlobKind.SHA256}
         * @since 2.1.3
         */
        get_kind(): JcatBlobKind;

        /**
         * Gets the blob target.
         * @returns {@link Fwupd.JcatBlobKind}, e.g. {@link Fwupd.JcatBlobKind.SHA256}
         * @since 2.1.3
         */
        get_target(): JcatBlobKind;

        /**
         * Gets the creation timestamp for the blob.
         * @returns UTC UNIX time, or 0 if unset
         * @since 2.1.3
         */
        get_timestamp(): number;

        /**
         * Sets the blob target.
         * @param target a {@link Fwupd.JcatBlobKind}, e.g. {@link Fwupd.JcatBlobKind.SHA256}
         * @since 2.1.3
         */
        set_target(target: JcatBlobKind): void;

        /**
         * Sets the creation timestamp for the blob.
         * @param timestamp UTC timestamp
         * @since 2.1.3
         */
        set_timestamp(timestamp: bigint | number): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         */
        add_string(idt: number, str: GLib.String): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON string.
         * @param json JSON text
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json_string(json: string): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @returns `true` on success
         * @since 2.0.0
         */
        from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON builder object.
         * @param json_obj a JSON builder
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         */
        to_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON string.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a string
         * @since 2.0.0
         */
        to_json_string(flags: CodecFlags): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @returns a string
         * @since 2.0.0
         */
        to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a {@link GLib.Variant}
         * @since 2.0.0
         */
        to_variant(flags: CodecFlags): GLib.Variant;

        /**
         * @param json_obj 
         * @param flags 
         * @virtual
         */
        vfunc_add_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         * @virtual
         */
        vfunc_add_string(idt: number, str: GLib.String): void;

        /**
         * @param builder 
         * @param flags 
         * @virtual
         */
        vfunc_add_variant(builder: GLib.VariantBuilder, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_variant(flags: CodecFlags): GLib.Variant;
    }


    namespace JcatFile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Codec.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class JcatFile extends GObject.Object implements Codec {
        static $gtype: GObject.GType<JcatFile>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JcatFile.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<JcatFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): JcatFile;

        // Signals
        /** @signal */
        connect<K extends keyof JcatFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JcatFile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JcatFile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JcatFile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JcatFile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JcatFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds an item to a file.
         * @param item {@link Fwupd.JcatItem}
         * @since 2.1.3
         */
        add_item(item: JcatItem): void;

        /**
         * Exports a FwupdJcat file to a compressed blob.
         * @returns a {@link GLib.Bytes}
         * @since 2.1.3
         */
        export_bytes(): GLib.Bytes;

        /**
         * Exports a FwupdJcat file to raw JSON.
         * @param flags a {@link Fwupd.CodecFlags}, typically {@link Fwupd.CodecFlags.NONE}
         * @returns JSON output, or `null` for error
         * @since 2.1.3
         */
        export_json(flags: CodecFlags): string;

        /**
         * Finds the item with the specified ID, falling back to the ID alias if set.
         * @param id An ID, typically a filename basename
         * @returns a {@link Fwupd.JcatItem}, or `null` if the filename was not found
         * @since 2.1.3
         */
        get_item_by_id(id: string): JcatItem;

        /**
         * Finds the default item. If more than one {@link Fwupd.JcatItem} exists this function will
         * return with an error.
         * @returns a {@link Fwupd.JcatItem}, or `null` if no default exists
         * @since 2.1.3
         */
        get_item_default(): JcatItem;

        /**
         * Returns all the items in the file.
         * @returns all the items in the file
         * @since 2.1.3
         */
        get_items(): JcatItem[];

        /**
         * Returns the major version number of the FwupdJcat specification
         * @returns integer
         * @since 2.1.3
         */
        get_version_major(): number;

        /**
         * Returns the minor version number of the FwupdJcat specification
         * @returns integer
         * @since 2.1.3
         */
        get_version_minor(): number;

        /**
         * Imports a compressed FwupdJcat file from a blob of data.
         * @param blob a {@link GLib.Bytes}
         * @returns `true` for success
         * @since 2.1.3
         */
        import_bytes(blob: GLib.Bytes | Uint8Array): boolean;

        /**
         * Imports a FwupdJcat file from raw JSON.
         * @param json JSON data
         * @returns `true` for success
         * @since 2.1.3
         */
        import_json(json: string): boolean;

        /**
         * Imports a compressed FwupdJcat file from a file.
         * @param istream {@link Gio.InputStream}
         * @returns `true` for success
         * @since 2.1.3
         */
        import_stream(istream: Gio.InputStream): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         */
        add_string(idt: number, str: GLib.String): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON string.
         * @param json JSON text
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json_string(json: string): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @returns `true` on success
         * @since 2.0.0
         */
        from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON builder object.
         * @param json_obj a JSON builder
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         */
        to_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON string.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a string
         * @since 2.0.0
         */
        to_json_string(flags: CodecFlags): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @returns a string
         * @since 2.0.0
         */
        to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a {@link GLib.Variant}
         * @since 2.0.0
         */
        to_variant(flags: CodecFlags): GLib.Variant;

        /**
         * @param json_obj 
         * @param flags 
         * @virtual
         */
        vfunc_add_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         * @virtual
         */
        vfunc_add_string(idt: number, str: GLib.String): void;

        /**
         * @param builder 
         * @param flags 
         * @virtual
         */
        vfunc_add_variant(builder: GLib.VariantBuilder, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_variant(flags: CodecFlags): GLib.Variant;
    }


    namespace JcatItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Codec.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class JcatItem extends GObject.Object implements Codec {
        static $gtype: GObject.GType<JcatItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JcatItem.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<JcatItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](id: string): JcatItem;

        // Signals
        /** @signal */
        connect<K extends keyof JcatItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JcatItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JcatItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JcatItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JcatItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JcatItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds an item alias ID. Alias IDs are matched when using functions such as
         * `fwupd_jcat_file_get_item_by_id()`.
         * @param id An item ID alias, typically a file basename
         * @since 2.1.3
         */
        add_alias_id(id: string): void;

        /**
         * Adds a new blob to the item.
         * @param blob {@link Fwupd.JcatBlob}
         * @since 2.1.3
         */
        add_blob(blob: JcatBlob): void;

        /**
         * Gets the list of alias IDs.
         * @returns array
         * @since 2.1.3
         */
        get_alias_ids(): string[];

        /**
         * Gets the item blobs by a specific kind.
         * @param kind {@link Fwupd.JcatBlobKind}, e.g. {@link Fwupd.JcatBlobKind.SHA256}
         * @returns a blob, or `null`
         * @since 2.1.3
         */
        get_blob_by_kind(kind: JcatBlobKind): JcatBlob;

        /**
         * Gets all the blobs for this item.
         * @returns blobs
         * @since 2.1.3
         */
        get_blobs(): JcatBlob[];

        /**
         * Gets the item blobs by a specific kind.
         * @param kind {@link Fwupd.JcatBlobKind}, e.g. {@link Fwupd.JcatBlobKind.SHA256}
         * @returns blobs
         * @since 2.1.3
         */
        get_blobs_by_kind(kind: JcatBlobKind): JcatBlob[];

        /**
         * Returns the item ID.
         * @returns string
         * @since 2.1.3
         */
        get_id(): string;

        /**
         * Returns the item ID, if safe to use as a path.
         * @returns string
         * @since 2.1.3
         */
        get_id_safe(): string;

        /**
         * Finds out if any of the blobs are targeting an internal checksum.
         * If this returns with success then the caller might be able to use functions like
         * `fwupd_jcat_context_verify_target()` supplying some target checksums.
         * @returns `true` on success
         * @since 2.1.3
         */
        has_target(): boolean;

        /**
         * Removes an item alias ID.
         * @param id An item ID alias, typically a file basename
         * @since 2.1.3
         */
        remove_alias_id(id: string): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         */
        add_string(idt: number, str: GLib.String): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON string.
         * @param json JSON text
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json_string(json: string): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @returns `true` on success
         * @since 2.0.0
         */
        from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON builder object.
         * @param json_obj a JSON builder
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         */
        to_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON string.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a string
         * @since 2.0.0
         */
        to_json_string(flags: CodecFlags): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @returns a string
         * @since 2.0.0
         */
        to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a {@link GLib.Variant}
         * @since 2.0.0
         */
        to_variant(flags: CodecFlags): GLib.Variant;

        /**
         * @param json_obj 
         * @param flags 
         * @virtual
         */
        vfunc_add_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         * @virtual
         */
        vfunc_add_string(idt: number, str: GLib.String): void;

        /**
         * @param builder 
         * @param flags 
         * @virtual
         */
        vfunc_add_variant(builder: GLib.VariantBuilder, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_variant(flags: CodecFlags): GLib.Variant;
    }


    namespace JsonParser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A streaming tokenizer JSON parser that is resistant to malicious input.
     * 
     * One item of note is that most of the JSON string methods actually return a {@link GLib.RefString} -- which
     * can be used to avoid lots of tiny memory allocation when parsing JSON into other objects.
     * 
     * See also: {@link FwupdJsonArray} {@link FwupdJsonObject} {@link FwupdJsonNode}
     * @gir-type Class
     */
    class JsonParser extends GObject.Object {
        static $gtype: GObject.GType<JsonParser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: JsonParser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<JsonParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): JsonParser;

        // Signals
        /** @signal */
        connect<K extends keyof JsonParser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JsonParser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof JsonParser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, JsonParser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof JsonParser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<JsonParser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Sets the maximum nesting depth.
         * 
         * The default maximum depth is `G_MAXUINT16`, but users of {@link Fwupd.JsonParser} should use this function
         * to set a better limit.
         * @param max_depth max nesting depth
         * @since 2.1.1
         */
        set_max_depth(max_depth: number): void;

        /**
         * Sets the maximum number of items in an array or object.
         * 
         * The default maximum items is `G_MAXUINT16`, but users of {@link Fwupd.JsonParser} should use this function
         * to set a better limit.
         * @param max_items max items
         * @since 2.1.1
         */
        set_max_items(max_items: number): void;

        /**
         * Sets the maximum size of a quoted string.
         * 
         * The default maximum quoted string length is `G_MAXUINT16`, but users of {@link Fwupd.JsonParser} should
         * use this function to set a better limit.
         * @param max_quoted maximum size of a quoted string
         * @since 2.1.1
         */
        set_max_quoted(max_quoted: number): void;
    }


    namespace Plugin {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Codec.ConstructorProps {
            flags: bigint | number;
            name: string;
        }
    }

    /**
     * A plugin which is used by fwupd to enumerate and update devices.
     * 
     * See also: {@link FwupdRelease}
     * @gir-type Class
     */
    class Plugin extends GObject.Object implements Codec {
        static $gtype: GObject.GType<Plugin>;

        // Properties
        /**
         * The plugin flags.
         * @since 1.5.0
         * @default 0
         */
        get flags(): number;
        set flags(val: bigint | number);

        /**
         * The plugin name.
         * @since 1.5.0
         * @default null
         */
        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Plugin.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Plugin;

        // Signals
        /** @signal */
        connect<K extends keyof Plugin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Plugin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Plugin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Plugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts a string to an enumerated value.
         * @param val a string, e.g. `disabled`
         * @since 1.5.0
         */
        static flag_from_string(val: string | null): PluginFlags;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.PluginFlags.DISABLED}
         * @since 1.5.0
         */
        static flag_to_string(val: PluginFlags): string;

        // Methods
        /**
         * Adds a specific plugin flag to the plugin.
         * @param flag the {@link Fwupd.PluginFlags}
         * @since 1.5.0
         */
        add_flag(flag: PluginFlags): void;

        /**
         * Gets the plugin flags.
         * @returns plugin flags, or 0 if unset
         * @since 1.5.0
         */
        get_flags(): number;

        /**
         * Gets the plugin name.
         * @returns the plugin name, or `null` if unset
         * @since 1.5.0
         */
        get_name(): string;

        /**
         * Finds if the plugin has a specific plugin flag.
         * @param flag a plugin flag
         * @returns `true` if the flag is set
         * @since 1.5.0
         */
        has_flag(flag: PluginFlags): boolean;

        /**
         * Removes a specific plugin flag from the plugin.
         * @param flag a plugin flag
         * @since 1.5.0
         */
        remove_flag(flag: PluginFlags): void;

        /**
         * Sets the plugin flags.
         * @param flags plugin flags, e.g. {@link Fwupd.PluginFlags.CAPSULES_UNSUPPORTED}
         * @since 1.5.0
         */
        set_flags(flags: bigint | number): void;

        /**
         * Sets the plugin name.
         * @param name the plugin name, e.g. `bios`
         * @since 1.5.0
         */
        set_name(name: string): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         */
        add_string(idt: number, str: GLib.String): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON string.
         * @param json JSON text
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json_string(json: string): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @returns `true` on success
         * @since 2.0.0
         */
        from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON builder object.
         * @param json_obj a JSON builder
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         */
        to_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON string.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a string
         * @since 2.0.0
         */
        to_json_string(flags: CodecFlags): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @returns a string
         * @since 2.0.0
         */
        to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a {@link GLib.Variant}
         * @since 2.0.0
         */
        to_variant(flags: CodecFlags): GLib.Variant;

        /**
         * @param json_obj 
         * @param flags 
         * @virtual
         */
        vfunc_add_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         * @virtual
         */
        vfunc_add_string(idt: number, str: GLib.String): void;

        /**
         * @param builder 
         * @param flags 
         * @virtual
         */
        vfunc_add_variant(builder: GLib.VariantBuilder, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_variant(flags: CodecFlags): GLib.Variant;
    }


    namespace Release {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::remote-id": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Codec.ConstructorProps {
            remote_id: string;
            remoteId: string;
        }
    }

    /**
     * A firmware release with a specific version.
     * 
     * Devices can have more than one release, and the releases are typically
     * ordered by their version.
     * 
     * See also: {@link FwupdDevice}
     * @gir-type Class
     */
    class Release extends GObject.Object implements Codec {
        static $gtype: GObject.GType<Release>;

        // Properties
        /**
         * The remote ID.
         * @since 1.8.0
         * @default null
         */
        get remote_id(): string;
        set remote_id(val: string);

        /**
         * The remote ID.
         * @since 1.8.0
         * @default null
         */
        get remoteId(): string;
        set remoteId(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Release.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Release.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Release;

        // Signals
        /** @signal */
        connect<K extends keyof Release.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Release.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Release.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Release.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Release.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Release.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates an array of new releases that match using `fwupd_release_match_flags()`.
         * @param rels releases
         * @param include {@link Fwupd.ReleaseFlags}, or {@link Fwupd.ReleaseFlags.NONE}
         * @param exclude {@link Fwupd.ReleaseFlags}, or {@link Fwupd.ReleaseFlags.NONE}
         * @since 1.9.3
         */
        static array_filter_flags(rels: Release[], include: ReleaseFlags, exclude: ReleaseFlags): Release[];

        /**
         * Converts a string to an enumerated value.
         * @param val a string, e.g. `trusted-payload`
         * @since 1.2.6
         */
        static flag_from_string(val: string | null): ReleaseFlags;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.ReleaseFlags.TRUSTED_PAYLOAD}
         * @since 1.2.6
         */
        static flag_to_string(val: ReleaseFlags): string;

        /**
         * Converts a string to an enumerated value.
         * @param val a string, e.g. `low`
         * @since 1.4.0
         */
        static urgency_from_string(val: string | null): ReleaseUrgency;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.ReleaseUrgency.LOW}
         * @since 1.4.0
         */
        static urgency_to_string(val: ReleaseUrgency): string;

        // Methods
        /**
         * Adds the update category.
         * @param category the update category, e.g. `X-EmbeddedController`
         * @since 1.2.7
         */
        add_category(category: string): void;

        /**
         * Sets the update checksum.
         * @param checksum the update container checksum
         * @since 0.9.3
         */
        add_checksum(checksum: string): void;

        /**
         * Adds a specific release flag to the release.
         * @param flag the {@link Fwupd.ReleaseFlags}
         * @since 1.2.6
         */
        add_flag(flag: ReleaseFlags): void;

        /**
         * Adds an resolved issue to this release.
         * @param issue the update issue, e.g. `CVE-2019-12345`
         * @since 1.3.2
         */
        add_issue(issue: string): void;

        /**
         * Adds an update URI, i.e. where you can download the firmware from.
         * @param location the update URI
         * @since 1.5.6
         */
        add_location(location: string): void;

        /**
         * Sets multiple release metadata items.
         * @param hash the key-values
         * @since 1.0.4
         */
        add_metadata(hash: never): void;

        /**
         * Sets a release metadata item.
         * @param key the key
         * @param value the value
         * @since 1.0.4
         */
        add_metadata_item(key: string, value: string): void;

        /**
         * Adds a report for this release.
         * @param report a {@link Fwupd.Report}
         * @since 1.8.8
         */
        add_report(report: Report): void;

        /**
         * Adds a specific release tag.
         * @param tag the update tag, e.g. `vendor-factory-2021q1`
         * @since 1.7.3
         */
        add_tag(tag: string): void;

        /**
         * Gets the AppStream ID.
         * @returns the AppStream ID, or `null` if unset
         * @since 0.9.3
         */
        get_appstream_id(): string;

        /**
         * Gets the update branch.
         * @returns the alternate branch, or `null` if unset
         * @since 1.5.0
         */
        get_branch(): string;

        /**
         * Gets the release categories.
         * @returns the categories, which may be empty
         * @since 1.2.7
         */
        get_categories(): string[];

        /**
         * Gets the release container checksums.
         * @returns the checksums, which may be empty
         * @since 0.9.3
         */
        get_checksums(): string[];

        /**
         * Gets when the update was created.
         * @returns UTC timestamp in UNIX format, or 0 if unset
         * @since 1.4.0
         */
        get_created(): number;

        /**
         * Gets the update description in AppStream markup format.
         * @returns the update description, or `null` if unset
         * @since 0.9.3
         */
        get_description(): string;

        /**
         * Gets the optional text caption used to manually detach the device.
         * @returns the string caption, or `null` if unset
         * @since 1.3.3
         */
        get_detach_caption(): string;

        /**
         * Gets the optional image used to manually detach the device.
         * @returns the URI, or `null` if unset
         * @since 1.3.3
         */
        get_detach_image(): string;

        /**
         * Gets the URL for the online update notes.
         * @returns the update URL, or `null` if unset
         * @since 1.2.4
         */
        get_details_url(): string;

        /**
         * Gets the update filename.
         * @returns the update filename, or `null` if unset
         * @since 0.9.3
         */
        get_filename(): string;

        /**
         * Gets the release flags.
         * @returns release flags, or 0 if unset
         * @since 1.2.6
         */
        get_flags(): ReleaseFlags;

        /**
         * Gets the update homepage.
         * @returns the update homepage, or `null` if unset
         * @since 0.9.3
         */
        get_homepage(): string;

        /**
         * Gets the release ID, which allows identifying the specific uploaded component.
         * @returns the ID, or `null` if unset
         * @since 1.7.2
         */
        get_id(): string;

        /**
         * Gets the time estimate for firmware installation (in seconds)
         * @returns the estimated time to flash this release (or 0 if unset)
         * @since 1.2.1
         */
        get_install_duration(): number;

        /**
         * Gets the list of issues fixed in this release.
         * @returns the issues, which may be empty
         * @since 1.3.2
         */
        get_issues(): string[];

        /**
         * Gets the update license.
         * @returns the update license, or `null` if unset
         * @since 0.9.3
         */
        get_license(): string;

        /**
         * Gets the update URI, i.e. where you can download the firmware from.
         * 
         * Typically the first URI will be the main HTTP mirror, but all URIs may not
         * be valid HTTP URIs. For example, "ipns://QmSrPmba" is valid here.
         * @returns the URIs
         * @since 1.5.6
         */
        get_locations(): string[];

        /**
         * Gets the release metadata.
         * @returns the metadata, which may be empty
         * @since 1.0.4
         */
        get_metadata(): never;

        /**
         * Gets a release metadata item.
         * @param key the key
         * @returns the value, or `null` if unset
         * @since 1.0.4
         */
        get_metadata_item(key: string): string;

        /**
         * Gets the update name.
         * @returns the update name, or `null` if unset
         * @since 0.9.3
         */
        get_name(): string;

        /**
         * Gets the update variant suffix.
         * @returns the update variant, or `null` if unset
         * @since 1.3.2
         */
        get_name_variant_suffix(): string;

        /**
         * Gets the update protocol.
         * @returns the update protocol, or `null` if unset
         * @since 1.2.2
         */
        get_protocol(): string;

        /**
         * Gets the remote ID that can be used for downloading.
         * @returns the ID, or `null` if unset
         * @since 0.9.3
         */
        get_remote_id(): string;

        /**
         * Gets all the reports for this release.
         * @returns array of reports
         * @since 1.8.8
         */
        get_reports(): Report[];

        /**
         * Gets the URL of the SBOM for this release.
         * @returns a URL, or `null` if unset
         * @since 2.0.7
         */
        get_sbom_url(): string;

        /**
         * Gets the update size.
         * @returns the update size in bytes, or 0 if unset
         * @since 0.9.3
         */
        get_size(): number;

        /**
         * Gets the URL of the source code used to build this release.
         * @returns the update source_url, or `null` if unset
         * @since 1.2.4
         */
        get_source_url(): string;

        /**
         * Gets the update summary.
         * @returns the update summary, or `null` if unset
         * @since 0.9.3
         */
        get_summary(): string;

        /**
         * Gets the release tags.
         * @returns the tags, which may be empty
         * @since 1.7.3
         */
        get_tags(): string[];

        /**
         * Gets the update image.
         * @returns the update image URL, or `null` if unset
         * @since 1.4.5
         */
        get_update_image(): string;

        /**
         * Gets the update message.
         * @returns the update message, or `null` if unset
         * @since 1.2.4
         */
        get_update_message(): string;

        /**
         * Gets the release urgency.
         * @returns the release urgency, or 0 if unset
         * @since 1.4.0
         */
        get_urgency(): ReleaseUrgency;

        /**
         * Gets the update vendor.
         * @returns the update vendor, or `null` if unset
         * @since 0.9.3
         */
        get_vendor(): string;

        /**
         * Gets the update version.
         * @returns the update version, or `null` if unset
         * @since 0.9.3
         */
        get_version(): string;

        /**
         * Finds out if the release has the update category.
         * @param category the update category, e.g. `X-EmbeddedController`
         * @returns `true` if the release matches
         * @since 1.2.7
         */
        has_category(category: string): boolean;

        /**
         * Finds out if the release has the update container checksum.
         * @param checksum the update checksum
         * @returns `true` if the release matches
         * @since 1.2.6
         */
        has_checksum(checksum: string): boolean;

        /**
         * Finds if the release has a specific release flag.
         * @param flag the {@link Fwupd.ReleaseFlags}
         * @returns `true` if the flag is set
         * @since 1.2.6
         */
        has_flag(flag: ReleaseFlags): boolean;

        /**
         * Finds out if the release has a specific tag.
         * @param tag the update tag, e.g. `vendor-factory-2021q1`
         * @returns `true` if the release matches
         * @since 1.7.3
         */
        has_tag(tag: string): boolean;

        /**
         * Check if the release flags match.
         * @param include {@link Fwupd.ReleaseFlags}, or {@link Fwupd.ReleaseFlags.NONE}
         * @param exclude {@link Fwupd.ReleaseFlags}, or {@link Fwupd.ReleaseFlags.NONE}
         * @returns `true` if the release flags match
         * @since 1.9.3
         */
        match_flags(include: ReleaseFlags, exclude: ReleaseFlags): boolean;

        /**
         * Removes a specific release flag from the release.
         * @param flag the {@link Fwupd.ReleaseFlags}
         * @since 1.2.6
         */
        remove_flag(flag: ReleaseFlags): void;

        /**
         * Sets the AppStream ID.
         * @param appstream_id the AppStream component ID, e.g. `org.hughski.ColorHug2.firmware`
         * @since 0.9.3
         */
        set_appstream_id(appstream_id: string | null): void;

        /**
         * Sets the alternate branch.
         * @param branch the update one line branch
         * @since 1.5.0
         */
        set_branch(branch: string | null): void;

        /**
         * Sets when the update was created.
         * @param created UTC timestamp in UNIX format
         * @since 1.4.0
         */
        set_created(created: bigint | number): void;

        /**
         * Sets the update description.
         * @param description the update description in AppStream markup format
         * @since 0.9.3
         */
        set_description(description: string | null): void;

        /**
         * Sets the optional text caption used to manually detach the device.
         * @param detach_caption string caption
         * @since 1.3.3
         */
        set_detach_caption(detach_caption: string | null): void;

        /**
         * Sets the optional image used to manually detach the device.
         * @param detach_image a fully qualified URI
         * @since 1.3.3
         */
        set_detach_image(detach_image: string | null): void;

        /**
         * Sets the URL for the online update notes.
         * @param details_url the URL
         * @since 1.2.4
         */
        set_details_url(details_url: string | null): void;

        /**
         * Sets the update filename.
         * @param filename the update filename on disk
         * @since 0.9.3
         */
        set_filename(filename: string | null): void;

        /**
         * Sets the release flags.
         * @param flags release flags, e.g. {@link Fwupd.ReleaseFlags.TRUSTED_PAYLOAD}
         * @since 1.2.6
         */
        set_flags(flags: ReleaseFlags): void;

        /**
         * Sets the update homepage URL.
         * @param homepage the URL
         * @since 0.9.3
         */
        set_homepage(homepage: string | null): void;

        /**
         * Sets the ID, which allows identifying the specific uploaded component.
         * @param id the AppStream component ID, e.g. `component:1234`
         * @since 1.7.2
         */
        set_id(id: string | null): void;

        /**
         * Sets the time estimate for firmware installation (in seconds)
         * @param duration amount of time in seconds
         * @since 1.2.1
         */
        set_install_duration(duration: number): void;

        /**
         * Sets the update license.
         * @param license the update license.
         * @since 0.9.3
         */
        set_license(license: string | null): void;

        /**
         * Sets the update name.
         * @param name the update name.
         * @since 0.9.3
         */
        set_name(name: string | null): void;

        /**
         * Sets the update variant suffix.
         * @param name_variant_suffix the description
         * @since 1.3.2
         */
        set_name_variant_suffix(name_variant_suffix: string | null): void;

        /**
         * Sets the update protocol.
         * @param protocol the update protocol, e.g. `org.usb.dfu`
         * @since 1.2.2
         */
        set_protocol(protocol: string | null): void;

        /**
         * Sets the remote ID that can be used for downloading.
         * @param remote_id the release ID, e.g. `USB:foo`
         * @since 0.9.3
         */
        set_remote_id(remote_id: string): void;

        /**
         * Sets the URL of the SBOM for this release.
         * @param sbom_url the URL
         * @since 2.0.7
         */
        set_sbom_url(sbom_url: string | null): void;

        /**
         * Sets the update size.
         * @param size the update size in bytes
         * @since 0.9.3
         */
        set_size(size: bigint | number): void;

        /**
         * Sets the URL of the source code used to build this release.
         * @param source_url the URL
         * @since 1.2.4
         */
        set_source_url(source_url: string | null): void;

        /**
         * Sets the update summary.
         * @param summary the update one line summary
         * @since 0.9.3
         */
        set_summary(summary: string | null): void;

        /**
         * Sets the update image.
         * @param update_image the update image URL
         * @since 1.4.5
         */
        set_update_image(update_image: string | null): void;

        /**
         * Sets the update message.
         * @param update_message the update message string
         * @since 1.2.4
         */
        set_update_message(update_message: string | null): void;

        /**
         * Sets the release urgency.
         * @param urgency the release urgency, e.g. {@link Fwupd.ReleaseFlags.TRUSTED_PAYLOAD}
         * @since 1.4.0
         */
        set_urgency(urgency: ReleaseUrgency): void;

        /**
         * Sets the update vendor.
         * @param vendor the vendor name, e.g. `Hughski Limited`
         * @since 0.9.3
         */
        set_vendor(vendor: string | null): void;

        /**
         * Sets the update version.
         * @param version the update version, e.g. `1.2.4`
         * @since 0.9.3
         */
        set_version(version: string | null): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         */
        add_string(idt: number, str: GLib.String): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON string.
         * @param json JSON text
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json_string(json: string): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @returns `true` on success
         * @since 2.0.0
         */
        from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON builder object.
         * @param json_obj a JSON builder
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         */
        to_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON string.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a string
         * @since 2.0.0
         */
        to_json_string(flags: CodecFlags): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @returns a string
         * @since 2.0.0
         */
        to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a {@link GLib.Variant}
         * @since 2.0.0
         */
        to_variant(flags: CodecFlags): GLib.Variant;

        /**
         * @param json_obj 
         * @param flags 
         * @virtual
         */
        vfunc_add_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         * @virtual
         */
        vfunc_add_string(idt: number, str: GLib.String): void;

        /**
         * @param builder 
         * @param flags 
         * @virtual
         */
        vfunc_add_variant(builder: GLib.VariantBuilder, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_variant(flags: CodecFlags): GLib.Variant;
    }


    namespace Remote {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::approval-required": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-reports": (pspec: GObject.ParamSpec) => void;
            "notify::automatic-security-reports": (pspec: GObject.ParamSpec) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Codec.ConstructorProps {
            approval_required: boolean;
            approvalRequired: boolean;
            automatic_reports: boolean;
            automaticReports: boolean;
            automatic_security_reports: boolean;
            automaticSecurityReports: boolean;
            enabled: boolean;
            flags: bigint | number;
            id: string;
        }
    }

    /**
     * A source of metadata that provides firmware.
     * 
     * Remotes can be local (e.g. folders on a disk) or remote (e.g. downloaded
     * over HTTP or IPFS).
     * 
     * See also: {@link FwupdClient}
     * @gir-type Class
     */
    class Remote extends GObject.Object implements Codec {
        static $gtype: GObject.GType<Remote>;

        // Properties
        /**
         * If firmware from the remote should be checked against the system
         * list of approved firmware.
         * @since 1.2.6
         * @default false
         */
        get approval_required(): boolean;
        set approval_required(val: boolean);

        /**
         * If firmware from the remote should be checked against the system
         * list of approved firmware.
         * @since 1.2.6
         * @default false
         */
        get approvalRequired(): boolean;
        set approvalRequired(val: boolean);

        /**
         * The behavior for auto-uploading reports.
         * @since 1.3.3
         * @default false
         */
        get automatic_reports(): boolean;
        set automatic_reports(val: boolean);

        /**
         * The behavior for auto-uploading reports.
         * @since 1.3.3
         * @default false
         */
        get automaticReports(): boolean;
        set automaticReports(val: boolean);

        /**
         * The behavior for auto-uploading security reports.
         * @since 1.5.0
         * @default false
         */
        get automatic_security_reports(): boolean;
        set automatic_security_reports(val: boolean);

        /**
         * The behavior for auto-uploading security reports.
         * @since 1.5.0
         * @default false
         */
        get automaticSecurityReports(): boolean;
        set automaticSecurityReports(val: boolean);

        /**
         * If the remote is enabled and should be used.
         * @since 0.9.3
         * @default false
         */
        get enabled(): boolean;
        set enabled(val: boolean);

        /**
         * The remote flags.
         * @since 1.9.4
         * @default 0
         */
        get flags(): number;
        set flags(val: bigint | number);

        /**
         * The remote ID.
         * @since 0.9.3
         * @default null
         */
        get id(): string;
        set id(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Remote.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Remote.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Remote;

        // Signals
        /** @signal */
        connect<K extends keyof Remote.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Remote.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Remote.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Remote.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Remote.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Remote.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts a string to an enumerated value.
         * @param val a string, e.g. `enabled`
         * @since 1.9.4
         */
        static flag_from_string(val: string | null): RemoteFlags;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.RemoteFlags.ENABLED}
         * @since 1.9.4
         */
        static flag_to_string(val: RemoteFlags): string;

        /**
         * Converts a string to an enumerated value.
         * @param val a string, e.g. `download`
         * @since 0.9.6
         */
        static kind_from_string(val: string | null): RemoteKind;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.RemoteKind.DOWNLOAD}
         * @since 0.9.6
         */
        static kind_to_string(val: RemoteKind): string;

        // Methods
        /**
         * Adds a specific attribute flag to the attribute.
         * @param flag the {@link Fwupd.RemoteFlags}, e.g. {@link Fwupd.RemoteFlags.APPROVAL_REQUIRED}
         * @since 1.9.4
         */
        add_flag(flag: RemoteFlags): void;

        /**
         * Builds a URI for the URL using the username and password set for the remote,
         * including any basename URI substitution.
         * @param url the URL to use
         * @returns a URI, or `null` for error
         * @since 0.9.7
         */
        build_firmware_uri(url: string): string;

        /**
         * Builds a URI for the metadata using the username and password set for the remote.
         * @returns a URI, or `null` for error
         * @since 1.9.8
         */
        build_metadata_sig_uri(): string;

        /**
         * Builds a URI for the metadata signature using the username and password set for the remote.
         * @returns a URI, or `null` for error
         * @since 1.9.8
         */
        build_metadata_uri(): string;

        /**
         * Builds a URI for the URL using the username and password set for the remote.
         * @returns a URI, or `null` for error
         * @since 1.9.1
         */
        build_report_uri(): string;

        /**
         * Calculates the signature checksum of the remote using the filename cache.
         * @returns `true` for success
         * @since 2.0.17
         */
        ensure_checksum_sig(): boolean;

        /**
         * Calculates the mtime of the remote using the filename cache.
         * @returns `true` for success
         * @since 2.0.17
         */
        ensure_mtime(): boolean;

        /**
         * Gets the age of the remote in seconds.
         * @returns a age, or `G_MAXUINT64` for unavailable
         * @since 0.9.5
         */
        get_age(): number;

        /**
         * Gets the remote agreement in AppStream markup format
         * @returns a string, or `null` if unset
         * @since 1.0.7
         */
        get_agreement(): string;

        /**
         * Gets the remote signature checksum.
         * @returns a string, or `null` if unset
         * @since 1.0.0
         */
        get_checksum(): string;

        /**
         * Gets the remote metadata checksum.
         * @returns a string, or `null` if unset
         * @since 1.9.4
         */
        get_checksum_metadata(): string;

        /**
         * Gets the path and filename that the remote is using for a cache.
         * @returns a string, or `null` for unset
         * @since 0.9.6
         */
        get_filename_cache(): string;

        /**
         * Gets the path and filename that the remote is using for a signature cache.
         * @returns a string, or `null` for unset
         * @since 0.9.7
         */
        get_filename_cache_sig(): string;

        /**
         * Gets the path and filename of the remote itself, typically a `.conf` file.
         * @returns a string, or `null` for unset
         * @since 0.9.8
         */
        get_filename_source(): string;

        /**
         * Gets the base URI for firmware.
         * @returns a URI, or `null` for unset.
         * @since 2.0.2
         */
        get_firmware_base_uri(): string;

        /**
         * Gets the self flags.
         * @returns remote attribute flags, or 0 if unset
         * @since 1.9.4
         */
        get_flags(): RemoteFlags;

        /**
         * Gets the remote ID, e.g. `lvfs-testing`.
         * @returns a string, or `null` if unset
         * @since 0.9.3
         */
        get_id(): string;

        /**
         * Gets the kind of the remote.
         * @returns a {@link Fwupd.RemoteKind}, e.g. #FWUPD_REMOTE_KIND_LOCAL
         * @since 0.9.6
         */
        get_kind(): RemoteKind;

        /**
         * Gets the URI for the remote metadata.
         * @returns a URI, or `null` for invalid.
         * @since 0.9.7
         */
        get_metadata_uri(): string;

        /**
         * Gets the URI for the remote metadata signature.
         * @returns a URI, or `null` for invalid.
         * @since 0.9.7
         */
        get_metadata_uri_sig(): string;

        /**
         * Gets the remote mtime in seconds.
         * @returns value in seconds
         * @since 2.0.17
         */
        get_mtime(): number;

        /**
         * Gets the list of remotes this remote should be ordered after.
         * @returns an array
         * @since 0.9.5
         */
        get_order_after(): string[];

        /**
         * Gets the list of remotes this remote should be ordered before.
         * @returns an array
         * @since 0.9.5
         */
        get_order_before(): string[];

        /**
         * Gets the password configured for the remote.
         * @returns a string, or `null` for unset
         * @since 0.9.5
         */
        get_password(): string;

        /**
         * Gets the priority of the remote, where bigger numbers are better.
         * @returns a priority, or 0 for the default value
         * @since 0.9.5
         */
        get_priority(): number;

        /**
         * Gets the remote privacy policy URL, e.g. `https://lvfs.readthedocs.io/en/latest/privacy.html`
         * @returns a string, or `null` if unset
         * @since 2.0.0
         */
        get_privacy_uri(): string;

        /**
         * Gets the remote refresh interval in seconds.
         * @returns value in seconds
         * @since 1.9.4
         */
        get_refresh_interval(): number;

        /**
         * Gets the base directory for storing remote metadata
         * @returns a string, or `null` if unset
         * @since 1.3.1
         */
        get_remotes_dir(): string;

        /**
         * Gets the URI for the remote reporting.
         * @returns a URI, or `null` for invalid.
         * @since 1.0.4
         */
        get_report_uri(): string;

        /**
         * Gets the remote title, e.g. `Linux Vendor Firmware Service`.
         * @returns a string, or `null` if unset
         * @since 0.9.8
         */
        get_title(): string;

        /**
         * Gets the username configured for the remote.
         * @returns a string, or `null` for unset
         * @since 0.9.5
         */
        get_username(): string;

        /**
         * Finds if the remote has a specific flag.
         * @param flag the remote flag, e.g. {@link Fwupd.RemoteFlags.APPROVAL_REQUIRED}
         * @returns `true` if the flag is set
         * @since 1.9.4
         */
        has_flag(flag: RemoteFlags): boolean;

        /**
         * Parses the signature, updating the metadata URI as appropriate.
         * @param filename a filename
         * @returns `true` for success
         * @since 1.4.0
         */
        load_signature(filename: string): boolean;

        /**
         * Parses the signature, updating the metadata URI as appropriate.
         * @param bytes data blob
         * @returns `true` for success
         * @since 1.4.5
         */
        load_signature_bytes(bytes: GLib.Bytes | Uint8Array): boolean;

        /**
         * Loads the secrets from a per-user store.
         * @returns `true` for success
         * @since 2.1.4
         */
        load_user_secrets(): boolean;

        /**
         * Gets if the metadata remote needs re-downloading.
         * @returns a `TRUE` if the remote contents are considered old
         * @since 1.9.4
         */
        needs_refresh(): boolean;

        /**
         * Removes a specific attribute flag from the remote.
         * @param flag the {@link Fwupd.RemoteFlags}, e.g. {@link Fwupd.RemoteFlags.APPROVAL_REQUIRED}
         * @since 1.9.4
         */
        remove_flag(flag: RemoteFlags): void;

        /**
         * Saves the secrets to a per-user store.
         * @returns `true` for success
         * @since 2.1.4
         */
        save_user_secrets(): boolean;

        /**
         * Sets the remote agreement in AppStream markup format
         * @param agreement agreement markup text
         * @since 1.0.7
         */
        set_agreement(agreement: string | null): void;

        /**
         * Sets the remote signature checksum, typically only useful in the self tests.
         * @param checksum_sig checksum string
         * @since 2.0.0
         */
        set_checksum_sig(checksum_sig: string | null): void;

        /**
         * Sets the remote filename cache filename, typically only useful in the self tests.
         * @param filename filename string
         * @since 1.8.2
         */
        set_filename_cache(filename: string | null): void;

        /**
         * Sets the source filename. This is typically a file in `/etc/fwupd/remotes/`.
         * @param filename_source filename
         * @since 1.6.1
         */
        set_filename_source(filename_source: string | null): void;

        /**
         * Sets the firmware base URI.
         * 
         * NOTE: This has to be set after MetadataURI.
         * @param firmware_base_uri base URI for firmware
         * @since 2.0.2
         */
        set_firmware_base_uri(firmware_base_uri: string | null): void;

        /**
         * Sets the attribute flags.
         * @param flags remote attribute flags, e.g. {@link Fwupd.RemoteFlags.APPROVAL_REQUIRED}
         * @since 1.9.4
         */
        set_flags(flags: RemoteFlags): void;

        /**
         * Sets the remote ID.
         * 
         * NOTE: the ID has to be set before the URL.
         * @param id remote ID, e.g. "lvfs"
         * @since 1.9.3
         */
        set_id(id: string | null): void;

        /**
         * Sets the kind of the remote.
         * @param kind a {@link Fwupd.RemoteKind}, e.g. #FWUPD_REMOTE_KIND_LOCAL
         * @since 2.0.0
         */
        set_kind(kind: RemoteKind): void;

        /**
         * Sets the remote metadata URI.
         * 
         * NOTE: This has to be set before the username and password.
         * @param metadata_uri metadata URI
         * @since 1.8.13
         */
        set_metadata_uri(metadata_uri: string | null): void;

        /**
         * Sets the remote modification time.
         * @param mtime a UNIX timestamp
         * @since 0.9.5
         */
        set_mtime(mtime: bigint | number): void;

        /**
         * Sets any remotes that should be ordered after this one.
         * @param ids optional remote IDs
         * @since 2.0.0
         */
        set_order_after(ids: string | null): void;

        /**
         * Sets any remotes that should be ordered before this one.
         * @param ids optional remote IDs
         * @since 2.0.0
         */
        set_order_before(ids: string | null): void;

        /**
         * Sets the remote password.
         * @param password an optional password
         * @since 2.0.0
         */
        set_password(password: string | null): void;

        /**
         * Sets the remote priority.
         * @param priority an integer, where 1 is better
         * @since 0.9.5
         */
        set_priority(priority: number): void;

        /**
         * Sets the remote privacy policy URL.
         * @param privacy_uri privacy URL, e.g. "https://lvfs.readthedocs.io/en/latest/privacy.html"
         * @since 2.0.0
         */
        set_privacy_uri(privacy_uri: string | null): void;

        /**
         * Sets the remote refresh interval in seconds.
         * @param refresh_interval value in seconds
         * @since 2.0.0
         */
        set_refresh_interval(refresh_interval: bigint | number): void;

        /**
         * Sets the directory to store remote data
         * @param directory Remotes directory
         * @since 1.3.1
         */
        set_remotes_dir(directory: string | null): void;

        /**
         * Sets the report URI.
         * @param report_uri report URI
         * @since 2.0.0
         */
        set_report_uri(report_uri: string | null): void;

        /**
         * Sets the remote title.
         * @param title title text, e.g. "Backup"
         * @since 1.8.13
         */
        set_title(title: string | null): void;

        /**
         * Sets the remote username.
         * @param username an optional username
         * @since 2.0.0
         */
        set_username(username: string | null): void;

        /**
         * Sets up the remote ready for use, checking that required parameters have
         * been set. Calling this method multiple times has no effect.
         * @returns `true` for success
         * @since 1.6.1
         */
        setup(): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         */
        add_string(idt: number, str: GLib.String): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON string.
         * @param json JSON text
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json_string(json: string): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @returns `true` on success
         * @since 2.0.0
         */
        from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON builder object.
         * @param json_obj a JSON builder
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         */
        to_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON string.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a string
         * @since 2.0.0
         */
        to_json_string(flags: CodecFlags): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @returns a string
         * @since 2.0.0
         */
        to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a {@link GLib.Variant}
         * @since 2.0.0
         */
        to_variant(flags: CodecFlags): GLib.Variant;

        /**
         * @param json_obj 
         * @param flags 
         * @virtual
         */
        vfunc_add_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         * @virtual
         */
        vfunc_add_string(idt: number, str: GLib.String): void;

        /**
         * @param builder 
         * @param flags 
         * @virtual
         */
        vfunc_add_variant(builder: GLib.VariantBuilder, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_variant(flags: CodecFlags): GLib.Variant;
    }


    namespace Report {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::flags": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Codec.ConstructorProps {
            flags: bigint | number;
        }
    }

    /**
     * A firmware report from a vendor.
     * 
     * This is the LVFS formatted report that the fwupd user consumes, NOT the thing that gets uploaded.
     * 
     * See also: {@link FwupdRelease}
     * @gir-type Class
     */
    class Report extends GObject.Object implements Codec {
        static $gtype: GObject.GType<Report>;

        // Properties
        /**
         * The report flags.
         * @since 1.9.1
         * @default 0
         */
        get flags(): number;
        set flags(val: bigint | number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Report.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Report.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Report;

        // Signals
        /** @signal */
        connect<K extends keyof Report.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Report.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Report.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Report.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Report.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Report.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts a string to an enumerated value.
         * @param val a string, e.g. `from-oem`
         * @since 1.9.1
         */
        static flag_from_string(val: string | null): ReportFlags;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.ReportFlags.FROM_OEM}
         * @since 1.9.1
         */
        static flag_to_string(val: ReportFlags): string;

        // Methods
        /**
         * Adds a specific report flag to the report.
         * @param flag the {@link Fwupd.ReportFlags}
         * @since 1.9.1
         */
        add_flag(flag: ReportFlags): void;

        /**
         * Sets a report metadata item.
         * @param key the key
         * @param value the value
         * @since 1.8.8
         */
        add_metadata_item(key: string, value: string): void;

        /**
         * Gets when the report was created.
         * @returns UTC timestamp in UNIX format, or 0 if unset
         * @since 1.8.8
         */
        get_created(): number;

        /**
         * Gets the name of the device the update was performed on.
         * @returns the name, or `null` if unset
         * @since 1.8.8
         */
        get_device_name(): string;

        /**
         * Gets the distribution name.
         * @returns the name, or `null` if unset
         * @since 1.8.8
         */
        get_distro_id(): string;

        /**
         * Gets the distribution variant.
         * @returns variant, or `null` if unset
         * @since 1.8.8
         */
        get_distro_variant(): string;

        /**
         * Gets the distribution version.
         * @returns a string, or `null` if unset
         * @since 1.8.8
         */
        get_distro_version(): string;

        /**
         * Gets the report flags.
         * @returns report flags, or 0 if unset
         * @since 1.9.1
         */
        get_flags(): number;

        /**
         * Gets the report metadata.
         * @returns the metadata, which may be empty
         * @since 1.8.8
         */
        get_metadata(): never;

        /**
         * Gets a report metadata item.
         * @param key the key
         * @returns the value, or `null` if unset
         * @since 1.8.8
         */
        get_metadata_item(key: string): string;

        /**
         * Gets the remote ID.
         * @returns ID, or `null` if unset
         * @since 1.9.3
         */
        get_remote_id(): string;

        /**
         * Gets the vendor that uploaded the test result.
         * @returns the test vendor, or `null` if unset
         * @since 1.8.8
         */
        get_vendor(): string;

        /**
         * Gets the vendor identifier. The mapping is only known on the remote server, and this can be
         * useful to filter on different QA teams that work for the same OEM.
         * @returns the vendor ID, or 0 if unset
         * @since 1.8.8
         */
        get_vendor_id(): number;

        /**
         * Gets the old version, i.e. what the upser was upgrading *from*.
         * @returns the version, or `null` if unset
         * @since 1.8.8
         */
        get_version_old(): string;

        /**
         * Finds if the report has a specific report flag.
         * @param flag a report flag
         * @returns `true` if the flag is set
         * @since 1.9.1
         */
        has_flag(flag: ReportFlags): boolean;

        /**
         * Removes a specific report flag from the report.
         * @param flag a report flag
         * @since 1.9.1
         */
        remove_flag(flag: ReportFlags): void;

        /**
         * Sets when the report was created.
         * @param created UTC timestamp in UNIX format
         * @since 1.8.8
         */
        set_created(created: bigint | number): void;

        /**
         * Sets the name of the device the update was performed on.
         * @param device_name the name, e.g. `LENOVO ThinkPad P1 Gen 3`
         * @since 1.8.8
         */
        set_device_name(device_name: string | null): void;

        /**
         * Sets the distribution name.
         * @param distro_id the name, e.g. `fedora`
         * @since 1.8.8
         */
        set_distro_id(distro_id: string | null): void;

        /**
         * Sets the distribution variant.
         * @param distro_variant the variant, e.g. `workstation`
         * @since 1.8.8
         */
        set_distro_variant(distro_variant: string | null): void;

        /**
         * Sets the distribution version.
         * @param distro_version a string
         * @since 1.8.8
         */
        set_distro_version(distro_version: string | null): void;

        /**
         * Sets the report flags.
         * @param flags report flags, e.g. {@link Fwupd.ReportFlags.FROM_OEM}
         * @since 1.9.1
         */
        set_flags(flags: bigint | number): void;

        /**
         * Sets the remote ID.
         * @param remote_id the remote, e.g. `lvfs`
         * @since 1.9.3
         */
        set_remote_id(remote_id: string | null): void;

        /**
         * Sets the vendor that uploaded the test result.
         * @param vendor the vendor name
         * @since 1.8.8
         */
        set_vendor(vendor: string | null): void;

        /**
         * Sets the vendor identifier. The mapping is only known on the remote server, and this can be
         * useful to filter on different QA teams that work for the same OEM.
         * @param vendor_id the vendor ID, or 0
         * @since 1.8.8
         */
        set_vendor_id(vendor_id: number): void;

        /**
         * Sets the old version, i.e. what the upser was upgrading *from*.
         * @param version_old the version, e.g. `1.2.3`
         * @since 1.8.8
         */
        set_version_old(version_old: string | null): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         */
        add_string(idt: number, str: GLib.String): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON string.
         * @param json JSON text
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json_string(json: string): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @returns `true` on success
         * @since 2.0.0
         */
        from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON builder object.
         * @param json_obj a JSON builder
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         */
        to_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON string.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a string
         * @since 2.0.0
         */
        to_json_string(flags: CodecFlags): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @returns a string
         * @since 2.0.0
         */
        to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a {@link GLib.Variant}
         * @since 2.0.0
         */
        to_variant(flags: CodecFlags): GLib.Variant;

        /**
         * @param json_obj 
         * @param flags 
         * @virtual
         */
        vfunc_add_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         * @virtual
         */
        vfunc_add_string(idt: number, str: GLib.String): void;

        /**
         * @param builder 
         * @param flags 
         * @virtual
         */
        vfunc_add_variant(builder: GLib.VariantBuilder, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_variant(flags: CodecFlags): GLib.Variant;
    }


    namespace Request {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::invalidate signal is emitted when the request is no longer valid, and any visible
             * UI components should be hidden.
             * @signal
             * @since 1.9.17
             * @run-last
             */
            invalidate: () => void;
            "notify::device-id": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::message": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Codec.ConstructorProps {
            device_id: string;
            deviceId: string;
            flags: bigint | number;
            id: string;
            image: string;
            kind: number;
            message: string;
        }
    }

    /**
     * A user request from the device.
     * 
     * See also: {@link FwupdDevice}
     * @gir-type Class
     */
    class Request extends GObject.Object implements Codec {
        static $gtype: GObject.GType<Request>;

        // Properties
        /**
         * The device ID for the request.
         * @since 1.8.2
         * @default null
         */
        get device_id(): string;
        set device_id(val: string);

        /**
         * The device ID for the request.
         * @since 1.8.2
         * @default null
         */
        get deviceId(): string;
        set deviceId(val: string);

        /**
         * The flags for the request.
         * @since 1.8.6
         * @default 18446744073709551615
         */
        get flags(): number;
        set flags(val: bigint | number);

        /**
         * The request identifier.
         * @since 1.6.2
         * @default null
         */
        get id(): string;
        set id(val: string);

        /**
         * The image link for the request.
         * @since 1.6.2
         * @default null
         */
        get image(): string;
        set image(val: string);

        /**
         * The kind of the request.
         * @since 1.6.2
         * @default 0
         */
        get kind(): number;
        set kind(val: number);

        /**
         * The message text in the request.
         * @since 1.6.2
         * @default null
         */
        get message(): string;
        set message(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Request.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Request.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Request;

        // Signals
        /** @signal */
        connect<K extends keyof Request.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Request.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Request.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Request.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Request.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Request.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts a string to an enumerated value.
         * @param val a string, e.g. `allow-generic-message`
         * @since 1.8.6
         */
        static flag_from_string(val: string | null): RequestFlags;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.RequestFlags.ALLOW_GENERIC_MESSAGE}
         * @since 1.8.6
         */
        static flag_to_string(val: RequestFlags): string;

        /**
         * Converts a string to an enumerated value.
         * @param val a string, e.g. `post`
         * @since 1.6.2
         */
        static kind_from_string(val: string | null): RequestKind;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.RequestKind.POST}
         * @since 1.6.2
         */
        static kind_to_string(val: RequestKind): string;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_invalidate(): void;

        // Methods
        /**
         * Adds a specific flag to the request.
         * @param flag the {@link Fwupd.RequestFlags}
         * @since 1.8.6
         */
        add_flag(flag: RequestFlags): void;

        /**
         * Emits an `invalidate` signal to signify that the request is no longer valid, and any visible
         * UI components should be hidden.
         * @since 1.9.17
         */
        emit_invalidate(): void;

        /**
         * Gets when the request was created.
         * @returns the UNIX time, or 0 if unset
         * @since 1.6.2
         */
        get_created(): number;

        /**
         * Gets the device_id that created the request.
         * @returns the device_id, or `null` if unset
         * @since 1.6.2
         */
        get_device_id(): string;

        /**
         * Gets the request flags.
         * @returns request flags, or 0 if unset
         * @since 1.8.6
         */
        get_flags(): RequestFlags;

        /**
         * Gets the ID.
         * @returns the ID, or `null` if unset
         * @since 1.6.2
         */
        get_id(): string;

        /**
         * Gets the update image.
         * @returns the update image URL, or `null` if unset
         * @since 1.6.2
         */
        get_image(): string;

        /**
         * Returns what the request is currently doing.
         * @returns the kind value, e.g. `FWUPD_STATUS_REQUEST_WRITE`
         * @since 1.6.2
         */
        get_kind(): RequestKind;

        /**
         * Gets the update message, generating a generic one using the request ID if possible.
         * @returns the update message, or `null` if unset
         * @since 1.6.2
         */
        get_message(): string;

        /**
         * Finds if the request has a specific flag.
         * @param flag the {@link Fwupd.RequestFlags}
         * @returns `true` if the flag is set
         * @since 1.8.6
         */
        has_flag(flag: RequestFlags): boolean;

        /**
         * Removes a specific flag from the request.
         * @param flag the {@link Fwupd.RequestFlags}
         * @since 1.8.6
         */
        remove_flag(flag: RequestFlags): void;

        /**
         * Sets when the request was created.
         * @param created the UNIX time
         * @since 1.6.2
         */
        set_created(created: bigint | number): void;

        /**
         * Sets the device_id that created the request.
         * @param device_id the device_id, e.g. `colorhug`
         * @since 1.6.2
         */
        set_device_id(device_id: string | null): void;

        /**
         * Sets the request flags.
         * @param flags request flags, e.g. {@link Fwupd.RequestFlags.NONE}
         * @since 1.8.6
         */
        set_flags(flags: RequestFlags): void;

        /**
         * Sets the ID.
         * @param id the request ID, e.g. `USB:foo`
         * @since 1.6.2
         */
        set_id(id: string | null): void;

        /**
         * Sets the update image.
         * @param image the update image URL
         * @since 1.6.2
         */
        set_image(image: string | null): void;

        /**
         * Sets what the request is currently doing.
         * @param kind the kind value, e.g. `FWUPD_STATUS_REQUEST_WRITE`
         * @since 1.6.2
         */
        set_kind(kind: RequestKind): void;

        /**
         * Sets the update message.
         * @param message the update message string
         * @since 1.6.2
         */
        set_message(message: string | null): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         */
        add_string(idt: number, str: GLib.String): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON string.
         * @param json JSON text
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json_string(json: string): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @returns `true` on success
         * @since 2.0.0
         */
        from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON builder object.
         * @param json_obj a JSON builder
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         */
        to_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON string.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a string
         * @since 2.0.0
         */
        to_json_string(flags: CodecFlags): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @returns a string
         * @since 2.0.0
         */
        to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a {@link GLib.Variant}
         * @since 2.0.0
         */
        to_variant(flags: CodecFlags): GLib.Variant;

        /**
         * @param json_obj 
         * @param flags 
         * @virtual
         */
        vfunc_add_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         * @virtual
         */
        vfunc_add_string(idt: number, str: GLib.String): void;

        /**
         * @param builder 
         * @param flags 
         * @virtual
         */
        vfunc_add_variant(builder: GLib.VariantBuilder, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_variant(flags: CodecFlags): GLib.Variant;
    }


    namespace SecurityAttr {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Codec.ConstructorProps {}
    }

    /**
     * A Host Security ID attribute that represents something that was measured.
     * @gir-type Class
     */
    class SecurityAttr extends GObject.Object implements Codec {
        static $gtype: GObject.GType<SecurityAttr>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SecurityAttr.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SecurityAttr.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](appstream_id: string | null): SecurityAttr;

        // Signals
        /** @signal */
        connect<K extends keyof SecurityAttr.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SecurityAttr.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SecurityAttr.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SecurityAttr.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SecurityAttr.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SecurityAttr.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Converts a string to an enumerated flag.
         * @param flag a string, e.g. `success`
         * @since 1.7.1
         */
        static flag_from_string(flag: string | null): SecurityAttrFlags;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.SecurityAttrFlags.SUCCESS}
         * @since 1.5.0
         */
        static flag_to_string(val: SecurityAttrFlags): string;

        /**
         * Returns the string suffix for the flag.
         * @param flag security attribute flags, e.g. {@link Fwupd.SecurityAttrFlags.RUNTIME_UPDATES}
         * @since 1.5.0
         */
        static flag_to_suffix(flag: SecurityAttrFlags): string;

        /**
         * Converts a string to an enumerated result.
         * @param result a string, e.g. `not-encrypted`
         * @since 1.7.1
         */
        static result_from_string(result: string | null): SecurityAttrResult;

        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.SecurityAttrResult.ENABLED}
         * @since 1.5.0
         */
        static result_to_string(val: SecurityAttrResult): string;

        // Methods
        /**
         * Adds a specific attribute flag to the attribute.
         * @param flag the {@link Fwupd.SecurityAttrFlags}, e.g. {@link Fwupd.SecurityAttrFlags.OBSOLETED}
         * @since 1.5.0
         */
        add_flag(flag: SecurityAttrFlags): void;

        /**
         * Adds a device GUID to the attribute. This indicates the GUID in some way contributed to the
         * result decided.
         * @param guid the GUID
         * @since 1.7.0
         */
        add_guid(guid: string): void;

        /**
         * Adds device GUIDs to the attribute. This indicates the GUIDs in some way contributed to the
         * result decided.
         * @param guids the GUIDs
         * @since 1.7.0
         */
        add_guids(guids: string[]): void;

        /**
         * Adds metadata to the attribute which may be used in the name.
         * @param key metadata key
         * @param value metadata value
         * @since 1.5.0
         */
        add_metadata(key: string, value: string | null): void;

        /**
         * Adds an attribute appstream_id to obsolete. The obsoleted attribute will not
         * contribute to the calculated HSI value or be visible in command line tools.
         * @param appstream_id the appstream_id or plugin name
         * @since 1.5.0
         */
        add_obsolete(appstream_id: string): void;

        /**
         * Makes a full (deep) copy of a security attribute.
         * @returns a new {@link Fwupd.SecurityAttr}
         * @since 1.7.1
         */
        copy(): SecurityAttr;

        /**
         * Gets the AppStream ID.
         * @returns the AppStream ID, or `null` if unset
         * @since 1.5.0
         */
        get_appstream_id(): string;

        /**
         * Gets the current value of the BIOS setting that can be changed.
         * @returns the current value of the attribute.
         * @since 1.8.4
         */
        get_bios_setting_current_value(): string;

        /**
         * Gets the {@link Fwupd.BiosSetting} that can be used to improve this
         * {@link Fwupd.SecurityAttr}.
         * @returns The unique ID used for {@link Fwupd.BiosSetting} or NULL
         * @since 1.8.4
         */
        get_bios_setting_id(): string;

        /**
         * Gets the value that when written to an attribute would activate it or satisfy
         * a security requirement.
         * @returns the target value of the attribute.
         * @since 1.8.4
         */
        get_bios_setting_target_value(): string;

        /**
         * Gets when the attribute was created.
         * @returns the UNIX time, or 0 if unset
         * @since 1.7.1
         */
        get_created(): number;

        /**
         * Gets the attribute description which is a few lines of prose that normal users will understand.
         * 
         * The fwupd client program may be able to get translations for this value using a method call
         * like `dgettext("fwupd",str)`.
         * 
         * NOTE: The returned string may contain placeholders such as `$HostVendor$` or `$HostProduct$`
         * and these should be replaced with the values from {@link FwupdClient.get_host_vendor} and
         * {@link FwupdClient.get_host_product}.
         * @returns the attribute description, or `null` if unset
         * @since 1.8.2
         */
        get_description(): string;

        /**
         * Gets the self flags.
         * @returns security attribute flags, or 0 if unset
         * @since 1.5.0
         */
        get_flags(): SecurityAttrFlags;

        /**
         * Gets the fwupd version the attribute was added.
         * @returns the fwupd version, or `null` if unset
         * @since 2.0.7
         */
        get_fwupd_version(): string;

        /**
         * Gets the list of attribute GUIDs. The GUID values will not modify the calculated HSI value.
         * @returns the GUIDs, which may be empty
         * @since 1.7.0
         */
        get_guids(): string[];

        /**
         * Gets the current value of the BIOS setting that can be changed.
         * @returns the current value of the attribute.
         * @since 1.9.6
         */
        get_kernel_current_value(): string;

        /**
         * Gets the target value of the kernel setting that can be changed.
         * @returns the current value of the attribute.
         * @since 1.9.6
         */
        get_kernel_target_value(): string;

        /**
         * Gets the HSI level.
         * @returns the security attribute level, or {@link Fwupd.SecurityAttrLevel.NONE} if unset
         * @since 1.5.0
         */
        get_level(): SecurityAttrLevel;

        /**
         * Gets private metadata from the attribute which may be used in the name.
         * @param key metadata key
         * @returns the metadata value, or `null` if unfound
         * @since 1.5.0
         */
        get_metadata(key: string): string | null;

        /**
         * Gets the attribute name.
         * @returns the attribute name, or `null` if unset
         * @since 1.5.0
         */
        get_name(): string;

        /**
         * Gets the list of attribute obsoletes. The obsoleted attributes will not
         * contribute to the calculated HSI value or be visible in command line tools.
         * @returns the obsoletes, which may be empty
         * @since 1.5.0
         */
        get_obsoletes(): string[];

        /**
         * Gets the plugin that created the attribute.
         * @returns the plugin name, or `null` if unset
         * @since 1.5.0
         */
        get_plugin(): string;

        /**
         * Gets the optional HSI result.
         * @returns the {@link Fwupd.SecurityAttrResult}, e.g `FWUPD_SECURITY_ATTR_LEVEL_LOCKED`
         * @since 1.5.0
         */
        get_result(): SecurityAttrResult;

        /**
         * Gets the optional fallback HSI result.
         * @returns the {@link Fwupd.SecurityAttrResult}, e.g `FWUPD_SECURITY_ATTR_LEVEL_LOCKED`
         * @since 1.7.1
         */
        get_result_fallback(): SecurityAttrResult;

        /**
         * Gets the desired HSI result.
         * @returns the {@link Fwupd.SecurityAttrResult}, e.g `FWUPD_SECURITY_ATTR_LEVEL_LOCKED`
         * @since 1.9.3
         */
        get_result_success(): SecurityAttrResult;

        /**
         * Gets the attribute title, which is typically a two word title.
         * 
         * The fwupd client program may be able to get translations for this value using a method call
         * like `dgettext("fwupd",str)`.
         * @returns the attribute title, or `null` if unset
         * @since 1.8.2
         */
        get_title(): string;

        /**
         * Gets the attribute URL.
         * @returns the attribute result, or `null` if unset
         * @since 1.5.0
         */
        get_url(): string;

        /**
         * Finds if the attribute has a specific attribute flag.
         * @param flag the attribute flag, e.g. {@link Fwupd.SecurityAttrFlags.OBSOLETED}
         * @returns `true` if the flag is set
         * @since 1.5.0
         */
        has_flag(flag: SecurityAttrFlags): boolean;

        /**
         * Finds out if a specific GUID was added to the attribute.
         * @param guid the attribute guid
         * @returns `true` if the self matches
         * @since 1.7.0
         */
        has_guid(guid: string): boolean;

        /**
         * Finds out if the attribute obsoletes a specific appstream_id.
         * @param appstream_id the attribute appstream_id
         * @returns `true` if the self matches
         * @since 1.5.0
         */
        has_obsolete(appstream_id: string): boolean;

        /**
         * Removes a specific attribute flag from the attribute.
         * @param flag the {@link Fwupd.SecurityAttrFlags}, e.g. {@link Fwupd.SecurityAttrFlags.OBSOLETED}
         * @since 1.8.3
         */
        remove_flag(flag: SecurityAttrFlags): void;

        /**
         * Sets the AppStream ID.
         * @param appstream_id the AppStream component ID, e.g. `com.intel.BiosGuard`
         * @since 1.5.0
         */
        set_appstream_id(appstream_id: string | null): void;

        /**
         * Sets the current value of the BIOS setting that can be changed.
         * @param value The string to set current value to
         * @since 1.8.4
         */
        set_bios_setting_current_value(value: string | null): void;

        /**
         * Sets the {@link Fwupd.BiosSetting} that can be used to improve this
         * {@link Fwupd.SecurityAttr}.
         * @param id Unique identifier used for {@link Fwupd.BiosSetting}
         * @since 1.8.4
         */
        set_bios_setting_id(id: string | null): void;

        /**
         * Sets the string used for the target value of an attribute.
         * @param value The string to set target value to
         * @since 1.8.4
         */
        set_bios_setting_target_value(value: string | null): void;

        /**
         * Sets when the attribute was created.
         * @param created the UNIX time
         * @since 1.7.1
         */
        set_created(created: bigint | number): void;

        /**
         * Sets the attribute description.
         * @param description the attribute description
         * @since 1.8.2
         */
        set_description(description: string | null): void;

        /**
         * Sets the attribute flags.
         * @param flags security attribute flags, e.g. {@link Fwupd.SecurityAttrFlags.OBSOLETED}
         * @since 1.5.0
         */
        set_flags(flags: SecurityAttrFlags): void;

        /**
         * Sets the fwupd version the attribute was added.
         * @param fwupd_version the fwupd version, e.g. `2.0.7`
         * @since 2.0.7
         */
        set_fwupd_version(fwupd_version: string | null): void;

        /**
         * Sets the current value of the BIOS setting that can be changed.
         * @param value The string to set current value to
         * @since 1.9.6
         */
        set_kernel_current_value(value: string | null): void;

        /**
         * Sets the target value of the kernel setting that can be changed.
         * @param value The string to set current value to
         * @since 1.9.6
         */
        set_kernel_target_value(value: string | null): void;

        /**
         * Sets the HSI level. A `level` of {@link Fwupd.SecurityAttrLevel.NONE} is not used
         * for the HSI calculation.
         * @param level a security attribute level, e.g. {@link Fwupd.SecurityAttrLevel.IMPORTANT}
         * @since 1.5.0
         */
        set_level(level: SecurityAttrLevel): void;

        /**
         * Sets the attribute name.
         * @param name the attribute name
         * @since 1.5.0
         */
        set_name(name: string | null): void;

        /**
         * Sets the plugin that created the attribute.
         * @param plugin the plugin name
         * @since 1.5.0
         */
        set_plugin(plugin: string | null): void;

        /**
         * Sets the optional HSI result. This is required because some attributes may
         * be a "success" when something is `locked` or may be "failed" if `found`.
         * @param result a security attribute result, e.g. `FWUPD_SECURITY_ATTR_LEVEL_LOCKED`
         * @since 1.5.0
         */
        set_result(result: SecurityAttrResult): void;

        /**
         * Sets the optional fallback HSI result. The fallback may represent the old state, or a state
         * that may be considered equivalent.
         * @param result a security attribute, e.g. `FWUPD_SECURITY_ATTR_LEVEL_LOCKED`
         * @since 1.7.1
         */
        set_result_fallback(result: SecurityAttrResult): void;

        /**
         * Sets the desired HSI result.
         * @param result a security attribute, e.g. `FWUPD_SECURITY_ATTR_LEVEL_LOCKED`
         * @since 1.9.3
         */
        set_result_success(result: SecurityAttrResult): void;

        /**
         * Sets the attribute title.
         * @param title the attribute title
         * @since 1.8.2
         */
        set_title(title: string | null): void;

        /**
         * Sets the attribute result.
         * @param url the attribute URL
         * @since 1.5.0
         */
        set_url(url: string | null): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         */
        add_string(idt: number, str: GLib.String): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON string.
         * @param json JSON text
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json_string(json: string): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @returns `true` on success
         * @since 2.0.0
         */
        from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON builder object.
         * @param json_obj a JSON builder
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         */
        to_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON string.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a string
         * @since 2.0.0
         */
        to_json_string(flags: CodecFlags): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @returns a string
         * @since 2.0.0
         */
        to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a {@link GLib.Variant}
         * @since 2.0.0
         */
        to_variant(flags: CodecFlags): GLib.Variant;

        /**
         * @param json_obj 
         * @param flags 
         * @virtual
         */
        vfunc_add_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         * @virtual
         */
        vfunc_add_string(idt: number, str: GLib.String): void;

        /**
         * @param builder 
         * @param flags 
         * @virtual
         */
        vfunc_add_variant(builder: GLib.VariantBuilder, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @since 2.0.0
         * @virtual
         */
        vfunc_from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         * @virtual
         */
        vfunc_to_variant(flags: CodecFlags): GLib.Variant;
    }


    /**
     * @gir-type Alias
     */
    type BiosSettingClass = typeof BiosSetting;

    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;

    /**
     * @gir-type Struct
     */
    abstract class ClientSyncImpl {
        static $gtype: GObject.GType<ClientSyncImpl>;
    }


    /**
     * @gir-type Alias
     */
    type CodecInterface = typeof Codec;

    /**
     * @gir-type Alias
     */
    type DeviceClass = typeof Device;

    /**
     * @gir-type Alias
     */
    type JcatBlobClass = typeof JcatBlob;

    /**
     * @gir-type Alias
     */
    type JcatFileClass = typeof JcatFile;

    /**
     * @gir-type Alias
     */
    type JcatItemClass = typeof JcatItem;

    /**
     * A JSON array.
     * 
     * See also: {@link FwupdJsonObject} {@link FwupdJsonNode}
     * @gir-type Struct
     */
    abstract class JsonArray {
        static $gtype: GObject.GType<JsonArray>;

        // Methods
        /**
         * Adds a different array to a JSON array.
         * @param json_arr a {@link Fwupd.JsonArray}
         * @since 2.1.1
         */
        add_array(json_arr: JsonArray): void;

        /**
         * Adds bytes to a JSON array. They will be base64 encoded as a string.
         * @param value string value
         * @since 2.1.1
         */
        add_bytes(value: GLib.Bytes | Uint8Array): void;

        /**
         * Adds a node to a JSON array.
         * @param json_node string value
         * @since 2.1.1
         */
        add_node(json_node: JsonNode): void;

        /**
         * Adds an object to a JSON array.
         * @param json_obj a {@link Fwupd.JsonObject}
         * @since 2.1.1
         */
        add_object(json_obj: JsonObject): void;

        /**
         * Adds a raw value to a JSON array.
         * @param value string value
         * @since 2.1.1
         */
        add_raw(value: string): void;

        /**
         * Adds a string to a JSON array.
         * @param value string value
         * @since 2.1.1
         */
        add_string(value: string): void;

        /**
         * Gets the size of the JSON array.
         * @returns number of elements added
         * @since 2.1.1
         */
        get_size(): number;

        /**
         * Increases the reference count of a JSON array.
         * @returns a {@link Fwupd.JsonArray}
         * @since 2.1.1
         */
        ref(): JsonArray;

        /**
         * Converts the JSON array to a string representation.
         * @param flags some {@link Fwupd.JsonExportFlags} e.g. #FWUPD_JSON_EXPORT_FLAG_INDENT
         * @returns a {@link GLib.String}
         * @since 2.1.1
         */
        to_string(flags: JsonExportFlags): GLib.String;

        /**
         * Decreases the reference count of a JSON array.
         * @returns a {@link Fwupd.JsonArray}, or `null`
         * @since 2.1.1
         */
        unref(): JsonArray;
    }


    /**
     * A JSON node.
     * 
     * Nodes are lazy-parsed, and can either be an "object", an "array", a "string" or "raw" -- the
     * latter which can be parsed as a float, integer, or boolean.
     * 
     * See also: {@link FwupdJsonArray} {@link FwupdJsonObject}
     * @gir-type Struct
     */
    abstract class JsonNode {
        static $gtype: GObject.GType<JsonNode>;

        // Static methods
        /**
         * Converts an enumerated value to a string.
         * @param val value, e.g. {@link Fwupd.JsonNodeKind.RAW}
         * @since 2.1.1
         */
        static kind_to_string(val: JsonNodeKind): string;

        // Methods
        /**
         * Gets the kind of the JSON json_node.
         * @returns a {@link Fwupd.JsonNodeKind}
         * @since 2.1.1
         */
        get_kind(): JsonNodeKind;

        /**
         * Increases the reference count of a JSON json_node.
         * @returns a {@link Fwupd.JsonNode}
         * @since 2.1.1
         */
        ref(): JsonNode;

        /**
         * Converts the JSON json_node to a string representation.
         * @param flags some {@link Fwupd.JsonExportFlags} e.g. #FWUPD_JSON_EXPORT_FLAG_INDENT
         * @returns a {@link GLib.String}
         * @since 2.1.1
         */
        to_string(flags: JsonExportFlags): GLib.String;

        /**
         * Destroys a JSON json_node.
         * @returns a {@link Fwupd.JsonArray}, or `null`
         * @since 2.1.1
         */
        unref(): JsonNode;
    }


    /**
     * A JSON object.
     * 
     * See also: {@link FwupdJsonArray} {@link FwupdJsonNode}
     * @gir-type Struct
     */
    abstract class JsonObject {
        static $gtype: GObject.GType<JsonObject>;

        // Methods
        /**
         * Adds an array to the JSON object.
         * @param key dictionary key
         * @param json_arr a {@link Fwupd.JsonArray}
         * @since 2.1.1
         */
        add_array(key: string, json_arr: JsonArray): void;

        /**
         * Adds a string array to the JSON object. If the node already exists the old one is replaced.
         * @param key dictionary key
         * @param value value
         * @since 2.1.1
         */
        add_array_strv(key: string, value: string): void;

        /**
         * Adds a boolean value to the JSON object.
         * @param key dictionary key
         * @param value boolean
         * @since 2.1.1
         */
        add_boolean(key: string, value: boolean): void;

        /**
         * Adds bytes to the JSON object. They will be base64 encoded as a string.
         * If the node already exists the old one is replaced.
         * @param key dictionary key
         * @param value value
         * @since 2.1.1
         */
        add_bytes(key: string, value: GLib.Bytes | Uint8Array): void;

        /**
         * Adds an integer value to the JSON object.
         * @param key dictionary key
         * @param value integer
         * @since 2.1.1
         */
        add_integer(key: string, value: bigint | number): void;

        /**
         * Adds a node to the JSON object. If the node already exists the old one is replaced.
         * @param key dictionary key
         * @param json_node a {@link Fwupd.JsonNode}
         * @since 2.1.1
         */
        add_node(key: string, json_node: JsonNode): void;

        /**
         * Adds a different object to the JSON object.
         * @param key dictionary key
         * @param json_obj a {@link Fwupd.JsonObject}
         * @since 2.1.1
         */
        add_object(key: string, json_obj: JsonObject): void;

        /**
         * Adds a string:string object to the JSON object.
         * @param key dictionary key
         * @param value a hash table
         * @since 2.1.1
         */
        add_object_map(key: string, value: { [key: string]: string }): void;

        /**
         * Adds a raw value to the JSON object. If the node already exists the old one is replaced.
         * @param key dictionary key
         * @param value value
         * @since 2.1.1
         */
        add_raw(key: string, value: string): void;

        /**
         * Adds a string value to the JSON object. If the node already exists the old one is replaced.
         * @param key dictionary key
         * @param value value, or `null`
         * @since 2.1.1
         */
        add_string(key: string, value: string | null): void;

        /**
         * Clears the member data for the JSON object, but does not affect the refcount.
         * @since 2.1.1
         */
        clear(): void;

        /**
         * Gets a boolean from a JSON object. An error is returned if `key` is not the correct type.
         * @param key dictionary key
         * @returns `true` if `value` was parsed as an integer
         * @since 2.1.1
         */
        get_boolean(key: string): [boolean, boolean];

        /**
         * Gets a boolean from a JSON object. An error is returned if `key` is not the correct type.
         * @param key dictionary key
         * @param value_default value to return if `key` is not found, typically `false`
         * @returns `true` if `value` was parsed as an integer
         * @since 2.1.1
         */
        get_boolean_with_default(key: string, value_default: boolean): [boolean, boolean];

        /**
         * Gets an integer from a JSON object. An error is returned if `key` is not the correct type.
         * @param key dictionary key
         * @returns `true` if `value` was parsed as an integer
         * @since 2.1.1
         */
        get_integer(key: string): [boolean, number];

        /**
         * Gets an integer from a JSON object. An error is returned if `key` is not the correct type.
         * @param key dictionary key
         * @param value_default value to return if `key` is not found, typically 0 or `G_MAXINT64`
         * @returns `true` if `value` was parsed as an integer
         * @since 2.1.1
         */
        get_integer_with_default(key: string, value_default: bigint | number): [boolean, number];

        /**
         * Gets the size of the JSON object.
         * @returns number of key-values added
         * @since 2.1.1
         */
        get_size(): number;

        /**
         * Gets a string from a JSON object. An error is returned if `key` is not the correct type.
         * @param key dictionary key
         * @param value_default value to return if `key` is not found
         * @returns a string, or `null` on error
         * @since 2.1.1
         */
        get_string_with_default(key: string, value_default: string): string;

        /**
         * Increases the reference count of a JSON object.
         * @returns a {@link Fwupd.JsonObject}
         * @since 2.1.1
         */
        ref(): JsonObject;

        /**
         * Converts the JSON object to UTF-8 bytes.
         * @param flags some {@link Fwupd.JsonExportFlags} e.g. #FWUPD_JSON_EXPORT_FLAG_INDENT
         * @returns a {@link GLib.Bytes}
         * @since 2.1.1
         */
        to_bytes(flags: JsonExportFlags): GLib.Bytes;

        /**
         * Converts the JSON object to a string representation.
         * @param flags some {@link Fwupd.JsonExportFlags} e.g. #FWUPD_JSON_EXPORT_FLAG_INDENT
         * @returns a {@link GLib.String}
         * @since 2.1.1
         */
        to_string(flags: JsonExportFlags): GLib.String;

        /**
         * Decreases the reference count of a JSON object.
         * @returns a {@link Fwupd.JsonObject}, or `null`
         * @since 2.1.1
         */
        unref(): JsonObject;
    }


    /**
     * @gir-type Alias
     */
    type JsonParserClass = typeof JsonParser;

    /**
     * @gir-type Alias
     */
    type PluginClass = typeof Plugin;

    /**
     * @gir-type Alias
     */
    type ReleaseClass = typeof Release;

    /**
     * @gir-type Alias
     */
    type RemoteClass = typeof Remote;

    /**
     * @gir-type Alias
     */
    type ReportClass = typeof Report;

    /**
     * @gir-type Alias
     */
    type RequestClass = typeof Request;

    /**
     * @gir-type Alias
     */
    type SecurityAttrClass = typeof SecurityAttr;

    namespace Codec {
        /**
         * Interface for implementing Codec.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param json_obj 
             * @param flags 
             * @virtual
             */
            vfunc_add_json(json_obj: JsonObject, flags: CodecFlags): void;

            /**
             * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
             * @param idt the indent
             * @param str a string to append to
             * @since 2.0.0
             * @virtual
             */
            vfunc_add_string(idt: number, str: GLib.String): void;

            /**
             * @param builder 
             * @param flags 
             * @virtual
             */
            vfunc_add_variant(builder: GLib.VariantBuilder, flags: CodecFlags): void;

            /**
             * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
             * @param json_obj a JSON object
             * @since 2.0.0
             * @virtual
             */
            vfunc_from_json(json_obj: JsonObject): boolean;

            /**
             * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
             * @param value a JSON node
             * @since 2.0.0
             * @virtual
             */
            vfunc_from_variant(value: GLib.Variant): boolean;

            /**
             * Converts an object that implements {@link Fwupd.Codec} to a debug string.
             * @since 2.0.0
             * @virtual
             */
            vfunc_to_string(): string;

            /**
             * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
             * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
             * @since 2.0.0
             * @virtual
             */
            vfunc_to_variant(flags: CodecFlags): GLib.Variant;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface CodecNamespace {
        $gtype: GObject.GType<Codec>;
        prototype: Codec;
        /**
        * Converts an array of objects, each deserialized from a {@link GLib.Variant} value.
        * @param value a JSON node
        * @param gtype a {@link GObject.GType} that implements {@link Fwupd.Codec}
        */
        array_from_variant(value: GLib.Variant, gtype: GObject.GType): GObject.Object[];
        /**
        * Converts an array of objects into a {@link GLib.Variant} value.
        * @param array (not nullable): array of objects that much implement {@link Fwupd.Codec}
        * @param member_name member name of the array
        * @param json_obj a {@link Fwupd.JsonObject}
        * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
        */
        array_to_json(array: GObject.Object[], member_name: string, json_obj: JsonObject, flags: CodecFlags): void;
        /**
        * Converts an array of objects into a {@link GLib.Variant} value.
        * @param array (not nullable): array of objects that much implement {@link Fwupd.Codec}
        * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
        */
        array_to_variant(array: GObject.Object[], flags: CodecFlags): GLib.Variant;
        /**
        * Appends a key and value to a JSON object.
        * 
        * Deprecated for `fwupd_json_object_add_string()`.
        * @param json_obj a {@link Fwupd.JsonObject}
        * @param key a string
        * @param value a string to append
        */
        json_append(json_obj: JsonObject, key: string, value: string): void;
        /**
        * Appends a key and boolean value to a JSON object.
        * 
        * Deprecated for `fwupd_json_object_add_boolean()`.
        * @param json_obj a {@link Fwupd.JsonObject}
        * @param key a string
        * @param value boolean
        */
        json_append_bool(json_obj: JsonObject, key: string, value: boolean): void;
        /**
        * Appends a key and unsigned integer to a JSON object.
        * 
        * Deprecated for `fwupd_json_object_add_integer()`.
        * @param json_obj a {@link Fwupd.JsonObject}
        * @param key a string
        * @param value guint64
        */
        json_append_int(json_obj: JsonObject, key: string, value: bigint | number): void;
        /**
        * Appends a key and string hash map to a JSON object.
        * 
        * Deprecated for `fwupd_json_object_add_object_map()`.
        * @param json_obj a {@link Fwupd.JsonObject}
        * @param key a string
        * @param value a hash table
        */
        json_append_map(json_obj: JsonObject, key: string, value: { [key: string]: string }): void;
        /**
        * Appends a key and string array to a JSON object.
        * 
        * Deprecated for `fwupd_json_object_add_array_strv()`.
        * @param json_obj a {@link Fwupd.JsonObject}
        * @param key a string
        * @param value a {@link GObject.Strv}
        */
        json_append_strv(json_obj: JsonObject, key: string, value: string): void;
        /**
        * Appends a key and value to a string.
        * @param str a {@link GLib.String}
        * @param idt the indent
        * @param key a string to append
        * @param value a string to append
        */
        string_append(str: GLib.String, idt: number, key: string, value: string): void;
        /**
        * Appends a key and boolean value to a string.
        * @param str a {@link GLib.String}
        * @param idt the indent
        * @param key a string to append
        * @param value Boolean
        */
        string_append_bool(str: GLib.String, idt: number, key: string, value: boolean): void;
        /**
        * Appends a key and hex integer to a string.
        * @param str a {@link GLib.String}
        * @param idt the indent
        * @param key a string to append
        * @param value guint64
        */
        string_append_hex(str: GLib.String, idt: number, key: string, value: bigint | number): void;
        /**
        * Appends a key and unsigned integer to a string.
        * @param str a {@link GLib.String}
        * @param idt the indent
        * @param key a string to append
        * @param value guint64
        */
        string_append_int(str: GLib.String, idt: number, key: string, value: bigint | number): void;
        /**
        * Appends a key and size in bytes to a string.
        * @param str a {@link GLib.String}
        * @param idt the indent
        * @param key a string to append
        * @param value guint64
        */
        string_append_size(str: GLib.String, idt: number, key: string, value: bigint | number): void;
        /**
        * Appends a key and time value to a string.
        * @param str a {@link GLib.String}
        * @param idt the indent
        * @param key a string to append
        * @param value guint64 UNIX time
        */
        string_append_time(str: GLib.String, idt: number, key: string, value: bigint | number): void;
    }
    /**
     * A codec that can serialize and deserialize objects to formats such as text, JSON or {@link GLib.Variant}.
     * @gir-type Interface
     */
    interface Codec extends GObject.Object, Codec.Interface {

        // Methods
        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string, appending it to `str`.
         * @param idt the indent
         * @param str a string to append to
         * @since 2.0.0
         */
        add_string(idt: number, str: GLib.String): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON object.
         * @param json_obj a JSON object
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json(json_obj: JsonObject): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a JSON string.
         * @param json JSON text
         * @returns `true` on success
         * @since 2.0.0
         */
        from_json_string(json: string): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} from a {@link GLib.Variant} value.
         * @param value a JSON node
         * @returns `true` on success
         * @since 2.0.0
         */
        from_variant(value: GLib.Variant): boolean;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON builder object.
         * @param json_obj a JSON builder
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @since 2.0.0
         */
        to_json(json_obj: JsonObject, flags: CodecFlags): void;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a JSON string.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a string
         * @since 2.0.0
         */
        to_json_string(flags: CodecFlags): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a debug string.
         * @returns a string
         * @since 2.0.0
         */
        to_string(): string;

        /**
         * Converts an object that implements {@link Fwupd.Codec} to a {@link GLib.Variant}.
         * @param flags a {@link Fwupd.CodecFlags}, e.g. {@link Fwupd.CodecFlags.TRUSTED}
         * @returns a {@link GLib.Variant}
         * @since 2.0.0
         */
        to_variant(flags: CodecFlags): GLib.Variant;
    }


    export const Codec: CodecNamespace & {
        new (): Codec; // This allows `obj instanceof Codec`
    };

    /**
     * @gir-type Alias
     */
    type _guid_t = number;

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

export default Fwupd;

// END
