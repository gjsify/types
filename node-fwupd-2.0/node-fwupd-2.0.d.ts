
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Fwupd-2.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Fwupd {

/**
 * The error code.
 */
enum Error {
    /**
     * Internal error
     */
    INTERNAL,
    /**
     * Installed newer firmware version
     */
    VERSION_NEWER,
    /**
     * Installed same firmware version
     */
    VERSION_SAME,
    /**
     * Already set be be installed offline
     */
    ALREADY_PENDING,
    /**
     * Failed to get authentication
     */
    AUTH_FAILED,
    /**
     * Failed to read from device
     */
    READ,
    /**
     * Failed to write to the device
     */
    WRITE,
    /**
     * Invalid file format
     */
    INVALID_FILE,
    /**
     * No matching device exists
     */
    NOT_FOUND,
    /**
     * Nothing to do
     */
    NOTHING_TO_DO,
    /**
     * Action was not possible
     */
    NOT_SUPPORTED,
    /**
     * Signature was invalid
     */
    SIGNATURE_INVALID,
    /**
     * AC power was required
     */
    AC_POWER_REQUIRED,
    /**
     * Permission was denied
     */
    PERMISSION_DENIED,
    /**
     * User has configured their system in a broken way
     */
    BROKEN_SYSTEM,
    /**
     * The system battery level is too low
     */
    BATTERY_LEVEL_TOO_LOW,
    /**
     * User needs to do an action to complete the update
     */
    NEEDS_USER_ACTION,
}
/**
 * The update state.
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
 * If no verification is required then %FWUPD_VERSION_FORMAT_PLAIN should
 * be used to signify an unparsable text string.
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
/**
 * The options to use for downloading.
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
const DBUS_INTERFACE: string | null
const DBUS_PATH: string | null
const DBUS_SERVICE: string | null
const DEVICE_FLAG_ADD_COUNTERPART_GUIDS: number
const DEVICE_FLAG_ANOTHER_WRITE_REQUIRED: number
const DEVICE_FLAG_BACKUP_BEFORE_INSTALL: number
const DEVICE_FLAG_CAN_VERIFY: number
const DEVICE_FLAG_CAN_VERIFY_IMAGE: number
const DEVICE_FLAG_DUAL_IMAGE: number
const DEVICE_FLAG_ENSURE_SEMVER: number
const DEVICE_FLAG_HAS_MULTIPLE_BRANCHES: number
const DEVICE_FLAG_HISTORICAL: number
const DEVICE_FLAG_IGNORE_VALIDATION: number
const DEVICE_FLAG_INSTALL_ALL_RELEASES: number
const DEVICE_FLAG_INSTALL_PARENT_FIRST: number
const DEVICE_FLAG_INTERNAL: number
const DEVICE_FLAG_IS_BOOTLOADER: number
const DEVICE_FLAG_LOCKED: number
const DEVICE_FLAG_MD_SET_ICON: number
const DEVICE_FLAG_MD_SET_NAME: number
const DEVICE_FLAG_MD_SET_NAME_CATEGORY: number
const DEVICE_FLAG_MD_SET_VERFMT: number
const DEVICE_FLAG_NEEDS_ACTIVATION: number
const DEVICE_FLAG_NEEDS_BOOTLOADER: number
const DEVICE_FLAG_NEEDS_REBOOT: number
const DEVICE_FLAG_NEEDS_SHUTDOWN: number
const DEVICE_FLAG_NONE: number
const DEVICE_FLAG_NOTIFIED: number
const DEVICE_FLAG_NO_AUTO_INSTANCE_IDS: number
const DEVICE_FLAG_NO_GUID_MATCHING: number
const DEVICE_FLAG_ONLY_OFFLINE: number
const DEVICE_FLAG_ONLY_SUPPORTED: number
const DEVICE_FLAG_REGISTERED: number
const DEVICE_FLAG_REPORTED: number
const DEVICE_FLAG_REQUIRE_AC: number
const DEVICE_FLAG_SELF_RECOVERY: number
const DEVICE_FLAG_SKIPS_RESTART: number
const DEVICE_FLAG_SUPPORTED: number
const DEVICE_FLAG_TRUSTED: number
const DEVICE_FLAG_UPDATABLE: number
const DEVICE_FLAG_UPDATABLE_HIDDEN: number
const DEVICE_FLAG_USABLE_DURING_UPDATE: number
const DEVICE_FLAG_USE_RUNTIME_VERSION: number
const DEVICE_FLAG_VERSION_CHECK_REQUIRED: number
const DEVICE_FLAG_WAIT_FOR_REPLUG: number
const DEVICE_FLAG_WILL_DISAPPEAR: number
const DEVICE_ID_ANY: string | null
const PLUGIN_FLAG_CAPSULES_UNSUPPORTED: number
const PLUGIN_FLAG_CLEAR_UPDATABLE: number
const PLUGIN_FLAG_DISABLED: number
const PLUGIN_FLAG_EFIVAR_NOT_MOUNTED: number
const PLUGIN_FLAG_ESP_NOT_FOUND: number
const PLUGIN_FLAG_FAILED_OPEN: number
const PLUGIN_FLAG_LEGACY_BIOS: number
const PLUGIN_FLAG_NONE: number
const PLUGIN_FLAG_NO_HARDWARE: number
const PLUGIN_FLAG_UNLOCK_REQUIRED: number
const PLUGIN_FLAG_USER_WARNING: number
const RELEASE_FLAG_BLOCKED_APPROVAL: number
const RELEASE_FLAG_BLOCKED_VERSION: number
const RELEASE_FLAG_IS_ALTERNATE_BRANCH: number
const RELEASE_FLAG_IS_DOWNGRADE: number
const RELEASE_FLAG_IS_UPGRADE: number
const RELEASE_FLAG_NONE: number
const RELEASE_FLAG_TRUSTED_METADATA: number
const RELEASE_FLAG_TRUSTED_PAYLOAD: number
const RESULT_KEY_APPSTREAM_ID: string | null
const RESULT_KEY_BRANCH: string | null
const RESULT_KEY_CATEGORIES: string | null
const RESULT_KEY_CHECKSUM: string | null
const RESULT_KEY_CREATED: string | null
const RESULT_KEY_DESCRIPTION: string | null
const RESULT_KEY_DETACH_CAPTION: string | null
const RESULT_KEY_DETACH_IMAGE: string | null
const RESULT_KEY_DETAILS_URL: string | null
const RESULT_KEY_DEVICE_ID: string | null
const RESULT_KEY_FILENAME: string | null
const RESULT_KEY_FLAGS: string | null
const RESULT_KEY_FLASHES_LEFT: string | null
const RESULT_KEY_GUID: string | null
const RESULT_KEY_HOMEPAGE: string | null
const RESULT_KEY_HSI_LEVEL: string | null
const RESULT_KEY_HSI_RESULT: string | null
const RESULT_KEY_ICON: string | null
const RESULT_KEY_INSTALL_DURATION: string | null
const RESULT_KEY_INSTANCE_IDS: string | null
const RESULT_KEY_ISSUES: string | null
const RESULT_KEY_LICENSE: string | null
const RESULT_KEY_LOCATIONS: string | null
const RESULT_KEY_METADATA: string | null
const RESULT_KEY_MODIFIED: string | null
const RESULT_KEY_NAME: string | null
const RESULT_KEY_NAME_VARIANT_SUFFIX: string | null
const RESULT_KEY_PARENT_DEVICE_ID: string | null
const RESULT_KEY_PLUGIN: string | null
const RESULT_KEY_PROTOCOL: string | null
const RESULT_KEY_RELEASE: string | null
const RESULT_KEY_REMOTE_ID: string | null
const RESULT_KEY_SERIAL: string | null
const RESULT_KEY_SIZE: string | null
const RESULT_KEY_SOURCE_URL: string | null
const RESULT_KEY_STATUS: string | null
const RESULT_KEY_SUMMARY: string | null
const RESULT_KEY_TRUST_FLAGS: string | null
const RESULT_KEY_UPDATE_ERROR: string | null
const RESULT_KEY_UPDATE_IMAGE: string | null
const RESULT_KEY_UPDATE_MESSAGE: string | null
const RESULT_KEY_UPDATE_STATE: string | null
const RESULT_KEY_URGENCY: string | null
const RESULT_KEY_URI: string | null
const RESULT_KEY_VENDOR: string | null
const RESULT_KEY_VENDOR_ID: string | null
const RESULT_KEY_VERSION: string | null
const RESULT_KEY_VERSION_BOOTLOADER: string | null
const RESULT_KEY_VERSION_BOOTLOADER_RAW: string | null
const RESULT_KEY_VERSION_FORMAT: string | null
const RESULT_KEY_VERSION_LOWEST: string | null
const RESULT_KEY_VERSION_LOWEST_RAW: string | null
const RESULT_KEY_VERSION_RAW: string | null
const SECURITY_ATTR_ID_ACPI_DMAR: string | null
const SECURITY_ATTR_ID_ENCRYPTED_RAM: string | null
const SECURITY_ATTR_ID_FWUPD_ATTESTATION: string | null
const SECURITY_ATTR_ID_FWUPD_PLUGINS: string | null
const SECURITY_ATTR_ID_FWUPD_UPDATES: string | null
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_ACM: string | null
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_ENABLED: string | null
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_OTP: string | null
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_POLICY: string | null
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_VERIFIED: string | null
const SECURITY_ATTR_ID_INTEL_CET_ACTIVE: string | null
const SECURITY_ATTR_ID_INTEL_CET_ENABLED: string | null
const SECURITY_ATTR_ID_INTEL_DCI_ENABLED: string | null
const SECURITY_ATTR_ID_INTEL_DCI_LOCKED: string | null
const SECURITY_ATTR_ID_INTEL_SMAP: string | null
const SECURITY_ATTR_ID_IOMMU: string | null
const SECURITY_ATTR_ID_KERNEL_LOCKDOWN: string | null
const SECURITY_ATTR_ID_KERNEL_SWAP: string | null
const SECURITY_ATTR_ID_KERNEL_TAINTED: string | null
const SECURITY_ATTR_ID_MEI_MANUFACTURING_MODE: string | null
const SECURITY_ATTR_ID_MEI_OVERRIDE_STRAP: string | null
const SECURITY_ATTR_ID_MEI_VERSION: string | null
const SECURITY_ATTR_ID_SPI_BIOSWE: string | null
const SECURITY_ATTR_ID_SPI_BLE: string | null
const SECURITY_ATTR_ID_SPI_SMM_BWP: string | null
const SECURITY_ATTR_ID_SUSPEND_TO_IDLE: string | null
const SECURITY_ATTR_ID_SUSPEND_TO_RAM: string | null
const SECURITY_ATTR_ID_TPM_RECONSTRUCTION_PCR0: string | null
const SECURITY_ATTR_ID_TPM_VERSION_20: string | null
const SECURITY_ATTR_ID_UEFI_PK: string | null
const SECURITY_ATTR_ID_UEFI_SECUREBOOT: string | null
/**
 * Builds a JSON report for the list of devices. No filtering is done on the
 * `devices` array, and it is expected that the caller will filter to something
 * sane, e.g. %FWUPD_DEVICE_FLAG_REPORTED at the bare minimum.
 * @param devices devices
 * @returns a string, or %NULL if the ID is not present
 */
function buildHistoryReportJson(devices: Device[]): string | null
/**
 * Gets a salted hash of the /etc/machine-id contents. This can be used to
 * identify a specific machine. It is not possible to recover the original
 * machine-id from the machine-hash.
 * @param salt The salt, or %NULL for none
 * @returns the SHA256 machine hash, or %NULL if the ID is not present
 */
function buildMachineId(salt: string | null): string | null
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
 * Rather that using this function you should use fwupd_client_set_user_agent_for_package()
 * which uses the *runtime* version of the daemon rather than the *build-time*
 * version.
 * @param packageName client program name, e.g. "gnome-software"
 * @param packageVersion client program version, e.g. "3.28.1"
 * @returns a string, e.g. `foo/0.1 (Linux i386 4.14.5; en; Fedora 27) fwupd/1.0.3`
 */
function buildUserAgent(packageName: string | null, packageVersion: string | null): string | null
/**
 * Formats a checksum for display.
 * @param checksum A checksum
 * @returns text, or %NULL for invalid
 */
function checksumFormatForDisplay(checksum: string | null): string | null
/**
 * Gets a the best possible checksum kind.
 * @param checksums checksums
 * @returns a checksum from the array, or %NULL if nothing was suitable
 */
function checksumGetBest(checksums: string[]): string | null
/**
 * Gets a specific checksum kind.
 * @param checksums checksums
 * @param kind a #GChecksumType, e.g. %G_CHECKSUM_SHA512
 * @returns a checksum from the array, or %NULL if not found
 */
function checksumGetByKind(checksums: string[], kind: GLib.ChecksumType): string | null
/**
 * Guesses the checksum kind based on the length of the hash.
 * @param checksum A checksum
 * @returns a #GChecksumType, e.g. %G_CHECKSUM_SHA1
 */
function checksumGuessKind(checksum: string | null): GLib.ChecksumType
/**
 * Converts a string to a #FwupdError.
 * @param error A string, e.g. `org.freedesktop.fwupd.VersionNewer`
 * @returns enumerated value
 */
function errorFromString(error: string | null): Error
function errorQuark(): GLib.Quark
/**
 * Converts a #FwupdError to a string.
 * @param error A #FwupdError, e.g. %FWUPD_ERROR_VERSION_NEWER
 * @returns identifier string
 */
function errorToString(error: Error): string | null
/**
 * Converts a string to a #FwupdFeatureFlags.
 * @param featureFlag A string, e.g. `detach-action`
 * @returns enumerated value
 */
function featureFlagFromString(featureFlag: string | null): FeatureFlags
/**
 * Converts a #FwupdFeatureFlags to a string.
 * @param featureFlag A #FwupdFeatureFlags, e.g. %FWUPD_FEATURE_FLAG_DETACH_ACTION
 * @returns identifier string
 */
function featureFlagToString(featureFlag: FeatureFlags): string | null
/**
 * Loads information from the system os-release file.
 * @returns keys from os-release
 */
function getOsRelease(): GLib.HashTable
/**
 * Converts a string GUID into its binary encoding. All string GUIDs are
 * formatted as big endian but on-disk can be encoded in different ways.
 * @param guidstr a GUID, e.g. `00112233-4455-6677-8899-aabbccddeeff`
 * @param guid a #fwupd_guid_t, or NULL to just check the GUID
 * @param flags some %FwupdGuidFlags, e.g. %FWUPD_GUID_FLAG_MIXED_ENDIAN
 * @returns %TRUE for success
 */
function guidFromString(guidstr: string | null, guid: number, flags: GuidFlags): boolean
/**
 * Returns a GUID for some data. This uses a hash and so even small
 * differences in the `data` will produce radically different return values.
 * 
 * The implementation is taken from RFC4122, Section 4.1.3; specifically
 * using a type-5 SHA-1 hash.
 * @param data data to hash
 * @param datasz length of `data`
 * @param flags some %FwupdGuidFlags, e.g. %FWUPD_GUID_FLAG_NAMESPACE_MICROSOFT
 * @returns A new GUID, or %NULL for internal error
 */
function guidHashData(data: number, datasz: number, flags: GuidFlags): string | null
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
 * @returns A new GUID, or %NULL if the string was invalid
 */
function guidHashString(str: string | null): string | null
/**
 * Checks the string is a valid GUID.
 * @param guid string to check, e.g. `00112233-4455-6677-8899-aabbccddeeff`
 * @returns %TRUE if @guid was a valid GUID, %FALSE otherwise
 */
function guidIsValid(guid: string | null): boolean
/**
 * Returns a text GUID of mixed or BE endian for a packed buffer.
 * @param guid a #fwupd_guid_t to read
 * @param flags some %FwupdGuidFlags, e.g. %FWUPD_GUID_FLAG_MIXED_ENDIAN
 * @returns A new GUID
 */
function guidToString(guid: number, flags: GuidFlags): string | null
/**
 * Converts an printable string to an enumerated type.
 * @param keyringKind a string, e.g. `gpg`
 * @returns a #FwupdKeyringKind, e.g. %FWUPD_KEYRING_KIND_GPG
 */
function keyringKindFromString(keyringKind: string | null): KeyringKind
/**
 * Converts an enumerated type to a printable string.
 * @param keyringKind a #FwupdKeyringKind, e.g. %FWUPD_KEYRING_KIND_GPG
 * @returns a string, e.g. `gpg`
 */
function keyringKindToString(keyringKind: KeyringKind): string | null
/**
 * Converts a string to a #FwupdStatus.
 * @param status A string, e.g. `decompressing`
 * @returns enumerated value
 */
function statusFromString(status: string | null): Status
/**
 * Converts a #FwupdStatus to a string.
 * @param status A #FwupdStatus, e.g. %FWUPD_STATUS_DECOMPRESSING
 * @returns identifier string
 */
function statusToString(status: Status): string | null
/**
 * Converts a string to a #FwupdTrustFlags.
 * @param trustFlag A string, e.g. `payload`
 * @returns enumerated value
 */
function trustFlagFromString(trustFlag: string | null): TrustFlags
/**
 * Converts a #FwupdTrustFlags to a string.
 * @param trustFlag A #FwupdTrustFlags, e.g. %FWUPD_TRUST_FLAG_PAYLOAD
 * @returns identifier string
 */
function trustFlagToString(trustFlag: TrustFlags): string | null
/**
 * Converts a string to a #FwupdUpdateState.
 * @param updateState A string, e.g. `pending`
 * @returns enumerated value
 */
function updateStateFromString(updateState: string | null): UpdateState
/**
 * Converts a #FwupdUpdateState to a string.
 * @param updateState A #FwupdUpdateState, e.g. %FWUPD_UPDATE_STATE_PENDING
 * @returns identifier string
 */
function updateStateToString(updateState: UpdateState): string | null
/**
 * Converts text to a display version type.
 * @param str A string, e.g. `quad`
 * @returns A #FwupdVersionFormat, e.g. %FWUPD_VERSION_FORMAT_TRIPLET
 */
function versionFormatFromString(str: string | null): VersionFormat
/**
 * Converts a display version type to text.
 * @param kind A #FwupdVersionFormat, e.g. %FWUPD_VERSION_FORMAT_TRIPLET
 * @returns A string, e.g. `quad`, or %NULL if not known
 */
function versionFormatToString(kind: VersionFormat): string | null
module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `device-added`
     */
    interface DeviceAddedSignalCallback {
        (result: Device): void
    }

    /**
     * Signal callback interface for `device-changed`
     */
    interface DeviceChangedSignalCallback {
        (result: Device): void
    }

    /**
     * Signal callback interface for `device-removed`
     */
    interface DeviceRemovedSignalCallback {
        (result: Device): void
    }

    /**
     * Signal callback interface for `status-changed`
     */
    interface StatusChangedSignalCallback {
        (object: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Fwupd-2.0.Fwupd.Client

        /**
         * The last-reported percentage of the daemon.
         */
        percentage?: number | null
        /**
         * The last-reported status of the daemon.
         */
        status?: number | null
    }

}

interface Client {

    // Own properties of Fwupd-2.0.Fwupd.Client

    /**
     * The daemon version number.
     */
    readonly daemonVersion: string | null
    /**
     * The host machine-id string
     */
    readonly hostMachineId: string | null
    /**
     * The host product string
     */
    readonly hostProduct: string | null
    /**
     * The host machine-id string
     */
    readonly hostSecurityId: string | null
    /**
     * If the daemon is running in an interactive terminal
     */
    readonly interactive: boolean
    /**
     * The last-reported percentage of the daemon.
     */
    percentage: number
    /**
     * The libsoup session, now unused.
     */
    readonly soupSession: GObject.Object
    /**
     * The last-reported status of the daemon.
     */
    status: number
    /**
     * If the daemon is tainted by 3rd party code.
     */
    readonly tainted: boolean
    __gtype__: number

    // Own fields of Fwupd-2.0.Fwupd.Client

    parentInstance: GObject.Object

    // Owm methods of Fwupd-2.0.Fwupd.Client

    /**
     * Activates up a device, which normally means the device switches to a new
     * firmware version. This should only be called when data loss cannot occur.
     * @param cancellable the #GCancellable, or %NULL
     * @param deviceId a device
     * @returns %TRUE for success
     */
    activate(cancellable: Gio.Cancellable | null, deviceId: string | null): boolean
    /**
     * Activates up a device, which normally means the device switches to a new
     * firmware version. This should only be called when data loss cannot occur.
     * @param deviceId a device
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    activateAsync(deviceId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_activate_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    activateFinish(res: Gio.AsyncResult): boolean
    /**
     * Clears the results for a specific device.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    clearResults(deviceId: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Clears the results for a specific device.
     * @param deviceId a device
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    clearResultsAsync(deviceId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_clear_results_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    clearResultsFinish(res: Gio.AsyncResult): boolean
    /**
     * Sets up the client ready for use. Most other methods call this
     * for you, and do you only need to call this if you are just watching
     * the client.
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    connect(cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets up the client ready for use. This is probably the first method you call
     * when wanting to use libfwupd in an asynchronous manner.
     * 
     * Other methods such as fwupd_client_get_devices_async() should only be called
     * after fwupd_client_connect_finish() has been called without an error.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    connectAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_connect_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    connectFinish(res: Gio.AsyncResult): boolean
    /**
     * Downloads data from a remote server. The fwupd_client_set_user_agent() function
     * should be called before this method is used.
     * @param url the remote URL
     * @param flags #FwupdClientDownloadFlags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
     * @param cancellable the #GCancellable, or %NULL
     * @returns downloaded data, or %NULL for error
     */
    downloadBytes(url: string | null, flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null): any
    /**
     * Downloads data from a remote server. The fwupd_client_set_user_agent() function
     * should be called before this method is used.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * 
     * NOTE: This method is thread-safe, but progress signals will be
     * emitted in the global default main context, if not explicitly set with
     * fwupd_client_set_main_context().
     * @param url the remote URL
     * @param flags #FwupdClientDownloadFlags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    downloadBytesAsync(url: string | null, flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_download_bytes_async().
     * @param res the #GAsyncResult
     * @returns downloaded data, or %NULL for error
     */
    downloadBytesFinish(res: Gio.AsyncResult): any
    /**
     * Downloads data from a remote server. The fwupd_client_set_user_agent() function
     * should be called before this method is used.
     * @param url the remote URL
     * @param file a #GFile
     * @param flags #FwupdClientDownloadFlags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE if the file was written, or %NULL for error
     */
    downloadFile(url: string | null, file: Gio.File, flags: ClientDownloadFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets up the client networking support ready for use. Most other download and
     * upload methods call this automatically, and do you only need to call this if
     * the session is being used outside the #FwupdClient.
     * @returns %TRUE for success
     */
    ensureNetworking(): boolean
    /**
     * Gets the list of approved firmware.
     * @param cancellable the #GCancellable, or %NULL
     * @returns checksums, or %NULL for error
     */
    getApprovedFirmware(cancellable: Gio.Cancellable | null): string[]
    /**
     * Gets the list of approved firmware.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getApprovedFirmwareAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_approved_firmware_async().
     * @param res the #GAsyncResult
     * @returns checksums, or %NULL for error
     */
    getApprovedFirmwareFinish(res: Gio.AsyncResult): string[]
    /**
     * Gets the list of blocked firmware.
     * @param cancellable the #GCancellable, or %NULL
     * @returns checksums, or %NULL for error
     */
    getBlockedFirmware(cancellable: Gio.Cancellable | null): string[]
    /**
     * Gets the list of blocked firmware.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getBlockedFirmwareAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_blocked_firmware_async().
     * @param res the #GAsyncResult
     * @returns checksums, or %NULL for error
     */
    getBlockedFirmwareFinish(res: Gio.AsyncResult): string[]
    /**
     * Gets if the daemon is running in an interactive terminal.
     * @returns %TRUE if the daemon is running in an interactive terminal
     */
    getDaemonInteractive(): boolean
    /**
     * Gets the daemon version number.
     * @returns a string, or %NULL for unknown.
     */
    getDaemonVersion(): string | null
    /**
     * Gets details about a specific firmware file.
     * @param filename the firmware filename, e.g. `firmware.cab`
     * @param cancellable the #GCancellable, or %NULL
     * @returns an array of results
     */
    getDetails(filename: string | null, cancellable: Gio.Cancellable | null): Device[]
    /**
     * Gets details about a specific firmware file.
     * @param bytes the firmware blob, e.g. the contents of `firmware.cab`
     * @param cancellable the #GCancellable, or %NULL
     * @returns an array of results
     */
    getDetailsBytes(bytes: any, cancellable: Gio.Cancellable | null): Device[]
    /**
     * Gets details about a specific firmware file.
     * @param bytes a #GBytes for the firmware, e.g. `firmware.cab`
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getDetailsBytesAsync(bytes: any, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_details_bytes_async().
     * @param res the #GAsyncResult
     * @returns an array of results
     */
    getDetailsBytesFinish(res: Gio.AsyncResult): Device[]
    /**
     * Gets a device by it's device ID.
     * @param deviceId the device ID, e.g. `usb:00:01:03:03`
     * @param cancellable the #GCancellable, or %NULL
     * @returns a #FwupdDevice or %NULL
     */
    getDeviceById(deviceId: string | null, cancellable: Gio.Cancellable | null): Device
    /**
     * Gets a device by it's device ID.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getDeviceByIdAsync(deviceId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_device_by_id_async().
     * @param res the #GAsyncResult
     * @returns a #FwupdDevice, or %NULL for failure
     */
    getDeviceByIdFinish(res: Gio.AsyncResult): Device
    /**
     * Gets all the devices registered with the daemon.
     * @param cancellable the #GCancellable, or %NULL
     * @returns results
     */
    getDevices(cancellable: Gio.Cancellable | null): Device[]
    /**
     * Gets all the devices registered with the daemon.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getDevicesAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets any devices that provide a specific GUID. An error is returned if no
     * devices contains this GUID.
     * @param guid the GUID, e.g. `e22c4520-43dc-5bb3-8245-5787fead9b63`
     * @param cancellable the #GCancellable, or %NULL
     * @returns devices or %NULL
     */
    getDevicesByGuid(guid: string | null, cancellable: Gio.Cancellable | null): Device[]
    /**
     * Gets any devices that provide a specific GUID. An error is returned if no
     * devices contains this GUID.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param guid the GUID, e.g. `e22c4520-43dc-5bb3-8245-5787fead9b63`
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getDevicesByGuidAsync(guid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_devices_by_guid_async().
     * @param res the #GAsyncResult
     * @returns results
     */
    getDevicesByGuidFinish(res: Gio.AsyncResult): Release[]
    /**
     * Gets the result of fwupd_client_get_devices_async().
     * @param res the #GAsyncResult
     * @returns results
     */
    getDevicesFinish(res: Gio.AsyncResult): Device[]
    /**
     * Gets all the downgrades for a specific device.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @returns results
     */
    getDowngrades(deviceId: string | null, cancellable: Gio.Cancellable | null): Release[]
    /**
     * Gets all the downgrades for a specific device.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getDowngradesAsync(deviceId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_downgrades_async().
     * @param res the #GAsyncResult
     * @returns results
     */
    getDowngradesFinish(res: Gio.AsyncResult): Release[]
    /**
     * Gets all the history.
     * @param cancellable the #GCancellable, or %NULL
     * @returns results
     */
    getHistory(cancellable: Gio.Cancellable | null): Device[]
    /**
     * Gets all the history.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getHistoryAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_history_async().
     * @param res the #GAsyncResult
     * @returns results
     */
    getHistoryFinish(res: Gio.AsyncResult): Device[]
    /**
     * Gets the string that represents the host machine ID
     * @returns a string, or %NULL for unknown.
     */
    getHostMachineId(): string | null
    /**
     * Gets the string that represents the host running fwupd
     * @returns a string, or %NULL for unknown.
     */
    getHostProduct(): string | null
    /**
     * Gets all the host security attributes from the daemon.
     * @param cancellable the #GCancellable, or %NULL
     * @returns attributes
     */
    getHostSecurityAttrs(cancellable: Gio.Cancellable | null): SecurityAttr[]
    /**
     * Gets all the host security attributes from the daemon.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getHostSecurityAttrsAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_host_security_attrs_async().
     * @param res the #GAsyncResult
     * @returns attributes
     */
    getHostSecurityAttrsFinish(res: Gio.AsyncResult): SecurityAttr[]
    /**
     * Gets the string that represents the host machine ID
     * @returns a string, or %NULL for unknown.
     */
    getHostSecurityId(): string | null
    /**
     * Gets the internal #GMainContext to use for synchronous methods.
     * By default the value is set a new #GMainContext.
     * @returns the #GMainContext
     */
    getMainContext(): GLib.MainContext
    /**
     * Gets the last returned percentage value.
     * @returns a percentage, or 0 for unknown.
     */
    getPercentage(): number
    /**
     * Gets all the plugins being used the daemon.
     * @param cancellable the #GCancellable, or %NULL
     * @returns results
     */
    getPlugins(cancellable: Gio.Cancellable | null): Plugin[]
    /**
     * Gets all the plugins being used by the daemon.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getPluginsAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_plugins_async().
     * @param res the #GAsyncResult
     * @returns results
     */
    getPluginsFinish(res: Gio.AsyncResult): Device[]
    /**
     * Gets all the releases for a specific device
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @returns results
     */
    getReleases(deviceId: string | null, cancellable: Gio.Cancellable | null): Release[]
    /**
     * Gets all the releases for a specific device
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getReleasesAsync(deviceId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_releases_async().
     * @param res the #GAsyncResult
     * @returns results
     */
    getReleasesFinish(res: Gio.AsyncResult): Release[]
    /**
     * Gets a specific remote that has been configured for the system.
     * @param remoteId the remote ID, e.g. `lvfs-testing`
     * @param cancellable the #GCancellable, or %NULL
     * @returns a #FwupdRemote, or %NULL if not found
     */
    getRemoteById(remoteId: string | null, cancellable: Gio.Cancellable | null): Remote
    /**
     * Gets a specific remote that has been configured for the system.
     * @param remoteId the remote ID, e.g. `lvfs-testing`
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getRemoteByIdAsync(remoteId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_remote_by_id_async().
     * @param res the #GAsyncResult
     * @returns a #FwupdRemote, or %NULL if not found
     */
    getRemoteByIdFinish(res: Gio.AsyncResult): Remote
    /**
     * Gets the list of remotes that have been configured for the system.
     * @param cancellable the #GCancellable, or %NULL
     * @returns list of remotes, or %NULL
     */
    getRemotes(cancellable: Gio.Cancellable | null): Remote[]
    /**
     * Gets the list of remotes that have been configured for the system.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getRemotesAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_remotes_async().
     * @param res the #GAsyncResult
     * @returns results
     */
    getRemotesFinish(res: Gio.AsyncResult): Remote[]
    /**
     * Gets all the report metadata from the daemon.
     * @param cancellable the #GCancellable, or %NULL
     * @returns attributes
     */
    getReportMetadata(cancellable: Gio.Cancellable | null): GLib.HashTable
    /**
     * Gets all the report metadata from the daemon.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getReportMetadataAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_report_metadata_async().
     * @param res the #GAsyncResult
     * @returns attributes
     */
    getReportMetadataFinish(res: Gio.AsyncResult): GLib.HashTable
    /**
     * Gets the results of a previous firmware update for a specific device.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @returns a #FwupdDevice, or %NULL for failure
     */
    getResults(deviceId: string | null, cancellable: Gio.Cancellable | null): Device
    /**
     * Gets the results of a previous firmware update for a specific device.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getResultsAsync(deviceId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_results_async().
     * @param res the #GAsyncResult
     * @returns a #FwupdDevice, or %NULL for failure
     */
    getResultsFinish(res: Gio.AsyncResult): Device
    /**
     * Gets the last returned status value.
     * @returns a #FwupdStatus, or %FWUPD_STATUS_UNKNOWN for unknown.
     */
    getStatus(): Status
    /**
     * Gets if the daemon has been tainted by 3rd party code.
     * @returns %TRUE if the daemon is unsupported
     */
    getTainted(): boolean
    /**
     * Gets all the upgrades for a specific device.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @returns results
     */
    getUpgrades(deviceId: string | null, cancellable: Gio.Cancellable | null): Release[]
    /**
     * Gets all the upgrades for a specific device.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getUpgradesAsync(deviceId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_upgrades_async().
     * @param res the #GAsyncResult
     * @returns results
     */
    getUpgradesFinish(res: Gio.AsyncResult): Release[]
    /**
     * Gets the string that represents the user agent that is used for
     * uploading and downloading. The user agent will contain the runtime
     * version of fwupd somewhere in the provided string.
     * @returns a string, or %NULL for unknown.
     */
    getUserAgent(): string | null
    /**
     * Install a file onto a specific device.
     * @param deviceId the device ID
     * @param filename the filename to install
     * @param installFlags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    install(deviceId: string | null, filename: string | null, installFlags: InstallFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Install firmware onto a specific device.
     * 
     * NOTE: This method is thread-safe, but progress signals will be
     * emitted in the global default main context, if not explicitly set with
     * fwupd_client_set_main_context().
     * @param deviceId the device ID
     * @param filename the filename to install
     * @param installFlags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    installAsync(deviceId: string | null, filename: string | null, installFlags: InstallFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Install firmware onto a specific device.
     * @param deviceId the device ID
     * @param bytes #GBytes
     * @param installFlags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    installBytes(deviceId: string | null, bytes: any, installFlags: InstallFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Install firmware onto a specific device.
     * 
     * NOTE: This method is thread-safe, but progress signals will be
     * emitted in the global default main context, if not explicitly set with
     * fwupd_client_set_main_context().
     * @param deviceId the device ID
     * @param bytes #GBytes
     * @param installFlags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    installBytesAsync(deviceId: string | null, bytes: any, installFlags: InstallFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_install_bytes_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    installBytesFinish(res: Gio.AsyncResult): boolean
    /**
     * Gets the result of fwupd_client_install_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    installFinish(res: Gio.AsyncResult): boolean
    /**
     * Installs a new release on a device, downloading the firmware if required.
     * @param device A #FwupdDevice
     * @param release A #FwupdRelease
     * @param installFlags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    installRelease(device: Device, release: Release, installFlags: InstallFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Installs a new release on a device, downloading the firmware if required.
     * @param device A #FwupdDevice
     * @param release A #FwupdRelease
     * @param installFlags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param downloadFlags the #FwupdClientDownloadFlags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    installRelease2(device: Device, release: Release, installFlags: InstallFlags, downloadFlags: ClientDownloadFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Installs a new release on a device, downloading the firmware if required.
     * 
     * NOTE: This method is thread-safe, but progress signals will be
     * emitted in the global default main context, if not explicitly set with
     * fwupd_client_set_main_context().
     * @param device A #FwupdDevice
     * @param release A #FwupdRelease
     * @param installFlags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param downloadFlags the #FwupdClientDownloadFlags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_DISABLE_IPFS
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    installRelease2Async(device: Device, release: Release, installFlags: InstallFlags, downloadFlags: ClientDownloadFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Installs a new release on a device, downloading the firmware if required.
     * 
     * NOTE: This method is thread-safe, but progress signals will be
     * emitted in the global default main context, if not explicitly set with
     * fwupd_client_set_main_context().
     * @param device A #FwupdDevice
     * @param release A #FwupdRelease
     * @param installFlags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    installReleaseAsync(device: Device, release: Release, installFlags: InstallFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_install_release_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    installReleaseFinish(res: Gio.AsyncResult): boolean
    /**
     * Modifies a daemon config option.
     * The daemon will only respond to this request with proper permissions
     * @param key key, e.g. `DisabledPlugins`
     * @param value value, e.g. `*`
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    modifyConfig(key: string | null, value: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Modifies a daemon config option.
     * The daemon will only respond to this request with proper permissions
     * @param key key, e.g. `DisabledPlugins`
     * @param value value, e.g. `*`
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    modifyConfigAsync(key: string | null, value: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_modify_config_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    modifyConfigFinish(res: Gio.AsyncResult): boolean
    /**
     * Modifies a device in a specific way. Not all properties on the #FwupdDevice
     * are settable by the client, and some may have other restrictions on `value`.
     * 
     * NOTE: User authentication may be required to complete this action.
     * @param deviceId the device ID
     * @param key the key, e.g. `Flags`
     * @param value the key, e.g. `reported`
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    modifyDevice(deviceId: string | null, key: string | null, value: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Modifies a device in a specific way. Not all properties on the #FwupdDevice
     * are settable by the client, and some may have other restrictions on `value`.
     * @param deviceId the device ID
     * @param key the key, e.g. `Flags`
     * @param value the key, e.g. `reported`
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    modifyDeviceAsync(deviceId: string | null, key: string | null, value: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_modify_device_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    modifyDeviceFinish(res: Gio.AsyncResult): boolean
    /**
     * Modifies a system remote in a specific way.
     * 
     * NOTE: User authentication may be required to complete this action.
     * @param remoteId the remote ID, e.g. `lvfs-testing`
     * @param key the key, e.g. `Enabled`
     * @param value the key, e.g. `true`
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    modifyRemote(remoteId: string | null, key: string | null, value: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Modifies a system remote in a specific way.
     * @param remoteId the remote ID, e.g. `lvfs-testing`
     * @param key the key, e.g. `Enabled`
     * @param value the key, e.g. `true`
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    modifyRemoteAsync(remoteId: string | null, key: string | null, value: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_modify_remote_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    modifyRemoteFinish(res: Gio.AsyncResult): boolean
    /**
     * Refreshes a remote by downloading new metadata.
     * @param remote A #FwupdRemote
     * @param cancellable A #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    refreshRemote(remote: Remote, cancellable: Gio.Cancellable | null): boolean
    /**
     * Refreshes a remote by downloading new metadata.
     * 
     * NOTE: This method is thread-safe, but progress signals will be
     * emitted in the global default main context, if not explicitly set with
     * fwupd_client_set_main_context().
     * @param remote A #FwupdRemote
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    refreshRemoteAsync(remote: Remote, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_refresh_remote_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    refreshRemoteFinish(res: Gio.AsyncResult): boolean
    /**
     * Signs the data using the client self-signed certificate.
     * @param value A string to sign, typically a JSON blob
     * @param flags #FwupdSelfSignFlags, e.g. %FWUPD_SELF_SIGN_FLAG_ADD_TIMESTAMP
     * @param cancellable the #GCancellable, or %NULL
     * @returns a signature, or %NULL for failure
     */
    selfSign(value: string | null, flags: SelfSignFlags, cancellable: Gio.Cancellable | null): string | null
    /**
     * Signs the data using the client self-signed certificate.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param value A string to sign, typically a JSON blob
     * @param flags #FwupdSelfSignFlags, e.g. %FWUPD_SELF_SIGN_FLAG_ADD_TIMESTAMP
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    selfSignAsync(value: string | null, flags: SelfSignFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_self_sign_async().
     * @param res the #GAsyncResult
     * @returns a signature, or %NULL for failure
     */
    selfSignFinish(res: Gio.AsyncResult): string | null
    /**
     * Sets the list of approved firmware.
     * @param checksums Array of checksums
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    setApprovedFirmware(checksums: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the list of approved firmware.
     * @param checksums firmware checksums
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    setApprovedFirmwareAsync(checksums: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_set_approved_firmware_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    setApprovedFirmwareFinish(res: Gio.AsyncResult): boolean
    /**
     * Sets the list of approved firmware.
     * @param checksums Array of checksums
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    setBlockedFirmware(checksums: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the list of blocked firmware.
     * @param checksums firmware checksums
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    setBlockedFirmwareAsync(checksums: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_set_blocked_firmware_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    setBlockedFirmwareFinish(res: Gio.AsyncResult): boolean
    /**
     * Sets the features the client supports. This allows firmware to depend on
     * specific front-end features, for instance showing the user an image on
     * how to detach the hardware.
     * 
     * Clients can call this none or multiple times.
     * @param featureFlags #FwupdFeatureFlags, e.g. %FWUPD_FEATURE_FLAG_UPDATE_TEXT
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    setFeatureFlags(featureFlags: FeatureFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the features the client supports. This allows firmware to depend on
     * specific front-end features, for instance showing the user an image on
     * how to detach the hardware.
     * @param featureFlags #FwupdFeatureFlags, e.g. %FWUPD_FEATURE_FLAG_UPDATE_TEXT
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    setFeatureFlagsAsync(featureFlags: FeatureFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_set_feature_flags_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    setFeatureFlagsFinish(res: Gio.AsyncResult): boolean
    /**
     * Sets the internal #GMainContext to use for returning progress signals.
     * @param mainCtx #GMainContext or %NULL to use the global default main context
     */
    setMainContext(mainCtx: GLib.MainContext | null): void
    /**
     * Manually sets the user agent that is used for downloading. The user agent
     * should contain the runtime version of fwupd somewhere in the provided string.
     * @param userAgent the user agent ID, e.g. `gnome-software/3.34.1`
     */
    setUserAgent(userAgent: string | null): void
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
     * @param packageName client program name, e.g. "gnome-software"
     * @param packageVersion client program version, e.g. "3.28.1"
     */
    setUserAgentForPackage(packageName: string | null, packageVersion: string | null): void
    /**
     * Unlocks a specific device so firmware can be read or wrote.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    unlock(deviceId: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Unlocks a specific device so firmware can be read or wrote.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    unlockAsync(deviceId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_unlock_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    unlockFinish(res: Gio.AsyncResult): boolean
    /**
     * Updates the metadata. This allows a session process to download the metadata
     * and metadata signing file to be passed into the daemon to be checked and
     * parsed.
     * 
     * The `remote_id` allows the firmware to be tagged so that the remote can be
     * matched when the firmware is downloaded.
     * @param remoteId the remote ID, e.g. `lvfs-testing`
     * @param metadataFn the XML metadata filename
     * @param signatureFn the GPG signature file
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    updateMetadata(remoteId: string | null, metadataFn: string | null, signatureFn: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Updates the metadata. This allows a session process to download the metadata
     * and metadata signing file to be passed into the daemon to be checked and
     * parsed.
     * 
     * The `remote_id` allows the firmware to be tagged so that the remote can be
     * matched when the firmware is downloaded.
     * @param remoteId remote ID, e.g. `lvfs-testing`
     * @param metadata XML metadata data
     * @param signature signature data
     * @param cancellable #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    updateMetadataBytes(remoteId: string | null, metadata: any, signature: any, cancellable: Gio.Cancellable | null): boolean
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
     * fwupd_client_set_main_context().
     * @param remoteId remote ID, e.g. `lvfs-testing`
     * @param metadata XML metadata data
     * @param signature signature data
     * @param cancellable #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    updateMetadataBytesAsync(remoteId: string | null, metadata: any, signature: any, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_update_metadata_bytes_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    updateMetadataBytesFinish(res: Gio.AsyncResult): boolean
    /**
     * Uploads data to a remote server. The fwupd_client_set_user_agent() function
     * should be called before this method is used.
     * @param url the remote URL
     * @param payload payload string
     * @param signature signature string
     * @param flags #FwupdClientDownloadFlags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
     * @param cancellable the #GCancellable, or %NULL
     * @returns response data, or %NULL for error
     */
    uploadBytes(url: string | null, payload: string | null, signature: string | null, flags: ClientUploadFlags, cancellable: Gio.Cancellable | null): any
    /**
     * Uploads data to a remote server. The fwupd_client_set_user_agent() function
     * should be called before this method is used.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * 
     * NOTE: This method is thread-safe, but progress signals will be
     * emitted in the global default main context, if not explicitly set with
     * fwupd_client_set_main_context().
     * @param url the remote URL
     * @param payload payload string
     * @param signature signature string
     * @param flags #FwupdClientDownloadFlags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    uploadBytesAsync(url: string | null, payload: string | null, signature: string | null, flags: ClientUploadFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_upload_bytes_async().
     * @param res the #GAsyncResult
     * @returns response data, or %NULL for error
     */
    uploadBytesFinish(res: Gio.AsyncResult): any
    /**
     * Verify a specific device.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for verification success
     */
    verify(deviceId: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Verify a specific device.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    verifyAsync(deviceId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_verify_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    verifyFinish(res: Gio.AsyncResult): boolean
    /**
     * Update the verification record for a specific device.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for verification success
     */
    verifyUpdate(deviceId: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Update the verification record for a specific device.
     * @param deviceId the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    verifyUpdateAsync(deviceId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_verify_update_async().
     * @param res the #GAsyncResult
     * @returns %TRUE for success
     */
    verifyUpdateFinish(res: Gio.AsyncResult): boolean

    // Own virtual methods of Fwupd-2.0.Fwupd.Client

    changed(): void
    deviceAdded(result: Device): void
    deviceChanged(result: Device): void
    deviceRemoved(result: Device): void
    statusChanged(status: Status): void

    // Own signals of Fwupd-2.0.Fwupd.Client

    connect(sigName: "changed", callback: Client.ChangedSignalCallback): number
    on(sigName: "changed", callback: Client.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Client.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Client.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "device-added", callback: Client.DeviceAddedSignalCallback): number
    on(sigName: "device-added", callback: Client.DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: Client.DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: Client.DeviceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-added", ...args: any[]): void
    connect(sigName: "device-changed", callback: Client.DeviceChangedSignalCallback): number
    on(sigName: "device-changed", callback: Client.DeviceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-changed", callback: Client.DeviceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-changed", callback: Client.DeviceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-changed", ...args: any[]): void
    connect(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback): number
    on(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-removed", ...args: any[]): void
    connect(sigName: "status-changed", callback: Client.StatusChangedSignalCallback): number
    on(sigName: "status-changed", callback: Client.StatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: Client.StatusChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: Client.StatusChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "status-changed", ...args: any[]): void

    // Class property signals of Fwupd-2.0.Fwupd.Client

    connect(sigName: "notify::daemon-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::daemon-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::daemon-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::daemon-version", ...args: any[]): void
    connect(sigName: "notify::host-machine-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::host-machine-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host-machine-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host-machine-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host-machine-id", ...args: any[]): void
    connect(sigName: "notify::host-product", callback: (...args: any[]) => void): number
    on(sigName: "notify::host-product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host-product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host-product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host-product", ...args: any[]): void
    connect(sigName: "notify::host-security-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::host-security-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host-security-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host-security-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host-security-id", ...args: any[]): void
    connect(sigName: "notify::interactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::interactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interactive", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (...args: any[]) => void): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::soup-session", callback: (...args: any[]) => void): number
    on(sigName: "notify::soup-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::soup-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::soup-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::soup-session", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::tainted", callback: (...args: any[]) => void): number
    on(sigName: "notify::tainted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tainted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tainted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tainted", ...args: any[]): void
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

class Client extends GObject.Object {

    // Own properties of Fwupd-2.0.Fwupd.Client

    static name: string

    // Constructors of Fwupd-2.0.Fwupd.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Creates a new client.
     * @constructor 
     * @returns a new #FwupdClient
     */
    constructor() 
    /**
     * Creates a new client.
     * @constructor 
     * @returns a new #FwupdClient
     */
    static new(): Client
    _init(config?: Client.ConstructorProperties): void
}

module Device {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Fwupd-2.0.Fwupd.Device

        flags?: number | null
        parent?: Device | null
        protocol?: string | null
        status?: number | null
        updateState?: number | null
        versionFormat?: number | null
    }

}

interface Device {

    // Own properties of Fwupd-2.0.Fwupd.Device

    flags: number
    parent: Device
    protocol: string | null
    status: number
    updateState: number
    versionFormat: number
    __gtype__: number

    // Own fields of Fwupd-2.0.Fwupd.Device

    parentInstance: GObject.Object

    // Owm methods of Fwupd-2.0.Fwupd.Device

    /**
     * Sets the device checksum.
     * @param checksum the device checksum
     */
    addChecksum(checksum: string | null): void
    /**
     * Adds a child device. An child device is logically linked to the primary
     * device in some way.
     * 
     * NOTE: You should never call this function from user code, it is for daemon
     * use only. Only use fwupd_device_set_parent() to set up a logical tree.
     * @param child Another #FwupdDevice
     */
    addChild(child: Device): void
    /**
     * Adds a specific device flag to the device.
     * @param flag the #FwupdDeviceFlags
     */
    addFlag(flag: DeviceFlags): void
    /**
     * Adds the GUID if it does not already exist.
     * @param guid the GUID, e.g. `2082b5e0-7a64-478a-b1b2-e3404fab6dad`
     */
    addGuid(guid: string | null): void
    /**
     * Adds the icon name if it does not already exist.
     * @param icon the name, e.g. `input-mouse` or `/usr/share/icons/foo.png`
     */
    addIcon(icon: string | null): void
    /**
     * Adds the InstanceID if it does not already exist.
     * @param instanceId the GUID, e.g. `PCI\VEN_10EC&DEV_525A`
     */
    addInstanceId(instanceId: string | null): void
    /**
     * Adds a release for this device.
     * @param release a #FwupdRelease
     */
    addRelease(release: Release): void
    /**
     * Adds a device vendor ID.
     * @param vendorId the ID, e.g. 'USB:0x1234'
     */
    addVendorId(vendorId: string | null): void
    /**
     * Comparison function for comparing two FwupdDevice objects.
     * @param device2 a #FwupdDevice
     * @returns negative, 0 or positive
     */
    compare(device2: Device): number
    /**
     * Gets the current device branch.
     * @returns the device branch, or %NULL if unset
     */
    getBranch(): string | null
    /**
     * Gets the device checksums.
     * @returns the checksums, which may be empty
     */
    getChecksums(): string[]
    /**
     * Gets the device children. These can only be assigned using fwupd_device_set_parent().
     * @returns the children, which may be empty
     */
    getChildren(): Device[]
    /**
     * Gets when the device was created.
     * @returns the UNIX time, or 0 if unset
     */
    getCreated(): number
    /**
     * Gets the device description in AppStream markup format.
     * @returns the device description, or %NULL if unset
     */
    getDescription(): string | null
    /**
     * Gets the device flags.
     * @returns the device flags, or 0 if unset
     */
    getFlags(): number
    /**
     * Gets the number of flash cycles left on the device
     * @returns the flash cycles left, or %NULL if unset
     */
    getFlashesLeft(): number
    /**
     * Gets the default GUID.
     * @returns the GUID, or %NULL if unset
     */
    getGuidDefault(): string | null
    /**
     * Gets the GUIDs.
     * @returns the GUIDs
     */
    getGuids(): string[]
    /**
     * Gets the icon names to use for the device.
     * 
     * NOTE: Icons specified without a full path are stock icons and should
     * be loaded from the users icon theme.
     * @returns an array of icon names
     */
    getIcons(): string[]
    /**
     * Gets the ID.
     * @returns the ID, or %NULL if unset
     */
    getId(): string | null
    /**
     * Gets the time estimate for firmware installation (in seconds)
     * @returns the estimated time to flash this device (or 0 if unset)
     */
    getInstallDuration(): number
    /**
     * Gets the InstanceIDs.
     * @returns the InstanceID
     */
    getInstanceIds(): string[]
    /**
     * Gets when the device was modified.
     * @returns the UNIX time, or 0 if unset
     */
    getModified(): number
    /**
     * Gets the device name.
     * @returns the device name, or %NULL if unset
     */
    getName(): string | null
    /**
     * Gets the parent.
     * @returns the parent device, or %NULL if unset
     */
    getParent(): Device
    /**
     * Gets the ID.
     * @returns the parent ID, or %NULL if unset
     */
    getParentId(): string | null
    /**
     * Gets the plugin that created the device.
     * @returns the plugin name, or %NULL if unset
     */
    getPlugin(): string | null
    /**
     * Gets the protocol that the device uses for updating.
     * @returns the protocol name, or %NULL if unset
     */
    getProtocol(): string | null
    /**
     * Gets the default release for this device.
     * @returns the #FwupdRelease, or %NULL if not set
     */
    getReleaseDefault(): Release
    /**
     * Gets all the releases for this device.
     * @returns array of releases
     */
    getReleases(): Release[]
    /**
     * Gets the serial number for the device.
     * @returns a string value, or %NULL if never set.
     */
    getSerial(): string | null
    /**
     * Returns what the device is currently doing.
     * @returns the status value, e.g. %FWUPD_STATUS_DEVICE_WRITE
     */
    getStatus(): Status
    /**
     * Gets the device summary.
     * @returns the device summary, or %NULL if unset
     */
    getSummary(): string | null
    /**
     * Gets the update error.
     * @returns the update error, or %NULL if unset
     */
    getUpdateError(): string | null
    /**
     * Gets the update image.
     * @returns the update image URL, or %NULL if unset
     */
    getUpdateImage(): string | null
    /**
     * Gets the update message.
     * @returns the update message, or %NULL if unset
     */
    getUpdateMessage(): string | null
    /**
     * Gets the update state.
     * @returns the update state, or %FWUPD_UPDATE_STATE_UNKNOWN if unset
     */
    getUpdateState(): UpdateState
    /**
     * Gets the device vendor.
     * @returns the device vendor, or %NULL if unset
     */
    getVendor(): string | null
    /**
     * Gets the combined device vendor ID.
     * @returns the device vendor, e.g. 'USB:0x1234|PCI:0x5678', or %NULL if unset
     */
    getVendorId(): string | null
    /**
     * Gets the device vendor ID.
     * @returns the device vendor ID
     */
    getVendorIds(): string[]
    /**
     * Gets the device version.
     * @returns the device version, or %NULL if unset
     */
    getVersion(): string | null
    /**
     * Gets the version of the bootloader.
     * @returns the device version_bootloader, or %NULL if unset
     */
    getVersionBootloader(): string | null
    /**
     * Gets the bootloader version of firmware the device will accept in raw format.
     * @returns integer version number, or %0 if unset
     */
    getVersionBootloaderRaw(): number
    /**
     * Gets the update state.
     * @returns the update state, or %FWUPD_VERSION_FORMAT_UNKNOWN if unset
     */
    getVersionFormat(): VersionFormat
    /**
     * Gets the lowest version of firmware the device will accept.
     * @returns the device version_lowest, or %NULL if unset
     */
    getVersionLowest(): string | null
    /**
     * Gets the lowest version of firmware the device will accept in raw format.
     * @returns integer version number, or %0 if unset
     */
    getVersionLowestRaw(): number
    /**
     * Gets the raw version number from the hardware before converted to a string.
     * @returns the hardware version, or 0 if unset
     */
    getVersionRaw(): number
    /**
     * Finds if the device has a specific device flag.
     * @param flag the #FwupdDeviceFlags
     * @returns %TRUE if the flag is set
     */
    hasFlag(flag: DeviceFlags): boolean
    /**
     * Finds out if the device has this specific GUID.
     * @param guid the GUID, e.g. `2082b5e0-7a64-478a-b1b2-e3404fab6dad`
     * @returns %TRUE if the GUID is found
     */
    hasGuid(guid: string | null): boolean
    /**
     * Finds out if the device has this specific InstanceID.
     * @param instanceId the InstanceID, e.g. `PCI\VEN_10EC&DEV_525A`
     * @returns %TRUE if the InstanceID is found
     */
    hasInstanceId(instanceId: string | null): boolean
    /**
     * Finds out if the device has this specific vendor ID.
     * @param vendorId the ID, e.g. 'USB:0x1234'
     * @returns %TRUE if the ID is found
     */
    hasVendorId(vendorId: string | null): boolean
    /**
     * Copy all properties from the donor object if they have not already been set.
     * @param donor Another #FwupdDevice
     */
    incorporate(donor: Device): void
    /**
     * Removes a specific device flag from the device.
     * @param flag the #FwupdDeviceFlags
     */
    removeFlag(flag: DeviceFlags): void
    /**
     * Sets the current device branch.
     * @param branch the device one line branch
     */
    setBranch(branch: string | null): void
    /**
     * Sets when the device was created.
     * @param created the UNIX time
     */
    setCreated(created: number): void
    /**
     * Sets the device description.
     * @param description the description in AppStream markup format
     */
    setDescription(description: string | null): void
    /**
     * Sets the device flags.
     * @param flags the device flags, e.g. %FWUPD_DEVICE_FLAG_REQUIRE_AC
     */
    setFlags(flags: number): void
    /**
     * Sets the number of flash cycles left on the device
     * @param flashesLeft the description
     */
    setFlashesLeft(flashesLeft: number): void
    /**
     * Sets the ID.
     * @param id the device ID, e.g. `USB:foo`
     */
    setId(id: string | null): void
    /**
     * Sets the time estimate for firmware installation (in seconds)
     * @param duration The amount of time
     */
    setInstallDuration(duration: number): void
    /**
     * Sets when the device was modified.
     * @param modified the UNIX time
     */
    setModified(modified: number): void
    /**
     * Sets the device name.
     * @param name the device name, e.g. `ColorHug2`
     */
    setName(name: string | null): void
    /**
     * Sets the parent. Only used internally.
     * @param parent another #FwupdDevice, or %NULL
     */
    setParent(parent: Device): void
    /**
     * Sets the parent ID.
     * @param parentId the device ID, e.g. `USB:foo`
     */
    setParentId(parentId: string | null): void
    /**
     * Sets the plugin that created the device.
     * @param plugin the plugin name, e.g. `colorhug`
     */
    setPlugin(plugin: string | null): void
    /**
     * Sets the protocol that is used to update the device.
     * @param protocol the protocol name, e.g. `com.hughski.colorhug`
     */
    setProtocol(protocol: string | null): void
    /**
     * Sets the serial number for the device.
     * @param serial the device serial number
     */
    setSerial(serial: string | null): void
    /**
     * Sets what the device is currently doing.
     * @param status the status value, e.g. %FWUPD_STATUS_DEVICE_WRITE
     */
    setStatus(status: Status): void
    /**
     * Sets the device summary.
     * @param summary the device one line summary
     */
    setSummary(summary: string | null): void
    /**
     * Sets the update error.
     * @param updateError the update error string
     */
    setUpdateError(updateError: string | null): void
    /**
     * Sets the update image.
     * @param updateImage the update image URL
     */
    setUpdateImage(updateImage: string | null): void
    /**
     * Sets the update message.
     * @param updateMessage the update message string
     */
    setUpdateMessage(updateMessage: string | null): void
    /**
     * Sets the update state.
     * @param updateState the state, e.g. %FWUPD_UPDATE_STATE_PENDING
     */
    setUpdateState(updateState: UpdateState): void
    /**
     * Sets the device vendor.
     * @param vendor the description
     */
    setVendor(vendor: string | null): void
    /**
     * Sets the device vendor ID.
     * @param vendorId the ID, e.g. 'USB:0x1234' or 'USB:0x1234|PCI:0x5678'
     */
    setVendorId(vendorId: string | null): void
    /**
     * Sets the device version.
     * @param version the device version, e.g. `1.2.3`
     */
    setVersion(version: string | null): void
    /**
     * Sets the bootloader version.
     * @param versionBootloader the description
     */
    setVersionBootloader(versionBootloader: string | null): void
    /**
     * Sets the raw bootloader version number from the hardware before converted to a string.
     * @param versionBootloaderRaw the raw hardware version
     */
    setVersionBootloaderRaw(versionBootloaderRaw: number): void
    /**
     * Sets the update state.
     * @param versionFormat the state, e.g. %FWUPD_VERSION_FORMAT_PENDING
     */
    setVersionFormat(versionFormat: VersionFormat): void
    /**
     * Sets the lowest version of firmware the device will accept.
     * @param versionLowest the description
     */
    setVersionLowest(versionLowest: string | null): void
    /**
     * Sets the raw lowest version number from the hardware before converted to a string.
     * @param versionLowestRaw the raw hardware version
     */
    setVersionLowestRaw(versionLowestRaw: number): void
    /**
     * Sets the raw version number from the hardware before converted to a string.
     * @param versionRaw the raw hardware version
     */
    setVersionRaw(versionRaw: number): void
    /**
     * Builds a text representation of the object.
     * @returns text, or %NULL for invalid
     */
    toString(): string | null
    /**
     * Creates a GVariant from the device data omitting sensitive fields
     * @returns the GVariant, or %NULL for error
     */
    toVariant(): GLib.Variant
    /**
     * Creates a GVariant from the device data.
     * Optionally provides additional data based upon flags
     * @param flags #FwupdDeviceFlags for the call
     * @returns the GVariant, or %NULL for error
     */
    toVariantFull(flags: DeviceFlags): GLib.Variant

    // Class property signals of Fwupd-2.0.Fwupd.Device

    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::update-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-state", ...args: any[]): void
    connect(sigName: "notify::version-format", callback: (...args: any[]) => void): number
    on(sigName: "notify::version-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version-format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version-format", ...args: any[]): void
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

class Device extends GObject.Object {

    // Own properties of Fwupd-2.0.Fwupd.Device

    static name: string

    // Constructors of Fwupd-2.0.Fwupd.Device

    constructor(config?: Device.ConstructorProperties) 
    /**
     * Creates a new device.
     * @constructor 
     * @returns a new #FwupdDevice
     */
    constructor() 
    /**
     * Creates a new device.
     * @constructor 
     * @returns a new #FwupdDevice
     */
    static new(): Device
    _init(config?: Device.ConstructorProperties): void
    /**
     * Sets the parent object on all devices in the array using the parent-id.
     * @param devices devices
     */
    static arrayEnsureParents(devices: Device[]): void
    /**
     * Creates an array of new devices using packed data.
     * @param value a #GVariant
     * @returns devices, or %NULL if @value was invalid
     */
    static arrayFromVariant(value: GLib.Variant): Device[]
    /**
     * Converts a string to a #FwupdDeviceFlags.
     * @param deviceFlag A string, e.g. `require-ac`
     * @returns enumerated value
     */
    static flagFromString(deviceFlag: string | null): DeviceFlags
    /**
     * Converts a #FwupdDeviceFlags to a string.
     * @param deviceFlag A #FwupdDeviceFlags, e.g. %FWUPD_DEVICE_FLAG_REQUIRE_AC
     * @returns identifier string
     */
    static flagToString(deviceFlag: DeviceFlags): string | null
    /**
     * Creates a new device using packed data.
     * @param value a #GVariant
     * @returns a new #FwupdDevice, or %NULL if @value was invalid
     */
    static fromVariant(value: GLib.Variant): Device
    /**
     * Checks the string is a valid non-partial device ID. It is important to note
     * that the wildcard ID of `*` is not considered a valid ID in this function and
     * the client must check for this manually if this should be allowed.
     * @param deviceId string to check, e.g. `d3fae86d95e5d56626129d00e332c4b8dac95442`
     * @returns %TRUE if @guid was a fwupd device ID, %FALSE otherwise
     */
    static idIsValid(deviceId: string | null): boolean
}

module Plugin {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Fwupd-2.0.Fwupd.Plugin

        flags?: number | null
        name?: string | null
    }

}

interface Plugin {

    // Own properties of Fwupd-2.0.Fwupd.Plugin

    flags: number
    name: string | null
    __gtype__: number

    // Own fields of Fwupd-2.0.Fwupd.Plugin

    parentInstance: GObject.Object

    // Owm methods of Fwupd-2.0.Fwupd.Plugin

    /**
     * Adds a specific plugin flag to the plugin.
     * @param flag the #FwupdPluginFlags
     */
    addFlag(flag: PluginFlags): void
    /**
     * Gets the plugin flags.
     * @returns the plugin flags, or 0 if unset
     */
    getFlags(): number
    /**
     * Gets the plugin name.
     * @returns the plugin name, or %NULL if unset
     */
    getName(): string | null
    /**
     * Finds if the plugin has a specific plugin flag.
     * @param flag the #FwupdPluginFlags
     * @returns %TRUE if the flag is set
     */
    hasFlag(flag: PluginFlags): boolean
    /**
     * Removes a specific plugin flag from the plugin.
     * @param flag the #FwupdPluginFlags
     */
    removeFlag(flag: PluginFlags): void
    /**
     * Sets the plugin flags.
     * @param flags the plugin flags, e.g. %FWUPD_PLUGIN_FLAG_CAPSULES_UNSUPPORTED
     */
    setFlags(flags: number): void
    /**
     * Sets the plugin name.
     * @param name the plugin name, e.g. `bios`
     */
    setName(name: string | null): void
    /**
     * Builds a text representation of the object.
     * @returns text, or %NULL for invalid
     */
    toString(): string | null
    /**
     * Creates a GVariant from the plugin data omitting sensitive fields
     * @returns the GVariant, or %NULL for error
     */
    toVariant(): GLib.Variant

    // Class property signals of Fwupd-2.0.Fwupd.Plugin

    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
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

class Plugin extends GObject.Object {

    // Own properties of Fwupd-2.0.Fwupd.Plugin

    static name: string

    // Constructors of Fwupd-2.0.Fwupd.Plugin

    constructor(config?: Plugin.ConstructorProperties) 
    /**
     * Creates a new plugin.
     * @constructor 
     * @returns a new #FwupdPlugin
     */
    constructor() 
    /**
     * Creates a new plugin.
     * @constructor 
     * @returns a new #FwupdPlugin
     */
    static new(): Plugin
    _init(config?: Plugin.ConstructorProperties): void
    /**
     * Creates an array of new plugins using packed data.
     * @param value a #GVariant
     * @returns plugins, or %NULL if @value was invalid
     */
    static arrayFromVariant(value: GLib.Variant): Plugin[]
    /**
     * Converts a string to a #FwupdPluginFlags.
     * @param pluginFlag A string, e.g. `require-ac`
     * @returns enumerated value
     */
    static flagFromString(pluginFlag: string | null): PluginFlags
    /**
     * Converts a #FwupdDeviceFlags to a string.
     * @param pluginFlag A #FwupdPluginFlags, e.g. %FWUPD_DEVICE_FLAG_REQUIRE_AC
     * @returns identifier string
     */
    static flagToString(pluginFlag: PluginFlags): string | null
    /**
     * Creates a new plugin using packed data.
     * @param value a #GVariant
     * @returns a new #FwupdPlugin, or %NULL if @value was invalid
     */
    static fromVariant(value: GLib.Variant): Plugin
}

module Release {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Release {

    // Own properties of Fwupd-2.0.Fwupd.Release

    __gtype__: number

    // Own fields of Fwupd-2.0.Fwupd.Release

    parentInstance: GObject.Object

    // Owm methods of Fwupd-2.0.Fwupd.Release

    /**
     * Adds the update category.
     * @param category the update category, e.g. `X-EmbeddedController`
     */
    addCategory(category: string | null): void
    /**
     * Sets the update checksum.
     * @param checksum the update checksum
     */
    addChecksum(checksum: string | null): void
    /**
     * Adds a specific release flag to the release.
     * @param flag the #FwupdReleaseFlags
     */
    addFlag(flag: ReleaseFlags): void
    /**
     * Adds an resolved issue to this release.
     * @param issue the update issue, e.g. `CVE-2019-12345`
     */
    addIssue(issue: string | null): void
    /**
     * Adds an update URI, i.e. where you can download the firmware from.
     * @param location the update URI
     */
    addLocation(location: string | null): void
    /**
     * Sets multiple release metadata items.
     * @param hash the key-values
     */
    addMetadata(hash: GLib.HashTable): void
    /**
     * Sets a release metadata item.
     * @param key the key
     * @param value the value
     */
    addMetadataItem(key: string | null, value: string | null): void
    /**
     * Gets the AppStream ID.
     * @returns the AppStream ID, or %NULL if unset
     */
    getAppstreamId(): string | null
    /**
     * Gets the update branch.
     * @returns the alternate branch, or %NULL if unset
     */
    getBranch(): string | null
    /**
     * Gets the release categories.
     * @returns the categories, which may be empty
     */
    getCategories(): string[]
    /**
     * Gets the release checksums.
     * @returns the checksums, which may be empty
     */
    getChecksums(): string[]
    /**
     * Gets when the update was created.
     * @returns UTC timestamp in UNIX format, or 0 if unset
     */
    getCreated(): number
    /**
     * Gets the update description in AppStream markup format.
     * @returns the update description, or %NULL if unset
     */
    getDescription(): string | null
    /**
     * Gets the optional text caption used to manually detach the device.
     * @returns the string caption, or %NULL if unset
     */
    getDetachCaption(): string | null
    /**
     * Gets the optional image used to manually detach the device.
     * @returns the URI, or %NULL if unset
     */
    getDetachImage(): string | null
    /**
     * Gets the URL for the online update notes.
     * @returns the update URL, or %NULL if unset
     */
    getDetailsUrl(): string | null
    /**
     * Gets the update filename.
     * @returns the update filename, or %NULL if unset
     */
    getFilename(): string | null
    /**
     * Gets the release flags.
     * @returns the release flags, or 0 if unset
     */
    getFlags(): ReleaseFlags
    /**
     * Gets the update homepage.
     * @returns the update homepage, or %NULL if unset
     */
    getHomepage(): string | null
    /**
     * Gets the time estimate for firmware installation (in seconds)
     * @returns the estimated time to flash this release (or 0 if unset)
     */
    getInstallDuration(): number
    /**
     * Gets the list of issues fixed in this release.
     * @returns the issues, which may be empty
     */
    getIssues(): string[]
    /**
     * Gets the update license.
     * @returns the update license, or %NULL if unset
     */
    getLicense(): string | null
    /**
     * Gets the update URI, i.e. where you can download the firmware from.
     * 
     * Typically the first URI will be the main HTTP mirror, but all URIs may not
     * be valid HTTP URIs. For example, "ipns://QmSrPmba" is valid here.
     * @returns the URIs
     */
    getLocations(): string[]
    /**
     * Gets the release metadata.
     * @returns the metadata, which may be empty
     */
    getMetadata(): GLib.HashTable
    /**
     * Gets a release metadata item.
     * @param key the key
     * @returns the value, or %NULL if unset
     */
    getMetadataItem(key: string | null): string | null
    /**
     * Gets the update name.
     * @returns the update name, or %NULL if unset
     */
    getName(): string | null
    /**
     * Gets the update variant suffix.
     * @returns the update variant, or %NULL if unset
     */
    getNameVariantSuffix(): string | null
    /**
     * Gets the update protocol.
     * @returns the update protocol, or %NULL if unset
     */
    getProtocol(): string | null
    /**
     * Gets the remote ID that can be used for downloading.
     * @returns the ID, or %NULL if unset
     */
    getRemoteId(): string | null
    /**
     * Gets the update size.
     * @returns the update size in bytes, or 0 if unset
     */
    getSize(): number
    /**
     * Gets the URL of the source code used to build this release.
     * @returns the update source_url, or %NULL if unset
     */
    getSourceUrl(): string | null
    /**
     * Gets the update summary.
     * @returns the update summary, or %NULL if unset
     */
    getSummary(): string | null
    /**
     * Gets the trust level of the release.
     * @returns the trust bitfield, e.g. #FWUPD_TRUST_FLAG_PAYLOAD
     */
    getTrustFlags(): TrustFlags
    /**
     * Gets the update image.
     * @returns the update image URL, or %NULL if unset
     */
    getUpdateImage(): string | null
    /**
     * Gets the update message.
     * @returns the update message, or %NULL if unset
     */
    getUpdateMessage(): string | null
    /**
     * Gets the release urgency.
     * @returns the release urgency, or 0 if unset
     */
    getUrgency(): ReleaseUrgency
    /**
     * Gets the default update URI.
     * @returns the update URI, or %NULL if unset
     */
    getUri(): string | null
    /**
     * Gets the update vendor.
     * @returns the update vendor, or %NULL if unset
     */
    getVendor(): string | null
    /**
     * Gets the update version.
     * @returns the update version, or %NULL if unset
     */
    getVersion(): string | null
    /**
     * Finds out if the release has the update category.
     * @param category the update category, e.g. `X-EmbeddedController`
     * @returns %TRUE if the release matches
     */
    hasCategory(category: string | null): boolean
    /**
     * Finds out if the release has the update checksum.
     * @param checksum the update checksum
     * @returns %TRUE if the release matches
     */
    hasChecksum(checksum: string | null): boolean
    /**
     * Finds if the release has a specific release flag.
     * @param flag the #FwupdReleaseFlags
     * @returns %TRUE if the flag is set
     */
    hasFlag(flag: ReleaseFlags): boolean
    /**
     * Removes a specific release flag from the release.
     * @param flag the #FwupdReleaseFlags
     */
    removeFlag(flag: ReleaseFlags): void
    /**
     * Sets the AppStream ID.
     * @param appstreamId the AppStream component ID, e.g. `org.hughski.ColorHug2.firmware`
     */
    setAppstreamId(appstreamId: string | null): void
    /**
     * Sets the alternate branch.
     * @param branch the update one line branch
     */
    setBranch(branch: string | null): void
    /**
     * Sets when the update was created.
     * @param created UTC timestamp in UNIX format
     */
    setCreated(created: number): void
    /**
     * Sets the update description.
     * @param description the update description in AppStream markup format
     */
    setDescription(description: string | null): void
    /**
     * Sets the optional text caption used to manually detach the device.
     * @param detachCaption string caption
     */
    setDetachCaption(detachCaption: string | null): void
    /**
     * Sets the optional image used to manually detach the device.
     * @param detachImage a fully qualified URI
     */
    setDetachImage(detachImage: string | null): void
    /**
     * Sets the URL for the online update notes.
     * @param detailsUrl the URL
     */
    setDetailsUrl(detailsUrl: string | null): void
    /**
     * Sets the update filename.
     * @param filename the update filename on disk
     */
    setFilename(filename: string | null): void
    /**
     * Sets the release flags.
     * @param flags the release flags, e.g. %FWUPD_RELEASE_FLAG_TRUSTED_PAYLOAD
     */
    setFlags(flags: ReleaseFlags): void
    /**
     * Sets the update homepage.
     * @param homepage the description
     */
    setHomepage(homepage: string | null): void
    /**
     * Sets the time estimate for firmware installation (in seconds)
     * @param duration The amount of time
     */
    setInstallDuration(duration: number): void
    /**
     * Sets the update license.
     * @param license the description
     */
    setLicense(license: string | null): void
    /**
     * Sets the update name.
     * @param name the description
     */
    setName(name: string | null): void
    /**
     * Sets the update variant suffix.
     * @param nameVariantSuffix the description
     */
    setNameVariantSuffix(nameVariantSuffix: string | null): void
    /**
     * Sets the update protocol.
     * @param protocol the update protocol, e.g. `org.usb.dfu`
     */
    setProtocol(protocol: string | null): void
    /**
     * Sets the remote ID that can be used for downloading.
     * @param remoteId the release ID, e.g. `USB:foo`
     */
    setRemoteId(remoteId: string | null): void
    /**
     * Sets the update size.
     * @param size the update size in bytes
     */
    setSize(size: number): void
    /**
     * Sets the URL of the source code used to build this release.
     * @param sourceUrl the URL
     */
    setSourceUrl(sourceUrl: string | null): void
    /**
     * Sets the update summary.
     * @param summary the update one line summary
     */
    setSummary(summary: string | null): void
    /**
     * Sets the trust level of the release.
     * @param trustFlags the bitfield, e.g. #FWUPD_TRUST_FLAG_PAYLOAD
     */
    setTrustFlags(trustFlags: TrustFlags): void
    /**
     * Sets the update image.
     * @param updateImage the update image URL
     */
    setUpdateImage(updateImage: string | null): void
    /**
     * Sets the update message.
     * @param updateMessage the update message string
     */
    setUpdateMessage(updateMessage: string | null): void
    /**
     * Sets the release urgency.
     * @param urgency the release urgency, e.g. %FWUPD_RELEASE_FLAG_TRUSTED_PAYLOAD
     */
    setUrgency(urgency: ReleaseUrgency): void
    /**
     * Sets the update URI, i.e. where you can download the firmware from.
     * @param uri the update URI
     */
    setUri(uri: string | null): void
    /**
     * Sets the update vendor.
     * @param vendor the vendor name, e.g. `Hughski Limited`
     */
    setVendor(vendor: string | null): void
    /**
     * Sets the update version.
     * @param version the update version, e.g. `1.2.4`
     */
    setVersion(version: string | null): void
    /**
     * Builds a text representation of the object.
     * @returns text, or %NULL for invalid
     */
    toString(): string | null
    /**
     * Creates a GVariant from the release data.
     * @returns the GVariant, or %NULL for error
     */
    toVariant(): GLib.Variant

    // Class property signals of Fwupd-2.0.Fwupd.Release

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

class Release extends GObject.Object {

    // Own properties of Fwupd-2.0.Fwupd.Release

    static name: string

    // Constructors of Fwupd-2.0.Fwupd.Release

    constructor(config?: Release.ConstructorProperties) 
    /**
     * Creates a new release.
     * @constructor 
     * @returns a new #FwupdRelease
     */
    constructor() 
    /**
     * Creates a new release.
     * @constructor 
     * @returns a new #FwupdRelease
     */
    static new(): Release
    _init(config?: Release.ConstructorProperties): void
    /**
     * Creates an array of new releases using packed data.
     * @param value a #GVariant
     * @returns releases, or %NULL if @value was invalid
     */
    static arrayFromVariant(value: GLib.Variant): Release[]
    /**
     * Converts a string to a #FwupdReleaseFlags.
     * @param releaseFlag A string, e.g. `trusted-payload`
     * @returns enumerated value
     */
    static flagFromString(releaseFlag: string | null): ReleaseFlags
    /**
     * Converts a #FwupdReleaseFlags to a string.
     * @param releaseFlag A #FwupdReleaseFlags, e.g. %FWUPD_RELEASE_FLAG_TRUSTED_PAYLOAD
     * @returns identifier string
     */
    static flagToString(releaseFlag: ReleaseFlags): string | null
    /**
     * Creates a new release using packed data.
     * @param value a #GVariant
     * @returns a new #FwupdRelease, or %NULL if @value was invalid
     */
    static fromVariant(value: GLib.Variant): Release
    /**
     * Converts a string to an enumerated value.
     * @param releaseUrgency A string, e.g. `low`
     * @returns enumerated value
     */
    static urgencyFromString(releaseUrgency: string | null): ReleaseUrgency
    /**
     * Converts an enumerated value to a string.
     * @param releaseUrgency A #FwupdReleaseUrgency, e.g. %FWUPD_RELEASE_URGENCY_HIGH
     * @returns identifier string
     */
    static urgencyToString(releaseUrgency: ReleaseUrgency): string | null
}

module Remote {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Fwupd-2.0.Fwupd.Remote

        /**
         * If firmware from the remote should be checked against the system
         * list of approved firmware.
         */
        approvalRequired?: boolean | null
        /**
         * The behavior for auto-uploading reports.
         */
        automaticReports?: boolean | null
        /**
         * The behavior for auto-uploading security reports.
         */
        automaticSecurityReports?: boolean | null
        /**
         * If the remote is enabled and should be used.
         */
        enabled?: boolean | null
        /**
         * The remote ID.
         */
        id?: string | null
    }

}

interface Remote {

    // Own properties of Fwupd-2.0.Fwupd.Remote

    /**
     * If firmware from the remote should be checked against the system
     * list of approved firmware.
     */
    approvalRequired: boolean
    /**
     * The behavior for auto-uploading reports.
     */
    automaticReports: boolean
    /**
     * The behavior for auto-uploading security reports.
     */
    automaticSecurityReports: boolean
    /**
     * If the remote is enabled and should be used.
     */
    enabled: boolean
    /**
     * The remote ID.
     */
    id: string | null
    __gtype__: number

    // Own fields of Fwupd-2.0.Fwupd.Remote

    parentInstance: GObject.Object

    // Owm methods of Fwupd-2.0.Fwupd.Remote

    /**
     * Builds a URI for the URL using the username and password set for the remote,
     * including any basename URI substitution.
     * @param url the URL to use
     * @returns a URI, or %NULL for error
     */
    buildFirmwareUri(url: string | null): string | null
    /**
     * Gets the age of the remote in seconds.
     * @returns a age, or %G_MAXUINT64 for unavailable
     */
    getAge(): number
    /**
     * Gets the remote agreement in AppStream markup format
     * @returns a string, or %NULL if unset
     */
    getAgreement(): string | null
    /**
     * Gets if firmware from the remote should be checked against the list
     * of a approved checksums.
     * @returns a #TRUE if the remote is restricted
     */
    getApprovalRequired(): boolean
    /**
     * Gets if reports should be automatically uploaded to this remote
     * @returns a #TRUE if the remote should have reports uploaded automatically
     */
    getAutomaticReports(): boolean
    /**
     * Gets if security reports should be automatically uploaded to this remote
     * @returns a #TRUE if the remote should have reports uploaded automatically
     */
    getAutomaticSecurityReports(): boolean
    /**
     * Gets the remote checksum.
     * @returns a string, or %NULL if unset
     */
    getChecksum(): string | null
    /**
     * Gets if the remote is enabled and should be used.
     * @returns a #TRUE if the remote is enabled
     */
    getEnabled(): boolean
    /**
     * Gets the path and filename that the remote is using for a cache.
     * @returns a string, or %NULL for unset
     */
    getFilenameCache(): string | null
    /**
     * Gets the path and filename that the remote is using for a signature cache.
     * @returns a string, or %NULL for unset
     */
    getFilenameCacheSig(): string | null
    /**
     * Gets the path and filename of the remote itself, typically a `.conf` file.
     * @returns a string, or %NULL for unset
     */
    getFilenameSource(): string | null
    /**
     * Gets the base URI for firmware.
     * @returns a URI, or %NULL for unset.
     */
    getFirmwareBaseUri(): string | null
    /**
     * Gets the remote ID, e.g. `lvfs-testing`.
     * @returns a string, or %NULL if unset
     */
    getId(): string | null
    /**
     * Gets the keyring kind of the remote.
     * @returns a #FwupdKeyringKind, e.g. #FWUPD_KEYRING_KIND_GPG
     */
    getKeyringKind(): KeyringKind
    /**
     * Gets the kind of the remote.
     * @returns a #FwupdRemoteKind, e.g. #FWUPD_REMOTE_KIND_LOCAL
     */
    getKind(): RemoteKind
    /**
     * Gets the URI for the remote metadata.
     * @returns a URI, or %NULL for invalid.
     */
    getMetadataUri(): string | null
    /**
     * Gets the URI for the remote metadata signature.
     * @returns a URI, or %NULL for invalid.
     */
    getMetadataUriSig(): string | null
    /**
     * Gets the list of remotes this plugin should be ordered after.
     * @returns an array
     */
    getOrderAfter(): string[]
    /**
     * Gets the list of remotes this plugin should be ordered before.
     * @returns an array
     */
    getOrderBefore(): string[]
    /**
     * Gets the password configured for the remote.
     * @returns a string, or %NULL for unset
     */
    getPassword(): string | null
    /**
     * Gets the priority of the remote, where bigger numbers are better.
     * @returns a priority, or 0 for the default value
     */
    getPriority(): number
    /**
     * Gets the base directory for storing remote metadata
     * @returns a string, or %NULL if unset
     */
    getRemotesDir(): string | null
    /**
     * Gets the URI for the remote reporting.
     * @returns a URI, or %NULL for invalid.
     */
    getReportUri(): string | null
    /**
     * Gets the URI for the security report.
     * @returns a URI, or %NULL for invalid.
     */
    getSecurityReportUri(): string | null
    /**
     * Gets the remote title, e.g. `Linux Vendor Firmware Service`.
     * @returns a string, or %NULL if unset
     */
    getTitle(): string | null
    /**
     * Gets the username configured for the remote.
     * @returns a string, or %NULL for unset
     */
    getUsername(): string | null
    /**
     * Sets up the remote ready for use. Most other methods call this
     * for you, and do you only need to call this if you are just watching
     * the self.
     * @param filename A filename
     * @param cancellable the #GCancellable, or %NULL
     * @returns %TRUE for success
     */
    loadFromFilename(filename: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Parses the signature, updating the metadata URI as appropriate.
     * @param filename A filename
     * @returns %TRUE for success
     */
    loadSignature(filename: string | null): boolean
    /**
     * Parses the signature, updating the metadata URI as appropriate.
     * 
     * This can only be called for remotes with `Keyring=jcat` which is
     * the default for most remotes.
     * @param bytes A #GBytes
     * @returns %TRUE for success
     */
    loadSignatureBytes(bytes: any): boolean
    /**
     * Sets the remote agreement in AppStream markup format
     * @param agreement Agreement markup
     */
    setAgreement(agreement: string | null): void
    /**
     * Sets the keyring kind
     * @param keyringKind #FwupdKeyringKind e.g. #FWUPD_KEYRING_KIND_PKCS7
     */
    setKeyringKind(keyringKind: KeyringKind): void
    /**
     * Sets the plugin modification time.
     * @param mtime a UNIX itmestamp
     */
    setMtime(mtime: number): void
    /**
     * Sets the plugin priority.
     * @param priority an integer, where 1 is better
     */
    setPriority(priority: number): void
    /**
     * Sets the directory to store remote data
     * @param directory Remotes directory
     */
    setRemotesDir(directory: string | null): void
    /**
     * Creates a GVariant from the remote data.
     * @returns the GVariant, or %NULL for error
     */
    toVariant(): GLib.Variant

    // Class property signals of Fwupd-2.0.Fwupd.Remote

    connect(sigName: "notify::approval-required", callback: (...args: any[]) => void): number
    on(sigName: "notify::approval-required", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::approval-required", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::approval-required", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::approval-required", ...args: any[]): void
    connect(sigName: "notify::automatic-reports", callback: (...args: any[]) => void): number
    on(sigName: "notify::automatic-reports", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::automatic-reports", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::automatic-reports", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::automatic-reports", ...args: any[]): void
    connect(sigName: "notify::automatic-security-reports", callback: (...args: any[]) => void): number
    on(sigName: "notify::automatic-security-reports", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::automatic-security-reports", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::automatic-security-reports", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::automatic-security-reports", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
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

class Remote extends GObject.Object {

    // Own properties of Fwupd-2.0.Fwupd.Remote

    static name: string

    // Constructors of Fwupd-2.0.Fwupd.Remote

    constructor(config?: Remote.ConstructorProperties) 
    /**
     * Creates a new fwupd remote.
     * @constructor 
     * @returns a new #FwupdRemote
     */
    constructor() 
    /**
     * Creates a new fwupd remote.
     * @constructor 
     * @returns a new #FwupdRemote
     */
    static new(): Remote
    _init(config?: Remote.ConstructorProperties): void
    /**
     * Creates an array of new devices using packed data.
     * @param value a #GVariant
     * @returns remotes, or %NULL if @value was invalid
     */
    static arrayFromVariant(value: GLib.Variant): Remote[]
    /**
     * Creates a new remote using packed data.
     * @param value a #GVariant
     * @returns a new #FwupdRemote, or %NULL if @value was invalid
     */
    static fromVariant(value: GLib.Variant): Remote
    /**
     * Converts an printable string to an enumerated type.
     * @param kind a string, e.g. `download`
     * @returns a #FwupdRemoteKind, e.g. %FWUPD_REMOTE_KIND_DOWNLOAD
     */
    static kindFromString(kind: string | null): RemoteKind
    /**
     * Converts an enumerated type to a printable string.
     * @param kind a #FwupdRemoteKind, e.g. %FWUPD_REMOTE_KIND_DOWNLOAD
     * @returns a string, e.g. `download`
     */
    static kindToString(kind: RemoteKind): string | null
}

module SecurityAttr {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface SecurityAttr {

    // Own properties of Fwupd-2.0.Fwupd.SecurityAttr

    __gtype__: number

    // Own fields of Fwupd-2.0.Fwupd.SecurityAttr

    parentInstance: GObject.Object

    // Owm methods of Fwupd-2.0.Fwupd.SecurityAttr

    /**
     * Adds a specific self flag to the self.
     * @param flag the #FwupdSecurityAttrFlags
     */
    addFlag(flag: SecurityAttrFlags): void
    /**
     * Adds metadata to the attribute which may be used in the name.
     * @param key metadata key
     * @param value metadata value
     */
    addMetadata(key: string | null, value: string | null): void
    /**
     * Adds an attribute appstream_id to obsolete. The obsoleted attribute will not
     * contribute to the calculated HSI value or be visible in command line tools.
     * @param appstreamId the appstream_id or plugin name
     */
    addObsolete(appstreamId: string | null): void
    /**
     * Gets the AppStream ID.
     * @returns the AppStream ID, or %NULL if unset
     */
    getAppstreamId(): string | null
    /**
     * Gets the self flags.
     * @returns the self flags, or 0 if unset
     */
    getFlags(): SecurityAttrFlags
    /**
     * Gets the HSI level.
     * @returns the #FwupdSecurityAttrLevel, or %FWUPD_SECURITY_ATTR_LEVEL_NONE if unset
     */
    getLevel(): SecurityAttrLevel
    /**
     * Gets private metadata from the attribute which may be used in the name.
     * @param key metadata key
     * @returns the metadata value, or %NULL if unfound
     */
    getMetadata(key: string | null): string | null
    /**
     * Gets the attribute name.
     * @returns the attribute name, or %NULL if unset
     */
    getName(): string | null
    /**
     * Gets the list of attribute obsoletes. The obsoleted attributes will not
     * contribute to the calculated HSI value or be visible in command line tools.
     * @returns the obsoletes, which may be empty
     */
    getObsoletes(): string[]
    /**
     * Gets the plugin that created the attribute.
     * @returns the plugin name, or %NULL if unset
     */
    getPlugin(): string | null
    /**
     * Gets the optional HSI result.
     * @returns the #FwupdSecurityAttrResult, e.g %FWUPD_SECURITY_ATTR_LEVEL_LOCKED
     */
    getResult(): SecurityAttrResult
    /**
     * Gets the attribute URL.
     * @returns the attribute result, or %NULL if unset
     */
    getUrl(): string | null
    /**
     * Finds if the self has a specific self flag.
     * @param flag the #FwupdSecurityAttrFlags
     * @returns %TRUE if the flag is set
     */
    hasFlag(flag: SecurityAttrFlags): boolean
    /**
     * Finds out if the attribute obsoletes a specific appstream_id.
     * @param appstreamId the attribute appstream_id
     * @returns %TRUE if the self matches
     */
    hasObsolete(appstreamId: string | null): boolean
    /**
     * Sets the AppStream ID.
     * @param appstreamId the AppStream component ID, e.g. `com.intel.BiosGuard`
     */
    setAppstreamId(appstreamId: string | null): void
    /**
     * Sets the self flags.
     * @param flags the self flags, e.g. %FWUPD_SECURITY_ATTR_FLAG_OBSOLETED
     */
    setFlags(flags: SecurityAttrFlags): void
    /**
     * Sets the HSI level. A `level` of %FWUPD_SECURITY_ATTR_LEVEL_NONE is not used
     * for the HSI calculation.
     * @param level A #FwupdSecurityAttrLevel, e.g. %FWUPD_SECURITY_ATTR_LEVEL_IMPORTANT
     */
    setLevel(level: SecurityAttrLevel): void
    /**
     * Sets the attribute name.
     * @param name the attribute name
     */
    setName(name: string | null): void
    /**
     * Sets the plugin that created the attribute.
     * @param plugin the plugin name
     */
    setPlugin(plugin: string | null): void
    /**
     * Sets the optional HSI result. This is required because some attributes may
     * be a "success" when something is `locked` or may be "failed" if `found`.
     * @param result A #FwupdSecurityAttrResult, e.g. %FWUPD_SECURITY_ATTR_LEVEL_LOCKED
     */
    setResult(result: SecurityAttrResult): void
    /**
     * Sets the attribute result.
     * @param url the attribute URL
     */
    setUrl(url: string | null): void
    /**
     * Builds a text representation of the object.
     * @returns text, or %NULL for invalid
     */
    toString(): string | null
    /**
     * Creates a GVariant from the self data.
     * @returns the GVariant, or %NULL for error
     */
    toVariant(): GLib.Variant

    // Class property signals of Fwupd-2.0.Fwupd.SecurityAttr

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

class SecurityAttr extends GObject.Object {

    // Own properties of Fwupd-2.0.Fwupd.SecurityAttr

    static name: string

    // Constructors of Fwupd-2.0.Fwupd.SecurityAttr

    constructor(config?: SecurityAttr.ConstructorProperties) 
    /**
     * Creates a new self.
     * @constructor 
     * @param appstreamId the AppStream component ID, e.g. `com.intel.BiosGuard`
     * @returns a new #FwupdSecurityAttr
     */
    constructor(appstreamId: string | null) 
    /**
     * Creates a new self.
     * @constructor 
     * @param appstreamId the AppStream component ID, e.g. `com.intel.BiosGuard`
     * @returns a new #FwupdSecurityAttr
     */
    static new(appstreamId: string | null): SecurityAttr
    _init(config?: SecurityAttr.ConstructorProperties): void
    /**
     * Creates an array of new security_attrs using packed data.
     * @param value a #GVariant
     * @returns attributes, or %NULL if @value was invalid
     */
    static arrayFromVariant(value: GLib.Variant): SecurityAttr[]
    /**
     * Returns the printable string for the flag.
     * @param flag A #FwupdSecurityAttrFlags, e.g. %FWUPD_SECURITY_ATTR_FLAG_SUCCESS
     * @returns string, or %NULL
     */
    static flagToString(flag: SecurityAttrFlags): string | null
    /**
     * Returns the string suffix for the flag.
     * @param flag A #FwupdSecurityAttrFlags, e.g. %FWUPD_SECURITY_ATTR_FLAG_RUNTIME_UPDATES
     * @returns string, or %NULL
     */
    static flagToSuffix(flag: SecurityAttrFlags): string | null
    /**
     * Creates a new self using packed data.
     * @param value a #GVariant
     * @returns a new #FwupdSecurityAttr, or %NULL if @value was invalid
     */
    static fromVariant(value: GLib.Variant): SecurityAttr
    /**
     * Returns the printable string for the result enum.
     * @param result A #FwupdSecurityAttrResult, e.g. %FWUPD_SECURITY_ATTR_RESULT_ENABLED
     * @returns string, or %NULL
     */
    static resultToString(result: SecurityAttrResult): string | null
}

interface ClientClass {

    // Own fields of Fwupd-2.0.Fwupd.ClientClass

    parentClass: GObject.ObjectClass
    changed: (client: Client) => void
    statusChanged: (client: Client, status: Status) => void
    deviceAdded: (client: Client, result: Device) => void
    deviceRemoved: (client: Client, result: Device) => void
    deviceChanged: (client: Client, result: Device) => void
}

abstract class ClientClass {

    // Own properties of Fwupd-2.0.Fwupd.ClientClass

    static name: string
}

interface DeviceClass {

    // Own fields of Fwupd-2.0.Fwupd.DeviceClass

    parentClass: GObject.ObjectClass
}

abstract class DeviceClass {

    // Own properties of Fwupd-2.0.Fwupd.DeviceClass

    static name: string
}

interface PluginClass {

    // Own fields of Fwupd-2.0.Fwupd.PluginClass

    parentClass: GObject.ObjectClass
}

abstract class PluginClass {

    // Own properties of Fwupd-2.0.Fwupd.PluginClass

    static name: string
}

interface ReleaseClass {

    // Own fields of Fwupd-2.0.Fwupd.ReleaseClass

    parentClass: GObject.ObjectClass
}

abstract class ReleaseClass {

    // Own properties of Fwupd-2.0.Fwupd.ReleaseClass

    static name: string
}

interface RemoteClass {

    // Own fields of Fwupd-2.0.Fwupd.RemoteClass

    parentClass: GObject.ObjectClass
}

abstract class RemoteClass {

    // Own properties of Fwupd-2.0.Fwupd.RemoteClass

    static name: string
}

interface SecurityAttrClass {

    // Own fields of Fwupd-2.0.Fwupd.SecurityAttrClass

    parentClass: GObject.ObjectClass
}

abstract class SecurityAttrClass {

    // Own properties of Fwupd-2.0.Fwupd.SecurityAttrClass

    static name: string
}

    type DeviceFlags = number
    type PluginFlags = number
    type ReleaseFlags = number
}

export default Fwupd;