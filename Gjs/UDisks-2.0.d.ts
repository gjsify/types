// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * UDisks-2.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace UDisks {

/**
 * Error codes for the #UDISKS_ERROR error domain and the
 * corresponding D-Bus error names.
 */
enum Error {
    /**
     * The operation failed.
     */
    FAILED,
    /**
     * The operation was cancelled.
     */
    CANCELLED,
    /**
     * The operation has already been cancelled.
     */
    ALREADY_CANCELLED,
    /**
     * Not authorized to perform the requested operation.
     */
    NOT_AUTHORIZED,
    /**
     * Like %UDISKS_ERROR_NOT_AUTHORIZED but authorization can be obtained through e.g. authentication.
     */
    NOT_AUTHORIZED_CAN_OBTAIN,
    /**
     * Like %UDISKS_ERROR_NOT_AUTHORIZED but an authentication was shown and the user dimissed it.
     */
    NOT_AUTHORIZED_DISMISSED,
    /**
     * The device is already mounted.
     */
    ALREADY_MOUNTED,
    /**
     * The device is not mounted.
     */
    NOT_MOUNTED,
    /**
     * Not permitted to use the requested option.
     */
    OPTION_NOT_PERMITTED,
    /**
     * The device is mounted by another user.
     */
    MOUNTED_BY_OTHER_USER,
    /**
     * The device is already unmounting.
     */
    ALREADY_UNMOUNTING,
    /**
     * The operation is not supported due to missing driver/tool support.
     */
    NOT_SUPPORTED,
    /**
     * The operation timed out.
     */
    TIMED_OUT,
    /**
     * The operation would wake up a disk that is in a deep-sleep state.
     */
    WOULD_WAKEUP,
    /**
     * Attempting to unmount a device that is busy.
     */
    DEVICE_BUSY,
    ISCSI_DAEMON_TRANSPORT_FAILED,
    ISCSI_HOST_NOT_FOUND,
    ISCSI_IDMB,
    ISCSI_LOGIN_FAILED,
    ISCSI_LOGIN_AUTH_FAILED,
    ISCSI_LOGIN_FATAL,
    ISCSI_LOGOUT_FAILED,
    ISCSI_NO_FIRMWARE,
    ISCSI_NO_OBJECTS_FOUND,
    ISCSI_NOT_CONNECTED,
    ISCSI_TRANSPORT_FAILED,
    ISCSI_UNKNOWN_DISCOVERY_TYPE,
}
/**
 * Flags describing a partition type.
 * @bitfield 
 */
enum PartitionTypeInfoFlags {
    /**
     * No flags set.
     */
    NONE,
    /**
     * Partition type is used for swap.
     */
    SWAP,
    /**
     * Partition type is used for RAID/LVM or similar.
     */
    RAID,
    /**
     * Partition type indicates the partition is hidden (e.g. 'dos' type 0x1b "Hidden W95 FAT32"). Note that this is not the same as user-toggleable attributs/flags for a partition.
     */
    HIDDEN,
    /**
     * Partition type can only be used when creating a partition and e.g. should not be selectable in a "change partition type" user interface (e.g. 'dos' type 0x05, 0x0f and 0x85 for extended partitions).
     */
    CREATE_ONLY,
    /**
     * Partition type indicates the partition is part of the system / bootloader (e.g. 'dos' types 0xee, 0xff, 'gpt' types for 'EFI System partition' and 'BIOS Boot partition').
     */
    SYSTEM,
}
const ERROR_NUM_ENTRIES: number
/**
 * The major version of the libudisks2 header files.
 */
const MAJOR_VERSION: number
/**
 * The micro version of the libudisks2 header files.
 */
const MICRO_VERSION: number
/**
 * The minor version of the libudisks2 header files.
 */
const MINOR_VERSION: number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link> D-Bus interface.
 */
function block_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksBlock interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function block_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link> D-Bus interface.
 */
function drive_ata_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksDriveAta interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function drive_ata_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link> D-Bus interface.
 */
function drive_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksDrive interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function drive_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link> D-Bus interface.
 */
function encrypted_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksEncrypted interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function encrypted_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
function error_quark(): GLib.Quark
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link> D-Bus interface.
 */
function filesystem_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksFilesystem interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function filesystem_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link> D-Bus interface.
 */
function job_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksJob interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function job_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link> D-Bus interface.
 */
function loop_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksLoop interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function loop_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link> D-Bus interface.
 */
function manager_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksManager interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link> D-Bus interface.
 */
function mdraid_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksMDRaid interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function mdraid_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link> D-Bus interface.
 */
function partition_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksPartition interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function partition_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link> D-Bus interface.
 */
function partition_table_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksPartitionTable interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function partition_table_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link> D-Bus interface.
 */
function swapspace_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksSwapspace interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function swapspace_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
interface Block_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Block

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Configuration">"Configuration"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    configuration?: GLib.Variant | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.CryptoBackingDevice">"CryptoBackingDevice"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    crypto_backing_device?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Device">"Device"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    device?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.DeviceNumber">"DeviceNumber"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    device_number?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Drive">"Drive"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    drive?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintAuto">"HintAuto"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_auto?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIconName">"HintIconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_icon_name?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIgnore">"HintIgnore"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_ignore?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintName">"HintName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_name?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintPartitionable">"HintPartitionable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_partitionable?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSymbolicIconName">"HintSymbolicIconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_symbolic_icon_name?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSystem">"HintSystem"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_system?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Id">"Id"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdLabel">"IdLabel"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id_label?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdType">"IdType"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id_type?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUsage">"IdUsage"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id_usage?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUUID">"IdUUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id_uuid?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdVersion">"IdVersion"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id_version?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.MDRaid">"MDRaid"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mdraid?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.MDRaidMember">"MDRaidMember"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mdraid_member?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.PreferredDevice">"PreferredDevice"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    preferred_device?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.ReadOnly">"ReadOnly"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    read_only?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Size">"Size"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    size?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Symlinks">"Symlinks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    symlinks?: string[] | null
}

/**
 * Signal callback interface for `handle-add-configuration-item`
 */
