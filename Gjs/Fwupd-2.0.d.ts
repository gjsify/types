/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Fwupd-2.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
const DBUS_INTERFACE: string
const DBUS_PATH: string
const DBUS_SERVICE: string
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
const DEVICE_ID_ANY: string
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
const RESULT_KEY_APPSTREAM_ID: string
const RESULT_KEY_BRANCH: string
const RESULT_KEY_CATEGORIES: string
const RESULT_KEY_CHECKSUM: string
const RESULT_KEY_CREATED: string
const RESULT_KEY_DESCRIPTION: string
const RESULT_KEY_DETACH_CAPTION: string
const RESULT_KEY_DETACH_IMAGE: string
const RESULT_KEY_DETAILS_URL: string
const RESULT_KEY_DEVICE_ID: string
const RESULT_KEY_FILENAME: string
const RESULT_KEY_FLAGS: string
const RESULT_KEY_FLASHES_LEFT: string
const RESULT_KEY_GUID: string
const RESULT_KEY_HOMEPAGE: string
const RESULT_KEY_HSI_LEVEL: string
const RESULT_KEY_HSI_RESULT: string
const RESULT_KEY_ICON: string
const RESULT_KEY_INSTALL_DURATION: string
const RESULT_KEY_INSTANCE_IDS: string
const RESULT_KEY_ISSUES: string
const RESULT_KEY_LICENSE: string
const RESULT_KEY_LOCATIONS: string
const RESULT_KEY_METADATA: string
const RESULT_KEY_MODIFIED: string
const RESULT_KEY_NAME: string
const RESULT_KEY_NAME_VARIANT_SUFFIX: string
const RESULT_KEY_PARENT_DEVICE_ID: string
const RESULT_KEY_PLUGIN: string
const RESULT_KEY_PROTOCOL: string
const RESULT_KEY_RELEASE: string
const RESULT_KEY_REMOTE_ID: string
const RESULT_KEY_SERIAL: string
const RESULT_KEY_SIZE: string
const RESULT_KEY_SOURCE_URL: string
const RESULT_KEY_STATUS: string
const RESULT_KEY_SUMMARY: string
const RESULT_KEY_TRUST_FLAGS: string
const RESULT_KEY_UPDATE_ERROR: string
const RESULT_KEY_UPDATE_IMAGE: string
const RESULT_KEY_UPDATE_MESSAGE: string
const RESULT_KEY_UPDATE_STATE: string
const RESULT_KEY_URGENCY: string
const RESULT_KEY_URI: string
const RESULT_KEY_VENDOR: string
const RESULT_KEY_VENDOR_ID: string
const RESULT_KEY_VERSION: string
const RESULT_KEY_VERSION_BOOTLOADER: string
const RESULT_KEY_VERSION_BOOTLOADER_RAW: string
const RESULT_KEY_VERSION_FORMAT: string
const RESULT_KEY_VERSION_LOWEST: string
const RESULT_KEY_VERSION_LOWEST_RAW: string
const RESULT_KEY_VERSION_RAW: string
const SECURITY_ATTR_ID_ACPI_DMAR: string
const SECURITY_ATTR_ID_ENCRYPTED_RAM: string
const SECURITY_ATTR_ID_FWUPD_ATTESTATION: string
const SECURITY_ATTR_ID_FWUPD_PLUGINS: string
const SECURITY_ATTR_ID_FWUPD_UPDATES: string
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_ACM: string
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_ENABLED: string
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_OTP: string
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_POLICY: string
const SECURITY_ATTR_ID_INTEL_BOOTGUARD_VERIFIED: string
const SECURITY_ATTR_ID_INTEL_CET_ACTIVE: string
const SECURITY_ATTR_ID_INTEL_CET_ENABLED: string
const SECURITY_ATTR_ID_INTEL_DCI_ENABLED: string
const SECURITY_ATTR_ID_INTEL_DCI_LOCKED: string
const SECURITY_ATTR_ID_INTEL_SMAP: string
const SECURITY_ATTR_ID_IOMMU: string
const SECURITY_ATTR_ID_KERNEL_LOCKDOWN: string
const SECURITY_ATTR_ID_KERNEL_SWAP: string
const SECURITY_ATTR_ID_KERNEL_TAINTED: string
const SECURITY_ATTR_ID_MEI_MANUFACTURING_MODE: string
const SECURITY_ATTR_ID_MEI_OVERRIDE_STRAP: string
const SECURITY_ATTR_ID_MEI_VERSION: string
const SECURITY_ATTR_ID_SPI_BIOSWE: string
const SECURITY_ATTR_ID_SPI_BLE: string
const SECURITY_ATTR_ID_SPI_SMM_BWP: string
const SECURITY_ATTR_ID_SUSPEND_TO_IDLE: string
const SECURITY_ATTR_ID_SUSPEND_TO_RAM: string
const SECURITY_ATTR_ID_TPM_RECONSTRUCTION_PCR0: string
const SECURITY_ATTR_ID_TPM_VERSION_20: string
const SECURITY_ATTR_ID_UEFI_PK: string
const SECURITY_ATTR_ID_UEFI_SECUREBOOT: string
function build_history_report_json(devices: Device[]): string
function build_machine_id(salt: string): string
function build_user_agent(package_name: string, package_version: string): string
function checksum_format_for_display(checksum: string): string
function checksum_get_best(checksums: string[]): string
function checksum_get_by_kind(checksums: string[], kind: GLib.ChecksumType): string
function checksum_guess_kind(checksum: string): GLib.ChecksumType
function error_from_string(error: string): Error
function error_quark(): GLib.Quark
function error_to_string(error: Error): string
function feature_flag_from_string(feature_flag: string): FeatureFlags
function feature_flag_to_string(feature_flag: FeatureFlags): string
function get_os_release(): GLib.HashTable
function guid_from_string(guidstr: string | null, guid: number, flags: GuidFlags): boolean
function guid_hash_data(data: number, datasz: number, flags: GuidFlags): string
function guid_hash_string(str: string): string
function guid_is_valid(guid: string): boolean
function guid_to_string(guid: number, flags: GuidFlags): string
function keyring_kind_from_string(keyring_kind: string): KeyringKind
function keyring_kind_to_string(keyring_kind: KeyringKind): string
function status_from_string(status: string): Status
function status_to_string(status: Status): string
function trust_flag_from_string(trust_flag: string): TrustFlags
function trust_flag_to_string(trust_flag: TrustFlags): string
function update_state_from_string(update_state: string): UpdateState
function update_state_to_string(update_state: UpdateState): string
function version_format_from_string(str: string): VersionFormat
function version_format_to_string(kind: VersionFormat): string
interface Client_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Fwupd-2.0.Fwupd.Client */
    /**
     * The last-reported percentage of the daemon.
     */
    percentage?: number
    /**
     * The last-reported status of the daemon.
     */
    status?: number
}
class Client {
    /* Properties of Fwupd-2.0.Fwupd.Client */
    /**
     * The daemon version number.
     */
    readonly daemon_version: string
    /**
     * The host machine-id string
     */
    readonly host_machine_id: string
    /**
     * The host product string
     */
    readonly host_product: string
    /**
     * The host machine-id string
     */
    readonly host_security_id: string
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
    readonly soup_session: GObject.Object
    /**
     * The last-reported status of the daemon.
     */
    status: number
    /**
     * If the daemon is tainted by 3rd party code.
     */
    readonly tainted: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Client */
    /**
     * Activates up a device, which normally means the device switches to a new
     * firmware version. This should only be called when data loss cannot occur.
     * @param cancellable the #GCancellable, or %NULL
     * @param device_id a device
     */
    activate(cancellable: Gio.Cancellable | null, device_id: string): boolean
    /**
     * Activates up a device, which normally means the device switches to a new
     * firmware version. This should only be called when data loss cannot occur.
     * @param device_id a device
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    activate_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_activate_async().
     * @param res the #GAsyncResult
     */
    activate_finish(res: Gio.AsyncResult): boolean
    /**
     * Clears the results for a specific device.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     */
    clear_results(device_id: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Clears the results for a specific device.
     * @param device_id a device
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    clear_results_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_clear_results_async().
     * @param res the #GAsyncResult
     */
    clear_results_finish(res: Gio.AsyncResult): boolean
    /**
     * Sets up the client ready for use. Most other methods call this
     * for you, and do you only need to call this if you are just watching
     * the client.
     * @param cancellable the #GCancellable, or %NULL
     */
    connect(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets up the client ready for use. This is probably the first method you call
     * when wanting to use libfwupd in an asynchronous manner.
     * 
     * Other methods such as fwupd_client_get_devices_async() should only be called
     * after fwupd_client_connect_finish() has been called without an error.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    connect_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_connect_async().
     * @param res the #GAsyncResult
     */
    connect_finish(res: Gio.AsyncResult): boolean
    /**
     * Downloads data from a remote server. The fwupd_client_set_user_agent() function
     * should be called before this method is used.
     * @param url the remote URL
     * @param flags #FwupdClientDownloadFlags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
     * @param cancellable the #GCancellable, or %NULL
     */
    download_bytes(url: string, flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null): GLib.Bytes
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
    download_bytes_async(url: string, flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_download_bytes_async().
     * @param res the #GAsyncResult
     */
    download_bytes_finish(res: Gio.AsyncResult): GLib.Bytes
    /**
     * Downloads data from a remote server. The fwupd_client_set_user_agent() function
     * should be called before this method is used.
     * @param url the remote URL
     * @param file a #GFile
     * @param flags #FwupdClientDownloadFlags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
     * @param cancellable the #GCancellable, or %NULL
     */
    download_file(url: string, file: Gio.File, flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets up the client networking support ready for use. Most other download and
     * upload methods call this automatically, and do you only need to call this if
     * the session is being used outside the #FwupdClient.
     */
    ensure_networking(): boolean
    /**
     * Gets the list of approved firmware.
     * @param cancellable the #GCancellable, or %NULL
     */
    get_approved_firmware(cancellable?: Gio.Cancellable | null): string[]
    /**
     * Gets the list of approved firmware.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_approved_firmware_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_approved_firmware_async().
     * @param res the #GAsyncResult
     */
    get_approved_firmware_finish(res: Gio.AsyncResult): string[]
    /**
     * Gets the list of blocked firmware.
     * @param cancellable the #GCancellable, or %NULL
     */
    get_blocked_firmware(cancellable?: Gio.Cancellable | null): string[]
    /**
     * Gets the list of blocked firmware.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_blocked_firmware_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_blocked_firmware_async().
     * @param res the #GAsyncResult
     */
    get_blocked_firmware_finish(res: Gio.AsyncResult): string[]
    /**
     * Gets if the daemon is running in an interactive terminal.
     */
    get_daemon_interactive(): boolean
    /**
     * Gets the daemon version number.
     */
    get_daemon_version(): string
    /**
     * Gets details about a specific firmware file.
     * @param filename the firmware filename, e.g. `firmware.cab`
     * @param cancellable the #GCancellable, or %NULL
     */
    get_details(filename: string, cancellable?: Gio.Cancellable | null): Device[]
    /**
     * Gets details about a specific firmware file.
     * @param bytes the firmware blob, e.g. the contents of `firmware.cab`
     * @param cancellable the #GCancellable, or %NULL
     */
    get_details_bytes(bytes: GLib.Bytes, cancellable?: Gio.Cancellable | null): Device[]
    /**
     * Gets details about a specific firmware file.
     * @param bytes a #GBytes for the firmware, e.g. `firmware.cab`
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_details_bytes_async(bytes: GLib.Bytes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_details_bytes_async().
     * @param res the #GAsyncResult
     */
    get_details_bytes_finish(res: Gio.AsyncResult): Device[]
    /**
     * Gets a device by it's device ID.
     * @param device_id the device ID, e.g. `usb:00:01:03:03`
     * @param cancellable the #GCancellable, or %NULL
     */
    get_device_by_id(device_id: string, cancellable?: Gio.Cancellable | null): Device
    /**
     * Gets a device by it's device ID.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_device_by_id_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_device_by_id_async().
     * @param res the #GAsyncResult
     */
    get_device_by_id_finish(res: Gio.AsyncResult): Device
    /**
     * Gets all the devices registered with the daemon.
     * @param cancellable the #GCancellable, or %NULL
     */
    get_devices(cancellable?: Gio.Cancellable | null): Device[]
    /**
     * Gets all the devices registered with the daemon.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_devices_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets any devices that provide a specific GUID. An error is returned if no
     * devices contains this GUID.
     * @param guid the GUID, e.g. `e22c4520-43dc-5bb3-8245-5787fead9b63`
     * @param cancellable the #GCancellable, or %NULL
     */
    get_devices_by_guid(guid: string, cancellable?: Gio.Cancellable | null): Device[]
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
    get_devices_by_guid_async(guid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_devices_by_guid_async().
     * @param res the #GAsyncResult
     */
    get_devices_by_guid_finish(res: Gio.AsyncResult): Release[]
    /**
     * Gets the result of fwupd_client_get_devices_async().
     * @param res the #GAsyncResult
     */
    get_devices_finish(res: Gio.AsyncResult): Device[]
    /**
     * Gets all the downgrades for a specific device.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     */
    get_downgrades(device_id: string, cancellable?: Gio.Cancellable | null): Release[]
    /**
     * Gets all the downgrades for a specific device.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_downgrades_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_downgrades_async().
     * @param res the #GAsyncResult
     */
    get_downgrades_finish(res: Gio.AsyncResult): Release[]
    /**
     * Gets all the history.
     * @param cancellable the #GCancellable, or %NULL
     */
    get_history(cancellable?: Gio.Cancellable | null): Device[]
    /**
     * Gets all the history.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_history_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_history_async().
     * @param res the #GAsyncResult
     */
    get_history_finish(res: Gio.AsyncResult): Device[]
    /**
     * Gets the string that represents the host machine ID
     */
    get_host_machine_id(): string
    /**
     * Gets the string that represents the host running fwupd
     */
    get_host_product(): string
    /**
     * Gets all the host security attributes from the daemon.
     * @param cancellable the #GCancellable, or %NULL
     */
    get_host_security_attrs(cancellable?: Gio.Cancellable | null): SecurityAttr[]
    /**
     * Gets all the host security attributes from the daemon.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_host_security_attrs_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_host_security_attrs_async().
     * @param res the #GAsyncResult
     */
    get_host_security_attrs_finish(res: Gio.AsyncResult): SecurityAttr[]
    /**
     * Gets the string that represents the host machine ID
     */
    get_host_security_id(): string
    /**
     * Gets the internal #GMainContext to use for synchronous methods.
     * By default the value is set a new #GMainContext.
     */
    get_main_context(): GLib.MainContext
    /**
     * Gets the last returned percentage value.
     */
    get_percentage(): number
    /**
     * Gets all the plugins being used the daemon.
     * @param cancellable the #GCancellable, or %NULL
     */
    get_plugins(cancellable?: Gio.Cancellable | null): Plugin[]
    /**
     * Gets all the plugins being used by the daemon.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_plugins_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_plugins_async().
     * @param res the #GAsyncResult
     */
    get_plugins_finish(res: Gio.AsyncResult): Device[]
    /**
     * Gets all the releases for a specific device
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     */
    get_releases(device_id: string, cancellable?: Gio.Cancellable | null): Release[]
    /**
     * Gets all the releases for a specific device
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_releases_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_releases_async().
     * @param res the #GAsyncResult
     */
    get_releases_finish(res: Gio.AsyncResult): Release[]
    /**
     * Gets a specific remote that has been configured for the system.
     * @param remote_id the remote ID, e.g. `lvfs-testing`
     * @param cancellable the #GCancellable, or %NULL
     */
    get_remote_by_id(remote_id: string, cancellable?: Gio.Cancellable | null): Remote
    /**
     * Gets a specific remote that has been configured for the system.
     * @param remote_id the remote ID, e.g. `lvfs-testing`
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_remote_by_id_async(remote_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_remote_by_id_async().
     * @param res the #GAsyncResult
     */
    get_remote_by_id_finish(res: Gio.AsyncResult): Remote
    /**
     * Gets the list of remotes that have been configured for the system.
     * @param cancellable the #GCancellable, or %NULL
     */
    get_remotes(cancellable?: Gio.Cancellable | null): Remote[]
    /**
     * Gets the list of remotes that have been configured for the system.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_remotes_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_remotes_async().
     * @param res the #GAsyncResult
     */
    get_remotes_finish(res: Gio.AsyncResult): Remote[]
    /**
     * Gets all the report metadata from the daemon.
     * @param cancellable the #GCancellable, or %NULL
     */
    get_report_metadata(cancellable?: Gio.Cancellable | null): GLib.HashTable
    /**
     * Gets all the report metadata from the daemon.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_report_metadata_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_report_metadata_async().
     * @param res the #GAsyncResult
     */
    get_report_metadata_finish(res: Gio.AsyncResult): GLib.HashTable
    /**
     * Gets the results of a previous firmware update for a specific device.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     */
    get_results(device_id: string, cancellable?: Gio.Cancellable | null): Device
    /**
     * Gets the results of a previous firmware update for a specific device.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_results_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_results_async().
     * @param res the #GAsyncResult
     */
    get_results_finish(res: Gio.AsyncResult): Device
    /**
     * Gets the last returned status value.
     */
    get_status(): Status
    /**
     * Gets if the daemon has been tainted by 3rd party code.
     */
    get_tainted(): boolean
    /**
     * Gets all the upgrades for a specific device.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     */
    get_upgrades(device_id: string, cancellable?: Gio.Cancellable | null): Release[]
    /**
     * Gets all the upgrades for a specific device.
     * 
     * You must have called fwupd_client_connect_async() on `self` before using
     * this method.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    get_upgrades_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_get_upgrades_async().
     * @param res the #GAsyncResult
     */
    get_upgrades_finish(res: Gio.AsyncResult): Release[]
    /**
     * Gets the string that represents the user agent that is used for
     * uploading and downloading. The user agent will contain the runtime
     * version of fwupd somewhere in the provided string.
     */
    get_user_agent(): string
    /**
     * Install a file onto a specific device.
     * @param device_id the device ID
     * @param filename the filename to install
     * @param install_flags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param cancellable the #GCancellable, or %NULL
     */
    install(device_id: string, filename: string, install_flags: InstallFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Install firmware onto a specific device.
     * 
     * NOTE: This method is thread-safe, but progress signals will be
     * emitted in the global default main context, if not explicitly set with
     * fwupd_client_set_main_context().
     * @param device_id the device ID
     * @param filename the filename to install
     * @param install_flags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    install_async(device_id: string, filename: string, install_flags: InstallFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Install firmware onto a specific device.
     * @param device_id the device ID
     * @param bytes #GBytes
     * @param install_flags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param cancellable the #GCancellable, or %NULL
     */
    install_bytes(device_id: string, bytes: GLib.Bytes, install_flags: InstallFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Install firmware onto a specific device.
     * 
     * NOTE: This method is thread-safe, but progress signals will be
     * emitted in the global default main context, if not explicitly set with
     * fwupd_client_set_main_context().
     * @param device_id the device ID
     * @param bytes #GBytes
     * @param install_flags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    install_bytes_async(device_id: string, bytes: GLib.Bytes, install_flags: InstallFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_install_bytes_async().
     * @param res the #GAsyncResult
     */
    install_bytes_finish(res: Gio.AsyncResult): boolean
    /**
     * Gets the result of fwupd_client_install_async().
     * @param res the #GAsyncResult
     */
    install_finish(res: Gio.AsyncResult): boolean
    /**
     * Installs a new release on a device, downloading the firmware if required.
     * @param device A #FwupdDevice
     * @param release A #FwupdRelease
     * @param install_flags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param cancellable the #GCancellable, or %NULL
     */
    install_release(device: Device, release: Release, install_flags: InstallFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Installs a new release on a device, downloading the firmware if required.
     * @param device A #FwupdDevice
     * @param release A #FwupdRelease
     * @param install_flags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param download_flags the #FwupdClientDownloadFlags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
     * @param cancellable the #GCancellable, or %NULL
     */
    install_release2(device: Device, release: Release, install_flags: InstallFlags, download_flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Installs a new release on a device, downloading the firmware if required.
     * 
     * NOTE: This method is thread-safe, but progress signals will be
     * emitted in the global default main context, if not explicitly set with
     * fwupd_client_set_main_context().
     * @param device A #FwupdDevice
     * @param release A #FwupdRelease
     * @param install_flags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param download_flags the #FwupdClientDownloadFlags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_DISABLE_IPFS
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    install_release2_async(device: Device, release: Release, install_flags: InstallFlags, download_flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Installs a new release on a device, downloading the firmware if required.
     * 
     * NOTE: This method is thread-safe, but progress signals will be
     * emitted in the global default main context, if not explicitly set with
     * fwupd_client_set_main_context().
     * @param device A #FwupdDevice
     * @param release A #FwupdRelease
     * @param install_flags the #FwupdInstallFlags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    install_release_async(device: Device, release: Release, install_flags: InstallFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_install_release_async().
     * @param res the #GAsyncResult
     */
    install_release_finish(res: Gio.AsyncResult): boolean
    /**
     * Modifies a daemon config option.
     * The daemon will only respond to this request with proper permissions
     * @param key key, e.g. `DisabledPlugins`
     * @param value value, e.g. `*`
     * @param cancellable the #GCancellable, or %NULL
     */
    modify_config(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Modifies a daemon config option.
     * The daemon will only respond to this request with proper permissions
     * @param key key, e.g. `DisabledPlugins`
     * @param value value, e.g. `*`
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    modify_config_async(key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_modify_config_async().
     * @param res the #GAsyncResult
     */
    modify_config_finish(res: Gio.AsyncResult): boolean
    /**
     * Modifies a device in a specific way. Not all properties on the #FwupdDevice
     * are settable by the client, and some may have other restrictions on `value`.
     * 
     * NOTE: User authentication may be required to complete this action.
     * @param device_id the device ID
     * @param key the key, e.g. `Flags`
     * @param value the key, e.g. `reported`
     * @param cancellable the #GCancellable, or %NULL
     */
    modify_device(device_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Modifies a device in a specific way. Not all properties on the #FwupdDevice
     * are settable by the client, and some may have other restrictions on `value`.
     * @param device_id the device ID
     * @param key the key, e.g. `Flags`
     * @param value the key, e.g. `reported`
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    modify_device_async(device_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_modify_device_async().
     * @param res the #GAsyncResult
     */
    modify_device_finish(res: Gio.AsyncResult): boolean
    /**
     * Modifies a system remote in a specific way.
     * 
     * NOTE: User authentication may be required to complete this action.
     * @param remote_id the remote ID, e.g. `lvfs-testing`
     * @param key the key, e.g. `Enabled`
     * @param value the key, e.g. `true`
     * @param cancellable the #GCancellable, or %NULL
     */
    modify_remote(remote_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Modifies a system remote in a specific way.
     * @param remote_id the remote ID, e.g. `lvfs-testing`
     * @param key the key, e.g. `Enabled`
     * @param value the key, e.g. `true`
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    modify_remote_async(remote_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_modify_remote_async().
     * @param res the #GAsyncResult
     */
    modify_remote_finish(res: Gio.AsyncResult): boolean
    /**
     * Refreshes a remote by downloading new metadata.
     * @param remote A #FwupdRemote
     * @param cancellable A #GCancellable, or %NULL
     */
    refresh_remote(remote: Remote, cancellable?: Gio.Cancellable | null): boolean
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
    refresh_remote_async(remote: Remote, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_refresh_remote_async().
     * @param res the #GAsyncResult
     */
    refresh_remote_finish(res: Gio.AsyncResult): boolean
    /**
     * Signs the data using the client self-signed certificate.
     * @param value A string to sign, typically a JSON blob
     * @param flags #FwupdSelfSignFlags, e.g. %FWUPD_SELF_SIGN_FLAG_ADD_TIMESTAMP
     * @param cancellable the #GCancellable, or %NULL
     */
    self_sign(value: string, flags: SelfSignFlags, cancellable?: Gio.Cancellable | null): string
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
    self_sign_async(value: string, flags: SelfSignFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_self_sign_async().
     * @param res the #GAsyncResult
     */
    self_sign_finish(res: Gio.AsyncResult): string
    /**
     * Sets the list of approved firmware.
     * @param checksums Array of checksums
     * @param cancellable the #GCancellable, or %NULL
     */
    set_approved_firmware(checksums: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets the list of approved firmware.
     * @param checksums firmware checksums
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    set_approved_firmware_async(checksums: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_set_approved_firmware_async().
     * @param res the #GAsyncResult
     */
    set_approved_firmware_finish(res: Gio.AsyncResult): boolean
    /**
     * Sets the list of approved firmware.
     * @param checksums Array of checksums
     * @param cancellable the #GCancellable, or %NULL
     */
    set_blocked_firmware(checksums: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets the list of blocked firmware.
     * @param checksums firmware checksums
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    set_blocked_firmware_async(checksums: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_set_blocked_firmware_async().
     * @param res the #GAsyncResult
     */
    set_blocked_firmware_finish(res: Gio.AsyncResult): boolean
    /**
     * Sets the features the client supports. This allows firmware to depend on
     * specific front-end features, for instance showing the user an image on
     * how to detach the hardware.
     * 
     * Clients can call this none or multiple times.
     * @param feature_flags #FwupdFeatureFlags, e.g. %FWUPD_FEATURE_FLAG_UPDATE_TEXT
     * @param cancellable the #GCancellable, or %NULL
     */
    set_feature_flags(feature_flags: FeatureFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets the features the client supports. This allows firmware to depend on
     * specific front-end features, for instance showing the user an image on
     * how to detach the hardware.
     * @param feature_flags #FwupdFeatureFlags, e.g. %FWUPD_FEATURE_FLAG_UPDATE_TEXT
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    set_feature_flags_async(feature_flags: FeatureFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_set_feature_flags_async().
     * @param res the #GAsyncResult
     */
    set_feature_flags_finish(res: Gio.AsyncResult): boolean
    /**
     * Sets the internal #GMainContext to use for returning progress signals.
     * @param main_ctx #GMainContext or %NULL to use the global default main context
     */
    set_main_context(main_ctx?: GLib.MainContext | null): void
    /**
     * Manually sets the user agent that is used for downloading. The user agent
     * should contain the runtime version of fwupd somewhere in the provided string.
     * @param user_agent the user agent ID, e.g. `gnome-software/3.34.1`
     */
    set_user_agent(user_agent: string): void
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
    set_user_agent_for_package(package_name: string, package_version: string): void
    /**
     * Unlocks a specific device so firmware can be read or wrote.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     */
    unlock(device_id: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Unlocks a specific device so firmware can be read or wrote.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    unlock_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_unlock_async().
     * @param res the #GAsyncResult
     */
    unlock_finish(res: Gio.AsyncResult): boolean
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
     * @param cancellable the #GCancellable, or %NULL
     */
    update_metadata(remote_id: string, metadata_fn: string, signature_fn: string, cancellable?: Gio.Cancellable | null): boolean
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
     * @param cancellable #GCancellable, or %NULL
     */
    update_metadata_bytes(remote_id: string, metadata: GLib.Bytes, signature: GLib.Bytes, cancellable?: Gio.Cancellable | null): boolean
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
     * @param remote_id remote ID, e.g. `lvfs-testing`
     * @param metadata XML metadata data
     * @param signature signature data
     * @param cancellable #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    update_metadata_bytes_async(remote_id: string, metadata: GLib.Bytes, signature: GLib.Bytes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_update_metadata_bytes_async().
     * @param res the #GAsyncResult
     */
    update_metadata_bytes_finish(res: Gio.AsyncResult): boolean
    /**
     * Uploads data to a remote server. The fwupd_client_set_user_agent() function
     * should be called before this method is used.
     * @param url the remote URL
     * @param payload payload string
     * @param signature signature string
     * @param flags #FwupdClientDownloadFlags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
     * @param cancellable the #GCancellable, or %NULL
     */
    upload_bytes(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable?: Gio.Cancellable | null): GLib.Bytes
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
    upload_bytes_async(url: string, payload: string, signature: string | null, flags: ClientUploadFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_upload_bytes_async().
     * @param res the #GAsyncResult
     */
    upload_bytes_finish(res: Gio.AsyncResult): GLib.Bytes
    /**
     * Verify a specific device.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     */
    verify(device_id: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Verify a specific device.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    verify_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_verify_async().
     * @param res the #GAsyncResult
     */
    verify_finish(res: Gio.AsyncResult): boolean
    /**
     * Update the verification record for a specific device.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     */
    verify_update(device_id: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Update the verification record for a specific device.
     * @param device_id the device ID
     * @param cancellable the #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    verify_update_async(device_id: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of fwupd_client_verify_update_async().
     * @param res the #GAsyncResult
     */
    verify_update_finish(res: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Fwupd-2.0.Fwupd.Client */
    vfunc_changed(): void
    vfunc_device_added(result: Device): void
    vfunc_device_changed(result: Device): void
    vfunc_device_removed(result: Device): void
    vfunc_status_changed(status: Status): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Fwupd-2.0.Fwupd.Client */
    /**
     * The ::changed signal is emitted when the daemon internal has
     * changed, for instance when a device has been added or removed.
     */
    connect(sigName: "changed", callback: (($obj: Client) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Client) => void)): number
    emit(sigName: "changed"): void
    /**
     * The ::device-added signal is emitted when a device has been
     * added.
     * @param result the #FwupdDevice
     */
    connect(sigName: "device-added", callback: (($obj: Client, result: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Client, result: Device) => void)): number
    emit(sigName: "device-added", result: Device): void
    /**
     * The ::device-changed signal is emitted when a device has been
     * changed in some way, e.g. the version number is updated.
     * @param result the #FwupdDevice
     */
    connect(sigName: "device-changed", callback: (($obj: Client, result: Device) => void)): number
    connect_after(sigName: "device-changed", callback: (($obj: Client, result: Device) => void)): number
    emit(sigName: "device-changed", result: Device): void
    /**
     * The ::device-removed signal is emitted when a device has been
     * removed.
     * @param result the #FwupdDevice
     */
    connect(sigName: "device-removed", callback: (($obj: Client, result: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Client, result: Device) => void)): number
    emit(sigName: "device-removed", result: Device): void
    connect(sigName: "status-changed", callback: (($obj: Client, object: number) => void)): number
    connect_after(sigName: "status-changed", callback: (($obj: Client, object: number) => void)): number
    emit(sigName: "status-changed", object: number): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host-machine-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-machine-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host-product", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-product", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host-security-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-security-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interactive", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::percentage", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::soup-session", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::soup-session", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tainted", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tainted", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Fwupd-2.0.Fwupd.Device */
    flags?: number
    parent?: Device
    protocol?: string
    status?: number
    update_state?: number
    version_format?: number
}
class Device {
    /* Properties of Fwupd-2.0.Fwupd.Device */
    flags: number
    parent: Device
    protocol: string
    status: number
    update_state: number
    version_format: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Device */
    /**
     * Sets the device checksum.
     * @param checksum the device checksum
     */
    add_checksum(checksum: string): void
    /**
     * Adds a child device. An child device is logically linked to the primary
     * device in some way.
     * 
     * NOTE: You should never call this function from user code, it is for daemon
     * use only. Only use fwupd_device_set_parent() to set up a logical tree.
     * @param child Another #FwupdDevice
     */
    add_child(child: Device): void
    /**
     * Adds a specific device flag to the device.
     * @param flag the #FwupdDeviceFlags
     */
    add_flag(flag: DeviceFlags): void
    /**
     * Adds the GUID if it does not already exist.
     * @param guid the GUID, e.g. `2082b5e0-7a64-478a-b1b2-e3404fab6dad`
     */
    add_guid(guid: string): void
    /**
     * Adds the icon name if it does not already exist.
     * @param icon the name, e.g. `input-mouse` or `/usr/share/icons/foo.png`
     */
    add_icon(icon: string): void
    /**
     * Adds the InstanceID if it does not already exist.
     * @param instance_id the GUID, e.g. `PCI\VEN_10EC&DEV_525A`
     */
    add_instance_id(instance_id: string): void
    /**
     * Adds a release for this device.
     * @param release a #FwupdRelease
     */
    add_release(release: Release): void
    /**
     * Adds a device vendor ID.
     * @param vendor_id the ID, e.g. 'USB:0x1234'
     */
    add_vendor_id(vendor_id: string): void
    /**
     * Comparison function for comparing two FwupdDevice objects.
     * @param device2 a #FwupdDevice
     */
    compare(device2: Device): number
    /**
     * Gets the current device branch.
     */
    get_branch(): string
    /**
     * Gets the device checksums.
     */
    get_checksums(): string[]
    /**
     * Gets the device children. These can only be assigned using fwupd_device_set_parent().
     */
    get_children(): Device[]
    /**
     * Gets when the device was created.
     */
    get_created(): number
    /**
     * Gets the device description in AppStream markup format.
     */
    get_description(): string
    /**
     * Gets the device flags.
     */
    get_flags(): number
    /**
     * Gets the number of flash cycles left on the device
     */
    get_flashes_left(): number
    /**
     * Gets the default GUID.
     */
    get_guid_default(): string
    /**
     * Gets the GUIDs.
     */
    get_guids(): string[]
    /**
     * Gets the icon names to use for the device.
     * 
     * NOTE: Icons specified without a full path are stock icons and should
     * be loaded from the users icon theme.
     */
    get_icons(): string[]
    /**
     * Gets the ID.
     */
    get_id(): string
    /**
     * Gets the time estimate for firmware installation (in seconds)
     */
    get_install_duration(): number
    /**
     * Gets the InstanceIDs.
     */
    get_instance_ids(): string[]
    /**
     * Gets when the device was modified.
     */
    get_modified(): number
    /**
     * Gets the device name.
     */
    get_name(): string
    /**
     * Gets the parent.
     */
    get_parent(): Device
    /**
     * Gets the ID.
     */
    get_parent_id(): string
    /**
     * Gets the plugin that created the device.
     */
    get_plugin(): string
    /**
     * Gets the protocol that the device uses for updating.
     */
    get_protocol(): string
    /**
     * Gets the default release for this device.
     */
    get_release_default(): Release
    /**
     * Gets all the releases for this device.
     */
    get_releases(): Release[]
    /**
     * Gets the serial number for the device.
     */
    get_serial(): string
    /**
     * Returns what the device is currently doing.
     */
    get_status(): Status
    /**
     * Gets the device summary.
     */
    get_summary(): string
    /**
     * Gets the update error.
     */
    get_update_error(): string
    /**
     * Gets the update image.
     */
    get_update_image(): string
    /**
     * Gets the update message.
     */
    get_update_message(): string
    /**
     * Gets the update state.
     */
    get_update_state(): UpdateState
    /**
     * Gets the device vendor.
     */
    get_vendor(): string
    /**
     * Gets the combined device vendor ID.
     */
    get_vendor_id(): string
    /**
     * Gets the device vendor ID.
     */
    get_vendor_ids(): string[]
    /**
     * Gets the device version.
     */
    get_version(): string
    /**
     * Gets the version of the bootloader.
     */
    get_version_bootloader(): string
    /**
     * Gets the bootloader version of firmware the device will accept in raw format.
     */
    get_version_bootloader_raw(): number
    /**
     * Gets the update state.
     */
    get_version_format(): VersionFormat
    /**
     * Gets the lowest version of firmware the device will accept.
     */
    get_version_lowest(): string
    /**
     * Gets the lowest version of firmware the device will accept in raw format.
     */
    get_version_lowest_raw(): number
    /**
     * Gets the raw version number from the hardware before converted to a string.
     */
    get_version_raw(): number
    /**
     * Finds if the device has a specific device flag.
     * @param flag the #FwupdDeviceFlags
     */
    has_flag(flag: DeviceFlags): boolean
    /**
     * Finds out if the device has this specific GUID.
     * @param guid the GUID, e.g. `2082b5e0-7a64-478a-b1b2-e3404fab6dad`
     */
    has_guid(guid: string): boolean
    /**
     * Finds out if the device has this specific InstanceID.
     * @param instance_id the InstanceID, e.g. `PCI\VEN_10EC&DEV_525A`
     */
    has_instance_id(instance_id: string): boolean
    /**
     * Finds out if the device has this specific vendor ID.
     * @param vendor_id the ID, e.g. 'USB:0x1234'
     */
    has_vendor_id(vendor_id: string): boolean
    /**
     * Copy all properties from the donor object if they have not already been set.
     * @param donor Another #FwupdDevice
     */
    incorporate(donor: Device): void
    /**
     * Removes a specific device flag from the device.
     * @param flag the #FwupdDeviceFlags
     */
    remove_flag(flag: DeviceFlags): void
    /**
     * Sets the current device branch.
     * @param branch the device one line branch
     */
    set_branch(branch: string): void
    /**
     * Sets when the device was created.
     * @param created the UNIX time
     */
    set_created(created: number): void
    /**
     * Sets the device description.
     * @param description the description in AppStream markup format
     */
    set_description(description: string): void
    /**
     * Sets the device flags.
     * @param flags the device flags, e.g. %FWUPD_DEVICE_FLAG_REQUIRE_AC
     */
    set_flags(flags: number): void
    /**
     * Sets the number of flash cycles left on the device
     * @param flashes_left the description
     */
    set_flashes_left(flashes_left: number): void
    /**
     * Sets the ID.
     * @param id the device ID, e.g. `USB:foo`
     */
    set_id(id: string): void
    /**
     * Sets the time estimate for firmware installation (in seconds)
     * @param duration The amount of time
     */
    set_install_duration(duration: number): void
    /**
     * Sets when the device was modified.
     * @param modified the UNIX time
     */
    set_modified(modified: number): void
    /**
     * Sets the device name.
     * @param name the device name, e.g. `ColorHug2`
     */
    set_name(name: string): void
    /**
     * Sets the parent. Only used internally.
     * @param parent another #FwupdDevice, or %NULL
     */
    set_parent(parent: Device): void
    /**
     * Sets the parent ID.
     * @param parent_id the device ID, e.g. `USB:foo`
     */
    set_parent_id(parent_id: string): void
    /**
     * Sets the plugin that created the device.
     * @param plugin the plugin name, e.g. `colorhug`
     */
    set_plugin(plugin: string): void
    /**
     * Sets the protocol that is used to update the device.
     * @param protocol the protocol name, e.g. `com.hughski.colorhug`
     */
    set_protocol(protocol: string): void
    /**
     * Sets the serial number for the device.
     * @param serial the device serial number
     */
    set_serial(serial: string): void
    /**
     * Sets what the device is currently doing.
     * @param status the status value, e.g. %FWUPD_STATUS_DEVICE_WRITE
     */
    set_status(status: Status): void
    /**
     * Sets the device summary.
     * @param summary the device one line summary
     */
    set_summary(summary: string): void
    /**
     * Sets the update error.
     * @param update_error the update error string
     */
    set_update_error(update_error: string): void
    /**
     * Sets the update image.
     * @param update_image the update image URL
     */
    set_update_image(update_image: string): void
    /**
     * Sets the update message.
     * @param update_message the update message string
     */
    set_update_message(update_message: string): void
    /**
     * Sets the update state.
     * @param update_state the state, e.g. %FWUPD_UPDATE_STATE_PENDING
     */
    set_update_state(update_state: UpdateState): void
    /**
     * Sets the device vendor.
     * @param vendor the description
     */
    set_vendor(vendor: string): void
    /**
     * Sets the device vendor ID.
     * @param vendor_id the ID, e.g. 'USB:0x1234' or 'USB:0x1234|PCI:0x5678'
     */
    set_vendor_id(vendor_id: string): void
    /**
     * Sets the device version.
     * @param version the device version, e.g. `1.2.3`
     */
    set_version(version: string): void
    /**
     * Sets the bootloader version.
     * @param version_bootloader the description
     */
    set_version_bootloader(version_bootloader: string): void
    /**
     * Sets the raw bootloader version number from the hardware before converted to a string.
     * @param version_bootloader_raw the raw hardware version
     */
    set_version_bootloader_raw(version_bootloader_raw: number): void
    /**
     * Sets the update state.
     * @param version_format the state, e.g. %FWUPD_VERSION_FORMAT_PENDING
     */
    set_version_format(version_format: VersionFormat): void
    /**
     * Sets the lowest version of firmware the device will accept.
     * @param version_lowest the description
     */
    set_version_lowest(version_lowest: string): void
    /**
     * Sets the raw lowest version number from the hardware before converted to a string.
     * @param version_lowest_raw the raw hardware version
     */
    set_version_lowest_raw(version_lowest_raw: number): void
    /**
     * Sets the raw version number from the hardware before converted to a string.
     * @param version_raw the raw hardware version
     */
    set_version_raw(version_raw: number): void
    /**
     * Builds a text representation of the object.
     */
    to_string(): string
    /**
     * Creates a GVariant from the device data omitting sensitive fields
     */
    to_variant(): GLib.Variant
    /**
     * Creates a GVariant from the device data.
     * Optionally provides additional data based upon flags
     * @param flags #FwupdDeviceFlags for the call
     */
    to_variant_full(flags: DeviceFlags): GLib.Variant
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version-format", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version-format", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Device
    /**
     * Sets the parent object on all devices in the array using the parent-id.
     * @param devices devices
     */
    static array_ensure_parents(devices: Device[]): void
    /**
     * Creates an array of new devices using packed data.
     * @param value a #GVariant
     */
    static array_from_variant(value: GLib.Variant): Device[]
    /**
     * Converts a string to a #FwupdDeviceFlags.
     * @param device_flag A string, e.g. `require-ac`
     */
    static flag_from_string(device_flag: string): DeviceFlags
    /**
     * Converts a #FwupdDeviceFlags to a string.
     * @param device_flag A #FwupdDeviceFlags, e.g. %FWUPD_DEVICE_FLAG_REQUIRE_AC
     */
    static flag_to_string(device_flag: DeviceFlags): string
    /**
     * Creates a new device using packed data.
     * @param value a #GVariant
     */
    static from_variant(value: GLib.Variant): Device
    /**
     * Checks the string is a valid non-partial device ID. It is important to note
     * that the wildcard ID of `*` is not considered a valid ID in this function and
     * the client must check for this manually if this should be allowed.
     * @param device_id string to check, e.g. `d3fae86d95e5d56626129d00e332c4b8dac95442`
     */
    static id_is_valid(device_id: string): boolean
    static $gtype: GObject.Type
}
interface Plugin_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Fwupd-2.0.Fwupd.Plugin */
    flags?: number
    name?: string
}
class Plugin {
    /* Properties of Fwupd-2.0.Fwupd.Plugin */
    flags: number
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Plugin */
    /**
     * Adds a specific plugin flag to the plugin.
     * @param flag the #FwupdPluginFlags
     */
    add_flag(flag: PluginFlags): void
    /**
     * Gets the plugin flags.
     */
    get_flags(): number
    /**
     * Gets the plugin name.
     */
    get_name(): string
    /**
     * Finds if the plugin has a specific plugin flag.
     * @param flag the #FwupdPluginFlags
     */
    has_flag(flag: PluginFlags): boolean
    /**
     * Removes a specific plugin flag from the plugin.
     * @param flag the #FwupdPluginFlags
     */
    remove_flag(flag: PluginFlags): void
    /**
     * Sets the plugin flags.
     * @param flags the plugin flags, e.g. %FWUPD_PLUGIN_FLAG_CAPSULES_UNSUPPORTED
     */
    set_flags(flags: number): void
    /**
     * Sets the plugin name.
     * @param name the plugin name, e.g. `bios`
     */
    set_name(name: string): void
    /**
     * Builds a text representation of the object.
     */
    to_string(): string
    /**
     * Creates a GVariant from the plugin data omitting sensitive fields
     */
    to_variant(): GLib.Variant
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Plugin
    /**
     * Creates an array of new plugins using packed data.
     * @param value a #GVariant
     */
    static array_from_variant(value: GLib.Variant): Plugin[]
    /**
     * Converts a string to a #FwupdPluginFlags.
     * @param plugin_flag A string, e.g. `require-ac`
     */
    static flag_from_string(plugin_flag: string): PluginFlags
    /**
     * Converts a #FwupdDeviceFlags to a string.
     * @param plugin_flag A #FwupdPluginFlags, e.g. %FWUPD_DEVICE_FLAG_REQUIRE_AC
     */
    static flag_to_string(plugin_flag: PluginFlags): string
    /**
     * Creates a new plugin using packed data.
     * @param value a #GVariant
     */
    static from_variant(value: GLib.Variant): Plugin
    static $gtype: GObject.Type
}
interface Release_ConstructProps extends GObject.Object_ConstructProps {
}
class Release {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Release */
    /**
     * Adds the update category.
     * @param category the update category, e.g. `X-EmbeddedController`
     */
    add_category(category: string): void
    /**
     * Sets the update checksum.
     * @param checksum the update checksum
     */
    add_checksum(checksum: string): void
    /**
     * Adds a specific release flag to the release.
     * @param flag the #FwupdReleaseFlags
     */
    add_flag(flag: ReleaseFlags): void
    /**
     * Adds an resolved issue to this release.
     * @param issue the update issue, e.g. `CVE-2019-12345`
     */
    add_issue(issue: string): void
    /**
     * Adds an update URI, i.e. where you can download the firmware from.
     * @param location the update URI
     */
    add_location(location: string): void
    /**
     * Sets multiple release metadata items.
     * @param hash the key-values
     */
    add_metadata(hash: GLib.HashTable): void
    /**
     * Sets a release metadata item.
     * @param key the key
     * @param value the value
     */
    add_metadata_item(key: string, value: string): void
    /**
     * Gets the AppStream ID.
     */
    get_appstream_id(): string
    /**
     * Gets the update branch.
     */
    get_branch(): string
    /**
     * Gets the release categories.
     */
    get_categories(): string[]
    /**
     * Gets the release checksums.
     */
    get_checksums(): string[]
    /**
     * Gets when the update was created.
     */
    get_created(): number
    /**
     * Gets the update description in AppStream markup format.
     */
    get_description(): string
    /**
     * Gets the optional text caption used to manually detach the device.
     */
    get_detach_caption(): string
    /**
     * Gets the optional image used to manually detach the device.
     */
    get_detach_image(): string
    /**
     * Gets the URL for the online update notes.
     */
    get_details_url(): string
    /**
     * Gets the update filename.
     */
    get_filename(): string
    /**
     * Gets the release flags.
     */
    get_flags(): ReleaseFlags
    /**
     * Gets the update homepage.
     */
    get_homepage(): string
    /**
     * Gets the time estimate for firmware installation (in seconds)
     */
    get_install_duration(): number
    /**
     * Gets the list of issues fixed in this release.
     */
    get_issues(): string[]
    /**
     * Gets the update license.
     */
    get_license(): string
    /**
     * Gets the update URI, i.e. where you can download the firmware from.
     * 
     * Typically the first URI will be the main HTTP mirror, but all URIs may not
     * be valid HTTP URIs. For example, "ipns://QmSrPmba" is valid here.
     */
    get_locations(): string[]
    /**
     * Gets the release metadata.
     */
    get_metadata(): GLib.HashTable
    /**
     * Gets a release metadata item.
     * @param key the key
     */
    get_metadata_item(key: string): string
    /**
     * Gets the update name.
     */
    get_name(): string
    /**
     * Gets the update variant suffix.
     */
    get_name_variant_suffix(): string
    /**
     * Gets the update protocol.
     */
    get_protocol(): string
    /**
     * Gets the remote ID that can be used for downloading.
     */
    get_remote_id(): string
    /**
     * Gets the update size.
     */
    get_size(): number
    /**
     * Gets the URL of the source code used to build this release.
     */
    get_source_url(): string
    /**
     * Gets the update summary.
     */
    get_summary(): string
    /**
     * Gets the trust level of the release.
     */
    get_trust_flags(): TrustFlags
    /**
     * Gets the update image.
     */
    get_update_image(): string
    /**
     * Gets the update message.
     */
    get_update_message(): string
    /**
     * Gets the release urgency.
     */
    get_urgency(): ReleaseUrgency
    /**
     * Gets the default update URI.
     */
    get_uri(): string
    /**
     * Gets the update vendor.
     */
    get_vendor(): string
    /**
     * Gets the update version.
     */
    get_version(): string
    /**
     * Finds out if the release has the update category.
     * @param category the update category, e.g. `X-EmbeddedController`
     */
    has_category(category: string): boolean
    /**
     * Finds out if the release has the update checksum.
     * @param checksum the update checksum
     */
    has_checksum(checksum: string): boolean
    /**
     * Finds if the release has a specific release flag.
     * @param flag the #FwupdReleaseFlags
     */
    has_flag(flag: ReleaseFlags): boolean
    /**
     * Removes a specific release flag from the release.
     * @param flag the #FwupdReleaseFlags
     */
    remove_flag(flag: ReleaseFlags): void
    /**
     * Sets the AppStream ID.
     * @param appstream_id the AppStream component ID, e.g. `org.hughski.ColorHug2.firmware`
     */
    set_appstream_id(appstream_id: string): void
    /**
     * Sets the alternate branch.
     * @param branch the update one line branch
     */
    set_branch(branch: string): void
    /**
     * Sets when the update was created.
     * @param created UTC timestamp in UNIX format
     */
    set_created(created: number): void
    /**
     * Sets the update description.
     * @param description the update description in AppStream markup format
     */
    set_description(description: string): void
    /**
     * Sets the optional text caption used to manually detach the device.
     * @param detach_caption string caption
     */
    set_detach_caption(detach_caption: string): void
    /**
     * Sets the optional image used to manually detach the device.
     * @param detach_image a fully qualified URI
     */
    set_detach_image(detach_image: string): void
    /**
     * Sets the URL for the online update notes.
     * @param details_url the URL
     */
    set_details_url(details_url: string): void
    /**
     * Sets the update filename.
     * @param filename the update filename on disk
     */
    set_filename(filename: string): void
    /**
     * Sets the release flags.
     * @param flags the release flags, e.g. %FWUPD_RELEASE_FLAG_TRUSTED_PAYLOAD
     */
    set_flags(flags: ReleaseFlags): void
    /**
     * Sets the update homepage.
     * @param homepage the description
     */
    set_homepage(homepage: string): void
    /**
     * Sets the time estimate for firmware installation (in seconds)
     * @param duration The amount of time
     */
    set_install_duration(duration: number): void
    /**
     * Sets the update license.
     * @param license the description
     */
    set_license(license: string): void
    /**
     * Sets the update name.
     * @param name the description
     */
    set_name(name: string): void
    /**
     * Sets the update variant suffix.
     * @param name_variant_suffix the description
     */
    set_name_variant_suffix(name_variant_suffix: string): void
    /**
     * Sets the update protocol.
     * @param protocol the update protocol, e.g. `org.usb.dfu`
     */
    set_protocol(protocol: string): void
    /**
     * Sets the remote ID that can be used for downloading.
     * @param remote_id the release ID, e.g. `USB:foo`
     */
    set_remote_id(remote_id: string): void
    /**
     * Sets the update size.
     * @param size the update size in bytes
     */
    set_size(size: number): void
    /**
     * Sets the URL of the source code used to build this release.
     * @param source_url the URL
     */
    set_source_url(source_url: string): void
    /**
     * Sets the update summary.
     * @param summary the update one line summary
     */
    set_summary(summary: string): void
    /**
     * Sets the trust level of the release.
     * @param trust_flags the bitfield, e.g. #FWUPD_TRUST_FLAG_PAYLOAD
     */
    set_trust_flags(trust_flags: TrustFlags): void
    /**
     * Sets the update image.
     * @param update_image the update image URL
     */
    set_update_image(update_image: string): void
    /**
     * Sets the update message.
     * @param update_message the update message string
     */
    set_update_message(update_message: string): void
    /**
     * Sets the release urgency.
     * @param urgency the release urgency, e.g. %FWUPD_RELEASE_FLAG_TRUSTED_PAYLOAD
     */
    set_urgency(urgency: ReleaseUrgency): void
    /**
     * Sets the update URI, i.e. where you can download the firmware from.
     * @param uri the update URI
     */
    set_uri(uri: string): void
    /**
     * Sets the update vendor.
     * @param vendor the vendor name, e.g. `Hughski Limited`
     */
    set_vendor(vendor: string): void
    /**
     * Sets the update version.
     * @param version the update version, e.g. `1.2.4`
     */
    set_version(version: string): void
    /**
     * Builds a text representation of the object.
     */
    to_string(): string
    /**
     * Creates a GVariant from the release data.
     */
    to_variant(): GLib.Variant
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Release, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Release, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Release_ConstructProps)
    _init (config?: Release_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Release
    /**
     * Creates an array of new releases using packed data.
     * @param value a #GVariant
     */
    static array_from_variant(value: GLib.Variant): Release[]
    /**
     * Converts a string to a #FwupdReleaseFlags.
     * @param release_flag A string, e.g. `trusted-payload`
     */
    static flag_from_string(release_flag: string): ReleaseFlags
    /**
     * Converts a #FwupdReleaseFlags to a string.
     * @param release_flag A #FwupdReleaseFlags, e.g. %FWUPD_RELEASE_FLAG_TRUSTED_PAYLOAD
     */
    static flag_to_string(release_flag: ReleaseFlags): string
    /**
     * Creates a new release using packed data.
     * @param value a #GVariant
     */
    static from_variant(value: GLib.Variant): Release
    /**
     * Converts a string to an enumerated value.
     * @param release_urgency A string, e.g. `low`
     */
    static urgency_from_string(release_urgency: string): ReleaseUrgency
    /**
     * Converts an enumerated value to a string.
     * @param release_urgency A #FwupdReleaseUrgency, e.g. %FWUPD_RELEASE_URGENCY_HIGH
     */
    static urgency_to_string(release_urgency: ReleaseUrgency): string
    static $gtype: GObject.Type
}
interface Remote_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Fwupd-2.0.Fwupd.Remote */
    /**
     * If firmware from the remote should be checked against the system
     * list of approved firmware.
     */
    approval_required?: boolean
    /**
     * The behavior for auto-uploading reports.
     */
    automatic_reports?: boolean
    /**
     * The behavior for auto-uploading security reports.
     */
    automatic_security_reports?: boolean
    /**
     * If the remote is enabled and should be used.
     */
    enabled?: boolean
    /**
     * The remote ID.
     */
    id?: string
}
class Remote {
    /* Properties of Fwupd-2.0.Fwupd.Remote */
    /**
     * If firmware from the remote should be checked against the system
     * list of approved firmware.
     */
    approval_required: boolean
    /**
     * The behavior for auto-uploading reports.
     */
    automatic_reports: boolean
    /**
     * The behavior for auto-uploading security reports.
     */
    automatic_security_reports: boolean
    /**
     * If the remote is enabled and should be used.
     */
    enabled: boolean
    /**
     * The remote ID.
     */
    id: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.Remote */
    /**
     * Builds a URI for the URL using the username and password set for the remote,
     * including any basename URI substitution.
     * @param url the URL to use
     */
    build_firmware_uri(url: string): string
    /**
     * Gets the age of the remote in seconds.
     */
    get_age(): number
    /**
     * Gets the remote agreement in AppStream markup format
     */
    get_agreement(): string
    /**
     * Gets if firmware from the remote should be checked against the list
     * of a approved checksums.
     */
    get_approval_required(): boolean
    /**
     * Gets if reports should be automatically uploaded to this remote
     */
    get_automatic_reports(): boolean
    /**
     * Gets if security reports should be automatically uploaded to this remote
     */
    get_automatic_security_reports(): boolean
    /**
     * Gets the remote checksum.
     */
    get_checksum(): string
    /**
     * Gets if the remote is enabled and should be used.
     */
    get_enabled(): boolean
    /**
     * Gets the path and filename that the remote is using for a cache.
     */
    get_filename_cache(): string
    /**
     * Gets the path and filename that the remote is using for a signature cache.
     */
    get_filename_cache_sig(): string
    /**
     * Gets the path and filename of the remote itself, typically a `.conf` file.
     */
    get_filename_source(): string
    /**
     * Gets the base URI for firmware.
     */
    get_firmware_base_uri(): string
    /**
     * Gets the remote ID, e.g. `lvfs-testing`.
     */
    get_id(): string
    /**
     * Gets the keyring kind of the remote.
     */
    get_keyring_kind(): KeyringKind
    /**
     * Gets the kind of the remote.
     */
    get_kind(): RemoteKind
    /**
     * Gets the URI for the remote metadata.
     */
    get_metadata_uri(): string
    /**
     * Gets the URI for the remote metadata signature.
     */
    get_metadata_uri_sig(): string
    /**
     * Gets the list of remotes this plugin should be ordered after.
     */
    get_order_after(): string[]
    /**
     * Gets the list of remotes this plugin should be ordered before.
     */
    get_order_before(): string[]
    /**
     * Gets the password configured for the remote.
     */
    get_password(): string
    /**
     * Gets the priority of the remote, where bigger numbers are better.
     */
    get_priority(): number
    /**
     * Gets the base directory for storing remote metadata
     */
    get_remotes_dir(): string
    /**
     * Gets the URI for the remote reporting.
     */
    get_report_uri(): string
    /**
     * Gets the URI for the security report.
     */
    get_security_report_uri(): string
    /**
     * Gets the remote title, e.g. `Linux Vendor Firmware Service`.
     */
    get_title(): string
    /**
     * Gets the username configured for the remote.
     */
    get_username(): string
    /**
     * Sets up the remote ready for use. Most other methods call this
     * for you, and do you only need to call this if you are just watching
     * the self.
     * @param filename A filename
     * @param cancellable the #GCancellable, or %NULL
     */
    load_from_filename(filename: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Parses the signature, updating the metadata URI as appropriate.
     * @param filename A filename
     */
    load_signature(filename: string): boolean
    /**
     * Parses the signature, updating the metadata URI as appropriate.
     * 
     * This can only be called for remotes with `Keyring=jcat` which is
     * the default for most remotes.
     * @param bytes A #GBytes
     */
    load_signature_bytes(bytes: GLib.Bytes): boolean
    /**
     * Sets the remote agreement in AppStream markup format
     * @param agreement Agreement markup
     */
    set_agreement(agreement: string): void
    /**
     * Sets the keyring kind
     * @param keyring_kind #FwupdKeyringKind e.g. #FWUPD_KEYRING_KIND_PKCS7
     */
    set_keyring_kind(keyring_kind: KeyringKind): void
    /**
     * Sets the plugin modification time.
     * @param mtime a UNIX itmestamp
     */
    set_mtime(mtime: number): void
    /**
     * Sets the plugin priority.
     * @param priority an integer, where 1 is better
     */
    set_priority(priority: number): void
    /**
     * Sets the directory to store remote data
     * @param directory Remotes directory
     */
    set_remotes_dir(directory: string): void
    /**
     * Creates a GVariant from the remote data.
     */
    to_variant(): GLib.Variant
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::approval-required", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::approval-required", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::automatic-reports", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-reports", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::automatic-security-reports", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-security-reports", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Remote, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Remote_ConstructProps)
    _init (config?: Remote_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Remote
    /**
     * Creates an array of new devices using packed data.
     * @param value a #GVariant
     */
    static array_from_variant(value: GLib.Variant): Remote[]
    /**
     * Creates a new remote using packed data.
     * @param value a #GVariant
     */
    static from_variant(value: GLib.Variant): Remote
    /**
     * Converts an printable string to an enumerated type.
     * @param kind a string, e.g. `download`
     */
    static kind_from_string(kind: string): RemoteKind
    /**
     * Converts an enumerated type to a printable string.
     * @param kind a #FwupdRemoteKind, e.g. %FWUPD_REMOTE_KIND_DOWNLOAD
     */
    static kind_to_string(kind: RemoteKind): string
    static $gtype: GObject.Type
}
interface SecurityAttr_ConstructProps extends GObject.Object_ConstructProps {
}
class SecurityAttr {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Fwupd-2.0.Fwupd.SecurityAttr */
    /**
     * Adds a specific self flag to the self.
     * @param flag the #FwupdSecurityAttrFlags
     */
    add_flag(flag: SecurityAttrFlags): void
    /**
     * Adds metadata to the attribute which may be used in the name.
     * @param key metadata key
     * @param value metadata value
     */
    add_metadata(key: string, value?: string | null): void
    /**
     * Adds an attribute appstream_id to obsolete. The obsoleted attribute will not
     * contribute to the calculated HSI value or be visible in command line tools.
     * @param appstream_id the appstream_id or plugin name
     */
    add_obsolete(appstream_id: string): void
    /**
     * Gets the AppStream ID.
     */
    get_appstream_id(): string
    /**
     * Gets the self flags.
     */
    get_flags(): SecurityAttrFlags
    /**
     * Gets the HSI level.
     */
    get_level(): SecurityAttrLevel
    /**
     * Gets private metadata from the attribute which may be used in the name.
     * @param key metadata key
     */
    get_metadata(key: string): string | null
    /**
     * Gets the attribute name.
     */
    get_name(): string
    /**
     * Gets the list of attribute obsoletes. The obsoleted attributes will not
     * contribute to the calculated HSI value or be visible in command line tools.
     */
    get_obsoletes(): string[]
    /**
     * Gets the plugin that created the attribute.
     */
    get_plugin(): string
    /**
     * Gets the optional HSI result.
     */
    get_result(): SecurityAttrResult
    /**
     * Gets the attribute URL.
     */
    get_url(): string
    /**
     * Finds if the self has a specific self flag.
     * @param flag the #FwupdSecurityAttrFlags
     */
    has_flag(flag: SecurityAttrFlags): boolean
    /**
     * Finds out if the attribute obsoletes a specific appstream_id.
     * @param appstream_id the attribute appstream_id
     */
    has_obsolete(appstream_id: string): boolean
    /**
     * Sets the AppStream ID.
     * @param appstream_id the AppStream component ID, e.g. `com.intel.BiosGuard`
     */
    set_appstream_id(appstream_id: string): void
    /**
     * Sets the self flags.
     * @param flags the self flags, e.g. %FWUPD_SECURITY_ATTR_FLAG_OBSOLETED
     */
    set_flags(flags: SecurityAttrFlags): void
    /**
     * Sets the HSI level. A `level` of %FWUPD_SECURITY_ATTR_LEVEL_NONE is not used
     * for the HSI calculation.
     * @param level A #FwupdSecurityAttrLevel, e.g. %FWUPD_SECURITY_ATTR_LEVEL_IMPORTANT
     */
    set_level(level: SecurityAttrLevel): void
    /**
     * Sets the attribute name.
     * @param name the attribute name
     */
    set_name(name: string): void
    /**
     * Sets the plugin that created the attribute.
     * @param plugin the plugin name
     */
    set_plugin(plugin: string): void
    /**
     * Sets the optional HSI result. This is required because some attributes may
     * be a "success" when something is `locked` or may be "failed" if `found`.
     * @param result A #FwupdSecurityAttrResult, e.g. %FWUPD_SECURITY_ATTR_LEVEL_LOCKED
     */
    set_result(result: SecurityAttrResult): void
    /**
     * Sets the attribute result.
     * @param url the attribute URL
     */
    set_url(url: string): void
    /**
     * Builds a text representation of the object.
     */
    to_string(): string
    /**
     * Creates a GVariant from the self data.
     */
    to_variant(): GLib.Variant
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SecurityAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SecurityAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SecurityAttr_ConstructProps)
    _init (config?: SecurityAttr_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(appstream_id?: string | null): SecurityAttr
    /**
     * Creates an array of new security_attrs using packed data.
     * @param value a #GVariant
     */
    static array_from_variant(value: GLib.Variant): SecurityAttr[]
    /**
     * Returns the printable string for the flag.
     * @param flag A #FwupdSecurityAttrFlags, e.g. %FWUPD_SECURITY_ATTR_FLAG_SUCCESS
     */
    static flag_to_string(flag: SecurityAttrFlags): string
    /**
     * Returns the string suffix for the flag.
     * @param flag A #FwupdSecurityAttrFlags, e.g. %FWUPD_SECURITY_ATTR_FLAG_RUNTIME_UPDATES
     */
    static flag_to_suffix(flag: SecurityAttrFlags): string
    /**
     * Creates a new self using packed data.
     * @param value a #GVariant
     */
    static from_variant(value: GLib.Variant): SecurityAttr
    /**
     * Returns the printable string for the result enum.
     * @param result A #FwupdSecurityAttrResult, e.g. %FWUPD_SECURITY_ATTR_RESULT_ENABLED
     */
    static result_to_string(result: SecurityAttrResult): string
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of Fwupd-2.0.Fwupd.ClientClass */
    parent_class: GObject.ObjectClass
    changed: (client: Client) => void
    status_changed: (client: Client, status: Status) => void
    device_added: (client: Client, result: Device) => void
    device_removed: (client: Client, result: Device) => void
    device_changed: (client: Client, result: Device) => void
    static name: string
}
abstract class DeviceClass {
    /* Fields of Fwupd-2.0.Fwupd.DeviceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class PluginClass {
    /* Fields of Fwupd-2.0.Fwupd.PluginClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class ReleaseClass {
    /* Fields of Fwupd-2.0.Fwupd.ReleaseClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class RemoteClass {
    /* Fields of Fwupd-2.0.Fwupd.RemoteClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class SecurityAttrClass {
    /* Fields of Fwupd-2.0.Fwupd.SecurityAttrClass */
    parent_class: GObject.ObjectClass
    static name: string
}
    type DeviceFlags = number
    type PluginFlags = number
    type ReleaseFlags = number
}
export default Fwupd;