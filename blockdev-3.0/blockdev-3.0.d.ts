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

export namespace BlockDev {
    /**
     * BlockDev-3.0
     */

    /**
     * @gir-type Struct
     */
    class BtrfsError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static TECH_UNAVAIL: number;
        static DEVICE: number;
        static PARSE: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum BtrfsTech {
        FS,
        MULTI_DEV,
        SUBVOL,
        SNAPSHOT,
    }

    /**
     * @gir-type Struct
     */
    class CryptoError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static TECH_UNAVAIL: number;
        static DEVICE: number;
        static STATE: number;
        static INVALID_SPEC: number;
        static FORMAT_FAILED: number;
        static RESIZE_FAILED: number;
        static RESIZE_PERM: number;
        static ADD_KEY: number;
        static REMOVE_KEY: number;
        static NO_KEY: number;
        static KEY_SLOT: number;
        static NSS_INIT_FAILED: number;
        static CERT_DECODE: number;
        static ESCROW_FAILED: number;
        static INVALID_PARAMS: number;
        static KEYRING: number;
        static KEYFILE_FAILED: number;
        static INVALID_CONTEXT: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum CryptoKeyslotContextType {
        NONE,
        PASSPHRASE,
        KEYFILE,
        KEYRING,
        VOLUME_KEY,
    }

    /**
     * @gir-type Enum
     */
    enum CryptoLUKSHWEncryptionType {
        /**
         * used for unknown/unsupported hardware encryption or when
         *                                        error was detected when getting the information
         */
        UNKNOWN,
        /**
         * hardware encryption is not configured on this device
         */
        SW_ONLY,
        /**
         * only OPAL hardware encryption is configured on this device
         */
        OPAL_HW_ONLY,
        /**
         * both OPAL hardware encryption and software encryption
         *                                               (using LUKS/dm-crypt) is configured on this device
         */
        OPAL_HW_AND_SW,
    }

    /**
     * @gir-type Enum
     */
    enum CryptoLUKSVersion {
        LUKS1,
        LUKS2,
    }

    /**
     * @gir-type Enum
     */
    enum CryptoTech {
        LUKS,
        TRUECRYPT,
        ESCROW,
        INTEGRITY,
        BITLK,
        KEYRING,
        FVAULT2,
        SED_OPAL,
    }

    /**
     * @gir-type Struct
     */
    class DMError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static TECH_UNAVAIL: number;
        static SYS: number;
        static NOT_ROOT: number;
        static TASK: number;
        static RAID_FAIL: number;
        static RAID_NO_DEVS: number;
        static RAID_NO_EXIST: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum DMTech {
        DM_TECH_MAP,
    }

    /**
     * @gir-type Struct
     */
    class FSError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static TECH_UNAVAIL: number;
        static INVAL: number;
        static PARSE: number;
        static FAIL: number;
        static NOFS: number;
        static PIPE: number;
        static UNMOUNT_FAIL: number;
        static NOT_SUPPORTED: number;
        static NOT_MOUNTED: number;
        static AUTH: number;
        static LABEL_INVALID: number;
        static UUID_INVALID: number;
        static UNKNOWN_FS: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum FSTech {
        GENERIC,
        MOUNT,
        EXT2,
        EXT3,
        EXT4,
        XFS,
        VFAT,
        NTFS,
        F2FS,
        NILFS2,
        EXFAT,
        BTRFS,
        UDF,
    }

    /**
     * @gir-type Struct
     */
    class InitError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static FAILED: number;
        static PLUGINS_FAILED: number;
        static NOT_IMPLEMENTED: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum LVMCacheMode {
        UNKNOWN,
        WRITETHROUGH,
        WRITEBACK,
    }

    /**
     * @gir-type Struct
     */
    class LVMError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static TECH_UNAVAIL: number;
        static FAIL: number;
        static PARSE: number;
        static NOEXIST: number;
        static DM_ERROR: number;
        static NOT_ROOT: number;
        static CACHE_INVAL: number;
        static CACHE_NOCACHE: number;
        static NOT_SUPPORTED: number;
        static VDO_POLICY_INVAL: number;
        static DEVICES_DISABLED: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum LVMTech {
        BASIC,
        BASIC_SNAP,
        THIN,
        CACHE,
        CALCS,
        THIN_CALCS,
        CACHE_CALCS,
        GLOB_CONF,
        VDO,
        WRITECACHE,
        DEVICES,
        SHARED,
        CONFIG,
        VG_CFG_BACKUP_RESTORE,
    }

    /**
     * @gir-type Enum
     */
    enum LVMVDOCompressionState {
        UNKNOWN,
        ONLINE,
        OFFLINE,
    }

    /**
     * @gir-type Enum
     */
    enum LVMVDOIndexState {
        UNKNOWN,
        ERROR,
        CLOSED,
        OPENING,
        CLOSING,
        OFFLINE,
        ONLINE,
    }

    /**
     * @gir-type Enum
     */
    enum LVMVDOOperatingMode {
        UNKNOWN,
        RECOVERING,
        READ_ONLY,
        NORMAL,
    }

    /**
     * @gir-type Enum
     */
    enum LVMVDOWritePolicy {
        UNKNOWN,
        AUTO,
        SYNC,
        ASYNC,
    }

    /**
     * @gir-type Struct
     */
    class LoopError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static TECH_UNAVAIL: number;
        static FAIL: number;
        static DEVICE: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum LoopTech {
        LOOP_TECH_LOOP,
    }

    /**
     * @gir-type Struct
     */
    class MDError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static TECH_UNAVAIL: number;
        static FAIL: number;
        static PARSE: number;
        static BAD_FORMAT: number;
        static NO_MATCH: number;
        static INVAL: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum MDTech {
        MD_TECH_MDRAID,
    }

    /**
     * @gir-type Struct
     */
    class MpathError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static TECH_UNAVAIL: number;
        static INVAL: number;
        static FLUSH: number;
        static NOT_ROOT: number;
        static DM_ERROR: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum MpathTech {
        BASE,
        FRIENDLY_NAMES,
    }

    /**
     * @gir-type Struct
     */
    class NVDIMMError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static TECH_UNAVAIL: number;
        static NAMESPACE_FAIL: number;
        static NAMESPACE_PARSE: number;
        static NAMESPACE_NOEXIST: number;
        static NAMESPACE_MODE_INVAL: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum NVDIMMNamespaceMode {
        RAW,
        SECTOR,
        MEMORY,
        DAX,
        FSDAX,
        DEVDAX,
        UNKNOWN,
    }

    /**
     * @gir-type Enum
     */
    enum NVDIMMTech {
        NVDIMM_TECH_NAMESPACE,
    }

    /**
     * @gir-type Enum
     */
    enum NVMEControllerType {
        UNKNOWN,
        IO,
        DISCOVERY,
        ADMIN,
    }

    /**
     * @gir-type Struct
     */
    class NVMEError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static TECH_UNAVAIL: number;
        static FAILED: number;
        static BUSY: number;
        static INVALID_ARGUMENT: number;
        static WOULD_FORMAT_ALL_NS: number;
        static SC_GENERIC: number;
        static SC_CMD_SPECIFIC: number;
        static SC_MEDIA: number;
        static SC_PATH: number;
        static SC_VENDOR_SPECIFIC: number;
        static NO_MATCH: number;
        static CONNECT: number;
        static CONNECT_ALREADY: number;
        static CONNECT_INVALID: number;
        static CONNECT_ADDRINUSE: number;
        static CONNECT_NODEV: number;
        static CONNECT_OPNOTSUPP: number;
        static CONNECT_REFUSED: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum NVMEFormatSecureErase {
        NONE,
        USER_DATA,
        CRYPTO,
    }

    /**
     * @gir-type Enum
     */
    enum NVMELBAFormatRelativePerformance {
        UNKNOWN,
        BEST,
        BETTER,
        GOOD,
        DEGRADED,
    }

    /**
     * @gir-type Enum
     */
    enum NVMESanitizeAction {
        EXIT_FAILURE,
        BLOCK_ERASE,
        OVERWRITE,
        CRYPTO_ERASE,
    }

    /**
     * @gir-type Enum
     */
    enum NVMESanitizeStatus {
        NEVER_SANITIZED,
        IN_PROGESS,
        SUCCESS,
        SUCCESS_NO_DEALLOC,
        FAILED,
    }

    /**
     * @gir-type Enum
     */
    enum NVMESelfTestAction {
        NOT_RUNNING,
        SHORT,
        EXTENDED,
        VENDOR_SPECIFIC,
        ABORT,
    }

    /**
     * @gir-type Enum
     */
    enum NVMESelfTestResult {
        NO_ERROR,
        ABORTED,
        CTRL_RESET,
        NS_REMOVED,
        ABORTED_FORMAT,
        FATAL_ERROR,
        UNKNOWN_SEG_FAIL,
        KNOWN_SEG_FAIL,
        ABORTED_UNKNOWN,
        ABORTED_SANITIZE,
    }

    /**
     * @gir-type Enum
     */
    enum NVMETech {
        NVME,
        FABRICS,
    }

    /**
     * @gir-type Enum
     */
    enum NVMETransportType {
        UNSPECIFIED,
        RDMA,
        FC,
        TCP,
        LOOP,
    }

    /**
     * @gir-type Enum
     */
    enum PartAlign {
        NONE,
        MINIMAL,
        OPTIMAL,
    }

    /**
     * @gir-type Struct
     */
    class PartError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static TECH_UNAVAIL: number;
        static FAIL: number;
        static INVAL: number;
        static EXISTS: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum PartTableType {
        MSDOS,
        GPT,
        UNDEF,
    }

    /**
     * @gir-type Enum
     */
    enum PartTech {
        MBR,
        GPT,
    }

    /**
     * @gir-type Enum
     */
    enum PartType {
        NORMAL,
        LOGICAL,
        EXTENDED,
        FREESPACE,
        METADATA,
        PROTECTED,
    }

    /**
     * @gir-type Enum
     */
    enum PartTypeReq {
        NORMAL,
        LOGICAL,
        EXTENDED,
        NEXT,
    }

    /**
     * @gir-type Enum
     */
    enum Plugin {
        LVM,
        BTRFS,
        SWAP,
        LOOP,
        CRYPTO,
        MPATH,
        DM,
        MDRAID,
        S390,
        PART,
        FS,
        NVDIMM,
        NVME,
        SMART,
        UNDEF,
    }

    /**
     * @gir-type Enum
     */
    enum SmartATAAttributeFlag {
        PREFAILURE,
        ONLINE,
        PERFORMANCE,
        ERROR_RATE,
        EVENT_COUNT,
        SELF_PRESERVING,
        OTHER,
    }

    /**
     * @gir-type Enum
     */
    enum SmartATAAttributeUnit {
        UNKNOWN,
        NONE,
        MSECONDS,
        SECTORS,
        MKELVIN,
        SMALL_PERCENT,
        PERCENT,
        MB,
    }

    /**
     * @gir-type Enum
     */
    enum SmartATAOfflineDataCollectionCapabilities {
        NOT_SUPPORTED,
        EXEC_OFFLINE_IMMEDIATE,
        OFFLINE_ABORT,
        OFFLINE_SURFACE_SCAN,
        SELF_TEST,
        CONVEYANCE_SELF_TEST,
        SELECTIVE_SELF_TEST,
    }

    /**
     * @gir-type Enum
     */
    enum SmartATAOfflineDataCollectionStatus {
        NEVER_STARTED,
        NO_ERROR,
        IN_PROGRESS,
        SUSPENDED_INTR,
        ABORTED_INTR,
        ABORTED_ERROR,
        VENDOR_SPECIFIC,
        RESERVED,
    }

    /**
     * @gir-type Enum
     */
    enum SmartATASelfTestStatus {
        COMPLETED_NO_ERROR,
        ABORTED_HOST,
        INTR_HOST_RESET,
        ERROR_FATAL,
        ERROR_UNKNOWN,
        ERROR_ELECTRICAL,
        ERROR_SERVO,
        ERROR_READ,
        ERROR_HANDLING,
        IN_PROGRESS,
    }

    /**
     * @gir-type Struct
     */
    class SmartError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static TECH_UNAVAIL: number;
        static FAILED: number;
        static INVALID_ARGUMENT: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum SmartSCSIBackgroundScanStatus {
        NO_SCANS_ACTIVE,
        SCAN_ACTIVE,
        PRESCAN_ACTIVE,
        HALTED_ERROR_FATAL,
        HALTED_PATTERN_VENDOR_SPECIFIC,
        HALTED_ERROR_PLIST,
        HALTED_VENDOR_SPECIFIC,
        HALTED_TEMPERATURE,
        BMS_TIMER,
    }

    /**
     * @gir-type Enum
     */
    enum SmartSCSIInformationalException {
        NONE,
        ABORTED_COMMAND,
        TEMPERATURE_EXCEEDED,
        ENCLOSURE_DEGRADED,
        BACKGROUND_SELFTEST_FAILED,
        BACKGROUND_PRESCAN_MEDIUM_ERROR,
        BACKGROUND_SCAN_MEDIUM_ERROR,
        NV_CACHE_VOLATILE,
        NV_CACHE_DEGRADED_POWER,
        POWER_LOSS_EXPECTED,
        STATISTICS_NOTIFICATION,
        HIGH_CRITICAL_TEMP,
        LOW_CRITICAL_TEMP,
        HIGH_OPERATING_TEMP,
        LOW_OPERATING_TEMP,
        HIGH_CRITICAL_HUMIDITY,
        LOW_CRITICAL_HUMIDITY,
        HIGH_OPERATING_HUMIDITY,
        LOW_OPERATING_HUMIDITY,
        MICROCODE_SECURITY_RISK,
        MICROCODE_SIGNATURE_VALIDATION_FAILURE,
        PHYSICAL_ELEMENT_STATUS_CHANGE,
        FAILURE_PREDICTION_THRESH,
        MEDIA_FAILURE_PREDICTION_THRESH,
        LOGICAL_UNIT_FAILURE_PREDICTION_THRESH,
        SPARE_EXHAUSTION_PREDICTION_THRESH,
        HARDWARE_IMPENDING_FAILURE,
        CONTROLLER_IMPENDING_FAILURE,
        DATA_CHANNEL_IMPENDING_FAILURE,
        SERVO_IMPENDING_FAILURE,
        SPINDLE_IMPENDING_FAILURE,
        FIRMWARE_IMPENDING_FAILURE,
        MEDIA_ENDURANCE_LIMIT,
        UNSPECIFIED,
    }

    /**
     * @gir-type Enum
     */
    enum SmartSelfTestOp {
        ABORT,
        OFFLINE,
        SHORT,
        LONG,
        CONVEYANCE,
    }

    /**
     * @gir-type Enum
     */
    enum SmartTech {
        ATA,
        SCSI,
    }

    /**
     * @gir-type Struct
     */
    class SwapError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static TECH_UNAVAIL: number;
        static UNKNOWN_STATE: number;
        static ACTIVATE: number;
        static ACTIVATE_OLD: number;
        static ACTIVATE_SUSPEND: number;
        static ACTIVATE_UNKNOWN: number;
        static ACTIVATE_PAGESIZE: number;
        static LABEL_INVALID: number;
        static UUID_INVALID: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum SwapTech {
        SWAP_TECH_SWAP,
    }

    /**
     * @gir-type Struct
     */
    class UtilsDBusError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static FAIL: number;
        static NOEXIST: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Struct
     */
    class UtilsDevUtilsError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static UTILS_DEV_UTILS_ERROR_FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Struct
     */
    class UtilsExecError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static FAILED: number;
        static NOOUT: number;
        static INVAL_VER: number;
        static UTIL_UNAVAILABLE: number;
        static UTIL_UNKNOWN_VER: number;
        static UTIL_LOW_VER: number;
        static UTIL_CHECK_ERROR: number;
        static UTIL_FEATURE_CHECK_ERROR: number;
        static UTIL_FEATURE_UNAVAILABLE: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Struct
     */
    class UtilsModuleError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static KMOD_INIT_FAIL: number;
        static FAIL: number;
        static NOEXIST: number;
        static MODULE_CHECK_ERROR: number;
        static INVALID_PLATFORM: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    enum UtilsProgStatus {
        STARTED,
        PROGRESS,
        FINISHED,
    }