interface Block_HandleAddConfigurationItemSignalCallback {
    ($obj: Block, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-format`
 */
interface Block_HandleFormatSignalCallback {
    ($obj: Block, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-get-secret-configuration`
 */
interface Block_HandleGetSecretConfigurationSignalCallback {
    ($obj: Block, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-open-for-backup`
 */
interface Block_HandleOpenForBackupSignalCallback {
    ($obj: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-open-for-benchmark`
 */
interface Block_HandleOpenForBenchmarkSignalCallback {
    ($obj: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-open-for-restore`
 */
interface Block_HandleOpenForRestoreSignalCallback {
    ($obj: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-remove-configuration-item`
 */
interface Block_HandleRemoveConfigurationItemSignalCallback {
    ($obj: Block, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-rescan`
 */
interface Block_HandleRescanSignalCallback {
    ($obj: Block, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-update-configuration-item`
 */
interface Block_HandleUpdateConfigurationItemSignalCallback {
    ($obj: Block, invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant): boolean
}

interface Block {

    // Own properties of UDisks-2.0.UDisks.Block

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Configuration">"Configuration"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    configuration: GLib.Variant
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.CryptoBackingDevice">"CryptoBackingDevice"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    crypto_backing_device: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Device">"Device"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    device: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.DeviceNumber">"DeviceNumber"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    device_number: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Drive">"Drive"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    drive: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintAuto">"HintAuto"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_auto: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIconName">"HintIconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_icon_name: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIgnore">"HintIgnore"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_ignore: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintName">"HintName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_name: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintPartitionable">"HintPartitionable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_partitionable: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSymbolicIconName">"HintSymbolicIconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_symbolic_icon_name: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSystem">"HintSystem"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hint_system: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Id">"Id"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdLabel">"IdLabel"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id_label: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdType">"IdType"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id_type: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUsage">"IdUsage"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id_usage: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUUID">"IdUUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id_uuid: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdVersion">"IdVersion"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id_version: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.MDRaid">"MDRaid"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mdraid: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.MDRaidMember">"MDRaidMember"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mdraid_member: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.PreferredDevice">"PreferredDevice"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    preferred_device: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.ReadOnly">"ReadOnly"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    read_only: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Size">"Size"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    size: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Symlinks">"Symlinks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    symlinks: string[]

    // Owm methods of UDisks-2.0.UDisks.Block

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.AddConfigurationItem">AddConfigurationItem()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_add_configuration_item_finish() to get the result of the operation.
     * 
     * See udisks_block_call_add_configuration_item_sync() for the synchronous, blocking version of this method.
     * @param arg_item Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_add_configuration_item(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_add_configuration_item().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_add_configuration_item().
     */
    call_add_configuration_item_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.AddConfigurationItem">AddConfigurationItem()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_add_configuration_item() for the asynchronous version of this method.
     * @param arg_item Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_add_configuration_item_sync(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Format">Format()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_format_finish() to get the result of the operation.
     * 
     * See udisks_block_call_format_sync() for the synchronous, blocking version of this method.
     * @param arg_type Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_format(arg_type: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_format().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_format().
     */
    call_format_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Format">Format()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_format() for the asynchronous version of this method.
     * @param arg_type Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_format_sync(arg_type: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.GetSecretConfiguration">GetSecretConfiguration()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_get_secret_configuration_finish() to get the result of the operation.
     * 
     * See udisks_block_call_get_secret_configuration_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_secret_configuration(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_get_secret_configuration().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_get_secret_configuration().
     */
    call_get_secret_configuration_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_configuration */ GLib.Variant ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.GetSecretConfiguration">GetSecretConfiguration()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_get_secret_configuration() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_get_secret_configuration_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_configuration */ GLib.Variant ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBackup">OpenForBackup()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_open_for_backup_finish() to get the result of the operation.
     * 
     * See udisks_block_call_open_for_backup_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_open_for_backup(arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_open_for_backup().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_open_for_backup().
     */
    call_open_for_backup_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBackup">OpenForBackup()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_open_for_backup() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_open_for_backup_sync(arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBenchmark">OpenForBenchmark()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_open_for_benchmark_finish() to get the result of the operation.
     * 
     * See udisks_block_call_open_for_benchmark_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_open_for_benchmark(arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_open_for_benchmark().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_open_for_benchmark().
     */
    call_open_for_benchmark_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBenchmark">OpenForBenchmark()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_open_for_benchmark() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_open_for_benchmark_sync(arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForRestore">OpenForRestore()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_open_for_restore_finish() to get the result of the operation.
     * 
     * See udisks_block_call_open_for_restore_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_open_for_restore(arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_open_for_restore().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_open_for_restore().
     */
    call_open_for_restore_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForRestore">OpenForRestore()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_open_for_restore() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_open_for_restore_sync(arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.RemoveConfigurationItem">RemoveConfigurationItem()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_remove_configuration_item_finish() to get the result of the operation.
     * 
     * See udisks_block_call_remove_configuration_item_sync() for the synchronous, blocking version of this method.
     * @param arg_item Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_remove_configuration_item(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_remove_configuration_item().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_remove_configuration_item().
     */
    call_remove_configuration_item_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.RemoveConfigurationItem">RemoveConfigurationItem()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_remove_configuration_item() for the asynchronous version of this method.
     * @param arg_item Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_remove_configuration_item_sync(arg_item: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Rescan">Rescan()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_rescan_finish() to get the result of the operation.
     * 
     * See udisks_block_call_rescan_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_rescan(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_rescan().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_rescan().
     */
    call_rescan_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Rescan">Rescan()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_rescan() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_rescan_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.UpdateConfigurationItem">UpdateConfigurationItem()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_update_configuration_item_finish() to get the result of the operation.
     * 
     * See udisks_block_call_update_configuration_item_sync() for the synchronous, blocking version of this method.
     * @param arg_old_item Argument to pass with the method invocation.
     * @param arg_new_item Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_update_configuration_item(arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_update_configuration_item().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_update_configuration_item().
     */
    call_update_configuration_item_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.UpdateConfigurationItem">UpdateConfigurationItem()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_update_configuration_item() for the asynchronous version of this method.
     * @param arg_old_item Argument to pass with the method invocation.
     * @param arg_new_item Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_update_configuration_item_sync(arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.AddConfigurationItem">AddConfigurationItem()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_add_configuration_item(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Format">Format()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_format(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.GetSecretConfiguration">GetSecretConfiguration()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param configuration Parameter to return.
     */
    complete_get_secret_configuration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBackup">OpenForBackup()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param fd Parameter to return.
     */
    complete_open_for_backup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBenchmark">OpenForBenchmark()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param fd Parameter to return.
     */
    complete_open_for_benchmark(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForRestore">OpenForRestore()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param fd Parameter to return.
     */
    complete_open_for_restore(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, fd: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.RemoveConfigurationItem">RemoveConfigurationItem()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_remove_configuration_item(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Rescan">Rescan()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_rescan(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.UpdateConfigurationItem">UpdateConfigurationItem()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_update_configuration_item(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of UDisks-2.0.UDisks.Block

    vfunc_handle_add_configuration_item(invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): boolean
    vfunc_handle_format(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
    vfunc_handle_get_secret_configuration(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_open_for_backup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant): boolean
    vfunc_handle_open_for_benchmark(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant): boolean
    vfunc_handle_open_for_restore(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant): boolean
    vfunc_handle_remove_configuration_item(invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant): boolean
    vfunc_handle_rescan(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_update_configuration_item(invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant): boolean

    // Own signals of UDisks-2.0.UDisks.Block

    connect(sigName: "handle-add-configuration-item", callback: Block_HandleAddConfigurationItemSignalCallback): number
    connect_after(sigName: "handle-add-configuration-item", callback: Block_HandleAddConfigurationItemSignalCallback): number
    emit(sigName: "handle-add-configuration-item", invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-format", callback: Block_HandleFormatSignalCallback): number
    connect_after(sigName: "handle-format", callback: Block_HandleFormatSignalCallback): number
    emit(sigName: "handle-format", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-get-secret-configuration", callback: Block_HandleGetSecretConfigurationSignalCallback): number
    connect_after(sigName: "handle-get-secret-configuration", callback: Block_HandleGetSecretConfigurationSignalCallback): number
    emit(sigName: "handle-get-secret-configuration", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-open-for-backup", callback: Block_HandleOpenForBackupSignalCallback): number
    connect_after(sigName: "handle-open-for-backup", callback: Block_HandleOpenForBackupSignalCallback): number
    emit(sigName: "handle-open-for-backup", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-open-for-benchmark", callback: Block_HandleOpenForBenchmarkSignalCallback): number
    connect_after(sigName: "handle-open-for-benchmark", callback: Block_HandleOpenForBenchmarkSignalCallback): number
    emit(sigName: "handle-open-for-benchmark", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-open-for-restore", callback: Block_HandleOpenForRestoreSignalCallback): number
    connect_after(sigName: "handle-open-for-restore", callback: Block_HandleOpenForRestoreSignalCallback): number
    emit(sigName: "handle-open-for-restore", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-remove-configuration-item", callback: Block_HandleRemoveConfigurationItemSignalCallback): number
    connect_after(sigName: "handle-remove-configuration-item", callback: Block_HandleRemoveConfigurationItemSignalCallback): number
    emit(sigName: "handle-remove-configuration-item", invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-rescan", callback: Block_HandleRescanSignalCallback): number
    connect_after(sigName: "handle-rescan", callback: Block_HandleRescanSignalCallback): number
    emit(sigName: "handle-rescan", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-update-configuration-item", callback: Block_HandleUpdateConfigurationItemSignalCallback): number
    connect_after(sigName: "handle-update-configuration-item", callback: Block_HandleUpdateConfigurationItemSignalCallback): number
    emit(sigName: "handle-update-configuration-item", invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Block

    connect(sigName: "notify::configuration", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::configuration", ...args: any[]): void
    connect(sigName: "notify::crypto-backing-device", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crypto-backing-device", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::crypto-backing-device", ...args: any[]): void
    connect(sigName: "notify::device", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::device-number", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-number", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-number", ...args: any[]): void
    connect(sigName: "notify::drive", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drive", ...args: any[]): void
    connect(sigName: "notify::hint-auto", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-auto", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-auto", ...args: any[]): void
    connect(sigName: "notify::hint-icon-name", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-icon-name", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-icon-name", ...args: any[]): void
    connect(sigName: "notify::hint-ignore", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-ignore", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-ignore", ...args: any[]): void
    connect(sigName: "notify::hint-name", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-name", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-name", ...args: any[]): void
    connect(sigName: "notify::hint-partitionable", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-partitionable", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-partitionable", ...args: any[]): void
    connect(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-symbolic-icon-name", ...args: any[]): void
    connect(sigName: "notify::hint-system", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-system", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-system", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::id-label", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-label", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-label", ...args: any[]): void
    connect(sigName: "notify::id-type", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-type", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-type", ...args: any[]): void
    connect(sigName: "notify::id-usage", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-usage", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-usage", ...args: any[]): void
    connect(sigName: "notify::id-uuid", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-uuid", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-uuid", ...args: any[]): void
    connect(sigName: "notify::id-version", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-version", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-version", ...args: any[]): void
    connect(sigName: "notify::mdraid", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mdraid", ...args: any[]): void
    connect(sigName: "notify::mdraid-member", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid-member", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mdraid-member", ...args: any[]): void
    connect(sigName: "notify::preferred-device", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-device", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preferred-device", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::symlinks", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symlinks", callback: (($obj: Block, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::symlinks", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link>.
 * @interface 
 */
class Block extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.Block

    static name: string
    static $gtype: GObject.GType<Block>

    // Constructors of UDisks-2.0.UDisks.Block

    constructor(config?: Block_ConstructProps) 
    _init(config?: Block_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksBlock interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface Drive_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Drive

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.CanPowerOff">"CanPowerOff"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    can_power_off?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Configuration">"Configuration"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    configuration?: GLib.Variant | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.ConnectionBus">"ConnectionBus"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    connection_bus?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Ejectable">"Ejectable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    ejectable?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Id">"Id"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Media">"Media"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    media?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaAvailable">"MediaAvailable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    media_available?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaChangeDetected">"MediaChangeDetected"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    media_change_detected?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaCompatibility">"MediaCompatibility"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    media_compatibility?: string[] | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaRemovable">"MediaRemovable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    media_removable?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Model">"Model"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    model?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Optical">"Optical"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    optical?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalBlank">"OpticalBlank"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    optical_blank?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumAudioTracks">"OpticalNumAudioTracks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    optical_num_audio_tracks?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumDataTracks">"OpticalNumDataTracks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    optical_num_data_tracks?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumSessions">"OpticalNumSessions"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    optical_num_sessions?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumTracks">"OpticalNumTracks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    optical_num_tracks?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Removable">"Removable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    removable?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Revision">"Revision"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    revision?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.RotationRate">"RotationRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    rotation_rate?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Seat">"Seat"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    seat?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Serial">"Serial"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    serial?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SiblingId">"SiblingId"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    sibling_id?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Size">"Size"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    size?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SortKey">"SortKey"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    sort_key?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeDetected">"TimeDetected"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    time_detected?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeMediaDetected">"TimeMediaDetected"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    time_media_detected?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Vendor">"Vendor"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    vendor?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.WWN">"WWN"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    wwn?: string | null
}

/**
 * Signal callback interface for `handle-eject`
 */
interface Drive_HandleEjectSignalCallback {
    ($obj: Drive, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-power-off`
 */
interface Drive_HandlePowerOffSignalCallback {
    ($obj: Drive, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-configuration`
 */
interface Drive_HandleSetConfigurationSignalCallback {
    ($obj: Drive, invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant): boolean
}

interface Drive {

    // Own properties of UDisks-2.0.UDisks.Drive

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.CanPowerOff">"CanPowerOff"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    can_power_off: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Configuration">"Configuration"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    configuration: GLib.Variant
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.ConnectionBus">"ConnectionBus"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    connection_bus: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Ejectable">"Ejectable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    ejectable: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Id">"Id"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Media">"Media"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    media: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaAvailable">"MediaAvailable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    media_available: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaChangeDetected">"MediaChangeDetected"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    media_change_detected: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaCompatibility">"MediaCompatibility"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    media_compatibility: string[]
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaRemovable">"MediaRemovable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    media_removable: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Model">"Model"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    model: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Optical">"Optical"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    optical: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalBlank">"OpticalBlank"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    optical_blank: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumAudioTracks">"OpticalNumAudioTracks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    optical_num_audio_tracks: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumDataTracks">"OpticalNumDataTracks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    optical_num_data_tracks: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumSessions">"OpticalNumSessions"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    optical_num_sessions: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumTracks">"OpticalNumTracks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    optical_num_tracks: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Removable">"Removable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    removable: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Revision">"Revision"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    revision: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.RotationRate">"RotationRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    rotation_rate: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Seat">"Seat"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    seat: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Serial">"Serial"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    serial: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SiblingId">"SiblingId"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    sibling_id: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Size">"Size"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    size: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SortKey">"SortKey"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    sort_key: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeDetected">"TimeDetected"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    time_detected: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeMediaDetected">"TimeMediaDetected"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    time_media_detected: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Vendor">"Vendor"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    vendor: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.WWN">"WWN"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    wwn: string

    // Owm methods of UDisks-2.0.UDisks.Drive

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.Eject">Eject()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_call_eject_finish() to get the result of the operation.
     * 
     * See udisks_drive_call_eject_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_eject(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_call_eject().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_call_eject().
     */
    call_eject_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.Eject">Eject()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_call_eject() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_eject_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.PowerOff">PowerOff()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_call_power_off_finish() to get the result of the operation.
     * 
     * See udisks_drive_call_power_off_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_power_off(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_call_power_off().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_call_power_off().
     */
    call_power_off_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.PowerOff">PowerOff()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_call_power_off() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_power_off_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.SetConfiguration">SetConfiguration()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_call_set_configuration_finish() to get the result of the operation.
     * 
     * See udisks_drive_call_set_configuration_sync() for the synchronous, blocking version of this method.
     * @param arg_value Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_set_configuration(arg_value: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_call_set_configuration().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_call_set_configuration().
     */
    call_set_configuration_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.SetConfiguration">SetConfiguration()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_call_set_configuration() for the asynchronous version of this method.
     * @param arg_value Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_set_configuration_sync(arg_value: GLib.Variant, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.Eject">Eject()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_eject(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.PowerOff">PowerOff()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_power_off(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.SetConfiguration">SetConfiguration()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_set_configuration(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of UDisks-2.0.UDisks.Drive

    vfunc_handle_eject(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_power_off(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_configuration(invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant): boolean

    // Own signals of UDisks-2.0.UDisks.Drive

    connect(sigName: "handle-eject", callback: Drive_HandleEjectSignalCallback): number
    connect_after(sigName: "handle-eject", callback: Drive_HandleEjectSignalCallback): number
    emit(sigName: "handle-eject", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-power-off", callback: Drive_HandlePowerOffSignalCallback): number
    connect_after(sigName: "handle-power-off", callback: Drive_HandlePowerOffSignalCallback): number
    emit(sigName: "handle-power-off", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-configuration", callback: Drive_HandleSetConfigurationSignalCallback): number
    connect_after(sigName: "handle-set-configuration", callback: Drive_HandleSetConfigurationSignalCallback): number
    emit(sigName: "handle-set-configuration", invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Drive

    connect(sigName: "notify::can-power-off", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-power-off", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-power-off", ...args: any[]): void
    connect(sigName: "notify::configuration", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::configuration", ...args: any[]): void
    connect(sigName: "notify::connection-bus", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-bus", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection-bus", ...args: any[]): void
    connect(sigName: "notify::ejectable", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ejectable", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ejectable", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::media", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media", ...args: any[]): void
    connect(sigName: "notify::media-available", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-available", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-available", ...args: any[]): void
    connect(sigName: "notify::media-change-detected", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-change-detected", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-change-detected", ...args: any[]): void
    connect(sigName: "notify::media-compatibility", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-compatibility", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-compatibility", ...args: any[]): void
    connect(sigName: "notify::media-removable", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-removable", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-removable", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::optical", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical", ...args: any[]): void
    connect(sigName: "notify::optical-blank", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-blank", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-blank", ...args: any[]): void
    connect(sigName: "notify::optical-num-audio-tracks", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-audio-tracks", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-num-audio-tracks", ...args: any[]): void
    connect(sigName: "notify::optical-num-data-tracks", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-data-tracks", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-num-data-tracks", ...args: any[]): void
    connect(sigName: "notify::optical-num-sessions", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-sessions", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-num-sessions", ...args: any[]): void
    connect(sigName: "notify::optical-num-tracks", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-tracks", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-num-tracks", ...args: any[]): void
    connect(sigName: "notify::removable", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removable", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::removable", ...args: any[]): void
    connect(sigName: "notify::revision", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::revision", ...args: any[]): void
    connect(sigName: "notify::rotation-rate", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-rate", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-rate", ...args: any[]): void
    connect(sigName: "notify::seat", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::sibling-id", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sibling-id", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sibling-id", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sort-key", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-key", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-key", ...args: any[]): void
    connect(sigName: "notify::time-detected", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-detected", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-detected", ...args: any[]): void
    connect(sigName: "notify::time-media-detected", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-media-detected", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-media-detected", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::wwn", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wwn", callback: (($obj: Drive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wwn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link>.
 * @interface 
 */
class Drive extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.Drive

    static name: string
    static $gtype: GObject.GType<Drive>

    // Constructors of UDisks-2.0.UDisks.Drive

    constructor(config?: Drive_ConstructProps) 
    _init(config?: Drive_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksDrive interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface DriveAta_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.DriveAta

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamEnabled">"AamEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    aam_enabled?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamSupported">"AamSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    aam_supported?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamVendorRecommendedValue">"AamVendorRecommendedValue"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    aam_vendor_recommended_value?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmEnabled">"ApmEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    apm_enabled?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmSupported">"ApmSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    apm_supported?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmEnabled">"PmEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    pm_enabled?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmSupported">"PmSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    pm_supported?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadEnabled">"ReadLookaheadEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    read_lookahead_enabled?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadSupported">"ReadLookaheadSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    read_lookahead_supported?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEnhancedEraseUnitMinutes">"SecurityEnhancedEraseUnitMinutes"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    security_enhanced_erase_unit_minutes?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnitMinutes">"SecurityEraseUnitMinutes"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    security_erase_unit_minutes?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityFrozen">"SecurityFrozen"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    security_frozen?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartEnabled">"SmartEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_enabled?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartFailing">"SmartFailing"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_failing?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailedInThePast">"SmartNumAttributesFailedInThePast"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_num_attributes_failed_in_the_past?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailing">"SmartNumAttributesFailing"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_num_attributes_failing?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumBadSectors">"SmartNumBadSectors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_num_bad_sectors?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartPowerOnSeconds">"SmartPowerOnSeconds"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_power_on_seconds?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestPercentRemaining">"SmartSelftestPercentRemaining"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_selftest_percent_remaining?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStatus">"SmartSelftestStatus"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_selftest_status?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSupported">"SmartSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_supported?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartTemperature">"SmartTemperature"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_temperature?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartUpdated">"SmartUpdated"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_updated?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheEnabled">"WriteCacheEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    write_cache_enabled?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheSupported">"WriteCacheSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    write_cache_supported?: boolean | null
}

/**
 * Signal callback interface for `handle-pm-get-state`
 */
interface DriveAta_HandlePmGetStateSignalCallback {
    ($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-pm-standby`
 */
interface DriveAta_HandlePmStandbySignalCallback {
    ($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-pm-wakeup`
 */
interface DriveAta_HandlePmWakeupSignalCallback {
    ($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-security-erase-unit`
 */
interface DriveAta_HandleSecurityEraseUnitSignalCallback {
    ($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-smart-get-attributes`
 */
interface DriveAta_HandleSmartGetAttributesSignalCallback {
    ($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-smart-selftest-abort`
 */
interface DriveAta_HandleSmartSelftestAbortSignalCallback {
    ($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-smart-selftest-start`
 */
interface DriveAta_HandleSmartSelftestStartSignalCallback {
    ($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-smart-set-enabled`
 */
interface DriveAta_HandleSmartSetEnabledSignalCallback {
    ($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-smart-update`
 */
interface DriveAta_HandleSmartUpdateSignalCallback {
    ($obj: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

interface DriveAta {

    // Own properties of UDisks-2.0.UDisks.DriveAta

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamEnabled">"AamEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    aam_enabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamSupported">"AamSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    aam_supported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamVendorRecommendedValue">"AamVendorRecommendedValue"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    aam_vendor_recommended_value: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmEnabled">"ApmEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    apm_enabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmSupported">"ApmSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    apm_supported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmEnabled">"PmEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    pm_enabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmSupported">"PmSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    pm_supported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadEnabled">"ReadLookaheadEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    read_lookahead_enabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadSupported">"ReadLookaheadSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    read_lookahead_supported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEnhancedEraseUnitMinutes">"SecurityEnhancedEraseUnitMinutes"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    security_enhanced_erase_unit_minutes: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnitMinutes">"SecurityEraseUnitMinutes"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    security_erase_unit_minutes: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityFrozen">"SecurityFrozen"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    security_frozen: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartEnabled">"SmartEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_enabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartFailing">"SmartFailing"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_failing: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailedInThePast">"SmartNumAttributesFailedInThePast"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_num_attributes_failed_in_the_past: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailing">"SmartNumAttributesFailing"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_num_attributes_failing: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumBadSectors">"SmartNumBadSectors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_num_bad_sectors: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartPowerOnSeconds">"SmartPowerOnSeconds"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_power_on_seconds: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestPercentRemaining">"SmartSelftestPercentRemaining"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_selftest_percent_remaining: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStatus">"SmartSelftestStatus"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_selftest_status: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSupported">"SmartSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_supported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartTemperature">"SmartTemperature"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_temperature: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartUpdated">"SmartUpdated"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smart_updated: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheEnabled">"WriteCacheEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    write_cache_enabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheSupported">"WriteCacheSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    write_cache_supported: boolean

    // Owm methods of UDisks-2.0.UDisks.DriveAta

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmGetState">PmGetState()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_pm_get_state_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_pm_get_state_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_pm_get_state(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_pm_get_state().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_pm_get_state().
     */
    call_pm_get_state_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_state */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmGetState">PmGetState()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_pm_get_state() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_pm_get_state_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_state */ number ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmStandby">PmStandby()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_pm_standby_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_pm_standby_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_pm_standby(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_pm_standby().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_pm_standby().
     */
    call_pm_standby_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmStandby">PmStandby()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_pm_standby() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_pm_standby_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmWakeup">PmWakeup()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_pm_wakeup_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_pm_wakeup_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_pm_wakeup(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_pm_wakeup().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_pm_wakeup().
     */
    call_pm_wakeup_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmWakeup">PmWakeup()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_pm_wakeup() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_pm_wakeup_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnit">SecurityEraseUnit()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_security_erase_unit_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_security_erase_unit_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_security_erase_unit(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_security_erase_unit().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_security_erase_unit().
     */
    call_security_erase_unit_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnit">SecurityEraseUnit()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_security_erase_unit() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_security_erase_unit_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartGetAttributes">SmartGetAttributes()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_smart_get_attributes_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_smart_get_attributes_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_smart_get_attributes(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_smart_get_attributes().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_get_attributes().
     */
    call_smart_get_attributes_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_attributes */ GLib.Variant ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartGetAttributes">SmartGetAttributes()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_smart_get_attributes() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_smart_get_attributes_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_attributes */ GLib.Variant ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestAbort">SmartSelftestAbort()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_smart_selftest_abort_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_smart_selftest_abort_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_smart_selftest_abort(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_smart_selftest_abort().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_selftest_abort().
     */
    call_smart_selftest_abort_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestAbort">SmartSelftestAbort()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_smart_selftest_abort() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_smart_selftest_abort_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStart">SmartSelftestStart()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_smart_selftest_start_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_smart_selftest_start_sync() for the synchronous, blocking version of this method.
     * @param arg_type Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_smart_selftest_start(arg_type: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_smart_selftest_start().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_selftest_start().
     */
    call_smart_selftest_start_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStart">SmartSelftestStart()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_smart_selftest_start() for the asynchronous version of this method.
     * @param arg_type Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_smart_selftest_start_sync(arg_type: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSetEnabled">SmartSetEnabled()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_smart_set_enabled_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_smart_set_enabled_sync() for the synchronous, blocking version of this method.
     * @param arg_value Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_smart_set_enabled(arg_value: boolean, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_smart_set_enabled().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_set_enabled().
     */
    call_smart_set_enabled_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSetEnabled">SmartSetEnabled()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_smart_set_enabled() for the asynchronous version of this method.
     * @param arg_value Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_smart_set_enabled_sync(arg_value: boolean, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartUpdate">SmartUpdate()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_smart_update_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_smart_update_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_smart_update(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_smart_update().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_update().
     */
    call_smart_update_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartUpdate">SmartUpdate()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_smart_update() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_smart_update_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmGetState">PmGetState()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param state Parameter to return.
     */
    complete_pm_get_state(invocation: Gio.DBusMethodInvocation, state: number): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmStandby">PmStandby()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_pm_standby(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmWakeup">PmWakeup()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_pm_wakeup(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnit">SecurityEraseUnit()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_security_erase_unit(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartGetAttributes">SmartGetAttributes()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param attributes Parameter to return.
     */
    complete_smart_get_attributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestAbort">SmartSelftestAbort()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_smart_selftest_abort(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStart">SmartSelftestStart()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_smart_selftest_start(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSetEnabled">SmartSetEnabled()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_smart_set_enabled(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartUpdate">SmartUpdate()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_smart_update(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of UDisks-2.0.UDisks.DriveAta

    vfunc_handle_pm_get_state(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_pm_standby(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_pm_wakeup(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_security_erase_unit(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_get_attributes(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_selftest_abort(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_selftest_start(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_set_enabled(invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): boolean
    vfunc_handle_smart_update(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean

    // Own signals of UDisks-2.0.UDisks.DriveAta

    connect(sigName: "handle-pm-get-state", callback: DriveAta_HandlePmGetStateSignalCallback): number
    connect_after(sigName: "handle-pm-get-state", callback: DriveAta_HandlePmGetStateSignalCallback): number
    emit(sigName: "handle-pm-get-state", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-pm-standby", callback: DriveAta_HandlePmStandbySignalCallback): number
    connect_after(sigName: "handle-pm-standby", callback: DriveAta_HandlePmStandbySignalCallback): number
    emit(sigName: "handle-pm-standby", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-pm-wakeup", callback: DriveAta_HandlePmWakeupSignalCallback): number
    connect_after(sigName: "handle-pm-wakeup", callback: DriveAta_HandlePmWakeupSignalCallback): number
    emit(sigName: "handle-pm-wakeup", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-security-erase-unit", callback: DriveAta_HandleSecurityEraseUnitSignalCallback): number
    connect_after(sigName: "handle-security-erase-unit", callback: DriveAta_HandleSecurityEraseUnitSignalCallback): number
    emit(sigName: "handle-security-erase-unit", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-smart-get-attributes", callback: DriveAta_HandleSmartGetAttributesSignalCallback): number
    connect_after(sigName: "handle-smart-get-attributes", callback: DriveAta_HandleSmartGetAttributesSignalCallback): number
    emit(sigName: "handle-smart-get-attributes", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-smart-selftest-abort", callback: DriveAta_HandleSmartSelftestAbortSignalCallback): number
    connect_after(sigName: "handle-smart-selftest-abort", callback: DriveAta_HandleSmartSelftestAbortSignalCallback): number
    emit(sigName: "handle-smart-selftest-abort", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-smart-selftest-start", callback: DriveAta_HandleSmartSelftestStartSignalCallback): number
    connect_after(sigName: "handle-smart-selftest-start", callback: DriveAta_HandleSmartSelftestStartSignalCallback): number
    emit(sigName: "handle-smart-selftest-start", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-smart-set-enabled", callback: DriveAta_HandleSmartSetEnabledSignalCallback): number
    connect_after(sigName: "handle-smart-set-enabled", callback: DriveAta_HandleSmartSetEnabledSignalCallback): number
    emit(sigName: "handle-smart-set-enabled", invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-smart-update", callback: DriveAta_HandleSmartUpdateSignalCallback): number
    connect_after(sigName: "handle-smart-update", callback: DriveAta_HandleSmartUpdateSignalCallback): number
    emit(sigName: "handle-smart-update", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.DriveAta

    connect(sigName: "notify::aam-enabled", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-enabled", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::aam-enabled", ...args: any[]): void
    connect(sigName: "notify::aam-supported", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-supported", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::aam-supported", ...args: any[]): void
    connect(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::aam-vendor-recommended-value", ...args: any[]): void
    connect(sigName: "notify::apm-enabled", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-enabled", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::apm-enabled", ...args: any[]): void
    connect(sigName: "notify::apm-supported", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-supported", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::apm-supported", ...args: any[]): void
    connect(sigName: "notify::pm-enabled", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-enabled", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pm-enabled", ...args: any[]): void
    connect(sigName: "notify::pm-supported", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-supported", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pm-supported", ...args: any[]): void
    connect(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-lookahead-enabled", ...args: any[]): void
    connect(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-lookahead-supported", ...args: any[]): void
    connect(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::security-enhanced-erase-unit-minutes", ...args: any[]): void
    connect(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::security-erase-unit-minutes", ...args: any[]): void
    connect(sigName: "notify::security-frozen", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-frozen", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::security-frozen", ...args: any[]): void
    connect(sigName: "notify::smart-enabled", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-enabled", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-enabled", ...args: any[]): void
    connect(sigName: "notify::smart-failing", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-failing", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-failing", ...args: any[]): void
    connect(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-num-attributes-failed-in-the-past", ...args: any[]): void
    connect(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-num-attributes-failing", ...args: any[]): void
    connect(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-num-bad-sectors", ...args: any[]): void
    connect(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-power-on-seconds", ...args: any[]): void
    connect(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-selftest-percent-remaining", ...args: any[]): void
    connect(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-selftest-status", ...args: any[]): void
    connect(sigName: "notify::smart-supported", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-supported", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-supported", ...args: any[]): void
    connect(sigName: "notify::smart-temperature", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-temperature", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-temperature", ...args: any[]): void
    connect(sigName: "notify::smart-updated", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-updated", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-updated", ...args: any[]): void
    connect(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::write-cache-enabled", ...args: any[]): void
    connect(sigName: "notify::write-cache-supported", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-supported", callback: (($obj: DriveAta, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::write-cache-supported", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>.
 * @interface 
 */
class DriveAta extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.DriveAta

    static name: string
    static $gtype: GObject.GType<DriveAta>

    // Constructors of UDisks-2.0.UDisks.DriveAta

    constructor(config?: DriveAta_ConstructProps) 
    _init(config?: DriveAta_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksDriveAta interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface Encrypted_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Encrypted

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.ChildConfiguration">"ChildConfiguration"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    child_configuration?: GLib.Variant | null
}

/**
 * Signal callback interface for `handle-change-passphrase`
 */
interface Encrypted_HandleChangePassphraseSignalCallback {
    ($obj: Encrypted, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-lock`
 */
interface Encrypted_HandleLockSignalCallback {
    ($obj: Encrypted, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-unlock`
 */
interface Encrypted_HandleUnlockSignalCallback {
    ($obj: Encrypted, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant): boolean
}

interface Encrypted {

    // Own properties of UDisks-2.0.UDisks.Encrypted

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.ChildConfiguration">"ChildConfiguration"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    child_configuration: GLib.Variant

    // Owm methods of UDisks-2.0.UDisks.Encrypted

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.ChangePassphrase">ChangePassphrase()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_encrypted_call_change_passphrase_finish() to get the result of the operation.
     * 
     * See udisks_encrypted_call_change_passphrase_sync() for the synchronous, blocking version of this method.
     * @param arg_passphrase Argument to pass with the method invocation.
     * @param arg_new_passphrase Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_change_passphrase(arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_encrypted_call_change_passphrase().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_call_change_passphrase().
     */
    call_change_passphrase_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.ChangePassphrase">ChangePassphrase()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_encrypted_call_change_passphrase() for the asynchronous version of this method.
     * @param arg_passphrase Argument to pass with the method invocation.
     * @param arg_new_passphrase Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_change_passphrase_sync(arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Lock">Lock()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_encrypted_call_lock_finish() to get the result of the operation.
     * 
     * See udisks_encrypted_call_lock_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_lock(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_encrypted_call_lock().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_call_lock().
     */
    call_lock_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Lock">Lock()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_encrypted_call_lock() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_lock_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Unlock">Unlock()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_encrypted_call_unlock_finish() to get the result of the operation.
     * 
     * See udisks_encrypted_call_unlock_sync() for the synchronous, blocking version of this method.
     * @param arg_passphrase Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_unlock(arg_passphrase: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_encrypted_call_unlock().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_call_unlock().
     */
    call_unlock_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_cleartext_device */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Unlock">Unlock()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_encrypted_call_unlock() for the asynchronous version of this method.
     * @param arg_passphrase Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_unlock_sync(arg_passphrase: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_cleartext_device */ string ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.ChangePassphrase">ChangePassphrase()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_change_passphrase(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Lock">Lock()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_lock(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Unlock">Unlock()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param cleartext_device Parameter to return.
     */
    complete_unlock(invocation: Gio.DBusMethodInvocation, cleartext_device: string): void

    // Own virtual methods of UDisks-2.0.UDisks.Encrypted

    vfunc_handle_change_passphrase(invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant): boolean
    vfunc_handle_lock(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_unlock(invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant): boolean

    // Own signals of UDisks-2.0.UDisks.Encrypted

    connect(sigName: "handle-change-passphrase", callback: Encrypted_HandleChangePassphraseSignalCallback): number
    connect_after(sigName: "handle-change-passphrase", callback: Encrypted_HandleChangePassphraseSignalCallback): number
    emit(sigName: "handle-change-passphrase", invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-lock", callback: Encrypted_HandleLockSignalCallback): number
    connect_after(sigName: "handle-lock", callback: Encrypted_HandleLockSignalCallback): number
    emit(sigName: "handle-lock", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-unlock", callback: Encrypted_HandleUnlockSignalCallback): number
    connect_after(sigName: "handle-unlock", callback: Encrypted_HandleUnlockSignalCallback): number
    emit(sigName: "handle-unlock", invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Encrypted

    connect(sigName: "notify::child-configuration", callback: (($obj: Encrypted, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: Encrypted, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-configuration", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link>.
 * @interface 
 */
class Encrypted extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.Encrypted

    static name: string
    static $gtype: GObject.GType<Encrypted>

    // Constructors of UDisks-2.0.UDisks.Encrypted

    constructor(config?: Encrypted_ConstructProps) 
    _init(config?: Encrypted_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksEncrypted interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface Filesystem_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Filesystem

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem.MountPoints">"MountPoints"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mount_points?: string[] | null
}

/**
 * Signal callback interface for `handle-mount`
 */
interface Filesystem_HandleMountSignalCallback {
    ($obj: Filesystem, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-label`
 */
interface Filesystem_HandleSetLabelSignalCallback {
    ($obj: Filesystem, invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-unmount`
 */
interface Filesystem_HandleUnmountSignalCallback {
    ($obj: Filesystem, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

interface Filesystem {

    // Own properties of UDisks-2.0.UDisks.Filesystem

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem.MountPoints">"MountPoints"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mount_points: string[]

    // Owm methods of UDisks-2.0.UDisks.Filesystem

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Mount">Mount()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_filesystem_call_mount_finish() to get the result of the operation.
     * 
     * See udisks_filesystem_call_mount_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_mount(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_filesystem_call_mount().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_mount().
     */
    call_mount_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_mount_path */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Mount">Mount()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_filesystem_call_mount() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_mount_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_mount_path */ string ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetLabel">SetLabel()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_filesystem_call_set_label_finish() to get the result of the operation.
     * 
     * See udisks_filesystem_call_set_label_sync() for the synchronous, blocking version of this method.
     * @param arg_label Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_set_label(arg_label: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_filesystem_call_set_label().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_set_label().
     */
    call_set_label_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetLabel">SetLabel()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_filesystem_call_set_label() for the asynchronous version of this method.
     * @param arg_label Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_set_label_sync(arg_label: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Unmount">Unmount()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_filesystem_call_unmount_finish() to get the result of the operation.
     * 
     * See udisks_filesystem_call_unmount_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_unmount(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_filesystem_call_unmount().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_unmount().
     */
    call_unmount_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Unmount">Unmount()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_filesystem_call_unmount() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_unmount_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Mount">Mount()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param mount_path Parameter to return.
     */
    complete_mount(invocation: Gio.DBusMethodInvocation, mount_path: string): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetLabel">SetLabel()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_set_label(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Unmount">Unmount()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_unmount(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of UDisks-2.0.UDisks.Filesystem

    vfunc_handle_mount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_label(invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant): boolean
    vfunc_handle_unmount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean

    // Own signals of UDisks-2.0.UDisks.Filesystem

    connect(sigName: "handle-mount", callback: Filesystem_HandleMountSignalCallback): number
    connect_after(sigName: "handle-mount", callback: Filesystem_HandleMountSignalCallback): number
    emit(sigName: "handle-mount", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-label", callback: Filesystem_HandleSetLabelSignalCallback): number
    connect_after(sigName: "handle-set-label", callback: Filesystem_HandleSetLabelSignalCallback): number
    emit(sigName: "handle-set-label", invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-unmount", callback: Filesystem_HandleUnmountSignalCallback): number
    connect_after(sigName: "handle-unmount", callback: Filesystem_HandleUnmountSignalCallback): number
    emit(sigName: "handle-unmount", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Filesystem

    connect(sigName: "notify::mount-points", callback: (($obj: Filesystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: Filesystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mount-points", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link>.
 * @interface 
 */
class Filesystem extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.Filesystem

    static name: string
    static $gtype: GObject.GType<Filesystem>

    // Constructors of UDisks-2.0.UDisks.Filesystem

    constructor(config?: Filesystem_ConstructProps) 
    _init(config?: Filesystem_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksFilesystem interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface Job_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Job

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Bytes">"Bytes"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    bytes?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Cancelable">"Cancelable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    cancelable?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ExpectedEndTime">"ExpectedEndTime"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    expected_end_time?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Objects">"Objects"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    objects?: string[] | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Operation">"Operation"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    operation?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Progress">"Progress"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    progress?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ProgressValid">"ProgressValid"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    progress_valid?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Rate">"Rate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    rate?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartTime">"StartTime"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    start_time?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartedByUID">"StartedByUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    started_by_uid?: number | null
}

/**
 * Signal callback interface for `completed`
 */
interface Job_CompletedSignalCallback {
    ($obj: Job, arg_success: boolean, arg_message: string): void
}

/**
 * Signal callback interface for `handle-cancel`
 */
interface Job_HandleCancelSignalCallback {
    ($obj: Job, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

interface Job {

    // Own properties of UDisks-2.0.UDisks.Job

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Bytes">"Bytes"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    bytes: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Cancelable">"Cancelable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    cancelable: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ExpectedEndTime">"ExpectedEndTime"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    expected_end_time: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Objects">"Objects"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    objects: string[]
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Operation">"Operation"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    operation: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Progress">"Progress"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    progress: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ProgressValid">"ProgressValid"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    progress_valid: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Rate">"Rate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    rate: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartTime">"StartTime"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    start_time: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartedByUID">"StartedByUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    started_by_uid: number

    // Owm methods of UDisks-2.0.UDisks.Job

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Job.Cancel">Cancel()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_job_call_cancel_finish() to get the result of the operation.
     * 
     * See udisks_job_call_cancel_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_cancel(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_job_call_cancel().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_job_call_cancel().
     */
    call_cancel_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Job.Cancel">Cancel()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_job_call_cancel() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_cancel_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Job.Cancel">Cancel()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_cancel(invocation: Gio.DBusMethodInvocation): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-UDisks2-Job.Completed">"Completed"</link> D-Bus signal.
     * @param arg_success Argument to pass with the signal.
     * @param arg_message Argument to pass with the signal.
     */
    emit_completed(arg_success: boolean, arg_message: string): void

    // Own virtual methods of UDisks-2.0.UDisks.Job

    vfunc_completed(arg_success: boolean, arg_message: string): void
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean

    // Own signals of UDisks-2.0.UDisks.Job

    connect(sigName: "completed", callback: Job_CompletedSignalCallback): number
    connect_after(sigName: "completed", callback: Job_CompletedSignalCallback): number
    emit(sigName: "completed", arg_success: boolean, arg_message: string, ...args: any[]): void
    connect(sigName: "handle-cancel", callback: Job_HandleCancelSignalCallback): number
    connect_after(sigName: "handle-cancel", callback: Job_HandleCancelSignalCallback): number
    emit(sigName: "handle-cancel", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Job

    connect(sigName: "notify::bytes", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bytes", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::expected-end-time", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expected-end-time", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expected-end-time", ...args: any[]): void
    connect(sigName: "notify::objects", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::objects", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::objects", ...args: any[]): void
    connect(sigName: "notify::operation", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operation", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operation", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::progress-valid", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-valid", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-valid", ...args: any[]): void
    connect(sigName: "notify::rate", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::started-by-uid", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::started-by-uid", callback: (($obj: Job, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::started-by-uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link>.
 * @interface 
 */
class Job extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.Job

    static name: string
    static $gtype: GObject.GType<Job>

    // Constructors of UDisks-2.0.UDisks.Job

    constructor(config?: Job_ConstructProps) 
    _init(config?: Job_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksJob interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface Loop_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Loop

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.Autoclear">"Autoclear"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    autoclear?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.BackingFile">"BackingFile"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    backing_file?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.SetupByUID">"SetupByUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    setup_by_uid?: number | null
}

/**
 * Signal callback interface for `handle-delete`
 */
interface Loop_HandleDeleteSignalCallback {
    ($obj: Loop, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-autoclear`
 */
interface Loop_HandleSetAutoclearSignalCallback {
    ($obj: Loop, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): boolean
}

interface Loop {

    // Own properties of UDisks-2.0.UDisks.Loop

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.Autoclear">"Autoclear"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    autoclear: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.BackingFile">"BackingFile"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    backing_file: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.SetupByUID">"SetupByUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    setup_by_uid: number

    // Owm methods of UDisks-2.0.UDisks.Loop

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.Delete">Delete()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_loop_call_delete_finish() to get the result of the operation.
     * 
     * See udisks_loop_call_delete_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_delete(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_loop_call_delete().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_loop_call_delete().
     */
    call_delete_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.Delete">Delete()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_loop_call_delete() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_delete_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.SetAutoclear">SetAutoclear()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_loop_call_set_autoclear_finish() to get the result of the operation.
     * 
     * See udisks_loop_call_set_autoclear_sync() for the synchronous, blocking version of this method.
     * @param arg_value Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_set_autoclear(arg_value: boolean, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_loop_call_set_autoclear().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_loop_call_set_autoclear().
     */
    call_set_autoclear_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.SetAutoclear">SetAutoclear()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_loop_call_set_autoclear() for the asynchronous version of this method.
     * @param arg_value Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_set_autoclear_sync(arg_value: boolean, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.Delete">Delete()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.SetAutoclear">SetAutoclear()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_set_autoclear(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of UDisks-2.0.UDisks.Loop

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_autoclear(invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant): boolean

    // Own signals of UDisks-2.0.UDisks.Loop

    connect(sigName: "handle-delete", callback: Loop_HandleDeleteSignalCallback): number
    connect_after(sigName: "handle-delete", callback: Loop_HandleDeleteSignalCallback): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-autoclear", callback: Loop_HandleSetAutoclearSignalCallback): number
    connect_after(sigName: "handle-set-autoclear", callback: Loop_HandleSetAutoclearSignalCallback): number
    emit(sigName: "handle-set-autoclear", invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Loop

    connect(sigName: "notify::autoclear", callback: (($obj: Loop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoclear", callback: (($obj: Loop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::autoclear", ...args: any[]): void
    connect(sigName: "notify::backing-file", callback: (($obj: Loop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backing-file", callback: (($obj: Loop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backing-file", ...args: any[]): void
    connect(sigName: "notify::setup-by-uid", callback: (($obj: Loop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::setup-by-uid", callback: (($obj: Loop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::setup-by-uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link>.
 * @interface 
 */
class Loop extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.Loop

    static name: string
    static $gtype: GObject.GType<Loop>

    // Constructors of UDisks-2.0.UDisks.Loop

    constructor(config?: Loop_ConstructProps) 
    _init(config?: Loop_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksLoop interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface MDRaid_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.MDRaid

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ActiveDevices">"ActiveDevices"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    active_devices?: GLib.Variant | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.BitmapLocation">"BitmapLocation"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    bitmap_location?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChildConfiguration">"ChildConfiguration"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    child_configuration?: GLib.Variant | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChunkSize">"ChunkSize"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    chunk_size?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Degraded">"Degraded"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    degraded?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Level">"Level"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    level?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Name">"Name"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    name?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.NumDevices">"NumDevices"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    num_devices?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Running">"Running"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    running?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Size">"Size"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    size?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncAction">"SyncAction"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    sync_action?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncCompleted">"SyncCompleted"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    sync_completed?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRate">"SyncRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    sync_rate?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRemainingTime">"SyncRemainingTime"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    sync_remaining_time?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.UUID">"UUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    uuid?: string | null
}

/**
 * Signal callback interface for `handle-add-device`
 */
interface MDRaid_HandleAddDeviceSignalCallback {
    ($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-delete`
 */
interface MDRaid_HandleDeleteSignalCallback {
    ($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-remove-device`
 */
interface MDRaid_HandleRemoveDeviceSignalCallback {
    ($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-request-sync-action`
 */
interface MDRaid_HandleRequestSyncActionSignalCallback {
    ($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-bitmap-location`
 */
interface MDRaid_HandleSetBitmapLocationSignalCallback {
    ($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-start`
 */
interface MDRaid_HandleStartSignalCallback {
    ($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-stop`
 */
interface MDRaid_HandleStopSignalCallback {
    ($obj: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

interface MDRaid {

    // Own properties of UDisks-2.0.UDisks.MDRaid

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ActiveDevices">"ActiveDevices"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    active_devices: GLib.Variant
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.BitmapLocation">"BitmapLocation"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    bitmap_location: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChildConfiguration">"ChildConfiguration"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    child_configuration: GLib.Variant
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChunkSize">"ChunkSize"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    chunk_size: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Degraded">"Degraded"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    degraded: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Level">"Level"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    level: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Name">"Name"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    name: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.NumDevices">"NumDevices"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    num_devices: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Running">"Running"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    running: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Size">"Size"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    size: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncAction">"SyncAction"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    sync_action: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncCompleted">"SyncCompleted"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    sync_completed: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRate">"SyncRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    sync_rate: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRemainingTime">"SyncRemainingTime"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    sync_remaining_time: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.UUID">"UUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    uuid: string

    // Owm methods of UDisks-2.0.UDisks.MDRaid

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.AddDevice">AddDevice()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_call_add_device_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_call_add_device_sync() for the synchronous, blocking version of this method.
     * @param arg_device Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_add_device(arg_device: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_add_device().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_add_device().
     */
    call_add_device_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.AddDevice">AddDevice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_add_device() for the asynchronous version of this method.
     * @param arg_device Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_add_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Delete">Delete()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_call_delete_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_call_delete_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_delete(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_delete().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_delete().
     */
    call_delete_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Delete">Delete()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_delete() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_delete_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RemoveDevice">RemoveDevice()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_call_remove_device_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_call_remove_device_sync() for the synchronous, blocking version of this method.
     * @param arg_device Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_remove_device(arg_device: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_remove_device().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_remove_device().
     */
    call_remove_device_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RemoveDevice">RemoveDevice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_remove_device() for the asynchronous version of this method.
     * @param arg_device Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_remove_device_sync(arg_device: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RequestSyncAction">RequestSyncAction()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_call_request_sync_action_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_call_request_sync_action_sync() for the synchronous, blocking version of this method.
     * @param arg_sync_action Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_request_sync_action(arg_sync_action: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_request_sync_action().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_request_sync_action().
     */
    call_request_sync_action_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RequestSyncAction">RequestSyncAction()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_request_sync_action() for the asynchronous version of this method.
     * @param arg_sync_action Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_request_sync_action_sync(arg_sync_action: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.SetBitmapLocation">SetBitmapLocation()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_call_set_bitmap_location_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_call_set_bitmap_location_sync() for the synchronous, blocking version of this method.
     * @param arg_value Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_set_bitmap_location(arg_value: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_set_bitmap_location().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_set_bitmap_location().
     */
    call_set_bitmap_location_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.SetBitmapLocation">SetBitmapLocation()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_set_bitmap_location() for the asynchronous version of this method.
     * @param arg_value Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_set_bitmap_location_sync(arg_value: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Start">Start()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_call_start_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_call_start_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_start(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_start().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_start().
     */
    call_start_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_start() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_start_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Stop">Stop()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_call_stop_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_call_stop_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_stop(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_stop().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_stop().
     */
    call_stop_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_stop() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_stop_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.AddDevice">AddDevice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_add_device(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Delete">Delete()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RemoveDevice">RemoveDevice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_remove_device(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RequestSyncAction">RequestSyncAction()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_request_sync_action(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.SetBitmapLocation">SetBitmapLocation()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_set_bitmap_location(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_start(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_stop(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of UDisks-2.0.UDisks.MDRaid

    vfunc_handle_add_device(invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): boolean
    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_remove_device(invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant): boolean
    vfunc_handle_request_sync_action(invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant): boolean
    vfunc_handle_set_bitmap_location(invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant): boolean
    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean

    // Own signals of UDisks-2.0.UDisks.MDRaid

    connect(sigName: "handle-add-device", callback: MDRaid_HandleAddDeviceSignalCallback): number
    connect_after(sigName: "handle-add-device", callback: MDRaid_HandleAddDeviceSignalCallback): number
    emit(sigName: "handle-add-device", invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-delete", callback: MDRaid_HandleDeleteSignalCallback): number
    connect_after(sigName: "handle-delete", callback: MDRaid_HandleDeleteSignalCallback): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-remove-device", callback: MDRaid_HandleRemoveDeviceSignalCallback): number
    connect_after(sigName: "handle-remove-device", callback: MDRaid_HandleRemoveDeviceSignalCallback): number
    emit(sigName: "handle-remove-device", invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-request-sync-action", callback: MDRaid_HandleRequestSyncActionSignalCallback): number
    connect_after(sigName: "handle-request-sync-action", callback: MDRaid_HandleRequestSyncActionSignalCallback): number
    emit(sigName: "handle-request-sync-action", invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-bitmap-location", callback: MDRaid_HandleSetBitmapLocationSignalCallback): number
    connect_after(sigName: "handle-set-bitmap-location", callback: MDRaid_HandleSetBitmapLocationSignalCallback): number
    emit(sigName: "handle-set-bitmap-location", invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-start", callback: MDRaid_HandleStartSignalCallback): number
    connect_after(sigName: "handle-start", callback: MDRaid_HandleStartSignalCallback): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-stop", callback: MDRaid_HandleStopSignalCallback): number
    connect_after(sigName: "handle-stop", callback: MDRaid_HandleStopSignalCallback): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.MDRaid

    connect(sigName: "notify::active-devices", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-devices", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-devices", ...args: any[]): void
    connect(sigName: "notify::bitmap-location", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitmap-location", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bitmap-location", ...args: any[]): void
    connect(sigName: "notify::child-configuration", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-configuration", ...args: any[]): void
    connect(sigName: "notify::chunk-size", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chunk-size", ...args: any[]): void
    connect(sigName: "notify::degraded", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::degraded", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::degraded", ...args: any[]): void
    connect(sigName: "notify::level", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::num-devices", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-devices", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-devices", ...args: any[]): void
    connect(sigName: "notify::running", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sync-action", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-action", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-action", ...args: any[]): void
    connect(sigName: "notify::sync-completed", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-completed", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-completed", ...args: any[]): void
    connect(sigName: "notify::sync-rate", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-rate", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-rate", ...args: any[]): void
    connect(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-remaining-time", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: MDRaid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link>.
 * @interface 
 */
class MDRaid extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.MDRaid

    static name: string
    static $gtype: GObject.GType<MDRaid>

    // Constructors of UDisks-2.0.UDisks.MDRaid

    constructor(config?: MDRaid_ConstructProps) 
    _init(config?: MDRaid_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksMDRaid interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface Manager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Manager

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.SupportedFilesystems">"SupportedFilesystems"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    supported_filesystems?: string[] | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.Version">"Version"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    version?: string | null
}

/**
 * Signal callback interface for `handle-enable-modules`
 */
interface Manager_HandleEnableModulesSignalCallback {
    ($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean
}

/**
 * Signal callback interface for `handle-loop-setup`
 */
interface Manager_HandleLoopSetupSignalCallback {
    ($obj: Manager, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_fd: GLib.Variant, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-mdraid-create`
 */
interface Manager_HandleMdraidCreateSignalCallback {
    ($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_blocks: string[], arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant): boolean
}

interface Manager {

    // Own properties of UDisks-2.0.UDisks.Manager

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.SupportedFilesystems">"SupportedFilesystems"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    supported_filesystems: string[]
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.Version">"Version"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    version: string

    // Owm methods of UDisks-2.0.UDisks.Manager

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.EnableModules">EnableModules()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_manager_call_enable_modules_finish() to get the result of the operation.
     * 
     * See udisks_manager_call_enable_modules_sync() for the synchronous, blocking version of this method.
     * @param arg_enable Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_enable_modules(arg_enable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_manager_call_enable_modules().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_enable_modules().
     */
    call_enable_modules_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.EnableModules">EnableModules()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_manager_call_enable_modules() for the asynchronous version of this method.
     * @param arg_enable Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_enable_modules_sync(arg_enable: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup">LoopSetup()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_manager_call_loop_setup_finish() to get the result of the operation.
     * 
     * See udisks_manager_call_loop_setup_sync() for the synchronous, blocking version of this method.
     * @param arg_fd Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_loop_setup(arg_fd: GLib.Variant, arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_manager_call_loop_setup().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_loop_setup().
     */
    call_loop_setup_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_resulting_device */ string, /* out_fd_list */ Gio.UnixFDList ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup">LoopSetup()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_manager_call_loop_setup() for the asynchronous version of this method.
     * @param arg_fd Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_loop_setup_sync(arg_fd: GLib.Variant, arg_options: GLib.Variant, fd_list: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_resulting_device */ string, /* out_fd_list */ Gio.UnixFDList ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.MDRaidCreate">MDRaidCreate()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_manager_call_mdraid_create_finish() to get the result of the operation.
     * 
     * See udisks_manager_call_mdraid_create_sync() for the synchronous, blocking version of this method.
     * @param arg_blocks Argument to pass with the method invocation.
     * @param arg_level Argument to pass with the method invocation.
     * @param arg_name Argument to pass with the method invocation.
     * @param arg_chunk Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_mdraid_create(arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_manager_call_mdraid_create().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_mdraid_create().
     */
    call_mdraid_create_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_resulting_array */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.MDRaidCreate">MDRaidCreate()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_manager_call_mdraid_create() for the asynchronous version of this method.
     * @param arg_blocks Argument to pass with the method invocation.
     * @param arg_level Argument to pass with the method invocation.
     * @param arg_name Argument to pass with the method invocation.
     * @param arg_chunk Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_mdraid_create_sync(arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_resulting_array */ string ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.EnableModules">EnableModules()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_enable_modules(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup">LoopSetup()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param resulting_device Parameter to return.
     */
    complete_loop_setup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, resulting_device: string): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.MDRaidCreate">MDRaidCreate()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param resulting_array Parameter to return.
     */
    complete_mdraid_create(invocation: Gio.DBusMethodInvocation, resulting_array: string): void

    // Own virtual methods of UDisks-2.0.UDisks.Manager

    vfunc_handle_enable_modules(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean
    vfunc_handle_loop_setup(invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_fd: GLib.Variant, arg_options: GLib.Variant): boolean
    vfunc_handle_mdraid_create(invocation: Gio.DBusMethodInvocation, arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant): boolean

    // Own signals of UDisks-2.0.UDisks.Manager

    connect(sigName: "handle-enable-modules", callback: Manager_HandleEnableModulesSignalCallback): number
    connect_after(sigName: "handle-enable-modules", callback: Manager_HandleEnableModulesSignalCallback): number
    emit(sigName: "handle-enable-modules", invocation: Gio.DBusMethodInvocation, arg_enable: boolean, ...args: any[]): void
    connect(sigName: "handle-loop-setup", callback: Manager_HandleLoopSetupSignalCallback): number
    connect_after(sigName: "handle-loop-setup", callback: Manager_HandleLoopSetupSignalCallback): number
    emit(sigName: "handle-loop-setup", invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList | null, arg_fd: GLib.Variant, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-mdraid-create", callback: Manager_HandleMdraidCreateSignalCallback): number
    connect_after(sigName: "handle-mdraid-create", callback: Manager_HandleMdraidCreateSignalCallback): number
    emit(sigName: "handle-mdraid-create", invocation: Gio.DBusMethodInvocation, arg_blocks: string[], arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Manager

    connect(sigName: "notify::supported-filesystems", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-filesystems", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::supported-filesystems", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link>.
 * @interface 
 */
class Manager extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.Manager

    static name: string
    static $gtype: GObject.GType<Manager>

    // Constructors of UDisks-2.0.UDisks.Manager

    constructor(config?: Manager_ConstructProps) 
    _init(config?: Manager_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksManager interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface Object_ConstructProps extends Gio.DBusObject_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Object

    /**
     * The #UDisksBlock instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    block?: Block | null
    /**
     * The #UDisksDrive instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    drive?: Drive | null
    /**
     * The #UDisksDriveAta instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    drive_ata?: DriveAta | null
    /**
     * The #UDisksEncrypted instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    encrypted?: Encrypted | null
    /**
     * The #UDisksFilesystem instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    filesystem?: Filesystem | null
    /**
     * The #UDisksJob instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    job?: Job | null
    /**
     * The #UDisksLoop instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    loop?: Loop | null
    /**
     * The #UDisksManager instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    manager?: Manager | null
    /**
     * The #UDisksMDRaid instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    mdraid?: MDRaid | null
    /**
     * The #UDisksPartition instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    partition?: Partition | null
    /**
     * The #UDisksPartitionTable instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    partition_table?: PartitionTable | null
    /**
     * The #UDisksSwapspace instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    swapspace?: Swapspace | null
}

interface Object extends Gio.DBusObject {

    // Own properties of UDisks-2.0.UDisks.Object

    /**
     * The #UDisksBlock instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    block: Block
    /**
     * The #UDisksDrive instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    drive: Drive
    /**
     * The #UDisksDriveAta instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    drive_ata: DriveAta
    /**
     * The #UDisksEncrypted instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    encrypted: Encrypted
    /**
     * The #UDisksFilesystem instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    filesystem: Filesystem
    /**
     * The #UDisksJob instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    job: Job
    /**
     * The #UDisksLoop instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    loop: Loop
    /**
     * The #UDisksManager instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    manager: Manager
    /**
     * The #UDisksMDRaid instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    mdraid: MDRaid
    /**
     * The #UDisksPartition instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    partition: Partition
    /**
     * The #UDisksPartitionTable instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    partition_table: PartitionTable
    /**
     * The #UDisksSwapspace instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    swapspace: Swapspace

    // Owm methods of UDisks-2.0.UDisks.Object

    /**
     * Gets the #UDisksBlock instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link> on `object,` if any.
     */
    get_block(): Block
    /**
     * Gets the #UDisksDrive instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link> on `object,` if any.
     */
    get_drive(): Drive
    /**
     * Gets the #UDisksDriveAta instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link> on `object,` if any.
     */
    get_drive_ata(): DriveAta
    /**
     * Gets the #UDisksEncrypted instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link> on `object,` if any.
     */
    get_encrypted(): Encrypted
    /**
     * Gets the #UDisksFilesystem instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link> on `object,` if any.
     */
    get_filesystem(): Filesystem
    /**
     * Gets the #UDisksJob instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link> on `object,` if any.
     */
    get_job(): Job
    /**
     * Gets the #UDisksLoop instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link> on `object,` if any.
     */
    get_loop(): Loop
    /**
     * Gets the #UDisksManager instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link> on `object,` if any.
     */
    get_manager(): Manager
    /**
     * Gets the #UDisksMDRaid instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link> on `object,` if any.
     */
    get_mdraid(): MDRaid
    /**
     * Gets the #UDisksPartition instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link> on `object,` if any.
     */
    get_partition(): Partition
    /**
     * Gets the #UDisksPartitionTable instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link> on `object,` if any.
     */
    get_partition_table(): PartitionTable
    /**
     * Gets the #UDisksSwapspace instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link> on `object,` if any.
     */
    get_swapspace(): Swapspace

    // Class property signals of UDisks-2.0.UDisks.Object

    connect(sigName: "notify::block", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::drive", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drive", ...args: any[]): void
    connect(sigName: "notify::drive-ata", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive-ata", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drive-ata", ...args: any[]): void
    connect(sigName: "notify::encrypted", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypted", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::encrypted", ...args: any[]): void
    connect(sigName: "notify::filesystem", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filesystem", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filesystem", ...args: any[]): void
    connect(sigName: "notify::job", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::job", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::job", ...args: any[]): void
    connect(sigName: "notify::loop", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::loop", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::mdraid", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mdraid", ...args: any[]): void
    connect(sigName: "notify::partition", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::partition", ...args: any[]): void
    connect(sigName: "notify::partition-table", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition-table", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::partition-table", ...args: any[]): void
    connect(sigName: "notify::swapspace", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swapspace", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swapspace", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksObject type is a specialized container of interfaces.
 * @interface 
 */
class Object extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of UDisks-2.0.UDisks.Object

    constructor(config?: Object_ConstructProps) 
    _init(config?: Object_ConstructProps): void
}

interface Partition_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Partition

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Flags">"Flags"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    flags?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContained">"IsContained"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    is_contained?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContainer">"IsContainer"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    is_container?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Name">"Name"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    name?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Number">"Number"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    number?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Offset">"Offset"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    offset?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Size">"Size"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    size?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Table">"Table"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    table?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Type">"Type"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    type?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.UUID">"UUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    uuid?: string | null
}

/**
 * Signal callback interface for `handle-delete`
 */
interface Partition_HandleDeleteSignalCallback {
    ($obj: Partition, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-flags`
 */
interface Partition_HandleSetFlagsSignalCallback {
    ($obj: Partition, invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-name`
 */
interface Partition_HandleSetNameSignalCallback {
    ($obj: Partition, invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-type`
 */
interface Partition_HandleSetTypeSignalCallback {
    ($obj: Partition, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean
}

interface Partition {

    // Own properties of UDisks-2.0.UDisks.Partition

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Flags">"Flags"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    flags: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContained">"IsContained"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    is_contained: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContainer">"IsContainer"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    is_container: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Name">"Name"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    name: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Number">"Number"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    number: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Offset">"Offset"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    offset: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Size">"Size"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    size: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Table">"Table"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    table: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Type">"Type"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    type: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.UUID">"UUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    uuid: string

    // Owm methods of UDisks-2.0.UDisks.Partition

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.Delete">Delete()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_call_delete_finish() to get the result of the operation.
     * 
     * See udisks_partition_call_delete_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_delete(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_partition_call_delete().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_delete().
     */
    call_delete_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.Delete">Delete()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_call_delete() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_delete_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetFlags">SetFlags()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_call_set_flags_finish() to get the result of the operation.
     * 
     * See udisks_partition_call_set_flags_sync() for the synchronous, blocking version of this method.
     * @param arg_flags Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_set_flags(arg_flags: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_partition_call_set_flags().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_set_flags().
     */
    call_set_flags_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetFlags">SetFlags()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_call_set_flags() for the asynchronous version of this method.
     * @param arg_flags Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_set_flags_sync(arg_flags: number, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetName">SetName()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_call_set_name_finish() to get the result of the operation.
     * 
     * See udisks_partition_call_set_name_sync() for the synchronous, blocking version of this method.
     * @param arg_name Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_set_name(arg_name: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_partition_call_set_name().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_set_name().
     */
    call_set_name_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetName">SetName()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_call_set_name() for the asynchronous version of this method.
     * @param arg_name Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_set_name_sync(arg_name: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetType">SetType()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_call_set_type_finish() to get the result of the operation.
     * 
     * See udisks_partition_call_set_type_sync() for the synchronous, blocking version of this method.
     * @param arg_type Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_set_type(arg_type: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_partition_call_set_type().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_set_type().
     */
    call_set_type_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetType">SetType()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_call_set_type() for the asynchronous version of this method.
     * @param arg_type Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_set_type_sync(arg_type: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.Delete">Delete()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_delete(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetFlags">SetFlags()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_set_flags(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetName">SetName()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_set_name(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetType">SetType()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_set_type(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of UDisks-2.0.UDisks.Partition

    vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_set_flags(invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant): boolean
    vfunc_handle_set_name(invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant): boolean
    vfunc_handle_set_type(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean

    // Own signals of UDisks-2.0.UDisks.Partition

    connect(sigName: "handle-delete", callback: Partition_HandleDeleteSignalCallback): number
    connect_after(sigName: "handle-delete", callback: Partition_HandleDeleteSignalCallback): number
    emit(sigName: "handle-delete", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-flags", callback: Partition_HandleSetFlagsSignalCallback): number
    connect_after(sigName: "handle-set-flags", callback: Partition_HandleSetFlagsSignalCallback): number
    emit(sigName: "handle-set-flags", invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-name", callback: Partition_HandleSetNameSignalCallback): number
    connect_after(sigName: "handle-set-name", callback: Partition_HandleSetNameSignalCallback): number
    emit(sigName: "handle-set-name", invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-type", callback: Partition_HandleSetTypeSignalCallback): number
    connect_after(sigName: "handle-set-type", callback: Partition_HandleSetTypeSignalCallback): number
    emit(sigName: "handle-set-type", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Partition

    connect(sigName: "notify::flags", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::is-contained", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-contained", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-contained", ...args: any[]): void
    connect(sigName: "notify::is-container", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-container", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-container", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::number", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::table", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Partition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link>.
 * @interface 
 */
class Partition extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.Partition

    static name: string
    static $gtype: GObject.GType<Partition>

    // Constructors of UDisks-2.0.UDisks.Partition

    constructor(config?: Partition_ConstructProps) 
    _init(config?: Partition_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksPartition interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface PartitionTable_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.PartitionTable

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-PartitionTable.Type">"Type"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    type?: string | null
}

/**
 * Signal callback interface for `handle-create-partition`
 */
interface PartitionTable_HandleCreatePartitionSignalCallback {
    ($obj: PartitionTable, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-create-partition-and-format`
 */
interface PartitionTable_HandleCreatePartitionAndFormatSignalCallback {
    ($obj: PartitionTable, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant): boolean
}

interface PartitionTable {

    // Own properties of UDisks-2.0.UDisks.PartitionTable

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-PartitionTable.Type">"Type"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    type: string

    // Owm methods of UDisks-2.0.UDisks.PartitionTable

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartition">CreatePartition()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_table_call_create_partition_finish() to get the result of the operation.
     * 
     * See udisks_partition_table_call_create_partition_sync() for the synchronous, blocking version of this method.
     * @param arg_offset Argument to pass with the method invocation.
     * @param arg_size Argument to pass with the method invocation.
     * @param arg_type Argument to pass with the method invocation.
     * @param arg_name Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_create_partition(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartitionAndFormat">CreatePartitionAndFormat()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_table_call_create_partition_and_format_finish() to get the result of the operation.
     * 
     * See udisks_partition_table_call_create_partition_and_format_sync() for the synchronous, blocking version of this method.
     * @param arg_offset Argument to pass with the method invocation.
     * @param arg_size Argument to pass with the method invocation.
     * @param arg_type Argument to pass with the method invocation.
     * @param arg_name Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param arg_format_type Argument to pass with the method invocation.
     * @param arg_format_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_create_partition_and_format(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_partition_table_call_create_partition_and_format().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_table_call_create_partition_and_format().
     */
    call_create_partition_and_format_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_created_partition */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartitionAndFormat">CreatePartitionAndFormat()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_table_call_create_partition_and_format() for the asynchronous version of this method.
     * @param arg_offset Argument to pass with the method invocation.
     * @param arg_size Argument to pass with the method invocation.
     * @param arg_type Argument to pass with the method invocation.
     * @param arg_name Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param arg_format_type Argument to pass with the method invocation.
     * @param arg_format_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_create_partition_and_format_sync(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_created_partition */ string ]
    /**
     * Finishes an operation started with udisks_partition_table_call_create_partition().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_table_call_create_partition().
     */
    call_create_partition_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_created_partition */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartition">CreatePartition()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_table_call_create_partition() for the asynchronous version of this method.
     * @param arg_offset Argument to pass with the method invocation.
     * @param arg_size Argument to pass with the method invocation.
     * @param arg_type Argument to pass with the method invocation.
     * @param arg_name Argument to pass with the method invocation.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_create_partition_sync(arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_created_partition */ string ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartition">CreatePartition()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param created_partition Parameter to return.
     */
    complete_create_partition(invocation: Gio.DBusMethodInvocation, created_partition: string): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartitionAndFormat">CreatePartitionAndFormat()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param created_partition Parameter to return.
     */
    complete_create_partition_and_format(invocation: Gio.DBusMethodInvocation, created_partition: string): void

    // Own virtual methods of UDisks-2.0.UDisks.PartitionTable

    vfunc_handle_create_partition(invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant): boolean
    vfunc_handle_create_partition_and_format(invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant): boolean

    // Own signals of UDisks-2.0.UDisks.PartitionTable

    connect(sigName: "handle-create-partition", callback: PartitionTable_HandleCreatePartitionSignalCallback): number
    connect_after(sigName: "handle-create-partition", callback: PartitionTable_HandleCreatePartitionSignalCallback): number
    emit(sigName: "handle-create-partition", invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-create-partition-and-format", callback: PartitionTable_HandleCreatePartitionAndFormatSignalCallback): number
    connect_after(sigName: "handle-create-partition-and-format", callback: PartitionTable_HandleCreatePartitionAndFormatSignalCallback): number
    emit(sigName: "handle-create-partition-and-format", invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.PartitionTable

    connect(sigName: "notify::type", callback: (($obj: PartitionTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PartitionTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link>.
 * @interface 
 */
class PartitionTable extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.PartitionTable

    static name: string
    static $gtype: GObject.GType<PartitionTable>

    // Constructors of UDisks-2.0.UDisks.PartitionTable

    constructor(config?: PartitionTable_ConstructProps) 
    _init(config?: PartitionTable_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksPartitionTable interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface Swapspace_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Swapspace

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Swapspace.Active">"Active"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    active?: boolean | null
}

/**
 * Signal callback interface for `handle-start`
 */
interface Swapspace_HandleStartSignalCallback {
    ($obj: Swapspace, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-stop`
 */
interface Swapspace_HandleStopSignalCallback {
    ($obj: Swapspace, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
}

interface Swapspace {

    // Own properties of UDisks-2.0.UDisks.Swapspace

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Swapspace.Active">"Active"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    active: boolean

    // Owm methods of UDisks-2.0.UDisks.Swapspace

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Start">Start()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_swapspace_call_start_finish() to get the result of the operation.
     * 
     * See udisks_swapspace_call_start_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_start(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_swapspace_call_start().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_swapspace_call_start().
     */
    call_start_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_swapspace_call_start() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_start_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Stop">Stop()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_swapspace_call_stop_finish() to get the result of the operation.
     * 
     * See udisks_swapspace_call_stop_sync() for the synchronous, blocking version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_stop(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_swapspace_call_stop().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_swapspace_call_stop().
     */
    call_stop_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_swapspace_call_stop() for the asynchronous version of this method.
     * @param arg_options Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_stop_sync(arg_options: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_start(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_stop(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of UDisks-2.0.UDisks.Swapspace

    vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean

    // Own signals of UDisks-2.0.UDisks.Swapspace

    connect(sigName: "handle-start", callback: Swapspace_HandleStartSignalCallback): number
    connect_after(sigName: "handle-start", callback: Swapspace_HandleStartSignalCallback): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-stop", callback: Swapspace_HandleStopSignalCallback): number
    connect_after(sigName: "handle-stop", callback: Swapspace_HandleStopSignalCallback): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Swapspace

    connect(sigName: "notify::active", callback: (($obj: Swapspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Swapspace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link>.
 * @interface 
 */
class Swapspace extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.Swapspace

    static name: string
    static $gtype: GObject.GType<Swapspace>

    // Constructors of UDisks-2.0.UDisks.Swapspace

    constructor(config?: Swapspace_ConstructProps) 
    _init(config?: Swapspace_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksSwapspace interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface BlockProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Block_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface BlockProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Block {

    // Class property signals of UDisks-2.0.UDisks.BlockProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::configuration", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::configuration", ...args: any[]): void
    connect(sigName: "notify::crypto-backing-device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crypto-backing-device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::crypto-backing-device", ...args: any[]): void
    connect(sigName: "notify::device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::device-number", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-number", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-number", ...args: any[]): void
    connect(sigName: "notify::drive", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drive", ...args: any[]): void
    connect(sigName: "notify::hint-auto", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-auto", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-auto", ...args: any[]): void
    connect(sigName: "notify::hint-icon-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-icon-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-icon-name", ...args: any[]): void
    connect(sigName: "notify::hint-ignore", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-ignore", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-ignore", ...args: any[]): void
    connect(sigName: "notify::hint-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-name", ...args: any[]): void
    connect(sigName: "notify::hint-partitionable", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-partitionable", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-partitionable", ...args: any[]): void
    connect(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-symbolic-icon-name", ...args: any[]): void
    connect(sigName: "notify::hint-system", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-system", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-system", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::id-label", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-label", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-label", ...args: any[]): void
    connect(sigName: "notify::id-type", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-type", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-type", ...args: any[]): void
    connect(sigName: "notify::id-usage", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-usage", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-usage", ...args: any[]): void
    connect(sigName: "notify::id-uuid", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-uuid", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-uuid", ...args: any[]): void
    connect(sigName: "notify::id-version", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-version", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-version", ...args: any[]): void
    connect(sigName: "notify::mdraid", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mdraid", ...args: any[]): void
    connect(sigName: "notify::mdraid-member", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid-member", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mdraid-member", ...args: any[]): void
    connect(sigName: "notify::preferred-device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-device", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preferred-device", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::symlinks", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symlinks", callback: (($obj: BlockProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::symlinks", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksBlockProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class BlockProxy extends Gio.DBusProxy {

    // Own properties of UDisks-2.0.UDisks.BlockProxy

    static name: string
    static $gtype: GObject.GType<BlockProxy>

    // Constructors of UDisks-2.0.UDisks.BlockProxy

    constructor(config?: BlockProxy_ConstructProps) 
    /**
     * Finishes an operation started with udisks_block_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): BlockProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_block_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): BlockProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_block_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): BlockProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): BlockProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: BlockProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_proxy_new_finish() to get the result of the operation.
     * 
     * See udisks_block_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_block_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_block_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface BlockSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Block_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface BlockSkeleton extends Gio.DBusInterface, Block {

    // Class property signals of UDisks-2.0.UDisks.BlockSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::configuration", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::configuration", ...args: any[]): void
    connect(sigName: "notify::crypto-backing-device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crypto-backing-device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::crypto-backing-device", ...args: any[]): void
    connect(sigName: "notify::device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::device-number", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-number", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-number", ...args: any[]): void
    connect(sigName: "notify::drive", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drive", ...args: any[]): void
    connect(sigName: "notify::hint-auto", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-auto", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-auto", ...args: any[]): void
    connect(sigName: "notify::hint-icon-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-icon-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-icon-name", ...args: any[]): void
    connect(sigName: "notify::hint-ignore", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-ignore", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-ignore", ...args: any[]): void
    connect(sigName: "notify::hint-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-name", ...args: any[]): void
    connect(sigName: "notify::hint-partitionable", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-partitionable", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-partitionable", ...args: any[]): void
    connect(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-symbolic-icon-name", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-symbolic-icon-name", ...args: any[]): void
    connect(sigName: "notify::hint-system", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-system", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hint-system", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::id-label", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-label", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-label", ...args: any[]): void
    connect(sigName: "notify::id-type", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-type", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-type", ...args: any[]): void
    connect(sigName: "notify::id-usage", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-usage", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-usage", ...args: any[]): void
    connect(sigName: "notify::id-uuid", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-uuid", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-uuid", ...args: any[]): void
    connect(sigName: "notify::id-version", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-version", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-version", ...args: any[]): void
    connect(sigName: "notify::mdraid", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mdraid", ...args: any[]): void
    connect(sigName: "notify::mdraid-member", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid-member", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mdraid-member", ...args: any[]): void
    connect(sigName: "notify::preferred-device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-device", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preferred-device", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::symlinks", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symlinks", callback: (($obj: BlockSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::symlinks", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksBlockSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class BlockSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UDisks-2.0.UDisks.BlockSkeleton

    static name: string
    static $gtype: GObject.GType<BlockSkeleton>

    // Constructors of UDisks-2.0.UDisks.BlockSkeleton

    constructor(config?: BlockSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link>.
     * @constructor 
     */
    static new(): BlockSkeleton
    _init(config?: BlockSkeleton_ConstructProps): void
}

interface Client_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.Initable_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface Client_ChangedSignalCallback {
    ($obj: Client): void
}

interface Client extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of UDisks-2.0.UDisks.Client

    /**
     * The #UDisksManager interface on the well-known
     * <literal>/org/freedesktop/UDisks2/Manager</literal> object
     */
    readonly manager: Manager
    /**
     * The #GDBusObjectManager used by the #UDisksClient instance.
     */
    readonly object_manager: Gio.DBusObjectManager

    // Owm methods of UDisks-2.0.UDisks.Client

    /**
     * Gets all RAID devices (e.g. <filename>/dev/md0</filename> and <filename>/dev/md1</filename>) for `raid`.
     * 
     * This is usually only useful in <ulink
     * url="http://en.wikipedia.org/wiki/Split-brain_(computing)">split-brain
     * situations</ulink> — see udisks_client_get_block_for_mdraid() for
     * an example — and is normally used only to convey the problem in an
     * user interface.
     * @param raid A #UDisksMDRaid.
     */
    get_all_blocks_for_mdraid(raid: MDRaid): Block[]
    /**
     * Gets the #UDisksBlock corresponding to `block_device_number,` if any.
     * @param block_device_number A #dev_t to get a #UDisksBlock for.
     */
    get_block_for_dev(block_device_number: number): Block
    /**
     * Gets a block device corresponding to `drive`. The returned block
     * device, if any, is for the whole disk drive, e.g. a partition block
     * device is never returned.
     * 
     * Set `get_physical` to %TRUE if you need a block device that you can
     * send low-level SCSI commands with (for multipath, this returns one
     * of the physical paths). Set it to %FALSE if you need a block device
     * that you can read/write data with (for multipath, this returns the
     * mapped device).
     * @param drive A #UDisksDrive.
     * @param get_physical %TRUE to get a physical device, %FALSE to get the logical device.
     */
    get_block_for_drive(drive: Drive, get_physical: boolean): Block
    /**
     * Gets all the #UDisksBlock instances with the given label, if any.
     * @param label The label.
     */
    get_block_for_label(label: string): Block[]
    /**
     * Gets the RAID device (e.g. <filename>/dev/md0</filename>) for `raid`.
     * 
     * In the case of a <ulink
     * url="http://en.wikipedia.org/wiki/Split-brain_(computing)">split-brain
     * syndrome</ulink>, it is undefined which RAID device is
     * returned. For example this can happen if
     * <filename>/dev/sda</filename> and <filename>/dev/sdb</filename> are
     * components of a two-disk RAID-1 and <filename>/dev/md0</filename>
     * and <filename>/dev/md1</filename> are two degraded arrays, each one
     * using exactly one of the two devices. Use
     * udisks_client_get_all_blocks_for_mdraid() to get all RAID devices.
     * @param raid A #UDisksMDRaid.
     */
    get_block_for_mdraid(raid: MDRaid): Block
    /**
     * Gets all the #UDisksBlock instances with the given uuid, if any.
     * @param uuid The uuid.
     */
    get_block_for_uuid(uuid: string): Block[]
    /**
     * If `block` is an unlocked encrypted device, gets the cleartext device.
     * @param block A #UDisksBlock.
     */
    get_cleartext_block(block: Block): Block
    /**
     * Gets the #UDisksDrive that `block` belongs to, if any.
     * @param block A #UDisksBlock.
     */
    get_drive_for_block(block: Block): Drive
    /**
     * Gets information about a #UDisksDrive object that is suitable to
     * present in an user interface. The returned strings are localized.
     * @param drive A #UDisksDrive.
     */
    get_drive_info(drive: Drive): [ /* out_name */ string, /* out_description */ string, /* out_drive_icon */ Gio.Icon, /* out_media_description */ string, /* out_media_icon */ Gio.Icon ]
    /**
     * Gets all siblings for `drive`.
     * @param drive A #UDisksDrive.
     */
    get_drive_siblings(drive: Drive): Drive[]
    /**
     * Gets a human readable localized string for `usage,` `type` and `version`.
     * @param usage Usage id e.g. "filesystem" or "crypto".
     * @param type Type e.g. "ext4" or "crypto_LUKS"
     * @param version Version.
     * @param long_string Whether to produce a long string.
     */
    get_id_for_display(usage: string, type: string, version: string, long_string: boolean): string
    /**
     * Gets a human-readable and localized text string describing the
     * operation of `job`.
     * 
     * For known job types, see the documentation for the
     * <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Operation">Job:Operation</link>
     * D-Bus property.
     * @param job A #UDisksJob.
     */
    get_job_description(job: Job): string
    /**
     * Gets all the #UDisksJob instances that reference `object,` if any.
     * @param object A #UDisksObject.
     */
    get_jobs_for_object(object: Object): Job[]
    /**
     * Gets the corresponding loop interface for `block`.
     * 
     * This only works if `block` itself is a loop device or a partition of
     * a loop device.
     * @param block A #UDisksBlock.
     */
    get_loop_for_block(block: Block): Loop
    /**
     * Gets the #UDisksManager interface on the well-known
     * <literal>/org/freedesktop/UDisks2/Manager</literal> object.
     */
    get_manager(): Manager
    /**
     * Gets the #UDisksMDRaid that `block` is the block device for, if any.
     * @param block A #UDisksBlock.
     */
    get_mdraid_for_block(block: Block): MDRaid
    /**
     * Gets a human-readable string of the media described by
     * `media_compat`. The returned information is localized.
     * @param media_compat An array of media types.
     */
    get_media_compat_for_display(media_compat: string): string
    /**
     * Gets the physical block devices that are part of `raid`.
     * @param raid A #UDisksMDRaid.
     */
    get_members_for_mdraid(raid: MDRaid): Block[]
    /**
     * Convenience function for looking up an #UDisksObject for `object_path`.
     * @param object_path Object path.
     */
    get_object(object_path: string): Object
    /**
     * Gets information about a #UDisksObject instance that is suitable to
     * present in an user interface. Information is returned in the
     * #UDisksObjectInfo object and is localized.
     * @param object A #UDisksObject.
     */
    get_object_info(object: Object): ObjectInfo
    /**
     * Gets the #GDBusObjectManager used by `client`.
     */
    get_object_manager(): Gio.DBusObjectManager
    /**
     * Gets information about `partition` that is suitable to present in an
     * user interface in a single line of text.
     * 
     * The returned string is localized and includes things like the
     * partition type, flags (if any) and name (if any).
     * @param partition # #UDisksPartition.
     */
    get_partition_info(partition: Partition): string
    /**
     * Gets the #UDisksPartitionTable corresponding to `partition`.
     * @param partition A #UDisksPartition.
     */
    get_partition_table(partition: Partition): PartitionTable
    /**
     * Gets a human readable localized string for `partition_table_type` and `partition_table_subtype`.
     * @param partition_table_type A partition table type e.g. 'dos' or 'gpt'.
     * @param partition_table_subtype A partition table type e.g. 'dos' or 'gpt'.
     */
    get_partition_table_subtype_for_display(partition_table_type: string, partition_table_subtype: string): string
    /**
     * Gets all known subtypes for `partition_table_type`.
     * @param partition_table_type A partition table type e.g. 'dos' or 'gpt'.
     */
    get_partition_table_subtypes(partition_table_type: string): string[]
    /**
     * Gets a human readable localized string for `partition_table_type`.
     * @param partition_table_type A partition table type e.g. 'dos' or 'gpt'.
     */
    get_partition_table_type_for_display(partition_table_type: string): string
    /**
     * Like udisks_client_get_partition_type_for_display() but also takes
     * the partition table subtype into account, if available. This is
     * useful in scenarios where different subtypes is using the same
     * partition type.
     * @param partition_table_type A partitioning type e.g. 'dos' or 'gpt'.
     * @param partition_table_subtype A partitioning subtype or %NULL.
     * @param partition_type A partition type.
     */
    get_partition_type_and_subtype_for_display(partition_table_type: string, partition_table_subtype: string, partition_type: string): string
    /**
     * Gets a human readable localized string for `partiton_table_type` and `partition_type`.
     * @param partition_table_type A partitioning type e.g. 'dos' or 'gpt'.
     * @param partition_type A partition type.
     */
    get_partition_type_for_display(partition_table_type: string, partition_type: string): string
    /**
     * Gets information about all known partition types for `partition_table_type` and `partition_table_subtype`.
     * @param partition_table_type A partition table type e.g. 'dos' or 'gpt'.
     * @param partition_table_subtype A partition table subtype or %NULL to get all known types.
     */
    get_partition_type_infos(partition_table_type: string, partition_table_subtype: string | null): PartitionTypeInfo[]
    /**
     * Gets all partitions of `table`.
     * @param table A #UDisksPartitionTable.
     */
    get_partitions(table: PartitionTable): Partition[]
    /**
     * Utility function to get a human-readable string that represents `size`.
     * @param size Size in bytes
     * @param use_pow2 Whether power-of-two units should be used instead of power-of-ten units.
     * @param long_string Whether to produce a long string.
     */
    get_size_for_display(size: number, use_pow2: boolean, long_string: boolean): string
    /**
     * Like udisks_client_get_object() but doesn't increase the reference
     * count on the returned #UDisksObject.
     * 
     * <warning>The returned object is only valid until removed so it is only safe to use this function on the thread where `client` was constructed. Use udisks_client_get_object() if on another thread.</warning>
     * @param object_path Object path.
     */
    peek_object(object_path: string): Object
    /**
     * Queues up a #UDisksClient::changed signal and rate-limit it. See
     * the documentation for the #UDisksClient::changed property for more
     * information.
     */
    queue_changed(): void
    /**
     * Blocks until all pending D-Bus messages have been delivered. Also
     * emits the (rate-limited) #UDisksClient::changed signal if changes
     * are currently pending.
     * 
     * This is useful in two situations: 1. when using synchronous method
     * calls since e.g. D-Bus signals received while waiting for the reply
     * are queued up and dispatched after the synchronous call ends; and
     * 2. when using asynchronous calls where the return value references
     * a newly created object (such as the <link
     * linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup">Manager.LoopSetup()</link> method).
     */
    settle(): void

    // Own signals of UDisks-2.0.UDisks.Client

    connect(sigName: "changed", callback: Client_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Client_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Client

    connect(sigName: "notify::manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::object-manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-manager", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #UDisksClient is used for accessing the UDisks service from a
 * client program.
 * @class 
 */
class Client extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of UDisks-2.0.UDisks.Client

    constructor(config?: Client_ConstructProps) 
    /**
     * Finishes an operation started with udisks_client_new().
     * @constructor 
     * @param res A #GAsyncResult.
     */
    static new_finish(res: Gio.AsyncResult): Client
    /**
     * Synchronously gets a #UDisksClient for the local system.
     * @constructor 
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(cancellable: Gio.Cancellable | null): Client
    _init(config?: Client_ConstructProps): void
    /**
     * Asynchronously gets a #UDisksClient. When the operation is
     * finished, `callback` will be invoked in the <link
     * linkend="g-main-context-push-thread-default">thread-default main
     * loop</link> of the thread you are calling this method from.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Function that will be called when the result is ready.
     */
    static new(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

interface DriveAtaProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, DriveAta_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface DriveAtaProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, DriveAta {

    // Class property signals of UDisks-2.0.UDisks.DriveAtaProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::aam-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::aam-enabled", ...args: any[]): void
    connect(sigName: "notify::aam-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::aam-supported", ...args: any[]): void
    connect(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::aam-vendor-recommended-value", ...args: any[]): void
    connect(sigName: "notify::apm-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::apm-enabled", ...args: any[]): void
    connect(sigName: "notify::apm-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::apm-supported", ...args: any[]): void
    connect(sigName: "notify::pm-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pm-enabled", ...args: any[]): void
    connect(sigName: "notify::pm-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pm-supported", ...args: any[]): void
    connect(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-lookahead-enabled", ...args: any[]): void
    connect(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-lookahead-supported", ...args: any[]): void
    connect(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::security-enhanced-erase-unit-minutes", ...args: any[]): void
    connect(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::security-erase-unit-minutes", ...args: any[]): void
    connect(sigName: "notify::security-frozen", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-frozen", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::security-frozen", ...args: any[]): void
    connect(sigName: "notify::smart-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-enabled", ...args: any[]): void
    connect(sigName: "notify::smart-failing", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-failing", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-failing", ...args: any[]): void
    connect(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-num-attributes-failed-in-the-past", ...args: any[]): void
    connect(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-num-attributes-failing", ...args: any[]): void
    connect(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-num-bad-sectors", ...args: any[]): void
    connect(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-power-on-seconds", ...args: any[]): void
    connect(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-selftest-percent-remaining", ...args: any[]): void
    connect(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-selftest-status", ...args: any[]): void
    connect(sigName: "notify::smart-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-supported", ...args: any[]): void
    connect(sigName: "notify::smart-temperature", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-temperature", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-temperature", ...args: any[]): void
    connect(sigName: "notify::smart-updated", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-updated", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-updated", ...args: any[]): void
    connect(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::write-cache-enabled", ...args: any[]): void
    connect(sigName: "notify::write-cache-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-supported", callback: (($obj: DriveAtaProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::write-cache-supported", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksDriveAtaProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DriveAtaProxy extends Gio.DBusProxy {

    // Own properties of UDisks-2.0.UDisks.DriveAtaProxy

    static name: string
    static $gtype: GObject.GType<DriveAtaProxy>

    // Constructors of UDisks-2.0.UDisks.DriveAtaProxy

    constructor(config?: DriveAtaProxy_ConstructProps) 
    /**
     * Finishes an operation started with udisks_drive_ata_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): DriveAtaProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_drive_ata_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): DriveAtaProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_drive_ata_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DriveAtaProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DriveAtaProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: DriveAtaProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_proxy_new_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_drive_ata_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface DriveAtaSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, DriveAta_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface DriveAtaSkeleton extends Gio.DBusInterface, DriveAta {

    // Class property signals of UDisks-2.0.UDisks.DriveAtaSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::aam-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::aam-enabled", ...args: any[]): void
    connect(sigName: "notify::aam-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::aam-supported", ...args: any[]): void
    connect(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aam-vendor-recommended-value", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::aam-vendor-recommended-value", ...args: any[]): void
    connect(sigName: "notify::apm-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::apm-enabled", ...args: any[]): void
    connect(sigName: "notify::apm-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apm-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::apm-supported", ...args: any[]): void
    connect(sigName: "notify::pm-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pm-enabled", ...args: any[]): void
    connect(sigName: "notify::pm-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pm-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pm-supported", ...args: any[]): void
    connect(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-lookahead-enabled", ...args: any[]): void
    connect(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-lookahead-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-lookahead-supported", ...args: any[]): void
    connect(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::security-enhanced-erase-unit-minutes", ...args: any[]): void
    connect(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-erase-unit-minutes", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::security-erase-unit-minutes", ...args: any[]): void
    connect(sigName: "notify::security-frozen", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-frozen", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::security-frozen", ...args: any[]): void
    connect(sigName: "notify::smart-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-enabled", ...args: any[]): void
    connect(sigName: "notify::smart-failing", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-failing", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-failing", ...args: any[]): void
    connect(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-num-attributes-failed-in-the-past", ...args: any[]): void
    connect(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-attributes-failing", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-num-attributes-failing", ...args: any[]): void
    connect(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-num-bad-sectors", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-num-bad-sectors", ...args: any[]): void
    connect(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-power-on-seconds", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-power-on-seconds", ...args: any[]): void
    connect(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-percent-remaining", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-selftest-percent-remaining", ...args: any[]): void
    connect(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-selftest-status", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-selftest-status", ...args: any[]): void
    connect(sigName: "notify::smart-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-supported", ...args: any[]): void
    connect(sigName: "notify::smart-temperature", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-temperature", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-temperature", ...args: any[]): void
    connect(sigName: "notify::smart-updated", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-updated", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-updated", ...args: any[]): void
    connect(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-enabled", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::write-cache-enabled", ...args: any[]): void
    connect(sigName: "notify::write-cache-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-cache-supported", callback: (($obj: DriveAtaSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::write-cache-supported", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksDriveAtaSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DriveAtaSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UDisks-2.0.UDisks.DriveAtaSkeleton

    static name: string
    static $gtype: GObject.GType<DriveAtaSkeleton>

    // Constructors of UDisks-2.0.UDisks.DriveAtaSkeleton

    constructor(config?: DriveAtaSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>.
     * @constructor 
     */
    static new(): DriveAtaSkeleton
    _init(config?: DriveAtaSkeleton_ConstructProps): void
}

interface DriveProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Drive_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface DriveProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Drive {

    // Class property signals of UDisks-2.0.UDisks.DriveProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::can-power-off", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-power-off", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-power-off", ...args: any[]): void
    connect(sigName: "notify::configuration", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::configuration", ...args: any[]): void
    connect(sigName: "notify::connection-bus", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-bus", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection-bus", ...args: any[]): void
    connect(sigName: "notify::ejectable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ejectable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ejectable", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::media", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media", ...args: any[]): void
    connect(sigName: "notify::media-available", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-available", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-available", ...args: any[]): void
    connect(sigName: "notify::media-change-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-change-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-change-detected", ...args: any[]): void
    connect(sigName: "notify::media-compatibility", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-compatibility", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-compatibility", ...args: any[]): void
    connect(sigName: "notify::media-removable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-removable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-removable", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::optical", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical", ...args: any[]): void
    connect(sigName: "notify::optical-blank", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-blank", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-blank", ...args: any[]): void
    connect(sigName: "notify::optical-num-audio-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-audio-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-num-audio-tracks", ...args: any[]): void
    connect(sigName: "notify::optical-num-data-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-data-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-num-data-tracks", ...args: any[]): void
    connect(sigName: "notify::optical-num-sessions", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-sessions", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-num-sessions", ...args: any[]): void
    connect(sigName: "notify::optical-num-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-tracks", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-num-tracks", ...args: any[]): void
    connect(sigName: "notify::removable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removable", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::removable", ...args: any[]): void
    connect(sigName: "notify::revision", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::revision", ...args: any[]): void
    connect(sigName: "notify::rotation-rate", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-rate", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-rate", ...args: any[]): void
    connect(sigName: "notify::seat", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::sibling-id", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sibling-id", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sibling-id", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sort-key", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-key", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-key", ...args: any[]): void
    connect(sigName: "notify::time-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-detected", ...args: any[]): void
    connect(sigName: "notify::time-media-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-media-detected", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-media-detected", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::wwn", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wwn", callback: (($obj: DriveProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wwn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksDriveProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DriveProxy extends Gio.DBusProxy {

    // Own properties of UDisks-2.0.UDisks.DriveProxy

    static name: string
    static $gtype: GObject.GType<DriveProxy>

    // Constructors of UDisks-2.0.UDisks.DriveProxy

    constructor(config?: DriveProxy_ConstructProps) 
    /**
     * Finishes an operation started with udisks_drive_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): DriveProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_drive_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): DriveProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_drive_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DriveProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DriveProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: DriveProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_proxy_new_finish() to get the result of the operation.
     * 
     * See udisks_drive_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_drive_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_drive_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface DriveSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Drive_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface DriveSkeleton extends Gio.DBusInterface, Drive {

    // Class property signals of UDisks-2.0.UDisks.DriveSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::can-power-off", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-power-off", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-power-off", ...args: any[]): void
    connect(sigName: "notify::configuration", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::configuration", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::configuration", ...args: any[]): void
    connect(sigName: "notify::connection-bus", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-bus", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection-bus", ...args: any[]): void
    connect(sigName: "notify::ejectable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ejectable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ejectable", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::media", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media", ...args: any[]): void
    connect(sigName: "notify::media-available", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-available", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-available", ...args: any[]): void
    connect(sigName: "notify::media-change-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-change-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-change-detected", ...args: any[]): void
    connect(sigName: "notify::media-compatibility", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-compatibility", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-compatibility", ...args: any[]): void
    connect(sigName: "notify::media-removable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-removable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-removable", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::optical", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical", ...args: any[]): void
    connect(sigName: "notify::optical-blank", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-blank", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-blank", ...args: any[]): void
    connect(sigName: "notify::optical-num-audio-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-audio-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-num-audio-tracks", ...args: any[]): void
    connect(sigName: "notify::optical-num-data-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-data-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-num-data-tracks", ...args: any[]): void
    connect(sigName: "notify::optical-num-sessions", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-sessions", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-num-sessions", ...args: any[]): void
    connect(sigName: "notify::optical-num-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::optical-num-tracks", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::optical-num-tracks", ...args: any[]): void
    connect(sigName: "notify::removable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removable", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::removable", ...args: any[]): void
    connect(sigName: "notify::revision", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::revision", ...args: any[]): void
    connect(sigName: "notify::rotation-rate", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-rate", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-rate", ...args: any[]): void
    connect(sigName: "notify::seat", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::sibling-id", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sibling-id", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sibling-id", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sort-key", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-key", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sort-key", ...args: any[]): void
    connect(sigName: "notify::time-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-detected", ...args: any[]): void
    connect(sigName: "notify::time-media-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-media-detected", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-media-detected", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::wwn", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wwn", callback: (($obj: DriveSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wwn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksDriveSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DriveSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UDisks-2.0.UDisks.DriveSkeleton

    static name: string
    static $gtype: GObject.GType<DriveSkeleton>

    // Constructors of UDisks-2.0.UDisks.DriveSkeleton

    constructor(config?: DriveSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link>.
     * @constructor 
     */
    static new(): DriveSkeleton
    _init(config?: DriveSkeleton_ConstructProps): void
}

interface EncryptedProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Encrypted_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface EncryptedProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Encrypted {

    // Class property signals of UDisks-2.0.UDisks.EncryptedProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::child-configuration", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: EncryptedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-configuration", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksEncryptedProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class EncryptedProxy extends Gio.DBusProxy {

    // Own properties of UDisks-2.0.UDisks.EncryptedProxy

    static name: string
    static $gtype: GObject.GType<EncryptedProxy>

    // Constructors of UDisks-2.0.UDisks.EncryptedProxy

    constructor(config?: EncryptedProxy_ConstructProps) 
    /**
     * Finishes an operation started with udisks_encrypted_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): EncryptedProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_encrypted_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): EncryptedProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_encrypted_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_encrypted_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): EncryptedProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_encrypted_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): EncryptedProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: EncryptedProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_encrypted_proxy_new_finish() to get the result of the operation.
     * 
     * See udisks_encrypted_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_encrypted_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_encrypted_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_encrypted_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface EncryptedSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Encrypted_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface EncryptedSkeleton extends Gio.DBusInterface, Encrypted {

    // Class property signals of UDisks-2.0.UDisks.EncryptedSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::child-configuration", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: EncryptedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-configuration", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksEncryptedSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class EncryptedSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UDisks-2.0.UDisks.EncryptedSkeleton

    static name: string
    static $gtype: GObject.GType<EncryptedSkeleton>

    // Constructors of UDisks-2.0.UDisks.EncryptedSkeleton

    constructor(config?: EncryptedSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link>.
     * @constructor 
     */
    static new(): EncryptedSkeleton
    _init(config?: EncryptedSkeleton_ConstructProps): void
}

interface FilesystemProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Filesystem_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface FilesystemProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Filesystem {

    // Class property signals of UDisks-2.0.UDisks.FilesystemProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::mount-points", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: FilesystemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mount-points", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksFilesystemProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class FilesystemProxy extends Gio.DBusProxy {

    // Own properties of UDisks-2.0.UDisks.FilesystemProxy

    static name: string
    static $gtype: GObject.GType<FilesystemProxy>

    // Constructors of UDisks-2.0.UDisks.FilesystemProxy

    constructor(config?: FilesystemProxy_ConstructProps) 
    /**
     * Finishes an operation started with udisks_filesystem_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): FilesystemProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_filesystem_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): FilesystemProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_filesystem_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_filesystem_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): FilesystemProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_filesystem_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): FilesystemProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: FilesystemProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_filesystem_proxy_new_finish() to get the result of the operation.
     * 
     * See udisks_filesystem_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_filesystem_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_filesystem_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_filesystem_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface FilesystemSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Filesystem_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface FilesystemSkeleton extends Gio.DBusInterface, Filesystem {

    // Class property signals of UDisks-2.0.UDisks.FilesystemSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::mount-points", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: FilesystemSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mount-points", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksFilesystemSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class FilesystemSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UDisks-2.0.UDisks.FilesystemSkeleton

    static name: string
    static $gtype: GObject.GType<FilesystemSkeleton>

    // Constructors of UDisks-2.0.UDisks.FilesystemSkeleton

    constructor(config?: FilesystemSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link>.
     * @constructor 
     */
    static new(): FilesystemSkeleton
    _init(config?: FilesystemSkeleton_ConstructProps): void
}

interface JobProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Job_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface JobProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Job {

    // Class property signals of UDisks-2.0.UDisks.JobProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::bytes", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bytes", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::expected-end-time", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expected-end-time", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expected-end-time", ...args: any[]): void
    connect(sigName: "notify::objects", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::objects", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::objects", ...args: any[]): void
    connect(sigName: "notify::operation", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operation", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operation", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::progress-valid", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-valid", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-valid", ...args: any[]): void
    connect(sigName: "notify::rate", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::started-by-uid", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::started-by-uid", callback: (($obj: JobProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::started-by-uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksJobProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class JobProxy extends Gio.DBusProxy {

    // Own properties of UDisks-2.0.UDisks.JobProxy

    static name: string
    static $gtype: GObject.GType<JobProxy>

    // Constructors of UDisks-2.0.UDisks.JobProxy

    constructor(config?: JobProxy_ConstructProps) 
    /**
     * Finishes an operation started with udisks_job_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_job_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): JobProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_job_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_job_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): JobProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_job_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_job_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): JobProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_job_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): JobProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: JobProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_job_proxy_new_finish() to get the result of the operation.
     * 
     * See udisks_job_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_job_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_job_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_job_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface JobSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Job_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface JobSkeleton extends Gio.DBusInterface, Job {

    // Class property signals of UDisks-2.0.UDisks.JobSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::bytes", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bytes", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelable", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::expected-end-time", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expected-end-time", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expected-end-time", ...args: any[]): void
    connect(sigName: "notify::objects", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::objects", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::objects", ...args: any[]): void
    connect(sigName: "notify::operation", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operation", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operation", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::progress-valid", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-valid", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-valid", ...args: any[]): void
    connect(sigName: "notify::rate", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::started-by-uid", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::started-by-uid", callback: (($obj: JobSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::started-by-uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksJobSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class JobSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UDisks-2.0.UDisks.JobSkeleton

    static name: string
    static $gtype: GObject.GType<JobSkeleton>

    // Constructors of UDisks-2.0.UDisks.JobSkeleton

    constructor(config?: JobSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link>.
     * @constructor 
     */
    static new(): JobSkeleton
    _init(config?: JobSkeleton_ConstructProps): void
}

interface LoopProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Loop_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface LoopProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Loop {

    // Class property signals of UDisks-2.0.UDisks.LoopProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::autoclear", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoclear", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::autoclear", ...args: any[]): void
    connect(sigName: "notify::backing-file", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backing-file", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backing-file", ...args: any[]): void
    connect(sigName: "notify::setup-by-uid", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::setup-by-uid", callback: (($obj: LoopProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::setup-by-uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksLoopProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class LoopProxy extends Gio.DBusProxy {

    // Own properties of UDisks-2.0.UDisks.LoopProxy

    static name: string
    static $gtype: GObject.GType<LoopProxy>

    // Constructors of UDisks-2.0.UDisks.LoopProxy

    constructor(config?: LoopProxy_ConstructProps) 
    /**
     * Finishes an operation started with udisks_loop_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_loop_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): LoopProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_loop_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_loop_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): LoopProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_loop_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_loop_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): LoopProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_loop_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): LoopProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: LoopProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_loop_proxy_new_finish() to get the result of the operation.
     * 
     * See udisks_loop_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_loop_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_loop_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_loop_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface LoopSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Loop_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface LoopSkeleton extends Gio.DBusInterface, Loop {

    // Class property signals of UDisks-2.0.UDisks.LoopSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::autoclear", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoclear", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::autoclear", ...args: any[]): void
    connect(sigName: "notify::backing-file", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backing-file", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backing-file", ...args: any[]): void
    connect(sigName: "notify::setup-by-uid", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::setup-by-uid", callback: (($obj: LoopSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::setup-by-uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksLoopSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class LoopSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UDisks-2.0.UDisks.LoopSkeleton

    static name: string
    static $gtype: GObject.GType<LoopSkeleton>

    // Constructors of UDisks-2.0.UDisks.LoopSkeleton

    constructor(config?: LoopSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link>.
     * @constructor 
     */
    static new(): LoopSkeleton
    _init(config?: LoopSkeleton_ConstructProps): void
}

interface MDRaidProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, MDRaid_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface MDRaidProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, MDRaid {

    // Class property signals of UDisks-2.0.UDisks.MDRaidProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::active-devices", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-devices", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-devices", ...args: any[]): void
    connect(sigName: "notify::bitmap-location", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitmap-location", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bitmap-location", ...args: any[]): void
    connect(sigName: "notify::child-configuration", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-configuration", ...args: any[]): void
    connect(sigName: "notify::chunk-size", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chunk-size", ...args: any[]): void
    connect(sigName: "notify::degraded", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::degraded", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::degraded", ...args: any[]): void
    connect(sigName: "notify::level", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::num-devices", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-devices", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-devices", ...args: any[]): void
    connect(sigName: "notify::running", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sync-action", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-action", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-action", ...args: any[]): void
    connect(sigName: "notify::sync-completed", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-completed", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-completed", ...args: any[]): void
    connect(sigName: "notify::sync-rate", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-rate", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-rate", ...args: any[]): void
    connect(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-remaining-time", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: MDRaidProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksMDRaidProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MDRaidProxy extends Gio.DBusProxy {

    // Own properties of UDisks-2.0.UDisks.MDRaidProxy

    static name: string
    static $gtype: GObject.GType<MDRaidProxy>

    // Constructors of UDisks-2.0.UDisks.MDRaidProxy

    constructor(config?: MDRaidProxy_ConstructProps) 
    /**
     * Finishes an operation started with udisks_mdraid_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): MDRaidProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_mdraid_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): MDRaidProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_mdraid_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): MDRaidProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): MDRaidProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: MDRaidProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_proxy_new_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_mdraid_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface MDRaidSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, MDRaid_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface MDRaidSkeleton extends Gio.DBusInterface, MDRaid {

    // Class property signals of UDisks-2.0.UDisks.MDRaidSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::active-devices", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-devices", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-devices", ...args: any[]): void
    connect(sigName: "notify::bitmap-location", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bitmap-location", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bitmap-location", ...args: any[]): void
    connect(sigName: "notify::child-configuration", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-configuration", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-configuration", ...args: any[]): void
    connect(sigName: "notify::chunk-size", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chunk-size", ...args: any[]): void
    connect(sigName: "notify::degraded", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::degraded", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::degraded", ...args: any[]): void
    connect(sigName: "notify::level", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::num-devices", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-devices", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-devices", ...args: any[]): void
    connect(sigName: "notify::running", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sync-action", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-action", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-action", ...args: any[]): void
    connect(sigName: "notify::sync-completed", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-completed", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-completed", ...args: any[]): void
    connect(sigName: "notify::sync-rate", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-rate", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-rate", ...args: any[]): void
    connect(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-remaining-time", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-remaining-time", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: MDRaidSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksMDRaidSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MDRaidSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UDisks-2.0.UDisks.MDRaidSkeleton

    static name: string
    static $gtype: GObject.GType<MDRaidSkeleton>

    // Constructors of UDisks-2.0.UDisks.MDRaidSkeleton

    constructor(config?: MDRaidSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link>.
     * @constructor 
     */
    static new(): MDRaidSkeleton
    _init(config?: MDRaidSkeleton_ConstructProps): void
}

interface ManagerProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Manager_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface ManagerProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Manager {

    // Class property signals of UDisks-2.0.UDisks.ManagerProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::supported-filesystems", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-filesystems", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::supported-filesystems", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksManagerProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ManagerProxy extends Gio.DBusProxy {

    // Own properties of UDisks-2.0.UDisks.ManagerProxy

    static name: string
    static $gtype: GObject.GType<ManagerProxy>

    // Constructors of UDisks-2.0.UDisks.ManagerProxy

    constructor(config?: ManagerProxy_ConstructProps) 
    /**
     * Finishes an operation started with udisks_manager_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): ManagerProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_manager_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_manager_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_manager_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ManagerProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_manager_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ManagerProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ManagerProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_manager_proxy_new_finish() to get the result of the operation.
     * 
     * See udisks_manager_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_manager_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_manager_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_manager_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface ManagerSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Manager_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface ManagerSkeleton extends Gio.DBusInterface, Manager {

    // Class property signals of UDisks-2.0.UDisks.ManagerSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::supported-filesystems", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-filesystems", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::supported-filesystems", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksManagerSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UDisks-2.0.UDisks.ManagerSkeleton

    static name: string
    static $gtype: GObject.GType<ManagerSkeleton>

    // Constructors of UDisks-2.0.UDisks.ManagerSkeleton

    constructor(config?: ManagerSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link>.
     * @constructor 
     */
    static new(): ManagerSkeleton
    _init(config?: ManagerSkeleton_ConstructProps): void
}

interface ObjectInfo_ConstructProps extends GObject.Object_ConstructProps {
}

interface ObjectInfo {

    // Owm methods of UDisks-2.0.UDisks.ObjectInfo

    /**
     * Gets the description.
     */
    get_description(): string
    /**
     * Gets the icon.
     */
    get_icon(): Gio.Icon
    /**
     * Gets the symbolic icon.
     */
    get_icon_symbolic(): Gio.Icon
    /**
     * Gets the media description.
     */
    get_media_description(): string
    /**
     * Gets the media icon.
     */
    get_media_icon(): Gio.Icon
    /**
     * Gets the symbolic media icon.
     */
    get_media_icon_symbolic(): Gio.Icon
    /**
     * Gets the name.
     */
    get_name(): string
    /**
     * Gets the #UDisksObject that `info` is for
     */
    get_object(): Object
    /**
     * Gets a one-line description.
     */
    get_one_liner(): string
    /**
     * Gets the sort-key for `info`. This can be used with g_strcmp0() to
     * sort objects.
     */
    get_sort_key(): string

    // Class property signals of UDisks-2.0.UDisks.ObjectInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Detailed information about the D-Bus interfaces (such as
 * #UDisksBlock and #UDisksDrive) on a #UDisksObject that is suitable
 * to display in an user interface. Use
 * udisks_client_get_object_info() to get #UDisksObjectInfo objects.
 * Note that #UDisksObjectInfo is an immutable object; once it has
 * been created it cannot be modified further.
 * 
 * The <link
 * linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintName">HintName</link>
 * and/or <link
 * linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintName">HintIconName</link>
 * propreties on associated #UDisksBlock interfaces (if any) may
 * influence what udisks_object_info_get_icon() and
 * udisks_object_info_get_media_icon() returns.
 * 
 * The value return by udisks_object_info_get_one_liner() is designed
 * to contain enough information such that it is all that needs to be
 * shown about the object. As a result for e.g.  block devices or
 * drives it contains the special device device
 * e.g. <filename>/dev/sda</filename>.
 * @class 
 */
class ObjectInfo extends GObject.Object {

    // Own properties of UDisks-2.0.UDisks.ObjectInfo

    static name: string
    static $gtype: GObject.GType<ObjectInfo>

    // Constructors of UDisks-2.0.UDisks.ObjectInfo

    constructor(config?: ObjectInfo_ConstructProps) 
    _init(config?: ObjectInfo_ConstructProps): void
}

interface ObjectManagerClient_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusObjectManager_ConstructProps, Gio.Initable_ConstructProps, Gio.DBusObjectManagerClient_ConstructProps {
}

interface ObjectManagerClient extends Gio.AsyncInitable, Gio.DBusObjectManager, Gio.Initable {

    // Class property signals of UDisks-2.0.UDisks.ObjectManagerClient

    connect(sigName: "notify::bus-type", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus-type", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bus-type", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-destroy-notify", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::get-proxy-type-destroy-notify", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::get-proxy-type-destroy-notify", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-func", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::get-proxy-type-func", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::get-proxy-type-func", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-user-data", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::get-proxy-type-user-data", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::get-proxy-type-user-data", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::name-owner", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name-owner", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksObjectManagerClient structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ObjectManagerClient extends Gio.DBusObjectManagerClient {

    // Own properties of UDisks-2.0.UDisks.ObjectManagerClient

    static name: string
    static $gtype: GObject.GType<ObjectManagerClient>

    // Constructors of UDisks-2.0.UDisks.ObjectManagerClient

    constructor(config?: ObjectManagerClient_ConstructProps) 
    /**
     * Finishes an operation started with udisks_object_manager_client_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_object_manager_client_new().
     */
    static new_finish(res: Gio.AsyncResult): ObjectManagerClient

    // Overloads of new_finish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Finishes an operation started with udisks_object_manager_client_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_object_manager_client_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ObjectManagerClient

    // Overloads of new_for_bus_finish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new_for_bus().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Like udisks_object_manager_client_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_object_manager_client_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ObjectManagerClient

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_object_manager_client_new_sync() but takes a #GBusType instead
     * of a #GDBusConnection.
     * 
     * This is a synchronous failable constructor - the calling thread is
     * blocked until a reply is received. See g_dbus_object_manager_client_new_for_bus()
     * for the asynchronous version.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name).
     * @param object_path The object path of the control object.
     * @param get_proxy_type_func A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null): Gio.DBusObjectManagerClient
    /**
     * Synchronously creates #GDBusObjectManagerClient using udisks_object_manager_client_get_proxy_type() as the #GDBusProxyTypeFunc. See g_dbus_object_manager_client_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_object_manager_client_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ObjectManagerClient

    // Overloads of new_sync

    /**
     * Creates a new #GDBusObjectManagerClient object.
     * 
     * This is a synchronous failable constructor - the calling thread is
     * blocked until a reply is received. See g_dbus_object_manager_client_new()
     * for the asynchronous version.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name), or %NULL when not using a message bus connection.
     * @param object_path The object path of the control object.
     * @param get_proxy_type_func A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, get_proxy_type_func: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null): Gio.DBusObjectManagerClient
    _init(config?: ObjectManagerClient_ConstructProps): void
    /**
     * Asynchronously creates #GDBusObjectManagerClient using udisks_object_manager_client_get_proxy_type() as the #GDBusProxyTypeFunc. See g_dbus_object_manager_client_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_object_manager_client_new_finish() to get the result of the operation.
     * 
     * See udisks_object_manager_client_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusObjectManagerClientFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Asynchronously creates a new #GDBusObjectManagerClient object.
     * 
     * This is an asynchronous failable constructor. When the result is
     * ready, `callback` will be invoked in the
     * [thread-default main context][g-main-context-push-thread-default]
     * of the thread you are calling this method from. You can
     * then call g_dbus_object_manager_client_new_finish() to get the result. See
     * g_dbus_object_manager_client_new_sync() for the synchronous version.
     * @param connection A #GDBusConnection.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name).
     * @param object_path The object path of the control object.
     * @param get_proxy_type_func A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusObjectManagerClientFlags, name?: string, object_path?: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusObjectManagerClientFlags, name?: string, object_path?: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_object_manager_client_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_object_manager_client_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_object_manager_client_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusObjectManagerClientFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_object_manager_client_new() but takes a #GBusType instead of a
     * #GDBusConnection.
     * 
     * This is an asynchronous failable constructor. When the result is
     * ready, `callback` will be invoked in the
     * [thread-default main loop][g-main-context-push-thread-default]
     * of the thread you are calling this method from. You can
     * then call g_dbus_object_manager_client_new_for_bus_finish() to get the result. See
     * g_dbus_object_manager_client_new_for_bus_sync() for the synchronous version.
     * @param bus_type A #GBusType.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name).
     * @param object_path The object path of the control object.
     * @param get_proxy_type_func A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusObjectManagerClientFlags, name?: string, object_path?: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusObjectManagerClientFlags, name?: string, object_path?: string, get_proxy_type_func?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * A #GDBusProxyTypeFunc that maps `interface_name` to the generated #GDBusObjectProxy<!-- -->- and #GDBusProxy<!-- -->-derived types.
     * @param manager A #GDBusObjectManagerClient.
     * @param object_path The object path of the remote object (unused).
     * @param interface_name Interface name of the remote object or %NULL to get the object proxy #GType.
     * @param user_data User data (unused).
     */
    static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string, interface_name: string | null, user_data: object | null): GObject.GType
}

interface ObjectProxy_ConstructProps extends Gio.DBusObject_ConstructProps, Object_ConstructProps, Gio.DBusObjectProxy_ConstructProps {
}

interface ObjectProxy extends Gio.DBusObject, Object {

    // Class property signals of UDisks-2.0.UDisks.ObjectProxy

    connect(sigName: "notify::g-connection", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::block", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::drive", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drive", ...args: any[]): void
    connect(sigName: "notify::drive-ata", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive-ata", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drive-ata", ...args: any[]): void
    connect(sigName: "notify::encrypted", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypted", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::encrypted", ...args: any[]): void
    connect(sigName: "notify::filesystem", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filesystem", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filesystem", ...args: any[]): void
    connect(sigName: "notify::job", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::job", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::job", ...args: any[]): void
    connect(sigName: "notify::loop", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::loop", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::mdraid", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mdraid", ...args: any[]): void
    connect(sigName: "notify::partition", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::partition", ...args: any[]): void
    connect(sigName: "notify::partition-table", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition-table", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::partition-table", ...args: any[]): void
    connect(sigName: "notify::swapspace", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swapspace", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swapspace", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksObjectProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ObjectProxy extends Gio.DBusObjectProxy {

    // Own properties of UDisks-2.0.UDisks.ObjectProxy

    static name: string
    static $gtype: GObject.GType<ObjectProxy>

    // Constructors of UDisks-2.0.UDisks.ObjectProxy

    constructor(config?: ObjectProxy_ConstructProps) 
    /**
     * Creates a new proxy object.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param object_path An object path.
     */
    constructor(connection: Gio.DBusConnection, object_path: string) 
    /**
     * Creates a new proxy object.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param object_path An object path.
     */
    static new(connection: Gio.DBusConnection, object_path: string): ObjectProxy

    // Overloads of new

    /**
     * Creates a new #GDBusObjectProxy for the given connection and
     * object path.
     * @constructor 
     * @param connection a #GDBusConnection
     * @param object_path the object path
     */
    static new(connection: Gio.DBusConnection, object_path: string): Gio.DBusObjectProxy
    _init(config?: ObjectProxy_ConstructProps): void
}

interface ObjectSkeleton_ConstructProps extends Gio.DBusObject_ConstructProps, Object_ConstructProps, Gio.DBusObjectSkeleton_ConstructProps {
}

interface ObjectSkeleton extends Gio.DBusObject, Object {

    // Owm methods of UDisks-2.0.UDisks.ObjectSkeleton

    /**
     * Sets the #UDisksBlock instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link> on `object`.
     * @param interface_ A #UDisksBlock or %NULL to clear the interface.
     */
    set_block(interface_: Block | null): void
    /**
     * Sets the #UDisksDrive instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link> on `object`.
     * @param interface_ A #UDisksDrive or %NULL to clear the interface.
     */
    set_drive(interface_: Drive | null): void
    /**
     * Sets the #UDisksDriveAta instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link> on `object`.
     * @param interface_ A #UDisksDriveAta or %NULL to clear the interface.
     */
    set_drive_ata(interface_: DriveAta | null): void
    /**
     * Sets the #UDisksEncrypted instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link> on `object`.
     * @param interface_ A #UDisksEncrypted or %NULL to clear the interface.
     */
    set_encrypted(interface_: Encrypted | null): void
    /**
     * Sets the #UDisksFilesystem instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link> on `object`.
     * @param interface_ A #UDisksFilesystem or %NULL to clear the interface.
     */
    set_filesystem(interface_: Filesystem | null): void
    /**
     * Sets the #UDisksJob instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link> on `object`.
     * @param interface_ A #UDisksJob or %NULL to clear the interface.
     */
    set_job(interface_: Job | null): void
    /**
     * Sets the #UDisksLoop instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link> on `object`.
     * @param interface_ A #UDisksLoop or %NULL to clear the interface.
     */
    set_loop(interface_: Loop | null): void
    /**
     * Sets the #UDisksManager instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link> on `object`.
     * @param interface_ A #UDisksManager or %NULL to clear the interface.
     */
    set_manager(interface_: Manager | null): void
    /**
     * Sets the #UDisksMDRaid instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link> on `object`.
     * @param interface_ A #UDisksMDRaid or %NULL to clear the interface.
     */
    set_mdraid(interface_: MDRaid | null): void
    /**
     * Sets the #UDisksPartition instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link> on `object`.
     * @param interface_ A #UDisksPartition or %NULL to clear the interface.
     */
    set_partition(interface_: Partition | null): void
    /**
     * Sets the #UDisksPartitionTable instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link> on `object`.
     * @param interface_ A #UDisksPartitionTable or %NULL to clear the interface.
     */
    set_partition_table(interface_: PartitionTable | null): void
    /**
     * Sets the #UDisksSwapspace instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link> on `object`.
     * @param interface_ A #UDisksSwapspace or %NULL to clear the interface.
     */
    set_swapspace(interface_: Swapspace | null): void

    // Class property signals of UDisks-2.0.UDisks.ObjectSkeleton

    connect(sigName: "notify::g-object-path", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::block", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::drive", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drive", ...args: any[]): void
    connect(sigName: "notify::drive-ata", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drive-ata", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drive-ata", ...args: any[]): void
    connect(sigName: "notify::encrypted", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypted", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::encrypted", ...args: any[]): void
    connect(sigName: "notify::filesystem", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filesystem", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filesystem", ...args: any[]): void
    connect(sigName: "notify::job", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::job", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::job", ...args: any[]): void
    connect(sigName: "notify::loop", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::loop", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::mdraid", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mdraid", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mdraid", ...args: any[]): void
    connect(sigName: "notify::partition", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::partition", ...args: any[]): void
    connect(sigName: "notify::partition-table", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::partition-table", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::partition-table", ...args: any[]): void
    connect(sigName: "notify::swapspace", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swapspace", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swapspace", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksObjectSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ObjectSkeleton extends Gio.DBusObjectSkeleton {

    // Own properties of UDisks-2.0.UDisks.ObjectSkeleton

    static name: string
    static $gtype: GObject.GType<ObjectSkeleton>

    // Constructors of UDisks-2.0.UDisks.ObjectSkeleton

    constructor(config?: ObjectSkeleton_ConstructProps) 
    /**
     * Creates a new skeleton object.
     * @constructor 
     * @param object_path An object path.
     */
    constructor(object_path: string) 
    /**
     * Creates a new skeleton object.
     * @constructor 
     * @param object_path An object path.
     */
    static new(object_path: string): ObjectSkeleton

    // Overloads of new

    /**
     * Creates a new #GDBusObjectSkeleton.
     * @constructor 
     * @param object_path An object path.
     */
    static new(object_path: string): Gio.DBusObjectSkeleton
    _init(config?: ObjectSkeleton_ConstructProps): void
}

interface PartitionProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Partition_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface PartitionProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Partition {

    // Class property signals of UDisks-2.0.UDisks.PartitionProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::is-contained", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-contained", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-contained", ...args: any[]): void
    connect(sigName: "notify::is-container", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-container", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-container", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::number", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::table", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: PartitionProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksPartitionProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class PartitionProxy extends Gio.DBusProxy {

    // Own properties of UDisks-2.0.UDisks.PartitionProxy

    static name: string
    static $gtype: GObject.GType<PartitionProxy>

    // Constructors of UDisks-2.0.UDisks.PartitionProxy

    constructor(config?: PartitionProxy_ConstructProps) 
    /**
     * Finishes an operation started with udisks_partition_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): PartitionProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_partition_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): PartitionProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_partition_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): PartitionProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): PartitionProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: PartitionProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_proxy_new_finish() to get the result of the operation.
     * 
     * See udisks_partition_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_partition_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_partition_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface PartitionSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Partition_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface PartitionSkeleton extends Gio.DBusInterface, Partition {

    // Class property signals of UDisks-2.0.UDisks.PartitionSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::is-contained", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-contained", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-contained", ...args: any[]): void
    connect(sigName: "notify::is-container", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-container", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-container", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::number", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::table", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::table", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: PartitionSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksPartitionSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class PartitionSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UDisks-2.0.UDisks.PartitionSkeleton

    static name: string
    static $gtype: GObject.GType<PartitionSkeleton>

    // Constructors of UDisks-2.0.UDisks.PartitionSkeleton

    constructor(config?: PartitionSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link>.
     * @constructor 
     */
    static new(): PartitionSkeleton
    _init(config?: PartitionSkeleton_ConstructProps): void
}

interface PartitionTableProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, PartitionTable_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface PartitionTableProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, PartitionTable {

    // Class property signals of UDisks-2.0.UDisks.PartitionTableProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PartitionTableProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksPartitionTableProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class PartitionTableProxy extends Gio.DBusProxy {

    // Own properties of UDisks-2.0.UDisks.PartitionTableProxy

    static name: string
    static $gtype: GObject.GType<PartitionTableProxy>

    // Constructors of UDisks-2.0.UDisks.PartitionTableProxy

    constructor(config?: PartitionTableProxy_ConstructProps) 
    /**
     * Finishes an operation started with udisks_partition_table_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_table_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): PartitionTableProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_partition_table_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_table_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): PartitionTableProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_partition_table_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_table_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): PartitionTableProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_table_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): PartitionTableProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: PartitionTableProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_table_proxy_new_finish() to get the result of the operation.
     * 
     * See udisks_partition_table_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_partition_table_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_table_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_partition_table_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface PartitionTableSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, PartitionTable_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface PartitionTableSkeleton extends Gio.DBusInterface, PartitionTable {

    // Class property signals of UDisks-2.0.UDisks.PartitionTableSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: PartitionTableSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksPartitionTableSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class PartitionTableSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UDisks-2.0.UDisks.PartitionTableSkeleton

    static name: string
    static $gtype: GObject.GType<PartitionTableSkeleton>

    // Constructors of UDisks-2.0.UDisks.PartitionTableSkeleton

    constructor(config?: PartitionTableSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link>.
     * @constructor 
     */
    static new(): PartitionTableSkeleton
    _init(config?: PartitionTableSkeleton_ConstructProps): void
}

interface SwapspaceProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Swapspace_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface SwapspaceProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Swapspace {

    // Class property signals of UDisks-2.0.UDisks.SwapspaceProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SwapspaceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksSwapspaceProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class SwapspaceProxy extends Gio.DBusProxy {

    // Own properties of UDisks-2.0.UDisks.SwapspaceProxy

    static name: string
    static $gtype: GObject.GType<SwapspaceProxy>

    // Constructors of UDisks-2.0.UDisks.SwapspaceProxy

    constructor(config?: SwapspaceProxy_ConstructProps) 
    /**
     * Finishes an operation started with udisks_swapspace_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_swapspace_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): SwapspaceProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_swapspace_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_swapspace_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): SwapspaceProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_swapspace_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_swapspace_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): SwapspaceProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_swapspace_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): SwapspaceProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: SwapspaceProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_swapspace_proxy_new_finish() to get the result of the operation.
     * 
     * See udisks_swapspace_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_swapspace_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_swapspace_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_swapspace_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface SwapspaceSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Swapspace_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface SwapspaceSkeleton extends Gio.DBusInterface, Swapspace {

    // Class property signals of UDisks-2.0.UDisks.SwapspaceSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SwapspaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UDisksSwapspaceSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class SwapspaceSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UDisks-2.0.UDisks.SwapspaceSkeleton

    static name: string
    static $gtype: GObject.GType<SwapspaceSkeleton>

    // Constructors of UDisks-2.0.UDisks.SwapspaceSkeleton

    constructor(config?: SwapspaceSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link>.
     * @constructor 
     */
    static new(): SwapspaceSkeleton
    _init(config?: SwapspaceSkeleton_ConstructProps): void
}

interface BlockIface {

    // Own fields of UDisks-2.0.UDisks.BlockIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_add_configuration_item: (object: Block, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean
    handle_format: (object: Block, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean
    handle_get_secret_configuration: (object: Block, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_open_for_backup: (object: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant) => boolean
    handle_open_for_benchmark: (object: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant) => boolean
    handle_open_for_restore: (object: Block, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_options: GLib.Variant) => boolean
    handle_remove_configuration_item: (object: Block, invocation: Gio.DBusMethodInvocation, arg_item: GLib.Variant, arg_options: GLib.Variant) => boolean
    handle_rescan: (object: Block, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_update_configuration_item: (object: Block, invocation: Gio.DBusMethodInvocation, arg_old_item: GLib.Variant, arg_new_item: GLib.Variant, arg_options: GLib.Variant) => boolean
    get_configuration: (object: Block) => GLib.Variant
    get_crypto_backing_device: (object: Block) => string
    get_device: (object: Block) => string
    get_device_number: (object: Block) => number
    get_drive: (object: Block) => string
    get_hint_auto: (object: Block) => boolean
    get_hint_icon_name: (object: Block) => string
    get_hint_ignore: (object: Block) => boolean
    get_hint_name: (object: Block) => string
    get_hint_partitionable: (object: Block) => boolean
    get_hint_system: (object: Block) => boolean
    get_id_label: (object: Block) => string
    get_id_type: (object: Block) => string
    get_id_usage: (object: Block) => string
    get_id_uuid: (object: Block) => string
    get_id_version: (object: Block) => string
    get_preferred_device: (object: Block) => string
    get_read_only: (object: Block) => boolean
    get_size: (object: Block) => number
    get_symlinks: (object: Block) => string[]
    get_hint_symbolic_icon_name: (object: Block) => string
    get_id: (object: Block) => string
    get_mdraid: (object: Block) => string
    get_mdraid_member: (object: Block) => string
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link>.
 * @record 
 */
abstract class BlockIface {

    // Own properties of UDisks-2.0.UDisks.BlockIface

    static name: string
}

interface BlockProxyClass {

    // Own fields of UDisks-2.0.UDisks.BlockProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UDisksBlockProxy.
 * @record 
 */
abstract class BlockProxyClass {

    // Own properties of UDisks-2.0.UDisks.BlockProxyClass

    static name: string
}

interface BlockProxyPrivate {
}

class BlockProxyPrivate {

    // Own properties of UDisks-2.0.UDisks.BlockProxyPrivate

    static name: string
}

interface BlockSkeletonClass {

    // Own fields of UDisks-2.0.UDisks.BlockSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UDisksBlockSkeleton.
 * @record 
 */
abstract class BlockSkeletonClass {

    // Own properties of UDisks-2.0.UDisks.BlockSkeletonClass

    static name: string
}

interface BlockSkeletonPrivate {
}

class BlockSkeletonPrivate {

    // Own properties of UDisks-2.0.UDisks.BlockSkeletonPrivate

    static name: string
}

interface DriveAtaIface {

    // Own fields of UDisks-2.0.UDisks.DriveAtaIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_pm_get_state: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_pm_standby: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_pm_wakeup: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_security_erase_unit: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_smart_get_attributes: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_smart_selftest_abort: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_smart_selftest_start: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean
    handle_smart_update: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    get_aam_enabled: (object: DriveAta) => boolean
    get_aam_supported: (object: DriveAta) => boolean
    get_aam_vendor_recommended_value: (object: DriveAta) => number
    get_apm_enabled: (object: DriveAta) => boolean
    get_apm_supported: (object: DriveAta) => boolean
    get_pm_enabled: (object: DriveAta) => boolean
    get_pm_supported: (object: DriveAta) => boolean
    get_security_enhanced_erase_unit_minutes: (object: DriveAta) => number
    get_security_erase_unit_minutes: (object: DriveAta) => number
    get_security_frozen: (object: DriveAta) => boolean
    get_smart_enabled: (object: DriveAta) => boolean
    get_smart_failing: (object: DriveAta) => boolean
    get_smart_num_attributes_failed_in_the_past: (object: DriveAta) => number
    get_smart_num_attributes_failing: (object: DriveAta) => number
    get_smart_num_bad_sectors: (object: DriveAta) => number
    get_smart_power_on_seconds: (object: DriveAta) => number
    get_smart_selftest_percent_remaining: (object: DriveAta) => number
    get_smart_selftest_status: (object: DriveAta) => string
    get_smart_supported: (object: DriveAta) => boolean
    get_smart_temperature: (object: DriveAta) => number
    get_smart_updated: (object: DriveAta) => number
    handle_smart_set_enabled: (object: DriveAta, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean
    get_write_cache_enabled: (object: DriveAta) => boolean
    get_write_cache_supported: (object: DriveAta) => boolean
    get_read_lookahead_enabled: (object: DriveAta) => boolean
    get_read_lookahead_supported: (object: DriveAta) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>.
 * @record 
 */
abstract class DriveAtaIface {

    // Own properties of UDisks-2.0.UDisks.DriveAtaIface

    static name: string
}

interface DriveAtaProxyClass {

    // Own fields of UDisks-2.0.UDisks.DriveAtaProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UDisksDriveAtaProxy.
 * @record 
 */
abstract class DriveAtaProxyClass {

    // Own properties of UDisks-2.0.UDisks.DriveAtaProxyClass

    static name: string
}

interface DriveAtaProxyPrivate {
}

class DriveAtaProxyPrivate {

    // Own properties of UDisks-2.0.UDisks.DriveAtaProxyPrivate

    static name: string
}

interface DriveAtaSkeletonClass {

    // Own fields of UDisks-2.0.UDisks.DriveAtaSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UDisksDriveAtaSkeleton.
 * @record 
 */
abstract class DriveAtaSkeletonClass {

    // Own properties of UDisks-2.0.UDisks.DriveAtaSkeletonClass

    static name: string
}

interface DriveAtaSkeletonPrivate {
}

class DriveAtaSkeletonPrivate {

    // Own properties of UDisks-2.0.UDisks.DriveAtaSkeletonPrivate

    static name: string
}

interface DriveIface {

    // Own fields of UDisks-2.0.UDisks.DriveIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_eject: (object: Drive, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_set_configuration: (object: Drive, invocation: Gio.DBusMethodInvocation, arg_value: GLib.Variant, arg_options: GLib.Variant) => boolean
    get_configuration: (object: Drive) => GLib.Variant
    get_connection_bus: (object: Drive) => string
    get_ejectable: (object: Drive) => boolean
    get_id: (object: Drive) => string
    get_media: (object: Drive) => string
    get_media_available: (object: Drive) => boolean
    get_media_change_detected: (object: Drive) => boolean
    get_media_compatibility: (object: Drive) => string[]
    get_media_removable: (object: Drive) => boolean
    get_model: (object: Drive) => string
    get_optical: (object: Drive) => boolean
    get_optical_blank: (object: Drive) => boolean
    get_optical_num_audio_tracks: (object: Drive) => number
    get_optical_num_data_tracks: (object: Drive) => number
    get_optical_num_sessions: (object: Drive) => number
    get_optical_num_tracks: (object: Drive) => number
    get_removable: (object: Drive) => boolean
    get_revision: (object: Drive) => string
    get_rotation_rate: (object: Drive) => number
    get_seat: (object: Drive) => string
    get_serial: (object: Drive) => string
    get_size: (object: Drive) => number
    get_sort_key: (object: Drive) => string
    get_time_detected: (object: Drive) => number
    get_time_media_detected: (object: Drive) => number
    get_vendor: (object: Drive) => string
    get_wwn: (object: Drive) => string
    handle_power_off: (object: Drive, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    get_can_power_off: (object: Drive) => boolean
    get_sibling_id: (object: Drive) => string
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link>.
 * @record 
 */
abstract class DriveIface {

    // Own properties of UDisks-2.0.UDisks.DriveIface

    static name: string
}

interface DriveProxyClass {

    // Own fields of UDisks-2.0.UDisks.DriveProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UDisksDriveProxy.
 * @record 
 */
abstract class DriveProxyClass {

    // Own properties of UDisks-2.0.UDisks.DriveProxyClass

    static name: string
}

interface DriveProxyPrivate {
}

class DriveProxyPrivate {

    // Own properties of UDisks-2.0.UDisks.DriveProxyPrivate

    static name: string
}

interface DriveSkeletonClass {

    // Own fields of UDisks-2.0.UDisks.DriveSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UDisksDriveSkeleton.
 * @record 
 */
abstract class DriveSkeletonClass {

    // Own properties of UDisks-2.0.UDisks.DriveSkeletonClass

    static name: string
}

interface DriveSkeletonPrivate {
}

class DriveSkeletonPrivate {

    // Own properties of UDisks-2.0.UDisks.DriveSkeletonPrivate

    static name: string
}

interface EncryptedIface {

    // Own fields of UDisks-2.0.UDisks.EncryptedIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_change_passphrase: (object: Encrypted, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_new_passphrase: string, arg_options: GLib.Variant) => boolean
    handle_lock: (object: Encrypted, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_unlock: (object: Encrypted, invocation: Gio.DBusMethodInvocation, arg_passphrase: string, arg_options: GLib.Variant) => boolean
    get_child_configuration: (object: Encrypted) => GLib.Variant
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link>.
 * @record 
 */
abstract class EncryptedIface {

    // Own properties of UDisks-2.0.UDisks.EncryptedIface

    static name: string
}

interface EncryptedProxyClass {

    // Own fields of UDisks-2.0.UDisks.EncryptedProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UDisksEncryptedProxy.
 * @record 
 */
abstract class EncryptedProxyClass {

    // Own properties of UDisks-2.0.UDisks.EncryptedProxyClass

    static name: string
}

interface EncryptedProxyPrivate {
}

class EncryptedProxyPrivate {

    // Own properties of UDisks-2.0.UDisks.EncryptedProxyPrivate

    static name: string
}

interface EncryptedSkeletonClass {

    // Own fields of UDisks-2.0.UDisks.EncryptedSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UDisksEncryptedSkeleton.
 * @record 
 */
abstract class EncryptedSkeletonClass {

    // Own properties of UDisks-2.0.UDisks.EncryptedSkeletonClass

    static name: string
}

interface EncryptedSkeletonPrivate {
}

class EncryptedSkeletonPrivate {

    // Own properties of UDisks-2.0.UDisks.EncryptedSkeletonPrivate

    static name: string
}

interface FilesystemIface {

    // Own fields of UDisks-2.0.UDisks.FilesystemIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_mount: (object: Filesystem, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_set_label: (object: Filesystem, invocation: Gio.DBusMethodInvocation, arg_label: string, arg_options: GLib.Variant) => boolean
    handle_unmount: (object: Filesystem, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    get_mount_points: (object: Filesystem) => string[]
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link>.
 * @record 
 */
abstract class FilesystemIface {

    // Own properties of UDisks-2.0.UDisks.FilesystemIface

    static name: string
}

interface FilesystemProxyClass {

    // Own fields of UDisks-2.0.UDisks.FilesystemProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UDisksFilesystemProxy.
 * @record 
 */
abstract class FilesystemProxyClass {

    // Own properties of UDisks-2.0.UDisks.FilesystemProxyClass

    static name: string
}

interface FilesystemProxyPrivate {
}

class FilesystemProxyPrivate {

    // Own properties of UDisks-2.0.UDisks.FilesystemProxyPrivate

    static name: string
}

interface FilesystemSkeletonClass {

    // Own fields of UDisks-2.0.UDisks.FilesystemSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UDisksFilesystemSkeleton.
 * @record 
 */
abstract class FilesystemSkeletonClass {

    // Own properties of UDisks-2.0.UDisks.FilesystemSkeletonClass

    static name: string
}

interface FilesystemSkeletonPrivate {
}

class FilesystemSkeletonPrivate {

    // Own properties of UDisks-2.0.UDisks.FilesystemSkeletonPrivate

    static name: string
}

interface JobIface {

    // Own fields of UDisks-2.0.UDisks.JobIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_cancel: (object: Job, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    get_cancelable: (object: Job) => boolean
    get_expected_end_time: (object: Job) => number
    get_objects: (object: Job) => string[]
    get_operation: (object: Job) => string
    get_progress: (object: Job) => number
    get_progress_valid: (object: Job) => boolean
    get_start_time: (object: Job) => number
    get_started_by_uid: (object: Job) => number
    completed: (object: Job, arg_success: boolean, arg_message: string) => void
    get_bytes: (object: Job) => number
    get_rate: (object: Job) => number
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link>.
 * @record 
 */
abstract class JobIface {

    // Own properties of UDisks-2.0.UDisks.JobIface

    static name: string
}

interface JobProxyClass {

    // Own fields of UDisks-2.0.UDisks.JobProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UDisksJobProxy.
 * @record 
 */
abstract class JobProxyClass {

    // Own properties of UDisks-2.0.UDisks.JobProxyClass

    static name: string
}

interface JobProxyPrivate {
}

class JobProxyPrivate {

    // Own properties of UDisks-2.0.UDisks.JobProxyPrivate

    static name: string
}

interface JobSkeletonClass {

    // Own fields of UDisks-2.0.UDisks.JobSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UDisksJobSkeleton.
 * @record 
 */
abstract class JobSkeletonClass {

    // Own properties of UDisks-2.0.UDisks.JobSkeletonClass

    static name: string
}

interface JobSkeletonPrivate {
}

class JobSkeletonPrivate {

    // Own properties of UDisks-2.0.UDisks.JobSkeletonPrivate

    static name: string
}

interface LoopIface {

    // Own fields of UDisks-2.0.UDisks.LoopIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_delete: (object: Loop, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_set_autoclear: (object: Loop, invocation: Gio.DBusMethodInvocation, arg_value: boolean, arg_options: GLib.Variant) => boolean
    get_autoclear: (object: Loop) => boolean
    get_backing_file: (object: Loop) => string
    get_setup_by_uid: (object: Loop) => number
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link>.
 * @record 
 */
abstract class LoopIface {

    // Own properties of UDisks-2.0.UDisks.LoopIface

    static name: string
}

interface LoopProxyClass {

    // Own fields of UDisks-2.0.UDisks.LoopProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UDisksLoopProxy.
 * @record 
 */
abstract class LoopProxyClass {

    // Own properties of UDisks-2.0.UDisks.LoopProxyClass

    static name: string
}

interface LoopProxyPrivate {
}

class LoopProxyPrivate {

    // Own properties of UDisks-2.0.UDisks.LoopProxyPrivate

    static name: string
}

interface LoopSkeletonClass {

    // Own fields of UDisks-2.0.UDisks.LoopSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UDisksLoopSkeleton.
 * @record 
 */
abstract class LoopSkeletonClass {

    // Own properties of UDisks-2.0.UDisks.LoopSkeletonClass

    static name: string
}

interface LoopSkeletonPrivate {
}

class LoopSkeletonPrivate {

    // Own properties of UDisks-2.0.UDisks.LoopSkeletonPrivate

    static name: string
}

interface MDRaidIface {

    // Own fields of UDisks-2.0.UDisks.MDRaidIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_add_device: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean
    handle_delete: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_remove_device: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_device: string, arg_options: GLib.Variant) => boolean
    handle_request_sync_action: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_sync_action: string, arg_options: GLib.Variant) => boolean
    handle_set_bitmap_location: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_value: string, arg_options: GLib.Variant) => boolean
    handle_start: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_stop: (object: MDRaid, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    get_active_devices: (object: MDRaid) => GLib.Variant
    get_bitmap_location: (object: MDRaid) => string
    get_child_configuration: (object: MDRaid) => GLib.Variant
    get_chunk_size: (object: MDRaid) => number
    get_degraded: (object: MDRaid) => number
    get_level: (object: MDRaid) => string
    get_name: (object: MDRaid) => string
    get_num_devices: (object: MDRaid) => number
    get_running: (object: MDRaid) => boolean
    get_size: (object: MDRaid) => number
    get_sync_action: (object: MDRaid) => string
    get_sync_completed: (object: MDRaid) => number
    get_sync_rate: (object: MDRaid) => number
    get_sync_remaining_time: (object: MDRaid) => number
    get_uuid: (object: MDRaid) => string
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link>.
 * @record 
 */
abstract class MDRaidIface {

    // Own properties of UDisks-2.0.UDisks.MDRaidIface

    static name: string
}

interface MDRaidProxyClass {

    // Own fields of UDisks-2.0.UDisks.MDRaidProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UDisksMDRaidProxy.
 * @record 
 */
abstract class MDRaidProxyClass {

    // Own properties of UDisks-2.0.UDisks.MDRaidProxyClass

    static name: string
}

interface MDRaidProxyPrivate {
}

class MDRaidProxyPrivate {

    // Own properties of UDisks-2.0.UDisks.MDRaidProxyPrivate

    static name: string
}

interface MDRaidSkeletonClass {

    // Own fields of UDisks-2.0.UDisks.MDRaidSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UDisksMDRaidSkeleton.
 * @record 
 */
abstract class MDRaidSkeletonClass {

    // Own properties of UDisks-2.0.UDisks.MDRaidSkeletonClass

    static name: string
}

interface MDRaidSkeletonPrivate {
}

class MDRaidSkeletonPrivate {

    // Own properties of UDisks-2.0.UDisks.MDRaidSkeletonPrivate

    static name: string
}

interface ManagerIface {

    // Own fields of UDisks-2.0.UDisks.ManagerIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_enable_modules: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_enable: boolean) => boolean
    handle_loop_setup: (object: Manager, invocation: Gio.DBusMethodInvocation, fd_list: Gio.UnixFDList, arg_fd: GLib.Variant, arg_options: GLib.Variant) => boolean
    get_supported_filesystems: (object: Manager) => string[]
    get_version: (object: Manager) => string
    handle_mdraid_create: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_blocks: string, arg_level: string, arg_name: string, arg_chunk: number, arg_options: GLib.Variant) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link>.
 * @record 
 */
abstract class ManagerIface {

    // Own properties of UDisks-2.0.UDisks.ManagerIface

    static name: string
}

interface ManagerProxyClass {

    // Own fields of UDisks-2.0.UDisks.ManagerProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UDisksManagerProxy.
 * @record 
 */
abstract class ManagerProxyClass {

    // Own properties of UDisks-2.0.UDisks.ManagerProxyClass

    static name: string
}

interface ManagerProxyPrivate {
}

class ManagerProxyPrivate {

    // Own properties of UDisks-2.0.UDisks.ManagerProxyPrivate

    static name: string
}

interface ManagerSkeletonClass {

    // Own fields of UDisks-2.0.UDisks.ManagerSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UDisksManagerSkeleton.
 * @record 
 */
abstract class ManagerSkeletonClass {

    // Own properties of UDisks-2.0.UDisks.ManagerSkeletonClass

    static name: string
}

interface ManagerSkeletonPrivate {
}

class ManagerSkeletonPrivate {

    // Own properties of UDisks-2.0.UDisks.ManagerSkeletonPrivate

    static name: string
}

interface ObjectIface {

    // Own fields of UDisks-2.0.UDisks.ObjectIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
}

/**
 * Virtual table for the #UDisksObject interface.
 * @record 
 */
abstract class ObjectIface {

    // Own properties of UDisks-2.0.UDisks.ObjectIface

    static name: string
}

interface ObjectManagerClientClass {

    // Own fields of UDisks-2.0.UDisks.ObjectManagerClientClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusObjectManagerClientClass
}

/**
 * Class structure for #UDisksObjectManagerClient.
 * @record 
 */
abstract class ObjectManagerClientClass {

    // Own properties of UDisks-2.0.UDisks.ObjectManagerClientClass

    static name: string
}

interface ObjectManagerClientPrivate {
}

class ObjectManagerClientPrivate {

    // Own properties of UDisks-2.0.UDisks.ObjectManagerClientPrivate

    static name: string
}

interface ObjectProxyClass {

    // Own fields of UDisks-2.0.UDisks.ObjectProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusObjectProxyClass
}

/**
 * Class structure for #UDisksObjectProxy.
 * @record 
 */
abstract class ObjectProxyClass {

    // Own properties of UDisks-2.0.UDisks.ObjectProxyClass

    static name: string
}

interface ObjectProxyPrivate {
}

class ObjectProxyPrivate {

    // Own properties of UDisks-2.0.UDisks.ObjectProxyPrivate

    static name: string
}

interface ObjectSkeletonClass {

    // Own fields of UDisks-2.0.UDisks.ObjectSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusObjectSkeletonClass
}

/**
 * Class structure for #UDisksObjectSkeleton.
 * @record 
 */
abstract class ObjectSkeletonClass {

    // Own properties of UDisks-2.0.UDisks.ObjectSkeletonClass

    static name: string
}

interface ObjectSkeletonPrivate {
}

class ObjectSkeletonPrivate {

    // Own properties of UDisks-2.0.UDisks.ObjectSkeletonPrivate

    static name: string
}

interface PartitionIface {

    // Own fields of UDisks-2.0.UDisks.PartitionIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_delete: (object: Partition, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_set_flags: (object: Partition, invocation: Gio.DBusMethodInvocation, arg_flags: number, arg_options: GLib.Variant) => boolean
    handle_set_name: (object: Partition, invocation: Gio.DBusMethodInvocation, arg_name: string, arg_options: GLib.Variant) => boolean
    handle_set_type: (object: Partition, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant) => boolean
    get_flags: (object: Partition) => number
    get_is_contained: (object: Partition) => boolean
    get_is_container: (object: Partition) => boolean
    get_name: (object: Partition) => string
    get_number: (object: Partition) => number
    get_offset: (object: Partition) => number
    get_size: (object: Partition) => number
    get_table: (object: Partition) => string
    get_type_: (object: Partition) => string
    get_uuid: (object: Partition) => string
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link>.
 * @record 
 */
abstract class PartitionIface {

    // Own properties of UDisks-2.0.UDisks.PartitionIface

    static name: string
}

interface PartitionProxyClass {

    // Own fields of UDisks-2.0.UDisks.PartitionProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UDisksPartitionProxy.
 * @record 
 */
abstract class PartitionProxyClass {

    // Own properties of UDisks-2.0.UDisks.PartitionProxyClass

    static name: string
}

interface PartitionProxyPrivate {
}

class PartitionProxyPrivate {

    // Own properties of UDisks-2.0.UDisks.PartitionProxyPrivate

    static name: string
}

interface PartitionSkeletonClass {

    // Own fields of UDisks-2.0.UDisks.PartitionSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UDisksPartitionSkeleton.
 * @record 
 */
abstract class PartitionSkeletonClass {

    // Own properties of UDisks-2.0.UDisks.PartitionSkeletonClass

    static name: string
}

interface PartitionSkeletonPrivate {
}

class PartitionSkeletonPrivate {

    // Own properties of UDisks-2.0.UDisks.PartitionSkeletonPrivate

    static name: string
}

interface PartitionTableIface {

    // Own fields of UDisks-2.0.UDisks.PartitionTableIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_create_partition: (object: PartitionTable, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant) => boolean
    handle_create_partition_and_format: (object: PartitionTable, invocation: Gio.DBusMethodInvocation, arg_offset: number, arg_size: number, arg_type: string, arg_name: string, arg_options: GLib.Variant, arg_format_type: string, arg_format_options: GLib.Variant) => boolean
    get_type_: (object: PartitionTable) => string
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link>.
 * @record 
 */
abstract class PartitionTableIface {

    // Own properties of UDisks-2.0.UDisks.PartitionTableIface

    static name: string
}

interface PartitionTableProxyClass {

    // Own fields of UDisks-2.0.UDisks.PartitionTableProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UDisksPartitionTableProxy.
 * @record 
 */
abstract class PartitionTableProxyClass {

    // Own properties of UDisks-2.0.UDisks.PartitionTableProxyClass

    static name: string
}

interface PartitionTableProxyPrivate {
}

class PartitionTableProxyPrivate {

    // Own properties of UDisks-2.0.UDisks.PartitionTableProxyPrivate

    static name: string
}

interface PartitionTableSkeletonClass {

    // Own fields of UDisks-2.0.UDisks.PartitionTableSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UDisksPartitionTableSkeleton.
 * @record 
 */
abstract class PartitionTableSkeletonClass {

    // Own properties of UDisks-2.0.UDisks.PartitionTableSkeletonClass

    static name: string
}

interface PartitionTableSkeletonPrivate {
}

class PartitionTableSkeletonPrivate {

    // Own properties of UDisks-2.0.UDisks.PartitionTableSkeletonPrivate

    static name: string
}

interface PartitionTypeInfo {

    // Own fields of UDisks-2.0.UDisks.PartitionTypeInfo

    /**
     * A partition table type e.g. 'dos' or 'gpt'
     * @field 
     */
    table_type: string
    /**
     * A partition table sub-type.
     * @field 
     */
    table_subtype: string
    /**
     * A partition type.
     * @field 
     */
    type: string
    /**
     * Flags from the #UDisksPartitionTypeInfoFlags enumeration.
     * @field 
     */
    flags: PartitionTypeInfoFlags

    // Owm methods of UDisks-2.0.UDisks.PartitionTypeInfo

    /**
     * Frees `info`.
     */
    free(): void
}

/**
 * Detailed information about a partition type.
 * 
 * `table_subtype` is used to break the set of partition types for
 * `table_type` into a logical subsets. It is typically only used in
 * user interfaces where the partition type is selected.
 * 
 * This struct may grow in the future without it being considered an
 * ABI break.
 * @record 
 */
class PartitionTypeInfo {

    // Own properties of UDisks-2.0.UDisks.PartitionTypeInfo

    static name: string
}

interface SwapspaceIface {

    // Own fields of UDisks-2.0.UDisks.SwapspaceIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_start: (object: Swapspace, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    handle_stop: (object: Swapspace, invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant) => boolean
    get_active: (object: Swapspace) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link>.
 * @record 
 */
abstract class SwapspaceIface {

    // Own properties of UDisks-2.0.UDisks.SwapspaceIface

    static name: string
}

interface SwapspaceProxyClass {

    // Own fields of UDisks-2.0.UDisks.SwapspaceProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UDisksSwapspaceProxy.
 * @record 
 */
abstract class SwapspaceProxyClass {

    // Own properties of UDisks-2.0.UDisks.SwapspaceProxyClass

    static name: string
}

interface SwapspaceProxyPrivate {
}

class SwapspaceProxyPrivate {

    // Own properties of UDisks-2.0.UDisks.SwapspaceProxyPrivate

    static name: string
}

interface SwapspaceSkeletonClass {

    // Own fields of UDisks-2.0.UDisks.SwapspaceSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UDisksSwapspaceSkeleton.
 * @record 
 */
abstract class SwapspaceSkeletonClass {

    // Own properties of UDisks-2.0.UDisks.SwapspaceSkeletonClass

    static name: string
}

interface SwapspaceSkeletonPrivate {
}

class SwapspaceSkeletonPrivate {

    // Own properties of UDisks-2.0.UDisks.SwapspaceSkeletonPrivate

    static name: string
}

}
export default UDisks;