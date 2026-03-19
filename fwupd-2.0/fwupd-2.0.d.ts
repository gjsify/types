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
     * The error code.
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Internal error
         */
        static INTERNAL: number;
        /**
         * Installed newer firmware version
         */
        static VERSION_NEWER: number;
        /**
         * Installed same firmware version
         */
        static VERSION_SAME: number;
        /**
         * Already set be be installed offline
         */
        static ALREADY_PENDING: number;
        /**
         * Failed to get authentication
         */
        static AUTH_FAILED: number;
        /**
         * Failed to read from device
         */
        static READ: number;
        /**
         * Failed to write to the device
         */
        static WRITE: number;
        /**
         * Invalid file format
         */
        static INVALID_FILE: number;
        /**
         * No matching device exists
         */
        static NOT_FOUND: number;
        /**
         * Nothing to do
         */
        static NOTHING_TO_DO: number;
        /**
         * Action was not possible
         */
        static NOT_SUPPORTED: number;
        /**
         * Signature was invalid
         */
        static SIGNATURE_INVALID: number;
        /**
         * AC power was required
         */
        static AC_POWER_REQUIRED: number;
        /**
         * Permission was denied
         */
        static PERMISSION_DENIED: number;
        /**
         * User has configured their system in a broken way
         */
        static BROKEN_SYSTEM: number;
        /**
         * The system battery level is too low
         */
        static BATTERY_LEVEL_TOO_LOW: number;
        /**
         * User needs to do an action to complete the update
         */
        static NEEDS_USER_ACTION: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * The update state.
     * @gir-type Enum
     */
    enum KeyringKind {
        /**
         * Unknown
         */
        UNKNOWN,
        /**
         * No verification
         */
        NONE,
        /**
         * Verification using GPG
         */
        GPG,
        /**
         * Verification using PKCS7
         */
        PKCS7,
        /**
         * Verification using Jcat
         */
        JCAT,
    }

    /**
     * The release urgency.
     * @gir-type Enum
     */
    enum ReleaseUrgency {
        /**
         * Unknown
         */
        UNKNOWN,
        /**
         * Low
         */
        LOW,
        /**
         * Medium
         */
        MEDIUM,
        /**
         * High
         */
        HIGH,
        /**
         * Critical, e.g. a security fix
         */
        CRITICAL,
    }

    /**
     * The kind of remote.
     * @gir-type Enum
     */
    enum RemoteKind {
        /**
         * Unknown kind
         */
        UNKNOWN,
        /**
         * Requires files to be downloaded
         */
        DOWNLOAD,
        /**
         * Reads files from the local machine
         */
        LOCAL,
        /**
         * Reads directory from the local machine
         */
        DIRECTORY,
    }

    /**
     * The HSI level.
     * @gir-type Enum
     */
    enum SecurityAttrLevel {
        /**
         * Very few detected firmware protections
         */
        NONE,
        /**
         * The most basic of security protections
         */
        CRITICAL,
        /**
         * Firmware security issues considered important
         */
        IMPORTANT,
        /**
         * Firmware security issues that pose a theoretical concern
         */
        THEORETICAL,
        /**
         * Out-of-band protection of the system firmware
         */
        SYSTEM_PROTECTION,
        /**
         * Out-of-band attestation of the system firmware
         */
        SYSTEM_ATTESTATION,
    }

    /**
     * The HSI result.
     * @gir-type Enum
     */
    enum SecurityAttrResult {
        /**
         * Not known
         */
        UNKNOWN,
        /**
         * Enabled
         */
        ENABLED,
        /**
         * Not enabled
         */
        NOT_ENABLED,
        /**
         * Valid
         */
        VALID,
        /**
         * Not valid
         */
        NOT_VALID,
        /**
         * Locked
         */
        LOCKED,
        /**
         * Not locked
         */
        NOT_LOCKED,
        /**
         * Encrypted
         */
        ENCRYPTED,
        /**
         * Not encrypted
         */
        NOT_ENCRYPTED,
        /**
         * Tainted
         */
        TAINTED,
        /**
         * Not tainted
         */
        NOT_TAINTED,
        /**
         * Found
         */
        FOUND,
        /**
         * NOt found
         */
        NOT_FOUND,
        /**
         * Supported
         */
        SUPPORTED,
        /**
         * Not supported
         */
        NOT_SUPPORTED,
    }

    /**
     * The flags to show daemon status.
     * @gir-type Enum
     */
    enum Status {
        /**
         * Unknown state
         */
        UNKNOWN,
        /**
         * Idle
         */
        IDLE,
        /**
         * Loading a resource
         */
        LOADING,
        /**
         * Decompressing firmware
         */
        DECOMPRESSING,
        /**
         * Restarting the device
         */
        DEVICE_RESTART,
        /**
         * Writing to a device
         */
        DEVICE_WRITE,
        /**
         * Verifying (reading) a device
         */
        DEVICE_VERIFY,
        /**
         * Scheduling an offline update
         */
        SCHEDULING,
        /**
         * A file is downloading
         */
        DOWNLOADING,
        /**
         * Reading from a device
         */
        DEVICE_READ,
        /**
         * Erasing a device
         */
        DEVICE_ERASE,
        /**
         * Waiting for authentication
         */
        WAITING_FOR_AUTH,
        /**
         * The device is busy
         */
        DEVICE_BUSY,
        /**
         * The daemon is shutting down
         */
        SHUTDOWN,
    }

    /**
     * The update state.
     * @gir-type Enum
     */
    enum UpdateState {
        /**
         * Unknown
         */
        UNKNOWN,
        /**
         * Update is pending
         */
        PENDING,
        /**
         * Update was successful
         */
        SUCCESS,
        /**
         * Update failed
         */
        FAILED,
        /**
         * Waiting for a reboot to apply
         */
        NEEDS_REBOOT,
        /**
         * Update failed due to transient issue, e.g. AC power required
         */
        FAILED_TRANSIENT,
    }

    /**
     * The flags used when parsing version numbers.
     *
     * If no verification is required then {@link Fwupd.VersionFormat.PLAIN} should
     * be used to signify an unparsable text string.
     * @gir-type Enum
     */
    enum VersionFormat {
        /**
         * Unknown version format
         */
        UNKNOWN,
        /**
         * An unidentified format text string
         */
        PLAIN,
        /**
         * A single integer version number
         */
        NUMBER,
        /**
         * Two AABB.CCDD version numbers
         */
        PAIR,
        /**
         * Microsoft-style AA.BB.CCDD version numbers
         */
        TRIPLET,
        /**
         * UEFI-style AA.BB.CC.DD version numbers
         */
        QUAD,
        /**
         * Binary coded decimal notation
         */
        BCD,
        /**
         * Intel ME-style bitshifted notation
         */
        INTEL_ME,
        /**
         * Intel ME-style A.B.CC.DDDD notation notation
         */
        INTEL_ME2,
        /**
         * Legacy Microsoft Surface 10b.12b.10b
         */
        SURFACE_LEGACY,
        /**
         * Microsoft Surface 8b.16b.8b
         */
        SURFACE,
        /**
         * Dell BIOS BB.CC.DD style
         */
        DELL_BIOS,
        /**
         * Hexadecimal 0xAABCCDD style
         */
        HEX,
    }

    const DBUS_INTERFACE: string;
    const DBUS_PATH: string;
    const DBUS_SERVICE: string;
    const DEVICE_FLAG_ADD_COUNTERPART_GUIDS: number;
    const DEVICE_FLAG_ANOTHER_WRITE_REQUIRED: number;
    const DEVICE_FLAG_BACKUP_BEFORE_INSTALL: number;
    const DEVICE_FLAG_CAN_VERIFY: number;
    const DEVICE_FLAG_CAN_VERIFY_IMAGE: number;
    const DEVICE_FLAG_DUAL_IMAGE: number;
    const DEVICE_FLAG_ENSURE_SEMVER: number;
    const DEVICE_FLAG_HAS_MULTIPLE_BRANCHES: number;
    const DEVICE_FLAG_HISTORICAL: number;
    const DEVICE_FLAG_IGNORE_VALIDATION: number;
    const DEVICE_FLAG_INSTALL_ALL_RELEASES: number;
    const DEVICE_FLAG_INSTALL_PARENT_FIRST: number;
    const DEVICE_FLAG_INTERNAL: number;
    const DEVICE_FLAG_IS_BOOTLOADER: number;
    const DEVICE_FLAG_LOCKED: number;
    const DEVICE_FLAG_MD_SET_ICON: number;
    const DEVICE_FLAG_MD_SET_NAME: number;
    const DEVICE_FLAG_MD_SET_NAME_CATEGORY: number;
    const DEVICE_FLAG_MD_SET_VERFMT: number;
    const DEVICE_FLAG_NEEDS_ACTIVATION: number;
    const DEVICE_FLAG_NEEDS_BOOTLOADER: number;
    const DEVICE_FLAG_NEEDS_REBOOT: number;
    const DEVICE_FLAG_NEEDS_SHUTDOWN: number;
    const DEVICE_FLAG_NONE: number;
    const DEVICE_FLAG_NOTIFIED: number;
    const DEVICE_FLAG_NO_AUTO_INSTANCE_IDS: number;
    const DEVICE_FLAG_NO_GUID_MATCHING: number;
    const DEVICE_FLAG_ONLY_OFFLINE: number;
    const DEVICE_FLAG_ONLY_SUPPORTED: number;
    const DEVICE_FLAG_REGISTERED: number;
    const DEVICE_FLAG_REPORTED: number;
    const DEVICE_FLAG_REQUIRE_AC: number;
    const DEVICE_FLAG_SELF_RECOVERY: number;
    const DEVICE_FLAG_SKIPS_RESTART: number;
    const DEVICE_FLAG_SUPPORTED: number;
    const DEVICE_FLAG_TRUSTED: number;
    const DEVICE_FLAG_UPDATABLE: number;
    const DEVICE_FLAG_UPDATABLE_HIDDEN: number;
    const DEVICE_FLAG_USABLE_DURING_UPDATE: number;
    const DEVICE_FLAG_USE_RUNTIME_VERSION: number;
    const DEVICE_FLAG_VERSION_CHECK_REQUIRED: number;
    const DEVICE_FLAG_WAIT_FOR_REPLUG: number;
    const DEVICE_FLAG_WILL_DISAPPEAR: number;
    const DEVICE_ID_ANY: string;
    const PLUGIN_FLAG_CAPSULES_UNSUPPORTED: number;
    const PLUGIN_FLAG_CLEAR_UPDATABLE: number;
    const PLUGIN_FLAG_DISABLED: number;
    const PLUGIN_FLAG_EFIVAR_NOT_MOUNTED: number;
    const PLUGIN_FLAG_ESP_NOT_FOUND: number;
    const PLUGIN_FLAG_FAILED_OPEN: number;
    const PLUGIN_FLAG_LEGACY_BIOS: number;
    const PLUGIN_FLAG_NONE: number;
    const PLUGIN_FLAG_NO_HARDWARE: number;
    const PLUGIN_FLAG_UNLOCK_REQUIRED: number;
    const PLUGIN_FLAG_USER_WARNING: number;
    const RELEASE_FLAG_BLOCKED_APPROVAL: number;
    const RELEASE_FLAG_BLOCKED_VERSION: number;
    const RELEASE_FLAG_IS_ALTERNATE_BRANCH: number;
    const RELEASE_FLAG_IS_DOWNGRADE: number;
    const RELEASE_FLAG_IS_UPGRADE: number;
    const RELEASE_FLAG_NONE: number;
    const RELEASE_FLAG_TRUSTED_METADATA: number;
    const RELEASE_FLAG_TRUSTED_PAYLOAD: number;
    const RESULT_KEY_APPSTREAM_ID: string;
    const RESULT_KEY_BRANCH: string;
    const RESULT_KEY_CATEGORIES: string;
    const RESULT_KEY_CHECKSUM: string;
    const RESULT_KEY_CREATED: string;
    const RESULT_KEY_DESCRIPTION: string;
    const RESULT_KEY_DETACH_CAPTION: string;
    const RESULT_KEY_DETACH_IMAGE: string;
    const RESULT_KEY_DETAILS_URL: string;
    const RESULT_KEY_DEVICE_ID: string;
    const RESULT_KEY_FILENAME: string;
    const RESULT_KEY_FLAGS: string;
    const RESULT_KEY_FLASHES_LEFT: string;
    const RESULT_KEY_GUID: string;
    const RESULT_KEY_HOMEPAGE: string;
    const RESULT_KEY_HSI_LEVEL: string;
    const RESULT_KEY_HSI_RESULT: string;
    const RESULT_KEY_ICON: string;
    const RESULT_KEY_INSTALL_DURATION: string;
    const RESULT_KEY_INSTANCE_IDS: string;
    const RESULT_KEY_ISSUES: string;
    const RESULT_KEY_LICENSE: string;
    const RESULT_KEY_LOCATIONS: string;
    const RESULT_KEY_METADATA: string;
    const RESULT_KEY_MODIFIED: string;
    const RESULT_KEY_NAME: string;
    const RESULT_KEY_NAME_VARIANT_SUFFIX: string;
    const RESULT_KEY_PARENT_DEVICE_ID: string;
    const RESULT_KEY_PLUGIN: string;
    const RESULT_KEY_PROTOCOL: string;
    const RESULT_KEY_RELEASE: string;
    const RESULT_KEY_REMOTE_ID: string;
    const RESULT_KEY_SERIAL: string;
    const RESULT_KEY_SIZE: string;
    const RESULT_KEY_SOURCE_URL: string;
    const RESULT_KEY_STATUS: string;
    const RESULT_KEY_SUMMARY: string;
    const RESULT_KEY_TRUST_FLAGS: string;
    const RESULT_KEY_UPDATE_ERROR: string;
    const RESULT_KEY_UPDATE_IMAGE: string;
    const RESULT_KEY_UPDATE_MESSAGE: string;
    const RESULT_KEY_UPDATE_STATE: string;
    const RESULT_KEY_URGENCY: string;
    const RESULT_KEY_URI: string;
    const RESULT_KEY_VENDOR: string;
    const RESULT_KEY_VENDOR_ID: string;
    const RESULT_KEY_VERSION: string;
    const RESULT_KEY_VERSION_BOOTLOADER: string;
    const RESULT_KEY_VERSION_BOOTLOADER_RAW: string;
    const RESULT_KEY_VERSION_FORMAT: string;
    const RESULT_KEY_VERSION_LOWEST: string;
    const RESULT_KEY_VERSION_LOWEST_RAW: string;
    const RESULT_KEY_VERSION_RAW: string;
    const SECURITY_ATTR_ID_ACPI_DMAR: string;
    const SECURITY_ATTR_ID_ENCRYPTED_RAM: string;
    const SECURITY_ATTR_ID_FWUPD_ATTESTATION: string;
    const SECURITY_ATTR_ID_FWUPD_PLUGINS: string;
    const SECURITY_ATTR_ID_FWUPD_UPDATES: string;
    const SECURITY_ATTR_ID_INTEL_BOOTGUARD_ACM: string;
    const SECURITY_ATTR_ID_INTEL_BOOTGUARD_ENABLED: string;
    const SECURITY_ATTR_ID_INTEL_BOOTGUARD_OTP: string;
    const SECURITY_ATTR_ID_INTEL_BOOTGUARD_POLICY: string;
    const SECURITY_ATTR_ID_INTEL_BOOTGUARD_VERIFIED: string;
    const SECURITY_ATTR_ID_INTEL_CET_ACTIVE: string;
    const SECURITY_ATTR_ID_INTEL_CET_ENABLED: string;
    const SECURITY_ATTR_ID_INTEL_DCI_ENABLED: string;
    const SECURITY_ATTR_ID_INTEL_DCI_LOCKED: string;
    const SECURITY_ATTR_ID_INTEL_SMAP: string;
    const SECURITY_ATTR_ID_IOMMU: string;
    const SECURITY_ATTR_ID_KERNEL_LOCKDOWN: string;
    const SECURITY_ATTR_ID_KERNEL_SWAP: string;
    const SECURITY_ATTR_ID_KERNEL_TAINTED: string;
    const SECURITY_ATTR_ID_MEI_MANUFACTURING_MODE: string;
    const SECURITY_ATTR_ID_MEI_OVERRIDE_STRAP: string;
    const SECURITY_ATTR_ID_MEI_VERSION: string;
    const SECURITY_ATTR_ID_SPI_BIOSWE: string;
    const SECURITY_ATTR_ID_SPI_BLE: string;
    const SECURITY_ATTR_ID_SPI_SMM_BWP: string;
    const SECURITY_ATTR_ID_SUSPEND_TO_IDLE: string;
    const SECURITY_ATTR_ID_SUSPEND_TO_RAM: string;
    const SECURITY_ATTR_ID_TPM_RECONSTRUCTION_PCR0: string;
    const SECURITY_ATTR_ID_TPM_VERSION_20: string;
    const SECURITY_ATTR_ID_UEFI_PK: string;
    const SECURITY_ATTR_ID_UEFI_SECUREBOOT: string;
    /**
     * Builds a JSON report for the list of devices. No filtering is done on the
     * `devices` array, and it is expected that the caller will filter to something
     * sane, e.g. `FWUPD_DEVICE_FLAG_REPORTED` at the bare minimum.
     * @param devices devices
     * @returns a string, or `null` if the ID is not present
     * @since 1.0.4
     */
    function build_history_report_json(devices: Device[]): string;
    /**
     * Gets a salted hash of the /etc/machine-id contents. This can be used to
     * identify a specific machine. It is not possible to recover the original
     * machine-id from the machine-hash.
     * @param salt The salt, or `null` for none
     * @returns the SHA256 machine hash, or `null` if the ID is not present
     * @since 1.0.4
     */
    function build_machine_id(salt: string): string;
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
     *
     * Rather that using this function you should use `fwupd_client_set_user_agent_for_package()`
     * which uses the *runtime* version of the daemon rather than the *build-time*
     * version.
     * @param package_name client program name, e.g. "gnome-software"
     * @param package_version client program version, e.g. "3.28.1"
     * @returns a string, e.g. `foo/0.1 (Linux i386 4.14.5; en; Fedora 27) fwupd/1.0.3`
     * @since 1.0.3
     */
    function build_user_agent(package_name: string, package_version: string): string;
    /**
     * Formats a checksum for display.
     * @param checksum A checksum
     * @returns text, or `null` for invalid
     * @since 0.9.3
     */
    function checksum_format_for_display(checksum: string): string;
    /**
     * Gets a the best possible checksum kind.
     * @param checksums checksums
     * @returns a checksum from the array, or `null` if nothing was suitable
     * @since 0.9.4
     */
    function checksum_get_best(checksums: string[]): string;
    /**
     * Gets a specific checksum kind.
     * @param checksums checksums
     * @param kind a {@link GLib.ChecksumType}, e.g. {@link GLib.ChecksumType.SHA512}
     * @returns a checksum from the array, or `null` if not found
     * @since 0.9.4
     */
    function checksum_get_by_kind(checksums: string[], kind: GLib.ChecksumType | null): string;
    /**
     * Guesses the checksum kind based on the length of the hash.
     * @param checksum A checksum
     * @returns a {@link GLib.ChecksumType}, e.g. {@link GLib.ChecksumType.SHA1}
     * @since 0.9.3
     */
    function checksum_guess_kind(checksum: string): GLib.ChecksumType;
    /**
     * Converts a string to a {@link Fwupd.Error}.
     * @param error A string, e.g. `org.freedesktop.fwupd.VersionNewer`
     * @returns enumerated value
     * @since 0.7.0
     */
    function error_from_string(error: string): Error;
    /**
     * @returns An error quark.
     * @since 0.1.1
     */
    function error_quark(): GLib.Quark;
    /**
     * Converts a {@link Fwupd.Error} to a string.
     * @param error A {@link Fwupd.Error}, e.g. {@link Fwupd.Error.VERSION_NEWER}
     * @returns identifier string
     * @since 0.7.0
     */
    function error_to_string(error: Error | null): string;
    /**
     * Converts a string to a {@link Fwupd.FeatureFlags}.
     * @param feature_flag A string, e.g. `detach-action`
     * @returns enumerated value
     * @since 1.4.5
     */
    function feature_flag_from_string(feature_flag: string): FeatureFlags;
    /**
     * Converts a {@link Fwupd.FeatureFlags} to a string.
     * @param feature_flag A {@link Fwupd.FeatureFlags}, e.g. {@link Fwupd.FeatureFlags.DETACH_ACTION}
     * @returns identifier string
     * @since 1.4.5
     */
    function feature_flag_to_string(feature_flag: FeatureFlags | null): string;
    /**
     * Loads information from the system os-release file.
     * @returns keys from os-release
     * @since 1.0.7
     */
    function get_os_release(): GLib.HashTable<string, string>;
    /**
     * Converts a string GUID into its binary encoding. All string GUIDs are
     * formatted as big endian but on-disk can be encoded in different ways.
     * @param guidstr a GUID, e.g. `00112233-4455-6677-8899-aabbccddeeff`
     * @param guid a `fwupd_guid_t`, or NULL to just check the GUID
     * @param flags some %FwupdGuidFlags, e.g. {@link Fwupd.GuidFlags.MIXED_ENDIAN}
     * @returns `true` for success
     * @since 1.2.5
     */
    function guid_from_string(guidstr: string | null, guid: number, flags: GuidFlags | null): boolean;
    /**
     * Returns a GUID for some data. This uses a hash and so even small
     * differences in the `data` will produce radically different return values.
     *
     * The implementation is taken from RFC4122, Section 4.1.3; specifically
     * using a type-5 SHA-1 hash.
     * @param data data to hash
     * @param datasz length of `data`
     * @param flags some %FwupdGuidFlags, e.g. {@link Fwupd.GuidFlags.NAMESPACE_MICROSOFT}
     * @returns A new GUID, or `null` for internal error
     * @since 1.2.5
     */
    function guid_hash_data(data: number, datasz: number, flags: GuidFlags | null): string;
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
     * @param str A source string to use as a key
     * @returns A new GUID, or `null` if the string was invalid
     * @since 1.2.5
     */
    function guid_hash_string(str: string): string;
    /**
     * Checks the string is a valid GUID.
     * @param guid string to check, e.g. `00112233-4455-6677-8899-aabbccddeeff`
     * @returns `true` if `guid` was a valid GUID, `false` otherwise
     * @since 1.2.5
     */
    function guid_is_valid(guid: string): boolean;
    /**
     * Returns a text GUID of mixed or BE endian for a packed buffer.
     * @param guid a `fwupd_guid_t` to read
     * @param flags some %FwupdGuidFlags, e.g. {@link Fwupd.GuidFlags.MIXED_ENDIAN}
     * @returns A new GUID
     * @since 1.2.5
     */
    function guid_to_string(guid: number, flags: GuidFlags | null): string;
    /**
     * Converts an printable string to an enumerated type.
     * @param keyring_kind a string, e.g. `gpg`
     * @returns a {@link Fwupd.KeyringKind}, e.g. {@link Fwupd.KeyringKind.GPG}
     * @since 0.9.7
     */
    function keyring_kind_from_string(keyring_kind: string): KeyringKind;
    /**
     * Converts an enumerated type to a printable string.
     * @param keyring_kind a {@link Fwupd.KeyringKind}, e.g. {@link Fwupd.KeyringKind.GPG}
     * @returns a string, e.g. `gpg`
     * @since 0.9.7
     */
    function keyring_kind_to_string(keyring_kind: KeyringKind | null): string;
    /**
     * Converts a string to a {@link Fwupd.Status}.
     * @param status A string, e.g. `decompressing`
     * @returns enumerated value
     * @since 0.1.1
     */
    function status_from_string(status: string): Status;
    /**
     * Converts a {@link Fwupd.Status} to a string.
     * @param status A {@link Fwupd.Status}, e.g. {@link Fwupd.Status.DECOMPRESSING}
     * @returns identifier string
     * @since 0.1.1
     */
    function status_to_string(status: Status | null): string;
    /**
     * Converts a string to a {@link Fwupd.TrustFlags}.
     * @param trust_flag A string, e.g. `payload`
     * @returns enumerated value
     * @since 0.7.0
     */
    function trust_flag_from_string(trust_flag: string): TrustFlags;
    /**
     * Converts a {@link Fwupd.TrustFlags} to a string.
     * @param trust_flag A {@link Fwupd.TrustFlags}, e.g. {@link Fwupd.TrustFlags.PAYLOAD}
     * @returns identifier string
     * @since 0.7.0
     */
    function trust_flag_to_string(trust_flag: TrustFlags | null): string;
    /**
     * Converts a string to a {@link Fwupd.UpdateState}.
     * @param update_state A string, e.g. `pending`
     * @returns enumerated value
     * @since 0.7.0
     */
    function update_state_from_string(update_state: string): UpdateState;
    /**
     * Converts a {@link Fwupd.UpdateState} to a string.
     * @param update_state A {@link Fwupd.UpdateState}, e.g. {@link Fwupd.UpdateState.PENDING}
     * @returns identifier string
     * @since 0.7.0
     */
    function update_state_to_string(update_state: UpdateState | null): string;
    /**
     * Converts text to a display version type.
     * @param str A string, e.g. `quad`
     * @returns A {@link Fwupd.VersionFormat}, e.g. {@link Fwupd.VersionFormat.TRIPLET}
     * @since 1.2.9
     */
    function version_format_from_string(str: string): VersionFormat;
    /**
     * Converts a display version type to text.
     * @param kind A {@link Fwupd.VersionFormat}, e.g. {@link Fwupd.VersionFormat.TRIPLET}
     * @returns A string, e.g. `quad`, or `null` if not known
     * @since 1.2.9
     */
    function version_format_to_string(kind: VersionFormat | null): string;
    /**
     * The options to use for downloading.
     * @gir-type Flags
     */
    enum ClientDownloadFlags {
        /**
         * No flags set
         */
        NONE,
        /**
         * Only use IPFS when downloading URIs
         */
        ONLY_IPFS,
    }

    /**
     * The options to use for uploading.
     * @gir-type Flags
     */
    enum ClientUploadFlags {
        /**
         * No flags set
         */
        NONE,
        /**
         * Always use multipart/form-data
         */
        ALWAYS_MULTIPART,
    }

    /**
     * The flags to the feature capabilities of the front-end client.
     * @gir-type Flags
     */
    enum FeatureFlags {
        /**
         * No trust
         */
        NONE,
        /**
         * Can upload a report of the update back to the server
         */
        CAN_REPORT,
        /**
         * Can perform detach action, typically showing text
         */
        DETACH_ACTION,
        /**
         * Can perform update action, typically showing text
         */
        UPDATE_ACTION,
        /**
         * Can switch the firmware branch
         */
        SWITCH_BRANCH,
    }

    /**
     * The flags to show how the data should be converted.
     * @gir-type Flags
     */
    enum GuidFlags {
        /**
         * No trust
         */
        NONE,
        /**
         * Use the Microsoft-compatible namespace
         */
        NAMESPACE_MICROSOFT,
        /**
         * Use EFI mixed endian representation
         */
        MIXED_ENDIAN,
    }

    /**
     * Flags to set when performing the firmware update or install.
     * @gir-type Flags
     */
    enum InstallFlags {
        /**
         * No flags set
         */
        NONE,
        /**
         * Schedule this for next boot
         */
        OFFLINE,
        /**
         * Allow reinstalling the same version
         */
        ALLOW_REINSTALL,
        /**
         * Allow downgrading firmware
         */
        ALLOW_OLDER,
        /**
         * Force the update even if not a good idea
         */
        FORCE,
        /**
         * Do not write to the history database
         */
        NO_HISTORY,
        /**
         * Allow firmware branch switching
         */
        ALLOW_BRANCH_SWITCH,
        /**
         * Ignore firmware CRCs and checksums
         */
        IGNORE_CHECKSUM,
        /**
         * Ignore firmware vendor and project checks
         */
        IGNORE_VID_PID,
        /**
         * Ignore requirement of external power source
         */
        IGNORE_POWER,
        /**
         * Do not use heuristics when parsing the image
         */
        NO_SEARCH,
    }

    /**
     * The flags available for HSI attributes.
     * @gir-type Flags
     */
    enum SecurityAttrFlags {
        /**
         * No flags set
         */
        NONE,
        /**
         * Success
         */
        SUCCESS,
        /**
         * Obsoleted by another attribute
         */
        OBSOLETED,
        /**
         * Suffix `U`
         */
        RUNTIME_UPDATES,
        /**
         * Suffix `A`
         */
        RUNTIME_ATTESTATION,
        /**
         * Suffix `!`
         */
        RUNTIME_ISSUE,
    }

    /**
     * Flags to set when performing the firmware update or install.
     * @gir-type Flags
     */
    enum SelfSignFlags {
        /**
         * No flags set
         */
        NONE,
        /**
         * Add the timestamp to the detached signature
         */
        ADD_TIMESTAMP,
        /**
         * Add the certificate to the detached signature
         */
        ADD_CERT,
    }

    /**
     * The flags to show the level of trust.
     * @gir-type Flags
     */
    enum TrustFlags {
        /**
         * No trust
         */
        NONE,
        /**
         * The firmware is trusted
         */
        PAYLOAD,
        /**
         * The metadata is trusted
         */
        METADATA,
    }

    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::changed signal is emitted when the daemon internal has
             * changed, for instance when a device has been added or removed.
             * @signal
             * @since 0.7.0
             */
            changed: () => void;
            /**
             * The ::device-added signal is emitted when a device has been
             * added.
             * @signal
             * @since 0.7.1
             */
            'device-added': (arg0: Device) => void;
            /**
             * The ::device-changed signal is emitted when a device has been
             * changed in some way, e.g. the version number is updated.
             * @signal
             * @since 0.7.1
             */
            'device-changed': (arg0: Device) => void;
            /**
             * The ::device-removed signal is emitted when a device has been
             * removed.
             * @signal
             * @since 0.7.1
             */
            'device-removed': (arg0: Device) => void;
            /**
             * @signal
             */
            'status-changed': (arg0: number) => void;
            'notify::daemon-version': (pspec: GObject.ParamSpec) => void;
            'notify::host-machine-id': (pspec: GObject.ParamSpec) => void;
            'notify::host-product': (pspec: GObject.ParamSpec) => void;
            'notify::host-security-id': (pspec: GObject.ParamSpec) => void;
            'notify::interactive': (pspec: GObject.ParamSpec) => void;
            'notify::percentage': (pspec: GObject.ParamSpec) => void;
            'notify::soup-session': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
            'notify::tainted': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            daemon_version: string;
            daemonVersion: string;
            host_machine_id: string;
            hostMachineId: string;
            host_product: string;
            hostProduct: string;
            host_security_id: string;
            hostSecurityId: string;
            interactive: boolean;
            percentage: number;
            soup_session: GObject.Object;
            soupSession: GObject.Object;
            status: number;
            tainted: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        /**
         * The daemon version number.
         * @since 0.9.6
         */
        get daemon_version(): string;
        /**
         * The daemon version number.
         * @since 0.9.6
         */
        get daemonVersion(): string;
        /**
         * The host machine-id string
         * @since 1.3.2
         */
        get host_machine_id(): string;
        /**
         * The host machine-id string
         * @since 1.3.2
         */
        get hostMachineId(): string;
        /**
         * The host product string
         * @since 1.3.1
         */
        get host_product(): string;
        /**
         * The host product string
         * @since 1.3.1
         */
        get hostProduct(): string;
        /**
         * The host machine-id string
         * @since 1.5.0
         */
        get host_security_id(): string;
        /**
         * The host machine-id string
         * @since 1.5.0
         */
        get hostSecurityId(): string;
        /**
         * If the daemon is running in an interactive terminal
         * @since 1.3.4
         */
        get interactive(): boolean;
        /**
         * The last-reported percentage of the daemon.
         * @since 0.7.3
         */
        get percentage(): number;
        set percentage(val: number);
        /**
         * The libsoup session, now unused.
         * @since 1.4.5
         */
        get soup_session(): GObject.Object;
        /**
         * The libsoup session, now unused.
         * @since 1.4.5
         */
        get soupSession(): GObject.Object;
        /**
         * The last-reported status of the daemon.
         * @since 0.7.0
         */
        get status(): number;
        set status(val: number);
        /**
         * If the daemon is tainted by 3rd party code.
         * @since 1.2.4
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
         * @param status
         * @virtual
         */
        vfunc_status_changed(status: Status): void;

        // Methods

        /**
         * Activates up a device, which normally means the device switches to a new
         * firmware version. This should only be called when data loss cannot occur.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param device_id a device
         * @returns `true` for success
         */
        activate(cancellable: Gio.Cancellable | null, device_id: string): boolean;
        /**
         * Activates up a device, which normally means the device switches to a new
         * firmware version. This should only be called when data loss cannot occur.
         * @param device_id a device
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        activate_async(device_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Activates up a device, which normally means the device switches to a new
         * firmware version. This should only be called when data loss cannot occur.
         * @param device_id a device
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        activate_async(
            device_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Activates up a device, which normally means the device switches to a new
         * firmware version. This should only be called when data loss cannot occur.
         * @param device_id a device
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        activate_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_activate_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        activate_finish(res: Gio.AsyncResult): boolean;
        /**
         * Clears the results for a specific device.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        clear_results(device_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Clears the results for a specific device.
         * @param device_id a device
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        clear_results_async(device_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Clears the results for a specific device.
         * @param device_id a device
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        clear_results_async(
            device_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Clears the results for a specific device.
         * @param device_id a device
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        clear_results_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_clear_results_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        clear_results_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets up the client ready for use. Most other methods call this
         * for you, and do you only need to call this if you are just watching
         * the client.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        connect(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param args
         */
        connect(...args: never[]): any;
        /**
         * Sets up the client ready for use. This is probably the first method you call
         * when wanting to use libfwupd in an asynchronous manner.
         *
         * Other methods such as `fwupd_client_get_devices_async()` should only be called
         * after `fwupd_client_connect_finish()` has been called without an error.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        connect_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Sets up the client ready for use. This is probably the first method you call
         * when wanting to use libfwupd in an asynchronous manner.
         *
         * Other methods such as `fwupd_client_get_devices_async()` should only be called
         * after `fwupd_client_connect_finish()` has been called without an error.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        connect_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Sets up the client ready for use. This is probably the first method you call
         * when wanting to use libfwupd in an asynchronous manner.
         *
         * Other methods such as `fwupd_client_get_devices_async()` should only be called
         * after `fwupd_client_connect_finish()` has been called without an error.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        connect_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_connect_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        connect_finish(res: Gio.AsyncResult): boolean;
        /**
         * Downloads data from a remote server. The `fwupd_client_set_user_agent()` function
         * should be called before this method is used.
         * @param url the remote URL
         * @param flags {@link Fwupd.ClientDownloadFlags}, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns downloaded data, or `null` for error
         */
        download_bytes(
            url: string,
            flags: ClientDownloadFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): GLib.Bytes;
        /**
         * Downloads data from a remote server. The `fwupd_client_set_user_agent()` function
         * should be called before this method is used.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param url the remote URL
         * @param flags {@link Fwupd.ClientDownloadFlags}, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        download_bytes_async(
            url: string,
            flags: ClientDownloadFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<GLib.Bytes>;
        /**
         * Downloads data from a remote server. The `fwupd_client_set_user_agent()` function
         * should be called before this method is used.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param url the remote URL
         * @param flags {@link Fwupd.ClientDownloadFlags}, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        download_bytes_async(
            url: string,
            flags: ClientDownloadFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Downloads data from a remote server. The `fwupd_client_set_user_agent()` function
         * should be called before this method is used.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param url the remote URL
         * @param flags {@link Fwupd.ClientDownloadFlags}, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        download_bytes_async(
            url: string,
            flags: ClientDownloadFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Bytes> | void;
        /**
         * Gets the result of `fwupd_client_download_bytes_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns downloaded data, or `null` for error
         */
        download_bytes_finish(res: Gio.AsyncResult): GLib.Bytes;
        /**
         * Downloads data from a remote server. The `fwupd_client_set_user_agent()` function
         * should be called before this method is used.
         * @param url the remote URL
         * @param file a {@link Gio.File}
         * @param flags {@link Fwupd.ClientDownloadFlags}, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` if the file was written, or `null` for error
         */
        download_file(
            url: string,
            file: Gio.File,
            flags: ClientDownloadFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Sets up the client networking support ready for use. Most other download and
         * upload methods call this automatically, and do you only need to call this if
         * the session is being used outside the {@link Fwupd.Client}.
         * @returns `true` for success
         */
        ensure_networking(): boolean;
        /**
         * Gets the list of approved firmware.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns checksums, or `null` for error
         */
        get_approved_firmware(cancellable?: Gio.Cancellable | null): string[];
        /**
         * Gets the list of approved firmware.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_approved_firmware_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<string[]>;
        /**
         * Gets the list of approved firmware.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_approved_firmware_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the list of approved firmware.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_approved_firmware_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string[]> | void;
        /**
         * Gets the result of `fwupd_client_get_approved_firmware_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns checksums, or `null` for error
         */
        get_approved_firmware_finish(res: Gio.AsyncResult): string[];
        /**
         * Gets the list of blocked firmware.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns checksums, or `null` for error
         */
        get_blocked_firmware(cancellable?: Gio.Cancellable | null): string[];
        /**
         * Gets the list of blocked firmware.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_blocked_firmware_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<string[]>;
        /**
         * Gets the list of blocked firmware.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_blocked_firmware_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the list of blocked firmware.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_blocked_firmware_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string[]> | void;
        /**
         * Gets the result of `fwupd_client_get_blocked_firmware_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns checksums, or `null` for error
         */
        get_blocked_firmware_finish(res: Gio.AsyncResult): string[];
        /**
         * Gets if the daemon is running in an interactive terminal.
         * @returns `true` if the daemon is running in an interactive terminal
         */
        get_daemon_interactive(): boolean;
        /**
         * Gets the daemon version number.
         * @returns a string, or `null` for unknown.
         */
        get_daemon_version(): string;
        /**
         * Gets details about a specific firmware file.
         * @param filename the firmware filename, e.g. `firmware.cab`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns an array of results
         */
        get_details(filename: string, cancellable?: Gio.Cancellable | null): Device[];
        /**
         * Gets details about a specific firmware file.
         * @param bytes the firmware blob, e.g. the contents of `firmware.cab`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns an array of results
         */
        get_details_bytes(bytes: GLib.Bytes | Uint8Array, cancellable?: Gio.Cancellable | null): Device[];
        /**
         * Gets details about a specific firmware file.
         * @param bytes a {@link GLib.Bytes} for the firmware, e.g. `firmware.cab`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_details_bytes_async(
            bytes: GLib.Bytes | Uint8Array,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Device[]>;
        /**
         * Gets details about a specific firmware file.
         * @param bytes a {@link GLib.Bytes} for the firmware, e.g. `firmware.cab`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_details_bytes_async(
            bytes: GLib.Bytes | Uint8Array,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets details about a specific firmware file.
         * @param bytes a {@link GLib.Bytes} for the firmware, e.g. `firmware.cab`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_details_bytes_async(
            bytes: GLib.Bytes | Uint8Array,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Device[]> | void;
        /**
         * Gets the result of `fwupd_client_get_details_bytes_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns an array of results
         */
        get_details_bytes_finish(res: Gio.AsyncResult): Device[];
        /**
         * Gets a device by it's device ID.
         * @param device_id the device ID, e.g. `usb:00:01:03:03`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns a {@link Fwupd.Device} or `null`
         */
        get_device_by_id(device_id: string, cancellable?: Gio.Cancellable | null): Device;
        /**
         * Gets a device by it's device ID.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_device_by_id_async(device_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Device>;
        /**
         * Gets a device by it's device ID.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_device_by_id_async(
            device_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets a device by it's device ID.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_device_by_id_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Device> | void;
        /**
         * Gets the result of `fwupd_client_get_device_by_id_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Fwupd.Device}, or `null` for failure
         */
        get_device_by_id_finish(res: Gio.AsyncResult): Device;
        /**
         * Gets all the devices registered with the daemon.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns results
         */
        get_devices(cancellable?: Gio.Cancellable | null): Device[];
        /**
         * Gets all the devices registered with the daemon.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_devices_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Device[]>;
        /**
         * Gets all the devices registered with the daemon.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_devices_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets all the devices registered with the daemon.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_devices_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Device[]> | void;
        /**
         * Gets any devices that provide a specific GUID. An error is returned if no
         * devices contains this GUID.
         * @param guid the GUID, e.g. `e22c4520-43dc-5bb3-8245-5787fead9b63`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns devices or `null`
         */
        get_devices_by_guid(guid: string, cancellable?: Gio.Cancellable | null): Device[];
        /**
         * Gets any devices that provide a specific GUID. An error is returned if no
         * devices contains this GUID.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param guid the GUID, e.g. `e22c4520-43dc-5bb3-8245-5787fead9b63`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_devices_by_guid_async(guid: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Release[]>;
        /**
         * Gets any devices that provide a specific GUID. An error is returned if no
         * devices contains this GUID.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param guid the GUID, e.g. `e22c4520-43dc-5bb3-8245-5787fead9b63`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_devices_by_guid_async(
            guid: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets any devices that provide a specific GUID. An error is returned if no
         * devices contains this GUID.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param guid the GUID, e.g. `e22c4520-43dc-5bb3-8245-5787fead9b63`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_devices_by_guid_async(
            guid: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Release[]> | void;
        /**
         * Gets the result of `fwupd_client_get_devices_by_guid_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns results
         */
        get_devices_by_guid_finish(res: Gio.AsyncResult): Release[];
        /**
         * Gets the result of `fwupd_client_get_devices_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns results
         */
        get_devices_finish(res: Gio.AsyncResult): Device[];
        /**
         * Gets all the downgrades for a specific device.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns results
         */
        get_downgrades(device_id: string, cancellable?: Gio.Cancellable | null): Release[];
        /**
         * Gets all the downgrades for a specific device.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_downgrades_async(device_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Release[]>;
        /**
         * Gets all the downgrades for a specific device.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_downgrades_async(
            device_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets all the downgrades for a specific device.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_downgrades_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Release[]> | void;
        /**
         * Gets the result of `fwupd_client_get_downgrades_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns results
         */
        get_downgrades_finish(res: Gio.AsyncResult): Release[];
        /**
         * Gets all the history.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns results
         */
        get_history(cancellable?: Gio.Cancellable | null): Device[];
        /**
         * Gets all the history.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_history_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Device[]>;
        /**
         * Gets all the history.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_history_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets all the history.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_history_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Device[]> | void;
        /**
         * Gets the result of `fwupd_client_get_history_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns results
         */
        get_history_finish(res: Gio.AsyncResult): Device[];
        /**
         * Gets the string that represents the host machine ID
         * @returns a string, or `null` for unknown.
         */
        get_host_machine_id(): string;
        /**
         * Gets the string that represents the host running fwupd
         * @returns a string, or `null` for unknown.
         */
        get_host_product(): string;
        /**
         * Gets all the host security attributes from the daemon.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns attributes
         */
        get_host_security_attrs(cancellable?: Gio.Cancellable | null): SecurityAttr[];
        /**
         * Gets all the host security attributes from the daemon.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_host_security_attrs_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<SecurityAttr[]>;
        /**
         * Gets all the host security attributes from the daemon.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_host_security_attrs_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets all the host security attributes from the daemon.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_host_security_attrs_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<SecurityAttr[]> | void;
        /**
         * Gets the result of `fwupd_client_get_host_security_attrs_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns attributes
         */
        get_host_security_attrs_finish(res: Gio.AsyncResult): SecurityAttr[];
        /**
         * Gets the string that represents the host machine ID
         * @returns a string, or `null` for unknown.
         */
        get_host_security_id(): string;
        /**
         * Gets the internal {@link GLib.MainContext} to use for synchronous methods.
         * By default the value is set a new {@link GLib.MainContext}.
         * @returns the {@link GLib.MainContext}
         */
        get_main_context(): GLib.MainContext;
        /**
         * Gets the last returned percentage value.
         * @returns a percentage, or 0 for unknown.
         */
        get_percentage(): number;
        /**
         * Gets all the plugins being used the daemon.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns results
         */
        get_plugins(cancellable?: Gio.Cancellable | null): Plugin[];
        /**
         * Gets all the plugins being used by the daemon.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_plugins_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Device[]>;
        /**
         * Gets all the plugins being used by the daemon.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_plugins_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets all the plugins being used by the daemon.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_plugins_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Device[]> | void;
        /**
         * Gets the result of `fwupd_client_get_plugins_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns results
         */
        get_plugins_finish(res: Gio.AsyncResult): Device[];
        /**
         * Gets all the releases for a specific device
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns results
         */
        get_releases(device_id: string, cancellable?: Gio.Cancellable | null): Release[];
        /**
         * Gets all the releases for a specific device
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_releases_async(device_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Release[]>;
        /**
         * Gets all the releases for a specific device
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_releases_async(
            device_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets all the releases for a specific device
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_releases_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Release[]> | void;
        /**
         * Gets the result of `fwupd_client_get_releases_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns results
         */
        get_releases_finish(res: Gio.AsyncResult): Release[];
        /**
         * Gets a specific remote that has been configured for the system.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns a {@link Fwupd.Remote}, or `null` if not found
         */
        get_remote_by_id(remote_id: string, cancellable?: Gio.Cancellable | null): Remote;
        /**
         * Gets a specific remote that has been configured for the system.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_remote_by_id_async(remote_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Remote>;
        /**
         * Gets a specific remote that has been configured for the system.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_remote_by_id_async(
            remote_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets a specific remote that has been configured for the system.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_remote_by_id_async(
            remote_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Remote> | void;
        /**
         * Gets the result of `fwupd_client_get_remote_by_id_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Fwupd.Remote}, or `null` if not found
         */
        get_remote_by_id_finish(res: Gio.AsyncResult): Remote;
        /**
         * Gets the list of remotes that have been configured for the system.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns list of remotes, or `null`
         */
        get_remotes(cancellable?: Gio.Cancellable | null): Remote[];
        /**
         * Gets the list of remotes that have been configured for the system.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_remotes_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Remote[]>;
        /**
         * Gets the list of remotes that have been configured for the system.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_remotes_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets the list of remotes that have been configured for the system.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_remotes_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Remote[]> | void;
        /**
         * Gets the result of `fwupd_client_get_remotes_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns results
         */
        get_remotes_finish(res: Gio.AsyncResult): Remote[];
        /**
         * Gets all the report metadata from the daemon.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns attributes
         */
        get_report_metadata(cancellable?: Gio.Cancellable | null): GLib.HashTable<any, any>;
        /**
         * Gets all the report metadata from the daemon.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_report_metadata_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<GLib.HashTable<any, any>>;
        /**
         * Gets all the report metadata from the daemon.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_report_metadata_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets all the report metadata from the daemon.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_report_metadata_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.HashTable<any, any>> | void;
        /**
         * Gets the result of `fwupd_client_get_report_metadata_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns attributes
         */
        get_report_metadata_finish(res: Gio.AsyncResult): GLib.HashTable<any, any>;
        /**
         * Gets the results of a previous firmware update for a specific device.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns a {@link Fwupd.Device}, or `null` for failure
         */
        get_results(device_id: string, cancellable?: Gio.Cancellable | null): Device;
        /**
         * Gets the results of a previous firmware update for a specific device.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_results_async(device_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Device>;
        /**
         * Gets the results of a previous firmware update for a specific device.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_results_async(
            device_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the results of a previous firmware update for a specific device.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_results_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Device> | void;
        /**
         * Gets the result of `fwupd_client_get_results_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns a {@link Fwupd.Device}, or `null` for failure
         */
        get_results_finish(res: Gio.AsyncResult): Device;
        /**
         * Gets the last returned status value.
         * @returns a {@link Fwupd.Status}, or {@link Fwupd.Status.UNKNOWN} for unknown.
         */
        get_status(): Status;
        /**
         * Gets if the daemon has been tainted by 3rd party code.
         * @returns `true` if the daemon is unsupported
         */
        get_tainted(): boolean;
        /**
         * Gets all the upgrades for a specific device.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns results
         */
        get_upgrades(device_id: string, cancellable?: Gio.Cancellable | null): Release[];
        /**
         * Gets all the upgrades for a specific device.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        get_upgrades_async(device_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Release[]>;
        /**
         * Gets all the upgrades for a specific device.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_upgrades_async(
            device_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets all the upgrades for a specific device.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        get_upgrades_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Release[]> | void;
        /**
         * Gets the result of `fwupd_client_get_upgrades_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns results
         */
        get_upgrades_finish(res: Gio.AsyncResult): Release[];
        /**
         * Gets the string that represents the user agent that is used for
         * uploading and downloading. The user agent will contain the runtime
         * version of fwupd somewhere in the provided string.
         * @returns a string, or `null` for unknown.
         */
        get_user_agent(): string;
        /**
         * Install a file onto a specific device.
         * @param device_id the device ID
         * @param filename the filename to install
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        install(
            device_id: string,
            filename: string,
            install_flags: InstallFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Install firmware onto a specific device.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param device_id the device ID
         * @param filename the filename to install
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        install_async(
            device_id: string,
            filename: string,
            install_flags: InstallFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Install firmware onto a specific device.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param device_id the device ID
         * @param filename the filename to install
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        install_async(
            device_id: string,
            filename: string,
            install_flags: InstallFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Install firmware onto a specific device.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param device_id the device ID
         * @param filename the filename to install
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        install_async(
            device_id: string,
            filename: string,
            install_flags: InstallFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Install firmware onto a specific device.
         * @param device_id the device ID
         * @param bytes {@link GLib.Bytes}
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        install_bytes(
            device_id: string,
            bytes: GLib.Bytes | Uint8Array,
            install_flags: InstallFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Install firmware onto a specific device.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param device_id the device ID
         * @param bytes {@link GLib.Bytes}
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        install_bytes_async(
            device_id: string,
            bytes: GLib.Bytes | Uint8Array,
            install_flags: InstallFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Install firmware onto a specific device.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param device_id the device ID
         * @param bytes {@link GLib.Bytes}
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        install_bytes_async(
            device_id: string,
            bytes: GLib.Bytes | Uint8Array,
            install_flags: InstallFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Install firmware onto a specific device.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param device_id the device ID
         * @param bytes {@link GLib.Bytes}
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        install_bytes_async(
            device_id: string,
            bytes: GLib.Bytes | Uint8Array,
            install_flags: InstallFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_install_bytes_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        install_bytes_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the result of `fwupd_client_install_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        install_finish(res: Gio.AsyncResult): boolean;
        /**
         * Installs a new release on a device, downloading the firmware if required.
         * @param device A {@link Fwupd.Device}
         * @param release A {@link Fwupd.Release}
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        install_release(
            device: Device,
            release: Release,
            install_flags: InstallFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Installs a new release on a device, downloading the firmware if required.
         * @param device A {@link Fwupd.Device}
         * @param release A {@link Fwupd.Release}
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param download_flags the {@link Fwupd.ClientDownloadFlags}, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        install_release2(
            device: Device,
            release: Release,
            install_flags: InstallFlags | null,
            download_flags: ClientDownloadFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Installs a new release on a device, downloading the firmware if required.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param device A {@link Fwupd.Device}
         * @param release A {@link Fwupd.Release}
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param download_flags the {@link Fwupd.ClientDownloadFlags}, e.g. `FWUPD_CLIENT_DOWNLOAD_FLAG_DISABLE_IPFS`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        install_release2_async(
            device: Device,
            release: Release,
            install_flags: InstallFlags | null,
            download_flags: ClientDownloadFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Installs a new release on a device, downloading the firmware if required.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param device A {@link Fwupd.Device}
         * @param release A {@link Fwupd.Release}
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        install_release_async(
            device: Device,
            release: Release,
            install_flags: InstallFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Installs a new release on a device, downloading the firmware if required.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param device A {@link Fwupd.Device}
         * @param release A {@link Fwupd.Release}
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        install_release_async(
            device: Device,
            release: Release,
            install_flags: InstallFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Installs a new release on a device, downloading the firmware if required.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param device A {@link Fwupd.Device}
         * @param release A {@link Fwupd.Release}
         * @param install_flags the {@link Fwupd.InstallFlags}, e.g. {@link Fwupd.InstallFlags.ALLOW_REINSTALL}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        install_release_async(
            device: Device,
            release: Release,
            install_flags: InstallFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_install_release_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        install_release_finish(res: Gio.AsyncResult): boolean;
        /**
         * Modifies a daemon config option.
         * The daemon will only respond to this request with proper permissions
         * @param key key, e.g. `DisabledPlugins`
         * @param value value, e.g. `*`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        modify_config(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Modifies a daemon config option.
         * The daemon will only respond to this request with proper permissions
         * @param key key, e.g. `DisabledPlugins`
         * @param value value, e.g. `*`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        modify_config_async(
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Modifies a daemon config option.
         * The daemon will only respond to this request with proper permissions
         * @param key key, e.g. `DisabledPlugins`
         * @param value value, e.g. `*`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        modify_config_async(
            key: string,
            value: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Modifies a daemon config option.
         * The daemon will only respond to this request with proper permissions
         * @param key key, e.g. `DisabledPlugins`
         * @param value value, e.g. `*`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        modify_config_async(
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_modify_config_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
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
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        modify_device(device_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Modifies a device in a specific way. Not all properties on the {@link Fwupd.Device}
         * are settable by the client, and some may have other restrictions on `value`.
         * @param device_id the device ID
         * @param key the key, e.g. `Flags`
         * @param value the key, e.g. `reported`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        modify_device_async(
            device_id: string,
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Modifies a device in a specific way. Not all properties on the {@link Fwupd.Device}
         * are settable by the client, and some may have other restrictions on `value`.
         * @param device_id the device ID
         * @param key the key, e.g. `Flags`
         * @param value the key, e.g. `reported`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        modify_device_async(
            device_id: string,
            key: string,
            value: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Modifies a device in a specific way. Not all properties on the {@link Fwupd.Device}
         * are settable by the client, and some may have other restrictions on `value`.
         * @param device_id the device ID
         * @param key the key, e.g. `Flags`
         * @param value the key, e.g. `reported`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        modify_device_async(
            device_id: string,
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_modify_device_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        modify_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Modifies a system remote in a specific way.
         *
         * NOTE: User authentication may be required to complete this action.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param key the key, e.g. `Enabled`
         * @param value the key, e.g. `true`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        modify_remote(remote_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Modifies a system remote in a specific way.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param key the key, e.g. `Enabled`
         * @param value the key, e.g. `true`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        modify_remote_async(
            remote_id: string,
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Modifies a system remote in a specific way.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param key the key, e.g. `Enabled`
         * @param value the key, e.g. `true`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        modify_remote_async(
            remote_id: string,
            key: string,
            value: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Modifies a system remote in a specific way.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param key the key, e.g. `Enabled`
         * @param value the key, e.g. `true`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        modify_remote_async(
            remote_id: string,
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_modify_remote_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        modify_remote_finish(res: Gio.AsyncResult): boolean;
        /**
         * Refreshes a remote by downloading new metadata.
         * @param remote A {@link Fwupd.Remote}
         * @param cancellable A {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        refresh_remote(remote: Remote, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Refreshes a remote by downloading new metadata.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param remote A {@link Fwupd.Remote}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        refresh_remote_async(remote: Remote, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Refreshes a remote by downloading new metadata.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param remote A {@link Fwupd.Remote}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        refresh_remote_async(
            remote: Remote,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Refreshes a remote by downloading new metadata.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param remote A {@link Fwupd.Remote}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        refresh_remote_async(
            remote: Remote,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_refresh_remote_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        refresh_remote_finish(res: Gio.AsyncResult): boolean;
        /**
         * Signs the data using the client self-signed certificate.
         * @param value A string to sign, typically a JSON blob
         * @param flags {@link Fwupd.SelfSignFlags}, e.g. {@link Fwupd.SelfSignFlags.ADD_TIMESTAMP}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns a signature, or `null` for failure
         */
        self_sign(value: string, flags: SelfSignFlags | null, cancellable?: Gio.Cancellable | null): string;
        /**
         * Signs the data using the client self-signed certificate.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param value A string to sign, typically a JSON blob
         * @param flags {@link Fwupd.SelfSignFlags}, e.g. {@link Fwupd.SelfSignFlags.ADD_TIMESTAMP}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        self_sign_async(
            value: string,
            flags: SelfSignFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Signs the data using the client self-signed certificate.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param value A string to sign, typically a JSON blob
         * @param flags {@link Fwupd.SelfSignFlags}, e.g. {@link Fwupd.SelfSignFlags.ADD_TIMESTAMP}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        self_sign_async(
            value: string,
            flags: SelfSignFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Signs the data using the client self-signed certificate.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         * @param value A string to sign, typically a JSON blob
         * @param flags {@link Fwupd.SelfSignFlags}, e.g. {@link Fwupd.SelfSignFlags.ADD_TIMESTAMP}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        self_sign_async(
            value: string,
            flags: SelfSignFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Gets the result of `fwupd_client_self_sign_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns a signature, or `null` for failure
         */
        self_sign_finish(res: Gio.AsyncResult): string;
        /**
         * Sets the list of approved firmware.
         * @param checksums Array of checksums
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        set_approved_firmware(checksums: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the list of approved firmware.
         * @param checksums firmware checksums
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        set_approved_firmware_async(
            checksums: string[],
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Sets the list of approved firmware.
         * @param checksums firmware checksums
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_approved_firmware_async(
            checksums: string[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Sets the list of approved firmware.
         * @param checksums firmware checksums
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_approved_firmware_async(
            checksums: string[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_set_approved_firmware_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        set_approved_firmware_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets the list of approved firmware.
         * @param checksums Array of checksums
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        set_blocked_firmware(checksums: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the list of blocked firmware.
         * @param checksums firmware checksums
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        set_blocked_firmware_async(
            checksums: string[],
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Sets the list of blocked firmware.
         * @param checksums firmware checksums
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_blocked_firmware_async(
            checksums: string[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Sets the list of blocked firmware.
         * @param checksums firmware checksums
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_blocked_firmware_async(
            checksums: string[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_set_blocked_firmware_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        set_blocked_firmware_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets the features the client supports. This allows firmware to depend on
         * specific front-end features, for instance showing the user an image on
         * how to detach the hardware.
         *
         * Clients can call this none or multiple times.
         * @param feature_flags {@link Fwupd.FeatureFlags}, e.g. `FWUPD_FEATURE_FLAG_UPDATE_TEXT`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        set_feature_flags(feature_flags: FeatureFlags | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the features the client supports. This allows firmware to depend on
         * specific front-end features, for instance showing the user an image on
         * how to detach the hardware.
         * @param feature_flags {@link Fwupd.FeatureFlags}, e.g. `FWUPD_FEATURE_FLAG_UPDATE_TEXT`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        set_feature_flags_async(
            feature_flags: FeatureFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Sets the features the client supports. This allows firmware to depend on
         * specific front-end features, for instance showing the user an image on
         * how to detach the hardware.
         * @param feature_flags {@link Fwupd.FeatureFlags}, e.g. `FWUPD_FEATURE_FLAG_UPDATE_TEXT`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_feature_flags_async(
            feature_flags: FeatureFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Sets the features the client supports. This allows firmware to depend on
         * specific front-end features, for instance showing the user an image on
         * how to detach the hardware.
         * @param feature_flags {@link Fwupd.FeatureFlags}, e.g. `FWUPD_FEATURE_FLAG_UPDATE_TEXT`
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        set_feature_flags_async(
            feature_flags: FeatureFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_set_feature_flags_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        set_feature_flags_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets the internal {@link GLib.MainContext} to use for returning progress signals.
         * @param main_ctx {@link GLib.MainContext} or `null` to use the global default main context
         */
        set_main_context(main_ctx?: GLib.MainContext | null): void;
        /**
         * Manually sets the user agent that is used for downloading. The user agent
         * should contain the runtime version of fwupd somewhere in the provided string.
         * @param user_agent the user agent ID, e.g. `gnome-software/3.34.1`
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
         * @param package_name client program name, e.g. "gnome-software"
         * @param package_version client program version, e.g. "3.28.1"
         */
        set_user_agent_for_package(package_name: string, package_version: string): void;
        /**
         * Unlocks a specific device so firmware can be read or wrote.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        unlock(device_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Unlocks a specific device so firmware can be read or wrote.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        unlock_async(device_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Unlocks a specific device so firmware can be read or wrote.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        unlock_async(
            device_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Unlocks a specific device so firmware can be read or wrote.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        unlock_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_unlock_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
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
         * @param signature_fn the GPG signature file
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        update_metadata(
            remote_id: string,
            metadata_fn: string,
            signature_fn: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
         * @param cancellable {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        update_metadata_bytes(
            remote_id: string,
            metadata: GLib.Bytes | Uint8Array,
            signature: GLib.Bytes | Uint8Array,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
         * `fwupd_client_set_main_context()`.
         * @param remote_id remote ID, e.g. `lvfs-testing`
         * @param metadata XML metadata data
         * @param signature signature data
         * @param cancellable {@link Gio.Cancellable}, or `null`
         */
        update_metadata_bytes_async(
            remote_id: string,
            metadata: GLib.Bytes | Uint8Array,
            signature: GLib.Bytes | Uint8Array,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
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
         * `fwupd_client_set_main_context()`.
         * @param remote_id remote ID, e.g. `lvfs-testing`
         * @param metadata XML metadata data
         * @param signature signature data
         * @param cancellable {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        update_metadata_bytes_async(
            remote_id: string,
            metadata: GLib.Bytes | Uint8Array,
            signature: GLib.Bytes | Uint8Array,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
         * `fwupd_client_set_main_context()`.
         * @param remote_id remote ID, e.g. `lvfs-testing`
         * @param metadata XML metadata data
         * @param signature signature data
         * @param cancellable {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        update_metadata_bytes_async(
            remote_id: string,
            metadata: GLib.Bytes | Uint8Array,
            signature: GLib.Bytes | Uint8Array,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_update_metadata_bytes_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        update_metadata_bytes_finish(res: Gio.AsyncResult): boolean;
        /**
         * Uploads data to a remote server. The `fwupd_client_set_user_agent()` function
         * should be called before this method is used.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags {@link Fwupd.ClientDownloadFlags}, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns response data, or `null` for error
         */
        upload_bytes(
            url: string,
            payload: string,
            signature: string | null,
            flags: ClientUploadFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): GLib.Bytes;
        /**
         * Uploads data to a remote server. The `fwupd_client_set_user_agent()` function
         * should be called before this method is used.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags {@link Fwupd.ClientDownloadFlags}, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        upload_bytes_async(
            url: string,
            payload: string,
            signature: string | null,
            flags: ClientUploadFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<GLib.Bytes>;
        /**
         * Uploads data to a remote server. The `fwupd_client_set_user_agent()` function
         * should be called before this method is used.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags {@link Fwupd.ClientDownloadFlags}, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        upload_bytes_async(
            url: string,
            payload: string,
            signature: string | null,
            flags: ClientUploadFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Uploads data to a remote server. The `fwupd_client_set_user_agent()` function
         * should be called before this method is used.
         *
         * You must have called `fwupd_client_connect_async()` on `self` before using
         * this method.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * `fwupd_client_set_main_context()`.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags {@link Fwupd.ClientDownloadFlags}, e.g. {@link Fwupd.ClientDownloadFlags.NONE}
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        upload_bytes_async(
            url: string,
            payload: string,
            signature: string | null,
            flags: ClientUploadFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Bytes> | void;
        /**
         * Gets the result of `fwupd_client_upload_bytes_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns response data, or `null` for error
         */
        upload_bytes_finish(res: Gio.AsyncResult): GLib.Bytes;
        /**
         * Verify a specific device.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for verification success
         */
        verify(device_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Verify a specific device.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        verify_async(device_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Verify a specific device.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        verify_async(
            device_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Verify a specific device.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        verify_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_verify_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        verify_finish(res: Gio.AsyncResult): boolean;
        /**
         * Update the verification record for a specific device.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for verification success
         */
        verify_update(device_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Update the verification record for a specific device.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         */
        verify_update_async(device_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Update the verification record for a specific device.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        verify_update_async(
            device_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Update the verification record for a specific device.
         * @param device_id the device ID
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @param callback the function to run on completion
         */
        verify_update_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Gets the result of `fwupd_client_verify_update_async()`.
         * @param res the {@link Gio.AsyncResult}
         * @returns `true` for success
         */
        verify_update_finish(res: Gio.AsyncResult): boolean;
    }

    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::protocol': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
            'notify::update-state': (pspec: GObject.ParamSpec) => void;
            'notify::version-format': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: number;
            parent: Device;
            protocol: string;
            status: number;
            update_state: number;
            updateState: number;
            version_format: number;
            versionFormat: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Properties

        get flags(): number;
        set flags(val: number);
        get parent(): Device;
        set parent(val: Device);
        get protocol(): string;
        set protocol(val: string);
        get status(): number;
        set status(val: number);
        get update_state(): number;
        set update_state(val: number);
        get updateState(): number;
        set updateState(val: number);
        get version_format(): number;
        set version_format(val: number);
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

        static ['new'](): Device;

        // Signals

        /** @signal */
        connect<K extends keyof Device.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Device.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Device.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Sets the parent object on all devices in the array using the parent-id.
         * @param devices devices
         */
        static array_ensure_parents(devices: Device[]): void;
        /**
         * Creates an array of new devices using packed data.
         * @param value a {@link GLib.Variant}
         */
        static array_from_variant(value: GLib.Variant): Device[];
        /**
         * Converts a string to a {@link Fwupd.DeviceFlags}.
         * @param device_flag A string, e.g. `require-ac`
         */
        static flag_from_string(device_flag: string): DeviceFlags;
        /**
         * Converts a {@link Fwupd.DeviceFlags} to a string.
         * @param device_flag A {@link Fwupd.DeviceFlags}, e.g. `FWUPD_DEVICE_FLAG_REQUIRE_AC`
         */
        static flag_to_string(device_flag: DeviceFlags): string;
        /**
         * Creates a new device using packed data.
         * @param value a {@link GLib.Variant}
         */
        static from_variant(value: GLib.Variant): Device;
        /**
         * Checks the string is a valid non-partial device ID. It is important to note
         * that the wildcard ID of `*` is not considered a valid ID in this function and
         * the client must check for this manually if this should be allowed.
         * @param device_id string to check, e.g. `d3fae86d95e5d56626129d00e332c4b8dac95442`
         */
        static id_is_valid(device_id: string): boolean;

        // Methods

        /**
         * Sets the device checksum.
         * @param checksum the device checksum
         */
        add_checksum(checksum: string): void;
        /**
         * Adds a child device. An child device is logically linked to the primary
         * device in some way.
         *
         * NOTE: You should never call this function from user code, it is for daemon
         * use only. Only use `fwupd_device_set_parent()` to set up a logical tree.
         * @param child Another {@link Fwupd.Device}
         */
        add_child(child: Device): void;
        /**
         * Adds a specific device flag to the device.
         * @param flag the {@link Fwupd.DeviceFlags}
         */
        add_flag(flag: DeviceFlags): void;
        /**
         * Adds the GUID if it does not already exist.
         * @param guid the GUID, e.g. `2082b5e0-7a64-478a-b1b2-e3404fab6dad`
         */
        add_guid(guid: string): void;
        /**
         * Adds the icon name if it does not already exist.
         * @param icon the name, e.g. `input-mouse` or `/usr/share/icons/foo.png`
         */
        add_icon(icon: string): void;
        /**
         * Adds the InstanceID if it does not already exist.
         * @param instance_id the GUID, e.g. `PCI\VEN_10EC&DEV_525A`
         */
        add_instance_id(instance_id: string): void;
        /**
         * Adds a release for this device.
         * @param release a {@link Fwupd.Release}
         */
        add_release(release: Release): void;
        /**
         * Adds a device vendor ID.
         * @param vendor_id the ID, e.g. 'USB:0x1234'
         */
        add_vendor_id(vendor_id: string): void;
        /**
         * Comparison function for comparing two FwupdDevice objects.
         * @param device2 a {@link Fwupd.Device}
         * @returns negative, 0 or positive
         */
        compare(device2: Device): number;
        /**
         * Gets the current device branch.
         * @returns the device branch, or `null` if unset
         */
        get_branch(): string;
        /**
         * Gets the device checksums.
         * @returns the checksums, which may be empty
         */
        get_checksums(): string[];
        /**
         * Gets the device children. These can only be assigned using `fwupd_device_set_parent()`.
         * @returns the children, which may be empty
         */
        get_children(): Device[];
        /**
         * Gets when the device was created.
         * @returns the UNIX time, or 0 if unset
         */
        get_created(): number;
        /**
         * Gets the device description in AppStream markup format.
         * @returns the device description, or `null` if unset
         */
        get_description(): string;
        /**
         * Gets the device flags.
         * @returns the device flags, or 0 if unset
         */
        get_flags(): number;
        /**
         * Gets the number of flash cycles left on the device
         * @returns the flash cycles left, or `null` if unset
         */
        get_flashes_left(): number;
        /**
         * Gets the default GUID.
         * @returns the GUID, or `null` if unset
         */
        get_guid_default(): string;
        /**
         * Gets the GUIDs.
         * @returns the GUIDs
         */
        get_guids(): string[];
        /**
         * Gets the icon names to use for the device.
         *
         * NOTE: Icons specified without a full path are stock icons and should
         * be loaded from the users icon theme.
         * @returns an array of icon names
         */
        get_icons(): string[];
        /**
         * Gets the ID.
         * @returns the ID, or `null` if unset
         */
        get_id(): string;
        /**
         * Gets the time estimate for firmware installation (in seconds)
         * @returns the estimated time to flash this device (or 0 if unset)
         */
        get_install_duration(): number;
        /**
         * Gets the InstanceIDs.
         * @returns the InstanceID
         */
        get_instance_ids(): string[];
        /**
         * Gets when the device was modified.
         * @returns the UNIX time, or 0 if unset
         */
        get_modified(): number;
        /**
         * Gets the device name.
         * @returns the device name, or `null` if unset
         */
        get_name(): string;
        /**
         * Gets the parent.
         * @returns the parent device, or `null` if unset
         */
        get_parent(): Device;
        /**
         * Gets the ID.
         * @returns the parent ID, or `null` if unset
         */
        get_parent_id(): string;
        /**
         * Gets the plugin that created the device.
         * @returns the plugin name, or `null` if unset
         */
        get_plugin(): string;
        /**
         * Gets the protocol that the device uses for updating.
         * @returns the protocol name, or `null` if unset
         */
        get_protocol(): string;
        /**
         * Gets the default release for this device.
         * @returns the {@link Fwupd.Release}, or `null` if not set
         */
        get_release_default(): Release;
        /**
         * Gets all the releases for this device.
         * @returns array of releases
         */
        get_releases(): Release[];
        /**
         * Gets the serial number for the device.
         * @returns a string value, or `null` if never set.
         */
        get_serial(): string;
        /**
         * Returns what the device is currently doing.
         * @returns the status value, e.g. {@link Fwupd.Status.DEVICE_WRITE}
         */
        get_status(): Status;
        /**
         * Gets the device summary.
         * @returns the device summary, or `null` if unset
         */
        get_summary(): string;
        /**
         * Gets the update error.
         * @returns the update error, or `null` if unset
         */
        get_update_error(): string;
        /**
         * Gets the update image.
         * @returns the update image URL, or `null` if unset
         */
        get_update_image(): string;
        /**
         * Gets the update message.
         * @returns the update message, or `null` if unset
         */
        get_update_message(): string;
        /**
         * Gets the update state.
         * @returns the update state, or {@link Fwupd.UpdateState.UNKNOWN} if unset
         */
        get_update_state(): UpdateState;
        /**
         * Gets the device vendor.
         * @returns the device vendor, or `null` if unset
         */
        get_vendor(): string;
        /**
         * Gets the combined device vendor ID.
         * @returns the device vendor, e.g. 'USB:0x1234|PCI:0x5678', or `null` if unset
         */
        get_vendor_id(): string;
        /**
         * Gets the device vendor ID.
         * @returns the device vendor ID
         */
        get_vendor_ids(): string[];
        /**
         * Gets the device version.
         * @returns the device version, or `null` if unset
         */
        get_version(): string;
        /**
         * Gets the version of the bootloader.
         * @returns the device version_bootloader, or `null` if unset
         */
        get_version_bootloader(): string;
        /**
         * Gets the bootloader version of firmware the device will accept in raw format.
         * @returns integer version number, or %0 if unset
         */
        get_version_bootloader_raw(): number;
        /**
         * Gets the update state.
         * @returns the update state, or {@link Fwupd.VersionFormat.UNKNOWN} if unset
         */
        get_version_format(): VersionFormat;
        /**
         * Gets the lowest version of firmware the device will accept.
         * @returns the device version_lowest, or `null` if unset
         */
        get_version_lowest(): string;
        /**
         * Gets the lowest version of firmware the device will accept in raw format.
         * @returns integer version number, or %0 if unset
         */
        get_version_lowest_raw(): number;
        /**
         * Gets the raw version number from the hardware before converted to a string.
         * @returns the hardware version, or 0 if unset
         */
        get_version_raw(): number;
        /**
         * Finds if the device has a specific device flag.
         * @param flag the {@link Fwupd.DeviceFlags}
         * @returns `true` if the flag is set
         */
        has_flag(flag: DeviceFlags): boolean;
        /**
         * Finds out if the device has this specific GUID.
         * @param guid the GUID, e.g. `2082b5e0-7a64-478a-b1b2-e3404fab6dad`
         * @returns `true` if the GUID is found
         */
        has_guid(guid: string): boolean;
        /**
         * Finds out if the device has this specific InstanceID.
         * @param instance_id the InstanceID, e.g. `PCI\VEN_10EC&DEV_525A`
         * @returns `true` if the InstanceID is found
         */
        has_instance_id(instance_id: string): boolean;
        /**
         * Finds out if the device has this specific vendor ID.
         * @param vendor_id the ID, e.g. 'USB:0x1234'
         * @returns `true` if the ID is found
         */
        has_vendor_id(vendor_id: string): boolean;
        /**
         * Copy all properties from the donor object if they have not already been set.
         * @param donor Another {@link Fwupd.Device}
         */
        incorporate(donor: Device): void;
        /**
         * Removes a specific device flag from the device.
         * @param flag the {@link Fwupd.DeviceFlags}
         */
        remove_flag(flag: DeviceFlags): void;
        /**
         * Sets the current device branch.
         * @param branch the device one line branch
         */
        set_branch(branch: string): void;
        /**
         * Sets when the device was created.
         * @param created the UNIX time
         */
        set_created(created: number): void;
        /**
         * Sets the device description.
         * @param description the description in AppStream markup format
         */
        set_description(description: string): void;
        /**
         * Sets the device flags.
         * @param flags the device flags, e.g. `FWUPD_DEVICE_FLAG_REQUIRE_AC`
         */
        set_flags(flags: number): void;
        /**
         * Sets the number of flash cycles left on the device
         * @param flashes_left the description
         */
        set_flashes_left(flashes_left: number): void;
        /**
         * Sets the ID.
         * @param id the device ID, e.g. `USB:foo`
         */
        set_id(id: string): void;
        /**
         * Sets the time estimate for firmware installation (in seconds)
         * @param duration The amount of time
         */
        set_install_duration(duration: number): void;
        /**
         * Sets when the device was modified.
         * @param modified the UNIX time
         */
        set_modified(modified: number): void;
        /**
         * Sets the device name.
         * @param name the device name, e.g. `ColorHug2`
         */
        set_name(name: string): void;
        /**
         * Sets the parent. Only used internally.
         * @param parent another {@link Fwupd.Device}, or `null`
         */
        set_parent(parent: Device): void;
        /**
         * Sets the parent ID.
         * @param parent_id the device ID, e.g. `USB:foo`
         */
        set_parent_id(parent_id: string): void;
        /**
         * Sets the plugin that created the device.
         * @param plugin the plugin name, e.g. `colorhug`
         */
        set_plugin(plugin: string): void;
        /**
         * Sets the protocol that is used to update the device.
         * @param protocol the protocol name, e.g. `com.hughski.colorhug`
         */
        set_protocol(protocol: string): void;
        /**
         * Sets the serial number for the device.
         * @param serial the device serial number
         */
        set_serial(serial: string): void;
        /**
         * Sets what the device is currently doing.
         * @param status the status value, e.g. {@link Fwupd.Status.DEVICE_WRITE}
         */
        set_status(status: Status | null): void;
        /**
         * Sets the device summary.
         * @param summary the device one line summary
         */
        set_summary(summary: string): void;
        /**
         * Sets the update error.
         * @param update_error the update error string
         */
        set_update_error(update_error: string): void;
        /**
         * Sets the update image.
         * @param update_image the update image URL
         */
        set_update_image(update_image: string): void;
        /**
         * Sets the update message.
         * @param update_message the update message string
         */
        set_update_message(update_message: string): void;
        /**
         * Sets the update state.
         * @param update_state the state, e.g. {@link Fwupd.UpdateState.PENDING}
         */
        set_update_state(update_state: UpdateState | null): void;
        /**
         * Sets the device vendor.
         * @param vendor the description
         */
        set_vendor(vendor: string): void;
        /**
         * Sets the device vendor ID.
         * @param vendor_id the ID, e.g. 'USB:0x1234' or 'USB:0x1234|PCI:0x5678'
         */
        set_vendor_id(vendor_id: string): void;
        /**
         * Sets the device version.
         * @param version the device version, e.g. `1.2.3`
         */
        set_version(version: string): void;
        /**
         * Sets the bootloader version.
         * @param version_bootloader the description
         */
        set_version_bootloader(version_bootloader: string): void;
        /**
         * Sets the raw bootloader version number from the hardware before converted to a string.
         * @param version_bootloader_raw the raw hardware version
         */
        set_version_bootloader_raw(version_bootloader_raw: number): void;
        /**
         * Sets the update state.
         * @param version_format the state, e.g. `FWUPD_VERSION_FORMAT_PENDING`
         */
        set_version_format(version_format: VersionFormat | null): void;
        /**
         * Sets the lowest version of firmware the device will accept.
         * @param version_lowest the description
         */
        set_version_lowest(version_lowest: string): void;
        /**
         * Sets the raw lowest version number from the hardware before converted to a string.
         * @param version_lowest_raw the raw hardware version
         */
        set_version_lowest_raw(version_lowest_raw: number): void;
        /**
         * Sets the raw version number from the hardware before converted to a string.
         * @param version_raw the raw hardware version
         */
        set_version_raw(version_raw: number): void;
        /**
         * Builds a text representation of the object.
         * @returns text, or `null` for invalid
         */
        to_string(): string;
        /**
         * Creates a GVariant from the device data omitting sensitive fields
         * @returns the GVariant, or `null` for error
         */
        to_variant(): GLib.Variant;
        /**
         * Creates a GVariant from the device data.
         * Optionally provides additional data based upon flags
         * @param flags {@link Fwupd.DeviceFlags} for the call
         * @returns the GVariant, or `null` for error
         */
        to_variant_full(flags: DeviceFlags): GLib.Variant;
    }

    namespace Plugin {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: number;
            name: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Plugin extends GObject.Object {
        static $gtype: GObject.GType<Plugin>;

        // Properties

        get flags(): number;
        set flags(val: number);
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

        static ['new'](): Plugin;

        // Signals

        /** @signal */
        connect<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Plugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates an array of new plugins using packed data.
         * @param value a {@link GLib.Variant}
         */
        static array_from_variant(value: GLib.Variant): Plugin[];
        /**
         * Converts a string to a {@link Fwupd.PluginFlags}.
         * @param plugin_flag A string, e.g. `require-ac`
         */
        static flag_from_string(plugin_flag: string): PluginFlags;
        /**
         * Converts a {@link Fwupd.DeviceFlags} to a string.
         * @param plugin_flag A {@link Fwupd.PluginFlags}, e.g. `FWUPD_DEVICE_FLAG_REQUIRE_AC`
         */
        static flag_to_string(plugin_flag: PluginFlags): string;
        /**
         * Creates a new plugin using packed data.
         * @param value a {@link GLib.Variant}
         */
        static from_variant(value: GLib.Variant): Plugin;

        // Methods

        /**
         * Adds a specific plugin flag to the plugin.
         * @param flag the {@link Fwupd.PluginFlags}
         */
        add_flag(flag: PluginFlags): void;
        /**
         * Gets the plugin flags.
         * @returns the plugin flags, or 0 if unset
         */
        get_flags(): number;
        /**
         * Gets the plugin name.
         * @returns the plugin name, or `null` if unset
         */
        get_name(): string;
        /**
         * Finds if the plugin has a specific plugin flag.
         * @param flag the {@link Fwupd.PluginFlags}
         * @returns `true` if the flag is set
         */
        has_flag(flag: PluginFlags): boolean;
        /**
         * Removes a specific plugin flag from the plugin.
         * @param flag the {@link Fwupd.PluginFlags}
         */
        remove_flag(flag: PluginFlags): void;
        /**
         * Sets the plugin flags.
         * @param flags the plugin flags, e.g. `FWUPD_PLUGIN_FLAG_CAPSULES_UNSUPPORTED`
         */
        set_flags(flags: number): void;
        /**
         * Sets the plugin name.
         * @param name the plugin name, e.g. `bios`
         */
        set_name(name: string): void;
        /**
         * Builds a text representation of the object.
         * @returns text, or `null` for invalid
         */
        to_string(): string;
        /**
         * Creates a GVariant from the plugin data omitting sensitive fields
         * @returns the GVariant, or `null` for error
         */
        to_variant(): GLib.Variant;
    }

    namespace Release {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Release extends GObject.Object {
        static $gtype: GObject.GType<Release>;

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

        static ['new'](): Release;

        // Signals

        /** @signal */
        connect<K extends keyof Release.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Release.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Release.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Release.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Release.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Release.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates an array of new releases using packed data.
         * @param value a {@link GLib.Variant}
         */
        static array_from_variant(value: GLib.Variant): Release[];
        /**
         * Converts a string to a {@link Fwupd.ReleaseFlags}.
         * @param release_flag A string, e.g. `trusted-payload`
         */
        static flag_from_string(release_flag: string): ReleaseFlags;
        /**
         * Converts a {@link Fwupd.ReleaseFlags} to a string.
         * @param release_flag A {@link Fwupd.ReleaseFlags}, e.g. `FWUPD_RELEASE_FLAG_TRUSTED_PAYLOAD`
         */
        static flag_to_string(release_flag: ReleaseFlags): string;
        /**
         * Creates a new release using packed data.
         * @param value a {@link GLib.Variant}
         */
        static from_variant(value: GLib.Variant): Release;
        /**
         * Converts a string to an enumerated value.
         * @param release_urgency A string, e.g. `low`
         */
        static urgency_from_string(release_urgency: string): ReleaseUrgency;
        /**
         * Converts an enumerated value to a string.
         * @param release_urgency A {@link Fwupd.ReleaseUrgency}, e.g. {@link Fwupd.ReleaseUrgency.HIGH}
         */
        static urgency_to_string(release_urgency: ReleaseUrgency): string;

        // Methods

        /**
         * Adds the update category.
         * @param category the update category, e.g. `X-EmbeddedController`
         */
        add_category(category: string): void;
        /**
         * Sets the update checksum.
         * @param checksum the update checksum
         */
        add_checksum(checksum: string): void;
        /**
         * Adds a specific release flag to the release.
         * @param flag the {@link Fwupd.ReleaseFlags}
         */
        add_flag(flag: ReleaseFlags): void;
        /**
         * Adds an resolved issue to this release.
         * @param issue the update issue, e.g. `CVE-2019-12345`
         */
        add_issue(issue: string): void;
        /**
         * Adds an update URI, i.e. where you can download the firmware from.
         * @param location the update URI
         */
        add_location(location: string): void;
        /**
         * Sets multiple release metadata items.
         * @param hash the key-values
         */
        add_metadata(hash: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * Sets a release metadata item.
         * @param key the key
         * @param value the value
         */
        add_metadata_item(key: string, value: string): void;
        /**
         * Gets the AppStream ID.
         * @returns the AppStream ID, or `null` if unset
         */
        get_appstream_id(): string;
        /**
         * Gets the update branch.
         * @returns the alternate branch, or `null` if unset
         */
        get_branch(): string;
        /**
         * Gets the release categories.
         * @returns the categories, which may be empty
         */
        get_categories(): string[];
        /**
         * Gets the release checksums.
         * @returns the checksums, which may be empty
         */
        get_checksums(): string[];
        /**
         * Gets when the update was created.
         * @returns UTC timestamp in UNIX format, or 0 if unset
         */
        get_created(): number;
        /**
         * Gets the update description in AppStream markup format.
         * @returns the update description, or `null` if unset
         */
        get_description(): string;
        /**
         * Gets the optional text caption used to manually detach the device.
         * @returns the string caption, or `null` if unset
         */
        get_detach_caption(): string;
        /**
         * Gets the optional image used to manually detach the device.
         * @returns the URI, or `null` if unset
         */
        get_detach_image(): string;
        /**
         * Gets the URL for the online update notes.
         * @returns the update URL, or `null` if unset
         */
        get_details_url(): string;
        /**
         * Gets the update filename.
         * @returns the update filename, or `null` if unset
         */
        get_filename(): string;
        /**
         * Gets the release flags.
         * @returns the release flags, or 0 if unset
         */
        get_flags(): ReleaseFlags;
        /**
         * Gets the update homepage.
         * @returns the update homepage, or `null` if unset
         */
        get_homepage(): string;
        /**
         * Gets the time estimate for firmware installation (in seconds)
         * @returns the estimated time to flash this release (or 0 if unset)
         */
        get_install_duration(): number;
        /**
         * Gets the list of issues fixed in this release.
         * @returns the issues, which may be empty
         */
        get_issues(): string[];
        /**
         * Gets the update license.
         * @returns the update license, or `null` if unset
         */
        get_license(): string;
        /**
         * Gets the update URI, i.e. where you can download the firmware from.
         *
         * Typically the first URI will be the main HTTP mirror, but all URIs may not
         * be valid HTTP URIs. For example, "ipns://QmSrPmba" is valid here.
         * @returns the URIs
         */
        get_locations(): string[];
        /**
         * Gets the release metadata.
         * @returns the metadata, which may be empty
         */
        get_metadata(): GLib.HashTable<any, any>;
        /**
         * Gets a release metadata item.
         * @param key the key
         * @returns the value, or `null` if unset
         */
        get_metadata_item(key: string): string;
        /**
         * Gets the update name.
         * @returns the update name, or `null` if unset
         */
        get_name(): string;
        /**
         * Gets the update variant suffix.
         * @returns the update variant, or `null` if unset
         */
        get_name_variant_suffix(): string;
        /**
         * Gets the update protocol.
         * @returns the update protocol, or `null` if unset
         */
        get_protocol(): string;
        /**
         * Gets the remote ID that can be used for downloading.
         * @returns the ID, or `null` if unset
         */
        get_remote_id(): string;
        /**
         * Gets the update size.
         * @returns the update size in bytes, or 0 if unset
         */
        get_size(): number;
        /**
         * Gets the URL of the source code used to build this release.
         * @returns the update source_url, or `null` if unset
         */
        get_source_url(): string;
        /**
         * Gets the update summary.
         * @returns the update summary, or `null` if unset
         */
        get_summary(): string;
        /**
         * Gets the trust level of the release.
         * @returns the trust bitfield, e.g. #FWUPD_TRUST_FLAG_PAYLOAD
         */
        get_trust_flags(): TrustFlags;
        /**
         * Gets the update image.
         * @returns the update image URL, or `null` if unset
         */
        get_update_image(): string;
        /**
         * Gets the update message.
         * @returns the update message, or `null` if unset
         */
        get_update_message(): string;
        /**
         * Gets the release urgency.
         * @returns the release urgency, or 0 if unset
         */
        get_urgency(): ReleaseUrgency;
        /**
         * Gets the default update URI.
         * @returns the update URI, or `null` if unset
         */
        get_uri(): string;
        /**
         * Gets the update vendor.
         * @returns the update vendor, or `null` if unset
         */
        get_vendor(): string;
        /**
         * Gets the update version.
         * @returns the update version, or `null` if unset
         */
        get_version(): string;
        /**
         * Finds out if the release has the update category.
         * @param category the update category, e.g. `X-EmbeddedController`
         * @returns `true` if the release matches
         */
        has_category(category: string): boolean;
        /**
         * Finds out if the release has the update checksum.
         * @param checksum the update checksum
         * @returns `true` if the release matches
         */
        has_checksum(checksum: string): boolean;
        /**
         * Finds if the release has a specific release flag.
         * @param flag the {@link Fwupd.ReleaseFlags}
         * @returns `true` if the flag is set
         */
        has_flag(flag: ReleaseFlags): boolean;
        /**
         * Removes a specific release flag from the release.
         * @param flag the {@link Fwupd.ReleaseFlags}
         */
        remove_flag(flag: ReleaseFlags): void;
        /**
         * Sets the AppStream ID.
         * @param appstream_id the AppStream component ID, e.g. `org.hughski.ColorHug2.firmware`
         */
        set_appstream_id(appstream_id: string): void;
        /**
         * Sets the alternate branch.
         * @param branch the update one line branch
         */
        set_branch(branch: string): void;
        /**
         * Sets when the update was created.
         * @param created UTC timestamp in UNIX format
         */
        set_created(created: number): void;
        /**
         * Sets the update description.
         * @param description the update description in AppStream markup format
         */
        set_description(description: string): void;
        /**
         * Sets the optional text caption used to manually detach the device.
         * @param detach_caption string caption
         */
        set_detach_caption(detach_caption: string): void;
        /**
         * Sets the optional image used to manually detach the device.
         * @param detach_image a fully qualified URI
         */
        set_detach_image(detach_image: string): void;
        /**
         * Sets the URL for the online update notes.
         * @param details_url the URL
         */
        set_details_url(details_url: string): void;
        /**
         * Sets the update filename.
         * @param filename the update filename on disk
         */
        set_filename(filename: string): void;
        /**
         * Sets the release flags.
         * @param flags the release flags, e.g. `FWUPD_RELEASE_FLAG_TRUSTED_PAYLOAD`
         */
        set_flags(flags: ReleaseFlags): void;
        /**
         * Sets the update homepage.
         * @param homepage the description
         */
        set_homepage(homepage: string): void;
        /**
         * Sets the time estimate for firmware installation (in seconds)
         * @param duration The amount of time
         */
        set_install_duration(duration: number): void;
        /**
         * Sets the update license.
         * @param license the description
         */
        set_license(license: string): void;
        /**
         * Sets the update name.
         * @param name the description
         */
        set_name(name: string): void;
        /**
         * Sets the update variant suffix.
         * @param name_variant_suffix the description
         */
        set_name_variant_suffix(name_variant_suffix: string): void;
        /**
         * Sets the update protocol.
         * @param protocol the update protocol, e.g. `org.usb.dfu`
         */
        set_protocol(protocol: string): void;
        /**
         * Sets the remote ID that can be used for downloading.
         * @param remote_id the release ID, e.g. `USB:foo`
         */
        set_remote_id(remote_id: string): void;
        /**
         * Sets the update size.
         * @param size the update size in bytes
         */
        set_size(size: number): void;
        /**
         * Sets the URL of the source code used to build this release.
         * @param source_url the URL
         */
        set_source_url(source_url: string): void;
        /**
         * Sets the update summary.
         * @param summary the update one line summary
         */
        set_summary(summary: string): void;
        /**
         * Sets the trust level of the release.
         * @param trust_flags the bitfield, e.g. #FWUPD_TRUST_FLAG_PAYLOAD
         */
        set_trust_flags(trust_flags: TrustFlags | null): void;
        /**
         * Sets the update image.
         * @param update_image the update image URL
         */
        set_update_image(update_image: string): void;
        /**
         * Sets the update message.
         * @param update_message the update message string
         */
        set_update_message(update_message: string): void;
        /**
         * Sets the release urgency.
         * @param urgency the release urgency, e.g. `FWUPD_RELEASE_FLAG_TRUSTED_PAYLOAD`
         */
        set_urgency(urgency: ReleaseUrgency | null): void;
        /**
         * Sets the update URI, i.e. where you can download the firmware from.
         * @param uri the update URI
         */
        set_uri(uri: string): void;
        /**
         * Sets the update vendor.
         * @param vendor the vendor name, e.g. `Hughski Limited`
         */
        set_vendor(vendor: string): void;
        /**
         * Sets the update version.
         * @param version the update version, e.g. `1.2.4`
         */
        set_version(version: string): void;
        /**
         * Builds a text representation of the object.
         * @returns text, or `null` for invalid
         */
        to_string(): string;
        /**
         * Creates a GVariant from the release data.
         * @returns the GVariant, or `null` for error
         */
        to_variant(): GLib.Variant;
    }

    namespace Remote {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::approval-required': (pspec: GObject.ParamSpec) => void;
            'notify::automatic-reports': (pspec: GObject.ParamSpec) => void;
            'notify::automatic-security-reports': (pspec: GObject.ParamSpec) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            approval_required: boolean;
            approvalRequired: boolean;
            automatic_reports: boolean;
            automaticReports: boolean;
            automatic_security_reports: boolean;
            automaticSecurityReports: boolean;
            enabled: boolean;
            id: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Remote extends GObject.Object {
        static $gtype: GObject.GType<Remote>;

        // Properties

        /**
         * If firmware from the remote should be checked against the system
         * list of approved firmware.
         * @since 1.2.6
         */
        get approval_required(): boolean;
        set approval_required(val: boolean);
        /**
         * If firmware from the remote should be checked against the system
         * list of approved firmware.
         * @since 1.2.6
         */
        get approvalRequired(): boolean;
        set approvalRequired(val: boolean);
        /**
         * The behavior for auto-uploading reports.
         * @since 1.3.3
         */
        get automatic_reports(): boolean;
        set automatic_reports(val: boolean);
        /**
         * The behavior for auto-uploading reports.
         * @since 1.3.3
         */
        get automaticReports(): boolean;
        set automaticReports(val: boolean);
        /**
         * The behavior for auto-uploading security reports.
         * @since 1.5.0
         */
        get automatic_security_reports(): boolean;
        set automatic_security_reports(val: boolean);
        /**
         * The behavior for auto-uploading security reports.
         * @since 1.5.0
         */
        get automaticSecurityReports(): boolean;
        set automaticSecurityReports(val: boolean);
        /**
         * If the remote is enabled and should be used.
         * @since 0.9.3
         */
        get enabled(): boolean;
        set enabled(val: boolean);
        /**
         * The remote ID.
         * @since 0.9.3
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

        static ['new'](): Remote;

        // Signals

        /** @signal */
        connect<K extends keyof Remote.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Remote.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Remote.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Remote.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Remote.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Remote.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates an array of new devices using packed data.
         * @param value a {@link GLib.Variant}
         */
        static array_from_variant(value: GLib.Variant): Remote[];
        /**
         * Creates a new remote using packed data.
         * @param value a {@link GLib.Variant}
         */
        static from_variant(value: GLib.Variant): Remote;
        /**
         * Converts an printable string to an enumerated type.
         * @param kind a string, e.g. `download`
         */
        static kind_from_string(kind: string): RemoteKind;
        /**
         * Converts an enumerated type to a printable string.
         * @param kind a {@link Fwupd.RemoteKind}, e.g. {@link Fwupd.RemoteKind.DOWNLOAD}
         */
        static kind_to_string(kind: RemoteKind): string;

        // Methods

        /**
         * Builds a URI for the URL using the username and password set for the remote,
         * including any basename URI substitution.
         * @param url the URL to use
         * @returns a URI, or `null` for error
         */
        build_firmware_uri(url: string): string;
        /**
         * Gets the age of the remote in seconds.
         * @returns a age, or `G_MAXUINT64` for unavailable
         */
        get_age(): number;
        /**
         * Gets the remote agreement in AppStream markup format
         * @returns a string, or `null` if unset
         */
        get_agreement(): string;
        /**
         * Gets if firmware from the remote should be checked against the list
         * of a approved checksums.
         * @returns a `TRUE` if the remote is restricted
         */
        get_approval_required(): boolean;
        /**
         * Gets if reports should be automatically uploaded to this remote
         * @returns a `TRUE` if the remote should have reports uploaded automatically
         */
        get_automatic_reports(): boolean;
        /**
         * Gets if security reports should be automatically uploaded to this remote
         * @returns a `TRUE` if the remote should have reports uploaded automatically
         */
        get_automatic_security_reports(): boolean;
        /**
         * Gets the remote checksum.
         * @returns a string, or `null` if unset
         */
        get_checksum(): string;
        /**
         * Gets if the remote is enabled and should be used.
         * @returns a `TRUE` if the remote is enabled
         */
        get_enabled(): boolean;
        /**
         * Gets the path and filename that the remote is using for a cache.
         * @returns a string, or `null` for unset
         */
        get_filename_cache(): string;
        /**
         * Gets the path and filename that the remote is using for a signature cache.
         * @returns a string, or `null` for unset
         */
        get_filename_cache_sig(): string;
        /**
         * Gets the path and filename of the remote itself, typically a `.conf` file.
         * @returns a string, or `null` for unset
         */
        get_filename_source(): string;
        /**
         * Gets the base URI for firmware.
         * @returns a URI, or `null` for unset.
         */
        get_firmware_base_uri(): string;
        /**
         * Gets the remote ID, e.g. `lvfs-testing`.
         * @returns a string, or `null` if unset
         */
        get_id(): string;
        /**
         * Gets the keyring kind of the remote.
         * @returns a {@link Fwupd.KeyringKind}, e.g. #FWUPD_KEYRING_KIND_GPG
         */
        get_keyring_kind(): KeyringKind;
        /**
         * Gets the kind of the remote.
         * @returns a {@link Fwupd.RemoteKind}, e.g. #FWUPD_REMOTE_KIND_LOCAL
         */
        get_kind(): RemoteKind;
        /**
         * Gets the URI for the remote metadata.
         * @returns a URI, or `null` for invalid.
         */
        get_metadata_uri(): string;
        /**
         * Gets the URI for the remote metadata signature.
         * @returns a URI, or `null` for invalid.
         */
        get_metadata_uri_sig(): string;
        /**
         * Gets the list of remotes this plugin should be ordered after.
         * @returns an array
         */
        get_order_after(): string[];
        /**
         * Gets the list of remotes this plugin should be ordered before.
         * @returns an array
         */
        get_order_before(): string[];
        /**
         * Gets the password configured for the remote.
         * @returns a string, or `null` for unset
         */
        get_password(): string;
        /**
         * Gets the priority of the remote, where bigger numbers are better.
         * @returns a priority, or 0 for the default value
         */
        get_priority(): number;
        /**
         * Gets the base directory for storing remote metadata
         * @returns a string, or `null` if unset
         */
        get_remotes_dir(): string;
        /**
         * Gets the URI for the remote reporting.
         * @returns a URI, or `null` for invalid.
         */
        get_report_uri(): string;
        /**
         * Gets the URI for the security report.
         * @returns a URI, or `null` for invalid.
         */
        get_security_report_uri(): string;
        /**
         * Gets the remote title, e.g. `Linux Vendor Firmware Service`.
         * @returns a string, or `null` if unset
         */
        get_title(): string;
        /**
         * Gets the username configured for the remote.
         * @returns a string, or `null` for unset
         */
        get_username(): string;
        /**
         * Sets up the remote ready for use. Most other methods call this
         * for you, and do you only need to call this if you are just watching
         * the self.
         * @param filename A filename
         * @param cancellable the {@link Gio.Cancellable}, or `null`
         * @returns `true` for success
         */
        load_from_filename(filename: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Parses the signature, updating the metadata URI as appropriate.
         * @param filename A filename
         * @returns `true` for success
         */
        load_signature(filename: string): boolean;
        /**
         * Parses the signature, updating the metadata URI as appropriate.
         *
         * This can only be called for remotes with `Keyring=jcat` which is
         * the default for most remotes.
         * @param bytes A {@link GLib.Bytes}
         * @returns `true` for success
         */
        load_signature_bytes(bytes: GLib.Bytes | Uint8Array): boolean;
        /**
         * Sets the remote agreement in AppStream markup format
         * @param agreement Agreement markup
         */
        set_agreement(agreement: string): void;
        /**
         * Sets the keyring kind
         * @param keyring_kind {@link Fwupd.KeyringKind} e.g. #FWUPD_KEYRING_KIND_PKCS7
         */
        set_keyring_kind(keyring_kind: KeyringKind | null): void;
        /**
         * Sets the plugin modification time.
         * @param mtime a UNIX itmestamp
         */
        set_mtime(mtime: number): void;
        /**
         * Sets the plugin priority.
         * @param priority an integer, where 1 is better
         */
        set_priority(priority: number): void;
        /**
         * Sets the directory to store remote data
         * @param directory Remotes directory
         */
        set_remotes_dir(directory: string): void;
        /**
         * Creates a GVariant from the remote data.
         * @returns the GVariant, or `null` for error
         */
        to_variant(): GLib.Variant;
    }

    namespace SecurityAttr {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SecurityAttr extends GObject.Object {
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

        static ['new'](appstream_id?: string | null): SecurityAttr;

        // Signals

        /** @signal */
        connect<K extends keyof SecurityAttr.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SecurityAttr.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SecurityAttr.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SecurityAttr.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SecurityAttr.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SecurityAttr.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates an array of new security_attrs using packed data.
         * @param value a {@link GLib.Variant}
         */
        static array_from_variant(value: GLib.Variant): SecurityAttr[];
        /**
         * Returns the printable string for the flag.
         * @param flag A {@link Fwupd.SecurityAttrFlags}, e.g. {@link Fwupd.SecurityAttrFlags.SUCCESS}
         */
        static flag_to_string(flag: SecurityAttrFlags): string;
        /**
         * Returns the string suffix for the flag.
         * @param flag A {@link Fwupd.SecurityAttrFlags}, e.g. {@link Fwupd.SecurityAttrFlags.RUNTIME_UPDATES}
         */
        static flag_to_suffix(flag: SecurityAttrFlags): string;
        /**
         * Creates a new self using packed data.
         * @param value a {@link GLib.Variant}
         */
        static from_variant(value: GLib.Variant): SecurityAttr;
        /**
         * Returns the printable string for the result enum.
         * @param result A {@link Fwupd.SecurityAttrResult}, e.g. {@link Fwupd.SecurityAttrResult.ENABLED}
         */
        static result_to_string(result: SecurityAttrResult): string;

        // Methods

        /**
         * Adds a specific self flag to the self.
         * @param flag the {@link Fwupd.SecurityAttrFlags}
         */
        add_flag(flag: SecurityAttrFlags | null): void;
        /**
         * Adds metadata to the attribute which may be used in the name.
         * @param key metadata key
         * @param value metadata value
         */
        add_metadata(key: string, value?: string | null): void;
        /**
         * Adds an attribute appstream_id to obsolete. The obsoleted attribute will not
         * contribute to the calculated HSI value or be visible in command line tools.
         * @param appstream_id the appstream_id or plugin name
         */
        add_obsolete(appstream_id: string): void;
        /**
         * Gets the AppStream ID.
         * @returns the AppStream ID, or `null` if unset
         */
        get_appstream_id(): string;
        /**
         * Gets the self flags.
         * @returns the self flags, or 0 if unset
         */
        get_flags(): SecurityAttrFlags;
        /**
         * Gets the HSI level.
         * @returns the {@link Fwupd.SecurityAttrLevel}, or {@link Fwupd.SecurityAttrLevel.NONE} if unset
         */
        get_level(): SecurityAttrLevel;
        /**
         * Gets private metadata from the attribute which may be used in the name.
         * @param key metadata key
         * @returns the metadata value, or `null` if unfound
         */
        get_metadata(key: string): string | null;
        /**
         * Gets the attribute name.
         * @returns the attribute name, or `null` if unset
         */
        get_name(): string;
        /**
         * Gets the list of attribute obsoletes. The obsoleted attributes will not
         * contribute to the calculated HSI value or be visible in command line tools.
         * @returns the obsoletes, which may be empty
         */
        get_obsoletes(): string[];
        /**
         * Gets the plugin that created the attribute.
         * @returns the plugin name, or `null` if unset
         */
        get_plugin(): string;
        /**
         * Gets the optional HSI result.
         * @returns the {@link Fwupd.SecurityAttrResult}, e.g `FWUPD_SECURITY_ATTR_LEVEL_LOCKED`
         */
        get_result(): SecurityAttrResult;
        /**
         * Gets the attribute URL.
         * @returns the attribute result, or `null` if unset
         */
        get_url(): string;
        /**
         * Finds if the self has a specific self flag.
         * @param flag the {@link Fwupd.SecurityAttrFlags}
         * @returns `true` if the flag is set
         */
        has_flag(flag: SecurityAttrFlags | null): boolean;
        /**
         * Finds out if the attribute obsoletes a specific appstream_id.
         * @param appstream_id the attribute appstream_id
         * @returns `true` if the self matches
         */
        has_obsolete(appstream_id: string): boolean;
        /**
         * Sets the AppStream ID.
         * @param appstream_id the AppStream component ID, e.g. `com.intel.BiosGuard`
         */
        set_appstream_id(appstream_id: string): void;
        /**
         * Sets the self flags.
         * @param flags the self flags, e.g. {@link Fwupd.SecurityAttrFlags.OBSOLETED}
         */
        set_flags(flags: SecurityAttrFlags | null): void;
        /**
         * Sets the HSI level. A `level` of {@link Fwupd.SecurityAttrLevel.NONE} is not used
         * for the HSI calculation.
         * @param level A {@link Fwupd.SecurityAttrLevel}, e.g. {@link Fwupd.SecurityAttrLevel.IMPORTANT}
         */
        set_level(level: SecurityAttrLevel | null): void;
        /**
         * Sets the attribute name.
         * @param name the attribute name
         */
        set_name(name: string): void;
        /**
         * Sets the plugin that created the attribute.
         * @param plugin the plugin name
         */
        set_plugin(plugin: string): void;
        /**
         * Sets the optional HSI result. This is required because some attributes may
         * be a "success" when something is `locked` or may be "failed" if `found`.
         * @param result A {@link Fwupd.SecurityAttrResult}, e.g. `FWUPD_SECURITY_ATTR_LEVEL_LOCKED`
         */
        set_result(result: SecurityAttrResult | null): void;
        /**
         * Sets the attribute result.
         * @param url the attribute URL
         */
        set_url(url: string): void;
        /**
         * Builds a text representation of the object.
         * @returns text, or `null` for invalid
         */
        to_string(): string;
        /**
         * Creates a GVariant from the self data.
         * @returns the GVariant, or `null` for error
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
    type DeviceClass = typeof Device;
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
    type SecurityAttrClass = typeof SecurityAttr;
    /**
     * The device flags.
     * @gir-type Alias
     */
    type DeviceFlags = number;
    /**
     * The plugin flags.
     * @gir-type Alias
     */
    type PluginFlags = number;
    /**
     * The release flags.
     * @gir-type Alias
     */
    type ReleaseFlags = number;
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