    const BTRFS_MAIN_VOLUME_ID: number;
    const BTRFS_MIN_MEMBER_SIZE: number;
    const MD_CHUNK_SIZE: number;
    const MD_SUPERBLOCK_SIZE: number;
    const UTILS_LOG_ALERT: number;
    const UTILS_LOG_CRIT: number;
    const UTILS_LOG_DEBUG: number;
    const UTILS_LOG_EMERG: number;
    const UTILS_LOG_ERR: number;
    const UTILS_LOG_INFO: number;
    const UTILS_LOG_NOTICE: number;
    const UTILS_LOG_WARNING: number;
    /**
     * @param mountpoint mountpoint of the btrfs volume to add new device to
     * @param device a device to add to the btrfs volume
     * @param extra extra options for the addition (right now                                                 passed to the 'btrfs' utility)
     * @returns whether the `device` was successfully added to the `mountpoint` btrfs volume or not Tech category: {@link BlockDev.BtrfsTech.MULTI_DEV}-{@link BlockDev.BtrfsTechMode.MODIFY}
     */
    function btrfs_add_device(mountpoint: string, device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param mountpoint a mountpoint of the btrfs filesystem to change label of
     * @param label new label for the filesystem
     * @returns whether the label of the `mountpoint` filesystem was successfully set to `label` or not Tech category: {@link BlockDev.BtrfsTech.FS}-{@link BlockDev.BtrfsTechMode.MODIFY}
     */
    function btrfs_change_label(mountpoint: string, label: string): boolean;
    /**
     * @param device a device that is part of the checked btrfs volume
     * @param extra extra options for the check (right now                                                 passed to the 'btrfs' utility)
     * @returns whether the filesystem was successfully checked or not Tech category: {@link BlockDev.BtrfsTech.FS}-{@link BlockDev.BtrfsTechMode.QUERY}
     */
    function btrfs_check(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param source path to source subvolume
     * @param dest path to new snapshot volume
     * @param ro whether the snapshot should be read-only
     * @param extra extra options for the snapshot creation (right now                                                 passed to the 'btrfs' utility)
     * @returns whether the `dest` snapshot of `source` was successfully created or not Tech category: {@link BlockDev.BtrfsTech.SNAPSHOT}-{@link BlockDev.BtrfsTechMode.CREATE}
     */
    function btrfs_create_snapshot(source: string, dest: string, ro: boolean, extra?: ExtraArg[] | null): boolean;
    /**
     * @param mountpoint mountpoint of the btrfs volume to create subvolume under
     * @param name name of the subvolume
     * @param extra extra options for the subvolume creation (right now                                                 passed to the 'btrfs' utility)
     * @returns whether the `mountpoint`/`name` subvolume was successfully created or not Tech category: {@link BlockDev.BtrfsTech.SUBVOL}-{@link BlockDev.BtrfsTechMode.CREATE}
     */
    function btrfs_create_subvolume(mountpoint: string, name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param devices list of devices to create btrfs volume from
     * @param label label for the volume
     * @param data_level RAID level for the data or `null` to use the default
     * @param md_level RAID level for the metadata or `null` to use the default
     * @param extra extra options for the volume creation (right now                                                 passed to the 'mkfs.btrfs' utility)
     * @returns whether the new btrfs volume was created from `devices` or not See mkfs.btrfs(8) for details about `data_level`, `md_level` and btrfs in general. Tech category: {@link BlockDev.BtrfsTech.MULTI_DEV}-{@link BlockDev.BtrfsTechMode.CREATE}
     */
    function btrfs_create_volume(
        devices: string[],
        label?: string | null,
        data_level?: string | null,
        md_level?: string | null,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param mountpoint mountpoint of the btrfs volume to delete subvolume from
     * @param name name of the subvolume
     * @param extra extra options for the subvolume deletion (right now                                                 passed to the 'btrfs' utility)
     * @returns whether the `mountpoint`/`name` subvolume was successfully deleted or not Tech category: {@link BlockDev.BtrfsTech.SUBVOL}-{@link BlockDev.BtrfsTechMode.DELETE}
     */
    function btrfs_delete_subvolume(mountpoint: string, name: string, extra?: ExtraArg[] | null): boolean;
    function btrfs_error_quark(): GLib.Quark;
    /**
     * @param device a device that is part of the queried btrfs volume
     * @returns information about the `device`'s volume's filesystem or `null` in case of error Tech category: {@link BlockDev.BtrfsTech.FS}-{@link BlockDev.BtrfsTechMode.QUERY}
     */
    function btrfs_filesystem_info(device: string): BtrfsFilesystemInfo;
    /**
     * @param mountpoint mountpoint of the volume to get the default subvolume ID of
     * @returns ID of the `mountpoint` volume's default subvolume. If 0,          `error` may be set to indicate error Tech category: {@link BlockDev.BtrfsTech.SUBVOL}-{@link BlockDev.BtrfsTechMode.QUERY}
     */
    function btrfs_get_default_subvolume_id(mountpoint: string): number;
    /**
     * @param tech the queried tech
     * @param mode a bit mask of queried modes of operation ({@link BlockDev.BtrfsTechMode}) for `tech`
     * @returns whether the `tech`-`mode` combination is available -- supported by the          plugin implementation and having all the runtime dependencies available
     */
    function btrfs_is_tech_avail(tech: BtrfsTech | null, mode: number): boolean;
    /**
     * @param device a device that is part of the queried btrfs volume
     * @returns information about the devices that are part of the btrfs volume containing `device` or `null` in case of error Tech category: {@link BlockDev.BtrfsTech.MULTI_DEV}-{@link BlockDev.BtrfsTechMode.QUERY}
     */
    function btrfs_list_devices(device: string): BtrfsDeviceInfo[];
    /**
     * @param mountpoint a mountpoint of the queried btrfs volume
     * @param snapshots_only whether to list only snapshot subvolumes or not
     * @returns information about the subvolumes that are part of the btrfs volume mounted at `mountpoint` or `null` in case of error The subvolumes are sorted in a way that no child subvolume appears in the list before its parent (sub)volume. Tech category: {@link BlockDev.BtrfsTech.SUBVOL}-{@link BlockDev.BtrfsTechMode.QUERY}
     */
    function btrfs_list_subvolumes(mountpoint: string, snapshots_only: boolean): BtrfsSubvolumeInfo[];
    /**
     * @param devices list of devices to create btrfs volume from
     * @param label label for the volume
     * @param data_level RAID level for the data or `null` to use the default
     * @param md_level RAID level for the metadata or `null` to use the default
     * @param extra extra options for the volume creation (right now                                                 passed to the 'btrfs' utility)
     * @returns whether the new btrfs volume was created from `devices` or not See mkfs.btrfs(8) for details about `data_level`, `md_level` and btrfs in general. Tech category: {@link BlockDev.BtrfsTech.FS}-{@link BlockDev.BtrfsTechMode.CREATE}
     */
    function btrfs_mkfs(
        devices: string[],
        label?: string | null,
        data_level?: string | null,
        md_level?: string | null,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param mountpoint mountpoint of the btrfs volume to remove device from
     * @param device a device to remove from the btrfs volume
     * @param extra extra options for the removal (right now                                                 passed to the 'btrfs' utility)
     * @returns whether the `device` was successfully removed from the `mountpoint` btrfs volume or not Tech category: {@link BlockDev.BtrfsTech.MULTI_DEV}-{@link BlockDev.BtrfsTechMode.MODIFY}
     */
    function btrfs_remove_device(mountpoint: string, device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device a device that is part of the to be repaired btrfs volume
     * @param extra extra options for the repair (right now                                                 passed to the 'btrfs' utility)
     * @returns whether the filesystem was successfully checked and repaired or not Tech category: {@link BlockDev.BtrfsTech.FS}-{@link BlockDev.BtrfsTechMode.MODIFY}
     */
    function btrfs_repair(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param mountpoint a mountpoint of the to be resized btrfs filesystem
     * @param size requested new size
     * @param extra extra options for the volume resize (right now                                                 passed to the 'btrfs' utility)
     * @returns whether the `mountpoint` filesystem was successfully resized to `size` or not Tech category: {@link BlockDev.BtrfsTech.FS}-{@link BlockDev.BtrfsTechMode.MODIFY}
     */
    function btrfs_resize(mountpoint: string, size: number, extra?: ExtraArg[] | null): boolean;
    /**
     * @param mountpoint mountpoint of the volume to set the default subvolume ID of
     * @param subvol_id ID of the subvolume to be set as the default subvolume
     * @param extra extra options for the setting (right now                                                 passed to the 'btrfs' utility)
     * @returns whether the `mountpoint` volume's default subvolume was correctly set          to `subvol_id` or not Tech category: {@link BlockDev.BtrfsTech.SUBVOL}-{@link BlockDev.BtrfsTechMode.MODIFY}
     */
    function btrfs_set_default_subvolume(mountpoint: string, subvol_id: number, extra?: ExtraArg[] | null): boolean;
    /**
     * @param bitlk_device BITLK device to close
     * @returns whether the given `bitlk_device` was successfully closed or not Tech category: {@link BlockDev.CryptoTech.BITLK}-{@link BlockDev.CryptoTechMode.OPEN_CLOSE}
     */
    function crypto_bitlk_close(bitlk_device: string): boolean;
    /**
     * Returns (transfer full): information about the `device` or `null` in case of error
     *
     * Tech category: {@link BlockDev.CryptoTech.BITLK}-{@link BlockDev.CryptoTechMode.QUERY}
     * @param device a device to get information about
     */
    function crypto_bitlk_info(device: string): CryptoBITLKInfo;
    /**
     * Supported `context` types for this function: passphrase, key file
     * @param device the device to open
     * @param name name for the BITLK device
     * @param context key slot context (passphrase/keyfile/token...) for this BITLK device
     * @param read_only whether to open as read-only or not (meaning read-write)
     * @returns whether the `device` was successfully opened or not Tech category: {@link BlockDev.CryptoTech.BITLK}-{@link BlockDev.CryptoTechMode.OPEN_CLOSE}
     */
    function crypto_bitlk_open(
        device: string,
        name: string,
        context: CryptoKeyslotContext,
        read_only: boolean,
    ): boolean;
    /**
     * @param device the queried device
     * @returns `true` if the given `device` is a LUKS device or `false` if not or failed to determine (the `error`) is populated with the error in such cases) Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.QUERY}
     */
    function crypto_device_is_luks(device: string): boolean;
    /**
     * Determines whether a block device seems to be encrypted.
     *
     * TCRYPT volumes are not easily identifiable, because they have no
     * cleartext header, but are completely encrypted. This function is
     * used to determine whether a block device is a candidate for being
     * TCRYPT encrypted.
     *
     * To achieve this, we calculate the chi square value of the first
     * 512 Bytes and treat devices with a chi square value between 136
     * and 426 as candidates for being encrypted.
     * For the reasoning, see: https://tails.boum.org/blueprint/veracrypt/
     * @param device the queried device
     * @returns `true` if the given `device` seems to be encrypted or `false` if not or failed to determine (the `error`) is populated with the error in such cases) Tech category: {@link BlockDev.CryptoTech.TRUECRYPT}-{@link BlockDev.CryptoTechMode.QUERY}
     */
    function crypto_device_seems_encrypted(device: string): boolean;
    function crypto_error_quark(): GLib.Quark;
    /**
     * @param device path of the device to create escrow data for
     * @param passphrase passphrase used for the device
     * @param cert_data certificate data to use for escrow
     * @param directory directory to put escrow data into
     * @param backup_passphrase backup passphrase for the device or `null`
     * @returns whether the escrow data was successfully created for `device` or not Tech category: {@link BlockDev.CryptoTech.ESCROW}-{@link BlockDev.CryptoTechMode.CREATE}
     */
    function crypto_escrow_device(
        device: string,
        passphrase: string,
        cert_data: number[],
        directory: string,
        backup_passphrase?: string | null,
    ): boolean;
    /**
     * @param fvault2_device FVAULT2 device to close
     * @returns whether the given `fvault2_device` was successfully closed or not Tech category: {@link BlockDev.CryptoTech.FVAULT2}-{@link BlockDev.CryptoTechMode.OPEN_CLOSE}
     */
    function crypto_fvault2_close(fvault2_device: string): boolean;
    /**
     * Supported `context` types for this function: passphrase, key file
     * @param device the device to open
     * @param name name for the FVAULT2 device
     * @param context key slot context (passphrase/keyfile/token...) for this FVAULT2 volume
     * @param read_only whether to open as read-only or not (meaning read-write)
     * @returns whether the `device` was successfully opened or not Tech category: {@link BlockDev.CryptoTech.FVAULT2}-{@link BlockDev.CryptoTechMode.OPEN_CLOSE}
     */
    function crypto_fvault2_open(
        device: string,
        name: string,
        context: CryptoKeyslotContext,
        read_only: boolean,
    ): boolean;
    /**
     * @returns A newly generated `BD_CRYPTO_BACKUP_PASSPHRASE_LENGTH`-long passphrase. See `BD_CRYPTO_BACKUP_PASSPHRASE_CHARSET` for the definition of the charset used for the passphrase. Tech category: always available
     */
    function crypto_generate_backup_passphrase(): string;
    /**
     * @param integrity_device integrity device to close
     * @returns whether the given `integrity_device` was successfully closed or not Tech category: {@link BlockDev.CryptoTech.INTEGRITY}-{@link BlockDev.CryptoTechMode.OPEN_CLOSE}
     */
    function crypto_integrity_close(integrity_device: string): boolean;
    /**
     * Formats the given `device` as integrity according to the other parameters given.
     *
     * Supported `context` types for this function: volume key
     * @param device a device to format as integrity
     * @param algorithm integrity algorithm specification (e.g. "crc32c" or "sha256")
     * @param wipe whether to wipe the device after format; a device that is not initially wiped will contain invalid checksums
     * @param context key slot context (passphrase/keyfile/token...) for this device
     * @param extra extra arguments for integrity format creation
     * @returns whether the given `device` was successfully formatted as integrity or not (the `error`) contains the error in such cases) Tech category: {@link BlockDev.CryptoTech.INTEGRITY}-{@link BlockDev.CryptoTechMode.CREATE}
     */
    function crypto_integrity_format(
        device: string,
        algorithm: string,
        wipe: boolean,
        context?: CryptoKeyslotContext | null,
        extra?: CryptoIntegrityExtra | null,
    ): boolean;
    /**
     * @param device a device to get information about
     * @returns information about the `device` or `null` in case of error Tech category: {@link BlockDev.CryptoTech.INTEGRITY}-{@link BlockDev.CryptoTechMode.QUERY}
     */
    function crypto_integrity_info(device: string): CryptoIntegrityInfo;
    /**
     * Supported `context` types for this function: volume key
     * @param device integrity device to open
     * @param name name for the opened `device`
     * @param algorithm integrity algorithm specification (e.g. "crc32c" or "sha256")
     * @param context key slot context (passphrase/keyfile/token...) for this device
     * @param flags flags for the integrity device activation
     * @param extra extra arguments for integrity open
     * @returns whether the `device` was successfully opened or not Tech category: {@link BlockDev.CryptoTech.INTEGRITY}-{@link BlockDev.CryptoTechMode.OPEN_CLOSE}
     */
    function crypto_integrity_open(
        device: string,
        name: string,
        algorithm: string,
        context: CryptoKeyslotContext | null,
        flags: CryptoIntegrityOpenFlags | null,
        extra?: CryptoIntegrityExtra | null,
    ): boolean;
    /**
     * @param tech the queried tech
     * @param mode a bit mask of queried modes of operation ({@link BlockDev.CryptoTechMode}) for `tech`
     * @returns whether the `tech`-`mode` combination is available -- supported by the          plugin implementation and having all the runtime dependencies available
     */
    function crypto_is_tech_avail(tech: CryptoTech | null, mode: number): boolean;
    /**
     * @param key_desc kernel keyring key description
     * @param key_data a key to add to kernel keyring (may contain arbitrary binary data)
     * @returns whether the given key was successfully saved to kernel keyring or not Tech category: {@link BlockDev.CryptoTech.KEYRING}-{@link BlockDev.CryptoTechMode.ADD_KEY}
     */
    function crypto_keyring_add_key(key_desc: string, key_data: Uint8Array | string): boolean;
    /**
     * Supported `context` types for this function: passphrase, key file
     * @param device device to add new key to
     * @param context key slot context (passphrase/keyfile/token...) to for this LUKS `device`
     * @param ncontext new key slot context (passphrase/keyfile/token...) to add to this LUKS `device`
     * @returns whether the `ncontext` was successfully added to `device` or not Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.ADD_KEY}
     */
    function crypto_luks_add_key(
        device: string,
        context: CryptoKeyslotContext,
        ncontext: CryptoKeyslotContext,
    ): boolean;
    /**
     * Supported `context` types for this function: passphrase, key file
     * @param device device to change key of
     * @param context key slot context (passphrase/keyfile/token...) for this LUKS `device`
     * @param ncontext new key slot context (passphrase/keyfile/token...) to add to this LUKS `device`
     * @returns whether the key was successfully changed or not Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.ADD_KEY}&{@link BlockDev.CryptoTechMode.REMOVE_KEY}
     */
    function crypto_luks_change_key(
        device: string,
        context: CryptoKeyslotContext,
        ncontext: CryptoKeyslotContext,
    ): boolean;
    /**
     * @param luks_device LUKS device to close
     * @returns whether the given `luks_device` was successfully closed or not Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.OPEN_CLOSE}
     */
    function crypto_luks_close(luks_device: string): boolean;
    /**
     * @param device a LUKS device to convert to a different version of LUKS
     * @param target_version the LUKS version to convert to
     * @returns whether the `device` was converted to `target_version`.          False, if the `device` is already in the `target_version` format. Warning: LUKS header loss is possible. See `bd_crypto_luks_header_backup()` and `bd_crypto_luks_header_restore()` Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.MODIFY}
     */
    function crypto_luks_convert(device: string, target_version: CryptoLUKSVersion | null): boolean;
    /**
     * Formats the given `device` as LUKS according to the other parameters given. If
     * `min_entropy` is specified (greater than 0), the function waits for enough
     * entropy to be available in the random data pool (WHICH MAY POTENTIALLY TAKE
     * FOREVER).
     *
     * Supported `context` types for this function: passphrase, key file
     * @param device a device to format as LUKS
     * @param cipher cipher specification (type-mode, e.g. "aes-xts-plain64") or `null` to use the default
     * @param key_size size of the volume key in bits or 0 to use the default
     * @param context key slot context (passphrase/keyfile/token...) for this LUKS device
     * @param min_entropy minimum random data entropy (in bits) required to format `device` as LUKS
     * @param luks_version whether to use LUKS v1 or LUKS v2
     * @param extra extra arguments for LUKS format creation
     * @returns whether the given `device` was successfully formatted as LUKS or not (the `error`) contains the error in such cases) Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.CREATE}
     */
    function crypto_luks_format(
        device: string,
        cipher: string | null,
        key_size: number,
        context: CryptoKeyslotContext,
        min_entropy: number,
        luks_version: CryptoLUKSVersion | null,
        extra?: CryptoLUKSExtra | null,
    ): boolean;
    /**
     * @param device device to backup the LUKS header
     * @param backup_file file to save the header backup to
     * @returns whether the given backup of `device` was successfully written to          `backup_file` or not Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.BACKUP_RESTORE}
     */
    function crypto_luks_header_backup(device: string, backup_file: string): boolean;
    /**
     * @param device device to restore the LUKS header to
     * @param backup_file existing file with a LUKS header backup
     * @returns whether the given `device` LUKS header was successfully restored          from `backup_file` Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.BACKUP_RESTORE}
     */
    function crypto_luks_header_restore(device: string, backup_file: string): boolean;
    /**
     * @param device a device to get information about
     * @returns information about the `device` or `null` in case of error Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.QUERY}
     */
    function crypto_luks_info(device: string): CryptoLUKSInfo;
    /**
     * Note: This can destroy last remaining keyslot without confirmation making
     *       the LUKS device permanently inaccessible.
     * @param device device to kill slot on
     * @param slot keyslot to destroy
     * @returns whether the given `slot` was successfully destroyed or not Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.REMOVE_KEY}
     */
    function crypto_luks_kill_slot(device: string, slot: number): boolean;
    /**
     * Supported `context` types for this function: passphrase, key file, keyring
     * @param device the device to open
     * @param name name for the LUKS device
     * @param context key slot context (passphrase/keyfile/token...) to open this LUKS `device`
     * @param read_only whether to open as read-only or not (meaning read-write)
     * @returns whether the `device` was successfully opened or not Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.OPEN_CLOSE} Example of using %bd_crypto_luks_open with %BDCryptoKeyslotContext: |[<!-- language="C" --> BDCryptoKeyslotContext *context = NULL; context = bd_crypto_keyslot_context_new_passphrase ("passphrase", 10, NULL); bd_crypto_luks_open ("/dev/vda1", "luks-device", context, FALSE, NULL); ]|
     */
    function crypto_luks_open(device: string, name: string, context: CryptoKeyslotContext, read_only: boolean): boolean;
    /**
     * Supported `context` types for this function: passphrase, key file
     * @param device device to add new key to
     * @param context key slot context (passphrase/keyfile/token...) to remove from this LUKS `device`
     * @returns whether the key was successfully removed or not Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.REMOVE_KEY}
     */
    function crypto_luks_remove_key(device: string, context: CryptoKeyslotContext): boolean;
    /**
     * Supported `context` types for this function: passphrase, key file
     * @param luks_device opened LUKS device to resize
     * @param size requested size in sectors or 0 to adapt to the backing device
     * @param context key slot context (passphrase/keyfile/token...) for this LUKS `device`
     * @returns whether the `luks_device` was successfully resized or not You need to specify either `context` for LUKS 2 devices that don't have verified key loaded in kernel. For LUKS 1 devices you can set `context` `null`. Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.RESIZE}
     */
    function crypto_luks_resize(luks_device: string, size: number, context?: CryptoKeyslotContext | null): boolean;
    /**
     * Supported `context` types for this function: passphrase, key file
     * @param luks_device LUKS device to resume
     * @param context key slot context (passphrase/keyfile/token...) for `luks_device`
     * @returns whether the given `luks_device` was successfully resumed or not Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.SUSPEND_RESUME}
     */
    function crypto_luks_resume(luks_device: string, context?: CryptoKeyslotContext | null): boolean;
    /**
     * @param device device to set label on
     * @param label label to set
     * @param subsystem subsystem to set
     * @returns whether the given `label` and `subsystem` were successfully set or not Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.MODIFY}
     */
    function crypto_luks_set_label(device: string, label?: string | null, subsystem?: string | null): boolean;
    /**
     * Note: This function is valid only for LUKS2.
     * @param device a LUKS device to set the persistent flags on
     * @param flags flags to set
     * @returns whether the given `flags` were successfully set or not Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.MODIFY}
     */
    function crypto_luks_set_persistent_flags(device: string, flags: CryptoLUKSPersistentFlags | null): boolean;
    /**
     * @param device device to set UUID on
     * @param uuid UUID to set or `null` to generate a new one
     * @returns whether the given `uuid` was successfully set or not Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.MODIFY}
     */
    function crypto_luks_set_uuid(device: string, uuid?: string | null): boolean;
    /**
     * @param luks_device the queried LUKS device
     * @returns one of "invalid", "inactive", "active" or "busy" or `null` if failed to determine (`error` is populated with the error in such cases) Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.QUERY}
     */
    function crypto_luks_status(luks_device: string): string;
    /**
     * @param luks_device LUKS device to suspend
     * @returns whether the given `luks_device` was successfully suspended or not Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.SUSPEND_RESUME}
     */
    function crypto_luks_suspend(luks_device: string): boolean;
    /**
     * @param device a device to get LUKS2 token information about
     * @returns information about tokens on `device` Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.QUERY}
     */
    function crypto_luks_token_info(device: string): CryptoLUKSTokenInfo[];
    /**
     * Formats the given `device` as LUKS HW-OPAL according to the other parameters given. If
     * `min_entropy` is specified (greater than 0), the function waits for enough
     * entropy to be available in the random data pool (WHICH MAY POTENTIALLY TAKE
     * FOREVER).
     *
     * Supported `context` types for this function: passphrase, key file
     * Supported `opal_context` types for this function: passphrase
     * @param device a device to format as LUKS HW-OPAL
     * @param cipher cipher specification (type-mode, e.g. "aes-xts-plain64") or `null` to use the default
     * @param key_size size of the volume key in bits or 0 to use the default
     * @param context key slot context (passphrase/keyfile/token...) for this LUKS device
     * @param min_entropy minimum random data entropy (in bits) required to format `device` as LUKS
     * @param hw_encryption type of hardware encryption (SW+HW or HW only)
     * @param opal_context OPAL admin passphrase
     * @param extra extra arguments for LUKS format creation
     * @returns whether the given `device` was successfully formatted as LUKS HW-OPAL or not (the `error` contains the error in such cases) Tech category: {@link BlockDev.CryptoTech.LUKS}-{@link BlockDev.CryptoTechMode.CREATE}
     */
    function crypto_opal_format(
        device: string,
        cipher: string | null,
        key_size: number,
        context: CryptoKeyslotContext,
        min_entropy: number,
        hw_encryption: CryptoLUKSHWEncryptionType | null,
        opal_context: CryptoKeyslotContext,
        extra?: CryptoLUKSExtra | null,
    ): boolean;
    /**
     * @param device device to check for OPAL support
     * @returns `true` if the given `device` supports OPAL or `false` if not or failed to determine (the `error` is populated with the error in such cases). Tech category: {@link BlockDev.CryptoTech.SED_OPAL}-{@link BlockDev.CryptoTechMode.QUERY}
     */
    function crypto_opal_is_supported(device: string): boolean;
    /**
     * @param device LUKS HW-OPAL device to run PSID reset on
     * @param context PSID context
     * @returns whether PSI reset on `device` was successful or not. Warning: PSID reset will remove all data from `device`! Supported `context` types for this function: passphrase, key file Tech category: {@link BlockDev.CryptoTech.SED_OPAL}-{@link BlockDev.CryptoTechMode.MODIFY}
     */
    function crypto_opal_reset_device(device: string, context: CryptoKeyslotContext): boolean;
    /**
     * @param device LUKS HW-OPAL device to wipe
     * @param context OPAL admin passphrase context
     * @returns whether `device` was successfully wiped or not. Supported `context` types for this function: passphrase Tech category: {@link BlockDev.CryptoTech.SED_OPAL}-{@link BlockDev.CryptoTechMode.MODIFY}
     */
    function crypto_opal_wipe_device(device: string, context: CryptoKeyslotContext): boolean;
    /**
     * @param tc_device TrueCrypt/VeraCrypt device to close
     * @returns whether the given `tc_device` was successfully closed or not Tech category: {@link BlockDev.CryptoTech.TRUECRYPT}-{@link BlockDev.CryptoTechMode.OPEN_CLOSE}
     */
    function crypto_tc_close(tc_device: string): boolean;
    /**
     * Supported `context` types for this function: passphrase
     * @param device the device to open
     * @param name name for the TrueCrypt/VeraCrypt device
     * @param context passphrase key slot context for this TrueCrypt/VeraCrypt volume
     * @param keyfiles paths to the keyfiles for the TrueCrypt/VeraCrypt volume
     * @param hidden whether a hidden volume inside the volume should be opened
     * @param system whether to try opening as an encrypted system (with boot loader)
     * @param veracrypt whether to try VeraCrypt modes (TrueCrypt modes are tried anyway)
     * @param veracrypt_pim VeraCrypt PIM value (only used if `veracrypt` is `true`)
     * @param read_only whether to open as read-only or not (meaning read-write)
     * @returns whether the `device` was successfully opened or not Tech category: {@link BlockDev.CryptoTech.TRUECRYPT}-{@link BlockDev.CryptoTechMode.OPEN_CLOSE}
     */
    function crypto_tc_open(
        device: string,
        name: string,
        context: CryptoKeyslotContext | null,
        keyfiles: string[] | null,
        hidden: boolean,
        system: boolean,
        veracrypt: boolean,
        veracrypt_pim: number,
        read_only: boolean,
    ): boolean;
    /**
     * @param map_name name of the map
     * @param device device to create map for
     * @param length length of the mapping in sectors
     * @param uuid UUID for the new dev mapper device or `null` if not specified
     * @returns whether the new linear mapping `map_name` was successfully created for the `device` or not Tech category: {@link BlockDev.DMTech.DM_TECH_MAP}-{@link BlockDev.DMTechMode.CREATE_ACTIVATE}
     */
    function dm_create_linear(map_name: string, device: string, length: number, uuid?: string | null): boolean;
    function dm_error_quark(): GLib.Quark;
    /**
     * @param device_name name of the device
     * @returns subsystem of the given device Tech category: {@link BlockDev.DMTech.DM_TECH_MAP}-{@link BlockDev.DMTechMode.QUERY}
     */
    function dm_get_subsystem_from_name(device_name: string): string;
    /**
     * @param tech the queried tech
     * @param mode a bit mask of queried modes of operation ({@link BlockDev.DMTechMode}) for `tech`
     * @returns whether the `tech`-`mode` combination is available -- supported by the          plugin implementation and having all the runtime dependencies available
     */
    function dm_is_tech_avail(tech: DMTech | null, mode: number): boolean;
    /**
     * @param map_name name of the queried map
     * @param live_only whether to go through the live maps only or not
     * @param active_only whether to ignore suspended maps or not
     * @returns whether the given `map_name` exists (and is live if `live_only` is `true` (and is active if `active_only` is `true`)). Tech category: {@link BlockDev.DMTech.DM_TECH_MAP}-{@link BlockDev.DMTechMode.QUERY}
     */
    function dm_map_exists(map_name: string, live_only: boolean, active_only: boolean): boolean;
    /**
     * @param dm_node name of the DM node (e.g. "dm-0")
     * @returns map name of the map providing the `dm_node` device or `null` (`error`) contains the error in such cases Tech category: {@link BlockDev.DMTech.DM_TECH_MAP}-{@link BlockDev.DMTechMode.QUERY}
     */
    function dm_name_from_node(dm_node: string): string;
    /**
     * @param map_name name of the queried DM map
     * @returns DM node name for the `map_name` map or `null` (`error`) contains the error in such cases Tech category: {@link BlockDev.DMTech.DM_TECH_MAP}-{@link BlockDev.DMTechMode.QUERY}
     */
    function dm_node_from_name(map_name: string): string;
    /**
     * @param map_name name of the map to remove
     * @returns whether the `map_name` map was successfully removed or not Tech category: {@link BlockDev.DMTech.DM_TECH_MAP}-{@link BlockDev.DMTechMode.REMOVE_DEACTIVATE}
     */
    function dm_remove(map_name: string): boolean;
    /**
     * Checks the state of the library and if it is uninitialized or not all the
     * `require_plugins` plugins are available, tries to (re)initialize it. Otherwise
     * just returns early. The difference between:
     *
     *
     * ```c
     * if (!bd_is_initialized())
     *     bd_init(None, None, &error);
     * ```
     *
     *
     * and this function is that this function does the check and init in an atomic
     * way (holding the lock preventing other threads from doing changes in
     * between).
     * @param require_plugins `null`-terminated list                 of plugins that should be loaded (if no so_name is specified                 for the plugin, the default is used) or `null` to load all                 plugins
     * @param log_func logging function to use
     * @returns whether the library was successfully initialized with all the          required or default (see `require_plugins`) plugins or not either          before or by this call
     */
    function ensure_init(require_plugins?: PluginSpec[] | null, log_func?: UtilsLogFunc | null): boolean;
    /**
     * Frees `args` and all its elements.
     * @param args A list of %BDExtraArg to free
     */
    function extra_arg_list_free(args?: ExtraArg[] | null): void;
    /**
     * @param device the device containing the file system to check
     * @param extra extra options for the check (right now                                                 passed to the 'btrfsck' utility)
     * @returns whether the filesystem was successfully checked or not Tech category: {@link BlockDev.FSTech.BTRFS}-{@link BlockDev.FSTechMode.CHECK}
     */
    function fs_btrfs_check(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param label label to check
     * @returns whether `label` is a valid label for the Btrfs file system or not          (reason is provided in `error`) Note: This function is intended to be used for btrfs filesystem on a single device,       for more complicated setups use the btrfs plugin instead. Tech category: always available
     */
    function fs_btrfs_check_label(label: string): boolean;
    /**
     * @param uuid UUID to check
     * @returns whether `uuid` is a valid UUID for the Btrfs file system or not          (reason is provided in `error`) Note: This function is intended to be used for btrfs filesystem on a single device,       for more complicated setups use the btrfs plugin instead. Tech category: always available
     */
    function fs_btrfs_check_uuid(uuid: string): boolean;
    /**
     * @param mpoint a mountpoint of the btrfs filesystem to get information about
     * @returns information about the file system on `device` or                           `null` in case of error Note: This function WON'T WORK for multi device btrfs filesystems,       for more complicated setups use the btrfs plugin instead. Tech category: {@link BlockDev.FSTech.BTRFS}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_btrfs_get_info(mpoint: string): FSBtrfsInfo;
    /**
     * @param device the device to create a new btrfs fs on
     * @param extra extra options for the creation (right now                                                 passed to the 'mkfs.btrfs' utility)
     * @returns whether a new btrfs fs was successfully created on `device` or not Tech category: {@link BlockDev.FSTech.BTRFS}-{@link BlockDev.FSTechMode.MKFS}
     */
    function fs_btrfs_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device containing the file system to repair
     * @param extra extra options for the repair (right now                                                 passed to the 'btrfs' utility)
     * @returns whether the filesystem was successfully checked and repaired or not Tech category: {@link BlockDev.FSTech.BTRFS}-{@link BlockDev.FSTechMode.REPAIR}
     */
    function fs_btrfs_repair(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param mpoint a mountpoint of the to be resized btrfs filesystem
     * @param new_size requested new size
     * @param extra extra options for the volume resize (right now                                                 passed to the 'btrfs' utility)
     * @returns whether the `mpoint` filesystem was successfully resized to `new_size` or not Note: This function WON'T WORK for multi device btrfs filesystems,       for more complicated setups use the btrfs plugin instead. Tech category: {@link BlockDev.BtrfsTech.FS}-{@link BlockDev.BtrfsTechMode.MODIFY}
     */
    function fs_btrfs_resize(mpoint: string, new_size: number, extra?: ExtraArg[] | null): boolean;
    /**
     * @param mpoint the mount point of the file system to set label for
     * @param label label to set
     * @returns whether the label of Btrfs file system on the `mpoint` was          successfully set or not Note: This function is intended to be used for btrfs filesystem on a single device,       for more complicated setups use the btrfs plugin instead. Tech category: {@link BlockDev.FSTech.BTRFS}-{@link BlockDev.FSTechMode.SET_LABEL}
     */
    function fs_btrfs_set_label(mpoint: string, label: string): boolean;
    /**
     * @param device the device containing the file system to set the UUID (serial number) for
     * @param uuid UUID to set or `null` to generate a new one
     * @returns whether the UUID of the Btrfs file system on the `device` was          successfully set or not Note: This function is intended to be used for btrfs filesystem on a single device,       for more complicated setups use the btrfs plugin instead. Tech category: {@link BlockDev.FSTech.BTRFS}-{@link BlockDev.FSTechMode.SET_UUID}
     */
    function fs_btrfs_set_uuid(device: string, uuid?: string | null): boolean;
    /**
     * Searches for the required utility to check the given filesystem and returns whether
     * it is installed.
     * Unknown filesystems or filesystems which do not support checking result in errors.
     * @param type the filesystem type to be tested for installed consistency check support
     * @returns whether filesystem check is available Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_can_check(type: string): [boolean, string];
    /**
     * Searches for the required utility to get free space of the given filesystem and
     * returns whether it is installed.
     * Unknown filesystems or filesystems which do not support free space querying result in errors.
     * @param type the filesystem type to be tested for installed free space querying support
     * @returns whether getting filesystem free space is available Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_can_get_free_space(type: string): [boolean, string];
    /**
     * Searches for the required utility to get info of the given filesystem and
     * returns whether it is installed.
     * Unknown filesystems or filesystems which do not support info querying result in errors.
     * @param type the filesystem type to be tested for info querying support
     * @returns whether getting filesystem info is available Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_can_get_info(type: string): [boolean, string];
    /**
     * Searches for the required utility to get minimum size of the given filesystem and
     * returns whether it is installed.
     * Unknown filesystems or filesystems which do not support minimum size querying result in errors.
     * @param type the filesystem type to be tested for installed minimum size querying support
     * @returns whether getting filesystem size is available Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_can_get_min_size(type: string): [boolean, string];
    /**
     * Searches for the required utility to get size of the given filesystem and
     * returns whether it is installed.
     * Unknown filesystems or filesystems which do not support size querying result in errors.
     * @param type the filesystem type to be tested for installed size querying support
     * @returns whether getting filesystem size is available Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_can_get_size(type: string): [boolean, string];
    /**
     * Searches for the required utility to create the given filesystem and returns whether
     * it is installed. The options flags indicate what additional options can be specified for `type`.
     * Unknown filesystems result in errors.
     * @param type the filesystem type to be tested for installed mkfs support
     * @returns whether filesystem mkfs tool is available Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_can_mkfs(type: string): [boolean, FSMkfsOptionsFlags, string];
    /**
     * Searches for the required utility to repair the given filesystem and returns whether
     * it is installed.
     * Unknown filesystems or filesystems which do not support reparing result in errors.
     * @param type the filesystem type to be tested for installed repair support
     * @returns whether filesystem repair is available Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_can_repair(type: string): [boolean, string];
    /**
     * Searches for the required utility to resize the given filesystem and returns whether
     * it is installed. The mode flags indicate if growing and/or shrinking resize is available if
     * mounted/unmounted.
     * Unknown filesystems or filesystems which do not support resizing result in errors.
     * @param type the filesystem type to be tested for installed resize support
     * @returns whether filesystem resize is available Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_can_resize(type: string): [boolean, FSResizeFlags, string];
    /**
     * Searches for the required utility to set the label of the given filesystem and returns whether
     * it is installed.
     * Unknown filesystems or filesystems which do not support setting the label result in errors.
     * @param type the filesystem type to be tested for installed label support
     * @returns whether setting filesystem label is available Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_can_set_label(type: string): [boolean, string];
    /**
     * Searches for the required utility to set the UUID of the given filesystem and returns whether
     * it is installed.
     * Unknown filesystems or filesystems which do not support setting the UUID result in errors.
     * @param type the filesystem type to be tested for installed UUID support
     * @returns whether setting filesystem UUID is available Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_can_set_uuid(type: string): [boolean, string];
    /**
     * Check filesystem on `device` avoiding any modifications or repairs.
     * This calls other fs check functions from this plugin based on detected
     * filesystem (e.g. bd_fs_xfs_check for XFS). This function will return
     * an error for unknown/unsupported filesystems.
     *
     * Note that depending on a corresponding filesystem type and configured
     * features running this function on a mounted filesystem may result
     * in false errors reported.
     * @param device the device the file system of which to check
     * @param fstype the filesystem type on `device` or `null` to detect
     * @returns whether the file system on `device` passed the consistency check or not Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.CHECK}
     */
    function fs_check(device: string, fstype?: string | null): boolean;
    /**
     * This calls other fs check label functions from this plugin based on the provided
     * filesystem (e.g. bd_fs_xfs_check_label for XFS). This function will return
     * an error for unknown/unsupported filesystems.
     * @param fstype the filesystem type to check `label` for
     * @param label label to check
     * @returns whether `label` is a valid label for the `fstype` file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_check_label(fstype: string, label: string): boolean;
    /**
     * This calls other fs check uuid functions from this plugin based on the provided
     * filesystem (e.g. bd_fs_xfs_check_uuid for XFS). This function will return
     * an error for unknown/unsupported filesystems.
     * @param fstype the filesystem type to check `uuid` for
     * @param uuid uuid to check
     * @returns whether `uuid` is a valid UUID for the `fstype` file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_check_uuid(fstype: string, uuid: string): boolean;
    /**
     * Clean all signatures from `device`.
     * Difference between this and `bd_fs_wipe()` is that this function doesn't
     * return error if `device` is already empty. This will also always remove
     * all signatures from `device`, not only the first one.
     * @param device the device to clean
     * @param force whether to wipe signatures on a mounted `device`
     * @returns whether `device` was successfully cleaned or not Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.WIPE}
     */
    function fs_clean(device: string, force: boolean): boolean;
    function fs_error_quark(): GLib.Quark;
    /**
     * @param device the device containing the file system to check
     * @param extra extra options for the repair (right now                                                 passed to the 'exfatfsck' utility)
     * @returns whether the exfat file system on the `device` is clean or not Tech category: {@link BlockDev.FSTech.EXFAT}-{@link BlockDev.FSTechMode.CHECK}
     */
    function fs_exfat_check(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param label label to check
     * @returns whether `label` is a valid label for the exfat file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_exfat_check_label(label: string): boolean;
    /**
     * @param uuid UUID to check
     * @returns whether `uuid` is a valid UUID for the exFAT file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_exfat_check_uuid(uuid: string): boolean;
    /**
     * @param device the device containing the file system to get info for
     * @returns information about the file system on `device` or                           `null` in case of error Tech category: {@link BlockDev.FSTech.EXFAT}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_exfat_get_info(device: string): FSExfatInfo;
    /**
     * @param device the device to create a new exfat fs on
     * @param extra extra options for the creation (right now                                                 passed to the 'mkexfatfs' utility)
     * @returns whether a new exfat fs was successfully created on `device` or not Tech category: {@link BlockDev.FSTech.EXFAT}-{@link BlockDev.FSTechMode.MKFS}
     */
    function fs_exfat_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device containing the file system to repair
     * @param extra extra options for the repair (right now                                                 passed to the 'exfatfsck' utility)
     * @returns whether the exfat file system on the `device` was successfully repaired          (if needed) or not (error is set in that case) Tech category: {@link BlockDev.FSTech.EXFAT}-{@link BlockDev.FSTechMode.REPAIR}
     */
    function fs_exfat_repair(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device containing the file system to set label for
     * @param label label to set
     * @returns whether the label of exfat file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.EXFAT}-{@link BlockDev.FSTechMode.SET_LABEL}
     */
    function fs_exfat_set_label(device: string, label: string): boolean;
    /**
     * @param device the device containing the file system to set uuid for
     * @param uuid volume ID to set or `null` to generate a new one
     * @returns whether the volume ID of exFAT file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.EXFAT}-{@link BlockDev.FSTechMode.SET_UUID}
     */
    function fs_exfat_set_uuid(device: string, uuid?: string | null): boolean;
    /**
     * @param device the device the file system on which to check
     * @param extra extra options for the check (right now                                                 passed to the 'e2fsck' utility)
     * @returns whether an ext2 file system on the `device` is clean or not Tech category: {@link BlockDev.FSTech.EXT2}-{@link BlockDev.FSTechMode.CHECK}
     */
    function fs_ext2_check(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param label label to check
     * @returns whether `label` is a valid label for the ext2 file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_ext2_check_label(label: string): boolean;
    /**
     * @param uuid UUID to check
     * @returns whether `uuid` is a valid UUID for the ext2 file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_ext2_check_uuid(uuid: string): boolean;
    /**
     * @param device the device the file system of which to get info for
     * @returns information about the file system on `device` or                           `null` in case of error Tech category: {@link BlockDev.FSTech.EXT2}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_ext2_get_info(device: string): FSExt2Info;
    /**
     * @param device the device containing the file system to get min size for
     * @returns smallest shrunken filesystem size as reported by resize2fs          in case of error 0 is returned and `error` is set Tech category: {@link BlockDev.FSTech.EXT2}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_ext2_get_min_size(device: string): number;
    /**
     * @param device the device to create a new ext2 fs on
     * @param extra extra options for the creation (right now                                                 passed to the 'mke2fs' utility)
     * @returns whether a new ext2 fs was successfully created on `device` or not Tech category: {@link BlockDev.FSTech.EXT2}-{@link BlockDev.FSTechMode.MKFS}
     */
    function fs_ext2_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device the file system on which to repair
     * @param unsafe whether to do unsafe operations too
     * @param extra extra options for the repair (right now                                                 passed to the 'e2fsck' utility)
     * @returns whether an ext2 file system on the `device` was successfully repaired          (if needed) or not (error is set in that case) Tech category: {@link BlockDev.FSTech.EXT2}-{@link BlockDev.FSTechMode.REPAIR}
     */
    function fs_ext2_repair(device: string, unsafe: boolean, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device the file system of which to resize
     * @param new_size new requested size for the file system (if 0, the file system is            adapted to the underlying block device)
     * @param extra extra options for the resize (right now                                                 passed to the 'resize2fs' utility)
     * @returns whether the file system on `device` was successfully resized or not Tech category: {@link BlockDev.FSTech.EXT2}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_ext2_resize(device: string, new_size: number, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device the file system on which to set label for
     * @param label label to set
     * @returns whether the label of ext2 file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.EXT2}-{@link BlockDev.FSTechMode.SET_LABEL}
     */
    function fs_ext2_set_label(device: string, label: string): boolean;
    /**
     * @param device the device the file system on which to set UUID for
     * @param uuid UUID to set `null` to generate a new one                      UUID can also be one of "clear", "random" and "time" to clear,                      generate a new random/time-based UUID
     * @returns whether the UUID of ext2 file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.EXT2}-{@link BlockDev.FSTechMode.SET_UUID}
     */
    function fs_ext2_set_uuid(device: string, uuid?: string | null): boolean;
    /**
     * @param device the device the file system on which to check
     * @param extra extra options for the check (right now                                                 passed to the 'e2fsck' utility)
     * @returns whether an ext3 file system on the `device` is clean or not Tech category: {@link BlockDev.FSTech.EXT3}-{@link BlockDev.FSTechMode.CHECK}
     */
    function fs_ext3_check(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param label label to check
     * @returns whether `label` is a valid label for the ext3 file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_ext3_check_label(label: string): boolean;
    /**
     * @param uuid UUID to check
     * @returns whether `uuid` is a valid UUID for the ext3 file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_ext3_check_uuid(uuid: string): boolean;
    /**
     * @param device the device the file system of which to get info for
     * @returns information about the file system on `device` or                           `null` in case of error Tech category: {@link BlockDev.FSTech.EXT3}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_ext3_get_info(device: string): FSExt3Info;
    /**
     * @param device the device containing the file system to get min size for
     * @returns smallest shrunken filesystem size as reported by resize2fs          in case of error 0 is returned and `error` is set Tech category: {@link BlockDev.FSTech.EXT3}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_ext3_get_min_size(device: string): number;
    /**
     * @param device the device to create a new ext3 fs on
     * @param extra extra options for the creation (right now                                                 passed to the 'mke2fs' utility)
     * @returns whether a new ext3 fs was successfully created on `device` or not Tech category: {@link BlockDev.FSTech.EXT3}-{@link BlockDev.FSTechMode.MKFS}
     */
    function fs_ext3_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device the file system on which to repair
     * @param unsafe whether to do unsafe operations too
     * @param extra extra options for the repair (right now                                                 passed to the 'e2fsck' utility)
     * @returns whether an ext3 file system on the `device` was successfully repaired          (if needed) or not (error is set in that case) Tech category: {@link BlockDev.FSTech.EXT3}-{@link BlockDev.FSTechMode.REPAIR}
     */
    function fs_ext3_repair(device: string, unsafe: boolean, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device the file system of which to resize
     * @param new_size new requested size for the file system (if 0, the file system is            adapted to the underlying block device)
     * @param extra extra options for the resize (right now                                                 passed to the 'resize2fs' utility)
     * @returns whether the file system on `device` was successfully resized or not Tech category: {@link BlockDev.FSTech.EXT3}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_ext3_resize(device: string, new_size: number, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device the file system on which to set label for
     * @param label label to set
     * @returns whether the label of ext3 file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.EXT3}-{@link BlockDev.FSTechMode.SET_LABEL}
     */
    function fs_ext3_set_label(device: string, label: string): boolean;
    /**
     * @param device the device the file system on which to set UUID for
     * @param uuid UUID to set `null` to generate a new one                      UUID can also be one of "clear", "random" and "time" to clear,                      generate a new random/time-based UUID
     * @returns whether the UUID of ext3 file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.EXT3}-{@link BlockDev.FSTechMode.SET_UUID}
     */
    function fs_ext3_set_uuid(device: string, uuid?: string | null): boolean;
    /**
     * @param device the device the file system on which to check
     * @param extra extra options for the check (right now                                                 passed to the 'e2fsck' utility)
     * @returns whether an ext4 file system on the `device` is clean or not Tech category: {@link BlockDev.FSTech.EXT4}-{@link BlockDev.FSTechMode.CHECK}
     */
    function fs_ext4_check(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param label label to check
     * @returns whether `label` is a valid label for the ext4 file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_ext4_check_label(label: string): boolean;
    /**
     * @param uuid UUID to check
     * @returns whether `uuid` is a valid UUID for the ext4 file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_ext4_check_uuid(uuid: string): boolean;
    /**
     * @param device the device the file system of which to get info for
     * @returns information about the file system on `device` or                           `null` in case of error Tech category: {@link BlockDev.FSTech.EXT3}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_ext4_get_info(device: string): FSExt4Info;
    /**
     * @param device the device containing the file system to get min size for
     * @returns smallest shrunken filesystem size as reported by resize2fs          in case of error 0 is returned and `error` is set Tech category: {@link BlockDev.FSTech.EXT4}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_ext4_get_min_size(device: string): number;
    /**
     * @param device the device to create a new ext4 fs on
     * @param extra extra options for the creation (right now                                                 passed to the 'mkfs.ext4' utility)
     * @returns whether a new ext4 fs was successfully created on `device` or not Tech category: {@link BlockDev.FSTech.EXT4}-{@link BlockDev.FSTechMode.MKFS}
     */
    function fs_ext4_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device the file system on which to repair
     * @param unsafe whether to do unsafe operations too
     * @param extra extra options for the repair (right now                                                 passed to the 'e2fsck' utility)
     * @returns whether an ext4 file system on the `device` was successfully repaired          (if needed) or not (error is set in that case) Tech category: {@link BlockDev.FSTech.EXT4}-{@link BlockDev.FSTechMode.REPAIR}
     */
    function fs_ext4_repair(device: string, unsafe: boolean, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device the file system of which to resize
     * @param new_size new requested size for the file system (if 0, the file system is            adapted to the underlying block device)
     * @param extra extra options for the resize (right now                                                 passed to the 'resize2fs' utility)
     * @returns whether the file system on `device` was successfully resized or not Tech category: {@link BlockDev.FSTech.EXT4}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_ext4_resize(device: string, new_size: number, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device the file system on which to set label for
     * @param label label to set
     * @returns whether the label of ext4 file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.EXT3}-{@link BlockDev.FSTechMode.SET_LABEL}
     */
    function fs_ext4_set_label(device: string, label: string): boolean;
    /**
     * @param device the device the file system on which to set UUID for
     * @param uuid UUID to set `null` to generate a new one                      UUID can also be one of "clear", "random" and "time" to clear,                      generate a new random/time-based UUID
     * @returns whether the UUID of ext4 file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.EXT4}-{@link BlockDev.FSTechMode.SET_UUID}
     */
    function fs_ext4_set_uuid(device: string, uuid?: string | null): boolean;
    /**
     * @param device the device containing the file system to check
     * @param extra extra options for the repair (right now                                                 passed to the 'fsck.f2fs' utility)
     * @returns whether an f2fs file system on the `device` is clean or not Tech category: {@link BlockDev.FSTech.F2FS}-{@link BlockDev.FSTechMode.CHECK}
     */
    function fs_f2fs_check(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param label label to check
     * @returns whether `label` is a valid label for the f2fs file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_f2fs_check_label(label: string): boolean;
    /**
     * @param device the device containing the file system to get info for
     * @returns information about the file system on `device` or                           `null` in case of error Tech category: {@link BlockDev.FSTech.F2FS}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_f2fs_get_info(device: string): FSF2FSInfo;
    /**
     * @param device the device to create a new f2fs fs on
     * @param extra extra options for the creation (right now                                                 passed to the 'mkfs.f2fs' utility)
     * @returns whether a new f2fs fs was successfully created on `device` or not Tech category: {@link BlockDev.FSTech.F2FS}-{@link BlockDev.FSTechMode.MKFS}
     */
    function fs_f2fs_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device containing the file system to repair
     * @param extra extra options for the repair (right now                                                 passed to the 'fsck.f2fs' utility)
     * @returns whether an f2fs file system on the `device` was successfully repaired          (if needed) or not (error is set in that case) Tech category: {@link BlockDev.FSTech.F2FS}-{@link BlockDev.FSTechMode.REPAIR}
     */
    function fs_f2fs_repair(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device containing the file system to resize
     * @param new_size new requested size for the file system *in file system sectors* (see `bd_fs_f2fs_get_info()`)            (if 0, the file system is adapted to the underlying block device)
     * @param safe whether to perform safe resize or not (does not resize metadata)
     * @param extra extra options for the resize (right now                                                 passed to the 'resize.f2fs' utility)
     * @returns whether the file system on `device` was successfully resized or not Tech category: {@link BlockDev.FSTech.F2FS}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_f2fs_resize(device: string, new_size: number, safe: boolean, extra?: ExtraArg[] | null): boolean;
    /**
     * Returns (transfer-none): features supported by `fstype`, see %BDFSFeatures for more information.
     *
     * Tech category: always available
     * @param fstype name of the filesystem to get features for (e.g. "ext4")
     */
    function fs_features(fstype: string): FSFeatures;
    /**
     * Freezes filesystem mounted on `mountpoint`. The filesystem must
     * support freezing.
     * @param mountpoint mountpoint of the device (filesystem) to freeze
     * @returns whether `mountpoint` was successfully freezed or not
     */
    function fs_freeze(mountpoint: string): boolean;
    /**
     * Get free space for filesystem on `device`. This calls other fs info functions from this
     * plugin based on detected filesystem (e.g. bd_fs_ext4_get_info for ext4). This
     * function will return an error for unknown/unsupported filesystems.
     * @param device the device with file system to get free space for
     * @param fstype the filesystem type on `device` or `null` to detect
     * @returns free space of filesystem on `device`, 0 in case of error. Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_get_free_space(device: string, fstype?: string | null): number;
    /**
     * Get first signature on `device` as a string.
     * @param device the device to probe
     * @returns type of filesystem found on `device`, `null` in case                           no signature has been detected or in case of error                           (`error` is set in this case) Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_get_fstype(device: string): string;
    /**
     * Get minimum size for filesystem on `device`. This calls other fs info functions from this
     * plugin based on detected filesystem (e.g. bd_fs_ext4_get_min_size for ext4). This
     * function will return an error for unknown/unsupported filesystems.
     * @param device the device with file system to get minimum size for
     * @param fstype the filesystem type on `device` or `null` to detect
     * @returns minimum size of filesystem on `device`, 0 in case of error. Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_get_min_size(device: string, fstype?: string | null): number;
    /**
     * Get mountpoint for `device`. If `device` is mounted multiple times only
     * one mountpoint will be returned.
     * @param device device to find mountpoint for
     * @returns mountpoint for `device`, `null` in case device is                           not mounted or in case of an error (`error` is set                           in this case) Tech category: {@link BlockDev.FSTech.MOUNT} (no mode, ignored)
     */
    function fs_get_mountpoint(device: string): string;
    /**
     * Get size for filesystem on `device`. This calls other fs info functions from this
     * plugin based on detected filesystem (e.g. bd_fs_xfs_get_info for XFS). This
     * function will return an error for unknown/unsupported filesystems.
     *
     * Note: This function will mount `device` for filesystems that need to be mounted
     *       to gather information (like btrfs).
     * @param device the device with file system to get size for
     * @param fstype the filesystem type on `device` or `null` to detect
     * @returns size of filesystem on `device`, 0 in case of error. Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_get_size(device: string, fstype?: string | null): number;
    /**
     * @param path path (folder) to check
     * @returns whether `path` is a mountpoint or not Tech category: {@link BlockDev.FSTech.MOUNT} (no mode, ignored)
     */
    function fs_is_mountpoint(path: string): boolean;
    /**
     * @param tech the queried tech
     * @param mode a bit mask of queried modes of operation ({@link BlockDev.FSTechMode}) for `tech`
     * @returns whether the `tech`-`mode` combination is available -- supported by the          plugin implementation and having all the runtime dependencies available
     */
    function fs_is_tech_avail(tech: FSTech | null, mode: number): boolean;
    /**
     * This is a helper function for creating filesystems with extra options.
     * This is the same as running a filesystem-specific function like %bd_fs_ext4_mkfs
     * and manually specifying the extra command line options. %BDFSMkfsOptions
     * removes the need to specify supported options for selected filesystems,
     * make sure to check whether `fstype` supports these options (see %bd_fs_can_mkfs)
     * for details.
     *
     * When specifying additional mkfs options using `extra`, it's caller's
     * responsibility to make sure these options do not conflict with options
     * specified using `options`. Extra options are added after the `options` and
     * there are no additional checks for duplicate and/or conflicting options.
     * @param device the device to create the new filesystem on
     * @param fstype name of the filesystem to create (e.g. "ext4")
     * @param options additional options like label or UUID for the filesystem
     * @param extra extra mkfs options not provided in `options`
     * @returns whether `fstype` was successfully created on `device` or not. Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.MKFS}
     */
    function fs_mkfs(device: string, fstype: string, options: FSMkfsOptions, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device device to mount, if not specified `mountpoint` entry                        from fstab will be used
     * @param mountpoint mountpoint for `device`, if not specified `device`                            entry from fstab will be used
     * @param fstype filesystem type
     * @param options comma delimited options for mount
     * @param extra extra options for the mount;                                               currently only 'run_as_uid'                                               and 'run_as_gid' are supported;                                               value must be a valid non zero                                               uid (gid), if you specify one of                                               these, the function will run in                                               a child process with real user
     * @returns whether `device` (or `mountpoint`) was successfully mounted or not Tech category: {@link BlockDev.FSTech.MOUNT} (no mode, ignored)
     */
    function fs_mount(
        device?: string | null,
        mountpoint?: string | null,
        fstype?: string | null,
        options?: string | null,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param label label to check
     * @returns whether `label` is a valid label for the nilfs2 file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_nilfs2_check_label(label: string): boolean;
    /**
     * @param uuid UUID to check
     * @returns whether `uuid` is a valid UUID for the nilfs file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_nilfs2_check_uuid(uuid: string): boolean;
    /**
     * @param device the device containing the file system to get info for
     * @returns information about the file system on `device` or                           `null` in case of error Tech category: {@link BlockDev.FSTech.NILFS2}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_nilfs2_get_info(device: string): FSNILFS2Info;
    /**
     * @param device the device to create a new nilfs fs on
     * @param extra extra options for the creation (right now                                                 passed to the 'mkfs.nilfs2' utility)
     * @returns whether a new nilfs fs was successfully created on `device` or not Tech category: {@link BlockDev.FSTech.NILFS2}-{@link BlockDev.FSTechMode.MKFS}
     */
    function fs_nilfs2_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device the file system of which to resize
     * @param new_size new requested size for the file system (if 0, the file system is            adapted to the underlying block device)
     * @returns whether the file system on `device` was successfully resized or not Tech category: {@link BlockDev.FSTech.NILFS2}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_nilfs2_resize(device: string, new_size: number): boolean;
    /**
     * @param device the device containing the file system to set label for
     * @param label label to set
     * @returns whether the label of nilfs file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.NILFS2}-{@link BlockDev.FSTechMode.SET_LABEL}
     */
    function fs_nilfs2_set_label(device: string, label: string): boolean;
    /**
     * @param device the device containing the file system to set UUID for
     * @param uuid UUID to set or `null` to generate a new one
     * @returns whether the uuid of nilfs file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.NILFS2}-{@link BlockDev.FSTechMode.SET_UUID}
     */
    function fs_nilfs2_set_uuid(device: string, uuid?: string | null): boolean;
    /**
     * @param device the device containing the file system to check
     * @param extra extra options for the repair (right now                                               passed to the 'ntfsfix' utility)
     * @returns whether an ntfs file system on the `device` is clean or not Tech category: {@link BlockDev.FSTech.NTFS}-{@link BlockDev.FSTechMode.CHECK}
     */
    function fs_ntfs_check(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param label label to check
     * @returns whether `label` is a valid label for the ntfs file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_ntfs_check_label(label: string): boolean;
    /**
     * @param uuid UUID to check
     * @returns whether `uuid` is a valid UUID for the ntfs file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_ntfs_check_uuid(uuid: string): boolean;
    /**
     * @param device the device containing the file system to get info for (device must             not be mounted, trying to get info for a mounted device will result             in an error)
     * @returns information about the file system on `device` or                           `null` in case of error Tech category: {@link BlockDev.FSTech.NTFS}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_ntfs_get_info(device: string): FSNtfsInfo;
    /**
     * @param device the device containing the file system to get min size for
     * @returns smallest shrunken filesystem size as reported by ntfsresize          in case of error 0 is returned and `error` is set Tech category: {@link BlockDev.FSTech.NTFS}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_ntfs_get_min_size(device: string): number;
    /**
     * @param device the device to create a new ntfs fs on
     * @param extra extra options for the creation (right now                                                 passed to the 'mkntfs' utility)
     * @returns whether a new NTFS fs was successfully created on `device` or not Tech category: {@link BlockDev.FSTech.NTFS}-{@link BlockDev.FSTechMode.MKFS}
     */
    function fs_ntfs_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device containing the file system to repair
     * @param extra extra options for the repair (right now                                               passed to the 'ntfsfix' utility)
     * @returns whether an NTFS file system on the `device` was successfully repaired          (if needed) or not (error is set in that case) Tech category: {@link BlockDev.FSTech.NTFS}-{@link BlockDev.FSTechMode.REPAIR}
     */
    function fs_ntfs_repair(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device the file system of which to resize
     * @param new_size new requested size for the file system in bytes (if 0, the file system            is adapted to the underlying block device)
     * @returns whether the file system on `device` was successfully resized or not Tech category: {@link BlockDev.FSTech.NTFS}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_ntfs_resize(device: string, new_size: number): boolean;
    /**
     * @param device the device containing the file system to set the label for
     * @param label label to set
     * @returns whether the label of the NTFS file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.NTFS}-{@link BlockDev.FSTechMode.SET_LABEL}
     */
    function fs_ntfs_set_label(device: string, label: string): boolean;
    /**
     * @param device the device containing the file system to set the UUID (serial number) for
     * @param uuid UUID to set or `null` to generate a new one
     * @returns whether the UUID of the NTFS file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.NTFS}-{@link BlockDev.FSTechMode.SET_UUID}
     */
    function fs_ntfs_set_uuid(device: string, uuid?: string | null): boolean;
    /**
     * Repair filesystem on `device`. This calls other fs repair functions from this
     * plugin based on detected filesystem (e.g. bd_fs_xfs_repair for XFS). This
     * function will return an error for unknown/unsupported filesystems.
     *
     * Most filesystem tools typically require the filesystem not to be mounted.
     * @param device the device the file system of which to repair
     * @param fstype the filesystem type on `device` or `null` to detect
     * @returns whether the file system on `device` was successfully repaired or not Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.REPAIR}
     */
    function fs_repair(device: string, fstype?: string | null): boolean;
    /**
     * Resize filesystem on `device`. This calls other fs resize functions from this
     * plugin based on provides or detected filesystem (e.g. bd_fs_xfs_resize for XFS).
     * This function will return an error for unknown/unsupported filesystems.
     *
     * Note: This function will mount `device` for filesystems that can be resized only
     *       when mounted (like XFS or Btrfs).
     * @param device the device the file system of which to resize
     * @param new_size new requested size for the file system (if 0, the file system is            adapted to the underlying block device)
     * @param fstype the filesystem type on `device` or `null` to detect
     * @returns whether the file system on `device` was successfully resized or not Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_resize(device: string, new_size: number, fstype?: string | null): boolean;
    /**
     * Set label for filesystem on `device`. This calls other fs label functions from this
     * plugin based on detected filesystem (e.g. bd_fs_xfs_set_label for XFS). This
     * function will return an error for unknown/unsupported filesystems.
     *
     * Note: This function will mount `device` for filesystems that need to be mounted
     *       to set label (like btrfs).
     * @param device the device with file system to set the label for
     * @param label label to set
     * @param fstype the filesystem type on `device` or `null` to detect
     * @returns whether the file system on `device` was successfully relabeled or not Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.SET_LABEL}
     */
    function fs_set_label(device: string, label: string, fstype?: string | null): boolean;
    /**
     * Set UUID for filesystem on `device`. This calls other fs UUID functions from this
     * plugin based on detected filesystem (e.g. bd_fs_xfs_set_uuid for XFS). This
     * function will return an error for unknown/unsupported filesystems.
     * @param device the device with file system to set the UUID for
     * @param uuid UUID to set or `null` to generate a new one
     * @param fstype the filesystem type on `device` or `null` to detect
     * @returns whether the UUID on the file system on `device` was successfully changed or not Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.SET_UUID}
     */
    function fs_set_uuid(device: string, uuid?: string | null, fstype?: string | null): boolean;
    /**
     * @returns list of filesystems supported by this plugin Note: This returns filesystems supported by libblockdev, but not necessarily       by the systems this is running on, for this information you need to       run one of the `bd_fs_can_` functions. Tech category: always available
     */
    function fs_supported_filesystems(): string[];
    /**
     * Note: This checks only whether `label` adheres the length limits for Logical Volume Identifier,
     *       not the stricter limits for Volume Identifier.
     * @param label label to check
     * @returns whether `label` is a valid label for the UDF file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_udf_check_label(label: string): boolean;
    /**
     * @param uuid UUID to check
     * @returns whether `uuid` is a valid UUID for the UDF file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_udf_check_uuid(uuid: string): boolean;
    /**
     * @param device the device containing the file system to get info for
     * @returns information about the file system on `device` or                           `null` in case of error Tech category: {@link BlockDev.FSTech.UDF}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_udf_get_info(device: string): FSUdfInfo;
    /**
     * @param device the device to create a new UDF fs on
     * @param media_type specify the media type or `null` for default ('hd')
     * @param revision UDF revision to use or `null` for default ('2.01')
     * @param block_size block size in bytes or 0 for auto detection (device logical block size)
     * @param extra extra options for the creation (right now                                                 passed to the 'mkudffs' utility)
     * @returns whether a new UDF fs was successfully created on `device` or not Tech category: {@link BlockDev.FSTech.UDF}-{@link BlockDev.FSTechMode.MKFS}
     */
    function fs_udf_mkfs(
        device: string,
        media_type: string | null,
        revision: string | null,
        block_size: number,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * Note: This sets both Volume Identifier and Logical Volume Identifier. Volume Identifier
     *       is truncated to 30 or 15 characters to accommodate to the different length limits
     *       of these labels.
     * @param device the device containing the file system to set label for
     * @param label label to set
     * @returns whether the label of UDF file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.UDF}-{@link BlockDev.FSTechMode.SET_LABEL}
     */
    function fs_udf_set_label(device: string, label: string): boolean;
    /**
     * @param device the device containing the file system to set the UUID (serial number) for
     * @param uuid UUID to set or `null` to generate a new one
     * @returns whether the UUID of the UDF file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.UDF}-{@link BlockDev.FSTechMode.SET_UUID}
     */
    function fs_udf_set_uuid(device: string, uuid?: string | null): boolean;
    /**
     * Un-freezes filesystem mounted on `mountpoint`. The filesystem must
     * support freezing.
     * @param mountpoint mountpoint of the device (filesystem) to un-freeze
     * @returns whether `mountpoint` was successfully unfreezed or not
     */
    function fs_unfreeze(mountpoint: string): boolean;
    /**
     * @param spec mount point or device to unmount
     * @param lazy enable/disable lazy unmount
     * @param force enable/disable force unmount
     * @param extra extra options for the unmount;                                               currently only 'run_as_uid'                                               and 'run_as_gid' are supported;                                               value must be a valid non zero                                               uid (gid), if you specify one of                                               these, the function will run in                                               a child process with real user
     * @returns whether `spec` was successfully unmounted or not Tech category: {@link BlockDev.FSTech.MOUNT} (no mode, ignored)
     */
    function fs_unmount(spec: string, lazy: boolean, force: boolean, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device containing the file system to check
     * @param extra extra options for the repair (right now                                                 passed to the 'fsck.vfat' utility)
     * @returns whether an vfat file system on the `device` is clean or not Tech category: {@link BlockDev.FSTech.VFAT}-{@link BlockDev.FSTechMode.CHECK}
     */
    function fs_vfat_check(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param label label to check
     * @returns whether `label` is a valid label for the vfat file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_vfat_check_label(label: string): boolean;
    /**
     * @param uuid UUID to check
     * @returns whether `uuid` is a valid UUID for the vfat file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_vfat_check_uuid(uuid: string): boolean;
    /**
     * @param device the device containing the file system to get info for
     * @returns information about the file system on `device` or                           `null` in case of error Tech category: {@link BlockDev.FSTech.VFAT}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_vfat_get_info(device: string): FSVfatInfo;
    /**
     * Please remember that FAT labels should always be uppercase.
     * @param device the device to create a new vfat fs on
     * @param extra extra options for the creation (right now                                                 passed to the 'mkfs.vfat' utility)
     * @returns whether a new vfat fs was successfully created on `device` or not Tech category: {@link BlockDev.FSTech.VFAT}-{@link BlockDev.FSTechMode.MKFS}
     */
    function fs_vfat_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device containing the file system to repair
     * @param extra extra options for the repair (right now                                                 passed to the 'fsck.vfat' utility)
     * @returns whether an vfat file system on the `device` was successfully repaired          (if needed) or not (error is set in that case) Tech category: {@link BlockDev.FSTech.VFAT}-{@link BlockDev.FSTechMode.REPAIR}
     */
    function fs_vfat_repair(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device the file system of which to resize
     * @param new_size new requested size for the file system (if 0, the file system is            adapted to the underlying block device)
     * @returns whether the file system on `device` was successfully resized or not Tech category: {@link BlockDev.FSTech.VFAT}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_vfat_resize(device: string, new_size: number): boolean;
    /**
     * @param device the device containing the file system to set label for
     * @param label label to set
     * @returns whether the label of vfat file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.VFAT}-{@link BlockDev.FSTechMode.SET_LABEL}
     */
    function fs_vfat_set_label(device: string, label: string): boolean;
    /**
     * @param device the device containing the file system to set uuid for
     * @param uuid volume ID to set or `null` to generate a new one
     * @returns whether the volume ID of vfat file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.VFAT}-{@link BlockDev.FSTechMode.SET_UUID}
     */
    function fs_vfat_set_uuid(device: string, uuid?: string | null): boolean;
    /**
     * @param device the device to wipe signatures from
     * @param all whether to wipe all (`true`) signatures or just the first (`false`) one
     * @param force whether to wipe signatures on a mounted `device`
     * @returns whether signatures were successfully wiped on `device` or not Tech category: {@link BlockDev.FSTech.GENERIC}-{@link BlockDev.FSTechMode.WIPE}
     */
    function fs_wipe(device: string, all: boolean, force: boolean): boolean;
    /**
     * @param device the device containing the file system to check
     * @param extra extra options for the repair (right now                                               passed to the 'xfs_repair' utility)
     * @returns whether an xfs file system on the `device` is clean or not Note: If the file system is mounted RW, it will always be reported as not       clean! Tech category: {@link BlockDev.FSTech.XFS}-{@link BlockDev.FSTechMode.CHECK}
     */
    function fs_xfs_check(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param label label to check
     * @returns whether `label` is a valid label for the xfs file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_xfs_check_label(label: string): boolean;
    /**
     * @param uuid UUID to check
     * @returns whether `uuid` is a valid UUID for the xfs file system or not          (reason is provided in `error`) Tech category: always available
     */
    function fs_xfs_check_uuid(uuid: string): boolean;
    /**
     * @param device the device containing the file system to get info for (device must             be mounted, trying to get info for an unmounted device will result             in an error)
     * @returns information about the file system on `device` or                           `null` in case of error Tech category: {@link BlockDev.FSTech.XFS}-{@link BlockDev.FSTechMode.QUERY}
     */
    function fs_xfs_get_info(device: string): FSXfsInfo;
    /**
     * @param device the device to create a new xfs fs on
     * @param extra extra options for the creation (right now                                                 passed to the 'mkfs.xfs' utility)
     * @returns whether a new xfs fs was successfully created on `device` or not Tech category: {@link BlockDev.FSTech.XFS}-{@link BlockDev.FSTechMode.MKFS}
     */
    function fs_xfs_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device containing the file system to repair
     * @param extra extra options for the repair (right now                                                 passed to the 'xfs_repair' utility)
     * @returns whether an xfs file system on the `device` was successfully repaired          (if needed) or not (error is set in that case) Tech category: {@link BlockDev.FSTech.XFS}-{@link BlockDev.FSTechMode.REPAIR}
     */
    function fs_xfs_repair(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param mpoint the mount point of the file system to resize
     * @param new_size new requested size for the file system *in file system blocks* (see `bd_fs_xfs_get_info()`)            (if 0, the file system is adapted to the underlying block device)
     * @param extra extra options for the resize (right now                                                 passed to the 'xfs_growfs' utility)
     * @returns whether the file system mounted on `mpoint` was successfully resized or not Tech category: {@link BlockDev.FSTech.XFS}-{@link BlockDev.FSTechMode.RESIZE}
     */
    function fs_xfs_resize(mpoint: string, new_size: number, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device containing the file system to set label for
     * @param label label to set
     * @returns whether the label of xfs file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.XFS}-{@link BlockDev.FSTechMode.SET_LABEL}
     */
    function fs_xfs_set_label(device: string, label: string): boolean;
    /**
     * @param device the device containing the file system to set uuid for
     * @param uuid UUID to set `null` to generate a new one                      UUID can also be one of "nil" and "generate" to clear or                      generate a new UUID
     * @returns whether the UUID of xfs file system on the `device` was          successfully set or not Tech category: {@link BlockDev.FSTech.XFS}-{@link BlockDev.FSTechMode.SET_UUID}
     */
    function fs_xfs_set_uuid(device: string, uuid?: string | null): boolean;
    /**
     * @returns an array of string names of plugins that are available
     */
    function get_available_plugin_names(): string[];
    /**
     * @param plugin the queried plugin
     * @returns name of the plugin
     */
    function get_plugin_name(plugin: Plugin | null): string;
    /**
     * @param plugin the queried plugin
     * @returns name of the shared object loaded for the plugin or `null` if none is loaded
     */
    function get_plugin_soname(plugin: Plugin | null): string;
    /**
     * @param require_plugins `null`-terminated list                 of plugins that should be loaded (if no so_name is specified                 for the plugin, the default is used) or `null` to load all                 plugins
     * @param log_func logging function to use
     * @returns whether the library was successfully initialized with all the          required or default (see `require_plugins`) plugins or not Example of libblockdev initialization with 'fs' and 'lvm' plugins. Specific version of the lvm plugin is required: |[<!-- language="C" --> GError *error = NULL; gboolean ret = FALSE; BDPluginSpec fs_plugin = {BD_PLUGIN_FS, NULL}; BDPluginSpec lvm_plugin = {BD_PLUGIN_LVM, "libbd_lvm.so.3"}; BDPluginSpec *plugins[] = {&fs_plugin, &lvm_plugin, NULL}; ret = bd_init (plugins, NULL, &error); ]|
     */
    function init(require_plugins?: PluginSpec[] | null, log_func?: UtilsLogFunc | null): boolean;
    /**
     * @returns whether the library is initialized or not The library is considered initialized if some of the *init*() functions was/were called and either at least one plugin is loaded or 0 plugins are loaded after an explicit call that requested 0 plugins to be loaded.
     */
    function is_initialized(): boolean;
    /**
     * @param plugin the queried plugin
     * @returns whether the given plugin is available or not
     */
    function is_plugin_available(plugin: Plugin | null): boolean;
    function loop_error_quark(): GLib.Quark;
    /**
     * @param file path of the backing file to get loop name for
     * @returns name of the loop device associated with the given `file` Tech category: {@link BlockDev.LoopTech.LOOP_TECH_LOOP}-{@link BlockDev.LoopTechMode.QUERY}
     */
    function loop_get_loop_name(file: string): string;
    /**
     * @param loop name of the loop device to get information about (e.g. "loop0")
     * @returns information about the `loop` device or `null` in case of error Tech category: {@link BlockDev.LoopTech.LOOP_TECH_LOOP}-{@link BlockDev.LoopTechMode.QUERY}
     */
    function loop_info(loop: string): LoopInfo;
    /**
     * @param tech the queried tech
     * @param mode a bit mask of queried modes of operation ({@link BlockDev.LoopTechMode}) for `tech`
     * @returns whether the `tech`-`mode` combination is available -- supported by the          plugin implementation and having all the runtime dependencies available
     */
    function loop_is_tech_avail(tech: LoopTech | null, mode: number): boolean;
    /**
     * @param loop path or name of the loop device
     * @param autoclear whether to set or unset the autoclear flag
     * @returns whether the autoclear flag was successfully set on the `loop` device or not Tech category: {@link BlockDev.LoopTech.LOOP_TECH_LOOP}-{@link BlockDev.LoopTechMode.MODIFY}
     */
    function loop_set_autoclear(loop: string, autoclear: boolean): boolean;
    /**
     * Force the loop driver to reread the size of the file associated with the
     * specified `loop` device.
     * @param loop path or name of the loop device
     * @returns whether the LOOP_SET_CAPACITY ioctl was successfully issued or not. Tech category: {@link BlockDev.LoopTech.LOOP_TECH_LOOP}-{@link BlockDev.LoopTechMode.MODIFY}
     */
    function loop_set_capacity(loop: string): boolean;
    /**
     * @param file file to setup as a loop device
     * @param offset offset of the start of the device (in `file`)
     * @param size maximum size of the device (or 0 to leave unspecified)
     * @param read_only whether to setup as read-only (`true`) or read-write (`false`)
     * @param part_scan whether to enforce partition scan on the newly created device or not
     * @param sector_size logical sector size for the loop device in bytes (or 0 for default)
     * @returns whether the `file` was successfully setup as a loop device or not Tech category: {@link BlockDev.LoopTech.LOOP_TECH_LOOP}-{@link BlockDev.LoopTechMode.CREATE}
     */
    function loop_setup(
        file: string,
        offset: number,
        size: number,
        read_only: boolean,
        part_scan: boolean,
        sector_size: number,
    ): [boolean, string];
    /**
     * @param fd file descriptor for a file to setup as a new loop device
     * @param offset offset of the start of the device (in file given by `fd`)
     * @param size maximum size of the device (or 0 to leave unspecified)
     * @param read_only whether to setup as read-only (`true`) or read-write (`false`)
     * @param part_scan whether to enforce partition scan on the newly created device or not
     * @param sector_size logical sector size for the loop device in bytes (or 0 for default)
     * @returns whether an new loop device was successfully setup for `fd` or not Tech category: {@link BlockDev.LoopTech.LOOP_TECH_LOOP}-{@link BlockDev.LoopTechMode.CREATE}
     */
    function loop_setup_from_fd(
        fd: number,
        offset: number,
        size: number,
        read_only: boolean,
        part_scan: boolean,
        sector_size: number,
    ): [boolean, string];
    /**
     * @param loop path or name of the loop device to tear down
     * @returns whether the `loop` device was successfully torn down or not Tech category: {@link BlockDev.LoopTech.LOOP_TECH_LOOP}-{@link BlockDev.LoopTechMode.DESTROY}
     */
    function loop_teardown(loop: string): boolean;
    /**
     * @param vg_name name of the VG that contains the LV to set tags on
     * @param lv_name name of the LV to set tags on
     * @param tags list of tags to add
     * @returns whether the tags were successfully added to `device` or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_add_lv_tags(vg_name: string, lv_name: string, tags: string[]): boolean;
    /**
     * @param device the device to set PV tags for
     * @param tags list of tags to add
     * @returns whether the tags were successfully added to `device` or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_add_pv_tags(device: string, tags: string[]): boolean;
    /**
     * @param vg_name the VG to set tags on
     * @param tags list of tags to add
     * @returns whether the tags were successfully added to `vg_name` or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_add_vg_tags(vg_name: string, tags: string[]): boolean;
    /**
     * @param vg_name name of the VG containing the `data_lv` and the `cache_pool_lv` LVs
     * @param data_lv data LV to attach the `cache_pool_lv` to
     * @param cache_pool_lv cache pool LV to attach to the `data_lv`
     * @param extra extra options for the cache attachment                                                 (just passed to LVM as is)
     * @returns whether the `cache_pool_lv` was successfully attached to the `data_lv` or not Note: Both `data_lv` and `cache_lv` will be deactivated before the operation. Tech category: {@link BlockDev.LVMTech.CACHE}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_cache_attach(
        vg_name: string,
        data_lv: string,
        cache_pool_lv: string,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param vg_name name of the VG to create a cached LV in
     * @param lv_name name of the cached LV to create
     * @param data_size size of the data LV
     * @param cache_size size of the cache (or cached LV more precisely)
     * @param md_size size of the cache metadata LV or 0 to use the default
     * @param mode cache mode for the cached LV
     * @param flags a combination of (ORed) {@link BlockDev.LVMCachePoolFlags}
     * @param slow_pvs list of slow PVs (used for the data LV)
     * @param fast_pvs list of fast PVs (used for the cache LV)
     * @returns whether the cached LV `lv_name` was successfully created or not Tech category: {@link BlockDev.LVMTech.CACHE}-{@link BlockDev.LVMTechMode.CREATE}
     */
    function lvm_cache_create_cached_lv(
        vg_name: string,
        lv_name: string,
        data_size: number,
        cache_size: number,
        md_size: number,
        mode: LVMCacheMode | null,
        flags: LVMCachePoolFlags | null,
        slow_pvs: string[],
        fast_pvs: string[],
    ): boolean;
    /**
     * @param vg_name name of the VG to create `pool_name` in
     * @param pool_name name of the cache pool LV to create
     * @param pool_size desired size of the cache pool `pool_name`
     * @param md_size desired size of the `pool_name` cache pool's metadata LV or 0 to           use the default
     * @param mode cache mode of the `pool_name` cache pool
     * @param flags a combination of (ORed) {@link BlockDev.LVMCachePoolFlags}
     * @param fast_pvs list of (fast) PVs to create the `pool_name`                                       cache pool (and the metadata LV)
     * @returns whether the cache pool `vg_name`/`pool_name` was successfully created or not Tech category: {@link BlockDev.LVMTech.CACHE}-{@link BlockDev.LVMTechMode.CREATE}
     */
    function lvm_cache_create_pool(
        vg_name: string,
        pool_name: string,
        pool_size: number,
        md_size: number,
        mode: LVMCacheMode | null,
        flags: LVMCachePoolFlags | null,
        fast_pvs: string[],
    ): boolean;
    /**
     * @param vg_name name of the VG containing the `cached_lv`
     * @param cached_lv name of the cached LV to detach its cache from
     * @param destroy whether to destroy the cache after detach or not
     * @param extra extra options for the cache detachment                                                 (just passed to LVM as is)
     * @returns whether the cache was successfully detached from the `cached_lv` or not Note: synces the cache first Tech category: {@link BlockDev.LVMTech.CACHE}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_cache_detach(vg_name: string, cached_lv: string, destroy: boolean, extra?: ExtraArg[] | null): boolean;
    /**
     * @param cache_size size of the cache to determine MD size for
     * @returns recommended default size of the cache metadata LV or 0 in case of error Tech category: {@link BlockDev.LVMTech.CACHE_CALCS} no mode (it is ignored)
     */
    function lvm_cache_get_default_md_size(cache_size: number): number;
    /**
     * @param mode_str string representation of a cache mode
     * @returns cache mode for the `mode_str` or {@link BlockDev.LVMCacheMode.UNKNOWN} if          failed to determine Tech category: always provided/supported
     */
    function lvm_cache_get_mode_from_str(mode_str: string): LVMCacheMode;
    /**
     * @param mode mode to get the string representation for
     * @returns string representation of `mode` or `null` in case of error Tech category: always provided/supported
     */
    function lvm_cache_get_mode_str(mode: LVMCacheMode | null): string;
    /**
     * Converts the `data_lv` and `metadata_lv` into a new cache pool in the `vg_name`
     * VG.
     * @param vg_name name of the VG to create the new thin pool in
     * @param data_lv name of the LV that should become the data part of the new pool
     * @param metadata_lv name of the LV that should become the metadata part of the new pool
     * @param name name for the thin pool (if `null`, the name `data_lv` is inherited)
     * @param extra extra options for the thin pool creation                                                 (just passed to LVM as is)
     * @returns whether the new cache pool was successfully created from `data_lv` and          `metadata_lv` or not Tech category: {@link BlockDev.LVMTech.CACHE}-{@link BlockDev.LVMTechMode.CREATE}
     */
    function lvm_cache_pool_convert(
        vg_name: string,
        data_lv: string,
        metadata_lv: string,
        name?: string | null,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param vg_name name of the VG containing the `cached_lv`
     * @param cached_lv cached LV to get the name of the its pool LV for
     * @returns name of the cache pool LV used by the `cached_lv` or `null` in case of error Tech category: {@link BlockDev.LVMTech.CACHE}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_cache_pool_name(vg_name: string, cached_lv: string): string;
    /**
     * @param vg_name name of the VG containing the `cached_lv`
     * @param cached_lv cached LV to get stats for
     * @returns stats for the `cached_lv` or `null` in case of error Tech category: {@link BlockDev.LVMTech.CACHE}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_cache_stats(vg_name: string, cached_lv: string): LVMCacheStats;
    /**
     * @param section LVM config section, e.g. 'global' or `null` to print the entire config
     * @param setting name of the specific setting, e.g. 'umask' or `null` to print the entire `section`
     * @param type type of the config, e.g. 'full' or 'current'
     * @param values_only whether to include only values without keys in the output
     * @param global_config whether to include our internal global config in the call or not
     * @param extra extra options for the lvmconfig command                                               (just passed to LVM as is)
     * @returns Requested LVM config `section` and `setting` configuration or `null` in case of error. Tech category: {@link BlockDev.LVMTech.CONFIG} no mode (it is ignored)
     */
    function lvm_config_get(
        section: string | null,
        setting: string | null,
        type: string,
        values_only: boolean,
        global_config: boolean,
        extra?: ExtraArg[] | null,
    ): string;
    /**
     * @param vg_name name of the VG that contains the LV to set tags on
     * @param lv_name name of the LV to set tags on
     * @param tags list of tags to remove
     * @returns whether the tags were successfully removed from `device` or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_delete_lv_tags(vg_name: string, lv_name: string, tags: string[]): boolean;
    /**
     * @param device the device to set PV tags for
     * @param tags list of tags to remove
     * @returns whether the tags were successfully removed from `device` or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_delete_pv_tags(device: string, tags: string[]): boolean;
    /**
     * @param vg_name the VG to set tags on
     * @param tags list of tags to remove
     * @returns whether the tags were successfully removed from `vg_name` or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_delete_vg_tags(vg_name: string, tags: string[]): boolean;
    /**
     * @param device device (PV) to add to the devices file
     * @param devices_file LVM devices file or `null` for default
     * @param extra extra options for the lvmdevices command
     * @returns whether the `device` was successfully added to `devices_file` or not Tech category: {@link BlockDev.LVMTech.DEVICES} no mode (it is ignored)
     */
    function lvm_devices_add(device: string, devices_file?: string | null, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device device (PV) to delete from the devices file
     * @param devices_file LVM devices file or `null` for default
     * @param extra extra options for the lvmdevices command
     * @returns whether the `device` was successfully removed from `devices_file` or not Tech category: {@link BlockDev.LVMTech.DEVICES} no mode (it is ignored)
     */
    function lvm_devices_delete(device: string, devices_file?: string | null, extra?: ExtraArg[] | null): boolean;
    function lvm_error_quark(): GLib.Quark;
    /**
     * @returns a copy of a string representation of                                                     the currently set LVM devices filter Tech category: {@link BlockDev.LVMTech.DEVICES} no mode (it is ignored)
     */
    function lvm_get_devices_filter(): string[];
    /**
     * @returns a copy of a string representation of the currently                           set libblockdev LVM global configuration Note: This function does not change the global `lvm.conf` config       file, see %bd_lvm_set_global_config for details. Tech category: {@link BlockDev.LVMTech.GLOB_CONF} no mode (it is ignored)
     */
    function lvm_get_global_config(): string;
    /**
     * @param lv_size LV size
     * @param pe_size PE size
     * @returns space taken on disk(s) by the LV with given `size` Gives number of bytes needed for an LV with the size `lv_size` on an LVM stack using given `pe_size`. Tech category: {@link BlockDev.LVMTech.CALCS} no mode (it is ignored)
     */
    function lvm_get_lv_physical_size(lv_size: number, pe_size: number): number;
    /**
     * @returns maximum LV size in bytes Tech category: {@link BlockDev.LVMTech.CALCS} no mode (it is ignored)
     */
    function lvm_get_max_lv_size(): number;
    /**
     * @returns list of supported PE sizes Tech category: {@link BlockDev.LVMTech.CALCS} no mode (it is ignored)
     */
    function lvm_get_supported_pe_sizes(): number[];
    /**
     * Note: This function will be changed in 3.0: the `n_snapshots` parameter
     *       is currently not used and will be removed.
     * @param size size of the thin pool
     * @param chunk_size chunk size of the thin pool or 0 to use the default
     * @param n_snapshots ignored
     * @returns recommended size of the metadata space for the specified pool Tech category: {@link BlockDev.LVMTech.THIN_CALCS} no mode (it is ignored)
     */
    function lvm_get_thpool_meta_size(size: number, chunk_size: number, n_snapshots: number): number;
    /**
     * @param size size of the thin pool
     * @param pe_size PE size or 0 if the default value should be used
     * @param included if padding is already included in the size
     * @returns size of the padding needed for a thin pool with the given `size`         according to the `pe_size` and `included` Tech category: {@link BlockDev.LVMTech.THIN_CALCS} no mode (it is ignored)
     */
    function lvm_get_thpool_padding(size: number, pe_size: number, included: boolean): number;
    /**
     * @param state state to get the string representation for
     * @returns string representation of `state` or `null` in case of error Tech category: always provided/supported
     */
    function lvm_get_vdo_compression_state_str(state: LVMVDOCompressionState | null): string;
    /**
     * @param state state to get the string representation for
     * @returns string representation of `state` or `null` in case of error Tech category: always provided/supported
     */
    function lvm_get_vdo_index_state_str(state: LVMVDOIndexState | null): string;
    /**
     * @param mode mode to get the string representation for
     * @returns string representation of `mode` or `null` in case of error Tech category: always provided/supported
     */
    function lvm_get_vdo_operating_mode_str(mode: LVMVDOOperatingMode | null): string;
    /**
     * @param policy_str string representation of a policy
     * @returns write policy for the `policy_str` or {@link BlockDev.LVMVDOWritePolicy.UNKNOWN} if          failed to determine Tech category: always provided/supported
     */
    function lvm_get_vdo_write_policy_from_str(policy_str: string): LVMVDOWritePolicy;
    /**
     * @param policy policy to get the string representation for
     * @returns string representation of `policy` or `null` in case of error Tech category: always provided/supported
     */
    function lvm_get_vdo_write_policy_str(policy: LVMVDOWritePolicy | null): string;
    /**
     * @param size size (in bytes) to test
     * @returns whether the given size is supported physical extent size or not Tech category: {@link BlockDev.LVMTech.CALCS} no mode (it is ignored)
     */
    function lvm_is_supported_pe_size(size: number): boolean;
    /**
     * @param tech the queried tech
     * @param mode a bit mask of queried modes of operation ({@link BlockDev.LVMTechMode}) for `tech`
     * @returns whether the `tech`-`mode` combination is available -- supported by the          plugin implementation and having all the runtime dependencies available
     */
    function lvm_is_tech_avail(tech: LVMTech | null, mode: number): boolean;
    /**
     * @param size the size to be tested
     * @param discard whether discard/TRIM is required to be supported or not
     * @returns whether the given size is a valid thin pool chunk size or not Tech category: {@link BlockDev.LVMTech.THIN_CALCS} no mode (it is ignored)
     */
    function lvm_is_valid_thpool_chunk_size(size: number, discard: boolean): boolean;
    /**
     * @param size the size to be tested
     * @returns whether the given size is a valid thin pool metadata size or not Tech category: {@link BlockDev.LVMTech.THIN_CALCS} no mode (it is ignored)
     */
    function lvm_is_valid_thpool_md_size(size: number): boolean;
    /**
     * @param vg_name name of the VG containing the to-be-activated LV
     * @param lv_name name of the to-be-activated LV
     * @param ignore_skip whether to ignore the skip flag or not
     * @param shared whether to activate the LV in shared mode (used for shared LVM setups with lvmlockd,          use `false` if not sure)
     * @param extra extra options for the LV activation                                                 (just passed to LVM as is)
     * @returns whether the `vg_name`/`lv_name` LV was successfully activated or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_lvactivate(
        vg_name: string,
        lv_name: string,
        ignore_skip: boolean,
        shared: boolean,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param vg_name name of the VG to create a new LV in
     * @param lv_name name of the to-be-created LV
     * @param size requested size of the new LV
     * @param type type of the new LV ("striped", "raid1",..., see lvcreate (8))
     * @param pv_list list of PVs the newly created LV should use or `null` if not specified
     * @param extra extra options for the LV creation                                                 (just passed to LVM as is)
     * @returns whether the given `vg_name`/`lv_name` LV was successfully created or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.CREATE}
     */
    function lvm_lvcreate(
        vg_name: string,
        lv_name: string,
        size: number,
        type?: string | null,
        pv_list?: string[] | null,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param vg_name name of the VG containing the to-be-deactivated LV
     * @param lv_name name of the to-be-deactivated LV
     * @param extra extra options for the LV deactivation                                                 (just passed to LVM as is)
     * @returns whether the `vg_name`/`lv_name` LV was successfully deactivated or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_lvdeactivate(vg_name: string, lv_name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the VG that contains the LV to get information about
     * @param lv_name name of the LV to get information about
     * @returns information about the `vg_name`/`lv_name` LV or `null` in case of error (the `error`) gets populated in those cases) Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_lvinfo(vg_name: string, lv_name: string): LVMLVdata;
    /**
     * This function will fill out the data_lvs, metadata_lvs, and segs fields as well.
     * @param vg_name name of the VG that contains the LV to get information about
     * @param lv_name name of the LV to get information about
     * @returns information about the `vg_name`/`lv_name` LV or `null` in case of error (the `error`) gets populated in those cases) Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_lvinfo_tree(vg_name: string, lv_name: string): LVMLVdata;
    /**
     * @param vg_name name of the VG containing the queried LV
     * @param lv_name name of the queried LV
     * @returns the origin volume for the `vg_name`/`lv_name` LV or `null` if failed to determine (`error`) is set in those cases) Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_lvorigin(vg_name: string, lv_name: string): string;
    /**
     * @param vg_name name of the VG containing the to-be-removed LV
     * @param lv_name name of the to-be-removed LV
     * @param force whether to force removal or not
     * @param extra extra options for the LV removal                                                 (just passed to LVM as is)
     * @returns whether the `vg_name`/`lv_name` LV was successfully removed or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.REMOVE}
     */
    function lvm_lvremove(vg_name: string, lv_name: string, force: boolean, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the VG containing the to-be-renamed LV
     * @param lv_name name of the to-be-renamed LV
     * @param new_name new name for the `vg_name`/`lv_name` LV
     * @param extra extra options for the LV rename                                                 (just passed to LVM as is)
     * @returns whether the `vg_name`/`lv_name` LV was successfully renamed to `vg_name`/`new_name` or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_lvrename(vg_name: string, lv_name: string, new_name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the VG containing the to-be-repaired LV
     * @param lv_name name of the to-be-repaired LV
     * @param pv_list list of PVs to be used for the repair
     * @param extra extra options for the LV repair                                                 (just passed to LVM as is)
     * @returns whether the `vg_name`/`lv_name` LV was successfully repaired or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_lvrepair(vg_name: string, lv_name: string, pv_list: string[], extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the VG containing the to-be-resized LV
     * @param lv_name name of the to-be-resized LV
     * @param size the requested new size of the LV
     * @param extra extra options for the LV resize                                                 (just passed to LVM as is)
     * @returns whether the `vg_name`/`lv_name` LV was successfully resized or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_lvresize(vg_name: string, lv_name: string, size: number, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the VG to get information about LVs from
     * @returns information about LVs found in the given `vg_name` VG or in system if `vg_name` is `null` Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_lvs(vg_name?: string | null): LVMLVdata[];
    /**
     * This function will fill out the data_lvs, metadata_lvs, and segs fields as well.
     * @param vg_name name of the VG to get information about LVs from
     * @returns information about LVs found in the given `vg_name` VG or in system if `vg_name` is `null`. Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_lvs_tree(vg_name?: string | null): LVMLVdata[];
    /**
     * @param vg_name name of the VG containing the LV a new snapshot should be created of
     * @param origin_name name of the LV a new snapshot should be created of
     * @param snapshot_name name of the to-be-created snapshot
     * @param size requested size for the snapshot
     * @param extra extra options for the LV snapshot creation                                                 (just passed to LVM as is)
     * @returns whether the `snapshot_name` snapshot of the `vg_name`/`origin_name` LV was successfully created or not. Tech category: {@link BlockDev.LVMTech.BASIC_SNAP}-{@link BlockDev.LVMTechMode.CREATE}
     */
    function lvm_lvsnapshotcreate(
        vg_name: string,
        origin_name: string,
        snapshot_name: string,
        size: number,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param vg_name name of the VG containing the to-be-merged LV snapshot
     * @param snapshot_name name of the to-be-merged LV snapshot
     * @param extra extra options for the LV snapshot merge                                                 (just passed to LVM as is)
     * @returns whether the `vg_name`/`snapshot_name` LV snapshot was successfully merged or not Tech category: {@link BlockDev.LVMTech.BASIC_SNAP}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_lvsnapshotmerge(vg_name: string, snapshot_name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device to make PV from
     * @param data_alignment data (first PE) alignment or 0 to use the default
     * @param metadata_size size of the area reserved for metadata or 0 to use the default
     * @param extra extra options for the PV creation                                                 (just passed to LVM as is)
     * @returns whether the PV was successfully created or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.CREATE}
     */
    function lvm_pvcreate(
        device: string,
        data_alignment: number,
        metadata_size: number,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param device a PV to get information about or `null`
     * @returns information about the PV on the given `device` or `null` in case of error (the `error`) gets populated in those cases) Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_pvinfo(device: string): LVMPVdata;
    /**
     * @param src the PV device to move extents off of
     * @param dest the PV device to move extents onto or `null`
     * @param extra extra options for the PV move                                                 (just passed to LVM as is)
     * @returns whether the extents from the `src` PV where successfully moved or not If `dest` is `null`, VG allocation rules are used for the extents from the `src` PV (see pvmove(8)). Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_pvmove(src: string, dest?: string | null, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the PV device to be removed/destroyed
     * @param extra extra options for the PV removal                                                 (just passed to LVM as is)
     * @returns whether the PV was successfully removed/destroyed or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.REMOVE}
     */
    function lvm_pvremove(device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device the device to resize
     * @param size the new requested size of the PV or 0 if it should be adjusted to device's size
     * @param extra extra options for the PV resize                                                 (just passed to LVM as is)
     * @returns whether the PV's size was successfully changed or not If given `size` different from 0, sets the PV's size to the given value (see pvresize(8)). If given `size` 0, adjusts the PV's size to the underlying block device's size. Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_pvresize(device: string, size: number, extra?: ExtraArg[] | null): boolean;
    /**
     * @returns information about PVs found in the system Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_pvs(): LVMPVdata[];
    /**
     * @param device the device to scan for PVs or `null`
     * @param update_cache whether to update the lvmetad cache or not
     * @param extra extra options for the PV scan                                                 (just passed to LVM as is)
     * @returns whether the system or `device` was successfully scanned for PVs or not The `device` argument is used only if `update_cache` is `true`. Otherwise the whole system is scanned for PVs. Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_pvscan(device: string | null, update_cache: boolean, extra?: ExtraArg[] | null): boolean;
    /**
     * @param size size to be rounded
     * @param pe_size physical extent (PE) size or 0 to use the default
     * @param roundup whether to round up or down (ceil or floor)
     * @returns `size` rounded to `pe_size` according to the `roundup` Rounds given `size` up/down to a multiple of `pe_size` according to the value of the `roundup` parameter. If the rounded value is too big to fit in the return type, the result is rounded down (floored) regardless of the `roundup` parameter. Tech category: {@link BlockDev.LVMTech.CALCS} no mode (it is ignored)
     */
    function lvm_round_size_to_pe(size: number, pe_size: number, roundup: boolean): number;
    /**
     * @param devices list of devices for lvm commands to work on
     * @returns whether the devices filter was successfully set or not Tech category: {@link BlockDev.LVMTech.DEVICES} no mode (it is ignored)
     */
    function lvm_set_devices_filter(devices?: string[] | null): boolean;
    /**
     * Note: This function sets configuration options for LVM calls internally
     *       in libblockdev, it doesn't change the global lvm.conf config file.
     *       Calling this function with `backup {backup=0 archive=0}` for example
     *       means `--config=backup {backup=0 archive=0}"` will be added to all
     *       calls libblockdev makes.
     * @param new_config string representation of the new global libblockdev LVM                          configuration to set or `null` to reset to default
     * @returns whether the new requested global config `new_config` was successfully          set or not Tech category: {@link BlockDev.LVMTech.GLOB_CONF} no mode (it is ignored)
     */
    function lvm_set_global_config(new_config?: string | null): boolean;
    /**
     * @param vg_name name of the VG containing the thin pool providing extents for the to-be-created thin LV
     * @param pool_name name of the pool LV providing extents for the to-be-created thin LV
     * @param lv_name name of the to-be-created thin LV
     * @param size requested virtual size of the to-be-created thin LV
     * @param extra extra options for the thin LV creation                                                 (just passed to LVM as is)
     * @returns whether the `vg_name`/`lv_name` thin LV was successfully created or not Tech category: {@link BlockDev.LVMTech.THIN}-{@link BlockDev.LVMTechMode.CREATE}
     */
    function lvm_thlvcreate(
        vg_name: string,
        pool_name: string,
        lv_name: string,
        size: number,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param vg_name name of the VG containing the queried thin LV
     * @param lv_name name of the queried thin LV
     * @returns the name of the pool volume for the `vg_name`/`lv_name` thin LV or `null` if failed to determine (`error`) is set in those cases) Tech category: {@link BlockDev.LVMTech.THIN}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_thlvpoolname(vg_name: string, lv_name: string): string;
    /**
     * Converts the `data_lv` and `metadata_lv` into a new thin pool in the `vg_name`
     * VG.
     * @param vg_name name of the VG to create the new thin pool in
     * @param data_lv name of the LV that should become the data part of the new pool
     * @param metadata_lv name of the LV that should become the metadata part of the new pool
     * @param name name for the thin pool (if `null`, the name `data_lv` is inherited)
     * @param extra extra options for the thin pool creation                                                 (just passed to LVM as is)
     * @returns whether the new thin pool was successfully created from `data_lv` and          `metadata_lv` or not Tech category: {@link BlockDev.LVMTech.THIN}-{@link BlockDev.LVMTechMode.CREATE}
     */
    function lvm_thpool_convert(
        vg_name: string,
        data_lv: string,
        metadata_lv: string,
        name?: string | null,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param vg_name name of the VG to create a thin pool in
     * @param lv_name name of the to-be-created pool LV
     * @param size requested size of the to-be-created pool
     * @param md_size requested metadata size or 0 to use the default
     * @param chunk_size requested chunk size or 0 to use the default
     * @param profile profile to use (see lvm(8) for more information) or `null` to use                         the default
     * @param extra extra options for the thin pool creation                                                 (just passed to LVM as is)
     * @returns whether the `vg_name`/`lv_name` thin pool was successfully created or not Tech category: {@link BlockDev.LVMTech.THIN}-{@link BlockDev.LVMTechMode.CREATE}
     */
    function lvm_thpoolcreate(
        vg_name: string,
        lv_name: string,
        size: number,
        md_size: number,
        chunk_size: number,
        profile?: string | null,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param vg_name name of the VG containing the thin LV a new snapshot should be created of
     * @param origin_name name of the thin LV a new snapshot should be created of
     * @param snapshot_name name of the to-be-created snapshot
     * @param pool_name name of the thin pool to create the snapshot in or `null` if not specified
     * @param extra extra options for the thin LV snapshot creation                                                 (just passed to LVM as is)
     * @returns whether the `snapshot_name` snapshot of the `vg_name`/`origin_name` thin LV was successfully created or not. Tech category: {@link BlockDev.LVMTech.THIN}-{@link BlockDev.LVMTechMode.CREATE}
     */
    function lvm_thsnapshotcreate(
        vg_name: string,
        origin_name: string,
        snapshot_name: string,
        pool_name?: string | null,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param vg_name name of the VG containing the to-be-changed VDO pool LV
     * @param pool_name name of the VDO pool LV to disable compression on
     * @param extra extra options for the VDO change                                                 (just passed to LVM as is)
     * @returns whether compression was successfully disabled on `vg_name`/`pool_name` LV or not Tech category: {@link BlockDev.LVMTech.VDO}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vdo_disable_compression(vg_name: string, pool_name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the VG containing the to-be-changed VDO pool LV
     * @param pool_name name of the VDO pool LV to disable deduplication on
     * @param extra extra options for the VDO change                                                 (just passed to LVM as is)
     * @returns whether deduplication was successfully disabled on `vg_name`/`pool_name` LV or not Tech category: {@link BlockDev.LVMTech.VDO}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vdo_disable_deduplication(vg_name: string, pool_name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the VG containing the to-be-changed VDO pool LV
     * @param pool_name name of the VDO pool LV to enable compression on
     * @param extra extra options for the VDO change                                                 (just passed to LVM as is)
     * @returns whether compression was successfully enabled on `vg_name`/`pool_name` LV or not Tech category: {@link BlockDev.LVMTech.VDO}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vdo_enable_compression(vg_name: string, pool_name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the VG containing the to-be-changed VDO pool LV
     * @param pool_name name of the VDO pool LV to enable deduplication on
     * @param extra extra options for the VDO change                                                 (just passed to LVM as is)
     * @returns whether deduplication was successfully enabled on `vg_name`/`pool_name` LV or not Tech category: {@link BlockDev.LVMTech.VDO}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vdo_enable_deduplication(vg_name: string, pool_name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the VG that contains `pool_name` VDO pool
     * @param pool_name name of the VDO pool to get statistics for
     * @returns a structure containing selected statistics or `null` in case of error                           (`error` gets populated in those cases) In contrast to `bd_lvm_vdo_get_stats_full` this function will only return selected statistics in a fixed structure. In case a value is not available, -1 would be returned. Tech category: {@link BlockDev.LVMTech.VDO}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_vdo_get_stats(vg_name: string, pool_name: string): LVMVDOStats;
    /**
     * @param vg_name name of the VG that contains `pool_name` VDO pool
     * @param pool_name name of the VDO pool to get statistics for
     * @returns hashtable of type string - string of available                                                    statistics or `null` in case of error                                                    (`error` gets populated in those cases) Statistics are collected from the values exposed by the kernel `dm-vdo` module. Some of the keys are computed to mimic the information produced by the vdo tools. Please note the contents of the hashtable may vary depending on the actual dm-vdo module version. Tech category: {@link BlockDev.LVMTech.VDO}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_vdo_get_stats_full(vg_name: string, pool_name: string): GLib.HashTable<string, string>;
    /**
     * @param vg_name name of the VG that contains the LV to get information about
     * @param lv_name name of the LV to get information about
     * @returns information about the `vg_name`/`lv_name` LV or `null` in case of error (the `error`) gets populated in those cases) Tech category: {@link BlockDev.LVMTech.VDO}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_vdo_info(vg_name: string, lv_name: string): LVMVDOPooldata;
    /**
     * Converts the `pool_lv` into a new VDO pool LV in the `vg_name` VG and creates a new
     * `name` VDO LV with size `virtual_size`.
     *
     * Note: All data on `pool_lv` will be irreversibly destroyed.
     * @param vg_name name of the VG that contains `pool_lv`
     * @param pool_lv name of the LV that should become the new VDO pool LV
     * @param name name for the VDO LV or `null` for default name
     * @param virtual_size virtual size for the new VDO LV
     * @param index_memory amount of index memory (in bytes) or 0 for default
     * @param compression whether to enable compression or not
     * @param deduplication whether to enable deduplication or not
     * @param write_policy write policy for the volume
     * @param extra extra options for the VDO pool creation                                                 (just passed to LVM as is)
     * @returns whether the new VDO pool LV was successfully created from `pool_lv` and or not Tech category: {@link BlockDev.LVMTech.VDO}-{@link BlockDev.LVMTechMode.CREATE}&{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vdo_pool_convert(
        vg_name: string,
        pool_lv: string,
        name: string | null,
        virtual_size: number,
        index_memory: number,
        compression: boolean,
        deduplication: boolean,
        write_policy: LVMVDOWritePolicy | null,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param vg_name name of the VG to create a new LV in
     * @param lv_name name of the to-be-created VDO LV
     * @param pool_name name of the to-be-created VDO pool LV or `null` for default name
     * @param data_size requested size of the data VDO LV (physical size of the `pool_name` VDO pool LV)
     * @param virtual_size requested virtual_size of the `lv_name` VDO LV
     * @param index_memory amount of index memory (in bytes) or 0 for default
     * @param compression whether to enable compression or not
     * @param deduplication whether to enable deduplication or not
     * @param write_policy write policy for the volume
     * @param extra extra options for the VDO LV creation                                                 (just passed to LVM as is)
     * @returns whether the given `vg_name`/`lv_name` VDO LV was successfully created or not Tech category: {@link BlockDev.LVMTech.VDO}-{@link BlockDev.LVMTechMode.CREATE}
     */
    function lvm_vdo_pool_create(
        vg_name: string,
        lv_name: string,
        pool_name: string | null,
        data_size: number,
        virtual_size: number,
        index_memory: number,
        compression: boolean,
        deduplication: boolean,
        write_policy: LVMVDOWritePolicy | null,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param vg_name name of the VG containing the to-be-resized VDO pool LV
     * @param pool_name name of the to-be-resized VDO pool LV
     * @param size the requested new size of the VDO pool LV
     * @param extra extra options for the VDO pool LV resize                                                 (just passed to LVM as is)
     * @returns whether the `vg_name`/`pool_name` VDO pool LV was successfully resized or not Note: Size of the VDO pool LV can be only extended, not reduced. Tech category: {@link BlockDev.LVMTech.VDO}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vdo_pool_resize(vg_name: string, pool_name: string, size: number, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the VG containing the to-be-resized VDO LV
     * @param lv_name name of the to-be-resized VDO LV
     * @param size the requested new size of the VDO LV
     * @param extra extra options for the VDO LV resize                                                 (just passed to LVM as is)
     * @returns whether the `vg_name`/`lv_name` VDO LV was successfully resized or not Note: Reduction needs to process TRIM for reduced disk area to unmap used data blocks       from the VDO pool LV and it may take a long time. Tech category: {@link BlockDev.LVMTech.VDO}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vdo_resize(vg_name: string, lv_name: string, size: number, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the VG containing the queried VDO LV
     * @param lv_name name of the queried VDO LV
     * @returns the name of the pool volume for the `vg_name`/`lv_name` VDO LV or `null` if failed to determine (`error`) is set in those cases) Tech category: {@link BlockDev.LVMTech.VDO}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_vdolvpoolname(vg_name: string, lv_name: string): string;
    /**
     * @param vg_name name of the to be activated VG
     * @param extra extra options for the VG activation                                                 (just passed to LVM as is)
     * @returns whether the VG was successfully activated or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vgactivate(vg_name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * Note: This function does not back up the data content of LVs. See `vgcfbackup(8)` man page
     *       for more information.
     * @param vg_name name of the VG to backup configuration
     * @param backup_file file to save the backup to or `null` for using the default backup file                           in /etc/lvm/backup
     * @param extra extra options for the vgcfgbackup command                                               (just passed to LVM as is)
     * @returns Whether the backup was successfully created or not. Tech category: {@link BlockDev.LVMTech.VG_CFG_BACKUP_RESTORE} no mode (it is ignored)
     */
    function lvm_vgcfgbackup(vg_name: string, backup_file?: string | null, extra?: ExtraArg[] | null): boolean;
    /**
     * Note: This function restores VG configuration created by %bd_lvm_vgcfgbackup from given
     *       `backup_file` or from the latest backup in /etc/lvm/backup.
     * @param vg_name name of the VG to restore configuration
     * @param backup_file file to restore VG configuration from to or `null` for using the                           latest backup in /etc/lvm/backup
     * @param extra extra options for the vgcfgrestore command                                               (just passed to LVM as is)
     * @returns Whether the configuration was successfully restored or not. Tech category: {@link BlockDev.LVMTech.VG_CFG_BACKUP_RESTORE} no mode (it is ignored)
     */
    function lvm_vgcfgrestore(vg_name: string, backup_file?: string | null, extra?: ExtraArg[] | null): boolean;
    /**
     * @param name name of the newly created VG
     * @param pv_list list of PVs the newly created VG should use
     * @param pe_size PE size or 0 if the default value should be used
     * @param extra extra options for the VG creation                                                 (just passed to LVM as is)
     * @returns whether the VG `name` was successfully created or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.CREATE}
     */
    function lvm_vgcreate(name: string, pv_list: string[], pe_size: number, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the to be deactivated VG
     * @param extra extra options for the VG deactivation                                                 (just passed to LVM as is)
     * @returns whether the VG was successfully deactivated or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vgdeactivate(vg_name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the to be extended VG
     * @param device PV device to extend the `vg_name` VG with
     * @param extra extra options for the VG extension                                                 (just passed to LVM as is)
     * @returns whether the VG `vg_name` was successfully extended with the given `device` or not. Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vgextend(vg_name: string, device: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name a VG to get information about
     * @returns information about the `vg_name` VG or `null` in case of error (the `error`) gets populated in those cases) Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_vginfo(vg_name: string): LVMVGdata;
    /**
     * @param vg_name a shared VG to start the lockspace in lvmlockd
     * @param extra extra options for the vgchange command                                               (just passed to LVM as is)
     * @returns whether the lock was successfully started for `vg_name` or not Tech category: {@link BlockDev.LVMTech.SHARED}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vglock_start(vg_name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name a shared VG to stop the lockspace in lvmlockd
     * @param extra extra options for the vgchange command                                               (just passed to LVM as is)
     * @returns whether the lock was successfully stopped for `vg_name` or not Tech category: {@link BlockDev.LVMTech.SHARED}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vglock_stop(vg_name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the to be reduced VG
     * @param device PV device the `vg_name` VG should be reduced of or `null`                        if the VG should be reduced of the missing PVs
     * @param extra extra options for the VG reduction                                                 (just passed to LVM as is)
     * @returns whether the VG `vg_name` was successfully reduced of the given `device` or not Note: This function does not move extents off of the PV before removing       it from the VG. You must do that first by calling `bd_lvm_pvmove`. Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vgreduce(vg_name: string, device?: string | null, extra?: ExtraArg[] | null): boolean;
    /**
     * @param vg_name name of the to be removed VG
     * @param extra extra options for the VG removal                                                 (just passed to LVM as is)
     * @returns whether the VG was successfully removed or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.REMOVE}
     */
    function lvm_vgremove(vg_name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param old_vg_name old name of the VG to rename
     * @param new_vg_name new name for the `old_vg_name` VG
     * @param extra extra options for the VG rename                                                 (just passed to LVM as is)
     * @returns whether the VG was successfully renamed or not Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_vgrename(old_vg_name: string, new_vg_name: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @returns information about VGs found in the system Tech category: {@link BlockDev.LVMTech.BASIC}-{@link BlockDev.LVMTechMode.QUERY}
     */
    function lvm_vgs(): LVMVGdata[];
    /**
     * @param vg_name name of the VG containing the `data_lv` and the `cache_pool_lv` LVs
     * @param data_lv data LV to attach the `cache_lv` to
     * @param cache_lv cache (fast) LV to attach to the `data_lv`
     * @param extra extra options for the cache attachment                                                 (just passed to LVM as is)
     * @returns whether the `cache_lv` was successfully attached to the `data_lv` or not Tech category: {@link BlockDev.LVMTech.WRITECACHE}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_writecache_attach(
        vg_name: string,
        data_lv: string,
        cache_lv: string,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param vg_name name of the VG to create a cached LV in
     * @param lv_name name of the cached LV to create
     * @param data_size size of the data LV
     * @param cache_size size of the cache (or cached LV more precisely)
     * @param slow_pvs list of slow PVs (used for the data LV)
     * @param fast_pvs list of fast PVs (used for the cache LV)
     * @returns whether the cached LV `lv_name` was successfully created or not Tech category: {@link BlockDev.LVMTech.WRITECACHE}-{@link BlockDev.LVMTechMode.CREATE}
     */
    function lvm_writecache_create_cached_lv(
        vg_name: string,
        lv_name: string,
        data_size: number,
        cache_size: number,
        slow_pvs: string[],
        fast_pvs: string[],
    ): boolean;
    /**
     * @param vg_name name of the VG containing the `cached_lv`
     * @param cached_lv name of the cached LV to detach its cache from
     * @param destroy whether to destroy the cache after detach or not
     * @param extra extra options for the cache detachment                                                 (just passed to LVM as is)
     * @returns whether the cache was successfully detached from the `cached_lv` or not Note: synces the cache first Tech category: {@link BlockDev.LVMTech.WRITECACHE}-{@link BlockDev.LVMTechMode.MODIFY}
     */
    function lvm_writecache_detach(
        vg_name: string,
        cached_lv: string,
        destroy: boolean,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param raid_spec specification of the RAID device (name, node or path) to activate (if not given "--scan" is implied and `members` is ignored)
     * @param members member devices to be considered for `device` activation
     * @param uuid UUID (in the MD RAID format!) of the MD RAID to activate
     * @param start_degraded whether to start the array even if it's degraded
     * @param extra extra options for the activation (right now                                                 passed to the 'mdadm' utility)
     * @returns whether the MD RAID `device` was successfully activated or not Note: either `members` or `uuid` (or both) have to be specified. Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.MODIFY}
     */
    function md_activate(
        raid_spec: string | null,
        members: string[] | null,
        uuid: string | null,
        start_degraded: boolean,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param raid_spec specification of the RAID device (name, node or path) to add `device` into
     * @param device name of the device to add to the `raid_spec` RAID device
     * @param raid_devs number of devices the `raid_spec` RAID should actively use or 0             to leave unspecified (see below)
     * @param extra extra options for the addition (right now                                                 passed to the 'mdadm' utility)
     * @returns whether the `device` was successfully added to the `raid_spec` RAID or not The `raid_devs` parameter is used when adding devices to a raid array that has no actual redundancy. In this case it is necessary to explicitly grow the array all at once rather than manage it in the sense of adding spares. Whether the new device will be added as a spare or an active member is decided by mdadm. Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.MODIFY}
     */
    function md_add(raid_spec: string, device: string, raid_devs: number, extra?: ExtraArg[] | null): boolean;
    /**
     * @param uuid UUID to canonicalize
     * @returns canonicalized form of `uuid` This function expects a UUID in the form that mdadm returns. The change is as follows: 3386ff85:f5012621:4a435f06:1eb47236 -> 3386ff85-f501-2621-4a43-5f061eb47236 Tech category: always available
     */
    function md_canonicalize_uuid(uuid: string): string;
    /**
     * @param device_name name of the device to create
     * @param level RAID level (as understood by mdadm, see mdadm(8))
     * @param disks disks to use for the new RAID (including spares)
     * @param spares number of spare devices
     * @param version metadata version
     * @param bitmap write-intent bitmap location ('none', 'internal') or `null` to let mdadm decide (i.e. internal > 100GB)
     * @param chunk_size chunk size of the device to create
     * @param extra extra options for the creation (right now                                                 passed to the 'mdadm' utility)
     * @returns whether the new MD RAID device `device_name` was successfully created or not Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.CREATE}
     */
    function md_create(
        device_name: string,
        level: string,
        disks: string[],
        spares: number,
        version: string | null,
        bitmap: string | null,
        chunk_size: number,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param raid_spec specification of the RAID device (name, node or path)
     * @returns whether the RAID device `raid_spec` was successfully deactivated or not Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.MODIFY}
     */
    function md_deactivate(raid_spec: string): boolean;
    /**
     * @param device device to denominate (remove from its appropriate RAID) as a MD RAID device
     * @returns whether the `device` was successfully denominated (added to its appropriate RAID) or not Note: may start the MD RAID if it becomes ready by adding `device`. Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.MODIFY}
     */
    function md_denominate(device: string): boolean;
    /**
     * @param device device to destroy MD RAID metadata on
     * @returns whether the MD RAID metadata was successfully destroyed on `device` or not Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.DELETE}
     */
    function md_destroy(device: string): boolean;
    /**
     * @param raid_spec specification of the RAID device (name, node or path) to examine
     * @returns information about the MD RAID `raid_spec` Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.QUERY}
     */
    function md_detail(raid_spec: string): MDDetailData;
    function md_error_quark(): GLib.Quark;
    /**
     * @param device name of the device (a member of an MD RAID) to examine
     * @returns information about the MD RAID extracted from the `device` Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.QUERY}
     */
    function md_examine(device: string): MDExamineData;
    /**
     * @param raid_spec specification of the RAID device (name, node or path) to get the bitmap location
     * @returns bitmap location for `raid_spec` Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.QUERY}
     */
    function md_get_bitmap_location(raid_spec: string): string;
    /**
     * @param uuid UUID to transform into format used by MD RAID
     * @returns transformed form of `uuid` This function expects a UUID in the canonical (traditional format) and returns a UUID in the format used by MD RAID and is thus reverse to `bd_md_canonicalize_uuid()`. The change is as follows: 3386ff85-f501-2621-4a43-5f061eb47236 -> 3386ff85:f5012621:4a435f06:1eb47236 Tech category: always available
     */
    function md_get_md_uuid(uuid: string): string;
    /**
     * @param raid_spec specification of the RAID device (name, node or path) to get status
     * @returns status of the `raid_spec` RAID. Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.QUERY}
     */
    function md_get_status(raid_spec: string): string;
    /**
     * @param member_size size of an array member
     * @param version metadata version or `null` to use the current default version
     * @returns Calculated superblock size for an array with a given `member_size` and metadata `version` or default if unsupported `version` is used. Tech category: always available
     */
    function md_get_superblock_size(member_size: number, version?: string | null): number;
    /**
     * @param tech the queried tech
     * @param mode a bit mask of queried modes of operation for `tech`
     * @returns whether the `tech`-`mode` combination is available -- supported by the          plugin implementation and having all the runtime dependencies available
     */
    function md_is_tech_avail(tech: MDTech | null, mode: number): boolean;
    /**
     * @param node path of the MD RAID's device node
     * @returns `name` of the MD RAID the device node belongs to or `null` in case of error Tech category: always available
     */
    function md_name_from_node(node: string): string;
    /**
     * @param name name of the MD RAID
     * @returns device node of the `name` MD RAID or `null` in case of error Tech category: always available
     */
    function md_node_from_name(name: string): string;
    /**
     * @param device device to nominate (add to its appropriate RAID) as a MD RAID device
     * @returns whether the `device` was successfully nominated (added to its appropriate RAID) or not Note: may start the MD RAID if it becomes ready by adding `device`. Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.MODIFY}
     */
    function md_nominate(device: string): boolean;
    /**
     * @param raid_spec specification of the RAID device (name, node or path) to remove `device` from
     * @param device device to remove from the `raid_spec` RAID
     * @param fail whether to mark the `device` as failed before removing
     * @param extra extra options for the removal (right now                                                 passed to the 'mdadm' utility)
     * @returns whether the `device` was successfully removed from the `raid_spec` RAID or not. Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.MODIFY}
     */
    function md_remove(raid_spec: string, device: string, fail: boolean, extra?: ExtraArg[] | null): boolean;
    /**
     * @param raid_spec specification of the RAID device (name, node or path) to request sync action on
     * @param action requested sync action (resync, recovery, check, repair or idle)
     * @returns whether the `action` was successfully requested for the `raid_spec` RAID or not. Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.MODIFY}
     */
    function md_request_sync_action(raid_spec: string, action: string): boolean;
    /**
     * @param raid_spec specification of the (possibly degraded) RAID device (name, node or path) to be started
     * @returns whether the `raid_spec` was successfully started or not Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.MODIFY}
     */
    function md_run(raid_spec: string): boolean;
    /**
     * @param raid_spec specification of the RAID device (name, node or path) to set the bitmap location
     * @param location bitmap location (none, internal or path)
     * @returns whether `location` was successfully set for `raid_spec` Tech category: {@link BlockDev.MDTech.MD_TECH_MDRAID}-{@link BlockDev.MDTechMode.MODIFY}
     */
    function md_set_bitmap_location(raid_spec: string, location: string): boolean;
    function mpath_error_quark(): GLib.Quark;
    /**
     * @returns whether multipath device maps were successfully flushed or not Flushes all unused multipath device maps. Tech category: {@link BlockDev.MpathTech.BASE}-{@link BlockDev.MpathTechMode.MODIFY}
     */
    function mpath_flush_mpaths(): boolean;
    /**
     * @returns list of names of all devices that are                                                     members of the mpath mappings (or `null`                                                     in case of error) Tech category: {@link BlockDev.MpathTech.BASE}-{@link BlockDev.MpathTechMode.QUERY}
     */
    function mpath_get_mpath_members(): string[];
    /**
     * @param device device to test
     * @returns `true` if the device is a multipath member, `false` if not or an error appeared when queried (`error` is set in those cases) Tech category: {@link BlockDev.MpathTech.BASE}-{@link BlockDev.MpathTechMode.QUERY}
     */
    function mpath_is_mpath_member(device: string): boolean;
    /**
     * @param tech the queried tech
     * @param mode a bit mask of queried modes of operation for `tech`
     * @returns whether the `tech`-`mode` combination is available -- supported by the          plugin implementation and having all the runtime dependencies available
     */
    function mpath_is_tech_avail(tech: MpathTech | null, mode: number): boolean;
    /**
     * @param enabled whether friendly names should be enabled or not
     * @returns if successfully set or not Tech category: {@link BlockDev.MpathTech.FRIENDLY_NAMES}-{@link BlockDev.MpathTechMode.MODIFY}
     */
    function mpath_set_friendly_names(enabled: boolean): boolean;
    function nvdimm_error_quark(): GLib.Quark;
    /**
     * @param tech the queried tech
     * @param mode a bit mask of queried modes of operation ({@link BlockDev.NVDIMMTechMode}) for `tech`
     * @returns whether the `tech`-`mode` combination is available -- supported by the          plugin implementation and having all the runtime dependencies available
     * @deprecated since 3.1: NVDIMM plugin will be removed in the next major release
     */
    function nvdimm_is_tech_avail(tech: NVDIMMTech | null, mode: number): boolean;
    /**
     * @param bus return only namespaces on given bus (specified by name),                     `null` may be specified to return namespaces from all buses
     * @param region return only namespaces on given region (specified by regionX name or region id),                        `null` may be specified to return namespaces from all regions
     * @param idle whether to list idle (not enabled) namespaces too
     * @param extra extra options for the creation (right now                                                 passed to the 'ndctl' utility)
     * @returns information about the namespaces on `bus` and `region` or                                     `null` if no namespaces were found (`error` may be set to indicate error) Tech category: {@link BlockDev.NVDIMMTech.NVDIMM_TECH_NAMESPACE}-{@link BlockDev.NVDIMMTechMode.QUERY}
     * @deprecated since 3.1: NVDIMM plugin will be removed in the next major release
     */
    function nvdimm_list_namespaces(
        bus: string | null,
        region: string | null,
        idle: boolean,
        extra?: ExtraArg[] | null,
    ): NVDIMMNamespaceInfo[];
    /**
     * @param namespace name of the namespace to disable
     * @param extra extra options (currently unused)
     * @returns whether the `namespace` was successfully disabled or not Tech category: {@link BlockDev.NVDIMMTech.NVDIMM_TECH_NAMESPACE}-{@link BlockDev.NVDIMMTechMode.ACTIVATE_DEACTIVATE}
     * @deprecated since 3.1: NVDIMM plugin will be removed in the next major release
     */
    function nvdimm_namespace_disable(namespace: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param namespace name of the namespace to enable
     * @param extra extra options (currently unused)
     * @returns whether the `namespace` was successfully enabled or not Tech category: {@link BlockDev.NVDIMMTech.NVDIMM_TECH_NAMESPACE}-{@link BlockDev.NVDIMMTechMode.ACTIVATE_DEACTIVATE}
     * @deprecated since 3.1: NVDIMM plugin will be removed in the next major release
     */
    function nvdimm_namespace_enable(namespace: string, extra?: ExtraArg[] | null): boolean;
    /**
     * @param device name or path of a block device (e.g. "/dev/pmem0")
     * @returns namespace device name (e.g. "namespaceX.Y") for `device`                           or `null` if `device` is not a NVDIMM namespace                           (`error` may be set to indicate error) Tech category: {@link BlockDev.NVDIMMTech.NVDIMM_TECH_NAMESPACE}-{@link BlockDev.NVDIMMTechMode.QUERY}
     * @deprecated since 3.1: NVDIMM plugin will be removed in the next major release
     */
    function nvdimm_namespace_get_devname(device: string): string;
    /**
     * @param mode_str string representation of mode
     * @returns mode matching the `mode_str` given or {@link BlockDev.NVDIMMNamespaceMode.UNKNOWN} in case of no match Tech category: always available
     * @deprecated since 3.1: NVDIMM plugin will be removed in the next major release
     */
    function nvdimm_namespace_get_mode_from_str(mode_str: string): NVDIMMNamespaceMode;
    /**
     * @param mode mode to get string representation of
     * @returns string representation of `mode` or `null` in case of error Tech category: always available
     * @deprecated since 3.1: NVDIMM plugin will be removed in the next major release
     */
    function nvdimm_namespace_get_mode_str(mode: NVDIMMNamespaceMode | null): string;
    /**
     * @param mode namespace mode
     * @returns list of supported sector sizes for `mode` Tech category: {@link BlockDev.NVDIMMTech.NVDIMM_TECH_NAMESPACE}-{@link BlockDev.NVDIMMTechMode.QUERY}
     * @deprecated since 3.1: NVDIMM plugin will be removed in the next major release
     */
    function nvdimm_namespace_get_supported_sector_sizes(mode: NVDIMMNamespaceMode | null): number[];
    /**
     * @param namespace namespace to get information about
     * @param extra extra options (currently unused)
     * @returns information about given namespace or `null` if no such                           namespace was found (`error` may be set to indicate error) Tech category: {@link BlockDev.NVDIMMTech.NVDIMM_TECH_NAMESPACE}-{@link BlockDev.NVDIMMTechMode.QUERY}
     * @deprecated since 3.1: NVDIMM plugin will be removed in the next major release
     */
    function nvdimm_namespace_info(namespace: string, extra?: ExtraArg[] | null): NVDIMMNamespaceInfo;
    /**
     * @param namespace name of the namespace to reconfigure
     * @param mode mode type to set (memory/sector/raw/dax)
     * @param force whether to use force to reconfigure an active namespace
     * @param extra extra options for the creation (right now                                                 passed to the 'ndctl' utility)
     * @returns whether `namespace` was successfully reconfigured or not
     * @deprecated since 3.1: NVDIMM plugin will be removed in the next major release
     */
    function nvdimm_namespace_reconfigure(
        namespace: string,
        mode: NVDIMMNamespaceMode | null,
        force: boolean,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * Creates a transport connection to a remote system (specified by `transport_addr` and `transport_svcid`)
     * and creates a NVMe over Fabrics controller for the NVMe subsystem specified by the `subsysnqn` option.
     *
     * Valid values for `transport` include:
     * - `"rdma"`: An rdma network (RoCE, iWARP, Infiniband, basic rdma, etc.)
     * - `"fc"`: A Fibre Channel network.
     * - `"tcp"`: A TCP/IP network.
     * - `"loop"`: A NVMe over Fabrics target on the local host.
     *
     * In addition to the primary options it's possible to supply `extra` arguments:
     * - `"config"`: Use the specified JSON configuration file instead of the default file (see below) or
     *               specify `"none"` to avoid reading any configuration file.
     * - `"dhchap_key"`: NVMe In-band authentication secret in ASCII format as described
     *                      in the NVMe 2.0 specification. When not specified, the secret is by default read
     *                      from `/etc/nvme/hostkey`. In case that file does not exist no in-band authentication
     *                      is attempted.
     * - `"dhchap_ctrl_key"`: NVMe In-band authentication controller secret for bi-directional authentication.
     *                        When not specified, no bi-directional authentication is attempted.
     * - `"nr_io_queues"`: The number of I/O queues.
     * - `"nr_write_queues"`: Number of additional queues that will be used for write I/O.
     * - `"nr_poll_queues"`: Number of additional queues that will be used for polling latency sensitive I/O.
     * - `"queue_size"`: Number of elements in the I/O queues.
     * - `"keep_alive_tmo"`: The keep alive timeout (in seconds).
     * - `"reconnect_delay"`: The delay (in seconds) before reconnect is attempted after a connect loss.
     * - `"ctrl_loss_tmo"`: The controller loss timeout period (in seconds). A special value of `-1` will cause reconnecting forever.
     * - `"fast_io_fail_tmo"`: Fast I/O Fail timeout (in seconds).
     * - `"tos"`: Type of service.
     * - `"duplicate_connect"`: Allow duplicated connections between same transport host and subsystem port. Boolean value.
     * - `"disable_sqflow"`: Disables SQ flow control to omit head doorbell update for submission queues when sending nvme completions. Boolean value.
     * - `"hdr_digest"`: Generates/verifies header digest (TCP). Boolean value.
     * - `"data_digest"`: Generates/verifies data digest (TCP). Boolean value.
     * - `"tls"`: Enable TLS encryption (TCP). Boolean value.
     * - `"hostsymname"`: TP8010: NVMe host symbolic name.
     * - `"keyring"`: Keyring to store and lookup keys. String value.
     * - `"tls_key"`: TLS PSK for the connection. String value.
     *
     * Boolean values can be expressed by "0"/"1", "on"/"off" or "True"/"False" case-insensitive
     * strings. Failed numerical or boolean string conversions will result in the option being ignored.
     *
     * By default additional options are read from the default configuration file `/etc/nvme/config.json`.
     * This follows the default behaviour of `nvme-cli`. Use the `extra` `"config"` argument
     * to either specify a different config file or disable use of it. The JSON configuration
     * file format is documented in [https://raw.githubusercontent.com/linux-nvme/libnvme/master/doc/config-schema.json](https://raw.githubusercontent.com/linux-nvme/libnvme/master/doc/config-schema.json).
     * As a rule `extra` key names are kept consistent with the JSON config file schema.
     * Any `extra` option generally overrides particular option specified in a configuration file.
     * @param subsysnqn The name for the NVMe subsystem to connect to.
     * @param transport The network fabric used for a NVMe-over-Fabrics network.
     * @param transport_addr The network address of the Controller. For transports using IP addressing (e.g. `rdma`) this should be an IP-based address.
     * @param transport_svcid The transport service ID.  For transports using IP addressing (e.g. `tcp`, `rdma`) this field is the port number. The default port number for the `tcp` and `rdma` transports is `4420` and `8009` respectively when the well-known Discovery NQN is specified.
     * @param host_traddr The network address used on the host to connect to the Controller. For TCP, this sets the source address on the socket.
     * @param host_iface The network interface used on the host to connect to the Controller (e.g. IP `eth1`, `enp2s0`). This forces the connection to be made on a specific interface instead of letting the system decide.
     * @param host_nqn Overrides the default Host NQN that identifies the NVMe Host. If this option is `null`, the default is read from `/etc/nvme/hostnqn` first.                        If that does not exist, the autogenerated NQN value from the NVMe Host kernel module is used next. The Host NQN uniquely identifies the NVMe Host.
     * @param host_id User-defined host UUID or `null` to use default (as defined in `/etc/nvme/hostid`)
     * @param extra Additional arguments.
     * @returns `true` if the subsystem was connected successfully, `false` otherwise with `error` set. Tech category: {@link BlockDev.NVMETech.FABRICS}-{@link BlockDev.NVMETechMode.INITIATOR}
     */
    function nvme_connect(
        subsysnqn: string,
        transport: string,
        transport_addr?: string | null,
        transport_svcid?: string | null,
        host_traddr?: string | null,
        host_iface?: string | null,
        host_nqn?: string | null,
        host_id?: string | null,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * Initiates or aborts the Device Self-test operation on the controller or a namespace,
     * distinguished by the `device` path specified. In case a controller device
     * is specified then the self-test operation would include all active namespaces.
     *
     * To abort a running operation, pass #BD_NVME_SELF_TEST_ACTION_ABORT as `action`.
     * To retrieve progress of a current running operation, check the self-test log using
     * `bd_nvme_get_self_test_log()`.
     * @param device a NVMe controller or namespace device (e.g. `/dev/nvme0`)
     * @param action self-test action to take.
     * @returns `true` if the device self-test command was issued successfully,          `false` otherwise with `error` set. Tech category: {@link BlockDev.NVMETech.NVME}-{@link BlockDev.NVMETechMode.MANAGE}
     */
    function nvme_device_self_test(device: string, action: NVMESelfTestAction | null): boolean;
    /**
     * Disconnects and removes one or more existing NVMe over Fabrics controllers.
     * This may disconnect multiple controllers with matching `subsysnqn` and `true`
     * is only returned when all controllers were disconnected successfully.
     * @param subsysnqn The name of the NVMe subsystem to disconnect.
     * @returns `true` if all matching controllers were disconnected successfully, `false` with `error`          set in case of a disconnect error or when no matching controllers were found. Tech category: {@link BlockDev.NVMETech.FABRICS}-{@link BlockDev.NVMETechMode.INITIATOR}
     */
    function nvme_disconnect(subsysnqn: string): boolean;
    /**
     * Disconnects and removes a NVMe over Fabrics controller represented
     * by a block device path.
     * @param path NVMe controller device to disconnect (e.g. `/dev/nvme0`).
     * @returns `true` if the controller was disconnected successfully,          `false` otherwise with `error` set. Tech category: {@link BlockDev.NVMETech.FABRICS}-{@link BlockDev.NVMETechMode.INITIATOR}
     */
    function nvme_disconnect_by_path(path: string): boolean;
    function nvme_error_quark(): GLib.Quark;
    /**
     * A convenient utility function to look up all controllers associated
     *  with a NVMe subsystem the specified namespace is part of.
     * @param ns_sysfs_path NVMe namespace device file.
     * @param subsysnqn Limit matching to the specified subsystem NQN.
     * @param host_nqn Limit matching to the specified host NQN.
     * @param host_id Limit matching to the specified host ID.
     * @returns list of controller sysfs paths          or `null` in case of an error (with `error` set). Tech category: {@link BlockDev.NVMETech.FABRICS}-{@link BlockDev.NVMETechMode.INITIATOR}
     */
    function nvme_find_ctrls_for_ns(
        ns_sysfs_path: string,
        subsysnqn?: string | null,
        host_nqn?: string | null,
        host_id?: string | null,
    ): string[];
    /**
     * Performs low level format of the NVM media, destroying all data and metadata for either
     * a specific namespace or all attached namespaces to the controller. Use this command
     * to change LBA sector size. Optional secure erase method can be specified as well.
     *
     * Supported LBA data sizes for a given namespace can be listed using the `bd_nvme_get_namespace_info()`
     * call. In case of a special value `0` the current LBA format for a given namespace will be
     * retained. When called on a controller device the first namespace is used as a reference.
     *
     * Note that the NVMe controller may define a Format NVM attribute indicating that the format
     * operation would apply to all namespaces and a format (excluding secure erase) of any
     * namespace results in a format of all namespaces in the NVM subsystem. In such case and
     * when `device` is a namespace block device the #BD_NVME_ERROR_WOULD_FORMAT_ALL_NS error
     * is returned to prevent further damage. This is then supposed to be handled by the caller
     * and `bd_nvme_format()` is supposed to be called on a controller device instead.
     *
     * This call blocks until the format operation has finished. To retrieve progress
     * of a current running operation, check the namespace info using `bd_nvme_get_namespace_info()`.
     * @param device NVMe namespace or controller device to format (e.g. `/dev/nvme0n1`)
     * @param lba_data_size desired LBA data size (i.e. a sector size) in bytes or `0` to keep current. See {@link BlockDev.NVMELBAFormat} and `bd_nvme_get_namespace_info()`.
     * @param metadata_size desired metadata size in bytes or `0` for default. See {@link BlockDev.NVMELBAFormat} and `bd_nvme_get_namespace_info()`.
     * @param secure_erase optional secure erase action to take.
     * @returns `true` if the format command finished successfully, `false` otherwise with `error` set. Tech category: {@link BlockDev.NVMETech.NVME}-{@link BlockDev.NVMETechMode.MANAGE}
     */
    function nvme_format(
        device: string,
        lba_data_size: number,
        metadata_size: number,
        secure_erase: NVMEFormatSecureErase | null,
    ): boolean;
    /**
     * Compute new Host NQN (NVM Qualified Name) value for the current system. This
     * takes in account various system identifiers (DMI, device tree) with the goal
     * of a stable unique identifier whenever feasible.
     * @returns the Host NQN string or `null` with `error` set. Tech category: {@link BlockDev.NVMETech.FABRICS}-{@link BlockDev.NVMETechMode.INITIATOR}
     */
    function nvme_generate_host_nqn(): string;
    /**
     * Retrieves information about the NVMe controller (the Identify Controller command)
     * as specified by the `device` block device path.
     * @param device a NVMe controller device (e.g. `/dev/nvme0`)
     * @returns information about given controller or `null` in case of an error (with `error` set). Tech category: {@link BlockDev.NVMETech.NVME}-{@link BlockDev.NVMETechMode.INFO}
     */
    function nvme_get_controller_info(device: string): NVMEControllerInfo;
    /**
     * Retrieves Error Information Log (Log Identifier `01h`) entries, used to describe
     * extended error information for a command that completed with error or to report
     * an error that is not specific to a particular command. This log is global to the
     * controller. The ordering of the entries is based on the time when the error
     * occurred, with the most recent error being returned as the first log entry.
     * As the number of entries is typically limited by the drive implementation, only
     * most recent entries are provided.
     * @param device a NVMe controller device (e.g. `/dev/nvme0`)
     * @returns null-terminated list          of error entries or `null` in case of an error (with `error` set). Tech category: {@link BlockDev.NVMETech.NVME}-{@link BlockDev.NVMETechMode.INFO}
     */
    function nvme_get_error_log_entries(device: string): NVMEErrorLogEntry[];
    /**
     * Reads the Host ID value from the global `/etc/nvme/hostid` file. An empty
     * string is an indication that no Host ID has been set.
     * @returns the Host ID string or an empty string if none set. Tech category: {@link BlockDev.NVMETech.FABRICS}-{@link BlockDev.NVMETechMode.INITIATOR}
     */
    function nvme_get_host_id(): string;
    /**
     * Reads the Host NQN (NVM Qualified Name) value from the global `/etc/nvme/hostnqn`
     * file. An empty string is an indication that no Host NQN has been set.
     * @returns the Host NQN string or an empty string if none set. Tech category: {@link BlockDev.NVMETech.FABRICS}-{@link BlockDev.NVMETechMode.INITIATOR}
     */
    function nvme_get_host_nqn(): string;
    /**
     * Retrieves information about the NVMe namespace (the Identify Namespace command)
     * as specified by the `device` block device path.
     * @param device a NVMe namespace device (e.g. `/dev/nvme0n1`)
     * @returns information about given namespace or `null` in case of an error (with `error` set). Tech category: {@link BlockDev.NVMETech.NVME}-{@link BlockDev.NVMETechMode.INFO}
     */
    function nvme_get_namespace_info(device: string): NVMENamespaceInfo;
    /**
     * Retrieves the drive sanitize status log (Log Identifier `81h`) that includes information
     * about the most recent sanitize operation and the sanitize operation time estimates.
     *
     * As advised in the NVMe specification whitepaper the host should limit polling
     * to retrieve progress of a running sanitize operations (e.g. to at most once every
     * several minutes) to avoid interfering with the progress of the sanitize operation itself.
     * @param device a NVMe controller device (e.g. `/dev/nvme0`)
     * @returns sanitize log data or `null` in case of an error (with `error` set). Tech category: {@link BlockDev.NVMETech.NVME}-{@link BlockDev.NVMETechMode.INFO}
     */
    function nvme_get_sanitize_log(device: string): NVMESanitizeLog;
    /**
     * Retrieves drive self-test log (Log Identifier `06h`). Provides the status of a self-test operation
     * in progress and the percentage complete of that operation, along with the results of the last
     * 20 device self-test operations.
     * @param device a NVMe controller device (e.g. `/dev/nvme0`)
     * @returns self-test log data or `null` in case of an error (with `error` set). Tech category: {@link BlockDev.NVMETech.NVME}-{@link BlockDev.NVMETechMode.INFO}
     */
    function nvme_get_self_test_log(device: string): NVMESelfTestLog;
    /**
     * Retrieves drive SMART and general health information (Log Identifier `02h`).
     * The information provided is over the life of the controller and is retained across power cycles.
     * @param device a NVMe controller device (e.g. `/dev/nvme0`)
     * @returns health log data or `null` in case of an error (with `error` set). Tech category: {@link BlockDev.NVMETech.NVME}-{@link BlockDev.NVMETechMode.INFO}
     */
    function nvme_get_smart_log(device: string): NVMESmartLog;
    /**
     * @param tech the queried tech
     * @param mode a bit mask of queried modes of operation ({@link BlockDev.NVMETechMode}) for `tech`
     * @returns whether the `tech`-`mode` combination is available -- supported by the          plugin implementation and having all the runtime dependencies available
     */
    function nvme_is_tech_avail(tech: NVMETech | null, mode: number): boolean;
    /**
     * Starts a sanitize operation or recovers from a previously failed sanitize operation.
     * By definition, a sanitize operation alters all user data in the NVM subsystem such
     * that recovery of any previous user data from any cache, the non-volatile media,
     * or any Controller Memory Buffer is not possible. The scope of a sanitize operation
     * is all locations in the NVM subsystem that are able to contain user data, including
     * caches, Persistent Memory Regions, and unallocated or deallocated areas of the media.
     *
     * Once started, a sanitize operation is not able to be aborted and continues after
     * a Controller Level Reset including across power cycles. Once the sanitize operation
     * has run the media affected may not be immediately ready for use unless additional
     * media modification mechanism is run. This is often vendor specific and also depends
     * on the sanitize method (`action`) used. Callers to this sanitize operation should
     * set `no_dealloc` to `true` for the added convenience.
     *
     * The controller also ignores Critical Warning(s) in the SMART / Health Information
     * log page (e.g., read only mode) and attempts to complete the sanitize operation requested.
     *
     * This call returns immediately and the actual sanitize operation is performed
     * in the background. Use `bd_nvme_get_sanitize_log()` to retrieve status and progress
     * of a running sanitize operation. In case a sanitize operation fails the controller
     * may restrict its operation until a subsequent sanitize operation is started
     * (i.e. retried) or an #BD_NVME_SANITIZE_ACTION_EXIT_FAILURE action is used
     * to acknowledge the failure explicitly.
     *
     * The `overwrite_pass_count`, `overwrite_pattern` and `overwrite_invert_pattern`
     * arguments are only valid when `action` is #BD_NVME_SANITIZE_ACTION_OVERWRITE.
     *
     * The sanitize operation is set to run under the Allow Unrestricted Sanitize Exit
     * mode.
     * @param device NVMe namespace or controller device to format (e.g. `/dev/nvme0n1`)
     * @param action the sanitize action to perform.
     * @param no_dealloc instruct the controller to not deallocate the affected media area.
     * @param overwrite_pass_count number of overwrite passes [1-15] or 0 for the default (16 passes).
     * @param overwrite_pattern a 32-bit pattern used for the Overwrite sanitize operation.
     * @param overwrite_invert_pattern invert the overwrite pattern between passes.
     * @returns `true` if the format command finished successfully, `false` otherwise with `error` set. Tech category: {@link BlockDev.NVMETech.NVME}-{@link BlockDev.NVMETechMode.MANAGE}
     */
    function nvme_sanitize(
        device: string,
        action: NVMESanitizeAction | null,
        no_dealloc: boolean,
        overwrite_pass_count: number,
        overwrite_pattern: number,
        overwrite_invert_pattern: boolean,
    ): boolean;
    /**
     * @param result A %BDNVMESelfTestResult.
     * @returns A string representation of `result` for use as an identifier string                           or `null` when the code is unknown.
     */
    function nvme_self_test_result_to_string(result: NVMESelfTestResult | null): string;
    /**
     * Writes the Host ID value to the system `/etc/nvme/hostid` file.
     * No validation of the string is performed.
     * @param host_id The Host ID.
     * @returns `true` if the value was set successfully or `false` otherwise with `error` set. Tech category: {@link BlockDev.NVMETech.FABRICS}-{@link BlockDev.NVMETechMode.INITIATOR}
     */
    function nvme_set_host_id(host_id: string): boolean;
    /**
     * Writes the Host NQN (NVM Qualified Name) value to the system `/etc/nvme/hostnqn` file.
     * No validation of the string is performed.
     * @param host_nqn The Host NVM Qualified Name.
     * @returns `true` if the value was set successfully or `false` otherwise with `error` set. Tech category: {@link BlockDev.NVMETech.FABRICS}-{@link BlockDev.NVMETechMode.INITIATOR}
     */
    function nvme_set_host_nqn(host_nqn: string): boolean;
    /**
     * @param disk disk to create partition on
     * @param type type of the partition to create (if {@link BlockDev.PartTypeReq.NEXT}, the        partition type will be determined automatically based on the existing        partitions)
     * @param start where the partition should start (i.e. offset from the disk start)
     * @param size desired size of the partition (if 0, a max-sized partition is created)
     * @param align alignment to use for the partition
     * @returns specification of the created partition or `null` in case of error NOTE: The resulting partition may start at a different position than given by       `start` and can have different size than `size` due to alignment. Tech category: {@link BlockDev.PartTechMode.MODIFY_TABLE} + the tech according to the partition table type
     */
    function part_create_part(
        disk: string,
        type: PartTypeReq | null,
        start: number,
        size: number,
        align: PartAlign | null,
    ): PartSpec;
    /**
     * @param disk path of the disk block device to create partition table on
     * @param type type of the partition table to create
     * @param ignore_existing whether to ignore/overwrite the existing table or not                   (reports an error if `false` and there's some table on `disk`)
     * @returns whether the partition table was successfully created or not Tech category: {@link BlockDev.PartTechMode.CREATE_TABLE} + the tech according to `type`
     */
    function part_create_table(disk: string, type: PartTableType | null, ignore_existing: boolean): boolean;
    /**
     * @param disk disk to remove the partition from
     * @param part partition to remove
     * @returns whether the `part` partition was successfully deleted from `disk` Tech category: {@link BlockDev.PartTechMode.MODIFY_TABLE} + the tech according to the partition table type
     */
    function part_delete_part(disk: string, part: string): boolean;
    function part_error_quark(): GLib.Quark;
    /**
     * @param disk disk to get the best free region for
     * @param type type of the partition that is planned to be added
     * @param size size of the partition to be added
     * @returns spec of the best free region on `disk` for a new partition of type `type`                           with the size of `size` or `null` if there is none such region or if                           there was an error (`error` gets populated) Note: For the `type` {@link BlockDev.PartType.NORMAL}, the smallest possible space that *is not* in an extended partition       is found. For the `type` {@link BlockDev.PartType.LOGICAL}, the smallest possible space that *is* in an extended       partition is found. For {@link BlockDev.PartType.EXTENDED}, the biggest possible space is found as long as there       is no other extended partition (there can only be one). Tech category: {@link BlockDev.PartTechMode.QUERY_TABLE} + the tech according to the partition table type
     */
    function part_get_best_free_region(disk: string, type: PartType | null, size: number): PartSpec;
    /**
     * @param disk disk to get free regions for
     * @returns specs of the free regions from `disk` or `null` in case of error Tech category: {@link BlockDev.PartTechMode.QUERY_TABLE} + the tech according to the partition table type
     */
    function part_get_disk_free_regions(disk: string): PartSpec[];
    /**
     * @param disk disk to get information about partitions for
     * @returns specs of the partitions from `disk` or `null` in case of error Tech category: {@link BlockDev.PartTechMode.QUERY_TABLE} + the tech according to the partition table type
     */
    function part_get_disk_parts(disk: string): PartSpec[];
    /**
     * @param disk disk to get information about
     * @returns information about the given `disk` or `null` (in case of error) Tech category: {@link BlockDev.PartTechMode.QUERY_TABLE} + the tech according to the partition table type
     */
    function part_get_disk_spec(disk: string): PartDiskSpec;
    /**
     * @param disk disk to remove the partition from
     * @param position position (in bytes) determining the partition
     * @returns spec of the partition from `disk` spanning over the `position` or `null` if no such          partition exists or in case of error (`error` is set) Tech category: {@link BlockDev.PartTechMode.QUERY_PART} + the tech according to the partition table type
     */
    function part_get_part_by_pos(disk: string, position: number): PartSpec;
    /**
     * @param disk disk to remove the partition from
     * @param part partition to get spec for
     * @returns spec of the `part` partition from `disk` or `null` in case of error Tech category: {@link BlockDev.PartTechMode.QUERY_PART} + the tech according to the partition table type
     */
    function part_get_part_spec(disk: string, part: string): PartSpec;
    /**
     * @param type table type to get string representation for
     * @returns string representation of `table_type` Tech category: the tech according to `type`
     */
    function part_get_part_table_type_str(type: PartTableType | null): string;
    /**
     * @param type type to get string representation for
     * @returns string representation of `type` Tech category: always available
     */
    function part_get_type_str(type: PartType | null): string;
    /**
     * @param tech the queried tech
     * @param mode a bit mask of queried modes of operation ({@link BlockDev.PartTechMode}) for `tech`
     * @returns whether the `tech`-`mode` combination is available -- supported by the          plugin implementation and having all the runtime dependencies available
     */
    function part_is_tech_avail(tech: PartTech | null, mode: number): boolean;
    /**
     * @param disk disk containing the partition
     * @param part partition to resize
     * @param size new partition size, 0 for maximal size
     * @param align alignment to use for the partition end
     * @returns whether the `part` partition was successfully resized on `disk` to `size` NOTE: The resulting partition may be slightly bigger than requested due to alignment. Tech category: {@link BlockDev.PartTechMode.MODIFY_TABLE} + the tech according to the partition table type
     */
    function part_resize_part(disk: string, part: string, size: number, align: PartAlign | null): boolean;
    /**
     * @param disk device the partition belongs to
     * @param part partition the attributes should be set for
     * @param attrs GPT attributes to set on `part`
     * @returns whether the `attrs` GPT attributes were successfully set for `part` or not Tech category: {@link BlockDev.PartTech.GPT}-{@link BlockDev.PartTechMode.MODIFY_PART}
     */
    function part_set_part_attributes(disk: string, part: string, attrs: number): boolean;
    /**
     * @param disk device the partition belongs to
     * @param part partition the bootable flag should be set for
     * @param bootable whether to set or unset the bootable flag
     * @returns whether the `bootable` flag was successfully set for `part` or not Tech category: {@link BlockDev.PartTech.MBR}-{@link BlockDev.PartTechMode.MODIFY_PART}
     */
    function part_set_part_bootable(disk: string, part: string, bootable: boolean): boolean;
    /**
     * @param disk device the partition belongs to
     * @param part partition the ID should be set for
     * @param part_id partition Id
     * @returns whether the `part_id` type was successfully set for `part` or not Tech category: {@link BlockDev.PartTech.MBR}-{@link BlockDev.PartTechMode.MODIFY_PART}
     */
    function part_set_part_id(disk: string, part: string, part_id: string): boolean;
    /**
     * @param disk device the partition belongs to
     * @param part partition the name should be set for
     * @param name name to set
     * @returns whether the name was successfully set or not Tech category: {@link BlockDev.PartTech.GPT}-{@link BlockDev.PartTechMode.MODIFY_PART}
     */
    function part_set_part_name(disk: string, part: string, name: string): boolean;
    /**
     * @param disk device the partition belongs to
     * @param part partition the type should be set for
     * @param type_guid GUID of the type
     * @returns whether the `type_guid` type was successfully set for `part` or not Tech category: {@link BlockDev.PartTech.GPT}-{@link BlockDev.PartTechMode.MODIFY_PART}
     */
    function part_set_part_type(disk: string, part: string, type_guid: string): boolean;
    /**
     * @param disk device the partition belongs to
     * @param part partition the UUID should be set for
     * @param uuid partition UUID to set
     * @returns whether the `uuid` type was successfully set for `part` or not Tech category: {@link BlockDev.PartTechMode.MODIFY_PART} + the tech according to the partition table type
     */
    function part_set_part_uuid(disk: string, part: string, uuid: string): boolean;
    /**
     * @param require_plugins `null`-terminated list                 of plugins that should be loaded (if no so_name is specified                 for the plugin, the default is used) or `null` to load all                 plugins
     * @param reload whether to reload the already loaded plugins or not
     * @param log_func logging function to use or `null`                                           to keep the old one
     * @returns whether the library was successfully initialized or not If `reload` is `true` all the plugins are closed and reloaded otherwise only the missing plugins are loaded.
     */
    function reinit(require_plugins: PluginSpec[] | null, reload: boolean, log_func?: UtilsLogFunc | null): boolean;
    /**
     * Retrieve SMART information from the drive.
     * @param device device to check.
     * @param extra extra options to pass through.
     * @returns ATA SMART log or `null` in case of an error (with `error` set). Tech category: {@link BlockDev.SmartTech.ATA}-{@link BlockDev.SmartTechMode.INFO}
     */
    function smart_ata_get_info(device: string, extra?: ExtraArg[] | null): SmartATA;
    /**
     * Retrieve SMART information from the supplied data.
     * @param data binary data to parse.
     * @returns ATA SMART log or `null` in case of an error (with `error` set). Tech category: {@link BlockDev.SmartTech.ATA}-{@link BlockDev.SmartTechMode.INFO}
     */
    function smart_ata_get_info_from_data(data: Uint8Array | string): SmartATA;
    /**
     * Executes or aborts device self-test.
     * @param device device to trigger the test on.
     * @param operation {@link BlockDev.SmartSelfTestOp} self-test operation.
     * @param extra extra options to pass through.
     * @returns `true` when the self-test was triggered successfully or `false` in case of an error (with `error` set). Tech category: {@link BlockDev.SmartTech.ATA}-{@link BlockDev.SmartTechMode.SELFTEST}
     */
    function smart_device_self_test(
        device: string,
        operation: SmartSelfTestOp | null,
        extra?: ExtraArg[] | null,
    ): boolean;
    function smart_error_quark(): GLib.Quark;
    /**
     * @param tech the queried tech
     * @param mode a bit mask of queried modes of operation ({@link BlockDev.SmartTechMode}) for `tech`
     * @returns whether the `tech`-`mode` combination is available -- supported by the          plugin implementation and having all the runtime dependencies available
     */
    function smart_is_tech_avail(tech: SmartTechMode | null, mode: number): boolean;
    /**
     * Retrieve SMART information from SCSI or SAS-compliant drive.
     * @param device device to check.
     * @param extra extra options to pass through.
     * @returns SCSI SMART log or `null` in case of an error (with `error` set). Tech category: {@link BlockDev.SmartTech.SCSI}-{@link BlockDev.SmartTechMode.INFO}
     */
    function smart_scsi_get_info(device: string, extra?: ExtraArg[] | null): SmartSCSI;
    /**
     * Enables or disables SMART functionality on device.
     * @param device SMART-capable device.
     * @param enabled whether to enable or disable the SMART functionality
     * @param extra extra options to pass through.
     * @returns `true` when the functionality was set successfully or `false` in case of an error (with `error` set). Tech category: {@link BlockDev.SmartTech.ATA}-{@link BlockDev.SmartTechMode.INFO}
     */
    function smart_set_enabled(device: string, enabled: boolean, extra?: ExtraArg[] | null): boolean;
    /**
     * @param label label to check
     * @returns whether `label` is a valid label for swap or not          (reason is provided in `error`) Tech category: always available
     */
    function swap_check_label(label: string): boolean;
    /**
     * @param uuid UUID to check
     * @returns whether `uuid` is a valid UUID for swap or not          (reason is provided in `error`) Tech category: always available
     */
    function swap_check_uuid(uuid: string): boolean;
    function swap_error_quark(): GLib.Quark;
    /**
     * @param tech the queried tech
     * @param mode a bit mask of queried modes of operation ({@link BlockDev.SwapTechMode}) for `tech`
     * @returns whether the `tech`-`mode` combination is available -- supported by the          plugin implementation and having all the runtime dependencies available
     */
    function swap_is_tech_avail(tech: SwapTech | null, mode: number): boolean;
    /**
     * @param device a device to create swap space on
     * @param label a label for the swap space device
     * @param uuid UUID for the swap space device
     * @param extra extra options for the creation (right now                                                 passed to the 'mkswap' utility)
     * @returns whether the swap space was successfully created or not Tech category: {@link BlockDev.SwapTech.SWAP_TECH_SWAP}-{@link BlockDev.SwapTechMode.CREATE}
     */
    function swap_mkswap(
        device: string,
        label?: string | null,
        uuid?: string | null,
        extra?: ExtraArg[] | null,
    ): boolean;
    /**
     * @param device a device to set label on
     * @param label label that will be set
     * @returns whether the label was successfully set or not Tech category: {@link BlockDev.SwapTech.SWAP_TECH_SWAP}-{@link BlockDev.SwapTechMode.SET_LABEL}
     */
    function swap_set_label(device: string, label: string): boolean;
    /**
     * @param device a device to set UUID on
     * @param uuid UUID that will be set
     * @returns whether the UUID was successfully set or not Tech category: {@link BlockDev.SwapTech.SWAP_TECH_SWAP}-{@link BlockDev.SwapTechMode.SET_UUID}
     */
    function swap_set_uuid(device: string, uuid: string): boolean;
    /**
     * @param device swap device to deactivate
     * @returns whether the swap device was successfully deactivated or not Tech category: {@link BlockDev.SwapTech.SWAP_TECH_SWAP}-{@link BlockDev.SwapTechMode.ACTIVATE_DEACTIVATE}
     */
    function swap_swapoff(device: string): boolean;
    /**
     * @param device swap device to activate
     * @param priority priority of the activated device or -1 to use the default
     * @returns whether the swap device was successfully activated or not Tech category: {@link BlockDev.SwapTech.SWAP_TECH_SWAP}-{@link BlockDev.SwapTechMode.ACTIVATE_DEACTIVATE}
     */
    function swap_swapon(device: string, priority: number): boolean;
    /**
     * @param device swap device to get status of
     * @returns `true` if the swap device is active, `false` if not active or failed to determine (`error`) is set not a non-NULL value in such case) Tech category: {@link BlockDev.SwapTech.SWAP_TECH_SWAP}-{@link BlockDev.SwapTechMode.QUERY}
     */
    function swap_swapstatus(device: string): boolean;
    /**
     * @param request_plugins `null`-terminated list                   of plugins that should be loaded (if no so_name is specified                   for the plugin, the default is used) or `null` to load all                   plugins
     * @param log_func logging function to use
     * @returns whether the library was successfully initialized with all the          required or default (see `require_plugins`) plugins or not *UNLIKE IN CASE OF `bd_init()` AND `bd_ensure_init()`, FAILURE TO LOAD A PLUGIN  IS NOT CONSIDERED ERROR*
     */
    function try_init(
        request_plugins?: PluginSpec[] | null,
        log_func?: UtilsLogFunc | null,
    ): [boolean, string[] | null];
    /**
     * @param require_plugins `null`-terminated list                 of plugins that should be loaded (if no so_name is specified                 for the plugin, the default is used) or `null` to load all                 plugins
     * @param reload whether to reload the already loaded plugins or not
     * @param log_func logging function to use or `null`                                           to keep the old one
     * @returns whether the library was successfully initialized or not If `reload` is `true` all the plugins are closed and reloaded otherwise only the missing plugins are loaded. *UNLIKE IN CASE OF `bd_init()` AND `bd_ensure_init()`, FAILURE TO LOAD A PLUGIN  IS NOT CONSIDERED ERROR*
     */
    function try_reinit(
        require_plugins: PluginSpec[] | null,
        reload: boolean,
        log_func?: UtilsLogFunc | null,
    ): [boolean, string[] | null];
    /**
     * Checks whether the currently running linux kernel version is equal or higher
     * than the specified required `major`.`minor`.`micro` version.
     * @param major Minimal major linux kernel version.
     * @param minor Minimal minor linux kernel version.
     * @param micro Minimal micro linux kernel version.
     * @returns an integer less than, equal to, or greater than zero, if detected version is <, == or > than the specified `major`.`minor`.`micro` version.
     */
    function utils_check_linux_version(major: number, minor: number, micro: number): number;
    /**
     * Note: Both supplied `version` and parsed result using `version_regexp` must be in format
     *       `X[.Y[.Z[.Z2[.Z3...[-R]]]]]` where all components are natural numbers, see
     *       %bd_utils_version_cmp for details.
     * @param util name of the utility to check
     * @param version minimum required version of the utility or `null`           if no version is required
     * @param version_arg argument to use with the `util` to get version               info or `null` to use "--version"
     * @param version_regexp regexp to extract version from the version                  info or `null` if only version is printed by "$ `util` `version_arg`"
     * @returns whether the `util` is available in a version >= `version` or not          (`error` is set in such case).
     */
    function utils_check_util_version(
        util: string,
        version?: string | null,
        version_arg?: string | null,
        version_regexp?: string | null,
    ): boolean;
    /**
     * @param connection existing GDBusConnection or `null`
     * @param bus_type bus type (system or session), ignored if `connection` is specified
     * @param bus_name name of the service to check (e.g. "com.redhat.lvmdbus1")
     * @param obj_prefix object path prefix for the service (e.g. "/com/redhat/lvmdbus1")
     * @returns whether the service was found in the system
     */
    function utils_dbus_service_available(
        connection: Gio.DBusConnection | null,
        bus_type: Gio.BusType | null,
        bus_name: string,
        obj_prefix: string,
    ): boolean;
    /**
     * @param str string to write to `file_path`
     * @param file_path path to file
     * @returns whether the `str` was successfully written to `file_path` or not.
     */
    function utils_echo_str_to_file(str: string, file_path: string): boolean;
    /**
     * Note that any NULL bytes read from standard output and standard error
     * output will be discarded.
     * @param argv the argv array for the call
     * @param extra extra arguments
     * @returns whether the `argv` was successfully executed capturing the output or not
     */
    function utils_exec_and_capture_output(argv: string[], extra: ExtraArg[] | null): [boolean, string];
    /**
     * @param argv the argv array for the call
     * @param extra extra arguments
     * @returns whether the `argv` was successfully executed capturing the output or not
     */
    function utils_exec_and_capture_output_no_progress(
        argv: string[],
        extra: ExtraArg[] | null,
    ): [boolean, string, string, number];
    /**
     * @param argv the argv array for the call
     * @param extra extra arguments
     * @returns whether the `argv` was successfully executed (no error and exit code 0) or not
     */
    function utils_exec_and_report_error(argv: string[], extra?: ExtraArg[] | null): boolean;
    /**
     * @param argv the argv array for the call
     * @param extra extra arguments
     * @returns whether the `argv` was successfully executed (no error and exit code 0) or not
     */
    function utils_exec_and_report_error_no_progress(argv: string[], extra?: ExtraArg[] | null): boolean;
    /**
     * Note that any NULL bytes read from standard output and standard error
     * output are treated as separators similar to newlines and `prog_extract`
     * will be called with the respective chunk.
     * @param argv the argv array for the call
     * @param extra extra arguments
     * @param prog_extract function for extracting progress information
     * @returns whether the `argv` was successfully executed (no error and exit code 0) or not
     */
    function utils_exec_and_report_progress(
        argv: string[],
        extra: ExtraArg[] | null,
        prog_extract: UtilsProgExtract | null,
    ): [boolean, number];
    /**
     * @param argv the argv array for the call
     * @param extra extra arguments
     * @returns whether the `argv` was successfully executed (no error and exit code 0) or not
     */
    function utils_exec_and_report_status_error(argv: string[], extra: ExtraArg[] | null): [boolean, number];
    /**
     * @param argv the argv array for the call
     * @param input input for the executed program
     * @param extra extra arguments
     * @returns whether the `argv` was successfully executed (no error and exit code 0) or not
     */
    function utils_exec_with_input(argv: string[], input?: string | null, extra?: ExtraArg[] | null): boolean;
    /**
     * @param dev_spec specification of the device (e.g. "/dev/sda", any symlink, or the name of a file            under "/dev")
     * @returns a list of all symlinks (known to udev) for the                                                     device specified with `dev_spec` or `null` in                                                     case of error
     */
    function utils_get_device_symlinks(dev_spec: string): string[];
    /**
     * Retrieves version of currently running Linux kernel. Acts also as an initializer for statically cached data.
     * @returns Detected Linux kernel version or `null` in case of an error. The returned value belongs to the library, do not free.
     */
    function utils_get_linux_version(): UtilsLinuxVersion;
    function utils_get_next_task_id(): number;
    /**
     * @param module_name name of the kernel module to check
     * @returns whether the `module_name` was found in the system, either as a module or built-in in the kernel
     */
    function utils_have_kernel_module(module_name: string): boolean;
    /**
     * @param new_log_func logging function to use or                                               `null` to disable logging; use                                               `bd_utils_log_stdout` to reset to                                               the default behaviour
     * @returns whether logging was successfully initialized or not
     */
    function utils_init_logging(new_log_func?: UtilsLogFunc | null): boolean;
    /**
     * @param new_prog_func progress reporting function to                                                use or `null` to reset to default
     * @returns whether progress reporting was successfully initialized or not
     */
    function utils_init_prog_reporting(new_prog_func?: UtilsProgFunc | null): boolean;
    /**
     * @param new_prog_func progress reporting function to                                                use on current thread or `null`                                                to reset to default or global
     * @returns whether progress reporting was successfully initialized or not
     */
    function utils_init_prog_reporting_thread(new_prog_func?: UtilsProgFunc | null): boolean;
    /**
     * @param module_name name of the kernel module to load
     * @param options module options
     * @returns whether the `module_name` was successfully loaded or not
     */
    function utils_load_kernel_module(module_name: string, options?: string | null): boolean;
    /**
     * @param level log level
     * @param msg log message
     */
    function utils_log(level: number, msg: string): void;
    /**
     * Convenient function for logging to stdout. Can be used as {@link BlockDev.UtilsLogFunc}.
     * @param level log level
     * @param msg log message
     */
    function utils_log_stdout(level: number, msg: string): void;
    /**
     * @param task_id ID of the task the status of which is being logged
     * @param msg log message
     */
    function utils_log_task_status(task_id: number, msg: string): void;
    /**
     * @returns whether progress reporting for the current thread was successfully muted (deinitialized even in presence of a global reporting function) or not
     */
    function utils_mute_prog_reporting_thread(): boolean;
    /**
     * @returns TRUE if progress reporting has been initialized, i.e. a reporting function was set up with either bd_utils_init_prog_reporting or bd_utils_init_prog_reporting_thread (takes precedence). FALSE if bd_utils_mute_prog_reporting_thread was used to mute the thread.
     */
    function utils_prog_reporting_initialized(): boolean;
    /**
     * @param task_id ID of the task/action
     * @param msg message describing the status of the task/action
     */
    function utils_report_finished(task_id: number, msg: string): void;
    /**
     * @param task_id ID of the task/action
     * @param completion percentage of completion
     * @param msg message describing the status of the task/action
     */
    function utils_report_progress(task_id: number, completion: number, msg: string): void;
    /**
     * @param msg message describing the started task/action
     * @returns ID of the started task/action
     */
    function utils_report_started(msg: string): number;
    /**
     * @param dev_spec specification of the device (e.g. "/dev/sda", any symlink, or the name of a file            under "/dev")
     * @returns the full real path of the device (e.g. "/dev/md126"                           for "/dev/md/my_raid") or `null` in case of error
     */
    function utils_resolve_device(dev_spec: string): string;
    /**
     * Level of messages to log. Only messages with level <= `level` will be logged.
     * For example using with #BD_UTILS_LOG_WARNING (default value) only messages
     * with log levels #BD_UTILS_LOG_WARNING, #BD_UTILS_LOG_ERR, ..., #BD_UTILS_LOG_EMERG
     * will be logged.
     *
     * Note: #BD_UTILS_LOG_DEBUG level messages are always skipped unless compiled
     *       with `--enable-debug` configure option.
     * @param level log level
     */
    function utils_set_log_level(level: number): void;
    /**
     * @param module_name name of the kernel module to unload
     * @returns whether the `module_name` was successfully unloaded or not
     */
    function utils_unload_kernel_module(module_name: string): boolean;
    /**
     * @param ver_string1 first version string
     * @param ver_string2 second version string
     * @returns -1, 0 or 1 if `ver_string1` is lower, the same or higher version as          `ver_string2` respectively. If an error occurs, returns -2 and `error`          is set. **ONLY SUPPORTS VERSION STRINGS OF FORMAT `X[.Y[.Z[.Z2[.Z3...[-R]]]]]` where all components   are natural numbers!**
     */
    function utils_version_cmp(ver_string1: string, ver_string2: string): number;
    /**
     * @gir-type Callback
     */
    interface UtilsLogFunc {
        (level: number, msg: string): void;
    }
    /**
     * @gir-type Callback
     */
    interface UtilsProgExtract {
        (line: string): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface UtilsProgFunc {
        (task_id: number, status: UtilsProgStatus, completion: number, msg?: string | null): void;
    }
    /**
     * @gir-type Flags
     */
    enum BtrfsTechMode {
        CREATE,
        DELETE,
        MODIFY,
        QUERY,
    }

    /**
     * @gir-type Flags
     */
    enum CryptoIntegrityOpenFlags {
        NO_JOURNAL,
        RECOVERY,
        NO_JOURNAL_BITMAP,
        RECALCULATE,
        RECALCULATE_RESET,
        ALLOW_DISCARDS,
    }

    /**
     * @gir-type Flags
     */
    enum CryptoLUKSPersistentFlags {
        ALLOW_DISCARDS,
        SAME_CPU_CRYPT,
        SUBMIT_FROM_CRYPT_CPUS,
        NO_JOURNAL,
        NO_READ_WORKQUEUE,
        NO_WRITE_WORKQUEUE,
        HIGH_PRIORITY,
    }

    /**
     * @gir-type Flags
     */
    enum CryptoTechMode {
        CREATE,
        OPEN_CLOSE,
        QUERY,
        ADD_KEY,
        REMOVE_KEY,
        RESIZE,
        SUSPEND_RESUME,
        BACKUP_RESTORE,
        MODIFY,
    }

    /**
     * @gir-type Flags
     */
    enum DMTechMode {
        CREATE_ACTIVATE,
        REMOVE_DEACTIVATE,
        QUERY,
    }

    /**
     * @gir-type Flags
     */
    enum FSConfigureFlags {
        LABEL,
        UUID,
    }

    /**
     * @gir-type Flags
     */
    enum FSF2FSFeature {
        ENCRYPT,
        BLKZONED,
        ATOMIC_WRITE,
        EXTRA_ATTR,
        PRJQUOTA,
        INODE_CHKSUM,
        FLEXIBLE_INLINE_XATTR,
        QUOTA_INO,
        INODE_CRTIME,
        LOST_FOUND,
        VERITY,
        SB_CHKSUM,
    }

    /**
     * @gir-type Flags
     */
    enum FSFeatureFlags {
        OWNERS,
        PARTITION_TABLE,
    }

    /**
     * @gir-type Flags
     */
    enum FSFsckFlags {
        CHECK,
        REPAIR,
    }

    /**
     * Flags indicating mkfs options are available for given filesystem type.
     * @gir-type Flags
     */
    enum FSMkfsOptionsFlags {
        LABEL,
        UUID,
        DRY_RUN,
        NODISCARD,
        FORCE,
        NOPT,
    }

    /**
     * Flags indicating whether a filesystem resize action supports growing and/or
     * shrinking if mounted or unmounted.
     * @gir-type Flags
     */
    enum FSResizeFlags {
        OFFLINE_SHRINK,
        OFFLINE_GROW,
        ONLINE_SHRINK,
        ONLINE_GROW,
    }

    /**
     * @gir-type Flags
     */
    enum FSTechMode {
        MKFS,
        WIPE,
        CHECK,
        REPAIR,
        SET_LABEL,
        QUERY,
        RESIZE,
        SET_UUID,
    }

    /**
     * @gir-type Flags
     */
    enum LVMCachePoolFlags {
        STRIPED,
        RAID1,
        RAID5,
        RAID6,
        RAID10,
        META_STRIPED,
        META_RAID1,
        META_RAID5,
        META_RAID6,
        META_RAID10,
    }

    /**
     * @gir-type Flags
     */
    enum LVMTechMode {
        CREATE,
        REMOVE,
        MODIFY,
        QUERY,
    }

    /**
     * @gir-type Flags
     */
    enum LoopTechMode {
        CREATE,
        DESTROY,
        MODIFY,
        QUERY,
    }

    /**
     * @gir-type Flags
     */
    enum MDTechMode {
        CREATE,
        DELETE,
        MODIFY,
        QUERY,
    }

    /**
     * @gir-type Flags
     */
    enum MpathTechMode {
        QUERY,
        MODIFY,
    }

    /**
     * @gir-type Flags
     */
    enum NVDIMMTechMode {
        CREATE,
        REMOVE,
        ACTIVATE_DEACTIVATE,
        QUERY,
        RECONFIGURE,
    }

    /**
     * @gir-type Flags
     */
    enum NVMEControllerFeature {
        MULTIPORT,
        MULTICTRL,
        SRIOV,
        ANA_REPORTING,
        FORMAT,
        FORMAT_ALL_NS,
        NS_MGMT,
        SELFTEST,
        SELFTEST_SINGLE,
        SANITIZE_CRYPTO,
        SANITIZE_BLOCK,
        SANITIZE_OVERWRITE,
        SECURE_ERASE_ALL_NS,
        SECURE_ERASE_CRYPTO,
        STORAGE_DEVICE,
        ENCLOSURE,
        MGMT_PCIE,
        MGMT_SMBUS,
    }

    /**
     * @gir-type Flags
     */
    enum NVMENamespaceFeature {
        THIN,
        MULTIPATH_SHARED,
        FORMAT_PROGRESS,
        ROTATIONAL,
    }

    /**
     * @gir-type Flags
     */
    enum NVMESmartCriticalWarning {
        SPARE,
        TEMPERATURE,
        DEGRADED,
        READONLY,
        VOLATILE_MEM,
        PMR_READONLY,
    }

    /**
     * @gir-type Flags
     */
    enum NVMETechMode {
        INFO,
        MANAGE,
        INITIATOR,
    }

    /**
     * @gir-type Flags
     */
    enum PartTechMode {
        CREATE_TABLE,
        MODIFY_TABLE,
        QUERY_TABLE,
        MODIFY_PART,
        QUERY_PART,
    }

    /**
     * @gir-type Flags
     */
    enum SmartATACapabilities {
        ATTRIBUTE_AUTOSAVE,
        AUTOSAVE_TIMER,
        ERROR_LOGGING,
        GP_LOGGING,
    }

    /**
     * @gir-type Flags
     */
    enum SmartTechMode {
        INFO,
        SELFTEST,
    }

    /**
     * @gir-type Flags
     */
    enum SwapTechMode {
        CREATE,
        ACTIVATE_DEACTIVATE,
        QUERY,
        SET_LABEL,
        SET_UUID,
    }

    /**
     * @gir-type Struct
     */
    class BtrfsDeviceInfo {
        static $gtype: GObject.GType<BtrfsDeviceInfo>;

        // Fields

        id: number;
        path: string;
        size: number;
        used: number;

        // Constructors

        constructor(
            properties?: Partial<{
                id: number;
                path: string;
                size: number;
                used: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `info`.
         */
        copy(): BtrfsDeviceInfo;
        /**
         * Frees `info`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class BtrfsFilesystemInfo {
        static $gtype: GObject.GType<BtrfsFilesystemInfo>;

        // Fields

        label: string;
        uuid: string;
        num_devices: number;
        used: number;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                num_devices: number;
                used: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `info`.
         */
        copy(): BtrfsFilesystemInfo;
        /**
         * Frees `info`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class BtrfsSubvolumeInfo {
        static $gtype: GObject.GType<BtrfsSubvolumeInfo>;

        // Fields

        id: number;
        parent_id: number;
        path: string;

        // Constructors

        constructor(
            properties?: Partial<{
                id: number;
                parent_id: number;
                path: string;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `info`.
         */
        copy(): BtrfsSubvolumeInfo;
        /**
         * Frees `info`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class CryptoBITLKInfo {
        static $gtype: GObject.GType<CryptoBITLKInfo>;

        // Fields

        cipher: string;
        mode: string;
        uuid: string;
        backing_device: string;
        sector_size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                cipher: string;
                mode: string;
                uuid: string;
                backing_device: string;
                sector_size: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `info`.
         */
        copy(): CryptoBITLKInfo;
        /**
         * Frees `info`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class CryptoIntegrityExtra {
        static $gtype: GObject.GType<CryptoIntegrityExtra>;

        // Fields

        sector_size: number;
        journal_size: number;
        journal_watermark: number;
        journal_commit_time: number;
        interleave_sectors: number;
        tag_size: number;
        buffer_sectors: number;

        // Constructors

        constructor(
            properties?: Partial<{
                sector_size: number;
                journal_size: number;
                journal_watermark: number;
                journal_commit_time: number;
                interleave_sectors: number;
                tag_size: number;
                buffer_sectors: number;
            }>,
        );

        static ['new'](
            sector_size: number,
            journal_size: number,
            journal_watermark: number,
            journal_commit_time: number,
            interleave_sectors: number,
            tag_size: number,
            buffer_sectors: number,
        ): CryptoIntegrityExtra;

        // Methods

        /**
         * Creates a new copy of `extra`.
         */
        copy(): CryptoIntegrityExtra;
        /**
         * Frees `extra`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class CryptoIntegrityInfo {
        static $gtype: GObject.GType<CryptoIntegrityInfo>;

        // Fields

        algorithm: string;
        key_size: number;
        sector_size: number;
        tag_size: number;
        interleave_sectors: number;
        journal_size: number;
        journal_crypt: string;
        journal_integrity: string;

        // Constructors

        constructor(
            properties?: Partial<{
                algorithm: string;
                key_size: number;
                sector_size: number;
                tag_size: number;
                interleave_sectors: number;
                journal_size: number;
                journal_crypt: string;
                journal_integrity: string;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `info`.
         */
        copy(): CryptoIntegrityInfo;
        /**
         * Frees `info`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class CryptoKeyslotContext {
        static $gtype: GObject.GType<CryptoKeyslotContext>;

        // Fields

        type: CryptoKeyslotContextType;

        // Constructors

        constructor(keyfile: string, keyfile_offset: number, key_size: number);

        static new_keyfile(keyfile: string, keyfile_offset: number, key_size: number): CryptoKeyslotContext;

        static new_keyring(key_desc: string): CryptoKeyslotContext;

        static new_passphrase(pass_data: Uint8Array | string): CryptoKeyslotContext;

        static new_volume_key(volume_key: Uint8Array | string): CryptoKeyslotContext;

        // Methods

        /**
         * Creates a new copy of `context`.
         */
        copy(): CryptoKeyslotContext;
        /**
         * Frees `context`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class CryptoLUKSExtra {
        static $gtype: GObject.GType<CryptoLUKSExtra>;

        // Fields

        data_alignment: number;
        data_device: string;
        integrity: string;
        sector_size: number;
        label: string;
        subsystem: string;
        pbkdf: CryptoLUKSPBKDF;

        // Constructors

        constructor(
            properties?: Partial<{
                data_alignment: number;
                data_device: string;
                integrity: string;
                sector_size: number;
                label: string;
                subsystem: string;
            }>,
        );

        static ['new'](
            data_alignment: number,
            data_device: string | null,
            integrity: string | null,
            sector_size: number,
            label?: string | null,
            subsystem?: string | null,
            pbkdf?: CryptoLUKSPBKDF | null,
        ): CryptoLUKSExtra;

        // Methods

        /**
         * Creates a new copy of `extra`.
         */
        copy(): CryptoLUKSExtra;
        /**
         * Frees `extra`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class CryptoLUKSInfo {
        static $gtype: GObject.GType<CryptoLUKSInfo>;

        // Fields

        version: CryptoLUKSVersion;
        cipher: string;
        mode: string;
        uuid: string;
        backing_device: string;
        sector_size: number;
        metadata_size: number;
        label: string;
        subsystem: string;
        hw_encryption: CryptoLUKSHWEncryptionType;

        // Methods

        /**
         * Creates a new copy of `info`.
         */
        copy(): CryptoLUKSInfo;
        /**
         * Frees `info`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class CryptoLUKSPBKDF {
        static $gtype: GObject.GType<CryptoLUKSPBKDF>;

        // Fields

        type: string;
        hash: string;
        max_memory_kb: number;
        iterations: number;
        time_ms: number;
        parallel_threads: number;

        // Constructors

        constructor(
            properties?: Partial<{
                type: string;
                hash: string;
                max_memory_kb: number;
                iterations: number;
                time_ms: number;
                parallel_threads: number;
            }>,
        );

        static ['new'](
            type: string | null,
            hash: string | null,
            max_memory_kb: number,
            iterations: number,
            time_ms: number,
            parallel_threads: number,
        ): CryptoLUKSPBKDF;

        // Methods

        /**
         * Creates a new copy of `pbkdf`.
         */
        copy(): CryptoLUKSPBKDF;
        /**
         * Frees `pbkdf`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class CryptoLUKSTokenInfo {
        static $gtype: GObject.GType<CryptoLUKSTokenInfo>;

        // Fields

        id: number;
        type: string;
        keyslot: number;

        // Constructors

        constructor(
            properties?: Partial<{
                id: number;
                type: string;
                keyslot: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `info`.
         */
        copy(): CryptoLUKSTokenInfo;
        /**
         * Frees `info`.
         */
        free(): void;
    }

    /**
     * See `bd_extra_arg_new()` for an example on how to construct the extra args.
     * @gir-type Struct
     */
    class ExtraArg {
        static $gtype: GObject.GType<ExtraArg>;

        // Fields

        opt: string;
        val: string;

        // Constructors

        constructor(
            properties?: Partial<{
                opt: string;
                val: string;
            }>,
        );

        static ['new'](opt: string, val: string): ExtraArg;

        // Static methods

        /**
         * Frees `args` and all its elements.
         * @param args A list of %BDExtraArg to free
         */
        static list_free(args?: ExtraArg[] | null): void;

        // Methods

        /**
         * Creates a new copy of `arg`.
         */
        copy(): ExtraArg;
        /**
         * Frees `arg`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class FSBtrfsInfo {
        static $gtype: GObject.GType<FSBtrfsInfo>;

        // Fields

        label: string;
        uuid: string;
        size: number;
        free_space: number;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                size: number;
                free_space: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): FSBtrfsInfo;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class FSExfatInfo {
        static $gtype: GObject.GType<FSExfatInfo>;

        // Fields

        label: string;
        uuid: string;
        sector_size: number;
        sector_count: number;
        cluster_count: number;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                sector_size: number;
                sector_count: number;
                cluster_count: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): FSExfatInfo;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class FSExt2Info {
        static $gtype: GObject.GType<FSExt2Info>;

        // Fields

        label: string;
        uuid: string;
        state: string;
        block_size: number;
        block_count: number;
        free_blocks: number;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                state: string;
                block_size: number;
                block_count: number;
                free_blocks: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): FSExt2Info;
    }

    /**
     * @gir-type Struct
     */
    class FSExt3Info {
        static $gtype: GObject.GType<FSExt3Info>;

        // Fields

        label: string;
        uuid: string;
        state: string;
        block_size: number;
        block_count: number;
        free_blocks: number;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                state: string;
                block_size: number;
                block_count: number;
                free_blocks: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): FSExt3Info;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class FSExt4Info {
        static $gtype: GObject.GType<FSExt4Info>;

        // Fields

        label: string;
        uuid: string;
        state: string;
        block_size: number;
        block_count: number;
        free_blocks: number;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                state: string;
                block_size: number;
                block_count: number;
                free_blocks: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): FSExt4Info;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class FSExtInfo {
        static $gtype: GObject.GType<FSExtInfo>;

        // Fields

        label: string;
        uuid: string;
        state: string;
        block_size: number;
        block_count: number;
        free_blocks: number;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                state: string;
                block_size: number;
                block_count: number;
                free_blocks: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class FSF2FSInfo {
        static $gtype: GObject.GType<FSF2FSInfo>;

        // Fields

        label: string;
        uuid: string;
        sector_size: number;
        sector_count: number;
        features: number;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                sector_size: number;
                sector_count: number;
                features: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): FSF2FSInfo;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class FSFeatures {
        static $gtype: GObject.GType<FSFeatures>;

        // Fields

        resize: FSResizeFlags;
        mkfs: FSMkfsOptionsFlags;
        fsck: FSFsckFlags;
        configure: FSConfigureFlags;
        features: FSFeatureFlags;
        partition_id: string;
        partition_type: string;
        min_size: number;
        max_size: number;

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): FSFeatures;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class FSMkfsOptions {
        static $gtype: GObject.GType<FSMkfsOptions>;

        // Fields

        label: string;
        uuid: string;
        dry_run: boolean;
        no_discard: boolean;
        force: boolean;
        no_pt: boolean;
        reserve: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                dry_run: boolean;
                no_discard: boolean;
                force: boolean;
                no_pt: boolean;
                reserve: Uint8Array;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): FSMkfsOptions;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class FSNILFS2Info {
        static $gtype: GObject.GType<FSNILFS2Info>;

        // Fields

        label: string;
        uuid: string;
        size: number;
        block_size: number;
        free_blocks: number;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                size: number;
                block_size: number;
                free_blocks: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): FSNILFS2Info;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class FSNtfsInfo {
        static $gtype: GObject.GType<FSNtfsInfo>;

        // Fields

        label: string;
        uuid: string;
        size: number;
        free_space: number;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                size: number;
                free_space: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): FSNtfsInfo;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class FSUdfInfo {
        static $gtype: GObject.GType<FSUdfInfo>;

        // Fields

        label: string;
        uuid: string;
        revision: string;
        lvid: string;
        vid: string;
        block_size: number;
        block_count: number;
        free_blocks: number;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                revision: string;
                lvid: string;
                vid: string;
                block_size: number;
                block_count: number;
                free_blocks: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): FSUdfInfo;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class FSVfatInfo {
        static $gtype: GObject.GType<FSVfatInfo>;

        // Fields

        label: string;
        uuid: string;
        cluster_size: number;
        cluster_count: number;
        free_cluster_count: number;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                cluster_size: number;
                cluster_count: number;
                free_cluster_count: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): FSVfatInfo;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class FSXfsInfo {
        static $gtype: GObject.GType<FSXfsInfo>;

        // Fields

        label: string;
        uuid: string;
        block_size: number;
        block_count: number;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                uuid: string;
                block_size: number;
                block_count: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): FSXfsInfo;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class LVMCacheStats {
        static $gtype: GObject.GType<LVMCacheStats>;

        // Fields

        block_size: number;
        cache_size: number;
        cache_used: number;
        md_block_size: number;
        md_size: number;
        md_used: number;
        read_hits: number;
        read_misses: number;
        write_hits: number;
        write_misses: number;
        mode: LVMCacheMode;

        // Static methods

        /**
         * Frees `data`.
         * @param data %BDLVMCacheStats to free
         */
        static free(data?: LVMLVdata | null): void;

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): LVMCacheStats;
    }

    /**
     * The `segs`, `data_lvs`, and `metadata_lvs` fields are only filled by a
     * call to bd_lvm_lvinfo_tree or bd_lvm_lvs_tree.  They are all NULL
     * normally.  If they are filled, they follow these rules:
     *
     * A LV is either stored directly on physical volumes, or is made up
     * of sub-LVs.  If it is stored on PVs, the `segs` list is non-empty
     * and the `data_lvs` and `metadata_lvs` fields are both NULL.  If it is
     * made up of sub-LVs, then `segs` is NULL, `data_lvs` is non-empty and
     * `metadata_lvs` might or might not be empty but is non-NULL.  The
     * sub-LVs contained in `data_lv` and `metadata_lv` are always included
     * in `data_lvs` and `metadata_lvs`, respectively.
     *
     * For a partial LV, the `segs` list might not be complete; i.e., the
     * sum of the sizes of the listed segments might not be equal to the
     * size reported for the LV itself.
     *
     * Also, the order of entries in `segs` must be assumed to be random;
     * it does not correspond to the order of segments in the logical
     * volume itself.
     * @gir-type Struct
     */
    class LVMLVdata {
        static $gtype: GObject.GType<LVMLVdata>;

        // Fields

        lv_name: string;
        vg_name: string;
        uuid: string;
        size: number;
        attr: string;
        segtype: string;
        origin: string;
        pool_lv: string;
        data_lv: string;
        metadata_lv: string;
        roles: string;
        move_pv: string;
        data_percent: number;
        metadata_percent: number;
        copy_percent: number;
        lv_tags: string[];
        data_lvs: string[];
        metadata_lvs: string[];
        segs: LVMSEGdata[];

        // Constructors

        constructor(
            properties?: Partial<{
                lv_name: string;
                vg_name: string;
                uuid: string;
                size: number;
                attr: string;
                segtype: string;
                origin: string;
                pool_lv: string;
                data_lv: string;
                metadata_lv: string;
                roles: string;
                move_pv: string;
                data_percent: number;
                metadata_percent: number;
                copy_percent: number;
                lv_tags: string[];
                data_lvs: string[];
                metadata_lvs: string[];
                segs: LVMSEGdata[];
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): LVMLVdata;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class LVMPVdata {
        static $gtype: GObject.GType<LVMPVdata>;

        // Fields

        pv_name: string;
        pv_uuid: string;
        pv_free: number;
        pv_size: number;
        pe_start: number;
        vg_name: string;
        vg_uuid: string;
        vg_size: number;
        vg_free: number;
        vg_extent_size: number;
        vg_extent_count: number;
        vg_free_count: number;
        vg_pv_count: number;
        pv_tags: string[];
        missing: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                pv_name: string;
                pv_uuid: string;
                pv_free: number;
                pv_size: number;
                pe_start: number;
                vg_name: string;
                vg_uuid: string;
                vg_size: number;
                vg_free: number;
                vg_extent_size: number;
                vg_extent_count: number;
                vg_free_count: number;
                vg_pv_count: number;
                pv_tags: string[];
                missing: boolean;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): LVMPVdata;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class LVMSEGdata {
        static $gtype: GObject.GType<LVMSEGdata>;

        // Fields

        size_pe: number;
        pv_start_pe: number;
        pvdev: string;

        // Constructors

        constructor(
            properties?: Partial<{
                size_pe: number;
                pv_start_pe: number;
                pvdev: string;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): LVMSEGdata;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class LVMVDOPooldata {
        static $gtype: GObject.GType<LVMVDOPooldata>;

        // Fields

        operating_mode: LVMVDOOperatingMode;
        compression_state: LVMVDOCompressionState;
        index_state: LVMVDOIndexState;
        write_policy: LVMVDOWritePolicy;
        used_size: number;
        saving_percent: number;
        index_memory_size: number;
        deduplication: boolean;
        compression: boolean;

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): LVMVDOPooldata;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class LVMVDOStats {
        static $gtype: GObject.GType<LVMVDOStats>;

        // Fields

        block_size: number;
        logical_block_size: number;
        physical_blocks: number;
        data_blocks_used: number;
        overhead_blocks_used: number;
        logical_blocks_used: number;
        used_percent: number;
        saving_percent: number;
        write_amplification_ratio: number;

        // Constructors

        constructor(
            properties?: Partial<{
                block_size: number;
                logical_block_size: number;
                physical_blocks: number;
                data_blocks_used: number;
                overhead_blocks_used: number;
                logical_blocks_used: number;
                used_percent: number;
                saving_percent: number;
                write_amplification_ratio: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `stats`.
         */
        copy(): LVMVDOStats;
        /**
         * Frees `stats`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class LVMVGdata {
        static $gtype: GObject.GType<LVMVGdata>;

        // Fields

        name: string;
        uuid: string;
        size: number;
        extent_size: number;
        extent_count: number;
        free_count: number;
        pv_count: number;
        exported: boolean;
        vg_tags: string[];

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                uuid: string;
                size: number;
                free: number;
                extent_size: number;
                extent_count: number;
                free_count: number;
                pv_count: number;
                exported: boolean;
                vg_tags: string[];
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): LVMVGdata;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class LoopInfo {
        static $gtype: GObject.GType<LoopInfo>;

        // Fields

        backing_file: string;
        offset: number;
        autoclear: boolean;
        direct_io: boolean;
        part_scan: boolean;
        read_only: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                backing_file: string;
                offset: number;
                autoclear: boolean;
                direct_io: boolean;
                part_scan: boolean;
                read_only: boolean;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `info`.
         */
        copy(): LoopInfo;
        /**
         * Frees `info`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class MDDetailData {
        static $gtype: GObject.GType<MDDetailData>;

        // Fields

        device: string;
        metadata: string;
        creation_time: string;
        level: string;
        name: string;
        array_size: number;
        use_dev_size: number;
        raid_devices: number;
        total_devices: number;
        active_devices: number;
        working_devices: number;
        failed_devices: number;
        spare_devices: number;
        clean: boolean;
        uuid: string;
        container: string;

        // Constructors

        constructor(
            properties?: Partial<{
                device: string;
                metadata: string;
                creation_time: string;
                level: string;
                name: string;
                array_size: number;
                use_dev_size: number;
                raid_devices: number;
                total_devices: number;
                active_devices: number;
                working_devices: number;
                failed_devices: number;
                spare_devices: number;
                clean: boolean;
                uuid: string;
                container: string;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): MDDetailData;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class MDExamineData {
        static $gtype: GObject.GType<MDExamineData>;

        // Fields

        device: string;
        level: string;
        num_devices: number;
        name: string;
        size: number;
        uuid: string;
        update_time: number;
        dev_uuid: string;
        events: number;
        metadata: string;
        chunk_size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                device: string;
                level: string;
                num_devices: number;
                name: string;
                size: number;
                uuid: string;
                update_time: number;
                dev_uuid: string;
                events: number;
                metadata: string;
                chunk_size: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): MDExamineData;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class NVDIMMNamespaceInfo {
        static $gtype: GObject.GType<NVDIMMNamespaceInfo>;

        // Fields

        dev: string;
        mode: number;
        size: number;
        uuid: string;
        sector_size: number;
        blockdev: string;
        enabled: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                dev: string;
                mode: number;
                size: number;
                uuid: string;
                sector_size: number;
                blockdev: string;
                enabled: boolean;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `info`.
         */
        copy(): NVDIMMNamespaceInfo;
        /**
         * Frees `info`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class NVMEControllerInfo {
        static $gtype: GObject.GType<NVMEControllerInfo>;

        // Fields

        pci_vendor_id: number;
        pci_subsys_vendor_id: number;
        ctrl_id: number;
        fguid: string;
        model_number: string;
        serial_number: string;
        firmware_ver: string;
        nvme_ver: string;
        features: number;
        controller_type: NVMEControllerType;
        selftest_ext_time: number;
        hmb_pref_size: number;
        hmb_min_size: number;
        size_total: number;
        size_unalloc: number;
        num_namespaces: number;
        subsysnqn: string;

        // Methods

        /**
         * Creates a new copy of `info`.
         */
        copy(): NVMEControllerInfo;
        /**
         * Frees `info`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class NVMEErrorLogEntry {
        static $gtype: GObject.GType<NVMEErrorLogEntry>;

        // Fields

        error_count: number;
        command_id: number;
        command_specific: number;
        command_status: number;
        command_error: GLib.Error;
        lba: number;
        nsid: number;
        transport_type: NVMETransportType;

        // Methods

        /**
         * Creates a new copy of `entry`.
         */
        copy(): NVMEErrorLogEntry;
        /**
         * Frees `entry`.
         */
        free(): void;
    }

    /**
     * Namespace LBA Format Data Structure.
     * @gir-type Struct
     */
    class NVMELBAFormat {
        static $gtype: GObject.GType<NVMELBAFormat>;

        // Fields

        data_size: number;
        metadata_size: number;
        relative_performance: NVMELBAFormatRelativePerformance;

        // Methods

        /**
         * Creates a new copy of `fmt`.
         */
        copy(): NVMELBAFormat;
        /**
         * Frees `fmt`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class NVMENamespaceInfo {
        static $gtype: GObject.GType<NVMENamespaceInfo>;

        // Fields

        nsid: number;
        eui64: string;
        uuid: string;
        nguid: string;
        nsize: number;
        ncap: number;
        nuse: number;
        features: number;
        format_progress_remaining: number;
        write_protected: boolean;

        // Methods

        /**
         * Creates a new copy of `info`.
         */
        copy(): NVMENamespaceInfo;
        /**
         * Frees `info`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class NVMESanitizeLog {
        static $gtype: GObject.GType<NVMESanitizeLog>;

        // Fields

        sanitize_progress: number;
        sanitize_status: NVMESanitizeStatus;
        global_data_erased: boolean;
        overwrite_passes: number;
        time_for_overwrite: number;
        time_for_block_erase: number;
        time_for_crypto_erase: number;
        time_for_overwrite_nd: number;
        time_for_block_erase_nd: number;
        time_for_crypto_erase_nd: number;

        // Methods

        /**
         * Creates a new copy of `log`.
         */
        copy(): NVMESanitizeLog;
        /**
         * Frees `log`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class NVMESelfTestLog {
        static $gtype: GObject.GType<NVMESelfTestLog>;

        // Fields

        current_operation: NVMESelfTestAction;
        current_operation_completion: number;

        // Methods

        /**
         * Creates a new copy of `log`.
         */
        copy(): NVMESelfTestLog;
        /**
         * Frees `log`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class NVMESelfTestLogEntry {
        static $gtype: GObject.GType<NVMESelfTestLogEntry>;

        // Fields

        result: NVMESelfTestResult;
        action: NVMESelfTestAction;
        segment: number;
        power_on_hours: number;
        nsid: number;
        failing_lba: number;
        status_code_error: GLib.Error;

        // Methods

        /**
         * Creates a new copy of `entry`.
         */
        copy(): NVMESelfTestLogEntry;
        /**
         * Frees `entry`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class NVMESmartLog {
        static $gtype: GObject.GType<NVMESmartLog>;

        // Fields

        critical_warning: number;
        avail_spare: number;
        spare_thresh: number;
        percent_used: number;
        total_data_read: number;
        total_data_written: number;
        ctrl_busy_time: number;
        power_cycles: number;
        power_on_hours: number;
        unsafe_shutdowns: number;
        media_errors: number;
        num_err_log_entries: number;
        temperature: number;
        temp_sensors: number[];
        wctemp: number;
        cctemp: number;
        warning_temp_time: number;
        critical_temp_time: number;

        // Constructors

        constructor(
            properties?: Partial<{
                critical_warning: number;
                avail_spare: number;
                spare_thresh: number;
                percent_used: number;
                total_data_read: number;
                total_data_written: number;
                ctrl_busy_time: number;
                power_cycles: number;
                power_on_hours: number;
                unsafe_shutdowns: number;
                media_errors: number;
                num_err_log_entries: number;
                temperature: number;
                temp_sensors: number[];
                wctemp: number;
                cctemp: number;
                warning_temp_time: number;
                critical_temp_time: number;
            }>,
        );

        // Methods

        /**
         * Creates a new copy of `log`.
         */
        copy(): NVMESmartLog;
        /**
         * Frees `log`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class PartDiskSpec {
        static $gtype: GObject.GType<PartDiskSpec>;

        // Fields

        path: string;
        table_type: PartTableType;
        size: number;
        sector_size: number;

        // Methods

        copy(): PartDiskSpec;
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class PartSpec {
        static $gtype: GObject.GType<PartSpec>;

        // Fields

        path: string;
        name: string;
        uuid: string;
        id: string;
        type_guid: string;
        type: number;
        start: number;
        size: number;
        bootable: boolean;
        attrs: number;
        type_name: string;

        // Constructors

        constructor(
            properties?: Partial<{
                path: string;
                name: string;
                uuid: string;
                id: string;
                type_guid: string;
                type: number;
                start: number;
                size: number;
                bootable: boolean;
                attrs: number;
                type_name: string;
            }>,
        );

        // Methods

        copy(): PartSpec;
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class PluginSpec {
        static $gtype: GObject.GType<PluginSpec>;

        // Fields

        name: Plugin;
        so_name: string;

        // Constructors

        constructor(name: Plugin, so_name?: string | null);

        static ['new'](name: Plugin, so_name?: string | null): PluginSpec;

        // Methods

        /**
         * Creates a new copy of `spec`.
         */
        copy(): PluginSpec;
        /**
         * Frees `spec`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class SmartATA {
        static $gtype: GObject.GType<SmartATA>;

        // Fields

        smart_supported: boolean;
        smart_enabled: boolean;
        overall_status_passed: boolean;
        offline_data_collection_status: SmartATAOfflineDataCollectionStatus;
        auto_offline_data_collection_enabled: boolean;
        offline_data_collection_completion: number;
        offline_data_collection_capabilities: number;
        self_test_status: SmartATASelfTestStatus;
        self_test_percent_remaining: number;
        self_test_polling_short: number;
        self_test_polling_extended: number;
        self_test_polling_conveyance: number;
        smart_capabilities: number;
        power_on_time: number;
        power_cycle_count: number;
        temperature: number;

        // Static methods

        /**
         * Retrieve SMART information from the drive.
         * @param device device to check.
         * @param extra extra options to pass through.
         */
        static get_info(device: string, extra?: ExtraArg[] | null): SmartATA;
        /**
         * Retrieve SMART information from the supplied data.
         * @param data binary data to parse.
         */
        static get_info_from_data(data: Uint8Array | string): SmartATA;

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): SmartATA;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class SmartATAAttribute {
        static $gtype: GObject.GType<SmartATAAttribute>;

        // Fields

        id: number;
        name: string;
        well_known_name: string;
        value: number;
        worst: number;
        threshold: number;
        failed_past: boolean;
        failing_now: boolean;
        value_raw: number;
        flags: number;
        pretty_value: number;
        pretty_value_unit: SmartATAAttributeUnit;
        pretty_value_string: string;

        // Methods

        /**
         * Creates a new copy of `attr`.
         */
        copy(): SmartATAAttribute;
        /**
         * Frees `attr`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class SmartSCSI {
        static $gtype: GObject.GType<SmartSCSI>;

        // Fields

        smart_supported: boolean;
        smart_enabled: boolean;
        overall_status_passed: boolean;
        scsi_ie: SmartSCSIInformationalException;
        scsi_ie_asc: number;
        scsi_ie_ascq: number;
        scsi_ie_string: string;
        background_scan_status: SmartSCSIBackgroundScanStatus;
        background_scan_progress: number;
        background_scan_runs: number;
        background_medium_scan_runs: number;
        read_errors_corrected_eccfast: number;
        read_errors_corrected_eccdelayed: number;
        read_errors_corrected_rereads: number;
        read_errors_corrected_total: number;
        read_errors_uncorrected: number;
        read_processed_bytes: number;
        write_errors_corrected_eccfast: number;
        write_errors_corrected_eccdelayed: number;
        write_errors_corrected_rewrites: number;
        write_errors_corrected_total: number;
        write_errors_uncorrected: number;
        write_processed_bytes: number;
        start_stop_cycle_count: number;
        start_stop_cycle_lifetime: number;
        load_unload_cycle_count: number;
        load_unload_cycle_lifetime: number;
        scsi_grown_defect_list: number;
        power_on_time: number;
        temperature_warning_enabled: boolean;
        temperature: number;
        temperature_drive_trip: number;

        // Static methods

        /**
         * Retrieve SMART information from SCSI or SAS-compliant drive.
         * @param device device to check.
         * @param extra extra options to pass through.
         */
        static get_info(device: string, extra?: ExtraArg[] | null): SmartSCSI;

        // Methods

        /**
         * Creates a new copy of `data`.
         */
        copy(): SmartSCSI;
        /**
         * Frees `data`.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class UtilsLinuxVersion {
        static $gtype: GObject.GType<UtilsLinuxVersion>;

        // Fields

        major: number;
        minor: number;
        micro: number;

        // Constructors

        constructor(
            properties?: Partial<{
                major: number;
                minor: number;
                micro: number;
            }>,
        );
    }

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

export default BlockDev;

// END
