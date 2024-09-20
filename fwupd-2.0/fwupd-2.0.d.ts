/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Json from '@girs/json-1.0';
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
     */

    /**
     * The type of BIOS setting.
     */
    export namespace BiosSettingKind {
        export const $gtype: GObject.GType<BiosSettingKind>;
    }

    enum BiosSettingKind {
        /**
         * BIOS setting type is unknown
         */
        UNKNOWN,
        /**
         * BIOS setting that has enumerated possible
         * values
         */
        ENUMERATION,
        /**
         * BIOS setting that is an integer
         */
        INTEGER,
        /**
         * BIOS setting that accepts a string
         */
        STRING,
    }
    /**
     * The error code.
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

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
         * Already set to be installed offline
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
        /**
         * Failed to get auth as credentials have expired
         */
        static AUTH_EXPIRED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    /**
     * Type of keyring used on a remote.
     */

    /**
     * Type of keyring used on a remote.
     */
    export namespace KeyringKind {
        export const $gtype: GObject.GType<KeyringKind>;
    }

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

    /**
     * The release urgency.
     */
    export namespace ReleaseUrgency {
        export const $gtype: GObject.GType<ReleaseUrgency>;
    }

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

    /**
     * The kind of remote.
     */
    export namespace RemoteKind {
        export const $gtype: GObject.GType<RemoteKind>;
    }

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
     * The kind of request we are asking of the user.
     */

    /**
     * The kind of request we are asking of the user.
     */
    export namespace RequestKind {
        export const $gtype: GObject.GType<RequestKind>;
    }

    enum RequestKind {
        /**
         * Unknown kind
         */
        UNKNOWN,
        /**
         * After the update
         */
        POST,
        /**
         * Immediately
         */
        IMMEDIATE,
    }
    /**
     * The HSI level.
     */

    /**
     * The HSI level.
     */
    export namespace SecurityAttrLevel {
        export const $gtype: GObject.GType<SecurityAttrLevel>;
    }

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
         * Firmware security issues considered
         * important
         */
        IMPORTANT,
        /**
         * Firmware security issues that pose a
         * theoretical concern
         */
        THEORETICAL,
        /**
         * Out-of-band protection of the system
         * firmware
         */
        SYSTEM_PROTECTION,
        /**
         * Out-of-band attestation of the system
         * firmware
         */
        SYSTEM_ATTESTATION,
    }
    /**
     * The HSI result.
     */

    /**
     * The HSI result.
     */
    export namespace SecurityAttrResult {
        export const $gtype: GObject.GType<SecurityAttrResult>;
    }

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

    /**
     * The flags to show daemon status.
     */
    export namespace Status {
        export const $gtype: GObject.GType<Status>;
    }

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
        WAITING_FOR_USER,
    }
    /**
     * The update state.
     */

    /**
     * The update state.
     */
    export namespace UpdateState {
        export const $gtype: GObject.GType<UpdateState>;
    }

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
         * Update failed due to transient issue, e.g. AC power
         * required
         */
        FAILED_TRANSIENT,
    }
    /**
     * The flags used when parsing version numbers.
     *
     * If no verification is required then %FWUPD_VERSION_FORMAT_PLAIN should
     * be used to signify an unparsable text string.
     */

    /**
     * The flags used when parsing version numbers.
     *
     * If no verification is required then %FWUPD_VERSION_FORMAT_PLAIN should
     * be used to signify an unparsable text string.
     */
    export namespace VersionFormat {
        export const $gtype: GObject.GType<VersionFormat>;
    }

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
     * This value signifies the battery level is either unset, or the value cannot
     * be discovered.
     */
    const BATTERY_LEVEL_INVALID: number;
    const BIOS_SETTING_DEBUG_CMD: string;
    const BIOS_SETTING_PENDING_REBOOT: string;
    const BIOS_SETTING_RESET_BIOS: string;
    /**
     * The dbus interface
     */
    const DBUS_INTERFACE: string;
    /**
     * The D-Bus socket address when using point-to-point connections.
     *
     * NOTE: This is no longer used as the value is set at compile time.
     */
    const DBUS_P2P_SOCKET_ADDRESS: string;
    /**
     * The dbus path
     */
    const DBUS_PATH: string;
    /**
     * The dbus service
     */
    const DBUS_SERVICE: string;
    /**
     * The device will add counterpart GUIDs from an alternate mode like bootloader.
     * This flag is typically specified in a quirk.
     */
    const DEVICE_FLAG_ADD_COUNTERPART_GUIDS: number;
    /**
     * The device is warning that a volume with full-disk-encryption was found on this machine,
     * typically a Windows NTFS partition with BitLocker.
     * Updating the firmware on this device may invalidate secrets used to decrypt the volume, and
     * the recovery key may be required.
     *
     * Supported clients will display this information as a warning to the user.
     */
    const DEVICE_FLAG_AFFECTS_FDE: number;
    /**
     * The device requires the update to be retried, possibly with a different plugin.
     */
    const DEVICE_FLAG_ANOTHER_WRITE_REQUIRED: number;
    /**
     * The device firmware should be saved before installing firmware.
     */
    const DEVICE_FLAG_BACKUP_BEFORE_INSTALL: number;
    /**
     * The device checksums can be compared against metadata.
     */
    const DEVICE_FLAG_CAN_VERIFY: number;
    /**
     * The device application firmware image can be dumped from device for verification.
     */
    const DEVICE_FLAG_CAN_VERIFY_IMAGE: number;
    /**
     * The device firmware update architecture uses a redundancy mechanism such
     * as A/B partitions for updates.
     */
    const DEVICE_FLAG_DUAL_IMAGE: number;
    /**
     * The device is emulated and should not be recorded by the backend.
     */
    const DEVICE_FLAG_EMULATED: number;
    /**
     * The device should be recorded by the backend, allowing emulation.
     */
    const DEVICE_FLAG_EMULATION_TAG: number;
    /**
     * The device is no longer supported by the original hardware vendor as it is considered
     * end-of-life. It it unlikely to receive firmware updates, even for security issues.
     */
    const DEVICE_FLAG_END_OF_LIFE: number;
    /**
     * Deprecated, no not use
     */
    const DEVICE_FLAG_ENSURE_SEMVER: number;
    /**
     * The device supports switching to a different stream of firmware.
     */
    const DEVICE_FLAG_HAS_MULTIPLE_BRANCHES: number;
    /**
     * The device is used for historical data only.
     */
    const DEVICE_FLAG_HISTORICAL: number;
    /**
     * When processing an update for the device, plugins should ignore all validation safety checks.
     */
    const DEVICE_FLAG_IGNORE_VALIDATION: number;
    /**
     * Install each intermediate releases for the device rather than jumping directly to the newest.
     */
    const DEVICE_FLAG_INSTALL_ALL_RELEASES: number;
    /**
     * The composite device requires installation of composite firmware on the parent before the child.
     * Normally the child is installed before the parent.
     */
    const DEVICE_FLAG_INSTALL_PARENT_FIRST: number;
    /**
     * Device is internal to the platform and cannot be removed easily.
     *
     * Since 0.1.3
     */
    const DEVICE_FLAG_INTERNAL: number;
    /**
     * The device is currently in a read-only bootloader mode and not running application code.
     */
    const DEVICE_FLAG_IS_BOOTLOADER: number;
    /**
     * The device can not be updated without manual user interaction.
     *
     * Since 0.6.3
     */
    const DEVICE_FLAG_LOCKED: number;
    /**
     * Deprecated, no not use
     */
    const DEVICE_FLAG_MD_SET_ICON: number;
    /**
     * Deprecated, no not use
     */
    const DEVICE_FLAG_MD_SET_NAME: number;
    /**
     * Deprecated, no not use
     */
    const DEVICE_FLAG_MD_SET_NAME_CATEGORY: number;
    /**
     * Deprecated, no not use
     */
    const DEVICE_FLAG_MD_SET_VERFMT: number;
    /**
     * The device update needs to be separately activated.
     * This process may occur automatically on shutdown in some operating systems
     * or when the device is unplugged with some devices.
     */
    const DEVICE_FLAG_NEEDS_ACTIVATION: number;
    /**
     * The device requires entering a bootloader mode to be manually.
     *
     * Since 0.7.3
     */
    const DEVICE_FLAG_NEEDS_BOOTLOADER: number;
    /**
     * The device requires a system reboot to apply firmware or to reload hardware.
     *
     * Since 0.9.7
     */
    const DEVICE_FLAG_NEEDS_REBOOT: number;
    /**
     * The device requires the system to be shutdown to finish application of new firmware.
     */
    const DEVICE_FLAG_NEEDS_SHUTDOWN: number;
    /**
     * No flags set
     *
     * Since 0.1.3
     */
    const DEVICE_FLAG_NONE: number;
    /**
     * The user has been notified about a change in the device state.
     */
    const DEVICE_FLAG_NOTIFIED: number;
    /**
     * Deprecated, no not use
     */
    const DEVICE_FLAG_NO_AUTO_INSTANCE_IDS: number;
    /**
     * Deprecated, no not use
     */
    const DEVICE_FLAG_NO_GUID_MATCHING: number;
    /**
     * The device should stay on one firmware version unless the new version is explicitly specified.
     *
     * This can either be done using `fwupdmgr install`, using GNOME Firmware, or using a BKC config.
     */
    const DEVICE_FLAG_ONLY_EXPLICIT_UPDATES: number;
    /**
     * Update can only be done from a limited functionality OS (offline mode).
     *
     * Since 0.9.7
     */
    const DEVICE_FLAG_ONLY_OFFLINE: number;
    /**
     * Deprecated, no not use
     */
    const DEVICE_FLAG_ONLY_SUPPORTED: number;
    /**
     * The device firmware can only be updated to a newer version and never downgraded or reinstalled.
     *
     * Since 1.6.2
     */
    const DEVICE_FLAG_ONLY_VERSION_UPGRADE: number;
    /**
     * The device has been registered with other plugins.
     *
     * Since 0.9.7
     */
    const DEVICE_FLAG_REGISTERED: number;
    /**
     * The success or failure of a previous update has been reported to a metadata server.
     */
    const DEVICE_FLAG_REPORTED: number;
    /**
     * Device requires an external power source to be connected or the battery
     * level at a minimum threshold to update.
     *
     * Since 0.6.3
     */
    const DEVICE_FLAG_REQUIRE_AC: number;
    /**
     * In flashing mode, the device will only accept intended payloads and will
     * revert back to a valid firmware image if an invalid or incomplete payload was sent.
     */
    const DEVICE_FLAG_SELF_RECOVERY: number;
    /**
     * The firmware payload is verified on-device the payload using strong cryptography such
     * as RSA, AES or ECC.
     *
     * It is usually not possible to modify or flash custom firmware not provided by the vendor.
     */
    const DEVICE_FLAG_SIGNED_PAYLOAD: number;
    /**
     * The device relies upon activation or power cycle to load firmware.
     */
    const DEVICE_FLAG_SKIPS_RESTART: number;
    /**
     * The device is found in metadata loaded into the daemon.
     *
     * Since 0.7.1
     */
    const DEVICE_FLAG_SUPPORTED: number;
    /**
     * A trusted client is reading information about the device.
     * Extra metadata such as serial number can be exposed about this device.
     */
    const DEVICE_FLAG_TRUSTED: number;
    /**
     * The device is currently unreachable, perhaps because it is in a lower power state or is out of
     * wireless range.
     *
     * Since 1.7.0
     */
    const DEVICE_FLAG_UNREACHABLE: number;
    /**
     * The firmware payload is unsigned and it is possible to modify and flash custom firmware.
     */
    const DEVICE_FLAG_UNSIGNED_PAYLOAD: number;
    /**
     * Device has the ability to be updated in this or any other mode.
     *
     * Since 0.9.7
     */
    const DEVICE_FLAG_UPDATABLE: number;
    /**
     * The device is updatable but is currently inhibited from updates in the client.
     * Reasons include but are not limited to low power or requiring reboot from a previous update.
     */
    const DEVICE_FLAG_UPDATABLE_HIDDEN: number;
    /**
     * The device remains usable while the update flashes or schedules the update.
     * The update will implicitly be applied next time the device is power cycled or possibly activated.
     */
    const DEVICE_FLAG_USABLE_DURING_UPDATE: number;
    /**
     * The device will always display use the runtime version rather than the bootloader version.
     */
    const DEVICE_FLAG_USE_RUNTIME_VERSION: number;
    /**
     * All firmware updates for this device require a firmware version check.
     */
    const DEVICE_FLAG_VERSION_CHECK_REQUIRED: number;
    /**
     * The device is in the middle of and update and the hardware is waiting to be probed/replugged.
     */
    const DEVICE_FLAG_WAIT_FOR_REPLUG: number;
    /**
     * All devices with matching GUIDs will be updated at the same time.
     *
     * For some devices it is not possible to have different versions of firmware
     * for hardware of the same type. Updating one device will force update of
     * others with exactly the same instance IDs.
     */
    const DEVICE_FLAG_WILDCARD_INSTALL: number;
    /**
     * The device will disappear after the update is complete and success
     * or failure can't be verified.
     */
    const DEVICE_FLAG_WILL_DISAPPEAR: number;
    /**
     * Wildcard used for matching all device ids in fwupd
     */
    const DEVICE_ID_ANY: string;
    /**
     * The device cannot be used while there are no displays plugged in.
     *
     * Since 1.9.6
     */
    const DEVICE_PROBLEM_DISPLAY_REQUIRED: number;
    /**
     * The device is in use and cannot be interrupted, for instance taking a phone call.
     *
     * Since 1.9.1
     */
    const DEVICE_PROBLEM_IN_USE: number;
    /**
     * The device is emulated from a different host.
     *
     * Since 1.8.3
     */
    const DEVICE_PROBLEM_IS_EMULATED: number;
    /**
     * The device cannot be used while the laptop lid is closed.
     *
     * Since 1.8.1
     */
    const DEVICE_PROBLEM_LID_IS_CLOSED: number;
    /**
     * The device cannot be updated due to missing vendor's license.
     *
     * Since 1.8.6
     */
    const DEVICE_PROBLEM_MISSING_LICENSE: number;
    /**
     * No device problems detected.
     *
     * Since 1.8.1
     */
    const DEVICE_PROBLEM_NONE: number;
    /**
     * The device battery power is too low.
     *
     * Since 1.8.1
     */
    const DEVICE_PROBLEM_POWER_TOO_LOW: number;
    /**
     * The device requires AC power to be connected.
     *
     * Since 1.8.1
     */
    const DEVICE_PROBLEM_REQUIRE_AC_POWER: number;
    /**
     * The device cannot be updated due to a system-wide inhibit.
     *
     * Since 1.8.10
     */
    const DEVICE_PROBLEM_SYSTEM_INHIBIT: number;
    /**
     * The system power is too low to perform the update.
     *
     * Since 1.8.1
     */
    const DEVICE_PROBLEM_SYSTEM_POWER_TOO_LOW: number;
    /**
     * The device is unreachable, or out of wireless range.
     *
     * Since 1.8.1
     */
    const DEVICE_PROBLEM_UNREACHABLE: number;
    /**
     * The device cannot be updated as it is already being updated.
     *
     * Since 1.8.11
     */
    const DEVICE_PROBLEM_UPDATE_IN_PROGRESS: number;
    /**
     * The device is waiting for the update to be applied.
     *
     * Since 1.8.1
     */
    const DEVICE_PROBLEM_UPDATE_PENDING: number;
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
     * The plugin requires the user to provide authentication details.
     * Supported clients will display this information to a user.
     */
    const PLUGIN_FLAG_AUTH_REQUIRED: number;
    /**
     * The plugin discovered that UEFI UpdateCapsule are unsupported.
     * Supported clients will display this information to a user.
     */
    const PLUGIN_FLAG_CAPSULES_UNSUPPORTED: number;
    /**
     * When the plugin loads it should clear the UPDATABLE flag from any devices.
     * This typically happens when the device requires a system restart.
     */
    const PLUGIN_FLAG_CLEAR_UPDATABLE: number;
    /**
     * The plugin has been disabled, either by daemon configuration or a problem.
     */
    const PLUGIN_FLAG_DISABLED: number;
    /**
     * The plugin discovered the efivar filesystem is not found and is required for this plugin.
     * Supported clients will display this information to a user.
     */
    const PLUGIN_FLAG_EFIVAR_NOT_MOUNTED: number;
    /**
     * The plugins discovered that the EFI system partition was not found.
     * Supported clients will display this information to a user.
     */
    const PLUGIN_FLAG_ESP_NOT_FOUND: number;
    /**
     * The plugins discovered that the EFI system partition may not be valid.
     * Supported clients will display this information to a user.
     */
    const PLUGIN_FLAG_ESP_NOT_VALID: number;
    /**
     * Failed to open plugin (missing dependency).
     * Supported clients will display this information to a user.
     */
    const PLUGIN_FLAG_FAILED_OPEN: number;
    /**
     * The feature is not supported as the kernel is too old.
     */
    const PLUGIN_FLAG_KERNEL_TOO_OLD: number;
    /**
     * The plugin discovered the system is running in legacy CSM mode.
     * Supported clients will display this information to a user.
     */
    const PLUGIN_FLAG_LEGACY_BIOS: number;
    /**
     * The plugin will be checked that it preserves system state such as `KEK`, `PK`, `BOOT####` etc.
     */
    const PLUGIN_FLAG_MEASURE_SYSTEM_INTEGRITY: number;
    /**
     * The plugin is loaded from an external module.
     */
    const PLUGIN_FLAG_MODULAR: number;
    /**
     * No plugin flags are set.
     */
    const PLUGIN_FLAG_NONE: number;
    /**
     * The plugin won't load because no supported hardware was found.
     * This typically happens with plugins designed for a specific platform design
     * (such as the dell plugin only works on Dell systems).
     */
    const PLUGIN_FLAG_NO_HARDWARE: number;
    /**
     * The plugin is ready for use and all devices have been coldplugged.
     */
    const PLUGIN_FLAG_READY: number;
    /**
     * A specific HWID is required to use this plugin.
     */
    const PLUGIN_FLAG_REQUIRE_HWID: number;
    /**
     * The plugin requires the config file to be saved with permissions that only allow the root user
     * to read.
     */
    const PLUGIN_FLAG_SECURE_CONFIG: number;
    /**
     * The plugin is used for virtual devices that exercising daemon flows.
     */
    const PLUGIN_FLAG_TEST_ONLY: number;
    /**
     * The plugin discovered that hardware unlock is required.
     * Supported clients will display this information to a user.
     */
    const PLUGIN_FLAG_UNLOCK_REQUIRED: number;
    /**
     * The plugin has a problem and would like to show a user warning to a supported client.
     */
    const PLUGIN_FLAG_USER_WARNING: number;
    /**
     * The installation of the release is blocked as release not approved by an administrator.
     */
    const RELEASE_FLAG_BLOCKED_APPROVAL: number;
    /**
     * The installation of the release is blocked as below device version-lowest.
     */
    const RELEASE_FLAG_BLOCKED_VERSION: number;
    /**
     * The release is an alternate branch of firmware.
     */
    const RELEASE_FLAG_IS_ALTERNATE_BRANCH: number;
    /**
     * The release is supported by the community and not the hardware vendor.
     */
    const RELEASE_FLAG_IS_COMMUNITY: number;
    /**
     * The release is older than the device version.
     */
    const RELEASE_FLAG_IS_DOWNGRADE: number;
    /**
     * The release is newer than the device version.
     */
    const RELEASE_FLAG_IS_UPGRADE: number;
    /**
     * No flags are set.
     */
    const RELEASE_FLAG_NONE: number;
    /**
     * The payload metadata is trusted.
     */
    const RELEASE_FLAG_TRUSTED_METADATA: number;
    /**
     * The payload binary is trusted.
     */
    const RELEASE_FLAG_TRUSTED_PAYLOAD: number;
    /**
     * The payload has been tested by a report we trust.
     */
    const RELEASE_FLAG_TRUSTED_REPORT: number;
    /**
     * The report was generated by the OEM.
     */
    const REPORT_FLAG_FROM_OEM: number;
    /**
     * The new firmware was newer than the old firmware.
     */
    const REPORT_FLAG_IS_UPGRADE: number;
    /**
     * No report flags are set.
     */
    const REPORT_FLAG_NONE: number;
    /**
     * Use a generic (translated) request image.
     */
    const REQUEST_FLAG_ALLOW_GENERIC_IMAGE: number;
    /**
     * Use a generic (translated) request message.
     */
    const REQUEST_FLAG_ALLOW_GENERIC_MESSAGE: number;
    /**
     * No flags are set.
     */
    const REQUEST_FLAG_NONE: number;
    /**
     * Device requires to show the user a custom image for the action to make sense.
     */
    const REQUEST_FLAG_NON_GENERIC_IMAGE: number;
    /**
     * Device requires a non-generic interaction with custom non-translatable text.
     */
    const REQUEST_FLAG_NON_GENERIC_MESSAGE: number;
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
     * Result key to represent AppstreamId
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_APPSTREAM_ID: string;
    /**
     * Result key to represent the current battery level in percent.
     * Expressed from 0-100%, or 101 for invalid or unset.
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_BATTERY_LEVEL: string;
    /**
     * Result key to represent the minimum battery level required to perform an update.
     * Expressed from 0-100%, or 101 for invalid or unset.
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_BATTERY_THRESHOLD: string;
    /**
     * Result key to represent the current value of BIOS setting.
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_BIOS_SETTING_CURRENT_VALUE: string;
    /**
     * Result key to represent the unique identifier of the BIOS setting.
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_BIOS_SETTING_ID: string;
    /**
     * Result key to represent the upper bound for an integer BIOS setting.
     * or minimum length for string BIOS setting.
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_BIOS_SETTING_LOWER_BOUND: string;
    /**
     * Result key to represent possible values
     *
     * The D-Bus type signature string is 'as' i.e. an array of strings.
     */
    const RESULT_KEY_BIOS_SETTING_POSSIBLE_VALUES: string;
    /**
     * Result key to represent whether BIOS setting is read only
     *
     * The D-Bus type signature string is 'b' i.e. a boolean.
     */
    const RESULT_KEY_BIOS_SETTING_READ_ONLY: string;
    /**
     * Result key to represent the scalar increment for an integer BIOS setting.
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_BIOS_SETTING_SCALAR_INCREMENT: string;
    /**
     * Result key to represent the value that would enable this attribute.
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_BIOS_SETTING_TARGET_VALUE: string;
    /**
     * Result key to represent the type of BIOS setting.
     * 0 is invalid, 1+ represent an attribute type
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_BIOS_SETTING_TYPE: string;
    /**
     * Result key to represent the lower bound for an integer BIOS setting
     * or maximum length for string BIOS setting.
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_BIOS_SETTING_UPPER_BOUND: string;
    /**
     * Result key to represent Branch
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_BRANCH: string;
    /**
     * Result key to represent Categories
     *
     * The D-Bus type signature string is 'as' i.e. an array of strings.
     */
    const RESULT_KEY_CATEGORIES: string;
    /**
     * Result key to represent Checksum
     *
     * The D-Bus type signature string is 'as' i.e. an array of strings.
     */
    const RESULT_KEY_CHECKSUM: string;
    /**
     * Result key to represent CompositeId
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_COMPOSITE_ID: string;
    /**
     * Result key to represent Created
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_CREATED: string;
    /**
     * Result key to represent Description
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_DESCRIPTION: string;
    /**
     * Result key to represent DetachCaption
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_DETACH_CAPTION: string;
    /**
     * Result key to represent DetachImage
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_DETACH_IMAGE: string;
    /**
     * Result key to represent DetailsUrl
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_DETAILS_URL: string;
    /**
     * Result key to represent DeviceId
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_DEVICE_ID: string;
    /**
     * Result key to represent the device name.
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_DEVICE_NAME: string;
    /**
     * Result key to represent the distribution ID.
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_DISTRO_ID: string;
    /**
     * Result key to represent the distribution variant.
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_DISTRO_VARIANT: string;
    /**
     * Result key to represent the distribution version.
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_DISTRO_VERSION: string;
    /**
     * Result key to represent Filename
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_FILENAME: string;
    /**
     * Result key to represent Flags
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_FLAGS: string;
    /**
     * Result key to represent FlashesLeft
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_FLASHES_LEFT: string;
    /**
     * Result key to represent Guid
     *
     * The D-Bus type signature string is 'as' i.e. an array of strings.
     */
    const RESULT_KEY_GUID: string;
    /**
     * Result key to represent Homepage
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_HOMEPAGE: string;
    /**
     * Result key to represent HsiLevel
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_HSI_LEVEL: string;
    /**
     * Result key to represent HsiResult
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_HSI_RESULT: string;
    /**
     * Result key to represent the fallback HsiResult
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_HSI_RESULT_FALLBACK: string;
    /**
     * Result key to represent the desired HsiResult
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_HSI_RESULT_SUCCESS: string;
    /**
     * Result key to represent Icon
     *
     * The D-Bus type signature string is 'as' i.e. an array of strings.
     */
    const RESULT_KEY_ICON: string;
    /**
     * Result key to represent InstallDuration
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_INSTALL_DURATION: string;
    /**
     * Result key to represent InstanceIds
     *
     * The D-Bus type signature string is 'as' i.e. an array of strings.
     */
    const RESULT_KEY_INSTANCE_IDS: string;
    /**
     * Result key to represent Issues
     *
     * The D-Bus type signature string is 'as' i.e. an array of strings.
     */
    const RESULT_KEY_ISSUES: string;
    /**
     * Result key to represent the current kernel setting.
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_KERNEL_CURRENT_VALUE: string;
    /**
     * Result key to represent the target kernel setting.
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_KERNEL_TARGET_VALUE: string;
    /**
     * Result key to represent License
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_LICENSE: string;
    /**
     * Result key to represent Locations
     *
     * The D-Bus type signature string is 'as' i.e. an array of strings.
     */
    const RESULT_KEY_LOCATIONS: string;
    /**
     * Result key to represent Metadata
     *
     * The D-Bus type signature string is 'a{ss}' i.e. a string dictionary.
     */
    const RESULT_KEY_METADATA: string;
    /**
     * Result key to represent Modified
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_MODIFIED: string;
    /**
     * Result key to represent Name
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_NAME: string;
    /**
     * Result key to represent NameVariantSuffix
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_NAME_VARIANT_SUFFIX: string;
    /**
     * Result key to represent ParentDeviceId
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_PARENT_DEVICE_ID: string;
    /**
     * Result key to represent progress percentage, typically installation or verification
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_PERCENTAGE: string;
    /**
     * Result key to represent Plugin
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_PLUGIN: string;
    /**
     * Result key to represent problems
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_PROBLEMS: string;
    /**
     * Result key to represent Protocol
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_PROTOCOL: string;
    /**
     * Result key to represent Release
     *
     * The D-Bus type signature string is 'a{sv}' i.e. a variant dictionary.
     */
    const RESULT_KEY_RELEASE: string;
    /**
     * Result key to represent the release ID.
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_RELEASE_ID: string;
    /**
     * Result key to represent RemoteId
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_REMOTE_ID: string;
    /**
     * Result key to represent an array of reports.
     *
     * The D-Bus type signature string is 'a{sv}' i.e. a variant dictionary.
     */
    const RESULT_KEY_REPORTS: string;
    /**
     * Result key to represent RequestFlags
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_REQUEST_FLAGS: string;
    /**
     * Result key to represent RequestKind
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_REQUEST_KIND: string;
    /**
     * Result key to represent Serial
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_SERIAL: string;
    /**
     * Result key to represent Size
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_SIZE: string;
    /**
     * Result key to represent SourceUrl
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_SOURCE_URL: string;
    /**
     * Result key to represent Status
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_STATUS: string;
    /**
     * Result key to represent Summary
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_SUMMARY: string;
    /**
     * Result key to represent release tags
     *
     * The D-Bus type signature string is 'as' i.e. an array of strings.
     */
    const RESULT_KEY_TAGS: string;
    /**
     * Result key to represent TrustFlags
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_TRUST_FLAGS: string;
    /**
     * Result key to represent UpdateError
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_UPDATE_ERROR: string;
    /**
     * Result key to represent UpdateImage
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_UPDATE_IMAGE: string;
    /**
     * Result key to represent UpdateMessage
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_UPDATE_MESSAGE: string;
    /**
     * Result key to represent UpdateState
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_UPDATE_STATE: string;
    /**
     * Result key to represent Urgency
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_URGENCY: string;
    /**
     * Result key to represent Uri
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_URI: string;
    /**
     * Result key to represent Vendor
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_VENDOR: string;
    /**
     * Result key to represent VendorId
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_VENDOR_ID: string;
    /**
     * Result key to represent Version
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_VERSION: string;
    /**
     * Result key to represent VersionBootloader
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_VERSION_BOOTLOADER: string;
    /**
     * Result key to represent VersionBootloaderRaw
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_VERSION_BOOTLOADER_RAW: string;
    /**
     * Result key to represent VersionBuildDate
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_VERSION_BUILD_DATE: string;
    /**
     * Result key to represent VersionFormat
     *
     * The D-Bus type signature string is 'u' i.e. a unsigned 32 bit integer.
     */
    const RESULT_KEY_VERSION_FORMAT: string;
    /**
     * Result key to represent VersionLowest
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_VERSION_LOWEST: string;
    /**
     * Result key to represent VersionLowestRaw
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_VERSION_LOWEST_RAW: string;
    /**
     * Result key to represent the old version string.
     *
     * The D-Bus type signature string is 's' i.e. a string.
     */
    const RESULT_KEY_VERSION_OLD: string;
    /**
     * Result key to represent VersionRaw
     *
     * The D-Bus type signature string is 't' i.e. a unsigned 64 bit integer.
     */
    const RESULT_KEY_VERSION_RAW: string;
    /**
     * Host Security ID attribute for Rollback protection of AMD platform
     * firmware
     */
    const SECURITY_ATTR_ID_AMD_ROLLBACK_PROTECTION: string;
    /**
     * Host Security ID attribute for SPI replay protection
     */
    const SECURITY_ATTR_ID_AMD_SPI_REPLAY_PROTECTION: string;
    /**
     * Host Security ID attribute for SPI Write protection
     */
    const SECURITY_ATTR_ID_AMD_SPI_WRITE_PROTECTION: string;
    /**
     * Host Security ID attribute indicating Capsule updates are supported by the BIOS.
     */
    const SECURITY_ATTR_ID_BIOS_CAPSULE_UPDATES: string;
    /**
     * Host Security ID attribute for Rollback protection of BIOS firmware
     */
    const SECURITY_ATTR_ID_BIOS_ROLLBACK_PROTECTION: string;
    /**
     * Host Security ID attribute indicating encrypted RAM available
     */
    const SECURITY_ATTR_ID_ENCRYPTED_RAM: string;
    /**
     * Host Security ID attribute for attestation
     */
    const SECURITY_ATTR_ID_FWUPD_ATTESTATION: string;
    /**
     * Host Security ID attribute for plugins
     */
    const SECURITY_ATTR_ID_FWUPD_PLUGINS: string;
    /**
     * Host Security ID attribute for updates
     */
    const SECURITY_ATTR_ID_FWUPD_UPDATES: string;
    /**
     * Host Security ID attribute for host emulation
     */
    const SECURITY_ATTR_ID_HOST_EMULATION: string;
    /**
     * Host Security ID attribute for Intel Bootguard ACM
     */
    const SECURITY_ATTR_ID_INTEL_BOOTGUARD_ACM: string;
    /**
     * Host Security ID attribute for Intel Bootguard enabled
     */
    const SECURITY_ATTR_ID_INTEL_BOOTGUARD_ENABLED: string;
    /**
     * Host Security ID attribute for Intel Bootguard OTP fuse
     */
    const SECURITY_ATTR_ID_INTEL_BOOTGUARD_OTP: string;
    /**
     * Host Security ID attribute for Intel Bootguard policy
     */
    const SECURITY_ATTR_ID_INTEL_BOOTGUARD_POLICY: string;
    /**
     * Host Security ID attribute for Intel Bootguard verified
     */
    const SECURITY_ATTR_ID_INTEL_BOOTGUARD_VERIFIED: string;
    /**
     * Host Security ID attribute for Intel CET active
     */
    const SECURITY_ATTR_ID_INTEL_CET_ACTIVE: string;
    /**
     * Host Security ID attribute for Intel CET enabled
     */
    const SECURITY_ATTR_ID_INTEL_CET_ENABLED: string;
    /**
     * Host Security ID attribute indicating the processor is safe against Gather Data Sampling.
     */
    const SECURITY_ATTR_ID_INTEL_GDS: string;
    /**
     * Host Security ID attribute for Intel SMAP
     */
    const SECURITY_ATTR_ID_INTEL_SMAP: string;
    /**
     * Host Security ID attribute for IOMMU
     */
    const SECURITY_ATTR_ID_IOMMU: string;
    /**
     * Host Security ID attribute for kernel lockdown
     */
    const SECURITY_ATTR_ID_KERNEL_LOCKDOWN: string;
    /**
     * Host Security ID attribute for kernel swap
     */
    const SECURITY_ATTR_ID_KERNEL_SWAP: string;
    /**
     * Host Security ID attribute for kernel taint
     */
    const SECURITY_ATTR_ID_KERNEL_TAINTED: string;
    /**
     * Host Security ID attribute for Intel ME Key Manifest
     */
    const SECURITY_ATTR_ID_MEI_KEY_MANIFEST: string;
    /**
     * Host Security ID attribute for Intel ME manufacturing mode
     */
    const SECURITY_ATTR_ID_MEI_MANUFACTURING_MODE: string;
    /**
     * Host Security ID attribute for Intel ME override strap
     */
    const SECURITY_ATTR_ID_MEI_OVERRIDE_STRAP: string;
    /**
     * Host Security ID attribute for Intel ME version
     */
    const SECURITY_ATTR_ID_MEI_VERSION: string;
    /**
     * Host Security ID attribute for parts with debugging capabilities enabled
     *
     * This was previously known as org.fwupd.hsi.PlatformDebugEnabled for Intel 1.5.0+
     * It was renamed for all vendor support in 1.8.0. *
     */
    const SECURITY_ATTR_ID_PLATFORM_DEBUG_ENABLED: string;
    /**
     * Host Security ID attribute for parts locked from debugging
     *
     * This was previously known as org.fwupd.hsi.IntelDci.Locked for Intel 1.5.0+
     * It was renamed for all vendor support in 1.8.0.
     */
    const SECURITY_ATTR_ID_PLATFORM_DEBUG_LOCKED: string;
    /**
     * Host Security ID attribute for fused parts
     */
    const SECURITY_ATTR_ID_PLATFORM_FUSED: string;
    /**
     * Host Security ID attribute for Pre-boot DMA protection
     *
     * This was previously known as org.fwupd.hsi.AcpiDmar for Intel from 1.5.0+.
     */
    const SECURITY_ATTR_ID_PREBOOT_DMA_PROTECTION: string;
    /**
     * Host Security ID attribute for Intel SPI BIOSWE configuration
     */
    const SECURITY_ATTR_ID_SPI_BIOSWE: string;
    /**
     * Host Security ID attribute for Intel SPI BLE configuration
     */
    const SECURITY_ATTR_ID_SPI_BLE: string;
    /**
     * Host Security ID attribute for Intel SPI descriptor
     */
    const SECURITY_ATTR_ID_SPI_DESCRIPTOR: string;
    /**
     * Host Security ID attribute for Intel SPI SMM BWP
     */
    const SECURITY_ATTR_ID_SPI_SMM_BWP: string;
    /**
     * Host Security ID attribute for Supported CPU
     */
    const SECURITY_ATTR_ID_SUPPORTED_CPU: string;
    /**
     * Host Security ID attribute for Suspend to Idle
     */
    const SECURITY_ATTR_ID_SUSPEND_TO_IDLE: string;
    /**
     * Host Security ID attribute for Suspend to RAM
     */
    const SECURITY_ATTR_ID_SUSPEND_TO_RAM: string;
    /**
     * Host Security ID attribute for empty PCR
     */
    const SECURITY_ATTR_ID_TPM_EMPTY_PCR: string;
    /**
     * Host Security ID attribute for TPM PCR0 reconstruction
     */
    const SECURITY_ATTR_ID_TPM_RECONSTRUCTION_PCR0: string;
    /**
     * Host Security ID attribute for TPM 2.0
     */
    const SECURITY_ATTR_ID_TPM_VERSION_20: string;
    /**
     * Host Security ID attribute indicating if Bootservice-only variables are hidden.
     */
    const SECURITY_ATTR_ID_UEFI_BOOTSERVICE_VARS: string;
    /**
     * Host Security ID attribute for UEFI PK
     */
    const SECURITY_ATTR_ID_UEFI_PK: string;
    /**
     * Host Security ID attribute for UEFI secure boot
     */
    const SECURITY_ATTR_ID_UEFI_SECUREBOOT: string;
    /**
     * Builds a JSON report for the list of devices. No filtering is done on the
     * `devices` array, and it is expected that the caller will filter to something
     * sane, e.g. %FWUPD_DEVICE_FLAG_REPORTED at the bare minimum.
     * @param devices devices
     * @returns a string, or %NULL if the ID is not present
     */
    function build_history_report_json(devices: Device[]): string;
    /**
     * Gets a salted hash of the /etc/machine-id contents. This can be used to
     * identify a specific machine. It is not possible to recover the original
     * machine-id from the machine-hash.
     * @param salt optional salt
     * @returns the SHA256 machine hash, or %NULL if the ID is not present
     */
    function build_machine_id(salt?: string | null): string;
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
     * Rather that using this function you should use [method`Client`.set_user_agent_for_package]
     * which uses the *runtime* version of the daemon rather than the *build-time*
     * version.
     * @param package_name client program name, e.g. `gnome-software`
     * @param package_version client program version, e.g. `3.28.1`
     * @returns a string, e.g. `foo/0.1 (Linux i386 4.14.5; en; Fedora 27) fwupd/1.0.3`
     */
    function build_user_agent(package_name: string, package_version: string): string;
    /**
     * Formats a checksum for display.
     * @param checksum a checksum
     * @returns text, or %NULL for invalid
     */
    function checksum_format_for_display(checksum?: string | null): string;
    /**
     * Gets a the best possible checksum kind.
     * @param checksums checksums
     * @returns a checksum from the array, or %NULL if nothing was suitable
     */
    function checksum_get_best(checksums: string[]): string;
    /**
     * Gets a specific checksum kind.
     * @param checksums checksums
     * @param kind a checksum type, e.g. %G_CHECKSUM_SHA512
     * @returns a checksum from the array, or %NULL if not found
     */
    function checksum_get_by_kind(checksums: string[], kind: GLib.ChecksumType): string;
    /**
     * Guesses the checksum kind based on the length of the hash.
     * @param checksum a checksum
     * @returns a checksum type, e.g. %G_CHECKSUM_SHA1
     */
    function checksum_guess_kind(checksum?: string | null): GLib.ChecksumType;
    /**
     * Formats a checksum type for display.
     * @param checksum_type a #GChecksumType, e.g. %G_CHECKSUM_SHA1
     * @returns text, or %NULL for invalid
     */
    function checksum_type_to_string_display(checksum_type: GLib.ChecksumType): string;
    /**
     * Converts a string to an enumerated error.
     * @param error a string, e.g. `org.freedesktop.fwupd.VersionNewer`
     * @returns enumerated value
     */
    function error_from_string(error?: string | null): Error;
    /**
     * An error quark.
     * @returns an error quark
     */
    function error_quark(): GLib.Quark;
    /**
     * Converts an enumerated error to a string.
     * @param error an enumerated error, e.g. %FWUPD_ERROR_VERSION_NEWER
     * @returns identifier string
     */
    function error_to_string(error: Error): string;
    /**
     * Converts a string to an enumerated feature flag.
     * @param feature_flag a string, e.g. `detach-action`
     * @returns enumerated value
     */
    function feature_flag_from_string(feature_flag?: string | null): FeatureFlags;
    /**
     * Converts a feature flag to a string.
     * @param feature_flag a single feature flag, e.g. %FWUPD_FEATURE_FLAG_DETACH_ACTION
     * @returns identifier string
     */
    function feature_flag_to_string(feature_flag: FeatureFlags): string;
    /**
     * Loads information from the system os-release file.
     * @returns keys from os-release
     */
    function get_os_release(): GLib.HashTable<string, string>;
    /**
     * Loads information from a defined system os-release file.
     * @param filename optional filename to load
     * @returns keys from os-release
     */
    function get_os_release_full(filename?: string | null): GLib.HashTable<string, string>;
    /**
     * Converts a string GUID into its binary encoding. All string GUIDs are
     * formatted as big endian but on-disk can be encoded in different ways.
     * @param guidstr a GUID, e.g. `00112233-4455-6677-8899-aabbccddeeff`
     * @param guid a #fwupd_guid_t, or NULL to just check the GUID
     * @param flags GUID flags, e.g. %FWUPD_GUID_FLAG_MIXED_ENDIAN
     * @returns %TRUE for success
     */
    function guid_from_string(guidstr: string, guid: number | null, flags: GuidFlags): boolean;
    /**
     * Returns a GUID for some data. This uses a hash and so even small
     * differences in the `data` will produce radically different return values.
     *
     * The implementation is taken from RFC4122, Section 4.1.3; specifically
     * using a type-5 SHA-1 hash.
     * @param data data to hash
     * @param datasz length of @data
     * @param flags GUID flags, e.g. %FWUPD_GUID_FLAG_NAMESPACE_MICROSOFT
     * @returns a new GUID, or %NULL for internal error
     */
    function guid_hash_data(data: number, datasz: number, flags: GuidFlags): string;
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
     * @returns a new GUID, or %NULL if the string was invalid
     */
    function guid_hash_string(str?: string | null): string;
    /**
     * Checks the string is a valid GUID.
     * @param guid string to check, e.g. `00112233-4455-6677-8899-aabbccddeeff`
     * @returns %TRUE if @guid was a valid GUID, %FALSE otherwise
     */
    function guid_is_valid(guid: string): boolean;
    /**
     * Returns a text GUID of mixed or BE endian for a packed buffer.
     * @param guid a #fwupd_guid_t to read
     * @param flags GUID flags, e.g. %FWUPD_GUID_FLAG_MIXED_ENDIAN
     * @returns a new GUID string
     */
    function guid_to_string(guid: number, flags: GuidFlags): string;
    /**
     * Converts an printable string to an enumerated keyring kind.
     * @param keyring_kind a string, e.g. `gpg`
     * @returns keyring kind, e.g. %FWUPD_KEYRING_KIND_GPG
     */
    function keyring_kind_from_string(keyring_kind?: string | null): KeyringKind;
    /**
     * Converts an enumerated keyring kind to a printable string.
     * @param keyring_kind a #FwupdKeyringKind, e.g. %FWUPD_KEYRING_KIND_GPG
     * @returns a string, e.g. `gpg`
     */
    function keyring_kind_to_string(keyring_kind: KeyringKind): string;
    /**
     * Converts a string to an enumerated status.
     * @param status a string, e.g. `decompressing`
     * @returns enumerated value
     */
    function status_from_string(status?: string | null): Status;
    /**
     * Converts an enumerated status to a string.
     * @param status a status, e.g. %FWUPD_STATUS_DECOMPRESSING
     * @returns identifier string
     */
    function status_to_string(status: Status): string;
    /**
     * Converts a string to an enumerated trust flag.
     * @param trust_flag a string, e.g. `payload`
     * @returns enumerated value
     */
    function trust_flag_from_string(trust_flag?: string | null): TrustFlags;
    /**
     * Converts an enumerated trust flag to a string.
     * @param trust_flag the trust flags, e.g. %FWUPD_TRUST_FLAG_PAYLOAD
     * @returns identifier string
     */
    function trust_flag_to_string(trust_flag: TrustFlags): string;
    /**
     * Converts a string to an enumerated update state.
     * @param update_state a string, e.g. `pending`
     * @returns enumerated value
     */
    function update_state_from_string(update_state?: string | null): UpdateState;
    /**
     * Converts an enumerated update state to a string.
     * @param update_state the update state, e.g. %FWUPD_UPDATE_STATE_PENDING
     * @returns identifier string
     */
    function update_state_to_string(update_state: UpdateState): string;
    /**
     * Converts text to a display version type.
     * @param str a string, e.g. `quad`
     * @returns an enumerated version format, e.g. %FWUPD_VERSION_FORMAT_TRIPLET
     */
    function version_format_from_string(str?: string | null): VersionFormat;
    /**
     * Converts an enumerated version format to text.
     * @param kind a version format, e.g. %FWUPD_VERSION_FORMAT_TRIPLET
     * @returns a string, e.g. `quad`, or %NULL if not known
     */
    function version_format_to_string(kind: VersionFormat): string;
    /**
     * Gets the libfwupd installed runtime version.
     *
     * This may be different to the *build-time* version if the daemon and library
     * objects somehow get out of sync.
     * @returns version string
     */
    function version_string(): string;
    /**
     * The options to use for downloading.
     */

    /**
     * The options to use for downloading.
     */
    export namespace ClientDownloadFlags {
        export const $gtype: GObject.GType<ClientDownloadFlags>;
    }

    enum ClientDownloadFlags {
        /**
         * No flags set
         */
        NONE,
        /**
         * Only use peer-to-peer when downloading URIs
         */
        ONLY_P2P,
    }
    /**
     * The options to use for uploading.
     */

    /**
     * The options to use for uploading.
     */
    export namespace ClientUploadFlags {
        export const $gtype: GObject.GType<ClientUploadFlags>;
    }

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

    /**
     * The flags to the feature capabilities of the front-end client.
     */
    export namespace FeatureFlags {
        export const $gtype: GObject.GType<FeatureFlags>;
    }

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
        /**
         * Can show interactive requests
         */
        REQUESTS,
        /**
         * Can warn about full disk encryption
         */
        FDE_WARNING,
        /**
         * Can show information about community supported
         */
        COMMUNITY_TEXT,
        /**
         * Can show problems when getting the update list
         */
        SHOW_PROBLEMS,
        /**
         * Can authenticate with PolicyKit for requests
         */
        ALLOW_AUTHENTICATION,
        /**
         * Can handle showing non-generic request message text
         */
        REQUESTS_NON_GENERIC,
    }
    /**
     * The flags to show how the data should be converted.
     */

    /**
     * The flags to show how the data should be converted.
     */
    export namespace GuidFlags {
        export const $gtype: GObject.GType<GuidFlags>;
    }

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

    /**
     * Flags to set when performing the firmware update or install.
     */
    export namespace InstallFlags {
        export const $gtype: GObject.GType<InstallFlags>;
    }

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
         * (Deprecated since 1.7.0)
         */
        IGNORE_POWER,
        /**
         * Do not use heuristics when parsing the image
         */
        NO_SEARCH,
        /**
         * Ignore version requirement checks
         */
        IGNORE_REQUIREMENTS,
    }
    /**
     * The flags available for the remote.
     */

    /**
     * The flags available for the remote.
     */
    export namespace RemoteFlags {
        export const $gtype: GObject.GType<RemoteFlags>;
    }

    enum RemoteFlags {
        /**
         * No flags set
         */
        NONE,
        /**
         * Is enabled
         */
        ENABLED,
        /**
         * Requires approval for each firmware
         */
        APPROVAL_REQUIRED,
        /**
         * Send firmware reports automatically
         */
        AUTOMATIC_REPORTS,
        /**
         * Send security reports automatically
         */
        AUTOMATIC_SECURITY_REPORTS,
        /**
         * Use peer-to-peer locations for metadata
         */
        ALLOW_P2P_METADATA,
        /**
         * Use peer-to-peer locations for firmware
         */
        ALLOW_P2P_FIRMWARE,
    }
    /**
     * The flags available for HSI attributes.
     */

    /**
     * The flags available for HSI attributes.
     */
    export namespace SecurityAttrFlags {
        export const $gtype: GObject.GType<SecurityAttrFlags>;
    }

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
         * Missing data
         */
        MISSING_DATA,
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
        /**
         * Contact the firmware vendor for a update
         */
        ACTION_CONTACT_OEM,
        /**
         * Failure may be fixed by changing FW config
         */
        ACTION_CONFIG_FW,
        /**
         * Failure may be fixed by changing OS config
         */
        ACTION_CONFIG_OS,
        /**
         * The failure can be automatically fixed
         */
        CAN_FIX,
        /**
         * The fix can be automatically reverted
         */
        CAN_UNDO,
    }
    /**
     * Flags to set when performing the firmware update or install.
     */

    /**
     * Flags to set when performing the firmware update or install.
     */
    export namespace SelfSignFlags {
        export const $gtype: GObject.GType<SelfSignFlags>;
    }

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

    /**
     * The flags to show the level of trust.
     */
    export namespace TrustFlags {
        export const $gtype: GObject.GType<TrustFlags>;
    }

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
    module BiosSetting {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A BIOS setting that represents a setting in the firmware.
     */
    class BiosSetting extends GObject.Object {
        static $gtype: GObject.GType<BiosSetting>;

        // Constructors

        constructor(properties?: Partial<BiosSetting.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name?: string | null, path?: string | null): BiosSetting;

        // Static methods

        /**
         * Creates an array of new bios settings using serialized data.
         * @param value the serialized data
         */
        static array_from_variant(value: GLib.Variant): BiosSetting[];
        /**
         * Creates a new bios setting using serialized data.
         * @param value the serialized data
         */
        static from_variant(value: GLib.Variant): BiosSetting;

        // Virtual methods

        /**
         * Writes a new value into the setting if it is different from the current value.
         *
         * NOTE: A subclass should handle the `->write_value()` vfunc and actually write the value to the
         * firmware.
         * @param value The string to write
         */
        vfunc_write_value(value: string): boolean;

        // Methods

        /**
         * Adds a possible value to the attribute.  This indicates one of the values the
         * kernel driver will accept from userspace.
         * @param possible_value the possible
         */
        add_possible_value(possible_value: string): void;
        /**
         * Loads a fwupd bios setting from a JSON node.
         * @param json_node a JSON node
         * @returns %TRUE for success
         */
        from_json(json_node: Json.Node): boolean;
        /**
         * Gets the string representation of the current_value stored in an attribute
         * from the kernel.  This value is cached; so changing it outside of fwupd may
         * may put it out of sync.
         * @returns the current value of the attribute.
         */
        get_current_value(): string;
        /**
         * Gets the attribute description which is provided by some drivers to explain
         * what they change.
         * @returns the attribute description, or %NULL if unset.
         */
        get_description(): string;
        /**
         * Gets the unique attribute identifier for this attribute/driver
         * @returns attribute ID if set otherwise NULL
         */
        get_id(): string;
        /**
         * Gets the BIOS setting type used by the kernel interface.
         * @returns the bios setting type, or %FWUPD_BIOS_SETTING_KIND_UNKNOWN if unset.
         */
        get_kind(): BiosSettingKind;
        /**
         * Gets the lower bound for integer attributes or
         * minimum length for string attributes.
         * @returns guint64
         */
        get_lower_bound(): number;
        /**
         * Gets the attribute name.
         * @returns the attribute name, or %NULL if unset.
         */
        get_name(): string;
        /**
         * Gets the path for the driver providing the attribute.
         * @returns the driver, or %NULL if unfound.
         */
        get_path(): string | null;
        /**
         * Find all possible values for an enumeration attribute.
         * @returns all possible values.
         */
        get_possible_values(): string[];
        /**
         * Determines if a BIOS setting is read only
         * @returns gboolean
         */
        get_read_only(): boolean;
        /**
         * Gets the scalar increment used for integer attributes.
         * @returns guint64
         */
        get_scalar_increment(): number;
        /**
         * Gets the upper bound for integer attributes or
         * maximum length for string attributes.
         * @returns guint64
         */
        get_upper_bound(): number;
        /**
         * Finds out if a specific possible value was added to the attribute.
         * @param val the possible value string
         * @returns %TRUE if the self matches.
         */
        has_possible_value(val: string): boolean;
        /**
         * Attempts to map a user provided string into strings that a #FwupdBiosSetting can
         * support.  The following heuristics are used:
         * - Ignore case sensitivity
         * - Map obviously "positive" phrases into a value that turns on the #FwupdBiosSetting
         * - Map obviously "negative" phrases into a value that turns off the #FwupdBiosSetting
         * @param key the string to try to map
         * @returns the possible value that maps or NULL if none if found
         */
        map_possible_value(key: string): string;
        /**
         * Sets the string stored in an attribute.
         * This doesn't change the representation in the kernel.
         * @param value The string to set an attribute to
         */
        set_current_value(value?: string | null): void;
        /**
         * Sets the attribute description.
         * @param description the attribute description
         */
        set_description(description?: string | null): void;
        /**
         * Sets the unique attribute identifier for this attribute
         * @param id
         */
        set_id(id: string): void;
        /**
         * Sets the BIOS setting type used by the kernel interface.
         * @param type a bios setting type, e.g. %FWUPD_BIOS_SETTING_KIND_ENUMERATION
         */
        set_kind(type: BiosSettingKind): void;
        /**
         * Sets the lower bound used for BIOS integer attributes or max
         * length for string attributes.
         * @param val a guint64 value to set bound to
         */
        set_lower_bound(val: number): void;
        /**
         * Sets the attribute name provided by a kernel driver.
         * @param name the attribute name
         */
        set_name(name?: string | null): void;
        /**
         * Sets path to the attribute.
         * @param path the path the driver providing the attribute uses
         */
        set_path(path?: string | null): void;
        /**
         * Configures whether an attribute is read only
         * maximum length for string attributes.
         * @param val
         */
        set_read_only(val: boolean): void;
        /**
         * Sets the scalar increment used for BIOS integer attributes.
         * @param val a guint64 value to set increment to
         */
        set_scalar_increment(val: number): void;
        /**
         * Sets the upper bound used for BIOS integer attributes or max
         * length for string attributes.
         * @param val a guint64 value to set bound to
         */
        set_upper_bound(val: number): void;
        /**
         * Adds a fwupd bios setting to a JSON builder.
         * @param builder a JSON builder
         */
        to_json(builder: Json.Builder): void;
        /**
         * Builds a text representation of the object.
         * @returns text, or %NULL for invalid
         */
        to_string(): string;
        /**
         * Serialize the bios setting.
         * @param trusted whether the caller should receive trusted values
         * @returns the serialized data, or %NULL for error.
         */
        to_variant(trusted: boolean): GLib.Variant;
        /**
         * Writes a new value into the setting if it is different from the current value.
         *
         * NOTE: A subclass should handle the `->write_value()` vfunc and actually write the value to the
         * firmware.
         * @param value The string to write
         * @returns %TRUE for success
         */
        write_value(value: string): boolean;
    }

    module Client {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        interface DeviceAdded {
            (result: Device): void;
        }

        interface DeviceChanged {
            (result: Device): void;
        }

        interface DeviceRemoved {
            (result: Device): void;
        }

        interface DeviceRequest {
            (msg: Request): void;
        }

        interface StatusChanged {
            (object: number): void;
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
            soup_session: GObject.Object;
            soupSession: GObject.Object;
            status: number;
            tainted: boolean;
        }
    }

    /**
     * Allow client code to call the daemon methods.
     *
     * See also: [class`FwupdDevice]`
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        /**
         * The system battery level in percent.
         */
        get battery_level(): number;
        set battery_level(val: number);
        /**
         * The system battery level in percent.
         */
        get batteryLevel(): number;
        set batteryLevel(val: number);
        /**
         * The system battery threshold in percent.
         */
        get battery_threshold(): number;
        set battery_threshold(val: number);
        /**
         * The system battery threshold in percent.
         */
        get batteryThreshold(): number;
        set batteryThreshold(val: number);
        /**
         * The daemon version number.
         */
        get daemon_version(): string;
        /**
         * The daemon version number.
         */
        get daemonVersion(): string;
        /**
         * The host best known configuration.
         */
        get host_bkc(): string;
        set host_bkc(val: string);
        /**
         * The host best known configuration.
         */
        get hostBkc(): string;
        set hostBkc(val: string);
        /**
         * The host machine-id string
         */
        get host_machine_id(): string;
        set host_machine_id(val: string);
        /**
         * The host machine-id string
         */
        get hostMachineId(): string;
        set hostMachineId(val: string);
        /**
         * The host product string
         */
        get host_product(): string;
        set host_product(val: string);
        /**
         * The host product string
         */
        get hostProduct(): string;
        set hostProduct(val: string);
        /**
         * The host machine-id string
         */
        get host_security_id(): string;
        set host_security_id(val: string);
        /**
         * The host machine-id string
         */
        get hostSecurityId(): string;
        set hostSecurityId(val: string);
        /**
         * The host vendor string
         */
        get host_vendor(): string;
        set host_vendor(val: string);
        /**
         * The host vendor string
         */
        get hostVendor(): string;
        set hostVendor(val: string);
        /**
         * If the daemon is running in an interactive terminal
         */
        get interactive(): boolean;
        /**
         * If the daemon is verifying signatures from a trusted authority.
         */
        get only_trusted(): boolean;
        /**
         * If the daemon is verifying signatures from a trusted authority.
         */
        get onlyTrusted(): boolean;
        /**
         * The last-reported percentage of the daemon.
         */
        get percentage(): number;
        set percentage(val: number);
        /**
         * The libsoup session, now unused.
         */
        get soup_session(): GObject.Object;
        /**
         * The libsoup session, now unused.
         */
        get soupSession(): GObject.Object;
        /**
         * The last-reported status of the daemon.
         */
        get status(): number;
        set status(val: number);
        /**
         * If the daemon is tainted by 3rd party code.
         */
        get tainted(): boolean;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Client;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this) => void): number;
        connect_after(signal: 'changed', callback: (_source: this) => void): number;
        emit(signal: 'changed'): void;
        connect(signal: 'device-added', callback: (_source: this, result: Device) => void): number;
        connect_after(signal: 'device-added', callback: (_source: this, result: Device) => void): number;
        emit(signal: 'device-added', result: Device): void;
        connect(signal: 'device-changed', callback: (_source: this, result: Device) => void): number;
        connect_after(signal: 'device-changed', callback: (_source: this, result: Device) => void): number;
        emit(signal: 'device-changed', result: Device): void;
        connect(signal: 'device-removed', callback: (_source: this, result: Device) => void): number;
        connect_after(signal: 'device-removed', callback: (_source: this, result: Device) => void): number;
        emit(signal: 'device-removed', result: Device): void;
        connect(signal: 'device-request', callback: (_source: this, msg: Request) => void): number;
        connect_after(signal: 'device-request', callback: (_source: this, msg: Request) => void): number;
        emit(signal: 'device-request', msg: Request): void;
        connect(signal: 'status-changed', callback: (_source: this, object: number) => void): number;
        connect_after(signal: 'status-changed', callback: (_source: this, object: number) => void): number;
        emit(signal: 'status-changed', object: number): void;

        // Virtual methods

        vfunc_changed(): void;
        vfunc_device_added(result: Device): void;
        vfunc_device_changed(result: Device): void;
        vfunc_device_removed(result: Device): void;
        vfunc_device_request(request: Request): void;
        vfunc_status_changed(status: Status): void;

        // Methods

        /**
         * Activates up a device, which normally means the device switches to a new
         * firmware version. This should only be called when data loss cannot occur.
         * @param cancellable optional #GCancellable
         * @param device_id a device
         * @returns %TRUE for success
         */
        activate(cancellable: Gio.Cancellable | null, device_id: string): boolean;
        /**
         * Activates up a device, which normally means the device switches to a new
         * firmware version. This should only be called when data loss cannot occur.
         * @param device_id a device
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        activate_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.activate_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        activate_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets optional hints from the client that may affect the list of devices.
         * @param key the key, e.g. `locale`
         * @param value the value @key should be set
         */
        add_hint(key: string, value?: string | null): void;
        /**
         * Builds a JSON report for the list of devices.
         *
         * This function should be called *before* asking the interactive user if they want to upload a
         * report -- as this function filters devices and may return an error if there is nothing to do.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param devices devices
         * @param metadata attributes
         * @returns a string, or %NULL if the ID is not present
         */
        build_report_devices(
            devices: Device[],
            metadata: { [key: string]: any } | GLib.HashTable<string, string>,
        ): string;
        /**
         * Clears the results for a specific device.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        clear_results(device_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Clears the results for a specific device.
         * @param device_id a device
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        clear_results_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.clear_results_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        clear_results_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets up the client ready for use. This is probably the first method you call
         * when wanting to use libfwupd in an asynchronous manner.
         *
         * Other methods such as [method`FwupdClient`.get_devices_async] should only be called
         * after [method`FwupdClient`.connect_finish] has been called without an error.
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        connect_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets the result of [method`Client`.connect_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        connect_finish(res: Gio.AsyncResult): boolean;
        /**
         * Downloads data from a remote server. The [method`Client`.set_user_agent] function
         * should be called before this method is used.
         * @param url the remote URL
         * @param flags download flags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
         * @param cancellable optional #GCancellable
         * @returns downloaded data, or %NULL for error
         */
        download_bytes(url: string, flags: ClientDownloadFlags, cancellable?: Gio.Cancellable | null): GLib.Bytes;
        /**
         * Downloads data from a remote server. The [method`Client`.set_user_agent] function
         * should be called before this method is used.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * [method`Client`.set_main_context].
         * @param url the remote URL
         * @param flags download flags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        download_bytes_async(
            url: string,
            flags: ClientDownloadFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.download_bytes_async].
         * @param res the asynchronous result
         * @returns downloaded data, or %NULL for error
         */
        download_bytes_finish(res: Gio.AsyncResult): GLib.Bytes;
        /**
         * Downloads data from a remote server. The [method`Client`.set_user_agent] function
         * should be called before this method is used.
         * @param url the remote URL
         * @param file a file
         * @param flags download flags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
         * @param cancellable optional #GCancellable
         * @returns %TRUE if the file was written
         */
        download_file(
            url: string,
            file: Gio.File,
            flags: ClientDownloadFlags,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Sets the number of retries should be attempted on transient download errors.
         * @param retries number of tries, defaulting to 0
         */
        download_set_retries(retries: number): void;
        /**
         * Loads an emulated device into the daemon backend that has the phases set by the JSON data,
         * for instance, having one USB device emulated for the bootloader and another emulated for the
         * runtime interface.
         * @param data archive data of JSON files
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        emulation_load(data: GLib.Bytes | Uint8Array, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Loads an emulated device into the daemon backend that has the phases set by the JSON data,
         * for instance, having one USB device emulated for the bootloader and another emulated for the
         * runtime interface.
         * @param data archive data of JSON files
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        emulation_load_async(
            data: GLib.Bytes | Uint8Array,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.emulation_load_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
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
         * @param cancellable optional #GCancellable
         * @returns archive data
         */
        emulation_save(cancellable?: Gio.Cancellable | null): GLib.Bytes;
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
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        emulation_save_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.emulation_save_async].
         * @param res the asynchronous result
         * @returns archive data
         */
        emulation_save_finish(res: Gio.AsyncResult): GLib.Bytes;
        /**
         * Sets up the client networking support ready for use. Most other download and
         * upload methods call this automatically, and do you only need to call this if
         * the session is being used outside the [class`FwupdClient]`.
         * @returns %TRUE for success
         */
        ensure_networking(): boolean;
        /**
         * Fix one specific security attribute.
         * @param appstream_id the HSI AppStream ID
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        fix_host_security_attr(appstream_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Fix one specific security attribute.
         * @param appstream_id HSI AppStream ID
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        fix_host_security_attr_async(
            appstream_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.fix_host_security_attr_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        fix_host_security_attr_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the list of approved firmware.
         * @param cancellable optional #GCancellable
         * @returns checksums, or %NULL for error
         */
        get_approved_firmware(cancellable?: Gio.Cancellable | null): string[];
        /**
         * Gets the list of approved firmware.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_approved_firmware_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_approved_firmware_async].
         * @param res the asynchronous result
         * @returns checksums, or %NULL for error
         */
        get_approved_firmware_finish(res: Gio.AsyncResult): string[];
        /**
         * Returns the system battery level.
         * @returns value in percent
         */
        get_battery_level(): number;
        /**
         * Returns the system battery threshold under which a firmware update cannot be
         * performed.
         * @returns value in percent
         */
        get_battery_threshold(): number;
        /**
         * Gets all the BIOS settings from the daemon.
         * @param cancellable optional #GCancellable
         * @returns attributes
         */
        get_bios_settings(cancellable?: Gio.Cancellable | null): BiosSetting[];
        /**
         * Gets all the host security attributes from the daemon.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_bios_settings_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_bios_settings_async].
         * @param res the asynchronous result
         * @returns attributes
         */
        get_bios_settings_finish(res: Gio.AsyncResult): BiosSetting[];
        /**
         * Gets the list of blocked firmware.
         * @param cancellable optional #GCancellable
         * @returns checksums, or %NULL for error
         */
        get_blocked_firmware(cancellable?: Gio.Cancellable | null): string[];
        /**
         * Gets the list of blocked firmware.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_blocked_firmware_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_blocked_firmware_async].
         * @param res the asynchronous result
         * @returns checksums, or %NULL for error
         */
        get_blocked_firmware_finish(res: Gio.AsyncResult): string[];
        /**
         * Gets if the daemon is running in an interactive terminal.
         * @returns %TRUE if the daemon is running in an interactive terminal
         */
        get_daemon_interactive(): boolean;
        /**
         * Gets the daemon version number.
         * @returns a string, or %NULL for unknown.
         */
        get_daemon_version(): string;
        /**
         * Gets details about a specific firmware file.
         * @param filename the firmware filename, e.g. `firmware.cab`
         * @param cancellable optional #GCancellable
         * @returns an array of results
         */
        get_details(filename: string, cancellable?: Gio.Cancellable | null): Device[];
        /**
         * Gets details about a specific firmware file.
         * @param bytes the firmware archive
         * @param cancellable optional #GCancellable
         * @returns an array of results
         */
        get_details_bytes(bytes: GLib.Bytes | Uint8Array, cancellable?: Gio.Cancellable | null): Device[];
        /**
         * Gets details about a specific firmware file.
         * @param bytes firmware archive
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_details_bytes_async(
            bytes: GLib.Bytes | Uint8Array,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_details_bytes_async].
         * @param res the asynchronous result
         * @returns an array of results
         */
        get_details_bytes_finish(res: Gio.AsyncResult): Device[];
        /**
         * Gets a device by its device ID.
         * @param device_id the device ID, e.g. `usb:00:01:03:03`
         * @param cancellable optional #GCancellable
         * @returns a device or %NULL
         */
        get_device_by_id(device_id: string, cancellable?: Gio.Cancellable | null): Device;
        /**
         * Gets a device by it's device ID.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_device_by_id_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_device_by_id_async].
         * @param res the asynchronous result
         * @returns a device, or %NULL for failure
         */
        get_device_by_id_finish(res: Gio.AsyncResult): Device;
        /**
         * Gets all the devices registered with the daemon.
         * @param cancellable optional #GCancellable
         * @returns results
         */
        get_devices(cancellable?: Gio.Cancellable | null): Device[];
        /**
         * Gets all the devices registered with the daemon.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_devices_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets any devices that provide a specific GUID. An error is returned if no
         * devices contains this GUID.
         * @param guid the GUID, e.g. `e22c4520-43dc-5bb3-8245-5787fead9b63`
         * @param cancellable optional #GCancellable
         * @returns devices or %NULL
         */
        get_devices_by_guid(guid: string, cancellable?: Gio.Cancellable | null): Device[];
        /**
         * Gets any devices that provide a specific GUID. An error is returned if no
         * devices contains this GUID.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param guid the GUID, e.g. `e22c4520-43dc-5bb3-8245-5787fead9b63`
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_devices_by_guid_async(
            guid: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_devices_by_guid_async].
         * @param res the asynchronous result
         * @returns results
         */
        get_devices_by_guid_finish(res: Gio.AsyncResult): Release[];
        /**
         * Gets the result of [method`FwupdClient`.get_devices_async].
         * @param res the asynchronous result
         * @returns results
         */
        get_devices_finish(res: Gio.AsyncResult): Device[];
        /**
         * Gets all the downgrades for a specific device.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @returns results
         */
        get_downgrades(device_id: string, cancellable?: Gio.Cancellable | null): Release[];
        /**
         * Gets all the downgrades for a specific device.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_downgrades_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_downgrades_async].
         * @param res the asynchronous result
         * @returns results
         */
        get_downgrades_finish(res: Gio.AsyncResult): Release[];
        /**
         * Gets all the history.
         * @param cancellable optional #GCancellable
         * @returns results
         */
        get_history(cancellable?: Gio.Cancellable | null): Device[];
        /**
         * Gets all the history.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_history_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets the result of [method`FwupdClient`.get_history_async].
         * @param res the asynchronous result
         * @returns results
         */
        get_history_finish(res: Gio.AsyncResult): Device[];
        /**
         * Gets the host best known configuration, e.g. `vendor-factory-2021q1,mycompany-2023`.
         * @returns a string, or %NULL for unknown.
         */
        get_host_bkc(): string;
        /**
         * Gets the string that represents the host machine ID
         * @returns a string, or %NULL for unknown.
         */
        get_host_machine_id(): string;
        /**
         * Gets the string that represents the host running fwupd
         * @returns a string, or %NULL for unknown.
         */
        get_host_product(): string;
        /**
         * Gets all the host security attributes from the daemon.
         * @param cancellable optional #GCancellable
         * @returns attributes
         */
        get_host_security_attrs(cancellable?: Gio.Cancellable | null): SecurityAttr[];
        /**
         * Gets all the host security attributes from the daemon.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_host_security_attrs_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_host_security_attrs_async].
         * @param res the asynchronous result
         * @returns attributes
         */
        get_host_security_attrs_finish(res: Gio.AsyncResult): SecurityAttr[];
        /**
         * Gets all the host security events from the daemon.
         * @param limit maximum number of events, or 0 for no limit
         * @param cancellable optional #GCancellable
         * @returns attributes
         */
        get_host_security_events(limit: number, cancellable?: Gio.Cancellable | null): SecurityAttr[];
        /**
         * Gets all the host security events from the daemon.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param limit maximum number of events, or 0 for no limit
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_host_security_events_async(
            limit: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_host_security_events_async].
         * @param res the asynchronous result
         * @returns attributes
         */
        get_host_security_events_finish(res: Gio.AsyncResult): SecurityAttr[];
        /**
         * Gets the string that represents the host machine ID
         * @returns a string, or %NULL for unknown.
         */
        get_host_security_id(): string;
        /**
         * Gets the string that represents the vendor of the host running fwupd
         * @returns a string, or %NULL for unknown.
         */
        get_host_vendor(): string;
        /**
         * Gets the internal #GMainContext to use for synchronous methods.
         * By default the value is set a new #GMainContext.
         * @returns the main context
         */
        get_main_context(): GLib.MainContext;
        /**
         * Gets if the daemon is verifying signatures from a trusted authority.
         * @returns %TRUE if the daemon is checking signatures
         */
        get_only_trusted(): boolean;
        /**
         * Gets the last returned percentage value.
         * @returns a percentage, or 0 for unknown.
         */
        get_percentage(): number;
        /**
         * Gets all the plugins being used the daemon.
         * @param cancellable optional #GCancellable
         * @returns results
         */
        get_plugins(cancellable?: Gio.Cancellable | null): Plugin[];
        /**
         * Gets all the plugins being used by the daemon.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_plugins_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets the result of [method`FwupdClient`.get_plugins_async].
         * @param res the asynchronous result
         * @returns results
         */
        get_plugins_finish(res: Gio.AsyncResult): Device[];
        /**
         * Gets all the releases for a specific device
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @returns results
         */
        get_releases(device_id: string, cancellable?: Gio.Cancellable | null): Release[];
        /**
         * Gets all the releases for a specific device
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_releases_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_releases_async].
         * @param res the asynchronous result
         * @returns results
         */
        get_releases_finish(res: Gio.AsyncResult): Release[];
        /**
         * Gets a specific remote that has been configured for the system.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable optional #GCancellable
         * @returns a #FwupdRemote, or %NULL if not found
         */
        get_remote_by_id(remote_id: string, cancellable?: Gio.Cancellable | null): Remote;
        /**
         * Gets a specific remote that has been configured for the system.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_remote_by_id_async(
            remote_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_remote_by_id_async].
         * @param res the asynchronous result
         * @returns a #FwupdRemote, or %NULL if not found
         */
        get_remote_by_id_finish(res: Gio.AsyncResult): Remote;
        /**
         * Gets the list of remotes that have been configured for the system.
         * @param cancellable optional #GCancellable
         * @returns list of remotes, or %NULL
         */
        get_remotes(cancellable?: Gio.Cancellable | null): Remote[];
        /**
         * Gets the list of remotes that have been configured for the system.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_remotes_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets the result of [method`FwupdClient`.get_remotes_async].
         * @param res the asynchronous result
         * @returns results
         */
        get_remotes_finish(res: Gio.AsyncResult): Remote[];
        /**
         * Gets all the report metadata from the daemon.
         * @param cancellable optional #GCancellable
         * @returns attributes
         */
        get_report_metadata(cancellable?: Gio.Cancellable | null): GLib.HashTable<any, any>;
        /**
         * Gets all the report metadata from the daemon.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_report_metadata_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_report_metadata_async].
         * @param res the asynchronous result
         * @returns attributes
         */
        get_report_metadata_finish(res: Gio.AsyncResult): GLib.HashTable<any, any>;
        /**
         * Gets the results of a previous firmware update for a specific device.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @returns a device, or %NULL for failure
         */
        get_results(device_id: string, cancellable?: Gio.Cancellable | null): Device;
        /**
         * Gets the results of a previous firmware update for a specific device.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_results_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_results_async].
         * @param res the asynchronous result
         * @returns a device, or %NULL for failure
         */
        get_results_finish(res: Gio.AsyncResult): Device;
        /**
         * Gets the last returned status value.
         * @returns a #FwupdStatus, or %FWUPD_STATUS_UNKNOWN for unknown.
         */
        get_status(): Status;
        /**
         * Gets if the daemon has been tainted by 3rd party code.
         * @returns %TRUE if the daemon is unsupported
         */
        get_tainted(): boolean;
        /**
         * Gets all the upgrades for a specific device.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @returns results
         */
        get_upgrades(device_id: string, cancellable?: Gio.Cancellable | null): Release[];
        /**
         * Gets all the upgrades for a specific device.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        get_upgrades_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.get_upgrades_async].
         * @param res the asynchronous result
         * @returns results
         */
        get_upgrades_finish(res: Gio.AsyncResult): Release[];
        /**
         * Gets the string that represents the user agent that is used for
         * uploading and downloading. The user agent will contain the runtime
         * version of fwupd somewhere in the provided string.
         * @returns a string, or %NULL for unknown.
         */
        get_user_agent(): string;
        /**
         * Marks all devices as unavailable for update. Update is only available if there is no other
         * inhibit imposed by other applications or by the system (e.g. low power state).
         *
         * The same application can inhibit the system multiple times.
         * @param reason the inhibit reason, e.g. `user active`
         * @param cancellable optional #GCancellable
         * @returns a string to use for [method@FwupdClient.uninhibit_async], or %NULL for failure
         */
        inhibit(reason: string, cancellable?: Gio.Cancellable | null): string;
        /**
         * Marks all devices as unavailable for update. Update is only available if there is no other
         * inhibit imposed by other applications or by the system (e.g. low power state).
         *
         * The same application can inhibit the system multiple times.
         * @param reason the inhibit reason, e.g. `user active`
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        inhibit_async(
            reason: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.inhibit_async].
         * @param res the asynchronous result
         * @returns a string to use for [method@FwupdClient.uninhibit_async], or %NULL for failure
         */
        inhibit_finish(res: Gio.AsyncResult): string;
        /**
         * Install a file onto a specific device.
         * @param device_id the device ID
         * @param filename the filename to install
         * @param install_flags install flags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        install(
            device_id: string,
            filename: string,
            install_flags: InstallFlags,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Install firmware onto a specific device.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * [method`Client`.set_main_context].
         * @param device_id the device ID
         * @param filename the filename to install
         * @param install_flags install flags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        install_async(
            device_id: string,
            filename: string,
            install_flags: InstallFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Install firmware onto a specific device.
         * @param device_id the device ID
         * @param bytes cabinet archive
         * @param install_flags install flags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        install_bytes(
            device_id: string,
            bytes: GLib.Bytes | Uint8Array,
            install_flags: InstallFlags,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Install firmware onto a specific device.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * [method`Client`.set_main_context].
         * @param device_id the device ID
         * @param bytes cabinet archive
         * @param install_flags install flags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        install_bytes_async(
            device_id: string,
            bytes: GLib.Bytes | Uint8Array,
            install_flags: InstallFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.install_bytes_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        install_bytes_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the result of [method`FwupdClient`.install_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        install_finish(res: Gio.AsyncResult): boolean;
        /**
         * Installs a new release on a device, downloading the firmware if required.
         * @param device a device
         * @param release a release
         * @param install_flags install flags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        install_release(
            device: Device,
            release: Release,
            install_flags: InstallFlags,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Installs a new release on a device, downloading the firmware if required.
         * @param device a device
         * @param release a release
         * @param install_flags install flags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
         * @param download_flags download flags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        install_release2(
            device: Device,
            release: Release,
            install_flags: InstallFlags,
            download_flags: ClientDownloadFlags,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Installs a new release on a device, downloading the firmware if required.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * [method`Client`.set_main_context].
         * @param device a device
         * @param release a release
         * @param install_flags install flags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
         * @param download_flags download flags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_ONLY_P2P
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        install_release2_async(
            device: Device,
            release: Release,
            install_flags: InstallFlags,
            download_flags: ClientDownloadFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Installs a new release on a device, downloading the firmware if required.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * [method`Client`.set_main_context].
         * @param device a device
         * @param release a release
         * @param install_flags install flags, e.g. %FWUPD_INSTALL_FLAG_ALLOW_REINSTALL
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        install_release_async(
            device: Device,
            release: Release,
            install_flags: InstallFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.install_release_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        install_release_finish(res: Gio.AsyncResult): boolean;
        /**
         * Modifies a BIOS setting using kernel API.
         * The daemon will only respond to this request with proper permissions.
         * @param settings BIOS settings
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        modify_bios_setting(
            settings: { [key: string]: any } | GLib.HashTable<any, any>,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Modifies a BIOS setting using kernel API.
         * The daemon will only respond to this request with proper permissions.
         * @param settings BIOS settings
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        modify_bios_setting_async(
            settings: { [key: string]: any } | GLib.HashTable<any, any>,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.modify_bios_setting_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        modify_bios_setting_finish(res: Gio.AsyncResult): boolean;
        /**
         * Modifies a daemon config option.
         * The daemon will only respond to this request with proper permissions.
         * @param key config key, e.g. `DisabledPlugins`
         * @param value config value, e.g. `*`
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        modify_config(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Modifies a daemon config option.
         * The daemon will only respond to this request with proper permissions.
         * @param key config key, e.g. `DisabledPlugins`
         * @param value config value, e.g. `*`
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        modify_config_async(
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.modify_config_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        modify_config_finish(res: Gio.AsyncResult): boolean;
        /**
         * Modifies a device in a specific way. Not all properties on the #FwupdDevice
         * are settable by the client, and some may have other restrictions on `value`.
         *
         * NOTE: User authentication may be required to complete this action.
         * @param device_id the device ID
         * @param key the key, e.g. `Flags`
         * @param value the key, e.g. `reported`
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        modify_device(device_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Modifies a device in a specific way. Not all properties on the #FwupdDevice
         * are settable by the client, and some may have other restrictions on `value`.
         * @param device_id the device ID
         * @param key the key, e.g. `Flags`
         * @param value the value, e.g. `reported`
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        modify_device_async(
            device_id: string,
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.modify_device_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        modify_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Modifies a system remote in a specific way.
         *
         * NOTE: User authentication may be required to complete this action.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param key the key, e.g. `Enabled`
         * @param value the key, e.g. `true`
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        modify_remote(remote_id: string, key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Modifies a system remote in a specific way.
         * @param remote_id the remote ID, e.g. `lvfs-testing`
         * @param key the key, e.g. `Enabled`
         * @param value the key, e.g. `true`
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        modify_remote_async(
            remote_id: string,
            key: string,
            value: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.modify_remote_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        modify_remote_finish(res: Gio.AsyncResult): boolean;
        /**
         * Asks the daemon to quit. This can only be called by the root user.
         *
         * NOTE: This will only actually quit if an install is not already in progress.
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        quit_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets the result of [method`FwupdClient`.quit_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        quit_finish(res: Gio.AsyncResult): boolean;
        /**
         * Refreshes a remote by downloading new metadata.
         * @param remote a #FwupdRemote
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        refresh_remote(remote: Remote, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Refreshes a remote by downloading new metadata.
         * @param remote a #FwupdRemote
         * @param download_flags download flags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_ONLY_P2P
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        refresh_remote2(
            remote: Remote,
            download_flags: ClientDownloadFlags,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Refreshes a remote by downloading new metadata.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * [method`Client`.set_main_context].
         * @param remote a #FwupdRemote
         * @param download_flags download flags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_ONLY_P2P
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        refresh_remote2_async(
            remote: Remote,
            download_flags: ClientDownloadFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Refreshes a remote by downloading new metadata.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * [method`Client`.set_main_context].
         * @param remote a #FwupdRemote
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        refresh_remote_async(
            remote: Remote,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.refresh_remote_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        refresh_remote_finish(res: Gio.AsyncResult): boolean;
        /**
         * Signs the data using the client self-signed certificate.
         * @param value a string to sign, typically a JSON blob
         * @param flags signing flags, e.g. %FWUPD_SELF_SIGN_FLAG_ADD_TIMESTAMP
         * @param cancellable optional #GCancellable
         * @returns a signature, or %NULL for failure
         */
        self_sign(value: string, flags: SelfSignFlags, cancellable?: Gio.Cancellable | null): string;
        /**
         * Signs the data using the client self-signed certificate.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         * @param value a string to sign, typically a JSON blob
         * @param flags signing flags, e.g. %FWUPD_SELF_SIGN_FLAG_ADD_TIMESTAMP
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        self_sign_async(
            value: string,
            flags: SelfSignFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.self_sign_async].
         * @param res the asynchronous result
         * @returns a signature, or %NULL for failure
         */
        self_sign_finish(res: Gio.AsyncResult): string;
        /**
         * Sets the list of approved firmware.
         * @param checksums Array of checksums
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        set_approved_firmware(checksums: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the list of approved firmware.
         * @param checksums firmware checksums
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        set_approved_firmware_async(
            checksums: string[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.set_approved_firmware_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        set_approved_firmware_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets the list of approved firmware.
         * @param checksums Array of checksums
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        set_blocked_firmware(checksums: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the list of blocked firmware.
         * @param checksums firmware checksums
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        set_blocked_firmware_async(
            checksums: string[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.set_blocked_firmware_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        set_blocked_firmware_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets the daemon version number.
         * @param daemon_version A semantic version, e.g. "1.2.3"
         */
        set_daemon_version(daemon_version: string): void;
        /**
         * Sets the features the client supports. This allows firmware to depend on
         * specific front-end features, for instance showing the user an image on
         * how to detach the hardware.
         *
         * Clients can call this none or multiple times.
         * @param feature_flags feature flags, e.g. %FWUPD_FEATURE_FLAG_UPDATE_TEXT
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        set_feature_flags(feature_flags: FeatureFlags, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the features the client supports. This allows firmware to depend on
         * specific front-end features, for instance showing the user an image on
         * how to detach the hardware.
         * @param feature_flags feature flags, e.g. %FWUPD_FEATURE_FLAG_UPDATE_TEXT
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        set_feature_flags_async(
            feature_flags: FeatureFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.set_feature_flags_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        set_feature_flags_finish(res: Gio.AsyncResult): boolean;
        /**
         * Sets the internal main context to use for returning progress signals.
         * @param main_ctx the global default main context to use
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
         * @param package_name client program name, e.g. `gnome-software`
         * @param package_version client program version, e.g. `3.28.1`
         */
        set_user_agent_for_package(package_name: string, package_version: string): void;
        /**
         * Revert the fix to one specific security attribute.
         * @param appstream_id the HSI AppStream ID
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        undo_host_security_attr(appstream_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Reverts the fix to one specific security attribute.
         * @param appstream_id HSI AppStream ID
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        undo_host_security_attr_async(
            appstream_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.undo_host_security_attr_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        undo_host_security_attr_finish(res: Gio.AsyncResult): boolean;
        /**
         * Removes the inhibit token added by the application.
         * @param inhibit_id the inhibit ID
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        uninhibit(inhibit_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Removes the inhibit token added by the application.
         * @param inhibit_id the inhibit ID
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        uninhibit_async(
            inhibit_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.uninhibit_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        uninhibit_finish(res: Gio.AsyncResult): boolean;
        /**
         * Unlocks a specific device so firmware can be read or wrote.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        unlock(device_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Unlocks a specific device so firmware can be read or wrote.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        unlock_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.unlock_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
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
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
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
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
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
         * [method`Client`.set_main_context].
         * @param remote_id remote ID, e.g. `lvfs-testing`
         * @param metadata XML metadata data
         * @param signature signature data
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        update_metadata_bytes_async(
            remote_id: string,
            metadata: GLib.Bytes | Uint8Array,
            signature: GLib.Bytes | Uint8Array,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.update_metadata_bytes_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        update_metadata_bytes_finish(res: Gio.AsyncResult): boolean;
        /**
         * Uploads data to a remote server. The [method`Client`.set_user_agent] function
         * should be called before this method is used.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags download flags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
         * @param cancellable optional #GCancellable
         * @returns response data, or %NULL for error
         */
        upload_bytes(
            url: string,
            payload: string,
            signature: string | null,
            flags: ClientUploadFlags,
            cancellable?: Gio.Cancellable | null,
        ): GLib.Bytes;
        /**
         * Uploads data to a remote server. The [method`Client`.set_user_agent] function
         * should be called before this method is used.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * [method`Client`.set_main_context].
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags download flags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        upload_bytes_async(
            url: string,
            payload: string,
            signature: string | null,
            flags: ClientUploadFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.upload_bytes_async].
         * @param res the asynchronous result
         * @returns response data, or %NULL for error
         */
        upload_bytes_finish(res: Gio.AsyncResult): GLib.Bytes;
        /**
         * Uploads a report to a remote server. The [method`Client`.set_user_agent] function
         * should be called before this method is used.
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags download flags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
         * @param cancellable optional #GCancellable
         * @returns a URI (perhaps an empty string), or %NULL for error
         */
        upload_report(
            url: string,
            payload: string,
            signature: string | null,
            flags: ClientUploadFlags,
            cancellable?: Gio.Cancellable | null,
        ): string;
        /**
         * Uploads a report to a remote server. The [method`Client`.set_user_agent] function
         * should be called before this method is used.
         *
         * You must have called [method`Client`.connect_async] on `self` before using
         * this method.
         *
         * NOTE: This method is thread-safe, but progress signals will be
         * emitted in the global default main context, if not explicitly set with
         * [method`Client`.set_main_context].
         * @param url the remote URL
         * @param payload payload string
         * @param signature signature string
         * @param flags download flags, e.g. %FWUPD_CLIENT_DOWNLOAD_FLAG_NONE
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        upload_report_async(
            url: string,
            payload: string,
            signature: string | null,
            flags: ClientUploadFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.upload_report_async].
         * @param res the asynchronous result
         * @returns a URI (perhaps an empty string), or %NULL for error
         */
        upload_report_finish(res: Gio.AsyncResult): string;
        /**
         * Verify a specific device.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @returns %TRUE for verification success
         */
        verify(device_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Verify a specific device.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        verify_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.verify_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        verify_finish(res: Gio.AsyncResult): boolean;
        /**
         * Update the verification record for a specific device.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @returns %TRUE for verification success
         */
        verify_update(device_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Update the verification record for a specific device.
         * @param device_id the device ID
         * @param cancellable optional #GCancellable
         * @param callback the function to run on completion
         */
        verify_update_async(
            device_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of [method`FwupdClient`.verify_update_async].
         * @param res the asynchronous result
         * @returns %TRUE for success
         */
        verify_update_finish(res: Gio.AsyncResult): boolean;
    }

    module Device {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            battery_level: number;
            batteryLevel: number;
            battery_threshold: number;
            batteryThreshold: number;
            flags: number;
            parent: Device;
            percentage: number;
            problems: number;
            protocol: string;
            request_flags: number;
            requestFlags: number;
            status: number;
            update_error: string;
            updateError: string;
            update_image: string;
            updateImage: string;
            update_message: string;
            updateMessage: string;
            update_state: number;
            updateState: number;
            version: string;
            version_format: number;
            versionFormat: number;
        }
    }

    /**
     * A physical device on the host with optionally updatable firmware.
     *
     * See also: [class`FwupdRelease]`
     */
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Properties

        /**
         * The device battery level in percent.
         */
        get battery_level(): number;
        set battery_level(val: number);
        /**
         * The device battery level in percent.
         */
        get batteryLevel(): number;
        set batteryLevel(val: number);
        /**
         * The device battery threshold in percent.
         */
        get battery_threshold(): number;
        set battery_threshold(val: number);
        /**
         * The device battery threshold in percent.
         */
        get batteryThreshold(): number;
        set batteryThreshold(val: number);
        /**
         * The device flags.
         */
        get flags(): number;
        set flags(val: number);
        /**
         * The device parent.
         */
        get parent(): Device;
        set parent(val: Device);
        /**
         * The current device percentage.
         */
        get percentage(): number;
        set percentage(val: number);
        /**
         * The problems with the device that the user could fix, e.g. "lid open".
         */
        get problems(): number;
        set problems(val: number);
        /**
         * The device protocol.
         */
        get protocol(): string;
        set protocol(val: string);
        /**
         * The device request flags.
         */
        get request_flags(): number;
        set request_flags(val: number);
        /**
         * The device request flags.
         */
        get requestFlags(): number;
        set requestFlags(val: number);
        /**
         * The current device status.
         */
        get status(): number;
        set status(val: number);
        /**
         * The device update error.
         */
        get update_error(): string;
        set update_error(val: string);
        /**
         * The device update error.
         */
        get updateError(): string;
        set updateError(val: string);
        /**
         * The update image for the device.
         */
        get update_image(): string;
        set update_image(val: string);
        /**
         * The update image for the device.
         */
        get updateImage(): string;
        set updateImage(val: string);
        /**
         * The device update message.
         */
        get update_message(): string;
        set update_message(val: string);
        /**
         * The device update message.
         */
        get updateMessage(): string;
        set updateMessage(val: string);
        /**
         * The device update state.
         */
        get update_state(): number;
        set update_state(val: number);
        /**
         * The device update state.
         */
        get updateState(): number;
        set updateState(val: number);
        /**
         * The device version.
         */
        get version(): string;
        set version(val: string);
        /**
         * The version format of the device.
         */
        get version_format(): number;
        set version_format(val: number);
        /**
         * The version format of the device.
         */
        get versionFormat(): number;
        set versionFormat(val: number);

        // Constructors

        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Device;

        // Static methods

        /**
         * Sets the parent object on all devices in the array using the parent ID.
         * @param devices devices
         */
        static array_ensure_parents(devices: Device[]): void;
        /**
         * Creates an array of new devices that match using fwupd_device_match_flags().
         * @param devices devices
         * @param include #FwupdDeviceFlags, or %FWUPD_DEVICE_FLAG_NONE
         * @param exclude #FwupdDeviceFlags, or %FWUPD_DEVICE_FLAG_NONE
         */
        static array_filter_flags(devices: Device[], include: DeviceFlags, exclude: DeviceFlags): Device[];
        /**
         * Creates an array of new devices using serialized data.
         * @param value the serialized data
         */
        static array_from_variant(value: GLib.Variant): Device[];
        /**
         * Converts a string to an enumerated device flag.
         * @param device_flag a string, e.g. `require-ac`
         */
        static flag_from_string(device_flag?: string | null): DeviceFlags;
        /**
         * Converts a device flag to a string.
         * @param device_flag a device flag, e.g. %FWUPD_DEVICE_FLAG_REQUIRE_AC
         */
        static flag_to_string(device_flag: DeviceFlags): string;
        /**
         * Creates a new device using serialized data.
         * @param value the serialized data
         */
        static from_variant(value: GLib.Variant): Device;
        /**
         * Checks the string is a valid non-partial device ID. It is important to note
         * that the wildcard ID of `*` is not considered a valid ID in this function and
         * the client must check for this manually if this should be allowed.
         * @param device_id string to check, e.g. `d3fae86d95e5d56626129d00e332c4b8dac95442`
         */
        static id_is_valid(device_id: string): boolean;
        /**
         * Converts a string to a enumerated device inhibit kind.
         * @param device_problem a string, e.g. `require-ac`
         */
        static problem_from_string(device_problem?: string | null): DeviceProblem;
        /**
         * Converts a device inhibit kind to a string.
         * @param device_problem a device inhibit kind, e.g. %FWUPD_DEVICE_PROBLEM_SYSTEM_POWER_TOO_LOW
         */
        static problem_to_string(device_problem: DeviceProblem): string;

        // Methods

        /**
         * Adds a device checksum.
         * @param checksum the device checksum
         */
        add_checksum(checksum: string): void;
        /**
         * Adds a child device. An child device is logically linked to the primary
         * device in some way.
         *
         * NOTE: You should never call this function from user code, it is for daemon
         * use only. Only use fwupd_device_set_parent() to set up a logical tree.
         * @param child Another #FwupdDevice
         */
        add_child(child: Device): void;
        /**
         * Adds a specific device flag to the device.
         * @param flag the #FwupdDeviceFlags
         */
        add_flag(flag: DeviceFlags): void;
        /**
         * Adds the GUID if it does not already exist.
         * @param guid the GUID, e.g. `2082b5e0-7a64-478a-b1b2-e3404fab6dad`
         */
        add_guid(guid: string): void;
        /**
         * Adds the icon name if it does not already exist.
         * @param icon the icon name, e.g. `input-mouse` or `/usr/share/icons/foo.png`
         */
        add_icon(icon: string): void;
        /**
         * Adds the instance ID if it does not already exist.
         * @param instance_id the instance ID, e.g. `PCI\VEN_10EC&DEV_525A`
         */
        add_instance_id(instance_id: string): void;
        /**
         * Adds an current issue to this device.
         * @param issue the update issue, e.g. `CVE-2019-12345`
         */
        add_issue(issue: string): void;
        /**
         * Adds a specific device problem kind to the device.
         * @param problem the #FwupdDeviceProblem, e.g. #FWUPD_DEVICE_PROBLEM_SYSTEM_POWER_TOO_LOW
         */
        add_problem(problem: DeviceProblem): void;
        /**
         * Adds a device protocol name.
         * @param protocol the protocol name, e.g. `com.hughski.colorhug`
         */
        add_protocol(protocol: string): void;
        /**
         * Adds a release for this device.
         * @param release a release
         */
        add_release(release: Release): void;
        /**
         * Adds a specific device request flag to the device.
         * @param request_flag the #FwupdRequestFlags
         */
        add_request_flag(request_flag: RequestFlags): void;
        /**
         * Adds a device vendor ID.
         * @param vendor_id the ID, e.g. 'USB:0x1234'
         */
        add_vendor_id(vendor_id: string): void;
        /**
         * Comparison function for comparing two device objects.
         * @param self2 a different device
         * @returns negative, 0 or positive
         */
        compare(self2: Device): number;
        /**
         * Loads a fwupd security attribute from a JSON node.
         * @param json_node a JSON node
         * @returns %TRUE for success
         */
        from_json(json_node: Json.Node): boolean;
        /**
         * Returns the battery level.
         * @returns value in percent
         */
        get_battery_level(): number;
        /**
         * Returns the battery threshold under which a firmware update cannot be
         * performed.
         *
         * If fwupd_device_set_battery_threshold() has not been used, a default value is
         * used instead.
         * @returns value in percent
         */
        get_battery_threshold(): number;
        /**
         * Gets the current device branch.
         * @returns the device branch, or %NULL if unset
         */
        get_branch(): string;
        /**
         * Gets the device checksums.
         * @returns the checksums, which may be empty
         */
        get_checksums(): string[];
        /**
         * Gets the device children. These can only be assigned using fwupd_device_set_parent().
         * @returns the children, which may be empty
         */
        get_children(): Device[];
        /**
         * Gets the composite ID, falling back to the device ID if unset.
         *
         * The composite ID will be the same value for all parent, child and sibling
         * devices.
         * @returns the composite ID
         */
        get_composite_id(): string | null;
        /**
         * Gets when the device was created.
         * @returns the UNIX time, or 0 if unset
         */
        get_created(): number;
        /**
         * Gets the device description in AppStream markup format.
         * @returns the device description, or %NULL if unset
         */
        get_description(): string;
        /**
         * Gets device flags.
         * @returns device flags, or 0 if unset
         */
        get_flags(): number;
        /**
         * Gets the number of flash cycles left on the device
         * @returns the flash cycles left, or %NULL if unset
         */
        get_flashes_left(): number;
        /**
         * Gets the default GUID.
         * @returns the GUID, or %NULL if unset
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
         * @returns the ID, or %NULL if unset
         */
        get_id(): string;
        /**
         * Gets the time estimate for firmware installation (in seconds)
         * @returns the estimated time to flash this device (or 0 if unset)
         */
        get_install_duration(): number;
        /**
         * Gets the instance IDs.
         * @returns the instance IDs
         */
        get_instance_ids(): string[];
        /**
         * Gets the list of issues currently affecting this device.
         * @returns the issues, which may be empty
         */
        get_issues(): string[];
        /**
         * Gets when the device was modified.
         * @returns the UNIX time, or 0 if unset
         */
        get_modified(): number;
        /**
         * Gets the device name.
         * @returns the device name, or %NULL if unset
         */
        get_name(): string;
        /**
         * Gets the parent.
         * @returns the parent device, or %NULL if unset
         */
        get_parent(): Device;
        /**
         * Gets the parent ID.
         * @returns the parent ID, or %NULL if unset
         */
        get_parent_id(): string;
        /**
         * Returns the percentage completion of the device.
         * @returns the percentage value
         */
        get_percentage(): number;
        /**
         * Gets the plugin that created the device.
         * @returns the plugin name, or %NULL if unset
         */
        get_plugin(): string;
        /**
         * Gets device problems.
         * @returns device problems, or 0 if unset
         */
        get_problems(): number;
        /**
         * Gets the protocol name that the device uses for updating.
         * @returns the protocol name, or %NULL if unset
         */
        get_protocol(): string;
        /**
         * Gets the device protocol names.
         * @returns the device protocol names
         */
        get_protocols(): string[];
        /**
         * Gets the default release for this device.
         * @returns the #FwupdRelease, or %NULL if not set
         */
        get_release_default(): Release;
        /**
         * Gets all the releases for this device.
         * @returns array of releases
         */
        get_releases(): Release[];
        /**
         * Gets device request flags.
         * @returns device request flags, or 0 if unset
         */
        get_request_flags(): number;
        /**
         * Gets the device root.
         * @returns the root device, or %NULL if unset
         */
        get_root(): Device;
        /**
         * Gets the serial number for the device.
         * @returns a string value, or %NULL if never set.
         */
        get_serial(): string;
        /**
         * Returns what the device is currently doing.
         * @returns the status value, e.g. %FWUPD_STATUS_DEVICE_WRITE
         */
        get_status(): Status;
        /**
         * Gets the device summary.
         * @returns the device summary, or %NULL if unset
         */
        get_summary(): string;
        /**
         * Gets the update error string.
         * @returns the update error string, or %NULL if unset
         */
        get_update_error(): string;
        /**
         * Gets the update image URL.
         * @returns the update image URL, or %NULL if unset
         */
        get_update_image(): string;
        /**
         * Gets the update message string.
         * @returns the update message string, or %NULL if unset
         */
        get_update_message(): string;
        /**
         * Gets the update state.
         * @returns the update state, or %FWUPD_UPDATE_STATE_UNKNOWN if unset
         */
        get_update_state(): UpdateState;
        /**
         * Gets the device vendor.
         * @returns the device vendor, or %NULL if unset
         */
        get_vendor(): string;
        /**
         * Gets the combined device vendor ID.
         * @returns the device vendor, e.g. 'USB:0x1234|PCI:0x5678', or %NULL if unset
         */
        get_vendor_id(): string;
        /**
         * Gets the device vendor ID.
         * @returns the device vendor ID
         */
        get_vendor_ids(): string[];
        /**
         * Gets the device version.
         * @returns the device version, or %NULL if unset
         */
        get_version(): string;
        /**
         * Gets the version of the bootloader.
         * @returns the device version_bootloader, or %NULL if unset
         */
        get_version_bootloader(): string;
        /**
         * Gets the bootloader version of firmware the device will accept in raw format.
         * @returns integer version number, or %0 if unset
         */
        get_version_bootloader_raw(): number;
        /**
         * Gets the date when the firmware was built.
         * @returns the UNIX time, or 0 if unset
         */
        get_version_build_date(): number;
        /**
         * Gets the version format.
         * @returns the version format, or %FWUPD_VERSION_FORMAT_UNKNOWN if unset
         */
        get_version_format(): VersionFormat;
        /**
         * Gets the lowest version of firmware the device will accept.
         * @returns the device version_lowest, or %NULL if unset
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
         * Finds out if the device has this specific checksum.
         * @param checksum the device checksum
         * @returns %TRUE if the checksum name is found
         */
        has_checksum(checksum: string): boolean;
        /**
         * Finds if the device has a specific device flag.
         * @param flag the #FwupdDeviceFlags
         * @returns %TRUE if the flag is set
         */
        has_flag(flag: DeviceFlags): boolean;
        /**
         * Finds out if the device has this specific GUID.
         * @param guid the GUID, e.g. `2082b5e0-7a64-478a-b1b2-e3404fab6dad`
         * @returns %TRUE if the GUID is found
         */
        has_guid(guid: string): boolean;
        /**
         * Finds out if the device has this specific icon.
         * @param icon the icon name, e.g. `input-mouse` or `/usr/share/icons/foo.png`
         * @returns %TRUE if the icon name is found
         */
        has_icon(icon: string): boolean;
        /**
         * Finds out if the device has this specific instance ID.
         * @param instance_id the instance ID, e.g. `PCI\VEN_10EC&DEV_525A`
         * @returns %TRUE if the instance ID is found
         */
        has_instance_id(instance_id: string): boolean;
        /**
         * Finds if the device has a specific device problem kind.
         * @param problem the #FwupdDeviceProblem
         * @returns %TRUE if the problem is set
         */
        has_problem(problem: DeviceProblem): boolean;
        /**
         * Finds out if the device has this specific protocol name.
         * @param protocol the protocol name, e.g. `com.hughski.colorhug`
         * @returns %TRUE if the protocol name is found
         */
        has_protocol(protocol: string): boolean;
        /**
         * Finds if the device has a specific device request flag.
         * @param request_flag the #FwupdRequestFlags
         * @returns %TRUE if the request_flag is set
         */
        has_request_flag(request_flag: RequestFlags): boolean;
        /**
         * Finds out if the device has this specific vendor ID.
         * @param vendor_id the vendor ID, e.g. 'USB:0x1234'
         * @returns %TRUE if the vendor ID is found
         */
        has_vendor_id(vendor_id: string): boolean;
        /**
         * Copy all properties from the donor object if they have not already been set.
         * @param donor Another #FwupdDevice
         */
        incorporate(donor: Device): void;
        /**
         * Check if the device flags match.
         * @param include #FwupdDeviceFlags, or %FWUPD_DEVICE_FLAG_NONE
         * @param exclude #FwupdDeviceFlags, or %FWUPD_DEVICE_FLAG_NONE
         * @returns %TRUE if the device flags match
         */
        match_flags(include: DeviceFlags, exclude: DeviceFlags): boolean;
        /**
         * Removes a child device.
         *
         * NOTE: You should never call this function from user code, it is for daemon
         * use only.
         * @param child Another #FwupdDevice
         */
        remove_child(child: Device): void;
        /**
         * Removes a specific device flag from the device.
         * @param flag the #FwupdDeviceFlags
         */
        remove_flag(flag: DeviceFlags): void;
        /**
         * Removes a specific device problem kind from the device.
         * @param problem the #FwupdDeviceProblem, e.g. #FWUPD_DEVICE_PROBLEM_SYSTEM_POWER_TOO_LOW
         */
        remove_problem(problem: DeviceProblem): void;
        /**
         * Removes a specific device request flag from the device.
         * @param request_flag the #FwupdRequestFlags
         */
        remove_request_flag(request_flag: RequestFlags): void;
        /**
         * Sets the battery level, or %FWUPD_BATTERY_LEVEL_INVALID.
         *
         * Setting this allows fwupd to show a warning if the device change is too low
         * to perform the update.
         * @param battery_level the percentage value
         */
        set_battery_level(battery_level: number): void;
        /**
         * Sets the battery level, or %FWUPD_BATTERY_LEVEL_INVALID for the default.
         *
         * Setting this allows fwupd to show a warning if the device change is too low
         * to perform the update.
         * @param battery_threshold the percentage value
         */
        set_battery_threshold(battery_threshold: number): void;
        /**
         * Sets the current device branch.
         * @param branch the device one line branch
         */
        set_branch(branch?: string | null): void;
        /**
         * Sets the composite ID, which is usually a SHA1 hash of a grandparent or
         * parent device.
         * @param composite_id a device ID
         */
        set_composite_id(composite_id?: string | null): void;
        /**
         * Sets when the device was created.
         * @param created the UNIX time
         */
        set_created(created: number): void;
        /**
         * Sets the device description.
         * @param description the description in AppStream markup format
         */
        set_description(description?: string | null): void;
        /**
         * Sets device flags.
         * @param flags device flags, e.g. %FWUPD_DEVICE_FLAG_REQUIRE_AC
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
        set_id(id?: string | null): void;
        /**
         * Sets the time estimate for firmware installation (in seconds)
         * @param duration the amount of time
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
        set_name(name?: string | null): void;
        /**
         * Sets the parent. Only used internally.
         * @param parent another #FwupdDevice
         */
        set_parent(parent?: Device | null): void;
        /**
         * Sets the parent ID.
         * @param parent_id the device ID, e.g. `USB:foo`
         */
        set_parent_id(parent_id?: string | null): void;
        /**
         * Sets the percentage completion of the device.
         * @param percentage the percentage value
         */
        set_percentage(percentage: number): void;
        /**
         * Sets the plugin that created the device.
         * @param plugin the plugin name, e.g. `colorhug`
         */
        set_plugin(plugin?: string | null): void;
        /**
         * Sets device problems.
         * @param problems device problems, e.g. %FWUPD_DEVICE_PROBLEM_SYSTEM_POWER_TOO_LOW
         */
        set_problems(problems: number): void;
        /**
         * Sets the protocol name that is used to update the device.
         * @param protocol the protocol name, e.g. `com.hughski.colorhug`
         */
        set_protocol(protocol: string): void;
        /**
         * Sets device request flags.
         * @param request_flags device request flags, e.g. %FWUPD_DEVICE_REQUEST_FLAG_REQUIRE_AC
         */
        set_request_flags(request_flags: number): void;
        /**
         * Sets the serial number for the device.
         * @param serial the device serial number
         */
        set_serial(serial?: string | null): void;
        /**
         * Sets what the device is currently doing.
         * @param status the status value, e.g. %FWUPD_STATUS_DEVICE_WRITE
         */
        set_status(status: Status): void;
        /**
         * Sets the device summary.
         * @param summary the device one line summary
         */
        set_summary(summary?: string | null): void;
        /**
         * Sets the update error string.
         * @param update_error the update error string
         */
        set_update_error(update_error?: string | null): void;
        /**
         * Sets the update image URL.
         * @param update_image the update image URL
         */
        set_update_image(update_image?: string | null): void;
        /**
         * Sets the update message string.
         * @param update_message the update message string
         */
        set_update_message(update_message?: string | null): void;
        /**
         * Sets the update state.
         * @param update_state the state, e.g. %FWUPD_UPDATE_STATE_PENDING
         */
        set_update_state(update_state: UpdateState): void;
        /**
         * Sets the device vendor.
         * @param vendor the vendor
         */
        set_vendor(vendor?: string | null): void;
        /**
         * Sets the device vendor ID.
         * @param vendor_id the vendor ID, e.g. 'USB:0x1234' or 'USB:0x1234|PCI:0x5678'
         */
        set_vendor_id(vendor_id: string): void;
        /**
         * Sets the device version.
         * @param version the device version, e.g. `1.2.3`
         */
        set_version(version?: string | null): void;
        /**
         * Sets the bootloader version.
         * @param version_bootloader the version
         */
        set_version_bootloader(version_bootloader?: string | null): void;
        /**
         * Sets the raw bootloader version number from the hardware before converted to a string.
         * @param version_bootloader_raw the raw hardware version
         */
        set_version_bootloader_raw(version_bootloader_raw: number): void;
        /**
         * Sets the date when the firmware was built.
         * @param version_build_date the UNIX time
         */
        set_version_build_date(version_build_date: number): void;
        /**
         * Sets the version format.
         * @param version_format the version format, e.g. %FWUPD_VERSION_FORMAT_NUMBER
         */
        set_version_format(version_format: VersionFormat): void;
        /**
         * Sets the lowest version of firmware the device will accept.
         * @param version_lowest the version
         */
        set_version_lowest(version_lowest?: string | null): void;
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
         * Adds a fwupd device to a JSON builder
         * @param builder a JSON builder
         */
        to_json(builder: Json.Builder): void;
        /**
         * Adds a fwupd device to a JSON builder
         * Optionally provides additional data based upon flags
         * @param builder a JSON builder
         * @param flags device flags
         */
        to_json_full(builder: Json.Builder, flags: DeviceFlags): void;
        /**
         * Builds a text representation of the object.
         * @returns text, or %NULL for invalid
         */
        to_string(): string;
        /**
         * Serialize the device data omitting sensitive fields
         * @returns the serialized data, or %NULL for error
         */
        to_variant(): GLib.Variant;
        /**
         * Serialize the device data.
         * Optionally provides additional data based upon flags
         * @param flags device flags
         * @returns the serialized data, or %NULL for error
         */
        to_variant_full(flags: DeviceFlags): GLib.Variant;
    }

    module Plugin {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: number;
            name: string;
        }
    }

    /**
     * A plugin which is used by fwupd to enumerate and update devices.
     *
     * See also: [class`FwupdRelease]`
     */
    class Plugin extends GObject.Object {
        static $gtype: GObject.GType<Plugin>;

        // Properties

        /**
         * The plugin flags.
         */
        get flags(): number;
        set flags(val: number);
        /**
         * The plugin name.
         */
        get name(): string;
        set name(val: string);

        // Constructors

        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Plugin;

        // Static methods

        /**
         * Creates an array of new plugins using serialized data.
         * @param value the serialized data
         */
        static array_from_variant(value: GLib.Variant): Plugin[];
        /**
         * Converts a string to an enumerated plugin flag.
         * @param plugin_flag a string, e.g. `require-ac`
         */
        static flag_from_string(plugin_flag?: string | null): PluginFlags;
        /**
         * Converts an enumerated plugin flag to a string.
         * @param plugin_flag plugin flags, e.g. %FWUPD_PLUGIN_FLAG_CLEAR_UPDATABLE
         */
        static flag_to_string(plugin_flag: PluginFlags): string;
        /**
         * Creates a new plugin using serialized data.
         * @param value the serialized data
         */
        static from_variant(value: GLib.Variant): Plugin;

        // Methods

        /**
         * Adds a specific plugin flag to the plugin.
         * @param flag the #FwupdPluginFlags
         */
        add_flag(flag: PluginFlags): void;
        /**
         * Gets the plugin flags.
         * @returns plugin flags, or 0 if unset
         */
        get_flags(): number;
        /**
         * Gets the plugin name.
         * @returns the plugin name, or %NULL if unset
         */
        get_name(): string;
        /**
         * Finds if the plugin has a specific plugin flag.
         * @param flag a plugin flag
         * @returns %TRUE if the flag is set
         */
        has_flag(flag: PluginFlags): boolean;
        /**
         * Removes a specific plugin flag from the plugin.
         * @param flag a plugin flag
         */
        remove_flag(flag: PluginFlags): void;
        /**
         * Sets the plugin flags.
         * @param flags plugin flags, e.g. %FWUPD_PLUGIN_FLAG_CAPSULES_UNSUPPORTED
         */
        set_flags(flags: number): void;
        /**
         * Sets the plugin name.
         * @param name the plugin name, e.g. `bios`
         */
        set_name(name: string): void;
        /**
         * Adds a fwupd plugin to a JSON builder
         * @param builder a JSON builder
         */
        to_json(builder: Json.Builder): void;
        /**
         * Builds a text representation of the object.
         * @returns text, or %NULL for invalid
         */
        to_string(): string;
        /**
         * Serialize the plugin data omitting sensitive fields
         * @returns the serialized data, or %NULL for error
         */
        to_variant(): GLib.Variant;
    }

    module Release {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
     * See also: [class`FwupdDevice]`
     */
    class Release extends GObject.Object {
        static $gtype: GObject.GType<Release>;

        // Properties

        /**
         * The remote ID.
         */
        get remote_id(): string;
        set remote_id(val: string);
        /**
         * The remote ID.
         */
        get remoteId(): string;
        set remoteId(val: string);

        // Constructors

        constructor(properties?: Partial<Release.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Release;

        // Static methods

        /**
         * Creates an array of new releases that match using fwupd_release_match_flags().
         * @param rels releases
         * @param include #FwupdReleaseFlags, or %FWUPD_RELEASE_FLAG_NONE
         * @param exclude #FwupdReleaseFlags, or %FWUPD_RELEASE_FLAG_NONE
         */
        static array_filter_flags(rels: Release[], include: ReleaseFlags, exclude: ReleaseFlags): Release[];
        /**
         * Creates an array of new releases using serialized data.
         * @param value the serialized data
         */
        static array_from_variant(value: GLib.Variant): Release[];
        /**
         * Converts a string to an enumerated release flag.
         * @param release_flag a string, e.g. `trusted-payload`
         */
        static flag_from_string(release_flag?: string | null): ReleaseFlags;
        /**
         * Converts an enumerated release flag to a string.
         * @param release_flag a release flag, e.g. %FWUPD_RELEASE_FLAG_TRUSTED_PAYLOAD
         */
        static flag_to_string(release_flag: ReleaseFlags): string;
        /**
         * Creates a new release using serialized data.
         * @param value the serialized data
         */
        static from_variant(value: GLib.Variant): Release;
        /**
         * Converts a string to an enumerated release urgency value.
         * @param release_urgency a string, e.g. `low`
         */
        static urgency_from_string(release_urgency?: string | null): ReleaseUrgency;
        /**
         * Converts an enumerated release urgency to a string.
         * @param release_urgency a release urgency, e.g. %FWUPD_RELEASE_URGENCY_HIGH
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
         * @param checksum the update container checksum
         */
        add_checksum(checksum: string): void;
        /**
         * Adds a specific release flag to the release.
         * @param flag the #FwupdReleaseFlags
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
         * Adds a report for this release.
         * @param report a #FwupdReport
         */
        add_report(report: Report): void;
        /**
         * Adds a specific release tag.
         * @param tag the update tag, e.g. `vendor-factory-2021q1`
         */
        add_tag(tag: string): void;
        /**
         * Gets the AppStream ID.
         * @returns the AppStream ID, or %NULL if unset
         */
        get_appstream_id(): string;
        /**
         * Gets the update branch.
         * @returns the alternate branch, or %NULL if unset
         */
        get_branch(): string;
        /**
         * Gets the release categories.
         * @returns the categories, which may be empty
         */
        get_categories(): string[];
        /**
         * Gets the release container checksums.
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
         * @returns the update description, or %NULL if unset
         */
        get_description(): string;
        /**
         * Gets the optional text caption used to manually detach the device.
         * @returns the string caption, or %NULL if unset
         */
        get_detach_caption(): string;
        /**
         * Gets the optional image used to manually detach the device.
         * @returns the URI, or %NULL if unset
         */
        get_detach_image(): string;
        /**
         * Gets the URL for the online update notes.
         * @returns the update URL, or %NULL if unset
         */
        get_details_url(): string;
        /**
         * Gets the update filename.
         * @returns the update filename, or %NULL if unset
         */
        get_filename(): string;
        /**
         * Gets the release flags.
         * @returns release flags, or 0 if unset
         */
        get_flags(): ReleaseFlags;
        /**
         * Gets the update homepage.
         * @returns the update homepage, or %NULL if unset
         */
        get_homepage(): string;
        /**
         * Gets the release ID, which allows identifying the specific uploaded component.
         * @returns the ID, or %NULL if unset
         */
        get_id(): string;
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
         * @returns the update license, or %NULL if unset
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
         * @returns the value, or %NULL if unset
         */
        get_metadata_item(key: string): string;
        /**
         * Gets the update name.
         * @returns the update name, or %NULL if unset
         */
        get_name(): string;
        /**
         * Gets the update variant suffix.
         * @returns the update variant, or %NULL if unset
         */
        get_name_variant_suffix(): string;
        /**
         * Gets the update protocol.
         * @returns the update protocol, or %NULL if unset
         */
        get_protocol(): string;
        /**
         * Gets the remote ID that can be used for downloading.
         * @returns the ID, or %NULL if unset
         */
        get_remote_id(): string;
        /**
         * Gets all the reports for this release.
         * @returns array of reports
         */
        get_reports(): Report[];
        /**
         * Gets the update size.
         * @returns the update size in bytes, or 0 if unset
         */
        get_size(): number;
        /**
         * Gets the URL of the source code used to build this release.
         * @returns the update source_url, or %NULL if unset
         */
        get_source_url(): string;
        /**
         * Gets the update summary.
         * @returns the update summary, or %NULL if unset
         */
        get_summary(): string;
        /**
         * Gets the release tags.
         * @returns the tags, which may be empty
         */
        get_tags(): string[];
        /**
         * Gets the trust level of the release.
         * @returns the trust bitfield, e.g. #FWUPD_TRUST_FLAG_PAYLOAD
         */
        get_trust_flags(): TrustFlags;
        /**
         * Gets the update image.
         * @returns the update image URL, or %NULL if unset
         */
        get_update_image(): string;
        /**
         * Gets the update message.
         * @returns the update message, or %NULL if unset
         */
        get_update_message(): string;
        /**
         * Gets the release urgency.
         * @returns the release urgency, or 0 if unset
         */
        get_urgency(): ReleaseUrgency;
        /**
         * Gets the default update URI.
         * @returns the update URI, or %NULL if unset
         */
        get_uri(): string;
        /**
         * Gets the update vendor.
         * @returns the update vendor, or %NULL if unset
         */
        get_vendor(): string;
        /**
         * Gets the update version.
         * @returns the update version, or %NULL if unset
         */
        get_version(): string;
        /**
         * Finds out if the release has the update category.
         * @param category the update category, e.g. `X-EmbeddedController`
         * @returns %TRUE if the release matches
         */
        has_category(category: string): boolean;
        /**
         * Finds out if the release has the update container checksum.
         * @param checksum the update checksum
         * @returns %TRUE if the release matches
         */
        has_checksum(checksum: string): boolean;
        /**
         * Finds if the release has a specific release flag.
         * @param flag the #FwupdReleaseFlags
         * @returns %TRUE if the flag is set
         */
        has_flag(flag: ReleaseFlags): boolean;
        /**
         * Finds out if the release has a specific tag.
         * @param tag the update tag, e.g. `vendor-factory-2021q1`
         * @returns %TRUE if the release matches
         */
        has_tag(tag: string): boolean;
        /**
         * Copy all properties from the donor object.
         * @param donor another #FwupdRelease
         */
        incorporate(donor: Release): void;
        /**
         * Check if the release flags match.
         * @param include #FwupdReleaseFlags, or %FWUPD_RELEASE_FLAG_NONE
         * @param exclude #FwupdReleaseFlags, or %FWUPD_RELEASE_FLAG_NONE
         * @returns %TRUE if the release flags match
         */
        match_flags(include: ReleaseFlags, exclude: ReleaseFlags): boolean;
        /**
         * Removes a specific release flag from the release.
         * @param flag the #FwupdReleaseFlags
         */
        remove_flag(flag: ReleaseFlags): void;
        /**
         * Sets the AppStream ID.
         * @param appstream_id the AppStream component ID, e.g. `org.hughski.ColorHug2.firmware`
         */
        set_appstream_id(appstream_id?: string | null): void;
        /**
         * Sets the alternate branch.
         * @param branch the update one line branch
         */
        set_branch(branch?: string | null): void;
        /**
         * Sets when the update was created.
         * @param created UTC timestamp in UNIX format
         */
        set_created(created: number): void;
        /**
         * Sets the update description.
         * @param description the update description in AppStream markup format
         */
        set_description(description?: string | null): void;
        /**
         * Sets the optional text caption used to manually detach the device.
         * @param detach_caption string caption
         */
        set_detach_caption(detach_caption?: string | null): void;
        /**
         * Sets the optional image used to manually detach the device.
         * @param detach_image a fully qualified URI
         */
        set_detach_image(detach_image?: string | null): void;
        /**
         * Sets the URL for the online update notes.
         * @param details_url the URL
         */
        set_details_url(details_url?: string | null): void;
        /**
         * Sets the update filename.
         * @param filename the update filename on disk
         */
        set_filename(filename?: string | null): void;
        /**
         * Sets the release flags.
         * @param flags release flags, e.g. %FWUPD_RELEASE_FLAG_TRUSTED_PAYLOAD
         */
        set_flags(flags: ReleaseFlags): void;
        /**
         * Sets the update homepage URL.
         * @param homepage the URL
         */
        set_homepage(homepage?: string | null): void;
        /**
         * Sets the ID, which allows identifying the specific uploaded component.
         * @param id the AppStream component ID, e.g. `component:1234`
         */
        set_id(id?: string | null): void;
        /**
         * Sets the time estimate for firmware installation (in seconds)
         * @param duration amount of time in seconds
         */
        set_install_duration(duration: number): void;
        /**
         * Sets the update license.
         * @param license the update license.
         */
        set_license(license?: string | null): void;
        /**
         * Sets the update name.
         * @param name the update name.
         */
        set_name(name?: string | null): void;
        /**
         * Sets the update variant suffix.
         * @param name_variant_suffix the description
         */
        set_name_variant_suffix(name_variant_suffix?: string | null): void;
        /**
         * Sets the update protocol.
         * @param protocol the update protocol, e.g. `org.usb.dfu`
         */
        set_protocol(protocol?: string | null): void;
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
        set_source_url(source_url?: string | null): void;
        /**
         * Sets the update summary.
         * @param summary the update one line summary
         */
        set_summary(summary?: string | null): void;
        /**
         * Sets the trust level of the release.
         * @param trust_flags the bitfield, e.g. #FWUPD_TRUST_FLAG_PAYLOAD
         */
        set_trust_flags(trust_flags: TrustFlags): void;
        /**
         * Sets the update image.
         * @param update_image the update image URL
         */
        set_update_image(update_image?: string | null): void;
        /**
         * Sets the update message.
         * @param update_message the update message string
         */
        set_update_message(update_message?: string | null): void;
        /**
         * Sets the release urgency.
         * @param urgency the release urgency, e.g. %FWUPD_RELEASE_FLAG_TRUSTED_PAYLOAD
         */
        set_urgency(urgency: ReleaseUrgency): void;
        /**
         * Sets the update URI, i.e. where you can download the firmware from.
         * @param uri the update URI
         */
        set_uri(uri: string): void;
        /**
         * Sets the update vendor.
         * @param vendor the vendor name, e.g. `Hughski Limited`
         */
        set_vendor(vendor?: string | null): void;
        /**
         * Sets the update version.
         * @param version the update version, e.g. `1.2.4`
         */
        set_version(version?: string | null): void;
        /**
         * Adds a fwupd release to a JSON builder
         * @param builder a JSON builder
         */
        to_json(builder: Json.Builder): void;
        /**
         * Builds a text representation of the object.
         * @returns text, or %NULL for invalid
         */
        to_string(): string;
        /**
         * Serialize the release data.
         * @returns the serialized data, or %NULL for error
         */
        to_variant(): GLib.Variant;
    }

    module Remote {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            approval_required: boolean;
            approvalRequired: boolean;
            automatic_reports: boolean;
            automaticReports: boolean;
            automatic_security_reports: boolean;
            automaticSecurityReports: boolean;
            enabled: boolean;
            flags: number;
            id: string;
        }
    }

    /**
     * A source of metadata that provides firmware.
     *
     * Remotes can be local (e.g. folders on a disk) or remote (e.g. downloaded
     * over HTTP or IPFS).
     *
     * See also: [class`FwupdClient]`
     */
    class Remote extends GObject.Object {
        static $gtype: GObject.GType<Remote>;

        // Properties

        /**
         * If firmware from the remote should be checked against the system
         * list of approved firmware.
         */
        get approval_required(): boolean;
        set approval_required(val: boolean);
        /**
         * If firmware from the remote should be checked against the system
         * list of approved firmware.
         */
        get approvalRequired(): boolean;
        set approvalRequired(val: boolean);
        /**
         * The behavior for auto-uploading reports.
         */
        get automatic_reports(): boolean;
        set automatic_reports(val: boolean);
        /**
         * The behavior for auto-uploading reports.
         */
        get automaticReports(): boolean;
        set automaticReports(val: boolean);
        /**
         * The behavior for auto-uploading security reports.
         */
        get automatic_security_reports(): boolean;
        set automatic_security_reports(val: boolean);
        /**
         * The behavior for auto-uploading security reports.
         */
        get automaticSecurityReports(): boolean;
        set automaticSecurityReports(val: boolean);
        /**
         * If the remote is enabled and should be used.
         */
        get enabled(): boolean;
        set enabled(val: boolean);
        /**
         * The remote flags.
         */
        get flags(): number;
        set flags(val: number);
        /**
         * The remote ID.
         */
        get id(): string;
        set id(val: string);

        // Constructors

        constructor(properties?: Partial<Remote.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Remote;

        // Static methods

        /**
         * Creates an array of new devices using serialized data.
         * @param value the serialized data
         */
        static array_from_variant(value: GLib.Variant): Remote[];
        /**
         * Converts a string to an enumerated flag.
         * @param flag a string, e.g. `enabled`
         */
        static flag_from_string(flag?: string | null): RemoteFlags;
        /**
         * Returns the printable string for the flag.
         * @param flag remote attribute flags, e.g. %FWUPD_REMOTE_FLAG_ENABLED
         */
        static flag_to_string(flag: RemoteFlags): string;
        /**
         * Creates a new remote using serialized data.
         * @param value the serialized data
         */
        static from_variant(value: GLib.Variant): Remote;
        /**
         * Converts an printable string to an enumerated type.
         * @param kind a string, e.g. `download`
         */
        static kind_from_string(kind?: string | null): RemoteKind;
        /**
         * Converts an enumerated type to a printable string.
         * @param kind a #FwupdRemoteKind, e.g. %FWUPD_REMOTE_KIND_DOWNLOAD
         */
        static kind_to_string(kind: RemoteKind): string;

        // Methods

        /**
         * Adds a specific attribute flag to the attribute.
         * @param flag the #FwupdRemoteFlags, e.g. %FWUPD_REMOTE_FLAG_APPROVAL_REQUIRED
         */
        add_flag(flag: RemoteFlags): void;
        /**
         * Builds a URI for the URL using the username and password set for the remote,
         * including any basename URI substitution.
         * @param url the URL to use
         * @returns a URI, or %NULL for error
         */
        build_firmware_uri(url: string): string;
        /**
         * Builds a URI for the metadata using the username and password set for the remote.
         * @returns a URI, or %NULL for error
         */
        build_metadata_sig_uri(): string;
        /**
         * Builds a URI for the metadata signature using the username and password set for the remote.
         * @returns a URI, or %NULL for error
         */
        build_metadata_uri(): string;
        /**
         * Builds a URI for the URL using the username and password set for the remote.
         * @returns a URI, or %NULL for error
         */
        build_report_uri(): string;
        /**
         * Gets the age of the remote in seconds.
         * @returns a age, or %G_MAXUINT64 for unavailable
         */
        get_age(): number;
        /**
         * Gets the remote agreement in AppStream markup format
         * @returns a string, or %NULL if unset
         */
        get_agreement(): string;
        /**
         * Gets if firmware from the remote should be checked against the list
         * of a approved checksums.
         * @returns a #TRUE if the remote is restricted
         */
        get_approval_required(): boolean;
        /**
         * Gets if reports should be automatically uploaded to this remote
         * @returns a #TRUE if the remote should have reports uploaded automatically
         */
        get_automatic_reports(): boolean;
        /**
         * Gets if security reports should be automatically uploaded to this remote
         * @returns a #TRUE if the remote should have reports uploaded automatically
         */
        get_automatic_security_reports(): boolean;
        /**
         * Gets the remote signature checksum.
         * @returns a string, or %NULL if unset
         */
        get_checksum(): string;
        /**
         * Gets the remote metadata checksum.
         * @returns a string, or %NULL if unset
         */
        get_checksum_metadata(): string;
        /**
         * Gets if the remote is enabled and should be used.
         * @returns a #TRUE if the remote is enabled
         */
        get_enabled(): boolean;
        /**
         * Gets the path and filename that the remote is using for a cache.
         * @returns a string, or %NULL for unset
         */
        get_filename_cache(): string;
        /**
         * Gets the path and filename that the remote is using for a signature cache.
         * @returns a string, or %NULL for unset
         */
        get_filename_cache_sig(): string;
        /**
         * Gets the path and filename of the remote itself, typically a `.conf` file.
         * @returns a string, or %NULL for unset
         */
        get_filename_source(): string;
        /**
         * Gets the base URI for firmware.
         * @returns a URI, or %NULL for unset.
         */
        get_firmware_base_uri(): string;
        /**
         * Gets the self flags.
         * @returns remote attribute flags, or 0 if unset
         */
        get_flags(): RemoteFlags;
        /**
         * Gets the remote ID, e.g. `lvfs-testing`.
         * @returns a string, or %NULL if unset
         */
        get_id(): string;
        /**
         * Gets the keyring kind of the remote.
         * @returns a #FwupdKeyringKind, e.g. #FWUPD_KEYRING_KIND_GPG
         */
        get_keyring_kind(): KeyringKind;
        /**
         * Gets the kind of the remote.
         * @returns a #FwupdRemoteKind, e.g. #FWUPD_REMOTE_KIND_LOCAL
         */
        get_kind(): RemoteKind;
        /**
         * Gets the URI for the remote metadata.
         * @returns a URI, or %NULL for invalid.
         */
        get_metadata_uri(): string;
        /**
         * Gets the URI for the remote metadata signature.
         * @returns a URI, or %NULL for invalid.
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
         * @returns a string, or %NULL for unset
         */
        get_password(): string;
        /**
         * Gets the priority of the remote, where bigger numbers are better.
         * @returns a priority, or 0 for the default value
         */
        get_priority(): number;
        /**
         * Sets the plugin refresh interval in seconds.
         * @returns value in seconds
         */
        get_refresh_interval(): number;
        /**
         * Gets the base directory for storing remote metadata
         * @returns a string, or %NULL if unset
         */
        get_remotes_dir(): string;
        /**
         * Gets the URI for the remote reporting.
         * @returns a URI, or %NULL for invalid.
         */
        get_report_uri(): string;
        /**
         * Gets the URI for the security report.
         * @returns a URI, or %NULL for invalid.
         */
        get_security_report_uri(): string;
        /**
         * Gets the remote title, e.g. `Linux Vendor Firmware Service`.
         * @returns a string, or %NULL if unset
         */
        get_title(): string;
        /**
         * Gets the username configured for the remote.
         * @returns a string, or %NULL for unset
         */
        get_username(): string;
        /**
         * Finds if the remote has a specific flag.
         * @param flag the remote flag, e.g. %FWUPD_REMOTE_FLAG_APPROVAL_REQUIRED
         * @returns %TRUE if the flag is set
         */
        has_flag(flag: RemoteFlags): boolean;
        /**
         * Loads metadata about the remote from a keyfile.
         * This can be called zero or multiple times for each remote.
         * @param filename a filename
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        load_from_filename(filename: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Parses the signature, updating the metadata URI as appropriate.
         * @param filename a filename
         * @returns %TRUE for success
         */
        load_signature(filename: string): boolean;
        /**
         * Parses the signature, updating the metadata URI as appropriate.
         *
         * This can only be called for remotes with `Keyring=jcat` which is
         * the default for most remotes.
         * @param bytes data blob
         * @returns %TRUE for success
         */
        load_signature_bytes(bytes: GLib.Bytes | Uint8Array): boolean;
        /**
         * Gets if the metadata remote needs re-downloading.
         * @returns a #TRUE if the remote contents are considered old
         */
        needs_refresh(): boolean;
        /**
         * Removes a specific attribute flag from the remote.
         * @param flag the #FwupdRemoteFlags, e.g. %FWUPD_REMOTE_FLAG_APPROVAL_REQUIRED
         */
        remove_flag(flag: RemoteFlags): void;
        /**
         * Saves metadata about the remote to a keyfile.
         * @param filename a filename
         * @param cancellable optional #GCancellable
         * @returns %TRUE for success
         */
        save_to_filename(filename: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the remote agreement in AppStream markup format
         * @param agreement agreement markup text
         */
        set_agreement(agreement?: string | null): void;
        /**
         * Sets the remote signature checksum, typically only useful in the self tests.
         *
         * NOTE: This should have been called fwupd_remote_set_checksum_sig() but alas, ABI.
         * @param checksum_sig checksum string
         */
        set_checksum(checksum_sig?: string | null): void;
        /**
         * Sets if the remote is enabled and should be used.
         * @param enabled boolean
         */
        set_enabled(enabled: boolean): void;
        /**
         * Sets the remote filename cache filename, typically only useful in the self tests.
         * @param filename filename string
         */
        set_filename_cache(filename?: string | null): void;
        /**
         * Sets the source filename. This is typically a file in `/etc/fwupd/remotes/`.
         * @param filename_source filename
         */
        set_filename_source(filename_source?: string | null): void;
        /**
         * Sets the attribute flags.
         * @param flags remote attribute flags, e.g. %FWUPD_REMOTE_FLAG_APPROVAL_REQUIRED
         */
        set_flags(flags: RemoteFlags): void;
        /**
         * Sets the remote title.
         *
         * NOTE: the ID has to be set before the URL.
         * @param id remote ID, e.g. "lvfs"
         */
        set_id(id?: string | null): void;
        /**
         * Sets the keyring kind
         * @param keyring_kind keyring kind e.g. #FWUPD_KEYRING_KIND_PKCS7
         */
        set_keyring_kind(keyring_kind: KeyringKind): void;
        /**
         * Sets the remote metadata URI.
         *
         * NOTE: This has to be set before the username and password.
         * @param metadata_uri metadata URI
         */
        set_metadata_uri(metadata_uri?: string | null): void;
        /**
         * Sets the plugin modification time.
         * @param mtime a UNIX timestamp
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
        set_remotes_dir(directory?: string | null): void;
        /**
         * Sets the remote title.
         * @param title title text, e.g. "Backup"
         */
        set_title(title?: string | null): void;
        /**
         * Sets up the remote ready for use, checking that required parameters have
         * been set. Calling this method multiple times has no effect.
         * @returns %TRUE for success
         */
        setup(): boolean;
        /**
         * Adds a fwupd remote to a JSON builder
         * @param builder a JSON builder
         */
        to_json(builder: Json.Builder): void;
        /**
         * Serialize the remote data.
         * @returns the serialized data, or %NULL for error
         */
        to_variant(): GLib.Variant;
    }

    module Report {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            flags: number;
        }
    }

    /**
     * A firmware report from a vendor.
     *
     * This is the LVFS formatted report that the fwupd user consumes, NOT the thing that gets uploaded.
     *
     * See also: [class`FwupdRelease]`
     */
    class Report extends GObject.Object {
        static $gtype: GObject.GType<Report>;

        // Properties

        /**
         * The report flags.
         */
        get flags(): number;
        set flags(val: number);

        // Constructors

        constructor(properties?: Partial<Report.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Report;

        // Static methods

        /**
         * Converts a string to an enumerated report flag.
         * @param report_flag a string, e.g. `from-oem`
         */
        static flag_from_string(report_flag?: string | null): ReportFlags;
        /**
         * Converts an enumerated report flag to a string.
         * @param report_flag report flags, e.g. %FWUPD_REPORT_FLAG_FROM_OEM
         */
        static flag_to_string(report_flag: ReportFlags): string;
        /**
         * Creates a new report using serialized data.
         * @param value the serialized data
         */
        static from_variant(value: GLib.Variant): Report;

        // Methods

        /**
         * Adds a specific report flag to the report.
         * @param flag the #FwupdReportFlags
         */
        add_flag(flag: ReportFlags): void;
        /**
         * Sets a report metadata item.
         * @param key the key
         * @param value the value
         */
        add_metadata_item(key: string, value: string): void;
        /**
         * Gets when the report was created.
         * @returns UTC timestamp in UNIX format, or 0 if unset
         */
        get_created(): number;
        /**
         * Gets the name of the device the update was performed on.
         * @returns the name, or %NULL if unset
         */
        get_device_name(): string;
        /**
         * Gets the distribution name.
         * @returns the name, or %NULL if unset
         */
        get_distro_id(): string;
        /**
         * Gets the distribution variant.
         * @returns variant, or %NULL if unset
         */
        get_distro_variant(): string;
        /**
         * Gets the distribution version.
         * @returns a string, or %NULL if unset
         */
        get_distro_version(): string;
        /**
         * Gets the report flags.
         * @returns report flags, or 0 if unset
         */
        get_flags(): number;
        /**
         * Gets the report metadata.
         * @returns the metadata, which may be empty
         */
        get_metadata(): GLib.HashTable<any, any>;
        /**
         * Gets a report metadata item.
         * @param key the key
         * @returns the value, or %NULL if unset
         */
        get_metadata_item(key: string): string;
        /**
         * Gets the remote ID.
         * @returns ID, or %NULL if unset
         */
        get_remote_id(): string;
        /**
         * Gets the vendor that uploaded the test result.
         * @returns the test vendor, or %NULL if unset
         */
        get_vendor(): string;
        /**
         * Gets the vendor identifier. The mapping is only known on the remote server, and this can be
         * useful to filter on different QA teams that work for the same OEM.
         * @returns the vendor ID, or 0 if unset
         */
        get_vendor_id(): number;
        /**
         * Gets the old version, i.e. what the upser was upgrading *from*.
         * @returns the version, or %NULL if unset
         */
        get_version_old(): string;
        /**
         * Finds if the report has a specific report flag.
         * @param flag a report flag
         * @returns %TRUE if the flag is set
         */
        has_flag(flag: ReportFlags): boolean;
        /**
         * Removes a specific report flag from the report.
         * @param flag a report flag
         */
        remove_flag(flag: ReportFlags): void;
        /**
         * Sets when the report was created.
         * @param created UTC timestamp in UNIX format
         */
        set_created(created: number): void;
        /**
         * Sets the name of the device the update was performed on.
         * @param device_name the name, e.g. `LENOVO ThinkPad P1 Gen 3`
         */
        set_device_name(device_name?: string | null): void;
        /**
         * Sets the distribution name.
         * @param distro_id the name, e.g. `fedora`
         */
        set_distro_id(distro_id?: string | null): void;
        /**
         * Sets the distribution variant.
         * @param distro_variant the variant, e.g. `workstation`
         */
        set_distro_variant(distro_variant?: string | null): void;
        /**
         * Sets the distribution version.
         * @param distro_version a string
         */
        set_distro_version(distro_version?: string | null): void;
        /**
         * Sets the report flags.
         * @param flags report flags, e.g. %FWUPD_REPORT_FLAG_FROM_OEM
         */
        set_flags(flags: number): void;
        /**
         * Sets the remote ID.
         * @param remote_id the remote, e.g. `lvfs`
         */
        set_remote_id(remote_id?: string | null): void;
        /**
         * Sets the vendor that uploaded the test result.
         * @param vendor the vendor name
         */
        set_vendor(vendor?: string | null): void;
        /**
         * Sets the vendor identifier. The mapping is only known on the remote server, and this can be
         * useful to filter on different QA teams that work for the same OEM.
         * @param vendor_id the vendor ID, or 0
         */
        set_vendor_id(vendor_id: number): void;
        /**
         * Sets the old version, i.e. what the upser was upgrading *from*.
         * @param version_old the version, e.g. `1.2.3`
         */
        set_version_old(version_old?: string | null): void;
        /**
         * Adds a fwupd report to a JSON builder
         * @param builder a JSON builder
         */
        to_json(builder: Json.Builder): void;
        /**
         * Builds a text representation of the object.
         * @returns text, or %NULL for invalid
         */
        to_string(): string;
        /**
         * Serialize the report data.
         * @returns the serialized data, or %NULL for error
         */
        to_variant(): GLib.Variant;
    }

    module Request {
        // Signal callback interfaces

        interface Invalidate {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            device_id: string;
            deviceId: string;
            flags: number;
            id: string;
            image: string;
            kind: number;
            message: string;
        }
    }

    /**
     * A user request from the device.
     *
     * See also: [class`FwupdDevice]`
     */
    class Request extends GObject.Object {
        static $gtype: GObject.GType<Request>;

        // Properties

        /**
         * The device ID for the request.
         */
        get device_id(): string;
        set device_id(val: string);
        /**
         * The device ID for the request.
         */
        get deviceId(): string;
        set deviceId(val: string);
        /**
         * The flags for the request.
         */
        get flags(): number;
        set flags(val: number);
        /**
         * The request identifier.
         */
        get id(): string;
        set id(val: string);
        /**
         * The image link for the request.
         */
        get image(): string;
        set image(val: string);
        /**
         * The kind of the request.
         */
        get kind(): number;
        set kind(val: number);
        /**
         * The message text in the request.
         */
        get message(): string;
        set message(val: string);

        // Constructors

        constructor(properties?: Partial<Request.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Request;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'invalidate', callback: (_source: this) => void): number;
        connect_after(signal: 'invalidate', callback: (_source: this) => void): number;
        emit(signal: 'invalidate'): void;

        // Static methods

        /**
         * Converts a string to an enumerated request flag.
         * @param flag a string, e.g. `none`
         */
        static flag_from_string(flag?: string | null): RequestFlags;
        /**
         * Converts an enumerated request flag to a string.
         * @param flag a request flag, e.g. %FWUPD_REQUEST_FLAG_NONE
         */
        static flag_to_string(flag: RequestFlags): string;
        /**
         * Creates a new request using serialized data.
         * @param value the serialized data
         */
        static from_variant(value: GLib.Variant): Request;
        /**
         * Converts a string to an enumerated update message kind.
         * @param kind a string, e.g. `immediate`
         */
        static kind_from_string(kind?: string | null): RequestKind;
        /**
         * Converts an enumerated update message kind to a string.
         * @param kind a update message kind, e.g. %FWUPD_REQUEST_KIND_IMMEDIATE
         */
        static kind_to_string(kind: RequestKind): string;

        // Virtual methods

        vfunc_invalidate(): void;

        // Methods

        /**
         * Adds a specific flag to the request.
         * @param flag the #FwupdRequestFlags
         */
        add_flag(flag: RequestFlags): void;
        /**
         * Emits an `invalidate` signal to signify that the request is no longer valid, and any visible
         * UI components should be hidden.
         */
        emit_invalidate(): void;
        /**
         * Gets when the request was created.
         * @returns the UNIX time, or 0 if unset
         */
        get_created(): number;
        /**
         * Gets the device_id that created the request.
         * @returns the device_id, or %NULL if unset
         */
        get_device_id(): string;
        /**
         * Gets the request flags.
         * @returns request flags, or 0 if unset
         */
        get_flags(): RequestFlags;
        /**
         * Gets the ID.
         * @returns the ID, or %NULL if unset
         */
        get_id(): string;
        /**
         * Gets the update image.
         * @returns the update image URL, or %NULL if unset
         */
        get_image(): string;
        /**
         * Returns what the request is currently doing.
         * @returns the kind value, e.g. %FWUPD_STATUS_REQUEST_WRITE
         */
        get_kind(): RequestKind;
        /**
         * Gets the update message, generating a generic one using the request ID if possible.
         * @returns the update message, or %NULL if unset
         */
        get_message(): string;
        /**
         * Finds if the request has a specific flag.
         * @param flag the #FwupdRequestFlags
         * @returns %TRUE if the flag is set
         */
        has_flag(flag: RequestFlags): boolean;
        /**
         * Removes a specific flag from the request.
         * @param flag the #FwupdRequestFlags
         */
        remove_flag(flag: RequestFlags): void;
        /**
         * Sets when the request was created.
         * @param created the UNIX time
         */
        set_created(created: number): void;
        /**
         * Sets the device_id that created the request.
         * @param device_id the device_id, e.g. `colorhug`
         */
        set_device_id(device_id?: string | null): void;
        /**
         * Sets the request flags.
         * @param flags request flags, e.g. %FWUPD_REQUEST_FLAG_NONE
         */
        set_flags(flags: RequestFlags): void;
        /**
         * Sets the ID.
         * @param id the request ID, e.g. `USB:foo`
         */
        set_id(id?: string | null): void;
        /**
         * Sets the update image.
         * @param image the update image URL
         */
        set_image(image?: string | null): void;
        /**
         * Sets what the request is currently doing.
         * @param kind the kind value, e.g. %FWUPD_STATUS_REQUEST_WRITE
         */
        set_kind(kind: RequestKind): void;
        /**
         * Sets the update message.
         * @param message the update message string
         */
        set_message(message?: string | null): void;
        /**
         * Builds a text representation of the object.
         * @returns text, or %NULL for invalid
         */
        to_string(): string;
        /**
         * Serialize the request data.
         * @returns the serialized data, or %NULL for error
         */
        to_variant(): GLib.Variant;
    }

    module SecurityAttr {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A Host Security ID attribute that represents something that was measured.
     */
    class SecurityAttr extends GObject.Object {
        static $gtype: GObject.GType<SecurityAttr>;

        // Constructors

        constructor(properties?: Partial<SecurityAttr.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](appstream_id?: string | null): SecurityAttr;

        // Static methods

        /**
         * Creates an array of new security attributes using serialized data.
         * @param value the serialized data
         */
        static array_from_variant(value: GLib.Variant): SecurityAttr[];
        /**
         * Converts a string to an enumerated flag.
         * @param flag a string, e.g. `success`
         */
        static flag_from_string(flag?: string | null): SecurityAttrFlags;
        /**
         * Returns the printable string for the flag.
         * @param flag security attribute flags, e.g. %FWUPD_SECURITY_ATTR_FLAG_SUCCESS
         */
        static flag_to_string(flag: SecurityAttrFlags): string;
        /**
         * Returns the string suffix for the flag.
         * @param flag security attribute flags, e.g. %FWUPD_SECURITY_ATTR_FLAG_RUNTIME_UPDATES
         */
        static flag_to_suffix(flag: SecurityAttrFlags): string;
        /**
         * Creates a new security attribute using serialized data.
         * @param value the serialized data
         */
        static from_variant(value: GLib.Variant): SecurityAttr;
        /**
         * Converts a string to an enumerated result.
         * @param result a string, e.g. `not-encrypted`
         */
        static result_from_string(result?: string | null): SecurityAttrResult;
        /**
         * Returns the printable string for the result enum.
         * @param result security attribute result, e.g. %FWUPD_SECURITY_ATTR_RESULT_ENABLED
         */
        static result_to_string(result: SecurityAttrResult): string;

        // Methods

        /**
         * Adds a specific attribute flag to the attribute.
         * @param flag the #FwupdSecurityAttrFlags, e.g. %FWUPD_SECURITY_ATTR_FLAG_OBSOLETED
         */
        add_flag(flag: SecurityAttrFlags): void;
        /**
         * Adds a device GUID to the attribute. This indicates the GUID in some way contributed to the
         * result decided.
         * @param guid the GUID
         */
        add_guid(guid: string): void;
        /**
         * Adds device GUIDs to the attribute. This indicates the GUIDs in some way contributed to the
         * result decided.
         * @param guids the GUIDs
         */
        add_guids(guids: string[]): void;
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
         * Makes a full (deep) copy of a security attribute.
         * @returns a new #FwupdSecurityAttr
         */
        copy(): SecurityAttr;
        /**
         * Loads a fwupd security attribute from a JSON node.
         * @param json_node a JSON node
         * @returns %TRUE for success
         */
        from_json(json_node: Json.Node): boolean;
        /**
         * Gets the AppStream ID.
         * @returns the AppStream ID, or %NULL if unset
         */
        get_appstream_id(): string;
        /**
         * Gets the current value of the BIOS setting that can be changed.
         * @returns the current value of the attribute.
         */
        get_bios_setting_current_value(): string;
        /**
         * Gets the #FwupdBiosSetting that can be used to improve this
         * #FwupdSecurityAttr.
         * @returns The unique ID used for #FwupdBiosSetting or NULL
         */
        get_bios_setting_id(): string;
        /**
         * Gets the value that when written to an attribute would activate it or satisfy
         * a security requirement.
         * @returns the target value of the attribute.
         */
        get_bios_setting_target_value(): string;
        /**
         * Gets when the attribute was created.
         * @returns the UNIX time, or 0 if unset
         */
        get_created(): number;
        /**
         * Gets the attribute description which is a few lines of prose that normal users will understand.
         *
         * The fwupd client program may be able to get translations for this value using a method call
         * like `dgettext("fwupd",str)`.
         *
         * NOTE: The returned string may contain placeholders such as `$HostVendor$` or `$HostProduct$`
         * and these should be replaced with the values from [method`FwupdClient`.get_host_vendor] and
         * [method`FwupdClient`.get_host_product].
         * @returns the attribute description, or %NULL if unset
         */
        get_description(): string;
        /**
         * Gets the self flags.
         * @returns security attribute flags, or 0 if unset
         */
        get_flags(): SecurityAttrFlags;
        /**
         * Gets the list of attribute GUIDs. The GUID values will not modify the calculated HSI value.
         * @returns the GUIDs, which may be empty
         */
        get_guids(): string[];
        /**
         * Gets the current value of the BIOS setting that can be changed.
         * @returns the current value of the attribute.
         */
        get_kernel_current_value(): string;
        /**
         * Gets the target value of the kernel setting that can be changed.
         * @returns the current value of the attribute.
         */
        get_kernel_target_value(): string;
        /**
         * Gets the HSI level.
         * @returns the security attribute level, or %FWUPD_SECURITY_ATTR_LEVEL_NONE if unset
         */
        get_level(): SecurityAttrLevel;
        /**
         * Gets private metadata from the attribute which may be used in the name.
         * @param key metadata key
         * @returns the metadata value, or %NULL if unfound
         */
        get_metadata(key: string): string | null;
        /**
         * Gets the attribute name.
         * @returns the attribute name, or %NULL if unset
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
         * @returns the plugin name, or %NULL if unset
         */
        get_plugin(): string;
        /**
         * Gets the optional HSI result.
         * @returns the #FwupdSecurityAttrResult, e.g %FWUPD_SECURITY_ATTR_LEVEL_LOCKED
         */
        get_result(): SecurityAttrResult;
        /**
         * Gets the optional fallback HSI result.
         * @returns the #FwupdSecurityAttrResult, e.g %FWUPD_SECURITY_ATTR_LEVEL_LOCKED
         */
        get_result_fallback(): SecurityAttrResult;
        /**
         * Gets the desired HSI result.
         * @returns the #FwupdSecurityAttrResult, e.g %FWUPD_SECURITY_ATTR_LEVEL_LOCKED
         */
        get_result_success(): SecurityAttrResult;
        /**
         * Gets the attribute title, which is typically a two word title.
         *
         * The fwupd client program may be able to get translations for this value using a method call
         * like `dgettext("fwupd",str)`.
         * @returns the attribute title, or %NULL if unset
         */
        get_title(): string;
        /**
         * Gets the attribute URL.
         * @returns the attribute result, or %NULL if unset
         */
        get_url(): string;
        /**
         * Finds if the attribute has a specific attribute flag.
         * @param flag the attribute flag, e.g. %FWUPD_SECURITY_ATTR_FLAG_OBSOLETED
         * @returns %TRUE if the flag is set
         */
        has_flag(flag: SecurityAttrFlags): boolean;
        /**
         * Finds out if a specific GUID was added to the attribute.
         * @param guid the attribute guid
         * @returns %TRUE if the self matches
         */
        has_guid(guid: string): boolean;
        /**
         * Finds out if the attribute obsoletes a specific appstream_id.
         * @param appstream_id the attribute appstream_id
         * @returns %TRUE if the self matches
         */
        has_obsolete(appstream_id: string): boolean;
        /**
         * Removes a specific attribute flag from the attribute.
         * @param flag the #FwupdSecurityAttrFlags, e.g. %FWUPD_SECURITY_ATTR_FLAG_OBSOLETED
         */
        remove_flag(flag: SecurityAttrFlags): void;
        /**
         * Sets the AppStream ID.
         * @param appstream_id the AppStream component ID, e.g. `com.intel.BiosGuard`
         */
        set_appstream_id(appstream_id?: string | null): void;
        /**
         * Sets the current value of the BIOS setting that can be changed.
         * @param value The string to set current value to
         */
        set_bios_setting_current_value(value?: string | null): void;
        /**
         * Sets the #FwupdBiosSetting that can be used to improve this
         * #FwupdSecurityAttr.
         * @param id Unique identifier used for #FwupdBiosSetting
         */
        set_bios_setting_id(id?: string | null): void;
        /**
         * Sets the string used for the target value of an attribute.
         * @param value The string to set target value to
         */
        set_bios_setting_target_value(value?: string | null): void;
        /**
         * Sets when the attribute was created.
         * @param created the UNIX time
         */
        set_created(created: number): void;
        /**
         * Sets the attribute description.
         * @param description the attribute description
         */
        set_description(description?: string | null): void;
        /**
         * Sets the attribute flags.
         * @param flags security attribute flags, e.g. %FWUPD_SECURITY_ATTR_FLAG_OBSOLETED
         */
        set_flags(flags: SecurityAttrFlags): void;
        /**
         * Sets the current value of the BIOS setting that can be changed.
         * @param value The string to set current value to
         */
        set_kernel_current_value(value?: string | null): void;
        /**
         * Sets the target value of the kernel setting that can be changed.
         * @param value The string to set current value to
         */
        set_kernel_target_value(value?: string | null): void;
        /**
         * Sets the HSI level. A `level` of %FWUPD_SECURITY_ATTR_LEVEL_NONE is not used
         * for the HSI calculation.
         * @param level a security attribute level, e.g. %FWUPD_SECURITY_ATTR_LEVEL_IMPORTANT
         */
        set_level(level: SecurityAttrLevel): void;
        /**
         * Sets the attribute name.
         * @param name the attribute name
         */
        set_name(name?: string | null): void;
        /**
         * Sets the plugin that created the attribute.
         * @param plugin the plugin name
         */
        set_plugin(plugin?: string | null): void;
        /**
         * Sets the optional HSI result. This is required because some attributes may
         * be a "success" when something is `locked` or may be "failed" if `found`.
         * @param result a security attribute result, e.g. %FWUPD_SECURITY_ATTR_LEVEL_LOCKED
         */
        set_result(result: SecurityAttrResult): void;
        /**
         * Sets the optional fallback HSI result. The fallback may represent the old state, or a state
         * that may be considered equivalent.
         * @param result a security attribute, e.g. %FWUPD_SECURITY_ATTR_LEVEL_LOCKED
         */
        set_result_fallback(result: SecurityAttrResult): void;
        /**
         * Sets the desired HSI result.
         * @param result a security attribute, e.g. %FWUPD_SECURITY_ATTR_LEVEL_LOCKED
         */
        set_result_success(result: SecurityAttrResult): void;
        /**
         * Sets the attribute title.
         * @param title the attribute title
         */
        set_title(title?: string | null): void;
        /**
         * Sets the attribute result.
         * @param url the attribute URL
         */
        set_url(url?: string | null): void;
        /**
         * Adds a fwupd security attribute to a JSON builder
         * @param builder a JSON builder
         */
        to_json(builder: Json.Builder): void;
        /**
         * Builds a text representation of the object.
         * @returns text, or %NULL for invalid
         */
        to_string(): string;
        /**
         * Serialize the security attribute.
         * @returns the serialized data, or %NULL for error
         */
        to_variant(): GLib.Variant;
    }

    type BiosSettingClass = typeof BiosSetting;
    type ClientClass = typeof Client;
    type DeviceClass = typeof Device;
    type PluginClass = typeof Plugin;
    type ReleaseClass = typeof Release;
    type RemoteClass = typeof Remote;
    type ReportClass = typeof Report;
    type RequestClass = typeof Request;
    type SecurityAttrClass = typeof SecurityAttr;
    type DeviceFlags = number;
    type DeviceProblem = number;
    type PluginFlags = number;
    type ReleaseFlags = number;
    type ReportFlags = number;
    type RequestFlags = number;
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
