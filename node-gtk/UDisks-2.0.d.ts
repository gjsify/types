// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * UDisks-2.0
 */

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
function blockInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksBlock interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function blockOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link> D-Bus interface.
 */
function driveAtaInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksDriveAta interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function driveAtaOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link> D-Bus interface.
 */
function driveInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksDrive interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function driveOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link> D-Bus interface.
 */
function encryptedInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksEncrypted interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function encryptedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function errorQuark(): GLib.Quark
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link> D-Bus interface.
 */
function filesystemInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksFilesystem interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function filesystemOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link> D-Bus interface.
 */
function jobInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksJob interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function jobOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link> D-Bus interface.
 */
function loopInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksLoop interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function loopOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link> D-Bus interface.
 */
function managerInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksManager interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function managerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link> D-Bus interface.
 */
function mdraidInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksMDRaid interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function mdraidOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link> D-Bus interface.
 */
function partitionInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksPartition interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function partitionOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link> D-Bus interface.
 */
function partitionTableInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksPartitionTable interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function partitionTableOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link> D-Bus interface.
 */
function swapspaceInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UDisksSwapspace interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function swapspaceOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
    cryptoBackingDevice?: string | null
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
    deviceNumber?: number | null
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
    hintAuto?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIconName">"HintIconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hintIconName?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIgnore">"HintIgnore"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hintIgnore?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintName">"HintName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hintName?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintPartitionable">"HintPartitionable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hintPartitionable?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSymbolicIconName">"HintSymbolicIconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hintSymbolicIconName?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSystem">"HintSystem"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hintSystem?: boolean | null
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
    idLabel?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdType">"IdType"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    idType?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUsage">"IdUsage"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    idUsage?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUUID">"IdUUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    idUuid?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdVersion">"IdVersion"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    idVersion?: string | null
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
    mdraidMember?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.PreferredDevice">"PreferredDevice"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    preferredDevice?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.ReadOnly">"ReadOnly"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    readOnly?: boolean | null
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
    (invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-format`
 */
interface Block_HandleFormatSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-get-secret-configuration`
 */
interface Block_HandleGetSecretConfigurationSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-open-for-backup`
 */
interface Block_HandleOpenForBackupSignalCallback {
    (invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-open-for-benchmark`
 */
interface Block_HandleOpenForBenchmarkSignalCallback {
    (invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-open-for-restore`
 */
interface Block_HandleOpenForRestoreSignalCallback {
    (invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-remove-configuration-item`
 */
interface Block_HandleRemoveConfigurationItemSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-rescan`
 */
interface Block_HandleRescanSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-update-configuration-item`
 */
interface Block_HandleUpdateConfigurationItemSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant): boolean
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
    cryptoBackingDevice: string
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
    deviceNumber: number
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
    hintAuto: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIconName">"HintIconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hintIconName: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIgnore">"HintIgnore"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hintIgnore: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintName">"HintName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hintName: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintPartitionable">"HintPartitionable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hintPartitionable: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSymbolicIconName">"HintSymbolicIconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hintSymbolicIconName: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSystem">"HintSystem"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hintSystem: boolean
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
    idLabel: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdType">"IdType"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    idType: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUsage">"IdUsage"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    idUsage: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUUID">"IdUUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    idUuid: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdVersion">"IdVersion"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    idVersion: string
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
    mdraidMember: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.PreferredDevice">"PreferredDevice"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    preferredDevice: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.ReadOnly">"ReadOnly"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    readOnly: boolean
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
     * @param argItem Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callAddConfigurationItem(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_add_configuration_item().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_add_configuration_item().
     */
    callAddConfigurationItemFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.AddConfigurationItem">AddConfigurationItem()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_add_configuration_item() for the asynchronous version of this method.
     * @param argItem Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callAddConfigurationItemSync(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Format">Format()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_format_finish() to get the result of the operation.
     * 
     * See udisks_block_call_format_sync() for the synchronous, blocking version of this method.
     * @param argType Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callFormat(argType: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_format().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_format().
     */
    callFormatFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Format">Format()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_format() for the asynchronous version of this method.
     * @param argType Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callFormatSync(argType: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.GetSecretConfiguration">GetSecretConfiguration()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_get_secret_configuration_finish() to get the result of the operation.
     * 
     * See udisks_block_call_get_secret_configuration_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callGetSecretConfiguration(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_get_secret_configuration().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_get_secret_configuration().
     */
    callGetSecretConfigurationFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outConfiguration */ GLib.Variant ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.GetSecretConfiguration">GetSecretConfiguration()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_get_secret_configuration() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callGetSecretConfigurationSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outConfiguration */ GLib.Variant ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBackup">OpenForBackup()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_open_for_backup_finish() to get the result of the operation.
     * 
     * See udisks_block_call_open_for_backup_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callOpenForBackup(argOptions: GLib.Variant, fdList: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_open_for_backup().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_open_for_backup().
     */
    callOpenForBackupFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBackup">OpenForBackup()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_open_for_backup() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    callOpenForBackupSync(argOptions: GLib.Variant, fdList: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBenchmark">OpenForBenchmark()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_open_for_benchmark_finish() to get the result of the operation.
     * 
     * See udisks_block_call_open_for_benchmark_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callOpenForBenchmark(argOptions: GLib.Variant, fdList: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_open_for_benchmark().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_open_for_benchmark().
     */
    callOpenForBenchmarkFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBenchmark">OpenForBenchmark()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_open_for_benchmark() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    callOpenForBenchmarkSync(argOptions: GLib.Variant, fdList: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForRestore">OpenForRestore()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_open_for_restore_finish() to get the result of the operation.
     * 
     * See udisks_block_call_open_for_restore_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callOpenForRestore(argOptions: GLib.Variant, fdList: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_open_for_restore().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_open_for_restore().
     */
    callOpenForRestoreFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForRestore">OpenForRestore()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_open_for_restore() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    callOpenForRestoreSync(argOptions: GLib.Variant, fdList: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFd */ GLib.Variant, /* outFdList */ Gio.UnixFDList ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.RemoveConfigurationItem">RemoveConfigurationItem()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_remove_configuration_item_finish() to get the result of the operation.
     * 
     * See udisks_block_call_remove_configuration_item_sync() for the synchronous, blocking version of this method.
     * @param argItem Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callRemoveConfigurationItem(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_remove_configuration_item().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_remove_configuration_item().
     */
    callRemoveConfigurationItemFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.RemoveConfigurationItem">RemoveConfigurationItem()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_remove_configuration_item() for the asynchronous version of this method.
     * @param argItem Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callRemoveConfigurationItemSync(argItem: GLib.Variant, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Rescan">Rescan()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_rescan_finish() to get the result of the operation.
     * 
     * See udisks_block_call_rescan_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callRescan(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_rescan().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_rescan().
     */
    callRescanFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Rescan">Rescan()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_rescan() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callRescanSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.UpdateConfigurationItem">UpdateConfigurationItem()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_call_update_configuration_item_finish() to get the result of the operation.
     * 
     * See udisks_block_call_update_configuration_item_sync() for the synchronous, blocking version of this method.
     * @param argOldItem Argument to pass with the method invocation.
     * @param argNewItem Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callUpdateConfigurationItem(argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_block_call_update_configuration_item().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_update_configuration_item().
     */
    callUpdateConfigurationItemFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.UpdateConfigurationItem">UpdateConfigurationItem()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_call_update_configuration_item() for the asynchronous version of this method.
     * @param argOldItem Argument to pass with the method invocation.
     * @param argNewItem Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callUpdateConfigurationItemSync(argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.AddConfigurationItem">AddConfigurationItem()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeAddConfigurationItem(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Format">Format()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeFormat(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.GetSecretConfiguration">GetSecretConfiguration()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param configuration Parameter to return.
     */
    completeGetSecretConfiguration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBackup">OpenForBackup()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param fdList A #GUnixFDList or %NULL.
     * @param fd Parameter to return.
     */
    completeOpenForBackup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, fd: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBenchmark">OpenForBenchmark()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param fdList A #GUnixFDList or %NULL.
     * @param fd Parameter to return.
     */
    completeOpenForBenchmark(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, fd: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForRestore">OpenForRestore()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param fdList A #GUnixFDList or %NULL.
     * @param fd Parameter to return.
     */
    completeOpenForRestore(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, fd: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.RemoveConfigurationItem">RemoveConfigurationItem()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeRemoveConfigurationItem(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Rescan">Rescan()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeRescan(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.UpdateConfigurationItem">UpdateConfigurationItem()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeUpdateConfigurationItem(invocation: Gio.DBusMethodInvocation): void

    // Own signals of UDisks-2.0.UDisks.Block

    connect(sigName: "handle-add-configuration-item", callback: Block_HandleAddConfigurationItemSignalCallback): number
    on(sigName: "handle-add-configuration-item", callback: Block_HandleAddConfigurationItemSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-add-configuration-item", callback: Block_HandleAddConfigurationItemSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-add-configuration-item", callback: Block_HandleAddConfigurationItemSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-add-configuration-item", argItem: GLib.Variant, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-format", callback: Block_HandleFormatSignalCallback): number
    on(sigName: "handle-format", callback: Block_HandleFormatSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-format", callback: Block_HandleFormatSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-format", callback: Block_HandleFormatSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-format", argType: string, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-get-secret-configuration", callback: Block_HandleGetSecretConfigurationSignalCallback): number
    on(sigName: "handle-get-secret-configuration", callback: Block_HandleGetSecretConfigurationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-secret-configuration", callback: Block_HandleGetSecretConfigurationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-secret-configuration", callback: Block_HandleGetSecretConfigurationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-get-secret-configuration", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-open-for-backup", callback: Block_HandleOpenForBackupSignalCallback): number
    on(sigName: "handle-open-for-backup", callback: Block_HandleOpenForBackupSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-open-for-backup", callback: Block_HandleOpenForBackupSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-open-for-backup", callback: Block_HandleOpenForBackupSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-open-for-backup", fdList: Gio.UnixFDList | null, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-open-for-benchmark", callback: Block_HandleOpenForBenchmarkSignalCallback): number
    on(sigName: "handle-open-for-benchmark", callback: Block_HandleOpenForBenchmarkSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-open-for-benchmark", callback: Block_HandleOpenForBenchmarkSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-open-for-benchmark", callback: Block_HandleOpenForBenchmarkSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-open-for-benchmark", fdList: Gio.UnixFDList | null, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-open-for-restore", callback: Block_HandleOpenForRestoreSignalCallback): number
    on(sigName: "handle-open-for-restore", callback: Block_HandleOpenForRestoreSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-open-for-restore", callback: Block_HandleOpenForRestoreSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-open-for-restore", callback: Block_HandleOpenForRestoreSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-open-for-restore", fdList: Gio.UnixFDList | null, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-remove-configuration-item", callback: Block_HandleRemoveConfigurationItemSignalCallback): number
    on(sigName: "handle-remove-configuration-item", callback: Block_HandleRemoveConfigurationItemSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-remove-configuration-item", callback: Block_HandleRemoveConfigurationItemSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-remove-configuration-item", callback: Block_HandleRemoveConfigurationItemSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-remove-configuration-item", argItem: GLib.Variant, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-rescan", callback: Block_HandleRescanSignalCallback): number
    on(sigName: "handle-rescan", callback: Block_HandleRescanSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-rescan", callback: Block_HandleRescanSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-rescan", callback: Block_HandleRescanSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-rescan", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-update-configuration-item", callback: Block_HandleUpdateConfigurationItemSignalCallback): number
    on(sigName: "handle-update-configuration-item", callback: Block_HandleUpdateConfigurationItemSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-update-configuration-item", callback: Block_HandleUpdateConfigurationItemSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-update-configuration-item", callback: Block_HandleUpdateConfigurationItemSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-update-configuration-item", argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Block

    connect(sigName: "notify::configuration", callback: (...args: any[]) => void): number
    on(sigName: "notify::configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::configuration", ...args: any[]): void
    connect(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::crypto-backing-device", ...args: any[]): void
    connect(sigName: "notify::device", callback: (...args: any[]) => void): number
    on(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::device-number", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-number", ...args: any[]): void
    connect(sigName: "notify::drive", callback: (...args: any[]) => void): number
    on(sigName: "notify::drive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drive", ...args: any[]): void
    connect(sigName: "notify::hint-auto", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-auto", ...args: any[]): void
    connect(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-icon-name", ...args: any[]): void
    connect(sigName: "notify::hint-ignore", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-ignore", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-ignore", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-ignore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-ignore", ...args: any[]): void
    connect(sigName: "notify::hint-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-name", ...args: any[]): void
    connect(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-partitionable", ...args: any[]): void
    connect(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-symbolic-icon-name", ...args: any[]): void
    connect(sigName: "notify::hint-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-system", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::id-label", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-label", ...args: any[]): void
    connect(sigName: "notify::id-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-type", ...args: any[]): void
    connect(sigName: "notify::id-usage", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-usage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-usage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-usage", ...args: any[]): void
    connect(sigName: "notify::id-uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-uuid", ...args: any[]): void
    connect(sigName: "notify::id-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-version", ...args: any[]): void
    connect(sigName: "notify::mdraid", callback: (...args: any[]) => void): number
    on(sigName: "notify::mdraid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mdraid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mdraid", ...args: any[]): void
    connect(sigName: "notify::mdraid-member", callback: (...args: any[]) => void): number
    on(sigName: "notify::mdraid-member", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mdraid-member", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mdraid-member", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mdraid-member", ...args: any[]): void
    connect(sigName: "notify::preferred-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::preferred-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::preferred-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::preferred-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::preferred-device", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::symlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::symlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::symlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::symlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::symlinks", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksBlock interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface Drive_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Drive

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.CanPowerOff">"CanPowerOff"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    canPowerOff?: boolean | null
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
    connectionBus?: string | null
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
    mediaAvailable?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaChangeDetected">"MediaChangeDetected"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mediaChangeDetected?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaCompatibility">"MediaCompatibility"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mediaCompatibility?: string[] | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaRemovable">"MediaRemovable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mediaRemovable?: boolean | null
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
    opticalBlank?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumAudioTracks">"OpticalNumAudioTracks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    opticalNumAudioTracks?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumDataTracks">"OpticalNumDataTracks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    opticalNumDataTracks?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumSessions">"OpticalNumSessions"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    opticalNumSessions?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumTracks">"OpticalNumTracks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    opticalNumTracks?: number | null
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
    rotationRate?: number | null
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
    siblingId?: string | null
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
    sortKey?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeDetected">"TimeDetected"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    timeDetected?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeMediaDetected">"TimeMediaDetected"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    timeMediaDetected?: number | null
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
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-power-off`
 */
interface Drive_HandlePowerOffSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-configuration`
 */
interface Drive_HandleSetConfigurationSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant): boolean
}

interface Drive {

    // Own properties of UDisks-2.0.UDisks.Drive

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.CanPowerOff">"CanPowerOff"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    canPowerOff: boolean
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
    connectionBus: string
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
    mediaAvailable: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaChangeDetected">"MediaChangeDetected"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mediaChangeDetected: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaCompatibility">"MediaCompatibility"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mediaCompatibility: string[]
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaRemovable">"MediaRemovable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mediaRemovable: boolean
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
    opticalBlank: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumAudioTracks">"OpticalNumAudioTracks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    opticalNumAudioTracks: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumDataTracks">"OpticalNumDataTracks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    opticalNumDataTracks: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumSessions">"OpticalNumSessions"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    opticalNumSessions: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumTracks">"OpticalNumTracks"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    opticalNumTracks: number
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
    rotationRate: number
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
    siblingId: string
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
    sortKey: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeDetected">"TimeDetected"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    timeDetected: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeMediaDetected">"TimeMediaDetected"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    timeMediaDetected: number
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
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callEject(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_call_eject().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_call_eject().
     */
    callEjectFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.Eject">Eject()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_call_eject() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callEjectSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.PowerOff">PowerOff()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_call_power_off_finish() to get the result of the operation.
     * 
     * See udisks_drive_call_power_off_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callPowerOff(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_call_power_off().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_call_power_off().
     */
    callPowerOffFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.PowerOff">PowerOff()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_call_power_off() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callPowerOffSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.SetConfiguration">SetConfiguration()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_call_set_configuration_finish() to get the result of the operation.
     * 
     * See udisks_drive_call_set_configuration_sync() for the synchronous, blocking version of this method.
     * @param argValue Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callSetConfiguration(argValue: GLib.Variant, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_call_set_configuration().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_call_set_configuration().
     */
    callSetConfigurationFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.SetConfiguration">SetConfiguration()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_call_set_configuration() for the asynchronous version of this method.
     * @param argValue Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSetConfigurationSync(argValue: GLib.Variant, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.Eject">Eject()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeEject(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.PowerOff">PowerOff()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completePowerOff(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.SetConfiguration">SetConfiguration()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeSetConfiguration(invocation: Gio.DBusMethodInvocation): void

    // Own signals of UDisks-2.0.UDisks.Drive

    connect(sigName: "handle-eject", callback: Drive_HandleEjectSignalCallback): number
    on(sigName: "handle-eject", callback: Drive_HandleEjectSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-eject", callback: Drive_HandleEjectSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-eject", callback: Drive_HandleEjectSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-eject", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-power-off", callback: Drive_HandlePowerOffSignalCallback): number
    on(sigName: "handle-power-off", callback: Drive_HandlePowerOffSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-power-off", callback: Drive_HandlePowerOffSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-power-off", callback: Drive_HandlePowerOffSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-power-off", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-configuration", callback: Drive_HandleSetConfigurationSignalCallback): number
    on(sigName: "handle-set-configuration", callback: Drive_HandleSetConfigurationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-set-configuration", callback: Drive_HandleSetConfigurationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-set-configuration", callback: Drive_HandleSetConfigurationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-set-configuration", argValue: GLib.Variant, argOptions: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Drive

    connect(sigName: "notify::can-power-off", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-power-off", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-power-off", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-power-off", ...args: any[]): void
    connect(sigName: "notify::configuration", callback: (...args: any[]) => void): number
    on(sigName: "notify::configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::configuration", ...args: any[]): void
    connect(sigName: "notify::connection-bus", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection-bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection-bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection-bus", ...args: any[]): void
    connect(sigName: "notify::ejectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::ejectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ejectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ejectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ejectable", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::media", callback: (...args: any[]) => void): number
    on(sigName: "notify::media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media", ...args: any[]): void
    connect(sigName: "notify::media-available", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-available", ...args: any[]): void
    connect(sigName: "notify::media-change-detected", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-change-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-change-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-change-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-change-detected", ...args: any[]): void
    connect(sigName: "notify::media-compatibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-compatibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-compatibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-compatibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-compatibility", ...args: any[]): void
    connect(sigName: "notify::media-removable", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-removable", ...args: any[]): void
    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::optical", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical", ...args: any[]): void
    connect(sigName: "notify::optical-blank", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-blank", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-blank", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-blank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-blank", ...args: any[]): void
    connect(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-num-audio-tracks", ...args: any[]): void
    connect(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-num-data-tracks", ...args: any[]): void
    connect(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-num-sessions", ...args: any[]): void
    connect(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-num-tracks", ...args: any[]): void
    connect(sigName: "notify::removable", callback: (...args: any[]) => void): number
    on(sigName: "notify::removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::removable", ...args: any[]): void
    connect(sigName: "notify::revision", callback: (...args: any[]) => void): number
    on(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::revision", ...args: any[]): void
    connect(sigName: "notify::rotation-rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-rate", ...args: any[]): void
    connect(sigName: "notify::seat", callback: (...args: any[]) => void): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (...args: any[]) => void): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::sibling-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::sibling-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sibling-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sibling-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sibling-id", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sort-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-key", ...args: any[]): void
    connect(sigName: "notify::time-detected", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-detected", ...args: any[]): void
    connect(sigName: "notify::time-media-detected", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-media-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-media-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-media-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-media-detected", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::wwn", callback: (...args: any[]) => void): number
    on(sigName: "notify::wwn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wwn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wwn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wwn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksDrive interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface DriveAta_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.DriveAta

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamEnabled">"AamEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    aamEnabled?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamSupported">"AamSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    aamSupported?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamVendorRecommendedValue">"AamVendorRecommendedValue"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    aamVendorRecommendedValue?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmEnabled">"ApmEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    apmEnabled?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmSupported">"ApmSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    apmSupported?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmEnabled">"PmEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    pmEnabled?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmSupported">"PmSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    pmSupported?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadEnabled">"ReadLookaheadEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    readLookaheadEnabled?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadSupported">"ReadLookaheadSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    readLookaheadSupported?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEnhancedEraseUnitMinutes">"SecurityEnhancedEraseUnitMinutes"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    securityEnhancedEraseUnitMinutes?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnitMinutes">"SecurityEraseUnitMinutes"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    securityEraseUnitMinutes?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityFrozen">"SecurityFrozen"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    securityFrozen?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartEnabled">"SmartEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartEnabled?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartFailing">"SmartFailing"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartFailing?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailedInThePast">"SmartNumAttributesFailedInThePast"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartNumAttributesFailedInThePast?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailing">"SmartNumAttributesFailing"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartNumAttributesFailing?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumBadSectors">"SmartNumBadSectors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartNumBadSectors?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartPowerOnSeconds">"SmartPowerOnSeconds"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartPowerOnSeconds?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestPercentRemaining">"SmartSelftestPercentRemaining"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartSelftestPercentRemaining?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStatus">"SmartSelftestStatus"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartSelftestStatus?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSupported">"SmartSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartSupported?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartTemperature">"SmartTemperature"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartTemperature?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartUpdated">"SmartUpdated"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartUpdated?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheEnabled">"WriteCacheEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    writeCacheEnabled?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheSupported">"WriteCacheSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    writeCacheSupported?: boolean | null
}

/**
 * Signal callback interface for `handle-pm-get-state`
 */
interface DriveAta_HandlePmGetStateSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-pm-standby`
 */
interface DriveAta_HandlePmStandbySignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-pm-wakeup`
 */
interface DriveAta_HandlePmWakeupSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-security-erase-unit`
 */
interface DriveAta_HandleSecurityEraseUnitSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-smart-get-attributes`
 */
interface DriveAta_HandleSmartGetAttributesSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-smart-selftest-abort`
 */
interface DriveAta_HandleSmartSelftestAbortSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-smart-selftest-start`
 */
interface DriveAta_HandleSmartSelftestStartSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-smart-set-enabled`
 */
interface DriveAta_HandleSmartSetEnabledSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-smart-update`
 */
interface DriveAta_HandleSmartUpdateSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

interface DriveAta {

    // Own properties of UDisks-2.0.UDisks.DriveAta

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamEnabled">"AamEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    aamEnabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamSupported">"AamSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    aamSupported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamVendorRecommendedValue">"AamVendorRecommendedValue"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    aamVendorRecommendedValue: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmEnabled">"ApmEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    apmEnabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmSupported">"ApmSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    apmSupported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmEnabled">"PmEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    pmEnabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmSupported">"PmSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    pmSupported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadEnabled">"ReadLookaheadEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    readLookaheadEnabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadSupported">"ReadLookaheadSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    readLookaheadSupported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEnhancedEraseUnitMinutes">"SecurityEnhancedEraseUnitMinutes"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    securityEnhancedEraseUnitMinutes: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnitMinutes">"SecurityEraseUnitMinutes"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    securityEraseUnitMinutes: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityFrozen">"SecurityFrozen"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    securityFrozen: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartEnabled">"SmartEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartEnabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartFailing">"SmartFailing"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartFailing: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailedInThePast">"SmartNumAttributesFailedInThePast"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartNumAttributesFailedInThePast: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailing">"SmartNumAttributesFailing"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartNumAttributesFailing: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumBadSectors">"SmartNumBadSectors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartNumBadSectors: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartPowerOnSeconds">"SmartPowerOnSeconds"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartPowerOnSeconds: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestPercentRemaining">"SmartSelftestPercentRemaining"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartSelftestPercentRemaining: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStatus">"SmartSelftestStatus"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartSelftestStatus: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSupported">"SmartSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartSupported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartTemperature">"SmartTemperature"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartTemperature: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartUpdated">"SmartUpdated"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smartUpdated: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheEnabled">"WriteCacheEnabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    writeCacheEnabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheSupported">"WriteCacheSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    writeCacheSupported: boolean

    // Owm methods of UDisks-2.0.UDisks.DriveAta

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmGetState">PmGetState()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_pm_get_state_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_pm_get_state_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callPmGetState(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_pm_get_state().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_pm_get_state().
     */
    callPmGetStateFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outState */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmGetState">PmGetState()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_pm_get_state() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callPmGetStateSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outState */ number ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmStandby">PmStandby()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_pm_standby_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_pm_standby_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callPmStandby(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_pm_standby().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_pm_standby().
     */
    callPmStandbyFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmStandby">PmStandby()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_pm_standby() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callPmStandbySync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmWakeup">PmWakeup()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_pm_wakeup_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_pm_wakeup_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callPmWakeup(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_pm_wakeup().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_pm_wakeup().
     */
    callPmWakeupFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmWakeup">PmWakeup()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_pm_wakeup() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callPmWakeupSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnit">SecurityEraseUnit()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_security_erase_unit_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_security_erase_unit_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callSecurityEraseUnit(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_security_erase_unit().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_security_erase_unit().
     */
    callSecurityEraseUnitFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnit">SecurityEraseUnit()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_security_erase_unit() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSecurityEraseUnitSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartGetAttributes">SmartGetAttributes()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_smart_get_attributes_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_smart_get_attributes_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callSmartGetAttributes(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_smart_get_attributes().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_get_attributes().
     */
    callSmartGetAttributesFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAttributes */ GLib.Variant ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartGetAttributes">SmartGetAttributes()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_smart_get_attributes() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSmartGetAttributesSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAttributes */ GLib.Variant ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestAbort">SmartSelftestAbort()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_smart_selftest_abort_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_smart_selftest_abort_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callSmartSelftestAbort(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_smart_selftest_abort().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_selftest_abort().
     */
    callSmartSelftestAbortFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestAbort">SmartSelftestAbort()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_smart_selftest_abort() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSmartSelftestAbortSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStart">SmartSelftestStart()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_smart_selftest_start_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_smart_selftest_start_sync() for the synchronous, blocking version of this method.
     * @param argType Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callSmartSelftestStart(argType: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_smart_selftest_start().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_selftest_start().
     */
    callSmartSelftestStartFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStart">SmartSelftestStart()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_smart_selftest_start() for the asynchronous version of this method.
     * @param argType Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSmartSelftestStartSync(argType: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSetEnabled">SmartSetEnabled()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_smart_set_enabled_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_smart_set_enabled_sync() for the synchronous, blocking version of this method.
     * @param argValue Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callSmartSetEnabled(argValue: boolean, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_smart_set_enabled().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_set_enabled().
     */
    callSmartSetEnabledFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSetEnabled">SmartSetEnabled()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_smart_set_enabled() for the asynchronous version of this method.
     * @param argValue Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSmartSetEnabledSync(argValue: boolean, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartUpdate">SmartUpdate()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_call_smart_update_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_call_smart_update_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callSmartUpdate(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_drive_ata_call_smart_update().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_update().
     */
    callSmartUpdateFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartUpdate">SmartUpdate()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_call_smart_update() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSmartUpdateSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmGetState">PmGetState()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param state Parameter to return.
     */
    completePmGetState(invocation: Gio.DBusMethodInvocation, state: number): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmStandby">PmStandby()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completePmStandby(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmWakeup">PmWakeup()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completePmWakeup(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnit">SecurityEraseUnit()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeSecurityEraseUnit(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartGetAttributes">SmartGetAttributes()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param attributes Parameter to return.
     */
    completeSmartGetAttributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestAbort">SmartSelftestAbort()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeSmartSelftestAbort(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStart">SmartSelftestStart()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeSmartSelftestStart(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSetEnabled">SmartSetEnabled()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeSmartSetEnabled(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartUpdate">SmartUpdate()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeSmartUpdate(invocation: Gio.DBusMethodInvocation): void

    // Own signals of UDisks-2.0.UDisks.DriveAta

    connect(sigName: "handle-pm-get-state", callback: DriveAta_HandlePmGetStateSignalCallback): number
    on(sigName: "handle-pm-get-state", callback: DriveAta_HandlePmGetStateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-pm-get-state", callback: DriveAta_HandlePmGetStateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-pm-get-state", callback: DriveAta_HandlePmGetStateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-pm-get-state", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-pm-standby", callback: DriveAta_HandlePmStandbySignalCallback): number
    on(sigName: "handle-pm-standby", callback: DriveAta_HandlePmStandbySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-pm-standby", callback: DriveAta_HandlePmStandbySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-pm-standby", callback: DriveAta_HandlePmStandbySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-pm-standby", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-pm-wakeup", callback: DriveAta_HandlePmWakeupSignalCallback): number
    on(sigName: "handle-pm-wakeup", callback: DriveAta_HandlePmWakeupSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-pm-wakeup", callback: DriveAta_HandlePmWakeupSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-pm-wakeup", callback: DriveAta_HandlePmWakeupSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-pm-wakeup", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-security-erase-unit", callback: DriveAta_HandleSecurityEraseUnitSignalCallback): number
    on(sigName: "handle-security-erase-unit", callback: DriveAta_HandleSecurityEraseUnitSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-security-erase-unit", callback: DriveAta_HandleSecurityEraseUnitSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-security-erase-unit", callback: DriveAta_HandleSecurityEraseUnitSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-security-erase-unit", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-smart-get-attributes", callback: DriveAta_HandleSmartGetAttributesSignalCallback): number
    on(sigName: "handle-smart-get-attributes", callback: DriveAta_HandleSmartGetAttributesSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-smart-get-attributes", callback: DriveAta_HandleSmartGetAttributesSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-smart-get-attributes", callback: DriveAta_HandleSmartGetAttributesSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-smart-get-attributes", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-smart-selftest-abort", callback: DriveAta_HandleSmartSelftestAbortSignalCallback): number
    on(sigName: "handle-smart-selftest-abort", callback: DriveAta_HandleSmartSelftestAbortSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-smart-selftest-abort", callback: DriveAta_HandleSmartSelftestAbortSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-smart-selftest-abort", callback: DriveAta_HandleSmartSelftestAbortSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-smart-selftest-abort", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-smart-selftest-start", callback: DriveAta_HandleSmartSelftestStartSignalCallback): number
    on(sigName: "handle-smart-selftest-start", callback: DriveAta_HandleSmartSelftestStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-smart-selftest-start", callback: DriveAta_HandleSmartSelftestStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-smart-selftest-start", callback: DriveAta_HandleSmartSelftestStartSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-smart-selftest-start", argType: string, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-smart-set-enabled", callback: DriveAta_HandleSmartSetEnabledSignalCallback): number
    on(sigName: "handle-smart-set-enabled", callback: DriveAta_HandleSmartSetEnabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-smart-set-enabled", callback: DriveAta_HandleSmartSetEnabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-smart-set-enabled", callback: DriveAta_HandleSmartSetEnabledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-smart-set-enabled", argValue: boolean, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-smart-update", callback: DriveAta_HandleSmartUpdateSignalCallback): number
    on(sigName: "handle-smart-update", callback: DriveAta_HandleSmartUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-smart-update", callback: DriveAta_HandleSmartUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-smart-update", callback: DriveAta_HandleSmartUpdateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-smart-update", argOptions: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.DriveAta

    connect(sigName: "notify::aam-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::aam-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::aam-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::aam-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::aam-enabled", ...args: any[]): void
    connect(sigName: "notify::aam-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::aam-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::aam-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::aam-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::aam-supported", ...args: any[]): void
    connect(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::aam-vendor-recommended-value", ...args: any[]): void
    connect(sigName: "notify::apm-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::apm-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::apm-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::apm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::apm-enabled", ...args: any[]): void
    connect(sigName: "notify::apm-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::apm-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::apm-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::apm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::apm-supported", ...args: any[]): void
    connect(sigName: "notify::pm-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::pm-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pm-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pm-enabled", ...args: any[]): void
    connect(sigName: "notify::pm-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::pm-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pm-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pm-supported", ...args: any[]): void
    connect(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-lookahead-enabled", ...args: any[]): void
    connect(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-lookahead-supported", ...args: any[]): void
    connect(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void): number
    on(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::security-enhanced-erase-unit-minutes", ...args: any[]): void
    connect(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void): number
    on(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::security-erase-unit-minutes", ...args: any[]): void
    connect(sigName: "notify::security-frozen", callback: (...args: any[]) => void): number
    on(sigName: "notify::security-frozen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::security-frozen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::security-frozen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::security-frozen", ...args: any[]): void
    connect(sigName: "notify::smart-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-enabled", ...args: any[]): void
    connect(sigName: "notify::smart-failing", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-failing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-failing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-failing", ...args: any[]): void
    connect(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-num-attributes-failed-in-the-past", ...args: any[]): void
    connect(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-num-attributes-failing", ...args: any[]): void
    connect(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-num-bad-sectors", ...args: any[]): void
    connect(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-power-on-seconds", ...args: any[]): void
    connect(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-selftest-percent-remaining", ...args: any[]): void
    connect(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-selftest-status", ...args: any[]): void
    connect(sigName: "notify::smart-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-supported", ...args: any[]): void
    connect(sigName: "notify::smart-temperature", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-temperature", ...args: any[]): void
    connect(sigName: "notify::smart-updated", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-updated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-updated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-updated", ...args: any[]): void
    connect(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::write-cache-enabled", ...args: any[]): void
    connect(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::write-cache-supported", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksDriveAta interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface Encrypted_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Encrypted

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.ChildConfiguration">"ChildConfiguration"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    childConfiguration?: GLib.Variant | null
}

/**
 * Signal callback interface for `handle-change-passphrase`
 */
interface Encrypted_HandleChangePassphraseSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-lock`
 */
interface Encrypted_HandleLockSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-unlock`
 */
interface Encrypted_HandleUnlockSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant): boolean
}

interface Encrypted {

    // Own properties of UDisks-2.0.UDisks.Encrypted

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.ChildConfiguration">"ChildConfiguration"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    childConfiguration: GLib.Variant

    // Owm methods of UDisks-2.0.UDisks.Encrypted

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.ChangePassphrase">ChangePassphrase()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_encrypted_call_change_passphrase_finish() to get the result of the operation.
     * 
     * See udisks_encrypted_call_change_passphrase_sync() for the synchronous, blocking version of this method.
     * @param argPassphrase Argument to pass with the method invocation.
     * @param argNewPassphrase Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callChangePassphrase(argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_encrypted_call_change_passphrase().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_call_change_passphrase().
     */
    callChangePassphraseFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.ChangePassphrase">ChangePassphrase()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_encrypted_call_change_passphrase() for the asynchronous version of this method.
     * @param argPassphrase Argument to pass with the method invocation.
     * @param argNewPassphrase Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callChangePassphraseSync(argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Lock">Lock()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_encrypted_call_lock_finish() to get the result of the operation.
     * 
     * See udisks_encrypted_call_lock_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callLock(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_encrypted_call_lock().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_call_lock().
     */
    callLockFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Lock">Lock()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_encrypted_call_lock() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callLockSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Unlock">Unlock()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_encrypted_call_unlock_finish() to get the result of the operation.
     * 
     * See udisks_encrypted_call_unlock_sync() for the synchronous, blocking version of this method.
     * @param argPassphrase Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callUnlock(argPassphrase: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_encrypted_call_unlock().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_call_unlock().
     */
    callUnlockFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outCleartextDevice */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Unlock">Unlock()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_encrypted_call_unlock() for the asynchronous version of this method.
     * @param argPassphrase Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callUnlockSync(argPassphrase: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCleartextDevice */ string ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.ChangePassphrase">ChangePassphrase()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeChangePassphrase(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Lock">Lock()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeLock(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Unlock">Unlock()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param cleartextDevice Parameter to return.
     */
    completeUnlock(invocation: Gio.DBusMethodInvocation, cleartextDevice: string): void

    // Own signals of UDisks-2.0.UDisks.Encrypted

    connect(sigName: "handle-change-passphrase", callback: Encrypted_HandleChangePassphraseSignalCallback): number
    on(sigName: "handle-change-passphrase", callback: Encrypted_HandleChangePassphraseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-change-passphrase", callback: Encrypted_HandleChangePassphraseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-change-passphrase", callback: Encrypted_HandleChangePassphraseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-change-passphrase", argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-lock", callback: Encrypted_HandleLockSignalCallback): number
    on(sigName: "handle-lock", callback: Encrypted_HandleLockSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-lock", callback: Encrypted_HandleLockSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-lock", callback: Encrypted_HandleLockSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-lock", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-unlock", callback: Encrypted_HandleUnlockSignalCallback): number
    on(sigName: "handle-unlock", callback: Encrypted_HandleUnlockSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-unlock", callback: Encrypted_HandleUnlockSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-unlock", callback: Encrypted_HandleUnlockSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-unlock", argPassphrase: string, argOptions: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Encrypted

    connect(sigName: "notify::child-configuration", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-configuration", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksEncrypted interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface Filesystem_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Filesystem

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem.MountPoints">"MountPoints"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mountPoints?: string[] | null
}

/**
 * Signal callback interface for `handle-mount`
 */
interface Filesystem_HandleMountSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-label`
 */
interface Filesystem_HandleSetLabelSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-unmount`
 */
interface Filesystem_HandleUnmountSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

interface Filesystem {

    // Own properties of UDisks-2.0.UDisks.Filesystem

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem.MountPoints">"MountPoints"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    mountPoints: string[]

    // Owm methods of UDisks-2.0.UDisks.Filesystem

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Mount">Mount()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_filesystem_call_mount_finish() to get the result of the operation.
     * 
     * See udisks_filesystem_call_mount_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callMount(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_filesystem_call_mount().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_mount().
     */
    callMountFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outMountPath */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Mount">Mount()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_filesystem_call_mount() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callMountSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outMountPath */ string ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetLabel">SetLabel()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_filesystem_call_set_label_finish() to get the result of the operation.
     * 
     * See udisks_filesystem_call_set_label_sync() for the synchronous, blocking version of this method.
     * @param argLabel Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callSetLabel(argLabel: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_filesystem_call_set_label().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_set_label().
     */
    callSetLabelFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetLabel">SetLabel()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_filesystem_call_set_label() for the asynchronous version of this method.
     * @param argLabel Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSetLabelSync(argLabel: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Unmount">Unmount()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_filesystem_call_unmount_finish() to get the result of the operation.
     * 
     * See udisks_filesystem_call_unmount_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callUnmount(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_filesystem_call_unmount().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_unmount().
     */
    callUnmountFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Unmount">Unmount()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_filesystem_call_unmount() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callUnmountSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Mount">Mount()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param mountPath Parameter to return.
     */
    completeMount(invocation: Gio.DBusMethodInvocation, mountPath: string): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetLabel">SetLabel()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeSetLabel(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Unmount">Unmount()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeUnmount(invocation: Gio.DBusMethodInvocation): void

    // Own signals of UDisks-2.0.UDisks.Filesystem

    connect(sigName: "handle-mount", callback: Filesystem_HandleMountSignalCallback): number
    on(sigName: "handle-mount", callback: Filesystem_HandleMountSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-mount", callback: Filesystem_HandleMountSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-mount", callback: Filesystem_HandleMountSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-mount", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-label", callback: Filesystem_HandleSetLabelSignalCallback): number
    on(sigName: "handle-set-label", callback: Filesystem_HandleSetLabelSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-set-label", callback: Filesystem_HandleSetLabelSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-set-label", callback: Filesystem_HandleSetLabelSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-set-label", argLabel: string, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-unmount", callback: Filesystem_HandleUnmountSignalCallback): number
    on(sigName: "handle-unmount", callback: Filesystem_HandleUnmountSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-unmount", callback: Filesystem_HandleUnmountSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-unmount", callback: Filesystem_HandleUnmountSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-unmount", argOptions: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Filesystem

    connect(sigName: "notify::mount-points", callback: (...args: any[]) => void): number
    on(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mount-points", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksFilesystem interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
    expectedEndTime?: number | null
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
    progressValid?: boolean | null
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
    startTime?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartedByUID">"StartedByUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    startedByUid?: number | null
}

/**
 * Signal callback interface for `completed`
 */
interface Job_CompletedSignalCallback {
    (argSuccess: boolean, argMessage: string): void
}

/**
 * Signal callback interface for `handle-cancel`
 */
interface Job_HandleCancelSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
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
    expectedEndTime: number
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
    progressValid: boolean
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
    startTime: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartedByUID">"StartedByUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    startedByUid: number

    // Owm methods of UDisks-2.0.UDisks.Job

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Job.Cancel">Cancel()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_job_call_cancel_finish() to get the result of the operation.
     * 
     * See udisks_job_call_cancel_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callCancel(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_job_call_cancel().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_job_call_cancel().
     */
    callCancelFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Job.Cancel">Cancel()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_job_call_cancel() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callCancelSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Job.Cancel">Cancel()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeCancel(invocation: Gio.DBusMethodInvocation): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-UDisks2-Job.Completed">"Completed"</link> D-Bus signal.
     * @param argSuccess Argument to pass with the signal.
     * @param argMessage Argument to pass with the signal.
     */
    emitCompleted(argSuccess: boolean, argMessage: string): void

    // Own signals of UDisks-2.0.UDisks.Job

    connect(sigName: "completed", callback: Job_CompletedSignalCallback): number
    on(sigName: "completed", callback: Job_CompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: Job_CompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: Job_CompletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "completed", argMessage: string, ...args: any[]): void
    connect(sigName: "handle-cancel", callback: Job_HandleCancelSignalCallback): number
    on(sigName: "handle-cancel", callback: Job_HandleCancelSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-cancel", callback: Job_HandleCancelSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-cancel", callback: Job_HandleCancelSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-cancel", argOptions: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Job

    connect(sigName: "notify::bytes", callback: (...args: any[]) => void): number
    on(sigName: "notify::bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bytes", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (...args: any[]) => void): number
    on(sigName: "notify::cancelable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cancelable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cancelable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::expected-end-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::expected-end-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expected-end-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expected-end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expected-end-time", ...args: any[]): void
    connect(sigName: "notify::objects", callback: (...args: any[]) => void): number
    on(sigName: "notify::objects", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::objects", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::objects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::objects", ...args: any[]): void
    connect(sigName: "notify::operation", callback: (...args: any[]) => void): number
    on(sigName: "notify::operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operation", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::progress-valid", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress-valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress-valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress-valid", ...args: any[]): void
    connect(sigName: "notify::rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::started-by-uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::started-by-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::started-by-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::started-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::started-by-uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksJob interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
    backingFile?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.SetupByUID">"SetupByUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    setupByUid?: number | null
}

/**
 * Signal callback interface for `handle-delete`
 */
interface Loop_HandleDeleteSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-autoclear`
 */
interface Loop_HandleSetAutoclearSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant): boolean
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
    backingFile: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.SetupByUID">"SetupByUID"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    setupByUid: number

    // Owm methods of UDisks-2.0.UDisks.Loop

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.Delete">Delete()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_loop_call_delete_finish() to get the result of the operation.
     * 
     * See udisks_loop_call_delete_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callDelete(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_loop_call_delete().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_loop_call_delete().
     */
    callDeleteFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.Delete">Delete()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_loop_call_delete() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callDeleteSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.SetAutoclear">SetAutoclear()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_loop_call_set_autoclear_finish() to get the result of the operation.
     * 
     * See udisks_loop_call_set_autoclear_sync() for the synchronous, blocking version of this method.
     * @param argValue Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callSetAutoclear(argValue: boolean, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_loop_call_set_autoclear().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_loop_call_set_autoclear().
     */
    callSetAutoclearFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.SetAutoclear">SetAutoclear()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_loop_call_set_autoclear() for the asynchronous version of this method.
     * @param argValue Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSetAutoclearSync(argValue: boolean, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.Delete">Delete()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeDelete(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.SetAutoclear">SetAutoclear()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeSetAutoclear(invocation: Gio.DBusMethodInvocation): void

    // Own signals of UDisks-2.0.UDisks.Loop

    connect(sigName: "handle-delete", callback: Loop_HandleDeleteSignalCallback): number
    on(sigName: "handle-delete", callback: Loop_HandleDeleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-delete", callback: Loop_HandleDeleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-delete", callback: Loop_HandleDeleteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-delete", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-autoclear", callback: Loop_HandleSetAutoclearSignalCallback): number
    on(sigName: "handle-set-autoclear", callback: Loop_HandleSetAutoclearSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-set-autoclear", callback: Loop_HandleSetAutoclearSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-set-autoclear", callback: Loop_HandleSetAutoclearSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-set-autoclear", argValue: boolean, argOptions: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Loop

    connect(sigName: "notify::autoclear", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoclear", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoclear", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoclear", ...args: any[]): void
    connect(sigName: "notify::backing-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::backing-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backing-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backing-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backing-file", ...args: any[]): void
    connect(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::setup-by-uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksLoop interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface MDRaid_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.MDRaid

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ActiveDevices">"ActiveDevices"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    activeDevices?: GLib.Variant | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.BitmapLocation">"BitmapLocation"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    bitmapLocation?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChildConfiguration">"ChildConfiguration"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    childConfiguration?: GLib.Variant | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChunkSize">"ChunkSize"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    chunkSize?: number | null
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
    numDevices?: number | null
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
    syncAction?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncCompleted">"SyncCompleted"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    syncCompleted?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRate">"SyncRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    syncRate?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRemainingTime">"SyncRemainingTime"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    syncRemainingTime?: number | null
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
    (invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-delete`
 */
interface MDRaid_HandleDeleteSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-remove-device`
 */
interface MDRaid_HandleRemoveDeviceSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-request-sync-action`
 */
interface MDRaid_HandleRequestSyncActionSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-bitmap-location`
 */
interface MDRaid_HandleSetBitmapLocationSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-start`
 */
interface MDRaid_HandleStartSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-stop`
 */
interface MDRaid_HandleStopSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

interface MDRaid {

    // Own properties of UDisks-2.0.UDisks.MDRaid

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ActiveDevices">"ActiveDevices"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    activeDevices: GLib.Variant
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.BitmapLocation">"BitmapLocation"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    bitmapLocation: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChildConfiguration">"ChildConfiguration"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    childConfiguration: GLib.Variant
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChunkSize">"ChunkSize"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    chunkSize: number
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
    numDevices: number
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
    syncAction: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncCompleted">"SyncCompleted"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    syncCompleted: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRate">"SyncRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    syncRate: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRemainingTime">"SyncRemainingTime"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    syncRemainingTime: number
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
     * @param argDevice Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callAddDevice(argDevice: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_add_device().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_add_device().
     */
    callAddDeviceFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.AddDevice">AddDevice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_add_device() for the asynchronous version of this method.
     * @param argDevice Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callAddDeviceSync(argDevice: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Delete">Delete()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_call_delete_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_call_delete_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callDelete(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_delete().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_delete().
     */
    callDeleteFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Delete">Delete()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_delete() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callDeleteSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RemoveDevice">RemoveDevice()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_call_remove_device_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_call_remove_device_sync() for the synchronous, blocking version of this method.
     * @param argDevice Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callRemoveDevice(argDevice: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_remove_device().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_remove_device().
     */
    callRemoveDeviceFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RemoveDevice">RemoveDevice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_remove_device() for the asynchronous version of this method.
     * @param argDevice Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callRemoveDeviceSync(argDevice: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RequestSyncAction">RequestSyncAction()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_call_request_sync_action_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_call_request_sync_action_sync() for the synchronous, blocking version of this method.
     * @param argSyncAction Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callRequestSyncAction(argSyncAction: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_request_sync_action().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_request_sync_action().
     */
    callRequestSyncActionFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RequestSyncAction">RequestSyncAction()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_request_sync_action() for the asynchronous version of this method.
     * @param argSyncAction Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callRequestSyncActionSync(argSyncAction: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.SetBitmapLocation">SetBitmapLocation()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_call_set_bitmap_location_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_call_set_bitmap_location_sync() for the synchronous, blocking version of this method.
     * @param argValue Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callSetBitmapLocation(argValue: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_set_bitmap_location().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_set_bitmap_location().
     */
    callSetBitmapLocationFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.SetBitmapLocation">SetBitmapLocation()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_set_bitmap_location() for the asynchronous version of this method.
     * @param argValue Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSetBitmapLocationSync(argValue: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Start">Start()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_call_start_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_call_start_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callStart(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_start().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_start().
     */
    callStartFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_start() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callStartSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Stop">Stop()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_call_stop_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_call_stop_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callStop(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_mdraid_call_stop().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_stop().
     */
    callStopFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_call_stop() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callStopSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.AddDevice">AddDevice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeAddDevice(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Delete">Delete()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeDelete(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RemoveDevice">RemoveDevice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeRemoveDevice(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RequestSyncAction">RequestSyncAction()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeRequestSyncAction(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.SetBitmapLocation">SetBitmapLocation()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeSetBitmapLocation(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeStart(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeStop(invocation: Gio.DBusMethodInvocation): void

    // Own signals of UDisks-2.0.UDisks.MDRaid

    connect(sigName: "handle-add-device", callback: MDRaid_HandleAddDeviceSignalCallback): number
    on(sigName: "handle-add-device", callback: MDRaid_HandleAddDeviceSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-add-device", callback: MDRaid_HandleAddDeviceSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-add-device", callback: MDRaid_HandleAddDeviceSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-add-device", argDevice: string, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-delete", callback: MDRaid_HandleDeleteSignalCallback): number
    on(sigName: "handle-delete", callback: MDRaid_HandleDeleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-delete", callback: MDRaid_HandleDeleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-delete", callback: MDRaid_HandleDeleteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-delete", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-remove-device", callback: MDRaid_HandleRemoveDeviceSignalCallback): number
    on(sigName: "handle-remove-device", callback: MDRaid_HandleRemoveDeviceSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-remove-device", callback: MDRaid_HandleRemoveDeviceSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-remove-device", callback: MDRaid_HandleRemoveDeviceSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-remove-device", argDevice: string, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-request-sync-action", callback: MDRaid_HandleRequestSyncActionSignalCallback): number
    on(sigName: "handle-request-sync-action", callback: MDRaid_HandleRequestSyncActionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-request-sync-action", callback: MDRaid_HandleRequestSyncActionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-request-sync-action", callback: MDRaid_HandleRequestSyncActionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-request-sync-action", argSyncAction: string, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-bitmap-location", callback: MDRaid_HandleSetBitmapLocationSignalCallback): number
    on(sigName: "handle-set-bitmap-location", callback: MDRaid_HandleSetBitmapLocationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-set-bitmap-location", callback: MDRaid_HandleSetBitmapLocationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-set-bitmap-location", callback: MDRaid_HandleSetBitmapLocationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-set-bitmap-location", argValue: string, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-start", callback: MDRaid_HandleStartSignalCallback): number
    on(sigName: "handle-start", callback: MDRaid_HandleStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: MDRaid_HandleStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: MDRaid_HandleStartSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-start", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-stop", callback: MDRaid_HandleStopSignalCallback): number
    on(sigName: "handle-stop", callback: MDRaid_HandleStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: MDRaid_HandleStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: MDRaid_HandleStopSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-stop", argOptions: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.MDRaid

    connect(sigName: "notify::active-devices", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-devices", ...args: any[]): void
    connect(sigName: "notify::bitmap-location", callback: (...args: any[]) => void): number
    on(sigName: "notify::bitmap-location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bitmap-location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bitmap-location", ...args: any[]): void
    connect(sigName: "notify::child-configuration", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-configuration", ...args: any[]): void
    connect(sigName: "notify::chunk-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::chunk-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chunk-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chunk-size", ...args: any[]): void
    connect(sigName: "notify::degraded", callback: (...args: any[]) => void): number
    on(sigName: "notify::degraded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::degraded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::degraded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::degraded", ...args: any[]): void
    connect(sigName: "notify::level", callback: (...args: any[]) => void): number
    on(sigName: "notify::level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::num-devices", callback: (...args: any[]) => void): number
    on(sigName: "notify::num-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::num-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::num-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::num-devices", ...args: any[]): void
    connect(sigName: "notify::running", callback: (...args: any[]) => void): number
    on(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sync-action", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-action", ...args: any[]): void
    connect(sigName: "notify::sync-completed", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-completed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-completed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-completed", ...args: any[]): void
    connect(sigName: "notify::sync-rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-rate", ...args: any[]): void
    connect(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-remaining-time", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksMDRaid interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface Manager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UDisks-2.0.UDisks.Manager

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.SupportedFilesystems">"SupportedFilesystems"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    supportedFilesystems?: string[] | null
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
    (invocation: Gio.DBusMethodInvocation, argEnable: boolean): boolean
}

/**
 * Signal callback interface for `handle-loop-setup`
 */
interface Manager_HandleLoopSetupSignalCallback {
    (invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, argFd: GLib.Variant, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-mdraid-create`
 */
interface Manager_HandleMdraidCreateSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argBlocks: string[], argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant): boolean
}

interface Manager {

    // Own properties of UDisks-2.0.UDisks.Manager

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.SupportedFilesystems">"SupportedFilesystems"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    supportedFilesystems: string[]
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
     * @param argEnable Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callEnableModules(argEnable: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_manager_call_enable_modules().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_enable_modules().
     */
    callEnableModulesFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.EnableModules">EnableModules()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_manager_call_enable_modules() for the asynchronous version of this method.
     * @param argEnable Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callEnableModulesSync(argEnable: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup">LoopSetup()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_manager_call_loop_setup_finish() to get the result of the operation.
     * 
     * See udisks_manager_call_loop_setup_sync() for the synchronous, blocking version of this method.
     * @param argFd Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callLoopSetup(argFd: GLib.Variant, argOptions: GLib.Variant, fdList: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_manager_call_loop_setup().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_loop_setup().
     */
    callLoopSetupFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outResultingDevice */ string, /* outFdList */ Gio.UnixFDList ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup">LoopSetup()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_manager_call_loop_setup() for the asynchronous version of this method.
     * @param argFd Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    callLoopSetupSync(argFd: GLib.Variant, argOptions: GLib.Variant, fdList: Gio.UnixFDList | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outResultingDevice */ string, /* outFdList */ Gio.UnixFDList ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.MDRaidCreate">MDRaidCreate()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_manager_call_mdraid_create_finish() to get the result of the operation.
     * 
     * See udisks_manager_call_mdraid_create_sync() for the synchronous, blocking version of this method.
     * @param argBlocks Argument to pass with the method invocation.
     * @param argLevel Argument to pass with the method invocation.
     * @param argName Argument to pass with the method invocation.
     * @param argChunk Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callMdraidCreate(argBlocks: string, argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_manager_call_mdraid_create().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_mdraid_create().
     */
    callMdraidCreateFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outResultingArray */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.MDRaidCreate">MDRaidCreate()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_manager_call_mdraid_create() for the asynchronous version of this method.
     * @param argBlocks Argument to pass with the method invocation.
     * @param argLevel Argument to pass with the method invocation.
     * @param argName Argument to pass with the method invocation.
     * @param argChunk Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callMdraidCreateSync(argBlocks: string, argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outResultingArray */ string ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.EnableModules">EnableModules()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeEnableModules(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup">LoopSetup()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param fdList A #GUnixFDList or %NULL.
     * @param resultingDevice Parameter to return.
     */
    completeLoopSetup(invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList | null, resultingDevice: string): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.MDRaidCreate">MDRaidCreate()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param resultingArray Parameter to return.
     */
    completeMdraidCreate(invocation: Gio.DBusMethodInvocation, resultingArray: string): void

    // Own signals of UDisks-2.0.UDisks.Manager

    connect(sigName: "handle-enable-modules", callback: Manager_HandleEnableModulesSignalCallback): number
    on(sigName: "handle-enable-modules", callback: Manager_HandleEnableModulesSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-enable-modules", callback: Manager_HandleEnableModulesSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-enable-modules", callback: Manager_HandleEnableModulesSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-enable-modules", argEnable: boolean, ...args: any[]): void
    connect(sigName: "handle-loop-setup", callback: Manager_HandleLoopSetupSignalCallback): number
    on(sigName: "handle-loop-setup", callback: Manager_HandleLoopSetupSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-loop-setup", callback: Manager_HandleLoopSetupSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-loop-setup", callback: Manager_HandleLoopSetupSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-loop-setup", fdList: Gio.UnixFDList | null, argFd: GLib.Variant, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-mdraid-create", callback: Manager_HandleMdraidCreateSignalCallback): number
    on(sigName: "handle-mdraid-create", callback: Manager_HandleMdraidCreateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-mdraid-create", callback: Manager_HandleMdraidCreateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-mdraid-create", callback: Manager_HandleMdraidCreateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-mdraid-create", argBlocks: string[], argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Manager

    connect(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-filesystems", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksManager interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
    driveAta?: DriveAta | null
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
    partitionTable?: PartitionTable | null
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
    driveAta: DriveAta
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
    partitionTable: PartitionTable
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
    getBlock(): Block
    /**
     * Gets the #UDisksDrive instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link> on `object,` if any.
     */
    getDrive(): Drive
    /**
     * Gets the #UDisksDriveAta instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link> on `object,` if any.
     */
    getDriveAta(): DriveAta
    /**
     * Gets the #UDisksEncrypted instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link> on `object,` if any.
     */
    getEncrypted(): Encrypted
    /**
     * Gets the #UDisksFilesystem instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link> on `object,` if any.
     */
    getFilesystem(): Filesystem
    /**
     * Gets the #UDisksJob instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link> on `object,` if any.
     */
    getJob(): Job
    /**
     * Gets the #UDisksLoop instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link> on `object,` if any.
     */
    getLoop(): Loop
    /**
     * Gets the #UDisksManager instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link> on `object,` if any.
     */
    getManager(): Manager
    /**
     * Gets the #UDisksMDRaid instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link> on `object,` if any.
     */
    getMdraid(): MDRaid
    /**
     * Gets the #UDisksPartition instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link> on `object,` if any.
     */
    getPartition(): Partition
    /**
     * Gets the #UDisksPartitionTable instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link> on `object,` if any.
     */
    getPartitionTable(): PartitionTable
    /**
     * Gets the #UDisksSwapspace instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link> on `object,` if any.
     */
    getSwapspace(): Swapspace

    // Class property signals of UDisks-2.0.UDisks.Object

    connect(sigName: "notify::block", callback: (...args: any[]) => void): number
    on(sigName: "notify::block", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::block", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::drive", callback: (...args: any[]) => void): number
    on(sigName: "notify::drive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drive", ...args: any[]): void
    connect(sigName: "notify::drive-ata", callback: (...args: any[]) => void): number
    on(sigName: "notify::drive-ata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drive-ata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drive-ata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drive-ata", ...args: any[]): void
    connect(sigName: "notify::encrypted", callback: (...args: any[]) => void): number
    on(sigName: "notify::encrypted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::encrypted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::encrypted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::encrypted", ...args: any[]): void
    connect(sigName: "notify::filesystem", callback: (...args: any[]) => void): number
    on(sigName: "notify::filesystem", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filesystem", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filesystem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filesystem", ...args: any[]): void
    connect(sigName: "notify::job", callback: (...args: any[]) => void): number
    on(sigName: "notify::job", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::job", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::job", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::job", ...args: any[]): void
    connect(sigName: "notify::loop", callback: (...args: any[]) => void): number
    on(sigName: "notify::loop", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::loop", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::loop", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::mdraid", callback: (...args: any[]) => void): number
    on(sigName: "notify::mdraid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mdraid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mdraid", ...args: any[]): void
    connect(sigName: "notify::partition", callback: (...args: any[]) => void): number
    on(sigName: "notify::partition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::partition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::partition", ...args: any[]): void
    connect(sigName: "notify::partition-table", callback: (...args: any[]) => void): number
    on(sigName: "notify::partition-table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::partition-table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::partition-table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::partition-table", ...args: any[]): void
    connect(sigName: "notify::swapspace", callback: (...args: any[]) => void): number
    on(sigName: "notify::swapspace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swapspace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swapspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swapspace", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    isContained?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContainer">"IsContainer"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    isContainer?: boolean | null
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
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-flags`
 */
interface Partition_HandleSetFlagsSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-name`
 */
interface Partition_HandleSetNameSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-set-type`
 */
interface Partition_HandleSetTypeSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant): boolean
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
    isContained: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContainer">"IsContainer"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    isContainer: boolean
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
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callDelete(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_partition_call_delete().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_delete().
     */
    callDeleteFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.Delete">Delete()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_call_delete() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callDeleteSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetFlags">SetFlags()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_call_set_flags_finish() to get the result of the operation.
     * 
     * See udisks_partition_call_set_flags_sync() for the synchronous, blocking version of this method.
     * @param argFlags Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callSetFlags(argFlags: number, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_partition_call_set_flags().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_set_flags().
     */
    callSetFlagsFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetFlags">SetFlags()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_call_set_flags() for the asynchronous version of this method.
     * @param argFlags Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSetFlagsSync(argFlags: number, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetName">SetName()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_call_set_name_finish() to get the result of the operation.
     * 
     * See udisks_partition_call_set_name_sync() for the synchronous, blocking version of this method.
     * @param argName Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callSetName(argName: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_partition_call_set_name().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_set_name().
     */
    callSetNameFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetName">SetName()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_call_set_name() for the asynchronous version of this method.
     * @param argName Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSetNameSync(argName: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetType">SetType()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_call_set_type_finish() to get the result of the operation.
     * 
     * See udisks_partition_call_set_type_sync() for the synchronous, blocking version of this method.
     * @param argType Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callSetType(argType: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_partition_call_set_type().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_set_type().
     */
    callSetTypeFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetType">SetType()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_call_set_type() for the asynchronous version of this method.
     * @param argType Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSetTypeSync(argType: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.Delete">Delete()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeDelete(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetFlags">SetFlags()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeSetFlags(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetName">SetName()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeSetName(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetType">SetType()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeSetType(invocation: Gio.DBusMethodInvocation): void

    // Own signals of UDisks-2.0.UDisks.Partition

    connect(sigName: "handle-delete", callback: Partition_HandleDeleteSignalCallback): number
    on(sigName: "handle-delete", callback: Partition_HandleDeleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-delete", callback: Partition_HandleDeleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-delete", callback: Partition_HandleDeleteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-delete", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-flags", callback: Partition_HandleSetFlagsSignalCallback): number
    on(sigName: "handle-set-flags", callback: Partition_HandleSetFlagsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-set-flags", callback: Partition_HandleSetFlagsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-set-flags", callback: Partition_HandleSetFlagsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-set-flags", argFlags: number, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-name", callback: Partition_HandleSetNameSignalCallback): number
    on(sigName: "handle-set-name", callback: Partition_HandleSetNameSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-set-name", callback: Partition_HandleSetNameSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-set-name", callback: Partition_HandleSetNameSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-set-name", argName: string, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-set-type", callback: Partition_HandleSetTypeSignalCallback): number
    on(sigName: "handle-set-type", callback: Partition_HandleSetTypeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-set-type", callback: Partition_HandleSetTypeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-set-type", callback: Partition_HandleSetTypeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-set-type", argType: string, argOptions: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Partition

    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::is-contained", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-contained", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-contained", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-contained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-contained", ...args: any[]): void
    connect(sigName: "notify::is-container", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-container", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::number", callback: (...args: any[]) => void): number
    on(sigName: "notify::number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::table", callback: (...args: any[]) => void): number
    on(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksPartition interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
    (invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-create-partition-and-format`
 */
interface PartitionTable_HandleCreatePartitionAndFormatSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant): boolean
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
     * @param argOffset Argument to pass with the method invocation.
     * @param argSize Argument to pass with the method invocation.
     * @param argType Argument to pass with the method invocation.
     * @param argName Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callCreatePartition(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartitionAndFormat">CreatePartitionAndFormat()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_table_call_create_partition_and_format_finish() to get the result of the operation.
     * 
     * See udisks_partition_table_call_create_partition_and_format_sync() for the synchronous, blocking version of this method.
     * @param argOffset Argument to pass with the method invocation.
     * @param argSize Argument to pass with the method invocation.
     * @param argType Argument to pass with the method invocation.
     * @param argName Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param argFormatType Argument to pass with the method invocation.
     * @param argFormatOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callCreatePartitionAndFormat(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_partition_table_call_create_partition_and_format().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_table_call_create_partition_and_format().
     */
    callCreatePartitionAndFormatFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartitionAndFormat">CreatePartitionAndFormat()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_table_call_create_partition_and_format() for the asynchronous version of this method.
     * @param argOffset Argument to pass with the method invocation.
     * @param argSize Argument to pass with the method invocation.
     * @param argType Argument to pass with the method invocation.
     * @param argName Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param argFormatType Argument to pass with the method invocation.
     * @param argFormatOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callCreatePartitionAndFormatSync(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    /**
     * Finishes an operation started with udisks_partition_table_call_create_partition().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_table_call_create_partition().
     */
    callCreatePartitionFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartition">CreatePartition()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_table_call_create_partition() for the asynchronous version of this method.
     * @param argOffset Argument to pass with the method invocation.
     * @param argSize Argument to pass with the method invocation.
     * @param argType Argument to pass with the method invocation.
     * @param argName Argument to pass with the method invocation.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callCreatePartitionSync(argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCreatedPartition */ string ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartition">CreatePartition()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param createdPartition Parameter to return.
     */
    completeCreatePartition(invocation: Gio.DBusMethodInvocation, createdPartition: string): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartitionAndFormat">CreatePartitionAndFormat()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param createdPartition Parameter to return.
     */
    completeCreatePartitionAndFormat(invocation: Gio.DBusMethodInvocation, createdPartition: string): void

    // Own signals of UDisks-2.0.UDisks.PartitionTable

    connect(sigName: "handle-create-partition", callback: PartitionTable_HandleCreatePartitionSignalCallback): number
    on(sigName: "handle-create-partition", callback: PartitionTable_HandleCreatePartitionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-create-partition", callback: PartitionTable_HandleCreatePartitionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-create-partition", callback: PartitionTable_HandleCreatePartitionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-create-partition", argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-create-partition-and-format", callback: PartitionTable_HandleCreatePartitionAndFormatSignalCallback): number
    on(sigName: "handle-create-partition-and-format", callback: PartitionTable_HandleCreatePartitionAndFormatSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-create-partition-and-format", callback: PartitionTable_HandleCreatePartitionAndFormatSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-create-partition-and-format", callback: PartitionTable_HandleCreatePartitionAndFormatSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-create-partition-and-format", argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.PartitionTable

    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksPartitionTable interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-stop`
 */
interface Swapspace_HandleStopSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant): boolean
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
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callStart(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_swapspace_call_start().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_swapspace_call_start().
     */
    callStartFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_swapspace_call_start() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callStartSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Stop">Stop()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_swapspace_call_stop_finish() to get the result of the operation.
     * 
     * See udisks_swapspace_call_stop_sync() for the synchronous, blocking version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callStop(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with udisks_swapspace_call_stop().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_swapspace_call_stop().
     */
    callStopFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See udisks_swapspace_call_stop() for the asynchronous version of this method.
     * @param argOptions Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callStopSync(argOptions: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeStart(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeStop(invocation: Gio.DBusMethodInvocation): void

    // Own signals of UDisks-2.0.UDisks.Swapspace

    connect(sigName: "handle-start", callback: Swapspace_HandleStartSignalCallback): number
    on(sigName: "handle-start", callback: Swapspace_HandleStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-start", callback: Swapspace_HandleStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-start", callback: Swapspace_HandleStartSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-start", argOptions: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-stop", callback: Swapspace_HandleStopSignalCallback): number
    on(sigName: "handle-stop", callback: Swapspace_HandleStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-stop", callback: Swapspace_HandleStopSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-stop", callback: Swapspace_HandleStopSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-stop", argOptions: GLib.Variant, ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Swapspace

    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UDisksSwapspace interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface BlockProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Block_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface BlockProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Block {

    // Class property signals of UDisks-2.0.UDisks.BlockProxy

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::configuration", callback: (...args: any[]) => void): number
    on(sigName: "notify::configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::configuration", ...args: any[]): void
    connect(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::crypto-backing-device", ...args: any[]): void
    connect(sigName: "notify::device", callback: (...args: any[]) => void): number
    on(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::device-number", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-number", ...args: any[]): void
    connect(sigName: "notify::drive", callback: (...args: any[]) => void): number
    on(sigName: "notify::drive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drive", ...args: any[]): void
    connect(sigName: "notify::hint-auto", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-auto", ...args: any[]): void
    connect(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-icon-name", ...args: any[]): void
    connect(sigName: "notify::hint-ignore", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-ignore", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-ignore", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-ignore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-ignore", ...args: any[]): void
    connect(sigName: "notify::hint-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-name", ...args: any[]): void
    connect(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-partitionable", ...args: any[]): void
    connect(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-symbolic-icon-name", ...args: any[]): void
    connect(sigName: "notify::hint-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-system", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::id-label", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-label", ...args: any[]): void
    connect(sigName: "notify::id-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-type", ...args: any[]): void
    connect(sigName: "notify::id-usage", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-usage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-usage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-usage", ...args: any[]): void
    connect(sigName: "notify::id-uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-uuid", ...args: any[]): void
    connect(sigName: "notify::id-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-version", ...args: any[]): void
    connect(sigName: "notify::mdraid", callback: (...args: any[]) => void): number
    on(sigName: "notify::mdraid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mdraid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mdraid", ...args: any[]): void
    connect(sigName: "notify::mdraid-member", callback: (...args: any[]) => void): number
    on(sigName: "notify::mdraid-member", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mdraid-member", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mdraid-member", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mdraid-member", ...args: any[]): void
    connect(sigName: "notify::preferred-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::preferred-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::preferred-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::preferred-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::preferred-device", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::symlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::symlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::symlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::symlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::symlinks", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): BlockProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_block_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): BlockProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_block_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_block_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): BlockProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): BlockProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_block_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_block_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_block_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface BlockSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Block_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface BlockSkeleton extends Gio.DBusInterface, Block {

    // Class property signals of UDisks-2.0.UDisks.BlockSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::configuration", callback: (...args: any[]) => void): number
    on(sigName: "notify::configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::configuration", ...args: any[]): void
    connect(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::crypto-backing-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::crypto-backing-device", ...args: any[]): void
    connect(sigName: "notify::device", callback: (...args: any[]) => void): number
    on(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::device-number", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-number", ...args: any[]): void
    connect(sigName: "notify::drive", callback: (...args: any[]) => void): number
    on(sigName: "notify::drive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drive", ...args: any[]): void
    connect(sigName: "notify::hint-auto", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-auto", ...args: any[]): void
    connect(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-icon-name", ...args: any[]): void
    connect(sigName: "notify::hint-ignore", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-ignore", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-ignore", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-ignore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-ignore", ...args: any[]): void
    connect(sigName: "notify::hint-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-name", ...args: any[]): void
    connect(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-partitionable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-partitionable", ...args: any[]): void
    connect(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-symbolic-icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-symbolic-icon-name", ...args: any[]): void
    connect(sigName: "notify::hint-system", callback: (...args: any[]) => void): number
    on(sigName: "notify::hint-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hint-system", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hint-system", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hint-system", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::id-label", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-label", ...args: any[]): void
    connect(sigName: "notify::id-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-type", ...args: any[]): void
    connect(sigName: "notify::id-usage", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-usage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-usage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-usage", ...args: any[]): void
    connect(sigName: "notify::id-uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-uuid", ...args: any[]): void
    connect(sigName: "notify::id-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::id-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id-version", ...args: any[]): void
    connect(sigName: "notify::mdraid", callback: (...args: any[]) => void): number
    on(sigName: "notify::mdraid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mdraid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mdraid", ...args: any[]): void
    connect(sigName: "notify::mdraid-member", callback: (...args: any[]) => void): number
    on(sigName: "notify::mdraid-member", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mdraid-member", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mdraid-member", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mdraid-member", ...args: any[]): void
    connect(sigName: "notify::preferred-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::preferred-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::preferred-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::preferred-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::preferred-device", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::symlinks", callback: (...args: any[]) => void): number
    on(sigName: "notify::symlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::symlinks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::symlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::symlinks", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (): void
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
    readonly objectManager: Gio.DBusObjectManager

    // Owm methods of UDisks-2.0.UDisks.Client

    /**
     * Gets all RAID devices (e.g. <filename>/dev/md0</filename> and <filename>/dev/md1</filename>) for `raid`.
     * 
     * This is usually only useful in <ulink
     * url="http://en.wikipedia.org/wiki/Split-brain_(computing)">split-brain
     * situations</ulink> ??? see udisks_client_get_block_for_mdraid() for
     * an example ??? and is normally used only to convey the problem in an
     * user interface.
     * @param raid A #UDisksMDRaid.
     */
    getAllBlocksForMdraid(raid: MDRaid): Block[]
    /**
     * Gets the #UDisksBlock corresponding to `block_device_number,` if any.
     * @param blockDeviceNumber A #dev_t to get a #UDisksBlock for.
     */
    getBlockForDev(blockDeviceNumber: number): Block
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
     * @param getPhysical %TRUE to get a physical device, %FALSE to get the logical device.
     */
    getBlockForDrive(drive: Drive, getPhysical: boolean): Block
    /**
     * Gets all the #UDisksBlock instances with the given label, if any.
     * @param label The label.
     */
    getBlockForLabel(label: string): Block[]
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
    getBlockForMdraid(raid: MDRaid): Block
    /**
     * Gets all the #UDisksBlock instances with the given uuid, if any.
     * @param uuid The uuid.
     */
    getBlockForUuid(uuid: string): Block[]
    /**
     * If `block` is an unlocked encrypted device, gets the cleartext device.
     * @param block A #UDisksBlock.
     */
    getCleartextBlock(block: Block): Block
    /**
     * Gets the #UDisksDrive that `block` belongs to, if any.
     * @param block A #UDisksBlock.
     */
    getDriveForBlock(block: Block): Drive
    /**
     * Gets information about a #UDisksDrive object that is suitable to
     * present in an user interface. The returned strings are localized.
     * @param drive A #UDisksDrive.
     */
    getDriveInfo(drive: Drive): [ /* outName */ string, /* outDescription */ string, /* outDriveIcon */ Gio.Icon, /* outMediaDescription */ string, /* outMediaIcon */ Gio.Icon ]
    /**
     * Gets all siblings for `drive`.
     * @param drive A #UDisksDrive.
     */
    getDriveSiblings(drive: Drive): Drive[]
    /**
     * Gets a human readable localized string for `usage,` `type` and `version`.
     * @param usage Usage id e.g. "filesystem" or "crypto".
     * @param type Type e.g. "ext4" or "crypto_LUKS"
     * @param version Version.
     * @param longString Whether to produce a long string.
     */
    getIdForDisplay(usage: string, type: string, version: string, longString: boolean): string
    /**
     * Gets a human-readable and localized text string describing the
     * operation of `job`.
     * 
     * For known job types, see the documentation for the
     * <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Operation">Job:Operation</link>
     * D-Bus property.
     * @param job A #UDisksJob.
     */
    getJobDescription(job: Job): string
    /**
     * Gets all the #UDisksJob instances that reference `object,` if any.
     * @param object A #UDisksObject.
     */
    getJobsForObject(object: Object): Job[]
    /**
     * Gets the corresponding loop interface for `block`.
     * 
     * This only works if `block` itself is a loop device or a partition of
     * a loop device.
     * @param block A #UDisksBlock.
     */
    getLoopForBlock(block: Block): Loop
    /**
     * Gets the #UDisksManager interface on the well-known
     * <literal>/org/freedesktop/UDisks2/Manager</literal> object.
     */
    getManager(): Manager
    /**
     * Gets the #UDisksMDRaid that `block` is the block device for, if any.
     * @param block A #UDisksBlock.
     */
    getMdraidForBlock(block: Block): MDRaid
    /**
     * Gets a human-readable string of the media described by
     * `media_compat`. The returned information is localized.
     * @param mediaCompat An array of media types.
     */
    getMediaCompatForDisplay(mediaCompat: string): string
    /**
     * Gets the physical block devices that are part of `raid`.
     * @param raid A #UDisksMDRaid.
     */
    getMembersForMdraid(raid: MDRaid): Block[]
    /**
     * Convenience function for looking up an #UDisksObject for `object_path`.
     * @param objectPath Object path.
     */
    getObject(objectPath: string): Object
    /**
     * Gets information about a #UDisksObject instance that is suitable to
     * present in an user interface. Information is returned in the
     * #UDisksObjectInfo object and is localized.
     * @param object A #UDisksObject.
     */
    getObjectInfo(object: Object): ObjectInfo
    /**
     * Gets the #GDBusObjectManager used by `client`.
     */
    getObjectManager(): Gio.DBusObjectManager
    /**
     * Gets information about `partition` that is suitable to present in an
     * user interface in a single line of text.
     * 
     * The returned string is localized and includes things like the
     * partition type, flags (if any) and name (if any).
     * @param partition # #UDisksPartition.
     */
    getPartitionInfo(partition: Partition): string
    /**
     * Gets the #UDisksPartitionTable corresponding to `partition`.
     * @param partition A #UDisksPartition.
     */
    getPartitionTable(partition: Partition): PartitionTable
    /**
     * Gets a human readable localized string for `partition_table_type` and `partition_table_subtype`.
     * @param partitionTableType A partition table type e.g. 'dos' or 'gpt'.
     * @param partitionTableSubtype A partition table type e.g. 'dos' or 'gpt'.
     */
    getPartitionTableSubtypeForDisplay(partitionTableType: string, partitionTableSubtype: string): string
    /**
     * Gets all known subtypes for `partition_table_type`.
     * @param partitionTableType A partition table type e.g. 'dos' or 'gpt'.
     */
    getPartitionTableSubtypes(partitionTableType: string): string[]
    /**
     * Gets a human readable localized string for `partition_table_type`.
     * @param partitionTableType A partition table type e.g. 'dos' or 'gpt'.
     */
    getPartitionTableTypeForDisplay(partitionTableType: string): string
    /**
     * Like udisks_client_get_partition_type_for_display() but also takes
     * the partition table subtype into account, if available. This is
     * useful in scenarios where different subtypes is using the same
     * partition type.
     * @param partitionTableType A partitioning type e.g. 'dos' or 'gpt'.
     * @param partitionTableSubtype A partitioning subtype or %NULL.
     * @param partitionType A partition type.
     */
    getPartitionTypeAndSubtypeForDisplay(partitionTableType: string, partitionTableSubtype: string, partitionType: string): string
    /**
     * Gets a human readable localized string for `partiton_table_type` and `partition_type`.
     * @param partitionTableType A partitioning type e.g. 'dos' or 'gpt'.
     * @param partitionType A partition type.
     */
    getPartitionTypeForDisplay(partitionTableType: string, partitionType: string): string
    /**
     * Gets information about all known partition types for `partition_table_type` and `partition_table_subtype`.
     * @param partitionTableType A partition table type e.g. 'dos' or 'gpt'.
     * @param partitionTableSubtype A partition table subtype or %NULL to get all known types.
     */
    getPartitionTypeInfos(partitionTableType: string, partitionTableSubtype: string | null): PartitionTypeInfo[]
    /**
     * Gets all partitions of `table`.
     * @param table A #UDisksPartitionTable.
     */
    getPartitions(table: PartitionTable): Partition[]
    /**
     * Utility function to get a human-readable string that represents `size`.
     * @param size Size in bytes
     * @param usePow2 Whether power-of-two units should be used instead of power-of-ten units.
     * @param longString Whether to produce a long string.
     */
    getSizeForDisplay(size: number, usePow2: boolean, longString: boolean): string
    /**
     * Like udisks_client_get_object() but doesn't increase the reference
     * count on the returned #UDisksObject.
     * 
     * <warning>The returned object is only valid until removed so it is only safe to use this function on the thread where `client` was constructed. Use udisks_client_get_object() if on another thread.</warning>
     * @param objectPath Object path.
     */
    peekObject(objectPath: string): Object
    /**
     * Queues up a #UDisksClient::changed signal and rate-limit it. See
     * the documentation for the #UDisksClient::changed property for more
     * information.
     */
    queueChanged(): void
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
    on(sigName: "changed", callback: Client_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Client_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Client_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of UDisks-2.0.UDisks.Client

    connect(sigName: "notify::manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::object-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-manager", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): Client
    /**
     * Synchronously gets a #UDisksClient for the local system.
     * @constructor 
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(cancellable: Gio.Cancellable | null): Client
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::aam-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::aam-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::aam-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::aam-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::aam-enabled", ...args: any[]): void
    connect(sigName: "notify::aam-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::aam-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::aam-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::aam-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::aam-supported", ...args: any[]): void
    connect(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::aam-vendor-recommended-value", ...args: any[]): void
    connect(sigName: "notify::apm-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::apm-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::apm-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::apm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::apm-enabled", ...args: any[]): void
    connect(sigName: "notify::apm-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::apm-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::apm-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::apm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::apm-supported", ...args: any[]): void
    connect(sigName: "notify::pm-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::pm-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pm-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pm-enabled", ...args: any[]): void
    connect(sigName: "notify::pm-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::pm-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pm-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pm-supported", ...args: any[]): void
    connect(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-lookahead-enabled", ...args: any[]): void
    connect(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-lookahead-supported", ...args: any[]): void
    connect(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void): number
    on(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::security-enhanced-erase-unit-minutes", ...args: any[]): void
    connect(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void): number
    on(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::security-erase-unit-minutes", ...args: any[]): void
    connect(sigName: "notify::security-frozen", callback: (...args: any[]) => void): number
    on(sigName: "notify::security-frozen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::security-frozen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::security-frozen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::security-frozen", ...args: any[]): void
    connect(sigName: "notify::smart-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-enabled", ...args: any[]): void
    connect(sigName: "notify::smart-failing", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-failing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-failing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-failing", ...args: any[]): void
    connect(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-num-attributes-failed-in-the-past", ...args: any[]): void
    connect(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-num-attributes-failing", ...args: any[]): void
    connect(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-num-bad-sectors", ...args: any[]): void
    connect(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-power-on-seconds", ...args: any[]): void
    connect(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-selftest-percent-remaining", ...args: any[]): void
    connect(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-selftest-status", ...args: any[]): void
    connect(sigName: "notify::smart-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-supported", ...args: any[]): void
    connect(sigName: "notify::smart-temperature", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-temperature", ...args: any[]): void
    connect(sigName: "notify::smart-updated", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-updated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-updated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-updated", ...args: any[]): void
    connect(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::write-cache-enabled", ...args: any[]): void
    connect(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::write-cache-supported", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): DriveAtaProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_drive_ata_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): DriveAtaProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_drive_ata_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_ata_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): DriveAtaProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): DriveAtaProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_drive_ata_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_ata_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_drive_ata_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface DriveAtaSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, DriveAta_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface DriveAtaSkeleton extends Gio.DBusInterface, DriveAta {

    // Class property signals of UDisks-2.0.UDisks.DriveAtaSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::aam-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::aam-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::aam-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::aam-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::aam-enabled", ...args: any[]): void
    connect(sigName: "notify::aam-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::aam-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::aam-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::aam-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::aam-supported", ...args: any[]): void
    connect(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void): number
    on(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::aam-vendor-recommended-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::aam-vendor-recommended-value", ...args: any[]): void
    connect(sigName: "notify::apm-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::apm-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::apm-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::apm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::apm-enabled", ...args: any[]): void
    connect(sigName: "notify::apm-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::apm-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::apm-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::apm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::apm-supported", ...args: any[]): void
    connect(sigName: "notify::pm-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::pm-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pm-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pm-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pm-enabled", ...args: any[]): void
    connect(sigName: "notify::pm-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::pm-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pm-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pm-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pm-supported", ...args: any[]): void
    connect(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-lookahead-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-lookahead-enabled", ...args: any[]): void
    connect(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-lookahead-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-lookahead-supported", ...args: any[]): void
    connect(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void): number
    on(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::security-enhanced-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::security-enhanced-erase-unit-minutes", ...args: any[]): void
    connect(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void): number
    on(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::security-erase-unit-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::security-erase-unit-minutes", ...args: any[]): void
    connect(sigName: "notify::security-frozen", callback: (...args: any[]) => void): number
    on(sigName: "notify::security-frozen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::security-frozen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::security-frozen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::security-frozen", ...args: any[]): void
    connect(sigName: "notify::smart-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-enabled", ...args: any[]): void
    connect(sigName: "notify::smart-failing", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-failing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-failing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-failing", ...args: any[]): void
    connect(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-attributes-failed-in-the-past", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-num-attributes-failed-in-the-past", ...args: any[]): void
    connect(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-attributes-failing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-num-attributes-failing", ...args: any[]): void
    connect(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-num-bad-sectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-num-bad-sectors", ...args: any[]): void
    connect(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-power-on-seconds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-power-on-seconds", ...args: any[]): void
    connect(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-selftest-percent-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-selftest-percent-remaining", ...args: any[]): void
    connect(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-selftest-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-selftest-status", ...args: any[]): void
    connect(sigName: "notify::smart-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-supported", ...args: any[]): void
    connect(sigName: "notify::smart-temperature", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-temperature", ...args: any[]): void
    connect(sigName: "notify::smart-updated", callback: (...args: any[]) => void): number
    on(sigName: "notify::smart-updated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smart-updated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smart-updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smart-updated", ...args: any[]): void
    connect(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::write-cache-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::write-cache-enabled", ...args: any[]): void
    connect(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::write-cache-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::write-cache-supported", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::can-power-off", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-power-off", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-power-off", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-power-off", ...args: any[]): void
    connect(sigName: "notify::configuration", callback: (...args: any[]) => void): number
    on(sigName: "notify::configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::configuration", ...args: any[]): void
    connect(sigName: "notify::connection-bus", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection-bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection-bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection-bus", ...args: any[]): void
    connect(sigName: "notify::ejectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::ejectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ejectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ejectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ejectable", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::media", callback: (...args: any[]) => void): number
    on(sigName: "notify::media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media", ...args: any[]): void
    connect(sigName: "notify::media-available", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-available", ...args: any[]): void
    connect(sigName: "notify::media-change-detected", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-change-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-change-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-change-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-change-detected", ...args: any[]): void
    connect(sigName: "notify::media-compatibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-compatibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-compatibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-compatibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-compatibility", ...args: any[]): void
    connect(sigName: "notify::media-removable", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-removable", ...args: any[]): void
    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::optical", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical", ...args: any[]): void
    connect(sigName: "notify::optical-blank", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-blank", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-blank", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-blank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-blank", ...args: any[]): void
    connect(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-num-audio-tracks", ...args: any[]): void
    connect(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-num-data-tracks", ...args: any[]): void
    connect(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-num-sessions", ...args: any[]): void
    connect(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-num-tracks", ...args: any[]): void
    connect(sigName: "notify::removable", callback: (...args: any[]) => void): number
    on(sigName: "notify::removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::removable", ...args: any[]): void
    connect(sigName: "notify::revision", callback: (...args: any[]) => void): number
    on(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::revision", ...args: any[]): void
    connect(sigName: "notify::rotation-rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-rate", ...args: any[]): void
    connect(sigName: "notify::seat", callback: (...args: any[]) => void): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (...args: any[]) => void): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::sibling-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::sibling-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sibling-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sibling-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sibling-id", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sort-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-key", ...args: any[]): void
    connect(sigName: "notify::time-detected", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-detected", ...args: any[]): void
    connect(sigName: "notify::time-media-detected", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-media-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-media-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-media-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-media-detected", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::wwn", callback: (...args: any[]) => void): number
    on(sigName: "notify::wwn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wwn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wwn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wwn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): DriveProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_drive_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): DriveProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_drive_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_drive_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): DriveProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): DriveProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_drive_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_drive_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_drive_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface DriveSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Drive_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface DriveSkeleton extends Gio.DBusInterface, Drive {

    // Class property signals of UDisks-2.0.UDisks.DriveSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::can-power-off", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-power-off", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-power-off", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-power-off", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-power-off", ...args: any[]): void
    connect(sigName: "notify::configuration", callback: (...args: any[]) => void): number
    on(sigName: "notify::configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::configuration", ...args: any[]): void
    connect(sigName: "notify::connection-bus", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection-bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection-bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection-bus", ...args: any[]): void
    connect(sigName: "notify::ejectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::ejectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ejectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ejectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ejectable", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::media", callback: (...args: any[]) => void): number
    on(sigName: "notify::media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media", ...args: any[]): void
    connect(sigName: "notify::media-available", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-available", ...args: any[]): void
    connect(sigName: "notify::media-change-detected", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-change-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-change-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-change-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-change-detected", ...args: any[]): void
    connect(sigName: "notify::media-compatibility", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-compatibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-compatibility", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-compatibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-compatibility", ...args: any[]): void
    connect(sigName: "notify::media-removable", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-removable", ...args: any[]): void
    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::optical", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical", ...args: any[]): void
    connect(sigName: "notify::optical-blank", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-blank", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-blank", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-blank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-blank", ...args: any[]): void
    connect(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-audio-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-num-audio-tracks", ...args: any[]): void
    connect(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-data-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-num-data-tracks", ...args: any[]): void
    connect(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-sessions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-num-sessions", ...args: any[]): void
    connect(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void): number
    on(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::optical-num-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::optical-num-tracks", ...args: any[]): void
    connect(sigName: "notify::removable", callback: (...args: any[]) => void): number
    on(sigName: "notify::removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::removable", ...args: any[]): void
    connect(sigName: "notify::revision", callback: (...args: any[]) => void): number
    on(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::revision", ...args: any[]): void
    connect(sigName: "notify::rotation-rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-rate", ...args: any[]): void
    connect(sigName: "notify::seat", callback: (...args: any[]) => void): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (...args: any[]) => void): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::sibling-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::sibling-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sibling-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sibling-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sibling-id", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sort-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::sort-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sort-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sort-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sort-key", ...args: any[]): void
    connect(sigName: "notify::time-detected", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-detected", ...args: any[]): void
    connect(sigName: "notify::time-media-detected", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-media-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-media-detected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-media-detected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-media-detected", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::wwn", callback: (...args: any[]) => void): number
    on(sigName: "notify::wwn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wwn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wwn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wwn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::child-configuration", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-configuration", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): EncryptedProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_encrypted_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): EncryptedProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_encrypted_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_encrypted_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): EncryptedProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): EncryptedProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_encrypted_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_encrypted_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_encrypted_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface EncryptedSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Encrypted_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface EncryptedSkeleton extends Gio.DBusInterface, Encrypted {

    // Class property signals of UDisks-2.0.UDisks.EncryptedSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::child-configuration", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-configuration", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::mount-points", callback: (...args: any[]) => void): number
    on(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mount-points", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): FilesystemProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_filesystem_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): FilesystemProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_filesystem_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_filesystem_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): FilesystemProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): FilesystemProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_filesystem_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_filesystem_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_filesystem_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface FilesystemSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Filesystem_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface FilesystemSkeleton extends Gio.DBusInterface, Filesystem {

    // Class property signals of UDisks-2.0.UDisks.FilesystemSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::mount-points", callback: (...args: any[]) => void): number
    on(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mount-points", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::bytes", callback: (...args: any[]) => void): number
    on(sigName: "notify::bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bytes", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (...args: any[]) => void): number
    on(sigName: "notify::cancelable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cancelable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cancelable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::expected-end-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::expected-end-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expected-end-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expected-end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expected-end-time", ...args: any[]): void
    connect(sigName: "notify::objects", callback: (...args: any[]) => void): number
    on(sigName: "notify::objects", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::objects", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::objects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::objects", ...args: any[]): void
    connect(sigName: "notify::operation", callback: (...args: any[]) => void): number
    on(sigName: "notify::operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operation", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::progress-valid", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress-valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress-valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress-valid", ...args: any[]): void
    connect(sigName: "notify::rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::started-by-uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::started-by-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::started-by-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::started-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::started-by-uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): JobProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_job_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_job_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): JobProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_job_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_job_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): JobProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): JobProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_job_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_job_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_job_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface JobSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Job_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface JobSkeleton extends Gio.DBusInterface, Job {

    // Class property signals of UDisks-2.0.UDisks.JobSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::bytes", callback: (...args: any[]) => void): number
    on(sigName: "notify::bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bytes", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: (...args: any[]) => void): number
    on(sigName: "notify::cancelable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cancelable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cancelable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::expected-end-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::expected-end-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expected-end-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expected-end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expected-end-time", ...args: any[]): void
    connect(sigName: "notify::objects", callback: (...args: any[]) => void): number
    on(sigName: "notify::objects", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::objects", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::objects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::objects", ...args: any[]): void
    connect(sigName: "notify::operation", callback: (...args: any[]) => void): number
    on(sigName: "notify::operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operation", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::progress-valid", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress-valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress-valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress-valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress-valid", ...args: any[]): void
    connect(sigName: "notify::rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::started-by-uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::started-by-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::started-by-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::started-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::started-by-uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::autoclear", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoclear", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoclear", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoclear", ...args: any[]): void
    connect(sigName: "notify::backing-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::backing-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backing-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backing-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backing-file", ...args: any[]): void
    connect(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::setup-by-uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): LoopProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_loop_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_loop_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): LoopProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_loop_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_loop_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): LoopProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): LoopProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_loop_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_loop_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_loop_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface LoopSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Loop_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface LoopSkeleton extends Gio.DBusInterface, Loop {

    // Class property signals of UDisks-2.0.UDisks.LoopSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::autoclear", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoclear", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoclear", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoclear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoclear", ...args: any[]): void
    connect(sigName: "notify::backing-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::backing-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backing-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backing-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backing-file", ...args: any[]): void
    connect(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::setup-by-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::setup-by-uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::active-devices", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-devices", ...args: any[]): void
    connect(sigName: "notify::bitmap-location", callback: (...args: any[]) => void): number
    on(sigName: "notify::bitmap-location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bitmap-location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bitmap-location", ...args: any[]): void
    connect(sigName: "notify::child-configuration", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-configuration", ...args: any[]): void
    connect(sigName: "notify::chunk-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::chunk-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chunk-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chunk-size", ...args: any[]): void
    connect(sigName: "notify::degraded", callback: (...args: any[]) => void): number
    on(sigName: "notify::degraded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::degraded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::degraded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::degraded", ...args: any[]): void
    connect(sigName: "notify::level", callback: (...args: any[]) => void): number
    on(sigName: "notify::level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::num-devices", callback: (...args: any[]) => void): number
    on(sigName: "notify::num-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::num-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::num-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::num-devices", ...args: any[]): void
    connect(sigName: "notify::running", callback: (...args: any[]) => void): number
    on(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sync-action", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-action", ...args: any[]): void
    connect(sigName: "notify::sync-completed", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-completed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-completed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-completed", ...args: any[]): void
    connect(sigName: "notify::sync-rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-rate", ...args: any[]): void
    connect(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-remaining-time", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): MDRaidProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_mdraid_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): MDRaidProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_mdraid_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_mdraid_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): MDRaidProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): MDRaidProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_mdraid_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_mdraid_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_mdraid_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface MDRaidSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, MDRaid_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface MDRaidSkeleton extends Gio.DBusInterface, MDRaid {

    // Class property signals of UDisks-2.0.UDisks.MDRaidSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::active-devices", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-devices", ...args: any[]): void
    connect(sigName: "notify::bitmap-location", callback: (...args: any[]) => void): number
    on(sigName: "notify::bitmap-location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bitmap-location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bitmap-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bitmap-location", ...args: any[]): void
    connect(sigName: "notify::child-configuration", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-configuration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-configuration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-configuration", ...args: any[]): void
    connect(sigName: "notify::chunk-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::chunk-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chunk-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chunk-size", ...args: any[]): void
    connect(sigName: "notify::degraded", callback: (...args: any[]) => void): number
    on(sigName: "notify::degraded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::degraded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::degraded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::degraded", ...args: any[]): void
    connect(sigName: "notify::level", callback: (...args: any[]) => void): number
    on(sigName: "notify::level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::num-devices", callback: (...args: any[]) => void): number
    on(sigName: "notify::num-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::num-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::num-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::num-devices", ...args: any[]): void
    connect(sigName: "notify::running", callback: (...args: any[]) => void): number
    on(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sync-action", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-action", ...args: any[]): void
    connect(sigName: "notify::sync-completed", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-completed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-completed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-completed", ...args: any[]): void
    connect(sigName: "notify::sync-rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-rate", ...args: any[]): void
    connect(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync-remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync-remaining-time", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-filesystems", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): ManagerProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_manager_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): ManagerProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_manager_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_manager_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): ManagerProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): ManagerProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_manager_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_manager_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_manager_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface ManagerSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Manager_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface ManagerSkeleton extends Gio.DBusInterface, Manager {

    // Class property signals of UDisks-2.0.UDisks.ManagerSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-filesystems", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-filesystems", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    getDescription(): string
    /**
     * Gets the icon.
     */
    getIcon(): Gio.Icon
    /**
     * Gets the symbolic icon.
     */
    getIconSymbolic(): Gio.Icon
    /**
     * Gets the media description.
     */
    getMediaDescription(): string
    /**
     * Gets the media icon.
     */
    getMediaIcon(): Gio.Icon
    /**
     * Gets the symbolic media icon.
     */
    getMediaIconSymbolic(): Gio.Icon
    /**
     * Gets the name.
     */
    getName(): string
    /**
     * Gets the #UDisksObject that `info` is for
     */
    getObject(): Object
    /**
     * Gets a one-line description.
     */
    getOneLiner(): string
    /**
     * Gets the sort-key for `info`. This can be used with g_strcmp0() to
     * sort objects.
     */
    getSortKey(): string

    // Class property signals of UDisks-2.0.UDisks.ObjectInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bus-type", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-destroy-notify", callback: (...args: any[]) => void): number
    on(sigName: "notify::get-proxy-type-destroy-notify", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::get-proxy-type-destroy-notify", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::get-proxy-type-destroy-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::get-proxy-type-destroy-notify", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::get-proxy-type-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::get-proxy-type-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::get-proxy-type-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::get-proxy-type-func", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-user-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::get-proxy-type-user-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::get-proxy-type-user-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::get-proxy-type-user-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::get-proxy-type-user-data", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name-owner", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): ObjectManagerClient

    // Overloads of newFinish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Finishes an operation started with udisks_object_manager_client_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_object_manager_client_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): ObjectManagerClient

    // Overloads of newForBusFinish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new_for_bus().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Like udisks_object_manager_client_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_object_manager_client_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): ObjectManagerClient

    // Overloads of newForBusSync

    /**
     * Like g_dbus_object_manager_client_new_sync() but takes a #GBusType instead
     * of a #GDBusConnection.
     * 
     * This is a synchronous failable constructor - the calling thread is
     * blocked until a reply is received. See g_dbus_object_manager_client_new_for_bus()
     * for the asynchronous version.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name).
     * @param objectPath The object path of the control object.
     * @param getProxyTypeFunc A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null): Gio.DBusObjectManagerClient
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): ObjectManagerClient

    // Overloads of newSync

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
     * @param objectPath The object path of the control object.
     * @param getProxyTypeFunc A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string, getProxyTypeFunc: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null): Gio.DBusObjectManagerClient
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusObjectManagerClientFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath The object path of the control object.
     * @param getProxyTypeFunc A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusObjectManagerClientFlags, name?: string, objectPath?: string, getProxyTypeFunc?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusObjectManagerClientFlags, name?: string, objectPath?: string, getProxyTypeFunc?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_object_manager_client_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_object_manager_client_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_object_manager_client_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusObjectManagerClientFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

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
     * @param busType A #GBusType.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name).
     * @param objectPath The object path of the control object.
     * @param getProxyTypeFunc A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusObjectManagerClientFlags, name?: string, objectPath?: string, getProxyTypeFunc?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusObjectManagerClientFlags, name?: string, objectPath?: string, getProxyTypeFunc?: Gio.DBusProxyTypeFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * A #GDBusProxyTypeFunc that maps `interface_name` to the generated #GDBusObjectProxy<!-- -->- and #GDBusProxy<!-- -->-derived types.
     * @param manager A #GDBusObjectManagerClient.
     * @param objectPath The object path of the remote object (unused).
     * @param interfaceName Interface name of the remote object or %NULL to get the object proxy #GType.
     * @param userData User data (unused).
     */
    static getProxyType(manager: Gio.DBusObjectManagerClient, objectPath: string, interfaceName: string | null, userData: object | null): GObject.GType
}

interface ObjectProxy_ConstructProps extends Gio.DBusObject_ConstructProps, Object_ConstructProps, Gio.DBusObjectProxy_ConstructProps {
}

interface ObjectProxy extends Gio.DBusObject, Object {

    // Class property signals of UDisks-2.0.UDisks.ObjectProxy

    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::block", callback: (...args: any[]) => void): number
    on(sigName: "notify::block", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::block", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::drive", callback: (...args: any[]) => void): number
    on(sigName: "notify::drive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drive", ...args: any[]): void
    connect(sigName: "notify::drive-ata", callback: (...args: any[]) => void): number
    on(sigName: "notify::drive-ata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drive-ata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drive-ata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drive-ata", ...args: any[]): void
    connect(sigName: "notify::encrypted", callback: (...args: any[]) => void): number
    on(sigName: "notify::encrypted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::encrypted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::encrypted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::encrypted", ...args: any[]): void
    connect(sigName: "notify::filesystem", callback: (...args: any[]) => void): number
    on(sigName: "notify::filesystem", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filesystem", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filesystem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filesystem", ...args: any[]): void
    connect(sigName: "notify::job", callback: (...args: any[]) => void): number
    on(sigName: "notify::job", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::job", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::job", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::job", ...args: any[]): void
    connect(sigName: "notify::loop", callback: (...args: any[]) => void): number
    on(sigName: "notify::loop", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::loop", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::loop", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::mdraid", callback: (...args: any[]) => void): number
    on(sigName: "notify::mdraid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mdraid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mdraid", ...args: any[]): void
    connect(sigName: "notify::partition", callback: (...args: any[]) => void): number
    on(sigName: "notify::partition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::partition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::partition", ...args: any[]): void
    connect(sigName: "notify::partition-table", callback: (...args: any[]) => void): number
    on(sigName: "notify::partition-table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::partition-table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::partition-table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::partition-table", ...args: any[]): void
    connect(sigName: "notify::swapspace", callback: (...args: any[]) => void): number
    on(sigName: "notify::swapspace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swapspace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swapspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swapspace", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
     * @param objectPath An object path.
     */
    constructor(connection: Gio.DBusConnection, objectPath: string) 
    /**
     * Creates a new proxy object.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param objectPath An object path.
     */
    static new(connection: Gio.DBusConnection, objectPath: string): ObjectProxy

    // Overloads of new

    /**
     * Creates a new #GDBusObjectProxy for the given connection and
     * object path.
     * @constructor 
     * @param connection a #GDBusConnection
     * @param objectPath the object path
     */
    static new(connection: Gio.DBusConnection, objectPath: string): Gio.DBusObjectProxy
    _init(config?: ObjectProxy_ConstructProps): void
}

interface ObjectSkeleton_ConstructProps extends Gio.DBusObject_ConstructProps, Object_ConstructProps, Gio.DBusObjectSkeleton_ConstructProps {
}

interface ObjectSkeleton extends Gio.DBusObject, Object {

    // Owm methods of UDisks-2.0.UDisks.ObjectSkeleton

    /**
     * Sets the #UDisksBlock instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link> on `object`.
     * @param interface A #UDisksBlock or %NULL to clear the interface.
     */
    setBlock(interface: Block | null): void
    /**
     * Sets the #UDisksDrive instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link> on `object`.
     * @param interface A #UDisksDrive or %NULL to clear the interface.
     */
    setDrive(interface: Drive | null): void
    /**
     * Sets the #UDisksDriveAta instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link> on `object`.
     * @param interface A #UDisksDriveAta or %NULL to clear the interface.
     */
    setDriveAta(interface: DriveAta | null): void
    /**
     * Sets the #UDisksEncrypted instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link> on `object`.
     * @param interface A #UDisksEncrypted or %NULL to clear the interface.
     */
    setEncrypted(interface: Encrypted | null): void
    /**
     * Sets the #UDisksFilesystem instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link> on `object`.
     * @param interface A #UDisksFilesystem or %NULL to clear the interface.
     */
    setFilesystem(interface: Filesystem | null): void
    /**
     * Sets the #UDisksJob instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link> on `object`.
     * @param interface A #UDisksJob or %NULL to clear the interface.
     */
    setJob(interface: Job | null): void
    /**
     * Sets the #UDisksLoop instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link> on `object`.
     * @param interface A #UDisksLoop or %NULL to clear the interface.
     */
    setLoop(interface: Loop | null): void
    /**
     * Sets the #UDisksManager instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link> on `object`.
     * @param interface A #UDisksManager or %NULL to clear the interface.
     */
    setManager(interface: Manager | null): void
    /**
     * Sets the #UDisksMDRaid instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link> on `object`.
     * @param interface A #UDisksMDRaid or %NULL to clear the interface.
     */
    setMdraid(interface: MDRaid | null): void
    /**
     * Sets the #UDisksPartition instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link> on `object`.
     * @param interface A #UDisksPartition or %NULL to clear the interface.
     */
    setPartition(interface: Partition | null): void
    /**
     * Sets the #UDisksPartitionTable instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link> on `object`.
     * @param interface A #UDisksPartitionTable or %NULL to clear the interface.
     */
    setPartitionTable(interface: PartitionTable | null): void
    /**
     * Sets the #UDisksSwapspace instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link> on `object`.
     * @param interface A #UDisksSwapspace or %NULL to clear the interface.
     */
    setSwapspace(interface: Swapspace | null): void

    // Class property signals of UDisks-2.0.UDisks.ObjectSkeleton

    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::block", callback: (...args: any[]) => void): number
    on(sigName: "notify::block", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::block", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::block", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::drive", callback: (...args: any[]) => void): number
    on(sigName: "notify::drive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drive", ...args: any[]): void
    connect(sigName: "notify::drive-ata", callback: (...args: any[]) => void): number
    on(sigName: "notify::drive-ata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drive-ata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drive-ata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drive-ata", ...args: any[]): void
    connect(sigName: "notify::encrypted", callback: (...args: any[]) => void): number
    on(sigName: "notify::encrypted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::encrypted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::encrypted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::encrypted", ...args: any[]): void
    connect(sigName: "notify::filesystem", callback: (...args: any[]) => void): number
    on(sigName: "notify::filesystem", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filesystem", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filesystem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filesystem", ...args: any[]): void
    connect(sigName: "notify::job", callback: (...args: any[]) => void): number
    on(sigName: "notify::job", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::job", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::job", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::job", ...args: any[]): void
    connect(sigName: "notify::loop", callback: (...args: any[]) => void): number
    on(sigName: "notify::loop", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::loop", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::loop", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::mdraid", callback: (...args: any[]) => void): number
    on(sigName: "notify::mdraid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mdraid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mdraid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mdraid", ...args: any[]): void
    connect(sigName: "notify::partition", callback: (...args: any[]) => void): number
    on(sigName: "notify::partition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::partition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::partition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::partition", ...args: any[]): void
    connect(sigName: "notify::partition-table", callback: (...args: any[]) => void): number
    on(sigName: "notify::partition-table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::partition-table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::partition-table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::partition-table", ...args: any[]): void
    connect(sigName: "notify::swapspace", callback: (...args: any[]) => void): number
    on(sigName: "notify::swapspace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swapspace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swapspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swapspace", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
     * @param objectPath An object path.
     */
    constructor(objectPath: string) 
    /**
     * Creates a new skeleton object.
     * @constructor 
     * @param objectPath An object path.
     */
    static new(objectPath: string): ObjectSkeleton

    // Overloads of new

    /**
     * Creates a new #GDBusObjectSkeleton.
     * @constructor 
     * @param objectPath An object path.
     */
    static new(objectPath: string): Gio.DBusObjectSkeleton
    _init(config?: ObjectSkeleton_ConstructProps): void
}

interface PartitionProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Partition_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface PartitionProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Partition {

    // Class property signals of UDisks-2.0.UDisks.PartitionProxy

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::is-contained", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-contained", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-contained", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-contained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-contained", ...args: any[]): void
    connect(sigName: "notify::is-container", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-container", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::number", callback: (...args: any[]) => void): number
    on(sigName: "notify::number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::table", callback: (...args: any[]) => void): number
    on(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): PartitionProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_partition_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): PartitionProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_partition_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): PartitionProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): PartitionProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_partition_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_partition_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface PartitionSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Partition_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface PartitionSkeleton extends Gio.DBusInterface, Partition {

    // Class property signals of UDisks-2.0.UDisks.PartitionSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::is-contained", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-contained", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-contained", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-contained", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-contained", ...args: any[]): void
    connect(sigName: "notify::is-container", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-container", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-container", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::number", callback: (...args: any[]) => void): number
    on(sigName: "notify::number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::table", callback: (...args: any[]) => void): number
    on(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::table", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::table", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): PartitionTableProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_partition_table_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_table_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): PartitionTableProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_partition_table_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_partition_table_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): PartitionTableProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): PartitionTableProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_partition_table_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_partition_table_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_partition_table_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface PartitionTableSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, PartitionTable_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface PartitionTableSkeleton extends Gio.DBusInterface, PartitionTable {

    // Class property signals of UDisks-2.0.UDisks.PartitionTableSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): SwapspaceProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with udisks_swapspace_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_swapspace_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): SwapspaceProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like udisks_swapspace_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See udisks_swapspace_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): SwapspaceProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): SwapspaceProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like udisks_swapspace_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call udisks_swapspace_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See udisks_swapspace_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface SwapspaceSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, Swapspace_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface SwapspaceSkeleton extends Gio.DBusInterface, Swapspace {

    // Class property signals of UDisks-2.0.UDisks.SwapspaceSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    parentIface: GObject.TypeInterface
    handleAddConfigurationItem: (object: Block, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean
    handleFormat: (object: Block, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean
    handleGetSecretConfiguration: (object: Block, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleOpenForBackup: (object: Block, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant) => boolean
    handleOpenForBenchmark: (object: Block, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant) => boolean
    handleOpenForRestore: (object: Block, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argOptions: GLib.Variant) => boolean
    handleRemoveConfigurationItem: (object: Block, invocation: Gio.DBusMethodInvocation, argItem: GLib.Variant, argOptions: GLib.Variant) => boolean
    handleRescan: (object: Block, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleUpdateConfigurationItem: (object: Block, invocation: Gio.DBusMethodInvocation, argOldItem: GLib.Variant, argNewItem: GLib.Variant, argOptions: GLib.Variant) => boolean
    getConfiguration: (object: Block) => GLib.Variant
    getCryptoBackingDevice: (object: Block) => string
    getDevice: (object: Block) => string
    getDeviceNumber: (object: Block) => number
    getDrive: (object: Block) => string
    getHintAuto: (object: Block) => boolean
    getHintIconName: (object: Block) => string
    getHintIgnore: (object: Block) => boolean
    getHintName: (object: Block) => string
    getHintPartitionable: (object: Block) => boolean
    getHintSystem: (object: Block) => boolean
    getIdLabel: (object: Block) => string
    getIdType: (object: Block) => string
    getIdUsage: (object: Block) => string
    getIdUuid: (object: Block) => string
    getIdVersion: (object: Block) => string
    getPreferredDevice: (object: Block) => string
    getReadOnly: (object: Block) => boolean
    getSize: (object: Block) => number
    getSymlinks: (object: Block) => string[]
    getHintSymbolicIconName: (object: Block) => string
    getId: (object: Block) => string
    getMdraid: (object: Block) => string
    getMdraidMember: (object: Block) => string
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    handlePmGetState: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handlePmStandby: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handlePmWakeup: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSecurityEraseUnit: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSmartGetAttributes: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSmartSelftestAbort: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSmartSelftestStart: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean
    handleSmartUpdate: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    getAamEnabled: (object: DriveAta) => boolean
    getAamSupported: (object: DriveAta) => boolean
    getAamVendorRecommendedValue: (object: DriveAta) => number
    getApmEnabled: (object: DriveAta) => boolean
    getApmSupported: (object: DriveAta) => boolean
    getPmEnabled: (object: DriveAta) => boolean
    getPmSupported: (object: DriveAta) => boolean
    getSecurityEnhancedEraseUnitMinutes: (object: DriveAta) => number
    getSecurityEraseUnitMinutes: (object: DriveAta) => number
    getSecurityFrozen: (object: DriveAta) => boolean
    getSmartEnabled: (object: DriveAta) => boolean
    getSmartFailing: (object: DriveAta) => boolean
    getSmartNumAttributesFailedInThePast: (object: DriveAta) => number
    getSmartNumAttributesFailing: (object: DriveAta) => number
    getSmartNumBadSectors: (object: DriveAta) => number
    getSmartPowerOnSeconds: (object: DriveAta) => number
    getSmartSelftestPercentRemaining: (object: DriveAta) => number
    getSmartSelftestStatus: (object: DriveAta) => string
    getSmartSupported: (object: DriveAta) => boolean
    getSmartTemperature: (object: DriveAta) => number
    getSmartUpdated: (object: DriveAta) => number
    handleSmartSetEnabled: (object: DriveAta, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean
    getWriteCacheEnabled: (object: DriveAta) => boolean
    getWriteCacheSupported: (object: DriveAta) => boolean
    getReadLookaheadEnabled: (object: DriveAta) => boolean
    getReadLookaheadSupported: (object: DriveAta) => boolean
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleEject: (object: Drive, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSetConfiguration: (object: Drive, invocation: Gio.DBusMethodInvocation, argValue: GLib.Variant, argOptions: GLib.Variant) => boolean
    getConfiguration: (object: Drive) => GLib.Variant
    getConnectionBus: (object: Drive) => string
    getEjectable: (object: Drive) => boolean
    getId: (object: Drive) => string
    getMedia: (object: Drive) => string
    getMediaAvailable: (object: Drive) => boolean
    getMediaChangeDetected: (object: Drive) => boolean
    getMediaCompatibility: (object: Drive) => string[]
    getMediaRemovable: (object: Drive) => boolean
    getModel: (object: Drive) => string
    getOptical: (object: Drive) => boolean
    getOpticalBlank: (object: Drive) => boolean
    getOpticalNumAudioTracks: (object: Drive) => number
    getOpticalNumDataTracks: (object: Drive) => number
    getOpticalNumSessions: (object: Drive) => number
    getOpticalNumTracks: (object: Drive) => number
    getRemovable: (object: Drive) => boolean
    getRevision: (object: Drive) => string
    getRotationRate: (object: Drive) => number
    getSeat: (object: Drive) => string
    getSerial: (object: Drive) => string
    getSize: (object: Drive) => number
    getSortKey: (object: Drive) => string
    getTimeDetected: (object: Drive) => number
    getTimeMediaDetected: (object: Drive) => number
    getVendor: (object: Drive) => string
    getWwn: (object: Drive) => string
    handlePowerOff: (object: Drive, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    getCanPowerOff: (object: Drive) => boolean
    getSiblingId: (object: Drive) => string
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleChangePassphrase: (object: Encrypted, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argNewPassphrase: string, argOptions: GLib.Variant) => boolean
    handleLock: (object: Encrypted, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleUnlock: (object: Encrypted, invocation: Gio.DBusMethodInvocation, argPassphrase: string, argOptions: GLib.Variant) => boolean
    getChildConfiguration: (object: Encrypted) => GLib.Variant
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleMount: (object: Filesystem, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSetLabel: (object: Filesystem, invocation: Gio.DBusMethodInvocation, argLabel: string, argOptions: GLib.Variant) => boolean
    handleUnmount: (object: Filesystem, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    getMountPoints: (object: Filesystem) => string[]
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleCancel: (object: Job, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    getCancelable: (object: Job) => boolean
    getExpectedEndTime: (object: Job) => number
    getObjects: (object: Job) => string[]
    getOperation: (object: Job) => string
    getProgress: (object: Job) => number
    getProgressValid: (object: Job) => boolean
    getStartTime: (object: Job) => number
    getStartedByUid: (object: Job) => number
    completed: (object: Job, argSuccess: boolean, argMessage: string) => void
    getBytes: (object: Job) => number
    getRate: (object: Job) => number
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleDelete: (object: Loop, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSetAutoclear: (object: Loop, invocation: Gio.DBusMethodInvocation, argValue: boolean, argOptions: GLib.Variant) => boolean
    getAutoclear: (object: Loop) => boolean
    getBackingFile: (object: Loop) => string
    getSetupByUid: (object: Loop) => number
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleAddDevice: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean
    handleDelete: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleRemoveDevice: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argDevice: string, argOptions: GLib.Variant) => boolean
    handleRequestSyncAction: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argSyncAction: string, argOptions: GLib.Variant) => boolean
    handleSetBitmapLocation: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argValue: string, argOptions: GLib.Variant) => boolean
    handleStart: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleStop: (object: MDRaid, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    getActiveDevices: (object: MDRaid) => GLib.Variant
    getBitmapLocation: (object: MDRaid) => string
    getChildConfiguration: (object: MDRaid) => GLib.Variant
    getChunkSize: (object: MDRaid) => number
    getDegraded: (object: MDRaid) => number
    getLevel: (object: MDRaid) => string
    getName: (object: MDRaid) => string
    getNumDevices: (object: MDRaid) => number
    getRunning: (object: MDRaid) => boolean
    getSize: (object: MDRaid) => number
    getSyncAction: (object: MDRaid) => string
    getSyncCompleted: (object: MDRaid) => number
    getSyncRate: (object: MDRaid) => number
    getSyncRemainingTime: (object: MDRaid) => number
    getUuid: (object: MDRaid) => string
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleEnableModules: (object: Manager, invocation: Gio.DBusMethodInvocation, argEnable: boolean) => boolean
    handleLoopSetup: (object: Manager, invocation: Gio.DBusMethodInvocation, fdList: Gio.UnixFDList, argFd: GLib.Variant, argOptions: GLib.Variant) => boolean
    getSupportedFilesystems: (object: Manager) => string[]
    getVersion: (object: Manager) => string
    handleMdraidCreate: (object: Manager, invocation: Gio.DBusMethodInvocation, argBlocks: string, argLevel: string, argName: string, argChunk: number, argOptions: GLib.Variant) => boolean
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
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
    parentClass: Gio.DBusObjectManagerClientClass
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
    parentClass: Gio.DBusObjectProxyClass
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
    parentClass: Gio.DBusObjectSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleDelete: (object: Partition, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleSetFlags: (object: Partition, invocation: Gio.DBusMethodInvocation, argFlags: number, argOptions: GLib.Variant) => boolean
    handleSetName: (object: Partition, invocation: Gio.DBusMethodInvocation, argName: string, argOptions: GLib.Variant) => boolean
    handleSetType: (object: Partition, invocation: Gio.DBusMethodInvocation, argType: string, argOptions: GLib.Variant) => boolean
    getFlags: (object: Partition) => number
    getIsContained: (object: Partition) => boolean
    getIsContainer: (object: Partition) => boolean
    getName: (object: Partition) => string
    getNumber: (object: Partition) => number
    getOffset: (object: Partition) => number
    getSize: (object: Partition) => number
    getTable: (object: Partition) => string
    getType: (object: Partition) => string
    getUuid: (object: Partition) => string
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleCreatePartition: (object: PartitionTable, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant) => boolean
    handleCreatePartitionAndFormat: (object: PartitionTable, invocation: Gio.DBusMethodInvocation, argOffset: number, argSize: number, argType: string, argName: string, argOptions: GLib.Variant, argFormatType: string, argFormatOptions: GLib.Variant) => boolean
    getType: (object: PartitionTable) => string
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    tableType: string
    /**
     * A partition table sub-type.
     * @field 
     */
    tableSubtype: string
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
    parentIface: GObject.TypeInterface
    handleStart: (object: Swapspace, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    handleStop: (object: Swapspace, invocation: Gio.DBusMethodInvocation, argOptions: GLib.Variant) => boolean
    getActive: (object: Swapspace) => boolean
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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